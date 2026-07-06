---
title: robots.txt 怎麼設才不擋掉 AI 引用：訓練與檢索爬蟲分開處理
description: 很多網站在 robots.txt 一句 Disallow 就把 AI 引用一起擋掉了。本文用一張表列出 2026 年各 AI 爬蟲的真實 user-agent、分辨它是訓練型還是檢索型，並說明擋掉每一隻各自要付出什麼代價——訓練爬蟲與檢索爬蟲必須分開放行。
target_keyword: robots.txt ai bot
intent: informational
cluster: On-page & 技術 SEO（群集 3）
author: GeoSeoToday
date_published: 2026-07-30
date_updated: 2026-07-30
translations:
  zh-hans: robots-txt-for-ai-bots
  en: robots-txt-for-ai-bots
---
# robots.txt 怎麼設才不擋掉 AI 引用：訓練與檢索爬蟲分開處理

**AI 爬蟲分兩類：訓練型（抓內容去訓練模型）與檢索型（回答問題時即時來抓你頁面、附上引用連結）。想被 AI 引用卻不想被拿去訓練，你要在 robots.txt 裡分開處理這兩類——放行檢索型保住引用曝光，訓練型再依版權立場自行決定。一句 `Disallow: /` 全擋，等於連引用一起放棄。** 關鍵是先認得每隻爬蟲的真實 user-agent 與所屬類型。

多數網站的 AI 流量出不來，不是內容不好，而是某任工程師或某個安全外掛在 robots.txt（或 CDN 層）把 AI 爬蟲整批擋了。robots.txt 是每隻爬蟲進站前第一個讀的檔案，設錯這一步，後面寫得再好都到不了 AI 的引用池。

## 訓練爬蟲與檢索爬蟲，差在哪？

這是全篇最重要的區分，決定你該放行誰：

- **訓練型爬蟲**：把你的內容抓回去，當作訓練或更新大型語言模型的語料。擋掉它，主要是防止內容被納入模型權重——但它**不負責**回答當下問題時的即時引用。是否放行，取決於你對「內容被拿去訓練」的版權與競爭立場。
- **檢索型爬蟲**：使用者在 ChatGPT、Perplexity 等處提問時，AI 即時派它來抓你的頁面，用來生成答案並**附上指向你的引用連結**。這隻就是 GEO 曝光的命脈——擋掉它，等於主動退出該引擎的即時引用。

一句話：**訓練 = 內容進不進模型；檢索 = 你進不進答案的引用。** 兩者是不同的 user-agent、不同的商業取捨，robots.txt 必須分開寫。

## 各 AI 爬蟲 user-agent 對照表（2026）

下表列出你最該認得的爬蟲、它屬於哪一類，以及**擋掉它你會失去什麼**——這一欄才是決策依據：

| User-agent | 所屬 | 類型 | 擋掉它 = 放棄什麼 |
|---|---|---|---|
| **GPTBot** | OpenAI | 訓練 | 內容不進 OpenAI 訓練語料（不影響 ChatGPT 搜尋引用） |
| **OAI-SearchBot** | OpenAI | 檢索 | ChatGPT 搜尋不再即時引用你、附連結 |
| **ChatGPT-User** | OpenAI | 檢索（使用者觸發） | 使用者在 ChatGPT 內開你連結時抓不到內容 |
| **PerplexityBot** | Perplexity | 檢索 | Perplexity 答案與來源清單不再收錄你 |
| **ClaudeBot** | Anthropic | 訓練 | 內容不進 Anthropic 訓練語料 |
| **Claude-SearchBot** | Anthropic | 檢索 | Claude 即時檢索與引用抓不到你 |
| **Google-Extended** | Google | 訓練／AI 使用 | 內容不供 Gemini／AI 產品使用（**不影響一般 Google 排名**） |
| **Googlebot** | Google | 索引（驅動 AI Overview） | 一般搜尋與 AI Overview 一起消失（幾乎不該擋） |
| **Bingbot** | Microsoft | 索引（驅動 Copilot） | Bing 搜尋與 Copilot 同時放棄 |

兩個最常被誤會的地方：**Google-Extended 不是 Googlebot**——擋前者只讓內容不供 Gemini 使用，你的一般 Google 排名毫髮無傷；擋後者才會連搜尋一起掉。而 **Bingbot 一隻同時服務 Bing 與 Copilot**，擋它是一次放棄兩個。想更完整的爬蟲清單與管理策略，見〈[AI 爬蟲清單與管理](/zh-hant/blog/ai-crawler-management/)〉。

## robots.txt 範例：放行檢索、按需擋訓練

放在 `https://你的網域/robots.txt`，一進站就會被讀。以下是「保住 AI 引用、同時不供訓練」最常見的組合——重點在**檢索型全放行、訓練型才 Disallow**：

