// Font names shipped with Windows (HKLM registry). These are left out of the dial.
const SYSTEM = new Set(["Agency FB","Agency FB Bold","Algerian","Arial","Arial Black","Arial Bold","Arial Bold Italic","Arial Italic","Arial Narrow","Arial Narrow Bold","Arial Narrow Bold Italic","Arial Narrow Italic","Arial Rounded MT Bold","Bahnschrift","Baskerville Old Face","Bauhaus 93","Bell MT","Bell MT Bold","Bell MT Italic","Berlin Sans FB","Berlin Sans FB Bold","Berlin Sans FB Demi Bold","Bernard MT Condensed","Blackadder ITC","Bodoni MT","Bodoni MT Black","Bodoni MT Black Italic","Bodoni MT Bold","Bodoni MT Bold Italic","Bodoni MT Condensed","Bodoni MT Condensed Bold","Bodoni MT Condensed Bold Italic","Bodoni MT Condensed Italic","Bodoni MT Italic","Bodoni MT Poster Compressed","Book Antiqua","Book Antiqua Bold","Book Antiqua Bold Italic","Book Antiqua Italic","Bookman Old Style","Bookman Old Style Bold","Bookman Old Style Bold Italic","Bookman Old Style Italic","Bookshelf Symbol 7","Bradley Hand ITC","Britannic Bold","Broadway","Brush Script MT Italic","Calibri","Calibri Bold","Calibri Bold Italic","Calibri Italic","Calibri Light","Calibri Light Italic","Californian FB","Californian FB Bold","Californian FB Italic","Calisto MT","Calisto MT Bold","Calisto MT Bold Italic","Calisto MT Italic","Cambria","Cambria Bold","Cambria Bold Italic","Cambria Italic","Cambria Math","Candara","Candara Bold","Candara Bold Italic","Candara Italic","Candara Light","Candara Light Italic","Castellar","Centaur","Century","Century Gothic","Century Gothic Bold","Century Gothic Bold Italic","Century Gothic Italic","Century Schoolbook","Century Schoolbook Bold","Century Schoolbook Bold Italic","Century Schoolbook Italic","Chiller","Colonna MT","Comic Sans MS","Comic Sans MS Bold","Comic Sans MS Bold Italic","Comic Sans MS Italic","Consolas","Consolas Bold","Consolas Bold Italic","Consolas Italic","Constantia","Constantia Bold","Constantia Bold Italic","Constantia Italic","Cooper Black","Copperplate Gothic Bold","Copperplate Gothic Light","Corbel","Corbel Bold","Corbel Bold Italic","Corbel Italic","Corbel Light","Corbel Light Italic","Courier 10,12,15","Courier 10,12,15 (120)","Courier New","Courier New Bold","Courier New Bold Italic","Courier New Italic","Curlz MT","Dubai Bold","Dubai Light","Dubai Medium","Dubai Regular","Ebrima","Ebrima Bold","Edwardian Script ITC","Elephant","Elephant Italic","Engravers MT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","Felix Titling","Footlight MT Light","Forte","Franklin Gothic Book","Franklin Gothic Book Italic","Franklin Gothic Demi","Franklin Gothic Demi Cond","Franklin Gothic Demi Italic","Franklin Gothic Heavy","Franklin Gothic Heavy Italic","Franklin Gothic Medium","Franklin Gothic Medium Cond","Franklin Gothic Medium Italic","Freestyle Script","French Script MT","Gabriola","Gadugi","Gadugi Bold","Garamond","Garamond Bold","Garamond Italic","Geist Black","Geist Black Italic","Geist Bold","Geist Bold Italic","Geist ExtraBold","Geist ExtraBold Italic","Geist ExtraLight","Geist ExtraLight Italic","Geist Light","Geist Light Italic","Geist Medium","Geist Medium Italic","Geist Mono Black","Geist Mono Black Italic","Geist Mono Bold","Geist Mono Bold Italic","Geist Mono ExtraBold","Geist Mono ExtraBold Italic","Geist Mono ExtraLight","Geist Mono ExtraLight Italic","Geist Mono Italic","Geist Mono Light","Geist Mono Light Italic","Geist Mono Medium","Geist Mono Medium Italic","Geist Mono Regular","Geist Mono SemiBold","Geist Mono SemiBold Italic","Geist Mono Thin","Geist Mono Thin Italic","Geist Regular","Geist Regular Italic","Geist SemiBold","Geist SemiBold Italic","Geist Thin","Geist Thin Italic","Georgia","Georgia Bold","Georgia Bold Italic","Georgia Italic","Gigi","Gill Sans MT","Gill Sans MT Bold","Gill Sans MT Bold Italic","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans MT Italic","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gloucester MT Extra Condensed","Goudy Old Style","Goudy Old Style Bold","Goudy Old Style Italic","Goudy Stout","Haettenschweiler","Harlow Solid Italic","Harrington","High Tower Text","High Tower Text Italic","IBM Plex Mono Bold","IBM Plex Mono Bold Italic","IBM Plex Mono ExtraLight","IBM Plex Mono ExtraLight Italic","IBM Plex Mono Italic","IBM Plex Mono Light","IBM Plex Mono Light Italic","IBM Plex Mono Medium","IBM Plex Mono Medium Italic","IBM Plex Mono Regular","IBM Plex Mono SemiBold","IBM Plex Mono SemiBold Italic","IBM Plex Mono Thin","IBM Plex Mono Thin Italic","IBM Plex Sans","IBM Plex Sans Bold","IBM Plex Sans Bold Italic","IBM Plex Sans ExtLt","IBM Plex Sans ExtLt Italic","IBM Plex Sans Italic","IBM Plex Sans Light","IBM Plex Sans Light Italic","IBM Plex Sans Medm","IBM Plex Sans Medm Italic","IBM Plex Sans SmBld","IBM Plex Sans SmBld Italic","IBM Plex Sans Text","IBM Plex Sans Text Italic","IBM Plex Sans Thin","IBM Plex Sans Thin Italic","Impact","Imprint MT Shadow","In","Informal Roman","Ink Free","Inter Black","Inter Black Italic","Inter Bold","Inter Bold Italic","Inter Display Black","Inter Display Black Italic","Inter Display Bold","Inter Display Bold Italic","Inter Display ExtraBold","Inter Display ExtraBold Italic","Inter Display ExtraLight","Inter Display ExtraLight Italic","Inter Display Italic","Inter Display Light","Inter Display Light Italic","Inter Display Medium","Inter Display Medium Italic","Inter Display Regular","Inter Display SemiBold","Inter Display SemiBold Italic","Inter Display Thin","Inter Display Thin Italic","Inter ExtraBold","Inter ExtraBold Italic","Inter ExtraLight","Inter ExtraLight Italic","Inter Italic","Inter Light","Inter Light Italic","Inter Medium","Inter Medium Italic","Inter Regular","Inter SemiBold","Inter SemiBold Italic","Inter Thin","Inter Thin Italic","Inter Variable","Inter Variable Italic","Javanese Text","Jokerman","Juice ITC","Kristen ITC","Kunstler Script","Leelawadee","Leelawadee Bold","Leelawadee UI","Leelawadee UI Bold","Leelawadee UI Semilight","Lucida Bright","Lucida Bright Demibold","Lucida Bright Demibold Italic","Lucida Bright Italic","Lucida Calligraphy Italic","Lucida Console","Lucida Fax Demibold","Lucida Fax Demibold Italic","Lucida Fax Italic","Lucida Fax Regular","Lucida Handwriting Italic","Lucida Sans Demibold Italic","Lucida Sans Demibold Roman","Lucida Sans Italic","Lucida Sans Regular","Lucida Sans Typewriter Bold","Lucida Sans Typewriter Bold Oblique","Lucida Sans Typewriter Oblique","Lucida Sans Typewriter Regular","Lucida Sans Unicode","Magneto Bold","Maiandra GD","Malgun Gothic","Malgun Gothic Bold","Malgun Gothic SemiLight","Matura MT Script Capitals","Microsoft Himalaya","Microsoft JhengHei","Microsoft JhengHei Bold","Microsoft JhengHei Light","Microsoft JhengHei UI","Microsoft JhengHei UI Bold","Microsoft JhengHei UI Light","Microsoft New Tai Lue","Microsoft New Tai Lue Bold","Microsoft PhagsPa","Microsoft PhagsPa Bold","Microsoft Sans Serif","Microsoft Tai Le","Microsoft Tai Le Bold","Microsoft Uighur","Microsoft Uighur Bold","Microsoft YaHei","Microsoft YaHei Bold","Microsoft YaHei Light","Microsoft YaHei UI","Microsoft YaHei UI Bold","Microsoft YaHei UI Light","Microsoft Yi Baiti","Migra Black","Migra Bold","Migra Extrabold","Migra Extralight","Migra Italic Black Italic","Migra Italic Bold Italic","Migra Italic Extrabold Italic","Migra Italic Extralight Italic","Migra Italic Italic","Migra Italic Light Italic","Migra Italic Medium Italic","Migra Italic Semibold Italic","Migra Light","Migra Medium","Migra Regular","Migra Semibold","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Mistral","Modern","Modern No. 20","Mongolian Baiti","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Reference Specialty","MS Sans Serif 8,10,12,14,18,24","MS Sans Serif 8,10,12,14,18,24 (120)","MS Serif 8,10,12,14,18,24","MS Serif 8,10,12,14,18,24 (120)","MS UI Gothic","MT Extra","MV Boli","Myanmar Text","Myanmar Text Bold","Niagara Engraved","Niagara Solid","Nirmala Text","Nirmala Text Bold","Nirmala Text Semilight","Nirmala UI","Nirmala UI Bold","Nirmala UI Semilight","NSimSun","OCR A Extended","Old English Text MT","Onyx","Palace Script MT","Palatino Linotype","Palatino Linotype Bold","Palatino Linotype Bold Italic","Palatino Linotype Italic","Papyrus","Parchment","Perpetua","Perpetua Bold","Perpetua Bold Italic","Perpetua Italic","Perpetua Titling MT Bold","Perpetua Titling MT Light","Playbill","PMingLiU-ExtB","Poor Richard","Pristina","Rage Italic","Ravie","Rockwell","Rockwell Bold","Rockwell Bold Italic","Rockwell Condensed","Rockwell Condensed Bold","Rockwell Extra Bold","Rockwell Italic","Roman","Sans Serif Collection","Script","Script MT Bold","Segoe Fluent Icons","Segoe MDL2 Assets","Segoe Print","Segoe Print Bold","Segoe Script","Segoe Script Bold","Segoe UI","Segoe UI Black","Segoe UI Black Italic","Segoe UI Bold","Segoe UI Bold Italic","Segoe UI Emoji","Segoe UI Historic","Segoe UI Italic","Segoe UI Light","Segoe UI Light Italic","Segoe UI Semibold","Segoe UI Semibold Italic","Segoe UI Semilight","Segoe UI Semilight Italic","Segoe UI Symbol","Segoe UI Variable","Showcard Gothic","SimSun","SimSun-ExtB","SimSun-ExtG","Sitka Text","Sitka Text Italic","Small Fonts","Small Fonts (120)","Snap ITC","Stencil","Sylfaen","Symbol","Tahoma","Tahoma Bold","Tempus Sans ITC","TiemposHeadline-Black","TiemposHeadline-BlackItalic","TiemposHeadline-Bold","TiemposHeadline-BoldItalic","TiemposHeadline-Light","TiemposHeadline-LightItalic","TiemposHeadline-Medium","TiemposHeadline-MediumItalic","TiemposHeadline-Regular","TiemposHeadline-RegularItalic","TiemposHeadline-Semibold","TiemposHeadline-SemiboldItalic","Times New Roman","Times New Roman Bold","Times New Roman Bold Italic","Times New Roman Italic","Trebuchet MS","Trebuchet MS Bold","Trebuchet MS Bold Italic","Trebuchet MS Italic","Tw Cen MT","Tw Cen MT Bold","Tw Cen MT Bold Italic","Tw Cen MT Condensed","Tw Cen MT Condensed Bold","Tw Cen MT Condensed Extra Bold","Tw Cen MT Italic","Verdana","Verdana Bold","Verdana Bold Italic","Verdana Italic","Viner Hand ITC","Vivaldi Italic","Vladimir Script","Webdings","Wide Latin","Wingdings","Wingdings 2","Wingdings 3","Yu Gothic Bold","Yu Gothic Light","Yu Gothic Medium","Yu Gothic Regular","Yu Gothic UI Bold","Yu Gothic UI Light","Yu Gothic UI Regular","Yu Gothic UI Semibold","Yu Gothic UI Semilight"]);

