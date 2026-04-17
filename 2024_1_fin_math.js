var exam_2024_1_fin_math = {
  examInfo: {
    examId: "2024_1_fin_math",
    schoolName: "동대전고등학교",
    year: 2024,
    semester: 1,
    grade: 1,
    examType: "기말고사",
    subject: "수학"
  },
  sharedPassages: {},
  questions: [
    {
      questionNum: 1,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "1. 좌표평면 위의 원 $(x+3)^2+(y-4)^2=25$의 중심의 좌표가 (a, b)이고 반지름의 길이가 r일 때, a+b+r의 값은? [3.6점]",
      passage: null,
      options: [
        "① 4",
        "② 6",
        "③ 8",
        "④ 10",
        "⑤ 12"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다.\n원의 방정식 $(x+3)^2+(y-4)^2=25$에서 중심의 좌표는 $(-3, 4)$이므로 $a=-3, b=4$입니다.\n반지름의 길이 $r = \\sqrt{25} = 5$입니다.\n따라서 $a+b+r = -3+4+5 = 6$입니다."
    },
    {
      questionNum: 2,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "2. 좌표평면 위의 점 (2, -3)을 x축에 대하여 대칭이동한 후 다시 원점에 대해 대칭이동한 점은? [3.6점]",
      passage: null,
      options: [
        "① (-2, -3)",
        "② (-3, -2)",
        "③ (-3, 2)",
        "④ (2, 3)",
        "⑤ (3, 2)"
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다.\n점 $(2, -3)$을 x축에 대하여 대칭이동하면 y좌표의 부호가 바뀌어 $(2, 3)$이 됩니다.\n이 점을 다시 원점에 대하여 대칭이동하면 x, y좌표의 부호가 모두 바뀌어 $(-2, -3)$이 됩니다."
    },
    {
      questionNum: 3,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "3. 수직선 위의 두 점 A(-5), B(3)에 대하여 선분 AB를 3:1로 내분하는 점의 좌표는? [3.7점]",
      passage: null,
      options: [
        "① -2",
        "② -1",
        "③ 0",
        "④ 1",
        "⑤ 2"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다.\n선분 AB를 3:1로 내분하는 점의 좌표는 $\\frac{3 \\times 3 + 1 \\times (-5)}{3 + 1} = \\frac{9 - 5}{4} = \\frac{4}{4} = 1$ 입니다."
    },
    {
      questionNum: 4,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "4. 점 (2, -1)을 지나고 기울기가 4인 직선이 점 (5, a)를 지날 때, 상수 a의 값은? [3.7점]",
      passage: null,
      options: [
        "① 7",
        "② 9",
        "③ 11",
        "④ 13",
        "⑤ 15"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다.\n기울기가 4이고 점 $(2, -1)$을 지나는 직선의 방정식은 $y - (-1) = 4(x - 2)$, 즉 $y = 4x - 9$ 입니다.\n이 직선이 점 $(5, a)$를 지나므로 대입하면 $a = 4(5) - 9 = 20 - 9 = 11$ 입니다."
    },
    {
      questionNum: 5,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "5. 원 $x^2+y^2=25$ 위의 점 (3, 4)에서 그은 접선의 x절편의 값은? [3.7점]",
      passage: null,
      options: [
        "① $\\frac{25}{3}$",
        "② 9",
        "③ $\\frac{29}{3}$",
        "④ $\\frac{31}{3}$",
        "⑤ 11"
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다.\n원 $x^2+y^2=r^2$ 위의 점 $(x_1, y_1)$에서의 접선의 방정식은 $x_1x + y_1y = r^2$ 입니다.\n따라서 접선의 방정식은 $3x + 4y = 25$ 입니다.\nx절편을 구하기 위해 $y=0$을 대입하면 $3x = 25$, 즉 $x = \\frac{25}{3}$ 입니다."
    },
    {
      questionNum: 6,
      type: "multiple_choice",
      score: 3.8,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "6. x에 대한 이차부등식 $x^2+5x+k>0$이 모든 실수 x에 대하여 성립하도록 하는 자연수 k의 최솟값은? [3.8점]",
      passage: null,
      options: [
        "① 6",
        "② 7",
        "③ 8",
        "④ 9",
        "⑤ 10"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다.\n이차함수의 그래프가 항상 x축보다 위에 있어야 하므로 판별식 $D < 0$ 이어야 합니다.\n$D = 5^2 - 4(1)(k) = 25 - 4k < 0$\n$4k > 25 \\Rightarrow k > \\frac{25}{4} = 6.25$\n이를 만족하는 자연수 k의 최솟값은 7입니다."
    },
    {
      questionNum: 7,
      type: "multiple_choice",
      score: 3.8,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "7. 좌표평면 위의 두 점 A(2, 4), B(5, -2)에 대하여 선분 AB를 5:2로 외분하는 점이 직선 $y=2x-k$ 위에 있을 때, 상수 k의 값은? [3.8점]",
      passage: null,
      options: [
        "① 12",
        "② 14",
        "③ 16",
        "④ 18",
        "⑤ 20"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다.\n외분점의 좌표를 구하면,\nx좌표: $\\frac{5 \\times 5 - 2 \\times 2}{5 - 2} = \\frac{25 - 4}{3} = 7$\ny좌표: $\\frac{5 \\times (-2) - 2 \\times 4}{5 - 2} = \\frac{-10 - 8}{3} = -6$\n즉, 외분점은 $(7, -6)$ 입니다.\n이 점이 직선 $y=2x-k$ 위에 있으므로, $-6 = 2(7) - k \\Rightarrow -6 = 14 - k \\Rightarrow k = 20$ 입니다."
    },
    {
      questionNum: 8,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "8. 직선 $x+2y-2=0$을 x축의 방향으로 -5만큼, y축의 방향으로 k만큼 평행이동한 직선이 원 $(x+1)^2+(y-7)^2=4$의 넓이를 이등분할 때, 상수 k의 값은? [3.9점]",
      passage: null,
      options: [
        "① 8",
        "② 10",
        "③ 12",
        "④ 14",
        "⑤ 16"
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다.\n직선을 평행이동하면: $(x+5) + 2(y-k) - 2 = 0 \\Rightarrow x + 2y - 2k + 3 = 0$ 입니다.\n이 직선이 원의 넓이를 이등분하려면 원의 중심 $(-1, 7)$을 지나야 합니다.\n대입하면 $-1 + 2(7) - 2k + 3 = 0 \\Rightarrow 16 - 2k = 0 \\Rightarrow k = 8$ 입니다."
    },
    {
      questionNum: 9,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "9. 직선 $x+(k-1)y+3=0$이 직선 $3x+4y+2=0$과 수직이고, 직선 $(3m+1)x+6y+5=0$과 평행할 때, 두 상수 k, m에 대하여 8k+m의 값은? [3.9점]",
      passage: null,
      options: [
        "① -3",
        "② -1",
        "③ 1",
        "④ 3",
        "⑤ 5"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다.\n수직 조건: $A_1A_2 + B_1B_2 = 0 \\Rightarrow 1(3) + (k-1)4 = 0 \\Rightarrow 3 + 4k - 4 = 0 \\Rightarrow 4k = 1 \\Rightarrow k = \\frac{1}{4}$ 입니다.\n평행 조건: $\\frac{A_1}{A_2} = \\frac{B_1}{B_2} \\neq \\frac{C_1}{C_2} \\Rightarrow \\frac{1}{3m+1} = \\frac{k-1}{6} \\Rightarrow \\frac{1}{3m+1} = \\frac{-\\frac{3}{4}}{6} = -\\frac{1}{8}$\n따라서 $3m+1 = -8 \\Rightarrow 3m = -9 \\Rightarrow m = -3$ 입니다.\n구하고자 하는 값 $8k + m = 8(\\frac{1}{4}) - 3 = 2 - 3 = -1$ 입니다."
    },
    {
      questionNum: 10,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "10. 좌표평면 위의 두 점 A(1, 2), B(4, 7)과 직선 y=x 위의 점 P에 대하여 AP+BP의 최솟값은? [4.0점]",
      passage: null,
      options: [
        "① $4\\sqrt{2}$",
        "② $2\\sqrt{10}$",
        "③ $4\\sqrt{3}$",
        "④ $2\\sqrt{14}$",
        "⑤ 8"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다.\n점 A(1, 2)를 직선 y=x에 대하여 대칭이동한 점을 A'라고 하면 A'(2, 1)이 됩니다.\n이때 AP = A'P 이므로 AP+BP = A'P+BP 가 되며, 이 값의 최솟값은 두 점 A'와 B 사이의 직선 거리인 A'B입니다.\nA'B = $\\sqrt{(4-2)^2 + (7-1)^2} = \\sqrt{2^2 + 6^2} = \\sqrt{4 + 36} = \\sqrt{40} = 2\\sqrt{10}$ 입니다."
    },
    {
      questionNum: 11,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "11. 좌표평면 위의 세 점 A(-1, 8), B(-5, -1), C(0, 2)를 꼭짓점으로 하는 삼각형 ABC의 무게중심 G와 원 $x^2+y^2-6x+10y+29=0$ 위의 점 P에 대하여 선분 GP의 길이의 최댓값을 M, 최솟값을 m이라 할 때, M×m의 값은? [4.0점]",
      passage: null,
      options: [
        "① 78",
        "② 80",
        "③ 82",
        "④ 84",
        "⑤ 86"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다.\n삼각형 ABC의 무게중심 G는 $(\\frac{-1-5+0}{3}, \\frac{8-1+2}{3}) = (-2, 3)$ 입니다.\n원의 방정식을 표준형으로 바꾸면 $(x-3)^2 + (y+5)^2 = -29 + 9 + 25 = 5$ 이므로 중심은 $C(3, -5)$, 반지름 $r=\\sqrt{5}$ 입니다.\n중심 C와 G 사이의 거리는 $d = \\sqrt{(3 - (-2))^2 + (-5 - 3)^2} = \\sqrt{5^2 + (-8)^2} = \\sqrt{25 + 64} = \\sqrt{89}$ 입니다.\n최댓값 $M = d + r = \\sqrt{89} + \\sqrt{5}$, 최솟값 $m = d - r = \\sqrt{89} - \\sqrt{5}$ 입니다.\n$M \\times m = (\\sqrt{89} + \\sqrt{5})(\\sqrt{89} - \\sqrt{5}) = 89 - 5 = 84$ 입니다."
    },
    {
      questionNum: 12,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "12. 부등식 $3|x+2| + 2|x-3| \\le 15$를 만족시키는 정수 x의 개수는? [4.1점]",
      passage: null,
      options: [
        "① 3",
        "② 4",
        "③ 5",
        "④ 6",
        "⑤ 7"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다.\n절댓값 안의 식을 0으로 만드는 $x=-2, x=3$을 기준으로 구간을 나눕니다.\n(1) $x < -2$ 일 때: $-3(x+2) - 2(x-3) \\le 15 \\Rightarrow -5x \\le 15 \\Rightarrow x \\ge -3$. 따라서 $-3 \\le x < -2$ 이며 정수는 -3입니다.\n(2) $-2 \\le x < 3$ 일 때: $3(x+2) - 2(x-3) \\le 15 \\Rightarrow x + 12 \\le 15 \\Rightarrow x \\le 3$. 따라서 $-2 \\le x < 3$ 범위의 정수는 -2, -1, 0, 1, 2입니다.\n(3) $x \\ge 3$ 일 때: $3(x+2) + 2(x-3) \\le 15 \\Rightarrow 5x \\le 15 \\Rightarrow x \\le 3$. 따라서 이 범위의 정수는 3입니다.\n만족하는 정수 x는 -3, -2, -1, 0, 1, 2, 3으로 총 7개입니다."
    },
    {
      questionNum: 13,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "13. 개미 두 마리가 좌표평면 위의 두 점 A(-1, 10), B(4, 5)에 각각 한 마리씩 있다. 개미들은 동시에 움직이기 시작해서 직선 운동을 하고, 점 A에서 출발한 개미의 속도는 점 B에서 출발한 개미의 속도의 1.5배이다. 두 개미가 서로 만날 수 있는 점을 P라 할 때, 점 P가 나타내는 도형의 둘레 길이는? (단, 개미의 크기는 무시한다.) [4.1점]",
      passage: null,
      options: [
        "① $6\\sqrt{2}\\pi$",
        "② $12\\pi$",
        "③ $12\\sqrt{2}\\pi$",
        "④ $24\\pi$",
        "⑤ $24\\sqrt{2}\\pi$"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다.\n두 개미의 속도비가 1.5 : 1 이므로, 같은 시간 동안 이동한 거리의 비 $PA : PB = 3 : 2$ 를 만족해야 합니다. 이 점 P가 그리는 도형은 '아폴로니우스의 원'입니다.\n내분점: $\\left(\\frac{3(4) + 2(-1)}{5}, \\frac{3(5) + 2(10)}{5}\\right) = (2, 7)$\n외분점: $\\left(\\frac{3(4) - 2(-1)}{1}, \\frac{3(5) - 2(10)}{1}\\right) = (14, -5)$\n지름의 길이는 두 점 $(2, 7)$과 $(14, -5)$ 사이의 거리이므로 $\\sqrt{(14-2)^2 + (-5-7)^2} = \\sqrt{144 + 144} = \\sqrt{288} = 12\\sqrt{2}$ 입니다.\n따라서 원의 둘레 길이는 $12\\sqrt{2}\\pi$ 입니다."
    },
    {
      questionNum: 14,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "14. 어느 청소년 수련원에서 학생들에게 숙소를 배정하려고 한다. 한 방에 4명씩 배정하면 10명이 남고, 7명씩 배정하면 3개의 방이 남는다고 한다. 수련원의 방의 개수가 될 수 있는 수를 모두 더한 값은? (단, 7명씩 배정한 경우, 7명보다 적은 인원이 배정된 방이 한 개 있을 수 있다.) [4.2점]",
      passage: null,
      options: [
        "① 17",
        "② 19",
        "③ 21",
        "④ 23",
        "⑤ 25"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다.\n방의 개수를 $x$개라고 하면 전체 학생 수는 $4x + 10$명입니다.\n7명씩 배정하면 3개의 방이 완전히 비고, 배정된 마지막 1개의 방에는 1명 이상 7명 이하의 학생이 들어갑니다. 따라서 학생 수는 $7(x-4) + 1 \\le 4x + 10 \\le 7(x-4) + 7$ 범위를 만족합니다.\n(1) $7x - 27 \\le 4x + 10 \\Rightarrow 3x \\le 37 \\Rightarrow x \\le 12.33...$\n(2) $4x + 10 \\le 7x - 21 \\Rightarrow 31 \\le 3x \\Rightarrow x \\ge 10.33...$\n조건을 만족하는 자연수 $x$는 11, 12입니다. 구하는 값은 $11 + 12 = 23$ 입니다."
    },
    {
      questionNum: 15,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "15. 연립부등식 $\\begin{cases}x^2+4x \\le 0 \\\\ 6x^2-x-15 \\ge 0\\end{cases}$ 의 해와 이차부등식 $ax^2+11x+b \\le 0$의 해가 서로 같을 때, 실수 a, b에 대하여 a+b의 값은? [4.2점]",
      passage: null,
      options: [
        "① 12",
        "② 13",
        "③ 14",
        "④ 15",
        "⑤ 16"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다.\n첫 번째 부등식: $x^2+4x \\le 0 \\Rightarrow x(x+4) \\le 0 \\Rightarrow -4 \\le x \\le 0$\n두 번째 부등식: $6x^2-x-15 \\ge 0 \\Rightarrow (3x-5)(2x+3) \\ge 0 \\Rightarrow x \\le -\\frac{3}{2}$ 또는 $x \\ge \\frac{5}{3}$\n공통 부분(연립부등식의 해): $-4 \\le x \\le -\\frac{3}{2}$\n이 해가 $ax^2+11x+b \\le 0$ (a>0)의 해와 같으므로, 이차방정식 $ax^2+11x+b=0$의 두 근은 $-4$와 $-\\frac{3}{2}$입니다.\n근과 계수의 관계에 의해 두 근의 합: $-4 - \\frac{3}{2} = -\\frac{11}{2} = -\\frac{11}{a} \\Rightarrow a = 2$\n두 근의 곱: $(-4) \\times (-\\frac{3}{2}) = 6 = \\frac{b}{a} = \\frac{b}{2} \\Rightarrow b = 12$\n따라서 $a+b = 2 + 12 = 14$ 입니다."
    },
    {
      questionNum: 16,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "16. 좌표평면 위의 세 점 A(-1, 3), B(-4, 5), C(2, 9)를 꼭짓점으로 하는 삼각형 ABC에서 $\\angle B$의 이등분선과 변 AC가 만나는 점을 D라 할 때, 두 점 B, D를 지나는 직선의 방정식은? [4.2점]",
      passage: null,
      options: [
        "① $y=-\\frac{2}{9}x+\\frac{37}{9}$",
        "② $y=-\\frac{5}{9}x+\\frac{25}{9}$",
        "③ $y=\\frac{1}{9}x+\\frac{49}{9}$",
        "④ $y=x+9$",
        "⑤ $y=5$"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다.\n선분 AB의 길이 = $\\sqrt{(-1 - (-4))^2 + (3 - 5)^2} = \\sqrt{9 + 4} = \\sqrt{13}$\n선분 BC의 길이 = $\\sqrt{(2 - (-4))^2 + (9 - 5)^2} = \\sqrt{36 + 16} = \\sqrt{52} = 2\\sqrt{13}$\n삼각형 내각의 이등분선의 성질에 의해 점 D는 선분 AC를 $AB : BC = 1 : 2$ 로 내분하는 점입니다.\nD의 좌표 = $(\\frac{1(2) + 2(-1)}{1+2}, \\frac{1(9) + 2(3)}{1+2}) = (\\frac{0}{3}, \\frac{15}{3}) = (0, 5)$ 입니다.\n두 점 B(-4, 5)와 D(0, 5)를 지나는 직선은 y좌표가 같으므로 $y=5$ 입니다."
    },
    {
      questionNum: 17,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "17. 함수 $f(x)=x^2+2x-2k^2+4k+17$의 그래프와 x축이 만나는 점의 개수와 함수 $g(x)=x^2+5x+2k^2-28k+81$의 그래프와 직선 $y=x-3$이 만나는 점의 개수가 서로 같도록 하는 모든 정수 k의 개수는? [4.3점]",
      passage: null,
      options: [
        "① 10",
        "② 11",
        "③ 12",
        "④ 13",
        "⑤ 14"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다.\nf(x)가 x축과 만나는 점의 개수 판별식 $D_1/4 = 1^2 - (-2k^2+4k+17) = 2k^2-4k-16 = 2(k-4)(k+2)$.\ng(x)와 y=x-3의 교점 판별식 $D_2/4 = 2^2 - (2k^2-28k+84) = -2k^2+28k-80 = -2(k-4)(k-10)$.\n1) 두 교점 모두 2개인 경우: $D_1>0$ 이고 $D_2>0 \\Rightarrow (k<-2 \\text{ 또는 } k>4)$ 이고 $(4<k<10)$. 공통범위 $4<k<10$ (정수: 5, 6, 7, 8, 9 - 5개)\n2) 두 교점 모두 1개인 경우: $D_1=0$ 이고 $D_2=0 \\Rightarrow k=4$ (정수: 4 - 1개)\n3) 두 교점 모두 0개인 경우: $D_1<0$ 이고 $D_2<0 \\Rightarrow (-2<k<4)$ 이고 $(k<4 \\text{ 또는 } k>10)$. 공통범위 $-2<k<4$ (정수: -1, 0, 1, 2, 3 - 5개)\n따라서 만족하는 정수 k는 총 11개입니다."
    },
    {
      questionNum: 18,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "18. 모든 실수 x에 대하여 부등식 $-x^2+2x-4 \\le mx+n \\le x^2-6x+4$가 항상 성립할 때, 상수 m, n에 대하여 $m^2+n^2$의 값은? [4.3점]",
      passage: null,
      options: [
        "① 4",
        "② 6",
        "③ 8",
        "④ 10",
        "⑤ 12"
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다.\n두 이차부등식이 모두 항상 성립해야 합니다.\n1) $x^2 + (m-2)x + (n+4) \\ge 0 \\Rightarrow D = (m-2)^2 - 4(n+4) \\le 0 \\Rightarrow 4n \\ge (m-2)^2 - 16$\n2) $x^2 - (m+6)x + (4-n) \\ge 0 \\Rightarrow D = (m+6)^2 - 4(4-n) \\le 0 \\Rightarrow 4n \\le 16 - (m+6)^2$\n두 조건에 의해 $(m-2)^2 - 16 \\le 4n \\le 16 - (m+6)^2$ 이어야 합니다.\n$(m^2-4m-12) \\le (-m^2-12m-20) \\Rightarrow 2m^2+8m+8 \\le 0 \\Rightarrow 2(m+2)^2 \\le 0$.\n실수 조건에 의해 $m = -2$ 만 가능합니다. 대입하면 $0 \\le 4n \\le 0$ 이므로 $n = 0$ 입니다.\n따라서 $m^2+n^2 = (-2)^2 + 0^2 = 4$ 입니다."
    },
    {
      questionNum: 19,
      type: "multiple_choice",
      score: 4.4,
      linkedPassageId: null,
      imageUrl: "./images/2024_1_fin_math1_q19.png",
      questionText: "19. 좌표평면 위의 세 점 A(0, -3), B(10, -8), C(6, 0)에 대하여 삼각형 ABC에 내접하는 원의 반지름의 길이는? [4.4점]",
      passage: null,
      options: [
        "① $\\sqrt{2}$",
        "② $\\sqrt{3}$",
        "③ 2",
        "④ $\\sqrt{5}$",
        "⑤ $\\sqrt{6}$"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다.\n세 변의 길이를 구하면:\n$BC = \\sqrt{(10-6)^2 + (-8-0)^2} = \\sqrt{16+64} = \\sqrt{80} = 4\\sqrt{5}$\n$AC = \\sqrt{(6-0)^2 + (0 - (-3))^2} = \\sqrt{36+9} = \\sqrt{45} = 3\\sqrt{5}$\n$AB = \\sqrt{(10-0)^2 + (-8 - (-3))^2} = \\sqrt{100+25} = \\sqrt{125} = 5\\sqrt{5}$\n$AC^2 + BC^2 = 45 + 80 = 125 = AB^2$ 이 성립하므로, 각 C가 직각인 직각삼각형입니다.\n삼각형의 넓이 $S = \\frac{1}{2} \\times 4\\sqrt{5} \\times 3\\sqrt{5} = 30$ 입니다.\n또한 내접원의 반지름을 r이라 하면 $S = \\frac{1}{2}r(AB+BC+CA) = \\frac{1}{2}r(12\\sqrt{5}) = 6\\sqrt{5}r$ 입니다.\n$6\\sqrt{5}r = 30 \\Rightarrow r = \\frac{5}{\\sqrt{5}} = \\sqrt{5}$ 입니다."
    },
    {
      questionNum: 20,
      type: "multiple_choice",
      score: 4.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "20. 두 직선 $3x+y+3=0$, $x-3y-9=0$ 의 교점을 A, 두 직선 $l_1, l_2$가 x축과 만나는 점을 각각 B, C라 하자. 제 1사분면에 있는 점 P와 삼각형 ABC의 외접원 위의 점 Q가 다음 조건을 만족시킨다.\n(가) 점 Q는 삼각형 PBC의 무게중심이다.\n(나) 삼각형 PBC의 넓이는 삼각형 ABC의 넓이의 2배이다.\n<보기>에서 옳은 것만을 있는 대로 고른 것은? [4.5점]",
      passage: `<보기>\nㄱ. 두 직선 $l_1, l_2$는 서로 수직이다.\nㄴ. 점 Q의 y좌표는 2이다.\nㄷ. 삼각형 PQC의 넓이는 10이다.`,
      options: [
        "① ㄱ",
        "② ㄷ",
        "③ ㄱ, ㄴ",
        "④ ㄴ, ㄷ",
        "⑤ ㄱ, ㄴ, ㄷ"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다.\nㄱ. 두 직선의 기울기는 각각 -3과 1/3이므로 곱이 -1이 되어 서로 수직입니다. (참)\nㄴ. A(0, -3), x절편은 B(-1, 0), C(9, 0)입니다. 직각삼각형 ABC의 넓이는 $\\frac{1}{2} \\times 10 \\times 3 = 15$입니다. 삼각형 PBC의 밑변은 BC(길이 10)로 같고 넓이가 2배(30)이므로 P의 y좌표는 6이어야 합니다(제1사분면). 무게중심 Q의 y좌표는 $\\frac{6+0+0}{3}=2$ 입니다. (참)\nㄷ. 점 Q가 무게중심이므로 삼각형 PQC의 넓이는 삼각형 PBC 넓이의 $\\frac{1}{3}$입니다. $30 \\times \\frac{1}{3} = 10$ 입니다. (참)"
    },
    {
      questionNum: 21,
      type: "short_answer",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "[서답형 1] 좌표평면 위의 점 (-3, 6)과 직선 $y=-\\frac{4}{3}x+\\frac{16}{3}$ 사이의 거리를 구하시오. [4.0점]",
      passage: null,
      options: [],
      correctAnswer: "2",
      explanation: "직선의 방정식을 일반형으로 고치면 양변에 3을 곱하고 이항하여 $4x + 3y - 16 = 0$이 됩니다.\n점 $(-3, 6)$과 직선 사이의 거리는 $\\frac{|4(-3) + 3(6) - 16|}{\\sqrt{4^2 + 3^2}} = \\frac{|-12 + 18 - 16|}{5} = \\frac{|-10|}{5} = 2$ 입니다."
    },
    {
      questionNum: 22,
      type: "short_answer",
      score: 4.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "[서답형 2] x에 대한 연립부등식 $\\begin{cases}x^2+x-2>0 \\\\ |x-n| \\le 3\\end{cases}$ 을 만족시키는 정수 x의 개수가 3이 되도록 하는 모든 정수 n의 값의 합을 구하시오. [4.5점]",
      passage: null,
      options: [],
      correctAnswer: "-2",
      explanation: "1) $x^2+x-2 > 0 \\Rightarrow (x+2)(x-1) > 0 \\Rightarrow x < -2$ 또는 $x > 1$\n2) $|x-n| \\le 3 \\Rightarrow n-3 \\le x \\le n+3$\n이 구간의 길이 6 안에는 항상 7개의 정수가 포함됩니다.\n이 중 $x < -2$ 또는 $x > 1$ 범위를 만족하는 정수가 정확히 3개가 되려면, 공통 해에 제외되는 구간 $[-2, 1]$ (포함 정수: -2, -1, 0, 1)의 위치와 비교하여 검토해야 합니다.\nn의 값을 정수로 대입해보면 n=0, 1, -1, -2일 때 조건을 정확히 만족하여 3개의 정수해가 나옴을 확인할 수 있습니다.\n따라서 가능한 모든 정수 n의 값의 합은 $(-2) + (-1) + 0 + 1 = -2$ 입니다."
    },
    {
      questionNum: 23,
      type: "short_answer",
      score: 5.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "[서답형 3] 좌표평면 위의 점 (3, 10)에서 원 $(x+1)^2+(y-2)^2=16$에 그은 접선의 방정식을 모두 구하시오. [5.5점]",
      passage: null,
      options: [],
      correctAnswer: "3x-4y+31=0, x=3",
      explanation: "접선의 기울기를 m이라 하면 방정식은 $y - 10 = m(x - 3) \\Rightarrow mx - y - 3m + 10 = 0$ 입니다.\n원의 중심 $(-1, 2)$에서 직선까지의 거리가 반지름 4와 같아야 합니다.\n$\\frac{|-m - 2 - 3m + 10|}{\\sqrt{m^2 + (-1)^2}} = 4 \\Rightarrow |-4m + 8| = 4\\sqrt{m^2 + 1}$\n양변을 4로 나누고 제곱하면 $(m-2)^2 = m^2 + 1 \\Rightarrow m^2 - 4m + 4 = m^2 + 1 \\Rightarrow 4m = 3 \\Rightarrow m = \\frac{3}{4}$ 입니다.\n기울기가 하나만 나오므로 다른 하나는 y축에 평행한 형태인 $x = 3$ 직선임을 알 수 있습니다.\n따라서 두 접선의 방정식은 $y = \\frac{3}{4}(x-3) + 10 \\Rightarrow 3x - 4y + 31 = 0$ 과 $x = 3$ 입니다."
    },
    {
      questionNum: 24,
      type: "short_answer",
      score: 6.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "[서답형 4] 두 직선 $y=-2x+3$과 $y=\\frac{1}{2}x+\\frac{1}{2}$에 동시에 접하고, 점 (4, 3)을 지나는 원 중 반지름의 길이가 더 작은 원의 방정식을 구하시오. [6.0점]",
      passage: null,
      options: [],
      correctAnswer: "(x-2)^2+(y-4)^2=5",
      explanation: "주어진 두 직선 $2x+y-3=0$과 $x-2y+1=0$은 서로 수직입니다.\n원 중심이 위치하는 각의 이등분선은 거리가 같음을 이용하여 구하면 $y=3x-2$와 $y=-\\frac{1}{3}x+\\frac{4}{3}$이 나옵니다.\n점 (4, 3)이 지나는 영역을 포함하는 이등분선 $y=3x-2$를 중심의 자취로 두고 중심을 $(a, 3a-2)$로 잡습니다.\n중심에서 직선까지의 거리(반지름)와 중심에서 (4, 3)까지의 거리가 같음을 방정식으로 세워 풀면 $a=2, a=\\frac{18}{5}$를 얻습니다.\n이 중 반지름이 더 작은 원의 중심은 (2, 4)가 되며, 반지름의 제곱은 5가 됩니다.\n따라서 원의 방정식은 $(x-2)^2+(y-4)^2=5$ 입니다."
    }
  ]
};
