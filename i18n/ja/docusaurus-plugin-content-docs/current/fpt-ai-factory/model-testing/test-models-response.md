---
id: "test-models-response"
title: "モデルの応答をテスト"
description: "interactive sessionでモデルの応答をテストするためのガイド"
sidebar_label: "モデルの応答をテスト"
sidebar_position: 5
---

# モデルの応答をテスト

セッションを選択して、モデルの応答を確認します。システムはtest playgroundを開き、モデルと対話できます。

[![file](/img/migrated/image-1746694482798.30.25-2511f2f2.png)](/img/migrated/image-1746694482798.30.25-2511f2f2.png)

### **1. System message**

AIモデルの動作とトーンを設定する命令。会話全体を通じてモデルがどのように応答するかをガイドできます。

System messageは好みに合わせて変更できます。デフォルト: _「あなたは役立つアシスタントです」_

**例:** _あなたはcloud computingの専門家であり、技術的な問題でユーザーをサポートしています。_

### **2. User message**

ユーザーがAIに提供する入力または質問。モデルが会話で応答するメインpromptとして機能します。

**例:** _private cloudを使用する利点は何ですか?_

**.jpeg**および**.jpg**形式の画像のアップロードをサポートしており、VLM（Vision-Language Models）でのテストに使用できます。画像テストをサポートするモデルのリスト:

- Meta-llama/Llama-3.2-11B-Vision-Instruct
- Qwen/Qwen2-VL-2B-Instruct
- Qwen/Qwen2-VL-7B-Instruct
- Qwen/Qwen2-VL-72B-Instruct
- Qwen/Qwen2.5-VL-3B-Instruct
- Qwen/Qwen2.5-VL-7B-Instruct
- Qwen/Qwen2.5-VL-72B-Instruct
- google/gemma-3-12b-it
- google/gemma-3-27b-it
- google/gemma-3-4b-it

### **3. 設定**

- **Temperature:** 回答で許容される創造性のレベル。通常**0から2**の範囲です。

デフォルト: **1**

- **Temperatureが低い（0に近い）:**
  - モデルはより**予測可能で決定論的な**応答を生成します。
  - 確率の高い単語とtokenを優先し、より**焦点を絞った正確な**出力を生成します。
- **Temperatureが高い（1以上）:**
  - モデルはより**創造的**で多様かつ**予想外の**応答を生成します。
  - より広範な単語からサンプリングされるため、出力は**より多様になります**が、精度が低下する可能性があります。

- **詳細設定:**
  - Stop sequenceの追加: Stop sequenceにより、検出時にモデルを停止させる1つ以上のシーケンスを指定でき、生成されるテキストの**長さと内容**を制御できます。
  - 出力長: モデルで生成されるテキストの長さを制御し、promptへの応答としてモデルが生成できるtokenの最大数（単語またはsubword）を設定します。デフォルト: **8192**
  - Top-P: 生成モデルで使用され、生成されるテキストのランダム性と多様性を管理します。モデルの出力分布からサンプリングする際のtemperatureの代替として機能します。デフォルト: **0.95**

出力モデル設定の例:

- Stop sequenceの追加: third-party
- 出力長: 1000
- Top-P: 0.95

[![file](/img/migrated/image-1746696612804.30.02-38f9b349.png)](/img/migrated/image-1746696612804.30.02-38f9b349.png)

→ モデルは、stop sequenceに遭遇するか、tokenの最大制限に達すると停止します。
