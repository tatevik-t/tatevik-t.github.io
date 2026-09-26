(function () {
  'use strict';
  var wall = document.querySelector('.rejection-wall');
  if (!wall) return;
  var grid = wall.querySelector('#rw-grid');
  var cards = Array.prototype.slice.call(grid.querySelectorAll('.rw-card'));
  var filters = Array.prototype.slice.call(wall.querySelectorAll('[data-filter]'));
  var search = wall.querySelector('#rw-search');
  var sort = wall.querySelector('#rw-sort');
  var count = wall.querySelector('#rw-result-count');
  var empty = wall.querySelector('.rw-empty');
  var next = wall.querySelector('.rw-keep-going');
  var category = 'all';
  var dialog = wall.querySelector('#rw-dialog');
  var dialogContent = dialog.querySelector('.rw-dialog-content');
  var lastBadge = null;
  var names = { jobs: 'job', phd: 'PhD', programs: 'program' };
  var collator = new Intl.Collator('en', { sensitivity: 'base' });
  var records = cards.map(function (card) {
    return { card: card, text: card.textContent.toLocaleLowerCase(), company: card.dataset.company, date: card.dataset.date };
  });

  cards.forEach(function (card) {
    var button = card.querySelector('.rw-badge-button');
    button.addEventListener('click', function () {
      lastBadge = button;
      dialogContent.replaceChildren();
      dialog.className = 'rw-dialog rw-category-' + card.dataset.category;
      dialog.setAttribute('aria-label', card.dataset.company + ' badge');
      dialogContent.appendChild(card.querySelector('.rw-medal').cloneNode(true));
      var details = card.querySelector('.rw-detail-content').cloneNode(true);
      details.hidden = false;
      dialogContent.appendChild(details);
      dialog.showModal();
    });
  });
  dialog.querySelector('.rw-dialog-close').addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (event) {
    if (event.target !== dialog) return;
    var bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', function () {
    dialogContent.replaceChildren();
    if (lastBadge) lastBadge.focus();
  });

  function update() {
    var query = search.value.trim().toLocaleLowerCase();
    var visible = 0;
    records.sort(function (a, b) {
      if (sort.value === 'company') return collator.compare(a.company, b.company) || b.date.localeCompare(a.date);
      return sort.value === 'oldest' ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date);
    });
    records.forEach(function (record) {
      var match = (category === 'all' || record.card.dataset.category === category) && (!query || record.text.indexOf(query) !== -1);
      record.card.hidden = !match;
      if (match) visible++;
      grid.appendChild(record.card);
    });
    next.hidden = category !== 'all' || query !== '';
    grid.appendChild(next);
    grid.hidden = visible === 0;
    empty.hidden = visible !== 0;
    var noun = category === 'all' ? 'badge' : names[category] + ' badge';
    count.textContent = 'Showing ' + (category === 'all' && !query ? 'all ' : '') + visible + ' ' + noun + (visible === 1 ? '' : 's');
    filters.forEach(function (button) { button.setAttribute('aria-pressed', String(button.dataset.filter === category)); });
  }

  filters.forEach(function (button) {
    button.addEventListener('click', function () { category = button.dataset.filter; update(); });
  });
  search.addEventListener('input', update);
  sort.addEventListener('change', update);
  wall.querySelector('#rw-reset').addEventListener('click', function () {
    category = 'all'; search.value = ''; sort.value = 'newest'; update(); search.focus();
  });
  wall.querySelector('.rw-controls').hidden = false;
  update();
}());
