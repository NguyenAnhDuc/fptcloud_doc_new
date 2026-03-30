---
id: "Quản lý Subnets"
title: "Subnet管理"
description: "FPT CloudのVPC内でSubnetの作成・編集・管理を行います。"
sidebar_label: "Subnet管理"
sidebar_position: 70
---

# Subnet管理

SubnetはVPC内のサブネットワークで、物理システムのLANに相当します。要件に応じて、1つまたは複数のSubnetをインスタンスにアタッチできます。

## 新しいSubnetの作成

1. **Networking** → **Subnets** に移動し、**Create subnet** をクリックします。

   [![Subnets画面](/img/migrated/image-1716262599480-f51ee2ed.png)](/img/migrated/image-1716262599480-f51ee2ed.png)

2. 必要な情報を入力します：Name、Type（Routed/Isolated）、CIDR、Gateway IP、DNS。

3. **Create subnet** をクリックします。

## 次のステップ

- [Allow Address Pair](./allow-address-pair.md)
- [Security Group管理](./quan-ly-security-group.md)
