# 免費診斷報告 — 產出 SOP（約 22 分鐘，三戰線 SEO／GEO／AIO）

> **Cloud routine note:** when this SOP is run by the scheduled audit routine (`automation/audit-brief.md`), score pages with `BRAND="<brand>" node automation/score.cjs` instead of the browser checker, keep everything in `/tmp`, and deliver the filled report as an HTML attachment on a Gmail draft as the brief describes. The template is `automation/audit/report-template.html`.


> 目標：收到表單（Gmail 會收到 Web3Forms 轉寄，含對方網址）後，約 22 分鐘內產出一份 HTML 診斷報告，附在回信寄出。
> 範本：[diagnosis-report-template.html](diagnosis-report-template.html)（**6 段，含 AI 可讀取性**；開啟 → Ctrl+F 搜 `{{` 逐一替換 → 存成 HTML 檔）。已填好的樣子見 [demo-report-SAMPLE.html](demo-report-SAMPLE.html)。
> 最快做法：直接把對方網址丟給 Claude Code 說「照 SOP-30min.md 幫我填好診斷報告」，我會自動跑完下面全部步驟並輸出已填好的 HTML。
> 版本說明：報告為三戰線。AIO 段（第 2 步）只做「AI 可讀取性檢查」，不做各 AI 引擎的即時引用測試（已移除，方便由雲端 agent 自動產出）。

## 第 0 步｜開檔（1 分鐘）
複製範本為 `reports/{{網域}}-{{日期}}.html`，填全域欄位：`{{SITE_URL}}`、`{{SITE_DOMAIN}}`、`{{REPORT_DATE}}`、`{{YEAR}}`、`{{REPLY_EMAIL}}`（= mcsomcso00@gmail.com）、`{{PAGES_SCANNED}}`、`{{SAMPLE_N}}`（=5）、`{{OFFER_DEADLINE}}`（=寄出日＋7 天）。

## 第 1 步｜GEO 就緒度逐頁掃描＋段落證據（8 分鐘）
1. 看對方 sitemap（`/sitemap.xml`）或首頁導覽，挑 **5 個重點頁**（首頁×1＋主力內容/服務頁×4）→ 填 `{{PAGE_1..5_URL}}`。
2. 每頁全文貼進 **GEO 就緒度檢測器**（線上 /zh-hant/geo/ 或本機 `content-strategy/tools/geo-readiness-checker.html`）→ 記分數 `{{PAGE_n_SCORE}}`、把紅/黃訊號寫成問題描述 `{{PAGE_n_ISSUES}}`（只寫「缺什麼」，不寫「怎麼修」）。
3. 從掃描過的頁面抓 **2 段最能說明問題的原文**（開頭鬆散、無自包含答案、全形容詞無數據等）→ 填 `{{EVIDENCE_1/2_PAGE}}`、`{{..._QUOTE}}`（引 1–2 句即可）、`{{..._WHY}}`。

## 第 2 步｜AI 可讀取性檢查（4 分鐘）
1. **可讀取性三項（計分）＋ llms.txt（只記錄、不計分）**（狀態欄填 `✓ 已放行`／`✗ 沒有`／`△ 部分` 等；對應的 `*_CLASS` 填 `yes`／`no`／`maybe`，決定顏色）：
   - `{{LLMS_STATUS/CLASS/NOTE}}`（選配、不計分）：開 `對方網域/llms.txt` → 有=✓ yes、無=△ maybe。備註寫「Google 搜尋不使用 llms.txt（Google，2026-06），部分其他 AI 服務可能參考」，**不要把它寫成高優先問題**。
   - `{{CRAWLER_STATUS/CLASS/NOTE}}`：開 `/robots.txt` → 看有無 `Disallow` 到 OAI-SearchBot（OpenAI 搜尋）／PerplexityBot／Googlebot；沒擋=✓ yes、有擋=✗ no。GPTBot 是 OpenAI 的訓練爬蟲、Google-Extended 只影響 Gemini 訓練與 grounding，被擋都**不影響**搜尋與 AI Overview 引用，只在備註提一句。
   - `{{JS_STATUS/CLASS/NOTE}}`：對重點頁按 Ctrl+U 看原始碼 → 正文已在 HTML=✓ yes、要靠 JS 才長出來=△ maybe。
   - `{{ENTITY_STATUS/CLASS/NOTE}}`：原始碼搜 `application/ld+json` → 有 Organization＋sameAs=✓ yes、無=✗ no。

