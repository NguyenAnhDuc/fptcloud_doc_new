---
id: "change-address-MAC"
title: "MACアドレスの変更"
description: "FPT CloudでNICカードに新しいMACアドレスをリセット・割り当てる方法です。"
sidebar_label: "MACアドレスの変更"
sidebar_position: "9"
---

# MACアドレスの変更

この機能により、システムがNICカードに新しいMACアドレスを自動的に割り当て、既存のアドレスを置き換えます。プライマリNICと通常のNICカードの両方で使用できます。

1. MACアドレスをリセットしたいNICカードを選択します。

:::warning
この操作はKubernetesやLoad Balancerなどのサービスに影響を与える可能性があります。実行前に十分に検討してください。変更後は、OSの設定ファイルでネットワーク設定を更新する必要があります。参照: [How to change Config file](/docs/ja/fpt-cloud-server/cloud-server/tutorials/change-network-config/)/
:::

[![MACリセット対象のNICカードを選択](/img/migrated/image-1691395036893-7a3595d7.png)](/img/migrated/image-1691395036893-7a3595d7.png)

2. MACアドレスの変更を確認します。

[![MAC変更の確認](/img/migrated/image-1691395221482-354899e7.png)](/img/migrated/image-1691395221482-354899e7.png)

3. システムが処理を完了するまで待ちます。

[![システム処理中](/img/migrated/image-1691395253477-ac20d597.png)](/img/migrated/image-1691395253477-ac20d597.png)

4. システムがNICカードに新しいMACアドレスを割り当てました。

[![新しいMACアドレスが割り当てられたNICカード](/img/migrated/image-1691395309290-5b6daaff.png)](/img/migrated/image-1691395309290-5b6daaff.png)
