---
id: "cau-hinh-lap-lich-chay-retention-rule"
title: "Retention rule のスケジュールを設定する"
description: "Retention rule を定期的に自動実行するスケジュールを設定する。"
sidebar_label: "Retention rule のスケジュールを設定する"
sidebar_position: "16"
---

# Retention rule のスケジュールを設定する

Retention rule を手動で実行する代わりに、定期スケジュールを設定して自動実行できます。これにより、ストレージ使用量を常に最適な状態に保てます。

1. **FPT Portal** メニューで **Container Registry** > **Policy** > **Schedule** > **Edit** を選択します。

   [![Edit Schedule ボタン](/img/migrated/Picture43-1-fe4aeec3.png)](/img/migrated/Picture43-1-fe4aeec3.png)

2. Retention rule の実行頻度を選択します。

   [![実行頻度の選択オプション](/img/migrated/Picture44-1-1535ba88.png)](/img/migrated/Picture44-1-1535ba88.png)

   | オプション | 説明 |
   |---|---|
   | None | スケジュールなし。Portal から手動で実行 |
   | Hourly | 毎時 1 回実行 |
   | Daily | 毎日 7:00 AM に実行 |
   | Weekly | 毎週 1 回実行 |
   | Custom | カスタム cron expression を入力 |

   :::warning
   複数の rule を定義している場合、スケジュールはすべての rule に適用されます。rule ごとに異なるスケジュールを設定することはできません。
   :::

   Custom スケジュールの設定例:

   [![Custom スケジュール設定例](/img/migrated/Picture45-1-20717af0.png)](/img/migrated/Picture45-1-20717af0.png)

3. **Save** > **OK** をクリックしてスケジュールを保存します。

   [![スケジュール保存の確認](/img/migrated/Picture46-1-c68ab5ea.png)](/img/migrated/Picture46-1-c68ab5ea.png)

4. スケジュール設定後の結果を確認します。

   [![スケジュール設定後の結果](/img/migrated/Picture47-1-373e4e1a.png)](/img/migrated/Picture47-1-373e4e1a.png)
