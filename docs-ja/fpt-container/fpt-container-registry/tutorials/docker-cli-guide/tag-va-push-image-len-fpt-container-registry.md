---
id: "tag-va-push-image-len-fpt-container-registry"
title: "FPT Container Registry に image を tag して push する"
description: "ローカルの Docker image に tag を付けて FPT Container Registry に push する手順。"
sidebar_label: "FPT Container Registry に image を tag して push する"
sidebar_position: "8"
---

# FPT Container Registry に image を tag して push する

ログイン後、push の前にローカル image に FPT Container Registry の URI で tag を付ける必要があります。これにより Docker が push 先を認識します。

1. FPT Container Registry の URI でローカル image に tag を付けます:

   ```bash
   docker tag SOURCE_IMAGE[:TAG] registry.fke.fptcloud.com/<registry-id>/REPOSITORY[:TAG]
   ```

   `<registry-id>` は FPT Portal からコマンドをコピーすると自動で補完されます。

   例:

   ```bash
   docker tag docker:20.10.12-dind registry.fke.fptcloud.com/088b6c2e-7fb9-4fd7-b906-779e99c63e32/docker:20.10.12-dind
   ```

2. FPT Container Registry に image を push します:

   ```bash
   docker push registry.fke.fptcloud.com/<registry-id>/REPOSITORY[:TAG]
   ```

   例:

   ```bash
   docker push registry.fke.fptcloud.com/088b6c2e-7fb9-4fd7-b906-779e99c63e32/docker:20.10.12-dind
   ```

3. Portal で image の push 結果を確認します。

   [![Image push 成功の結果](/img/migrated/Picture11-1-9de7f6f9.png)](/img/migrated/Picture11-1-9de7f6f9.png)

   [![Push 後の image 一覧](/img/migrated/Picture12-2-6e60be56.png)](/img/migrated/Picture12-2-6e60be56.png)
