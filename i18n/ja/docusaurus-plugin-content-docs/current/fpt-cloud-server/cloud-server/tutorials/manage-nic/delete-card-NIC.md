---
id: "delete-card-NIC"
title: "NICカードの削除"
description: "FPT CloudのInstanceからNICカードを削除する方法です。"
sidebar_label: "NICカードの削除"
sidebar_position: "10"
---

# NICカードの削除

不要になった通常のNICカードを削除できます。プライマリNICカードの削除はサポートされていません。

1. 削除したいNICカードを選択します。

[![削除するNICカードの選択](/img/migrated/image-1691389181936-f9a3bcaf.png)](/img/migrated/image-1691389181936-f9a3bcaf.png)

[![カード選択済み](/img/migrated/image-1691389200234-69a54bea.png)](/img/migrated/image-1691389200234-69a54bea.png)

2. 削除を確認します。

[![NICカード削除の確認](/img/migrated/image-1691389217097-c6e902c6.png)](/img/migrated/image-1691389217097-c6e902c6.png)

3. システムが処理を完了するまで待ちます。

[![システム処理中](/img/migrated/image-1691389227628-40693d15.png)](/img/migrated/image-1691389227628-40693d15.png)

4. カードが正常に削除されました。このカードを通じてInstanceはネットワークに接続できなくなります。ネットワーク設定を同期させるために、OSの設定ファイルでネットワーク情報を更新してください。参照: [How to change Config file](/ja/docs/fpt-cloud-server/cloud-server/tutorials/change-network-config/)/

[![NICカードが正常に削除された状態](/img/migrated/image-1691389236762-c118e8e1.png)](/img/migrated/image-1691389236762-c118e8e1.png)
