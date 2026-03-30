---
id: "change-address-MAC"
title: "MACアドレスを変更する"
description: "NICカードのMACアドレスをリセットします。"
sidebar_label: "MACアドレスを変更する"
sidebar_position: 63
---

# MACアドレスを変更する

NICカードに割り当てられたMACアドレスをリセットできます。ネットワークの競合を解決する場合や、新しいMACアドレスが必要な仮想マシンの再プロビジョニング時に役立ちます。

:::warning
MACアドレスを変更すると、そのインターフェースで一時的なネットワーク中断が発生します。MACベースのライセンスやフィルタリングを使用しているソフトウェアやサービスは、変更後に再設定が必要になる場合があります。
:::

## NICカードのMACアドレスをリセットする

1. **Instance Management** ページに移動し、対象のInstanceを選択します。
2. **NIC** タブに移動します。
3. MACアドレスをリセットしたいNICカードを見つけ、**Actions** → **Change MAC Address** を選択します。
4. ダイアログボックスで操作を確認します。

システムが自動的にNICカードに新しいMACアドレスを割り当てます。

## 次のステップ

- [NICを削除する](./delete-card-NIC.md)
- [Network Configを変更する](./change-network-config.md)
