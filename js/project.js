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

  document.getElementById('detailCat').textContent = project.catLabel;

  document.getElementById('detailTitle').textContent = project.title;

  var tagsEl = document.getElementById('detailTags');
  project.tags.forEach(function (tag) {
    var span = document.createElement('span');
    span.textContent = tag;
    tagsEl.appendChild(span);
  });

  var coverEl = document.getElementById('detailCover');
  coverEl.src = project.cover;
  coverEl.alt = project.title;

  var bodyEl = document.getElementById('detailBody');
  project.body.forEach(function (block) {
    if (block.h) {
      var h = document.createElement('h3');
      h.textContent = block.h;
      bodyEl.appendChild(h);
    } else if (block.p) {
      var p = document.createElement('p');
      p.innerHTML = block.p;
      bodyEl.appendChild(p);
    } else if (block.list) {
      var ul = document.createElement('ul');
      ul.className = 'body-list';
      block.list.forEach(function (item) {
        var li = document.createElement('li');
        if (typeof item === 'string') {
          li.textContent = item;
        } else {
          var a = document.createElement('a');
          a.href = item.url;
          a.target = '_blank';
          a.rel = 'noopener';
          a.textContent = item.text;
          li.appendChild(a);
        }
        ul.appendChild(li);
      });
      bodyEl.appendChild(ul);
    }
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
