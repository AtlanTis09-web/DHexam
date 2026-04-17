let currentQuizData = null;
let currentIndex = 0;
let userAnswers = [];
let isAnswerChecked = false; 

let wrongQuestionsQueue = []; 
let isRetryMode = false;

// 필기(Canvas) 및 저장 기능을 위한 변수
let isPenMode = false;
let drawings = {}; // 예: { '2024_1_mid_korean_1': { passage: 'data...', question: 'data...' } }
let canvasPassage, ctxPassage, canvasQuestion, ctxQuestion;
let paintCanvas, paintCtx; // 수학 하단 연습장용

function safeText(text) {
    if (!text) return "";
    return text.replace(/<보기>/g, '&lt;보기&gt;').replace(/<보 기>/g, '&lt;보 기&gt;');
}

window.onload = function() {
    initAllCanvases();
    
    // LocalStorage에서 기존 필기 데이터 불러오기
    const savedDrawings = localStorage.getItem('master_drawings');
    if (savedDrawings) {
        drawings = JSON.parse(savedDrawings);
    }

    const gradeSelect = document.getElementById('gradeSelect');
    if (typeof examListInfo !== 'undefined') {
        const grades = [...new Set(examListInfo.exams.map(exam => exam.grade))].sort();
        grades.forEach(grade => {
            const option = document.createElement('option');
            option.value = grade; option.textContent = `${grade}학년`;
            gradeSelect.appendChild(option);
        });
    } else {
        document.getElementById('headerTitle').innerText = "목록 데이터 오류";
    }
};

function updateSubjects() {
    const grade = document.getElementById('gradeSelect').value;
    const subjectSelect = document.getElementById('subjectSelect');
    const examSelect = document.getElementById('examSelect');
    
    subjectSelect.innerHTML = '<option value="">2. 과목을 선택하세요</option>';
    examSelect.innerHTML = '<option value="">3. 시험을 선택하세요</option>';
    examSelect.disabled = true;

    if (!grade) { subjectSelect.disabled = true; return; }

    const subjects = [...new Set(examListInfo.exams.filter(exam => String(exam.grade) === String(grade)).map(exam => exam.subject))].sort();
    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject; option.textContent = subject;
        subjectSelect.appendChild(option);
    });
    subjectSelect.disabled = false; 
}

function updateExams() {
    const grade = document.getElementById('gradeSelect').value;
    const subject = document.getElementById('subjectSelect').value;
    const examSelect = document.getElementById('examSelect');
    
    examSelect.innerHTML = '<option value="">3. 시험을 선택하세요</option>';
    if (!subject) { examSelect.disabled = true; return; }

    let filteredExams = examListInfo.exams.filter(exam => String(exam.grade) === String(grade) && exam.subject === subject);
    filteredExams.sort((a, b) => b.year - a.year || b.semester - a.semester);

    filteredExams.forEach(exam => {
        const option = document.createElement('option');
        option.value = exam.dataName; 
        option.textContent = `${exam.year}년 ${exam.semester}학기 ${exam.examType}`;
        examSelect.appendChild(option);
    });
    examSelect.disabled = false; 
}

function startExam() {
    const dataName = document.getElementById('examSelect').value;
    if (!dataName) { alert("시험을 최종적으로 선택해주세요!"); return; }

    currentQuizData = window[dataName];
    if (!currentQuizData) { alert("데이터를 찾을 수 없습니다."); return; }

    isRetryMode = false;
    
    // 시험 시작 시 상단 필기 툴바 보이기
    document.getElementById('penToolBar').style.display = 'flex';
    initExamUI();
}

function initExamUI() {
    document.getElementById('selectionScreen').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'flex';
    
    const info = currentQuizData.examInfo;
    const fullExamTitle = `${info.year}학년도 ${info.semester}학기 ${info.subject} ${info.examType}`;
    document.getElementById('headerTitle').innerText = isRetryMode ? `🔥 [오답 복습] ${fullExamTitle}` : fullExamTitle;
    
    currentIndex = 0;
    if (!isRetryMode) { userAnswers = []; }
    renderQuestion();
}

