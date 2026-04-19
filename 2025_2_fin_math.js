var exam_2025_2_fin_math = {
  examInfo: {
    examId: "2025_2_fin_math",
    schoolName: "동대전고등학교",
    year: 2025,
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
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "1. 집합 $A=\\{a,b,c\\}$ 의 모든 부분집합의 개수는? [3.5점]",
      passage: null,
      options: [
        "① 4",
        "② 5",
        "③ 6",
        "④ 7",
        "⑤ 8"
      ],
      correctAnswer: 4,
      explanation: "원소가 $n$개인 집합의 부분집합의 개수는 $2^n$개입니다. 집합 $A$의 원소는 $a, b, c$로 총 3개이므로, 부분집합의 개수는 $2^3 = 8$개입니다."
    },
    {
      questionNum: 2,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "2. 두 집합 $A=\\{1,2,3,6\\}$ 과 $B=\\{2,3,5,7\\}$ 에 대하여 $A\\cap B$는? [3.5점]",
      passage: null,
      options: [
        "① \\{2\\}",
        "② \\{3\\}",
        "③ \\{2,3\\}",
        "④ \\{3, 5, 7\\}",
        "⑤ \\{1, 2, 3, 5, 6, 7\\}"
      ],
      correctAnswer: 2,
      explanation: "교집합 $A \\cap B$는 집합 $A$와 집합 $B$에 공통으로 속하는 원소들로 이루어진 집합입니다. 두 집합의 공통 원소는 2와 3이므로, $A \\cap B = \\{2, 3\\}$입니다."
    },
    {
      questionNum: 3,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "3. 전체집합 $U$가 자연수 전체의 집합일 때, 조건 '$p:x^2>10$'에 대하여 $\\sim p$의 진리집합은? [3.6점]",
      passage: null,
      options: [
        "① \\{1, 2, 3\\}",
        "② \\{4, 5, 6\\}",
        "③ \\{1, 2, 3, 4\\}",
        "④ \\{4, 5, 6, 7\\}",
        "⑤ \\{4, 5, 6, \\dots\\}"
      ],
      correctAnswer: 0,
      explanation: "조건 $p$의 부정인 $\\sim p$는 '$x^2 \\le 10$'입니다. 전체집합 $U$가 자연수 전체의 집합이므로, 제곱해서 10 이하가 되는 자연수 $x$를 구하면 $x = 1, 2, 3$입니다. 따라서 진리집합은 $\\{1, 2, 3\\}$입니다."
    },
    {
      questionNum: 4,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "4. 명제 '소수는 홀수이다.'가 거짓임을 보이는 예로 적절한 것은? [3.5점]",
      passage: null,
      options: [
        "① 2",
        "② 3",
        "③ 4",
        "④ 5",
        "⑤ 6"
      ],
      correctAnswer: 0,
      explanation: "명제 '$p$이면 $q$이다'가 거짓임을 보이기 위한 반례는 가정 $p$는 만족하지만 결론 $q$는 만족하지 않는 예입니다. 즉, '소수이지만 홀수가 아닌 수(짝수인 소수)'를 찾아야 합니다. 2는 소수이면서 짝수이므로 적절한 반례입니다."
    },
    {
      questionNum: 5,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "5. 함수 $y=3x+4$의 역함수는? [3.6점]",
      passage: null,
      options: [
        "① $y=3x-4$",
        "② $y=3x+4$",
        "③ $y=\\frac{1}{3}x-\\frac{4}{3}$",
        "④ $y=\\frac{1}{3}x-\\frac{1}{3}$",
        "⑤ $y=\\frac{1}{3}x-4$"
      ],
      correctAnswer: 2,
      explanation: "역함수를 구하기 위해 먼저 $x$에 대하여 식을 정리합니다.\n$y = 3x + 4 \\implies 3x = y - 4 \\implies x = \\frac{1}{3}y - \\frac{4}{3}$.\n그 다음 $x$와 $y$의 자리를 바꿉니다. $\\implies y = \\frac{1}{3}x - \\frac{4}{3}$."
    },
    {
      questionNum: 6,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "6. 무리함수 $y=\\sqrt{2x+8}+2$의 정의역과 치역을 각각 구하면? [3.6점]",
      passage: null,
      options: [
        "① 정의역: $\\{x \\mid x \\ge -8\\}$, 치역: $\\{y \\mid y \\ge 2\\}$",
        "② 정의역: $\\{x \\mid x \\le -8\\}$, 치역: $\\{y \\mid y \\le 2\\}$",
        "③ 정의역: $\\{x \\mid x \\ge -4\\}$, 치역: $\\{y \\mid y \\le 2\\}$",
        "④ 정의역: $\\{x \\mid x \\ge -4\\}$, 치역: $\\{y \\mid y \\ge 2\\}$",
        "⑤ 정의역: $\\{x \\mid x \\le -4\\}$, 치역: $\\{y \\mid y \\ge 2\\}$"
      ],
      correctAnswer: 3,
      explanation: "무리함수의 근호 안의 식은 0 이상이어야 하므로 $2x + 8 \\ge 0 \\implies x \\ge -4$ 입니다. 따라서 정의역은 $\\{x \\mid x \\ge -4\\}$입니다. \n루트의 값은 항상 0 이상이므로 $\\sqrt{2x+8} \\ge 0$ 이고, 여기에 2를 더하면 $y \\ge 2$가 됩니다. 따라서 치역은 $\\{y \\mid y \\ge 2\\}$입니다."
    },
    {
      questionNum: 7,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "7. 전체집합 $U$의 두 부분집합 $A$와 $B$에 대하여 $n(U)=45$, $n(A)=23$, $n(B)=18$, $n(A\\cup B)=35$ 일 때, $n(A^{C}\\cup B^{C})$ 의 값은? [3.7점]",
      passage: null,
      options: [
        "① 31",
        "② 33",
        "③ 35",
        "④ 37",
        "⑤ 39"
      ],
      correctAnswer: 4,
      explanation: "드모르간의 법칙에 의해 $n(A^C \\cup B^C) = n((A \\cap B)^C) = n(U) - n(A \\cap B)$ 입니다.\n집합의 덧셈 정리에 의해 $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$ 이므로,\n$35 = 23 + 18 - n(A \\cap B) \\implies n(A \\cap B) = 41 - 35 = 6$ 입니다.\n따라서 $n(A^C \\cup B^C) = 45 - 6 = 39$ 입니다."
    },
    {
      questionNum: 8,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "8. 두 함수 $f(x)=2x+1$, $g(x)=x^2-1$에 대하여 $(f\\circ g)(3)$ 의 값은? [3.7점]",
      passage: null,
      options: [
        "① 9",
        "② 11",
        "③ 13",
        "④ 15",
        "⑤ 17"
      ],
      correctAnswer: 4,
      explanation: "합성함수의 정의에 의해 $(f \\circ g)(3) = f(g(3))$ 입니다.\n먼저 $g(3)$을 구하면 $g(3) = 3^2 - 1 = 8$ 입니다.\n그 다음 $f(8)$을 구하면 $f(8) = 2(8) + 1 = 17$ 입니다."
    },
    {
      questionNum: 9,
      type: "multiple_choice",
      score: 3.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "9. 명제 $p \\rightarrow \\sim q$의 역이 참일 때, 다음 중 항상 참인 명제는? [3.7점]",
      passage: null,
      options: [
        "① $p \\rightarrow q$",
        "② $\\sim p \\rightarrow \\sim q$",
        "③ $\\sim p \\rightarrow q$",
        "④ $q \\rightarrow p$",
        "⑤ $q \\rightarrow \\sim p$"
      ],
      correctAnswer: 2,
      explanation: "주어진 명제 '$p \\rightarrow \\sim q$'의 역은 '$\\sim q \\rightarrow p$'입니다. \n이 역명제가 참이라고 주어졌으므로, 그 대우명제 또한 항상 참이 됩니다.\n'$\\sim q \\rightarrow p$'의 대우는 결론과 가정을 각각 부정하여 자리를 바꾼 것이므로 '$\\sim p \\rightarrow q$'입니다."
    },
    {
      questionNum: 10,
      type: "multiple_choice",
      score: 3.8,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "10. 함수 $y=\\sqrt{x+9}+k$ 의 그래프가 지나는 사분면이 제1, 2, 3사분면이 되도록 하는 정수 $k$의 개수는? [3.8점]",
      passage: null,
      options: [
        "① 1",
        "② 2",
        "③ 3",
        "④ 4",
        "⑤ 5"
      ],
      correctAnswer: 1,
      explanation: "함수 $y = \\sqrt{x+9} + k$의 그래프는 시작점이 $(-9, k)$이며 오른쪽 위로 향하는 곡선입니다.\n이 그래프가 제1, 2, 3사분면을 모두 지나려면 다음 조건들을 만족해야 합니다.\n1) 시작점이 제3사분면에 있어야 하므로 $y$좌표 $k < 0$ 이어야 합니다.\n2) 곡선이 오른쪽 위로 올라가면서 $y$축을 양의 부분에서 끊고 지나가야 제2사분면과 제1사분면을 통과할 수 있습니다. 즉, $y$절편이 0보다 커야 합니다.\n$y$절편은 $x=0$일 때의 값이므로, $\\sqrt{0+9} + k = 3 + k > 0 \\implies k > -3$ 입니다.\n두 조건을 모두 만족하는 범위는 $-3 < k < 0$ 입니다.\n이를 만족하는 정수 $k$는 $-2, -1$ 로 총 2개입니다."
    },
    {
      questionNum: 11,
      type: "multiple_choice",
      score: 3.8,
      linkedPassageId: null,
      imageUrl: "./images/2025_2_fin_math_q11.png",
      questionText: "11. $x \\ge 0$ 에서 정의된 역함수가 존재하는 함수 $y=f(x)$ 와 직선 $y=x$의 그래프가 아래와 같을 때, $(f\\circ f)(10)+f^{-1}(12)$ 의 값은? [3.8점]",
      passage: null,
      options: [
        "① 15",
        "② 16",
        "③ 19",
        "④ 20",
        "⑤ 22"
      ],
      correctAnswer: 1,
      explanation: "그래프의 $y=x$ 항등함수 보조선을 통해 각 점의 좌표를 매칭할 수 있습니다. $x$축의 좌표 $3, 7, 10, 12, 13$은 $y=x$와 만나는 점선을 통해 $y$축 좌표와 일치합니다.\n곡선 $y=f(x)$가 지나는 점들을 확인해보면, $f(7)=3$, $f(10)=7$, $f(12)=10$, $f(13)=12$ 임을 알 수 있습니다.\n1) $(f \\circ f)(10) = f(f(10)) = f(7) = 3$.\n2) $f^{-1}(12)$는 $f(x)=12$를 만족하는 $x$의 값을 찾는 것입니다. $f(13)=12$ 이므로 $f^{-1}(12) = 13$ 입니다.\n따라서 $(f\\circ f)(10) + f^{-1}(12) = 3 + 13 = 16$ 입니다."
    },
    {
      questionNum: 12,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "12. 함수 $y=\\frac{3x+11}{x+2}$ 의 그래프는 함수 $y=\\frac{k}{x}$ 의 그래프를 $x$축의 방향으로 $p$만큼, $y$축의 방향으로 $q$만큼 평행이동시킨 것이다. 세 상수 $k, p, q$에 대하여 $k+p+q$ 의 값은? [3.9점]",
      passage: null,
      options: [
        "① 6",
        "② 8",
        "③ 10",
        "④ 12",
        "⑤ 14"
      ],
      correctAnswer: 0,
      explanation: "주어진 분수함수의 식을 표준형으로 변형합니다.\n$y = \\frac{3x+11}{x+2} = \\frac{3(x+2)+5}{x+2} = \\frac{5}{x+2} + 3$\n이 식은 $y = \\frac{5}{x}$ 의 그래프를 $x$축의 방향으로 $-2$만큼, $y$축의 방향으로 $3$만큼 평행이동한 것입니다.\n따라서 $k = 5, p = -2, q = 3$ 입니다.\n구하고자 하는 값 $k+p+q = 5 + (-2) + 3 = 6$ 입니다."
    },
    {
      questionNum: 13,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "13. 두 집합 $A=\\{x \\mid x\\text{는 9의 양의 약수}\\}$, $B=\\{x \\mid x\\text{는 20 이하의 3의 양의 배수}\\}$ 에 대하여 $A\\cap X=\\emptyset$ 과 $X-B=\\emptyset$ 을 만족시키는 집합 $X$의 개수는? [3.9점]",
      passage: null,
      options: [
        "① 2",
        "② 4",
        "③ 8",
        "④ 16",
        "⑤ 32"
      ],
      correctAnswer: 3,
      explanation: "먼저 집합 $A$와 $B$의 원소나열법으로 구합니다.\n$A = \\{1, 3, 9\\}$, $B = \\{3, 6, 9, 12, 15, 18\\}$\n1) $X - B = \\emptyset$ 조건: $X$의 모든 원소가 $B$에 속해야 하므로 $X \\subset B$ 입니다.\n2) $A \\cap X = \\emptyset$ 조건: $X$는 $A$의 원소를 단 하나도 포함해서는 안 됩니다. 즉, 집합 $B$의 원소 중 $A$의 원소인 3과 9는 $X$에 들어갈 수 없습니다.\n따라서 $X$는 $B$의 원소 중에서 3과 9를 제외한 나머지 원소들, 즉 $\\{6, 12, 15, 18\\}$ 의 부분집합이어야 합니다.\n이 원소들로 만들 수 있는 부분집합의 개수는 $2^4 = 16$개입니다."
    },
    {
      questionNum: 14,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "14. $x$에 대한 두 조건 \n$p:x^{2}-(2a+4)x+8a>0$,\n$q:x^{2}-12x+27>0$\n에 대하여 $q$가 $p$이기 위한 충분조건이 되도록 하는 실수 $a$의 최댓값과 최솟값의 차는? [3.9점]",
      passage: null,
      options: [
        "① $\\frac{1}{2}$",
        "② $\\frac{3}{2}$",
        "③ 2",
        "④ $\\frac{5}{2}$",
        "⑤ 3"
      ],
      correctAnswer: 4,
      explanation: "조건 $q$의 진리집합 $Q$를 구합니다.\n$x^2 - 12x + 27 > 0 \\implies (x-3)(x-9) > 0 \\implies x < 3 \\text{ 또는 } x > 9$.\n조건 $p$의 진리집합 $P$를 구합니다.\n$x^2 - (2a+4)x + 8a > 0 \\implies (x-2a)(x-4) > 0$.\n$q$가 $p$이기 위한 충분조건이려면 $Q \\subset P$ 이어야 합니다.\n$P$의 해의 범위는 $2a$와 $4$의 대소 관계에 따라 나뉩니다.\n[Case 1] $2a > 4$, 즉 $a > 2$인 경우: $x < 4 \\text{ 또는 } x > 2a$\n$Q \\subset P$를 만족하려면 $(-\\infty, 3) \\subset (-\\infty, 4)$ (항상 성립) 및 $(9, \\infty) \\subset (2a, \\infty)$ 가 성립해야 합니다. \n이를 위해 $2a \\le 9 \\implies a \\le 4.5$ 이며, 가정에 의해 $2 < a \\le 4.5$ 입니다.\n[Case 2] $2a < 4$, 즉 $a < 2$인 경우: $x < 2a \\text{ 또는 } x > 4$\n$Q \\subset P$를 만족하려면 $(-\\infty, 3) \\subset (-\\infty, 2a)$ 및 $(9, \\infty) \\subset (4, \\infty)$ (항상 성립) 가 성립해야 합니다.\n이를 위해 $3 \\le 2a \\implies a \\ge 1.5$ 이며, 가정에 의해 $1.5 \\le a < 2$ 입니다.\n[Case 3] $2a = 4$, 즉 $a = 2$인 경우: $(x-4)^2 > 0 \\implies x \\neq 4$\n$Q$의 원소 중 4는 없으므로 $Q \\subset P$가 성립합니다.\n모든 경우를 합치면 $1.5 \\le a \\le 4.5$ 가 됩니다.\n최댓값은 4.5, 최솟값은 1.5 이며 그 차이는 $4.5 - 1.5 = 3$ 입니다."
    },
    {
      questionNum: 15,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "15. 춘향이는 함수 $y=-\\sqrt{2x+6}+4$ 의 역함수에 관한 수행평가에 응시하여 다음과 같은 답안지를 작성하여 제출하였다.\n\n| 번호 | 내용 | 학생 답안 | 배점 |\n| --- | --- | --- | --- |\n| 1번 | 역함수의 식 | $y=\\frac{1}{2}x^{2}+4x+5$ | 4점 |\n| 2번 | 역함수의 정의역 | $\\{x \\mid x \\ge 4\\}$ | 2점 |\n| 3번 | 역함수의 치역 | $\\{y \\mid y \\ge -3\\}$ | 2점 |\n\n총 8점 중 (    )점\n\n정답인 문항만 배점에 따라 점수를 부여할 때, 춘향이가 받을 점수는? [4.0점]",
      passage: null,
      options: [
        "① 0",
        "② 2",
        "③ 4",
        "④ 6",
        "⑤ 8"
      ],
      correctAnswer: 1,
      explanation: "원래 함수 $f(x) = -\\sqrt{2x+6} + 4$ 를 분석해 봅시다.\n1. 정의역: 근호 안의 값이 0 이상이어야 하므로 $2x+6 \\ge 0 \\implies x \\ge -3$. \n2. 치역: 루트 값이 항상 0 이상이므로 $-\\sqrt{2x+6} \\le 0$, 양변에 4를 더하면 $y \\le 4$.\n따라서 역함수 $f^{-1}(x)$의 정의역은 $x \\le 4$ 이고 치역은 $y \\ge -3$ 입니다.\n이제 역함수의 식을 구합니다.\n$y = -\\sqrt{2x+6} + 4 \\implies y-4 = -\\sqrt{2x+6}$.\n양변을 제곱하면 $(y-4)^2 = 2x+6 \\implies y^2 - 8y + 16 = 2x + 6 \\implies 2x = y^2 - 8y + 10 \\implies x = \\frac{1}{2}y^2 - 4y + 5$.\n$x$와 $y$의 위치를 바꾸면 역함수의 식은 $y = \\frac{1}{2}x^2 - 4x + 5$ 입니다.\n춘향이의 답안을 채점해 보겠습니다.\n- 1번: 식에서 $4x$라고 적었으므로 오답입니다. (올바른 답: $-4x$, 0점)\n- 2번: 정의역을 $x \\ge 4$로 적었으므로 오답입니다. (올바른 답: $x \\le 4$, 0점)\n- 3번: 치역을 $y \\ge -3$으로 적었으므로 정답입니다. (2점 획득)\n따라서 춘향이가 받을 점수는 2점입니다."
    },
    {
      questionNum: 16,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "16. 정의역이 집합 $A$인 두 함수 $f(x)=x^3-2x^2+5$와 $g(x)=2x^2-x-1$ 에 대하여 $f=g$ 가 성립한다. 이러한 조건을 만족시키는 집합 $A$중 원소의 개수가 가장 많은 것을 집합 $X$라 할 때, $X$의 모든 원소의 합은? [4.0점]",
      passage: null,
      options: [
        "① -2",
        "② 0",
        "③ 2",
        "④ 4",
        "⑤ 6"
      ],
      correctAnswer: 3,
      explanation: "두 함수가 같다는 것($f=g$)은 정의역에 속하는 모든 원소 $x$에 대해 $f(x) = g(x)$가 성립함을 의미합니다.\n방정식을 세우면 $x^3 - 2x^2 + 5 = 2x^2 - x - 1$ 이며, 이를 이항하여 정리하면\n$x^3 - 4x^2 + x + 6 = 0$ 이 됩니다.\n조립제법을 통해 이 3차 방정식의 해를 구합니다. $x = -1$을 대입하면 $-1 - 4 - 1 + 6 = 0$ 이 성립합니다.\n따라서 식은 $(x+1)(x^2 - 5x + 6) = 0$ 이 되고, 이를 끝까지 인수분해하면 $(x+1)(x-2)(x-3) = 0$ 입니다.\n해가 되는 $x$의 값은 $-1, 2, 3$ 입니다.\n원소의 개수가 가장 많은 집합 $X$는 이 해들을 모두 원소로 가지는 $\\{-1, 2, 3\\}$ 입니다.\n모든 원소의 합은 $-1 + 2 + 3 = 4$ 입니다."
    },
    {
      questionNum: 17,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "17. 함수 $f(x)=\\sqrt{10x-20}+1$ 의 그래프와 그 역함수 $y=f^{-1}(x)$ 의 그래프의 서로 다른 두 교점을 각각 P, Q라 할 때, $\\overline{PQ}^2$ 의 값은? [4.0점]",
      passage: null,
      options: [
        "① 115",
        "② 120",
        "③ 125",
        "④ 130",
        "⑤ 135"
      ],
      correctAnswer: 1,
      explanation: "증가하는 무리함수와 그 역함수의 교점은 함수와 항등함수 $y=x$의 교점과 일치합니다.\n$\\sqrt{10x-20} + 1 = x \\implies \\sqrt{10x-20} = x - 1$.\n양변을 제곱하면 $10x - 20 = x^2 - 2x + 1$ 이고, 이항하여 정리하면 $x^2 - 12x + 21 = 0$ 입니다.\n이 이차방정식의 두 실근을 $\\alpha, \\beta$라고 하면, 두 교점의 좌표는 P$(\\alpha, \\alpha)$, Q$(\\beta, \\beta)$가 됩니다.\n근과 계수의 관계에 의해 $\\alpha + \\beta = 12$, $\\alpha\\beta = 21$ 입니다.\n두 점 사이의 거리의 제곱 $\\overline{PQ}^2 = (\\alpha - \\beta)^2 + (\\alpha - \\beta)^2 = 2(\\alpha - \\beta)^2$ 입니다.\n곱셈 공식을 이용해 변형하면 $2((\\alpha + \\beta)^2 - 4\\alpha\\beta) = 2(12^2 - 4 \\times 21) = 2(144 - 84) = 2(60) = 120$ 입니다."
    },
    {
      questionNum: 18,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "18. 다음은 두 실수 $a, b$에 대하여 부등식 $|a|+|b| \\ge |a-b|$ 가 성립함을 증명하는 과정이다.\n\n$|a|+|b| \\ge 0$, $|a-b| \\ge 0$ 이므로\n$|a|+|b| \\ge |a-b|$ 가 성립하려면\n$(|a|+|b|)^2 \\ge (|a-b|)^2$ 이 성립함을 증명하면 된다.\n$(|a|+|b|)^2 - (|a-b|)^2 = 2( \\text{ (가) } ) \\ge 0$\n따라서 $(|a|+|b|)^2 \\ge (|a-b|)^2$ 이므로\n$|a|+|b| \\ge |a-b|$\n여기서 등호는 ( (나) )일 때 성립한다.\n\n위의 과정에서 (가), (나)에 알맞은 것은? [4.1점]",
      passage: null,
      options: [
        "① (가) $ab-|ab|$, (나) $ab \\le 0$",
        "② (가) $ab-|ab|$, (나) $ab \\ge 0$",
        "③ (가) $2ab$, (나) $ab=0$",
        "④ (가) $|ab|+ab$, (나) $ab \\le 0$",
        "⑤ (가) $|ab|+ab$, (나) $ab \\ge 0$"
      ],
      correctAnswer: 3,
      explanation: "좌변을 전개하여 뺍니다.\n$(|a|+|b|)^2 - (|a-b|)^2 = (a^2 + 2|ab| + b^2) - (a^2 - 2ab + b^2) = 2|ab| + 2ab = 2(|ab| + ab)$ 입니다.\n따라서 (가)에는 $|ab| + ab$ 가 들어갑니다.\n절댓값의 성질에 의해 $|ab| \\ge -ab$ 이므로 항상 $2(|ab| + ab) \\ge 0$ 이 성립합니다.\n이 부등식에서 등호가 성립하는 조건은 $|ab| + ab = 0 \\implies |ab| = -ab$ 일 때입니다.\n절댓값의 결과가 원래 값에 음의 부호를 붙인 것과 같으려면, 그 값이 0 이하이어야 하므로 $ab \\le 0$ 입니다. \n따라서 (나)에는 $ab \\le 0$ 이 들어갑니다."
    },
    {
      questionNum: 19,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      imageUrl: "./images/2025_2_fin_math_q19.png",
      questionText: "19. 함수 $y=\\frac{3x+1}{x-1}(x>1)$ 의 그래프 위의 점 P에서 $x$축, $y$축에 내린 수선의 발을 각각 Q, R 이라 할 때, 사각형 OQPR의 둘레의 길이는 점 P의 좌표가 $(a, b)$일 때 최솟값 $m$을 가진다. $a+b+m$ 의 값은? (단, O는 원점이다.) [4.3점]",
      passage: null,
      options: [
        "① 8",
        "② 12",
        "③ 16",
        "④ 20",
        "⑤ 24"
      ],
      correctAnswer: 4,
      explanation: "유리함수를 표준형으로 고치면 $y = \\frac{3x+1}{x-1} = \\frac{3(x-1)+4}{x-1} = \\frac{4}{x-1} + 3$ 입니다.\n점 P의 좌표는 $(a, b)$ 이고 이 점은 제1사분면에 있으므로 $a > 1, b > 3$ 입니다.\n사각형 OQPR은 변의 길이가 각각 $a$와 $b$인 직사각형이므로 둘레의 길이는 $2a + 2b$ 입니다.\n$b = \\frac{4}{a-1} + 3$ 이므로, 둘레 $L = 2a + 2(\\frac{4}{a-1} + 3) = 2(a + \\frac{4}{a-1} + 3)$ 입니다.\n산술·기하 평균의 관계를 이용하기 위해 식을 조작합니다.\n$a + \\frac{4}{a-1} + 3 = (a - 1) + \\frac{4}{a-1} + 4$.\n$a > 1$ 이므로 $a-1 > 0$ 이고, 산술·기하 평균에 의해 $(a-1) + \\frac{4}{a-1} \\ge 2\\sqrt{(a-1)\\times\\frac{4}{a-1}} = 2 \\times 2 = 4$ 입니다.\n따라서 괄호 안의 식의 최솟값은 $4 + 4 = 8$ 이 되고, 둘레의 최솟값 $m = 2 \\times 8 = 16$ 입니다.\n최솟값을 가질 조건은 등호 성립 조건인 $a-1 = \\frac{4}{a-1} \\implies (a-1)^2 = 4$ 일 때입니다.\n$a-1 = 2$ (왜냐하면 $a>1$) 이므로 $a = 3$ 입니다.\n이때 $b = \\frac{4}{3-1} + 3 = 5$ 입니다.\n최종적으로 $a+b+m = 3 + 5 + 16 = 24$ 입니다."
    },
    {
      questionNum: 20,
      type: "multiple_choice",
      score: 4.4,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "20. 두 집합 $A$와 $B$가 $A=\\{1,2,3,\\dots,12\\}$, $B=\\{7,8,9,\\dots,17\\}$ 이다. 다음 조건을 만족시키는 집합 $X$의 개수는? [4.4점]\n(가) 집합 $X$는 집합 $B$의 진부분집합이다.\n(나) $n(X\\cup A)=15$",
      passage: null,
      options: [
        "① 256",
        "② 480",
        "③ 512",
        "④ 640",
        "⑤ 720"
      ],
      correctAnswer: 3,
      explanation: "$A$의 원소 개수는 12개이고, $B$의 원소 개수는 11개이며, $A \\cap B = \\{7, 8, 9, 10, 11, 12\\}$ (6개) 입니다.\n조건 (나)에서 $n(X \\cup A) = 15$ 이어야 합니다.\n합집합의 원소의 개수는 $n(X \\cup A) = n(X - A) + n(A) = n(X - A) + 12$ 입니다.\n따라서 $n(X - A) + 12 = 15 \\implies n(X - A) = 3$ 입니다.\n즉, 집합 $X$는 $A$에 속하지 않는 원소들을 정확히 3개 포함해야 합니다.\n집합 $X \\subset B$ 이므로 $X - A$의 원소들은 반드시 $B - A$ 집합에서 선택되어야 합니다.\n$B - A = \\{13, 14, 15, 16, 17\\}$ 이며 총 5개입니다.\n이 중에서 3개를 선택하는 경우의 수는 ${}_5\\mathrm{C}_3 = 10$ 가지입니다.\n$A \\cap B$에 속하는 원소 6개는 $X$에 포함되어도 되고 안 되어도 합집합 $X \\cup A$의 개수에 영향을 주지 않으므로 각각 2가지의 선택권이 있습니다. 경우의 수는 $2^6 = 64$ 가지입니다.\n전체 부분집합의 개수는 $10 \\times 64 = 640$ 개입니다.\n조건 (가)에서 $X$가 진부분집합이어야 한다고 했으나, $X$의 원소는 최대 $3+6=9$개이므로 집합 $B$(원소 11개)와 절대 같아질 수 없습니다. \n따라서 640개 모두 조건을 만족합니다."
    },
    {
      questionNum: 21,
      type: "multiple_choice",
      score: 4.7,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "21. 함수 \n$f(x)=\\begin{cases}\\sqrt{-x+3}-10&(x\\le 3)\\\\ \\frac{-7x+22}{x-3}&(x>3)\\end{cases}$\n에 대하여 $g(x)=|f(x)|$ 라 하자. 서로 다른 네 실수 $a, b, c, d$에 대하여 함수 $g(x)$의 정의역이 집합 $X=\\{a,b,c,d\\}$ 일 때, 함수 $g(x)$는 상수함수이고, 치역은 $\\{k\\}$이다. 모든 정수 $k$의 값의 합은? [4.7점]",
      passage: null,
      options: [
        "① 19",
        "② 20",
        "③ 21",
        "④ 22",
        "⑤ 23"
      ],
      correctAnswer: 2,
      explanation: "$g(x) = k$가 상수함수라는 것은 $g(a)=g(b)=g(c)=g(d)=k$ 이며, $a,b,c,d$가 서로 다르므로 $|f(x)|=k$ 를 만족하는 실근이 적어도 4개 이상이어야 하고, 이 문제에서는 정확히 4개의 실근을 가지는 $k$의 조건을 찾는 문제로 귀결됩니다. ($k>0$)\n$f(x)$의 그래프의 범위를 분석해 봅시다.\n1) $x \\le 3$ 일 때: $f(x) = \\sqrt{-(x-3)} - 10$ 이고 점 $(3, -10)$에서 시작하여 왼쪽 위로 올라가는 무리함수입니다. 치역은 $[-10, \\infty)$ 입니다.\n방정식 $|\\sqrt{-x+3} - 10| = k$ 의 실근 개수를 확인해 보면,\n- $0 < k < 10$ 이면 $\\sqrt{-x+3} - 10 = k$ (1개) 또는 $\\sqrt{-x+3} - 10 = -k$ (1개) 로 총 2개의 해를 가집니다.\n- $k = 10$ 이면 $\\sqrt{-x+3} - 10 = \\pm 10$ 이므로 $10$이 될 때만 해가 1개, $y$축 접점 1개로 총 2개입니다.\n- $k > 10$ 이면 $-k$는 음수가 되어 해가 없고 $k$일 때만 1개의 해를 가집니다.\n2) $x > 3$ 일 때: $f(x) = \\frac{-7(x-3)+1}{x-3} = \\frac{1}{x-3} - 7$ 로 점근선이 $x=3, y=-7$인 유리함수입니다. 치역은 $(-7, \\infty)$ 입니다.\n방정식 $|\\frac{1}{x-3} - 7| = k$ 의 실근 개수를 확인해 보면,\n- $0 < k < 7$ 이면 $\\frac{1}{x-3} - 7 = k$ (1개) 또는 $\\frac{1}{x-3} - 7 = -k$ (1개) 로 총 2개의 해를 가집니다.\n- $k \ge 7$ 이면 $\\frac{1}{x-3} - 7 = -k$ 에서는 해가 없고 ($x-3$은 항상 양수이므로), $k$일 때만 1개의 해를 가집니다.\n\n전체 실수에서 총 4개의 실근을 가져야 하므로, 무리함수 부분에서 2개, 유리함수 부분에서 2개의 근을 가지는 공통 범위를 찾아야 합니다.\n두 부분 모두에서 2개씩 해를 갖는 $k$의 조건은 교집합인 $0 < k < 7$ 입니다. \n이를 만족하는 정수 $k$는 $1, 2, 3, 4, 5, 6$ 입니다.\n모든 정수 $k$의 합은 $1+2+3+4+5+6 = 21$ 입니다."
    },
    {
      questionNum: 22,
      type: "multiple_choice",
      score: 4.8,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "22. 서로 다른 두 실수 $a, b$에 대하여 함수 $f(x)=|\\frac{1}{x-k}-3|$가 다음 조건을 만족시킬 때, 모든 실수 $k$의 값의 합은? [4.8점]\n(가) 정의역이 집합 $X=\\{a,b\\}$ 일 때, $f(x)$는 항등함수이다.\n(나) $a$와 $b$가 아닌 임의의 실수 $c$에 대하여 정의역이 집합 $X=\\{a,b,c\\}$ 일 때, $f(x)$는 항등함수가 아니다.",
      passage: null,
      options: [
        "① 5",
        "② $\\frac{17}{3}$",
        "③ $\\frac{19}{3}$",
        "④ 7",
        "⑤ $\\frac{23}{3}$"
      ],
      correctAnswer: 1,
      explanation: "조건 (가), (나)는 방정식 $f(x) = x$ 가 오직 서로 다른 두 실근 $a, b$만을 가진다는 뜻입니다.\n$f(x) = x$ 이므로 $x \\ge 0$ 이어야 합니다. \n$|\\frac{1}{x-k}-3| = x$ 이면 $\\frac{1}{x-k}-3 = x$ (식1) 또는 $\\frac{1}{x-k}-3 = -x$ (식2) 입니다.\n식1 정리: $1 = (x+3)(x-k) \\implies x^2 + (3-k)x - 3k - 1 = 0$\n식2 정리: $1 = (3-x)(x-k) \\implies x^2 - (3+k)x + 3k + 1 = 0$\n두 방정식에서 $x \\ge 0$ 인 근이 합쳐서 정확히 2개가 나와야 합니다.\n식1의 판별식 $D_1 = (k+3)^2 + 4 > 0$ 이므로 항상 서로 다른 두 실근을 갖습니다. 두 근의 곱은 $-(3k+1)$ 입니다.\n식2의 판별식 $D_2 = (k-1)(k-5)$ 입니다.\n두 방정식의 양의 실근(0 포함)의 개수를 $k$의 범위에 따라 나눕니다.\n1) $k < -1/3$: 식1의 두 근의 곱 $> 0$, 두 근의 합 $k-3 < 0$ 이므로 양의 실근 0개. 식2의 두 근의 곱 $< 0$ 이므로 양의 실근 1개. 총 1개 (불만족)\n2) $k = -1/3$: 식1은 $x^2 + \\frac{10}{3}x = 0$ 이므로 $x=0$. 식2는 $x^2 - \\frac{8}{3}x = 0$ 이므로 $x=0, \\frac{8}{3}$. 양의 실근은 $0, \\frac{8}{3}$ 로 정확히 2개. ($k=-1/3$ 만족)\n3) $-1/3 < k < 1$: 식1의 두 근의 곱 $< 0$ 이므로 양의 실근 1개. 식2의 $D_2 < 0$ 이므로 실근 0개. 총 1개 (불만족)\n4) $k = 1$: 식1은 양의 실근 1개 (곱 $< 0$). 식2는 $x^2 - 4x + 4 = 0$ 이므로 중근 $x=2$. 총 2개. ($k=1$ 만족)\n5) $1 < k < 5$: 식1 양의 실근 1개, 식2 실근 0개. 총 1개 (불만족)\n6) $k = 5$: 식1 양의 실근 1개 (곱 $< 0$). 식2는 $x^2 - 8x + 16 = 0$ 이므로 중근 $x=4$. 총 2개. ($k=5$ 만족)\n7) $k > 5$: 식1 양의 실근 1개. 식2는 $D_2 > 0$, 곱 $> 0$, 합 $> 0$ 이므로 양의 실근 2개. 총 3개 (불만족)\n따라서 조건을 만족하는 $k$는 $-\\frac{1}{3}, 1, 5$ 입니다.\n모든 $k$의 합은 $-\\frac{1}{3} + 1 + 5 = \\frac{17}{3}$ 입니다."
    },
    {
      questionNum: 23,
      type: "short_answer",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "단답형 1 \n실수 $x$에 대하여 조건 $p$가 \n$p:ax^2+2x+4a\\ge 0$\n일 때, 명제 '어떤 실수 $x$에 대하여 $p$이다.'가 거짓이 되도록 하는 실수 $a$의 값의 범위를 구하시오. [4.0점]",
      passage: null,
      options: [],
      correctAnswer: "a<-\\frac{1}{2}",
      explanation: "'어떤 실수 $x$에 대하여 $p$이다'가 거짓이려면, 그 부정인 '모든 실수 $x$에 대하여 $\\sim p$이다'가 참이 되어야 합니다.\n조건 $p$의 부정은 $\\sim p : ax^2 + 2x + 4a < 0$ 입니다.\n이 이차부등식이 모든 실수 $x$에 대하여 성립하려면 그래프가 위로 볼록하며 $x$축과 만나지 않아야 합니다.\n따라서 이차항의 계수 $a < 0$ 이고, 판별식 $D/4 < 0$ 이어야 합니다.\n$D/4 = 1^2 - a(4a) = 1 - 4a^2 < 0$\n$4a^2 > 1 \\implies a^2 > \\frac{1}{4}$.\n$a < -\\frac{1}{2}$ 또는 $a > \\frac{1}{2}$ 인데, 조건에서 $a < 0$ 이므로\n결론적으로 $a < -\\frac{1}{2}$ 입니다."
    },
    {
      questionNum: 24,
      type: "short_answer",
      score: 4.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "단답형 2 \n어느 자전거 동아리 회원 35명을 대상으로 두 코스 A와 B를 다녀온 경험이 있는 회원 수를 조사하였더니 A코스는 22명, B코스는 18명이었다. 이 동아리 회원 중에서 코스 A와 B 중 어느 한 코스만 다녀온 경험이 있는 회원 수의 최댓값을 $M$, 최솟값을 $m$이라 할 때, $M+m$의 값을 구하시오. [4.5점]",
      passage: null,
      options: [],
      correctAnswer: "34",
      explanation: "전체 회원 수 $n(U) = 35$, $n(A) = 22$, $n(B) = 18$ 입니다.\n어느 한 코스만 다녀온 회원 수는 대칭차집합의 원소의 개수와 같습니다. \n즉, $n(A \\cup B) - n(A \\cap B)$ 를 구해야 합니다.\n$n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 40 - n(A \\cap B)$ 이므로,\n대칭차집합의 개수 $L = 40 - 2n(A \\cap B)$ 가 됩니다.\n1) 교집합이 최소일 때 대칭차집합은 최대가 됩니다.\n$n(A \\cup B) \\le n(U) = 35$ 이므로 $40 - n(A \\cap B) \\le 35 \\implies n(A \\cap B) \\ge 5$ 입니다.\n따라서 대칭차집합의 최댓값 $M = 40 - 2(5) = 30$ 입니다.\n2) 교집합이 최대일 때 대칭차집합은 최소가 됩니다.\n$n(A \\cap B) \\le \\min(n(A), n(B)) = 18$ 이므로 교집합의 최댓값은 18입니다.\n따라서 대칭차집합의 최솟값 $m = 40 - 2(18) = 4$ 입니다.\n구하고자 하는 값 $M + m = 30 + 4 = 34$ 입니다."
    },
    {
      questionNum: 25,
      type: "short_answer",
      score: 5.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "단답형 3 \n함수 \n$f(x)=\\begin{cases}-\\frac{1}{2}(x-a)^2+b&(x<a)\\\\ \\sqrt{x-a}+b&(x\\ge a)\\end{cases}$ \n에 대하여 방정식 $f(x)-x=0$이 중근이 아닌 서로 다른 세 실근 $\\alpha, \\beta, \\gamma$만을 가진다. $\\alpha+\\beta+\\gamma=11$ 일 때, $f^{-1}(9)+f^{-1}(-14)$ 의 값을 구하시오. (단, $a$와 $b$는 상수이다.) [5.5점]",
      passage: null,
      options: [],
      correctAnswer: "27",
      explanation: "방정식 $f(x)=x$ 는 함수 $y=f(x)$ 의 그래프와 직선 $y=x$의 교점의 $x$좌표를 의미합니다.\n주어진 함수는 $x=a$를 경계로 왼쪽은 이차함수의 절반, 오른쪽은 무리함수입니다.\n서로 역함수 관계의 골격을 공유하며, 연결점인 점 꼭짓점은 $(a,b)$ 입니다.\n그래프 개형과 조건(서로 다른 세 실근을 가짐)을 고려할 때, 꼭짓점 $(a,b)$가 $y=x$ 위에 존재해야 세 점에서 온전히 만날 수 있는 구조가 형성됩니다. 즉 $b=a$ 입니다.\n$b=a$ 로 두고 $f(x)=x$ 의 근을 찾습니다.\n1) $x \\ge a$ 인 구간: $\\sqrt{x-a} + a = x \\implies \\sqrt{x-a} = x-a$. \n양변을 제곱하면 $x-a = (x-a)^2 \\implies x-a = 0$ 또는 $1$. 따라서 $x=a$ 와 $x=a+1$ 이 실근입니다.\n2) $x < a$ 인 구간: $-\\frac{1}{2}(x-a)^2 + a = x \\implies (x-a)^2 = -2(x-a)$.\n$x-a < 0$ 이므로 양변을 $x-a$로 나누면 $x-a = -2 \\implies x = a-2$ 가 실근입니다.\n세 실근의 합은 $(a-2) + a + (a+1) = 3a - 1$ 이고 이 값이 11입니다.\n$3a - 1 = 11 \\implies a = 4$. 따라서 $b = 4$ 입니다.\n이제 $f(x)$가 완전히 특정되었습니다.\n$f(x) = \\begin{cases}-\\frac{1}{2}(x-4)^2+4&(x<4)\\\\ \\sqrt{x-4}+4&(x\\ge 4)\\end{cases}$\n$f^{-1}(9)$ 를 구합니다: $f(x)=9$인 $x$를 찾아야 합니다. \n$9 \\ge 4$ 이므로 무리함수 부분에 해당합니다. $\\sqrt{x-4} + 4 = 9 \\implies x-4 = 25 \\implies x = 29$.\n$f^{-1}(-14)$ 를 구합니다: $f(x)=-14$인 $x$를 찾아야 합니다. \n$-14 < 4$ 이므로 이차함수 부분에 해당합니다. $-\\frac{1}{2}(x-4)^2 + 4 = -14 \\implies (x-4)^2 = 36$. \n$x < 4$ 이므로 $x-4 = -6 \\implies x = -2$.\n최종적으로 $f^{-1}(9) + f^{-1}(-14) = 29 + (-2) = 27$ 입니다."
    }
  ]
};
