---
title: AI 爬蟲清單與管理（GPTBot、PerplexityBot、Google-Extended）
description: 想被 AI 引用，第一步是讓 AI 爬蟲讀得到你。本文整理 2026 年主要 AI 爬蟲的真實 user-agent（GPTBot、OAI-SearchBot、PerplexityBot、Google-Extended、ClaudeBot、Bingbot），並附上可直接套用的 robots.txt 設定與放行／封鎖決策建議。
target_keyword: ai 爬蟲管理
intent: informational
cluster: AIO / AI 搜尋優化（群集 6）
author: GeoSeoToday
date_published: 2026-07-05
date_updated: 2026-11-09
enhanced: true
translations:
  zh-hans: ai-crawler-management
  en: ai-crawler-management
---
# AI 爬蟲清單與管理（GPTBot、PerplexityBot、Google-Extended）

**想被 AI 引擎引用，第一步不是寫內容，而是確認 AI 爬蟲讀得到你——很多網站 AIO 做不起來，原因只是某任工程師把 AI 爬蟲全 Disallow 了。** 你可以用 robots.txt 逐一決定放行或封鎖哪些 AI 爬蟲，但前提是先認得它們的真實 user-agent。本文整理 2026 年主要的六隻，並給出可直接套用的設定。

## 主要 AI 爬蟲清單（真實 user-agent）

截至 2026 年，你最該認得的 AI 爬蟲有六隻，分屬不同用途：

