---
id: "quan-ly-route-1-gateway"
title: "GatewayのRoute管理"
description: "FPT Cloud上のGatewayにおけるRouteの確認・作成・編集・削除方法"
sidebar_label: "Routeの管理"
sidebar_position: 4
---

# GatewayのRoute管理

## Routeリストの確認

[![Routeリスト画面](/img/migrated/image-1754290897920-2416f962.png)](/img/migrated/image-1754290897920-2416f962.png)

各Routeに表示される情報は以下の通りです：

- **Route name**
- **CIDR Destination**
- **IP next hop**
- **Status**
- **Created at**

## Routeの作成

**Create route**ボタンをクリックして新しいRouteを作成します。

[![Route作成フォーム](/img/migrated/image-1754290924141-cfae2a04.png)](/img/migrated/image-1754290924141-cfae2a04.png)

:::note
**Basic**タイプのGatewayはRoute作成をサポートしていません。Routeを作成できるのは**Custom**タイプのGatewayのみです。
:::

## Routeの編集

**Actions**列の**Edit**ボタンをクリックして、Route情報を編集します。

:::note
**Basic**タイプのGatewayはRoute編集をサポートしていません。Routeを編集できるのは**Custom**タイプのGatewayのみです。
:::

## Routeの削除

**Actions**列の**Delete**ボタンをクリックして、Routeを削除します。

:::note
**Basic**タイプのGatewayはRoute削除をサポートしていません。Routeを削除できるのは**Custom**タイプのGatewayのみです。
:::
