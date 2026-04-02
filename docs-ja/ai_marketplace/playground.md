---
id: "playground"
title: "Playground"
description: "AI Marketplace Playground では、コードを書かずに AI モデルをテスト・操作できます。テキスト生成、テキスト読み上げ、音声認識、ビジョンタスク、Embedding に対応しています。"
sidebar_label: "Playground"
sidebar_position: 6
---

# Playground

## Playground の使い始め方

AI Marketplace Playground では、コードを書かずに AI モデルをテスト・操作できます。テキスト生成、テキスト読み上げ（TTS）、音声認識（STT）、ビジョンタスク、Embedding に対応しています。

- ホームページ上部のナビゲーションバーにある **「Playground」** をクリックします（Pricing と Support Center の間）。
- **「Get API Key」** をクリックすると My API Key ページに移動し、API キーの作成・管理ができます。

[![モデル選択とプロンプト入力が表示された Playground メイン画面](/img/migrated/playgr1-06ea6eb8.png)](/img/migrated/playgr1-06ea6eb8.png)

- **「View Code」** をクリックすると、サンプルコードスニペット（**cURL**、**Python**、**Node.js** に対応）とリクエストのレスポンス例が表示されるポップアップが開きます。

[![cURL・Python・Node.js のサンプルスニペットが表示された View Code ポップアップ](/img/migrated/playgr6-sample-code-01622553.png)](/img/migrated/playgr6-sample-code-01622553.png)

---

## 大規模言語モデル（LLM）

**説明：**
書籍・ウェブサイト・記事・会話など大量の情報で学習したテキストベースのアシスタントです。リクエストを理解し、自然で人間らしいテキストで回答します。

[![クイックアクションテンプレートが表示された LLM Playground 画面](/img/migrated/playgr1-06ea6eb8.png)](/img/migrated/playgr1-06ea6eb8.png)

**利用可能なクイックアクションテンプレート：**

- ブログのアウトラインを作成する
- 市場投入計画を作成する
- このレポートを箇条書きで要約する
- 会議のトーキングポイントの準備を手伝う
- メールをプロフェッショナルな文体に整える
- 個人プロジェクトの To-Do リストを作成する

**手順：**

1. ニーズに最も合ったタスクをクリックします。システムが入力に基づいて自動的にレスポンスを準備します。
2. 選択したタスクに関連する質問、トピック、または具体的なリクエストをテキストボックスに入力します。
3. **「Send」** をクリックすると、右側に結果が表示されます。

**詳細設定（左パネル）：**

- **System prompt** — アシスタントのスタイルや動作を設定します。
- **Temperature**、**Max output tokens**、**Top P**、**Top K**、**Penalties** — 創造性、長さ、ランダム性を調整します。

---

## テキスト読み上げモデル（TTS）

[![音声・速度・言語のドロップダウンが表示された TTS Playground 画面](/img/migrated/playgr3-TTS-0593ab37.png)](/img/migrated/playgr3-TTS-0593ab37.png)

**説明：**
テキストを音声に変換します。

**手順：**

1. **「Voice」** ドロップダウンで音声の種類を選択します。
2. **「Speed」** ドロップダウンで音声の速度を選択します。
3. **「Language」** ドロップダウンで言語を選択します。
4. **「Text」** 入力欄に最大 500 文字を入力します。
5. **「Run」** をクリックすると、システムが音声ファイルを生成します（再生またはダウンロード可能）。

---

## 音声認識モデル（STT）

[![モデル選択と音声アップロードが表示された STT Playground 画面](/img/migrated/playgr4-STT-26b13380.png)](/img/migrated/playgr4-STT-26b13380.png)

**説明：**
音声をテキストに変換します。

**手順：**

1. ドロップダウンから **「Model」** を選択します。
2. **「Response format」** を選択します（例：json または text）。
3. **「Source language」** を設定します。
4. **「Task」** を選択します：
   - **Transcription** — 音声をテキストに変換します。
   - **Translation** — 音声を別の言語のテキストに変換します。
5. 音声をアップロードまたは録音します（対応形式：**MP3/WAV**、最大長：**15 秒**）。
6. **「Run」** をクリックすると、文字起こしまたは翻訳されたテキストが Result セクションに表示されます。

---

## 視覚言語モデル（VLM）

[![画像アップロードと質問入力が表示された VLM Playground 画面](/img/migrated/playgr5-VLM-b29ce5ee.png)](/img/migrated/playgr5-VLM-b29ce5ee.png)

**説明：**
コンピュータビジョン（画像の理解）と自然言語処理（テキストの理解）を組み合わせたアシスタントで、より人間らしい方法で世界を認識します。

**手順：**

1. 画像をアップロードします（**JPEG**、**PNG**、**JPG**、最大 2 ファイル、各 20 MB）。
2. テキストボックスに画像に関する質問を入力します。
3. **「Run」** をクリックすると、モデルが画像の内容に基づいて回答します。

---

## Embedding モデル

[![入力タイプとエンコーディング形式のドロップダウンが表示された Embedding Playground 画面](/img/migrated/playgr2-embedding-8e2eef2b.png)](/img/migrated/playgr2-embedding-8e2eef2b.png)

**説明：**
Embedding モデルは、ドキュメントのチャンク（テキストの段落）を数値表現（ベクトル）に変換するトランスフォーマーベースのニューラルネットワークです。
これらのベクトルはテキストの意味を捉え、検索・推薦・類似度比較などのタスクに使用されます。

**手順：**

1. **「Input type」** ドロップダウンでテストしたい入力の種類を選択します。
2. **「Encoding format」** ドロップダウンで Embedding の出力形式を選択します。
3. **「Truncate」** ドロップダウンで、トークン制限を超えた入力の処理方法を選択します。
4. **「Text」** 入力欄に最大 500 文字を入力します。
5. **「Run」** をクリックすると、Result セクションに Embedding ベクトル（数値表現）が表示されます。

:::note
コンテンツの安全性を強化するガードレール機能は近日公開予定です。
:::

---

## Playground の追加コントロールの使い方

- **System prompt** — モデルの動作とスタイルをガイドします。
- **Enable streaming** — 生成中に部分的な結果を表示します。
- **Stop sequences** — 特定の単語やフレーズでモデルのレスポンスを打ち切ります。
- **Fine-tune this model** — 独自のユースケース向けにモデルのカスタマイズを開始するリンクです。
