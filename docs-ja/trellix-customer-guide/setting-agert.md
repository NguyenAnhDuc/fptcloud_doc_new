---
id: "setting-agert"
title: "agent インストールパッケージの作成と agent のインストール"
description: "Trellix agent インストールパッケージを作成し、Windows、Linux、または macOS サーバーに展開する手順。"
sidebar_label: "agent インストールパッケージの作成"
sidebar_position: 3
---

# agent インストールパッケージの作成と agent のインストール

Agent は保護が必要な各サーバーにインストールするソフトウェアコンポーネントで、Trellix サーバーがリモートでセキュリティポリシーを監視・展開できるようにします。Windows、Linux、macOS をサポートします。

## Windows へのインストール

1. 管理コンソールで **System Tree** > **New System** を選択します。

   [![New System オプションを含む System Tree インターフェース](/img/migrated/image-1765765451271-e55af87a.png)](/img/migrated/image-1765765451271-e55af87a.png)

2. 生成された URL をコピーします。

   [![生成された agent インストール URL](/img/migrated/image-1765765488808-7e2edd82.png)](/img/migrated/image-1765765488808-7e2edd82.png)

   Windows Agent URL の例:
   ```
   https://am.fptcloud.com:8443/ComputerMgmt/agentPackage.get?token=d0ace512f20025972b13c8554162e74fe3d6ecdc
   ```

3. アンチウイルスをインストールするサーバーでブラウザを開き、URL にアクセスして **Install** をクリックします。

   [![Windows 上の Trellix agent インストールページ](/img/migrated/image-1765765515152-5c9a5e0a.png)](/img/migrated/image-1765765515152-5c9a5e0a.png)

4. インストールウィザード（Next / Install）に従い、agent のインストールが完了するまで待ちます。

   [![Windows 上の Trellix agent インストール進行状況](/img/migrated/image-1765765529674-0b2d8afc.png)](/img/migrated/image-1765765529674-0b2d8afc.png)

5. agent のステータスを確認します。タスクバーに Trellix アイコンが表示されない場合は、以下のコマンドを実行し、**Collect and send Props**、**Send Events**、**Check New Policies** をクリックします。

   [![Windows タスクバーの Trellix agent アイコン](/img/migrated/image-1765765546061-9292647f.png)](/img/migrated/image-1765765546061-9292647f.png)

   ```
   "C:\Program Files\McAfee\Agent\cmdagent.exe" -s
   ```

   [![agent 接続確認用の cmdagent インターフェース](/img/migrated/image-1765765560155-94d9fac1.png)](/img/migrated/image-1765765560155-94d9fac1.png)

## Linux へのインストール

1. インストール URL から agent スクリプトをダウンロードします:

   ```
   https://am.fptcloud.com:8443/ComputerMgmt/agentPackage.get?token=e50140e04eea0aa17f171feca9864bf06cedf0f4
   ```

2. ダウンロードしたファイルの名前を変更します:

   ```bash
   mv <ダウンロードしたファイル> trellix.sh
   ```

3. 実行権限を付与してインストーラーを実行します（root 権限が必要）:

   ```bash
   sudo chmod +x ./trellix.sh
   sudo ./trellix.sh -i
   ```

   [![Linux 上の Trellix agent インストールプロセス](/img/migrated/image-1765771828456-7265ceeb.png)](/img/migrated/image-1765771828456-7265ceeb.png)

4. サーバーへの接続を確認します:

   ```bash
   sudo /opt/McAfee/cma/bin/cmdagent -f
   ```

:::note
agent が正常に接続された後、Trellix サーバーは Endpoint Security を即時自動展開し、ENS のアップデートを 12 AM にスケジュールします。これらのタスクはサービス提供前に事前設定されています。[クライアントタスクの管理](./client-task) で確認・カスタマイズできます。
:::
