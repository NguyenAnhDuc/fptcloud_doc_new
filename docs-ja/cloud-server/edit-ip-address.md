---
id: "edit-ip-address"
title: "IP Addressを編集する"
description: "NICカードのIPアドレスを変更します。"
sidebar_label: "IP Addressを編集する"
sidebar_position: 62
---

# IP Addressを編集する

仮想マシンのNICカードに割り当てられたIP addressを変更できます。特定の静的IPを割り当てるか、動的割り当てに切り替えることが可能です。

:::warning
NICカードのIP addressを変更すると、そのインターフェースのネットワーク接続が中断されます。本番環境でこの変更を行う前に、ダウンタイムの計画を立ててください。
:::

## NICカードのIP addressを編集する

1. **Instance Management** ページに移動し、対象のInstanceを選択します。
2. **NIC** タブに移動します。
3. IP addressを変更したいNICカードを見つけ、**Actions** → **Edit IP Address** を選択します。
4. 新しいIP addressとサブネットマスクを入力するか、動的（DHCP）割り当てを選択します。
5. **Confirm** をクリックして変更を適用します。

:::note
静的IPを使用している場合、IP addressを変更した後は仮想マシンのOS内のネットワーク設定も更新してください。詳細は[Network Configを変更する](./change-network-config.md)を参照してください。
:::

## 次のステップ

- [MACアドレスを変更する](./change-address-MAC.md)
- [Network Configを変更する](./change-network-config.md)
