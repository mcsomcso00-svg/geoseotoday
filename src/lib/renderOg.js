// 依文章標題/語言/群集，合成一張 1200×630 的 OG 縮圖（Lovart 底圖 + 疊標題）。
// build 時由 src/pages/og-image/[lang]/[...slug].png.ts 逐篇呼叫。
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// 兩張底圖（build 時 cwd = site/）。讀一次即快取。
const BASE = {
  geo: readFileSync(resolve(process.cwd(), 'public/og/base-geo.png')),
  aio: readFileSync(resolve(process.cwd(), 'public/og/base-aio.png')),
};

// 群集 → 標籤短名 / 標籤色 / 用哪張底圖
const CLUSTERS = {
  '1': { short: 'GEO', accent: '#4f8cff', base: 'geo' },
  '2': { short: 'AI Content', accent: '#2dd4bf', base: 'geo' },
  '3': { short: 'On-page', accent: '#4ade80', base: 'geo' },
  '4': { short: 'Off-page', accent: '#f472b6', base: 'geo' },
  '5': { short: 'Multilingual', accent: '#a78bfa', base: 'geo' },
  '6': { short: 'AIO', accent: '#22d3ee', base: 'aio' },
};
function clusterMeta(cluster) {
  const num = (cluster || '').match(/群集\s*(\d)/)?.[1];
  if (num && CLUSTERS[num]) return CLUSTERS[num];
  const s = (cluster || '').toLowerCase();
  if (/aio/.test(s)) return CLUSTERS['6'];
  if (/on-page/.test(s)) return CLUSTERS['3'];
  if (/off-page/.test(s)) return CLUSTERS['4'];
  if (/multilingual/.test(s)) return CLUSTERS['5'];
  if (/ai content/.test(s)) return CLUSTERS['2'];
  if (/geo/.test(s)) return CLUSTERS['1'];
  return { short: 'SEO', accent: '#5b6675', base: 'geo' };
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const isCJK = (lang) => lang === 'zh-hant' || lang === 'zh-hans';
const LATIN = "'Segoe UI','Helvetica Neue',Arial,'Noto Sans',sans-serif";
function titleFont(lang) {
  if (lang === 'zh-hant') return "'Noto Sans CJK TC','Noto Sans TC','Microsoft JhengHei','PingFang TC','Noto Sans CJK SC',sans-serif";
  if (lang === 'zh-hans') return "'Noto Sans CJK SC','Noto Sans SC','Microsoft YaHei','PingFang SC','Noto Sans CJK TC',sans-serif";
  return LATIN;
}

const MAX_W = 700; // 標題文字欄寬（左側安全區）
function wrap(title, lang, fs) {
  if (isCJK(lang)) {
    const per = Math.max(1, Math.floor(MAX_W / (fs * 1.02)));
    const chars = [...title];
    const lines = [];
    for (let i = 0; i < chars.length; i += per) lines.push(chars.slice(i, i + per).join(''));
    return lines;
  }
  const per = Math.max(1, Math.floor(MAX_W / (fs * 0.54)));
  const lines = [];
  let cur = '';
  for (const w of title.split(/\s+/)) {
    const t = cur ? cur + ' ' + w : w;
    if (t.length > per && cur) { lines.push(cur); cur = w; } else cur = t;
  }
  if (cur) lines.push(cur);
  return lines;
}
function layoutTitle(title, lang) {
  for (const fs of [60, 54, 48, 42, 38]) {
    const lines = wrap(title, lang, fs);
    if (lines.length <= 3) return { fs, lines };
  }
  let lines = wrap(title, lang, 38);
  if (lines.length > 4) { lines = lines.slice(0, 4); lines[3] = lines[3].replace(/.$/, '…'); }
  return { fs: 38, lines };
}

export async function renderOg({ title, lang, cluster }) {
  const meta = clusterMeta(cluster);
  const fam = titleFont(lang);
  const { fs, lines } = layoutTitle(title, lang);
  const gap = Math.round(fs * 1.18);
  const top = 340 - (lines.length * gap) / 2;
  const firstBaseline = Math.round(Math.max(top + fs * 0.8, 250));
  const tspans = lines
    .map((l, i) => `<text x="72" y="${firstBaseline + i * gap}" font-family="${fam}" font-size="${fs}" font-weight="800" fill="#ffffff" letter-spacing="${lang === 'en' ? '-0.5' : '0'}">${esc(l)}</text>`)
    .join('');
  const tagW = 36 + [...meta.short].length * 11;

  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0.30" stop-color="#0e1116" stop-opacity="1"/>
      <stop offset="0.52" stop-color="#0e1116" stop-opacity="0.82"/>
      <stop offset="0.74" stop-color="#0e1116" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="dot" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4f8cff"/><stop offset="1" stop-color="#22d3ee"/></linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#scrim)"/>
  <circle cx="79" cy="70" r="7" fill="url(#dot)"/>
  <text x="97" y="78" font-family="${LATIN}" font-size="24" font-weight="800" fill="#e6edf3" letter-spacing="0.5">GeoSeoToday</text>
  <rect x="72" y="150" rx="17" ry="17" width="${tagW}" height="36" fill="${meta.accent}" fill-opacity="0.14" stroke="${meta.accent}" stroke-opacity="0.55"/>
  <text x="90" y="174" font-family="${LATIN}" font-size="18" font-weight="700" fill="#dbe9ff" letter-spacing="1.2">${esc(meta.short)}</text>
  ${tspans}
  <text x="72" y="562" font-family="${LATIN}" font-size="22" fill="#9aa4b2">geoseotoday.com</text>
</svg>`;

  return sharp(BASE[meta.base]).composite([{ input: Buffer.from(svg), top: 0, left: 0 }]).png().toBuffer();
}