const $ = s => document.getElementById(s);
const store = {
  get(k, d) { try { const v = localStorage.getItem('tl.' + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('tl.' + k, JSON.stringify(v)); } catch {} }
};
// Was the click inside `sel`? Uses the path recorded at click time, so it still works when
// a handler has re-rendered (and detached) the clicked element.
const inside = (e, sel) => e.composedPath().some(n => n.matches?.(sel));
const esc = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const headline = $('headline'), stage = $('stage'), result = $('result'), body = document.body;

/* ---------- Fonts ---------- */

// Installed fonts are referenced with local(), so a saved choice renders before permission is asked.
const sheet = document.head.appendChild(document.createElement('style')).sheet;
// Google styles are fetched from Google's CSS and renamed the same way; `text` loads only those letters (dial labels).
const faces = new Map();
function face(s, text) {
  const key = text ? s.ps + '|' + text : s.ps;
  if (!faces.has(key)) {
    const name = 'L' + faces.size;
    faces.set(key, name); // bare ident: it goes inside style="" attributes
    if (s.g) {
      const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(s.family)}:ital,wght@${+s.it},${s.w}&display=swap`
        + (text ? '&text=' + encodeURIComponent(text) : '');
      fetch(url).then(r => r.text()).then(css => {
        for (const rule of css.match(/@font-face\s*{[^}]*}/g) || [])
          sheet.insertRule(rule.replace(/font-family:[^;]+;/, `font-family:"${name}";`).replace(/font-(weight|style):[^;]+;/g, ''));
      }).catch(() => {});
    } else {
      const q = v => v.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      sheet.insertRule(`@font-face{font-family:"${name}";src:local("${q(s.ps)}"),local("${q(s.full)}")}`);
    }
  }
  return faces.get(key);
}

// Google Fonts catalogue (gfonts.json, refreshed with gfonts.py), loaded the first time the tab is used.
const WN = {100:'Thin',200:'ExtraLight',300:'Light',400:'Regular',500:'Medium',600:'SemiBold',700:'Bold',800:'ExtraBold',900:'Black'};
let gfamilies = null;
async function ensureGoogle() {
  if (gfamilies) return true;
  try {
    gfamilies = (await (await fetch('gfonts.json')).json()).map(([name, vs], i) => ({ name, i, styles: vs.split(',').map(v => {
      const w = parseInt(v), it = v.endsWith('i');
      return { g: true, ps: `g:${name}:${v}`, family: name, w, it,
        style: it ? (w === 400 ? 'Italic' : WN[w] + ' Italic') : WN[w] || String(w) };
    }) }));
    return true;
  } catch { return msg('Couldn’t load the Google Fonts list. Check your connection.'); }
}

// Style name -> rough weight. Order matters (extra-bold before bold).
const W = [[/hairline|thin/i,100],[/extra ?light|ultra ?light|ext ?lt|xlight/i,200],[/light/i,300],[/medium/i,500],
  [/semi ?bold|demi|semibd/i,600],[/extra ?bold|ultra ?bold|ext ?bd|xbold|heavy/i,800],[/black|ultra/i,900],[/bold|\bbd\b/i,700]];
const near = (styles, w) => styles.reduce((a, s) => (Math.abs(s.w - w) + s.it * 1000) < (Math.abs(a.w - w) + a.it * 1000) ? s : a);

// Windows reports the old 4-style family names ("Graphik Light", style "Regular"), which splits every
// weight into its own family. The typographic names (name IDs 16/17) live in the font file itself.
async function typoName(fd) {
  const buf = await (await fd.blob()).arrayBuffer();
  const v = new DataView(buf);
  if (v.getUint32(0) === 0x74746366) return null;              // .ttc collection: keep Windows' names
  const tables = v.getUint16(4);
  for (let i = 0; i < tables; i++) {
    const r = 12 + 16 * i;
    if (v.getUint32(r) !== 0x6e616d65) continue;                // 'name'
    const o = v.getUint32(r + 8), count = v.getUint16(o + 2), strings = o + v.getUint16(o + 4), out = {};
    for (let j = 0; j < count; j++) {
      const n = o + 6 + 12 * j;
      const [pid, lid, id] = [v.getUint16(n), v.getUint16(n + 4), v.getUint16(n + 6)];
      if (pid !== 3 || lid !== 0x409 || (id !== 16 && id !== 17)) continue;
      let s = '';
      for (let k = 0, len = v.getUint16(n + 8), at = strings + v.getUint16(n + 10); k < len; k += 2) s += String.fromCharCode(v.getUint16(at + k));
      out[id] = s;
    }
    return out[16] ? [out[16], out[17] || ''] : null;
  }
  return null;
}

let families = null;
const fontData = new Map();             // postscript name -> FontData, for downloading the file
async function ensureFonts() {
  if (families) return true;
  if (!('queryLocalFonts' in window)) return msg('This browser can’t read installed fonts. Open the page in Chrome or Edge.');
  let fonts = [];
  try { fonts = await queryLocalFonts(); } catch {}
  // A denied permission can come back as an empty list rather than an error.
  if (!fonts.length) return msg('Font access is blocked. Click the icon left of the address bar, allow “Fonts”, then reload.');

  // Typographic names, cached per font so files are only read once.
  const cache = store.get('typo', {});
  const todo = fonts.filter(f => !(f.postscriptName in cache) && !SYSTEM.has(f.family) && !SYSTEM.has(f.fullName));
  if (todo.length) msg(`Reading ${todo.length} font files…`);
  for (let i = 0; i < todo.length; i += 24) {
    await Promise.all(todo.slice(i, i + 24).map(async f => {
      try { cache[f.postscriptName] = await typoName(f); } catch { cache[f.postscriptName] = null; }
    }));
  }
  if (todo.length) store.set('typo', cache);

  const map = new Map();
  for (const f of fonts) {
    if (fontData.has(f.postscriptName)) continue;
    fontData.set(f.postscriptName, f);
    const t = cache[f.postscriptName];
    const family = t ? t[0] : f.family;
    // No style name in the file: take it from the full name ("Graphik Light Italic" -> "Light Italic").
    const style = (t && (t[1] || f.fullName.replace(family, '').trim())) || f.style || 'Regular';
    if (!map.has(family)) map.set(family, []);
    map.get(family).push({ ps: f.postscriptName, full: f.fullName, legacy: f.family, style, family,
      w: (W.find(([r]) => r.test(style)) || [, 400])[1], it: /italic|oblique|\bita\b/i.test(style) });
  }
  families = [...map].map(([name, styles]) => ({
    name, styles: styles.sort((a, b) => a.w - b.w || a.it - b.it || a.style.localeCompare(b.style)),
    sys: SYSTEM.has(name) || styles.some(s => SYSTEM.has(s.legacy) || SYSTEM.has(s.full))
  })).sort((a, b) => a.name.localeCompare(b.name));
  families.forEach((f, i) => f.i = i);
  $('dMsg').hidden = true;
  return true;
}
function msg(t) { $('dMsg').textContent = t; $('dMsg').hidden = false; return false; }

/* ---------- Choices ---------- */

let head = store.get('head', null);   // one style
let para = store.get('para', null);   // { name, styles, reg? }

function setHeadFont(s) {
  headline.style.fontFamily = face(s) + ',system-ui';
  fit();
}
// Body text uses the picked weight (or the one nearest Regular); headings use the one nearest Bold.
const paraReg = p => p.styles.find(s => s.ps === p.reg) || near(p.styles, 400);
function setParaFont(p) {
  result.style.setProperty('--p-reg', face(paraReg(p)) + ',system-ui,sans-serif');
  result.style.setProperty('--p-bold', face(near(p.styles, 700)) + ',system-ui,sans-serif');
}
function applyHead(s) {
  head = s; store.set('head', s);
  setHeadFont(s);
  $('headName').style.fontFamily = face(s) + ',system-ui';
  $('headName').textContent = s.family;
  exportIcon();
  penOff();
}
function applyPara(f) {
  para = { name: f.name, styles: f.styles, reg: f.name === para?.name ? para.reg : undefined }; store.set('para', para);
  setParaFont(para);
  $('paraName').style.fontFamily = face(paraReg(para)) + ',system-ui,sans-serif';
  $('paraName').textContent = para.name;
}

/* ---------- Headline ---------- */

// Fit the line to the width: max size, shrink if it overflows.
function fit() {
  const max = innerHeight * 0.22;
  headline.style.fontSize = max + 'px';
  // Centred text overflows both sides, so measure the text itself, not scrollWidth.
  const range = document.createRange();
  range.selectNodeContents(headline);
  const pad = parseFloat(getComputedStyle(headline).paddingLeft) * 2;
  const r = (headline.clientWidth - pad) / (range.getBoundingClientRect().width || 1);
  if (r < 1) headline.style.fontSize = Math.max(16, max * r * 0.97) + 'px';
  placeCaret();
}
addEventListener('resize', fit);

// Serif I-beam cursor: one fixed size (the full-height bar from the empty line), placed at the insertion point.
const ibeam = $('ibeam');
let holdT;
function placeCaret() {
  const empty = !headline.textContent, focused = document.activeElement === headline;
  ibeam.hidden = !empty && !focused;                     // no cursor on finished text you're not editing
  if (ibeam.hidden) return;
  const line = $('line').getBoundingClientRect();
  let x = line.width / 2;                                // empty line: centred
  const sel = getSelection();
  if (!empty && sel.rangeCount && headline.contains(sel.focusNode)) {
    const r = sel.getRangeAt(0).cloneRange();
    r.collapse(false);
    const rect = r.getClientRects()[0] || r.getBoundingClientRect();
    if (rect && (rect.left || rect.right)) x = rect.left - line.left;
  }
  ibeam.style.left = x - ibeam.offsetWidth / 2 + 'px';
}
// Solid while you type, blinking again after a short pause.
function holdCaret() { ibeam.classList.add('hold'); clearTimeout(holdT); holdT = setTimeout(() => ibeam.classList.remove('hold'), 600); }
document.addEventListener('selectionchange', () => { placeCaret(); if (document.activeElement === headline) holdCaret(); });
headline.addEventListener('focus', placeCaret);
headline.addEventListener('blur', () => setTimeout(placeCaret));   // after focus has actually moved
document.fonts.addEventListener('loadingdone', placeCaret);

let timer, last = '';
headline.addEventListener('input', () => {
  const empty = !headline.textContent;
  stage.classList.toggle('empty', empty);
  if (!empty) { body.classList.add('typed'); $('hint').classList.remove('on'); }
  fit();
  clearTimeout(timer);
  timer = setTimeout(lookup, 2200);
});
headline.addEventListener('keydown', e => {
  if (e.key === 'Enter') { e.preventDefault(); clearTimeout(timer); lookup(); headline.blur(); }
});
setTimeout(() => !headline.textContent && $('hint').classList.add('on'), 4000);
headline.focus();
document.addEventListener('click', e => {
  if (!headline.textContent && !inside(e, '.dial-ui,.controls,.pill,.corner,.result')) headline.focus();
});

/* ---------- Article (Wikipedia) ---------- */

const TAGS = ['P','H2','H3','H4','UL','OL','BLOCKQUOTE'];
const strip = t => { let p; do { p = t; t = t.replace(/\s*\([^()]*\)|\s*\[[^\[\]]*\]/g, ''); } while (t !== p); return t; };

async function wiki(term) {
  const url = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts|pageprops&format=json&redirects=1&origin=*&titles=' + encodeURIComponent(term);
  const page = Object.values((await (await fetch(url)).json()).query.pages)[0];
  return page.missing === undefined && !page.pageprops?.disambiguation && page.extract ? page : null;
}

async function lookup() {
  const term = headline.textContent.trim().replace(/[#?]/g, '');
  if (!term || term === last) return;
  last = term;
  let page = null;
  try { page = await wiki(term) || (term.toLowerCase() !== term ? await wiki(term.toLowerCase()) : null); } catch {}

  let blocks = [];
  if (page) {
    for (const el of new DOMParser().parseFromString(page.extract, 'text/html').body.children) {
      if (/^H[234]$/.test(el.tagName) && /^(see also|references|notes|external links|further reading|bibliography|sources)/i.test(el.textContent.trim())) break;
      if (TAGS.includes(el.tagName) && el.textContent.trim()) blocks.push(el);
    }
    blocks = blocks.slice(0, 15);
    while (blocks.length && /^H/.test(blocks.at(-1).tagName)) blocks.pop();
  }
  const fromWiki = blocks.length > 0;
  if (!fromWiki) {
    blocks = ['Nothing on that one.',
      'Try a plainer word: a city, a fruit, a painter. Or skip it and type straight into these paragraphs. They’re editable, so you can test the paragraph font on your own words.']
      .map((t, i) => Object.assign(document.createElement(i ? 'p' : 'h2'), { textContent: t }));
  }

  result.innerHTML = '';
  for (const el of blocks) {
    const node = document.createElement(el.tagName);
    if (el.tagName === 'UL' || el.tagName === 'OL') {
      for (const li of el.querySelectorAll(':scope > li')) node.append(Object.assign(document.createElement('li'), { textContent: strip(li.textContent) }));
    } else node.textContent = strip(el.textContent);
    node.contentEditable = 'plaintext-only';
    node.spellcheck = false;
    const blk = document.createElement('section');
    blk.className = 'blk';
    blk.append(node);
    blk.insertAdjacentHTML('beforeend', '<span class="ctl" contenteditable="false"><button data-d="-1" title="Smaller">−</button><button data-d="1" title="Larger">+</button></span>');
    result.append(blk);
  }
  // Wikipedia text is CC BY-SA: credit the article it came from.
  document.getElementById('credit')?.remove();
  if (fromWiki) {
    const credit = document.createElement('p');
    credit.className = 'credit';
    credit.id = 'credit';
    const a = Object.assign(document.createElement('a'), {
      href: 'https://en.wikipedia.org/wiki/' + encodeURIComponent(page.title.replace(/ /g, '_')),
      target: '_blank', rel: 'noopener', textContent: page.title
    });
    const lic = Object.assign(document.createElement('a'), {
      href: 'https://creativecommons.org/licenses/by-sa/4.0/', target: '_blank', rel: 'noopener', textContent: 'CC BY-SA 4.0'
    });
    credit.append('From Wikipedia: ', a, ' · ', lic);
    body.append(credit);
  }
  showArticle(true);
  result.classList.remove('fade'); void result.offsetWidth; result.classList.add('fade');
}

result.addEventListener('click', e => {
  const b = e.target.closest('[data-d]');
  if (!b) return;
  const el = b.closest('.blk').firstElementChild;
  el.style.fontSize = parseFloat(getComputedStyle(el).fontSize) + +b.dataset.d + 'px';
});

function showArticle(on) {
  result.hidden = !on;
  const credit = document.getElementById('credit');
  if (credit) credit.hidden = !on;
  $('openArticle').hidden = on || !result.childElementCount;
  $('closeArticle').hidden = !on;
  $('paraPill').hidden = !on || !result.childElementCount;   // paragraph key only once text has loaded
}
$('closeArticle').addEventListener('click', () => showArticle(false));
$('openArticle').addEventListener('click', () => showArticle(true));

/* ---------- Opening and closing the dial ---------- */

let target = null;
async function openDrawer(t) {
  if (target === t) return closeDrawer();
  target = t;
  body.classList.add('drawer-open');
  $('line').classList.toggle('inactive', t === 'para');
  result.classList.toggle('inactive', t === 'head');
  initSound().catch(() => {});       // opening the dial is a click, which lets audio start
  await loadSource();
}

// Which list the dial shows. "My fonts" falls back to Google if font access isn't available.
// Only Chromium on desktop can read installed fonts; elsewhere the My fonts tab isn't offered at all.
const canLocal = 'queryLocalFonts' in window;
let src = canLocal ? store.get('src', 'google') : 'google';
if (!canLocal) document.querySelector('.tabs').remove();   // one source left, so no switch
async function loadSource() {
  $('dMsg').hidden = true;
  document.querySelectorAll('.tabs button').forEach(b => b.setAttribute('aria-pressed', b.dataset.src === src));
  $('dq').placeholder = src === 'google' ? 'Search Google Fonts' : 'Search my fonts';
  if (src === 'mine' && !families) {
    // Nothing to show until the browser has been allowed to read installed fonts, so the dial stays empty and asks.
    const granted = 'queryLocalFonts' in window && await navigator.permissions.query({ name: 'local-fonts' }).then(p => p.state === 'granted', () => false);
    if (!granted) return askFonts();
    if (!(await ensureFonts())) return emptyDial();
  } else if (src === 'google') await ensureGoogle();
  if (src === 'mine' ? families : gfamilies) buildWheel(true);
}
function emptyDial() {
  list = []; picked = -1;
  nodes.forEach(el => el.remove()); nodes.clear();
  $('dCount').textContent = '';
  body.classList.remove('wopen');
  body.classList.add('nolist');
  layout();
  draw();
}
function askFonts() {
  emptyDial();
  if (!('queryLocalFonts' in window)) return msg('This browser can’t read installed fonts. Open the page in Chrome or Edge, or use the Google tab.');
  $('dMsg').innerHTML = '<strong>Upload your fonts</strong><br>Add the fonts installed on this computer to preview them here. '
    + 'Your browser will ask first, and nothing leaves your computer.<br><button class="chip" id="dAllow">Allow access to my fonts</button>';
  $('dMsg').hidden = false;
  $('dAllow').addEventListener('click', async () => {
    $('dMsg').hidden = true;
    if (await ensureFonts()) { $('dMsg').hidden = true; buildWheel(true); }
  });
}
document.querySelectorAll('.tabs button').forEach(b => b.addEventListener('click', () => {
  src = b.dataset.src; store.set('src', src);
  $('dq').value = '';
  loadSource();
}));
function closeDrawer() {
  target = null;
  body.classList.remove('drawer-open', 'wopen');
  $('line').classList.remove('inactive');
  result.classList.remove('inactive');
}

/* ---------- Font dial (after Framer's "Circle Wrap") ----------
   A disc rises from the left edge. Labels sit on its rim like spokes, right-aligned; only the slice in
   view is drawn, so the list can be any length. Whatever stops at the ◀ pointer is applied. */

const wheel = $('wheel');
const ROW = 50;                       // px between neighbouring labels at the rim
let list = [], pos = 0, goal = 0, vel = 0, raf = 0, picked = -1;
const nodes = new Map();              // index -> label element currently on screen
let G = {};                           // geometry, recomputed on resize
// Selected row, left to right: pill (ends 12px past the rim) | GAP | long tick (10px) | GAP | ◀ pointer
const PILL_OUT = 12, GAP = 14, TICK = 10;

function layout() {
  const H = innerHeight, rim = Math.min(470, Math.max(260, innerWidth * .34));
  const R = Math.max(560, H * .72), cx = rim - R;
  G = { H, rim, R, cx };
  Object.assign($('disc').style, { left: cx - R - 70 + 'px', top: H / 2 - R - 70 + 'px', width: 2 * (R + 70) + 'px', height: 2 * (R + 70) + 'px' });
  wheel.style.width = rim + 80 + 'px';
  $('selBar').style.width = rim + PILL_OUT - 48 + 'px';                     // bar starts at 48px
  $('pointer').style.left = rim + PILL_OUT + GAP + TICK + GAP + 'px';
  nodes.forEach(el => el.style.maxWidth = rim - 60 + 'px');
}

function buildWheel(jumpToCurrent) {
  body.classList.remove('nolist');
  const q = $('dq').value.trim().toLowerCase();
  const all = src === 'google' ? gfamilies : families.filter(f => !f.sys).length ? families.filter(f => !f.sys) : families;
  list = all.filter(f => !q || f.name.toLowerCase().includes(q));
  $('dCount').textContent = `${list.length.toLocaleString()} famil${list.length === 1 ? 'y' : 'ies'}`;
  nodes.forEach(el => el.remove()); nodes.clear();
  const cur = target === 'head' ? head?.family : para?.name;
  const at = jumpToCurrent ? Math.max(0, list.findIndex(f => f.name === cur)) : 0;
  pos = goal = at; vel = 0; picked = jumpToCurrent ? at : -1;
  tick = at;                          // no click for the starting position
  layout();
  draw();
  showStyles(true);                   // typing in search only filters; fonts change when you turn the dial
}

function draw() {
  const { H, R, cx, rim } = G;
  const step = ROW / R;                                        // radians per label
  const span = Math.asin(Math.min(1, (H / 2 + ROW) / R));
  const lo = Math.max(0, Math.ceil(pos - span / step)), hi = Math.min(list.length - 1, Math.floor(pos + span / step));
  for (const [i, el] of nodes) if (i < lo || i > hi) { el.remove(); nodes.delete(i); }
  for (let i = lo; i <= hi; i++) {
    let el = nodes.get(i);
    if (!el) {
      el = document.createElement('button');
      el.className = 'wl';
      el.dataset.i = i;
      el.tabIndex = -1;
      el.textContent = list[i].name;                         // set in its own font
      el.style.maxWidth = rim - 60 + 'px';
      const s = near(list[i].styles, 400);
      el.style.fontFamily = face(s, s.g ? list[i].name : undefined) + ',system-ui';   // Google: just the name's letters
      wheel.append(el); nodes.set(i, el);
    }
    const a = (i - pos) * step;
    const near0 = Math.max(0, 1 - Math.abs(i - pos));        // 1 at the pointer, 0 one row away
    el.style.transform = `translate(${cx + R * Math.cos(a)}px,${H / 2 + R * Math.sin(a)}px) rotate(${a}rad) translate(calc(-100% - ${near0 * 10}px),-50%)`;
    el.style.opacity = Math.max(0, .35 * (1 - Math.abs(a) / span)) + near0 * .65;
    el.classList.toggle('on', i === picked && Math.abs(i - pos) < .5);
  }
  // Tick scale just outside the labels, turning with them: long ticks at fonts, short ones between.
  let d = '';
  for (let k = Math.max(0, Math.ceil((pos - span / step) * 2)); k <= Math.min((list.length - 1) * 2, Math.floor((pos + span / step) * 2)); k++) {
    const a = (k / 2 - pos) * step, r0 = R + PILL_OUT + GAP, r1 = r0 + (k % 2 ? TICK / 2 : TICK);
    d += `M${cx + r0 * Math.cos(a)} ${H / 2 + r0 * Math.sin(a)}L${cx + r1 * Math.cos(a)} ${H / 2 + r1 * Math.sin(a)}`;
  }
  $('ticks').setAttribute('d', d);
  // One click each time a new font reaches the pointer, like tuning across radio stations.
  const r = Math.round(pos);
  if (r !== tick) { tick = r; click(); }
}

/* ---------- Click sound ---------- */

let audio, clickBuf, tick = -1;
// The click is synthesised, so there is no audio file to license or host: a sharp noise burst, a short
// mid-range tick and a soft low thump, each dying away in a few milliseconds. Tune by ear.
const CLICK = { tickHz: 2200, thumpHz: 150, seconds: .03 };
function makeClick(ctx) {
  const sr = ctx.sampleRate, n = Math.round(CLICK.seconds * sr), buf = ctx.createBuffer(1, n, sr), d = buf.getChannelData(0);
  let peak = 0;
  for (let i = 0; i < n; i++) {
    const t = i / sr;
    d[i] = (Math.random() * 2 - 1) * Math.exp(-t / .0015) * .7
         + Math.sin(2 * Math.PI * CLICK.tickHz * t) * Math.exp(-t / .003) * .6
         + Math.sin(2 * Math.PI * CLICK.thumpHz * t) * Math.exp(-t / .007) * .5;
    peak = Math.max(peak, Math.abs(d[i]));
  }
  for (let i = 0; i < n; i++) d[i] /= peak;
  return buf;
}
async function initSound() {
  if (audio) return audio.resume();
  audio = new AudioContext();
  clickBuf = makeClick(audio);
}
function click() {
  if (!clickBuf || audio.state !== 'running') return;
  const s = audio.createBufferSource();
  s.buffer = clickBuf;
  s.playbackRate.value = .96 + Math.random() * .08;     // slight variation, like a real dial
  const vol = audio.createGain();
  vol.gain.value = .05;                                  // quiet: 5% of full scale
  s.connect(vol).connect(audio.destination);
  s.start();
}

// Spring toward the goal (Framer used spring, bounce .2, .4s).
function spin() {
  // Capped speed keeps long spins smooth; the bounce at the end stays under ~5% of a row.
  vel = Math.max(-.6, Math.min(.6, vel * .55 + (goal - pos) * .1));
  pos += vel;
  if (Math.abs(goal - pos) < .002 && Math.abs(vel) < .002) { pos = goal; raf = 0; draw(); return; }
  draw();
  raf = requestAnimationFrame(spin);
}
function go(to, snap = true) {
  goal = Math.max(0, Math.min(list.length - 1, to));
  if (snap) { goal = Math.round(goal); pick(); }
  if (!raf) raf = requestAnimationFrame(spin);
}

// Apply whatever lands on the pointer.
function pick() {
  if (!list.length || goal === picked) return;
  picked = goal;
  const f = list[picked];
  if (target === 'head') { if (head?.family !== f.name) applyHead(near(f.styles, 700)); }
  else if (target === 'para') applyPara(f);
  showStyles(true);
}

/* ---------- Weights card: a small dial of the family's styles ---------- */

const WROW = 44, WMID = 3;            // row height; the selected row sits in the 4th of 7 visible slots
let wFamily = null, wIndex = 0;
function currentStyle() { return target === 'head' ? head?.ps : para && paraReg(para).ps; }
function showStyles(rebuild) {
  const f = list[picked];
  body.classList.toggle('wopen', !!f && f.styles.length > 1);
  if (!f) return;
  if (rebuild || wFamily !== f) {
    wFamily = f;
    $('wCount').textContent = `${f.styles.length} styles`;
    $('wlist').innerHTML = f.styles.map((s, j) =>
      `<button class="wrow" data-j="${j}"><span class="tk"></span><span style="font-family:${face(s)}">${esc(s.style)}</span></button>`).join('');
  }
  wIndex = Math.max(0, f.styles.findIndex(s => s.ps === currentStyle()));
  $('wlist').querySelectorAll('.wrow').forEach((b, j) => b.classList.toggle('on', j === wIndex));
  $('wlist').style.transform = `translateY(${(WMID - wIndex) * WROW}px)`;
}
function setWeight(j) {
  const f = list[picked];
  if (!f) return;
  j = Math.max(0, Math.min(f.styles.length - 1, j));
  if (j === wIndex) return;
  const s = f.styles[j];
  if (target === 'head') applyHead(s);
  else { para.reg = s.ps; applyPara(f); }
  showStyles();
  click();                            // same tick as the font dial
}
$('wlist').addEventListener('click', e => {
  const b = e.target.closest('[data-j]');
  if (b) setWeight(+b.dataset.j);
});
// Scrolling over the card steps one weight per notch (trackpads: one per ~40px of travel).
// A mouse wheel sends one event per notch with a big jump (~100px in Chrome on Windows, or a "lines"
// unit elsewhere); trackpads send many small pixel amounts. One notch = one step; trackpads stay smooth.
const isNotch = e => e.deltaMode !== 0 || Math.abs(e.deltaY || e.deltaX) >= 50;
let wAcc = 0;
$('wcard').addEventListener('wheel', e => {
  e.preventDefault();
  const d = e.deltaY || e.deltaX;
  if (isNotch(e)) return setWeight(wIndex + Math.sign(d));
  wAcc += d;
  while (Math.abs(wAcc) >= 40) { setWeight(wIndex + Math.sign(wAcc)); wAcc -= 40 * Math.sign(wAcc); }
}, { passive: false });

/* ---------- Input on the font dial ---------- */

// While the dial is open, scrolling anywhere on the page turns it (the page itself doesn't scroll).
// The weights card keeps its own scrolling.
let snapT;
addEventListener('wheel', e => {
  if (!target || inside(e, '.wcard')) return;
  e.preventDefault();
  const d = e.deltaY || e.deltaX;
  if (isNotch(e)) return go(Math.round(goal) + Math.sign(d));
  go(goal + d / ROW, false);
  clearTimeout(snapT);
  snapT = setTimeout(() => go(goal), 110);
}, { passive: false });
let drag = null;
wheel.addEventListener('pointerdown', e => { drag = { y: e.clientY, g: goal, moved: false }; wheel.setPointerCapture(e.pointerId); });
wheel.addEventListener('pointermove', e => {
  if (!drag) return;
  const dy = e.clientY - drag.y;
  if (Math.abs(dy) > 4) drag.moved = true;
  if (drag.moved) go(drag.g - dy / ROW, false);
});
wheel.addEventListener('pointerup', e => {
  if (!drag) return;
  const label = !drag.moved && document.elementsFromPoint(e.clientX, e.clientY).find(el => el.classList?.contains('wl'));
  drag = null;
  go(label ? +label.dataset.i : goal);
});
// ↑/↓ turn the font dial, ←/→ step the weights (not while typing in the search field).
document.addEventListener('keydown', e => {
  if (!target) return;
  if (e.key === 'Escape') return closeDrawer();
  const typing = e.target === $('dq');
  const d = { ArrowDown: 1, ArrowUp: -1, PageDown: 8, PageUp: -8 }[e.key];
  if (d) { e.preventDefault(); go(goal + d); }
  else if (!typing && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) { e.preventDefault(); setWeight(wIndex + (e.key === 'ArrowRight' ? 1 : -1)); }
});
addEventListener('resize', () => { if (target) { layout(); draw(); } });

$('headName').addEventListener('click', () => openDrawer('head'));
$('paraName').addEventListener('click', () => openDrawer('para'));
$('dq').addEventListener('input', () => (src === 'google' ? gfamilies : families) && buildWheel(false));
document.addEventListener('click', e => { if (target && !inside(e, '.dial-ui,.controls,.pill,.result')) closeDrawer(); });

/* ---------- Ligatures, download, lights ---------- */

$('liga').addEventListener('click', e => {
  const on = body.classList.toggle('liga');
  e.currentTarget.setAttribute('aria-pressed', on);
});


/* ---------- Pen: a full-screen editor for the headline's outlines (Google fonts only) ----------
   Idea after otherkind.design's wordmark. Outlines come from the font's static .woff on Fontsource, parsed
   with opentype.js; both load on first use. Wheel zooms, Space/middle-drag pans, edits are throwaway.
   Points are keyed "<segment>:p|c1|c2". Each segment carries g, the glyph it belongs to. */

var pen = null;        // { segs, orig, twin, sel, cur, drag, z, tx, ty, el, undo, redo, snap, ruler, focus, ... }
const penFonts = new Map();
function penFont(s) {
  if (!penFonts.has(s.ps)) penFonts.set(s.ps, (async () => {
    if (!window.opentype) await new Promise((ok, no) => document.head.append(Object.assign(document.createElement('script'),
      { src: 'https://cdn.jsdelivr.net/npm/opentype.js@1.3.4/dist/opentype.min.js', onload: ok, onerror: no })));
    const id = s.family.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const res = await fetch(`https://cdn.jsdelivr.net/fontsource/fonts/${id}@latest/latin-${s.w}-${s.it ? 'italic' : 'normal'}.woff`);
    if (!res.ok) throw 0;
    return opentype.parse(await res.arrayBuffer());
  })().catch(e => { penFonts.delete(s.ps); throw e; }));
  return penFonts.get(s.ps);
}

