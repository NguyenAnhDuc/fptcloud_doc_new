---
id: "retention-rule"
title: "Retention rule を管理する"
description: "不要なイメージを自動削除するための retention rule を設定する。"
sidebar_label: "Retention rule を管理する"
sidebar_position: 9
draft: true
---

# Retention rule を管理する

Repository には時間の経過とともに多くの tag が蓄積され、使用されなくなった tag がストレージを消費します。FPT Cloud の **Retention Rule** 機能を使用すると、イメージや tag の保持・削除基準を自動化し、ストレージを最適化できます。

## Tag retention rule を追加する

保持基準を定義することで、不要な tag を自動的に削除できます。

1. サイドバーメニューで **Container Registry** を選択し、**Policy** タブを開きます。

   [![Policy タブ](/img/migrated/Picture27-62a35e57.png)](/img/migrated/Picture27-62a35e57.png)

2. **ADD RULES** を選択し、tag retention rule の情報を入力します。

3. **Repositories** メニューで **matching** または **excluding** を選択します。

4. **By image count or number of days** メニューで保持するイメージ数または期間を指定します。

   | オプション | 説明 |
   |---|---|
   | retain the most recently pushed # images | 最近 push された指定数のイメージを保持 |
   | retain the most recently pulled # images | 最近 pull された指定数のイメージを保持 |
   | retain the images pushed within the last # days | 指定日数以内に push されたイメージを保持 |
   | retain the images pulled within the last # days | 指定日数以内に pull されたイメージを保持 |
   | retain always | 常に保持 |

5. **Tag** メニューで対象 tag を指定し、**Add** をクリックしてルールを保存します。

## スケジュールを設定する

Retention rule を定期的に自動実行するスケジュールを設定できます。

1. **Container Registry** > **Policy** > **Schedule** > **Edit** を選択します。

2. 実行頻度を選択します（None、Hourly、Daily、Weekly、Custom）。

   :::warning
   スケジュールはすべての rule に適用されます。rule ごとに異なるスケジュールを設定することはできません。
   :::

3. **Save** > **OK** でスケジュールを保存します。

## Retention run を管理する

- **RUN NOW:** rule を手動で即時実行します。
- **DRY RUN:** イメージを実際に削除せずに rule を検証します。
- **ABORT:** 実行中の retention run を中止します。
