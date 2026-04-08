---
id: "cau-hoi-thuong-gap"
title: "よくある質問"
description: "FPT Monitoring Service で Grafana を使用する際のよくある質問と回答。"
sidebar_label: "よくある質問"
sidebar_position: 20
pagination_next: null
---

# よくある質問

### 1. Dashboard template を統合した後、Dashboard 画面に戻っても統合したテンプレートが表示されない場合は？

ページを更新（リフレッシュ）してお試しください。

### 2. しばらく Monitoring を使用した後、metric/logs が Grafana Dashboard に表示されなくなった場合の確認方法

Monitoring をしばらく使用した後に metric/logs が Grafana Dashboard に表示されなくなった場合、現在ご利用の FMON プランのワークスペースが time series/logs のクォータを使い切った可能性があります。

使用済みの time series/logs の量を確認するには、**[7. コンソールポータルで usage（timeseries、log、trace）の状態を確認する方法](../huong-dan-su-dung-grafana/index.md)** をご参照ください。