// A short notice at the bottom, for when the editor can't open or something was copied.
function penNote(t) {
  document.querySelector('.penNote')?.remove();
  const n = Object.assign(document.createElement('p'), { className: 'penNote', textContent: t });
  document.body.append(n);
  setTimeout(() => n.remove(), 3500);
}
function penOff() {
  if (!pen) return;
  removeEventListener('keydown', pen.keys);
  removeEventListener('keyup', pen.keys);
  pen.el.remove();
  pen = null;
}

const pt = (x, y) => ({ x, y });
const copy = v => JSON.parse(JSON.stringify(v));
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
// World coordinates are the font outline at 200px; the view maps them to the screen (screen = world * z + t).
const sx = (v, x) => x * v.z + v.tx, sy = (v, y) => y * v.z + v.ty;
const prevPoint = (segs, i) => { for (let j = i - 1; j >= 0; j--) if (segs[j].t !== 'Z') return segs[j].p; };

// A closed contour's last anchor sits on its first; twin maps one to the other so they move together.
function penTwins(segs) {
  const twin = {};
  let start = -1;
  segs.forEach((s, i) => {
    if (s.t === 'M') start = i;
    else if (s.t === 'Z' && start >= 0) {
      const last = i - 1;
      if (segs[last].t !== 'M' && dist(segs[last].p, segs[start].p) < .5) { twin[last] = start; twin[start] = last; }
    }
  });
  return twin;
}

