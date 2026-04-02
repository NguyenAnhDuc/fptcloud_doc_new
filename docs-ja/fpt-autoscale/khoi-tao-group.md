---
id: "khoi-tao-group"
title: "Groupの作成"
description: "FPT AutoscaleでAutoscale Groupを作成するガイドです。"
sidebar_label: "Groupの作成"
sidebar_position: 7
---

# Groupの作成

## ステップ1: Autoscaling > Autoscale Groupページに移動します。**Create group**をクリックします。

[![create group](/img/migrated/Screenshot-2024-10-02-014656-aeae77df.png)](/img/migrated/Screenshot-2024-10-02-014656-aeae77df.png)

## ステップ2: ダイアログが表示されます。以下のパラメータを設定します。

[![create group form](/img/migrated/create_group-401c4b95.png)](/img/migrated/create_group-401c4b95.png)

- **Group name**: 管理しやすいGroup名を入力します。名前は6〜20文字で、ラテン文字、数字、アンダースコアのみ使用できます。
- **Group profile**: Groupの基本参照として使用する、事前に作成したProfileを選択します。
- **Desired capacity**: Group内で初期化したいNodeの希望数です。値は**Min size**以上、**Max size**以下である必要があります。これはGroupの作成時に選択したProfileに基づいて作成されるNode数です。
- **Min size**: Groupの下限値で、運用中の最小Node数を保証します（サービス中断を防ぐため）。デフォルト値は0で、推奨値は2（Group内に常に少なくとも2つのNodeを維持するため）です。
- **Max size**: Groupの上限値で、運用中の最大Node数を保証します（制御されないリソース消費を防ぐため）。デフォルト値は10です。

## ステップ3: **Create**をクリックします。

システムはVPC内の残りリソースクォータを確認してGroupを作成します。作成されたGroupは**Creating**ステータスで一覧に表示されます。

[![list group creating](/img/migrated/creating-group-96965492.png)](/img/migrated/creating-group-96965492.png)

Groupの作成時間はDesired capacityのNode数によって異なります。ステータスが**Creating**から**Active**に変わると、Groupは稼働準備が完了します。

[![list group active](/img/migrated/active-group-e4a39361.png)](/img/migrated/active-group-e4a39361.png)

一覧でGroup名をクリックするとGroupの詳細を確認できます：

[![view group detail](/img/migrated/Screenshot-2024-10-02-023725-5b0574c3.png)](/img/migrated/Screenshot-2024-10-02-023725-5b0574c3.png)

[![group detail page](/img/migrated/screencapture-console-fptcloud-000823-IN-d1bf88fa.png)](/img/migrated/screencapture-console-fptcloud-000823-IN-d1bf88fa.png)
