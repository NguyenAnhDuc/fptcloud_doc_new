---
id: "fine-tune-with-lora"
title: "LoRA でファインチューニング"
description: "AI Marketplace で LoRA を使用したファインチューニングジョブを作成・管理する方法を説明します。"
sidebar_label: "LoRA でファインチューニング"
sidebar_position: 7
---

# LoRA でファインチューニング

[![ファインチューニングのワークフロー図（データアップロード・学習・デプロイの各段階）](https://fptcloud.com/wp-content/uploads/2025/02/Finetune.png)](https://fptcloud.com/wp-content/uploads/2025/02/Finetune.png)

## LoRA でファインチューニングジョブを作成するには？

LoRA を使用してモデルをファインチューニングするには、以下の手順に従ってください。

:::note
- ファインチューニングジョブを開始する前にログインが必要です。
- 十分な残高（クレジット）があることを確認してください。
- ファインチューニングに使用できるベースモデルが少なくとも 1 つ必要です。
:::

### 手順

1. **「Fine-tuning Jobs」ページ** に移動し、**「+ Fine-tune model」** をクリックします。
2. ポップアップで、ファインチューニングジョブの **名前** を入力します。
   - 検証：必須、最大 100 文字、Unicode 文字・数字・`-`・`_`・`.` をサポート

[![名前とベースモデルフィールドが表示されたファインチューニングジョブ作成ポップアップ](https://fptcloud.com/wp-content/uploads/2025/02/pop-up-fine-tune.png)](https://fptcloud.com/wp-content/uploads/2025/02/pop-up-fine-tune.png)

3. ドロップダウンリストから **ベースモデルを選択** します。
   - 例：`gemma-3-27b-it`、`Qwen3-4B-Instruct-2507`、`Llama-3.3-70B-Instruct`
4. ドロップダウンリストから **データセット形式を選択** します：Alpaca / ShareGPT / ShareGPT_Image
5. **学習データファイルをアップロード** します。
   - 対応形式：CSV、JSON、JSONL、ZIP、Parquet（100 MB 未満）
6. _（任意）_ **検証データをアップロード** します。

[![ハイパーパラメーター設定フィールドが表示されたファインチューニングジョブポップアップ](https://fptcloud.com/wp-content/uploads/2025/02/pop-up2.png)](https://fptcloud.com/wp-content/uploads/2025/02/pop-up2.png)

7. _（任意）_ **ハイパーパラメーターを設定** します：
   - **学習率（Learning rate）：** 浮動小数点数、`1e-6 → 1e-4`（例：`0.00001`）
   - **エポック数（Number of epochs）：** 整数 `1〜20`（デフォルト = `5`）
8. **「Create」** をクリックしてファインチューニングジョブを開始します。
   - ジョブはテーブルに **Running** ステータスで表示されます。

:::tip
LoRA によるファインチューニングは通常数分で完了します。
:::

---

## ファインチューニングジョブを管理するには？

**「Fine-tuning Jobs」** ページでは以下の操作が可能です。

- **View detail** — AI Studio でパイプラインの詳細を開きます。
- **Deploy model** — 学習完了後、LoRA モデルをデプロイします。
- **Cancel job** — 実行中のジョブをキャンセルします（確認が必要）。
- **Delete job** — ジョブを完全に削除します（確認が必要）。

### ステータスバッジ

- **Running**（黄色）
- **Succeeded**（緑色）
- **Failed**（赤色）
- **Canceled**（グレー）
