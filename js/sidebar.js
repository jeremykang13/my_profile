(function () {
  // 사이드바 메뉴 데이터. 메뉴를 바꿀 때는 이 배열만 고친다.
  // sub: true 는 바로 위 항목의 하위 메뉴. also: 같은 항목으로 취급할 다른 파일.
  // icon: ICONS 키, short: 모바일 하단 탭바 라벨, key: 단축키(1~5, 데스크톱)
  var MENU = [
    { label: 'Main', items: [
      { text: 'Home', short: 'Home', href: 'index.html', icon: 'home', key: '1' },
      { text: 'Philosophy & Work', short: 'Work', href: 'work.html', also: ['project.html'], icon: 'work', key: '2' },
      { text: 'Strategist', href: 'work.html#strategist', sub: true },
      { text: 'Concept', href: 'work.html#concept', sub: true },
      { text: 'Creator', href: 'work.html#creator', sub: true },
      { text: 'Community', href: 'work.html#community', sub: true },
      { text: 'Career', short: 'Career', href: 'career.html', icon: 'career', key: '3' },
      { text: 'Life', short: 'Life', href: 'life.html', icon: 'life', key: '4' }
    ] },
    { label: 'Connect', items: [
      { text: 'Contact', short: 'Contact', href: 'contact.html', icon: 'mail', key: '5' },
      { text: 'Instagram', href: 'https://instagram.com/like_byungmoos_', external: true, icon: 'insta' },
      { text: 'Brunch', href: 'https://brunch.co.kr/@writerturtle', external: true, icon: 'pen' }
    ] }
  ];

  // 인라인 SVG 아이콘 (16px 기준, stroke 1.5)
  var ICONS = {
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
    work: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/>',
    career: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    life: '<path d="M12 21s-8-5-8-11a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 10c0 6-8 11-8 11z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    insta: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/>'
  };

  var mount = document.getElementById('sidebar');
  if (!mount) return;

  var file = location.pathname.split('/').pop() || 'index.html';

  function parse(href) {
    var hashAt = href.indexOf('#');
    return {
      base: (hashAt >= 0 ? href.slice(0, hashAt) : href),
      hash: hashAt >= 0 ? href.slice(hashAt) : ''
    };
  }

  var aside = document.createElement('aside');
  aside.className = 'side';
  aside.setAttribute('aria-label', '사이트 메뉴');

  var brand = document.createElement('a');
  brand.className = 'side-brand';
  brand.href = 'index.html';
  brand.textContent = '강병무';
  var tagline = document.createElement('small');
  tagline.textContent = '브랜드 철학 기획자';
  brand.appendChild(tagline);
  aside.appendChild(brand);

  var nav = document.createElement('nav');
  nav.className = 'side-nav';
  var links = [];
  var keyMap = {};

  MENU.forEach(function (group) {
    var label = document.createElement('p');
    label.className = 'side-label';
    label.textContent = group.label;
    nav.appendChild(label);

    group.items.forEach(function (item) {
      var a = document.createElement('a');
      a.href = item.href;
      if (item.sub) a.className = 'side-sub';

      if (item.icon && ICONS[item.icon]) {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('aria-hidden', 'true');
        svg.innerHTML = ICONS[item.icon];
        a.appendChild(svg);
      }

      var text = document.createElement('span');
      text.className = 't';
      text.textContent = item.text;
      a.appendChild(text);

      if (item.short) {
        var short = document.createElement('span');
        short.className = 't-s';
        short.textContent = item.short;
        a.appendChild(short);
      }

      if (item.external) {
        a.target = '_blank';
        a.rel = 'noopener';
        var mark = document.createElement('i');
        mark.setAttribute('aria-hidden', 'true');
        mark.textContent = '↗';
        a.appendChild(mark);
      } else if (item.key) {
        var kbd = document.createElement('kbd');
        kbd.setAttribute('aria-hidden', 'true');
        kbd.textContent = item.key;
        a.appendChild(kbd);
        keyMap[item.key] = item.href;
      }

      nav.appendChild(a);
      links.push({ el: a, item: item });
    });
  });

  aside.appendChild(nav);

  // 테마 전환 (자동 / 라이트 / 다크). 저장소가 막혀 있어도 동작은 유지한다.
  var MODES = [['auto', '자동'], ['light', '라이트'], ['dark', '다크']];
  var segs = [];

  function currentMode() {
    var t = document.documentElement.getAttribute('data-theme');
    return t === 'light' || t === 'dark' ? t : 'auto';
  }

  function applyMode(mode) {
    var root = document.documentElement;
    if (mode === 'auto') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', mode);
    try {
      if (mode === 'auto') localStorage.removeItem('theme');
      else localStorage.setItem('theme', mode);
    } catch (e) { /* 저장 실패는 무시 */ }
    segs.forEach(function (seg) {
      seg.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-mode') === mode ? 'true' : 'false');
      });
    });
  }

  function buildSeg(extraClass) {
    var seg = document.createElement('div');
    seg.className = 'theme-seg' + (extraClass ? ' ' + extraClass : '');
    seg.setAttribute('role', 'group');
    seg.setAttribute('aria-label', '화면 테마');
    MODES.forEach(function (m) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('data-mode', m[0]);
      b.textContent = m[1];
      b.addEventListener('click', function () { applyMode(m[0]); });
      seg.appendChild(b);
    });
    segs.push(seg);
    return seg;
  }

  aside.appendChild(buildSeg());
  mount.appendChild(aside);

  var footWrap = document.querySelector('.site-footer .wrap');
  if (footWrap) footWrap.appendChild(buildSeg('foot-theme'));
  applyMode(currentMode());

  // 단축키 1~5: 입력 중이거나 조합키가 눌린 경우는 무시
  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;
    var t = e.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    if (keyMap[e.key]) window.location.href = keyMap[e.key];
  });

  function setCurrent(target) {
    links.forEach(function (l) {
      if (l.el === target) l.el.setAttribute('aria-current', 'page');
      else l.el.removeAttribute('aria-current');
    });
  }

  // 이 페이지에 해당하는 상위 항목(해시 없는 항목)과, 같은 페이지 안의 섹션 하위 항목들
  var parentLink = null;
  var spyTargets = [];
  links.forEach(function (l) {
    if (l.item.external) return;
    var p = parse(l.item.href);
    var matchesPage = p.base === file || (l.item.also || []).indexOf(file) >= 0;
    if (!matchesPage) return;
    if (!p.hash) { parentLink = l; return; }
    var sec = document.querySelector(p.hash);
    if (sec) spyTargets.push({ link: l, el: sec });
  });

  if (spyTargets.length) {
    // 스크롤 위치에 따라 현재 섹션을 표시한다
    var ticking = false;
    var spy = function () {
      ticking = false;
      var line = window.innerHeight * 0.35;
      var current = null;
      spyTargets.forEach(function (t) {
        if (t.el.getBoundingClientRect().top <= line) current = t.link;
      });
      setCurrent((current || parentLink || {}).el || null);
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(spy); }
    }, { passive: true });
    window.addEventListener('load', spy);
    spy();
  } else {
    setCurrent(parentLink ? parentLink.el : null);
  }
})();
