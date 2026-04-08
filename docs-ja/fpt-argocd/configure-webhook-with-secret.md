---
id: "thuc-hien-cau-hinh-webhook-voi-webhook-secret-da-duoc-tao"
title: "Webhook secretを使用したWebhookの設定"
description: "作成済みのWebhook secretを使用してGitLabのWebhookを設定する方法。"
sidebar_label: "Webhook secretを使用したWebhookの設定"
sidebar_position: 45
draft: true
---

# Webhook secretを使用したWebhookの設定

**ステップ1:** GitLabでWebhookを設定する

**Gitlab Repository** > **Settings** > **Webhooks** を開きます。

[![](/img/migrated/Picture84-2-d82f0925.png)](/img/migrated/Picture84-2-d82f0925.png)

[![](/img/migrated/Picture85-2-25e959bf.png)](/img/migrated/Picture85-2-25e959bf.png)

[![](/img/migrated/Picture86-2-efa61799.png)](/img/migrated/Picture86-2-efa61799.png)

**Add Webhook** をクリックして完了します。

[![](/img/migrated/Picture87-2-772d1a21.png)](/img/migrated/Picture87-2-772d1a21.png)

**ステップ2:** Webhookが正常に設定されたか確認する

[![](/img/migrated/Picture88-2-c17f3adb.png)](/img/migrated/Picture88-2-c17f3adb.png)

[![](/img/migrated/Picture89-2-a77feb4b.png)](/img/migrated/Picture89-2-a77feb4b.png)

**ステップ3:** リポジトリでのpushイベントをテストする

- deploymentのreplicasを1に変更します。

[![](/img/migrated/Picture90-2-a4c44ba0.png)](/img/migrated/Picture90-2-a4c44ba0.png)

変更のpush前後のアプリケーションの状態：

変更前：

[![](/img/migrated/Picture91-2-3461572c.png)](/img/migrated/Picture91-2-3461572c.png)

変更後：

[![](/img/migrated/Picture92-2-74bc5cd8.png)](/img/migrated/Picture92-2-74bc5cd8.png)

ArgoCDはリポジトリからの変更を検知し、自動的に同期してアプリケーションをデプロイします。
