/* Szablony infografik „🗺️ W pigułce”.
 * Dział może mieć infografikę jako gotowy SVG (string) albo jako opis treści (obiekt) – wtedy
 * ten plik rysuje z niego SVG: sam łamie tekst, liczy wysokości, rysuje strzałki i dobiera kolory
 * (tylko klasy CSS – działa tryb ciemny i druk). Format i przykłady: docs/LEKCJE.md → „Infografiki”.
 *
 *   window.INFOGRAFIKA.render(spec, uid) → '<svg …>…</svg>'
 *
 * Wspólne pola: type, top {title, text, kolor}, bottom {title, text, kolor}, label (aria-label – opcjonalnie,
 * domyślnie składany z całej treści). Element (box): { title, text, kolor (1–5), icon (emoji) }.
 * Typy:
 *   os         – oś czasu:   items [{ label: '1410', title, text, kolor }]
 *   kroki      – proces:     items [box], cykl: true (strzałka z końca na początek), cyklLabel
 *   porownanie – porównanie: kolumny [{ title, kolor }] (2–3), wiersze [{ label, cells: [tekst…], bold }]
 *   drzewo     – podział / mapa postaci: root box, branches [{ title, text, kolor, items: [tekst…] }], kolumny 1–2
 *   karty      – kafelki:    items [box], kolumny 1–3
 */
