---
id: "Initial-setup"
title: "初期設定"
description: "Managed GPU Clusterを初めてご利用の場合は、まず以下の手順を確認・完了してください。"
sidebar_label: "初期設定"
sidebar_position: 2
---

# 初期設定

Managed GPU Clusterを初めてご利用の場合は、まず以下の手順を確認・完了してください。

### 1. FPT Cloudアカウントを作成してFPT Portalにログインする

FPT Cloudアカウントを登録するには、[こちら](https://fptcloud.com/)のホームページにアクセスしてください。

**Sign Up** を選択し、システムの指示に従って情報を入力してください。その後、サポートチームがご連絡し、アカウント作成に必要な情報を確認します。

FPT Portalにログインするには、[console.fptcloud.com](https://console.fptcloud.com/) にアクセスしてください。

発行されたアカウントとパスワードでログインした後、正しいTenant、Region、VPCを選択してください。

上記の情報に不明な点がある場合、または3回試行後にシステムがエラーを返す場合は、すぐにサポートチームにご連絡ください。

**注意**: AI Factoryプロダクトを使用するには、アカウントで2段階認証（MFA）が有効になっている必要があります。

### 2. Managed GPU ClusterのBare Metal GPU Server用サブネットを作成する

Managed GPU Clusterを作成するには、まずBare Metal GPU Server上にサブネット範囲が必要です。これらのマシンはK8sクラスターのWorkerノードとして機能します。Bare Metal GPU WorkerのIPv4アドレスはこのサブネットから動的に割り当てられます。

**手順1:** [AI Infrastructure] > [Subnets] > [Create Subnet] を選択します。

[![](/img/migrated/1-1-4f1767cc.png)](/img/migrated/1-1-4f1767cc.png)

**手順2:** サブネットに付ける名前を入力します。

[![](/img/migrated/2-1-e7e458f5.png)](/img/migrated/2-1-e7e458f5.png)

**手順3:** サブネットに対応するNetwork ACLの名前を入力します。

**手順4:** [Create Subnet] をクリックしてBare Metal GPU用サブネットの作成を完了します。

**注意**: サブネットのデフォルトで作成されるNetwork ACLは、すべてのインバウンドトラフィックをブロックし、すべてのアウトバウンドトラフィックを許可します。Managed GPU ClusterでLoad Balancerを使用するには、接続を許可するためにLoad Balancerサブネット範囲に適切なルールを追加する必要があります。

### 3. Load Balancer用サブネットを作成する

Managed GPU ClusterはStatic Poolオプションが有効なサブネットでのみ動作します。そのため、以下の手順でStatic Poolを持つサブネットを作成する必要があります。

**手順1:** **Network** セクションで **Subnets** タブを選択します。

[![Subnet K8s](/img/migrated/Screenshot-2025-01-10-at-10.35.34-7d3142bd.png)](/img/migrated/Screenshot-2025-01-10-at-10.35.34-7d3142bd.png)

**手順2:** **Subnets Management** ページで **Create Subnet** を選択します。

[![Subnet K8s](/img/migrated/Screenshot-2025-01-10-at-10.39.58-b09ab0a1.png)](/img/migrated/Screenshot-2025-01-10-at-10.39.58-b09ab0a1.png)

**手順3:** 以下の情報を入力します。

- **Name:** サブネットのわかりやすい名前を入力します。
- **CIDR:** 有効なCIDRを入力します。
- **Advanced settings** オプションにチェックを入れます。
- **Static IP Pool:** CIDRから取得した有効なIPレンジを入力します。

**Save** をクリックして新しいサブネットを作成します。システムが処理を行い、結果を表示します。

[![Userguide K8s 3](/img/migrated/Initial-setup-3-9bccff9a.png)](/img/migrated/Initial-setup-3-9bccff9a.png)

### 4. Managed GPU Clusterサービスの有効化とリソースクォータの割り当てを申請する

FPT Cloudを初めてご利用の場合、一部のサービスがアカウントで有効になっていない場合があります。サポートチームにご連絡いただき、必要なサービスと構成の詳細をお伝えください。Managed GPU Clusterサービスを開始するために必要なRAM、CPU、Storage、Public IPなどのリソースを割り当てます。

サポートチームへのお問い合わせ：

**ホットライン**: 1900638399

**メール**: support@fptcloud.com
