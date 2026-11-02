# Enhancement batch brief — add verified external sources + turn on rotating related links

Runs twice a week (Mon + Thu). Each run upgrades **5 articles × 3 languages = 15 files**. All paths are relative to the repo root.

## Why
Google trust in this site is low (many pages "discovered/crawled – not indexed", impressions near zero) and no article cites any external source. Each enhanced article gets (a) clickable, verified primary sources for its key claims, (b) corrections where a claim turns out wrong or outdated, and (c) the `enhanced: true` flag, which switches its related-links block from "3 newest in cluster" to "6 rotating same-cluster neighbours" (see `src/pages/[lang]/blog/[...slug].astro`).

## Step 1 — pick the batch
List `src/content/blog/zh-hant/*.md` whose frontmatter does NOT contain `enhanced: true`. Sort by `date_published` ascending, then slug. Take the first 5. Skip any slug that lacks an `en/` or `zh-hans/` twin with the same slug (report it). If fewer than 5 remain, do what is left; if none remain, report "all articles enhanced" and stop.

## Step 2 — per article (zh-hant first, then en, then zh-hans)
1. Read the zh-hant file and identify the 2–5 most important factual claims (definitions, numbers, dates, how a platform behaves, official guidance).
2. For each claim find a **primary source**: Google Search Central docs/blog (developers.google.com/search, blog.google), schema.org, llmstxt.org, OpenAI / Anthropic / Perplexity / Microsoft Bing official docs, W3C/IETF, peer-reviewed or arXiv papers (e.g. the GEO paper arxiv.org/abs/2311.09735), government or standards bodies. Industry studies (Ahrefs, Semrush, SparkToro, etc.) only when they are the original data source. Never: Wikipedia as the only source, content farms, affiliate pages, competitor listicles, or anything you did not open.
3. **Open every URL with WebFetch** and confirm it loads and actually supports the sentence. Drop any URL you cannot verify.
4. If a source contradicts the article (wrong number, outdated behaviour), **fix the text** in all three languages. If a claim cannot be supported, soften or remove it. Do not invent statistics.
5. Edit the body:
   - Put each source as an inline markdown link on the sentence it supports.
   - Add a short sources section immediately **before** the FAQ heading: `## 參考資料` (zh-hant), `## Sources` (en), `## 参考资料` (zh-hans) — a bullet list `- [Source title](URL)（publisher, year）`.
   - Use the same URLs in all three languages (an official localized version of the same page is fine).
6. Frontmatter, in all three files:
   - add `enhanced: true` (on its own line right after `date_updated:`),
   - set `date_updated:` to today (YYYY-MM-DD, UTC).
   - Change nothing else: keep slug, title, description, cluster, date_published, translations.
7. Do not touch the FAQ format (`**Q1：…？**` zh / `**Q1: …?**` en, answer on the next line) — FAQPage schema depends on it. Do not add or remove internal links except to fix a broken one.

## Step 3 — gate (all must pass before committing)
- YAML: any `title:`/`description:` containing a halfwidth `:` must be wrapped in double quotes.
- `node automation/score.cjs <the 5 zh-hant files>` → every file PASS (≥75).
- `npm ci` (if `node_modules` is missing) then `npx astro build` must complete. Astro 7 needs Node ≥22; if the sandbox Node is older and you cannot upgrade it, skip the build, say so in the report, and rely on the YAML check.
- `git diff --stat` shows exactly the 15 expected files (plus nothing else).

## Step 4 — commit and push
`git add` the 15 files, commit `Enhancement batch YYYY-MM-DD: <slug1>, <slug2>, …` and push to `main` (pushing to main triggers the GitHub Pages deploy). If pushing to `main` is refused, push a branch `enhance/YYYY-MM-DD` and open a pull request instead, and say so.

## Report (≤10 lines)
Slugs done, number of sources added per slug, any claims corrected or removed (one line each), gate results, commit hash / PR link, and how many zh-hant articles are still not enhanced.
