---
id: "allow-address-pair"
title: "Allow Address Pair"
description: "HAや高度なネットワーク設定をサポートするために、NICにIP-MACペアを追加します。"
sidebar_label: "Allow Address Pair"
sidebar_position: 71
---

# Allow Address Pair

デフォルトでは、インスタンスはなりすましを防ぐためにMACアドレスとIPアドレスのペアを強制します。Allow Address PairはNICに追加のIP（またはCIDR）とMACのペアを追加することを可能にします。これは高可用性（HA）構成に役立ちます。

:::note
1つのNICに複数のAddress Pairを設定できます。1つのAddress Pairを異なるInstanceの複数のNICに設定することも可能です。
:::

## Address Pairの追加

1. **Instance Detail** ページで **Network Interface** タブを開きます。
2. 設定したいNICを選択し、**Allow Address Pair** をクリックします。
3. IP/CIDRとMACアドレスを入力し、**Save** をクリックします。

## 次のステップ

- [Security Group管理](./quan-ly-security-group.md)
