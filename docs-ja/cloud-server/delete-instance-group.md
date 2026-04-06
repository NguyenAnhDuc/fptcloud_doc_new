---
id: "delete-instance-group"
title: "Instance Groupの削除"
description: "不要になったInstance Groupを削除します。"
sidebar_label: "Instance Groupの削除"
sidebar_position: 81
pagination_next: null
---

# Instance Groupの削除

:::warning
この操作を実行すると、Instance Groupに関連付けられているすべてのインスタンスからInstance Groupが同時に切り離されます。Instance Groupの削除は元に戻すことができません。
:::

_この機能は、GeneralおよびSpecificサービスプランをご利用のユーザーに適用されます。_

**手順1**: メニューから **Instance Group** を選択します。**Actions** の中から **Delete** をクリックします。

![Delete Instance Groupの選択](images/delete-instance-group/img-001.png)

**手順2**: 確認ダイアログが表示され、Instance Group名と確認の入力を求めるメッセージが示されます。**delete** と入力し、**Delete instance group** をクリックして削除を確定します。

![Instance Group削除の確認](images/delete-instance-group/img-002.png)

システムはInstance Groupに関連付けられているすべてのインスタンスを切り離した後、Instance Groupを完全に削除します。