// Which glyph's points are live: all of them, or (Focus) just the glyph you're working in.
function penOnly() {
  if (!pen.focus) return null;
  for (const k of pen.sel) return pen.segs[+k.split(':')[0]].g;
  let best = -1, bd = 160;
  if (pen.cur) for (const [k, q] of penPoints(null)) {
    const d = Math.hypot(sx(pen, q.x) - pen.cur.x, sy(pen, q.y) - pen.cur.y);
    if (d < bd) { bd = d; best = pen.segs[+k.split(':')[0]].g; }
  }
  return best;
}
// Every editable point as [key, point], limited to one glyph when `only` is set.
function penPoints(only) {
  const out = [];
  pen.segs.forEach((s, i) => {
    if (s.t === 'Z' || (only != null && s.g !== only)) return;
    out.push([i + ':p', s.p]);
    if (s.t === 'C') out.push([i + ':c1', s.c1], [i + ':c2', s.c2]);
  });
  return out;
}
const penPt = k => { const [i, f] = k.split(':'); return f === 'p' ? pen.segs[i].p : pen.segs[i][f]; };

function penDraw() {
  const v = pen, { segs, sel, cur, drag } = pen, only = penOnly();
  const X = q => sx(v, q.x), Y = q => sy(v, q.y);
  const w = q => v.all ? 1 : !cur ? 0 : Math.max(0, Math.min(1, 1 - (Math.hypot(X(q) - cur.x, Y(q) - cur.y) - 30) / 40));   // fades 30 -> 70px
  let d = '', h = '';
  segs.forEach((s, i) => {
    if (s.t === 'Z') return (d += 'Z');
    d += s.t === 'C' ? `C${X(s.c1)} ${Y(s.c1)} ${X(s.c2)} ${Y(s.c2)} ${X(s.p)} ${Y(s.p)}` : `${s.t}${X(s.p)} ${Y(s.p)}`;
    if (only != null && s.g !== only) return;
    const from = prevPoint(segs, i);
    const mark = (k, q, a, line) => {
      const on = sel.has(i + ':' + k), o = on ? 1 : a;
      if (o <= 0) return;
      if (line) h += `<line class="ln" x1="${X(line)}" y1="${Y(line)}" x2="${X(q)}" y2="${Y(q)}" opacity="${o}"/>`;
      h += k === 'p' ? `<rect class="h${on ? ' on' : ''}" x="${X(q) - 5}" y="${Y(q) - 5}" width="10" height="10" opacity="${o}"/>`
                     : `<circle class="h${on ? ' on' : ''}" cx="${X(q)}" cy="${Y(q)}" r="5" opacity="${o}"/>`;
    };
    if (s.t === 'C') { mark('c1', s.c1, w(s.c1), from); mark('c2', s.c2, w(s.c2), s.p); }
    mark('p', s.p, w(s.p));
  });
  if (pen.draft?.pts.length) {                           // the shape being drawn, with a rubber band to the cursor
    const D = pen.draft.pts, last = D[D.length - 1], cw = cur && pt((cur.x - v.tx) / v.z, (cur.y - v.ty) / v.z);
    const seg = (a, b) => `C${X(a.hout || a.p)} ${Y(a.hout || a.p)} ${X(b.hin || b.p)} ${Y(b.hin || b.p)} ${X(b.p)} ${Y(b.p)}`;
    let dd = `M${X(D[0].p)} ${Y(D[0].p)}`;
    for (let i = 1; i < D.length; i++) dd += seg(D[i - 1], D[i]);
    if (cw && !drag) dd += seg(last, { p: cw });
    h += `<path class="dr" d="${dd}"/>`;
    const close = cw && D.length > 2 && Math.hypot(X(D[0].p) - cur.x, Y(D[0].p) - cur.y) < 10;
    D.forEach((q, i) => {
      for (const k of ['hin', 'hout']) if (q[k]) h += `<line class="ln" x1="${X(q.p)}" y1="${Y(q.p)}" x2="${X(q[k])}" y2="${Y(q[k])}"/><circle class="h" cx="${X(q[k])}" cy="${Y(q[k])}" r="4"/>`;
      h += `<rect class="h${i === 0 && close ? ' on' : ''}" x="${X(q.p) - 5}" y="${Y(q.p) - 5}" width="10" height="10"/>`;
    });
  }
  if (drag?.kind === 'marquee') h += `<rect class="mq" x="${Math.min(drag.o.x, cur.x)}" y="${Math.min(drag.o.y, cur.y)}" width="${Math.abs(cur.x - drag.o.x)}" height="${Math.abs(cur.y - drag.o.y)}"/>`;
  const el = pen.el;
  el.querySelector('.glyphs').setAttribute('d', d);
  el.querySelector('.handles').innerHTML = h;
  const base = el.querySelector('.base');
  base.setAttribute('y1', sy(v, 0)); base.setAttribute('y2', sy(v, 0));
  // Grid: a world step that stays 14-40px on screen, with a stronger line every 5th.
  let st = 10;
  while (st * v.z < 14) st *= 2;
  while (st * v.z > 40) st /= 2;
  pen.st = st;
  const m = st * v.z, line = (a, c) => `linear-gradient(${a},${c} 1px,transparent 1px)`;
  const minor = 'color-mix(in srgb,var(--fg) 7%,transparent)', major = 'color-mix(in srgb,var(--fg) 14%,transparent)';
  Object.assign(el.style, {
    backgroundImage: [line('to bottom', major), line('to right', major), line('to bottom', minor), line('to right', minor)].join(),
    backgroundSize: `${m * 5}px ${m * 5}px,${m * 5}px ${m * 5}px,${m}px ${m}px,${m}px ${m}px`,
    backgroundPosition: `${v.tx}px ${v.ty}px`
  });
  // Rulers: ticks at the grid step, labelled every 5th, plus the cursor's position.
  let rl = '';
  if (v.ruler) {
    const W = innerWidth, H = innerHeight, B = 22;
    rl = `<rect width="${W}" height="${B}"/><rect width="${B}" height="${H}"/>`;
    for (let k = Math.ceil((B - v.tx) / v.z / st); k * st * v.z + v.tx < W; k++) {
      const x = k * st * v.z + v.tx, big = k % 5 === 0;
      rl += `<line x1="${x}" x2="${x}" y1="${big ? 6 : 14}" y2="${B}"/>` + (big ? `<text x="${x + 3}" y="11">${Math.round(k * st)}</text>` : '');
    }
    for (let k = Math.ceil((B - v.ty) / v.z / st); k * st * v.z + v.ty < H; k++) {
      const y = k * st * v.z + v.ty, big = k % 5 === 0;
      rl += `<line y1="${y}" y2="${y}" x1="${big ? 6 : 14}" x2="${B}"/>` + (big ? `<text transform="translate(10 ${y - 3}) rotate(-90)">${Math.round(-k * st)}</text>` : '');
    }
    if (cur) rl += `<line class="cur" x1="${cur.x}" x2="${cur.x}" y1="0" y2="${B}"/><line class="cur" y1="${cur.y}" y2="${cur.y}" x1="0" x2="${B}"/>`;
  }
  el.querySelector('.rl').innerHTML = rl;
  el.classList.toggle('ruled', !!v.ruler);
  el.querySelector('.zoom').textContent = Math.round(v.z / v.fit * 100) + '%';
  el.querySelector('#undo').disabled = !pen.undo.length;
  el.querySelector('#redo').disabled = !pen.redo.length;
}

