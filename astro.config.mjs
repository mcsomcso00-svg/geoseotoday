// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { renderOg } from './src/lib/renderOg.js';

// 極簡 frontmatter 取值（title/cluster 可能含冒號且加引號）
function fmValue(fm, key) {
  const r = fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!r) return undefined;
  let v = r[1].trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    v = v.slice(1, -1).replace(/\\"/g, '"');
  }
  return v;
}

// build 結束後，為每篇「已發布」文章產一張 OG 縮圖 → dist/og-image/<lang>--<slug>.png
// 用靜態檔輸出，避開 .png 動態端點與 trailingSlash:'always' 的衝突。
function ogImages() {
  return {
    name: 'geoseotoday-og-images',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const now = new Date();
        const BLOG = 'src/content/blog';
        const langs = ['zh-hant', 'zh-hans', 'en'];
        const outDir = new URL('og-image/', dir);
        mkdirSync(outDir, { recursive: true });
        let made = 0, skipped = 0;
        for (const lang of langs) {
          let files = [];
          try { files = readdirSync(`${BLOG}/${lang}`).filter((f) => f.endsWith('.md')); } catch { continue; }
          for (const f of files) {
            const slug = f.replace(/\.md$/, '');
            const raw = readFileSync(`${BLOG}/${lang}/${f}`, 'utf8');
            const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
            if (!m) { skipped++; continue; }
            const title = fmValue(m[1], 'title');
            if (!title) { skipped++; continue; }
            if (fmValue(m[1], 'draft') === 'true') { skipped++; continue; }
            const dp = fmValue(m[1], 'date_published');
            if (dp && new Date(dp) > now) { skipped++; continue; } // date-gated，與文章頁一致
            const png = await renderOg({ title, lang, cluster: fmValue(m[1], 'cluster') });
            writeFileSync(new URL(`${lang}--${slug}.png`, outDir), png);
            made++;
          }
        }
        logger.info(`OG thumbnails: generated ${made}, skipped ${skipped} (draft/future-dated)`);
      },
    },
  };
}

export default defineConfig({
  site: 'https://geoseotoday.com',
  trailingSlash: 'always',
  i18n: {
    locales: ['zh-hant', 'zh-hans', 'en'],
    defaultLocale: 'zh-hant',
    routing: {
      prefixDefaultLocale: true, // 一律 /zh-hant/ /zh-hans/ /en/，對稱好管 hreflang
      redirectToDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh-hant',
        locales: { 'zh-hant': 'zh-Hant', 'zh-hans': 'zh-Hans', en: 'en' },
      },
    }),
    ogImages(),
  ],
});
