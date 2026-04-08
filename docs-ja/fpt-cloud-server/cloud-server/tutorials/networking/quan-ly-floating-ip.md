---
id: "quan-ly-floating-ip"
title: "Floating IP 管理"
sidebar_label: "Floating IP 管理"
sidebar_position: 4
---

Floating IP 管理


**Floating IP** は **Public IP** アドレスを保持し、インターネットからの通信を仮想マシンへ転送するために使用されます。仮想マシンをインターネットからアクセス可能にするには、**Floating IP** をアタッチする必要があります。

使用が不要になった場合や、エンドポイントを変更したい場合は、同じVPC内の別の仮想マシンへ **Floating IP** を数ステップで簡単に切り替えることができます。

これにより、Public IPリソースのコストを削減し、IPアドレスを最大限に活用できます。

### プールから新しい Public IP アドレスを取得する
アカウントに残余クォータがある場合、追加のIPを取得して使用できます。

VPCに新しい **Public IP** を追加するには、以下の手順に従ってください。

**ステップ 1**: メニューで **Networking** > **Floating IP** を選択します。**Allocate IP address** をクリックします。

![file](images/quan-ly-floating-ip/img-001.png)

**ステップ 2**: 必要な情報を入力します。1〜65535の範囲で異なるIPポートを持つ複数のNATルールを作成できます。

  * **IP address**: **Allocate new from pool** を選択します。

  * **Instance**: このIPに関連付ける仮想マシンを選択します。まだ仮想マシンにアタッチする必要がない場合（後で使用する場合や、サイト間VPNなど他の用途に使用する場合）は、「Not assign ip to instance」を選択します。

  * **IP port (optional)**: システム内部にトラフィックを転送するIPポートです。個別のポートごとにNATルールを設定できます。1つのIPに対するポートは一意でなければならず、ルール間で重複できません。空欄の場合、システムはデフォルトで全ポートへの転送とみなします。

  * **Instance Port (Optional)**: 転送データを受け取るInstance上のポートです。個別のポートごとにNATルールを設定できます。1つのInstanceに対するポートは一意でなければならず、ルール間で重複できません。空欄の場合、システムはデフォルトで全ポートへの転送とみなします。

  * **Add tag (optional)**: IPにタグを付けます。このフィールドは任意です。


![file](images/quan-ly-floating-ip/img-002.png)

**ステップ 3**: **Allocate floating IP** をクリックします。システムはIP取得の条件を確認し、結果を表示します。

成功した場合、IPは **Floating IP** ページに表示されます。

![file](images/quan-ly-floating-ip/img-003.png)

**注意: クォータ超過によりシステムがエラーを報告した場合は、サポートチームに連絡して追加クォータをリクエストしてください。**

### Floating IP をサーバーにアタッチする
**ステップ 1**: **Floating IP** 管理パネルで、アタッチしたいIPの **Action** 列から **Connect to instance** を選択します。

**ステップ 2**: **Connect to instance** ポップアップが表示されます。**Instance** フィールドでこのIPに関連付ける仮想マシンを選択します。

![file](images/quan-ly-floating-ip/img-004.png)

**ステップ 3**: **Allocate floating IP** をクリックします。システムはリクエストを処理し、結果を表示します。

成功した場合、IPとルールが **Floating IP** ページに表示されます。

![file](images/quan-ly-floating-ip/img-005.png)

### 仮想マシンから Floating IP をデタッチする
IPが不要になった場合や、別の仮想マシンにアタッチするためにデタッチしたい場合は、以下の手順で **Floating IP** を取り外すことができます。

**ステップ 1**: **Floating IP** 管理パネルで、デタッチしたいIPの **Actions** 列から **Disconnect instance** を選択します。

**ステップ 2**: システムが確認ポップアップを表示します。デタッチを確認するには、**Disconnect** をクリックします。

![file](images/quan-ly-floating-ip/img-006.png)

### VPC から Floating IP を解放する
不要になった **Floating IP** を **VPC** から解放するには、以下の手順に従ってください。

**ステップ 1**: **Floating IP** 管理パネルで、解放したいIPの **Action** 列から **Release IP** を選択します。

![file](images/quan-ly-floating-ip/img-007.png)

**ステップ 2**: システムが確認ポップアップを表示します。解放を確認するには、**Release** をクリックします。

![file](images/quan-ly-floating-ip/img-008.png)
