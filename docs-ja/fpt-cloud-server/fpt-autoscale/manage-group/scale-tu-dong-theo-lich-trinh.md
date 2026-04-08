---
id: "scale-tu-dong-theo-lich-trinh"
title: "スケジュールによる自動スケール"
description: "FPT AutoscaleでAutoscale Scheduleを作成・削除してGroupをスケジュールに従って自動スケールするガイドです。"
sidebar_label: "スケジュールによる自動スケール"
sidebar_position: 6
---

# スケジュールによる自動スケール

## Autoscale Scheduleの作成

### ステップ1: Autoscaling > Autoscale Groupページに移動します。スケジュールを設定したいGroupの名前をクリックします。

[![open group details](/img/migrated/Screenshot-2024-10-02-042416-72202578.png)](/img/migrated/Screenshot-2024-10-02-042416-72202578.png)

### ステップ2: **Schedule**タブに移動し、**Create schedule**をクリックします。

[![create schedule](/img/migrated/Screenshot-2024-10-02-042548-98d1b215.png)](/img/migrated/Screenshot-2024-10-02-042548-98d1b215.png)

### ステップ3: ダイアログが表示されます。以下の情報を設定します。

- **Schedule name**: スケジュール名を入力します。名前は6〜20文字で、ラテン文字、数字、アンダースコアのみ使用できます。
- **Frequency**: GroupをResizeする頻度。
- **Desired capacity**: スケジュール実行時のGroupの希望Node数。
- **Min size**と**Max size**: Groupの下限と上限。

#### ケース1: Daily

[![daily schedule](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

- **From time**: スケジュールパラメータに従ってResizeを実行する時刻。
- **To time**: サイクルが終了し、元のパラメータにResizeされる時刻。
- **Start date**: スケジュールが有効になる日付。
- **End date**: スケジュールが期限切れになる日付。

:::note
- Start dateが現在の日付の場合、From timeは現在時刻より後である必要があります。
- To timeはFrom timeより少なくとも30分後である必要があります。
:::

#### ケース2: Weekly

[![weekly schedule](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

**Daily**と同様で、以下が追加されます：

- **From weekday**: スケジュールパラメータに従ってResizeを実行する曜日。
- **To weekday**: サイクルが終了し、元のパラメータにResizeされる曜日。

#### ケース3: Monthly

[![monthly schedule](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

**Daily**と同様で、以下が追加されます：

- **From date**: スケジュールパラメータに従ってResizeを実行する月の日付。
- **To date**: サイクルが終了し、元のパラメータにResizeされる月の日付。

:::note
- 31日は一部の月にのみ存在します。
- 2月は28日または29日しかありません。
:::

### ステップ4: **Create**をクリックします。

システムは入力を検証し、Autoscale Groupのスケジュールを作成します。

[![schedule list](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

スケジュール一覧には以下の情報が表示されます：

- **Name**: スケジュール名。
- **Size**: スケジュール実行時にGroupに適用されるResizeパラメータ。
- **Frequency**: スケジュールの実行頻度。
- **Start time**: スケジュールが有効になる時刻。
- **Stop time**: スケジュールが期限切れになる時刻。
- **First execution**: スケジュールが最初に実行される時刻。
- **Next execution**: スケジュールが次に実行される時刻。
- **Remaining executions**: 残りの実行回数。

## Autoscale Scheduleの削除

### ステップ1: Autoscaling > Autoscale Groupページに移動します。スケジュールを削除したいGroupの名前をクリックします。

[![open group details](/img/migrated/Screenshot-2024-10-02-042416-72202578.png)](/img/migrated/Screenshot-2024-10-02-042416-72202578.png)

### ステップ2: **Schedule**タブに移動します。削除したいスケジュールの行で**Action menu**アイコンをクリックします。

[![schedule menu action](/img/migrated/Screenshot-2024-10-02-043704-64359511.png)](/img/migrated/Screenshot-2024-10-02-043704-64359511.png)

### ステップ3: メニューで**Delete**を選択します。

[![delete schedule](/img/migrated/Screenshot-2024-10-02-043812-ac1fa26e.png)](/img/migrated/Screenshot-2024-10-02-043812-ac1fa26e.png)

### ステップ4: 確認ダイアログが表示されます。スケジュール名が正しければ、**Delete**をクリックして確定します。

[![delete schedule confirmation dialog](/img/migrated/Screenshot-2024-10-02-044127-0919459f.png)](/img/migrated/Screenshot-2024-10-02-044127-0919459f.png)

:::warning
予期しない競合を避けるため、同じGroup内で開始・終了実行時刻が重複するスケジュールを作成しないでください。
:::
