var exam_2026_1_fin_information = {
  examInfo: {
    examId: "2026_1_fin_information",
    schoolName: "동대전고등학교",
    year: 2026,
    semester: 1,
    grade: 1,
    examType: "기말고사",
    subject: "info"
  },
  sharedPassages: {
    "q24_25_passage": `<조건>\n1. 한 줄에 여러 개의 정수가 공백으로 구분되어 입력된다.\n2. 입력값은 -4 70 -11 98 46 이다.\n3. 입력값을 저장하는 리스트 명은 a 이다.\n4. 입력받는 정수는 2개 이상으로 가정한다.\n5. 입력된 값 중 첫 번째로 입력된 값과 두 번째로 입력된 값의 곱을 출력한다.\n6. 입력값이 바뀌면 출력값도 바뀐다.\n\n1 (가)\n2 (나)`
  },
  questions: [
    {
      questionNum: 1,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: "./images/2026_1_fin_information_q1.png",
      questionText: "1. 다음 그림에서 (가), (나)에 들어갈 내용으로 가장 적절한 것은? [3.5점]",
      passage: null,
      options: [
        "① 백업 - 복원",
        "② 복사 - 저장",
        "③ 삭제 - 압축",
        "④ 암호화 - 복호화",
        "⑤ 복호화 - 암호화"
      ],
      correctAnswer: 3,
      explanation: "그림에서 누구나 읽을 수 있는 평문(비밀번호 2020)을 해커가 알아볼 수 없는 형태(CE39BAQ)로 변환하는 (가) 과정은 '암호화'입니다. 그리고 이 암호문을 다시 원래의 평문(2020)으로 되돌리는 (나) 과정은 '복호화'입니다. 따라서 올바른 짝은 ④번입니다."
    },
    {
      questionNum: 2,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "2. 다음 중 디지털 기술의 활용 사례와 사회 영역의 연결이 적절하지 않은 것은? [3.5점]",
      passage: null,
      options: [
        "① 냉장고에 식재료를 보관하여 신선도를 유지한다. (생활 영역)",
        "② 음성 인식 스피커로 조명과 TV를 제어한다. (홈 서비스 영역)",
        "③ 드론과 센서를 이용해 농작물의 생육 상태를 관리한다. (농업 영역)",
        "④ AI가 카드 사용 내역을 분석하여 이상 거래를 차단한다. (금융 영역)",
        "⑤ 스마트워치로 심박수를 측정하고 건강 상태를 확인한다. (의료 및 보건 영역)"
      ],
      correctAnswer: 0,
      explanation: "냉장고에 식재료를 보관하여 단순히 신선도를 유지하는 것은 기존 냉장고 본연의 전통적인 기능일 뿐, 데이터 분석이나 AI, IoT 등이 접목된 '디지털 기술의 활용 사례'라고 보기 어렵습니다. 스마트 냉장고가 식재료 유통기한을 관리하고 자동으로 주문해 주는 기능 등이 디지털 기술의 예가 될 수 있습니다."
    },
    {
      questionNum: 3,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "3. 다음 사례에서 설명하는 빅데이터 특징으로 가장 적절한 것은? [3.5점]",
      passage: "한 유통 기업은 고객 구매 데이터를 분석하여 수요를 예측하고 상품 배치 전략을 개선하였다. 그 결과 재고 관리 비용이 감소하고 기업의 수익성이 향상되었다.",
      options: [
        "① 가치",
        "② 규모",
        "③ 속도",
        "④ 다양성",
        "⑤ 정확성"
      ],
      correctAnswer: 0,
      explanation: "사례에서 빅데이터를 분석하여 '재고 관리 비용 감소'와 '수익성 향상'이라는 새로운 경제적 이득을 창출해 냈으므로, 이는 빅데이터의 특징 중 유의미한 가치를 뽑아내는 '가치(Value)'에 해당합니다."
    },
    {
      questionNum: 4,
      type: "multiple_choice",
      score: 3.8,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "4. 다음 중 순차 구조, 선택 구조, 반복 구조에 대한 설명으로 옳은 것만을 <보기>에서 고른 것은? [3.8점]",
      passage: "<보기>\nㄱ. 반복 구조는 특정 명령을 반복 실행 한다.\nㄴ. 순차 구조는 조건 판단 없이 명령을 순서대로 실행한다.\nㄷ. 선택 구조는 조건에 따라 실행되는 명령이 달라질 수 있다.",
      options: [
        "① ㄱ",
        "② ㄴ",
        "③ ㄱ, ㄷ",
        "④ ㄴ, ㄷ",
        "⑤ ㄱ, ㄴ, ㄷ"
      ],
      correctAnswer: 4,
      explanation: "ㄱ. 반복 구조는 주어진 조건이 만족하는 동안 특정 명령을 되풀이합니다. (O)\nㄴ. 순차 구조는 위에서 아래로 물 흐르듯 순서대로 명령을 실행하는 구조입니다. (O)\nㄷ. 선택 구조는 참/거짓 조건 판단 결과에 따라 실행 경로를 나누는 구조입니다. (O)\n따라서 세 가지 설명 모두 옳습니다."
    },
    {
      questionNum: 5,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "5. 다음은 정보 보안 기술의 활용 사례이다. 백신, 방화벽, 사용자인증에 대한 설명으로 가장 적절하게 연결한 것은? [3.5점]",
      passage: "<보기>\nㄱ. 아이디와 비밀번호를 입력하여 본인 여부를 확인함.\nㄴ. 허가받지 않은 사람의 불법적인 침입 및 접근을 차단함.\nㄷ. 컴퓨터에 침투한 악성코드를 탐지하고 제거함.",
      options: [
        "① (ㄱ) 백신 - (ㄴ) 방화벽 - (ㄷ) 사용자인증",
        "② (ㄱ) 방화벽 - (ㄴ) 백신 - (ㄷ) 사용자인증",
        "③ (ㄱ) 방화벽 - (ㄴ) 사용자인증 - (ㄷ) 백신",
        "④ (ㄱ) 사용자인증 - (ㄴ) 백신 - (ㄷ) 방화벽",
        "⑤ (ㄱ) 사용자인증 - (ㄴ) 방화벽 - (ㄷ) 백신"
      ],
      correctAnswer: 4,
      explanation: "ㄱ. 정당한 권한을 가진 사람인지 확인하는 과정은 '사용자 인증'입니다.\nㄴ. 네트워크 외부로부터의 불법적인 접근과 침입을 막는 차단막 역할은 '방화벽'입니다.\nㄷ. 시스템 내의 바이러스, 랜섬웨어 등 악성코드를 탐지하고 치료하는 소프트웨어는 '백신'입니다. 따라서 올바른 순서는 ⑤번입니다."
    },
    {
      questionNum: 6,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "6. 추상화 과정은 문제 분해 ⇢ 핵심 요소 추출 ⇢ 모델링의 과정을 거친다. 이 중 핵심 요소 추출에 관한 설명으로 가장 적절한 것만을 <보기>에서 있는 대로 고른 것은? [4.0점]",
      passage: "<보기>\nㄱ. 문제 해결과 관련 없는 불필요한 요소를 제거하는 과정이다.\nㄴ. 복잡한 문제를 해결하기 쉽게 작은 문제로 나누는 과정을 말한다.\nㄷ. 핵심 요소들을 이해하기 쉽게 단순화 ∙ 구조화 하는 과정으로 데이터 간의 관계나 흐름을 쉽게 이해할 수 있다.",
      options: [
        "① ㄱ",
        "② ㄴ",
        "③ ㄱ, ㄷ",
        "④ ㄴ, ㄷ",
        "⑤ ㄱ, ㄴ, ㄷ"
      ],
      correctAnswer: 0,
      explanation: "핵심 요소 추출(Abstraction)은 복잡한 문제에서 중요한 핵심 특징만 뽑아내고 불필요한 세부 사항은 제거하는 과정을 말하므로 ㄱ이 올바른 설명입니다. ㄴ은 '문제 분해(Decomposition)'에 대한 설명이며, ㄷ은 핵심 요소를 구조화하고 시각화하는 '모델링(Modeling)'에 대한 설명입니다."
    },
    {
      questionNum: 7,
      type: "multiple_choice",
      score: 3.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "7. 프로그램의 실행 결과로 가장 적절한 것은? [3.5점]",
      passage: `1 print("정")\n2 print("보")`,
      options: [
        "① 정보",
        "② 정보 (공백 포함)",
        "③ 정\n보",
        "④ \"정\"\n\"보\"",
        "⑤ 오류가 발생한다."
      ],
      correctAnswer: 2,
      explanation: "파이썬에서 `print()` 함수는 기본적으로 출력 후 줄바꿈(엔터, `\\n`)을 수행합니다. 따라서 1번 줄에서 '정'이 출력되고 줄바꿈이 일어나며, 2번 줄에서 '보'가 출력되므로 각 글자가 위아래로 나뉘어 출력됩니다. (선택지 ③ 형태)"
    },
    {
      questionNum: 8,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "8. 프로그램의 실행 결과가 <출력 예시>와 같을 때 A에 들어갈 명령어로 가장 적절한 것은? [3.9점]",
      passage: `1 print("가", A)\n2 print("나", A)\n3 print("다")\n\n<출력 예시>\n가나다`,
      options: [
        "① end=\"\"",
        "② end=\"\\n\"",
        "③ sep=\"\"",
        "④ sep=\",\"",
        "⑤ sep=\"\\n\""
      ],
      correctAnswer: 0,
      explanation: "결과가 줄바꿈 없이 '가나다'로 이어서 출력되었습니다. `print()` 함수의 기본 종료 문자는 줄바꿈(`\\n`)인데, 이를 빈 문자열(`\"\"`)로 변경해 주어야 줄이 바뀌지 않고 다음 출력과 이어지게 됩니다. 따라서 A에 들어갈 속성은 `end=\"\"`입니다."
    },
    {
      questionNum: 9,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "9. 프로그램 실행 시 입력값에 따른 결과로 가장 적절한 것은? [3.6점]",
      passage: `1 a=input()\n2 print(a+a)\n#입력값은 3`,
      options: [
        "① 6",
        "② 33",
        "③ aa",
        "④ 3+3",
        "⑤ a+a"
      ],
      correctAnswer: 1,
      explanation: "`input()` 함수로 입력받은 데이터는 기본적으로 '문자열(str)' 형식으로 저장됩니다. 따라서 숫자 3을 입력해도 변수 `a`에는 문자열 `\"3\"`이 저장됩니다. 문자열 간의 더하기(`+`) 연산은 두 문자열을 이어 붙이는 동작을 하므로 `\"3\" + \"3\" = \"33\"`이 출력됩니다."
    },
    {
      questionNum: 10,
      type: "multiple_choice",
      score: 3.6,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "10. <출력 예시>와 같이 출력하고자 할 때 A에 들어갈 내용으로 가장 적절한 것은? [3.6점]",
      passage: `1 print("이 또한 A 지나가리라")\n\n<출력 예시>\n이 또한\n지나가리라`,
      options: [
        "① //",
        "② \\n",
        "③ \"\\n\"",
        "④ \"정\" \"보\"",
        "⑤ sep=\"\""
      ],
      correctAnswer: 1,
      explanation: "하나의 문자열 데이터 안에서 줄바꿈을 수행하려면 이스케이프 문자(Escape character)인 개행 문자 `\\n`을 사용해야 합니다. 따라서 `\"이 또한 \\n 지나가리라\"`와 같이 작성해야 두 줄로 나뉘어 출력됩니다."
    },
    {
      questionNum: 11,
      type: "multiple_choice",
      score: 3.9,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "11. 프로그램의 실행 결과로 가장 적절한 것은? [3.9점]",
      passage: `1 print("A", "B", sep="-")`,
      options: [
        "① AB",
        "② A B",
        "③ AB-",
        "④ A-B",
        "⑤ A=B"
      ],
      correctAnswer: 3,
      explanation: "`print()` 함수 안에서 여러 인자를 쉼표(`,`)로 나열하여 출력할 때, 인자 사이사이에 들어갈 구분자(separator)를 `sep` 속성으로 지정할 수 있습니다. `sep=\"-\"`로 지정했으므로 \"A\"와 \"B\" 사이에 하이픈이 들어가 'A-B'가 출력됩니다."
    },
    {
      questionNum: 12,
      type: "multiple_choice",
      score: 4.4,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "12. 프로그램의 실행 결과로 가장 적절한 것은? [4.4점]",
      passage: `1 print(1, 2, sep="*", end="!")\n2 print(3)`,
      options: [
        "① 12*!3",
        "② 1*2!3",
        "③ 1*23!",
        "④ 1*2!\n3",
        "⑤ 1*2\n3!"
      ],
      correctAnswer: 1,
      explanation: "첫 번째 줄에서 `1`과 `2` 사이에 구분자 `*`를 넣어 `1*2`를 출력하고, 출력이 끝난 후 줄바꿈 대신 `end=\"!\"`에 의해 `!`를 덧붙입니다. 그 결과 현재까지 `1*2!`가 출력되며 커서는 같은 줄에 있습니다. 두 번째 줄에서 `3`을 출력하므로 이어서 `3`이 붙어 최종적으로 `1*2!3`이 출력됩니다."
    },
    {
      questionNum: 13,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "13. 프로그램의 실행 결과로 가장 적절한 것은? [4.1점]",
      passage: `1 print(("2"+5)*3)`,
      options: [
        "① 21",
        "② 25*3",
        "③ 2+5*3",
        "④ 252525",
        "⑤ 오류가 발생한다."
      ],
      correctAnswer: 4,
      explanation: "파이썬에서는 데이터 타입이 다른 문자열(`\"2\"`)과 정수(`5`)를 `+` 연산자로 직접 더할 수 없습니다. 문자열 결합이나 산술 덧셈 중 어느 것을 수행할지 알 수 없어 `TypeError`가 발생합니다."
    },
    {
      questionNum: 14,
      type: "multiple_choice",
      score: 4.0,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "14. 프로그램 실행 시 입력값에 따른 결과로 가장 적절한 것은? [4.0점]",
      passage: `year=int(input())\nif year%10==0 or year%10==5:\n    print("월요일에 접종 가능합니다.")\nif year%10==1 or year%10==6:\n    print("화요일에 접종 가능합니다.")\nif year%10==2 or year%10==7:\n    print("수요일에 접종 가능합니다.")\nif year%10==3 or year%10==8:\n    print("목요일에 접종 가능합니다.")\nif year%10==4 or year%10==9:\n    print("금요일에 접종 가능합니다.")\n#입력값은 2026`,
      options: [
        "① 월요일에 접종 가능합니다.",
        "② 화요일에 접종 가능합니다.",
        "③ 수요일에 접종 가능합니다.",
        "④ 목요일에 접종 가능합니다.",
        "⑤ 금요일에 접종 가능합니다."
      ],
      correctAnswer: 1,
      explanation: "입력값 `year`는 정수 2026입니다. `2026 % 10`을 계산하면 나머지는 6이 됩니다. 여러 `if` 문 중에서 `year%10==6` 조건이 참(True)이 되는 두 번째 블록이 실행되어 \"화요일에 접종 가능합니다.\"가 출력됩니다."
    },
    {
      questionNum: 15,
      type: "multiple_choice",
      score: 4.4,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "15. 프로그램의 실행 결과로 가장 적절한 것은? [4.4점]",
      passage: `1 a=[10,20,30]\n2 a.append(40)\n3 a[3]=50\n4 print(a)`,
      options: [
        "① [10, 20, 30, 50]",
        "② [10, 20, 40, 30]",
        "③ [10, 20, 30, 40]",
        "④ [10, 20, 30, 50] (수정된 배열)",
        "⑤ [10, 20, 40, 50]"
      ],
      correctAnswer: 3,
      explanation: "1번 줄에서 리스트 `a`는 `[10, 20, 30]`입니다. 2번 줄 `a.append(40)`을 실행하면 맨 끝에 40이 추가되어 `a = [10, 20, 30, 40]`이 됩니다. 3번 줄 `a[3] = 50`에서 인덱스 3의 위치(즉 4번째 원소인 40)의 값이 50으로 수정됩니다. 따라서 최종적으로 `[10, 20, 30, 50]`이 출력됩니다. (선택지 ④에 해당)"
    },
    {
      questionNum: 16,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "16. 프로그램 실행 시 입력값에 따른 결과로 가장 적절한 것은? [4.2점]",
      passage: `1 m=input().split()\n2 print(m[2]+m[4])\n#입력값은 2 9 -1 7 4 1`,
      options: [
        "① -14",
        "② 24",
        "③ 16",
        "④ 3",
        "⑤ 97"
      ],
      correctAnswer: 0,
      explanation: "`input().split()`은 입력된 문자열을 공백을 기준으로 쪼개어 '문자열 리스트'로 반환합니다. 입력값이 `2 9 -1 7 4 1`이므로 리스트 `m = ['2', '9', '-1', '7', '4', '1']`이 됩니다. `m[2]`는 `'-1'`, `m[4]`는 `'4'`입니다. 두 문자열을 `+` 기호로 더하면 숫자 덧셈이 아닌 글자 이어붙이기가 되어 `'-14'`가 출력됩니다."
    },
    {
      questionNum: 17,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "17. 프로그램의 실행 결과로 가장 적절한 것은? [4.3점]",
      passage: `1 a=[100,"ABC",95,"!",14]\n2 a.insert(2,100)\n3 a.remove(100)\n4 print(a[2])`,
      options: [
        "① !",
        "② 14",
        "③ 95",
        "④ 100",
        "⑤ ABC"
      ],
      correctAnswer: 2,
      explanation: "초기 리스트는 `a = [100, \"ABC\", 95, \"!\", 14]`입니다.\n2번 줄 `a.insert(2, 100)`에 의해 인덱스 2 자리에 100이 삽입되어 `a = [100, \"ABC\", 100, 95, \"!\", 14]`가 됩니다.\n3번 줄 `a.remove(100)`은 리스트에서 '처음 발견되는' 100을 삭제합니다. 즉 맨 앞 인덱스 0의 100이 지워져 `a = [\"ABC\", 100, 95, \"!\", 14]`가 됩니다.\n4번 줄 `print(a[2])`는 삭제 후 리스트의 인덱스 2의 값(세 번째 원소)을 출력하므로 `95`가 출력됩니다."
    },
    {
      questionNum: 18,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "18. 프로그램 실행 시 입력값에 따른 결과로 가장 적절한 것을 <보기>에서 있는 대로 고른 것은? [4.1점]",
      passage: `1 m=input()\n2 if m=="짜장면":\n3     print("먹고 싶다")\n4 elif m=="짬뽕":\n5     print("먹지 말까")\n6 else: print("참아 보자")\n#입력값은 탕수육\n\n<보기>\nㄱ. 먹고 싶다 가 출력된다.\nㄴ. 먹지 말까 가 출력된다.\nㄷ. 참아 보자 가 출력된다.`,
      options: [
        "① ㄱ",
        "② ㄴ",
        "③ ㄷ",
        "④ ㄱ, ㄴ",
        "⑤ ㄱ, ㄴ, ㄷ"
      ],
      correctAnswer: 2,
      explanation: "입력값 `m`이 \"탕수육\"입니다. 첫 번째 `if` 조건(\"짜장면\")과 두 번째 `elif` 조건(\"짬뽕\") 모두 거짓이므로, 마지막 `else` 구문이 실행되어 \"참아 보자\"가 출력됩니다. 따라서 올바른 보기는 ㄷ뿐입니다."
    },
    {
      questionNum: 19,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "19. 프로그램의 실행 결과로 가장 적절한 것은? [4.1점]",
      passage: `1 x=10\n2 if x!=10:\n3     print("맞나요?")`,
      options: [
        "① 오류가 발생한다.",
        "② True 가 출력된다.",
        "③ False 가 출력된다.",
        "④ 맞나요? 가 출력된다.",
        "⑤ 아무것도 출력되지 않는다."
      ],
      correctAnswer: 4,
      explanation: "`x`에 10이 저장되어 있습니다. `if x != 10:` 의 조건식 `10 != 10`은 거짓(False)입니다. 조건이 거짓이므로 `if` 블록 안의 `print` 문은 실행되지 않고, 이어지는 코드가 없으므로 아무것도 출력되지 않고 프로그램이 종료됩니다."
    },
    {
      questionNum: 20,
      type: "multiple_choice",
      score: 4.3,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "20. 프로그램의 실행 결과로 가장 적절한 것을 <보기>에서 있는 대로 고른 것은? [4.3점]",
      passage: `1 a=int(input())\n2 if a>0:\n3     if a%2!=0:\n4         print(a)\n\n<보기>\nㄱ. 5를 입력한 경우 5 가 출력된다.\nㄴ. -3을 입력한 경우 -3 이 출력된다.\nㄷ. 100을 입력한 경우 아무것도 출력되지 않는다.`,
      options: [
        "① ㄱ",
        "② ㄴ",
        "③ ㄷ",
        "④ ㄱ, ㄴ",
        "⑤ ㄱ, ㄷ"
      ],
      correctAnswer: 4,
      explanation: "이 프로그램은 입력받은 정수가 0보다 크고(양수), 2로 나누어 떨어지지 않는 경우(홀수)일 때만 해당 값을 출력하는 중첩 `if`문입니다.\nㄱ. 5는 양수이고 홀수이므로 조건이 모두 참이 되어 5가 정상적으로 출력됩니다. (O)\nㄴ. -3은 양수가 아니므로 바깥쪽 `if`문부터 거짓이 되어 아무것도 출력되지 않습니다. (X)\nㄷ. 100은 양수이지만 짝수이므로 안쪽 `if`문(홀수 검사)이 거짓이 되어 아무것도 출력되지 않습니다. (O)\n따라서 올바른 것은 ㄱ, ㄷ입니다."
    },
    {
      questionNum: 21,
      type: "multiple_choice",
      score: 4.5,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "21. 프로그램의 실행 결과로 가장 적절한 것은? [4.5점]",
      passage: `1 sum=0\n2 for i in [2,4,-1,8]:\n3     sum+=i\n4 print(sum)`,
      options: [
        "① 4",
        "② 8",
        "③ 10",
        "④ 13",
        "⑤ 오류가 발생한다."
      ],
      correctAnswer: 3,
      explanation: "`for` 반복문이 리스트 안의 각 요소 `2`, `4`, `-1`, `8`을 차례대로 `i`에 넣어가며 누적 변수 `sum`에 더합니다(`sum += i`).\n전체 반복이 끝난 후 `sum`의 값은 $2 + 4 + (-1) + 8 = 13$이 되며, 이 값이 최종적으로 출력됩니다."
    },
    {
      questionNum: 22,
      type: "multiple_choice",
      score: 4.1,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "22. 프로그램을 실행했을 때 결과로 가장 적절한 것을 <보기>에서 있는 대로 고른 것은? [4.1점]",
      passage: `1 for i in range(7,1,-2):\n2     print("안녕")\n\n<보기>\nㄱ. 4번 반복 실행 된다.\nㄴ. 안녕 안녕 안녕 안녕 이 출력된다.\nㄷ. 안녕\\n안녕\\n안녕 이 출력된다. (세 줄에 걸쳐 출력)`,
      options: [
        "① ㄱ",
        "② ㄴ",
        "③ ㄷ",
        "④ ㄱ, ㄴ",
        "⑤ ㄱ, ㄷ"
      ],
      correctAnswer: 2,
      explanation: "`range(7, 1, -2)` 함수는 7부터 시작해서 -2씩 감소시키며, 1은 포함하지 않는 숫자 시퀀스를 생성합니다. 따라서 생성되는 숫자는 `7, 5, 3`으로 총 3개입니다. 반복문이 3번 실행되므로 '안녕'은 3번 출력됩니다. 또한 `print()` 함수는 매번 줄바꿈을 수행하므로 세 줄에 걸쳐 출력됩니다. 따라서 ㄷ만 옳습니다."
    },
    {
      questionNum: 23,
      type: "multiple_choice",
      score: 4.2,
      linkedPassageId: null,
      imageUrl: null,
      questionText: "23. 프로그램의 실행 결과가 <출력 예시>와 같을 때 A에 들어갈 명령문으로 가장 적절한 것은? [4.2점]",
      passage: `1 for i in A:\n2     print("*" * i)\n\n<출력 예시>\n**\n****\n******`,
      options: [
        "① range(1,7,2)",
        "② range(2,4,6)",
        "③ range(2,6,2)",
        "④ range(2,7,2)",
        "⑤ range(2,12,3)"
      ],
      correctAnswer: 3,
      explanation: "출력된 별의 개수를 보면 순서대로 2개, 4개, 6개입니다. 파이썬에서 `\"*\" * i`는 별표를 `i`번 반복한 문자열을 만듭니다. 따라서 `i`의 값이 `2, 4, 6`의 순서로 생성되어야 합니다. `range(2, 7, 2)`를 사용하면 2부터 시작해 2씩 증가하며 7미만까지(즉, 6까지) 2, 4, 6을 생성하므로 가장 알맞은 명령문입니다. (참고: `range(2, 8, 2)` 등도 가능하지만 보기 중에는 ④번이 유일하게 정답에 해당합니다.)"
    },
    {
      questionNum: 24,
      type: "multiple_choice",
      score: 4.5,
      linkedPassageId: "q24_25_passage",
      imageUrl: null,
      questionText: "24. 위의 프로그램을 작성 시 (가)에 들어갈 입력 명령문으로 가장 적절한 것은? [4.5점]",
      passage: null,
      options: [
        "① a=input()",
        "② a=int(input())",
        "③ a=input().split()",
        "④ a=map(int,input().split())",
        "⑤ a=list(map(int,input().split()))"
      ],
      correctAnswer: 4,
      explanation: "여러 개의 숫자들을 한 줄에 공백을 기준으로 입력받아 숫자로 구성된 '리스트'로 저장해야 합니다. `input().split()`으로 문자열을 쪼갠 뒤, `map(int, ...)`을 이용해 각 조각을 정수로 변환합니다. 마지막으로 그 결과 맵 객체를 `list()` 함수로 묶어주어야 숫자 리스트 `a`가 생성됩니다. 따라서 ⑤번 코드가 적절합니다."
    },
    {
      questionNum: 25,
      type: "multiple_choice",
      score: 4.5,
      linkedPassageId: "q24_25_passage",
      imageUrl: null,
      questionText: "25. 위의 프로그램을 작성 시 (나)에 들어갈 출력 명령문으로 가장 적절한 것은? [4.5점]",
      passage: null,
      options: [
        "① print(-4)",
        "② print(a)",
        "③ print(-4*7)",
        "④ print(a[0]*a[1])",
        "⑤ print(a[1]*a[2])"
      ],
      correctAnswer: 3,
      explanation: "입력된 값 중 '첫 번째'로 입력된 값과 '두 번째'로 입력된 값의 곱을 연산하여 출력해야 합니다. 리스트의 인덱스는 0부터 시작하므로, 첫 번째 값은 `a[0]`, 두 번째 값은 `a[1]`입니다. 따라서 이들의 곱을 출력하는 명령어는 `print(a[0]*a[1])`이 되어야 합니다. 입력값이 바뀌면 변동되어야 하므로 특정 숫자를 고정해서 적은 식은 조건 6에 위배됩니다."
    }
  ]
};