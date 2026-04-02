---
id: "quan-ly-nat-tung-gateway"
title: "GatewayのNAT Rule管理"
description: "FPT Cloud上のGatewayにおけるNAT Ruleの確認・作成・編集・削除方法"
sidebar_label: "NAT Ruleの管理"
sidebar_position: 5
---

# GatewayのNAT Rule管理

## NAT Ruleリストの確認

[![NAT Ruleリスト画面](/img/migrated/image-1754290989063-fe150ddd.png)](/img/migrated/image-1754290989063-fe150ddd.png)

## NAT Ruleの作成

**Create NAT Rule**ボタンをクリックして新しいNAT Ruleを作成します。

[![NAT Rule作成フォーム](/img/migrated/image-1754291008356-de8b3348.png)](/img/migrated/image-1754291008356-de8b3348.png)

NATには2種類あります：

- **Inbound NAT**：外部から内部ネットワークへのトラフィックを管理します。
- **Outbound NAT**：内部ネットワークから外部へのトラフィックを管理します。

## NAT Ruleの編集

**Actions**列の**Edit**ボタンをクリックして、NAT Rule情報を編集します。

:::note
**Basic**タイプのGatewayはNAT Rule編集をサポートしていません。NAT Ruleを編集できるのは**Custom**タイプのGatewayのみです。
:::

## NAT Ruleの削除

**Actions**列の**Delete**ボタンをクリックして、NAT Ruleを削除します。

:::note
**Basic**タイプのGatewayはNAT Rule削除をサポートしていません。NAT Ruleを削除できるのは**Custom**タイプのGatewayのみです。
:::
