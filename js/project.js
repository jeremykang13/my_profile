(function () {
  var params = new URLSearchParams(window.location.search);
  var slug = params.get('id');
  var list = typeof PROJECTS !== 'undefined' ? PROJECTS : [];
  var index = list.findIndex(function (p) { return p.slug === slug; });
  var project = index >= 0 ? list[index] : null;

  if (!project) {
    document.getElementById('detailTitle').textContent = '프로젝트를 찾을 수 없습니다.';
    document.querySelector('.detail-cover').hidden = true;
    return;
  }

  document.title = project.title + ' | 강병무';

  // 목록으로 돌아갈 때 이 프로젝트가 속한 역할 섹션으로 이동
  var backLink = document.querySelector('.back-link');
  var roleAnchor = { strategy: 'strategist', concept: 'concept', content: 'creator', community: 'community' }[project.category];
  if (backLink && roleAnchor) backLink.href = 'work.html#' + roleAnchor;

  document.getElementById('detailCat').textContent = project.catLabel;

  document.getElementById('detailTitle').textContent = project.title;

  var tagsEl = document.getElementById('detailTags');
  project.tags.forEach(function (tag) {
    var span = document.createElement('span');
    span.textContent = tag;
    tagsEl.appendChild(span);
  });

  var coverEl = document.getElementById('detailCover');
  if (project.cover) {
    coverEl.src = project.cover;
    coverEl.alt = project.title;
  } else {
    document.querySelector('.detail-cover').hidden = true;
  }

  var bodyEl = document.getElementById('detailBody');

  function makeImg(src, alt) {
    var img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    img.loading = 'lazy';
    return img;
  }

  // 본문 블록 하나를 그린다: p / h / list / img / gallery
  function renderBlock(block) {
    if (block.h) {
      var h = document.createElement('h3');
      h.textContent = block.h;
      bodyEl.appendChild(h);
    } else if (block.p) {
      var p = document.createElement('p');
      p.innerHTML = block.p;
      bodyEl.appendChild(p);
    } else if (block.img) {
      var fig = document.createElement('figure');
      fig.className = 'body-img';
      fig.appendChild(makeImg(block.img, block.alt));
      bodyEl.appendChild(fig);
    } else if (block.gallery) {
      var grid = document.createElement('div');
      grid.className = 'body-gallery';
      grid.setAttribute('data-n', String(block.gallery.length));
      block.gallery.forEach(function (item) {
        var cell = document.createElement('figure');
        var inner = makeImg(item.img, item.alt);
        if (item.url) {
          var a = document.createElement('a');
          a.href = item.url;
          a.target = '_blank';
          a.rel = 'noopener';
          a.setAttribute('aria-label', (item.cap || item.alt || '') + ' (새 탭에서 열기)');
          a.appendChild(inner);
          cell.appendChild(a);
        } else {
          cell.appendChild(inner);
        }
        if (item.cap) {
          var cap = document.createElement('figcaption');
          cap.textContent = item.cap;
          cell.appendChild(cap);
        }
        grid.appendChild(cell);
      });
      bodyEl.appendChild(grid);
    } else if (block.list) {
      var ul = document.createElement('ul');
      ul.className = 'body-list';
      block.list.forEach(function (item) {
        var li = document.createElement('li');
        if (typeof item === 'string') {
          li.textContent = item;
        } else {
          var link = document.createElement('a');
          link.href = item.url;
          link.target = '_blank';
          link.rel = 'noopener';
          link.textContent = item.text;
          li.appendChild(link);
        }
        ul.appendChild(li);
      });
      bodyEl.appendChild(ul);
    }
  }

  // 원본 본문 블록 사이에 projects-media.js의 이미지를 끼워 넣는다 (at: 원본 블록 번호 뒤)
  var media = (typeof PROJECT_MEDIA !== 'undefined' && PROJECT_MEDIA[project.slug]) || [];
  function renderMedia(at) {
    media.forEach(function (m) {
      if (m.at === at) m.blocks.forEach(renderBlock);
    });
  }

  renderMedia(-1);
  project.body.forEach(function (block, i) {
    renderBlock(block);
    renderMedia(i);
  });

  if (project.stats && project.stats.length) {
    var statsEl = document.getElementById('detailStats');
    statsEl.hidden = false;
    project.stats.forEach(function (stat) {
      var card = document.createElement('div');
      card.className = 'stat-card';
      var value = document.createElement('strong');
      value.textContent = stat.value;
      var label = document.createElement('span');
      label.textContent = stat.label;
      card.appendChild(value);
      card.appendChild(label);
      if (stat.sub) {
        var sub = document.createElement('em');
        sub.textContent = stat.sub;
        card.appendChild(sub);
      }
      statsEl.appendChild(card);
    });
  }

  var prevEl = document.getElementById('prevProject');
  var nextEl = document.getElementById('nextProject');
  if (index > 0) {
    prevEl.href = 'project.html?id=' + list[index - 1].slug;
    prevEl.hidden = false;
  }
  if (index < list.length - 1) {
    nextEl.href = 'project.html?id=' + list[index + 1].slug;
    nextEl.hidden = false;
  }
})();
