---
id: "db-proxy"
title: "DB Proxyの管理"
description: "Database Proxy（DB Proxy）はアプリケーションとデータベースサーバーの間の中間層で、接続の管理・調整、負荷分散、適切なデータベースノードへの接続ルーティングを行います。"
sidebar_label: "DB Proxyの管理"
sidebar_position: 35
---

# DB Proxyの管理

**Database Proxy**（DB Proxy）はアプリケーションとデータベースサーバーの間の中間層で、アプリケーションのソースコードやデータベース設定を変更することなく、接続の管理・調整、負荷分散、適切なデータベースノードへの接続ルーティングを行い、システムの高可用性を向上させます。

現在、FPT Database Engineは以下のエンジンタイプの**DB Proxyをサポートしています**：**MySQL、PostgreSQL、MariaDB**。ただし、**データベースが高可用性（HA）モードでデプロイされている場合のみ利用可能**です。

FPT Cloud Portalでは、DB Proxy管理機能によりユーザーは以下のことができます。

- DB Proxyの作成と管理。
- DB Proxyの稼働状況の監視。
- Start、Stop、Restart、Resize、Deleteなどの運用操作の実行。
- DB Proxyの詳細な設定とノードの表示。

### 必要な権限

| 権限名 | 操作種別 | 説明 |
| --- | --- | --- |
| manageDatabase:ListProxy | 閲覧 | データベースのDB Proxy一覧を表示する権限。 |
| manageDatabase:CreateProxy | 作成 | データベースのDB Proxyを作成する権限。 |
| manageDatabase:DeleteProxy | 削除 | データベースのDB Proxyを削除する権限。 |

### 1. DB Proxy管理ページへのアクセス

FPT Cloud Portalにログインします。メインメニューから「**Database Platform**」>「**All Databases**」を選択します。管理するデータベースクラスターのIDをクリック > **DB Proxy**タブに切り替えて**DB Proxy管理**ページにアクセスします。

[![](/img/migrated/db-proxy-list-scaled-ef82702b.png)](/img/migrated/db-proxy-list-scaled-ef82702b.png)

**注意**：**DB Proxy**タブはデータベースが高可用性オプションで作成され、かつデータベースエンジンがサポートされている場合にのみ表示されます。

### 2. DB Proxyの作成

**DB Proxy管理**ページで「**Create DB Proxy**」をクリックします。新しいDB Proxy作成ダイアログが次のように表示されます。

[![](/img/migrated/create-db-proxy-scaled-edd86c55.png)](/img/migrated/create-db-proxy-scaled-edd86c55.png)

必要な情報を入力します。

- **DB proxy name**：プロキシの識別名。8〜25文字で、英字、数字、ハイフン（-）のみ使用可能。
- **DB proxy type**：プロキシタイプを選択します。現在FPT Database EngineはHAProxyの1種類のみサポートしています。
- **Storage Policy**：プロキシのストレージパフォーマンス（IOPS）を決定するStorage Policyを選択します。
- **High Availability**：HAモードでDB proxyをデプロイするために有効にします。
- **Flavor**：DB proxyのリソース設定（vCPU、RAM）を選択します。

すべての情報を入力したら**Create DB Proxy**をクリックして初期化を確認します。システムはリソースを確認し、初期化通知を表示し、入力された設定に基づいて新しいプロキシのデプロイを開始します。**DB Proxy管理**画面の一覧の先頭に、作成されたプロキシが「**Processing**」ステータスで表示されます。

初期化プロセスは通常5〜7分かかります。完了すると、プロキシは「**Running**」ステータスに移行し、使用可能になります。

**注意**：初期化プロセスが失敗した場合は、失敗したプロキシを削除して再初期化してください。

### 3. 接続情報の表示

プロキシへの接続情報を表示するには、**DB Proxy管理**ページにアクセスし、プロキシIDを選択して**DB Proxy Detail**ダイアログを開きます。

[![](/img/migrated/view-db-proxy-scaled-1adf11c4.png)](/img/migrated/view-db-proxy-scaled-1adf11c4.png)

**Running**ステータスはDB Proxyが稼働中で接続を受け入れる準備ができていることを示します。プロキシへの接続を確立するには**End Point**の情報を使用します。

### 4. DB Proxyの運用

プロキシのライフサイクル状態に応じて、start、stop、restart、resize、delete操作を実行できます。

**運用操作：**

- **Start**：停止状態のDB Proxyを起動します。操作が実行されると、プロキシのステータスは「Starting」に移行し、準備完了になると「Running」になります。
- **Stop**：実行中のDB Proxyを停止します。停止すると、プロキシはワークロードの処理を一時停止します。ステータスは「Stopping」に移行し、その後「Stopped」になります。この状態では、プロキシ経由の接続が中断されます。
- **Restart**：実行中のプロキシを再起動します。この操作はプロキシを停止して再起動するもので、通常は一時的な問題の解決に使用されます。ステータスは「Restarting」と表示され、完了すると「Running」に戻ります。
- **Resize**：DB ProxyのリソースFavoriteation（Flavor）を変更します。リサイズ中はステータスが「Resizing」に移行し、その後「Running」になります。
- **Delete**：DB Proxyを削除します。この操作は元に戻すことができません。削除が成功すると、プロキシはリストから削除され、関連リソースが解放されます。

**ステータスと利用可能な操作：**

| ステータス | 意味 | 実行可能な操作 |
| --- | --- | --- |
| Processing | プロキシが初期化中です。 | Delete |
| Running | プロキシが正常に動作しています。 | Stop、Restart、Resize、Delete |
| Stopped | プロキシが停止しています。 | Start、Delete |
| Resizing | プロキシのリソースが調整中です。 | Delete |
| Failed | プロキシが不明なエラーに遭遇しています。不要な場合はプロキシを削除してリソースを解放するか、FPTサポートにお問い合わせください。 | Delete |

**運用操作の実行：**

操作を実行するには、**DB Proxy管理**ページを開き、操作対象のプロキシの「**Action**」列にある「⋯」（More actions）アイコンをクリックします。利用可能なアクションの一覧が表示されます。

[![](/img/migrated/db-proxy-action-scaled-af6165d7.png)](/img/migrated/db-proxy-action-scaled-af6165d7.png)

アクションを選択すると、システムは確認ダイアログを表示します。意図しない操作（特に元に戻せない操作）を防ぐため、手動で確認する必要があります。

確認後、システムは約5〜7分でアクションを実行します。この間、プロセスが完了するまでプロキシに対する他の操作は一時的に無効になります。

**ベストプラクティス：**

アプリケーションへの影響を減らすため、オフピーク時間帯にDB Proxyの**Restart**または**Resize**を実行してください。
