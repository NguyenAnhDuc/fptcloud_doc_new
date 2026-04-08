---
id: "quick-starts-tao-mot-may-ao"
title: "仮想マシンを作成する"
sidebar_label: "仮想マシンを作成する"
sidebar_position: 1
---

仮想マシンを作成する


**ステップ 1**: メニューで **Compute Engine** > **Instance Management** を選択し、**Create instance** をクリックします。

![file](images/quick-starts-tao-mot-may-ao/img-001.png)

新しいダイアログボックスが表示され、次のステップをガイドします。

![Userguide FPT Cloud Server 2022 18](images/quick-starts-tao-mot-may-ao/img-002.png)

**ステップ 2**: 以下のオプションで必要に応じて仮想マシンを設定します。

### 設定情報
**Instance Type**: ユーザーはニーズに最も適したマシンタイプを選択できます。現在、GeneralとGPUの2つの一般的なタイプがあります。

  * **General** は基本的なニーズに対応するマシンタイプです。

  * **GPU** は高性能コンピューティング（High Performance Computing）、Machine Learningなどのニーズに対応します。


![file](images/quick-starts-tao-mot-may-ao/img-003.png)

**Image:** ニーズに合ったメインOSを選択します。各OSグループには異なるバージョンが含まれます。デフォルトは最新バージョンです。独自のISOファイルをアップロードするか、以前に初期化したテンプレートから仮想マシンを作成することでカスタマイズできます。

**general の場合**

  * OSから仮想マシンを作成する場合


![file](images/quick-starts-tao-mot-may-ao/img-004.png)

  * Imageから仮想マシンを作成する場合: カスタムイメージまたはISOイメージを選択できます（注意事項の詳細: Link）


![file](images/quick-starts-tao-mot-may-ao/img-005.png)

  * Snapshot/NAT Instanceから仮想マシンを作成する場合


![file](images/quick-starts-tao-mot-may-ao/img-006.png)

![file](images/quick-starts-tao-mot-may-ao/img-007.png)

**specific の場合**

![file](images/quick-starts-tao-mot-may-ao/img-008.png)

**Resource type**: マシンタイプごとにCPUとRAMの設定が異なります。カスタム設定を作成することもできます。

![file](images/quick-starts-tao-mot-may-ao/img-009.png)

### Storage Disk 情報
**Storage**: 仮想マシンにアタッチされるStorageには以下が含まれます。

  * **Storage Policy**: Storageの種類

  * **Size**: Storageのサイズ


![file](images/quick-starts-tao-mot-may-ao/img-010.png)

### ネットワーク情報
SubnetおよびPrivate IP、Floating IP、Security groupなどのAdvanced情報が含まれます。

  * **Subnet** & **Private IP**: 仮想マシンが動作に必要なリソースとネットワークサービスに接続できるようにネットワークを選択します。これにより、仮想マシンはネットワーク上の他のデバイスと通信し、インターネットなどの外部リソースにアクセスできます。仮想マシンのプライベートIPアドレスを入力するか、このフィールドを空白のままにすると選択したSubnetに基づいてシステムが自動生成します。

  * **Security Group**: 仮想マシンへのトラフィックを制御するためにSecurity Groupを選択します。このフィールドは空白のままにして後で設定することもできます。


![file](images/quick-starts-tao-mot-may-ao/img-011.png)

### 認証情報
**Authentication type**: **SSH key** または **Password**

  * SSH Keyを選択した場合、システムは最新のSSH keyを使用します（変更可能）。


![file](images/quick-starts-tao-mot-may-ao/img-012.png)

  * Standardメソッドを使用する場合、ユーザーはパスワードを安全な場所に記憶・保管してください。


![file](images/quick-starts-tao-mot-may-ao/img-013.png)

### Advanced 情報
![file](images/quick-starts-tao-mot-may-ao/img-014.png)

  * **Instance group**: 物理ホスト上での仮想マシンの配置を設定するために、Instance groupをオプションで選択できます。

  * **Instance name**: 管理しやすい仮想マシン名を入力します。これは仮想マシンのホスト名にもなります。

  * **User data**: cloud-init scriptを含む場所です。仮想マシンの起動時にcloud-initはクラウドから提供されたメタデータを読み込み、それに基づいてシステムを初期化します。cloud-initは通常、ネットワーク、ストレージ、SSH keys、およびシステムの他の部分のセットアップに使用されます。注意: WindowsオペレーティングシステムでInitializeした仮想マシンの場合、cloud-initのスクリプトを実行するには再起動が必要です。


**cloud-init scriptのサンプル**: このサンプルスクリプトで、システムはユーザー「testcloudinit」をパスワード「Abc123」で、ユーザー「testcloudinit2」をパスワード「abc@123Abc123」で自動作成します。
[code]
    Copy#cloud-config
    users:
    - name: testcloudinit
      sudo: ALL=(ALL) NOPASSWD:ALL
      lock_passwd: false
      shell: /bin/bash
      passwd: $6$rounds=4096$V6anciWl30$xKbcljqks1gUkMiM80pyKzhvyhn7U1n.jXcGCUfkUlX.rnllUWKUrmDEzekhhhP8aERSylRuC7gfDhJ32Xv0A1
    - name: testcloudinit2
      groups: sudo
      lock_passwd: false
      shell: /bin/bash
      plain_text_passwd: abc@123Abc123
    - hostname: testcloudinit

[/code]

Windowsの注意: Cloud base initスクリプト形式を使用します。

**サンプルスクリプト:**
[code]
    Copy#cloud-config
    users:
    - name: testcloudinit
      primary_group: Administrators
      groups: Administrators
      passwd: abc@123Abc123
[/code]

**ステップ 3**: **Create Instance** をクリックして仮想マシンを作成します。システムは確認を表示し、リソースを確認して、選択した設定に基づいて新しい仮想マシンの初期化処理を進めます。

![file](images/quick-starts-tao-mot-may-ao/img-015.png)

初期化が成功すると、新しく作成した仮想マシンを確認し、管理ダッシュボードで情報を確認できます。各仮想マシンには名前、設定（RAM、CPU、Storage）、IPアドレス、動作状態（オフ/オン/Suspended）が一覧に表示されます。

**![Userguide FPT Cloud Server 2022 21](images/quick-starts-tao-mot-may-ao/img-016.png)**
