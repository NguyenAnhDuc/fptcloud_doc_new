---
id: "change-network-config"
title: "Network Configを変更する"
description: "NICカードの変更後にネットワーク設定ファイルを再構成します。"
sidebar_label: "Network Configを変更する"
sidebar_position: 65
pagination_next: null
---

# Network Configを変更する

NICカードの追加、IP addressの変更、MACアドレスのリセットなどの変更を行った後、変更を正しく適用するために仮想マシンのOS内のネットワーク設定ファイルを更新する必要がある場合があります。

## ネットワーク設定の更新が必要な場合

以下の操作を行った場合にネットワーク設定ファイルを更新してください。

- 仮想マシンに新しいNICカードを追加した場合。
- NICカードの静的IP addressを変更した場合。
- NICカードのMACアドレスをリセットした場合。
- カードをPrimaryに変換した場合。

## LinuxでNetwork Configを更新する

1. SSHで仮想マシンに接続します。
2. ディストリビューションに応じたネットワーク設定ファイルを開きます。
   - **Ubuntu/Debian**: `/etc/netplan/*.yaml`
   - **CentOS/RHEL**: `/etc/sysconfig/network-scripts/ifcfg-<interface>`
3. 新しいNIC設定に合わせてIP address、サブネットマスク、ゲートウェイ、DNSの設定を更新します。
4. 変更を適用します。
   - **Ubuntu/Debian**: `sudo netplan apply`
   - **CentOS/RHEL**: `sudo systemctl restart network`

## WindowsでNetwork Configを更新する

1. RDPで仮想マシンに接続します。
2. **コントロールパネル** → **ネットワークと共有センター** → **アダプターの設定の変更** を開きます。
3. ネットワークアダプターを右クリックし、**プロパティ** を選択します。
4. **インターネット プロトコル バージョン 4 (TCP/IP)** を選択し、**プロパティ** をクリックします。
5. IP address、サブネットマスク、ゲートウェイ、DNSサーバーの設定を更新します。
6. **OK** をクリックして適用します。

:::tip
ネットワーク設定を更新した後、ゲートウェイまたは外部アドレスへのpingで接続性を確認してください。
:::
