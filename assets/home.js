(function () {
  const regions = window.KHU_ML || [], lessons = window.KHOA || [], themes = window.THE_GIOI || {};
  const regionBox = document.getElementById('regions'), lessonBox = document.getElementById('lessons');
  let selected = 0;
  const lessonByNumber = new Map(lessons.map(b => [b.bai, b]));
  const picker = document.getElementById('lesson-picker');
  const pickError = document.getElementById('quick-jump-error');
  lessons.slice().sort((a,b) => a.bai - b.bai).forEach(b => {
    const option = document.createElement('option');
    option.value = b.ma;
    option.textContent = b.nhan + ' — ' + b.tieu_de;
    picker.append(option);
  });
  picker.addEventListener('change', () => { pickError.textContent=''; picker.removeAttribute('aria-invalid'); });
  document.getElementById('chon-bai').addEventListener('submit', ev => {
    ev.preventDefault();
    const bai = lessons.find(b => b.ma === picker.value);
    if (!bai) { pickError.textContent='Chọn bài trong danh sách trước khi mở.'; picker.setAttribute('aria-invalid','true'); picker.focus(); return; }
    location.href = bai.ma + '/index.html';
  });
  function status(b) {
    try { const t = JSON.parse(localStorage.getItem('ml1_' + b.ma) || '{}');
      return t.dat ? '✓ Đã có chứng chỉ' : t.qua ? 'Đã qua ' + t.qua + ' chặng' : 'Chưa bắt đầu';
    } catch { return 'Chưa bắt đầu'; }
  }
  function make(tag, cls, value) { const e = document.createElement(tag); if (cls) e.className = cls; if (value) e.textContent = value; return e; }
  function render() {
    regionBox.replaceChildren(); lessonBox.replaceChildren();
    regions.forEach((r,i) => {
      const btn = make('button','region-card' + (i === selected ? ' selected' : ''));
      btn.type = 'button'; btn.style.setProperty('--accent',r.mau); btn.setAttribute('aria-pressed',String(i === selected));
      btn.append(make('span','region-number','KHU ' + String(i+1).padStart(2,'0')),
        make('strong','region-name',r.ten),make('small','region-summary',r.mo_ta),make('span','region-count',r.bai.length + ' bài · Xem bài học ↗'));
      btn.addEventListener('click',() => { window.selectMLRegion(i); document.getElementById('bai-hoc').scrollIntoView({behavior:'smooth',block:'start'}); });
      btn.addEventListener('pointerenter',() => window.dispatchEvent(new CustomEvent('ml-region-hover',{detail:i})));
      btn.addEventListener('pointerleave',() => window.dispatchEvent(new CustomEvent('ml-region-hover',{detail:-1})));
      btn.addEventListener('focus',() => window.dispatchEvent(new CustomEvent('ml-region-hover',{detail:i})));
      btn.addEventListener('blur',() => window.dispatchEvent(new CustomEvent('ml-region-hover',{detail:-1})));
      regionBox.append(btn);
    });
    const r = regions[selected];
    document.getElementById('region-eyebrow').textContent = 'KHU ' + String(selected+1).padStart(2,'0') + ' · ' + r.bai.length + ' BÀI';
    document.getElementById('course-title').textContent = r.ten;
    document.getElementById('region-note').textContent = r.mo_ta;
    r.bai.forEach(num => {
      const b = lessonByNumber.get(num); if (!b) return;
      const t = themes[b.ma] || {}, card = make('article','lesson-card'); card.style.setProperty('--accent',t.mau || r.mau);
      const top = make('div','lesson-top'); top.append(make('span','lesson-number',b.nhan.toUpperCase()),make('span','lesson-symbol',t.bieu_tuong || 'ML'));
      card.append(top,make('h3','',t.ten || b.tieu_de),make('p','lesson-topic',b.tieu_de),make('p','lesson-desc',t.mo_ta || 'Khám phá bài học theo từng chặng.'));
      const bottom=make('div','lesson-bottom'); bottom.append(make('span','lesson-status',status(b)));
      const actions=make('div','lesson-actions'); const game=make('a','game-link','Vào thế giới 3D ↗'); game.href=b.ma+'/quest.html';
      const read=make('a','read-link','Trang đọc'); read.href=b.ma+'/index.html'; actions.append(game,read); bottom.append(actions); card.append(bottom);
      card.addEventListener('pointerenter',() => window.dispatchEvent(new CustomEvent('ml-region-hover',{detail:selected})));
      lessonBox.append(card);
    });
  }
  window.selectMLRegion = function (i) { if (i < 0 || i >= regions.length) return; selected=i; render(); window.dispatchEvent(new CustomEvent('ml-region-select',{detail:i})); };
  render();
  setTimeout(() => { if (!window.__home3dReady) document.getElementById('sea-fallback').hidden=false; },10000);
})();
