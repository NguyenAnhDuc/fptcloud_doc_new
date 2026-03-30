---
id: "disable-NIC-card"
title: "Network Interface Cardを無効化する"
description: "NICカードを無効化して、そのインターフェース経由のネットワーク接続を停止します。"
sidebar_label: "Network Interface Cardを無効化する"
sidebar_position: 58
---

# Network Interface Cardを無効化する

仮想マシンのNICカードを無効化することで、削除せずにそのインターフェース経由のネットワーク接続を一時停止できます。

:::warning
NICカードを無効化すると、そのインターフェース経由のすべてのネットワークトラフィックが中断されます。実行前に重要なサービスへの影響がないことを確認してください。
:::

## NICカードを無効化する

1. **Instance Management** ページに移動し、対象のInstanceを選択します。
2. **NIC** タブに移動します。
3. 無効化したいNICカードを見つけ、**Actions** → **Disable** を選択します。
4. ダイアログボックスで操作を確認します。

NICカードのステータスが **Disabled** に変わります。

## 次のステップ

- [NICを有効化する](./enable-NIC-card.md)
- [NICを削除する](./delete-card-NIC.md)
