let currentQuizData = null;
let currentIndex = 0;
let userAnswers = [];
let isAnswerChecked = false;

let lastExamResults = [];      // 이번 시험의 문항별 채점 결과 (필터링용)
let currentReviewFilter = 'all'; // 'all' | 'wrong'

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

// 7. 최종 채점 결과 및 오답 노트 (시험 직후 화면)
function showResults() {
    document.getElementById('quizContainer').style.display = 'none';
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
