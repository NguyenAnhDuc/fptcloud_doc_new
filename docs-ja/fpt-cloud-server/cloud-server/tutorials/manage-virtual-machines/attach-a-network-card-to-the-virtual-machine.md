---
id: "attach-a-network-card-to-the-virtual-machine"
title: "Attach A Network Card To The Virtual Machine"
sidebar_label: "仮想マシンへのネットワークカード（NIC）の追加"
sidebar_position: 5
---

仮想マシンへのネットワークカード（NIC）の追加


1台の仮想マシンに最大10枚のネットワークカードを追加できます。仮想マシンにネットワークカードを追加するには、次の手順に従ってください：

**ステップ1**: メニューから**Compute Engine** > **Instance Management**を選択します。**Subnet**を追加したい仮想マシンを選択して、**Instance Detail**ページに移動します。

![file](images/attach-a-network-card-to-the-virtual-machine/img-001.png)

**ステップ2**: **Network Interface**タブを開きます。システムは仮想マシンに現在接続されているネットワークカードの一覧と、各カードが接続されている**Subnet**の情報を表示します。**Add NIC**を選択します。

![file](images/attach-a-network-card-to-the-virtual-machine/img-002.png)

**ステップ3**: 仮想マシンに接続する**VPC**内の**Subnet**を選択します。**Add NIC**を選択して確認します。

![file](images/attach-a-network-card-to-the-virtual-machine/img-003.png)

システムがリクエストを処理し、結果を表示します。

成功した場合、新しいネットワークカードが**Network**テーブルに表示されます。

![file](images/attach-a-network-card-to-the-virtual-machine/img-004.png)

FPT PortalでNICを追加した後、WindowsおよびLinuxの仮想マシンは通常、新しいネットワークカードを自動的に検出するため、手動での設定は不要です。

ただし、Linuxユーザーが仮想マシン上で何らかの操作を行っている場合や、OSのエラーが発生している場合は、ネットワークカードが表示されないことがあります。マシンを再起動して設定を適用してください。それでも解決しない場合は、以下の手順に従って手動で設定してください：

### 現在のIPアドレスの確認
マシンの現在のIPアドレスを確認するには、Linuxユーザーは次のいずれかのコマンドを使用できます：
```
$ ip a
```

または：
```
$ ip addr
```

![file](images/attach-a-network-card-to-the-virtual-machine/img-005.png)

### 静的IPアドレスの設定
Ubuntu 20.04はデフォルトのネットワークマネージャーとしてnetplanを使用しています。netplanの設定ファイルは/etc/netplanディレクトリに保存されています。次のコマンドを使用して、そのディレクトリ内の設定ファイルを確認できます：
```
$ ls /etc/netplan
```

コマンドは.yaml拡張子を持つ設定ファイルの名前を返します。以下の例では01-network-manager-all.yamlです。

このファイルに変更を加える前に、必ずバックアップを作成してください。cpコマンドを使用します：
```
$ sudo cp /etc/netplan/01-network-manager-all.yaml 01-network-manager-all.yaml.ba
```

注意：設定ファイルの名前が01-network-manager-all.yamlでない場合があります。コマンドでは正しい設定ファイル名を使用してください。

次に、インターフェース名、IPアドレス、ゲートウェイ、DNS情報をネットワーク要件に合わせて置き換えながら、以下の行を追加します。

![file](images/attach-a-network-card-to-the-virtual-machine/img-006.png)