function renderQuestion() {
    isAnswerChecked = false;
    clearScratchCanvas(); // 하단 수학 연습장은 항상 새 문제마다 지우기
    
    const q = isRetryMode ? wrongQuestionsQueue[currentIndex] : currentQuizData.questions[currentIndex];
    
    const passageArea = document.getElementById('passageArea');
    if (q.linkedPassageId && currentQuizData.sharedPassages[q.linkedPassageId]) {
        document.getElementById('passageContent').innerHTML = safeText(currentQuizData.sharedPassages[q.linkedPassageId]);
        passageArea.style.display = 'flex';
    } else {
        passageArea.style.display = 'none';
    }

    const imgContainer = document.getElementById('imageContainer');
    if (q.imageUrl) {
        document.getElementById('questionImage').src = q.imageUrl;
        imgContainer.style.display = 'block';
    } else {
        imgContainer.style.display = 'none';
    }

    document.getElementById('questionTitle').innerHTML = `${q.questionNum}. ${safeText(q.questionText)} <span style="font-size:14px; color:#666; font-weight:normal;">[${q.score}점]</span>`;
    
    const inlineContainer = document.getElementById('inlinePassageContainer');
    if (q.passage) {
        inlineContainer.innerHTML = `<div class="inline-passage">${safeText(q.passage)}</div>`;
        inlineContainer.style.display = 'block';
    } else {
        inlineContainer.style.display = 'none';
    }

    const optContainer = document.getElementById('optionsContainer');
    const subContainer = document.getElementById('subjectiveContainer');
    const subInput = document.getElementById('subjectiveInput');
    
    if (q.options && q.options.length > 0) {
        optContainer.style.display = 'block';
        subContainer.style.display = 'none';
        optContainer.innerHTML = '';
        q.options.forEach((opt, idx) => {
            const label = document.createElement('label');
            label.className = 'option-label';
            label.innerHTML = `<input type="radio" name="opt" value="${idx}" onclick="checkAnswer(${idx})"> ${safeText(opt)}`;
            optContainer.appendChild(label);
        });
    } else {
        optContainer.style.display = 'none';
        subContainer.style.display = 'block';
        subInput.value = '';
        subInput.disabled = false;
        subInput.onkeypress = function(e) { if(e.key === 'Enter') checkSubjective(); };
    }

    // 수학 과목인지 판별해서 하단 연습장 띄우기
    const drawingArea = document.getElementById('drawingArea');
    if (drawingArea) {
        if (currentQuizData.examInfo.subject.includes("수학")) {
            drawingArea.style.display = 'block';
        } else {
            drawingArea.style.display = 'none';
        }
    }

    if (document.getElementById('explanationBox')) document.getElementById('explanationBox').remove();
    
    const nextBtn = document.querySelector('.question-area .primary-btn');
    const totalCount = isRetryMode ? wrongQuestionsQueue.length : currentQuizData.questions.length;
    nextBtn.innerText = (currentIndex === totalCount - 1) ? '결과 보기 ❯' : '다음 문제 ❯';
    nextBtn.style.backgroundColor = '#5c8d89';

    // 화면 렌더링이 끝난 후 투명 캔버스 크기 조절 및 저장된 필기 불러오기
    setTimeout(() => {
        resizeAllCanvases();
        loadCurrentDrawings();
    }, 100);
}

// ==========================================
// ★ 필기(Canvas) 및 저장 로직 모음
// ==========================================
function initAllCanvases() {
    canvasPassage = document.getElementById('passageCanvas');
    ctxPassage = canvasPassage.getContext('2d');
    canvasQuestion = document.getElementById('questionCanvas');
    ctxQuestion = canvasQuestion.getContext('2d');
    
    paintCanvas = document.getElementById('paintCanvas');
    paintCtx = paintCanvas.getContext('2d');

    // 지문, 문제 영역은 '펜 모드'일 때만 그려지도록 설정
    setupDrawing(canvasPassage, ctxPassage, true);
    setupDrawing(canvasQuestion, ctxQuestion, true);
    
    // 하단 수학 연습장은 모드 상관없이 항상 그려지도록 설정
    setupDrawing(paintCanvas, paintCtx, false);
}

