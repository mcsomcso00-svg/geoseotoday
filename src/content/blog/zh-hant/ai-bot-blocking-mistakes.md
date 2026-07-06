---
title: 五個把 AI 流量擋在門外的設定錯誤（2026）
description: 內容寫得好卻進不了 AI 答案，八成不是內容問題，而是伺服器把 AI 爬蟲擋掉了。本文列出 2026 年最常見的五個致命設定錯誤——Cloudflare 一鍵全擋、CDN 對 bot 回 403、JS 才渲染的正文、robots.txt 舊殘留、防火牆速率限制——每個都附上判斷方法與逐步修復。
target_keyword: ai 爬蟲 設定錯誤
intent: informational
cluster: On-page & 技術 SEO（群集 3）
author: GeoSeoToday
date_published: 2026-08-03
date_updated: 2026-08-03
translations:
  zh-hans: ai-bot-blocking-mistakes
  en: ai-bot-blocking-mistakes
---
# 五個把 AI 流量擋在門外的設定錯誤（2026）

**內容寫得再好，只要伺服器把 AI 爬蟲擋在門外，你就永遠不會出現在 ChatGPT、Perplexity、AI Overview 的答案裡——而且這種擋通常不是你故意設的，是 Cloudflare 的一鍵開關、CDN 的預設規則、或某任工程師的 JS 改版順手做掉的。** 這五個錯誤有個共通點：站長完全不知道自己在擋，因為瀏覽器看起來一切正常，只有 AI 爬蟲吃到 403。以下逐一給出判斷方法與修復步驟。

先建立一個核心認知：AI 爬蟲跟你網站的互動只有一次 HTTP 請求。它送出 `GET`，你的伺服器如果回 200 加完整 HTML，你就有機會被引用；回 403、429、或回一頁空殼要 JavaScript 才長出內容，這一次請求就失敗，而且多數 AI 爬蟲不會重試。以下五個錯誤，每一個都是在這一次請求上把門關上。

## 錯誤一：Cloudflare 的「Block AI Bots / Bot Fight Mode」一鍵全擋

這是 2026 年最常見的一個。Cloudflare 儀表板有一個「Block AI Scrapers and Crawlers」開關，以及 Bot Fight Mode，很多人為了「防止內容被 AI 拿去訓練」而打開——但這兩個開關不分訓練型與檢索型，一開就連 **OAI-SearchBot、PerplexityBot** 這種負責「即時檢索並引用你」的爬蟲一起擋掉。結果是：你以為只擋掉訓練，其實同時放棄了被 ChatGPT 搜尋與 Perplexity 引用的機會。

**怎麼判斷**：Cloudflare 儀表板 → Security → Bots，看「Block AI bots」是否為開啟；同一頁看 Bot Fight Mode 狀態。

**怎麼修**：
1. 關閉全域的「Block AI bots」與 Bot Fight Mode。
2. 若你真的只想擋訓練型（GPTBot、ClaudeBot）、保留檢索型，改用 robots.txt 精準控制，而非 Cloudflare 的無差別開關。
3. 若需要在 WAF 層做，改成「只擋特定 user-agent」的自訂規則，白名單放行 OAI-SearchBot、PerplexityBot、Google-Extended。

## 錯誤二：CDN 或 WAF 對「非瀏覽器」User-Agent 一律回 403

很多 CDN／防火牆的預設安全規則會判斷：沒有瀏覽器指紋、沒有 JavaScript challenge 通過的請求，就是可疑流量，直接回 403 或丟一個需要點擊的 challenge 頁。AI 爬蟲正好符合「非瀏覽器、不執行 JS、不過 challenge」的特徵，於是被整批擋在門外。這比錯誤一更隱蔽，因為你根本沒有主動開任何「擋 AI」的開關，是預設安全策略順手做掉的。

**怎麼判斷**：用命令列模擬 AI 爬蟲直接請求你的頁面，看回應碼。

```bash
# 模擬 Perplexity 爬蟲抓你的首頁，只看回應狀態
curl -A "PerplexityBot" -s -o /dev/null -w "%{http_code}\n" https://你的網域/

# 對照：模擬一般瀏覽器
curl -A "Mozilla/5.0" -s -o /dev/null -w "%{http_code}\n" https://你的網域/
```

