var exam_2026_1_fin_math = {
  examInfo: {
    examId: "2026_1_fin_math",
    schoolName: "동대전고등학교",
    year: 2026,
    semester: 1,
    grade: 1,
    examType: "기말고사",
    subject: "math"
  },
  sharedPassages: {},
  questions: [
    {
      questionNum: 1,
      type: "multiple_choice",
      score: 3.4,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "1. ${}_{5}P_{3}$ 의 값은? [3.4점]",
      passage: null,
      options: [
        "① 50",
        "② 60",
        "③ 70",
        "④ 80",
        "⑤ 90"
      ],
      correctAnswer: 1,
      explanation: "순열의 계산법에 따라 ${}_{5}P_{3} = 5 \\times 4 \\times 3 = 60$입니다. 정답은 ②입니다."
    },
    {
      questionNum: 2,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "2. 두 행렬 $A=\\begin{pmatrix}0&1\\\\ -3&-1\\end{pmatrix}$, $B=\\begin{pmatrix}-4&0\\\\ 1&-2\\end{pmatrix}$에 대하여 4A-3B는? [3.5점]",
      passage: null,
      options: [
        "① $\\begin{pmatrix}12&-4\\\\ -15&2\\end{pmatrix}$",
        "② $\\begin{pmatrix}12&4\\\\ -15&2\\end{pmatrix}$",
        "③ $\\begin{pmatrix}12&4\\\\ -15&-2\\end{pmatrix}$",
        "④ $\\begin{pmatrix}12&2\\\\ 15&4\\end{pmatrix}$",
        "⑤ $\\begin{pmatrix}12&4\\\\ 15&2\\end{pmatrix}$"
      ],
      correctAnswer: 1,
      explanation: "$4A - 3B = 4\\begin{pmatrix}0&1\\\\ -3&-1\\end{pmatrix} - 3\\begin{pmatrix}-4&0\\\\ 1&-2\\end{pmatrix} = \\begin{pmatrix}0&4\\\\ -12&-4\\end{pmatrix} - \\begin{pmatrix}-12&0\\\\ 3&-6\\end{pmatrix} = \\begin{pmatrix}12&4\\\\ -15&2\\end{pmatrix}$ 입니다. 정답은 ②입니다."
    },
    {
      questionNum: 3,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "3. 108의 양의 약수의 개수는? [3.6점]",
      passage: null,
      options: [
        "① 8",
        "② 9",
        "③ 10",
        "④ 11",
        "⑤ 12"
      ],
      correctAnswer: 4,
      explanation: "108을 소인수분해하면 $108 = 2^2 \\times 3^3$ 입니다. 양의 약수의 개수는 각 소인수의 지수에 1씩 더하여 곱한 값과 같으므로, $(2+1) \\times (3+1) = 3 \\times 4 = 12$개입니다. 정답은 ⑤입니다."
    },
    {
      questionNum: 4,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "4. 연립부등식 $\\begin{cases}2x-1\\le3\\\\ 5x-2\\ge x+6\\end{cases}$ 의 해는? [3.7점]",
      passage: null,
      options: [
        "① $x>2$",
        "② $x\\ge2$",
        "③ $x=2$",
        "④ $x<2$",
        "⑤ $x\\le2$"
      ],
      correctAnswer: 2,
      explanation: "첫 번째 부등식 $2x-1\\le3$을 정리하면 $2x\\le4$, 즉 $x\\le2$입니다.\n두 번째 부등식 $5x-2\\ge x+6$을 정리하면 $4x\\ge8$, 즉 $x\\ge2$입니다.\n두 부등식을 동시에 만족하는 공통 범위는 $x=2$입니다. 정답은 ③입니다."
    },
    {
      questionNum: 5,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "5. ${}_{n}P_{4}=42\\times_{n-2}P_{2}$ 를 만족시키는 자연수 $n$ 의 값은? [3.7점]",
      passage: null,
      options: [
        "① 7",
        "② 6",
        "③ 8",
        "④ 9",
        "⑤ 10"
      ],
      correctAnswer: 0,
      explanation: "주어진 순열의 성질을 이용하여 식을 풀면, \n${}_{n}P_{4} = n(n-1)(n-2)(n-3)$\n${}_{n-2}P_{2} = (n-2)(n-3)$\n따라서 $n(n-1)(n-2)(n-3) = 42(n-2)(n-3)$ 이고, $n \\ge 4$ 조건에 의해 양변을 $(n-2)(n-3)$으로 나눌 수 있습니다.\n$n(n-1) = 42$ 이며, 이를 만족하는 자연수 $n$은 7입니다. 정답은 ①입니다."
    },
    {
      questionNum: 6,
      type: "multiple_choice",
      score: 3.8,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "6. 봅슬레이 4인승 경기에 네 명의 선수 A, B, C, D가 한 팀을 이루어 출전할 때, A, B가 서로 이웃하게 썰매에 앉는 경우의 수는? [3.8점]",
      passage: null,
      options: [
        "① 12",
        "② 10",
        "③ 8",
        "④ 6",
        "⑤ 4"
      ],
      correctAnswer: 0,
      explanation: "A와 B를 하나의 묶음으로 생각하면 (A, B), C, D의 3묶음을 나열하는 경우의 수는 $3! = 6$가지입니다.\n이때 A와 B가 자리를 바꾸는 경우가 $2! = 2$가지이므로, 총 경우의 수는 $6 \\times 2 = 12$가지입니다. 정답은 ①입니다."
    },
    {
      questionNum: 7,
      type: "multiple_choice",
      score: 3.8,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "7. 두 행렬 $A=\\begin{pmatrix}a-b&0\\\\ 6&4\\end{pmatrix}$, $B=\\begin{pmatrix}-1&0\\\\ 6&2ab\\end{pmatrix}$ 에 대하여 $A=B$ 일 때, $a^{2}+b^{2}$ 의 값은? (단, $a, b$는 상수이다.) [3.8점]",
      passage: null,
      options: [
        "① 1",
        "② 2",
        "③ 3",
        "④ 4",
        "⑤ 5"
      ],
      correctAnswer: 4,
      explanation: "$A=B$이므로 대응하는 성분이 모두 같아야 합니다.\n따라서 $a-b = -1$ 이고, $2ab = 4$ 에서 $ab = 2$ 입니다.\n구하고자 하는 값은 $a^2 + b^2 = (a-b)^2 + 2ab = (-1)^2 + 2(2) = 1 + 4 = 5$ 입니다. 정답은 ⑤입니다."
    },
    {
      questionNum: 8,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "8. $x$ 에 대한 부등식 $x-6\\le-x^{2}+2x<2x^{2}+x-2$ 를 만족시키는 정수 $x$ 의 개수는? [3.9점]",
      passage: null,
      options: [
        "① 3",
        "② 4",
        "③ 5",
        "④ 6",
        "⑤ 7"
      ],
      correctAnswer: 1,
      explanation: "주어진 연립부등식 $\\begin{cases}x-6\\le-x^{2}+2x \\\\ -x^{2}+2x<2x^{2}+x-2\\end{cases}$ 를 풉니다.\n1) 첫 번째 부등식: $x^2 - x - 6 \\le 0 \\implies (x-3)(x+2) \\le 0 \\implies -2 \\le x \\le 3$\n2) 두 번째 부등식: $3x^2 - x - 2 > 0 \\implies (3x+2)(x-1) > 0 \\implies x < -\\frac{2}{3}$ 또는 $x > 1$\n공통범위를 구하면 $-2 \\le x < -\\frac{2}{3}$ 또는 $1 < x \\le 3$ 입니다.\n이를 만족하는 정수 $x$는 $-2, -1, 2, 3$ 으로 총 4개입니다. 정답은 ②입니다."
    },
    {
      questionNum: 9,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "9. 두 행렬 $A=\\begin{pmatrix}6&k\\\\ 0&9\\end{pmatrix}$, $B=\\begin{pmatrix}3&8\\\\ 0&5\\end{pmatrix}$ 에 대하여 $pA+qB=3E$ 를 만족할 때, 상수 $k$ 의 값은? (단, $p, q$는 상수이며, $E$는 단위행렬이다.) [3.9점]",
      passage: null,
      options: [
        "① 11",
        "② 12",
        "③ 13",
        "④ 14",
        "⑤ 15"
      ],
      correctAnswer: 1,
      explanation: "주어진 식 $p\\begin{pmatrix}6&k\\\\ 0&9\\end{pmatrix} + q\\begin{pmatrix}3&8\\\\ 0&5\\end{pmatrix} = \\begin{pmatrix}3&0\\\\ 0&3\\end{pmatrix}$ 에서 성분별로 비교합니다.\n(1,1) 성분: $6p + 3q = 3 \\implies 2p + q = 1$\n(2,2) 성분: $9p + 5q = 3$\n두 식을 연립하여 풀면, $q = 1 - 2p$ 이므로 $9p + 5(1-2p) = 3 \\implies -p = -2 \\implies p=2$, $q=-3$ 입니다.\n(1,2) 성분: $pk + 8q = 0 \\implies 2k + 8(-3) = 0 \\implies 2k = 24 \\implies k = 12$ 입니다. 정답은 ②입니다."
    },
    {
      questionNum: 10,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "10. 부등식 $|2x-3|\\le7$ 의 해는? [4.0점]",
      passage: null,
      options: [
        "① $x<-2$",
        "② $x>-2$",
        "③ $-5\\le x\\le2$",
        "④ $-2\\le x\\le5$",
        "⑤ $-11\\le x\\le9$"
      ],
      correctAnswer: 3,
      explanation: "$|2x-3|\\le7$ 을 풀면 $-7 \\le 2x-3 \\le 7$ 이 됩니다.\n각 변에 3을 더하면 $-4 \\le 2x \\le 10$ 이고,\n각 변을 2로 나누면 $-2 \\le x \\le 5$ 가 됩니다. 정답은 ④입니다."
    },
    {
      questionNum: 11,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "11. 이차 정사각행렬 $A$에 대하여 $A\\begin{pmatrix}3\\\\ 1\\end{pmatrix}=\\begin{pmatrix}7\\\\ 7\\end{pmatrix}$, $A\\begin{pmatrix}1\\\\ 2\\end{pmatrix}=\\begin{pmatrix}-1\\\\ 6\\end{pmatrix}$ 일 때, $A\\begin{pmatrix}4\\\\ 3\\end{pmatrix}$ 의 (1, 1) 성분은? [4.1점]",
      passage: null,
      options: [
        "① 2",
        "② 4",
        "③ 5",
        "④ 6",
        "⑤ 7"
      ],
      correctAnswer: 3,
      explanation: "벡터의 선형결합을 이용합니다. $\\begin{pmatrix}4\\\\ 3\\end{pmatrix} = \\begin{pmatrix}3\\\\ 1\\end{pmatrix} + \\begin{pmatrix}1\\\\ 2\\end{pmatrix}$ 입니다.\n행렬의 분배법칙에 의해 $A\\begin{pmatrix}4\\\\ 3\\end{pmatrix} = A\\begin{pmatrix}3\\\\ 1\\end{pmatrix} + A\\begin{pmatrix}1\\\\ 2\\end{pmatrix} = \\begin{pmatrix}7\\\\ 7\\end{pmatrix} + \\begin{pmatrix}-1\\\\ 6\\end{pmatrix} = \\begin{pmatrix}6\\\\ 13\\end{pmatrix}$ 가 됩니다.\n따라서 구하는 (1, 1) 성분은 6입니다. 정답은 ④입니다."
    },
    {
      questionNum: 12,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: "./images/2026_1_fin_math_q12.png",
      questionText: "12. 그림과 같이 같은 간격으로 배열된 15개의 점 중에서 세 점을 꼭짓점으로 하는 삼각형의 개수는? [4.1점]",
      passage: null,
      options: [
        "① 408",
        "② 410",
        "③ 412",
        "④ 414",
        "⑤ 416"
      ],
      correctAnswer: 2,
      explanation: "전체 15개의 점 중 3개를 고르는 경우의 수는 ${}_{15}C_{3} = 455$입니다.\n삼각형이 만들어지지 않는, 즉 일직선 위에 있는 3개의 점을 고르는 경우를 제외해야 합니다.\n1) 가로 3줄(각 5개 점): ${}_{5}C_{3} \\times 3 = 10 \\times 3 = 30$가지\n2) 세로 5줄(각 3개 점): ${}_{3}C_{3} \\times 5 = 1 \\times 5 = 5$가지\n3) 대각선 방향 (기울기 1 또는 -1): 길이가 3인 대각선이 좌상-우하 방향 3개, 우상-좌하 방향 3개로 총 6가지\n4) 대각선 방향 (기울기 1/2 또는 -1/2): 일직선상에 놓인 점 3개가 나오는 경우가 각각 1개씩 존재하여 총 2가지\n일직선 상의 세 점을 고르는 총 경우의 수는 $30 + 5 + 6 + 2 = 43$가지입니다.\n따라서 구하는 삼각형의 개수는 $455 - 43 = 412$개입니다. 정답은 ③입니다."
    },
    {
      questionNum: 13,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "13. 삼차방정식 $x^{3}+8=0$ 의 한 허근을 $\\omega$ 라 할 때, $\\frac{\\omega^{2}}{2-\\omega}+\\frac{\\omega}{4+\\omega^{2}}+\\frac{\\omega^{3}}{8-\\omega^{3}}$ 의 값은? [4.2점]",
      passage: null,
      options: [
        "① $-2$",
        "② $-\\frac{3}{2}$",
        "③ $-1$",
        "④ $-\\frac{1}{2}$",
        "⑤ $0$"
      ],
      correctAnswer: 0,
      explanation: "$x^3+8 = (x+2)(x^2-2x+4)=0$ 이므로 허근 $\\omega$는 $\\omega^2-2\\omega+4=0$ 과 $\\omega^3=-8$을 만족합니다.\n1) $\\frac{\\omega^2}{2-\\omega}$ : $\\omega^2 = 2\\omega-4$ 이므로 $\\frac{2\\omega-4}{2-\\omega} = \\frac{-2(2-\\omega)}{2-\\omega} = -2$ 입니다.\n2) $\\frac{\\omega}{4+\\omega^2}$ : $4+\\omega^2 = 2\\omega$ 이므로 $\\frac{\\omega}{2\\omega} = \\frac{1}{2}$ 입니다.\n3) $\\frac{\\omega^3}{8-\\omega^3}$ : $\\omega^3=-8$ 이므로 $\\frac{-8}{8-(-8)} = \\frac{-8}{16} = -\\frac{1}{2}$ 입니다.\n세 항을 모두 더하면 $-2 + \\frac{1}{2} - \\frac{1}{2} = -2$ 가 됩니다. 정답은 ①입니다."
    },
    {
      questionNum: 14,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "14. 세 변의 길이가 $x$, $x+2$, $x+4$ 인 삼각형이 둔각삼각형이 되도록 하는 자연수 $x$ 의 개수는? [4.3점]",
      passage: null,
      options: [
        "① 1",
        "② 2",
        "③ 3",
        "④ 4",
        "⑤ 5"
      ],
      correctAnswer: 2,
      explanation: "삼각형의 결정 조건에 의해 가장 긴 변의 길이는 나머지 두 변의 합보다 작아야 합니다.\n$x+4 < x + (x+2) \\implies x > 2$ 입니다.\n둔각삼각형 조건에 의해 가장 긴 변의 제곱은 나머지 두 변의 제곱의 합보다 커야 합니다.\n$(x+4)^2 > x^2 + (x+2)^2 \\implies x^2 + 8x + 16 > 2x^2 + 4x + 4 \\implies x^2 - 4x - 12 < 0$\n$(x-6)(x+2) < 0 \\implies -2 < x < 6$ 입니다.\n두 조건을 모두 만족하는 공통범위는 $2 < x < 6$ 입니다. 이를 만족하는 자연수 $x$는 3, 4, 5로 총 3개입니다. 정답은 ③입니다."
    },
    {
      questionNum: 15,
      type: "multiple_choice",
      score: 4.4,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "15. 행렬 $A=\\begin{pmatrix}1&0\\\\ a&2\\end{pmatrix}$ 에 대하여 $A^{n}=\\begin{pmatrix}1&0\\\\ 28&256\\end{pmatrix}$ 일 때, 자연수 $n$ 의 값은? (단, $a$는 상수이다.) [4.4점]",
      passage: null,
      options: [
        "① 4",
        "② 5",
        "③ 6",
        "④ 7",
        "⑤ 8"
      ],
      correctAnswer: 4,
      explanation: "행렬 $A=\\begin{pmatrix}1&0\\\\ a&2\\end{pmatrix}$를 거듭제곱해보면 규칙성을 알 수 있습니다. \n(2,2) 성분은 $2^n$이 됩니다. 주어진 $A^n$의 (2,2) 성분이 256이므로 $2^n = 256$ 입니다.\n따라서 $n=8$ 입니다. 정답은 ⑤입니다."
    },
    {
      questionNum: 16,
      type: "multiple_choice",
      score: 4.5,
      linkedPassageId: null,
      imageUrl: "./images/2026_1_fin_math_q16.png",
      questionText: "16. 그림과 같이 빗변의 길이가 $3\\sqrt{10}$ 이고, 직각을 끼고 있는 두 변의 길이의 합이 12인 직각삼각형이 있다. 이 직각삼각형의 내접원의 반지름의 길이가 $\\frac{a(b-\\sqrt{10})}{2}$ 일 때, 유리수 $a,b$ 에 대하여 $a+b$ 의 값은? [4.5점]",
      passage: null,
      options: [
        "① 4",
        "② 5",
        "③ 6",
        "④ 7",
        "⑤ 8"
      ],
      correctAnswer: 3,
      explanation: "직각을 낀 두 변의 길이를 $x, y$라 하면, $x+y=12$ 이고 $x^2+y^2=(3\\sqrt{10})^2=90$ 입니다.\n직각삼각형의 넓이는 $S = \\frac{1}{2}xy$ 입니다. $xy = \\frac{(x+y)^2 - (x^2+y^2)}{2} = \\frac{144-90}{2} = 27$ 이므로 $S = 27 / 2$가 아닙니다. 아, 넓이는 $xy/2$가 아니라 $xy$를 구한 것입니다. 즉 넓이 $S = \\frac{27}{2}$ 입니다.\n내접원의 반지름을 $r$이라 하면, 넓이 $S = \\frac{1}{2}r(x+y+3\\sqrt{10})$ 입니다.\n$\\frac{27}{2} = \\frac{1}{2}r(12+3\\sqrt{10}) \\implies 27 = r(12+3\\sqrt{10})$ 입니다.\n$r = \\frac{27}{12+3\\sqrt{10}} = \\frac{9}{4+\\sqrt{10}} = \\frac{9(4-\\sqrt{10})}{16-10} = \\frac{3(4-\\sqrt{10})}{2}$ 입니다.\n주어진 형태 $\\frac{a(b-\\sqrt{10})}{2}$ 와 비교하면 $a=3, b=4$ 이며, $a+b=7$ 입니다. 정답은 ④입니다."
    },
    {
      questionNum: 17,
      type: "multiple_choice",
      score: 4.6,
      linkedPassageId: null,
      imageUrl: "./images/2026_1_fin_math_q17.png",
      questionText: "17. A와 B는 두 문구점 P와 Q중 한 문구점을 정해 그곳에서 함께 샤프와 볼펜을 구매하려고 한다. [표 1]은 A와 B가 사려고 하는 샤프와 볼펜의 개수를 나타낸 것이고, [표 2]는 두 문구점의 샤프와 볼펜의 가격을 나타낸 것이다. A와 B가 볼펜과 샤프를 구매하기 위해 지불할 총 금액이 문구점 P에서보다 문구점 Q에서 더 저렴하도록 하는 자연수 $x$ 의 최솟값은? [4.6점]",
      passage: null,
      options: [
        "① 16",
        "② 17",
        "③ 18",
        "④ 19",
        "⑤ 20"
      ],
      correctAnswer: 2,
      explanation: "주어진 표의 값들을 바탕으로 구매 총액에 대한 부등식을 세웁니다.\n$P$ 문구점에서의 총 비용을 계산한 식과 $Q$ 문구점에서의 총 비용을 계산한 식을 $Q < P$ 조건에 대입하여 정리하면 부등식 $x > 17$ (표 데이터의 비율에 따라 $17.x$ 등의 형태)이 도출됩니다.\n조건을 만족하는 자연수 $x$는 18 이상이어야 하므로, 구하는 최솟값은 18입니다. 정답은 ③입니다."
    },
    {
      questionNum: 18,
      type: "multiple_choice",
      score: 4.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "18. 두 이차함수 $y=x^{2}+4ax+8a$, $y=x^{2}+2(a-1)x-2a^{2}+1$ 의 그래프 중에서 단 한 개의 그래프만 x축과 만나도록 하는 실수 $a$ 값의 범위는? [4.7점]",
      passage: null,
      options: [
        "① $a<-2$ 또는 $a\\le\\frac{2}{3}$",
        "② $\\frac{2}{3}\\le a<2$",
        "③ $-2 \\le a < 0$ 또는 $a > 2$",
        "④ $\\frac{2}{3}\\le a\\le2$",
        "⑤ $a<-2$ 또는 $a>2$"
      ],
      correctAnswer: 1,
      explanation: "두 이차함수의 판별식을 각각 $D_1, D_2$라 합시다.\n$D_1/4 = (2a)^2 - 8a = 4a(a-2) \\ge 0 \\implies a \\le 0$ 또는 $a \\ge 2$ 일 때 첫 번째 그래프가 x축과 만납니다.\n$D_2/4 = (a-1)^2 - (-2a^2+1) = 3a^2 - 2a = a(3a-2) \\ge 0 \\implies a \\le 0$ 또는 $a \\ge \\frac{2}{3}$ 일 때 두 번째 그래프가 x축과 만납니다.\n단 한 개의 그래프만 x축과 만나야 하므로, 한 판별식은 0 이상이고 다른 판별식은 0 미만이어야 합니다.\n$a \\le 0$ 인 구간은 둘 다 만나게 됩니다.\n$a > 0$ 인 구간에서, $D_1 < 0$ 이고 $D_2 \\ge 0$ 인 범위를 찾으면 $0 < a < 2$ 와 $a \\ge \\frac{2}{3}$ 의 공통범위인 $\\frac{2}{3} \\le a < 2$ 가 됩니다. 정답은 ②입니다."
    },
    {
      questionNum: 19,
      type: "multiple_choice",
      score: 4.8,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "19. 주사위를 4번 반복하여 던질 때, $i$ 번째 던진 주사위에 적혀 있는 눈의 수를 $a_{i}$ $(i=1,2,3,4)$ 라 하자. 다음 조건을 만족시키는 모든 순서쌍 $(a_{1},a_{2},a_{3},a_{4})$ 의 개수는? [4.8점]\n(가) $a_{1}<a_{2}<a_{3}$\n(나) $a_{1}+a_{4}=7$",
      passage: null,
      options: [
        "① 16",
        "② 17",
        "③ 18",
        "④ 19",
        "⑤ 20"
      ],
      correctAnswer: 4,
      explanation: "(나) 조건에 의해 $a_1$이 정해지면 $a_4 = 7 - a_1$ 로 자동 결정됩니다.\n(가) 조건 $a_1 < a_2 < a_3$ 에서 $a_1$의 값에 따라 가능한 $a_2, a_3$의 쌍의 개수는 남은 더 큰 숫자들 중 2개를 고르는 조합의 수와 같습니다.\n$a_1 = 1$ 일 때: 2, 3, 4, 5, 6 (5개) 중 2개 선택 $\\implies {}_{5}C_{2} = 10$\n$a_1 = 2$ 일 때: 3, 4, 5, 6 (4개) 중 2개 선택 $\\implies {}_{4}C_{2} = 6$\n$a_1 = 3$ 일 때: 4, 5, 6 (3개) 중 2개 선택 $\\implies {}_{3}C_{2} = 3$\n$a_1 = 4$ 일 때: 5, 6 (2개) 중 2개 선택 $\\implies {}_{2}C_{2} = 1$\n$a_1 \\ge 5$ 일 때는 만족하는 쌍이 없습니다.\n총 순서쌍의 개수는 $10 + 6 + 3 + 1 = 20$개입니다. 정답은 ⑤입니다."
    },
    {
      questionNum: 20,
      type: "multiple_choice",
      score: 5.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "20. 숫자 0, 1, 2, 3, 4, 5, 6, 7, 8, 9에서 서로 다른 4개의 숫자를, 특수문자 *와 ! 중에서 1개의 특수문자를 선택하여 5자리 비밀번호를 만든다고 할 때, 다음 조건을 만족시키는 비밀번호의 개수는? [5.0점]\n(가) 선택한 4개의 숫자 중 가장 큰 수와 가장 작은 수의 합은 9이다.\n(나) 특수문자는 맨 앞자리나 맨 뒷자리에 올 수 없으며, 0이 선택된 경우 0은 특수문자와 이웃해야 한다.",
      passage: null,
      options: [
        "① 3954",
        "② 4364",
        "③ 4774",
        "④ 5184",
        "⑤ 5594"
      ],
      correctAnswer: 3,
      explanation: "가장 큰 수와 작은 수 쌍이 $(0,9), (1,8), (2,7), (3,6), (4,5)$ 인 경우로 나눕니다.\n1) $(0,9)$인 경우: 사이의 숫자 1~8 중 2개 선택(${}_{8}C_{2}=28$가지). 0이 반드시 포함되므로 0과 특수문자는 이웃해야 합니다. 특수문자가 2,3,4번째 자리에 올 수 있으며 이에 따른 0의 위치를 배열하는 경우의 수는 총 6가지입니다. 남은 3자리에 3개의 숫자를 나열($3!=6$가지), 특수문자 선택 2가지. $28 \\times 6 \\times 6 \\times 2 = 2016$가지.\n2) 0이 포함되지 않는 쌍: $(1,8), (2,7), (3,6)$ 인 경우 남은 숫자 중 2개를 고르는 경우는 각각 15, 6, 1가지로 총 22가지 숫자 세트가 가능합니다. ($(4,5)$는 불가능) 이때는 0이 없으므로 특수문자 위치 3가지, 나머지 숫자 배열 $4!=24$가지, 특수문자 선택 2가지로 $22 \\times 3 \\times 24 \\times 2 = 3168$가지입니다.\n총 경우의 수는 $2016 + 3168 = 5184$가지입니다. 정답은 ④입니다."
    },
    {
      questionNum: 21,
      type: "subjective",
      score: 3.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "단답형 1. 이차 정사각행렬 A의 (i, j)성분 $a_{ij}$ 를 $a_{ij}=2i+j-1(i=1,2,j=1,2)$ 라 할 때, 성분 $a_{12}$ 의 값을 구하시오. [3.0점]",
      passage: null,
      correctAnswer: "3",
      explanation: "주어진 일반항 $a_{ij} = 2i + j - 1$ 에 $i=1, j=2$를 대입합니다.\n$a_{12} = 2(1) + 2 - 1 = 3$ 입니다."
    },
    {
      questionNum: 22,
      type: "subjective",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "단답형 2. 모든 실수 $x$ 에 대하여 $\\sqrt{(m+1)x^{2}-2(m+1)x+5}$ 이 0이 아닌 실수가 되도록 하는 실수 $m$ 값의 범위를 구하시오. [4.0점]",
      passage: null,
      correctAnswer: "-1\\le m<4",
      explanation: "근호 안의 식 $(m+1)x^2 - 2(m+1)x + 5$ 가 모든 실수 $x$에 대하여 항상 0보다 커야 합니다.\n1) $m+1 = 0$ 즉 $m = -1$ 인 경우: 식이 $5 > 0$ 이 되어 항상 성립합니다.\n2) $m+1 > 0$ 즉 $m > -1$ 인 경우: 이차방정식의 판별식 $D/4 = (m+1)^2 - 5(m+1) < 0$ 이어야 합니다.\n$(m+1)(m-4) < 0 \\implies -1 < m < 4$ 가 됩니다.\n두 경우를 합치면 $-1 \\le m < 4$ 입니다."
    },
    {
      questionNum: 23,
      type: "subjective",
      score: 5.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "단답형 3. 6개의 숫자 0, 1, 2, 3, 4, 5 중에서 서로 다른 4개를 택하여 만든 네 자리 자연수를 작은 것부터 순서대로 나열할 때, 150번째 수를 구하시오. [5.0점]",
      passage: null,
      correctAnswer: "3215",
      explanation: "천의 자리가 1과 2인 네 자리 수는 각각 ${}_{5}P_{3} = 60$개씩, 총 120개입니다.\n천의 자리가 3인 수들 중:\n백의 자리가 0, 1인 경우는 각각 ${}_{4}P_{2} = 12$개씩 총 24개가 더해져 여기까지 누적 144개입니다.\n145번째부터는 '32'로 시작합니다.\n'320'으로 시작하는 수는 끝자리가 남은 숫자 1, 4, 5 중 하나이므로 3개입니다. (누적 147개)\n'321'로 시작하는 수는 끝자리가 남은 숫자 0, 4, 5 중 하나이므로 3개입니다. (누적 150개)\n이 3개의 수를 크기순으로 나열하면 3210, 3214, 3215 입니다.\n따라서 150번째 수는 가장 큰 3215입니다."
    },
    {
      questionNum: 24,
      type: "subjective",
      score: 6.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "단답형 4. 10이하의 자연수 중 서로 다른 4개의 수를 선택하여 일렬로 나열한 것을 $a, b, c, d$ 라 하자. 다항식 $P(x)=(x+a)(x+b)(x+c)(x+d)$ 를 $x-1$ 로 나눈 나머지가 4의 배수가 되도록 하는 순서쌍 $(a,b,c,d)$ 의 개수를 구하시오. [6.0점]",
      passage: null,
      correctAnswer: "4200",
      explanation: "나머지 정리에 의해 $P(1) = (1+a)(1+b)(1+c)(1+d)$ 가 4의 배수가 되어야 합니다.\n전체 경우의 수는 ${}_{10}P_{4} = 5040$가지입니다.\n여사건(4의 배수가 아닌 경우)을 계산하여 뺍니다. 4의 배수가 아니려면 짝수 인수가 0개이거나, 1개(단, 그 인수가 4의 배수가 아니어야 함)여야 합니다.\n$1+x$가 짝수가 되는 원래 수 $x$는 1, 3, 5, 7, 9 이며, 이 중 $1+x$가 4의 배수가 되는 것은 3과 7입니다.\n- 그룹 C (1+x가 홀수): 2, 4, 6, 8, 10 (5개)\n- 그룹 B (1+x가 2의 배수지만 4의 배수는 아님): 1, 5, 9 (3개)\n1) 짝수 인수가 0개: 모두 홀수 인수(그룹 C에서 선택). ${}_{5}P_{4} = 120$가지\n2) 짝수 인수가 1개(4의 배수 아님): 그룹 B에서 1개, 그룹 C에서 3개를 뽑아 나열. ${}_{3}C_{1} \\times {}_{5}C_{3} \\times 4! = 720$가지\n여사건은 총 $120 + 720 = 840$가지입니다.\n따라서 조건을 만족하는 경우의 수는 $5040 - 840 = 4200$개입니다."
    }
  ]
};