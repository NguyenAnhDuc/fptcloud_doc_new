---
id: "pulling-docker-image-from-fpt-container-registry-to-local"
title: "FPT Container Registry から Docker イメージを pull する"
description: "FPT Container Registry からローカル環境に Docker イメージを pull する。"
sidebar_label: "Docker イメージを pull する"
sidebar_position: 6
pagination_next: null
draft: true
---

# FPT Container Registry から Docker イメージを pull する

registry にイメージが保存されたら、アクセス権を持つどのマシンからでも pull できます。pull するたびにサービスプランの **Pull-limit** が消費されます。

1. Portal で **Detail Repository** をクリックしてイメージの詳細を表示し、**コピーアイコン** をクリックして pull コマンドをコピーします。

   [![リポジトリ詳細から pull コマンドをコピー](/img/migrated/image07-1-c1ad3acd.png)](/img/migrated/image07-1-c1ad3acd.png)

2. Docker CLI でコピーしたコマンドを実行してイメージをローカルに pull します。

   例:

   ```bash
   docker pull registry.fke.fptcloud.com/77cbe8cc-16f4-471c-8755-a9482ca01baf/hello-world:latest
   ```
