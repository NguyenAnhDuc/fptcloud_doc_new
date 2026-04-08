---
id: "configure-notifications"
title: "Notificationsの設定"
description: "ArgoCDのnotifications機能の概要。Telegram、Slack、Emailへの通知送信をサポート。"
sidebar_label: "Notificationsの設定"
sidebar_position: 39
draft: true
---

# Notificationsの設定

ArgoCD Notificationsは、ArgoCDインスタンスでイベントが発生した際に外部システムへ通知を送信する機能です。例えば、同期処理が失敗した際にTelegram、Slack、またはEmailへ通知を送信できます。

デフォルトでは、この機能は無効になっています。FPT Cloudはポータルインターフェースを通じて、Slack、Telegram、Emailによるnotificationsのenable/disableと設定をサポートします。
