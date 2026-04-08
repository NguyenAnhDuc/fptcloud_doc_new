---
id: "change-static-IP-in-Ubuntu-server"
title: "Ubuntu Serverで静的IPを設定する"
description: "FPT CloudでNIC設定を変更した後、Ubuntu Serverで静的IPアドレスを変更する方法です。"
sidebar_label: "Ubuntu Serverで静的IPを設定する"
sidebar_position: 3
---

# Ubuntu Serverで静的IPを設定する

## ステップ1: 現在の状態を確認する

NICを編集した後、NICのIPは `132.0.0.190` です。

[![FPT Cloud PortalのUbuntu VMのNIC情報](/img/migrated/NIC-VM-ubuntu-1024x372-84e18337.png)](/img/migrated/NIC-VM-ubuntu-1024x372-84e18337.png)

1. **Console** を開き、インスタンスにサインインします。
2. `ifconfig` を実行して現在のIPアドレスを確認します。

[![Ubuntu VMのConsoleでのifconfigコマンドの出力](/img/migrated/NIC-VM-ubuntu-console-949ea6c3.png)](/img/migrated/NIC-VM-ubuntu-console-949ea6c3.png)

## ステップ2: ネットワーク設定ファイルを開く

以下のコマンドで `00-installer-config.yaml` を開きます。

```bash
vi /etc/netplan/00-installer-config.yaml
```

[![viエディタで開いたファイル00-installer-config.yaml](/img/migrated/Screenshot-2023-07-11-at-1.06.36-PM-c1e702aa.png)](/img/migrated/Screenshot-2023-07-11-at-1.06.36-PM-c1e702aa.png)

`i` キーを押してInsertモードに入ります。

## ステップ3: 設定値を更新する

新しい設定に合わせてIPアドレス、ゲートウェイ、DNSを編集します。

[![netplan設定ファイルでIPパラメータを編集する](/img/migrated/Screenshot-2023-07-11-at-1.06.53-PM-68a5c578.png)](/img/migrated/Screenshot-2023-07-11-at-1.06.53-PM-68a5c578.png)

`Esc` を押し、`:wq` と入力してから `Enter` を押して保存・終了します。

[![viで:wqコマンドを使って設定ファイルを保存する](/img/migrated/Screenshot-2023-07-11-at-1.07.26-PM-46cc3684.png)](/img/migrated/Screenshot-2023-07-11-at-1.07.26-PM-46cc3684.png)

## ステップ4: 変更を適用する

以下のコマンドで新しいネットワーク設定を適用します。

```bash
sudo netplan apply
```

[![sudo netplan applyコマンドの出力](/img/migrated/Screenshot-2023-07-11-at-1.10.56-PM-0a072ee4.png)](/img/migrated/Screenshot-2023-07-11-at-1.10.56-PM-0a072ee4.png)

## ステップ5: 新しいIPアドレスを確認する

再度 `ifconfig` を実行して、IPアドレスが更新されたことを確認します。

[![設定適用後の新しい静的IPを表示するifconfigの出力](/img/migrated/Screenshot-2023-07-11-at-1.12.57-PM-223067ab.png)](/img/migrated/Screenshot-2023-07-11-at-1.12.57-PM-223067ab.png)

[![新しい静的IPアドレスでの接続確認](/img/migrated/Screenshot-2023-07-11-at-1.13.18-PM-87f0f02a.png)](/img/migrated/Screenshot-2023-07-11-at-1.13.18-PM-87f0f02a.png)
