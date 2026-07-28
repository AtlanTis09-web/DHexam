let currentQuizData = null;
let currentIndex = 0;
let userAnswers = [];
let isAnswerChecked = false;

let lastExamResults = [];      // 이번 시험의 문항별 채점 결과 (필터링용)
let currentReviewFilter = 'all'; // 'all' | 'wrong'

// 시험 선택 상태 (학년 → 과목 → 시험 칩 선택)
let selectedGrade = null;
let selectedSubject = null;
let selectedExamDataName = null;

// ★ 수식($...$) 렌더링 헬퍼 - 데이터 안의 LaTeX 문법을 실제 수식으로 그려줌
function renderMath(el) {
    if (typeof renderMathInElement === 'function' && el) {
        renderMathInElement(el, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false }
            ],
            throwOnError: false
        });
    }
}

// =====================================================
// 1. 시험 선택 화면: 학년 → 과목 → 시험 칩 선택
// =====================================================
window.onload = function() {
    if (typeof examListInfo === 'undefined') {
        document.getElementById('headerTitle').innerText = "데이터 연결 오류";
        return;
    }
    renderGradeChips();
};

function renderGradeChips() {
    const grades = [...new Set(examListInfo.exams.map(e => e.grade))].sort((a, b) => a - b);
    const wrap = document.getElementById('gradeChips');
    wrap.innerHTML = grades.map(g =>
        `<button type="button" class="chip" data-grade="${g}" onclick="selectGrade(${g})">${g}학년</button>`
    ).join('');
}

function selectGrade(grade) {
    selectedGrade = grade;
    selectedSubject = null;
    selectedExamDataName = null;

    document.querySelectorAll('#gradeChips .chip').forEach(btn => {
        btn.classList.toggle('chip-active', Number(btn.dataset.grade) === grade);
    });

    renderSubjectChips();
    renderExamList();
    updateStartButton();
}

function renderSubjectChips() {
    const wrap = document.getElementById('subjectChips');

    if (!selectedGrade) {
        wrap.innerHTML = '';
        wrap.classList.add('chip-group-disabled');
        return;
    }

    wrap.classList.remove('chip-group-disabled');
    const subjects = [...new Set(
        examListInfo.exams
            .filter(e => String(e.grade) === String(selectedGrade))
            .map(e => e.subject)
    )];

    wrap.innerHTML = subjects.map(s =>
        `<button type="button" class="chip" data-subject="${s}" onclick="selectSubject('${s}')">${s}</button>`
    ).join('');
}

function selectSubject(subject) {
    selectedSubject = subject;
    selectedExamDataName = null;

    document.querySelectorAll('#subjectChips .chip').forEach(btn => {
        btn.classList.toggle('chip-active', btn.dataset.subject === subject);
    });

    renderExamList();
    updateStartButton();
}

function renderExamList() {
    const wrap = document.getElementById('examList');

    if (!selectedGrade || !selectedSubject) {
        wrap.innerHTML = '<p class="exam-list-empty">학년과 과목을 먼저 선택하세요</p>';
        return;
    }

    const exams = examListInfo.exams.filter(e =>
        String(e.grade) === String(selectedGrade) && e.subject === selectedSubject
    );

    if (exams.length === 0) {
        wrap.innerHTML = '<p class="exam-list-empty">등록된 시험이 없습니다</p>';
        return;
    }

    wrap.innerHTML = exams.map(e =>
        `<button type="button" class="exam-item" data-dataname="${e.dataName}" onclick="selectExam('${e.dataName}')">${e.year}년 ${e.semester}학기 ${e.examType}</button>`
    ).join('');
}

function selectExam(dataName) {
    selectedExamDataName = dataName;
    document.querySelectorAll('#examList .exam-item').forEach(btn => {
        btn.classList.toggle('exam-item-active', btn.dataset.dataname === dataName);
    });
    updateStartButton();
}

function updateStartButton() {
    document.getElementById('startExamBtn').disabled = !selectedExamDataName;
}

