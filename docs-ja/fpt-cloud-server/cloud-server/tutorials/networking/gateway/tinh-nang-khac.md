---
id: "tinh-nang-khac"
title: "Gatewayに関連するその他の機能"
description: "Floating IP、Instance、Subnet、Security Group、Load Balancer、VPNでGatewayを使用する方法"
sidebar_label: "その他の機能"
sidebar_position: 7
pagination_next: null
---

# Gatewayに関連するその他の機能

## Floating IPの割り当て（Allocate IP Address）

**Floating IP**画面では、IP割り当て時にGatewayを選択できます。GatewayのツールチップにカーソルをあわせてBasicかCustomかを確認してください。

- **Custom**タイプのGatewayを選択した場合、IPの割り当てのみ行われ、リソースへの紐付けはできません（Resource、IP Port、Instance Portフィールドは非表示になります）。

[![CustomタイプGatewayでのIP割り当て](/img/migrated/image-1754291575833-5ea9341b.png)](/img/migrated/image-1754291575833-5ea9341b.png)

- **Basic**タイプのGatewayを選択した場合、IPの割り当てとリソースへの紐付けを同時に行えます。

[![BasicタイプGatewayでのIP割り当て](/img/migrated/image-1754291610069-25711f9b.png)](/img/migrated/image-1754291610069-25711f9b.png)

:::note
- **Floating IP**画面（Actionsカラム）では、**Custom**タイプGatewayに属するIPをInstanceに割り当てることはできません。
- **Instance Detail**画面で、InstanceにIPが割り当てられていない状態でAllocate IPをクリックした場合、そのInstanceが**Custom**タイプGatewayに属していると直接IPを割り当てることはできません。IPを割り当てるにはNAT Ruleを作成する必要があります。
:::

## Instance

Instanceを作成する際、選択したSubnetに基づいてGateway情報が自動入力されます（GatewayはSubnetに割り当てられています）。**Custom**タイプのGatewayの場合、Floating IPを選択することができません（フィールドが無効化されます）。

[![CustomタイプGatewayでのInstance作成](/img/migrated/image-1754291630097-1768f41d.png)](/img/migrated/image-1754291630097-1768f41d.png)

## Subnet

**Subnet**作成画面では、Gatewayを選択できます。**Custom**タイプのGatewayを選択すると、NAT Ruleを手動で作成する必要があることが通知されます。

[![CustomタイプGatewayでのSubnet作成](/img/migrated/image-1754291640291-8ba52a8b.png)](/img/migrated/image-1754291640291-8ba52a8b.png)

## Security Group

**Security Group**作成画面では、Gatewayを選択できます。作成されたSecurity Ruleは選択したGatewayによって管理されます。

[![GatewayでのSecurity Group作成](/img/migrated/image-1754291651290-309bd36f.png)](/img/migrated/image-1754291651290-309bd36f.png)

## Load Balancer

**Load Balancer Classic**を使用する際に、Gateway情報を確認できます。

[![GatewayでのLoad Balancer Classic](/img/migrated/image-1754291661656-45935b91.png)](/img/migrated/image-1754291661656-45935b91.png)

## VPN Site to Site

**VPN Site to Site**サービスの作成・使用時にGatewayを選択できます。

[![GatewayでのVPN Site to Site](/img/migrated/image-1754291672602-cfe24f87.png)](/img/migrated/image-1754291672602-cfe24f87.png)