若瀏覽器 UA 回 200、爬蟲 UA 回 403 或 503，就是被 CDN／WAF 依 user-agent 擋掉了。

**怎麼修**：在 CDN／WAF 的安全規則中，為已知 AI 爬蟲的 user-agent 建立白名單例外，讓它們略過 JS challenge 與 bot 分數封鎖；不要用「一律要求瀏覽器指紋」的規則套到全站。

## 錯誤三：重要正文要 JavaScript 才渲染得出來

這是純技術面、也最容易被忽略的一個。多數 AI 檢索爬蟲**不執行 JavaScript**——它們拿到的是伺服器回傳的初始 HTML。如果你的站是純前端渲染（CSR 的 SPA），初始 HTML 只有一個空的 `<div id="root">`，正文全靠瀏覽器跑 JS 才長出來，那麼爬蟲即使拿到 200、即使你什麼都沒擋，它讀到的也是一頁空白。你在瀏覽器裡看得到內容，不代表爬蟲看得到。

**怎麼判斷**：把你的頁面原始 HTML 抓下來，看正文在不在裡面。

```bash
# 抓初始 HTML，搜尋你文章裡的一句話
curl -s https://你的網域/你的文章/ | grep "你正文裡的某一句話"
```

搜不到（grep 無輸出），代表那句話是 JS 渲染出來的，爬蟲讀不到。

**怎麼修**：改用伺服器端渲染（SSR）或靜態生成（SSG／預渲染），確保初始 HTML 就含完整正文。本站用 Astro 靜態生成正是為此。無法全面改架構時，至少對重要內容頁做預渲染。

## 錯誤四：robots.txt 殘留舊的 `Disallow: /` 或封鎖規則

有時擋掉 AI 的不是防火牆，而是一行沒人記得的 robots.txt。常見情境：網站在 staging 階段設了 `User-agent: * Disallow: /` 防止未上線內容被索引，上線時忘了拿掉；或早年為了「防 AI」加了一批 `Disallow`，如今想被引用卻忘了這些規則還在。robots.txt 是合規爬蟲會遵守的約定，一行 Disallow 就能讓所有守規矩的 AI 爬蟲全部止步。

**怎麼判斷**：直接開 `你的網域/robots.txt`，逐行確認有沒有 `User-agent: * Disallow: /`、或針對 OAI-SearchBot／PerplexityBot／Google-Extended 的 Disallow。

**怎麼修**：移除全站 Disallow 與針對檢索型爬蟲的封鎖；若只想擋訓練型，明確只寫 GPTBot、ClaudeBot 的 Disallow，並保留檢索型放行。改完用各引擎的 robots 測試工具或直接 curl `robots.txt` 確認線上版本已更新（注意 CDN 快取）。

## 錯誤五：防火牆速率限制把爬蟲當攻擊

AI 爬蟲有時會在短時間內抓多個頁面。若你的速率限制（rate limiting）門檻設得太低，或把「短時間多請求」一律視為 DDoS，就會在爬蟲抓到第二、三頁時回 429 Too Many Requests，導致它只抓到零星幾頁、拿不到你網站的全貌。這種錯誤的症狀是「有時被引用、有時不被」，因為爬蟲能否讀完取決於它撞到限制的時機。

**怎麼判斷**：查伺服器 access log，搜尋 AI 爬蟲 user-agent，看它們的請求裡有沒有一批 429／503；或看爬蟲是否只抓了首頁就消失。

**怎麼修**：為已知 AI 爬蟲的 user-agent 設定較寬鬆的速率上限（或豁免），與「防惡意流量」的嚴格規則分開；同時確認 sitemap.xml 可正常存取，讓爬蟲能有序抓取而非亂撞。

## 五個錯誤速查表