/* ----- Editing ----- */

function penSave(snap = copy(pen.segs)) {          // call before a change; one entry per user action
  pen.undo.push(snap);
  if (pen.undo.length > 100) pen.undo.shift();
  pen.redo = [];
}
function penRestore(from, to) {
  if (!from.length) return;
  to.push(copy(pen.segs));
  pen.segs = from.pop();
  pen.twin = penTwins(pen.segs);
  pen.sel = new Set();
  penDraw();
}
function penReplace(segs) {                         // structural edit: indices change, so the selection goes
  pen.segs = segs; pen.twin = penTwins(segs); pen.sel = new Set(); penDraw();
}

function penMove(dx, dy) {                          // world units
  const { segs, sel, twin } = pen, move = new Set(sel);
  for (const k of sel) {
    if (!k.endsWith(':p')) continue;
    const i = +k.split(':')[0];
    for (const j of [i, twin[i]]) {
      if (j === undefined) continue;
      move.add(j + ':p');                           // the anchor drags its own handles along
      if (segs[j].t === 'C') move.add(j + ':c2');
      if (segs[j + 1]?.t === 'C') move.add((j + 1) + ':c1');
    }
  }
  for (const k of move) { const q = penPt(k); q.x += dx; q.y += dy; }
}

// Contours as nodes + arcs, so removing a point is just merging two arcs. arc i runs node i -> node i+1 (wrapping).
function penParse(segs) {
  const cs = [], where = {};
  let c = null, n = 0;
  segs.forEach((s, i) => {
    if (s.t === 'M') { c = { g: s.g, nodes: [copy(s.p)], arcs: [] }; cs.push(c); n = 0; where[i] = [c, 0]; }
    else if (s.t === 'Z') { c.closed = true; c = null; }
    else { c.arcs.push({ t: s.t, c1: s.c1 && copy(s.c1), c2: s.c2 && copy(s.c2) }); c.nodes.push(copy(s.p)); where[i] = [c, ++n]; }
  });
  for (const k of cs) {
    if (k.nodes.length > 1 && dist(k.nodes[k.nodes.length - 1], k.nodes[0]) < .5) k.nodes.pop();
    else if (k.closed) k.arcs.push({ t: 'L' });     // the implicit closing line
  }
  for (const i in where) where[i][1] %= where[i][0].nodes.length;
  return { cs, where };
}
function penBuild(cs) {
  const out = [];
  for (const c of cs) {
    const m = c.nodes.length;
    if (m < 3) continue;                            // too small to be a shape: it vanishes
    out.push({ t: 'M', p: copy(c.nodes[0]), g: c.g });
    for (let i = 0; i < m; i++) {
      const a = c.arcs[i], to = copy(c.nodes[(i + 1) % m]);
      out.push(a.t === 'C' ? { t: 'C', c1: a.c1, c2: a.c2, p: to, g: c.g } : { t: 'L', p: to, g: c.g });
    }
    out.push({ t: 'Z', g: c.g });
  }
  return out;
}

