---
id: "pull-docker-image-tu-fpt-container-registry-ve-local"
title: "FPT Container Registry から Docker image を pull する"
description: "FPT Container Registry からローカルに Docker image を pull する手順。"
sidebar_label: "FPT Container Registry から Docker image を pull する"
sidebar_position: "9"
---

# FPT Container Registry から Docker image を pull する

Registry に image を push した後、アクセス権を持つどのマシンからでも image を pull できます。pull するたびに使用中のサービスプランの **Pull-limit** が消費されます。

1. **Repository** 画面で pull したい image をクリックして詳細情報を表示します。

   [![Repository 内の image 一覧](/img/migrated/Picture13-2-f77f73c3.png)](/img/migrated/Picture13-2-f77f73c3.png)

2. **Detail Repository** を選択して image の詳細を表示します。**コピー** アイコンをクリックして pull コマンドをコピーします。

   FPT Cloud は tag または SHA による pull をサポートしています:

   - SHA による pull:

     [![SHA で image を pull](/img/migrated/Picture14-1-8f23c8c0.png)](/img/migrated/Picture14-1-8f23c8c0.png)

   - tag による pull:

     [![tag で image を pull](/img/migrated/Picture15-1-783da3a0.png)](/img/migrated/Picture15-1-783da3a0.png)

   例:

   ```bash
   docker pull registry.fke.fptcloud.com/088b6c2e-7fb9-4fd7-b906-779e99c63e32/docker:20.10.12-dind
   ```

3. Docker CLI を使用して image をローカルに pull します。

   [![Image pull 成功の結果](/img/migrated/Picture16-1-000c1df3.png)](/img/migrated/Picture16-1-000c1df3.png)

   Pull するたびに **Pull-limit** が更新されます:

   [![Pull 後の Pull-limit 更新](/img/migrated/Picture17-1-bc8321ee.png)](/img/migrated/Picture17-1-bc8321ee.png)
