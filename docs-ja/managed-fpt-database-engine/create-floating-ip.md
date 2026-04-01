---
id: "create-floating-ip"
title: "floating IP の作成"
description: "Database Engine 用の floating IP を作成・割り当てる手順。"
sidebar_label: "floating IP の作成"
sidebar_position: 4
---

# floating IP の作成

**Floating IP** は **Public IP** を保持し、インターネットから仮想マシンへのアクセスを転送するために使用します。仮想マシンをインターネットからアクセス可能にするには floating IP を割り当てる必要があります。不要になった場合や endpoint を変更したい場合は、同じ VPC 内の別の仮想マシンに floating IP を簡単に切り替えることができます。

## ケース 1: Database cluster から floating IP を作成する

1. Menu > Database Platform > **Relational Database / Non-Relational Database / Search Engines / Data Streaming / Time Series Db** から **Running** 状態の Cluster ID を選択します。
[![](/img/migrated/b1-cua-6.2-6e953999.png)](/img/migrated/b1-cua-6.2-6e953999.png)
2. Database Detail 画面が表示されます。**Overview** タブで Instances List を選択し、role が **True** の **Name** をクリックします。
[![](/img/migrated/b2-cua-6.2-ecd9ba9c.png)](/img/migrated/b2-cua-6.2-ecd9ba9c.png)
3. **Node Database** から **Instance Management** へのリンク画面が表示されます。**Floating IP** で **Allocate** を選択します。
[![](/img/migrated/b3cua-6.2-0c5d58f3.png)](/img/migrated/b3cua-6.2-0c5d58f3.png)
4. **Allocate Floating IP** ポップアップが表示されます。必要な情報を入力します。
   - **IP Address:** 利用可能なリストから適切なアドレスを選択します。プールがない場合はサポートに連絡してください。
   - **Instance:** DB クラスター名 + Cluster ID + node 名がデフォルトで設定されています。
   - **IP Port:** DB クラスターのポートと Security で割り当てられたポートを入力します。
   - **Instance Port:** IP Port と同じポートまたは覚えやすい別のポートを入力します。

[![](/img/migrated/b4-cua-6.2-0745ca34.png)](/img/migrated/b4-cua-6.2-0745ca34.png)
5. Allocate floating IP の作成後、**Floating IP** アドレスの情報が表示されます。
[![](/img/migrated/B5-cua-6.2-92407761.png)](/img/migrated/B5-cua-6.2-92407761.png)
6. 作成した IP アドレスを確認します: **Menu** > **Networking** > **Floating IPs** で **Active** 状態の Public IP を確認します。
[![](/img/migrated/b6_1-cua-6.2-d37cc8dc.png)](/img/migrated/b6_1-cua-6.2-d37cc8dc.png)

   Public IP が不要な場合は disconnect することができます。

[![](/img/migrated/b6_2-cua-6.2-72332857.png)](/img/migrated/b6_2-cua-6.2-72332857.png)

**Disconnect floating IP** ポップアップが表示されます。情報を確認して **Disconnect floating IP** をクリックします。
[![](/img/migrated/b6_3-cua-6.2-f1272475.png)](/img/migrated/b6_3-cua-6.2-f1272475.png)

## ケース 2: Network から直接 floating IP を作成する

Database cluster を経由せずに floating IP を作成する方法です。disconnect した Public IP を再作成したい場合や、Database cluster の instance 画面で Allocate が表示されない場合に使用します。

1. Menu > **Networking** > **Floating IPs** > **Allocate IP address** をクリックします。
[![](/img/migrated/TH2_B1-_6.2-23686fb5.png)](/img/migrated/TH2_B1-_6.2-23686fb5.png)
2. **Allocate Floating IP** ポップアップが表示されます。必要な情報を入力します。
   - **IP Address:** 利用可能なリストから適切なアドレスを選択します。
   - **Instance:** リストから適切な Database クラスター名を選択します。
   - **IP Port:** DB クラスターのポートと Security で割り当てられたポートを入力します。
   - **Instance Port:** IP Port と同じポートまたは覚えやすい別のポートを入力します。

[![](/img/migrated/TH2_B2_6.2-f5b99a21.png)](/img/migrated/TH2_B2_6.2-f5b99a21.png)
3. 作成した IP アドレスを確認します: **Menu** > **Networking** > **Floating IPs** で **Active** 状態の Public IP を確認します。
[![](/img/migrated/Th2_b3_6.2-3a398f5d.png)](/img/migrated/Th2_b3_6.2-3a398f5d.png)
4. Allocate floating IP の作成後、Database cluster に floating IP アドレスの情報が表示されます。
[![](/img/migrated/TH2_B4_6.2-87022800.png)](/img/migrated/TH2_B4_6.2-87022800.png)

floating IP アドレスを取得したら、そのアドレスを使用して Database に接続します。