function penDelete() {
  if (!pen.sel.size) return;
  penSave();
  const handles = [...pen.sel].filter(k => !k.endsWith(':p'));
  for (const k of handles) {                        // a selected handle retracts into its anchor
    const i = +k.split(':')[0], q = penPt(k), to = k.endsWith('c1') ? prevPoint(pen.segs, i) : pen.segs[i].p;
    q.x = to.x; q.y = to.y;
  }
  const anchors = [...pen.sel].filter(k => k.endsWith(':p'));
  if (!anchors.length) { pen.sel = new Set(); return penDraw(); }
  const { cs, where } = penParse(pen.segs);
  for (const k of anchors) { const [c, n] = where[+k.split(':')[0]]; (c.del ||= new Set()).add(n); }
  for (const c of cs) {
    if (!c.del) continue;
    for (const n of [...c.del].sort((a, b) => b - a)) {     // highest first, so lower indices stay valid
      const m = c.nodes.length;
      if (m <= 3) { c.nodes = []; break; }
      const prev = (n - 1 + m) % m, next = (n + 1) % m, a = c.arcs[prev], b = c.arcs[n];
      c.arcs[prev] = a.t === 'L' && b.t === 'L' ? { t: 'L' }
        : { t: 'C', c1: a.t === 'C' ? a.c1 : copy(c.nodes[prev]), c2: b.t === 'C' ? b.c2 : copy(c.nodes[next]) };
      c.arcs.splice(n, 1); c.nodes.splice(n, 1);
    }
  }
  penReplace(penBuild(cs));
}

// The segment nearest a screen point, within `r` px: { d, i, t }. Samples each segment, which is plenty for picking.
function penSegAt(at, only, r) {
  const { segs } = pen;
  let best = null;
  segs.forEach((s, i) => {
    if (s.t === 'Z' || s.t === 'M' || (only != null && s.g !== only)) return;
    const a = prevPoint(segs, i);
    for (let k = 1; k < 24; k++) {
      const t = k / 24, u = 1 - t;
      const P = s.t === 'C'
        ? pt(u*u*u*a.x + 3*u*u*t*s.c1.x + 3*u*t*t*s.c2.x + t*t*t*s.p.x, u*u*u*a.y + 3*u*u*t*s.c1.y + 3*u*t*t*s.c2.y + t*t*t*s.p.y)
        : pt(a.x + (s.p.x - a.x) * t, a.y + (s.p.y - a.y) * t);
      const d = Math.hypot(sx(pen, P.x) - at.x, sy(pen, P.y) - at.y);
      if (d < r && (!best || d < best.d)) best = { d, i, t };
    }
  });
  return best;
}

// For anchor j: the segment arriving at it (a) and leaving it (b), following a closed contour across its seam.
function penLinks(j) {
  const { segs, twin } = pen, isM = segs[j].t === 'M', tw = twin[j];
  return { a: isM ? tw : j, b: isM ? j + 1 : (tw !== undefined && tw < j ? tw + 1 : j + 1) };
}

// The handle on the far side of this one's anchor, if the two are lined up (a smooth point): { key, P, len }.
function penPartner(k) {
  const { segs } = pen, [si, f] = k.split(':'), i = +si;
  if (f === 'p') return null;
  let j = i;
  if (f === 'c1') { j = i - 1; while (j >= 0 && segs[j].t === 'Z') j--; }
  if (j < 0) return null;
  const { a, b } = penLinks(j), pi = f === 'c1' ? a : b;
  if (pi === undefined || !segs[pi] || segs[pi].t !== 'C' || pi === i) return null;
  const key = pi + ':' + (f === 'c1' ? 'c2' : 'c1'), P = segs[j].p, h = penPt(k), o = penPt(key);
  const u = pt(h.x - P.x, h.y - P.y), v = pt(o.x - P.x, o.y - P.y), lu = Math.hypot(u.x, u.y), lv = Math.hypot(v.x, v.y);
  if (lu < .01 || lv < .01) return null;
  const cross = Math.abs(u.x * v.y - u.y * v.x) / (lu * lv), dot = u.x * v.x + u.y * v.y;
  return cross < .05 && dot < 0 ? { key, P, len: lv } : null;
}

// Alt + double-click a segment: straight line <-> curve.
function penFlip(at) {
  const sg = penSegAt(at, penOnly(), 10);
  if (!sg) return;
  penSave();
  const s = pen.segs[sg.i], a = prevPoint(pen.segs, sg.i);
  if (s.t === 'C') {
    pen.segs[sg.i] = { t: 'L', p: s.p, g: s.g };
    pen.sel.delete(sg.i + ':c1'); pen.sel.delete(sg.i + ':c2');
  } else {
    const at3 = f => pt(a.x + (s.p.x - a.x) * f, a.y + (s.p.y - a.y) * f);
    pen.segs[sg.i] = { t: 'C', c1: at3(1 / 3), c2: at3(2 / 3), p: s.p, g: s.g };
  }
  penDraw();
}

// Double-click a curve to add a point there, keeping its shape (de Casteljau split).
function penInsert(at) {
  const { segs } = pen, best = penSegAt(at, penOnly(), 10);
  if (!best) return;
  penSave();
  const s = segs[best.i], a = prevPoint(segs, best.i), t = best.t, mid = (p, q) => pt(p.x + (q.x - p.x) * t, p.y + (q.y - p.y) * t);
  let parts;
  if (s.t === 'C') {
    const ab = mid(a, s.c1), bc = mid(s.c1, s.c2), cd = mid(s.c2, s.p), abc = mid(ab, bc), bcd = mid(bc, cd), m = mid(abc, bcd);
    parts = [{ t: 'C', c1: ab, c2: abc, p: m, g: s.g }, { t: 'C', c1: bcd, c2: cd, p: s.p, g: s.g }];
  } else {
    parts = [{ t: 'L', p: mid(a, s.p), g: s.g }, { t: 'L', p: s.p, g: s.g }];
  }
  const out = copy(segs);
  out.splice(best.i, 1, ...copy(parts));
  penReplace(out);
}

// Double-click an anchor: with handles -> corner (handles retract); without -> smooth (handles line up with its neighbours).
function penSmooth(i) {
  const { segs } = pen, P = segs[i].p, { a, b } = penLinks(i);
  if (a === undefined || !segs[b] || segs[b].t === 'Z') return;
  const A = prevPoint(segs, a), B = segs[b].p;
  penSave();
  const has = (segs[a].t === 'C' && dist(segs[a].c2, P) > .01) || (segs[b].t === 'C' && dist(segs[b].c1, P) > .01);
  const toC = (j, c1, c2) => { segs[j] = { t: 'C', c1, c2, p: segs[j].p, g: segs[j].g }; };
  if (has) {
    if (segs[a].t === 'C') segs[a].c2 = copy(P); else toC(a, copy(A), copy(P));
    if (segs[b].t === 'C') segs[b].c1 = copy(P); else toC(b, copy(P), copy(B));
  } else {
    const len = dist(A, B) || 1, d = pt((B.x - A.x) / len, (B.y - A.y) / len), li = dist(P, A) / 3, lo = dist(P, B) / 3;
    const hin = pt(P.x - d.x * li, P.y - d.y * li), hout = pt(P.x + d.x * lo, P.y + d.y * lo);
    if (segs[a].t === 'C') segs[a].c2 = hin; else toC(a, copy(A), hin);
    if (segs[b].t === 'C') segs[b].c1 = hout; else toC(b, hout, copy(B));
  }
  pen.sel = new Set([i + ':p']);
  penDraw();
}

