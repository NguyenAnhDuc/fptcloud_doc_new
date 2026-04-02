---
id: "allow-address-pair"
title: "Allow Address Pair"
description: "Allow Address Pair機能により、InstanceのNICにIPアドレス（またはCIDR）とMACアドレスのペアを追加し、HA構成などに活用できます。"
sidebar_label: "Allow Address Pair"
sidebar_position: 1
---

# Allow Address Pair

## 概要

デフォルトでは、コンピュータ（または仮想マシン）はMACアドレスとIPアドレスのペアを紐付けて管理し、なりすましを防止します。これにより、特定のIPアドレス宛のトラフィックは、対応するMACアドレスを持つマシンにのみ送信されます。

Allow Address Pair機能では、InstanceのNIC（ネットワークインターフェースカード）に対して、IPアドレス（またはCIDR）とMACアドレスのペアを追加登録することができます。これにより、管理者はHA（High Availability）構成など、さまざまな用途にこの機能を活用できます。

:::tip 主な用途
- HA（High Availability）構成の実現
- 複数のIPアドレスを1つのNICで管理
- フェイルオーバー設定の柔軟な構成
:::

## 主な機能

- **Allow Address Pair の作成** — Allow Address Pair管理画面またはInstance管理画面から作成可能です。
- **Allow Address Pair の削除** — 管理画面またはInstance管理画面から削除できます。
- **Activity Log** — すべての操作はActivity Logに記録されます。
