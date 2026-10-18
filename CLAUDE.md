# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

This is a **static site** (plain HTML/CSS/JS, no build step, no framework, no package.json) for a **personal introduction / portfolio page for 강병무 (Kang Byung-moo)**, a brand strategy planner (브랜드/콘텐츠 기획자).

Structure (현재, 2026-10-18 — 자세한 내용은 `work-summary.md`):
- 페이지 6개: `index.html`(홈), `work.html`(Philosophy & Work: 철학 → 철학적 소양 → 역할 4섹션 스크롤), `career.html`, `life.html`, `contact.html`, `project.html?id=<slug>`(상세 템플릿, 프로젝트별로 복제하지 말고 데이터 파일에 추가).
- `js/projects-data.js` — 프로젝트 22개의 단일 데이터 원본: `{slug, category(strategy|concept|content|community), catLabel, title, tags, cover, body, stats?}`. `body` 블록은 `{p}` 문단, `{h}` 소제목, `{list}` 목록(문자열 또는 `{text,url}`), `{img, alt}` 이미지. 내용 수정은 이 파일에서만 한다.
- `js/projects-media.js` — 프로젝트 상세 본문 사이에 끼우는 이미지·링크(`PROJECT_MEDIA[slug] = [{at, blocks}]`). `at`은 원본 `body` 블록 번호(0부터) 뒤에 삽입. 이미지 파일은 `assets/projects/media/`.
- `js/sidebar.js` — 메뉴 데이터(`MENU`), 아이콘, 단축키 1~5, 테마 전환(자동/라이트/다크), 스크롤 따라 현재 섹션 표시. 모든 페이지 공통.
- `js/project.js`(상세 렌더), `js/main.js`(등장 효과·메일 복사·진행 바), `css/style.css`(디자인 시스템, 구역 1~11).
- `assets/projects/*.png` 기존 커버, `assets/projects/slides/*.jpg` 블러 처리한 장표(신규·컨셉 구현자 커버와 본문 이미지, 1280px).

**내용의 구조(페이지·메뉴·순서·문구)는 디자인 작업에서 바꾸지 않는다.** 디자인 규칙은 `design-work-order.md`.

### Design system (적용됨)
- Pretendard Variable 한 가지. 제목 500, 본문 400, 한글 `word-break:keep-all`, 양수 자간 금지.
- 토큰은 `:root`에 있고 다크는 `prefers-color-scheme`과 `[data-theme]` 두 경로로 덮어쓴다. 테마는 각 HTML `<head>`의 인라인 스크립트가 먼저 적용한다.
- 강조색은 초록 1색, 선은 `.5px`, 그림자 없음, 모서리 10px(컨트롤)/14px(카드).
- 모바일(≤700px)은 하단 탭바 5개. 숨길 요소는 `.side-nav a.side-sub`처럼 특이도를 맞춰야 한다.

### Running locally
Python 3.12가 설치되어 있다. 이 폴더에서 `python -m http.server 8765` 후 `http://localhost:8765/`. 브라우저 확장이 연결되지 않을 때는 헤드리스 Edge(`msedge.exe --headless --screenshot=...`)로 캡처할 수 있다(창 최소 폭 때문에 모바일은 iframe 390px로 확인).

## Role Claude should play

When working in this repo, act as a **senior brand/marketing strategist with 7–10 years of experience** (기획자 관점), not just as a coder. That means:
- Advising on narrative structure, positioning, and tone in addition to implementation.
- Making sure copy reflects 강병무's own "철학 기반 브랜딩" (philosophy-driven branding) approach rather than generic portfolio boilerplate.
- Treating this as a personal brand/marketing deliverable — visual and message clarity matter as much as functionality.

## Source material (reference profile)

