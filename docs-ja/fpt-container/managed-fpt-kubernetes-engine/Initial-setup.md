---
id: "Initial-setup"
title: "初期設定"
description: "FPT Kubernetes Engine を初めて利用する場合は、以下の作業を確認して完了させてください。"
sidebar_label: "初期設定"
sidebar_position: 1
---

# 初期設定

**FPT Kubernetes Engine** を初めて利用する場合は、以下の作業を確認して完了させてください。

### 1. FPT Cloud アカウントを作成して FPT Portal にログインします。

FPT Cloud アカウントを登録するには、公式サイト <https://fptcloud.com/> にアクセスします。
**Sign Up** 機能を選択し、システムの案内に従って情報を入力します。サポートチームがすぐに連絡し、アカウント作成の情報を確認します。
FPT Portal にログインするには、<https://console.fptcloud.com/> にアクセスします。
発行されたアカウントとパスワードでログインした後、正しい Tenant、Region、VPC を選択します。
上記の情報が不明な場合や、3回試行してもシステムがエラーを返す場合は、サポートチームにご連絡ください。

### 2. Static Pool 付き Subnet を作成します。

Kubernetes Cluster は Static Pool オプションが有効になった Subnet でのみ動作します。そのため、以下の手順で Static Pool 付き Subnet を作成する必要があります。

**ステップ 1:** **Network** セクションで **Subnets** タブを選択します。

[![Subnet K8s](/img/migrated/Screenshot-2025-01-10-at-10.35.34-7d3142bd.png)](/img/migrated/Screenshot-2025-01-10-at-10.35.34-7d3142bd.png)

**ステップ 2:** **Subnets Management** ページで **Create Subnet** を選択します。

[![Subnet K8s](/img/migrated/Screenshot-2025-01-10-at-10.39.58-b09ab0a1.png)](/img/migrated/Screenshot-2025-01-10-at-10.39.58-b09ab0a1.png)

**ステップ 3:** 以下の情報を入力します。
  * **Name:** Subnet のわかりやすい名前を入力します。
  * **CIDR:** 有効な **CIDR** を入力します。
  * **Advanced settings** オプションにチェックを入れます。
  * **Static IP Pool:** CIDR から取得した有効な IP 範囲を 1 つ入力します。

**Save** を選択して新しい Subnet を作成します。システムが処理を行い、結果を通知します。

[![Userguide K8s 3](/img/migrated/Initial-setup-3-9bccff9a.png)](/img/migrated/Initial-setup-3-9bccff9a.png)

### 3. FKE サービスの有効化とリソース quota の申請

FPT Cloud を初めて利用する場合、一部のサービスがアカウントで有効になっていない場合があります。サポートチームに連絡し、必要な構成情報を提供してください。RAM・CPU、Storage、Public IP などの必要なリソースが割り当てられ、FKE サービスを利用できるようになります。
