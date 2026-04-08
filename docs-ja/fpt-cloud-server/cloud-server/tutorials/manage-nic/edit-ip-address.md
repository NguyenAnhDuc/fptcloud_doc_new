---
id: "edit-ip-address"
title: "IPアドレスの編集"
description: "FPT CloudでNICカードのIPアドレスを変更する方法です。"
sidebar_label: "IPアドレスの編集"
sidebar_position: "8"
---

# IPアドレスの編集

1. IPアドレスを変更したいNICカードを選択します。

:::warning
この操作はKubernetesやLoad Balancerなどのサービスに影響を与える可能性があります。実行前に十分に検討してください。変更後は、OSの設定ファイルでネットワーク設定を更新する必要があります。参照: [How to change Config file](/docs/ja/fpt-cloud-server/cloud-server/tutorials/change-network-config/)/
:::

[![NICカードの選択](/img/migrated/image-1691383107122-1741e5c6.png)](/img/migrated/image-1691383107122-1741e5c6.png)

2. 新しいIPアドレスを設定します。

   FPT Cloudはお客様のSubnetからIPアドレスを提案します。提案をそのまま使うか、必要に応じて別のIPアドレスを入力できます。

[![IPアドレスの提案](/img/migrated/image-1691383118729-01e836f2.png)](/img/migrated/image-1691383118729-01e836f2.png)

   IPアドレスを選択したら、変更を確認します。

[![IP変更の確認](/img/migrated/image-1691383130785-5d815e59.png)](/img/migrated/image-1691383130785-5d815e59.png)

3. システムが処理を完了するまで待ちます。

[![システム処理中](/img/migrated/image-1691383142781-8006bcac.png)](/img/migrated/image-1691383142781-8006bcac.png)

4. カードが **Active** 状態になります。Instanceは新しいIPアドレスでネットワークに接続できるようになります。

[![新しいIPアドレスでActiveになったNICカード](/img/migrated/image-1691383157084-b076238f.png)](/img/migrated/image-1691383157084-b076238f.png)