| User-agent | 所屬 | 主要用途 |
|---|---|---|
| **GPTBot** | OpenAI | [抓取內容供模型訓練](https://developers.openai.com/api/docs/bots) |
| **OAI-SearchBot** | OpenAI | [讓網站出現在 ChatGPT 搜尋結果](https://developers.openai.com/api/docs/bots) |
| **PerplexityBot** | Perplexity | [供 Perplexity 搜尋結果顯示與連結，不用於訓練基礎模型](https://docs.perplexity.ai/guides/bots) |
| **Google-Extended** | Google | [控制內容是否用於訓練未來世代的 Gemini 模型](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers) |
| **ClaudeBot** | Anthropic | [訓練型爬蟲，蒐集可能用於模型訓練的內容](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) |
| **Bingbot** | Microsoft | Bing 索引（同時驅動 Copilot） |

注意兩個常見誤解：**Google-Extended 不是一般 Googlebot**——擋掉 Google-Extended 不影響你在 Google 一般搜尋的排名——Google 文件明確指出它「不影響網站在 Google 搜尋中的收錄，也不是排名訊號」，只影響內容是否用於 Gemini 模型訓練。而 **Bingbot 同時服務 Bing 搜尋與 Copilot**，擋掉它等於同時放棄兩者。

## 放行還是封鎖？先想清楚你的目標

這是一個取捨，不是「全放」或「全擋」的二選一：

- **想被 AI 引用、拿 AI 曝光** → 放行檢索型爬蟲（OAI-SearchBot、PerplexityBot、Bingbot），並可放行 Google-Extended。注意：Google-Extended 不控制 Google 搜尋與 AI Overview，那由 Googlebot 負責。

另有「使用者觸發」的抓取器：OpenAI 說明 ChatGPT-User 因由使用者發起，robots.txt 規則[可能不適用](https://developers.openai.com/api/docs/bots)；Perplexity-User 也[通常忽略 robots.txt](https://docs.perplexity.ai/guides/bots)；Anthropic 的 Claude-User 則可用 robots.txt 控制。
- **不希望內容被拿去訓練模型** → 可考慮封鎖訓練型爬蟲（GPTBot、ClaudeBot），但這會連帶降低被該引擎引用的機會。
- **內容是付費、機密、或有版權疑慮** → 封鎖相應爬蟲是合理選擇。

關鍵認知：**封鎖爬蟲＝放棄被該引擎引用的曝光**。對多數想成長的內容網站，「放行檢索、保留曝光」通常利大於弊。

## robots.txt 範例（可直接改用）

放在 `https://你的網域/robots.txt`。以下示範「放行 AI 檢索、保留曝光」的常見設定：

```
# 放行 OpenAI 檢索（供 ChatGPT 搜尋引用）
User-agent: OAI-SearchBot
Allow: /

# 放行 Perplexity
User-agent: PerplexityBot
Allow: /

# 放行 Google 的 AI 使用（Gemini 訓練；不影響搜尋與 AI Overview）
User-agent: Google-Extended
Allow: /

# 放行 Bing（同時供 Copilot）
User-agent: Bingbot
Allow: /

# 一般爬蟲
User-agent: *
Allow: /
Sitemap: https://你的網域/sitemap.xml
```

若要**封鎖訓練型**（不想被拿去訓練，但仍想被檢索引用），可加：

```
# 不供模型訓練
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /
```

原則：**檢索型放行以保曝光，訓練型依你的版權立場決定。** 別無差別地一律 Disallow。另外，OpenAI 與 Perplexity 都說明 robots.txt 更新後，約需 24 小時系統才會調整（[OpenAI](https://developers.openai.com/api/docs/bots)、[Perplexity](https://docs.perplexity.ai/guides/bots)），改完不要馬上判斷有沒有生效。

## 檢查與驗證：三個動作

1. **看現有 robots.txt**：直接開 `你的網域/robots.txt`，確認沒有殘留的 `User-agent: * Disallow: /` 或把上述爬蟲全擋的舊設定。
2. **查伺服器記錄檔**：在 access log 搜尋上述 user-agent，確認它們真的有來抓，且回應是 200 而非 403/404。
3. **檢查是否需要 JavaScript**：多數 AI 爬蟲不執行 JavaScript。若你的重要內容要 JS 才渲染得出來，爬蟲即使放行也讀不到——這是常見致命傷。

## 參考資料

- [OpenAI：Overview of OpenAI Crawlers](https://developers.openai.com/api/docs/bots)（OpenAI）
- [Perplexity：Perplexity Crawlers](https://docs.perplexity.ai/guides/bots)（Perplexity）
- [Google：Common crawlers（含 Google-Extended）](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers)（Google Search Central）
- [Anthropic：Does Anthropic crawl data from the web, and how can site owners block the crawler?](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)（Anthropic）

## 常見問題（FAQ）

**Q1：擋掉 GPTBot，ChatGPT 就一定引用不到我嗎？**
GPTBot 主要供訓練；ChatGPT 搜尋的即時檢索主要靠 OAI-SearchBot。若你想被 ChatGPT 搜尋引用又不想被訓練，可放行 OAI-SearchBot、封鎖 GPTBot。兩者要分開設定。

**Q2：擋掉 Google-Extended 會影響我的 Google 排名嗎？**
不會。Google-Extended 只控制內容是否供 Gemini 等 AI 產品使用，與一般 Googlebot 的搜尋索引、排名是分開的。擋它不影響傳統 SEO，只影響 AI 曝光。

**Q3：robots.txt 擋得住所有爬蟲嗎？**
robots.txt 是「約定」而非強制。主流合規爬蟲（上述六隻）會遵守，但它靠自律。真要技術性阻擋，需搭配伺服器層的 user-agent 過濾，而非只靠 robots.txt。

**Q4：我全部放行會有風險嗎？**
主要風險是內容被用於模型訓練（版權／競爭考量）。若你的內容是公開教學、想擴大曝光，全放行通常合理；若是付費或機密內容，就該封鎖對應爬蟲。取捨看你的商業模式。

---

爬蟲讀得到，是被 AI 引用的地基——這一步沒做好，內容寫再好也白費。GeoSeoToday把爬蟲檢查、可見度追蹤整理成一站——總整理見 [AIO 完整指南](/zh-hant/blog/aio-complete-guide/)，工具入口見 [/zh-hant/aio/](/zh-hant/aio/)。延伸閱讀：〈[llms.txt 是什麼？](/zh-hant/blog/what-is-llms-txt/)〉與〈[如何被 Gemini／Google AI 引用](/zh-hant/blog/cited-by-gemini/)〉。
