---
id: "report-schedule"
title: "自動レポートスケジューリング"
description: "自動レポートスケジューリング機能により、ユーザーは選択した期間のデータベースクラスターのバックアップアクティビティに関するレポートを自動送信するスケジュールを作成、管理、追跡できます。"
sidebar_label: "自動レポートスケジューリング"
sidebar_position: 43
pagination_next: null
---

# 自動レポートスケジューリング

**自動レポートスケジューリング**機能により、ユーザーは選択した期間のデータベースクラスターのバックアップアクティビティに関するレポートを自動送信するスケジュールを作成、管理、追跡できます。手動でレポートをエクスポートするためにシステムにアクセスする代わりに、システムが定期的にレポートを事前定義されたメールアドレスに自動送信するスケジュールを設定できます。レポートはCSVファイルとして送信されます。

レポートスケジュールを作成するには、以下の手順に従ってください。

### ステップ1：スケジュール管理ページへのアクセス

メニューバーから**Database Platform** > **Advanced Features**メニューを選択して**Advanced Features**画面を開きます。

[![](/img/migrated/B1-c0322d1a.png)](/img/migrated/B1-c0322d1a.png)

**Advanced Features**画面で**Go to Reporting**ボタンをクリックして**Reporting**画面を開きます。**Reporting**インターフェースが表示されたら、**Report Schedules**タブを選択して既存のレポートスケジュールの一覧を確認します。スケジュールが作成されていない場合は_Nothing Found_と表示されます。

[![](/img/migrated/report-schedule-list-scaled-a3a5aae6.png)](/img/migrated/report-schedule-list-scaled-a3a5aae6.png)

各スケジュールの情報：

| 列名 | 説明 |
| --- | --- |
| Schedule name | スケジュールの名前 |
| Report type | レポートタイプ（例：Backup Report） |
| Data period | 各レポートで取得されるデータの期間（例：Yesterday、Last 7 Days、Last 30 Days、Last Month） |
| Report frequency | レポート送信頻度（例：Daily、Weekly、Monthly） |
| Email recipients | レポートを受け取るメールアドレスのリスト |
| Created at | スケジュールが作成された時刻 |
| Action | スケジュールを編集（Edit）または削除（Delete）するオプション |

### ステップ2：新しいレポートスケジュールの作成

**Report Schedules**画面で右上の**Add Schedule**ボタンをクリックして**Add a Report Schedule**画面を開きます。

[![](/img/migrated/create-report-schedule-scaled-523d245a.png)](/img/migrated/create-report-schedule-scaled-523d245a.png)

スケジュールの設定情報を入力します。

- **Schedule Name**：スケジュールの名前を入力します。この名前はスケジュールの目的を明確に説明するものにしてください。最大25文字、最小6文字で、英字、数字、スペース、アンダースコア（_）、ハイフン（-）のみ使用可能。例：_Report_for_group1、Report for group 2_。
- **Report Type**：利用可能なリストから使用するレポートタイプを選択します。現在はバックアップレポートのみ提供されているため、選択リストには_Backup Report_という1つの値のみがあり、デフォルトで選択されています。
- **Data Period**：各レポート生成でデータを取得する期間を選択します。**Data Period**の値を変更すると、**Report Frequency**と**Day To Send**フィールドの値が自動的に変更されます。オプション：
  - **Yesterday**：昨日の00:00:00から現在時刻までのデータ。
  - **Last 7 days**：現在時刻の前7日間のデータ。
  - **Last 30 days**：現在時刻の前30日間のデータ。
  - **Last month**：前月の全データ（1日から月末まで）。例：エクスポート日が2025年4月17日の場合、レポートデータは2025年3月1日から2025年3月31日まで。
- **Report Frequency**：スケジュールの実行頻度。値は_Daily_、_Weekly_、_Monthly_です。このフィールドの値は**Data Period**で選択した期間に応じて変わります。
  - **Data Period** = "Yesterday"の場合：**Report Frequency**は"Daily"を表示。
  - **Data Period** = "Last 7 days"の場合：**Report Frequency**は"Weekly"を表示。
  - **Data Period** = "Last 30 days"または"Last Month"の場合：**Report Frequency**は"Monthly"を表示。
- **Day To Send**：スケジュールを実行する日を選択します。値は期間に応じて変わります。
  - **Data Period** = "Yesterday"の場合：Day To Sendは"Daily"を表示し、変更できません。
  - **Data Period** = "Last 7 days"の場合：曜日（Monday、Tuesday、Wednesday、Thursday、Friday、Saturday、Sunday）から選択します。
  - **Data Period** = "Last 30 days"または"Last Month"の場合：月の日付（1〜31）から選択します。選択した日が存在しない月の場合（例："31"を選択したが2月は28日しかない）、スケジュールはその月の最終日に実行されます。
- **Time To Send**：1日の中でスケジュールを実行する時刻を選択します。
- **Database Cluster**：レポートのデータを取得するデータベースを選択します。複数のデータベースを同時に選択できます。オプション：
  - **Select All**：リスト内のすべてのデータベースを選択します。
  - ユーザーが選択したVPC内の各データベース。
- **Email Recipients**：レポートを受け取るメールアドレスのリストを入力します。情報の欠落を避けるためにメールを正確に入力してください。（+）ボタンを使用して追加し、（-）ボタンを使用してリストからメールを削除します。
  - 各メールはユーザー名、"@"記号、ドメイン名の3つの部分からなる標準的なメール形式に従う必要があります。
  - リスト内のメールは重複してはなりません。

すべての情報を入力したら**Save**ボタンをクリックしてスケジュールを作成します。システムはリスト画面に戻り、新しく作成されたスケジュールがリストの先頭に表示されます。

設定された実行時刻になると、スケジュールが実行され、指定した期間とデータベースクラスターのデータを取得してCSVファイルを登録済みのメールリストに送信します。

必要に応じて、作成したスケジュールに対して以下の操作を実行できます。

- _スケジュール詳細の表示_：**Report Schedules**画面でスケジュール名をクリックして、設定情報とそのスケジュールへのアクションログを表示します。
- _スケジュールの編集_：**Report Schedules**画面で編集するスケジュールのアクション列の**Edit**アクションを選択します。必要に応じて情報を更新し、**Edit**ボタンをクリックして変更を保存します。システムは更新された情報でリスト画面に戻ります。
- _スケジュールの削除_：**Report Schedules**画面で**Delete**アクションを選択します。システムは確認ダイアログを表示します。削除確認情報を入力し**Confirm**ボタンをクリックしてスケジュールを完全に削除します。削除が成功すると、システムは設定されたメールへのレポート送信を停止します。
