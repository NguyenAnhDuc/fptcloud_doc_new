---
id: "create-schedule"
title: "スケジュール作成ガイド"
description: "**手順1:** 作成画面を開く"
sidebar_label: "スケジュール作成ガイド"
sidebar_position: 29
---

# スケジュール作成ガイド

**手順1:** 作成画面を開く
**Schedule** メニューに移動すると、**Schedule Management** 画面に遷移します。**Create Schedule** をクリックします。
[![Alt text](/img/migrated/1-1-461969c3.png)](/img/migrated/1-1-461969c3.png)
General informationとScope configurationの入力フィールドを含むスケジュール作成画面が表示されます。
[![Alt text](/img/migrated/Screenshot-2025-11-14-141143-6b45dd3e.png)](/img/migrated/Screenshot-2025-11-14-141143-6b45dd3e.png)
**手順2:** 基本情報フィールドを入力します。
**1. Name（_必須_）:** スケジュールを識別しやすい名前を入力します。既存のスケジュールと重複しない名前を使用してください。
[![Alt text](/img/migrated/Picture3-35523042.png)](/img/migrated/Picture3-35523042.png)
**2. Description（_任意_）:** 短い説明を入力します（最大255文字）。
[![Alt text](/img/migrated/Picture4-0eb15724.png)](/img/migrated/Picture4-0eb15724.png)
**3. Frequency（_必須_）:** スケジュールの実行頻度を選択します。
[![Alt text](/img/migrated/Picture5-2f370489.png)](/img/migrated/Picture5-2f370489.png)
  * **On-demand** : ユーザーが手動で起動します。日時（本日以降）と希望する実行時間を選択する必要があります。システムは指定された日時に1回スケジュールを実行します。

[![Alt text](/img/migrated/Screenshot-2025-11-14-141242-1e0f1e55.png)](/img/migrated/Screenshot-2025-11-14-141242-1e0f1e55.png)
  * **Weekly** : 毎週実行するスケジュールを設定する場合、曜日（月曜〜日曜）と実行時刻を選択します。

[![Alt text](/img/migrated/Picture7-2f26c4c8.png)](/img/migrated/Picture7-2f26c4c8.png)
  * **Monthly** : 毎月定期実行します。月内の実行日と時刻（1〜31）を選択するか、**Last** を選択して月末にスキャンをスケジュールします。

[![Alt text](/img/migrated/Picture8-1e00c9a0.png)](/img/migrated/Picture8-1e00c9a0.png)
**手順3:** スケジュールのスコープ（範囲）情報を入力します。
**1. チームの選択:** Team（必須）のセクションで、スケジュールを適用するチームを選択します。
[![Alt text](/img/migrated/Picture9-2174c7e0.png)](/img/migrated/Picture9-2174c7e0.png)
**2. ルール（Scope）の設定**
  * **Asset Type:** 現バージョンでは、ルールは **Repository** タイプのassetにのみ適用されます。編集不可です。
  * **Branch:** 現バージョンではmain/masterブランチにのみ適用されます。
  * **Source:** リポジトリのソース（GitHub/GitLab/GitLab Server）を指定します。選択しない場合、すべてのソースのリポジトリをデフォルトでスキャンします。

[![Alt text](/img/migrated/Screenshot-2025-11-14-141405-ac960aef.png)](/img/migrated/Screenshot-2025-11-14-141405-ac960aef.png)
  * **Last Scan:** 最近スキャンされていないリポジトリの期間を指定します。選択しない場合、すべての有効なリポジトリをスキャンします。選択した場合、Actionで選択したスキャン種別で直近X日間スキャンされていないリポジトリのみスキャンします。

[![Alt text](/img/migrated/Picture11-dab921d9.png)](/img/migrated/Picture11-dab921d9.png)
  * **Add rule:** クリックして新しいルール種別（Source、Last Scan）を追加します。すべてのルール種別が追加されると、このボタンは無効になります。

[![Alt text](/img/migrated/Screenshot-2025-11-14-141528-97f4ebca.png)](/img/migrated/Screenshot-2025-11-14-141528-97f4ebca.png)
**手順4:** スキャン種別（Action）を選択します。
Actionセクションで、Code Analysis、Secret Scan、IaC Scanのスキャン種別を選択できます。少なくとも1種類のスキャンを選択する必要があります。編集しない場合、デフォルトで3種類すべてが選択されます。
[![Alt text](/img/migrated/Picture15-4a5f2bd8.png)](/img/migrated/Picture15-4a5f2bd8.png)
**手順5:** 必須フィールドがすべて入力されていることを確認します。**Create** をクリックしてスケジュールを保存します。
[![Alt text](/img/migrated/Picture13-d4757f19.png)](/img/migrated/Picture13-d4757f19.png)
スケジュールの作成が成功すると、スケジュール一覧画面に戻り、_「Created schedule successfully」_ というメッセージが表示されます。
