---
id: "guide-fcr"
title: "5. FPT Container Registry連携の無効化"
description: "**Org Admin** および **Team Manager** のみ FPT Container Registry（FCR）連携の編集権限を持ちます。"
sidebar_label: "5. FPT Container Registry連携の無効化"
sidebar_position: 21
---

# 5. FPT Container Registry連携の無効化

**Org Admin** および **Team Manager** のみ FPT Container Registry（FCR）連携の編集権限を持ちます。
_権限の詳細は[こちら](./quan-ly-member.md)をご参照ください。_

## FCRの連携 - VPCの追加
**手順1** : org/teamを選択後、**FPT Container Registry** をクリックして連携画面に移動します。
[![anhfsec](/img/migrated/fcr1-2-c3f2a38c.png)](/img/migrated/fcr1-2-c3f2a38c.png)
**手順2** : **Add VPC** をクリックして新しいVPCを連携リストに追加します。
[![anhfsec](/img/migrated/fcr2-1-53c9d4c2.png)](/img/migrated/fcr2-1-53c9d4c2.png)
**手順3** : 連携するVPCを選択します。
[![anhfsec](/img/migrated/infcr3-ddd75d32.png)](/img/migrated/infcr3-ddd75d32.png)
**手順4** : VPCを選択後、Robot Accountをお持ちの場合は **Robot Account Name** を入力します。Robot Accountをお持ちでない場合は、[こちら](../fpt-container-registry/index.md)のガイドをご参照ください。
[![anhfsec](/img/migrated/infcr4-55fd52f8.png)](/img/migrated/infcr4-55fd52f8.png)
**手順5** : Robot Accountの **名前** と **secret** を入力します。
[![anhfsec](/img/migrated/lala1-d546663c.png)](/img/migrated/lala1-d546663c.png)
[![anhfsec](/img/migrated/lala2-91f84e57.png)](/img/migrated/lala2-91f84e57.png)
**手順6** : すべての情報を入力後、**Test Connection** をクリックします。システムは必須フィールドを検証し、情報が有効であれば **Connected successfully** と表示され、**Integrate** ボタンが有効になります。
[![anhfsec](/img/migrated/lala3-08073379.png)](/img/migrated/lala3-08073379.png)
情報が無効（Robot AccountやSecretが誤り）の場合は「Connected failed」と表示されます。
**手順7** : 接続テストが成功したら、**Integrate** をクリックします。
[![anhfsec](/img/migrated/infcr8-c753c69c.png)](/img/migrated/infcr8-c753c69c.png)
VPCが正常に接続されると、**Integrated VPCs** リストに追加されます。
[![anhfsec](/img/migrated/infcr9-c2ef4bc4.png)](/img/migrated/infcr9-c2ef4bc4.png)

## 詳細表示
**Org Admin** および **Team Manager** のみ連携の詳細を表示できます。
org/teamを選択後、**Configured FPT Container Registry** をクリックして詳細を確認します。
[![anhfsec](/img/migrated/fcr1-2-c3f2a38c.png)](/img/migrated/fcr1-2-c3f2a38c.png)
ここでは連携のステータス、_VPC、Robot Account Name、Container Registry Name_ などの情報を含む **Integrated VPCs** リスト、およびCICD連携用の **Access Key** を確認できます。
[![anhfsec](/img/migrated/infcr9-c2ef4bc4.png)](/img/migrated/infcr9-c2ef4bc4.png)
**Add VPC**、**Reconfigure**、**Delete** によるVPCの操作、またはFPT Container Registry連携の **Disable** が可能です。
[anhfsec](/img/migrated/fcr1-2-c3f2a38c.png)

## FPT Container Registry VPCの再設定
**手順1** : FPT Container Registry VPCを **reconfigure** するには、FPT Container Registry連携の詳細画面に移動します。対象VPCのActionから **Reconfigure** を選択します。
[![anhfsec](/img/migrated/lala4-fe8e1ce9.png)](/img/migrated/lala4-fe8e1ce9.png)
**手順2** : **Add VPC** と同じ手順を実行します。

## VPCの削除
**手順1** : 対象VPCのActionから **Delete** を選択します。
[anhfsec](https://fptcloud.com/wp-content/uploads/2025/05/rfcr2.png)
**手順2** : _delete_ と入力し、**Confirm** をクリックします。
[anhfsec](https://fptcloud.com/wp-content/uploads/2025/05/rfcr3.png)

## FPT Container Registry連携の無効化
[GitHub連携の無効化](./guide-github.md)ガイドと同様です。

## CI/CDパイプライン用Access Key
詳細画面のGeneral Informationの他に、CI/CDパイプライン連携用の各VPCの **access key** が提供されます。
[anhfsec](https://fptcloud.com/wp-content/uploads/2025/05/rfcr4.png)
Access KeyはコピーまたはリセットしてCI/CDパイプラインへの連携に使用できます。
