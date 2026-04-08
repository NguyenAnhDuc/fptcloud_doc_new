---
id: "change-statis-IP-in-CentOS"
title: "CentOSで静的IPを設定する"
description: "FPT CloudでNIC設定を変更した後、CentOSで静的IPアドレスを変更する方法です。"
sidebar_label: "CentOSで静的IPを設定する"
sidebar_position: 5
---

# CentOSで静的IPを設定する

## ステップ1: 現在の状態を確認する

NICを編集した後、NICのIPは `132.0.0.70` です。

[![FPT Cloud PortalのCentOS VMのNIC情報](/img/migrated/NIC-VM-Centos-1024x372-9c72aa69.png)](/img/migrated/NIC-VM-Centos-1024x372-9c72aa69.png)

**Console** を開き、以下のコマンドで現在のIPアドレスを確認します。

```bash
ip a
```

[![CentOS VMのConsoleでのip aコマンドの出力](/img/migrated/NIC-VM-CentOS-console-1024x311-3cb187fe.png)](/img/migrated/NIC-VM-CentOS-console-1024x311-3cb187fe.png)

## ステップ2: ネットワークインターフェース設定ファイルを開く

以下のコマンドで `ifcfg-eth0` を開きます。

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

[![viエディタで開いたifcfg-eth0ファイル](/img/migrated/Screenshot-2023-07-11-at-1.25.01-PM-ca5cfd61.png)](/img/migrated/Screenshot-2023-07-11-at-1.25.01-PM-ca5cfd61.png)

## ステップ3: 設定値を編集する

1. `i` キーを押してInsertモードに入ります。
2. 新しい設定に合わせてIPアドレス、ゲートウェイ、DNSを更新します。

[![ifcfg-eth0でIPパラメータを編集する](/img/migrated/NIC-VM-CentOS-console-insert-4b7c2644.png)](/img/migrated/NIC-VM-CentOS-console-insert-4b7c2644.png)

3. `Esc` を押し、`:wq` と入力してから `Enter` を押して保存・終了します。

[![viで:wqコマンドを使って設定ファイルを保存する](/img/migrated/NIC-VM-CentOS-console-insert-wq-baea240e.png)](/img/migrated/NIC-VM-CentOS-console-insert-wq-baea240e.png)

## ステップ4: ネットワークサービスを再起動する

以下のコマンドで変更を適用します。

```bash
service network restart
```

[![CentOSでのネットワークサービス再起動の出力](/img/migrated/Screenshot-2023-07-11-at-1.28.27-PM-418b264e.png)](/img/migrated/Screenshot-2023-07-11-at-1.28.27-PM-418b264e.png)

## ステップ5: 確認と接続テスト

再度 `ip a` を実行してIPアドレスが更新されたことを確認し、pingテストで接続を確認します。

[![CentOSでの新しいIP設定の確認とpingテストの結果](/img/migrated/Screenshot-2023-07-11-at-1.28.45-PM-b786390c.png)](/img/migrated/Screenshot-2023-07-11-at-1.28.45-PM-b786390c.png)
