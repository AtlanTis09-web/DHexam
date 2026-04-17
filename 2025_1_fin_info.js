var exam_2025_1_fin_info = {
  examInfo: {
    examId: "2025_1_fin_info",
    schoolName: "동대전고등학교",
    year: 2025,
    semester: 1,
    grade: 1,
    examType: "기말고사",
    subject: "정보"
  },
  sharedPassages: {},
  questions: [
    {
      questionNum: 1,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "1. 다음 <보기>의 사례를 공유해야 할 정보와 보호해야 할 정보로 구분한 것으로 가장 적절한 것은? [3.5점]",
      passage: `<보기>\nㄱ. 학교 기말고사 일정\nㄴ. 건강검진 결과 및 병력 정보\nㄷ. 지하철 및 버스 운영 시간표\nㄹ. 병원 위치 및 응급실 운영 현황`,
      options: [
        "① [공유해야 할 정보] ㄱ, ㄴ / [보호해야 할 정보] ㄷ, ㄹ",
        "② [공유해야 할 정보] ㄱ, ㄷ, ㄹ / [보호해야 할 정보] ㄴ",
        "③ [공유해야 할 정보] ㄴ, ㄷ / [보호해야 할 정보] ㄱ, ㄹ",
        "④ [공유해야 할 정보] ㄴ, ㄹ / [보호해야 할 정보] ㄱ, ㄷ",
        "⑤ [공유해야 할 정보] ㄱ, ㄴ, ㄷ / [보호해야 할 정보] ㄹ"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다. 학교 기말고사 일정(ㄱ), 지하철 및 버스 운영 시간표(ㄷ), 병원 위치 및 응급실 운영 현황(ㄹ)은 공공 및 다수를 위해 '공유해야 할 정보'이며, 개인의 건강검진 결과 및 병력 정보(ㄴ)는 민감한 개인정보로 '보호해야 할 정보'입니다."
    },
    {
      questionNum: 2,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "2. 디지털 기술이 활용된 사회 영역과 변화에 대한 설명으로 적절하지 않은 것은? [3.5점]",
      passage: null,
      options: [
        "① 금융 영역: 신소재 개발로 전자 기기가 발전하고 탄소 배출을 줄임",
        "② 농업 영역: 사물인터넷과 AI 기술을 활용한 첨단 농장을 운영",
        "③ 생활 영역: 외국어를 바로 번역할 수 있고 인공지능 개인 비서를 활용",
        "④ 홈 서비스 영역: 가전제품을 인공지능 기술과 접목하여 애플리케이션으로 제어",
        "⑤ 의료 및 보건 영역: 스마트 기기를 사용하여 의료 데이터를 스스로 관리"
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다. 신소재 개발과 탄소 배출 절감은 환경 및 신소재 공학 영역과 관련이 깊으며, 금융 영역의 디지털 기술 활용(핀테크, 모바일 뱅킹 등)에 대한 설명으로 적절하지 않습니다."
    },
    {
      questionNum: 3,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "3. 프로그램 실행 결과 print(i)가 실행되는 횟수는? [4.2점]",
      passage: `\`\`\`python\n1 for i in range(0, 20, 5):\n2     print(i)\n\`\`\``,
      options: [
        "① 0번",
        "② 3번",
        "③ 4번",
        "④ 5번",
        "⑤ 20번"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다. `range(0, 20, 5)`는 0부터 시작하여 20 미만까지 5씩 증가하는 시퀀스(0, 5, 10, 15)를 생성합니다. 따라서 `print(i)`는 총 4번 실행됩니다."
    },
    {
      questionNum: 4,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "4. 빅데이터에 대한 설명으로 옳은 것을 <보기>에서 있는 대로 고른 것은? [3.6점]",
      passage: `<보기>\nㄱ. 디지털 환경에서 생성된 수십 테라바이트 이상의 대규모 데이터이다.\nㄴ. 고정된 형식과 구조에 맞게 저장된 데이터만을 처리할 수 있다.\nㄷ. 대규모 데이터를 데이터 과학 기술로 가치를 추출하여 활용하는 포괄적인 개념으로 사용된다.`,
      options: [
        "① ㄱ",
        "② ㄴ",
        "③ ㄱ, ㄷ",
        "④ ㄴ, ㄷ",
        "⑤ ㄱ, ㄴ, ㄷ"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번(ㄱ, ㄷ)입니다. 빅데이터는 텍스트, 이미지, 영상 등 고정된 형식이 없는 비정형 데이터도 포함하여 처리할 수 있으므로 ㄴ은 틀린 설명입니다."
    },
    {
      questionNum: 5,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "5. 파이썬의 특징으로 적절한 것을 <보기>에서 있는 대로 고른 것은? [3.6점]",
      passage: `<보기>\nㄱ. 변수의 자료형을 명시해야 한다.\nㄴ. 들여쓰기를 통해 블록을 구분한다.\nㄷ. 다양한 분야(웹, 데이터 분석 등)에서 활용된다.`,
      options: [
        "① ㄱ",
        "② ㄴ",
        "③ ㄱ, ㄴ",
        "④ ㄴ, ㄷ",
        "⑤ ㄱ, ㄴ, ㄷ"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번(ㄴ, ㄷ)입니다. 파이썬은 변수의 자료형을 명시하지 않아도 실행 시 자동으로 결정되는 동적 타이핑(Dynamic Typing) 언어이므로 ㄱ은 틀린 설명입니다."
    },
    {
      questionNum: 6,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "6. 다음 사례에 적용할 수 있는 알고리즘의 구조로 가장 적절한 것은? [3.5점]",
      passage: `[친구 만나기]\n↓\n[분식 먹기]\n↓\n[영화관 가기]\n↓\n[까페 가기]`,
      options: [
        "① 무한구조",
        "② 반복구조",
        "③ 병렬구조",
        "④ 선택구조",
        "⑤ 순차구조"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다. 위에서 아래로 정해진 순서에 따라 차례대로 단계를 수행하는 알고리즘 구조는 '순차 구조'입니다."
    },
    {
      questionNum: 7,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "7. 다음에서 설명하는 정보 보안 기술로 가장 적절한 것은? [3.5점]",
      passage: `• 데이터를 블록이라는 저장 환경에서 관리한다.\n• 보안성과 투명성이 높아 금융, 물류 등에 활용된다.\n• 데이터 가로채기, 수정, 삭제가 거의 불가능하여 보안성이 좋다.\n• 중앙 서버가 필요 없어 분산 저장이 가능하다.`,
      options: [
        "① 방화벽",
        "② 블록체인",
        "③ 사용자 인증",
        "④ 암호화 기술",
        "⑤ 바이러스 백신"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다. 중앙 서버 없이 네트워크 참여자들이 정보를 분산 저장하여 위변조가 사실상 불가능하도록 만든 분산 원장 기술을 '블록체인(Blockchain)'이라고 합니다."
    },
    {
      questionNum: 8,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "8. 빅데이터의 탐색적 데이터 분석 과정을 순서대로 배열한 것으로 가장 적절한 것은? [3.5점]",
      passage: `(가) 문제 정의하기\n(나) 데이터 분석하기\n(다) 데이터 수집하기\n(라) 공유 및 평가하기`,
      options: [
        "① (가)-(나)-(다)-(라)",
        "② (가)-(다)-(나)-(라)",
        "③ (나)-(가)-(다)-(라)",
        "④ (나)-(다)-(가)-(라)",
        "⑤ (다)-(나)-(가)-(라)"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다. 데이터 분석의 올바른 절차는 목적을 설정하는 '문제 정의' 후, '데이터 수집' -> '데이터 분석' -> 결과를 나누고 확인하는 '공유 및 평가'의 순서로 진행됩니다."
    },
    {
      questionNum: 9,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "9. 추상화 과정 중 (가)에 해당하는 내용으로 가장 적절한 것은? [4.1점]",
      passage: `문제 분해 ➔ 핵심 요소 추출 ➔ (가)\n▲ 추상화 과정`,
      options: [
        "① 다양한 해결 방법을 탐색하고 비교하는 것이다.",
        "② 문제 상황을 이해하고 세부적으로 나누는 것이다.",
        "③ 불필요한 정보를 제거하고 핵심 정보만 선택하는 것이다.",
        "④ 크고 복잡한 문제를 여러 개의 작은 문제로 분할하는 것이다.",
        "⑤ 문제의 핵심 요소를 구조화하여 관계나 흐름을 이해하기 쉽게 하는 것이다."
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다. 문제 해결 과정에서의 추상화는 크게 문제 분해 -> 핵심 요소 추출 -> 모델링(구조화 및 알고리즘 설계)으로 이어집니다. 핵심 요소를 뽑아낸 뒤 이를 바탕으로 관계나 흐름을 이해하기 쉽게 구조화(알고리즘화)하는 것이 마지막 단계입니다."
    },
    {
      questionNum: 10,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "10. 입력값이 9라고 할 때 프로그램의 실행 결과로 가장 적절한 것은? [3.9점]",
      passage: `\`\`\`python\n1 a=input()\n2 print(a*3)\n\`\`\``,
      options: [
        "① a",
        "② aaa",
        "③ 3a",
        "④ 27",
        "⑤ 999"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다. `input()` 함수로 입력받은 값은 문자열(String) 형태인 '9'가 됩니다. 파이썬에서 문자열에 3을 곱하면 해당 문자열이 3번 반복되므로 '999'가 출력됩니다."
    },
    {
      questionNum: 11,
      type: "multiple_choice",
      score: 3.8,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "11. 입력값을 받아 변수에 저장하고자 할 때 명령문으로 가장 적절한 것은? [3.8점]",
      passage: null,
      options: [
        "① input() name",
        "② print(\"이름을 입력하세요\")",
        "③ name int(\"이름을 입력하세요\")",
        "④ name print(\"이름을 입력하세요\")",
        "⑤ name = input(\"이름을 입력하세요: \")"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다. 사용자로부터 입력값을 받아 변수 `name`에 저장하기 위해서는 대입 연산자 `=`와 함께 `input()` 함수를 사용해야 합니다."
    },
    {
      questionNum: 12,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "12. 입력값을 받아 실수형으로 변환하고자 할 때 명령문으로 가장 적절한 것은?(단, 입력값은 5라고 가정한다.) [3.9점]",
      passage: null,
      options: [
        "① input(\"숫자를 입력하세요: \")",
        "② print(int(\"숫자를 입력하세요: \"))",
        "③ int(input(\"숫자를 입력하세요: \"))",
        "④ str(input(\"숫자를 입력하세요: \"))",
        "⑤ float(input(\"숫자를 입력하세요: \"))"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다. 실수형 데이터로 변환해 주는 함수는 `float()`입니다. 따라서 `input()`으로 받은 문자열 값을 `float()`로 감싸주어야 합니다."
    },
    {
      questionNum: 13,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "13. 프로그램 실행 결과에 대한 설명으로 옳은 것만을 <보기>에서 있는 대로 고른 것은? [4.3점]",
      passage: `\`\`\`python\n1 a=3\n2 b=15\n3 a==b\n4 b=a\n5 print(a,b)\n\`\`\`\n<보기>\nㄱ. 3 3 출력된다.\nㄴ. 3 15 출력된다.\nㄷ. 15 15 출력된다.\nㄹ. True 출력된다.`,
      options: [
        "① ㄱ",
        "② ㄴ",
        "③ ㄷ",
        "④ ㄱ, ㄹ",
        "⑤ ㄷ, ㄹ"
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번(ㄱ)입니다. 3번째 줄의 `a==b`는 조건 평가 수식일 뿐 출력이나 변수 변경에 영향을 주지 않습니다. 4번째 줄의 `b=a`를 통해 변수 b의 값은 a의 값인 3으로 변경됩니다. 따라서 마지막 줄에서 `a, b`를 출력하면 `3 3`이 출력됩니다."
    },
    {
      questionNum: 14,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "14. <출력 예시>와 같이 출력하고자 할 때 사용할 명령문으로 가장 적절한 것은? [4.0점]",
      passage: `<출력 예시>\n당신의 꿈은?`,
      options: [
        "① \"당신의 꿈은?\"",
        "② input(\"당신의 꿈은?\")",
        "③ print(\"당신의 꿈은?\")",
        "④ print(\"\\\"당신의 꿈은?\\\"\"))",
        "⑤ int(input(\"당신의 꿈은?\"))"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다. 텍스트를 단순히 화면에 출력하기 위해 사용되는 함수는 `print()`입니다."
    },
    {
      questionNum: 15,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "15. 프로그램 실행 시 출력되는 결과값으로 가장 적절한 것은? [4.3점]",
      passage: `\`\`\`python\n1 a=4\n2 b=\"3\"\n3 print(a+int(b))\n\`\`\``,
      options: [
        "① 7",
        "② 34",
        "③ 43",
        "④ a+b",
        "⑤ 오류가 발생한다."
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다. 변수 b에는 문자열 \"3\"이 저장되어 있지만 `int(b)`를 통해 정수 3으로 변환됩니다. 따라서 정수 연산 `4 + 3`이 수행되어 7이 출력됩니다."
    },
    {
      questionNum: 16,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "16. 입력받은 정수가 홀수일 때 출력하는 프로그램을 작성하고자 한다. (가)에 들어갈 조건식으로 가장 적절한 것은? [4.1점]",
      passage: `\`\`\`python\n1 a=int(input())\n2 if (가):\n3     print(\"홀수\")\n\`\`\``,
      options: [
        "① a=\"홀수\"",
        "② a/2=1",
        "③ a%2==0",
        "④ a%2==1",
        "⑤ a==input(\"홀수\")"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다. 어떤 수가 홀수인지 판별하려면 2로 나누었을 때 나머지가 1이 되는지를 확인하면 됩니다. 나머지 연산자 `%`를 사용한 `a%2==1`이 올바른 조건식입니다."
    },
    {
      questionNum: 17,
      type: "multiple_choice",
      score: 4.4,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "17. 프로그램 실행 시 입력값을 6으로 주었을 때 출력될 수 없는 값은? [4.4점]",
      passage: `\`\`\`python\n1 a=int(input())\n2 for i in range(1,9):\n3     print(a*i)\n\`\`\``,
      options: [
        "① 6",
        "② 29",
        "③ 18",
        "④ 36",
        "⑤ 48"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다. 이 프로그램은 입력받은 숫자(6)에 대해 1부터 8까지 곱한 구구단 6단을 출력합니다. 결과값은 6, 12, 18, 24, 30, 36, 42, 48이 되며 29는 출력될 수 없습니다."
    },
    {
      questionNum: 18,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "18. 입력받은 정수가 투표 가능 연령(18세 이상)이면 투표 가능하다는 문장을 출력하는 프로그램을 작성하고자 한다. (가)에 들어갈 조건식으로 가장 적절한 것은? [4.1점]",
      passage: `\`\`\`python\n1 age=int(input())\n2 if (가):\n3     print(\"투표 가능합니다\")\n\`\`\``,
      options: [
        "① age>18",
        "② age%18",
        "③ age>=18",
        "④ age==18",
        "⑤ age!=18"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다. 18세 '이상'을 표현하는 비교 연산자는 크거나 같다를 나타내는 `>=`입니다. 따라서 `age>=18`이 적절합니다."
    },
    {
      questionNum: 19,
      type: "multiple_choice",
      score: 4.4,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "19. 프로그램 실행 시 출력되는 결과값으로 가장 적절한 것은? [4.4점]",
      passage: `\`\`\`python\n1 a=7\n2 if a//2==1:\n3     print(\"오류\")\n4 else:\n5     print(\"정답\")\n\`\`\``,
      options: [
        "① 7",
        "② 오류",
        "③ 정답",
        "④ 아무것도 출력되지 않는다.",
        "⑤ 오류 정답 이 차례대로 출력된다."
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다. `//` 연산자는 몫을 구하는 연산자입니다. 7을 2로 나눈 몫은 3이므로, `a//2==1` 조건(3==1)은 거짓(False)이 됩니다. 따라서 else 문에 해당하는 \"정답\"이 출력됩니다."
    },
    {
      questionNum: 20,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "20. 프로그램 실행 시 출력되는 결과값으로 가장 적절한 것은? [4.0점]",
      passage: `\`\`\`python\n1 x=10\n2 if x>5:\n3     print(\"큰 수입니다.\")\n\`\`\``,
      options: [
        "① 큰 수입니다. 가 출력된다.",
        "② 작은 수입니다. 가 출력된다.",
        "③ x의 값이 문자열이므로 오류가 발생한다.",
        "④ 비교 연산자가 잘못되어 에러가 발생한다.",
        "⑤ x가 5보다 작으므로 아무것도 출력되지 않는다."
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다. 변수 x에 10이 저장되어 있고 조건 `x>5` (10>5)가 참(True)이므로 if 블록 안의 \"큰 수입니다.\"가 정상적으로 출력됩니다."
    },
    {
      questionNum: 21,
      type: "multiple_choice",
      score: 4.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "21. 프로그램을 실행했을 때 출력되는 문장을 <보기>에서 있는 대로 고른 것은? [4.5점]",
      passage: `\`\`\`python\n1 food_1 = \"쫄면\"\n2 food_2 = \"떡볶이\"\n3 if food_1 != \"쫄면\":\n4     print(\"쫄면은 떡볶이가 아님\")\n5 if food_2 == \"떡볶이\":\n6     print(\"food_2는 떡볶이\")\n7 if \"쫄면\" == food_1:\n8     print(\"food_1 == 쫄면\")\n9 print(\"쫄면 떡볶이는 분식임\")\n\`\`\`\n<보기>\nㄱ. 쫄면은 떡볶이가 아님\nㄴ. food_2는 떡볶이\nㄷ. food_1 == 쫄면\nㄹ. 쫄면 떡볶이는 분식임`,
      options: [
        "① ㄱ, ㄴ",
        "② ㄱ, ㄷ",
        "③ ㄴ, ㄹ",
        "④ ㄴ, ㄷ, ㄹ",
        "⑤ ㄱ, ㄴ, ㄷ, ㄹ"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다. 3번째 줄의 조건 `food_1 != \"쫄면\"`은 거짓이므로 출력되지 않습니다. 5번째 줄 조건 `food_2 == \"떡볶이\"`는 참이므로 ㄴ이 출력됩니다. 7번째 줄 조건 `\"쫄면\" == food_1`은 참이므로 ㄷ이 출력됩니다. 9번째 줄은 들여쓰기가 없는 무조건 실행문이므로 ㄹ이 출력됩니다. 따라서 ㄴ, ㄷ, ㄹ이 출력됩니다."
    },
    {
      questionNum: 22,
      type: "multiple_choice",
      score: 4.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "22. 프로그램 실행 시 출력 결과값으로 가장 적절한 것은? [4.5점]",
      passage: `\`\`\`python\n1 cnt=0\n2 word = \"APPLE\"\n3 for i in word:\n4     cnt=cnt+1\n5 print(cnt)\n\`\`\``,
      options: [
        "① 5가 출력된다.",
        "② word 가 차례대로 출력된다.",
        "③ APPLE 이 차례대로 출력된다.",
        "④ 1부터 5까지의 합이 출력된다.",
        "⑤ 출력되는 값은 0, 1, 2, 3, 4, 5 이다."
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다. for 반복문이 문자열 \"APPLE\"의 글자 수만큼(5번) 반복되며 변수 cnt의 값을 1씩 증가시킵니다. 최종적으로 반복문이 종료된 후 변수 cnt의 값인 5가 출력됩니다."
    },
    {
      questionNum: 23,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "23. 프로그램 실행 시 출력되는 결과값으로 가장 적절한 것은? [4.1점]",
      passage: `\`\`\`python\n1 name=\"가나다라마바사\"\n2 for i in name:\n3     if i==\"가나\":\n4         print(i)\n\`\`\``,
      options: [
        "① print(i)가 출력된다.",
        "② 아무것도 출력되지 않는다.",
        "③ 가나 가 차례대로 출력된다.",
        "④ name 이 차례대로 출력된다.",
        "⑤ 가나다라마바사 가 차례대로 출력된다."
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다. for문은 문자열을 한 글자씩('가', '나', '다', ...) 순회하므로, 변수 i에는 1글자만 들어갑니다. 두 글자인 \"가나\"와 일치하는 경우는 발생하지 않아 if문의 조건이 항상 거짓이 되므로 프로그램은 아무것도 출력하지 않습니다."
    },
    {
      questionNum: 24,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "24. 프로그램 실행 시 출력되는 결과값으로 가장 적절한 것은? [4.2점]",
      passage: `\`\`\`python\n1 for i in range(5,1,-2):\n2     print(\"*\"*i)\n\`\`\``,
      options: [
        "① ***** \\n *** \\n *",
        "② ***** \\n ***",
        "③ ***** \\n **** \\n *** \\n ** \\n *",
        "④ *** \\n *",
        "⑤ * \\n *** \\n *****"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다. `range(5, 1, -2)`는 5부터 시작하여 1 직전까지 -2씩 감소하는 시퀀스를 생성합니다. 따라서 변수 i는 5와 3의 값을 차례대로 갖게 되며, \"*\"를 5개, 3개씩 줄바꿈하여 출력합니다."
    },
    {
      questionNum: 25,
      type: "multiple_choice",
      score: 4.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "25. 프로그램 실행 시 출력되는 결과값으로 가장 적절한 것은? [4.5점]",
      passage: `\`\`\`python\n1 total=1\n2 for i in range(5,0,-1):\n3     total=total*i\n4 print(total)\n\`\`\``,
      options: [
        "① 출력되는 값은 0 이다.",
        "② 아무것도 출력되지 않는다.",
        "③ total 이라는 문자 출력된다.",
        "④ 5부터 1까지 곱한 값이 출력된다.",
        "⑤ 출력되는 값는 5, 4, 3, 2, 1 이다."
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다. `range(5, 0, -1)`은 5, 4, 3, 2, 1의 시퀀스를 만들며, 변수 total에 이 값들을 누적하여 곱하므로 최종적으로 5부터 1까지의 팩토리얼 값(120)이 계산되어 출력됩니다."
    }
  ]
};
