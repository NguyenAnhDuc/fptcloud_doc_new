---
id: "add-card-NIC- new"
title: "新しいNetwork Interface Cardを追加する"
description: "仮想マシンに新しいNICカードを追加して追加のSubnetに接続します。"
sidebar_label: "新しいNetwork Interface Cardを追加する"
sidebar_position: 60
---

# 新しいNetwork Interface Cardを追加する

仮想マシンにNICカードを追加することで、複数のSubnetに接続し、より柔軟なネットワーク構成を実現できます。

## 前提条件

- 対象のSubnetがクラウドネットワーク設定に既に存在している必要があります。
- Instanceを変更するための適切な権限が必要です。

## NICカードを追加する

1. **Instance Management** ページに移動し、対象のInstanceを選択します。
2. **NIC** タブに移動します。
3. **Add NIC** をクリックします。
4. 新しいNICカードを接続する **Subnet** を選択します。
5. 必要に応じてIP address（静的または動的）を設定します。
6. **Confirm** をクリックしてNICカードを作成します。

:::note
新しいNICカードを追加した後、仮想マシンのOSのネットワーク設定を更新する必要がある場合があります。詳細は[Network Configを変更する](./change-network-config.md)を参照してください。
:::

## 次のステップ

- [カードをPrimaryに変換する](./convert-card.md)
- [Network Configを変更する](./change-network-config.md)