```
# ── 檢索型：全部放行，這是 AI 引用曝光的命脈 ──
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Bingbot
Allow: /

# ── 訓練型：不想被拿去訓練就 Disallow（可自行取捨）──
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

# ── 一般爬蟲 ──
User-agent: *
Allow: /
Sitemap: https://你的網域/sitemap.xml
```

若你完全不介意內容被訓練（例如公開教學、想最大化曝光），把上面訓練型那三段的 `Disallow: /` 改成 `Allow: /` 即可，最省事也風險最低。

## 五個把 AI 引用擋在門外的 robots.txt 錯誤

按實務踩雷頻率排序，逐一給修法：

1. **殘留的 `User-agent: * Disallow: /`**：測試站或舊設定沒清掉，一句全站封鎖，所有爬蟲（含檢索型）一起擋。修法：確認正式站沒有這行。
2. **把檢索型當訓練型一起擋**：想擋 GPTBot 卻連 OAI-SearchBot 一起 Disallow，引用曝光就沒了。修法：訓練、檢索分兩組寫，只擋你真正想擋的那組。
3. **user-agent 名稱拼錯或大小寫想當然耳**：寫成 `GPT-Bot`、`Perplexity-Bot` 這種不存在的名字，規則對誰都沒生效。修法：以各家官方文件公布的字串為準，逐字比對。
4. **robots.txt 沒擋，但 CDN／WAF 擋了**：Cloudflare、防火牆的「封鎖 AI bot」開關或對 bot 回 403，會讓 robots.txt 的放行形同虛設。修法：查伺服器與 CDN 記錄，確認檢索型爬蟲回的是 200 而非 403。
5. **內容要 JavaScript 才渲染得出**：多數 AI 爬蟲不執行 JS，就算放行也只讀到空殼。修法：重要正文用伺服器端渲染或預渲染，確保初始 HTML 就含內容。

## 驗證：確認你「以為放行」的真的放行了

設完別憑感覺，做三個動作實測：

1. **直接開 `你的網域/robots.txt`**：確認沒有殘留全站 Disallow，且檢索型爬蟲確實在放行清單裡。
2. **查伺服器 access log**：搜尋上表的 user-agent，確認它們真的有來、且回應是 200。看得到爬取行為，才代表放行生效——這也是唯一能觀察 AI bot 真實抓取的地方。
3. **順手看爬取預算**：AI 爬蟲共享你的伺服器資源，量大時優先用快取／CDN 而非封鎖來解，別為了省頻寬把引用一起犧牲，詳見〈[crawl budget 是什麼](/zh-hant/blog/what-is-crawl-budget/)〉。

## 常見問題（FAQ）

**Q1：訓練爬蟲和檢索爬蟲到底差在哪？**
訓練型（如 GPTBot、ClaudeBot）抓內容去訓練模型，擋它只防內容進模型；檢索型（如 OAI-SearchBot、PerplexityBot）在使用者提問當下即時來抓你的頁面、生成答案並附引用連結。想被 AI 引用一定要放行檢索型，訓練型才是可自由取捨的那一組。

**Q2：擋掉 GPTBot，ChatGPT 就引用不到我了嗎？**
不會。GPTBot 是訓練用；ChatGPT 搜尋的即時引用主要靠 OAI-SearchBot 與 ChatGPT-User。所以你可以「放行 OAI-SearchBot、封鎖 GPTBot」，既保住被引用又不被訓練——但兩者務必分開設定，別一起擋。

**Q3：擋 Google-Extended 會傷到我的 Google 排名嗎？**
不會。Google-Extended 只控制內容是否供 Gemini 等 AI 產品使用，與驅動一般搜尋和 AI Overview 的 Googlebot 是兩隻獨立爬蟲。擋 Google-Extended 只影響 AI 使用，傳統 SEO 排名不受影響。

**Q4：robots.txt 擋得住不守規矩的爬蟲嗎？**
robots.txt 是「約定」而非強制。上表這些主流合規爬蟲會遵守，但它靠自律。若要技術性硬擋（含惡意仿冒），得在伺服器或 CDN 層做 user-agent／IP 過濾，光靠 robots.txt 不夠。

**Q5：我不確定要不要擋訓練型，有沒有安全預設？**
有。對多數想成長的內容網站，最安全的預設是**檢索型全放行、訓練型也放行**——最大化曝光、零操作風險。只有當內容是付費、機密或有明確版權顧慮時，才選擇性 Disallow 訓練型。

---

robots.txt 設對，是被 AI 引用的地基；設錯，內容寫再好也進不了引用池。GeoSeoToday把爬蟲設定、可見度追蹤整理成一站——工具入口見 [/zh-hant/geo/](/zh-hant/geo/)，方法全貌見〈[On-page & 技術 SEO 完整指南](/zh-hant/blog/onpage-technical-seo-guide/)〉。延伸閱讀：〈[AI 爬蟲清單與管理](/zh-hant/blog/ai-crawler-management/)〉。
