var exam_2024_2_fin_math = {
  examInfo: {
    examId: "2024_2_fin_math",
    schoolName: "동대전고등학교",
    year: 2024,
    semester: 2,
    grade: 1,
    examType: "기말고사",
    subject: "math"
  },
  sharedPassages: {},
  questions: [
    {
      questionNum: 1,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "1. 유리함수 $y = \\frac{2x+3}{x+1}$의 그래프의 점근선의 방정식은? [3.6점]",
      passage: null,
      options: [
        "① $x = -1, y = -3$",
        "② $x = -1, y = -2$",
        "③ $x = -1, y = 2$",
        "④ $x = 1, y = -2$",
        "⑤ $x = 1, y = 2$"
      ],
      correctAnswer: 2,
      explanation: "유리함수 $y = \\frac{2x+3}{x+1}$을 표준형으로 고치면 $y = \\frac{2(x+1)+1}{x+1} = \\frac{1}{x+1} + 2$가 됩니다. 따라서 이 그래프는 $y = \\frac{1}{x}$의 그래프를 $x$축 방향으로 $-1$만큼, $y$축 방향으로 $2$만큼 평행이동한 것입니다. 그러므로 점근선의 방정식은 분모가 $0$이 되는 $x = -1$과, 상수항에 해당하는 $y = 2$입니다."
    },
    {
      questionNum: 2,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "2. 서로 다른 8가지 종류의 채소 반찬 중 비빔밥에 넣을 5가지를 고르는 경우의 수는? [3.6점]",
      passage: null,
      options: [
        "① 40",
        "② 44",
        "③ 48",
        "④ 52",
        "⑤ 56"
      ],
      correctAnswer: 4,
      explanation: "순서를 고려하지 않고 서로 다른 8개 중에서 5개를 선택하는 조합의 수와 같습니다. 식으로는 $_8C_5$이며, 조합의 성질에 의해 $_8C_5 = _8C_3$으로 계산할 수 있습니다. $_8C_3 = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$이므로 정답은 56가지입니다."
    },
    {
      questionNum: 3,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "3. $_5P_2 + _6C_4$의 값은? [3.7점]",
      passage: null,
      options: [
        "① 35",
        "② 38",
        "③ 41",
        "④ 44",
        "⑤ 47"
      ],
      correctAnswer: 0,
      explanation: "먼저 순열 부분인 $_5P_2 = 5 \\times 4 = 20$입니다. 다음으로 조합 부분인 $_6C_4$는 조합의 성질을 이용하여 $_6C_2$로 계산할 수 있으며, $_6C_2 = \\frac{6 \\times 5}{2 \\times 1} = 15$입니다. 두 값을 더하면 $20 + 15 = 35$가 됩니다."
    },
    {
      questionNum: 4,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "4. ‘angle’에 있는 5개의 문자를 모두 일렬로 나열할 때, 모음이 양 끝에 오는 경우의 수는? [3.7점]",
      passage: null,
      options: [
        "① 4",
        "② 6",
        "③ 8",
        "④ 10",
        "⑤ 12"
      ],
      correctAnswer: 4,
      explanation: "‘angle’을 구성하는 문자 5개 중 모음은 ‘a’, ‘e’의 2개이고, 자음은 ‘n’, ‘g’, ‘l’의 3개입니다. 양 끝자리에 모음 2개를 배열하는 경우의 수는 $_2P_2 = 2! = 2$가지입니다. 그리고 남은 자음 3개를 모음 사이의 세 자리에 일렬로 나열하는 경우의 수는 $3! = 6$가지입니다. 곱의 법칙에 따라 총 경우의 수는 $2 \\times 6 = 12$가지입니다."
    },
    {
      questionNum: 5,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "5. 다음 식을 간단히 하면? [3.7점]\n$\\frac{x^2+2x}{x+3} \\times \\frac{x^2+2x-3}{x+2} \\div (x-1)$",
      passage: null,
      options: [
        "① $x-1$",
        "② $x$",
        "③ $x+2$",
        "④ $x+3$",
        "⑤ $x^2-1$"
      ],
      correctAnswer: 1,
      explanation: "식을 인수분해하여 정리하면 다음과 같습니다.\n$\\frac{x(x+2)}{x+3} \\times \\frac{(x+3)(x-1)}{x+2} \\times \\frac{1}{x-1}$\n이제 공통된 인수들을 약분합니다. $(x+2)$가 약분되고, $(x+3)$이 약분되며, $(x-1)$이 약분됩니다. 모두 지워지고 나면 남는 것은 $x$뿐입니다. 따라서 식을 간단히 한 결과는 $x$입니다."
    },
    {
      questionNum: 6,
      type: "multiple_choice",
      score: 3.8,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "6. 함수 $y = \\frac{1}{x}$의 그래프를 $x$축의 방향으로 $m$만큼, $y$축의 방향으로 $n$만큼 평행이동하면 함수 $y = \\frac{-4x+9}{x-2}$의 그래프와 겹쳐진다고 할 때, $m+n$의 값은? (단, $m, n$은 상수이다.) [3.8점]",
      passage: null,
      options: [
        "① -2",
        "② -1",
        "③ 0",
        "④ 1",
        "⑤ 2"
      ],
      correctAnswer: 0,
      explanation: "목표 함수 $y = \\frac{-4x+9}{x-2}$를 점근선을 쉽게 알 수 있는 표준형으로 변형합니다. \n$y = \\frac{-4(x-2)+1}{x-2} = \\frac{1}{x-2} - 4$ \n이 식은 기본형 $y = \\frac{1}{x}$의 그래프를 $x$축 방향으로 $2$만큼, $y$축 방향으로 $-4$만큼 평행이동한 형태와 같습니다. 따라서 $m = 2, n = -4$이며, 구하고자 하는 $m+n$의 값은 $2 + (-4) = -2$가 됩니다."
    },
    {
      questionNum: 7,
      type: "multiple_choice",
      score: 3.8,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "7. 무리함수 $y = -\\sqrt{2-2x} + 3$의 그래프에 대한 설명으로 <보기>에서 옳은 것만을 있는 대로 고른 것은? [3.8점]",
      passage: "< 보 기 >\nㄱ. 정의역은 $\\{x | x \\le 1\\}$, 치역은 $\\{y | y \\le 3\\}$이다.\nㄴ. 무리함수 $y = \\sqrt{-x}$의 그래프를 평행이동한 것이다.\nㄷ. 제3사분면을 지나지 않는다.",
      options: [
        "① ㄱ",
        "② ㄴ",
        "③ ㄱ, ㄷ",
        "④ ㄴ, ㄷ",
        "⑤ ㄱ, ㄴ, ㄷ"
      ],
      correctAnswer: 0,
      explanation: "무리함수 식을 정리하면 $y = -\\sqrt{-2(x-1)} + 3$입니다.\nㄱ. 근호 안의 값이 $0$ 이상이어야 하므로 $-2(x-1) \\ge 0 \\Rightarrow x \\le 1$이며, 근호 밖의 부호가 음수이므로 $y \\le 3$입니다. 따라서 정의역과 치역 설명은 참입니다.\nㄴ. $x$의 계수가 $-2$이므로, 기본형은 $y = -\\sqrt{-2x}$입니다. $y = \\sqrt{-x}$가 아니므로 거짓입니다.\nㄷ. 그래프의 시작점은 $(1, 3)$이고 왼쪽 아래로 뻗어나가는 형태입니다. $y$절편은 $x=0$일 때 $y = -\\sqrt{2} + 3 > 0$이므로 양수입니다. 왼쪽 끝으로 무한히 가면 결국 $y$값은 한없이 작아져 음수가 됩니다(예를 들어 $x=-7/2$일 때 $y=0$이며, 이보다 작으면 음수가 됩니다). 즉, 제2사분면과 제3사분면을 모두 지나게 되므로 제3사분면을 지나지 않는다는 설명은 거짓입니다. \n따라서 옳은 것은 ㄱ 하나입니다."
    },
    {
      questionNum: 8,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "8. 함수 $y = \\frac{3x}{x+1}$의 그래프에 대한 <보기>의 설명 중 옳은 것만을 있는 대로 고른 것은? [3.9점]",
      passage: "< 보 기 >\nㄱ. 점근선의 방정식은 $x = -1, y = 3$이다.\nㄴ. 직선 $y = x+4$에 대하여 대칭이다.\nㄷ. 그래프는 제3사분면, 제4사분면을 지나지 않는다.",
      options: [
        "① ㄱ",
        "② ㄷ",
        "③ ㄱ, ㄴ",
        "④ ㄴ, ㄷ",
        "⑤ ㄱ, ㄴ, ㄷ"
      ],
      correctAnswer: 2,
      explanation: "유리함수를 표준형으로 고치면 $y = \\frac{3(x+1)-3}{x+1} = \\frac{-3}{x+1} + 3$입니다.\nㄱ. 분모가 $0$이 되는 $x = -1$과 상수항 $y = 3$이 점근선이므로 참입니다.\nㄴ. 유리함수는 점근선의 교점 $(-1, 3)$을 지나면서 기울기가 $\\pm 1$인 직선에 대해 선대칭입니다. 기울기가 $1$인 대칭 직선의 방정식은 $y - 3 = 1(x - (-1)) \\Rightarrow y = x + 4$가 되므로 참입니다.\nㄷ. $y$절편을 구해보면 $x=0$일 때 $y=0$으로 원점 $(0,0)$을 지납니다. 점근선을 기준으로 제2사분면과 제4사분면 방향으로 쌍곡선이 그려지는데, $x>0$이면 $y>0$으로 제1사분면을, $-1 < x < 0$ 구간에서는 $y < 0$으로 제3사분면을 지납니다. 제4사분면만 지나지 않으므로 제3사분면을 지나지 않는다는 설명은 거짓입니다.\n따라서 옳은 것은 ㄱ, ㄴ입니다."
    },
    {
      questionNum: 9,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: "./images/2024_2_fin_math_q9.png",
      questionText: "9. 함수 $y = \\sqrt{ax+b} + c$의 그래프가 그림과 같을 때, $4abc$의 값은? (단, $a, b, c$는 상수이다.) [3.9점]",
      passage: null,
      options: [
        "① 72",
        "② 75",
        "③ 78",
        "④ 81",
        "⑤ 84"
      ],
      correctAnswer: 3,
      explanation: "그래프의 시작점이 $(4, -1)$이므로 무리함수의 식을 $y = \\sqrt{a(x-4)} - 1$로 세울 수 있습니다(여기서 왼쪽 위로 향하므로 $a<0$입니다). 이 그래프가 $y$축과 점 $(0, 2)$에서 만나므로 $x=0$일 때 $y=2$를 대입합니다.\n$2 = \\sqrt{-4a} - 1 \\Rightarrow \\sqrt{-4a} = 3 \\Rightarrow -4a = 9 \\Rightarrow a = -\\frac{9}{4}$.\n$a$의 값을 원래 식에 대입하여 전개하면 $y = \\sqrt{-\\frac{9}{4}x + 9} - 1$이 됩니다. 주어진 기본형 $y = \\sqrt{ax+b} + c$와 비교하면 $a = -\\frac{9}{4}, b = 9, c = -1$입니다.\n구하고자 하는 값은 $4abc$이므로, $4 \\times (-\\frac{9}{4}) \\times 9 \\times (-1) = 81$이 됩니다."
    },
    {
      questionNum: 10,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "10. 0, 1, 2, 3, 4, 5의 6개의 숫자 중에서 서로 다른 5개의 숫자를 택하여 다섯 자리의 자연수를 만들 때, 4의 배수가 아닌 자연수의 개수는? [4.0점]",
      passage: null,
      options: [
        "① 144",
        "② 216",
        "③ 288",
        "④ 456",
        "⑤ 528"
      ],
      correctAnswer: 3,
      explanation: "먼저 만들 수 있는 전체 5자리 자연수의 개수를 구합니다. 만의 자리에는 0이 올 수 없으므로 5가지, 나머지 4자리는 남은 5개 중 4개를 고르는 순열이므로 $5 \\times _5P_4 = 5 \\times 120 = 600$개입니다.\n이제 4의 배수인 자연수의 개수를 구하여 뺍니다. 4의 배수는 끝의 두 자리가 4의 배수여야 합니다. 주어진 숫자로 만들 수 있는 4의 배수 끝자리는 04, 12, 20, 24, 32, 40, 52입니다.\n- 끝자리에 0이 포함된 경우 (04, 20, 40): 3가지 경우 각각에 대해, 남은 4개 숫자 중 3개를 앞 세 자리에 배열하면 되므로 $3 \\times _4P_3 = 3 \\times 24 = 72$개입니다.\n- 끝자리에 0이 없는 경우 (12, 24, 32, 52): 4가지 경우 각각에 대해, 만의 자리에 0이 올 수 없으므로 남은 3개 중 하나를 고르고(3가지), 나머지 두 자리에는 남은 3개 중 2개를 고르면( $_3P_2 = 6$) 되므로 $4 \\times (3 \\times 6) = 72$개입니다.\n4의 배수의 총 개수는 $72 + 72 = 144$개입니다.\n따라서 4의 배수가 아닌 자연수의 개수는 전체 600개에서 144개를 뺀 $600 - 144 = 456$개가 됩니다."
    },
    {
      questionNum: 11,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: "./images/2024_2_fin_math_q11.png",
      questionText: "11. 서로 색이 다른 5가지 종류의 색연필을 이용하여 다음 그림을 칠하려고 한다. 같은 색을 중복하여 사용할 수 있지만 인접해 있는 영역은 서로 다른 색으로 칠할 때, 색을 칠하는 경우의 수는? (단, 하나의 영역은 한 가지 색으로만 칠한다.) [4.0점]",
      passage: null,
      options: [
        "① 535",
        "② 540",
        "③ 545",
        "④ 550",
        "⑤ 555"
      ],
      correctAnswer: 1,
      explanation: "인접한 영역끼리 색이 겹치지 않게 칠하는 전형적인 수형도 또는 경우의 수 문제입니다. 영역의 형태에 따라 교대로 같은 색을 칠하는 경우와 그렇지 않은 경우로 나누어 계산하면 540가지의 경우의 수가 도출됩니다."
    },
    {
      questionNum: 12,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "12. 함수 $f(x) = \\frac{1}{1-x}$에 대하여 $f = f_1, f \\circ f = f_2, f \\circ f_2 = f_3, \\dots, f \\circ f_n = f_{n+1}$로 정의할 때, 함수 $y = f_{20}(x)$의 그래프는 점 $(\\alpha, \\beta)$에 대하여 대칭이다. $\\beta - \\alpha$의 값은? (단, $n$은 자연수이다.) [4.1점]",
      passage: null,
      options: [
        "① 0",
        "② 1",
        "③ 2",
        "④ 3",
        "⑤ 4"
      ],
      correctAnswer: 1,
      explanation: "합성함수의 규칙을 직접 계산해 봅니다.\n$f_1(x) = \\frac{1}{1-x}$\n$f_2(x) = f(f_1(x)) = \\frac{1}{1 - \\frac{1}{1-x}} = \\frac{1}{\\frac{1-x-1}{1-x}} = \\frac{1-x}{-x} = 1 - \\frac{1}{x}$\n$f_3(x) = f(f_2(x)) = \\frac{1}{1 - (1 - \\frac{1}{x})} = \\frac{1}{\\frac{1}{x}} = x$\n$f_4(x) = f(f_3(x)) = f(x) = f_1(x)$\n세 번 합성할 때마다 항등함수 $x$가 되어 주기가 3임을 알 수 있습니다. \n따라서 $f_{20}(x) = f_{3 \\times 6 + 2}(x) = f_2(x) = 1 - \\frac{1}{x}$ 입니다.\n유리함수 $y = -\\frac{1}{x} + 1$의 그래프는 점근선이 $x=0, y=1$이므로 이 점근선의 교점인 $(0, 1)$에 대하여 대칭입니다.\n결국 대칭점은 $\\alpha=0, \\beta=1$이 되며, 구하고자 하는 $\\beta - \\alpha = 1 - 0 = 1$입니다."
    },
    {
      questionNum: 13,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: "./images/2024_2_fin_math_q13.png",
      questionText: "13. 총 7개의 팀이 아래의 그림과 같은 토너먼트 방식으로 경기를 할 때, 대진표를 작성하는 경우의 수는? [4.1점]",
      passage: null,
      options: [
        "① 315",
        "② 322",
        "③ 329",
        "④ 336",
        "⑤ 343"
      ],
      correctAnswer: 0,
      explanation: "결승전을 기준으로 7팀을 좌측 4팀, 우측 3팀 그룹으로 나눕니다: $_7C_4 \\times _3C_3 = 35$가지.\n좌측 4팀을 다시 2팀씩 두 그룹으로 나눕니다: $\\frac{_4C_2 \\times _2C_2}{2!} = \\frac{6 \\times 1}{2} = 3$가지.\n우측 3팀을 다시 2팀, 1팀 그룹으로 나눕니다: $_3C_2 \\times _1C_1 = 3$가지.\n각 단계를 모두 곱하면 $35 \\times 3 \\times 3 = 315$가지가 됩니다."
    },
    {
      questionNum: 14,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "14. 함수 $f(x) = -\\sqrt{2x-6} + 7$의 역함수를 $y = g(x)$라고 할 때, 두 함수 $y = f(x)$와 $y = g(x)$의 그래프가 만나는 점의 좌표는 $(\\alpha, \\beta)$이다. $\\alpha + 2\\beta$의 값은? [4.2점]",
      passage: null,
      options: [
        "① 15",
        "② 21",
        "③ 24",
        "④ 27",
        "⑤ 33"
      ],
      correctAnswer: 0,
      explanation: "주어진 무리함수는 치역이 $y \\le 7$이며 감소하는 함수입니다. 함수와 그 역함수의 교점 중 하나는 반드시 직선 $y = x$ 위에 존재하므로 $f(x) = x$를 만족하는 근을 먼저 찾습니다.\n$-\\sqrt{2x-6} + 7 = x \\Rightarrow \\sqrt{2x-6} = 7 - x$\n양변을 제곱하면 $2x - 6 = (7 - x)^2 = 49 - 14x + x^2$\n$x^2 - 16x + 55 = 0 \\Rightarrow (x-5)(x-11) = 0$\n$y = x$와의 교점은 무리함수의 정의역 $x \\ge 3$과 치역 $y \\le 7$을 만족해야 하므로, $x \\le 7$ 범위에 있는 $x = 5$만이 적합합니다. (x=11은 무연근입니다.)\n교점의 좌표는 $(\\alpha, \\beta) = (5, 5)$가 됩니다. \n따라서 $\\alpha + 2\\beta = 5 + 2(5) = 15$입니다."
    },
    {
      questionNum: 15,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "15. $x>3$인 실수 전체의 집합을 정의역과 치역으로 하는 두 함수 $f(x) = \\frac{3x-8}{x-3}, g(x) = \\sqrt{4x-12} + 3$에 대하여\n$(f \\circ (g^{-1} \\circ f)^{-1} \\circ f^{-1})(4)$의 값은? [4.2점]",
      passage: null,
      options: [
        "① 4",
        "② 5",
        "③ 6",
        "④ 7",
        "⑤ 8"
      ],
      correctAnswer: 1,
      explanation: "합성함수의 역함수 성질인 $(h \\circ k)^{-1} = k^{-1} \\circ h^{-1}$을 이용하여 식을 정리합니다.\n주어진 식은 $f \\circ (f^{-1} \\circ g) \\circ f^{-1} = (f \\circ f^{-1}) \\circ g \\circ f^{-1} = I \\circ g \\circ f^{-1} = g \\circ f^{-1}$ 로 간단해집니다.\n이제 $g(f^{-1}(4))$의 값을 구하면 됩니다. \n먼저 $f^{-1}(4) = k$라고 두면 $f(k) = 4$가 성립합니다.\n$\\frac{3k-8}{k-3} = 4 \\Rightarrow 3k - 8 = 4(k - 3) = 4k - 12 \\Rightarrow k = 4$ 입니다.\n즉, $f^{-1}(4) = 4$입니다. \n마지막으로 이 값을 $g(x)$에 대입하면 $g(4) = \\sqrt{4(4)-12} + 3 = \\sqrt{16-12} + 3 = \\sqrt{4} + 3 = 2 + 3 = 5$가 됩니다."
    },
    {
      questionNum: 16,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      imageUrl: "./images/2024_2_fin_math_q16.png",
      questionText: "16. 다음은 자연수 $n, r$에 대하여 $0 < r \\le n-1$일 때, 등식 $_{n-1}C_{r-1} + _{n-1}C_r = (가)$ 가 성립함을 증명하는 과정이다.\n\n$_{n-1}C_{r-1} + _{n-1}C_r = \\frac{(n-1)!}{(r-1)!(n-r)!} + \\frac{(n-1)!}{r!(나)} = \\frac{r(n-1)!}{r!(n-r)!} + \\frac{(n-r)(n-1)!}{r!(n-r)!} = \\frac{(다)}{r!(n-r)!} \\{r+(n-r)\\} = \\frac{n!}{r!(n-r)!} = (가)$\n\n$n = 5, r = 2$일 때, $(가) + (나) \\times (다)$의 값은? [4.2점]",
      passage: null,
      options: [
        "① 58",
        "② 118",
        "③ 178",
        "④ 238",
        "⑤ 288"
      ],
      correctAnswer: 0,
      explanation: "조합의 수의 계산 원리에 따라 증명 과정을 추론해 봅니다.\n$_{n-1}C_r$의 공식은 분모가 $r! \\times ( (n-1)-r )!$ 즉, $r!(n-r-1)!$ 이므로 빈칸 (나)에 들어갈 식은 $(n-r-1)!$ 입니다.\n그 다음 공통분모인 $r!(n-r)!$로 통분하기 위해 두 번째 분수식 분모, 분자에 $(n-r)$을 곱해준 과정이 나옵니다. \n분자를 덧셈으로 묶기 위해 공통인수인 $(n-1)!$을 묶어내면 식이 $\\frac{(n-1)!}{r!(n-r)!}\\{r + (n-r)\\}$가 되므로 빈칸 (다)는 $(n-1)!$입니다.\n최종적으로 $\\frac{n!}{r!(n-r)!}$은 정의에 의해 $_nC_r$이 되므로 (가)는 $_nC_r$입니다.\n\n이제 주어진 $n=5, r=2$를 각 식에 대입합니다.\n(가) = $_5C_2 = 10$\n(나) = $(5-2-1)! = 2! = 2$\n(다) = $(5-1)! = 4! = 24$\n결과적으로 $(가) + (나) \\times (다) = 10 + 2 \\times 24 = 10 + 48 = 58$이 됩니다."
    },
    {
      questionNum: 17,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      imageUrl: "./images/2024_2_fin_math_q17.png",
      questionText: "17. 다음과 같이 가로로 평행한 3개의 직선과 세로로 평행한 4개의 직선이 만나서 생긴 교점들을 서로 연결하여 만들 수 있는 삼각형의 개수는? (단, 서로 평행한 직선들은 모두 같은 간격으로 배치되어 있다.) [4.3점]",
      passage: null,
      options: [
        "① 140",
        "② 160",
        "③ 180",
        "④ 200",
        "⑤ 220"
      ],
      correctAnswer: 3,
      explanation: "가로 3줄, 세로 4줄이 교차하면 총 $3 \\times 4 = 12$개의 교점이 생깁니다. 이 중 무작위로 3개의 점을 선택하는 전체 경우의 수는 $_{12}C_3 = \\frac{12 \\times 11 \\times 10}{3 \\times 2 \\times 1} = 220$개입니다.\n삼각형이 만들어지지 않는 경우는 선택한 3개의 점이 모두 일직선상에 놓인 경우입니다.\n- 가로 일직선: 4개 점이 있는 가로 3줄. 각 줄에서 점 3개를 고르는 경우 $_4C_3 = 4$이므로 총 $4 \\times 3 = 12$개.\n- 세로 일직선: 3개 점이 있는 세로 4줄. 각 줄에서 점 3개를 고르는 경우 $_3C_3 = 1$이므로 총 $1 \\times 4 = 4$개.\n- 대각선 일직선: 1x1 간격의 정사각형들을 관통하는 기울기 $1$과 $-1$의 대각선 중에서 정확히 3개의 점을 지나는 대각선은 총 4개가 나옵니다 (양방향 각각 2개씩). 한 대각선당 $_3C_3 = 1$이므로 총 4개.\n삼각형을 만들 수 없는 일직선의 경우를 모두 더하면 $12 + 4 + 4 = 20$개입니다.\n따라서 전체 220개에서 20개를 뺀 200개가 만들 수 있는 삼각형의 총 개수입니다."
    },
    {
      questionNum: 18,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "18. $y = \\frac{2}{x-2} + 2$ ($x > 2$)의 그래프 위의 점 P에서 $x$축과 $y$축에 내린 수선의 발을 A, B라 할 때, 직사각형 OAPB의 둘레의 길이의 최솟값을 $a+b\\sqrt{2}$ 라 하자. $a-b$의 값은? (단, O는 원점, $a, b$는 유리수이다.) [4.3점]",
      passage: null,
      options: [
        "① -4",
        "② -2",
        "③ 0",
        "④ 2",
        "⑤ 4"
      ],
      correctAnswer: 4,
      explanation: "점 P의 좌표를 $(t, \\frac{2}{t-2} + 2)$라 하면 ($t > 2$), 직사각형 OAPB의 가로 길이는 $t$, 세로 길이는 $\\frac{2}{t-2} + 2$가 됩니다.\n직사각형의 둘레의 길이 $L$은 $2 \\times (가로 + 세로)$ 이므로\n$L = 2(t + \\frac{2}{t-2} + 2)$ 로 식을 세울 수 있습니다.\n산술평균과 기하평균의 관계를 사용하기 위해 식을 $t-2$의 꼴로 맞추어 정리합니다.\n$L = 2(t-2 + \\frac{2}{t-2} + 4)$\n$t > 2$이므로 $t-2 > 0$이고, 산술기하 평균 부등식에 의해 $t-2 + \\frac{2}{t-2} \\ge 2\\sqrt{(t-2) \\times \\frac{2}{t-2}} = 2\\sqrt{2}$ 가 성립합니다.\n따라서 $L \\ge 2(2\\sqrt{2} + 4) = 8 + 4\\sqrt{2}$ 가 됩니다. 이 값이 둘레 길이의 최솟값입니다.\n주어진 형태 $a+b\\sqrt{2}$와 비교하면 $a = 8, b = 4$이며, 최종적으로 $a-b = 8 - 4 = 4$입니다."
    },
    {
      questionNum: 19,
      type: "multiple_choice",
      score: 4.4,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "19. 집합 $X = \\{a, b, c, d, e, f, g, h\\}$의 모든 원소 $x$에 대하여 $f(f(x)) = x$를 만족시키는 $X$에서 $X$로의 함수 $f$의 개수는? (단, $f(b) = d$이다.) [4.4점]",
      passage: null,
      options: [
        "① 46",
        "② 60",
        "③ 76",
        "④ 90",
        "⑤ 106"
      ],
      correctAnswer: 2,
      explanation: "합성함수 $f(f(x)) = x$를 만족하려면 함수의 원소들이 자기 자신으로 대응($f(x)=x$)하거나, 2개의 원소가 서로 교차하여 대응($f(x)=y, f(y)=x$)해야 합니다. \n조건에서 $f(b) = d$이므로 자명하게 $f(d) = b$가 성립하며 짝이 하나 지어졌습니다. \n이제 남은 6개의 원소 $(a, c, e, f, g, h)$를 어떻게 대응시킬지 짝을 짓는 경우를 나눕니다.\n- 0개 쌍 교차 (모두 자기 자신에게 대응): 1가지\n- 1개 쌍 교차 (2명이 짝, 4명은 자기 자신): $_6C_2 = 15$가지\n- 2개 쌍 교차 (2명씩 2묶음 짝, 2명 자기 자신): $\\frac{_6C_2 \\times _4C_2}{2!} = \\frac{15 \\times 6}{2} = 45$가지\n- 3개 쌍 교차 (2명씩 3묶음 모두 짝): $\\frac{_6C_2 \\times _4C_2 \\times _2C_2}{3!} = \\frac{90}{6} = 15$가지\n모든 경우의 수를 더하면 $1 + 15 + 45 + 15 = 76$가지가 됩니다."
    },
    {
      questionNum: 20,
      type: "multiple_choice",
      score: 4.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "20. 집합 $U = \\{1, 2, 3, 4, 5, 6, 7, 8\\}$의 두 부분집합 $A, B$가 다음 조건을 만족시킬 때, 두 집합의 순서쌍 $(A, B)$의 개수는? [4.5점]\n(가) $n(A) = 3, n(B) = 4, n(A \\cap B) = 1$\n(나) 집합 $A$의 가장 큰 원소를 $a$, 집합 $B$의 가장 큰 원소를 $b$라 하면 $a < b$이다.",
      passage: null,
      options: [
        "① 756",
        "② 784",
        "③ 812",
        "④ 840",
        "⑤ 868"
      ],
      correctAnswer: 3,
      explanation: "조건 (가)에 의해 두 집합 합집합의 원소의 총 개수는 $n(A \\cup B) = 3 + 4 - 1 = 6$개입니다. 8개의 원소 중에서 사용할 6개의 원소를 먼저 뽑는 경우의 수는 $_8C_6 = _8C_2 = 28$가지입니다.\n이제 뽑힌 6개의 원소(크기 순으로 $x_1 < x_2 < \\dots < x_6$)를 벤 다이어그램 영역(A차집합, 교집합, B차집합)에 분배해야 합니다. \n조건 (나)에서 $b$가 $a$보다 커야 하므로, 6개 중 가장 큰 원소인 $x_6$은 반드시 집합 $B$에만 속해야 합니다. (만약 교집합에 속하면 $A$와 $B$의 최대 원소가 같아져 조건에 위배됩니다).\n가장 큰 원소 1개의 위치가 고정되었으므로, 남은 5개의 원소 중 집합 $A$에 들어갈 3개의 원소를 뽑습니다. 경우의 수는 $_5C_3 = 10$가지입니다.\n그리고 그 뽑힌 3개의 원소 중에서 교집합에 속할 원소 1개를 다시 선택합니다. 경우의 수는 $_3C_1 = 3$가지입니다.\n선택되지 않은 나머지 2개의 원소는 자동으로 집합 $B$에만 속하게 되며, 이로써 집합 $B$는 고정되었던 $x_6$, 교집합 1개, 남은 2개까지 정확히 4개의 원소를 가지게 되어 모든 조건이 완벽히 충족됩니다.\n따라서 전체 경우의 수는 $28 \\times 10 \\times 3 = 840$가지가 됩니다."
    },
    {
      questionNum: 21,
      type: "short_answer",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "[서답형 1] 서로 다른 두 개의 주사위를 동시에 던질 때, 나오는 눈의 수의 합이 3의 배수가 되는 경우의 수를 구하시오. [4.0점]",
      passage: null,
      options: [],
      correctAnswer: "12",
      explanation: "두 주사위의 눈의 합이 3의 배수가 되는 경우는 합이 3, 6, 9, 12일 때입니다.\n- 합이 3인 경우: (1, 2), (2, 1) -> 2가지\n- 합이 6인 경우: (1, 5), (2, 4), (3, 3), (4, 2), (5, 1) -> 5가지\n- 합이 9인 경우: (3, 6), (4, 5), (5, 4), (6, 3) -> 4가지\n- 합이 12인 경우: (6, 6) -> 1가지\n모든 경우를 합산하면 $2 + 5 + 4 + 1 = 12$가지입니다."
    },
    {
      questionNum: 22,
      type: "short_answer",
      score: 4.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "[서답형 2] 다음 무리식의 값이 실수가 되도록 하는 실수 $x$의 값의 범위를 구하시오. [4.5점]\n$\\frac{\\sqrt{x+1}-4}{\\sqrt{5-x}}$",
      passage: null,
      options: [],
      correctAnswer: "-1 \\le x < 5",
      explanation: "무리식이 실수가 되려면 근호 안의 값이 $0$ 이상이어야 하며, 분수식이므로 분모는 $0$이 되어서는 안 됩니다.\n첫째, 분자의 근호 조건: $x + 1 \\ge 0 \\Rightarrow x \\ge -1$ \n둘째, 분모의 근호 및 분모 0 금지 조건: 근호 안이 $5 - x \\ge 0$ 이지만, 동시에 분모 전체 $\\sqrt{5-x} \\neq 0$ 이어야 하므로 $5 - x > 0$ 이어야만 합니다. 즉, $x < 5$ 입니다.\n이 두 가지 조건을 모두 만족하는 공통 범위는 $-1 \\le x < 5$ 입니다."
    },
    {
      questionNum: 23,
      type: "short_answer",
      score: 5.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "[서답형 3] 무리함수 $f(x) = \\sqrt{2x-4}$의 역함수를 $g(x)$라 하자. 점 A$(2, 0)$와 점 B$(4, 2)$를 지나는 직선을 평행이동하여 함수 $g(x)$의 그래프와 접하는 점을 C라 할 때, 삼각형 ABC의 넓이를 구하시오. [5.5점]",
      passage: null,
      options: [],
      correctAnswer: "7/2",
      explanation: "무리함수 $f(x) = \\sqrt{2x-4}$ ($x \\ge 2, y \\ge 0$)의 역함수를 구하면 $g(x) = \\frac{1}{2}x^2 + 2$ ($x \\ge 0$)가 됩니다.\n점 A$(2, 0)$와 점 B$(4, 2)$를 지나는 직선의 기울기는 $\\frac{2-0}{4-2} = 1$입니다. 즉 직선의 방정식은 $y = x - 2$입니다.\n이 직선을 평행이동한 직선을 $y = x + k$라고 하고, $g(x)$와 연립하여 접하는 순간(판별식 $D=0$)을 찾습니다.\n$\\frac{1}{2}x^2 + 2 = x + k \\Rightarrow x^2 - 2x + 4 - 2k = 0$\n$D/4 = (-1)^2 - (4-2k) = 0 \\Rightarrow 2k = 3 \\Rightarrow k = \\frac{3}{2}$\n따라서 접선의 방정식은 $y = x + \\frac{3}{2}$ 이며, 이 때 접점 C의 $x$좌표는 중근 $x=1$이 되고 대입하면 $y = \\frac{5}{2}$가 됩니다. 즉, 점 C의 좌표는 $(1, \\frac{5}{2})$입니다.\n세 점 A$(2, 0)$, B$(4, 2)$, C$(1, \\frac{5}{2})$로 이루어진 삼각형의 넓이는 사선 공식을 이용하여 다음과 같이 구합니다.\n$S = \\frac{1}{2} |(2 \\times 2 + 4 \\times \\frac{5}{2} + 1 \\times 0) - (0 \\times 4 + 2 \\times 1 + \\frac{5}{2} \\times 2)|\n= \\frac{1}{2} |(4 + 10) - (2 + 5)| = \\frac{1}{2} |14 - 7| = \\frac{7}{2}$"
    },
    {
      questionNum: 24,
      type: "short_answer",
      score: 6.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "[서답형 4] 어느 식당에 일가족 9명(어른 3명, 어린이 6명)이 갔는데 총 5개의 서로 구별되는 테이블이 비어 있었고, 벽에는 다음과 같은 안내문이 붙어 있었다.\n\n식사 안내문 \n▷ 한 테이블에 앉을 수 있는 최대 인원은 6명입니다. \n▷ 어린이들이 식사를 할 경우, 반드시 한 명 이상의 어른이 어린이들과 같은 테이블에 앉아 주세요.\n\n비어 있는 테이블 중 2개를 골라 식당의 안내문에 따라 9명이 모두 나누어 앉는 방법의 수를 구하시오. (단, 테이블에 식구들이 둘러 앉는 방법의 수는 고려하지 않는다.) [6.0점]",
      passage: null,
      options: [],
      correctAnswer: "3360",
      explanation: "안내문에 따라 테이블당 어른이 최소 1명 이상 있어야 하므로, 2개의 테이블에 어른 3명을 분배하는 방법은 (1명, 2명) 또는 (2명, 1명)으로 나누는 경우밖에 없습니다.\n임의로 5개의 테이블 중 순서를 생각하여 앉을 2개의 테이블(예: T1, T2)을 고르는 경우의 수는 $_5P_2 = 20$가지입니다.\n이제 배정된 두 테이블 T1, T2에 어른 3명과 어린이 6명을 규칙에 맞게 나누어 앉힙니다.\n어른 3명을 T1, T2에 분배하는 경우는 $_3C_1 \\times _2C_2 = 3$ (T1에 1명, T2에 2명), $_3C_2 \\times _1C_1 = 3$ (T1에 2명, T2에 1명)으로 총 6가지입니다.\n[Case 1] T1에 어른 1명, T2에 어른 2명이 앉는 경우 (3가지)\n어린이 6명을 T1에 $k$명, T2에 $6-k$명 배분한다고 할 때, 인원 제한(최대 6명)에 의해 $1+k \\le 6$이므로 $k \\le 5$이고, $2+(6-k) \\le 6$이므로 $k \\ge 2$가 되어야 합니다. \n즉, $k$는 2, 3, 4, 5의 경우만 가능합니다.\n어린이 배분 경우의 수 = $_6C_2 + _6C_3 + _6C_4 + _6C_5 = 15 + 20 + 15 + 6 = 56$가지.\n따라서 이 Case에서 조를 구성하는 방법은 $3 \\times 56 = 168$가지입니다.\n[Case 2] T1에 어른 2명, T2에 어른 1명이 앉는 경우 (3가지)\n인원 제한에 의해 이번엔 $2+k \\le 6$ ($k \\le 4$)이고 $1+(6-k) \\le 6$ ($k \\ge 1$)이므로 $k$는 1, 2, 3, 4가 됩니다.\n어린이 배분 경우의 수 = $_6C_1 + _6C_2 + _6C_3 + _6C_4 = 6 + 15 + 20 + 15 = 56$가지.\n이 Case도 구성 방법은 $3 \\times 56 = 168$가지입니다.\n두 테이블에 합법적으로 분배하는 총 경우의 수는 $168 + 168 = 336$가지이며, 처음에 테이블 2개를 순서 있게 선택한 경우의 수가 20가지이므로 전체 경우의 수는 $20 \\times 336 = 3360$가지가 됩니다."
    }
  ]
};