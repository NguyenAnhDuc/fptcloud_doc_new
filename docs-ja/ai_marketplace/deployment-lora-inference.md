---
id: "deployment-lora-inference"
title: "LoRA 推論のデプロイ"
description: "ファインチューニング済みの LoRA モデルを AI Marketplace で API エンドポイントとしてデプロイする方法を説明します。"
sidebar_label: "LoRA 推論のデプロイ"
sidebar_position: 8
---

# LoRA 推論のデプロイ

## ファインチューニング済みの LoRA モデルをデプロイするには？

インフラを管理することなく、ファインチューニング済みの LoRA モデルを API 経由で即座に使用できるようにデプロイできます。

### 手順

1. ナビゲーションバーから **「Deployment」ページ** に移動します。
   - または、ファインチューニング完了後の成功ポップアップから **「View deployment」** をクリックします。

[![デプロイボタンが表示されたファインチューニング済み LoRA モデルの一覧ページ](https://fptcloud.com/wp-content/uploads/2025/02/deploy.png)](https://fptcloud.com/wp-content/uploads/2025/02/deploy.png)

2. デプロイしたい LoRA モデルの横にある **「Deploy」** をクリックします。
   - ステータスが **Deploying** に変わります。
3. デプロイが成功すると、ステータスが **Deployed** と表示されます。

---

## デプロイ済みモデルを管理するには？

**「Deployment」** ページでは以下の操作が可能です。

- **Get API Key** — モデルを呼び出すためのキーを取得します。
- **View API request** — サンプル JSON レスポンスのポップアップを開きます。
- **Try in Playground** — UI でモデルを直接テストします。
- **Undeploy** — デプロイ済みモデルを停止します（確認が必要）。

### ステータスバッジ

- **Deploying** — モデルをデプロイ中です。
- **Deployed** — モデルが推論に使用可能な状態です。
- **Stopped** — モデルがアンデプロイされています。
- **Failed** — デプロイに失敗しました。
