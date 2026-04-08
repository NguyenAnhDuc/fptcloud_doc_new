---
id: "create-subnets"
title: "subnet の作成"
description: "Database Engine 用の subnet を作成する手順。"
sidebar_label: "subnet の作成"
sidebar_position: 5
draft: true
---

# subnet の作成

**Subnet** は VPC 内に作成されるサブネットワークです。物理システムの LAN ネットワークに相当します。必要に応じて 1 つまたは複数の subnet を仮想マシンに接続できます。

1. Menu バー > **Networking** > **Subnets** を選択します。
[![](/img/migrated/Sub1-1e1f2f32.png)](/img/migrated/Sub1-1e1f2f32.png)
2. **Create** をクリックします。**Create Subnets** 画面が表示されます。
[![](/img/migrated/Sub2-a3119de5.png)](/img/migrated/Sub2-a3119de5.png)

以下の情報を入力します。
- **Name:** subnet の名前。デフォルトの候補以外に覚えやすい名前に変更することもできます。
- **Type:**
  - Routed to the internet via a NAT gateway: NAT ゲートウェイ経由でインターネットに接続。
  - Isolated subnet won't route to the internet: 内部ネットワークのみ使用。
- **CIDR:** Gateway の IP を入力します。システムが提案する値を使用するか、制限範囲内で編集できます。
- **Static IP Pool:** CIDR の提案範囲内で static を入力します。

3. 必要な情報を入力したら、**Create subnet** をクリックします。
[![](/img/migrated/Sub3-273cbe12.png)](/img/migrated/Sub3-273cbe12.png)

:::note
subnet 作成後は subnet 名を変更しないことを推奨します。
:::
