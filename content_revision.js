/* ============================================================
   AX-서포터즈 중간활동 쇼케이스 웹북 — 콘텐츠 파일
   ------------------------------------------------------------
   ▷ 이 파일(content.js)만 고치면 화면이 자동으로 바뀝니다.
   ▷ 이미지는 index.html 과 같은 폴더 안에
     assets/ 폴더를 만들어 넣어주세요.
       assets/lectures/   (강의 사진·교안·실습·후기 캡처)
       assets/app/        (앱 화면 캡처)
       assets/studio/     (나만의 AI 회사 화면 캡처)
   ▷ 배열([ ])에 항목을 추가하면 추가한 만큼 화면에 더 나옵니다.
     반대로 지우면 사라집니다. (개수 제한 없음)
   ▷ 아직 이미지를 안 넣었어도 자리표시 박스로 보이니 걱정 마세요.
   ============================================================ */

const CONTENT = {

  /* ── 00. 오프닝 (짧은 문장 1개 + 시작 버튼) ───────────────── */
  opening: {
    lines: [
      "AI, 현장에 착륙하다"
    ],
    button: "START"
  },

  /* ── 01. 표지 ──────────────────────────────────────────── */
  cover: {
    top:   "2026 · 대전세종충청지역본부",     // 표지 상단 텍스트 (빈 문자열로 하면 숨김)
    title: "\"AX 서포터즈 활동 중간보고\"",   // 메인 카피
    sub:   "대전서부지사 김하연",
    foot:  "AI사내강사 활동 · 장기요양 급여이용 가이드 앱 · 나만의 AI 회사"
  },

  /* ── 02. 오늘의 미리보기 ───────────────────────────────── */
  spoiler: {
    title: "중간 보고",
    items: [
      { tag: "지정과제", title: "AI 특강 2회 실시", note: "AX-인권플루언서 · 대전서부지사 청렴실천단" },
      { tag: "개별과제", title: "장기요양급여 이용\n가이드 앱 제작 중", note: "바이브코딩 기반의 모바일 앱" },
      { tag: "보조도구", title: "강의용 앱 · 기록용 전자책\n제작", note: "실습과 기록에 활용" },
      { tag: "확장성과", title: "나만의 AI 회사 구축", note: "강의 · 바이브코딩 · AX 활동을 관리하는 AI 업무공간" }
    ]
  },

  /* ── 03. 지정과제 챕터 ─────────────────────────────────── */
  lectureChapter: {
    kicker: "PART 1 · AI 특강",
    big: ["직접 따라 해보는", "실습형 AI 특강"],
    keywords: []
  },

  lectureOverview: {
    title: ["설명하는 강의보다,", "직접 써보는 강의를 만들었습니다."],
    items: [
      {
        label: "대상",
        text: ["AX-인권플루언서", "대전서부지사 청렴실천단"]
      },
      {
        label: "목적",
        text: ["AI를 업무에 직접 써보는 경험 제공"]
      },
      {
        label: "내용",
        text: ["Gemini · Google Flow · Canva · 프롬프트 · 맞춤설정"]
      },
      {
        label: "방식",
        text: ["교육생이 직접 적용해보는 참여형 실습"]
      }
    ]
  },

  /* ── 04. AI 특강 현장 사진 ─────────────────────────────── */
  lecturePhotoSections: [
    {
      title: "AX-인권플루언서 특강",
      subtitle: "강의 현장 스케치",
      sectionTitle: "강의 스케치",
      images: [
        { src: "assets/lectures/ax-01.jpg" },
        { src: "assets/lectures/ax-02.jpg" }
      ]
    },
    {
      title: "대전서부지사 청렴실천단 특강",
      subtitle: "강의 현장 스케치",
      sectionTitle: "강의 스케치",
      images: [
        { src: "assets/lectures/west-01.jpg?v=2" },
        { src: "assets/lectures/west-02.jpg" }
      ]
    }
  ],

  /* ── 05. 강의 교안 / 실습 결과물 / 후기 ────────────────── */
  lectureMaterials: [
    { src: "assets/lectures/material-ax-01.png" },
    { src: "assets/lectures/material-ax-02.png" },
    { src: "assets/lectures/material-west-01.png" },
    { src: "assets/lectures/material-west-02.png" }
  ],
  lecturePractice: [
    { src: "assets/lectures/practice-ax-01.png" },
    { src: "assets/lectures/practice-ax-02.png" },
    { src: "assets/lectures/practice-west-02.png?v=2" }
  ],
  lectureReviews: [            // 후기 텍스트 (원하는 만큼 추가/삭제)
  ],
  lectureReviewImages: [       // 후기 캡처 이미지
  ],
  lectureReviewProofImages: [
    { src: "assets/lectures/review-difficulty.png", label: "매우 쉽다 40%, 쉽다 30%, 적절했다 30%" },
    { src: "assets/lectures/review-comments.png", label: "1, 2차 특강 교육생 후기 총 33건" }
  ],
  lectureReviewDifficulty: [
    { label: "매우 쉽다", value: "8명", percent: "40%" },
    { label: "쉽다", value: "6명", percent: "30%" },
    { label: "적절했다", value: "6명", percent: "30%" },
    { label: "어렵다", value: "0명", percent: "0%" }
  ],
  lectureReviewCards: [
    "정말 만족한 강의였습니다. AI로 홍보자료를 만들고 싶으나 혼자서 힘든 부분을 조금이나마 해소할 수 있었던 것 같습니다. 또 듣고싶어요!",
    "공단 들어와서 이렇게 집중이 잘되고 유익한 강의가 없었습니다.. 딕션과 발성도 너무 좋으시고 에너지 가득해서 강의 듣는 내내 좋았습니다:)",
    "강사님이 열정적이셔서 저도 열심히 수업을 들을 수 있었습니다 ! 덕분에 지사 돌아가서 어떻게 활용하면 좋을지 아이디어 얻고 갑니다 !",
    "AI는 그냥 궁금한거 물어보기만 했지 이런식으로 활용할 줄 몰랐는데 대리님 덕분에 잘 활용할거같습니다!",
    "ai 멀고도 험한길이라는 생각이 순삭바뀜 바이브코딩강의듣고 아이디어도 얻었는데 오늘강의는 그 아이디어를 활용할수 있는 수단이 되었네요",
    "열정 만렙 대리님 . 대전서부지사 연예인으로 임명합니다"
  ],
  lectureReviewHighlights: [
    ["AI로 홍보자료", "부담을 해소"],
    ["집중이 잘되고 유익한 강의", "딕션과 발성"],
    ["아이디어 얻고 갑니다"],
    ["AI", "잘 활용할거같습니다"],
    ["생각이 순삭바뀜", "아이디어", "활용할수 있는 수단"],
    ["대전서부지사 연예인"]
  ],
  lectureReviewFootnote: "네이버 설문 응답 일부 발췌",

  /* ── 06. 개별과제 챕터 ─────────────────────────────────── */
  appChapter: {
    kicker: "PART 2 · 개별과제",
    big: ["장기요양급여 이용", "가이드 앱 제작"]
  },

  /* ── 07. 왜 앱이 필요한가 ──────────────────────────────── */
  appWhy: {
    big: ["설명회가 끝난 뒤에도,", "보호자가 다시 확인할 수 있게."],
    bookImages: [
      { src: "assets/app/book-guide-01.png" },
      { src: "assets/app/book-guide-02.png" },
      { src: "assets/app/book-guide-03.png" }
    ],
    painTitle: "기존 급여이용안내 책자의 단점",
    pains: ["글씨가 작음", "내용이 많음", "원하는 부분을\n찾기 어려움"],
    bridge: "그래서,\n책자보다 쉬운 확인 방법이 필요했습니다.",
    effects: [
      { title: "보호자는 다시 확인하고", note: "설명회 이후 필요한 내용을 휴대폰으로 확인" },
      { title: "간단한 문의는 앱에서 해결하고", note: "자주 묻는 내용은 직접 찾아볼 수 있게" },
      { title: "직원은 반복 안내를 줄이고", note: "단순 문의 응대 부담 완화" }
    ]
  },

  /* ── 08. 앱 화면 미리보기 ──────────────────────────────── */
  appPreview: {
    big: ["앱 화면 미리보기"],
    note: "",
    buttonLabel: "앱 열기",
    link: "https://1023am0645-pixel.github.io/longtermcare-guide/",
    images: [
      { src: "assets/app/app-01.png" },
      { src: "assets/app/app-02.png" },
      { src: "assets/app/app-03.png" },
      { src: "assets/app/app-04.png" }
    ]
  },

  /* ── 08-1. 기존 장기요양 기관찾기 사이트 화면 ───────────── */
  longtermSite: {
    title: "",
    image: { src: "assets/longterm/longtermcare.png" }
  },

  /* ── 08-2. 장기요양 앱 확장 계획 ───────────────────────── */
  appExpansion: {
    label: "",
    title: "다음 단계",
    sub: ["하나의 안내 앱을 넘어, 이용 과정 전체로."],
    apps: [
      {
        badge: "후속 제작 예정",
        title: "장기요양 기관찾기 앱",
        desc: "급여종류·지역으로 장기요양기관을 쉽게 찾는 앱.",
        keywords: ["급여종류 선택", "지역 기반 검색", "기관 정보 확인"],
        images: [
          { src: "assets/app/expansion/finder-main.png", caption: "급여종류 선택 화면" },
          { src: "assets/app/expansion/finder-results.png", caption: "방문요양 기관 검색 결과" }
        ]
      },
      {
        badge: "후속 제작 예정",
        title: "장기요양 인정절차 현황조회 앱",
        desc: "인정신청부터 등급판정까지, 진행 상황을 단계별로 조회하는 앱.",
        keywords: ["인정신청 접수", "인정조사", "등급판정 결과 확인"],
        images: [
          { src: "assets/app/expansion/status-concept.svg" }
        ]
      }
    ],
    footer: []
  },

  /* ── 09. 확장성과 챕터 ─────────────────────────────────── */
  studioChapter: {
    kicker: "AI STUDIO",
    big: ["나만의 AI 회사 구축"],
    sub: "강의 · 바이브코딩 · AX 활동을 관리하는 AI 업무공간"
  },

  /* ── 10. 나만의 AI 회사가 관리하는 것 ───────────────────── */
  studio: {
    statusKicker: "필요했던 것",
    statusTitle: "강의가 끝난 뒤에도,\n돌아보고 점검하는 시간이 필요했습니다.",
    reasonTitle: "나만의 AI 회사를 만들었습니다.",
    workKicker: "나만의 AI 회사",
    workTitle: "HA:YEON AI STUDIO",
    workSub: "이 공간이 하는 일",
    problems: [
      "복기와 개선점 정리가 수작업으로 반복됨",
      "후기 분석과 자가점검에 시간이 오래 걸림",
      "강의·앱·활동 기록이 한곳에 쌓이지 않음"
    ],
    solutionLabel: "나만의 AI 회사",
    solutionSub: "운영 기반 마련",
    reasonText: "강의와 AX 활동을 한 번 하고 끝내지 않고, 기록하고 분석하며 다음 강의로 이어가기 위한 개인 AI 업무공간입니다.",
    reasonImage: { src: "assets/studio/studio-reason.png", caption: "HA:YEON AI STUDIO" },
    manages: ["강의 기획과 교안 제작","활동 기록과 후기 분석","결과보고와 성과 정리","제작 앱 점검과 관리"],
    assistNote: ["기록하고, 분석하고, 다음 강의로 이어갈 관리 흐름이 필요했습니다."],
    screens: [
      { src: "assets/studio/studio-01.png", caption: "HA:YEON AI STUDIO" }
    ]
  },

  /* ── 11. 앞으로 (체크리스트) ───────────────────────────── */
  next: {
    title: "레벨업을 위한 체크리스트",
    heading: "",
    items: [
      "장기요양 급여이용 가이드 앱 화면 고도화",
      "강의 기록·후기 아카이브 정리",
      "바이브코딩 AI 특강 기획",
      "HA:YEON AI STUDIO 운영 고도화"
    ]
  },

  /* ── 12. 마무리 ────────────────────────────────────────── */
  closing: {
    lines: [
      "이번 AX-서포터즈 활동은",
      "AI를 배우는 데서 멈추지 않고",
      "직원에게는 업무도구로,",
      "국민에게는 더 쉬운 안내수단으로",
      "이어갈 가능성을 확인하는 과정이었습니다.",
      "남은 기간에는",
      "개인의 활용 경험에 머무르지 않고,",
      "현장에서 쓰일 수 있는 결과물로",
      "더 구체화해가겠습니다."
    ]
  },

  /* ── 13. 마지막 페이지 ───────────────────────────────── */
  finale: {
    kicker: "",
    copy: "AI, 착륙 완료.",
    title: "감사합니다",
    sub: "대전서부지사 김하연"
  }
};
