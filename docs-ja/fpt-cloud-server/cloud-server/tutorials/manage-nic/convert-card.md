---
id: "convert-card"
title: "NICカードをプライマリに変換"
description: "FPT Cloudで通常のNICカードをプライマリNICに変換する方法です。"
sidebar_label: "カードをプライマリに変換"
sidebar_position: "7"
---

# NICカードをプライマリに変換

FPT Cloudは通常のNICカードをプライマリNICに素早く簡単に変換する機能を提供します。すでにプライマリになっているカードではこの操作は無効になります。

1. プライマリに変換したいNICカードを選択します。

[![NICカードの選択](/img/migrated/image-1691382928697-43633c94.png)](/img/migrated/image-1691382928697-43633c94.png)

[![カード選択済み](/img/migrated/image-1691382936808-5dc5b74f.png)](/img/migrated/image-1691382936808-5dc5b74f.png)

2. プライマリへの変換を確認します。

:::warning
この操作はKubernetesやLoad Balancerなどのサービスに影響を与える可能性があります。実行前に十分に検討してください。変更後は、OSの設定ファイルでネットワーク設定を更新する必要があります。参照: [How to change Config file](/docs/ja/fpt-cloud-server/cloud-server/tutorials/change-network-config/)/
:::

[![変換の確認](/img/migrated/image-1691382948749-d9b6edea.png)](/img/migrated/image-1691382948749-d9b6edea.png)

3. システムが処理を完了するまで待ちます。

[![システム処理中](/img/migrated/image-1691382962972-4c8ba6b5.png)](/img/migrated/image-1691382962972-4c8ba6b5.png)

4. 通常カードがプライマリになり、以前のプライマリカードは通常カードになります。Instanceは新しいプライマリカードを通じてネットワークに接続できます。

[![変換後の結果](/img/migrated/image-1691382975861-64b7aa9e.png)](/img/migrated/image-1691382975861-64b7aa9e.png)
