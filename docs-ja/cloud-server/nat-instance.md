---
id: "nat-instance"
title: "Nat Instance"
sidebar_label: "NAT Instance"
sidebar_position: 54
---

NAT Instance


この機能は、隔離されたネットワーク（isolated network）内のInstanceが、ソフトウェアのインストールやオンプレミス環境への接続など、外部のインターネットシステムにアクセスできるようにするものです。

NAT Instanceの設定手順は以下の通りです：

**ステップ1**：FCIが提供するイメージからNAT Instanceを作成します。

![file](images/nat-instance/img-001.png)

![file](images/nat-instance/img-002.png)

**注意：subnetフィールドでは、インターネットにアクセスできるSubnetを選択してください。**

![file](images/nat-instance/img-003.png)

**ステップ2**：NAT InstanceにFloating IPを割り当てます。初期化ステップでInstanceにすでにFloating IPが割り当てられている場合は、この操作は不要です。

![file](images/nat-instance/img-004.png)

![file](images/nat-instance/img-005.png)

![file](images/nat-instance/img-006.png)

**ステップ3**：NAT Instanceにsecurity groupを割り当てます。隔離されたネットワーク内のInstanceがインターネットにアクセスするために必要なルールを開いてください（pingテスト用にICMPポートを追加で開くこともできます）。初期化ステップでInstanceがすでにsecurity groupに割り当てられている場合は、この操作は不要です。

![file](images/nat-instance/img-007.png)

![file](images/nat-instance/img-008.png)

**ステップ4**：インターネットアクセスが必要なInstanceの隔離されたSubnetと同じSubnetに属するNetwork Interface Card（NIC）を追加します。

![file](images/nat-instance/img-009.png)

![file](images/nat-instance/img-010.png)

![file](images/nat-instance/img-011.png)

**ステップ5**：隔離されたネットワークに属するNICに対してアドレスペア0.0.0.0/0を許可します。

![file](images/nat-instance/img-012.png)

![file](images/nat-instance/img-013.png)

**ステップ6**：隔離されたネットワーク内のInstanceにアクセスし、ゲートウェイをNAT InstanceのNICのIPに変更します。この例では、FCIはWindows OSのInstanceを使用しています。

![file](images/nat-instance/img-014.png)

![file](images/nat-instance/img-015.png)

![file](images/nat-instance/img-016.png)

")