function penSvg() {
  const r = n => Math.round(n * 100) / 100;
  let d = '', x1 = 1e9, y1 = 1e9, x2 = -1e9, y2 = -1e9;
  const ext = q => { x1 = Math.min(x1, q.x); y1 = Math.min(y1, q.y); x2 = Math.max(x2, q.x); y2 = Math.max(y2, q.y); };
  for (const s of pen.segs) {
    if (s.t === 'Z') { d += 'Z'; continue; }
    ext(s.p);
    if (s.t === 'C') { ext(s.c1); ext(s.c2); d += `C${r(s.c1.x)} ${r(s.c1.y)} ${r(s.c2.x)} ${r(s.c2.y)} ${r(s.p.x)} ${r(s.p.y)}`; }
    else d += `${s.t}${r(s.p.x)} ${r(s.p.y)}`;
  }
  const pad = 10;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${r(x1 - pad)} ${r(y1 - pad)} ${r(x2 - x1 + 2 * pad)} ${r(y2 - y1 + 2 * pad)}"><path d="${d}"/></svg>\n`;
}

// Close the drawn shape and add it to the letter nearest its first point, so it moves, bends and exports like the rest.
function penFinishDraft() {
  const D = pen.draft;
  pen.draft = null;
  if (!D || D.pts.length < 3) return penDraw();
  let g = 0, best = 1e9;
  for (const [k, q] of penPoints(null)) {
    const d = dist(q, D.pts[0].p);
    if (d < best) { best = d; g = pen.segs[+k.split(':')[0]].g; }
  }
  penSave();
  const out = [{ t: 'M', p: copy(D.pts[0].p), g }], n = D.pts.length;
  for (let i = 1; i <= n; i++) {                    // the last segment runs back to the start
    const a = D.pts[i - 1], b = D.pts[i % n];
    out.push(a.hout || b.hin ? { t: 'C', c1: copy(a.hout || a.p), c2: copy(b.hin || b.p), p: copy(b.p), g } : { t: 'L', p: copy(b.p), g });
  }
  out.push({ t: 'Z', g });
  penReplace(pen.segs.concat(out));
}

// Flip a shape's direction. With the fill rule used here that is what turns a shape into a hole (or back).
function penReverse() {
  const { cs, where } = penParse(pen.segs), pick = new Set();
  for (const k of pen.sel) { const w = where[+k.split(':')[0]]; if (w) pick.add(w[0]); }
  if (!pick.size && cs.length) pick.add(cs[cs.length - 1]);      // nothing selected: the one drawn last
  if (!pick.size) return;
  penSave();
  for (const c of pick) {
    const m = c.nodes.length, nodes = [], arcs = [];
    for (let k = 0; k < m; k++) {
      const j = (m - k) % m, a = c.arcs[(j - 1 + m) % m];
      nodes.push(c.nodes[j]);
      arcs.push(a.t === 'C' ? { t: 'C', c1: a.c2, c2: a.c1 } : { t: 'L' });
    }
    c.nodes = nodes; c.arcs = arcs;
  }
  penReplace(penBuild(cs));
}

/* ----- Opening ----- */

