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

  /* ── 04. AI 특강 현장 사진 ─────────────────────────────── */
  lecturePhotoSections: [
    {
      title: "강의 현장 스케치",
      subtitle: "AX-인권플루언서 특강",
      images: [
        { src: "assets/lectures/ax-01.jpg" },
        { src: "assets/lectures/ax-02.jpg" }
      ]
    },
    {
      title: "강의 현장 스케치",
      subtitle: "대전서부지사 청렴실천단 특강",
      images: [
        { src: "assets/lectures/west-01.jpg" },
        { src: "assets/lectures/west-02.jpg" }
      ]
    }
  ],

  /* ── 05. 강의 교안 / 실습 결과물 / 후기 ────────────────── */
  lectureMaterials: [
    { src: "assets/lectures/material-ax-01.jpg" },
    { src: "assets/lectures/material-ax-02.jpg" },
    { src: "assets/lectures/material-west-01.jpg" },
    { src: "assets/lectures/material-west-02.jpg" }
  ],
  lecturePractice: [
    { src: "assets/lectures/practice-ax-01.jpg" },
    { src: "assets/lectures/practice-ax-02.jpg" },
    { src: "assets/lectures/practice-west-01.jpg" },
    { src: "assets/lectures/practice-west-02.jpg" }
  ],
  lectureReviews: [            // 후기 텍스트 (원하는 만큼 추가/삭제)
  ],
  lectureReviewImages: [       // 후기 캡처 이미지
    { src: "assets/lectures/review-ax-01.jpg" },
    { src: "assets/lectures/review-ax-02.jpg" },
    { src: "assets/lectures/review-west-01.jpg" },
    { src: "assets/lectures/review-west-02.jpg" }
  ],
  lectureReviewProofImages: [
    { src: "assets/lectures/review-proof-ax-01.png", label: "AX-인권플루언서 특강" },
    { src: "assets/lectures/review-proof-ax-02.png", label: "AX-인권플루언서 특강" },
    { src: "assets/lectures/review-proof-west-01.png", label: "대전서부지사 청렴실천단 특강" }
  ],
  lectureReviewCards: [
    "새로운 AI 도구를 알게 되었고, 앞으로 활용해보고 싶다는 반응",
    "실습형 강의로 AI 활용이 더 쉽게 느껴졌다는 반응",
    "바이브코딩 아이디어가 실제 업무 활용 수단으로 연결되었다는 반응",
    "강사의 리드와 진행 방식이 좋았다는 반응"
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
      { src: "assets/app/book-guide-01.jpg" },
      { src: "assets/app/book-guide-02.jpg" },
      { src: "assets/app/book-guide-03.jpg" }
    ],
    painTitle: "기존 급여이용안내 책자의 단점",
    pains: ["글씨가 작음", "내용이 많음", "원하는 부분을\n찾기 어려움"],
    bridge: "그래서,\n책자보다 쉬운 확인 방법이 필요했습니다.",
    effects: [
      { title: "보호자 확인은 쉽게", note: "필요한 정보를 휴대폰으로 확인" },
      { title: "기본 문의는 줄이고", note: "필요한 정보는 앱에서 바로 확인" },
      { title: "단순 문의를 줄여", note: "직원 업무 부담 완화" }
    ]
  },

  /* ── 08. 앱 화면 미리보기 ──────────────────────────────── */
  appPreview: {
    big: ["앱 화면 미리보기"],
    note: "",
    buttonLabel: "앱 열기",
    link: "https://example.com",
    images: [
      { src: "assets/app/app-01.jpg", caption: "급여이용 절차" },
      { src: "assets/app/app-02.jpg", caption: "급여 종류 안내" },
      { src: "assets/app/app-03.jpg", caption: "자주 묻는 질문" },
      { src: "assets/app/app-04.jpg", caption: "보호자 체크리스트" }
    ]
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
    reasonImage: { src: "assets/studio/studio-reason.jpg", caption: "HA:YEON AI STUDIO" },
    manages: ["강의 기획과 교안 제작","활동 기록과 후기 분석","결과보고와 성과 정리","제작 앱 점검과 관리"],
    assistNote: ["기록하고, 분석하고, 다음 강의로 이어갈 관리 흐름이 필요했습니다."],
    screens: [
      { src: "assets/studio/studio-01.jpg", caption: "HA:YEON AI STUDIO" }
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
      "AI를 배우는 데서 멈추지 않고,",
      "직원에게는 업무도구로,",
      "국민에게는 더 쉬운 안내수단으로 연결해보았습니다.",
      "남은 기간에는",
      "개인의 활용 경험을 넘어,",
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
