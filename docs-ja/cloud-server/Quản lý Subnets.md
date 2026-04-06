---
id: "Quản lý Subnets"
title: "Subnet管理"
sidebar_label: "Subnet管理"
sidebar_position: 70
---

Subnet管理


**Subnet**はVPC内に作成されるサブネットワークです。物理システムのLANに相当します。必要に応じて、1つまたは複数の**Subnet**を仮想マシンにアタッチできます。

## 新しいSubnetの作成
新しい**Subnet**を作成するには、以下の手順に従ってください。

**ステップ1**: メニューで**Networking** > **Subnets**を選択します。**Create subnet**をクリックします。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-001.png)

**ステップ2**: システムが要求する情報を入力します。

  * **Name**: Subnetのわかりやすい名前を入力します。

  * **Type**: 現在2種類をサポートしています。

    * **Routed**: SubnetはNATゲートウェイを通じてインターネットにルーティングされます。

    * **Isolated**: Subnetはインターネットにルーティングされません。

  * **Network Address (CIDR)**: 有効な**CIDR**を入力します。

  * **Gateway IP**: 有効な**Gateway**アドレスを入力します。

  * **Static IP Pool (optional)**: 使用するIP範囲を入力します。空白のままにすると、システムは**CIDR**のすべてのIPを使用します。

  * **Primary DNS**: IPv4形式でDNSアドレスを入力します。空白のままにすると、システムは自動的にデフォルト値8.8.8.8を設定します。

  * **Secondary DNS (optional)**: IPv4形式でSecondary DNSを入力します。空白のままにすると、システムは自動的にデフォルト値8.8.8.8を設定します。

  * **Add tag (optional)**: Subnetに付けるタグを選択します。


![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-002.png)

**ステップ3**: **Create subnet**をクリックして新しいSubnetを作成します。システムが処理を行い、結果を通知します。

成功した場合、新しく作成された**Subnet**が**Subnets**テーブルに表示されます。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-003.png)

## Subnet詳細の確認
![](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-004.png)

Subnetの以下の情報を確認できます。

  * Subnet name
  * CIDR
  * Gateway（VPC type Specificのみサポート）
  * IP Used
  * IP List

    * Private IP

    * Device Name: InstanceまたはLoad Balancerに現在アタッチされているIPの情報（VPC type Specificのみサポート）。Instanceの場合、device nameはInstanceのホスト名です。Load Balancerの場合、device nameはLoad Balancer名です。

    * Attach device

    * System Status

    * Admin Status


## Subnetの名前変更
**ステップ1**: メニューで**Subnets**を選択します。名前を変更するSubnetの**Actions**セクションで**Rename**を選択します。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-005.png)

**ステップ2**: **Rename subnet**モーダルが表示されます。新しい名前を入力し、**Rename subnet**をクリックして変更を保存します。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-006.png)

## SubnetをIsolatedからRoutedに変換する
以下の手順で操作してください。

**注意：この機能は単一のGatewayを持つVPCのみでサポートされています。VPCに複数のGatewayがある場合は、サポートチームにお問い合わせください。**

**ステップ1**: メニューで**Subnets**を選択し、**Actions** > **Edit to Routed**を選択します。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-007.png)

**ステップ2**: ダイアログボックスが表示されます。確認して**Change to routed**をクリックして変更を適用します。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-008.png)

**ステップ3**: 変更が正常に適用された後、システムはSubnetリストの**Type**と**Edge gateway**情報を更新します。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-009.png)

## DNSサーバー情報の変更
**ステップ1**: メニューで**Subnets**を選択します。DNSサーバーを変更するSubnetで、**Actions** > **Edit DNS server**を選択します。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-010.png)

**ステップ2**: 新しいDNSサーバー情報を入力し、**Edit DNS**をクリックして更新します。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-011.png)

## SubnetのTagを管理する
**ステップ1**: メニューで**Subnets**を選択します。タグを付けるSubnetで、**Actions** > **Manage tags**を選択します。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-012.png)

**ステップ2**: リストからタグを選択し、**Save**をクリックして更新します。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-013.png)

