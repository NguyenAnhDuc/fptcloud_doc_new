---
id: "create-card-NIC- Primary"
title: "Primary NICカードを作成する"
description: "Instanceの作成時にシステムがデフォルトのPrimary NICカードを自動的に作成します。"
sidebar_label: "Primary NICカードを作成する"
sidebar_position: 57
---

# Primary NICカードを作成する

FPT CloudでInstanceを作成すると、システムはデフォルトのPrimary NICカードを自動的にプロビジョニングします。このカードは仮想マシンのメインネットワークインターフェースとして機能します。

## 動作の仕組み

- Primary NICカードはInstanceのプロビジョニング時に自動的に作成されます — 手動の操作は不要です。
- Instance作成時に選択したSubnetに接続されます。
- Primary NICカードはInstanceが存在する限り削除できません。

:::note
既存のInstanceにNICカードを追加するには、[新しいNICカードを追加する](./add-card-NIC-%20new.md)を参照してください。
:::

## 次のステップ

- [NICを無効化する](./disable-NIC-card.md)
- [新しいNICカードを追加する](./add-card-NIC-%20new.md)