// 2. 시험 시작 버튼 클릭 시
function startExam() {
    const dataName = selectedExamDataName;

    if (!dataName) {
        alert("학년, 과목, 시험을 모두 선택해주세요!");
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
    document.getElementById('penToolBar').style.display = 'flex';

    const info = currentQuizData.examInfo;
    document.getElementById('headerTitle').innerText = `${info.year}학년도 ${info.semester}학기 ${info.schoolName} ${info.subject}`;

    currentIndex = 0;
    userAnswers = [];
    savedDrawings = {};
    setMode('scroll');
    initDrawingSystem();
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
        renderMath(document.getElementById('passageContent'));
    } else {
        passageArea.style.display = 'none';
    }

    const inlineContainer = document.getElementById('inlinePassageContainer');
    if (q.passage) {
        inlineContainer.innerHTML = `<div class="inline-passage">${q.passage}</div>`;
        inlineContainer.style.display = 'block';
        renderMath(inlineContainer);
    } else {
        inlineContainer.style.display = 'none';
    }

    // questionText 안에 이미 "번호. ... [배점]"이 포함되어 있으므로 여기서 또 붙이지 않는다
    document.getElementById('questionTitle').innerHTML = q.questionText;
    renderMath(document.getElementById('questionTitle'));

    // ★ 표/그림이 있는 문항이면 이미지 표시
    const imageContainer = document.getElementById('imageContainer');
    const questionImage = document.getElementById('questionImage');
    if (q.imageUrl) {
        questionImage.src = q.imageUrl;
        imageContainer.style.display = 'block';
    } else {
        questionImage.removeAttribute('src');
        imageContainer.style.display = 'none';
    }

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const label = document.createElement('label');
        label.className = 'option-label';
        label.innerHTML = `<input type="radio" name="opt" value="${idx}" onclick="checkAnswer(${idx})"> ${opt}`;
        optionsContainer.appendChild(label);
    });
    renderMath(optionsContainer);

    const expBox = document.getElementById('explanationBox');
    if (expBox) expBox.remove();

    const prevBtn = document.getElementById('prevBtn');
    prevBtn.style.display = currentIndex > 0 ? 'block' : 'none';

    const nextBtn = document.querySelector('.question-area .primary-btn');
    if (currentIndex === currentQuizData.questions.length - 1) {
        nextBtn.innerText = '마지막 문제 ❯';
    } else {
        nextBtn.innerText = '다음 문제 ❯';
    }
    nextBtn.style.backgroundColor = '#3498db';

    // ★ 문제가 바뀌었으니 필기 캔버스도 새 크기로 맞추고, 이 문제에 저장된 필기가 있으면 복원
    resizeAllCanvases();
    restoreDrawings(currentIndex);
}

// 4. 모바일 지문 접기 토글 (펼치면 지문 높이가 바뀌므로 캔버스도 다시 맞춤)
function togglePassage() {
    const content = document.getElementById('passageContent');
    const btn = document.getElementById('togglePassageBtn');

    const beforeDataUrl = snapshotCanvas('passageCanvas');

    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        btn.innerText = '지문 접기 ▲';
    } else {
        content.classList.add('collapsed');
        btn.innerText = '지문 펴기 ▼';
    }

    // 높이가 바뀌었으니 캔버스를 새로 맞추고, 방금 그렸던 필기를 그대로 되살림
    requestAnimationFrame(() => {
        resizeCanvasById('passageCanvas');
        restoreCanvasFromDataUrl('passageCanvas', beforeDataUrl);
    });
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
    renderMath(expBox);

    const nextBtn = document.querySelector('.question-area .primary-btn');
    if (currentIndex === currentQuizData.questions.length - 1) {
        nextBtn.innerText = '최종 결과 보기 ❯';
        nextBtn.style.backgroundColor = '#27ae60';
    }
}

// 6. 다음/이전 문제로 이동 (이동 전, 지금 그려둔 필기를 저장)
function goNext() {
    if (!isAnswerChecked) {
        alert("정답을 먼저 선택해주세요!");
        return;
    }

    saveCurrentDrawings();

    if (currentIndex === currentQuizData.questions.length - 1) {
        showResults();
    } else {
        currentIndex++;
        renderQuestion();
        document.querySelector('.question-area').scrollTop = 0;
    }
}

function goPrev() {
    if (currentIndex === 0) return;
    saveCurrentDrawings();
    currentIndex--;
    renderQuestion();
    document.querySelector('.question-area').scrollTop = 0;
}

