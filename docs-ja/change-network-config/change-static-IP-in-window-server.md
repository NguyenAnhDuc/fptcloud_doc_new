---
id: "change-static-IP-in-window-server"
title: "Windows Serverで静的IPを設定する"
description: "FPT CloudでNIC設定を変更した後、Windows Serverで静的IPアドレスを変更する方法です。"
sidebar_label: "Windows Serverで静的IPを設定する"
sidebar_position: 4
---

# Windows Serverで静的IPを設定する

## ステップ1: 現在の状態を確認する

NICを編集した後、NICのIPは `132.0.0.182` です。

[![FPT Cloud PortalのWindows 2012 VMのNIC情報](/img/migrated/NIC-VM-window-2012-1024x372-cdd0fc49.png)](/img/migrated/NIC-VM-window-2012-1024x372-cdd0fc49.png)

1. **Console** を開き、インスタンスにサインインします。
2. **PowerShell** または **コマンドプロンプト** を開き、`ipconfig` と入力して **Enter** を押し、現在のIPアドレスを確認します。

[![Windows VMのPowerShellでのipconfigコマンドの出力](/img/migrated/NIC-VM-window-power-shell-1b543bec.png)](/img/migrated/NIC-VM-window-power-shell-1b543bec.png)

## ステップ2: ネットワーク接続を開く

**Win + R** を押し、`ncpa.cpl` と入力して **Enter** を押します。

[![ncpa.cplコマンドでネットワーク接続を開くRunダイアログ](/img/migrated/NIC-VM-window-run-ncpa.cpl_-4147bd62.png)](/img/migrated/NIC-VM-window-run-ncpa.cpl_-4147bd62.png)

## ステップ3: ネットワークアダプターのプロパティを開く

変更するネットワークアダプターを右クリックし、**プロパティ** を選択します。

[![Propertiesオプションを示す右クリックメニューのあるネットワークアダプターリスト](/img/migrated/NIC-VM-window-network-setting-ee7e82cd.png)](/img/migrated/NIC-VM-window-network-setting-ee7e82cd.png)

## ステップ4: IP設定を更新する

**インターネット プロトコル バージョン 4 (TCP/IPv4)** → **プロパティ** を選択します。新しいIPアドレス、サブネットマスク、デフォルトゲートウェイ、DNSサーバーを入力します。**OK** をクリックして保存します。

[![新しい静的IP設定が入力されたIPv4設定フォーム](/img/migrated/NIC-VM-window-network-setting-config-IPv-ab0305c9.png)](/img/migrated/NIC-VM-window-network-setting-config-IPv-ab0305c9.png)

## ステップ5: 確認と接続テスト

**PowerShell** または **コマンドプロンプト** を再度開き、新しいIP設定を確認してから、pingコマンドで接続を確認します。

[![PowerShellでの新しいIP設定の確認とpingテストの結果](/img/migrated/NIC-VM-window-network-setting-config-IPv-9b70a68d.png)](/img/migrated/NIC-VM-window-network-setting-config-IPv-9b70a68d.png)
