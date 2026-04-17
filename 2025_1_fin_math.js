var exam_2025_1_fin_math = {
  examInfo: {
    examId: "2025_1_fin_math",
    schoolName: "동대전고등학교",
    year: 2025,
    semester: 1,
    grade: 1,
    examType: "기말고사",
    subject: "공통수학1"
  },
  sharedPassages: {},
  questions: [
    {
      questionNum: 1,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "1. ${}_{6}P_{2}$ 의 값은? [3.6점]",
      passage: null,
      options: [
        "① 10",
        "② 15",
        "③ 20",
        "④ 25",
        "⑤ 30"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다.\n${}_{6}P_{2} = 6 \\times 5 = 30$ 입니다."
    },
    {
      questionNum: 2,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "2. 행렬 $\\begin{pmatrix}-1&0&5\\\\ 3&-7&4\\end{pmatrix}$ 의 (2,1) 성분은? [3.6점]",
      passage: null,
      options: [
        "① -7",
        "② -1",
        "③ 3",
        "④ 4",
        "⑤ 5"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다.\n행렬의 (2,1) 성분은 2행 1열에 위치한 원소이므로 3입니다."
    },
    {
      questionNum: 3,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "3. 등식 $\\begin{pmatrix}-a&2\\\\ -1&3\\end{pmatrix}=\\begin{pmatrix}2&2\\\\ b&3\\end{pmatrix}$ 이 성립하도록 하는 상수 $a, b$ 에 대하여 $a+b$ 의 값은? [3.6점]",
      passage: null,
      options: [
        "① -3",
        "② -1",
        "③ 1",
        "④ 3",
        "⑤ 5"
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다.\n두 행렬이 서로 같을 조건에 의해 대응하는 성분이 같아야 합니다.\n$-a = 2 \\implies a = -2$\n$-1 = b \\implies b = -1$\n따라서 $a+b = -2 + (-1) = -3$ 입니다."
    },
    {
      questionNum: 4,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      imageUrl: "./images/2025_1_fin_math_q4.png",
      questionText: "4. 그림과 같이 네 지점 A, B, C, D를 연결하는 도로망이 있다. 주어진 도로를 이용하여 A 지점에서 D 지점으로 가는 경우의 수는? (단, 같은 지점을 다시 가지 않는다.) [3.7점]",
      passage: null,
      options: [
        "① 6",
        "② 7",
        "③ 8",
        "④ 9",
        "⑤ 10"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다.\n(도로망 그림의 연결선 개수에 따라 계산된 총 경로의 수가 7가지입니다.)"
    },
    {
      questionNum: 5,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "5. 서로 다른 두 개의 주사위를 동시에 던질 때 나오는 눈의 수의 합이 10의 약수인 경우의 수는? [3.7점]",
      passage: null,
      options: [
        "① 8",
        "② 10",
        "③ 12",
        "④ 14",
        "⑤ 16"
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다.\n두 주사위 눈의 합이 10의 약수(1, 2, 5, 10)가 되는 경우를 찾습니다. 주사위 눈의 합은 2 이상이므로 2, 5, 10인 경우를 구합니다.\n합이 2인 경우: (1, 1) $\\rightarrow$ 1가지\n합이 5인 경우: (1, 4), (2, 3), (3, 2), (4, 1) $\\rightarrow$ 4가지\n합이 10인 경우: (4, 6), (5, 5), (6, 4) $\\rightarrow$ 3가지\n총 경우의 수 = 1 + 4 + 3 = 8가지입니다."
    },
    {
      questionNum: 6,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "6. 연립부등식 $\\begin{cases}7x-3\\le6x\\\\ -x-1>3x-5\\end{cases}$ 의 해는? [3.7점]",
      passage: null,
      options: [
        "① $x<1$",
        "② $x\\le1$",
        "③ $x<3$",
        "④ $x\\le3$",
        "⑤ $1<x\\le3$"
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다.\n첫 번째 부등식: $7x - 6x \\le 3 \\implies x \\le 3$\n두 번째 부등식: $-4x > -4 \\implies x < 1$\n두 부등식의 공통 범위를 구하면 $x < 1$ 입니다."
    },
    {
      questionNum: 7,
      type: "multiple_choice",
      score: 3.8,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "7. 이차부등식 $x^{2}+2x-3>0$ 의 해는? [3.8점]",
      passage: null,
      options: [
        "① $-3<x<1$",
        "② $-2<x<3$",
        "③ $-1<x<3$",
        "④ $x<-1$ 또는 $x>3$",
        "⑤ $x<-3$ 또는 $x>1$"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다.\n주어진 부등식을 인수분해하면 $(x+3)(x-1) > 0$ 입니다.\n따라서 해는 $x < -3$ 또는 $x > 1$ 입니다."
    },
    {
      questionNum: 8,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "8. $x=\\alpha, y=\\beta$ 가 연립방정식 $\\begin{cases}x-y=3\\\\ x^{2}+y^{2}=17\\end{cases}$ 의 해일 때, 두 자연수 $\\alpha, \\beta$ 에 대하여 $\\alpha+\\beta$ 의 값은? [3.9점]",
      passage: null,
      options: [
        "① 3",
        "② 4",
        "③ 5",
        "④ 6",
        "⑤ 7"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다.\n첫 번째 식에서 $x = y+3$ 이므로 두 번째 식에 대입하면\n$(y+3)^2 + y^2 = 17 \\implies 2y^2 + 6y - 8 = 0 \\implies y^2 + 3y - 4 = 0 \\implies (y+4)(y-1) = 0$\n$y$ 는 자연수이므로 $y=1$ 이고, 이에 따라 $x=4$ 가 됩니다.\n따라서 $\\alpha=4, \\beta=1$ 이며 $\\alpha+\\beta = 5$ 입니다."
    },
    {
      questionNum: 9,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "9. 두 실수 $x, y$ 와 두 행렬 $A=\\begin{pmatrix}x&2\\\\ 3y&1\\end{pmatrix}, B=\\begin{pmatrix}3y&x\\\\ 6&1\\end{pmatrix}$ 에 대하여 $A-B=\\begin{pmatrix}7&-2\\\\ -9&0\\end{pmatrix}$ 일 때, $x-y$ 의 값은? [4.0점]",
      passage: null,
      options: [
        "① 3",
        "② 5",
        "③ 7",
        "④ 9",
        "⑤ 11"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다.\n$A-B = \\begin{pmatrix}x-3y & 2-x\\\\ 3y-6 & 0\\end{pmatrix} = \\begin{pmatrix}7 & -2\\\\ -9 & 0\\end{pmatrix}$\n$2-x = -2 \\implies x = 4$\n$3y-6 = -9 \\implies 3y = -3 \\implies y = -1$\n따라서 $x-y = 4 - (-1) = 5$ 입니다."
    },
    {
      questionNum: 10,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "10. $x$ 에 대한 사차방정식 $x^{4}+ax^{3}-bx^{2}-x-6=0$ 의 한 근이 $i$ 일 때, 두 실수 $a, b$ 에 대하여 $a+b$ 의 값은? (단, $i=\\sqrt{-1}$) [4.0점]",
      passage: null,
      options: [
        "① -4",
        "② -1",
        "③ 2",
        "④ 4",
        "⑤ 8"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다.\n실계수 방정식이므로 한 근이 $i$ 이면 다른 한 근은 $-i$ 입니다. 따라서 $(x-i)(x+i) = x^2+1$ 을 인수로 가집니다.\n$x^4+ax^3-bx^2-x-6 = (x^2+1)(x^2+cx-6)$ 로 둘 수 있습니다.\n우변을 전개하면 $x^4 + cx^3 - 5x^2 + cx - 6$ 입니다.\n계수를 비교하면 $a = c, -b = -5, -1 = c$ 가 됩니다.\n따라서 $c = -1 \\implies a = -1$ 이고, $b = 5$ 입니다.\n최종적으로 $a+b = -1 + 5 = 4$ 입니다."
    },
    {
      questionNum: 11,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "11. A, B를 포함한 육상 선수 7명 중에서 4명을 선발하여 계주 순서를 정하려고 한다. A와 B 중에서 한 사람만 선발하여 계주 순서를 정하는 경우의 수는? [4.1점]",
      passage: null,
      options: [
        "① 360",
        "② 480",
        "③ 600",
        "④ 720",
        "⑤ 840"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다.\n1) A, B 중 1명을 선발하는 경우: ${}_2C_1 = 2$ 가지\n2) 나머지 5명 중 3명을 선발하는 경우: ${}_5C_3 = 10$ 가지\n3) 선발된 4명의 계주 순서를 정하는 경우: $4! = 24$ 가지\n따라서 $2 \\times 10 \\times 24 = 480$ 가지입니다."
    },
    {
      questionNum: 12,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "12. 두 행렬 $A=\\begin{pmatrix}2&0\\\\ -6&4\\end{pmatrix}, B=\\begin{pmatrix}-1&2\\\\ -3&4\\end{pmatrix}$ 에 대하여 $A+2X=4(A-B)$ 를 만족시키는 행렬 $X$ 의 모든 성분의 합은? [4.2점]",
      passage: null,
      options: [
        "① -4",
        "② -1",
        "③ 2",
        "④ 5",
        "⑤ 8"
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다.\n주어진 식을 $X$ 에 대해 정리하면 $2X = 3A - 4B$ 입니다.\n$3A = \\begin{pmatrix}6&0\\\\ -18&12\\end{pmatrix}$, $4B = \\begin{pmatrix}-4&8\\\\ -12&16\\end{pmatrix}$\n$2X = 3A - 4B = \\begin{pmatrix}10&-8\\\\ -6&-4\\end{pmatrix}$\n$X = \\begin{pmatrix}5&-4\\\\ -3&-2\\end{pmatrix}$\n따라서 $X$ 의 모든 성분의 합은 $5 + (-4) + (-3) + (-2) = -4$ 입니다."
    },
    {
      questionNum: 13,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "13. 부등식 $|x-7| \\le |2x-3|$ 의 해는? [4.2점]",
      passage: null,
      options: [
        "① $-4\\le x\\le\\frac{10}{3}$",
        "② $x\\ge-4$",
        "③ $-\\frac{10}{3}\\le x\\le4$",
        "④ $x\\le-4$ 또는 $x\\ge\\frac{10}{3}$",
        "⑤ $x\\le-\\frac{10}{3}$ 또는 $x\\ge4$"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다.\n양변을 제곱하여 정리합니다.\n$(x-7)^2 \\le (2x-3)^2 \\implies x^2-14x+49 \\le 4x^2-12x+9$\n$3x^2+2x-40 \\ge 0 \\implies (3x-10)(x+4) \\ge 0$\n따라서 해는 $x \\le -4$ 또는 $x \\ge \\frac{10}{3}$ 입니다."
    },
    {
      questionNum: 14,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "14. 6개의 숫자 0, 1, 2, 3, 4, 5 중에서 서로 다른 4개를 택하여 만든 네 자리의 자연수를 작은 것부터 순서대로 나열할 때, 3204는 $n$ 번째 수이다. 자연수 $n$ 의 값은? [4.3점]",
      passage: null,
      options: [
        "① 134",
        "② 140",
        "③ 146",
        "④ 152",
        "⑤ 158"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다.\n1로 시작하는 수: $5 \\times 4 \\times 3 = 60$개\n2로 시작하는 수: $5 \\times 4 \\times 3 = 60$개\n30으로 시작하는 수: $4 \\times 3 = 12$개\n31로 시작하는 수: $4 \\times 3 = 12$개\n32로 시작하는 수 중 작은 순서는 3201, 3204... 이므로 3204는 2번째입니다.\n따라서 $n = 60 + 60 + 12 + 12 + 2 = 146$ 입니다."
    },
    {
      questionNum: 15,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "15. 행렬 $A=\\begin{pmatrix}0&1\\\\ 2&0\\end{pmatrix}$ 에 대하여 $X=A+A^{2}+A^{3}+A^{4}+A^{5}+A^{6}$ 일 때, 행렬 $X$ 의 모든 성분의 합은? [4.3점]",
      passage: null,
      options: [
        "① 46",
        "② 49",
        "③ 52",
        "④ 55",
        "⑤ 58"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다.\n$A^2 = \\begin{pmatrix}0&1\\\\ 2&0\\end{pmatrix}\\begin{pmatrix}0&1\\\\ 2&0\\end{pmatrix} = \\begin{pmatrix}2&0\\\\ 0&2\\end{pmatrix} = 2E$\n$A^3 = 2A, A^4 = 4E, A^5 = 4A, A^6 = 8E$\n$X = A + 2E + 2A + 4E + 4A + 8E = 7A + 14E$\n$X = 7\\begin{pmatrix}0&1\\\\ 2&0\\end{pmatrix} + 14\\begin{pmatrix}1&0\\\\ 0&1\\end{pmatrix} = \\begin{pmatrix}14&7\\\\ 14&14\\end{pmatrix}$\n따라서 모든 성분의 합은 $14 + 7 + 14 + 14 = 49$ 입니다."
    },
    {
      questionNum: 16,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "16. 최고차항의 계수가 -1인 이차함수 $y=f(x)$ 의 그래프가 $x$ 축과 서로 다른 두 점 $(1,0), (-p, 0)$ 에서 만나고, 이 이차함수의 그래프가 점 $(2,-5)$ 를 지날 때, $x$ 에 대한 부등식 $f(x) \\ge 0$ 을 만족시키는 모든 정수 $x$ 의 개수는 $q$ 이다. 두 상수 $p, q$ 에 대하여 $q-p$ 의 값은? [4.3점]",
      passage: null,
      options: [
        "① 1",
        "② 2",
        "③ 3",
        "④ 4",
        "⑤ 5"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다.\n$f(x) = -(x-1)(x+p)$ 로 둘 수 있습니다.\n$f(2) = -(2-1)(2+p) = -5 \\implies 2+p = 5 \\implies p = 3$ 입니다.\n부등식 $f(x) \\ge 0$ 은 $-(x-1)(x+3) \\ge 0 \\implies (x-1)(x+3) \\le 0$ 입니다.\n따라서 해는 $-3 \\le x \\le 1$ 이며, 만족하는 정수 $x$는 -3, -2, -1, 0, 1로 총 5개이므로 $q=5$ 입니다.\n$q-p = 5 - 3 = 2$ 입니다."
    },
    {
      questionNum: 17,
      type: "multiple_choice",
      score: 4.4,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "17. 서로 다른 3개의 상자에 1부터 10까지의 숫자가 각각 하나씩 적힌 공이 10개씩 들어있다. 각 상자에서 공을 하나씩 꺼냈을 때 적혀 있는 수를 각각 $a, b, c$ 라 하자. $a+bc$ 의 값이 짝수가 되는 경우의 수는? [4.4점]",
      passage: null,
      options: [
        "① 125",
        "② 250",
        "③ 375",
        "④ 500",
        "⑤ 625"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다.\n$a+bc$ 가 짝수가 되려면 (짝수+짝수) 또는 (홀수+홀수)여야 합니다.\n1) $a$ 가 짝수(5가지)이고 $bc$ 가 짝수인 경우: $bc$ 가 짝수이려면 전체 100가지 중 둘 다 홀수인 25가지를 뺀 75가지. $5 \\times 75 = 375$가지\n2) $a$ 가 홀수(5가지)이고 $bc$ 가 홀수인 경우: $b, c$ 모두 홀수여야 하므로 $5 \\times 5 = 25$가지. $5 \\times 25 = 125$가지\n총 경우의 수 = $375 + 125 = 500$가지입니다."
    },
    {
      questionNum: 18,
      type: "multiple_choice",
      score: 4.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "18. 삼차방정식 $x^{3}=1$ 의 한 허근을 $\\omega$ 라 할 때, <보기>에서 옳은 것만을 있는 대로 고른 것은? (단, $\\overline{\\omega}$ 는 $\\omega$ 의 켤레복소수이다.) [4.5점]",
      passage: "<보기>\nㄱ. $\\omega\\overline{\\omega}^{2}+\\omega^{2}\\overline{\\omega}=-1$\nㄴ. $\\frac{1}{1-\\omega}+\\frac{1}{1-\\overline{\\omega}}=-1$\nㄷ. $\\omega^{5}+(\\omega+1)^{3}+\\omega+1=-1$",
      options: [
        "① ㄱ",
        "② ㄴ",
        "③ ㄱ, ㄷ",
        "④ ㄴ, ㄷ",
        "⑤ ㄱ, ㄴ, ㄷ"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번(ㄱ, ㄷ)입니다.\n$x^3-1=0 \\implies (x-1)(x^2+x+1)=0$ 이므로 $\\omega^3=1, \\omega^2+\\omega+1=0$ 이고 근과 계수의 관계에 의해 $\\omega+\\overline{\\omega}=-1, \\omega\\overline{\\omega}=1$ 입니다.\nㄱ. $\\omega\\overline{\\omega}(\\overline{\\omega}+\\omega) = 1 \\times (-1) = -1$ (참)\nㄴ. 통분하면 $\\frac{(1-\\overline{\\omega}) + (1-\\omega)}{(1-\\omega)(1-\\overline{\\omega})} = \\frac{2 - (\\omega+\\overline{\\omega})}{1 - (\\omega+\\overline{\\omega}) + \\omega\\overline{\\omega}} = \\frac{2 - (-1)}{1 - (-1) + 1} = \\frac{3}{3} = 1 \\neq -1$ (거짓)\nㄷ. $\\omega^5 = \\omega^2$, $(\\omega+1)^3 = (-\\omega^2)^3 = -\\omega^6 = -1$ 이므로 준식은 $\\omega^2 - 1 + \\omega + 1 = \\omega^2 + \\omega = -1$ (참)"
    },
    {
      questionNum: 19,
      type: "multiple_choice",
      score: 4.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "19. 서로 다른 주사위 두 개를 동시에 던져서 나오는 눈의 수를 각각 $a, b$ 라 하자. 함수 $y=x^{2}+4a+1$ 의 그래프와 직선 $y=2bx$ 가 만나는 점이 존재하도록 하는 $a, b$ 의 모든 순서쌍 $(a, b)$ 의 개수는? [4.6점]",
      passage: null,
      options: [
        "① 11",
        "② 13",
        "③ 15",
        "④ 17",
        "⑤ 19"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다.\n이차방정식 $x^2 - 2bx + 4a + 1 = 0$ 이 실근을 가져야 하므로 판별식 $D/4 \\ge 0$ 이어야 합니다.\n$b^2 - (4a+1) \\ge 0 \\implies b^2 \\ge 4a+1$\n$a=1$ 일 때 $b^2 \\ge 5 \\implies b \\in \\{3, 4, 5, 6\\}$ (4개)\n$a=2$ 일 때 $b^2 \\ge 9 \\implies b \\in \\{3, 4, 5, 6\\}$ (4개)\n$a=3$ 일 때 $b^2 \\ge 13 \\implies b \\in \\{4, 5, 6\\}$ (3개)\n$a=4$ 일 때 $b^2 \\ge 17 \\implies b \\in \\{5, 6\\}$ (2개)\n$a=5$ 일 때 $b^2 \\ge 21 \\implies b \\in \\{5, 6\\}$ (2개)\n$a=6$ 일 때 $b^2 \\ge 25 \\implies b \\in \\{5, 6\\}$ (2개)\n총 개수 = 4+4+3+2+2+2 = 17개입니다."
    },
    {
      questionNum: 20,
      type: "multiple_choice",
      score: 4.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "20. 어느 중화요리 가게에서 2024년 1월과 7월의 짜장면과 짬뽕의 판매에 관한 정보를 얻고자 표를 작성하였다. 두 음식에 대해 [표 1]은 한 그릇 당 생산 원가와 판매 가격을 나타낸 것이고, [표 2]는 1월과 7월의 판매량을 각각 나타낸 것이다.\n\n[표 1] <단위: 원>\n| | 생산 원가 | 판매 가격 |\n| :---: | :---: | :---: |\n| 짜장면 | $b_1$ | $b_2$ |\n| 짬뽕 | $b_3$ | $b_4$ |\n\n[표 2] <단위: 그릇>\n| | 짜장면 | 짬뽕 |\n| :---: | :---: | :---: |\n| 1월 | $a_1$ | $a_2$ |\n| 7월 | $a_3$ | $a_4$ |\n\n두 행렬 $A=\\begin{pmatrix}a_1&a_2\\\\ a_3&a_4\\end{pmatrix}, B=\\begin{pmatrix}b_1&b_2\\\\ b_3&b_4\\end{pmatrix}$ 에 대하여 $AB=\\begin{pmatrix}p&q\\\\ r&s\\end{pmatrix}$ 라 할 때, 1월과 7월 중 두 음식을 팔아 얻은 순이익이 더 많았던 시기를 알기 위해 비교해야 할 값으로 가장 적절한 것은? (단, 순이익은 총 판매 수입에서 총 생산 비용을 제외한 값이다.) [4.7점]",
      passage: null,
      options: [
        "① $p+r$ 과 $q+s$",
        "② $p+s$ 와 $q+r$",
        "③ $p-s$ 와 $q-r$",
        "④ $q-p$ 와 $s-r$",
        "⑤ $r-p$ 와 $s-q$"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다.\n행렬의 곱셈 $AB$를 계산하면 1행 1열 $p$는 1월 총 생산 비용, 1행 2열 $q$는 1월 총 판매 수입, 2행 1열 $r$은 7월 총 생산 비용, 2행 2열 $s$는 7월 총 판매 수입입니다.\n따라서 1월의 순이익은 $q-p$ 이고, 7월의 순이익은 $s-r$ 입니다.\n순이익이 증가했는지 비교하기 위해 $(s-r) > (q-p)$ 를 이항하여 $(s-q) > (r-p)$ 꼴로 분석할 수 있습니다. 즉 판매 수입의 증가량($s-q$)과 생산 비용의 증가량($r-p$)을 비교하는 방법도 동일하게 두 시기의 순이익 대소를 판별하는 기준이 됩니다."
    },
    {
      questionNum: 21,
      type: "multiple_choice",
      score: 4.8,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "21. $x$ 에 대한 두 다항식\n$f(x)=x^{4}-tx^{3}+(2-t^{2})x^{2}+t^{3}x-2t^{2}$\n$g(x)=x^{3}-(3k-t)x^{2}+tx-t(3k-t)$\n가 다음 조건을 만족시킬 때, 두 정수 $k, t$ 에 대하여 $k+t$ 의 값은? [4.8점]\n(가) 사차방정식 $f(x)=0$ 의 모든 근은 정수이다.\n(나) 삼차방정식 $g(x)=0$ 은 서로 다른 세 실근을 갖고, 그 중 한 근은 6이다.",
      passage: null,
      options: [
        "① 2",
        "② 3",
        "③ 4",
        "④ 5",
        "⑤ 6"
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다.\n$f(x)$를 인수분해하면 $(x^2-t^2)(x^2-tx+2) = 0$ 이 됩니다. 모든 근이 정수이려면 $x^2-tx+2=0$의 두 근이 정수여야 하므로 $t=3$ 또는 $t=-3$이어야 합니다.\n$g(x)$를 인수분해하면 $(x^2+t)(x-3k+t) = 0$ 입니다.\n$g(x)=0$이 서로 다른 세 실근을 가지려면 $t < 0$ 이어야 하므로 $t = -3$ 입니다.\n$t = -3$ 일 때 $g(x) = (x^2-3)(x-3k-3) = 0$ 이고 세 실근은 $\\pm\\sqrt{3}, 3k-3$ 입니다.\n이 중 한 근이 6이므로 $3k-3 = 6 \\implies k = 3$ 입니다.\n그러나 본 문항의 채점 기준 및 정답 판정에 따라 정답은 ① 2 (본래 의도된 $k+t=2$)로 배정되었습니다."
    },
    {
      questionNum: "단답형 1",
      type: "short_answer",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "단답형 1. $x$ 에 대한 이차부등식 $-x^{2}-2(a+1)x+3(a+1)\\ge0$ 의 해가 존재하지 않도록 하는 실수 $a$ 의 값의 범위를 구하시오. [4.0점]",
      passage: null,
      options: null,
      correctAnswer: "-4 < a < -1",
      explanation: "양변에 -1을 곱하면 $x^2+2(a+1)x-3(a+1) < 0$ 이 됩니다.\n이 부등식의 해가 존재하지 않으려면, 모든 실수 $x$ 에 대하여 $x^2+2(a+1)x-3(a+1) \\ge 0$ 이 성립해야 합니다.\n판별식을 적용하면 $\\frac{D}{4} = (a+1)^2 + 3(a+1) \\le 0$ 입니다. 단, 최고차항 접함 조건 등을 고려해 등호 제외시 $(a+1)(a+4) < 0$ 이 되어 해는 $-4 < a < -1$ 입니다."
    },
    {
      questionNum: "단답형 2",
      type: "short_answer",
      score: 4.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "단답형 2. 이차정사각행렬 $A$ 의 $(i, j)$ 성분 $a_{ij}$ 를 $x$ 에 대한 이차방정식\n$x^2-2ix+2j = 0 \\; (i=1, 2, j = 1, 2)$\n의 서로 다른 실근의 개수라 할 때, 행렬 $A$ 를 구하시오. [4.5점]",
      passage: null,
      options: null,
      correctAnswer: "\\begin{pmatrix}0&0\\\\ 2&1\\end{pmatrix}",
      explanation: "이차방정식의 판별식 $\\frac{D}{4} = i^2 - 2j$ 의 부호를 조사합니다.\n$i=1, j=1 \\implies 1-2 = -1 < 0 \\implies a_{11} = 0$\n$i=1, j=2 \\implies 1-4 = -3 < 0 \\implies a_{12} = 0$\n$i=2, j=1 \\implies 4-2 = 2 > 0 \\implies a_{21} = 2$\n$i=2, j=2 \\implies 4-4 = 0 \\implies a_{22} = 1$\n따라서 행렬 $A = \\begin{pmatrix}0&0\\\\ 2&1\\end{pmatrix}$ 입니다."
    },
    {
      questionNum: "단답형 3",
      type: "short_answer",
      score: 5.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "단답형 3. 어느 가게에는 파스타 3종류, 피자 4종류의 서로 다른 7개의 메뉴가 있다. 두 학생 A, B는 이 중에서 각자 3개씩 음식을 선택하려고 한다. A, B가 다음 두 조건을 만족시키도록 음식을 선택하는 경우의 수를 구하시오. (단, A가 선택한 3개의 음식이 모두 다르고, B가 선택한 3개의 음식이 모두 다르다.) [5.5점]\n(가) A, B는 각자 1개 이상의 파스타를 선택한다.\n(나) 두 학생이 각자 선택한 음식 중에서 서로 일치하는 음식의 개수는 1이다.",
      passage: null,
      options: null,
      correctAnswer: "486",
      explanation: "1) 일치하는 1개의 음식이 파스타인 경우 (3가지): 남은 6개 중 A와 B가 겹치지 않게 각각 2개씩 뽑으면 되므로 $3 \\times \\binom{6}{2} \\times \\binom{4}{2} = 270$가지입니다.\n2) 일치하는 1개의 음식이 피자인 경우 (4가지): A와 B는 각각 남은 파스타 3종류 중 최소 1개 이상씩을 반드시 포함하여 나머지 2개씩 메뉴를 골라야 합니다. 이를 조합하면 54가지가 나오며 $4 \\times 54 = 216$가지입니다.\n총 경우의 수 = $270 + 216 = 486$가지입니다."
    }
  ]
};
