# Weekly maintenance brief — llms.txt (weekly) + robots.txt audit (every 2 weeks)

Runs every Monday. All paths are relative to the repo root. Only commit when something actually needs to change.

**Unattended run:** nobody is watching, so a permission prompt hangs the run forever. Keep Bash commands short and plain, never put braces next to quotes in a Bash command or heredoc, and change files with the Edit/Write tools rather than inline scripts.

## A. llms.txt — every week
`/llms.txt` is generated at build time by `src/pages/llms.txt.js` (tools + About page, then per language and cluster: 2 pillar articles + 3 most recently updated). The daily rebuild refreshes it, so this check is about correctness:
1. Fetch https://geoseotoday.com/llms.txt. Confirm HTTP 200, `Last generated:` is within the last 2 days, all three language sections exist, and every cluster lists articles.
2. Pick 5 article URLs from it at random and fetch them: each must return 200.
3. Compare the tools list in `src/pages/llms.txt.js` with the pages that exist under `src/pages/[lang]/` (e.g. `geo`, `aio`, `audit`, `about`, `start`). If a public tool or hub page was added or removed, update the list in all three languages.
4. If the live file is stale (older than 2 days), check the latest GitHub Actions deploy run and report it — do not try to fix CI.

## B. robots.txt — only in even ISO weeks (`date +%V` is even)
1. Read `public/robots.txt`.
2. Check the official crawler documentation pages for new or renamed AI user agents: OpenAI (platform.openai.com/docs/bots), Anthropic (support.anthropic.com crawler article), Perplexity (docs.perplexity.ai bots page), Google (developers.google.com/search/docs/crawling-indexing/overview-google-crawlers), Apple (support.apple.com/en-us/119829), Microsoft Bing, Meta, Mistral, DuckDuckGo. Open each with WebFetch.
3. Add any documented AI search / AI assistant / AI training user agent that is missing, as `User-agent: <name>` + `Allow: /`, under the right company comment. Never add `Disallow` rules and never remove the `Sitemap:` line or the `User-agent: *` block.
4. Fetch https://geoseotoday.com/robots.txt and confirm it is 200 and matches the repo file.

## Gate, commit, push
If anything changed: `npx astro build` must complete (Node ≥22; if unavailable say so), then commit `Weekly maintenance YYYY-MM-DD: <what changed>` and push to `main` (if refused, push branch `maintenance/YYYY-MM-DD` and open a PR). If nothing changed, do not commit.

## Report (≤6 lines)
llms.txt status, robots audit done or skipped (odd week), agents added, commit hash / PR link or "no changes".