## 第 3 步｜四格總分（1 分鐘）
四個分數（0–100）與其顏色 class（`{{OVERALL_CLASS}}`／`{{CITE_CLASS}}`／`{{AIO_CLASS}}`／`{{TECH_CLASS}}`；`≥75` → `g`、`50–74` → `w`、`<50` → `b`）：
- `{{OVERALL_SCORE}}` GEO 就緒度總分 = 五頁 GEO 分數平均。
- `{{CITE_SCORE}}` 內容可引用性 = 五頁的 answer／data／faq／list 四訊號平均換算。
- `{{AIO_SCORE}}` AI 可讀取性 = 第 2 步三項（爬蟲、JS、實體）各 ✓=33／△=16／✗=0，三項相加、上限 100；llms.txt 不計分。
- `{{TECH_SCORE}}` 技術與實體 = structure／sources／fresh 三訊號 ＋ 實體結構化資料（有無 Organization/sameAs）＋ 收錄狀況（見第 4 步）。

## 第 4 步｜內容負債盤點（5 分鐘）
1. Google 搜 `site:對方網域` → 收錄頁數 vs sitemap 頁數落差 → `{{DEBT_NOINDEX_N}}` ＋ 舉 1–2 例 `{{DEBT_NOINDEX_EXAMPLES}}`。
2. 從 sitemap 抽 10–15 頁快掃：字數過少 → `{{DEBT_THIN_*}}`；無日期或年份過舊 → `{{DEBT_STALE_*}}`；站內搜不到指入連結 → `{{DEBT_ORPHAN_*}}`。
3. 數字抓保守值即可，代表頁列 2–3 條 URL。

## 第 5 步｜先給糖＋問題總清單（2 分鐘）
1. **做得好的地方 `{{GOOD_1..3}}`**：從掃描中挑 3 個真實優點（例：全站 HTTPS 且速度佳／部落格更新頻率穩定／**AI 爬蟲未被誤擋**／品牌名搜尋有排第一）。要具體、要真——這一節建立公平感，讓後面的問題清單更可信。找不到 3 個就寫 2 個＋刪一列。
2. 把前面各節發現濃縮成 6 條問題，依嚴重度排 `{{ISSUE_1..6}}` ＋影響範圍 `{{..._SCOPE}}`（例：全站／主力服務頁／全站 AIO）。**記得納入 AIO 缺口**：無自包含答案段、JS 擋住 AI 取材、缺實體結構化資料等，通常就是最高優先的幾條。

## 第 6 步｜輸出寄送（1 分鐘）
存成 `GeoSeoToday-report-{{網域}}.html`，開新信寄到對方填的 Email 並附上這個 HTML 檔。**不要直接回覆表單通知信**：引用內容會帶出訪客 IP 和 Report Spam 連結。
信件內文一句話即可：「附上你的網站 SEO／GEO／AIO 診斷，重點先看第 3 節（AI 可讀取性）與第 5 節的問題清單；若要完整修正建議與執行，回信告訴我即可。」

## 紀律（照 AK 的免費活動教訓）
- **免費版只給「問題」，一個修法都不給**——價值感來自診斷深度，轉換動力來自問題清單。
- **AI 可讀取性三項要真的開 robots.txt、原始碼去看，不可臆測**——狀態與備註都要有檢查依據。
- 每份仍要人工看過網站，不做 AI 空殼報告（品質是唯一口碑來源）。
- 寄出後 3 天無回音可追一封；不再多追（避免單向輸出疲勞）。