| # | 錯誤 | 症狀 | 一句話判斷 | 核心修法 |
|---|---|---|---|---|
| 1 | Cloudflare 一鍵全擋 AI bot | 完全不被任何 AI 引用 | 儀表板 Bots 頁看開關 | 關全域開關，改用 robots.txt 精準控 |
| 2 | CDN／WAF 對 bot UA 回 403 | 瀏覽器正常、爬蟲吃 403 | `curl -A "PerplexityBot"` 看狀態碼 | 為 AI 爬蟲 UA 建白名單例外 |
| 3 | 正文要 JS 才渲染 | 回 200 但爬蟲讀到空頁 | `curl` 抓 HTML `grep` 正文 | 改 SSR／SSG，初始 HTML 含正文 |
| 4 | robots.txt 舊殘留封鎖 | 守規矩的爬蟲全止步 | 開 `/robots.txt` 逐行看 | 移除全站／檢索型 Disallow |
| 5 | 速率限制把爬蟲當攻擊 | 有時被引、有時不被 | log 搜 UA 看 429 比例 | 為 AI 爬蟲放寬速率上限 |

## 上線前的自我檢查清單

1. Cloudflare／CDN 的「Block AI bots」與 Bot Fight Mode 為關閉。
2. `curl -A "PerplexityBot"` 與 `curl -A "OAI-SearchBot"` 對首頁與重點文章都回 200。
3. 用 `curl` 抓初始 HTML，能 `grep` 到正文的關鍵句（即非 JS 渲染）。
4. `你的網域/robots.txt` 沒有殘留的全站或檢索型 Disallow。
5. access log 裡 AI 爬蟲的請求以 200 為主，429／503 比例極低。

五項全過，才代表你的門是開的。內容品質決定「值不值得被引用」，但這五個設定決定「爬蟲有沒有機會讀到你」——後者是前者的地基，順序不能顛倒。

## 常見問題（FAQ）

**Q1：我在瀏覽器看網站一切正常，為什麼還要擔心爬蟲被擋？**
因為瀏覽器與 AI 爬蟲是兩種完全不同的客戶端。瀏覽器有指紋、會執行 JavaScript、會通過 challenge；多數 AI 爬蟲三者都沒有。CDN／WAF 常正是依這些差異判斷「可疑流量」，所以你瀏覽器看到 200，爬蟲吃到 403 是常態，必須用 `curl` 模擬爬蟲 user-agent 才驗得出來。

**Q2：擋掉 AI 爬蟲和擋掉 Googlebot 是同一件事嗎？**
不是。這兩者的 user-agent 不同、規則常常分開設定。你可能 Googlebot 放行、傳統排名正常，卻同時把 OAI-SearchBot、PerplexityBot 擋掉，於是 Google 搜得到你、但 ChatGPT 與 Perplexity 引用不到你。兩套可見度要分開檢查。

**Q3：我只是想防止內容被 AI 拿去訓練，這樣做錯了嗎？**
沒錯，但工具要用對。用 Cloudflare 一鍵「Block AI bots」會連檢索型爬蟲一起擋，屬於無差別封鎖。正解是用 robots.txt 精準只 Disallow 訓練型（GPTBot、ClaudeBot），保留檢索型（OAI-SearchBot、PerplexityBot、Google-Extended）放行，這樣既不被訓練、又保得住被引用的曝光。

**Q4：修好設定後，多久會重新被 AI 爬到並引用？**
沒有保證的時間。檢索型爬蟲會依自己的排程回訪，通常數天到數週不等；你可以主動提交 sitemap、並在 access log 觀察爬蟲是否恢復以 200 抓取。修好只是把門打開，被引用還取決於內容本身的結構與可信度。

**Q5：靜態網站也會有這些問題嗎？**
會少很多，但不是免疫。錯誤三（JS 渲染）在純靜態站基本不存在，但錯誤一、二、四、五全在伺服器／CDN／robots.txt 層，跟你網站是靜態或動態無關。靜態站一樣可能被 Cloudflare 開關或舊 robots.txt 擋掉，同樣要跑上面的檢查清單。

---

伺服器把門打開，只是被 AI 引用的第一步；門開了之後，內容的結構與可信度才決定你會不會真的被選中。GeoSeoToday 把爬蟲可達性、可見度追蹤整理成一站——工具入口見 [/zh-hant/geo/](/zh-hant/geo/)。延伸閱讀：〈[AI 爬蟲清單與管理](/zh-hant/blog/ai-crawler-management/)〉先認得該放行的爬蟲，〈[如何追蹤 AI 可見度](/zh-hant/blog/track-ai-visibility/)〉則教你修好之後怎麼確認真的被引用。
