---
id: "billing"
title: "Billing"
description: "料金はGPUのアクティブな稼働時間に基づいて計算されます。ワークロードが処理されているかどうかに関わらず、実行状態にある限りコンテナに課金されます。"
sidebar_label: "Billing"
sidebar_position: 25
pagination_next: null
---

# Billing

## ワークロードを使用していないのに、コンテナを実行しているだけで課金されるのはなぜですか？
料金はGPUのアクティブな稼働時間に基づいて計算されます。つまり、ワークロードが処理されているかどうかに関わらず、コンテナが実行状態にある限り課金されます。

不要な料金の発生を避けるため、使用していないコンテナは停止または削除してください。なお、コンテナが停止中でも永続ストレージの料金は引き続き請求されます。

料金モデルの詳細については [Payment Model](/docs/ja/gpu-container/payment-model) および [Billing Overview](/docs/ja/gpu-container/billing-overview) をご参照ください。
