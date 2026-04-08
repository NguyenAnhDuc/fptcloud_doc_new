---
id: "configure-webhook-with-secret"
title: "作成済みwebhook secretを使ったWebhookの設定"
description: "作成済みwebhook secretを使用してWebhookを設定するガイド"
sidebar_label: "作成済みwebhook secretを使ったWebhookの設定"
sidebar_position: 45
draft: true
---

# 作成済みwebhook secretを使ったWebhookの設定

**ステップ1：** GitlabでWebhookを設定する

**Gitlab Repository** > **Settings** > **Webhooks** に移動します：

[![](/img/migrated/Picture84-2-d82f0925.png)](/img/migrated/Picture84-2-d82f0925.png)

[![](/img/migrated/Picture85-2-25e959bf.png)](/img/migrated/Picture85-2-25e959bf.png)

[![](/img/migrated/Picture86-2-efa61799.png)](/img/migrated/Picture86-2-efa61799.png)

**Add Webhook** をクリックして完了します：

[![](/img/migrated/Picture87-2-772d1a21.png)](/img/migrated/Picture87-2-772d1a21.png)

**ステップ2：** Webhookが正常に設定されているか確認します。

[![](/img/migrated/Picture88-2-c17f3adb.png)](/img/migrated/Picture88-2-c17f3adb.png)

[![](/img/migrated/Picture89-2-a77feb4b.png)](/img/migrated/Picture89-2-a77feb4b.png)

**ステップ3：** リポジトリのpushイベントでテストを実行します。

- デプロイメントのreplicasを1に編集します：

[![](/img/migrated/Picture90-2-a4c44ba0.png)](/img/migrated/Picture90-2-a4c44ba0.png)

Push前後のアプリケーション状態：

前：

[![](/img/migrated/Picture91-2-3461572c.png)](/img/migrated/Picture91-2-3461572c.png)

後：

[![](/img/migrated/Picture92-2-74bc5cd8.png)](/img/migrated/Picture92-2-74bc5cd8.png)

ArgoCDは変更を検出し、Repositoryから自動的に変更をSyncしてアプリケーションをデプロイします。
