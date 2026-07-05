---
title: x-default 要指向哪个语言？
description: x-default 是 hreflang 的「默认出口」，当用户的语言不符合任何已标注版本时，Google 就会端出 x-default 指向的页面。本文讲解三种指定策略——英文版、语言选择页、主力市场版——以及各自适用的情境。
target_keyword: x-default
intent: informational
cluster: 多语言 / 国际 SEO（群集 5）
author: GeoSeoToday
date_published: 2026-07-24
date_updated: 2026-07-24
translations:
  zh-hant: x-default-guide
  en: x-default-guide
---
# x-default 要指向哪个语言？

**x-default 应该指向「当用户不属于任何已标注语言时，你最希望他看到的版本」——多数国际站指向英文版，有语言选择页的网站指向选择页，只经营华文市场的网站则可指向繁中或简中的主力版本。** 它没有唯一正解，但有明确的决策逻辑。

## x-default 是什么？

x-default 是 Google 在 2013 年 4 月推出的 hreflang 特殊值，作用是指定「兜底页面」：当搜索者的语言／地区不符合你标注的任何一个版本时（例如一位德语用户搜到你的三语网站），Google 会端出 x-default 指向的 URL。可以把它想成 switch 语句里的 `default:` 分支。

在标签里它长这样（注意 x-default 不是语言代码，同一组标注只能有一个）：

```html
<link rel="alternate" hreflang="zh-Hant" href="https://example.com/zh-hant/schema-guide/" />
<link rel="alternate" hreflang="zh-Hans" href="https://example.com/zh-hans/schema-guide/" />
<link rel="alternate" hreflang="en" href="https://example.com/en/schema-guide/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/en/schema-guide/" />
```

## 三种指定策略对比

| 策略 | x-default 指向 | 适合谁 | 风险 |
|---|---|---|---|
| 国际通用语 | 英文版页面 | 有英文版、目标含国际市场 | 几乎没有，最常见的选择 |
| 语言选择页 | `/` 的语言入口页 | 语言超过 3–4 种、无明显主力市场 | 选择页本身内容单薄，需避免变成空壳页 |
| 主力市场版本 | 繁中（或简中）页面 | 只经营华文市场、没有英文版 | 非华文用户体验差，但本来就不是目标客群 |

## 决策流程：三个问题

1. **你有英文版吗？** 有 → x-default 指向英文版，结束。这是对「其他所有人」最不容易出错的答案，也是多数三语站（繁中／简中／英文）的标准做法。
2. **没有英文版，但有语言选择页吗？** 有 → 指向选择页。注意选择页要能被索引、不能是纯 JavaScript 跳转。
3. **两者都没有？** 指向你的主力语言版本。例如纯繁中＋简中的站，把 x-default 指向繁中版——这比不设置更好，因为它同时消除了「哪一版是默认」的模糊空间。

## 常见的 x-default 错误

- **忘记设置**：x-default 虽然不是强制的，但缺了它，Google 面对未标注语言的用户时只能自行猜测，繁简站可能被猜错版本。
- **设了多个 x-default**：同一组 hreflang 只能有一个 x-default，设两个以上会让整组信号混乱。
- **指向会自动跳转的 URL**：有些网站的根网址会依 IP 自动 302 跳转到语言版本，把 x-default 指向这种 URL，等于指向一个 Google 抓不到稳定内容的位置。
- **只在首页设置**：x-default 和其他 hreflang 一样，应该在**每一个有多语版本的页面**逐页指向该页对应的默认版本，而不是全站都指向首页。

## 常见问题（FAQ）

**Q1：x-default 是必填的吗？不设会怎样？**
不是必填，hreflang 没有 x-default 也能运作。但不设等于把「未覆盖语言的用户看哪一版」交给 Google 猜；补上一行成本极低，建议一律设置。

**Q2：x-default 可以和某个语言版本指向同一个 URL 吗？**
可以，而且这是最常见的做法——例如 `hreflang="en"` 和 `hreflang="x-default"` 同时指向英文版 URL，两行并存完全合法。

**Q3：华文站没有英文版，x-default 指繁中还是简中？**
指向你的主力市场版本。以台湾为主要市场就指繁中；若海外简中读者占比更高则指简中。判断依据是 GSC 里哪个语言目录的曝光与转化更重要。

**Q4：x-default 会影响排名吗？**
不会直接影响。它和 hreflang 一样属于分流信号，决定「谁看到哪一版」，不改变页面本身的排名能力。

---

x-default 只有一行，但每页都要跟着完整的 hreflang 组合一起输出——GeoSeoToday的 [hreflang 生成器与 GEO 检测工具](/zh-hans/geo/) 会在生成标签时自动附上正确的 x-default，不必再人工判断格式。想了解如何让 AI 跨语言引用你，可搭配〈[多语言 GEO：让 AI 用每一种语言都引用你](/zh-hans/blog/multilingual-geo/)〉一起阅读。
