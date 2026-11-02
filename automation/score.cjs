// GEO 就緒度評分（與 geo-readiness-checker.html 同一套邏輯）
// 用法：node score.js <file.md> [file2.md ...]  → 每檔輸出分數與訊號；<75 exit code 1
const fs = require('fs');
function analyze(raw, brand) {
  const body = raw.replace(/^---[\s\S]*?---\s*/, ''); // 去 frontmatter
  const text = body.replace(/<[^>]+>/g, ' ');
  const cjk = (text.match(/[一-鿿]/g) || []).length;
  const latinWords = (text.trim().match(/[A-Za-z0-9'’]+/g) || []).length;
  const units = cjk + latinWords;
  const paras = body.split(/\n\s*\n/).map((p) => p.replace(/^#.*$/gm, '').trim()).filter(Boolean);
  const first = paras[0] || '';
  const firstUnits = (first.match(/[一-鿿]/g) || []).length + (first.match(/[A-Za-z0-9]+/g) || []).length;
  const numbers = (text.match(/\d+(?:[.,]\d+)?\s?%?/g) || []).length;
  const questions = (text.match(/[?？]/g) || []).length;
  const heads = (body.match(/^#{1,6}\s.+/gm) || []).length;
  const lists = (body.match(/^\s*(?:[-*•]|\d+[.)])\s+/gm) || []).length + (body.match(/^\|/gm) || []).length;
  const links = (body.match(/\]\(/g) || []).length;
  const dates = (body.match(/\b20\d{2}\b/g) || []).length;
  const brandCount = brand ? body.toLowerCase().split(brand.toLowerCase()).length - 1 : -1;
  const S = {};
  S.answer = firstUnits >= 30 && firstUnits <= 140 ? 2 : firstUnits > 0 ? 1 : 0;
  S.data = numbers >= 5 ? 2 : numbers >= 2 ? 1 : 0;
  S.structure = heads >= 3 ? 2 : heads >= 1 ? 1 : 0;
  S.faq = questions >= 2 ? 2 : questions >= 1 ? 1 : 0;
  S.list = lists >= 3 ? 2 : lists >= 1 ? 1 : 0;
  S.depth = units >= 500 && units <= 3500 ? 2 : units >= 250 && units < 5000 ? 1 : 0;
  S.entity = brandCount === -1 ? 1 : brandCount >= 1 ? 2 : 0;
  S.sources = links >= 2 ? 2 : links >= 1 ? 1 : 0;
  S.fresh = dates >= 1 ? 2 : 0;
  const W = { answer: 15, data: 15, structure: 15, faq: 10, list: 10, depth: 10, entity: 10, sources: 10, fresh: 5 };
  let score = 0;
  for (const k in W) score += (S[k] / 2) * W[k];
  return { score: Math.round(score), S, units };
}
let fail = 0;
for (const f of process.argv.slice(2)) {
  const r = analyze(fs.readFileSync(f, 'utf8'), 'GeoSeoToday');
  const ok = r.score >= 75;
  if (!ok) fail++;
  console.log(`${ok ? 'PASS' : 'FAIL'} ${r.score} ${f} units=${r.units} ${JSON.stringify(r.S)}`);
}
process.exit(fail ? 1 : 0);