async function penOn() {
  if (pen || !head?.g) return;
  let font;
  try { font = await penFont(head); } catch { return penNote('Couldn’t load outlines for this font. Try another weight.'); }
  closeDrawer();
  headline.blur();
  const L = body.classList.contains('liga'), text = headline.textContent || head.family;
  const segs = [];
  let gi = 0;
  font.forEachGlyph(text, 0, 0, 200, { features: { liga: L, rlig: L, clig: L } }, (glyph, x, y, size) => {
    let c = pt(0, 0);
    const add = o => { o.g = gi; segs.push(o); };
    for (const k of glyph.getPath(x, y, size).commands) {
      if (k.type === 'Z') add({ t: 'Z' });
      else if (k.type === 'Q') {        // TrueType quadratic -> cubic, so every curve has two handles
        add({ t: 'C', c1: pt(c.x + 2 / 3 * (k.x1 - c.x), c.y + 2 / 3 * (k.y1 - c.y)), c2: pt(k.x + 2 / 3 * (k.x1 - k.x), k.y + 2 / 3 * (k.y1 - k.y)), p: pt(k.x, k.y) });
        c = pt(k.x, k.y);
      } else if (k.type === 'C') { add({ t: 'C', c1: pt(k.x1, k.y1), c2: pt(k.x2, k.y2), p: pt(k.x, k.y) }); c = pt(k.x, k.y); }
      else { add({ t: k.type, p: pt(k.x, k.y) }); c = pt(k.x, k.y); }
    }
    gi++;
  });
  if (!segs.length) return penNote('Nothing to edit in this text.');

  const el = document.createElement('div');
  el.className = 'penEd';
  const ic = d => `<svg viewBox="0 0 24 24"><path d="${d}"/></svg>`;
  const btn = (id, title, d) => `<button class="chip icon" id="${id}" data-a="${id}" title="${title}">${ic(d)}</button>`;
  el.innerHTML = '<svg><line class="base" x1="0" x2="100%"/><path class="glyphs"/><g class="handles"/><g class="rl"/></svg>'
    + '<div class="penBar"><button class="chip" data-a="done">Done</button><button class="chip" data-a="reset">Reset</button>'
    + '<button class="chip" data-a="fit">Fit</button>'
    + btn('draw', 'Draw a new shape (P)', 'M4 20l4-1 11-11-3-3L5 16zM14 6l3 3')
    + btn('reverse', 'Reverse the direction of the selected shape, or the last one drawn (turns it into a hole)', 'M7 7h11l-3-3M17 17H6l3 3')
    + btn('undo', 'Undo (Ctrl+Z)', 'M9 14 4 9l5-5M4 9h10a6 6 0 0 1 0 12h-4')
    + btn('redo', 'Redo (Ctrl+Shift+Z)', 'M15 14l5-5-5-5M20 9H10a6 6 0 0 0 0 12h4')
    + btn('ruler', 'Rulers', 'M3 8h18v8H3zM7 8v3M11 8v4M15 8v3M19 8v4')
    + btn('snap', 'Snap to grid', 'M4 4h16v16H4zM4 12h16M12 4v16')
    + btn('focus', 'Focus: show only the points of the letter you are in', 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM12 3v3M12 18v3M3 12h3M18 12h3')
    + btn('allh', 'Show every handle', 'M5 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M9 12h6')
    + btn('save', 'Download SVG', 'M12 4v11m-5-5 5 5 5-5M5 19h14')
    + btn('clip', 'Copy SVG', 'M9 9h11v11H9zM5 15V5h10')
    + '<span class="zoom"></span></div>'
    + '<details class="penKeys" open><summary>Shortcuts</summary><p><kbd>Scroll</kbd><span>Zoom in and out</span></p><p><kbd>Space + drag</kbd><span>Pan the view</span></p><p><kbd>Drag a point</kbd><span>Move it</span></p><p><kbd>Drag a curve</kbd><span>Bend it</span></p><p><kbd>Alt + drag a handle</kbd><span>Move it alone</span></p><p><kbd>Shift + click</kbd><span>Add to the selection</span></p><p><kbd>Drag on empty space</kbd><span>Select a group</span></p><p><kbd>Double-click a curve</kbd><span>Add a point</span></p><p><kbd>Double-click a point</kbd><span>Round it, or make it sharp</span></p><p><kbd>Alt + double-click</kbd><span>Line ⇄ curve</span></p><p><kbd>Delete</kbd><span>Remove the selected point</span></p><p><kbd>Arrow keys</kbd><span>Nudge (Shift = 1 unit)</span></p><p><kbd>Ctrl + Z</kbd><span>Undo (Shift for redo)</span></p><p><kbd>P</kbd><span>Pen: draw a new shape</span></p><p><kbd>Click, or click + drag</kbd><span>In pen mode: a point, or a curve</span></p><p><kbd>Enter</kbd><span>Close the shape (Esc cancels)</span></p><p><kbd>Esc</kbd><span>Close the editor</span></p><p class="note"><b>Focus</b> (the target button): shows the points of one letter only, the one you are working in, so neighbouring letters stay out of the way. <b>Handles</b> shows every handle at once. <b>Reverse</b> flips a shape’s direction, which turns a shape you drew into a hole.</p></details>';
  document.body.append(el);

  let x1 = 1e9, y1 = 1e9, x2 = -1e9, y2 = -1e9;
  for (const s of segs) if (s.t !== 'Z') { x1 = Math.min(x1, s.p.x); y1 = Math.min(y1, s.p.y); x2 = Math.max(x2, s.p.x); y2 = Math.max(y2, s.p.y); }
  const W = innerWidth, H = innerHeight;
  const fit = Math.min(W * .8 / Math.max(1, x2 - x1), H * .5 / Math.max(1, y2 - y1));
  const home = { z: fit, tx: W / 2 - fit * (x1 + x2) / 2, ty: H / 2 - fit * (y1 + y2) / 2 };
  pen = { segs, twin: penTwins(segs), sel: new Set(), cur: null, drag: null, orig: copy(segs), el, fit, ...home,
          space: false, undo: [], redo: [], snap: false, ruler: false, focus: false, all: false, draw: false, draft: null };

  const setDraw = on => {
    pen.draw = on; pen.draft = null; pen.sel = new Set();
    el.classList.toggle('drawing', on);
    el.querySelector('#draw').setAttribute('aria-pressed', on);
    penDraw();
  };
  const arrows = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
  pen.keys = e => {
    if (e.code === 'Space') { pen.space = e.type === 'keydown'; e.preventDefault(); return; }
    if (e.type !== 'keydown') return;
    const mod = e.ctrlKey || e.metaKey, k = e.key.toLowerCase();
    if (k === 'escape') { if (pen.draft) { pen.draft = null; penDraw(); } else if (pen.draw) setDraw(false); else penOff(); }
    else if (k === 'p' && !mod) setDraw(!pen.draw);
    else if (k === 'enter' && pen.draft) { e.preventDefault(); penFinishDraft(); }
    else if (k === 'backspace' && pen.draft) {          // take back the last point
      e.preventDefault();
      pen.draft.pts.pop();
      if (!pen.draft.pts.length) pen.draft = null;
      penDraw();
    }
    else if (mod && k === 'z') { e.preventDefault(); e.shiftKey ? penRestore(pen.redo, pen.undo) : penRestore(pen.undo, pen.redo); }
    else if (mod && k === 'y') { e.preventDefault(); penRestore(pen.redo, pen.undo); }
    else if (mod && k === 'a') { e.preventDefault(); pen.sel = new Set(penPoints(penOnly()).map(([key]) => key)); penDraw(); }
    else if (k === 'delete' || k === 'backspace') { e.preventDefault(); penDelete(); }
    else if (arrows[e.key] && pen.sel.size) {
      e.preventDefault();
      const step = e.shiftKey ? 1 : pen.st;             // a grid step; Shift for a single unit
      penSave();
      penMove(arrows[e.key][0] * step, arrows[e.key][1] * step);
      penDraw();
    }
  };
  addEventListener('keydown', pen.keys);
  addEventListener('keyup', pen.keys);

  // The shortcuts card starts open so the tools are obvious, and tucks itself away on first use (the summary reopens it).
  const keys = el.querySelector('.penKeys'), tuck = () => { keys.open = false; };
  el.querySelector('svg').addEventListener('pointerdown', tuck, { once: true });
  el.addEventListener('wheel', tuck, { once: true, passive: true });
  const toggle = (key, id) => { pen[key] = !pen[key]; el.querySelector('#' + id).setAttribute('aria-pressed', pen[key]); penDraw(); };
  el.querySelector('.penBar').addEventListener('click', e => {
    const a = e.target.closest('[data-a]')?.dataset.a;
    if (a === 'done') penOff();
    else if (a === 'reset') { penSave(); penReplace(copy(pen.orig)); }
    else if (a === 'fit') { Object.assign(pen, home); penDraw(); }
    else if (a === 'draw') setDraw(!pen.draw);
    else if (a === 'reverse') penReverse();
    else if (a === 'undo') penRestore(pen.undo, pen.redo);
    else if (a === 'redo') penRestore(pen.redo, pen.undo);
    else if (a === 'ruler') toggle('ruler', 'ruler');
    else if (a === 'snap') toggle('snap', 'snap');
    else if (a === 'focus') toggle('focus', 'focus');
    else if (a === 'allh') toggle('all', 'allh');
    else if (a === 'save') {
      const f = Object.assign(document.createElement('a'), { download: `${head.family}-${(headline.textContent || 'outline').slice(0, 24)}.svg`.replace(/[^\w.-]+/g, '_'),
        href: URL.createObjectURL(new Blob([penSvg()], { type: 'image/svg+xml' })) });
      f.click();
      setTimeout(() => URL.revokeObjectURL(f.href), 1000);
    } else if (a === 'clip') navigator.clipboard.writeText(penSvg()).then(() => penNote('SVG copied'), () => penNote('Couldn’t copy. Use Download instead.'));
  });

  const svg = el.querySelector('svg');
  const at = e => pt(e.clientX, e.clientY);
  const world = q => pt((q.x - pen.tx) / pen.z, (q.y - pen.ty) / pen.z);
  const hit = q => penPoints(penOnly()).map(([k, p]) => [k, Math.hypot(sx(pen, p.x) - q.x, sy(pen, p.y) - q.y)])
    .filter(([, d]) => d <= 14).sort((a, b) => a[1] - b[1])[0];
  el.addEventListener('wheel', e => {
    e.preventDefault();
    const q = at(e), f = Math.max(pen.fit * .2, Math.min(pen.fit * 60, pen.z * Math.exp(-Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), 100) * .0015)));
    const w = world(q);                                      // keep the point under the cursor fixed
    pen.z = f; pen.tx = q.x - w.x * f; pen.ty = q.y - w.y * f;
    penDraw();
  }, { passive: false });
  svg.addEventListener('pointerdown', e => {
    svg.setPointerCapture(e.pointerId);
    pen.cur = at(e);
    if (e.button === 1 || e.button === 2 || pen.space) { pen.drag = { kind: 'pan' }; return; }
    if (e.button) return;
    if (pen.draw) {                                     // pen mode: click places a point, drag pulls out its handles
      const D = pen.draft?.pts || [];
      if (D.length > 2 && Math.hypot(sx(pen, D[0].p.x) - pen.cur.x, sy(pen, D[0].p.y) - pen.cur.y) < 10) return penFinishDraft();
      let w = world(pen.cur);
      const st = pen.snap ? pen.st : 0;
      if (st) w = pt(Math.round(w.x / st) * st, Math.round(w.y / st) * st);
      const q = { p: w, hin: null, hout: null };
      (pen.draft ||= { pts: [] }).pts.push(q);
      pen.drag = { kind: 'draw', q };
      return penDraw();
    }
    const h = hit(pen.cur);
    if (h) {
      const k = h[0];
      if (e.shiftKey) pen.sel.has(k) ? pen.sel.delete(k) : pen.sel.add(k);
      else if (!pen.sel.has(k)) pen.sel = new Set([k]);
      const q = penPt(k);
      // The snapshot is only kept if the point actually moves. A lone smooth handle drags its partner round with it.
      pen.drag = { kind: 'move', q, want: pt(q.x, q.y), snap: copy(pen.segs), mirror: pen.sel.size === 1 ? penPartner(k) : null };
    } else {
      if (!e.shiftKey) pen.sel = new Set();
      const sg = penSegAt(pen.cur, penOnly(), 8);
      pen.drag = sg ? { kind: 'curve', i: sg.i, t: Math.max(.15, Math.min(.85, sg.t)), snap: copy(pen.segs) }
                    : { kind: 'marquee', o: pen.cur };
    }
    penDraw();
  });
  svg.addEventListener('pointermove', e => {
    const prev = pen.cur || at(e);
    pen.cur = at(e);
    const dx = pen.cur.x - prev.x, dy = pen.cur.y - prev.y;
    if (pen.drag?.kind === 'move' && (dx || dy)) {
      const g = pen.drag, w = g.want, s = pen.snap ? pen.st : 0;
      if (g.snap) { penSave(g.snap); g.snap = null; }
      w.x += dx / pen.z; w.y += dy / pen.z;
      const tx = s ? Math.round(w.x / s) * s : w.x, ty = s ? Math.round(w.y / s) * s : w.y;
      penMove(tx - g.q.x, ty - g.q.y);                       // grabbed point lands on the grid; the rest follow
      if (g.mirror && !e.altKey) {                           // Alt breaks the pair, so one handle moves alone
        const { P, len, key } = g.mirror, o = penPt(key), l = Math.hypot(g.q.x - P.x, g.q.y - P.y) || 1;
        o.x = P.x - (g.q.x - P.x) / l * len; o.y = P.y - (g.q.y - P.y) / l * len;
      }
    } else if (pen.drag?.kind === 'curve' && (dx || dy)) {
      const g = pen.drag;
      if (g.snap) { penSave(g.snap); g.snap = null; }
      let sg = pen.segs[g.i];
      if (sg.t === 'L') {                                    // bending a straight edge turns it into a curve
        const a = prevPoint(pen.segs, g.i), th = f => pt(a.x + (sg.p.x - a.x) * f, a.y + (sg.p.y - a.y) * f);
        sg = pen.segs[g.i] = { t: 'C', c1: th(1 / 3), c2: th(2 / 3), p: sg.p, g: sg.g };
      }
      const k = 1 / (3 * g.t * (1 - g.t)) / pen.z;           // both handles move so the grabbed point follows the cursor
      sg.c1.x += dx * k; sg.c1.y += dy * k; sg.c2.x += dx * k; sg.c2.y += dy * k;
    } else if (pen.drag?.kind === 'draw') {
      const { q } = pen.drag, w = world(pen.cur);
      if (Math.hypot(w.x - q.p.x, w.y - q.p.y) * pen.z > 3) {
        q.hout = pt(w.x, w.y);                          // the handle follows the cursor; its twin mirrors it (Alt: no twin)
        q.hin = e.altKey ? null : pt(2 * q.p.x - w.x, 2 * q.p.y - w.y);
      }
    } else if (pen.drag?.kind === 'pan') { pen.tx += dx; pen.ty += dy; }
    penDraw();
  });
  const up = () => {
    if (pen?.drag?.kind === 'marquee') {
      const { o } = pen.drag, c = pen.cur;
      for (const [k, q] of penPoints(penOnly())) {
        const x = sx(pen, q.x), y = sy(pen, q.y);
        if (x >= Math.min(o.x, c.x) && x <= Math.max(o.x, c.x) && y >= Math.min(o.y, c.y) && y <= Math.max(o.y, c.y)) pen.sel.add(k);
      }
    }
    if (pen) { pen.drag = null; penDraw(); }
  };
  svg.addEventListener('pointerup', up);
  svg.addEventListener('pointercancel', up);
  svg.addEventListener('dblclick', e => {
    if (pen.draw) return;
    const q = at(e), h = hit(q);
    if (h && h[0].endsWith(':p')) penSmooth(+h[0].split(':')[0]);
    else if (!h) (e.altKey ? penFlip : penInsert)(q);
  });
  svg.addEventListener('contextmenu', e => e.preventDefault());
  svg.addEventListener('pointerleave', () => { if (pen && !pen.drag) { pen.cur = null; penDraw(); } });
  penDraw();
}
$('pen').addEventListener('click', penOn);

// Save the headline's font file, or for a Google font, open its page on Google Fonts.
const ICONS = {
  download: '<svg viewBox="0 0 24 24"><path d="M12 4v11m-5-5 5 5 5-5M5 19h14"/></svg>',
  external: '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>'
};
function exportIcon() {
  $('export').innerHTML = ICONS[head?.g ? 'external' : 'download'];
  $('export').title = head?.g ? 'Open on Google Fonts' : 'Download this font file';
  $('pen').hidden = !head?.g;     // outlines are only editable for Google (open-licence) fonts
}
$('export').addEventListener('click', async () => {
  if (!head) return openDrawer('head');
  if (head.g) return open(`https://fonts.google.com/specimen/${encodeURIComponent(head.family).replace(/%20/g, '+')}`, '_blank', 'noopener');
  if (!(await ensureFonts())) return openDrawer('head');
  const fd = fontData.get(head.ps);
  if (!fd) return;
  const blob = await fd.blob();
  const sig = String.fromCharCode(...new Uint8Array(await blob.slice(0, 4).arrayBuffer()));
  const a = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(blob),
    download: `${head.ps}.${sig === 'OTTO' ? 'otf' : sig === 'ttcf' ? 'ttc' : 'ttf'}`
  });
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
});

const dark = store.get('dark', matchMedia('(prefers-color-scheme: dark)').matches);
body.classList.toggle('dark', dark);
// Moon in light mode (switch to dark), sun in dark mode (switch to light).
const syncTheme = () => {
  const on = body.classList.contains('dark');
  $('light').setAttribute('aria-pressed', on);
  $('light').title = on ? 'Light mode' : 'Dark mode';
};
syncTheme();
$('light').addEventListener('click', () => { store.set('dark', body.classList.toggle('dark')); syncTheme(); });

/* ---------- Start ---------- */

if (head) applyHead(head);
if (para) applyPara(para);
layout();
fit();
