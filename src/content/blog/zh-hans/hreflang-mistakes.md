---
title: hreflang 常见错误导致繁简自我蚕食
description: hreflang 设置错误是繁简自我蚕食的头号原因。本文整理 7 个最常见错误——缺回链、漏自我引用、语言代码写错、指向跳转页等——并提供正确代码范例与 GSC 验证方法。
target_keyword: hreflang 错误
intent: informational
cluster: 多语言 / 国际 SEO（群集 5）
author: GeoSeoToday
date_published: 2026-07-23
date_updated: 2026-07-23
translations:
  zh-hant: hreflang-mistakes
  en: hreflang-mistakes
---
# hreflang 常见错误导致繁简自我蚕食

**hreflang 设置错误是繁简中文网站「自我蚕食」的头号原因：当标注缺回链、漏自我引用或语言代码写错时，Google 会忽略整组标签，把繁中与简中页面当成互相竞争的重复内容，导致两边排名一起衰退。** 本文列出 7 个最常见错误与修法。

## 为什么繁简站特别容易中招？

繁体与简体中文页面在算法眼中相似度极高——很多时候只差字形与少数用词。英文对法文这种「明显不同语言」的组合，就算 hreflang 出错，Google 还能靠语言检测自行分辨；但繁中对简中，一旦 hreflang 失效，Google 几乎必然混淆两者。这就是为什么 hreflang 从 2011 年推出至今，繁简网站仍是出错后果最严重的族群：**同一组关键字，繁简两页轮流出现、互抢点击，最后两边都做不起来。**

## 7 个最常见的 hreflang 错误

### 错误 1：缺少回链（return tag）

hreflang 是「双向合约」：繁中页指向简中页，简中页也必须指回繁中页。只要任一方向缺失，**整组标注直接被 Google 忽略**。这是最常见也最致命的错误，通常发生在只改了一个语言模板、忘了同步其他语言。

### 错误 2：漏掉自我引用

每一页的 hreflang 列表必须包含「自己」。正确的三语＋x-default 写法，四行要完整出现在**每一个**语言版本上：

```html
<link rel="alternate" hreflang="zh-Hant" href="https://example.com/zh-hant/pricing/" />
<link rel="alternate" hreflang="zh-Hans" href="https://example.com/zh-hans/pricing/" />
<link rel="alternate" hreflang="en" href="https://example.com/en/pricing/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/en/pricing/" />
```

### 错误 3：语言代码写错

hreflang 用的是 ISO 639-1 语言码＋ISO 15924 文字码／ISO 3166-1 地区码，常见的错误写法：

| 错误写法 | 问题 | 正确写法 |
|---|---|---|
| `zh-tw`（单独当语言用没问题，但…） | 只想覆盖全球繁中用户时范围太窄 | `zh-Hant` |
| `tw`、`cn` | 这是地区码，不能单独当语言码 | `zh-Hant`、`zh-Hans` |
| `zh-Hant-TW` 却没有对应内容 | 标了地区变体但内容根本相同 | 收敛回 `zh-Hant` |
| `en-UK` | 英国的正确地区码是 GB | `en-GB` |

### 错误 4：指向跳转、404 或 noindex 页面

hreflang 指向的 URL 必须是**可直接收录的最终网址**。指向 301 跳转中继页、404 页或带 noindex 的页面，该条标注等于作废。网站搬家或改 URL 结构后，这类错误会大量出现。

### 错误 5：canonical 与 hreflang 打架

每个语言版本的 canonical 必须指向自己。若简中页的 canonical 指向繁中页，等于一边叫 Google「收录简中版」、一边叫它「以繁中版为准」，信号互相矛盾，通常以简中版消失收场。

### 错误 6：只在部分页面实现

只有首页有 hreflang、内页全裸奔，是很多网站的现况。自我蚕食恰恰最常发生在长尾内页。hreflang 必须**全站每一个有多语版本的页面**都实现。

### 错误 7：HTML 与 sitemap 两处标注互相矛盾

两种放置方式择一即可。若 HTML head 写一套、sitemap 又写另一套且内容不一致，Google 收到矛盾信号后的行为不可预测。

## 如何确认自己有没有中招？

1. **GSC 成效报表分流检查**：分别以「网页」筛选 `/zh-hant/` 与 `/zh-hans/`，比对各自的曝光国家。若简中页在台湾拿到大量曝光，八成是 hreflang 失效。
2. **同关键字排名轮替**：追踪主要关键字时，发现繁简两个 URL 轮流上下，是典型蚕食征兆。
3. **抽查源代码**：随机抽 5 页，逐行核对「全语言＋自我引用＋x-default、双向一致」。

## 常见问题（FAQ）

**Q1：hreflang 错误修好后多久生效？**
取决于重新抓取速度，一般 2–6 周逐步恢复。可在修正后于 GSC 对主要页面请求建立索引，加速重抓。

**Q2：繁简蚕食一定是 hreflang 的错吗？**
不一定，但它是头号嫌犯。其次的原因包括 canonical 设错、简中版只是机器直转（内容过近）、以及两版共用同一组 title。排查时先验 hreflang，再看 canonical 与内容差异化。

**Q3：可以只对重要页面做 hreflang 吗？**
技术上可以，但蚕食最常发生在你没盯着的长尾页。建议在模板层自动输出，一次覆盖全站，成本反而最低。

**Q4：Google 已移除 GSC 的国际定位报表，还能在哪里验证？**
GSC 的 International Targeting 报表已于 2022 年后陆续退场，现在主要靠成效报表的国家×页面交叉分析，搭配第三方爬虫工具（如 Screaming Frog 的 hreflang 检查）做全站扫描。

---

与其每次手动核对四行标签，不如让工具代劳：GeoSeoToday的 [hreflang 生成器与 GEO 检测工具](/zh-hans/geo/) 会自动带入全语言列表、自我引用与 x-default，杜绝缺回链问题。若 hreflang 已经干净、两版仍互相蚕食，元凶通常是内容过于相似——差异化修法请见〈[7 个最常见的 GEO 错误](/zh-hans/blog/geo-common-mistakes/)〉。
