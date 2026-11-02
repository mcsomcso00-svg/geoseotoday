import { getCollection } from 'astro:content';

// llms.txt：給 AI 檢索器的網站導覽（https://llmstxt.org）。
// 每次 build（每日 cron）自動重產：三語 × 六群集，每群集列 2 篇基礎文章＋3 篇最近更新，
// 所以優化批次更新過的文章會自然輪進來，不用手動維護。
const LANGS = [
  { lang: 'en', heading: 'English', tools: [['GEO readiness checker', 'geo', 'paste an article, get a 0–100 AI-citation readiness score with fixes'], ['llms.txt generator', 'aio', 'generate an llms.txt file for your site'], ['Free SEO/GEO audit', 'audit', 'a site diagnosis pinned to pages and paragraphs'], ['About the author', 'about', 'who writes GeoSeoToday']] },
  { lang: 'zh-hant', heading: '繁體中文', tools: [['GEO 就緒度檢測器', 'geo', '貼上文章，取得 0–100 分的 AI 引用友善度與修正建議'], ['llms.txt 產生器', 'aio', '一鍵產生給 AI 爬蟲的 llms.txt'], ['免費 SEO/GEO 診斷', 'audit', '指名到頁面與段落的網站診斷'], ['關於作者', 'about', 'GeoSeoToday 的作者']] },
  { lang: 'zh-hans', heading: '简体中文', tools: [['GEO 就绪度检测器', 'geo', '粘贴文章，获得 0–100 分的 AI 引用友好度与修改建议'], ['llms.txt 生成器', 'aio', '一键生成给 AI 爬虫的 llms.txt'], ['免费 SEO/GEO 诊断', 'audit', '指名到页面与段落的网站诊断'], ['关于作者', 'about', 'GeoSeoToday 的作者']] },
];

export async function GET({ site }) {
  const now = new Date();
  const abs = (path) => new URL(path, site).toString();
  const posts = await getCollection('blog', (p) => !p.data.draft && p.data.date_published <= now);
  const out = [
    '# GeoSeoToday',
    '',
    '> Practical SEO, GEO (generative engine optimization) and AIO content and free tools: rank on Google and get cited by ChatGPT, Perplexity, Gemini and Google AI Overviews. Published in English, Traditional Chinese (zh-Hant) and Simplified Chinese (zh-Hans).',
    '',
    `Last generated: ${now.toISOString().slice(0, 10)}. Full article lists: ${LANGS.map(({ lang }) => abs(`/${lang}/rss.xml`)).join(', ')}.`,
  ];
  for (const { lang, heading, tools } of LANGS) {
    out.push('', `## ${heading}`, '');
    for (const [label, path, desc] of tools) out.push(`- [${label}](${abs(`/${lang}/${path}/`)}): ${desc}`);
    const byCluster = new Map();
    for (const p of posts.filter((p) => p.id.startsWith(`${lang}/`))) {
      const c = p.data.cluster ?? 'Other';
      if (!byCluster.has(c)) byCluster.set(c, []);
      byCluster.get(c).push(p);
    }
    for (const [cluster, list] of [...byCluster].sort((a, b) => a[0].localeCompare(b[0]))) {
      const oldest = [...list].sort((a, b) => a.data.date_published - b.data.date_published).slice(0, 2);
      const recent = [...list]
        .filter((p) => !oldest.includes(p))
        .sort((a, b) => (b.data.date_updated ?? b.data.date_published) - (a.data.date_updated ?? a.data.date_published))
        .slice(0, 3);
      out.push('', `### ${cluster}`, '');
      for (const p of [...oldest, ...recent]) {
        const url = abs(`/${lang}/blog/${p.id.split('/').slice(1).join('/')}/`);
        out.push(`- [${p.data.title}](${url})${p.data.description ? `: ${p.data.description}` : ''}`);
      }
    }
  }
  return new Response(out.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
