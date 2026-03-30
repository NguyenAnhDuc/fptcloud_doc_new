---
id: "attach-a-network-card-to-the-virtual-machine"
title: "仮想マシンへのNIC追加"
description: "複数のSubnetに接続するために仮想マシンにネットワークカードを追加する方法。"
sidebar_label: "仮想マシンへのNIC追加"
sidebar_position: 14
---

# 仮想マシンへのNIC（ネットワークカード）の追加

1台の仮想マシンに最大10枚のネットワークカードを追加できます — これにより仮想マシンをVPC内の複数のSubnetに接続できます。

## ネットワークカードの追加

1. **Compute Engine** → **Instance Management** を選択し、Subnetを追加する仮想マシンを選んで **Instance Detail** ページを開きます。

   [![Instance Detailページ](/img/migrated/image-1712722975848-d937e282.png)](/img/migrated/image-1712722975848-d937e282.png)

2. **Network Interface** タブを開き、**Add NIC** をクリックします。

   [![Add NICボタンのあるNetwork Interfaceタブ](/img/migrated/image-1744793401110-f9e5bd81.png)](/img/migrated/image-1744793401110-f9e5bd81.png)

3. 追加するVPC内の **Subnet** を選択し、**Add NIC** をクリックして確認します。

   [![NICのSubnet選択ダイアログ](/img/migrated/image-1712723037304-4919d058.png)](/img/migrated/image-1712723037304-4919d058.png)

新しいネットワークカードが **Network** テーブルに表示されます。

[![追加された新しいネットワークカード](/img/migrated/image-1744793530914-729a9887.png)](/img/migrated/image-1744793530914-729a9887.png)

:::note
通常、WindowsおよびLinuxの仮想マシンは新しいネットワークカードを自動的に認識します。LinuxでNICが表示されない場合は、仮想マシンを再起動してください。
:::

### Linux上での手動設定（必要な場合）

現在のIPアドレスを確認：

```bash
ip a
```

[![IPアドレスの確認](/img/migrated/image-1712723100683-b482495f.png)](/img/migrated/image-1712723100683-b482495f.png)

静的IPの設定（Ubuntu 20.04はnetplanを使用）：

```bash
ls /etc/netplan
sudo cp /etc/netplan/01-network-manager-all.yaml 01-network-manager-all.yaml.bak
```

インターフェース名、IPアドレス、ゲートウェイ、DNSを適切に設定してnetplan設定ファイルを編集します。

[![netplan設定](/img/migrated/image-1712723133085-6dc03fdb.png)](/img/migrated/image-1712723133085-6dc03fdb.png)

## 次のステップ

- [仮想マシンからのNIC（ネットワークカード）の削除](./remove-the-network-card-from-the-virtual-machine.md)
