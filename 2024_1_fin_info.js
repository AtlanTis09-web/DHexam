var exam_2024_1_fin_info = {
  examInfo: {
    examId: "2024_1_fin_info",
    schoolName: "동대전고등학교",
    year: 2024,
    semester: 1,
    grade: 1,
    examType: "기말고사",
    subject: "정보"
  },
  sharedPassages: {
    "passage_17_18": `[17~18] 다음은 원의 반지름을 정수로 입력받아 원의 넓이를 구하는 프로그램이다. 물음에 답하시오.\n\n<입력 예시>\n2\n\n<출력 예시>\n원의 넓이: 12.56\n\n\`\`\`python\nx = 3.14\n(가)\ny = (나)\nprint("원의 넓이:", y)\n\`\`\``,
    "passage_20_21": `[20~21] 다음은 조건에 따라 결과값을 출력하는 프로그램이다. 물음에 답하시오.\n\n\`\`\`python\n1 a = 3\n2 if a>10\n3     print('a는 10보다 큽니다')\n\`\`\``
  },
  questions: [
    {
      questionNum: 1,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "1. 정보 과학 기술의 발전으로 인한 사회적 변화로 보기 어려운 것은? [3.5점]",
      passage: null,
      options: [
        "① 지식과 기술의 생명 주기가 짧아졌다.",
        "② 사회적 요구와 여론 수렴이 편리해졌다.",
        "③ 지식의 양이 증가하는 속도가 빨라졌다.",
        "④ 첨단 기기 사용으로 지역 및 세대 간의 격차가 줄었다.",
        "⑤ 사회 구성원 간의 소통보다 개인적인 성향이 더 강화되었다."
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다. 정보 통신 기술의 발전으로 SNS 등 다양한 플랫폼이 등장하여 사회 구성원 간의 연결과 소통은 오히려 과거보다 크게 증가하고 다변화되었습니다."
    },
    {
      questionNum: 2,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "2. 다음이 설명하는 것으로 가장 적절한 것은? [3.5점]",
      passage: `자료를 체계적이고 효율적으로 정리하기 위한 방법과 절차\n의사 결정을 위하여 다루는 다양한 연관 정보를 중복 저장을 방지하면서 체계적으로 관리`,
      options: [
        "① 개별 처리",
        "② 정보 관리",
        "③ 정보 보관",
        "④ 정보 수집",
        "⑤ 개별 시스템"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다. 방대한 자료 속에서 연관된 정보를 중복 없이 체계적으로 정리하고 유지하는 일련의 과정을 '정보 관리'라고 합니다."
    },
    {
      questionNum: 3,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "3. 다음이 설명하는 것으로 가장 적절한 것은? [3.5점]",
      passage: `• 구름 속 보이지 않는 공간, 즉 인터넷 공간에서 데이터의 저장과 처리, 네트워크, 콘텐츠 사용 등 IT 관련 서비스를 제공하는 기술`,
      options: [
        "① 플랫폼",
        "② 네트워크",
        "③ 알고리즘",
        "④ 기계 학습",
        "⑤ 클라우드 컴퓨팅"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다. 인터넷(구름)을 통해 서버, 스토리지(저장 공간), 데이터베이스, 네트워킹, 소프트웨어 등의 컴퓨팅 서비스를 제공하는 기술을 '클라우드 컴퓨팅'이라고 합니다."
    },
    {
      questionNum: 4,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "4. 다음은 정보 과학의 발달에 따른 새로운 기술의 예를 설명한 것이다. 공통적으로 사용된 기술로 가장 적절한 것은? [3.5점]",
      passage: `• 시각장애인에게 길을 자동으로 안내해 주는 디지털 지팡이\n• 반창고나 스티커, 문신처럼 피부에 붙여 건강상태를 모니터링 하는 바이오 스탬프`,
      options: [
        "① SNS",
        "② 사물인터넷",
        "③ 3D 프린팅",
        "④ 스마트 농업",
        "⑤ 4차 산업혁명"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다. 일상 속 사물(지팡이, 반창고 등)에 센서와 통신 기능을 내장하여 인터넷으로 연결하고 정보를 주고받는 기술은 '사물인터넷(IoT)'입니다."
    },
    {
      questionNum: 5,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: "./images/2024_1_fin_info_q5.png",
      questionText: "5. 다음 그림은 알고리즘의 기본 구조 중 주어진 조건을 만족하는 한 특정 부분을 반복하여 처리하는 구조이다. 이와 같은 구조를 사용하는 명령어로 가장 적절한 것은? [3.6점]",
      passage: null,
      options: [
        "① if",
        "② int",
        "③ for",
        "④ input",
        "⑤ print"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다. 주어진 조건을 만족하는 동안 특정 명령을 반복하는 '반복 구조'를 구현할 때 파이썬에서 사용하는 대표적인 명령어는 `for`문 또는 `while`문입니다."
    },
    {
      questionNum: 6,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "6. 다음 사례에서 사용할 수 있는 알고리즘의 구조로 가장 적절한 것은? [3.6점]",
      passage: `영희: 오늘 점심에 뭐 먹을래?\n철수 : 일기예보를 보고 비가 온다면 짬뽕을 먹자! 비가 오지 않는다면 짜장이 좋겠어.`,
      options: [
        "① 반복구조",
        "② 복합구조",
        "③ 선택구조",
        "④ 순차구조",
        "⑤ 혼합구조"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다. '비가 온다면', '비가 오지 않는다면'과 같이 특정 조건의 참/거짓 여부에 따라 실행할 동작을 다르게 결정하는 것은 '선택 구조'에 해당합니다."
    },
    {
      questionNum: 7,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "7. 다음은 사이버 범죄 관련 기사의 일부이다. 이를 예방하기 위한 정보 보안 실천 방법을 <보기>에서 있는 대로 고른 것은? [4.0점]",
      passage: `이스라엘 보안 회사 체크포인트가 오픈AI의 AI 챗봇 '챗GPT'를 사용해 악성 코드를 작성하는 사이버 범죄 사례를 발견했다고 보안 전문매체 해크리드가 7일 (현지시간) 보도했다. 보도에 따르면 해커들은 챗GPT를 사용해 강력한 해킹 도구를 구축하고 젊은 여성을 사칭해 목표물을 함정에 빠뜨리도록 설계된 새로운 챗봇을 만들고 있다. 특히 챗GPT를 사용하면 기술 전문 지식이나 코딩 지식 없이도 모든 사용자가 쿼리를 입력하고 악성 코드와 설득력 있는 피싱 이메일을 생성할 수 있다.\n\n<보기>\nㄱ. 개인 정보가 담긴 파일은 비밀번호를 설정한다.\nㄴ. 방화벽을 설치, 스팸 메일 필터링 기능을 추가한다.\nㄷ. 백신 프로그램을 설치하고, 검사 및 치료하는 것을 생활화한다.\nㄹ. 운영체제의 보안 업데이트와 백신 버전 업데이트를 자동으로 설정하여 최신화한다.`,
      options: [
        "① ㄱ, ㄴ",
        "② ㄱ, ㄷ",
        "③ ㄴ, ㄷ, ㄹ",
        "④ ㄱ, ㄴ, ㄷ",
        "⑤ ㄱ, ㄴ, ㄷ, ㄹ"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다. 사이버 범죄 및 악성 코드, 피싱 메일 등에 대비하기 위해서는 파일에 비밀번호를 설정하여 보호하고, 방화벽 및 스팸 필터링을 사용하며, 백신 프로그램을 항상 최신 상태로 유지하고 정기적으로 검사하는 <보기>의 모든 실천 방법(ㄱ, ㄴ, ㄷ, ㄹ)이 필수적입니다."
    },
    {
      questionNum: 8,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "8. <보기>와 같이 온라인 탈억제 효과를 가져오는 요인에 대한 설명으로 가장 적절한 것을 고르면? [4.1점]",
      passage: `<보기>\n존 슐러 박사는 사이버 공간에서 긴장이 완화되고 구속감을 적게 느끼며, 개방적으로 자신을 표현하게 되는 현상을 온라인 탈억제 효과로 설명하였다.`,
      options: [
        "① 사이버 공간에서 개인의 얼굴을 드러내고 활동한다.",
        "② 개인적 성향이 중요해 짐에 따라 인터넷에서도 시간과 공간에 제약을 둔다.",
        "③ 인터넷 상에서 발생하는 피해 크기는 기술의 발달로 인해 소규모로 줄어들었다.",
        "④ 익명성으로 인해 사이버 공간에서 책임 의식이 부족하고 다른 사람처럼 행동한다.",
        "⑤ 누구나 유해 정보를 접할 수 있지만 사이버 공간에서 제약을 받기 때문에 윤리적으로 행동한다."
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다. '온라인 탈억제 효과'는 사이버 공간 특유의 익명성과 비대면성 때문에 현실보다 도덕적 통제력을 잃고 충동적이거나 공격적으로 행동하게 되는 현상을 말합니다."
    },
    {
      questionNum: 9,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "9. <보기>와 같이 프로그램 실행한 결과로 가장 적절한 것은? [3.9점]",
      passage: `<보기>\n1 int(9.8)`,
      options: [
        "① 8",
        "② 9",
        "③ 9.8",
        "④ 10",
        "⑤ int(9.8)"
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다. `int()` 함수는 실수 값을 입력받았을 때 소수점 이하를 버리고 정수 부분만 반환합니다. 따라서 `int(9.8)`의 결과는 9입니다."
    },
    {
      questionNum: 10,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "10. 다음이 설명하는 것으로 가장 적절한 것은? [3.5점]",
      passage: `• 복잡하고 방대한 양의 자료를 수집하고 분석하여 가치를 추출하는 기술.\n• 방대한 자료를 효과적으로 처리하기 위해 알고리즘과 소프트웨어의 발달이 중요함.\n• 실시간으로 신속하게 자료를 수집하고 처리하는 기술이 필요함.`,
      options: [
        "① 빅데이터",
        "② 기계 학습",
        "③ 자료 처리",
        "④ 컴퓨팅 기술",
        "⑤ 데이터베이스"
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다. 디지털 환경에서 생성되는 막대한 규모의 데이터 형태를 신속하게 수집, 저장, 분석하여 의미 있는 가치를 추출해 내는 기술을 '빅데이터(Big Data)'라고 합니다."
    },
    {
      questionNum: 11,
      type: "multiple_choice",
      score: 3.8,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "11. 알고리즘의 조건으로 옳은 것만을 <보기>에서 고른 것은? [3.8점]",
      passage: `<보기>\nㄱ. 입력과 출력이 있어야 한다.\nㄴ. 처리 과정이 실행 가능해야 한다.\nㄷ. 과정이 명확하면 무한반복 실행되어도 된다.\nㄹ. 과정보다 결과값이 명확하게 나오는 것이 중요하다.`,
      options: [
        "① ㄱ, ㄴ",
        "② ㄱ, ㄷ",
        "③ ㄴ, ㄷ",
        "④ ㄱ, ㄴ, ㄹ",
        "⑤ ㄱ, ㄴ, ㄷ, ㄹ"
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다. 알고리즘은 0개 이상의 입력과 1개 이상의 출력이 있어야 하며(ㄱ), 모든 명령어는 컴퓨터에서 실행 가능해야 합니다(ㄴ). 무한 반복되어서는 안 되며 유한한 단계 내에 반드시 종료되어야(유한성) 하므로 ㄷ은 틀렸습니다. 또한 과정의 명령어가 모호하지 않고 명확해야(명확성) 하므로 과정의 명확성 역시 중요하여 ㄹ도 틀린 설명입니다."
    },
    {
      questionNum: 12,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "12. 다음은 빅데이터의 활용에 따른 문제점에 대한 기사의 일부이다. 빅데이터의 문제점으로 가장 적절한 것은? [4.2점]",
      passage: `미국인 에릭 루미스는 2013년 총기 사건에 연루된 차량을 무단으로 운전해 도주한 혐의로 징역 6년과 5년의 보호관찰 처분을 받았다. 그가 중형을 선고받은 이유 중 하나는 재범 가능성을 예측해주는 시스템 '컴퍼스(COMPAS)'의 분석 결과 때문이었다. 컴퍼스는 루미스의 재범 위험성이 높다고 판단했고, 법원은 이러한 결과를 양형 이유 중 하나로 받아들였다. 컴퍼스는 재범 여부에 영향을 미치는 것으로 알려진 요인을 바탕으로 재범 위험요소를 평가하는 통계기반 위험평가다.`,
      options: [
        "① 사생활 침해",
        "② 저작권 침해",
        "③ 개인정보 유출",
        "④ 예측에 의한 처벌",
        "⑤ 자료의 남용 및 오용"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다. 위 기사 내용은 범죄를 저지르기도 전에 시스템의 알고리즘과 데이터 분석(빅데이터) 결과만으로 향후 범죄 가능성을 '예측'하여 더 무거운 양형을 내리는 '예측에 의한 처벌(판단)' 문제를 지적하고 있습니다."
    },
    {
      questionNum: 13,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "13. <보기>와 같이 프로그램 실행한 결과로 가장 적절한 것은? [3.9점]",
      passage: `<보기>\n1 a = "2"\n2 b = "3"\n3 print(a+b)`,
      options: [
        "① 2",
        "② 3",
        "③ 5",
        "④ 23",
        "⑤ a+b"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다. 변수 a와 b에 저장된 값은 큰따옴표로 둘러싸인 문자열(String) 타입입니다. 파이썬에서 문자열끼리의 더하기(+) 연산은 두 문자열을 단순히 이어 붙이는 연결을 의미하므로 결과는 문자열 \"23\"이 됩니다."
    },
    {
      questionNum: 14,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "14. 프로그램 실행 결과로 True 값을 갖는 것을 <보기>에서 있는 대로 고른 것은? [4.1점]",
      passage: `<보기>\nㄱ. print(10>3)\nㄴ. print(2+3==5)\nㄷ. print('a'=='a')`,
      options: [
        "① ㄱ",
        "② ㄴ",
        "③ ㄱ, ㄴ",
        "④ ㄴ, ㄷ",
        "⑤ ㄱ, ㄴ, ㄷ"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번(ㄱ, ㄴ)입니다. 10은 3보다 크므로 `10>3`은 True(ㄱ)입니다. 2+3은 5와 같으므로 `2+3==5`는 True(ㄴ)입니다. (시험지 원문 오타 기준 ㄷ은 `'a'='a'`로 대입 연산자가 쓰여 문법 오류가 발생하거나 의도된 정답 처리에 따라 배제되었습니다. 정답은 3번입니다.)"
    },
    {
      questionNum: 15,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "15. 프로그램 실행 후 결과값으로 화면에 그대로 \\n\\n 이 출력되는 것은? [4.2점]",
      passage: null,
      options: [
        "① print(\"\\n\\n\")",
        "② print(\"\\n\\\\n\")",
        "③ print(\"\\\\n\\\\n\")",
        "④ input(\"\\n\\n\")",
        "⑤ input(\"\\\\n\\\\n\")"
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다. 이스케이프 문자 `\\n`은 줄바꿈을 의미합니다. 만약 줄바꿈이 아니라 역슬래시 문자 자체(`\\`)와 영문자 `n`을 그대로 화면에 출력하고 싶다면, 역슬래시를 두 번 연속하여 `\\\\`로 입력해야 합니다. 따라서 `\\n\\n`이라는 텍스트를 출력하기 위한 코드는 `print(\"\\\\n\\\\n\")` 입니다."
    },
    {
      questionNum: 16,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "16. 프로그램 실행 결과로 같은 값을 갖는 것만을 고른 것은?(단, 정수와 실수를 구분하지 않는다.) [4.0점]",
      passage: `1 a=20\n2 b=5\n3 c=a+b\n4 d=a-b\n5 e=a/b\n6 f=a*b\n7 g=a//b\n8 h=a%b\n9 print(a,b,c,d,e,f,g,h)`,
      options: [
        "① b, e",
        "② b, h",
        "③ c, g",
        "④ d, h",
        "⑤ e, g"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다. a=20, b=5 일 때 e=20/5 이므로 결과는 실수 4.0이 됩니다. g=20//5 (몫 구하기)이므로 결과는 정수 4가 됩니다. 문제에서 정수와 실수를 구분하지 않는다고 했으므로 e와 g는 4로 같은 값을 갖습니다. 참고로 h는 20%5 (나머지)이므로 0입니다."
    },
    {
      questionNum: 17,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: "passage_17_18",
      imageUrl: null,
      questionText: "17. (가)에 들어갈 내용으로 가장 적절한 것은? (단, 예시에서 밑줄 친 부분은 입력값이며, 원 넓이는 반지름 × 반지름 × 3.14로 계산한다.) [4.1점]",
      passage: null,
      options: [
        "① print(y)",
        "② print(\"y\")",
        "③ input(y)",
        "④ int(input())",
        "⑤ input(int())"
      ],
      correctAnswer: 3,
      explanation: "정답은 ④번입니다. 키보드를 통해 사용자로부터 숫자 2를 입력받고, 이를 넓이 계산을 위한 숫자로 활용하기 위해서는 문자열을 입력받는 `input()` 함수를 사용한 뒤 이 값을 정수로 변환해주는 `int()` 함수로 감싸주어야 합니다. 따라서 `int(input())`이 올바른 형태입니다."
    },
    {
      questionNum: 18,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: "passage_17_18",
      imageUrl: null,
      questionText: "18. (나)에 들어갈 내용으로 가장 적절한 것은? [4.1점]",
      passage: null,
      options: [
        "① y*y*x",
        "② \"y*y*x\"",
        "③ \"y\"*\"y\"*\"x\"",
        "④ y, \"*\", y, \"*\", x",
        "⑤ y+\"*\"+y+\"*\"+x"
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다. 문제에서 주어진 공식에 따르면 원의 넓이는 반지름(가에서 입력받아 반환된 값) × 반지름 × 3.14(변수 x) 입니다. 변수 y에 반지름이 저장되어 있다면, 계산 수식은 `y * y * x`가 됩니다. 따옴표를 넣으면 계산식이 아닌 단순 문자열이 됩니다."
    },
    {
      questionNum: 19,
      type: "multiple_choice",
      score: 4.4,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "19. 프로그램 실행 후 입력창에 5를 입력한 결과로 가장 적절한 것은? [4.4점]",
      passage: `1 num=input()\n2 if num==5:\n3     print('5가 입력되었습니다.')\n4 else:\n5     print('5가 아닙니다.')`,
      options: [
        "① 5가 아닙니다.",
        "② 오류가 발생한다.",
        "③ 5가 입력되었습니다.",
        "④ 아무것도 출력되지 않는다.",
        "⑤ 5가 아닙니다. 5가 입력되었습니다."
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다. `input()` 함수로 입력받은 값은 항상 문자열(String) 자료형입니다. 입력창에 5를 입력하면 변수 num에는 정수 5가 아닌 문자열 \"5\"가 저장됩니다. 2번째 줄의 조건식 `num==5`에서 문자열 \"5\"와 정수 5를 비교하므로 결과는 False가 되어 else 문의 내용인 '5가 아닙니다.'가 출력됩니다."
    },
    {
      questionNum: 20,
      type: "multiple_choice",
      score: 4.5,
      linkedPassageId: "passage_20_21",
      imageUrl: null,
      questionText: "20. 프로그램 실행 시 SyntaxError 오류가 발생하였다. 오류를 가장 적절하게 수정한 것은? [4.5점]",
      passage: null,
      options: [
        "① 1번째 줄을 int(3) 으로 수정한다.",
        "② 2번째 줄을 if a==3 으로 수정한다.",
        "③ 2번째 줄을 if a>10: 으로 수정한다.",
        "④ 3번째 줄을 print 명령문 앞 4칸을 들여쓰지 않는다.",
        "⑤ 3번째 줄을 print(\"a가 10보다 큽니다\")로 수정한다."
      ],
      correctAnswer: 2,
      explanation: "정답은 ③번입니다. 파이썬 문법에서 if 조건문의 끝에는 반드시 콜론(`:`)을 작성해야 합니다. 2번째 줄에 콜론이 누락되어 구문 오류(SyntaxError)가 발생한 것이므로 `if a>10:` 으로 수정하는 것이 맞습니다."
    },
    {
      questionNum: 21,
      type: "multiple_choice",
      score: 4.4,
      linkedPassageId: "passage_20_21",
      imageUrl: null,
      questionText: "21. 위 프로그램이 오류 없이 실행되었을 경우의 결과값으로 가장 적절한 것은? [4.4점]",
      passage: null,
      options: [
        "① 3",
        "② a",
        "③ 10",
        "④ a가 10보다 크다",
        "⑤ 아무것도 출력되지 않는다."
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다. 변수 a에는 3이 할당되어 있습니다. 조건식 `a>10`에서 3은 10보다 크지 않으므로 조건은 거짓(False)이 됩니다. 거짓일 때 실행할 `else` 절이 작성되어 있지 않기 때문에 프로그램은 아무것도 출력하지 않고 종료됩니다."
    },
    {
      questionNum: 22,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "22. 출력 예시와 같이 출력되는 프로그램을 작성하고자 할 때, (가)에 들어갈 내용으로 가장 적절한 것은? [4.3점]",
      passage: `<출력 예시>\n10\n9\n8\n7\n6\n5\n\n\`\`\`python\nfor i in range(가):\n    print(i)\n\`\`\``,
      options: [
        "① (5, 10)",
        "② (5, 11)",
        "③ (10, 5)",
        "④ (10, 5, -1)",
        "⑤ (10, 4, -1)"
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다. `range(초기값, 종료값, 증감값)` 함수를 사용할 때 숫자가 10부터 5까지 -1씩 감소하며 출력되도록 하려면, 초기값은 10, 증감값은 -1로 설정해야 합니다. 종료값은 포함되지 않고 그 직전까지 수행되므로 5까지 도달하려면 종료값을 4로 설정해야 합니다. 따라서 `range(10, 4, -1)`이 올바른 답입니다."
    },
    {
      questionNum: 23,
      type: "multiple_choice",
      score: 4.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "23. 프로그램에 대한 설명으로 가장 적절한 것은? [4.5점]",
      passage: `1 a=0\n2 for i in range(1,20):\n3     if i%2==0:\n4         a=a+1\n5 print(a)`,
      options: [
        "① 총 10번 반복 실행된다.",
        "② 결과값은 20이 출력된다.",
        "③ 출력되는 값은 2,4,6,8,10,12,14,16,18이다.",
        "④ 1부터 20까지 홀수의 합을 구하는 프로그램이다.",
        "⑤ 1부터 19까지 짝수의 개수를 구하는 프로그램이다."
      ],
      correctAnswer: 4,
      explanation: "정답은 ⑤번입니다. `range(1, 20)`은 1부터 19까지 반복합니다(총 19회 반복). `if i%2==0`은 i가 짝수일 때를 의미하며, 짝수일 때마다 변수 a의 값을 1씩 증가시키므로 이는 1부터 19 사이의 짝수 개수를 카운팅하는 로직입니다. 짝수는 2, 4, 6, ..., 18로 총 9개이므로 결과값은 9가 출력됩니다."
    },
    {
      questionNum: 24,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "24. 프로그램 실행 시 2번째 출력되는 결과값으로 가장 적절한 것은? [4.3점]",
      passage: `1 for i in "HEART":\n2     print(i)`,
      options: [
        "① E",
        "② H",
        "③ HE",
        "④ \"HE\"",
        "⑤ \"HEART\""
      ],
      correctAnswer: 0,
      explanation: "정답은 ①번입니다. for문에서 문자열 `\"HEART\"`를 순회하면 각 문자를 한 글자씩 차례대로 출력합니다. 1번째에는 'H'가 출력되고, 2번째에는 'E'가 출력됩니다."
    },
    {
      questionNum: 25,
      type: "multiple_choice",
      score: 4.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "25. 프로그램 실행 결과로 가장 적절한 것은? [4.5점]",
      passage: `1 for i in range(1,13,4):\n2     print(i)`,
      options: [
        "① 13번 반복하는 프로그램이다.",
        "② 출력되는 결과 값은 1, 5, 9이다.",
        "③ 1부터 12까지 출력하는 프로그램이다.",
        "④ 변수 i는 합계를 계산해 주는 역할을 한다.",
        "⑤ 2번째 줄의 실행문은 들여쓰지 않아도 결과값은 똑같다."
      ],
      correctAnswer: 1,
      explanation: "정답은 ②번입니다. `range(1, 13, 4)`는 1부터 시작하여 13 미만까지 4씩 증가하는 숫자 시퀀스를 생성합니다. 따라서 변수 i는 1, 5, 9를 차례로 가지며, 이를 출력하면 결과는 1, 5, 9가 됩니다. 총 3번 반복하는 프로그램입니다."
    }
  ]
};
