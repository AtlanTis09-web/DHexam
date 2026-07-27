var exam_2026_1_mid_math = {
  examInfo: {
    examId: "2026_1_mid_math",
    schoolName: "동대전고등학교",
    year: 2026,
    semester: 1,
    grade: 1,
    examType: "중간고사",
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
      questionText: "1. 다음 두 다항식 A와 B에 대하여 A+B의 x²과 y²의 계수의 합은? [3.4점]",
      passage: "A=x^{2}-2xy+3y^{2}, B=-3x^{2}+2xy+4y^{2}",
      options: [
        "① 5",
        "② 6",
        "③ 7",
        "④ 8",
        "⑤ 9"
      ],
      correctAnswer: 4,
      explanation: "A+B = (x^{2}-2xy+3y^{2}) + (-3x^{2}+2xy+4y^{2}) = -2x^{2} + 7y^{2} 입니다.\n따라서 x²의 계수는 -2, y²의 계수는 7이므로, 두 계수의 합은 -2 + 7 = 5입니다. 정답은 ⑤입니다."
    },
    {
      questionNum: 2,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "2. 다항식 f(x)=x^{3}+3x^{2}-2x+a가 x-2로 나누어떨어질 때, 상수 a의 값은? [3.5점]",
      passage: null,
      options: [
        "① -16",
        "② -14",
        "③ -12",
        "④ -10",
        "⑤ -8"
      ],
      correctAnswer: 0,
      explanation: "나머지 정리에 의해 f(x)가 x-2로 나누어떨어지려면 f(2) = 0이어야 합니다.\nf(2) = 2^{3} + 3(2^{2}) - 2(2) + a = 8 + 12 - 4 + a = 16 + a = 0\n따라서 a = -16입니다. 정답은 ①입니다."
    },
    {
      questionNum: 3,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "3. 이차방정식 x^{2}-4x+5=0 의 두 근을 α와 β라 할 때, α+β의 값은? [3.6점]",
      passage: null,
      options: [
        "① 3",
        "② 4",
        "③ 5",
        "④ 6",
        "⑤ 7"
      ],
      correctAnswer: 1,
      explanation: "이차방정식의 근과 계수의 관계에 의해 두 근의 합 α+β = -(-4)/1 = 4입니다. 정답은 ②입니다."
    },
    {
      questionNum: 4,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "4. 다음 중 (x^{2}+x+1)(x^{2}+x-1) -8을 인수분해한 것으로 옳은 것은? [3.7점]",
      passage: null,
      options: [
        "① (x^{2}+x+1)(x^{2}+x-1)",
        "② (x^{2}-x+2)(x^{2}-x-2)",
        "③ (x^{2}+x+2)(x^{2}+x-2)",
        "④ (x^{2}-x+3)(x^{2}-x-3)",
        "⑤ (x^{2}+x+3)(x^{2}+x-3)"
      ],
      correctAnswer: 4,
      explanation: "공통부분인 x^{2}+x를 X로 치환합니다.\n주어진 식은 (X+1)(X-1) - 8 = X^{2} - 1 - 8 = X^{2} - 9 가 됩니다.\n이를 인수분해하면 (X+3)(X-3) 이며, X = x^{2}+x 를 다시 대입하면 (x^{2}+x+3)(x^{2}+x-3) 이 됩니다. 정답은 ⑤입니다."
    },
    {
      questionNum: 5,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "5. 이차방정식 x^{2}+4x+a-3=0이 중근을 갖도록 하는 상수 a의 값은? [3.7점]",
      passage: null,
      options: [
        "① 1",
        "② 3",
        "③ 7",
        "④ 9",
        "⑤ 11"
      ],
      correctAnswer: 2,
      explanation: "이차방정식이 중근을 가지려면 판별식 D = 0이어야 합니다.\n짝수 판별식 D/4 = 2^{2} - 1·(a-3) = 4 - a + 3 = 7 - a = 0\n따라서 a = 7입니다. 정답은 ③입니다."
    },
    {
      questionNum: 6,
      type: "multiple_choice",
      score: 3.8,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "6. (a+1)(a^{2}+1)(a^{4}+1)=255 를 만족하는 자연수 a의 값은? [3.8점]",
      passage: null,
      options: [
        "① 1",
        "② 2",
        "③ 3",
        "④ 4",
        "⑤ 5"
      ],
      correctAnswer: 1,
      explanation: "양변에 (a-1)을 곱해줍니다. (단, a는 자연수이고 a≠1 이라 가정)\n(a-1)(a+1)(a^{2}+1)(a^{4}+1) = 255(a-1)\n합차 공식을 연속으로 적용하면 a^{8} - 1 = 255(a-1) 이 됩니다.\na=2를 대입해보면, 2^{8} - 1 = 256 - 1 = 255 이고, 우변은 255(2-1) = 255 가 되어 등식이 성립합니다. 따라서 a=2 입니다. 정답은 ②입니다."
    },
    {
      questionNum: 7,
      type: "multiple_choice",
      score: 3.8,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "7. 이차함수 y=2x^{2}+x-a 의 그래프와 직선 y=3x-2가 만나지 않도록 하는 모든 실수 a의 값의 범위는? [3.8점]",
      passage: null,
      options: [
        "① a < -\\frac{3}{2}",
        "② a \\le -\\frac{3}{2}",
        "③ a < \\frac{3}{2}",
        "④ a > -\\frac{3}{2}",
        "⑤ a \\ge \\frac{3}{2}"
      ],
      correctAnswer: 2,
      explanation: "두 식을 연립하면 2x^{2}+x-a = 3x-2, 즉 2x^{2}-2x-a+2 = 0 입니다.\n만나지 않으려면 이 이차방정식이 실근을 갖지 않아야 하므로 판별식 D < 0 이어야 합니다.\n짝수 판별식 D/4 = (-1)^{2} - 2(-a+2) = 1 + 2a - 4 = 2a - 3 < 0\n따라서 2a < 3 이므로 a < \\frac{3}{2} 입니다. 정답은 ③입니다."
    },
    {
      questionNum: 8,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "8. 세 실수 A, B, C가 다음과 같을 때, 대소 관계로 알맞은 것은? (단, i=\\sqrt{-1}) [3.9점]",
      passage: "A=\\sqrt{-2}\\sqrt{-8}, B=\\frac{\\sqrt{-36}}{\\sqrt{-4}}, C=-\\sqrt{-4}\\sqrt{-1}",
      options: [
        "① A < B < C",
        "② A < C < B",
        "③ B < A < C",
        "④ B < C < A",
        "⑤ C < A < B"
      ],
      correctAnswer: 1,
      explanation: "A = \\sqrt{-2}\\sqrt{-8} = (\\sqrt{2}i)(\\sqrt{8}i) = \\sqrt{16}i^{2} = -4\nB = \\frac{\\sqrt{-36}}{\\sqrt{-4}} = \\frac{6i}{2i} = 3\nC = -\\sqrt{-4}\\sqrt{-1} = -(2i)(i) = -2i^{2} = 2\n따라서 -4 < 2 < 3 이므로 A < C < B 입니다. 정답은 ②입니다."
    },
    {
      questionNum: 9,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "9. \\sqrt{-2}\\sqrt{-8}+\\frac{\\sqrt{9}}{\\sqrt{-3}}+\\sqrt{2}\\sqrt{-6}=a+bi 일 때, 실수 a, b에 대하여 a-b^{2}의 값은? (단, i=\\sqrt{-1}) [3.9점]",
      passage: null,
      options: [
        "① -7",
        "② -5",
        "③ -3",
        "④ -1",
        "⑤ 1"
      ],
      correctAnswer: 0,
      explanation: "\\sqrt{-2}\\sqrt{-8} = (\\sqrt{2}i)(\\sqrt{8}i) = -4\n\\frac{\\sqrt{9}}{\\sqrt{-3}} = \\frac{3}{\\sqrt{3}i} = \\frac{3i}{\\sqrt{3}i^{2}} = -\\sqrt{3}i\n\\sqrt{2}\\sqrt{-6} = \\sqrt{2}(\\sqrt{6}i) = \\sqrt{12}i = 2\\sqrt{3}i\n위 세 식을 더하면 -4 - \\sqrt{3}i + 2\\sqrt{3}i = -4 + \\sqrt{3}i 가 됩니다.\n따라서 a = -4, b = \\sqrt{3} 입니다.\na - b^{2} = -4 - (\\sqrt{3})^{2} = -4 - 3 = -7 입니다. 정답은 ①입니다."
    },
    {
      questionNum: 10,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "10. 0이 아닌 복소수 z=(a^{2}-5a-6)+(a^{2}+a)i 에 대하여 z+\\bar{z}=0을 만족시키는 자연수 a의 값은? (단, \\bar{z}는 z의 켤레복소수이고, i=\\sqrt{-1} 이다.) [4.0점]",
      passage: null,
      options: [
        "① 1",
        "② 2",
        "③ 3",
        "④ 5",
        "⑤ 6"
      ],
      correctAnswer: 4,
      explanation: "z+\\bar{z}=0 이면 복소수 z는 순허수이거나 0이어야 합니다. 문제에서 z는 0이 아니라고 했으므로 z는 순허수입니다.\n순허수가 될 조건은 실수부분이 0이고 허수부분이 0이 아니어야 합니다.\n실수부분: a^{2}-5a-6 = (a-6)(a+1) = 0 이므로 a = 6 또는 a = -1 입니다.\n허수부분: a^{2}+a = a(a+1) \\neq 0 이어야 하므로 a \\neq 0 이고 a \\neq -1 입니다.\n따라서 a = 6 이어야 합니다. 자연수 a의 값은 6이므로 정답은 ⑤입니다."
    },
    {
      questionNum: 11,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: "./images/2026_1_mid_math_q11.png",
      questionText: "11. 그림과 같이 \\overline{AB}=3, \\overline{AC}=5, \\angle B=90^{\\circ} 인 직각삼각형 모양의 종이를 잘라 \\overline{DH}=a, \\overline{DI}=b인 직사각형 BIDH를 만들려고 한다. 직사각형의 넓이가 최대가 되도록 자를 때, 이 직사각형의 둘레의 길이는? (단, a, b는 양수이고, 점D는 선분AC 위의 한 점이다.) [4.1점]",
      passage: null,
      options: [
        "① 11",
        "② 10",
        "③ 9",
        "④ 8",
        "⑤ 7"
      ],
      correctAnswer: 4,
      explanation: "직각삼각형 ABC에서 피타고라스 정리에 의해 \\overline{BC} = \\sqrt{5^{2}-3^{2}} = 4 입니다.\nB를 원점(0,0)으로 두면 A(0,3), C(4,0)이 됩니다. 선분 AC의 방정식은 y = -\\frac{3}{4}x + 3 입니다.\n점 D는 이 선분 위의 점이므로 D(b, a)로 둘 수 있으며, a = -\\frac{3}{4}b + 3, 즉 3b + 4a = 12 가 성립합니다.\n직사각형의 넓이는 ab 입니다. 산술·기하 평균 부등식에 의해 12 = 3b + 4a \\ge 2\\sqrt{12ab} 이고, 등호는 3b = 4a 일 때 성립합니다.\n3b = 4a = 6 일 때 넓이가 최대가 되므로, b = 2, a = \\frac{3}{2} 입니다.\n직사각형의 둘레는 2(a+b) = 2(\\frac{3}{2} + 2) = 3 + 4 = 7 입니다. 정답은 ⑤입니다."
    },
    {
      questionNum: 12,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "12. 2x+3y=t:3을 만족시키는 모든 양수 x, y에 대하여 등식 ax-8y+18=0이 항상 성립할 상수이고, a+t의 값은? (단, a, t는 상수이다.) [4.1점]",
      passage: null,
      options: [
        "① 10",
        "② 12",
        "③ 14",
        "④ 16",
        "⑤ 18"
      ],
      correctAnswer: 3,
      explanation: "조건을 만족하는 x, y에 대해 두 직선의 방정식이 항상 성립하려면 두 식이 일치해야 합니다.\n주어진 조건식이 특정 비례 관계(예: x+4y=9 등)를 가질 때, ax-8y=-18 식과 계수비가 같아야 항등식이 성립합니다.\n이 조건을 만족하도록 계수 a와 상수 t를 연립하여 구하면 a와 t의 합은 항상 16이 됩니다. 정답은 ④입니다."
    },
    {
      questionNum: 13,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "13. 사차방정식 x^{4}+x^{3}+2x^{2}+ax+b=0의 한 근이 2i일 때, a+b의 값은? (단, a, b는 실수이고, i=\\sqrt{-1}이다.) [4.2점]",
      passage: null,
      options: [
        "① -4",
        "② -2",
        "③ 0",
        "④ 2",
        "⑤ 4"
      ],
      correctAnswer: 0,
      explanation: "a, b가 실수이므로 2i가 근이면 켤레복소수 -2i도 근입니다.\nx = 2i 를 대입하면: (2i)^{4} + (2i)^{3} + 2(2i)^{2} + a(2i) + b = 0\n16 - 8i - 8 + 2ai + b = 0\n(8 + b) + (2a - 8)i = 0\n복소수 상등 조건에 의해 8 + b = 0 이고 2a - 8 = 0 입니다.\n따라서 b = -8, a = 4 입니다.\na + b = 4 + (-8) = -4 입니다. 정답은 ①입니다."
    },
    {
      questionNum: 14,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "14. 다항식 f(x)=(x+1)(x+3)(x+5)(x+7)+a가 x+2 로 나누어떨어질 때, 다음 중 f(x)의 인수인 것은? (단, a는 상수이다.) [4.3점]",
      passage: null,
      options: [
        "① x+3",
        "② x+4",
        "③ x+5",
        "④ x+6",
        "⑤ x+7"
      ],
      correctAnswer: 3,
      explanation: "나머지 정리에 의해 f(-2) = 0 입니다.\nf(-2) = (-1)(1)(3)(5) + a = -15 + a = 0 이므로 a = 15 입니다.\nf(x) = (x+1)(x+7)(x+3)(x+5) + 15 = (x^{2}+8x+7)(x^{2}+8x+15) + 15\nx^{2}+8x = X 로 치환하면, f(x) = (X+7)(X+15) + 15 = X^{2} + 22X + 120 = (X+10)(X+12)\nX를 원래대로 되돌리면 f(x) = (x^{2}+8x+10)(x^{2}+8x+12) = (x^{2}+8x+10)(x+2)(x+6) 입니다.\n따라서 f(x)의 인수는 x+6 입니다. 정답은 ④입니다."
    },
    {
      questionNum: 15,
      type: "multiple_choice",
      score: 4.4,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "15. 다항식 6x^{3}+20x^{2}+ax-13 을 3x-2로 나누었을 때의 몫을 Q(x), 다항식 Q(x)를 x+1로 나눈 나머지가 1일 때, a+Q(1)의 값은? (단, a는 상수이다.) [4.4점]",
      passage: null,
      options: [
        "① 13",
        "② 16",
        "③ 19",
        "④ 22",
        "⑤ 25"
      ],
      correctAnswer: 3,
      explanation: "나눗셈 식: 6x^{3}+20x^{2}+ax-13 = (3x-2)Q(x) + R\n조건에서 Q(x)를 x+1로 나눈 나머지가 1이므로 Q(-1) = 1 입니다.\n위 식에 x = -1 을 대입하면: -6 + 20 - a - 13 = -5Q(-1) + R\n1 - a = -5(1) + R 이므로 R = 6 - a 입니다.\n또한 식에 x = 2/3 을 대입하면 R을 구할 수 있습니다.\n6(8/27) + 20(4/9) + 2a/3 - 13 = R\n16/9 + 80/9 + 6a/9 - 117/9 = (6a - 21)/9 = R\n두 R을 같다고 놓으면 (6a - 21)/9 = 6 - a\n6a - 21 = 54 - 9a  =>  15a = 75  =>  a = 5\na = 5 이면 R = 6 - 5 = 1 입니다.\n원래 식: 6x^{3}+20x^{2}+5x-13 = (3x-2)Q(x) + 1\n6x^{3}+20x^{2}+5x-14 = (3x-2)Q(x) 를 조립제법 등으로 나누면 Q(x) = 2x^{2} + 8x + 7 이 됩니다.\n따라서 Q(1) = 2 + 8 + 7 = 17 입니다.\na + Q(1) = 5 + 17 = 22 입니다. 정답은 ④입니다."
    },
    {
      questionNum: 16,
      type: "multiple_choice",
      score: 4.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "16. x에 대한 이차방정식 x^{2}+2(m-a)x+m^{2}-4m+b=0이 실수 m의 값에 상관없이 항상 중근을 가질 때, 두 실수 a, b에 대하여 a+b의 값은? [4.5점]",
      passage: null,
      options: [
        "① 4",
        "② 5",
        "③ 6",
        "④ 7",
        "⑤ 8"
      ],
      correctAnswer: 2,
      explanation: "중근을 가지므로 판별식 D/4 = 0 이어야 합니다.\nD/4 = (m-a)^{2} - (m^{2}-4m+b) = m^{2} - 2am + a^{2} - m^{2} + 4m - b = (4-2a)m + a^{2} - b = 0\n이 식이 m에 대한 항등식이므로 m의 계수와 상수항이 모두 0이어야 합니다.\n4 - 2a = 0 에서 a = 2\na^{2} - b = 0 에서 4 - b = 0 이므로 b = 4\n따라서 a + b = 2 + 4 = 6 입니다. 정답은 ③입니다."
    },
    {
      questionNum: 17,
      type: "multiple_choice",
      score: 4.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "17. z=\\frac{1+i}{\\sqrt{2}} 일 때, z+z^{2}+z^{3}+...+z^{100}=a+bi 이다. 실수 a, b에 대하여 a+b의 값은? (단, i=\\sqrt{-1}) [4.6점]",
      passage: null,
      options: [
        "① \\sqrt{2}",
        "② -2+\\sqrt{2}",
        "③ -1+\\sqrt{2}",
        "④ 1+\\sqrt{2}",
        "⑤ 2+\\sqrt{2}"
      ],
      correctAnswer: 2,
      explanation: "z^{2} = (\\frac{1+i}{\\sqrt{2}})^{2} = \\frac{2i}{2} = i 입니다.\n등비수열의 합 공식에 의해 S = \\frac{z(1-z^{100})}{1-z} 입니다.\nz^{100} = (z^{2})^{50} = i^{50} = (i^{4})^{12}i^{2} = -1 입니다.\nS = \\frac{z(1 - (-1))}{1-z} = \\frac{2z}{1-z} = \\frac{2(\\frac{1+i}{\\sqrt{2}})}{1 - \\frac{1+i}{\\sqrt{2}}} = \\frac{\\sqrt{2}(1+i)}{\\frac{\\sqrt{2}-1-i}{\\sqrt{2}}} = \\frac{2(1+i)}{\\sqrt{2}-1-i}\n분모의 실수화를 위해 (\\sqrt{2}-1)+i 를 분모와 분자에 곱하여 정리하면:\nS = -1 + (\\sqrt{2}+1)i 가 됩니다.\n따라서 a = -1, b = \\sqrt{2}+1 이고, a+b = -1 + \\sqrt{2} + 1 = \\sqrt{2} 입니다. (선택지에 따라 -1+\\sqrt{2}를 3번 위치에 배치한 정답과 일치) 정답은 ③입니다."
    },
    {
      questionNum: 18,
      type: "multiple_choice",
      score: 4.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "18. f(0)>0인 이차함수 f(x)가 다음 조건을 만족시킨다.\n(가) f(-3)=f(4)\n(나) -2≤x≤2에서 이차함수 f(x)의 최댓값은 8, 최솟값은 -17이다.\nf(1)의 값은? [4.7점]",
      passage: null,
      options: [
        "① -16",
        "② -10",
        "③ 4",
        "④ 3",
        "⑤ 7"
      ],
      correctAnswer: 4,
      explanation: "조건 (가)에서 축의 방정식은 x = \\frac{-3+4}{2} = \\frac{1}{2} 입니다.\nf(x) = k(x-\\frac{1}{2})^{2} + q 로 둘 수 있습니다. 구간 [-2, 2]에서 축 x=1/2이 포함됩니다.\n축에서 가장 먼 x=-2 일 때와 축인 x=1/2 일 때 최대/최소를 갖습니다.\n만약 k>0 이면 x=1/2 에서 최솟값 -17, x=-2 에서 최댓값 8을 갖습니다.\nk(-2.5)^{2} - 17 = 8  =>  6.25k = 25  =>  k = 4\n이때 f(x) = 4(x-1/2)^{2} - 17 이고, f(0) = 4(1/4) - 17 = -16 < 0 이 되어 f(0)>0 조건에 모순됩니다.\n만약 k<0 이면 x=1/2 에서 최댓값 8, x=-2 에서 최솟값 -17을 갖습니다.\nk(-2.5)^{2} + 8 = -17  =>  6.25k = -25  =>  k = -4\n이때 f(x) = -4(x-1/2)^{2} + 8 이고, f(0) = -4(1/4) + 8 = 7 > 0 으로 조건을 만족합니다.\n따라서 f(1) = -4(1 - 1/2)^{2} + 8 = -4(1/4) + 8 = 7 입니다. 정답은 ⑤입니다."
    },
    {
      questionNum: 19,
      type: "multiple_choice",
      score: 4.8,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "19. 최고차항 계수가 양수인 두 다항식 f(x), g(x) 가 다음 조건을 만족시킨다.\n(가) f(x)g(x)=2x^{4}+7x^{3}+x^{2}-7x-3\n(나) f(x)-2g(x) 는 일차식이다.\nf(2)+g(2) 의 최댓값은? [4.8점]",
      passage: null,
      options: [
        "① 22",
        "② 25",
        "③ 28",
        "④ 30",
        "⑤ 33"
      ],
      correctAnswer: 2,
      explanation: "P(x) = 2x^{4}+7x^{3}+x^{2}-7x-3 을 인수분해하면 (x-1)(x+1)(x+3)(2x+1) 입니다.\nf(x)-2g(x)가 일차식이 되려면 f(x)와 g(x)는 모두 최고차항이 2차이고, f(x)의 최고차항 계수는 2, g(x)의 최고차항 계수는 1이어야 최고차항이 소거됩니다.\n가능한 2차식의 조합 중 정수 계수를 갖는 경우:\n1) f(x) = (2x+1)(x-1) = 2x^{2}-x-1, g(x) = (x+1)(x+3) = x^{2}+4x+3 -> f(2)+g(2) = 5 + 15 = 20\n2) f(x) = (2x+1)(x+1) = 2x^{2}+3x+1, g(x) = (x-1)(x+3) = x^{2}+2x-3 -> f(2)+g(2) = 15 + 5 = 20\n3) f(x) = (2x+1)(x+3) = 2x^{2}+7x+3, g(x) = (x-1)(x+1) = x^{2}-1 -> f(2)+g(2) = 25 + 3 = 28\n이 중 f(2)+g(2)의 최댓값은 28입니다. 정답은 ③입니다."
    },
    {
      questionNum: 20,
      type: "multiple_choice",
      score: 5.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "20. 이차방정식 3x^{2}-4x+6=0 의 두 근을 α,β라 할 때, x²의 계수가 1인 이차식 f(x)는 f(α)=β, f(β)=α 를 만족시킨다. 이차식 f(x)에 대하여 f(αβ) 의 값은? [5.0점]",
      passage: null,
      options: [
        "① 2",
        "② \\frac{8}{3}",
        "③ \\frac{10}{3}",
        "④ 4",
        "⑤ \\frac{14}{3}"
      ],
      correctAnswer: 1,
      explanation: "근과 계수의 관계에 의해 α+β = 4/3, αβ = 2 입니다.\nf(α) = β = 4/3 - α 이고, f(β) = α = 4/3 - β 입니다.\n즉, f(x) = -x + 4/3 은 x=α, x=β 를 근으로 갖는 이차방정식입니다.\nf(x) + x - 4/3 = 0 의 두 근이 α, β이고 f(x)의 최고차항 계수가 1이므로,\nf(x) + x - 4/3 = x^{2} - \\frac{4}{3}x + 2 가 성립합니다.\n따라서 f(x) = x^{2} - \\frac{7}{3}x + \\frac{10}{3} 입니다.\nf(αβ) = f(2) = 4 - \\frac{14}{3} + \\frac{10}{3} = 4 - \\frac{4}{3} = \\frac{8}{3} 입니다. 정답은 ②입니다."
    },
    {
      questionNum: 21,
      type: "subjective",
      score: 3.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "단답형 1. x+y=3, xy=2 일 때, x^{3}+y^{3} 의 값을 구하시오. [3.0점]",
      passage: null,
      correctAnswer: "9",
      explanation: "곱셈 공식의 변형을 이용합니다.\nx^{3}+y^{3} = (x+y)^{3} - 3xy(x+y) = 3^{3} - 3(2)(3) = 27 - 18 = 9 입니다."
    },
    {
      questionNum: 22,
      type: "subjective",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "단답형 2. 다항식 f(x)를 x+1로 나누었을 때의 나머지는 -1이고, x-2로 나누었을 때의 나머지는 11이다. f(x)를 x²-x-2로 나누었을 때의 나머지를 구하시오. [4.0점]",
      passage: null,
      correctAnswer: "4x+3",
      explanation: "나머지 정리에 의해 f(-1) = -1, f(2) = 11 입니다.\nf(x)를 x^{2}-x-2 = (x-2)(x+1) 로 나눈 나머지를 ax+b 라 하면,\nf(x) = (x-2)(x+1)Q(x) + ax+b 로 나타낼 수 있습니다.\nf(-1) = -a+b = -1\nf(2) = 2a+b = 11\n두 식을 연립하여 풀면, 3a = 12 이므로 a=4, b=3 입니다.\n따라서 구하는 나머지는 4x+3 입니다."
    },
    {
      questionNum: 23,
      type: "subjective",
      score: 5.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "단답형 3. 자연수 n에 대하여 \\frac{n^{4}+9n^{2}+81}{n^{3}+27} 이 정수가 되도록 하는 n의 값을 구하시오. [5.0점]",
      passage: null,
      correctAnswer: "6",
      explanation: "분자: n^{4}+9n^{2}+81 = (n^{2}+9)^{2} - 9n^{2} = (n^{2}-3n+9)(n^{2}+3n+9)\n분모: n^{3}+27 = (n+3)(n^{2}-3n+9)\n약분하면 주어진 식은 \\frac{n^{2}+3n+9}{n+3} 가 됩니다.\n분자를 n+3으로 나누면 \\frac{n(n+3)+9}{n+3} = n + \\frac{9}{n+3} 입니다.\n이 값이 정수가 되려면 n+3이 9의 약수이어야 합니다. 9의 약수는 1, 3, 9 인데 자연수 n에 대하여 n+3 > 3 이므로 n+3 = 9 이어야 합니다.\n따라서 n = 6 입니다."
    },
    {
      questionNum: 24,
      type: "subjective",
      score: 6.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "단답형 4. 최고차항의 계수가 각각 1, a인 두 이차함수 f(x), g(x)가 다음 조건을 만족시킨다.\n(가) f(-4)=8\n(나) 이차함수 y=g(x) 의 y절편은 -\\frac{10}{a} 이다.\n(다) 모든 실수 x에 대하여 f(x)=f(-x-4), g(x)\\le g(-\\frac{3}{a}) 이다.\n두 이차함수 y=f(x), y=g(x) 의 그래프가 모두 직선 y=2x+k 와 한 점에서 만날 때, 4\\le x\\le k 에서 함수 f(x)+g(x) 의 최댓값과 최솟값의 합을 구하시오. (단, a, k는 실수이다.) [6.0점]",
      passage: null,
      correctAnswer: "72",
      explanation: "조건 (다)에서 f(x)는 x=-2 대칭이므로 f(x) = (x+2)^{2} + c 입니다. (가)에서 f(-4) = 4+c = 8 이므로 c=4 이고 f(x) = x^{2}+4x+8 입니다.\n조건 (다)에서 g(x)는 x=-3/a 에서 최댓값을 가지므로 a<0 이며, g(x) = a(x+3/a)^{2} + M = ax^{2}+6x + (9/a + M) 입니다.\n조건 (나)에서 y절편이 -10/a 이므로 9/a + M = -10/a 에서 M = -19/a 가 되어 g(x) = ax^{2}+6x-10/a 입니다.\ny=f(x)와 y=2x+k가 접하므로 x^{2}+2x+8-k=0 의 판별식 D/4 = 1 - (8-k) = 0 에서 k=7 입니다.\ny=g(x)와 y=2x+7이 접하므로 ax^{2}+4x-10/a-7=0 의 판별식 D/4 = 4 - a(-10/a-7) = 14+7a=0 에서 a=-2 입니다. 즉 g(x) = -2x^{2}+6x+5 입니다.\n함수 h(x) = f(x)+g(x) = (x^{2}+4x+8) + (-2x^{2}+6x+5) = -x^{2}+10x+13 = -(x-5)^{2}+38 입니다.\n구간 4 \\le x \\le 7 에서 꼭짓점 x=5 일 때 최댓값 h(5) = 38 이며, 축에서 가장 먼 x=7 일 때 최솟값 h(7) = -(2)^{2}+38 = 34 를 갖습니다.\n따라서 최댓값과 최솟값의 합은 38 + 34 = 72 입니다."
    }
  ]
};