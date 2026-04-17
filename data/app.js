let currentQuizData = null;
let currentIndex = 0;
let userAnswers = [];
let isAnswerChecked = false; 

// 1. 초기화: 사이트 접속 시 examListInfo 변수에서 시험 목록 생성
window.onload = function() {
    const select = document.getElementById('examSelect');
    select.innerHTML = '<option value="">풀이할 과목을 선택하세요</option>';
    
    if (typeof examListInfo !== 'undefined') {
        examListInfo.exams.forEach(exam => {
            const option = document.createElement('option');
            // 이제 복잡한 파일 경로 대신 데이터 변수명을 바로 값으로 씁니다
            option.value = exam.dataName; 
            option.textContent = `${exam.year}년 ${exam.semester}학기 ${exam.grade}학년 ${exam.subject} ${exam.examType}`;
            select.appendChild(option);
        });
    } else {
        document.getElementById('headerTitle').innerText = "데이터 연결 오류";
    }
};

// 2. 시험 시작 버튼 클릭 시
function startExam() {
    const select = document.getElementById('examSelect');
    const dataName = select.value;

    if (!dataName) {
        alert("목록에서 시험을 선택해주세요!");
        return;
    }

    // ★ HTML에서 이미 불러와진 변수를 그냥 바로 꺼내 씁니다. (에러 원천 차단)
    currentQuizData = window[dataName];

    if (!currentQuizData) {
        alert("데이터를 찾을 수 없습니다!\n파일이 UTF-8로 저장되었는지 다시 한번 확인해주세요.");
        return;
    }

    // 화면 전환
    document.getElementById('selectionScreen').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'flex';
    
    const info = currentQuizData.examInfo;
    document.getElementById('headerTitle').innerText = `${info.year}학년도 ${info.semester}학기 ${info.schoolName} ${info.subject}`;
    
    currentIndex = 0;
    userAnswers = [];
    renderQuestion();
}

// 3. 문제 화면 그리기
function renderQuestion() {
    isAnswerChecked = false;
    const q = currentQuizData.questions[currentIndex];
    
    const passageArea = document.getElementById('passageArea');
    if (q.linkedPassageId && currentQuizData.sharedPassages[q.linkedPassageId]) {
        document.getElementById('passageContent').innerHTML = currentQuizData.sharedPassages[q.linkedPassageId];
        passageArea.style.display = 'flex';
    } else {
        passageArea.style.display = 'none';
    }

    const inlineContainer = document.getElementById('inlinePassageContainer');
    if (q.passage) {
        inlineContainer.innerHTML = `<div class="inline-passage">${q.passage}</div>`;
        inlineContainer.style.display = 'block';
    } else {
        inlineContainer.style.display = 'none';
    }

    document.getElementById('questionTitle').innerHTML = `${q.questionNum}. ${q.questionText} <span style="font-size:14px; color:#666;">[${q.score}점]</span>`;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const label = document.createElement('label');
        label.className = 'option-label';
        label.innerHTML = `<input type="radio" name="opt" value="${idx}" onclick="checkAnswer(${idx})"> ${opt}`;
        optionsContainer.appendChild(label);
    });

    const expBox = document.getElementById('explanationBox');
    if (expBox) expBox.remove();

    const nextBtn = document.querySelector('.question-area .primary-btn');
    if (currentIndex === currentQuizData.questions.length - 1) {
        nextBtn.innerText = '마지막 문제 ❯';
    } else {
        nextBtn.innerText = '다음 문제 ❯';
    }
    nextBtn.style.backgroundColor = '#3498db'; 
}

// 4. 모바일 지문 접기 토글
function togglePassage() {
    const content = document.getElementById('passageContent');
    const btn = document.getElementById('togglePassageBtn');
    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        btn.innerText = '지문 접기 ▲';
    } else {
        content.classList.add('collapsed');
        btn.innerText = '지문 펴기 ▼';
    }
}

// 5. 선지 클릭 시 즉시 정답 확인
function checkAnswer(selectedVal) {
    if (isAnswerChecked) return; 
    isAnswerChecked = true;

    const q = currentQuizData.questions[currentIndex];
    const isCorrect = (selectedVal === q.correctAnswer);

    userAnswers.push({ qIndex: currentIndex, selected: selectedVal });

    document.querySelectorAll('input[name="opt"]').forEach(r => r.disabled = true);

    let expBox = document.createElement('div');
    expBox.id = 'explanationBox';
    expBox.className = 'explanation';
    expBox.style.marginTop = '20px';
    expBox.style.borderLeft = isCorrect ? '5px solid #27ae60' : '5px solid #e74c3c';

    if (isCorrect) {
        expBox.innerHTML = `<h3 style="color:#27ae60;">✅ 정답입니다!</h3><p style="margin-top:10px;"><strong>💡 해설:</strong><br>${q.explanation}</p>`;
    } else {
        const correctText = q.options[q.correctAnswer].split(' ')[0]; 
        expBox.innerHTML = `<h3 style="color:#e74c3c;">❌ 오답입니다. (정답: ${correctText})</h3><p style="margin-top:10px;"><strong>💡 해설:</strong><br>${q.explanation}</p>`;
    }

    document.querySelector('.question-area').insertBefore(expBox, document.querySelector('.btn-group'));

    const nextBtn = document.querySelector('.question-area .primary-btn');
    if (currentIndex === currentQuizData.questions.length - 1) {
        nextBtn.innerText = '최종 결과 보기 ❯';
        nextBtn.style.backgroundColor = '#27ae60'; 
    }
}

// 6. 다음 문제로 이동
function goNext() {
    if (!isAnswerChecked) {
        alert("정답을 먼저 선택해주세요!");
        return;
    }

    if (currentIndex === currentQuizData.questions.length - 1) {
        showResults();
    } else {
        currentIndex++;
        renderQuestion();
        document.querySelector('.question-area').scrollTop = 0; 
    }
}

// 7. 최종 채점 결과 및 오답 노트
function showResults() {
    document.getElementById('quizContainer').style.display = 'none';
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.style.display = 'block';

    let myScore = 0;
    let maxScore = 0;
    const reviewNotes = document.getElementById('reviewNotes');
    reviewNotes.innerHTML = '';

    currentQuizData.questions.forEach((q, i) => {
        maxScore += q.score;
        const uAns = userAnswers.find(ans => ans.qIndex === i).selected;
        const isCorrect = (uAns === q.correctAnswer);
        
        if (isCorrect) myScore += q.score;

        let cardHtml = `<div class="${isCorrect ? 'correct-card' : 'wrong-card'}">`;
        cardHtml += `<h3>${q.questionNum}번 ${isCorrect ? '✅ 정답' : '❌ 오답'} (${q.score}점)</h3>`;
        cardHtml += `<p style="margin-top:10px; font-weight:bold;">${q.questionText}</p>`;
        
        cardHtml += `<div class="ans-review">`;
        if(!isCorrect) {
            cardHtml += `<p class="my-ans">내 선택: ${q.options[uAns]}</p>`;
        }
        cardHtml += `<p class="real-ans">정답: ${q.options[q.correctAnswer]}</p>`;
        cardHtml += `</div>`;
        
        cardHtml += `<div class="explanation"><strong>💡 해설:</strong><br>${q.explanation}</div>`;
        cardHtml += `</div>`;

        reviewNotes.innerHTML += cardHtml;
    });

    document.getElementById('finalScoreText').innerText = `${myScore.toFixed(1)} / ${maxScore.toFixed(1)} 점`;
    window.scrollTo(0, 0);
}