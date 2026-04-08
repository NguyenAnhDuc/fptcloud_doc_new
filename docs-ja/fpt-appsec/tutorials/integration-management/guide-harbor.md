---
id: "guide-harbor"
title: "1. Robot Accountの作成 - Harbor"
description: "**手順1** : HarborサーバーにアクセスしてAdministration > Robot Accountsタブを選択します。"
sidebar_label: "1. Robot Accountの作成 - Harbor"
sidebar_position: 6
---

# 1. Robot Accountの作成 - Harbor

## Robot Accountの作成 - Harbor
**手順1** : HarborサーバーにアクセスしてAdministration > Robot Accountsタブを選択します。
**手順2** : **New Robot Account** をクリックして新規作成します。
[![anhfsec](/img/migrated/hb1-1-312b6058.png)](/img/migrated/hb1-1-312b6058.png)
**手順3** : **Name**、**Description**、**Expiration time** などの情報を入力してクリックします。
[![anhfsec](/img/migrated/hb2-184c1f48.png)](/img/migrated/hb2-184c1f48.png)
**手順4** : 必要なシステム権限を選択してクリックします。
[![anhfsec](/img/migrated/hb3-752643bd.png)](/img/migrated/hb3-752643bd.png)
**手順5** : Robot Accountに権限を付与するProjectを選択し、**Permission** を設定します。Robot Accountには **List、Read Artifacts** 権限と **List、Pull、Read Repository** 権限が必要です。
[![anhfsec](/img/migrated/hb4-238ff62a.png)](/img/migrated/hb4-238ff62a.png)
[![anhfsec](/img/migrated/hb5-12df39e4.png)](/img/migrated/hb5-12df39e4.png)
**手順6** : すべての情報を入力後、**Finish** をクリックします。
[![anhfsec](/img/migrated/hb6-1-bf0aa7ff.png)](/img/migrated/hb6-1-bf0aa7ff.png)
**手順7** : Robot Accountが正常に作成されたら、**FPT Portal** 画面での連携に使用する **Robot Account name** と **secret** をコピーします。
[![anhfsec](/img/migrated/hb7-13cec7b9.png)](/img/migrated/hb7-13cec7b9.png)

## Harbor連携
**Org Admin** および **Team Manager** のみ Harbor 連携の編集権限を持ちます。
_権限の詳細は[こちら](/docs/ja/fpt-appsec/tutorials/organization-management/quan-ly-member)をご参照ください。_
**手順1** : org/teamを選択後、**Harbor** をクリックして連携画面に移動します。
[![anhfsec](/img/migrated/hb8-88b6c136.png)](/img/migrated/hb8-88b6c136.png)
**手順2** : **Container Registry Name**（Harbor serverのURL）、**Robot Account Name**、**Robot Account Secret**（Harborで作成済み）を入力します。
[![Alt text](/img/migrated/hb9-c25dbb06.png)](/img/migrated/hb9-c25dbb06.png)
**手順3** : すべての情報を入力後、**Test Connection** をクリックします。システムは必須フィールドを検証し、情報が有効であれば **Connected successfully** と表示され、**Integrate** ボタンが **enabled** になります。
[![Alt text](/img/migrated/hb10-b1a89abe.png)](/img/migrated/hb10-b1a89abe.png)
**手順4** : 接続テストが成功したら、**Integrate** をクリックします。
[![Alt text](/img/migrated/hb11-85d22a70.png)](/img/migrated/hb11-85d22a70.png)

## Harbor連携の詳細表示
**Org Admin** および **Team Manager** のみ連携の詳細を表示できます。
org/teamを選択後、**Configured Harbor** をクリックして詳細を確認します。
[![anhfsec](/img/migrated/hb11-85d22a70.png)](/img/migrated/hb11-85d22a70.png)
ここでは連携のステータス、_VPC、Robot Account Name、Container Registry Name_ などの情報を含む **Integrated VPCs** リスト、およびCICD連携用の **Access Key** を確認できます。
[![anhfsec](/img/migrated/hb13-b9f618ce.png)](/img/migrated/hb13-b9f618ce.png)
**Reintegrate** または **Disable** による Harbor 連携の操作が可能です。
[anhfsec](https://fptcloud.com/wp-content/uploads/2025/05/fcr1-2.png)

## Harbor再連携
**手順1** : **Harbor を reintegrate** するには、Harbor連携の詳細画面に移動します。**Account Credentials** の横にある **Edit** アイコンを選択します。
[![anhfsec](/img/migrated/hb14-f0016034.png)](/img/migrated/hb14-f0016034.png)
**手順2** : **Harbor連携** と同じ手順を実行します。

## FPT Container Registry連携の無効化
[GitHub連携の無効化](/docs/ja/fpt-appsec/tutorials/integration-management/guide-github)ガイドと同様です。

## CI/CDパイプライン用Access Key
詳細画面のGeneral Informationの他に、CI/CDパイプライン連携用の **access key** が提供されます。
[anhfsec](https://fptcloud.com/wp-content/uploads/2025/05/hb15.png)
Access KeyはコピーまたはリセットしてCI/CDパイプラインへの連携に使用できます。
