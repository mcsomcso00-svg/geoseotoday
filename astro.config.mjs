// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync, writeFileSync, mkdirSync, statSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
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

function walkHtml(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walkHtml(p, acc);
    else if (e.endsWith('.html')) acc.push(p);
  }
  return acc;
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

// build 後掃 dist HTML：內部部落格連結若指向「未建置（未來日期/不存在）」的頁面，改成純文字（不連）。
// 到期後（每日 cron 重建）目標頁存在 → 自動變回連結 → 永遠不會有未來日期 404。
function pruneForwardLinks() {
  return {
    name: 'geoseotoday-prune-forward-links',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const linkRe = /<a\s+([^>]*?)href="(\/(?:zh-hant|zh-hans|en)\/blog\/[^"?#]+?)\/?"([^>]*?)>([\s\S]*?)<\/a>/g;
        const cache = new Map();
        const targetExists = (p) => {
          if (cache.has(p)) return cache.get(p);
          const ok = existsSync(join(root, p, 'index.html'));
          cache.set(p, ok);
          return ok;
        };
        let pruned = 0, filesChanged = 0;
        for (const f of walkHtml(root)) {
          let changed = false;
          const html = readFileSync(f, 'utf8').replace(linkRe, (whole, _pre, href, _post, text) => {
            if (targetExists(href)) return whole;
            pruned++;
            changed = true;
            return `<span class="link-pending">${text}</span>`;
          });
          if (changed) { writeFileSync(f, html); filesChanged++; }
        }
        logger.info(`Forward-dated links pruned: ${pruned} across ${filesChanged} file(s)`);
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
    pruneForwardLinks(),
  ],
});
