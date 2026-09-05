# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

This is a **static site** (plain HTML/CSS/JS, no build step, no framework, no package.json) for a **personal introduction / portfolio page for 강병무 (Kang Byung-moo)**, a brand strategy planner (브랜드/콘텐츠 기획자).

Structure:
- `index.html` — single-page site, all sections (hero, 철학, 일하는 방식 tabs, 프로젝트 filterable grid, 경력 timeline, 사람/person, 연락처). Each project card is an `<a href="project.html?id=<slug>">` linking to its detail page.
- `project.html` — reusable detail-page template shared by all 15 projects; reads `?id=<slug>` from the URL and renders that project's content client-side (title, tags, cover image, rich body, optional stat cards, prev/next pagination). Do not duplicate this file per project — add new projects to the data file instead.
- `js/projects-data.js` — the single source of truth for all project detail content: a `PROJECTS` array of `{slug, category, catLabel, title, tags, cover, body, stats?}`. `body` is an array of blocks — `{p: "html string"}` (paragraph, inline `<strong>` allowed), `{h: "text"}` (subheading), or `{list: [...]}` (bullet list; items can be plain strings or `{text, url}` for external links). This content was transcribed from the case-study detail pages on the source Notion site (each project card there opens its own sub-page with a fuller write-up) — when 강병무 wants to edit a project's story, edit its entry here, not the HTML.
- `js/project.js` — renders `project.html` from `PROJECTS` based on the `id` query param; also computes prev/next links from array order.
- `css/style.css` — all styling; CSS custom properties at the top (`:root`) define the color/type tokens; detail-page-specific rules are under the "project detail page" comment block.
- `js/main.js` — no dependencies; handles mobile nav toggle, the role tabs (일하는 방식), the project category filter, and a scroll-reveal (`IntersectionObserver`) animation. Loaded on both `index.html` and `project.html`.
- `assets/profile-hero.png` — hero profile photo; `assets/projects/*.png` — one cover image per project card, named by a short English slug (e.g. `chevrolet-social.png`, `wego-supporters.png`). These were captured as screen recaptures from the source Notion page (Notion's image CDN uses signed URLs the browser-automation tooling blocks from direct fetch/download), so resolution is modest (~large enough for the 16:9 project-card crop and the hero's 4:3 crop). If 강병무 provides the original higher-res files later, swap them in under the same filenames.

There is no build/lint/test tooling — it's meant to be deployed as-is (e.g. GitHub Pages, Netlify, Vercel static hosting, Cloudflare Pages).

### Design system
Modern, minimal aesthetic (white/neutral-gray base, not the earlier warm-cream/serif editorial look) — chosen after reviewing a reference Korean design portfolio format the user linked (notefolio.net). Key choices baked into `css/style.css`:
- Font: **Pretendard Variable**, loaded from jsDelivr in `index.html` (`orioncactus/pretendard`) — the standard modern Korean web font. No serif font is used anywhere; headings and body both use `--sans`, differentiated by weight (800 for display headings, 400 for body).
- Palette tokens in `:root`: neutral white/near-black (`--bg`, `--ink`), a refined green `--accent` and a coral `--terracotta` used sparingly for badges/tags/dates, plus soft tints (`--accent-soft`) for pill backgrounds.
- Soft blurred color-blob decorations behind the hero (`.hero::before`/`::after`, radial-gradient circles) for a contemporary touch — keep these subtle (low opacity) rather than the flat saturated shapes seen in the reference.
- Korean typography: `body` has `word-break: keep-all` so line-wraps happen between words, not mid-syllable; prefer letting long Korean headlines wrap naturally rather than hardcoding `<br>` positions, since manual breaks fight the responsive/keep-all flow.

### Running locally
This machine has neither Python nor Node installed, so `python -m http.server` / `npx serve` won't work out of the box. To preview locally, either open `index.html` directly if the browser tooling in use supports `file://` (Chrome's automation extension does not), or spin up a minimal server, e.g. a PowerShell `System.Net.HttpListener` script serving the directory on `localhost`. If Python or Node get installed later, prefer `python -m http.server` or `npx serve` instead.

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
