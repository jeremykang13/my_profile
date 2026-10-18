// 프로젝트 상세 본문에 끼워 넣는 이미지·링크. at: 원본 본문 블록 번호(0부터) 뒤에 삽입.
// 이미지는 Notion 프로젝트 페이지 첨부를 1280px JPEG로 줄여 assets/projects/media/에 둔다.
const PROJECT_MEDIA = {
  "chevrolet-social": [
    { at: 0, blocks: [{ img: "assets/projects/media/chevrolet-social_01.jpg", alt: "쉐보레 제안서 장표: 국내 시장 현황" }] },
    { at: 1, blocks: [{ img: "assets/projects/media/chevrolet-social_02.jpg", alt: "쉐보레 제안서 장표: 소비자 인식 조사" }] },
    { at: 2, blocks: [{ img: "assets/projects/media/chevrolet-social_03.jpg", alt: "쉐보레 제안서 장표: SUV 라인업" }] },
    { at: 3, blocks: [{ img: "assets/projects/media/chevrolet-social_04.jpg", alt: "쉐보레 제안서 장표: Sports Utility Lovers" }, { img: "assets/projects/media/chevrolet-social_05.jpg", alt: "쉐보레 제안서 장표: Shift 2 Chevy" }] },
    { at: 4, blocks: [{ img: "assets/projects/media/chevrolet-social_06.jpg", alt: "쉐보레 제안서 장표: 채널 운영안 1" }, { img: "assets/projects/media/chevrolet-social_07.jpg", alt: "쉐보레 제안서 장표: 채널 운영안 2" }, { img: "assets/projects/media/chevrolet-social_08.jpg", alt: "쉐보레 제안서 장표: 채널 운영안 3" }] },
  ],
  "visitseoul-sns": [
    { at: 0, blocks: [{ gallery: [{ img: "assets/projects/media/visitseoul-sns_01.jpg", alt: "비짓서울 제안서 장표: 시장 환경 1" }, { img: "assets/projects/media/visitseoul-sns_02.jpg", alt: "비짓서울 제안서 장표: 시장 환경 2" }] }] },
    { at: 1, blocks: [{ img: "assets/projects/media/visitseoul-sns_03.jpg", alt: "비짓서울 제안서 장표: 서울관광 커뮤니케이션" }] },
    { at: 3, blocks: [{ img: "assets/projects/media/visitseoul-sns_04.jpg", alt: "비짓서울 제안서 장표: SEOUL YOUNIVERSE" }] },
    { at: 4, blocks: [{ img: "assets/projects/media/visitseoul-sns_05.jpg", alt: "비짓서울 제안서 장표: 채널 운영안 1" }, { img: "assets/projects/media/visitseoul-sns_06.jpg", alt: "비짓서울 제안서 장표: 채널 운영안 2" }, { img: "assets/projects/media/visitseoul-sns_07.jpg", alt: "비짓서울 제안서 장표: 채널 운영안 3" }, { img: "assets/projects/media/visitseoul-sns_08.jpg", alt: "비짓서울 제안서 장표: 채널 운영안 4" }] },
  ],
  "kwellness-youtube": [
    { at: 0, blocks: [{ img: "assets/projects/media/kwellness-youtube_01.jpg", alt: "의료웰니스 제안서 장표: 시장 규모" }] },
    { at: 2, blocks: [{ gallery: [{ img: "assets/projects/media/kwellness-youtube_02.jpg", alt: "의료웰니스 제안서 장표: 선두 국가" }, { img: "assets/projects/media/kwellness-youtube_03.jpg", alt: "의료웰니스 제안서 장표: 한국의 위치" }] }] },
    { at: 7, blocks: [{ gallery: [{ img: "assets/projects/media/kwellness-youtube_04.jpg", alt: "의료웰니스 제안서 장표: 타겟 1" }, { img: "assets/projects/media/kwellness-youtube_05.jpg", alt: "의료웰니스 제안서 장표: 타겟 2" }] }] },
    { at: 8, blocks: [{ img: "assets/projects/media/kwellness-youtube_06.jpg", alt: "의료웰니스 제안서 장표: 운영 로드맵" }] },
  ],
  "hanjin-gift": [
    { at: 2, blocks: [{ img: "assets/projects/media/hanjin-gift_01.jpg", alt: "한진 제안서 장표: 지속가능경영과 CSV" }] },
    { at: 4, blocks: [{ img: "assets/projects/media/hanjin-gift_02.jpg", alt: "한진 제안서 장표: 내지갑속선물" }] },
    { at: 6, blocks: [{ img: "assets/projects/media/hanjin-gift_03.jpg", alt: "한진 제안서 장표: CSV 브랜딩 전략" }] },
    { at: 7, blocks: [{ img: "assets/projects/media/hanjin-gift_04.jpg", alt: "한진 제안서 장표: 스토리서치 1" }, { img: "assets/projects/media/hanjin-gift_05.jpg", alt: "한진 제안서 장표: 스토리서치 2" }, { img: "assets/projects/media/hanjin-gift_06.jpg", alt: "한진 제안서 장표: 스토리서치 3" }] },
    { at: 8, blocks: [{ img: "assets/projects/media/hanjin-gift_07.jpg", alt: "한진 제안서 장표: 통합마케팅 운영안 1" }, { img: "assets/projects/media/hanjin-gift_08.jpg", alt: "한진 제안서 장표: 통합마케팅 운영안 2" }, { img: "assets/projects/media/hanjin-gift_09.jpg", alt: "한진 제안서 장표: 통합마케팅 운영안 3" }, { img: "assets/projects/media/hanjin-gift_10.jpg", alt: "한진 제안서 장표: 통합마케팅 운영안 4" }] },
  ],
  "seoul-hallyu": [
    { at: 2, blocks: [{ gallery: [{ img: "assets/projects/media/seoul-hallyu_01.jpg", alt: "서울 한류관광 제안서 장표: 한류 1" }, { img: "assets/projects/media/seoul-hallyu_02.jpg", alt: "서울 한류관광 제안서 장표: 한류 2" }] }] },
    { at: 3, blocks: [{ img: "assets/projects/media/seoul-hallyu_03.jpg", alt: "서울 한류관광 제안서 장표: Experience Deep 'S'perience" }] },
    { at: 4, blocks: [{ img: "assets/projects/media/seoul-hallyu_04.jpg", alt: "서울 한류관광 제안서 장표: 콘텐츠 제작안 1" }, { img: "assets/projects/media/seoul-hallyu_05.jpg", alt: "서울 한류관광 제안서 장표: 콘텐츠 제작안 2" }, { img: "assets/projects/media/seoul-hallyu_06.jpg", alt: "서울 한류관광 제안서 장표: 콘텐츠 제작안 3" }, { img: "assets/projects/media/seoul-hallyu_07.jpg", alt: "서울 한류관광 제안서 장표: 콘텐츠 제작안 4" }] },
  ],
  "usfk-relations": [
    { at: 1, blocks: [{ img: "assets/projects/media/usfk-relations_01.jpg", alt: "민군관계 제안서 장표: 한미동맹 인식" }] },
    { at: 3, blocks: [{ img: "assets/projects/media/usfk-relations_02.jpg", alt: "민군관계 제안서 장표: HEAR! WE GO" }] },
    { at: 4, blocks: [{ img: "assets/projects/media/usfk-relations_03.jpg", alt: "민군관계 제안서 장표: 채널 운영안 1" }, { img: "assets/projects/media/usfk-relations_04.jpg", alt: "민군관계 제안서 장표: 채널 운영안 2" }, { img: "assets/projects/media/usfk-relations_05.jpg", alt: "민군관계 제안서 장표: 채널 운영안 3" }] },
  ],
  "korea-us-alliance": [
    { at: 8, blocks: [{ list: [{ text: "주한미군 평택 통복시장 체험기 취재 영상", url: "https://youtu.be/zQ3U-Q7v4BY" }] }] },
    { at: 10, blocks: [{ gallery: [{ img: "assets/projects/media/korea-us-alliance_01.jpg", alt: "We Go Plaza 맵 1" }, { img: "assets/projects/media/korea-us-alliance_02.jpg", alt: "We Go Plaza 맵 2" }, { img: "assets/projects/media/korea-us-alliance_03.jpg", alt: "We Go Plaza 맵 3" }] }, { list: [{ text: "We Go Plaza 투어 스케치 영상", url: "https://youtu.be/-Bwx4ldfsNU" }] }] },
  ],
  "kcc-content": [
    { at: 4, blocks: [{ gallery: [{ img: "assets/projects/media/kcc-content_01.jpg", alt: "스팸문자 알바 제로 웹툰 EP01", cap: "EP01" }, { img: "assets/projects/media/kcc-content_02.jpg", alt: "스팸문자 알바 제로 웹툰 EP02", cap: "EP02" }, { img: "assets/projects/media/kcc-content_03.jpg", alt: "스팸문자 알바 제로 웹툰 EP03", cap: "EP03" }] }] },
  ],
  "armstrong-challenge": [
    { at: 2, blocks: [{ img: "assets/projects/media/armstrong-challenge_01.jpg", alt: "암스트롱 챌린지 업로드 가이드" }] },
    { at: 4, blocks: [{ img: "assets/projects/media/armstrong-challenge_02.jpg", alt: "암스트롱 챌린지 서포터즈 선발 계획" }] },
    { at: 5, blocks: [{ gallery: [{ img: "assets/projects/media/armstrong-challenge_03.jpg", alt: "엔터테이너 하하", cap: "엔터테이너 하하" }, { img: "assets/projects/media/armstrong-challenge_04.jpg", alt: "태국 아티스트 Mj Mild, March", cap: "태국 아티스트 Mj Mild, March" }, { img: "assets/projects/media/armstrong-challenge_05.jpg", alt: "아이돌 강승식, 김남주, 전웅", cap: "아이돌 강승식 · 김남주 · 전웅" }, { img: "assets/projects/media/armstrong-challenge_06.jpg", alt: "유튜버 퇴경아 약먹자, 체리혜리, Love Korea", cap: "유튜버 퇴경아 약먹자 · 체리혜리 · Love Korea" }] }] },
  ],
  "goyang-orion": [
    { at: 0, blocks: [{ gallery: [{ img: "assets/projects/media/goyang-orion_01.jpg", alt: "고양 오리온 SNS 콘텐츠 1" }, { img: "assets/projects/media/goyang-orion_02.jpg", alt: "고양 오리온 SNS 콘텐츠 2" }, { img: "assets/projects/media/goyang-orion_03.jpg", alt: "고양 오리온 SNS 콘텐츠 3" }, { img: "assets/projects/media/goyang-orion_04.jpg", alt: "고양 오리온 SNS 콘텐츠 4" }] }] },
  ],
  "billiards-tv": [
    { at: 0, blocks: [{ gallery: [{ img: "assets/projects/media/billiards-tv_01.jpg", alt: "빌리어즈TV SNS 콘텐츠 1" }, { img: "assets/projects/media/billiards-tv_02.jpg", alt: "빌리어즈TV SNS 콘텐츠 2" }, { img: "assets/projects/media/billiards-tv_03.jpg", alt: "빌리어즈TV SNS 콘텐츠 3" }, { img: "assets/projects/media/billiards-tv_04.jpg", alt: "빌리어즈TV SNS 콘텐츠 4" }] }] },
  ],
  "kakao-1boon": [
    { at: 0, blocks: [{ gallery: [{ img: "assets/projects/media/kakao-1boon_01.jpg", alt: "카카오 1boon 스토리 콘텐츠 1" }, { img: "assets/projects/media/kakao-1boon_02.jpg", alt: "카카오 1boon 스토리 콘텐츠 2" }] }] },
  ],
  "wego-supporters": [
    { at: 2, blocks: [{ list: [{ text: "위고 서포터즈 3기 활동 랩업 영상", url: "https://youtu.be/iw5LEZsOQMQ" }] }] },
    { at: 5, blocks: [{ gallery: [{ img: "assets/projects/media/wego-supporters_01.jpg", alt: "7월 한미동맹 토크쇼 행사 참석 후기", cap: "7월 한미동맹 토크쇼 행사 참석 후기" }, { img: "assets/projects/media/wego-supporters_02.jpg", alt: "9월 전쟁기념관 방문 행사 참석 후기 웹툰", cap: "9월 전쟁기념관 방문 행사 참석 후기 웹툰", url: "https://www.instagram.com/p/Cgv-dTyJk44/" }] }, { list: [{ text: "활동 후기 영상 콘텐츠 플레이리스트", url: "https://www.youtube.com/playlist?list=PLtp8PERYZdnh-UV5NfdH2rR7cASn64F_y" }] }] },
    { at: 7, blocks: [{ gallery: [{ img: "assets/projects/media/wego-supporters_03.jpg", alt: "12월 한미동맹 퀴즈행사 공지사항 (카카오)", cap: "12월 퀴즈행사 공지 (카카오)" }, { img: "assets/projects/media/wego-supporters_04.jpg", alt: "12월 한미동맹 퀴즈 예상문제 공지사항 (카카오)", cap: "12월 퀴즈 예상문제 공지 (카카오)" }, { img: "assets/projects/media/wego-supporters_05.jpg", alt: "12월 한미동맹 퀴즈행사 공지사항 국문 (슬랙)", cap: "12월 퀴즈행사 공지 국문 (슬랙)" }, { img: "assets/projects/media/wego-supporters_06.jpg", alt: "12월 한미동맹 퀴즈행사 공지사항 영문 (슬랙)", cap: "12월 퀴즈행사 공지 영문 (슬랙)" }] }] },
  ],
  "kcc-reporters": [
    { at: 4, blocks: [{ img: "assets/projects/media/kcc-reporters_01.jpg", alt: "정책기자단 모집 홍보 이미지" }, { img: "assets/projects/media/kcc-reporters_02.jpg", alt: "온라인 수료식·발대식 행사 현장" }, { gallery: [{ img: "assets/projects/media/kcc-reporters_03.jpg", alt: "줌 화상회의 스케치 1" }, { img: "assets/projects/media/kcc-reporters_04.jpg", alt: "줌 화상회의 스케치 2" }] }] },
    { at: 6, blocks: [{ gallery: [{ img: "assets/projects/media/kcc-reporters_05.jpg", alt: "활동내역 관리", cap: "활동내역 관리" }, { img: "assets/projects/media/kcc-reporters_06.jpg", alt: "우수 콘텐츠 선별", cap: "우수 콘텐츠 선별" }] }] },
  ],
  "gyeongnamfc-team": [
    { at: 1, blocks: [{ gallery: [{ img: "assets/projects/media/gyeongnamfc-team_01.jpg", alt: "경남FC 팀매니저 활동 사진 1" }, { img: "assets/projects/media/gyeongnamfc-team_02.jpg", alt: "경남FC 팀매니저 활동 사진 2" }, { img: "assets/projects/media/gyeongnamfc-team_03.jpg", alt: "경남FC 팀매니저 활동 사진 3" }, { img: "assets/projects/media/gyeongnamfc-team_04.jpg", alt: "경남FC 팀매니저 활동 사진 4" }, { img: "assets/projects/media/gyeongnamfc-team_05.jpg", alt: "경남FC 팀매니저 활동 사진 5" }, { img: "assets/projects/media/gyeongnamfc-team_06.jpg", alt: "경남FC 팀매니저 활동 사진 6" }] }] },
  ],
  "soonhari-na-channel": [
    { at: 2, blocks: [{ img: "assets/projects/media/soonhari-na-channel_01.jpg", alt: "순하리 채널 장표: 콘텐츠 기획 방향 (블러 처리)" }, { img: "assets/projects/media/soonhari-na-channel_02.jpg", alt: "순하리 채널 장표: 콘텐츠 카테고리 (블러 처리)" }] },
    { at: 6, blocks: [{ img: "assets/projects/media/soonhari-na-channel_03.jpg", alt: "순하리 채널 장표: 운영 성과 (블러 처리)" }] },
  ],
  "jinro-sea-channel": [
    { at: 3, blocks: [{ img: "assets/projects/media/jinro-sea-channel_01.jpg", alt: "진로 동남아 장표: 기획 방향 (블러 처리)" }, { img: "assets/projects/media/jinro-sea-channel_02.jpg", alt: "진로 동남아 장표: Scene Signature (블러 처리)" }] },
    { at: 9, blocks: [{ gallery: [{ img: "assets/projects/media/jinro-sea-channel_03.jpg", alt: "Collaboration with Bao Han Nguyen", cap: "Bao Han Nguyen", url: "https://www.tiktok.com/@baohannehihi/video/7667559357927951636" }, { img: "assets/projects/media/jinro-sea-channel_04.jpg", alt: "Wipe the Camera", cap: "Wipe the Camera", url: "https://www.instagram.com/reel/Dd_ERb2jLNc/" }] }] },
    { at: 12, blocks: [{ gallery: [{ img: "assets/projects/media/jinro-sea-channel_05.jpg", alt: "Collaboration with Solbi", cap: "Solbi", url: "https://www.tiktok.com/@zzangchibaworld/video/7665665270689631509" }, { img: "assets/projects/media/jinro-sea-channel_06.jpg", alt: "Summer Staycation", cap: "Summer Staycation", url: "https://www.instagram.com/reels/DY9ok8KFa7_/" }] }] },
    { at: 15, blocks: [{ gallery: [{ img: "assets/projects/media/jinro-sea-channel_07.jpg", alt: "Collaboration with lansame2", cap: "lansame2", url: "https://www.tiktok.com/@lansame2/video/7657413161305296136" }, { img: "assets/projects/media/jinro-sea-channel_08.jpg", alt: "Lemon or Peach", cap: "Lemon or Peach", url: "https://www.instagram.com/reel/DdbYuqZAU_v/" }] }] },
  ],
  "hanwoomul-influencer": [
    { at: 2, blocks: [{ img: "assets/projects/media/hanwoomul-influencer_01.jpg", alt: "한우물 대만 장표: 인플루언서 선정 (블러 처리)" }, { img: "assets/projects/media/hanwoomul-influencer_02.jpg", alt: "한우물 대만 장표: 콘텐츠 기획 (블러 처리)" }] },
    { at: 4, blocks: [{ gallery: [{ img: "assets/projects/media/hanwoomul-influencer_03.jpg", alt: "코스트코 장보기 씬", cap: "코스트코 장보기 씬" }, { img: "assets/projects/media/hanwoomul-influencer_04.jpg", alt: "브랜드 제품 조리", cap: "브랜드 제품 조리" }, { img: "assets/projects/media/hanwoomul-influencer_05.jpg", alt: "K-Food 한상 차림 후 시식", cap: "K-Food 한상 차림 후 시식" }] }] },
    { at: 7, blocks: [{ img: "assets/projects/media/hanwoomul-influencer_06.jpg", alt: "한우물 미국 장표: 콘텐츠 카테고리 (블러 처리)" }, { img: "assets/projects/media/hanwoomul-influencer_07.jpg", alt: "한우물 미국 장표: 주요 콘텐츠 (블러 처리)" }] },
    { at: 10, blocks: [{ gallery: [{ img: "assets/projects/media/hanwoomul-influencer_08.jpg", alt: "Collaboration with wokwithben", cap: "wokwithben" }, { img: "assets/projects/media/hanwoomul-influencer_09.jpg", alt: "Collaboration with yunnie_kitchen", cap: "yunnie_kitchen" }, { img: "assets/projects/media/hanwoomul-influencer_10.jpg", alt: "Collaboration with seattle.food.diva", cap: "seattle.food.diva" }, { img: "assets/projects/media/hanwoomul-influencer_11.jpg", alt: "Collaboration with Healthieenut", cap: "Healthieenut" }, { img: "assets/projects/media/hanwoomul-influencer_12.jpg", alt: "Collaboration with salmonsushilover", cap: "salmonsushilover" }, { img: "assets/projects/media/hanwoomul-influencer_13.jpg", alt: "Collaboration with jacquelynstoddard", cap: "jacquelynstoddard" }] }] },
  ],
};
