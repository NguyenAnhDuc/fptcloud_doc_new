---
id: "upload-files"
title: "ファイルのアップロード"
description: "model バージョンを選択してください"
sidebar_label: "ファイルのアップロード"
sidebar_position: 22
---

# ファイルのアップロード

model バージョンを選択してください
**ステップ 1：SDK CLI のインストール**

```
Copypip install https://s3-han02.fptcloud.com/aifactory-public/SDK/model_space-0.3.3-py3-none-any.whl
```

**ステップ 2：環境変数の設定**

```
Copyexport FPT_SPACE_URL=https://ai-api.fptcloud.com/
export FPT_TENANT_ID=
export FPT_SPACE_TOKEN=
```

**_注意_ :**
_アクセストークンを生成するには <https://ai.fptcloud.com/{{tenant_name}}/user-token> にアクセスし、上記の FPT_SPACE_TOKEN= の後に貼り付けてください_
_プロキシ（例：内部環境）経由で SDK を使用する場合は、上記の変数に加えて、**いずれか** のプロキシ環境変数（HTTP_PROXY または HTTPS_PROXY）を設定してください。_

```
Copyexport HTTP_PROXY=
export HTTPS_PROXY=
```

**ステップ 3：model バージョンのアップロード**

```
model_space model upload --model-id {{model_id}} --version-id {{version_id}}  --path 
```

**オプションパラメーター**
  * -include:

指定した正規表現パターンに一致するファイルのみを含めます。複数のパターンはカンマで区切ってください。
  * -exclude:

指定した正規表現パターンに一致するファイルを除外します。複数のパターンはカンマで区切ることもできます。
