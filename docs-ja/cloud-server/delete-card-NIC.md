---
id: "delete-card-NIC"
title: "Network Interface Cardを削除する"
description: "不要になった仮想マシンのNICカードを削除します。"
sidebar_label: "Network Interface Cardを削除する"
sidebar_position: 64
---

# Network Interface Cardを削除する

不要になったNICカードを仮想マシンから削除して、ネットワーク設定をシンプルにできます。

:::danger
NICカードを削除すると、関連するすべてのネットワーク設定とともに完全に削除されます。この操作は元に戻せません。
:::

:::note
Primary NICカードは削除できません。Primary NICカードを削除するには、先に[カードをPrimaryに変換する](./convert-card.md)を使用して別のカードをPrimaryに変換してください。
:::

## NICカードを削除する

1. **Instance Management** ページに移動し、対象のInstanceを選択します。
2. **NIC** タブに移動します。
3. 削除したいNICカードを見つけ、**Actions** → **Delete** を選択します。
4. ダイアログボックスで削除を確認します。

NICカードが仮想マシンから削除され、そのインターフェース経由のネットワーク接続が即座に停止します。

## 次のステップ

- [NIC概要](./overview-nic.md)
- [NICの管理](./NIC-overview-1.md)
