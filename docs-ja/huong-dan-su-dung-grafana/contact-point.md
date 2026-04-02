---
id: "contact-point"
title: "1. Telegram bot の設定方法"
description: "Grafana で Telegram やその他のチャンネルに alert 通知を送信するための contact point 設定ガイド。"
sidebar_label: "1. Telegram bot の設定方法"
sidebar_position: 19
---

# 1. Telegram bot の設定方法

Slack、Discord、Webhook、Email、Teams、Telegram など、さまざまな contact point があり、それぞれ設定方法が異なります。

以下では、alert 発火時に通知を送信するための Telegram の設定方法を具体的にご説明します。

その他の contact point の設定方法については、Grafana 公式サイトの詳細ガイド **[こちら](https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points)** をご参照ください。

Grafana と Telegram を統合するには、以下が必要です。

- Telegram bot API トークン
- Chat ID（alert 通知を受け取りたい Telegram の会話 ID）

統合を完了するには、ブラウザ版（Web）の Telegram を使用する必要があります。

## Telegram bot の設定方法

以下の手順で bot を設定します。

- デバイスで Telegram アプリを開きます。
- BotFather という名前の bot を検索します。
- /newbot コマンドを入力または選択します。
- bot の名前を設定します（名前は bot または _bot で終わる必要があります。例: my_bot）。
- API トークンをコピーします。

## Chat ID の取得方法

以下の手順で bot をグループチャットに追加します。bot がグループに追加されると、そのグループに alert 通知をルーティングできます。

- Telegram で既存のグループを開くか、新しいグループを作成します。
- 作成した bot を検索してグループに追加します。
- ブラウザのアドレスバーの URL から chat ID をコピーします。

URL の形式は次のとおりです: https://web.telegram.org/a/#-4266674385

Chat ID は # の後に続く数字列です。例: -4266674385

## 設定の実施

Grafana Alerting で Telegram 統合を作成するには、以下の手順を実行します。

**ステップ 1:** Alerts → Alerting → Contact points にアクセスします。

[![Alt text](/img/migrated/Screenshot_43-308c5dfa.png)](/img/migrated/Screenshot_43-308c5dfa.png)

**ステップ 2:** + Add contact point をクリックします。

[![Alt text](/img/migrated/Screenshot_44-c0aae8f0.png)](/img/migrated/Screenshot_44-c0aae8f0.png)

**ステップ 3:** contact point の名前を入力します。

**ステップ 4:** Integration リストから Telegram を選択します。

- BOT API Token フィールドに bot API トークンを貼り付けます。
- Chat ID フィールドに chat ID を貼り付けます。
- Test をクリックして統合が正しく動作するか確認します。

**ステップ 5:** Save contact point をクリックします。

これで、Telegram contact point が alert 通知を受け取る準備が整いました。

[![Alt text](/img/migrated/Screenshot_45-d7a0f258.png)](/img/migrated/Screenshot_45-d7a0f258.png)

**ステップ 6:** この contact point を alert に割り当てるには、以下の手順を実行します。

- Grafana で Alerting → Alert rules にアクセスします。
- 既存の alert rule を編集するか、新しい alert rule を作成します。
- Configure labels and notifications セクションまでスクロールします。
- Notifications で Select contact point を選択します。
- リストから先ほど作成した Telegram contact point を選択します。
- Save rule and exit をクリックします。
