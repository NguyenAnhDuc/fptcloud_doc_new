---
id: "quan-ly-security-group"
title: "Security Group 管理"
sidebar_label: "Security Group 管理"
sidebar_position: 1
---

Security Group 管理


**Security Group** は仮想ネットワークファイアウォールとして機能し、仮想マシンへの受信（inbound）および送信（outbound）トラフィックを制御します。FPT Cloudには2種類のファイアウォールがあります。

  * Security Group: 仮想マシンのインターネットトラフィックを制御するファイアウォール。

  * Distributed Firewall: _（Specificサービスのみ利用可能）_ 内部ネットワーク内の仮想マシン間のトラフィックを制御するファイアウォール。


これらのファイアウォールを使用することで、DDoS攻撃やインターネット・ウイルスからのその他の脅威をブロックし、仮想マシンを保護します。

**Security Group** を管理するには、**Networking** サービスグループの **Security Groups** ページに移動します。ここでVPC内の **Security Group** を作成、一覧表示、編集、削除できます。

### 新しい Security Group を作成する
新しい Security Group を作成するには、以下の手順に従ってください。

**ステップ 1**: メニューで **Networking** > **Security group** を選択します。**Create security group** をクリックします。

![file](images/quan-ly-security-group/img-001.png)

**ステップ 2**: 必要な情報を入力します。

**General サービスユーザーの場合:**

  * **Name**: Security Groupの名前。デフォルトでは、システムが自動的に名前を生成します。

  * **Subnet**: リストからSubnetを選択します。

  * **Applied CIDR / instances**: 適用する仮想マシンまたはCIDR範囲を選択します。このフィールドはスキップして後で追加することもできます。

  * **Configure security rule**:

    * Inbound rule: 仮想マシンへの受信トラフィックを制御します。必要に応じてルールを設定できます。

    * Outbound rule: 仮想マシンからの送信トラフィックを制御します。必要に応じてルールを設定できます。


![file](images/quan-ly-security-group/img-002.png)

__

_General サービスユーザー向け Security Group 作成画面_

**Specific サービスユーザーの場合:**

  * **Name**: Security Groupの名前。デフォルトでは、システムが自動的に名前を生成します。

  * **Type**:

    * Security group: 仮想マシンのインターネットトラフィックを制御します。

    * Distributed Firewall: 仮想マシンの内部ネットワークトラフィックを制御します。

  * **Subnet**: リストからSubnetを選択します。

  * **Applied CIDR / instances**: 適用する仮想マシンまたはCIDR範囲を選択します。このフィールドはスキップして後で追加することもできます。

  * **Configure security rule**:

    * Inbound rule: 仮想マシンへの受信トラフィックを制御します。必要に応じてルールを設定できます。

    * Outbound rule: 仮想マシンからの送信トラフィックを制御します。必要に応じてルールを設定できます。


![file](images/quan-ly-security-group/img-003.png)

__

_Specific サービスユーザー向け Security Group 作成画面_

**ステップ 3**: **Create security group** をクリックします。システムはリクエストを処理し、結果を表示します。

成功した場合、新しく作成した **Security Group** が **Security Group** テーブルに表示されます。

![file](images/quan-ly-security-group/img-004.png)

### Security Group の Inbound ルールと Outbound ルールを管理する
**Inbound rules** は仮想マシンでどの **Port** を開放するか、およびインターネット上のどのアドレス（**Source**）がそのポートにアクセスできるかを定義します。

**Outbound rules** は仮想マシンでどの **Port** を開放するか、およびそのポートからインターネット上のどのアドレス（**Destination**）にアクセスできるかを定義します。

1つの **Security Group** には複数の **Inbound rules** と **Outbound rules** を含めることができます。Security Groupにルールを追加してポートを開放するには、以下の手順に従ってください。

**ステップ 1**: **Security group** 管理パネルで、ルールを管理したい **Security group** を選択して **Security group detail** ページに移動します。

注意: 作成後にFirewallタイプを変更することはできません。

**ステップ 2**: **Inbound rules** セクションで **Add New** をクリックします（**outbound rules** でも同様です）。

![file](images/quan-ly-security-group/img-005.png)

**ステップ 3**: 必要なルールの詳細を入力します。

  * **Port**: 開放するポートを選択します。**All ports** を選択してすべてのポートを開放するか、**Customize ports** を選択して1つまたはカスタム **Port** の範囲を開放できます。システムはSSH、RDP、MySQL、HTTP、HTTPSなどの一般的なサービスのポートも提案します。

  * **Sources (Destinations)**: このポートに接続できるインターネットIPアドレスをSources（Destinations）フィールドに入力します。**All IPv4** を選択してすべて許可するか、**MyIP** を選択して現在のパブリックIPのみ許可するか、IPを直接入力してカスタムIPを追加します。注意: ポート22や3389などの機密性の高いポートで All IPv4 を許可すると、システムは高リスクの警告「We recommend allowing SSH from trusted IPs only」を表示します。

  * **Description**: ルールに関するメモ。


**Add rule** をクリックして新しいルールの追加を続けるか、**Edit security group** をクリックして保存します。システムは保存して結果を表示します。

![file](images/quan-ly-security-group/img-006.png)

### 仮想マシンを Security Group にアタッチする
**ステップ 1**: **Security group** 管理パネルで、仮想マシンにアタッチしたい **Security group** を選択して **Security group detail** ページに移動します。

![file](images/quan-ly-security-group/img-007.png)

**ステップ 2**: **Apply to** セクションで、**Security group** にアタッチする仮想マシンを選択します。ネットワーク範囲に適用するためのCIDR範囲を入力することもできます。**Apply Instances** をクリックします。システムは保存して結果を表示します。

![file](images/quan-ly-security-group/img-008.png)

### Security Group から仮想マシンをデタッチする
**ステップ 1**: **Security group** 管理パネルで、仮想マシンからデタッチしたい **Security group** を選択して **Security group detail** ページに移動します。

![file](images/quan-ly-security-group/img-009.png)

**Apply to** セクションには、この **Security group** に現在アタッチされている仮想マシンの一覧が表示されます。

**ステップ 2**: デタッチしたい仮想マシンの横にある **X** アイコンをクリックし、**Apply Instances** をクリックします。システムはリクエストを処理し、結果を表示します。

![file](images/quan-ly-security-group/img-010.png)

### VPC から Security Group を削除する
**Security group** が不要になった場合、**VPC** から削除できます。

**注意: この操作を実行する前に、すべてのルールを削除する必要があります。**

![file](images/quan-ly-security-group/img-011.png)

**ステップ 1**: **Security group** 管理パネルで、削除したい **Security group** を選択して **Security group detail** ページに移動します。

![file](images/quan-ly-security-group/img-012.png)

**ステップ 2**: ルールに移動し、ゴミ箱アイコンをクリックして削除を確認します。

![file](images/quan-ly-security-group/img-013.png)

![file](images/quan-ly-security-group/img-014.png)

**ステップ 3**: **Security group** 内のすべてのルールを削除したら、**Security Group** 管理パネルに戻ります。削除したい **Security group** の **Action** 列から Delete を選択します。

![file](images/quan-ly-security-group/img-015.png)

**ステップ 4**: システムが確認ポップアップを表示します。削除を確認するには、**Delete security group** をクリックします。

![file](images/quan-ly-security-group/img-016.png)
