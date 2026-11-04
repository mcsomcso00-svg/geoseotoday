# Weekly authoring brief — write new trilingual articles from the content plan

Runs once a week (Saturday). Publishing cadence: **2 articles per week** (Tuesday + Friday), each in zh-Hant, en and zh-Hans. Articles are date-gated: a file dated in the future stays hidden until the daily 02:00 UTC rebuild after its date, so writing a few days ahead is the normal workflow. All paths are relative to the repo root.

**Unattended run:** nobody is watching, so a permission prompt hangs the run forever. Keep Bash commands short and plain, never put braces next to quotes in a Bash command or heredoc, and change files with the Edit/Write tools rather than inline scripts.

## Step 1 — pick what to write
Open `automation/content-plan.md`. A row is **due** when its `status` is `todo` and its date is ≤ today + 10 days. Write every due row (oldest first), at most 3 per run. If none are due, report that and stop.

## Step 2 — write the zh-Hant original: `src/content/blog/zh-hant/<slug>.md`
Quality over volume: this site is being judged by Google on helpfulness, so each article must earn its place.
- **The `angle` column is a contract**: deliver that specific argument with quotable specifics (real numbers, a comparison table, a concrete step list). A generic restatement is unacceptable.
- Template (mirror existing articles, e.g. `src/content/blog/zh-hant/what-is-geo.md`):
  - `# <title>` (H1)
  - answer-first bold paragraph, 40–80 字, self-contained, key sentence in `**…**`
  - background + data, then `## ` H2s split by the real sub-questions
  - at least one comparison table, numbered step list or checklist with concrete specifics
  - `## 參考資料`: 2–5 primary sources (use the source URLs in the plan row and/or others). **Open every URL with WebFetch** and confirm it supports the claim; also link them inline on the sentences they support. Never invent statistics.
  - `## 常見問題（FAQ）` with 3–5 entries in the EXACT format `**Q1：問題？**` then the answer on the next line (drives FAQPage schema)
  - closing paragraph linking the Boss page (`/zh-hant/aio/` for AIO topics, otherwise `/zh-hant/geo/`) and 1–3 genuinely related existing articles
  - honest tradeoffs and limits; roughly 900–1500 characters of body
- Internal links: only to files that already exist in the same language folder and whose `date_published` ≤ this article's date (the plan row lists suggestions — verify each file exists). Never link another plan row that is not yet live.

## Step 3 — localize (genuine localization, not machine translation)
- `src/content/blog/en/<slug>.md`: native English rewrite; keep every fact, number, table and source; FAQ `**Q1: question?**` (halfwidth colon); `## Sources`; heading `## FAQ`.
- `src/content/blog/zh-hans/<slug>.md`: mainland vocabulary (软件/搜索/链接/优化/收录/算法/博客), not a character swap; FAQ `**Q1：问题？**`; `## 参考资料`; `## 常见问题（FAQ）`.

## Frontmatter (all 3 files)
```
title: <localized>
description: <localized, ~120–160 chars, self-contained>
target_keyword: <localized>
intent: <informational|commercial>
cluster: <mapping below>
author: GeoSeoToday
date_published: <plan date>
date_updated: <plan date>
enhanced: true
translations:
  <other two langs>: <slug>
```
| 群集 | zh-hant | en | zh-hans |
|---|---|---|---|
| 1 | `GEO（群集 1）` | `GEO` | `GEO（群集 1）` |
| 2 | `AI 內容產線（群集 2）` | `AI Content` | `AI 内容产线（群集 2）` |
| 3 | `On-page & 技術 SEO（群集 3）` | `On-page SEO` | `On-page & 技术 SEO（群集 3）` |
| 4 | `Off-page & 關鍵字研究（群集 4）` | `Off-page SEO` | `Off-page & 关键字研究（群集 4）` |
| 5 | `多語言 / 國際 SEO（群集 5）` | `Multilingual SEO` | `多语言 / 国际 SEO（群集 5）` |
| 6 | `AIO / AI 搜尋優化（群集 6）` | `AIO` | `AIO / AI 搜索优化（群集 6）` |

**YAML safety:** if a `title:` or `description:` contains a halfwidth `:`, wrap the whole value in double quotes. Fullwidth `：` is safe.

## Step 4 — gate
- `node automation/score.cjs src/content/blog/zh-hant/<slug>.md` → PASS (≥75) for each new article.
- `npm ci` if needed, then `npx astro build` must complete (Astro 7 needs Node ≥22; if unavailable, say so and rely on the YAML check).
- Every internal link in the 3 new files points to an existing file dated ≤ the article's date.
- In `automation/content-plan.md` set the row's `status` to `written`.

## Step 5 — commit and push
Commit `New articles: <slug> (<date>), …` with the 3 files per article, the plan update and `automation/run-log.md`, push to `main`. If pushing to `main` is refused, push branch `articles/YYYY-MM-DD` and open a pull request, and say so.

## Report — the owner wants the article links every time
Article URL pattern: `https://geoseotoday.com/<lang>/blog/<slug>/` for `zh-hant`, `zh-hans`, `en`. New articles are date-gated: each link goes live after the daily 02:00 UTC rebuild on its `date_published`, so always state the go-live date next to the links.

1. **Append to `automation/run-log.md`** (create it with heading `# Cloud routine run log` if missing) and include it in the commit:
   ```
   ## YYYY-MM-DD — New articles
   - <zh-Hant title> — live <date_published>
     - 繁中 https://geoseotoday.com/zh-hant/blog/<slug>/
     - 简中 https://geoseotoday.com/zh-hans/blog/<slug>/
     - EN https://geoseotoday.com/en/blog/<slug>/
   ```
2. **Send a push notification** (PushNotification tool) titled `GeoSeoToday 新文章` listing, per article, the zh-Hant title, go-live date and the three links.
3. **Final reply (≤12 lines):** the same title / go-live date / three links per article, then score per zh-hant file, sources per article, gate results, commit hash / PR link, rows remaining in the plan.
