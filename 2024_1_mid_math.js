
var exam_2024_1_mid_math = {
  examInfo: {
    examId: "2024_1_mid_math",
    schoolName: "동대전고등학교",
    year: 2024,
    semester: 1,
    grade: 1,
    examType: "중간고사",
    subject: "수학"
  },
  sharedPassages: {},
  questions: [
    {
      questionNum: 1,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      questionText: "두 다항식 A=x²+5xy-4y², B=2x²-xy+y² 에 대하여 2A+B를 계산하면?",
      passage: null,
      options: [
        "① 3x²+8xy+7y²",
        "② 4x²+9xy-7y²",
        "③ 3x²-9xy-7y²",
        "④ 4x²+7xy-5y²",
        "⑤ x²-7xy-5y²"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다. 2A+B = 2(x² + 5xy - 4y²) + (2x² - xy + y²) = 2x² + 10xy - 8y² + 2x² - xy + y² = 4x² + 9xy - 7y² 입니다."
    },
    {
      questionNum: 2,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      questionText: "(2+3i)(1-2i)=a+bi 를 만족시키는 두 실수 a, b에 대하여 a+b 의 값은? (단, i=√-1)",
      passage: null,
      options: [
        "① -5",
        "② -2",
        "③ 1",
        "④ 4",
        "⑤ 7"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다. (2+3i)(1-2i) = 2 - 4i + 3i - 6i² = 2 - i - 6(-1) = 8 - i 입니다. 따라서 a=8, b=-1 이므로 a+b = 8 - 1 = 7 입니다."
    },
    {
      questionNum: 3,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      questionText: "등식 (2x-4)+(3x+y-2)i=4+7i 를 만족시키는 두 실수 x, y에 대하여 x+y의 값은? (단, i=√-1)",
      passage: null,
      options: [
        "① 1",
        "② 2",
        "③ 3",
        "④ 4",
        "⑤ 5"
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다. 복소수가 서로 같을 조건에 의해 실수부는 실수부끼리, 허수부는 허수부끼리 같아야 합니다. 2x-4 = 4 이므로 2x = 8, 즉 x = 4 입니다. 3x+y-2 = 7 에 x=4를 대입하면 12+y-2 = 7, y = -3 입니다. 따라서 x+y = 4 + (-3) = 1 입니다."
    },
    {
      questionNum: 4,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      questionText: "다항식 8x³-2x+5를 x-2로 나누었을 때의 나머지는?",
      passage: null,
      options: [
        "① 50",
        "② 55",
        "③ 60",
        "④ 65",
        "⑤ 70"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다. 나머지 정리에 의해 다항식 f(x)를 x-2로 나눈 나머지는 f(2)의 값과 같습니다. f(2) = 8(2³) - 2(2) + 5 = 64 - 4 + 5 = 65 입니다."
    },
    {
      questionNum: 5,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      questionText: "방정식 x⁴+2x³-x²-2x=0 의 근이 아닌 것은?",
      passage: null,
      options: [
        "① -2",
        "② -1",
        "③ 0",
        "④ 1",
        "⑤ 2"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다. 방정식의 좌변을 x로 묶으면 x(x³+2x²-x-2) = 0 입니다. 이를 다시 인수분해하면 x{x²(x+2)-(x+2)} = x(x²-1)(x+2) = x(x-1)(x+1)(x+2) = 0 이 됩니다. 따라서 방정식의 근은 x = -2, -1, 0, 1 이며, 2는 근이 아닙니다."
    },
    {
      questionNum: 6,
      type: "multiple_choice",
      score: 3.8,
      linkedPassageId: null,
      questionText: "x에 대한 이차함수 y=x²+2kx+k²+3k-9의 그래프가 x축과 한 점에서 만나도록 하는 실수 k의 값은?",
      passage: null,
      options: [
        "① 1",
        "② 2",
        "③ 3",
        "④ 4",
        "⑤ 5"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다. 이차함수 그래프가 x축과 한 점에서 접하려면 해당 이차방정식의 판별식 D가 0이어야 합니다. D/4 = k² - (k²+3k-9) = -3k+9 = 0 이므로 3k = 9, 따라서 k = 3 입니다."
    },
    {
      questionNum: 7,
      type: "multiple_choice",
      score: 3.8,
      linkedPassageId: null,
      questionText: "이차함수 y=x²-6x+10의 그래프가 직선 y=2x+k 와 서로 다른 두 점에서 만날 때, 이를 만족시키는 정수 k의 최솟값은?",
      passage: null,
      options: [
        "① -5",
        "② -3",
        "③ -1",
        "④ 1",
        "⑤ 3"
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다. x²-6x+10 = 2x+k 로 두면 x²-8x+10-k = 0 이 됩니다. 서로 다른 두 점에서 만나려면 판별식 D > 0 이어야 합니다. D/4 = 16 - (10-k) > 0 이므로 6+k > 0, 즉 k > -6 입니다. 이를 만족하는 정수 k의 최솟값은 -5입니다."
    },
    {
      questionNum: 8,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      questionText: "이차방정식 2x²-4x+3=0 의 두 근을 α, β라고 할 때, α³+β³ 의 값은?",
      passage: null,
      options: [
        "① -17",
        "② -11",
        "③ -1",
        "④ 5",
        "⑤ 17"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다. 근과 계수의 관계에 의해 두 근의 합 α+β = 2, 두 근의 곱 αβ = 3/2 입니다. α³+β³ = (α+β)³ - 3αβ(α+β) = 2³ - 3(3/2)(2) = 8 - 9 = -1 입니다."
    },
    {
      questionNum: 9,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      questionText: "등식 x²-1=a(x+2)²+b(x+2)+c 가 x에 대한 항등식일 때, 세 상수 a, b, c에 대하여 a²+b²+c² 의 값은?",
      passage: null,
      options: [
        "① 18",
        "② 20",
        "③ 22",
        "④ 24",
        "⑤ 26"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다. 우변을 전개하면 a(x²+4x+4) + b(x+2) + c = ax² + (4a+b)x + (4a+2b+c) 입니다. 좌변 x²-1 과 계수를 비교하면 이차항 a=1, 일차항 4a+b=0 에서 4+b=0 이므로 b=-4, 상수항 4a+2b+c=-1 에서 4-8+c=-1 이므로 c=3 입니다. 따라서 a²+b²+c² = 1² + (-4)² + 3² = 1 + 16 + 9 = 26 입니다."
    },
    {
      questionNum: 10,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      questionText: "다항식 4x³-10x²+24x-7을 2x-1로 나누었을 때의 몫을 Q(x)라 하자. x값의 범위가 실수 전체일 때, 함수 y=Q(x) 의 최솟값은?",
      passage: null,
      options: [
        "① 8",
        "② 10",
        "③ 12",
        "④ 14",
        "⑤ 16"
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다. 조립제법을 이용해 x=1/2 로 나누면 계수가 (4, -10, 24, -7)에서 (4, -8, 20, 3)이 나옵니다. 이때 조립제법의 몫 부분은 4x²-8x+20 이지만, 나누는 식이 2x-1 이므로 이를 2로 나누어 주어야 실제 몫 Q(x)가 됩니다. 따라서 Q(x) = 2x²-4x+10 입니다. 이차함수 y = 2(x²-2x+1) + 8 = 2(x-1)² + 8 이므로 x=1 일 때 최솟값 8을 갖습니다."
    },
    {
      questionNum: 11,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      questionText: "다음은 다항식 P(x)=ax³+bx²+cx+d를 x-2로 나누었을 때의 몫과 나머지를 조립제법을 이용하여 구하는 과정의 일부이다. 네 상수 a, b, c, d에 대하여 a+b-c-d 의 값은?",
      passage: `<b>조립제법 표 정보(유추):</b><br>
2 | a  b  c  d<br>
  |    _  _  _<br>
  ----------------<br>
    1  7  4  21<br>`,
      options: [
        "① 1",
        "② 3",
        "③ 5",
        "④ 7",
        "⑤ 9"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다. 조립제법 표를 역추적해 보면, 몫의 계수가 1, 7, 4 이고 나머지가 21이라고 할 때 계산이 딱 맞아떨어집니다. 가장 앞의 계수 a는 그대로 내려와 a=1 입니다. 2×1=2 가 더해져 7이 되므로 b+2=7 에서 b=5 입니다. 2×7=14 가 더해져 4가 되므로 c+14=4 에서 c=-10 입니다. 2×4=8 이 더해져 나머지가 21이 되므로 d+8=21 에서 d=13 입니다. 따라서 a+b-c-d = 1 + 5 - (-10) - 13 = 16 - 13 = 3 입니다."
    },
    {
      questionNum: 12,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      questionText: "다음 두 다항식을 각각 인수분해 했을 때, 두 다항식이 공통으로 가지고 있는 인수들만을 택하여 모두 곱한 것은?",
      passage: `• x⁴-3x³+4x<br>
• (x²+x-2)(x²+x-4)-8`,
      options: [
        "① x²-x-2",
        "② x²+x-6",
        "③ x²+4x+3",
        "④ x³-x²-2x",
        "⑤ x³+2x²-5x-6"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다. 첫 번째 다항식을 인수분해하면 x(x³-3x²+4) = x(x+1)(x²-4x+4) = x(x+1)(x-2)² 입니다. 두 번째 다항식은 x²+x=X 로 치환하면 (X-2)(X-4)-8 = X²-6X = X(X-6) = (x²+x)(x²+x-6) = x(x+1)(x+3)(x-2) 입니다. 공통 인수는 x, (x+1), (x-2) 이며 이들을 모두 곱하면 x(x+1)(x-2) = x(x²-x-2) = x³-x²-2x 가 됩니다."
    },
    {
      questionNum: 13,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      questionText: "-2≤x≤2일 때, 이차함수 y=(x-3)(-x+5)+a 의 최댓값이 5이다. -a≤x≤a에서 이 이차함수의 최솟값은? (단, a는 실수이다.)",
      passage: null,
      options: [
        "① -143",
        "② -141",
        "③ -139",
        "④ -137",
        "⑤ -135"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다. 식을 전개하면 y = -x² + 8x - 15 + a = -(x-4)² + 1 + a 입니다. 위로 볼록하며 대칭축이 x=4 이므로, -2≤x≤2 범위에서는 x=2일 때 최댓값을 가집니다. y(2) = -(2-4)² + 1 + a = a - 3 = 5 이므로 a=8 입니다. 다음으로 구해야 하는 것은 -8≤x≤8 구간에서 y = -(x-4)² + 9 의 최솟값입니다. 대칭축(x=4)에서 가장 멀리 떨어진 x=-8 일 때 최솟값을 갖습니다. y(-8) = -(-12)² + 9 = -144 + 9 = -135 입니다."
    },
    {
      questionNum: 14,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      questionText: "그림과 같이 대각선의 길이가 10m이고 가로의 길이가 세로의 길이보다 긴 직사각형 모양의 양식장이 있다. 이 양식장의 가로, 세로의 길이를 각각 3m씩 확장한 양식장의 넓이는 처음 양식장의 넓이보다 51m² 만큼 넓다고 한다. 처음 양식장의 세로 길이는 몇 m인가? (단, 양식장의 벽면 두께나 칸막이 등은 무시한다.)",
      passage: null,
      options: [
        "① 4√2",
        "② 6",
        "③ 2√10",
        "④ 7",
        "⑤ 5√2"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다. 처음 양식장의 가로를 x, 세로를 y(x>y)라 하면 대각선 길이에 의해 x²+y²=100 입니다. 넓이 조건에 의해 (x+3)(y+3) = xy + 51, 즉 3x + 3y + 9 = 51 이므로 x+y = 14 입니다. (x+y)² = x²+y²+2xy 에 대입하면 196 = 100 + 2xy 에서 xy = 48 입니다. x, y는 t²-14t+48=0 의 두 근이므로 (t-8)(t-6)=0 에서 8과 6입니다. 가로가 세로보다 기므로 세로 길이 y는 6m 입니다."
    },
    {
      questionNum: 15,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      questionText: "√(−2)√(8) + √(−3)√(−27) + √(−16)/√(−4) + √(125)/√(−5) = a+bi 일 때, 두 실수 a, b에 대하여 b-a의 값은? (단, i=√-1)",
      passage: null,
      options: [
        "① -12",
        "② -6",
        "③ 6",
        "④ 16",
        "⑤ 20"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다. 각각의 식을 i를 이용해 정리하면 다음과 같습니다. \n√(−2)√(8) = √2i × 2√2 = 4i\n√(−3)√(−27) = -√(3×27) = -√81 = -9\n√(−16)/√(−4) = 4i / 2i = 2\n√(125)/√(−5) = 5√5 / √5i = 5/i = -5i\n모두 더하면 4i - 9 + 2 - 5i = -7 - i 가 됩니다. 따라서 a = -7, b = -1 이며 b - a = -1 - (-7) = 6 입니다."
    },
    {
      questionNum: 16,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      questionText: "x²+x-3=0 일 때, x⁴-3x³-6x²+13x-8 의 값은?",
      passage: null,
      options: [
        "① -8",
        "② -5",
        "③ -2",
        "④ 1",
        "⑤ 4"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다. 주어진 사차식 x⁴-3x³-6x²+13x-8 을 x²+x-3 으로 직접 나누면, 몫은 x²-4x+1 이고 나머지는 -5가 나옵니다. 식을 다시 쓰면 (x²+x-3)(x²-4x+1) + (-5) 인데, 조건에서 x²+x-3=0 이라 했으므로 앞의 항은 모두 0이 되고 구하는 식의 값은 나머지인 -5만 남습니다."
    },
    {
      questionNum: 17,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      questionText: "이차방정식 x²-2kx+k²-k+3=0 이 서로 다른 두 허근을 갖고, 이차방정식 x²-(2k+1)x+k²-7/4=0 이 실근을 갖도록 하는 모든 정수 k의 값의 합은?",
      passage: null,
      options: [
        "① -2",
        "② -1",
        "③ 0",
        "④ 1",
        "⑤ 2"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다. 첫 번째 방정식이 서로 다른 두 허근을 가지려면 판별식 D₁/4 = k² - (k²-k+3) < 0 이어야 하므로 k - 3 < 0, 즉 k < 3 입니다. 두 번째 방정식이 실근을 가지려면 판별식 D₂ = (2k+1)² - 4(k²-7/4) ≥ 0 이어야 하므로 4k² + 4k + 1 - 4k² + 7 ≥ 0, 즉 4k + 8 ≥ 0 이 되어 k ≥ -2 입니다. 두 조건을 동시에 만족하는 범위는 -2 ≤ k < 3 이며, 이 범위의 정수 k는 -2, -1, 0, 1, 2 입니다. 이를 모두 더하면 0 입니다."
    },
    {
      questionNum: 18,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      questionText: "x³의 계수가 1인 삼차식 P(x)에 대하여 P(1)=2, P(2)=4, P(3)=6 일 때, P(x)를 x-5로 나눈 나머지는?",
      passage: null,
      options: [
        "① 25",
        "② 28",
        "③ 31",
        "④ 34",
        "⑤ 37"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다. 주어진 조건에서 P(1)=2(1), P(2)=2(2), P(3)=2(3) 이므로, P(x) - 2x = 0 을 만족하는 해가 x = 1, 2, 3 임을 알 수 있습니다. 최고차항의 계수가 1인 삼차식이므로 P(x) - 2x = (x-1)(x-2)(x-3) 로 식을 세울 수 있습니다. 즉, P(x) = (x-1)(x-2)(x-3) + 2x 입니다. 나머지 정리에 의해 x-5로 나눈 나머지는 P(5) 값과 같으므로 P(5) = (4)(3)(2) + 10 = 24 + 10 = 34 입니다."
    },
    {
      questionNum: 19,
      type: "multiple_choice",
      score: 4.4,
      linkedPassageId: null,
      questionText: "복소수에 대한 <보기>의 설명 중 옳은 것만을 있는 대로 고른 것은? (단, i=√-1 이고, ¯z는 복소수 z의 켤레복소수이다.)",
      passage: `<b>&lt;보기&gt;</b><br>
ㄱ. 이차식 2x²-8x+9 를 복소수의 범위에서 인수분해하면 2(x-2-√(2)/2 i)(x+2+√(2)/2 i) 이다.<br>
ㄴ. z = -¯z 를 만족시키는 복소수 z에 대하여 z² 의 값은 실수이다.<br>
ㄷ. z=(1+i)/√2 일 때, z²ⁿ=-i 를 만족하는 20 이하의 자연수 n의 값의 합은 55이다.`,
      options: [
        "① ㄱ",
        "② ㄴ",
        "③ ㄱ, ㄷ",
        "④ ㄴ, ㄷ",
        "⑤ ㄱ, ㄴ, ㄷ"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다. ㄱ은 근의 공식을 쓰면 x = (4±√2i)/2 = 2 ± (√2/2)i 가 되어 (x-2-(√2/2)i)(x-2+(√2/2)i) 형태가 되어야 하므로 틀렸습니다. ㄴ은 z = -¯z 이면 z는 순허수이거나 0이므로 제곱하면 항상 음의 실수나 0이 되어 실수가 맞습니다. ㄷ은 z = (1+i)/√2 일 때 양변을 제곱하면 z² = i 입니다. 따라서 z²ⁿ = iⁿ = -i 를 만족하는 n은 4k+3 꼴입니다. 20 이하의 자연수 중 3, 7, 11, 15, 19 이고 이들의 합은 55이므로 참입니다. 옳은 것은 ㄴ, ㄷ 입니다."
    },
    {
      questionNum: 20,
      type: "multiple_choice",
      score: 4.5,
      linkedPassageId: null,
      questionText: "삼차방정식 x³=8 의 한 허근을 ω라 할 때, <보기>에서 옳은 것만을 있는 대로 고른 것은? (단, ¯ω는 ω의 켤레복소수이다.)",
      passage: `<b>&lt;보기&gt;</b><br>
ㄱ. ω²=2¯ω<br>
ㄴ. 1+ω+ω²=-ω-2<br>
ㄷ. 1+ω+ω²+···+ωⁿ=-9ω+37을 만족하는 자연수 n은 6이다.`,
      options: [
        "① ㄱ",
        "② ㄴ",
        "③ ㄱ, ㄷ",
        "④ ㄴ, ㄷ",
        "⑤ ㄱ, ㄴ, ㄷ"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다. x³-8 = (x-2)(x²+2x+4) = 0 에서 허근 ω는 ω²+2ω+4=0 을 만족하며 ω³=8 입니다. 근과 계수의 관계에서 ω¯ω=4 이므로 ¯ω=4/ω 입니다. \nㄱ. 양변에 ω를 곱하면 ω³ = 2ω¯ω 가 되고 8 = 2(4) 이므로 참입니다.\nㄴ. ω² = -2ω-4 이므로 1+ω+ω² = 1+ω+(-2ω-4) = -ω-3 이 됩니다. 따라서 틀렸습니다.\nㄷ. n=6 일 때 좌변은 1+ω+ω²+ω³+ω⁴+ω⁵+ω⁶ 입니다. ω³=8 이므로 1+ω+ω²+8+8ω+8ω²+64 가 되고, 1+ω+ω² = -ω-3 임을 이용하면 (-ω-3) + 8(-ω-3) + 64 = -9ω - 27 + 64 = -9ω + 37 이 되어 참입니다. 옳은 것은 ㄱ, ㄷ 입니다."
    },
    {
      questionNum: 21,
      type: "short_answer",
      score: 4.0,
      linkedPassageId: null,
      questionText: "[서답형 1] 세 수 x, y, z에 대하여 x+y+z=8, x²+y²+z²=30 일 때, xy+yz+zx 의 값을 구하시오.",
      passage: null,
      options: [],
      correctAnswer: "17",
      explanation: "곱셈 공식의 변형 (x+y+z)² = x²+y²+z² + 2(xy+yz+zx) 식을 이용합니다. 주어진 값을 대입하면 8² = 30 + 2(xy+yz+zx) 가 됩니다. 즉, 64 = 30 + 2(xy+yz+zx) 이므로 2(xy+yz+zx) = 34 가 되고, 이를 2로 나누면 xy+yz+zx = 17 입니다."
    },
    {
      questionNum: 22,
      type: "short_answer",
      score: 4.5,
      linkedPassageId: null,
      questionText: "[서답형 2] 이차방정식 x²+ax+b=0(a, b는 실수)의 한 근이 1+2i 일 때, b-a, ab 를 두 근으로 하고 x²의 계수가 1인 이차방정식을 구하시오. (단, i=√-1)",
      passage: null,
      options: [],
      correctAnswer: "x^{2}+3x-70=0",
      explanation: "계수가 실수인 이차방정식의 한 근이 1+2i 이면 켤레복소수인 1-2i 도 근이 됩니다. 근과 계수의 관계에 의해 두 근의 합은 (1+2i)+(1-2i) = 2 = -a 이므로 a = -2 입니다. 두 근의 곱은 (1+2i)(1-2i) = 1² - (2i)² = 1 - (-4) = 5 = b 입니다. 따라서 새로운 방정식의 두 근은 b-a = 5 - (-2) = 7 과 ab = (-2) × 5 = -10 입니다. 두 근이 7과 -10이고 이차항 계수가 1인 이차방정식은 (x-7)(x+10)=0, 전개하면 x² + 3x - 70 = 0 입니다."
    },
    {
      questionNum: 23,
      type: "short_answer",
      score: 5.5,
      linkedPassageId: null,
      questionText: "[서답형 3] 이차함수 f(x)가 f(0)=f(4), |f(1)|=|f(5)| 를 만족시킨다. 1≤x≤5 에서 f(x)의 최솟값이 -10일 때, 1≤x≤5 에서 f(x)의 모든 최댓값의 합을 구하시오.",
      passage: null,
      options: [],
      correctAnswer: "41/2",
      explanation: "f(0)=f(4) 이므로 대칭축의 방정식은 x=2 입니다. f(x)=a(x-2)²+q 로 둡니다. |f(1)|=|f(5)| 에서 f(1)=a+q, f(5)=9a+q 이고 a=0일 수는 없으므로 부호가 반대여야 합니다. a+q = -(9a+q), 즉 10a+2q=0 에서 q=-5a 입니다. 따라서 f(x)=a(x-2)²-5a 가 됩니다.\n1) a>0(아래로 볼록)인 경우: 1≤x≤5에서 최솟값은 꼭짓점인 x=2일 때 f(2)=-5a=-10 이므로 a=2 입니다. f(x)=2(x-2)²-10 이며, 최댓값은 x=5일 때 f(5)=2(9)-10=8 입니다.\n2) a<0(위로 볼록)인 경우: 1≤x≤5에서 최솟값은 축에서 가장 먼 x=5일 때 f(5)=9a-5a=4a=-10 이므로 a=-5/2 입니다. f(x)=(-5/2)(x-2)²+25/2 이며, 최댓값은 꼭짓점 x=2일 때 f(2)=25/2 입니다.\n따라서 모든 가능한 최댓값의 합은 8 + 25/2 = 41/2 입니다."
    },
    {
      questionNum: 24,
      type: "short_answer",
      score: 6.0,
      linkedPassageId: null,
      questionText: "[서답형 4] 다음 두 조건을 만족시키는 x에 대한 다항식 중 차수가 가장 작은 것을 f(x)라 할 때, f(5)의 값을 구하시오.\n(가) x²으로 나누었을 때의 나머지는 -3x+2이다.\n(나) (x-1)² 으로 나누었을 때의 나머지는 2x 이다.",
      passage: null,
      options: [],
      correctAnswer: "-38",
      explanation: "두 조건을 만족하는 가장 낮은 차수의 다항식 f(x)는 3차식입니다. 조건 (가)에 의해 f(x) = x²(ax+b) - 3x + 2 로 세울 수 있습니다. 조건 (나)에 의해 f(x)를 (x-1)² 로 나눈 나머지가 2x이므로 나머지 정리에 따라 f(1)=2 이고 미분계수 f'(1)=2 여야 합니다.\nf(1) = a+b-3+2 = a+b-1 = 2 에서 a+b=3, 즉 b=3-a 입니다.\nf'(x) = 3ax² + 2bx - 3 이므로 f'(1) = 3a+2b-3 = 2 입니다. 3a+2(3-a)-3 = a+3 = 2 가 되어 a = -1 이고 b = 4 가 됩니다.\n따라서 f(x) = x²(-x+4) - 3x + 2 = -x³+4x²-3x+2 입니다. f(5) = -(125) + 4(25) - 15 + 2 = -125 + 100 - 13 = -38 입니다."
    }
  ]
};