(() => {
  'use strict';
  const W = 400, M = 6, IW = W - 2 * M;
  const FONT = { tx: '16px system-ui, sans-serif', b: 'bold 18px system-ui, sans-serif', xl: '30px system-ui, sans-serif' };
  const LH = { tx: 21, b: 23 };
  let ctx = null;
  function measure(text, kind) {
    if (ctx === null) {
      try { ctx = document.createElement('canvas').getContext('2d'); } catch (e) { ctx = false; }
    }
    if (ctx) { ctx.font = FONT[kind]; return ctx.measureText(text).width; }
    return text.length * (kind === 'b' ? 10 : 8.6);
  }
  // łamanie tekstu na linie o szerokości max (zapas 4%, bo czcionki na urządzeniach się różnią)
  function wrap(text, max, kind) {
    const out = [];
    for (const para of String(text == null ? '' : text).split('\n')) {
      let line = '';
      for (const word of para.split(/ +/)) {
        const next = line ? `${line} ${word}` : word;
        if (line && measure(next, kind) * 1.04 > max) { out.push(line); line = word; } else line = next;
      }
      if (line || !para) out.push(line);
    }
    return out.filter((l, i, a) => l || (i > 0 && i < a.length - 1));
  }
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const k = (n, d) => (n >= 1 && n <= 5 ? n : d);

  function render(spec, uid) {
    const o = [];
    const words = [];
    const id = `a-ig-${String(uid || spec.type).replace(/[^a-z0-9-]/gi, '')}`;
    let used = false;
    const arrow = (d, cls = 'ln sw') => { used = true; o.push(`<path d="${d}" class="${cls}" marker-end="url(#${id})"/>`); };
    const text = (x, y, s, cls, anchor) => o.push(`<text x="${x}" y="${y}"${anchor ? ` text-anchor="${anchor}"` : ''} class="${cls}">${esc(s)}</text>`);
    const say = (...p) => { for (const s of p) if (s) words.push(String(s).replace(/\n/g, ' ')); };

    // wysokość pudełka z tytułem i tekstem (bez rysowania)
    function layout(b, w, center) {
      const iconW = b.icon && !center ? 40 : 0;
      const tw = w - 24 - iconW;
      const tl = b.title ? wrap(b.title, tw, 'b') : [];
      const xl = b.text ? wrap(b.text, tw, 'tx') : [];
      const il = (b.items || []).flatMap((it) => wrap(`• ${it}`, tw, 'tx'));
      const iconH = b.icon && center ? 40 : 0;
      const h = 12 + iconH + tl.length * LH.b + (xl.length + il.length) * LH.tx + 10;
      return { tl, xl, il, h: Math.max(h, b.icon && !center ? 52 : 0), iconW, iconH };
    }
    // rysuje pudełko; center – tekst wyśrodkowany (np. kafelki, komórki)
    function box(b, x, y, w, def, opt = {}) {
      const L = opt.L || layout(b, w, opt.center);
      const h = opt.h || L.h;
      const kk = k(b.kolor, def);
      o.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${opt.rx || 10}" class="f${kk} s${kk}${opt.strong ? ' sw' : ''}"/>`);
      const cx = x + w / 2;
      let cy = y + 6;
      if (b.icon && opt.center) { text(cx, cy + 32, b.icon, 'tx-xl', 'middle'); cy += L.iconH; }
      if (b.icon && !opt.center) text(x + 10, y + 34, b.icon, 'tx-xl');
      const tx = opt.center ? cx : x + 12 + L.iconW;
      const an = opt.center ? 'middle' : '';
      for (const l of L.tl) { cy += LH.b; text(tx, cy - 5, l, 'tx-b', an); }
      for (const l of [...L.xl, ...L.il]) { cy += LH.tx; text(tx, cy - 4, l, 'tx', an); }
      say(b.title, b.text, ...(b.items || []));
      return h;
    }

    let y = M;
    const topBox = () => { if (spec.top) { y += box(spec.top, M, y, IW, 2, { strong: true, rx: 12 }); return true; } return false; };
    const bottomBox = (gap = 14) => { if (spec.bottom) { y += gap; y += box(spec.bottom, M, y, IW, 3, { strong: true, rx: 12 }); } };

    if (spec.type === 'os') {
      const items = spec.items || [];
      const bw = Math.min(110, Math.max(62, ...items.map((it) => measure(String(it.label || ''), 'b') + 22)));
      const ax = M + 1 + bw / 2, bx = M + bw + 12, iw = W - M - bx;
      const hadTop = topBox();
      const axisTop = y;
      y += hadTop ? 14 : 0;
      const body = [];
      const keep = o.splice(0);
      items.forEach((it, i) => {
        if (i) y += 12;
        say(it.label);
        const h = box(it, bx, y, iw, 1);
        const c = y + h / 2;
        body.push(`<rect x="${ax - bw / 2}" y="${c - 16}" width="${bw}" height="32" rx="16" class="f4 s4 sw"/>`);
        body.push(`<text x="${ax}" y="${c + 6}" text-anchor="middle" class="tx-b">${esc(it.label || '')}</text>`);
        y += h;
      });
      const boxes = o.splice(0);
      o.push(...keep);
      if (spec.bottom) {
        arrow(`M${ax},${hadTop ? axisTop : M + 10} V${y + 9}`);
        o.push(...boxes, ...body);
        bottomBox(16);
      } else {
        o.push(`<path d="M${ax},${hadTop ? axisTop : M + 10} V${y}" class="ln sw"/>`);
        o.push(...boxes, ...body);
      }
    } else if (spec.type === 'kroki') {
      topBox();
      const items = spec.items || [];
      const cyc = !!spec.cykl;
      const bx = cyc ? 34 : M, iw = W - M - bx;
      const mids = [];
      if (spec.top && items.length) { arrow(`M${bx + iw / 2},${y + 2} V${y + 20}`); y += 24; }
      items.forEach((it, i) => {
        const h = box(it, bx, y, iw, 1);
        mids.push(y + Math.min(h / 2, 24));
        y += h;
        if (i < items.length - 1) { arrow(`M${bx + iw / 2},${y + 2} V${y + 20}`); y += 24; }
      });
      if (cyc && items.length > 1) {
        arrow(`M${bx - 2},${mids[mids.length - 1]} H${M + 8} V${mids[0]} H${bx - 4}`, 'ln sw dash');
        if (spec.cyklLabel) say(spec.cyklLabel);
      }
      bottomBox();
    } else if (spec.type === 'porownanie') {
      topBox();
      if (spec.top) y += 12;
      const cols = (spec.kolumny || []).map((c) => (typeof c === 'string' ? { title: c } : c));
      const n = cols.length || 1, gap = 8, cw = (IW - gap * (n - 1)) / n;
      const cx = (i) => M + i * (cw + gap) + cw / 2;
      const heads = cols.map((c) => wrap(c.title, cw - 8, 'b'));
      const hh = Math.max(...heads.map((h) => h.length)) * LH.b;
      heads.forEach((h, i) => h.forEach((l, j) => text(cx(i), y + (j + 1) * LH.b - 5, l, `tx-b t${k(cols[i].kolor, i + 1)}`, 'middle')));
      say(...cols.map((c) => c.title));
      y += hh + 4;
      for (const r of spec.wiersze || []) {
        if (r.label) {
          for (const l of wrap(r.label, IW, 'tx')) { y += LH.tx; text(W / 2, y - 4, l, 'tx t5', 'middle'); }
          say(r.label);
          y += 4;
        }
        const kind = r.bold ? 'b' : 'tx';
        const cells = (r.cells || []).map((c) => wrap(c, cw - 16, kind));
        const h = 14 + Math.max(...cells.map((c) => c.length)) * LH[kind];
        cells.forEach((c, i) => {
          const kk = k(cols[i] && cols[i].kolor, i + 1);
          o.push(`<rect x="${cx(i) - cw / 2}" y="${y}" width="${cw}" height="${h}" rx="10" class="f${kk}"/>`);
          const off = (h - 14 - c.length * LH[kind]) / 2;
          c.forEach((l, j) => text(cx(i), y + 7 + off + (j + 1) * LH[kind] - 5, l, r.bold ? 'tx-b' : 'tx', 'middle'));
        });
        say(...(r.cells || []).map((c, i) => `${cols[i] ? cols[i].title + ': ' : ''}${c}`));
        y += h + 6;
      }
      y -= 6;
      bottomBox();
    } else if (spec.type === 'drzewo') {
      topBox();
      if (spec.top) y += 12;
      const root = spec.root || {};
      const br = spec.branches || [];
      const cols = Math.max(1, Math.min(2, spec.kolumny || (br.length > 1 ? 2 : 1)));
      const rw = Math.min(IW, Math.max(200, measure(root.title || '', 'b') + 40));
      const rh = box(root, cols === 2 ? (W - rw) / 2 : M, y, rw, 1, { strong: true, center: true, rx: 12 });
      const gap = cols === 2 ? 24 : 0;
      const bw = cols === 2 ? (IW - gap) / 2 : IW - 24;
      const xs = cols === 2 ? [M, M + bw + gap] : [M + 24];
      const trunk = cols === 2 ? W / 2 : M + 12;
      const top = y + rh;
      y = top + 16;
      let last = top;
      for (let i = 0; i < br.length; i += cols) {
        const row = br.slice(i, i + cols);
        const Ls = row.map((b) => layout(b, bw, false));
        const h = Math.max(...Ls.map((L) => L.h));
        row.forEach((b, j) => {
          box(b, xs[j], y, bw, 3, { L: Ls[j], h });
          const sy = y + 20;
          if (cols === 2) o.push(`<line x1="${trunk}" y1="${sy}" x2="${j ? xs[j] : xs[j] + bw}" y2="${sy}" class="ln"/>`);
          else o.push(`<line x1="${trunk}" y1="${sy}" x2="${xs[0]}" y2="${sy}" class="ln"/>`);
          last = sy;
        });
        y += h + 12;
      }
      if (br.length) o.unshift(`<line x1="${trunk}" y1="${top}" x2="${trunk}" y2="${last}" class="ln"/>`);
      y -= 12;
      bottomBox();
    } else if (spec.type === 'karty') {
      topBox();
      if (spec.top) y += 12;
      const it = spec.items || [];
      const cols = Math.max(1, Math.min(3, spec.kolumny || 2));
      const gap = 8, cw = (IW - gap * (cols - 1)) / cols;
      const center = cols > 1;
      for (let i = 0; i < it.length; i += cols) {
        const row = it.slice(i, i + cols);
        const Ls = row.map((b) => layout(b, cw, center));
        const h = Math.max(...Ls.map((L) => L.h));
        row.forEach((b, j) => box(b, M + j * (cw + gap), y, cw, 1, { L: Ls[j], h, center }));
        y += h + gap;
      }
      y -= gap;
      bottomBox();
    } else {
      throw new Error(`Nieznany typ infografiki: ${spec.type}`);
    }
    y += M;
    const defs = used ? `<defs><marker id="${id}" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L13,7 L0,14 z" class="t2"/></marker></defs>` : '';
    const label = spec.label || words.filter(Boolean).join('. ').replace(/\.\./g, '.');
    return `<svg viewBox="0 0 ${W} ${Math.ceil(y)}" role="img" aria-label="${esc(label)}">${defs}${o.join('')}</svg>`;
  }

  window.INFOGRAFIKA = { render };
})();
