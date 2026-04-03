---
id: "vllm-use-case"
title: "Vllm Use Case"
description: "環境変数フィールドで、APIキーとHugging FaceトークンをHugging Faceからモデルをダウンロードするために一致するよう値をカスタマイズします。"
sidebar_label: "Vllm Use Case"
sidebar_position: 19
---

# Vllm Use Case

## ステップ1：vllm-openaiテンプレートを使用してGPU Containerを作成する
環境変数フィールドで、APIキー（推論リクエストに使用）とHugging FaceトークンをHugging Faceからモデルをダウンロードするために一致するよう値をカスタマイズします。
このチュートリアルでは、Deepseek-R1-Distill-Qwen-1.5Bを使用しています。推論に使用したい他のモデルにMODELの値を置き換えてください。 ![Alt text](/img/migrated/vllm1-9fddd89f.png)
HF_TOKENフィールドにHugging FaceトークンをHugging Faceの値に置き換えることを忘れないでください。
![Alt text](/img/migrated/vllm2-f52567f6.png)
![Alt text](/img/migrated/Screenshot-2025-05-29-at-09.08.47-2425298a.png)

## ステップ2：Postmanを使用してテストする。ステップ1で追加したAPI_Tokenを使用して認証します

```
{HTTP Endpoint}/v1/completions
```

![Alt text](/img/migrated/Screenshot-2025-05-29-at-09.05.23-0782f6dc.png)
