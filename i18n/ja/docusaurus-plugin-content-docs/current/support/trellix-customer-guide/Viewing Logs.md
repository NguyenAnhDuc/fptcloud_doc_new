---
id: "Viewing Logs"
title: "ログの表示"
description: "Trellix システム内のすべてのサーバーまたは個別サーバーのセキュリティイベントと脅威ログを表示します。"
sidebar_label: "ログの表示"
sidebar_position: 4
pagination_next: null
---

# ログの表示

セキュリティログは、保護されたサーバー上のすべてのマルウェア検出、エクスプロイト、不審なアクティビティを記録します。定期的にログを確認することで、脅威を早期に検出し、迅速に対応できます。

## システム全体のログを表示する

1. 管理コンソールのメニューバーから **Threat Event Log** を選択します。

   [![Trellix 管理コンソールの Threat Event Log ページ](/img/migrated/image-1765765683274-68178a40.png)](/img/migrated/image-1765765683274-68178a40.png)

   このページには、agent がインストールされたサーバーのすべてのセキュリティイベント（マルウェア感染、エクスプロイト、その他の不審なアクティビティを含む）が表示されます。

   [![Threat Event Log のセキュリティイベント一覧](/img/migrated/image-1765765697231-084be1af.png)](/img/migrated/image-1765765697231-084be1af.png)

## 特定サーバーのログを表示する

1. **System Tree** > **Group** > **System** で、調査するサーバーをダブルクリックします。

   [![特定サーバーを選択するための System Tree インターフェース](/img/migrated/image-1765765708664-117612a4.png)](/img/migrated/image-1765765708664-117612a4.png)

2. **Threat Events** タブを選択して、そのサーバーのイベントを表示します。

   [![単一サーバーのログを表示する Threat Events タブ](/img/migrated/image-1765765721659-77184455.png)](/img/migrated/image-1765765721659-77184455.png)

## サーバー上で直接ログを表示する

1. サーバー上でタスクバーの Trellix アイコンを右クリックし、**Trellix ENS** を選択します。

   [![Windows タスクバーの Trellix ENS 右クリックメニュー](/img/migrated/image-1765765732756-8f460d01.png)](/img/migrated/image-1765765732756-8f460d01.png)

2. **Event Log** セクションに、同じ Threat Events が表示されます。

   [![サーバー上の Trellix ENS 内の Event Log セクション](/img/migrated/image-1765765789911-5df77202.png)](/img/migrated/image-1765765789911-5df77202.png)

3. **View Log Folder** には、スケジュールされたスキャンタスクの履歴を含む Endpoint Security のログファイルが格納されています。

   [![Endpoint Security ログファイルのディレクトリ](/img/migrated/image-1765765814382-c01507d6.png)](/img/migrated/image-1765765814382-c01507d6.png)
