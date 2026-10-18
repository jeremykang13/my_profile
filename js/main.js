(function () {
  // 스크롤 등장: 한 번만, 같은 부모 안에서는 순서대로 40ms씩 지연
  var revealEls = document.querySelectorAll('.reveal');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function show(el) { el.classList.add('is-visible'); }

  if ('IntersectionObserver' in window && !reduce) {
    var order = new Map();
    revealEls.forEach(function (el) {
      var n = order.get(el.parentNode) || 0;
      el.style.transitionDelay = Math.min(n, 6) * 40 + 'ms';
      order.set(el.parentNode, n + 1);
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          show(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(show);
  }

  // 연락 페이지: 메일 복사 버튼
  var mailLink = document.querySelector('.contact-list a[href^="mailto:"]');
  if (mailLink && navigator.clipboard) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-btn';
    btn.textContent = '복사';
    btn.setAttribute('aria-live', 'polite');
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(mailLink.textContent.trim()).then(function () {
        btn.textContent = '복사됨';
        setTimeout(function () { btn.textContent = '복사'; }, 1500);
      }, function () {});
    });
    mailLink.parentNode.appendChild(btn);
  }

  // 프로젝트 상세: 스크롤 진행 바 (transform만 갱신)
  var bar = document.getElementById('progress');
  if (bar && !reduce) {
    var ticking = false;
    var update = function () {
      ticking = false;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ')';
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }
})();
