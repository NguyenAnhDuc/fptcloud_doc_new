---
id: "convert-card"
title: "カードをPrimaryに変換する"
description: "通常のNICカードをPrimaryカードに変更します。"
sidebar_label: "カードをPrimaryに変換する"
sidebar_position: 61
---

# カードをPrimaryに変換する

通常のNICカードをPrimaryステータスに昇格させ、仮想マシンのメインネットワークインターフェースにすることができます。

:::warning
Primary NICカードを変更すると、ネットワークルーティングや接続性に影響を与える可能性があります。変更後は十分にテストしてください。
:::

## NICカードをPrimaryに変換する

1. **Instance Management** ページに移動し、対象のInstanceを選択します。
2. **NIC** タブに移動します。
3. 昇格させたい通常のNICカードを見つけ、**Actions** → **Set as Primary** を選択します。
4. ダイアログボックスで操作を確認します。

選択したNICカードがPrimaryに指定されます。以前のPrimaryカードは通常のNICカードになります。

## 次のステップ

- [IP Addressを編集する](./edit-ip-address.md)
- [Network Configを変更する](./change-network-config.md)