// 7. 최종 채점 결과 및 오답 노트 (시험 직후 화면)
function showResults() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('penToolBar').style.display = 'none';
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.style.display = 'block';

    let myScore = 0;
    let maxScore = 0;
    lastExamResults = [];

    currentQuizData.questions.forEach((q, i) => {
        maxScore += q.score;
        const uAns = userAnswers.find(ans => ans.qIndex === i).selected;
        const isCorrect = (uAns === q.correctAnswer);

        if (isCorrect) myScore += q.score;

        lastExamResults.push({ q, uAns, isCorrect });
    });

    document.getElementById('finalScoreText').innerText = `${myScore.toFixed(1)} / ${maxScore.toFixed(1)} 점`;

    // 이번 시험의 오답을 누적 오답노트(localStorage)에 저장
    saveWrongAnswersToHistory(lastExamResults);

    // 필터 초기화 후 전체 보기로 렌더링
    currentReviewFilter = 'all';
    updateFilterButtons();
    renderReviewNotes();

    window.scrollTo(0, 0);
}

// 7-1. 결과 화면 카드 렌더링 (필터에 따라 전체/오답만)
function renderReviewNotes() {
    const reviewNotes = document.getElementById('reviewNotes');
    reviewNotes.innerHTML = '';

    const listToShow = currentReviewFilter === 'wrong'
        ? lastExamResults.filter(r => !r.isCorrect)
        : lastExamResults;

    if (currentReviewFilter === 'wrong' && listToShow.length === 0) {
        reviewNotes.innerHTML = `<p style="text-align:center; padding:30px; color:#5c8d89; font-weight:bold;">🎉 틀린 문제가 없습니다!</p>`;
        return;
    }

    listToShow.forEach(({ q, uAns, isCorrect }) => {
        let cardHtml = `<div class="${isCorrect ? 'correct-card' : 'wrong-card'}">`;
        cardHtml += `<h3>${q.questionNum}번 ${isCorrect ? '✅ 정답' : '❌ 오답'} (${q.score}점)</h3>`;
        cardHtml += `<p style="margin-top:10px; font-weight:bold;">${q.questionText}</p>`;

        cardHtml += `<div class="ans-review">`;
        if (!isCorrect) {
            cardHtml += `<p class="my-ans">내 선택: ${q.options[uAns]}</p>`;
        }
        cardHtml += `<p class="real-ans">정답: ${q.options[q.correctAnswer]}</p>`;
        cardHtml += `</div>`;

        cardHtml += `<div class="explanation"><strong>💡 해설:</strong><br>${q.explanation}</div>`;
        cardHtml += `</div>`;

        reviewNotes.innerHTML += cardHtml;
    });
    renderMath(reviewNotes);
}

// 7-2. 필터 버튼 클릭
function setReviewFilter(mode) {
    currentReviewFilter = mode;
    updateFilterButtons();
    renderReviewNotes();
}

function updateFilterButtons() {
    const allBtn = document.getElementById('filterAllBtn');
    const wrongBtn = document.getElementById('filterWrongBtn');
    if (!allBtn || !wrongBtn) return;
    allBtn.classList.toggle('filter-active', currentReviewFilter === 'all');
    wrongBtn.classList.toggle('filter-active', currentReviewFilter === 'wrong');
}

// =====================================================
// 필기 시스템 (빨간펜 / 형광펜) - 문항마다 캔버스에 직접 필기
// =====================================================

let currentMode = 'scroll';       // 'scroll' | 'pen' | 'highlighter'
let isPointerDown = false;
let lastX = 0, lastY = 0;
let drawingHandlersAttached = false;

// 문항별 필기 임시 저장소 (이 세션 동안만 유지, 새로고침하면 초기화됨)
let savedDrawings = {}; // { [questionIndex]: { passage: dataURL|null, question: dataURL|null } }

function setMode(mode) {
    currentMode = mode;
    document.getElementById('quizContainer').classList.toggle('pen-mode-active', mode !== 'scroll');

    document.getElementById('modeScrollBtn').classList.toggle('active', mode === 'scroll');
    document.getElementById('modePenBtn').classList.toggle('active', mode === 'pen');
    document.getElementById('modeHighlighterBtn').classList.toggle('active', mode === 'highlighter');
}

