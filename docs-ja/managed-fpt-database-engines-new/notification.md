---
id: "notification"
title: "通知の設定"
description: "Notification機能により、ユーザーはデータベースクラスターに関する重要なイベントやサービス状態の通知を受け取るよう設定できます。"
sidebar_label: "通知の設定"
sidebar_position: 38
---

# 通知の設定

**Notification**機能により、ユーザーはデータベースクラスターに関する重要なイベントやサービス状態の通知を受け取るよう設定できます。通知はメールやTelegramなどの外部チャンネルを通じて送信でき、バックアップスケジュール、リソースしきい値、リソーススケーリング、その他の重要なイベントなどの状況をタイムリーに把握するのに役立ちます。

システムは現在、以下の通知タイプをサポートしています。

- バックアップ＆リストア通知 – バックアップサービスの有効化/無効化、バックアップおよびリストアジョブの成功/失敗の結果を含みます。
- リソース通知 – vCPU、RAM、またはDiskが事前定義のしきい値に達した際のアラート。
- 垂直スケーリング通知 – CPU/RAM/Diskの自動スケーリングイベントに関する通知。
- メンテナンス通知 – FPTがデータベースクラスターに影響するメンテナンスアクティビティを実施する際の通知。

このガイドは、FPT Cloud Portal上でFPT Database Engineの重要なイベントを効果的に監視するためのNotificationの設定と管理方法を説明します。

## FPT Database Engineからの通知の設定

### ステップ1：通知設定ページへのアクセス

FPT Cloud Portalにログインします。メインメニューから「**Database Platform**」→「**All Database**」を選択します。Database listページで、通知を設定するクラスターのCluster IDを選択 > 「**Notification**」タブを選択して通知設定管理画面を開きます。

[![](/img/migrated/notification-scaled-fbca99ff.png)](/img/migrated/notification-scaled-fbca99ff.png)

### ステップ2：サービスの通知受信者リストの設定

**Add New Alert List**（**Notification List**の横のプラスアイコン）をクリックして通知設定の追加ダイアログを開きます。

[![](/img/migrated/add-alert-scaled-5779954f.png)](/img/migrated/add-alert-scaled-5779954f.png)

設定情報を入力します。

- **Type**：アラートがトリガーされた際の通知配信方法を選択します。2つのオプションがあります。
  - **Email**：メールでアラートを送信します。
  - **Telegram**：Telegramでアラートを送信します。この方法は「Maintenance」サービスではサポートされていません。
- **Current Services Notification**：対応するタスクまたはイベントが実行された際に通知をトリガーするサービスを選択します。オプション：
  - **Backup** – バックアップ実行時に通知。
  - **Restore** – リストア実行時に通知。
  - **Maintenance** – システムがサービスメンテナンスを実施する際に通知。
  - **Resource** – リソース使用量アラート。
  - **Vertical Scaling** – リソースが変更（スケーリング）された際に通知。
- **Current Recipient List**：アラート受信者リスト：
  - Type = "Email"の場合 → アラートを受け取るメールアドレスを入力します。
  - Type = "Telegram"の場合 → アラートを受け取るTelegramチャンネルのIDを入力します。チャンネルIDの取得方法は[2. FPT Database EngineからTelegram通知を受け取る設定](#fpt-database-engineからtelegram通知を受け取る設定)を参照してください。
- **Current Services Notification** = "Resource"のアラート条件：
  - **vCPU more than (%)**：CPU使用率のしきい値（%単位）を入力します。vCPU使用率がこの値を超えるとアラートがトリガーされます。
  - **RAM more than (%)**：メモリ使用率のしきい値（%単位）を入力します。RAM使用率が設定レベルを超えるとアラートがトリガーされます。
  - **Storage more than (%)**：ストレージ使用率のしきい値（%単位）を入力します。ストレージ使用量が許容レベルを超えるとアラートがトリガーされます。

少なくとも1つの条件が満たされるとアラートが送信されます。3つの条件がすべて達成された場合、システムは対応する複数の通知を送信します。

すべての情報を入力したら「**Add**」をクリックして設定を保存します。

設定されたすべてのアラートは**Notification**タブの**Notification List**に表示されます。受信者、アラートタイプ、監視サービス、ステータス（有効/無効）の詳細を確認できます。設定済みアラートに対して以下の管理操作を実行できます。

- アラートの編集 – アラートリストの横の鉛筆アイコンをクリックして受信者または監視サービスを更新します。
- アラートの無効化 – ルールを削除せずにアラートを一時的に無効化します。
- アラートの再有効化 – 以前に無効化したアラートを再度有効化します。

**ベストプラクティス：**

- バックアップと垂直スケーリングサービスを有効化する前にアラートを設定します。
- アラートのスパムを避けるために合理的なしきい値を設定します。
- 運用チームとDBAに通知を割り当てます。
- 包括的な監視のためにアラートと監視ダッシュボードを組み合わせます。

## FPT Database EngineからTelegram通知を受け取る設定

FPTからTelegramで通知を受け取る場合、チャンネルIDを入力する必要があります。以下の手順でこのIDを取得するために必要な操作を説明します。

### ステップ1：Telegramでチャンネルを作成する

Telegramにログインし、FPT Database Engineからの通知を受け取るためのプライベートチャンネル（例：FDE Notify）を新規作成します。

### ステップ2：@fde_notify_botを作成したチャンネルのメンバーとして追加する

メンバー検索フィールドに**@fde_notify_bot**と入力し、**FDE NOTIFY**を選択します。

[![](/img/migrated/tele_add_noti_bot-scaled-8f932da5.png)](/img/migrated/tele_add_noti_bot-scaled-8f932da5.png)

### ステップ3：@fde_notify_botをチャンネルの管理者に設定する

**@fde_notify_bot**を新しく作成したチャンネルの管理者（Administrator）に設定して、通知を送信できるようにします。

[![](/img/migrated/tele_admin-ab9912a8.png)](/img/migrated/tele_admin-ab9912a8.png)

### ステップ4：作成したチャンネルのIDを取得する

検索フィールドに**@username_to_id_bot**と入力してchat IDBotを見つけます。

[![](/img/migrated/Tele_IDBot-scaled-fab904cb.png)](/img/migrated/Tele_IDBot-scaled-fab904cb.png)

**IDBot**をクリックしてチャット画面を開きます。**Start**をクリックして開始します。

キーボードショートカットボタンをクリックし、**Channel**を選択します。

[![](/img/migrated/tele_channel_select-ad989119.png)](/img/migrated/tele_channel_select-ad989119.png)

作成したチャンネル名を選択 > **Send**をクリックしてID情報の取得リクエストを送信します。TelegramがチャンネルのIDを返します。このIDを後で使用するために保存します。

[![](/img/migrated/tele_channel_id-431370d0.png)](/img/migrated/tele_channel_id-431370d0.png)

### ステップ5：作成したFDE NotifyチャンネルのIDをFPT Cloud Portalの通知受信チャンネルに登録する

[1. FPT Cloud Portalでの通知設定](#fpt-database-engineからの通知の設定)の手順に従って操作します。通知タイプとしてTelegramを選択した際に、チャンネル入力ステップでステップ4で取得したIDをコピーして登録します。

**注意**：複数のチャンネルを追加したい場合は、ステップ1からステップ4の手順に従ってTelegramで複数のチャンネルを作成し、登録情報を取得してください。