function setupDrawing(canvas, ctx, requirePenMode = true) {
    let drawing = false;

    const start = (e) => { 
        if (requirePenMode && !isPenMode) return; // 이동 모드면 무시
        drawing = true; 
        draw(e); 
        if (requirePenMode) e.preventDefault(); // 펜 모드일 때 스크롤 방지
    };
    const end = (e) => { 
        if (!drawing) return;
        drawing = false; 
        ctx.beginPath(); 
        if (requirePenMode) {
            saveCurrentDrawings(); // 펜을 뗄 때마다 자동 저장
        }
    };
    const draw = (e) => {
        if (!drawing || (requirePenMode && !isPenMode)) return;
        if (requirePenMode) e.preventDefault();
        
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        // 지문 위 펜 색상은 빨간색, 수학 하단 연습장은 짙은 남색
        ctx.strokeStyle = requirePenMode ? '#e74c3c' : '#2c3e50'; 

        const rect = canvas.getBoundingClientRect();
        const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
        const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    };

    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', end);
    canvas.addEventListener('mouseleave', end);

    canvas.addEventListener('touchstart', start, {passive: false});
    canvas.addEventListener('touchmove', draw, {passive: false});
    canvas.addEventListener('touchend', end);
}

// 펜 모드 켜고 끄기
function togglePenMode() {
    isPenMode = !isPenMode;
    const btn = document.getElementById('modeToggleBtn');
    if (isPenMode) {
        btn.innerText = "✏️ 펜 모드 (현재 필기중)";
        btn.classList.add('active');
        document.body.classList.add('pen-mode-active');
    } else {
        btn.innerText = "🖐️ 이동 모드 (스크롤)";
        btn.classList.remove('active');
        document.body.classList.remove('pen-mode-active');
    }
}

// 현재 문제의 필기 저장하기
function saveCurrentDrawings() {
    if (!currentQuizData) return;
    const q = isRetryMode ? wrongQuestionsQueue[currentIndex] : currentQuizData.questions[currentIndex];
    // 예: "2024_1_mid_science_1" 처럼 고유 키 생성
    const qKey = currentQuizData.examInfo.examId + "_" + q.questionNum;
    
    drawings[qKey] = {
        passage: canvasPassage.toDataURL(),
        question: canvasQuestion.toDataURL()
    };
    localStorage.setItem('master_drawings', JSON.stringify(drawings));
}

// 현재 문제의 필기 불러오기
function loadCurrentDrawings() {
    const q = isRetryMode ? wrongQuestionsQueue[currentIndex] : currentQuizData.questions[currentIndex];
    const qKey = currentQuizData.examInfo.examId + "_" + q.questionNum;
    
    // 일단 화면을 깨끗하게 지우기
    ctxPassage.clearRect(0, 0, canvasPassage.width, canvasPassage.height);
    ctxQuestion.clearRect(0, 0, canvasQuestion.width, canvasQuestion.height);
    
    // 저장된 이미지가 있으면 그리기
    if (drawings[qKey]) {
        if (drawings[qKey].passage) {
            const imgP = new Image();
            imgP.onload = () => ctxPassage.drawImage(imgP, 0, 0);
            imgP.src = drawings[qKey].passage;
        }
        if (drawings[qKey].question) {
            const imgQ = new Image();
            imgQ.onload = () => ctxQuestion.drawImage(imgQ, 0, 0);
            imgQ.src = drawings[qKey].question;
        }
    }
}

// 투명 레이어 필기 싹 지우기 버튼
function clearFullCanvas() {
    if (!confirm("이 문제에 작성한 펜 필기를 모두 지울까요?")) return;
    ctxPassage.clearRect(0, 0, canvasPassage.width, canvasPassage.height);
    ctxQuestion.clearRect(0, 0, canvasQuestion.width, canvasQuestion.height);
    saveCurrentDrawings(); // 지운 상태도 저장
}

// 수학 연습장 지우기
function clearScratchCanvas() { 
    if(paintCtx && paintCanvas) {
        paintCtx.clearRect(0, 0, paintCanvas.width, paintCanvas.height); 
    }
}