function setupCanvasContext(canvas) {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    if (rect.width === 0 || rect.height === 0) return null;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    canvas._ctx = ctx;
    return ctx;
}

function resizeCanvasById(id) {
    const canvas = document.getElementById(id);
    if (canvas) setupCanvasContext(canvas);
}

function resizeAllCanvases() {
    resizeCanvasById('passageCanvas');
    resizeCanvasById('questionCanvas');
}

function getEventPos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
    const clientY = evt.touches ? evt.touches[0].clientY : evt.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
}

function attachDrawingHandlers(canvas) {
    const start = (e) => {
        if (currentMode === 'scroll' || !canvas._ctx) return;
        isPointerDown = true;
        const pos = getEventPos(canvas, e);
        lastX = pos.x;
        lastY = pos.y;
        e.preventDefault();
    };

    const move = (e) => {
        if (!isPointerDown || currentMode === 'scroll' || !canvas._ctx) return;
        const ctx = canvas._ctx;
        const pos = getEventPos(canvas, e);

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(pos.x, pos.y);

        if (currentMode === 'pen') {
            ctx.strokeStyle = '#B23A2E';
            ctx.lineWidth = 2.5;
            ctx.globalAlpha = 1;
        } else if (currentMode === 'highlighter') {
            ctx.strokeStyle = '#FFD34D';
            ctx.lineWidth = 16;
            ctx.globalAlpha = 0.55;
        }
        ctx.stroke();

        lastX = pos.x;
        lastY = pos.y;
        e.preventDefault();
    };

    const end = () => { isPointerDown = false; };

    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('mousemove', move);
    window.addEventListener('mouseup', end);

    canvas.addEventListener('touchstart', start, { passive: false });
    canvas.addEventListener('touchmove', move, { passive: false });
    canvas.addEventListener('touchend', end);
}

function initDrawingSystem() {
    resizeAllCanvases();

    if (drawingHandlersAttached) return; // 이벤트 리스너 중복 등록 방지
    const pCanvas = document.getElementById('passageCanvas');
    const qCanvas = document.getElementById('questionCanvas');
    if (pCanvas) attachDrawingHandlers(pCanvas);
    if (qCanvas) attachDrawingHandlers(qCanvas);

    window.addEventListener('resize', () => {
        resizeAllCanvases();
        restoreDrawings(currentIndex);
    });

    drawingHandlersAttached = true;
}