## プライベートIPの作成（IP Port）
_この機能はGeneralユーザーのみ利用可能です。_

IP Port機能はプライベートIPアドレスを作成します。ユーザーはIPアドレスを指定して保持し、さまざまな目的に使用できます。

**ステップ1**: メニューで**Subnet**を選択します。システムは対応するSubnetのリストを表示します。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-014.png)

**ステップ2**: Subnetの詳細をクリックします。**Create private IP**をクリックします。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-015.png)

**ステップ3**: ダイアログボックスが表示されます。以下の情報を入力します。

  * **Subnet name**: システムはデフォルトでユーザーのSubnet名を表示し、編集できません。

  * **IP address**: Subnetに属する有効なIPアドレスを入力します。

  * **MAC address**: MACアドレスを入力します（任意フィールド）。


**注意：作成されたIPアドレスは有効（Up）状態になります。**

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-016.png)

**ステップ4**: **Create Private IP**をクリックしてIPアドレスを作成します。システムが初期化し、結果を通知します。プライベートIPアドレスは作成後にSubnet詳細ページに表示されます。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-017.png)

## Admin Stateを無効にする
**ステップ1**: メニューで**Subnet**を選択し、特定のSubnetの詳細をクリックします。**Admin State**が**Up**のプライベートIPアドレスを選択し、**Actions**をクリックします。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-018.png)

**ステップ2**: **Disable admin state**を選択します。システムはプライベートIPアドレスを**無効化**し（Admin StateがUpからDownに変わります）、Subnet詳細ページでこのステータスを更新します。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-019.png)

## Admin Stateを有効にする
注意：ユーザーのプライベートIPが[Allow address pair](<https://fptcloud.com/documents/cloud-server/?doc=allow-address-pair>)で使用されている場合、「Enable admin state」アクションを実行できません。

**ステップ1**: メニューで**Subnet**を選択し、特定のSubnetの詳細をクリックします。**Admin State**が**Down**のプライベートIPアドレスを選択し、**Actions**をクリックします。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-020.png)

**ステップ2**: **Enable admin state**を選択します。システムはプライベートIPアドレスを**有効化**し（Admin StateがDownからUpに変わります）、Subnet詳細ページでそのステータスを更新します。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-021.png)

## プライベートIPの削除
不要になったプライベートIPアドレスを削除します。

**ステップ1**: メニューで**Subnet**を選択し、特定のSubnetの詳細をクリックします。**Admin State**が**Up**のプライベートIPアドレスを選択し、**Actions**をクリックします。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-022.png)

**ステップ2**: **Delete**をクリックします。アクションを確認する警告ダイアログが表示されます。**Yes, delete it**をクリックして確認します。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-023.png)

注意：プライベートIPアドレスが現在使用中またはIPアドレスがアドレスペアにアタッチされている場合は削除できません。

削除したい場合は、先にIPをallow address pairから削除してください。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-024.png)

__

_図：172.26.166.145がallow address pairにアタッチされています_

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-025.png)

__

_警告モーダル：削除アクションを実行できません_

## VPCからSubnetを削除する
**注意：この操作を行う前に、すべての仮想マシンをSubnetから削除する必要があります。**

**Subnet**が不要になった場合、VPCから削除できます。**Subnet**を削除するには、以下の手順に従ってください。

**ステップ1**: メニューで**Subnets**を選択します。削除するSubnetの**Actions**セクションで**Delete**を選択します。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-026.png)

**ステップ2**: システムは確認ポップアップを表示します。削除を確認するには**Delete network**を選択します。

![file](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-027.png)

## Load BalancerのSubnetを管理する

注意：この機能は特別な設定を持つ一部のTenantのみ対象です。サポートにお問い合わせください。

![](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-028.png)

  * Load BalancerのSubnetは**LB-data-net**という名前です。これらのSubnetはLoad Balancer専用に予約されており、他のリソースと一緒に使用できず、管理操作をサポートしていません。


![](images/Qu%E1%BA%A3n%20l%C3%BD%20Subnets/img-029.png)

  * Subnet管理ページのLoad Balancer SubnetのSubnet詳細にアクセスして、そのSubnet内で使用中のIPのリストを管理します。