// 화면이나 지문이 접힐 때 캔버스 크기도 맞춤
function resizeAllCanvases() {
    if(canvasPassage && canvasPassage.parentElement) {
        canvasPassage.width = canvasPassage.parentElement.clientWidth;
        canvasPassage.height = canvasPassage.parentElement.scrollHeight;
    }
    if(canvasQuestion && canvasQuestion.parentElement) {
        canvasQuestion.width = canvasQuestion.parentElement.clientWidth;
        canvasQuestion.height = canvasQuestion.parentElement.scrollHeight;
    }
    if(paintCanvas && paintCanvas.parentElement) {
        paintCanvas.width = paintCanvas.parentElement.clientWidth;
    }
}

window.addEventListener('resize', resizeAllCanvases);

// ==========================================
// 채점 및 결과 확인 로직
// ==========================================
function checkAnswer(selectedVal) {
    if (isAnswerChecked) return;
    isAnswerChecked = true;

    const q = isRetryMode ? wrongQuestionsQueue[currentIndex] : currentQuizData.questions[currentIndex];
    const isCorrect = (selectedVal === q.correctAnswer);
    
    if (!isRetryMode) {
        userAnswers.push({ qIndex: currentIndex, selected: selectedVal, correct: isCorrect });
    }

    document.querySelectorAll('input[name="opt"]').forEach(r => r.disabled = true);
    const correctLabel = q.options[q.correctAnswer].split(' ')[0]; 
    showFeedback(isCorrect, q.explanation, correctLabel);
}

function checkSubjective() {
    if (isAnswerChecked) return;
    const inputVal = document.getElementById('subjectiveInput').value.trim();
    if (!inputVal) { alert("답을 입력해주세요!"); return; }
    
    isAnswerChecked = true;
    const q = isRetryMode ? wrongQuestionsQueue[currentIndex] : currentQuizData.questions[currentIndex];
    const isCorrect = (inputVal.replace(/\s/g, "") === String(q.correctAnswer).replace(/\s/g, ""));
    
    if (!isRetryMode) {
        userAnswers.push({ qIndex: currentIndex, selected: inputVal, correct: isCorrect });
    }

    document.getElementById('subjectiveInput').disabled = true;
    showFeedback(isCorrect, q.explanation, q.correctAnswer);
}

function showFeedback(isCorrect, explanation, realAns) {
    let expBox = document.createElement('div');
    expBox.id = 'explanationBox';
    expBox.className = 'explanation';
    expBox.style.marginTop = '20px';
    expBox.style.borderLeft = isCorrect ? '5px solid #27ae60' : '5px solid #e74c3c';
    
    let resultTitle = isCorrect ? '<h3 style="color:#27ae60;">✅ 정답입니다!</h3>' : `<h3 style="color:#e74c3c;">❌ 오답입니다. (정답: ${realAns})</h3>`;
    
    expBox.innerHTML = `
        ${resultTitle}
        <p style="margin-top:10px;"><strong>💡 해설:</strong><br>${safeText(explanation)}</p>
    `;
    
    document.querySelector('.question-area').insertBefore(expBox, document.querySelector('.btn-group'));
    
    if (isCorrect) {
        document.querySelector('.question-area .primary-btn').style.backgroundColor = '#27ae60';
    }
    // 해설이 추가되어 화면이 길어졌으므로 캔버스 크기 재조정
    setTimeout(resizeAllCanvases, 50); 
}

function goNext() {
    const q = isRetryMode ? wrongQuestionsQueue[currentIndex] : currentQuizData.questions[currentIndex];
    
    if (!isAnswerChecked && (!q.options || q.options.length === 0)) {
        checkSubjective(); return;
    }
    if (!isAnswerChecked) { alert("답을 선택하거나 입력해주세요!"); return; }
    
    const totalCount = isRetryMode ? wrongQuestionsQueue.length : currentQuizData.questions.length;
    
    if (currentIndex === totalCount - 1) { 
        showResults(); 
    } else { 
        currentIndex++; 
        renderQuestion(); 
        document.querySelector('.question-area').scrollTop = 0; 
    }
}

