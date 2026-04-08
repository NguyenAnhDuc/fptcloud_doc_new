---
id: "how-to-use-model-from-other-sources-like-hugging-face"
title: "他のソースからの model の使用"
description: "他で使用した model がある場合、または AI Studio で直接サポートされていない Hugging Face のオープンソース model を見つけた場合でも、AI Studio を使用してファインチューニングできます。"
sidebar_label: "他のソースからの model の使用"
sidebar_position: 50
---

# 他のソースからの model の使用

他で使用した model がある場合、または AI Studio で直接サポートされていない Hugging Face のオープンソース model を見つけた場合でも、AI Studio を使用してファインチューニングできます。
ここでは、ファインチューニングのためにカスタム model を AI Studio に取り込む方法を説明します。

## SDK 経由で model をアップロードする
### ステップ 1：SDK CLI のインストール

```
Copypip install https://s3-han02.fptcloud.com/modelhubsdk/ai-studio/model_space-0.2.5.9-py3-none-any.whl
```

### ステップ 2：環境変数の設定

```
export FPT_SPACE_URL="https://ai-api.fptcloud.com"
export FPT_SPACE_TOKEN=""
export FPT_TENANT_ID=""
```

  * 注意：
    * FPT_SPACE_TOKEN：アクセストークンを生成するには [https://ai.fptcloud.com/`{{tenant_name}}`/user-token](https://ai.fptcloud.com/AIMKP-UTN-LINHHTM20/user-token) にアクセスし、上記の FPT_SPACE_TOKEN= の後に貼り付けてください。
    * FPT_TENANT_ID：テナントの ID

### ステップ 3：model バージョンのアップロード

```
Copymodel_space model upload --model-id  --version-id  --path 
```

**オプションパラメーター**
  * include:

指定した正規表現パターンに一致するファイルのみを含めます。複数のパターンはカンマで区切ってください。
  * exclude:

指定した正規表現パターンに一致するファイルを除外します。複数のパターンはカンマで区切ることもできます。
**注意**
  * model のサイズとチャットテンプレート情報を含むタグを編集済みであることを確認してください。
  * 外部 model ソースのすべてのファイルが Model Hub に完全にアップロードされていることを確認してください。
