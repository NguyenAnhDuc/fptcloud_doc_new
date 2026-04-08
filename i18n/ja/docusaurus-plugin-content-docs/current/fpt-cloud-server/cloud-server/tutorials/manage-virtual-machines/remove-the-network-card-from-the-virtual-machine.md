---
id: "remove-the-network-card-from-the-virtual-machine"
title: 仮想マシンからのNIC（ネットワークカード）の削除
description: "対応するSubnetへの接続が不要になった際に仮想マシンからネットワークカードを削除する方法。"
sidebar_label: 仮想マシンからのNIC（ネットワークカード）の削除
sidebar_position: 6
---

# 仮想マシンからのNIC（ネットワークカード）の削除

あるSubnetへの接続が不要になった場合、仮想マシンからネットワークカードを削除してネットワーク構成をシンプルにできます。

## ネットワークカードの削除

1. 仮想マシンの **Network Interface** タブを開きます。

   [![ネットワークカード一覧のあるNetwork Interfaceタブ](/img/migrated/image-1744793241168-180450d8.png)](/img/migrated/image-1744793241168-180450d8.png)

2. **Network** テーブルで、削除するネットワークカードの **Actions** → **Delete** を選択します。

   [![ネットワークカードのDeleteオプションのあるActionsメニュー](/img/migrated/image-1744793619214-47123e3d.png)](/img/migrated/image-1744793619214-47123e3d.png)

3. 確認ダイアログが表示されます。**Delete** をクリックしてネットワークカードの削除を確認します。

   [![ネットワークカード削除の確認ダイアログ](/img/migrated/image-1712723201176-b2e4e0e8.png)](/img/migrated/image-1712723201176-b2e4e0e8.png)

## 次のステップ

- [仮想マシン情報の確認](/ja/docs/fpt-cloud-server/cloud-server/tutorials/manage-virtual-machines/tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao)
