---
id: "tao-api-gateway"
title: "API Gatewayの作成"
description: "FPT CloudでAPI Gatewayを作成する手順です。"
sidebar_label: "API Gatewayの作成"
sidebar_position: 3
---

# API Gatewayの作成

**API Gateway** を作成するには、以下の手順に従ってください。

**ステップ1:** メニューバーで **Integration** > **API Gateway** を選択します。

**ステップ2:** **Create an API Gateway cluster** をクリックして、**Create API Gateway** 画面を開きます。

**ステップ3:** **Basic Information** セクションに以下を入力します。

- **Name**（必須）: API Gateway名。使用できる文字は小文字a-zと数字0-9のみです。スペースの代わりにハイフン「-」を使用してください。
- **Description**（任意）: 説明。
- **Version**（必須）: バージョンを選択します。
- **Access type**（必須）: PublicまたはPrivateを選択します。

[![画像](/img/migrated/SCR-20250924-nhqw-2c9ba0dd.png)](/img/migrated/SCR-20250924-nhqw-2c9ba0dd.png)

**ステップ4:** **Next Step** をクリックして **Details** 画面に進みます。

以下の情報を入力します。

- **Launch Configuration**
  - **Subnet**（必須）: サブネットを選択します。
  - **Storage policy**（必須）: ストレージポリシーを選択します。
  - **Flavor**（必須）: フレーバーを選択します。
  - **Worker nodes**（必須）: ノード数を入力します（1〜10）。

[![画像](/img/migrated/SCR-20250924-nnrh-2a698b21.png)](/img/migrated/SCR-20250924-nnrh-2a698b21.png)

- **Autoscaling configuration**
  - **Enabled**（必須）: オートスケーリングの有効/無効。デフォルト: Enabled。Disabledの場合、Minimum NodesからMemory scale-out thresholdまでのフィールドは非表示になります。
  - **Minimum Nodes**（必須）: 最小ノード数（1〜10）。Maximum Nodesより小さい値が必要。本番環境では3ノードを推奨。
  - **Maximum Nodes**（必須）: 最大ノード数（1〜10）。Minimum Nodesより大きい値が必要。最大50 VMインスタンス/ノード。
  - **CPU scale-out threshold (%)**（必須）: 平均CPU使用率のしきい値。デフォルト: 80%。
  - **Memory scale-out threshold (%)**（必須）: 平均RAM使用率のしきい値。デフォルト: 80%。

[![画像](/img/migrated/SCR-20250924-nogx-60a8a374.png)](/img/migrated/SCR-20250924-nogx-60a8a374.png)

- **Etcd — Self-managed ETCD**: ETCDを自己管理するか、システム管理のETCDを使用するかを選択します。デフォルト: Unchecked（無効）。
  - **Unchecked** の場合: **ETCD Flavor** を選択してボリュームサイズとデプロイメントを設定します。

[![画像](/img/migrated/SCR-20250924-nonz-76855a0c.png)](/img/migrated/SCR-20250924-nonz-76855a0c.png)

  - **Checked** の場合: ETCDの詳細を手動で入力します。
    - **Hostname**（必須）: DNS名またはIPアドレス。
    - **Port**（必須）: 1〜65535の数値（デフォルト: 2379）。
    - **Prefix**（必須）: API Gateway設定のストレージプレフィックス（デフォルト: /apisix）。
    - **Username**（必須）: SASL_PLAINTEXTまたはSASL_SSLプロトコルの認証アカウント。
    - **Password**（必須）: ETCD認証パスワード。

[![画像](/img/migrated/SCR-20250924-nopt-0a88606a.png)](/img/migrated/SCR-20250924-nopt-0a88606a.png)

- **Load balancer configuration**
  - **Load Balancer Size**（必須）: アプリケーションのトラフィックに適したLoadBalancerフレーバーを選択します。

[![画像](/img/migrated/SCR-20250924-noyr-4f810109.png)](/img/migrated/SCR-20250924-noyr-4f810109.png)

- **Endpoint**
  - **Domain**（必須）: 初期化後のAPI Gatewayサービスへの接続アドレス。使用可能文字: a-z、A-Z、0-9、ハイフン（-）、ピリオド（.）。最大100文字。例: domain-name.com。
  - **CA bundle**（必須）: PEM形式のCA証明書チェーン。`-----BEGIN CERTIFICATE-----` で始まる必要があります。
  - **Private key**（必須）: PEM形式の秘密鍵。`-----BEGIN PRIVATE KEY-----` で始まる必要があります。

[![画像](/img/migrated/SCR-20250924-npeh-f148e5c5.png)](/img/migrated/SCR-20250924-npeh-f148e5c5.png)

**ステップ5:** **Next Step** をクリックして **Service Configuration** 画面に進みます。

- **Dashboard Configuration**
  - **Enable Dashboard**: Dashboardをインストールするかどうかを選択します。デフォルト: Unchecked。
  - **Dashboard Flavor**（必須）: Dashboard インストール時のクラスターサイズ。
  - **Domain**（必須）: APISIX Dashboardへのアクセスアドレス。例: dashboard-api.example.com。
  - **CA bundle**（必須）: PEM形式のCA証明書チェーン。
  - **Private key**（必須）: PEM形式の秘密鍵。

[![画像](/img/migrated/SCR-20250924-njbo-8895a431.png)](/img/migrated/SCR-20250924-njbo-8895a431.png)

**ステップ6:** **Next Step** をクリックして **Review and Create** 画面に進みます。

[![画像](/img/migrated/z7045251311917_2c4a0a33e279bb20581a482a6-ec3afc93.jpg)](/img/migrated/z7045251311917_2c4a0a33e279bb20581a482a6-ec3afc93.jpg)

**ステップ7:** すべての情報を確認し、**Create** をクリックして **API Gateway** の作成を完了します。

**API Gateway** の **Status** が **Healthy** になれば作成完了です（約25分かかります）。
