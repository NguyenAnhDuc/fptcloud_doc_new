---
id: "tao-report"
title: "レポートの作成"
description: "FPT Cloud Reportingでレポートを作成するステップバイステップガイド。"
sidebar_label: "レポートの作成"
sidebar_position: 2
---

# レポートの作成

レポートを作成するには、以下の手順に従ってください：

1. **Home > Apps > Reporting > Create a new report** に移動します。

2. **Select Dashboard** セクションを入力します：
   - **Source dashboard** を選択します（必須）。
   - **Time Range** を選択します（任意）：レポートがデータを取得する期間。

   [![レポートダッシュボード選択画面](/img/migrated/Picture1-57affdd6.png)](/img/migrated/Picture1-57affdd6.png)

   :::note
   ダッシュボードを追加するには、**Add another dashboard** をクリックしてください。
   :::

3. 次へボタンをクリックします。

   [![次へボタン](/img/migrated/Picture2-c77f7b7d.png)](/img/migrated/Picture2-c77f7b7d.png)

4. **Format report** セクションを入力します：
   - **Report name**（必須）：レポート名を入力します。
   - **Recipients**（必須）：レポートを送信するメールアドレスを入力します。
   - **Message**（任意）：レポートの本文を入力します。

   :::note
   **Orientation** と **Layout** フィールドのデフォルト値はそれぞれ **Portrait** と **Grid** です。
   :::

5. 次へボタンをクリックします。

   [![次へボタン](/img/migrated/Picture3-ebf2980f.png)](/img/migrated/Picture3-ebf2980f.png)

6. **Schedule** セクションを入力します：
   - **Start Date**（必須）：レポート送信を開始する日付。
   - **Time**（必須）：レポートを送信する時刻。
   - **Time zone**：デフォルトは（GMT+7:00）ベトナム。
   - **Send right after create report** チェックボックス：デフォルトは未チェック。チェックすると、作成直後にレポートが送信されます。

   :::note
   詳細設定を行わない場合、システムは設定したスケジュールに従って毎日自動的にレポートを送信します。
   :::

   レポートスケジュール機能を使用すると、定期的なスケジュールを設定してレポートを自動的に作成・送信できます。頻度は時間単位、日次、週次、月次でカスタマイズできます。

   詳細スケジュールを使用するには、**Advanced** をクリックして以下を入力します：
   - **Refresh Frequency**：送信頻度 — Once、Hourly、Daily、Weekly、Monthly。
   - **End date**：レポート送信を終了する日付。
   - **Repeating Cycle**：繰り返しサイクル。
   - **Repeat every … days**：送信間隔（日数）。
   - **Send right after create report** チェックボックス：チェックすると、作成直後に1回レポートが送信されます（設定スケジュール外）。

   **ケース1：Daily（日次）**

   [![日次スケジュール設定](/img/migrated/Picture4-39f2fc3e.png)](/img/migrated/Picture4-39f2fc3e.png)

   - **Refresh Frequency** を **Daily** に設定します。
   - **End date** を入力します。
   - **Repeating Cycle** を設定します：
     - **Send from Monday to Friday**：平日毎日送信します。
     - **Repeat every … days**：例として2日ごとに1回送信します。

   **ケース2：Weekly（週次）**

   [![週次スケジュール設定](/img/migrated/Picture5-9bf78bbf.png)](/img/migrated/Picture5-9bf78bbf.png)

   - **Refresh Frequency** を **Weekly** に設定します。
   - **End date** を入力します。
   - **Repeating Cycle**：曜日を1つ以上選択します（例：金曜日を選択すると毎週金曜日に送信）。**Repeat every … weeks** を入力します（例：1で週1回）。

   **ケース3：Monthly（月次）**

   [![月次スケジュール設定](/img/migrated/Picture6-17a6da4e.png)](/img/migrated/Picture6-17a6da4e.png)

   - **Refresh Frequency** を **Monthly** に設定します。
   - **End date** を入力します。
   - **Repeating Cycle** を設定します：
     - **On the first … of month**：例として月の最初の金曜日に送信。
     - **On the first day of month**：毎月1日に送信。
     - **On the last day of month**：毎月最終日に送信。
     - **Repeat every … months**：例として1で月1回送信。

   **ケース4：Hourly（時間単位）**

   [![時間単位スケジュール設定](/img/migrated/Picture7-fd778276.png)](/img/migrated/Picture7-fd778276.png)

   - **Refresh Frequency** を **Hourly** に設定します。
   - **End date** を入力します。
   - **Repeat every … hours**：例として2時間ごとに1回送信。

   **ケース5：Once（1回のみ）**

   [![1回限りのスケジュール設定](/img/migrated/Picture8-8624f278.png)](/img/migrated/Picture8-8624f278.png)

   設定した時刻に**1回だけ**レポートが送信されます。送信後、スケジュールステータスは **Expired** になります。

7. 次へボタンをクリックします。Select Dashboard、Format Report、Scheduleの情報を確認できる **Confirm** 画面が表示されます。

   [![確認画面](/img/migrated/Picture9-58d335a3.png)](/img/migrated/Picture9-58d335a3.png)

8. **Create** をクリックしてレポートを作成します。