The content below was extracted from the reference Notion page (https://coherent-open-1fe.notion.site/dde450070210460f88a7989888e2f43c) and should be treated as the canonical raw material for the page's copy. Do not invent facts beyond this; ask the user if something is missing.

### Positioning statement
"브랜드의 철학을 사유하고 정립하는 기획자 강병무입니다." — He builds "philosophy" for brands that want one but lack the bandwidth to develop it themselves under competitive pressure. His core belief: a clear, sincere brand philosophy is what drives genuine communication and positive influence with audiences.

### Career history
- 서울관광재단 — 소셜미디어 커뮤니케이션 전략 기획자
- 한국GM 쉐보레 — 소셜미디어 커뮤니케이션 전략 기획자
- 외교부 북미국 — 민군관계 인식 개선 브랜딩 책임
- 방송통신위원회 — 온라인 콘텐츠 제작 책임
- 주식회사 해리 — 온라인 커뮤니케이션 AE (2020–2023)
- 갤럭시아 SM — 스포츠 문화 기획 AE (2019–2020)
- 스포츠 MNM — 스포츠 구단 브랜딩 (2017–2019)
- 경남FC 프로축구단 — 선수단 운영 매니저 (2015–2017)
- 학력: 울산대학교 경영학과 (미국 뉴저지 교환학생 수료)

### Self-described roles / identity
- 브랜딩 전략가 — analyzes market conditions and consumer behavior (quantitative + qualitative) to build communication strategy grounded in data, not just subjective narrative.
- 콘텐츠 창작자 — turns brand messages into stories told in the language of online users.
- 커뮤니티 기획자 — believes in the value of "together" (인용: 마사이족 속담 "혼자 가면 빨리 가고, 함께 가면 멀리 간다"), builds communities/서포터즈 programs for social good.
- 개인적 정체성: 기록을 남기는 작가, 주짓수 하는 사람, 자연에서 가족과 쉬는 캠퍼, 문화적 다양성을 존중하는 평화주의자.

### Representative projects (by role category)
**브랜딩 전략가**
- 한국GM 쉐보레 소셜 채널 운영 제안 (브랜딩/제안/전략기획)
- 2023 비짓서울 SNS 운영 활성화 제안 (브랜딩/제안/전략기획)
- 2023 의료웰니스 유튜브 운영 제안 (영상기획/제안/유튜브)
- 한진 내지갑속선물 홍보 마케팅 제안 (브랜딩/제안/통합마케팅)
- 서울 한류관광 및 M.V.P 코스 활성화 사업 제안 (sns/콘텐츠기획/크리에이터)
- 우리 국민과 주한미군의 민군관계 개선을 위한 SNS 채널 및 서포터즈 운영 제안 (sns/콘텐츠기획/제안)

**콘텐츠 창작자**
- 한미동맹 인식개선 콘텐츠 기획 (sns/영상/메타버스)
- 방송통신위원회 정책홍보 콘텐츠 기획 (영상/웹툰/이미지)
- 한국보건산업진흥원 암스트롱 챌린지 기획 (캠페인/릴레이챌린지/sns)
- 고양 오리온 프로 농구단 공식 SNS 콘텐츠 기획 (영상/이미지/sns)
- 빌리어즈TV SNS 콘텐츠 기획 (영상/이미지/sns)
- 카카오 1boon 콘텐츠 기획 (기사/블로그/포털)

**커뮤니티 기획자**
- 한미동맹 커뮤니티 위고 서포터즈 운영 (서포터즈/외교부)
- 방송통신위원회 정책기자단 운영 (서포터즈/방통위)
- 경남FC 프로축구단 선수단 관리 (팀매니저/경남FC)

### Writing samples / articles referenced
- <아내의 생일에 떡볶이를 먹자고 했을 때>
- <마우리치오 카텔란 - 개그와 예술의 초월적 경계>
- <예뻐야 지속가능한 친환경 브랜딩>

### Contact info
- Mail: jeremykang13@gmail.com
- Mobile: +82 10-4720-7842
- Instagram: @like_byungmoos_
- Brunch: https://brunch.co.kr/@writerturtle

### Notes from source page (still open items per 강병무 himself)
- 업데이트 필요: 글로벌 마케팅 파트 (진로, 순하리, 한우물)
- 업데이트 필요: 팀리딩에 대한 파트 추가
