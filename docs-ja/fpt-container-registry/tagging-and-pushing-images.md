---
id: "tagging-and-pushing-images"
title: "イメージを tag して FPT Container Registry に push する"
description: "ローカルの Docker イメージに tag を付けて FPT Container Registry に push する。"
sidebar_label: "イメージを tag して push する"
sidebar_position: 5
---

# イメージを tag して FPT Container Registry に push する

ログイン後、push の前にローカルイメージに FPT Container Registry の URI で tag を付ける必要があります。これにより Docker が push 先を認識します。

1. FPT Container Registry URI でローカルイメージに tag を付けます:

   ```bash
   docker tag SOURCE_IMAGE[:TAG] registry.fke.fptcloud.com/<registry-id>/REPOSITORY[:TAG]
   ```

   `<registry-id>` は FPT Cloud Portal からコマンドをコピーすると自動で補完されます。

   例:

   ```bash
   docker tag hello-world:latest registry.fke.fptcloud.com/77cbe8cc-16f4-471c-8755-a9482ca01baf/hello-world:latest
   ```

2. tag 付きイメージを FPT Container Registry に push します:

   ```bash
   docker push registry.fke.fptcloud.com/<registry-id>/REPOSITORY[:TAG]
   ```

   例:

   ```bash
   docker push registry.fke.fptcloud.com/77cbe8cc-16f4-471c-8755-a9482ca01baf/hello-world:latest
   ```

3. 管理ページでイメージが表示されることを確認します。

   [![管理ページに表示されたイメージ](/img/migrated/image06-1-d21ab6dc.png)](/img/migrated/image06-1-d21ab6dc.png)