function showResults() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('penToolBar').style.display = 'none';
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.style.display = 'block';

    let myScore = 0;
    let maxScore = 0;
    
    if (!isRetryMode) {
        wrongQuestionsQueue = [];
        currentQuizData.questions.forEach((q, i) => {
            maxScore += q.score;
            const ans = userAnswers.find(a => a.qIndex === i);
            if (ans && ans.correct) {
                myScore += q.score;
            } else {
                wrongQuestionsQueue.push(q);
            }
        });
    }

    const reviewNotes = document.getElementById('reviewNotes');
    reviewNotes.innerHTML = '';

    if (wrongQuestionsQueue.length > 0) {
        reviewNotes.innerHTML = `
            <div style="text-align:center; padding:20px; background:#fff3f3; border-radius:10px; margin-bottom:20px;">
                <p style="font-size:18px; color:#333;">아직 정복하지 못한 문제가 <b>${wrongQuestionsQueue.length}개</b> 있습니다!</p>
                <button class="primary-btn" onclick="startWrongRetry()" style="margin-top:15px; background-color:#e74c3c;">🔥 틀린 문제 다시 풀기</button>
            </div>
            <h3 style="margin-top:30px; margin-bottom:15px; border-bottom:2px solid #ccc; padding-bottom:5px; color:#444;">상세 오답 노트</h3>
        `;
        
        wrongQuestionsQueue.forEach((q) => {
            const ansObj = userAnswers.find(a => a.qIndex === currentQuizData.questions.indexOf(q));
            let myAnsText = "선택/입력 안 함";
            let realAnsText = q.correctAnswer;
            
            if (ansObj && ansObj.selected !== undefined) {
                if (q.options && q.options.length > 0) {
                    myAnsText = q.options[ansObj.selected]; 
                    realAnsText = q.options[q.correctAnswer];
                } else {
                    myAnsText = ansObj.selected; 
                }
            }

            let cardHtml = `<div class="wrong-card" style="margin-bottom:20px; border:1px solid #ef9a9a; padding:20px; border-radius:12px; background:#ffebee; box-shadow:0 2px 8px rgba(0,0,0,0.05);">`;
            cardHtml += `<h3 style="color:#e74c3c; margin-bottom:10px;">${q.questionNum}번 ❌ 오답 (${q.score}점)</h3>`;
            cardHtml += `<p style="margin:10px 0; font-weight:500; font-size:16px;">${safeText(q.questionText)}</p>`;
            
            if (q.imageUrl) {
                cardHtml += `<div style="text-align:center; margin:15px 0;"><img src="${q.imageUrl}" style="max-width:100%; border-radius:5px; border:1px solid #ddd;"></div>`;
            }
            
            cardHtml += `<div class="ans-review" style="font-size:15px; margin-bottom:15px; padding-top:10px; border-top:1px dashed #ffcdd2;">`;
            cardHtml += `<p class="my-ans" style="color:#c0392b; margin-bottom:5px;">내 선택: ${safeText(myAnsText)}</p>`;
            cardHtml += `<p class="real-ans" style="color:#27ae60; font-weight:bold;">정답: ${safeText(realAnsText)}</p>`;
            cardHtml += `</div>`;
            cardHtml += `<div class="explanation" style="background:#fff; padding:15px; border-radius:8px; font-size:14px; border:1px solid #ffcdd2;"><strong>💡 해설:</strong><br>${safeText(q.explanation)}</div>`;
            cardHtml += `</div>`;

            reviewNotes.innerHTML += cardHtml;
        });

    } else {
        reviewNotes.innerHTML = `
            <div style="text-align:center; padding:30px; background:#e8f5e9; border-radius:12px; margin-bottom:20px; border:1px solid #a5d6a7;">
                <h2 style="color:#27ae60;">🎉 만점입니다! 완벽하게 마스터하셨습니다!</h2>
            </div>
        `;
    }

    if (!isRetryMode) {
        document.getElementById('finalScoreText').innerText = `${myScore.toFixed(1)} / ${maxScore.toFixed(1)} 점`;
    } else {
        document.getElementById('finalScoreText').innerText = `오답 복습 완료!`;
    }
    
    window.scrollTo(0, 0);
}

function startWrongRetry() {
    isRetryMode = true;
    initExamUI();
    document.getElementById('penToolBar').style.display = 'flex';
}

function togglePassage() {
    const content = document.getElementById('passageContent');
    content.classList.toggle('collapsed');
    document.getElementById('togglePassageBtn').innerText = content.classList.contains('collapsed') ? "지문 펴기 ▼" : "지문 접기 ▲";
    setTimeout(resizeAllCanvases, 350); // 접고 펴는 애니메이션(0.3s) 후 캔버스 크기 재조정
}