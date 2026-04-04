---
id: "huong-dan-cau-hinh-notifications-de-nhan-thong-bao"
title: "通知を受け取るためにNotificationsを設定する"
description: "Telegram、Slack、EmailへのArgoCD通知を設定する方法"
sidebar_label: "通知の設定"
sidebar_position: "50"
---

# 通知を受け取るためにNotificationsを設定する

## 1. Telegram

Telegramへの通知を設定するには、次の手順に従います:

**ステップ1:** @BotFatherを使用してAPIトークンを取得します。Telegramアプリを開いて@BotFatherを検索します。

[![](/img/migrated/Picture93-1-ce5f72d1.png)](/img/migrated/Picture93-1-ce5f72d1.png)

**/help** と入力して使用可能なオプションを確認します。

[![](/img/migrated/Picture94-1-1e58a9d9.png)](/img/migrated/Picture94-1-1e58a9d9.png)

**/newbot** と入力して新しいボットを作成します:

[![](/img/migrated/Picture95-1-ca767ba6.png)](/img/migrated/Picture95-1-ca767ba6.png)

ボット名を入力します。注意: ボット名は「bot」で終わる必要があります。

[![](/img/migrated/Picture96-1-bd26e3a2.png)](/img/migrated/Picture96-1-bd26e3a2.png)

アクセストークンはPortalでTelegramトークンを設定するために使用されます。

**ステップ2:** FPT CloudでトークンをTelegramへの通知送信用に設定します。

**ステップ3:** 通知を受け取るチャンネルを作成します。

[![](/img/migrated/Picture97-1-2ce6eac4.png)](/img/migrated/Picture97-1-2ce6eac4.png)

プライベートチャンネルを選択します:

[![](/img/migrated/Picture98-1-38531c73.png)](/img/migrated/Picture98-1-38531c73.png)

**ステップ4:** 作成したボットアカウントをチャンネルに追加します。

[![](/img/migrated/Picture99-1-7d3819fc.png)](/img/migrated/Picture99-1-7d3819fc.png)

**ステップ5:** subscriptionで **ChatID** を使用してTelegramを統合します:

[![](/img/migrated/Picture100-1-bcafb00a.png)](/img/migrated/Picture100-1-bcafb00a.png)

**ステップ6:** アプリケーションでTelegram通知を設定します:

[![](/img/migrated/Picture101-1-1d6a048a.png)](/img/migrated/Picture101-1-1d6a048a.png)

**ステップ7:** Applicationをsyncしてtelegramに送信されたメッセージを確認します:

[![](/img/migrated/Picture102-1-cb19eee7.png)](/img/migrated/Picture102-1-cb19eee7.png)

## 2. Slack

**ステップ1:** Slackワークスペースを作成します:

[![](/img/migrated/Picture103-1-5d03b136.png)](/img/migrated/Picture103-1-5d03b136.png)

**ステップ2:** チャンネルを作成します:

[![](/img/migrated/Picture104-1-6d217f24.png)](/img/migrated/Picture104-1-6d217f24.png)

**ステップ3:** [https://api.slack.com/apps](https://api.slack.com/apps) でSlackに新しいアプリを作成します。

[![](/img/migrated/Picture105-1-c0c06844.png)](/img/migrated/Picture105-1-c0c06844.png)

**From scratch** でアプリを作成します:

[![](/img/migrated/Picture106-1-fa3dbfc2.png)](/img/migrated/Picture106-1-fa3dbfc2.png)

**ステップ4:** **OAuth & Permissions** を設定します:

[![](/img/migrated/Picture107-1-92d32a17.png)](/img/migrated/Picture107-1-92d32a17.png)

ArgoCD NotificationsがチャンネルにメッセージをするためのOAuth Scopeを設定します:

[![](/img/migrated/Picture108-1-5ea1dd4e.png)](/img/migrated/Picture108-1-5ea1dd4e.png)

**ステップ5:** **OAuth Tokens for Your Workspace** を設定します:

[![](/img/migrated/Picture109-1-d8859cb0.png)](/img/migrated/Picture109-1-d8859cb0.png)

[![](/img/migrated/Picture110-1-3d87cff7.png)](/img/migrated/Picture110-1-3d87cff7.png)

Slackが **Bot User OAuth Token** を作成します。

[![](/img/migrated/Picture111-1-32b46326.png)](/img/migrated/Picture111-1-32b46326.png)

**ステップ6:** **Bot User OAuth Token** を使用してFPT Cloud PortalでSlackトークンを設定し、ArgoCD NotificationsからSlackへ通知を送信します。

**ステップ7:** チャンネルにアプリを追加します:

[![](/img/migrated/Picture112-1-15069836.png)](/img/migrated/Picture112-1-15069836.png)

**ステップ8:** Slackに通知を送信するようArgoCD Applicationを設定します。アプリケーション作成後、アプリを編集してannotationsを追加すると、チャンネルに通知が送信されます:

[![](/img/migrated/Picture113-1-8b39278c.png)](/img/migrated/Picture113-1-8b39278c.png)

[![](/img/migrated/Picture114-1-1a266777.png)](/img/migrated/Picture114-1-1a266777.png)

Applicationをsyncして通知をテストします:

[![](/img/migrated/Picture115-1-6b2804be.png)](/img/migrated/Picture115-1-6b2804be.png)

SlackチャンネルはApplicationのステータスに関する通知を受信します:

[![](/img/migrated/Picture116-1-e420e948.png)](/img/migrated/Picture116-1-e420e948.png)

## 3. Email

**ステップ1:** Portalでメール情報を設定します。

**ステップ2:** 以下のようにannotationsを追加して、メールに通知を送信するようArgoCD Applicationを設定します:

[![](/img/migrated/Picture117-1-a00e335a.png)](/img/migrated/Picture117-1-a00e335a.png)

**ステップ3:** アプリケーションをsyncすると、設定された受信者のメールアドレスに通知が送信されます:

[![](/img/migrated/Picture118-1-deb1583a.png)](/img/migrated/Picture118-1-deb1583a.png)
