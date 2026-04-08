---
id: "select-dataset-format"
title: "データセット形式の選択"
description: "データセット形式は選択した trainer によって異なります。"
sidebar_label: "データセット形式の選択"
sidebar_position: 22
---

# データセット形式の選択

データセット形式は選択した trainer によって異なります。

| Trainer | サポートされるデータ形式 | サポートされるファイル形式 | サポートされるファイルサイズ |
| --- | --- | --- | --- |
| **SFT** | Alpaca | CSV、JSON、JSONLINES、ZIP、PARQUET | 100MB まで |
| **SFT** | ShareGPT | JSON、JSONLINES、ZIP、PARQUET | 100MB まで |
| **SFT** | ShareGPT_Image | ZIP、PARQUET | 100MB まで |
| **DPO** | ShareGPT | JSON、JSONLINES、ZIP、PARQUET | 100MB まで |
| **Pre-training** | Corpus | TXT、JSON、JSONLINES、ZIP、PARQUET | 100MB まで |

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/Data-format.png)](https://fptcloud.com/wp-content/uploads/2025/02/Data-format.png)

現在、fine-tuning 用にサポートされているデータ形式は以下のとおりです。

### a/ Alpaca

**Alpaca** は、**教師あり fine-tuning** タスクの入出力ペアを持つ命令追従形式で model を fine-tune するために、非常にシンプルな構造を使用します。基本構造には以下が含まれます。
- **Instruction**: model が実行する必要がある特定のタスクまたは要求を含む文字列。
- **Input**: model がタスクを実行するために処理する必要がある情報を含む文字列。
- **Output**: 命令と入力の処理から生成される、model が返す結果を表す文字列。

**詳細な構造:**

```
Copy[
   {
      "instruction": "string",
      "input": "string",
      "output" "string"
  }
]
```

**サンプル:** <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/alpaca>

**サポートされるファイル形式:** .csv、.json、.jsonlines、.zip、.parquet

### b/ ShareGPT

#### b.1/ Trainer = SFT

**ShareGPT** は、ユーザーと AI アシスタント間のマルチターン会話（やり取りのチャット）を表すように設計されています。複数のターンにわたるコンテキスト会話を処理する必要がある対話システムやチャットボットの model をトレーニングまたは fine-tuning する際によく使用されます。

各データサンプルは `conversations` 配列で構成され、チャットの各ターンには以下が含まれます。
- **from**: 話者 — 通常は `"human"` または `"gpt"`。
- **value**: その話者からの実際のメッセージテキスト。

**詳細な構造:**

```
Copy[
   {
      "conversations": [
         {
            "from": "string",
            "value": "string"
         }
      ]
   }
]
```

**サンプル:** <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/sharegpt>

**サポートされるファイル形式:** .json、.jsonlines、.zip、.parquet

#### b.2 / Trainer = DPO

**ShareGPT_DPO** は、ShareGPT から収集された会話（プロンプト + レスポンス）と、どちらが優れているかに基づいて人間がランク付けしたレスポンスのペアで構成されるデータセットです。以下の目的で使用されます。
- GPT のような言語モデルをトレーニングして、人間の好みに沿った方法で応答させます。
- DPO（Direct Preference Optimization）メソッドを使用してレスポンス品質を最適化します。

**詳細な構造:**

```
Copy[
   {
      "conversations": [
         {
            "from": "string",
            "value": "string"
         }
],
      "chosen": {
         "from": "string",
         "value": "string"
},
      "rejected": {
         "from": "string",
         "value": "string"
      }
   }
]
```

**サンプル:** <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/sharegpt-dpo>

**サポートされるファイル形式:** .json、.jsonlines、.zip、.parquet

### c/ ShareGPT_Image

**ShareGPT_Image** は、マルチモーダルトレーニング（会話内でテキストと画像の両方を処理する model のトレーニング）に特化して設計された ShareGPT マルチターンチャット形式の拡張版です。自然言語と並行して画像を処理する必要があるビジョン言語モデル（VLM）の fine-tuning に使用されます。

構造には以下が含まれます。
- `"message"` の下のチャットターンのリスト（ShareGPT と同様）。
- 会話で使用される画像を指す `"image"` または `"image_path"` フィールド（png、jpg、jpeg 形式を使用）。

**注意:**
- 画像が表示される場所のチャットコンテンツに `image` トークンを含める必要があります。
- **複数の画像**がある場合:
  - 画像パスは `images` 配列で定義する必要があります。
  - チャットフロー内の画像の位置は `image` トークンで示されます。
  - チャット内の `image` トークンの数は `images` 配列の項目数と一致する必要があります。
  - 画像は出現順にマッピングされ、各 `image` トークンは `images` 配列の対応する画像に置き換えられます。

**詳細な構造:**

```
Copy[
   {
      "message": [
         {
            "role": "string", "content": "<image>string"
         }
      ],
      "images": [
         "images/0.jpg"
      ]
   }
]
```

**サンプル:** <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/sharegpt-image>

**サポートされるファイル形式:** .zip、.parquet

### d/ Corpus

**Corpus** は、言語モデルのトレーニングまたは fine-tuning に使用されるテキストのコレクションです。コーパス内の各データポイントには、テキストの文字列を含む `"text"` フィールドが含まれています。この形式は、**命令**と**アウトプット**を区別する必要がなく、model が学習するための生のテキストデータを提供するだけの場合によく使用されます。

**詳細な構造:**

```
Copy[
   {
      "text": "string"
   }
]
```

**サンプル:** <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/corpus>

**サポートされるファイル形式:** .txt、.json、.jsonlines、.zip、.parquet
