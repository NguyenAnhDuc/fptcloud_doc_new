---
id: "docker-login"
title: "Docker Login"
description: "Docker CLI から FPT Container Registry に認証する。"
sidebar_label: "Docker Login"
sidebar_position: 2
---

# Docker Login

FPT Container Registry に対して image の push/pull を行うには、FPT Portal から取得した認証情報で Docker CLI を認証する必要があります。

1. サイドバーメニューで **Container Registry** を選択し、**Get Token** をクリックして **Username** と **Secret Key** を取得します。

   [![Get Token 画面](/img/migrated/Userguide-Container-registry-2022-21-102-8462e0c1.png)](/img/migrated/Userguide-Container-registry-2022-21-102-8462e0c1.png)

2. **ヘルプアイコン（ⓘ）** にカーソルを合わせると、Docker Login、Tag、Push のコマンドが表示されます。

   [![コマンドを表示するヘルプアイコン](/img/migrated/Userguide-Container-registry-2022-22-102-93753104.png)](/img/migrated/Userguide-Container-registry-2022-22-102-93753104.png)

3. 上記の認証情報を使用してローカルの Docker CLI で `docker login` コマンドを実行します。

   [![Docker login の結果](/img/migrated/Userguide-Container-registry-2022-10-df956b6d.png)](/img/migrated/Userguide-Container-registry-2022-10-df956b6d.png)

   例:

   ```bash
   docker login registry.fke.fptcloud.com
   ```
