---
id: "huong-dan-su-dung-robot-account"
title: "Robot account を使用する"
description: "Robot account で docker login を行い、pull/push を実行する。"
sidebar_label: "Robot account を使用する"
sidebar_position: "26"
---

# Robot account を使用する

Robot account を作成したら、その認証情報を使用して、設定した権限（pull/push）に従って Docker 操作を実行できます。Robot account は CI/CD パイプラインや自動化環境での使用に適しています。

Portal からコピーしたトークン、またはエクスポートしたファイルのトークンを使用してログインします:

[![トークンを使用した docker login](/img/migrated/Picture83-e270d618.png)](/img/migrated/Picture83-e270d618.png)

`docker login` コマンドで認証情報を確認します:

[![Robot account での docker login 結果](/img/migrated/Picture84-69496c13.png)](/img/migrated/Picture84-69496c13.png)

ログイン後、`docker pull` または `docker push` を使用して、設定した権限を確認します。

:::note
Robot account が削除・無効化されているか、トークンが失効している場合、`docker login`、`docker pull`、`docker push` は "unauthorized to access repository" エラーを返します。
:::
