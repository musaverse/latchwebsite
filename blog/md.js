/* A small Markdown renderer for blog articles, shared by the site (index.html) and the editor (admin.html).
   Supports: ## / ### / #### headings, paragraphs, - or * lists, 1. lists, > quotes, --- rules,
   ![alt](src "caption") images on their own line, **bold**, *italic*, `code`, [text](url).
   Everything is escaped first, so a post can never inject HTML or script into the page. */
(function () {
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const safeUrl = u => {
    u = u.trim();
    if (/^(https?:|mailto:|tel:|#|\/|\.\/|img\/|blog\/)/i.test(u) || !/^[a-z][a-z0-9+.-]*:/i.test(u)) return u;
    return '#';
  };
  const inline = s => {
    s = esc(s);
    const codes = [];
    s = s.replace(/`([^`]+)`/g, (_, c) => `\u0000${codes.push(c) - 1}\u0000`);
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => {
      const href = safeUrl(u.replace(/&amp;/g, '&'));
      const ext = /^https?:/i.test(href) && !/latchinfinity\.com/i.test(href);
      return `<a href="${esc(href)}"${ext ? ' target="_blank" rel="noopener"' : ''}>${t}</a>`;
    });
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g, '$1<em>$2</em>');
    return s.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${codes[i]}</code>`);
  };
  const slugify = s => s.toLowerCase().replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 64);

  function render(md, opts = {}) {
    const lines = String(md || '').replace(/\r\n?/g, '\n').split('\n');
    const out = [], toc = [];
    let para = [], list = null;
    const flushP = () => { if (para.length) { out.push(`<p>${inline(para.join(' '))}</p>`); para = []; } };
    const flushL = () => { if (list) { out.push(`<${list.tag}>${list.items.map(i => `<li>${inline(i)}</li>`).join('')}</${list.tag}>`); list = null; } };
    const flush = () => { flushP(); flushL(); };
    for (let i = 0; i < lines.length; i++) {
      const raw = lines[i], l = raw.trim();
      let m;
      if (!l) { flush(); continue; }
      if ((m = l.match(/^(#{2,4})\s+(.*)$/))) {
        flush();
        const lv = m[1].length, txt = inline(m[2]), id = (opts.idPrefix || '') + slugify(m[2]);
        if (lv === 2) toc.push([id, txt]);
        out.push(`<h${lv} id="${id}">${txt}</h${lv}>`); continue;
      }
      if (/^(-{3,}|\*{3,})$/.test(l)) { flush(); out.push('<hr>'); continue; }
      if ((m = l.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)$/))) {
        flush();
        out.push(`<figure><img src="${esc(safeUrl(m[2]))}" alt="${esc(m[1])}" loading="lazy">${m[3] ? `<figcaption>${inline(m[3])}</figcaption>` : ''}</figure>`); continue;
      }
      if (l.startsWith('>')) {
        flush();
        const q = [l.replace(/^>\s?/, '')];
        while (i + 1 < lines.length && lines[i + 1].trim().startsWith('>')) q.push(lines[++i].trim().replace(/^>\s?/, ''));
        out.push(`<blockquote><p>${inline(q.join(' '))}</p></blockquote>`); continue;
      }
      if ((m = l.match(/^([-*•]|\d+[.)])\s+(.*)$/))) {
        flushP();
        const tag = /\d/.test(m[1]) ? 'ol' : 'ul';
        if (!list || list.tag !== tag) { flushL(); list = { tag, items: [] }; }
        list.items.push(m[2]); continue;
      }
      if (list && /^\s{2,}/.test(raw)) { list.items[list.items.length - 1] += ' ' + l; continue; }
      flushL(); para.push(l);
    }
    flush();
    return opts.toc ? { html: out.join('\n'), toc } : out.join('\n');
  }
  const words = md => String(md || '').replace(/[#>*`\-\[\]()!]/g, ' ').split(/\s+/).filter(Boolean).length;
  window.LatchMD = { render, inline, esc, slugify, words };
})();