// "필기 지우기" 버튼: 지금 보고 있는 문제의 필기만 지움
function clearFullCanvas() {
    ['passageCanvas', 'questionCanvas'].forEach(id => {
        const canvas = document.getElementById(id);
        if (canvas && canvas._ctx) {
            canvas._ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    });
    delete savedDrawings[currentIndex];
}

function snapshotCanvas(id) {
    const canvas = document.getElementById(id);
    return canvas ? canvas.toDataURL() : null;
}

function restoreCanvasFromDataUrl(id, dataUrl) {
    if (!dataUrl) return;
    const canvas = document.getElementById(id);
    if (!canvas || !canvas._ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const img = new Image();
    img.onload = () => {
        canvas._ctx.drawImage(img, 0, 0, canvas.width / dpr, canvas.height / dpr);
    };
    img.src = dataUrl;
}

// 문제를 벗어나기 전, 지금까지 그린 필기를 문항 번호에 저장
function saveCurrentDrawings() {
    savedDrawings[currentIndex] = {
        passage: snapshotCanvas('passageCanvas'),
        question: snapshotCanvas('questionCanvas')
    };
}

// 문제로 돌아왔을 때, 저장해둔 필기를 다시 그려줌
function restoreDrawings(index) {
    const data = savedDrawings[index];
    if (!data) return;
    restoreCanvasFromDataUrl('passageCanvas', data.passage);
    restoreCanvasFromDataUrl('questionCanvas', data.question);
}

// =====================================================
// 누적 오답노트 (여러 시험에 걸쳐 localStorage에 저장)
// =====================================================

const WRONG_HISTORY_KEY = 'wrongAnswerHistory';

// exam_list.js에서 한글 과목명을 찾아온다 (examInfo.subject는 영문 코드이므로)
function getSubjectDisplayName(examId, fallback) {
    if (typeof examListInfo === 'undefined') return fallback;
    const match = examListInfo.exams.find(e => e.dataName === ('exam_' + examId));
    return match ? match.subject : fallback;
}

function loadWrongHistory() {
    try {
        return JSON.parse(localStorage.getItem(WRONG_HISTORY_KEY) || '[]');
    } catch (e) {
        return [];
    }
}

function saveWrongAnswersToHistory(results) {
    const info = currentQuizData.examInfo;
    const subjectDisplay = getSubjectDisplayName(info.examId, info.subject);

    let history = loadWrongHistory();

    // 같은 시험(examId) 재응시 시, 이전 기록은 지우고 최신 결과로 교체
    history = history.filter(item => item.examId !== info.examId);

    results.filter(r => !r.isCorrect).forEach(({ q, uAns }) => {
        history.push({
            examId: info.examId,
            year: info.year,
            semester: info.semester,
            grade: info.grade,
            examType: info.examType,
            subject: subjectDisplay,
            questionNum: q.questionNum,
            questionText: q.questionText,
            myAnswerText: q.options[uAns],
            correctAnswerText: q.options[q.correctAnswer],
            explanation: q.explanation,
            score: q.score,
            date: new Date().toISOString()
        });
    });

    localStorage.setItem(WRONG_HISTORY_KEY, JSON.stringify(history));
}

// 메인 화면 "전체 오답노트 보기" 버튼
function showWrongNoteHistory() {
    document.getElementById('selectionScreen').style.display = 'none';
    document.getElementById('penToolBar').style.display = 'none';
    document.getElementById('wrongNoteContainer').style.display = 'flex';
    populateWrongNoteSubjectFilter();
    renderWrongNoteHistory();
}

function populateWrongNoteSubjectFilter() {
    const history = loadWrongHistory();
    const subjects = [...new Set(history.map(h => h.subject))];
    const sel = document.getElementById('wrongNoteSubjectFilter');
    const prevVal = sel.value || 'all';
    sel.innerHTML = '<option value="all">전체 과목</option>' +
        subjects.map(s => `<option value="${s}">${s}</option>`).join('');
    if ([...sel.options].some(o => o.value === prevVal)) {
        sel.value = prevVal;
    }
}

function renderWrongNoteHistory() {
    const history = loadWrongHistory();
    const filterVal = document.getElementById('wrongNoteSubjectFilter').value;
    const filtered = (filterVal === 'all') ? history : history.filter(h => h.subject === filterVal);

    document.getElementById('wrongNoteCount').innerText = `누적 오답 ${filtered.length}개`;

    const listEl = document.getElementById('wrongNoteList');

    if (filtered.length === 0) {
        listEl.innerHTML = `<p style="text-align:center; padding:30px; color:#999;">저장된 오답이 없습니다. 시험을 풀면 여기에 자동으로 쌓여요.</p>`;
        return;
    }

    // 최신 시험 순으로 정렬
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    listEl.innerHTML = filtered.map(item => `
        <div class="wrong-card">
            <h3>${item.year}년 ${item.semester}학기 ${item.subject} ${item.examType} · ${item.questionNum}번 (${item.score}점)</h3>
            <p style="margin-top:10px; font-weight:bold;">${item.questionText}</p>
            <div class="ans-review">
                <p class="my-ans">내 선택: ${item.myAnswerText}</p>
                <p class="real-ans">정답: ${item.correctAnswerText}</p>
            </div>
            <div class="explanation"><strong>💡 해설:</strong><br>${item.explanation}</div>
        </div>
    `).join('');
    renderMath(listEl);
}

function clearWrongHistory() {
    if (confirm('누적된 오답노트를 전부 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.')) {
        localStorage.removeItem(WRONG_HISTORY_KEY);
        populateWrongNoteSubjectFilter();
        renderWrongNoteHistory();
    }
}

function backToSelectionFromWrongNote() {
    document.getElementById('wrongNoteContainer').style.display = 'none';
    document.getElementById('selectionScreen').style.display = 'flex';
}
