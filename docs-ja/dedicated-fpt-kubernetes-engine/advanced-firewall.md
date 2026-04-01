---
id: "advanced-firewall"
title: "DFKE Advanced Firewall"
description: "Firewall 統合 Kubernetes 製品の概要と設定方法。"
sidebar_label: "Advanced Firewall"
sidebar_position: 24
---

# DFKE Advanced Firewall

## 1. Firewall 統合 Kubernetes 製品の概要

Firewall 統合 Kubernetes 製品は FPT Cloud の基本 Kubernetes 製品と異なり、Tenant の Gateway の前段に Advanced Firewall を 1 台配置します。Advanced Firewall は Kubernetes cluster のセキュリティルール（Allow、Drop）および NAT ルール（DNAT、SNAT）の保護と設定を担います。

主要コンポーネント:
- Advanced Firewall（例: Checkpoint）
- Gateway（Internet Gateway、Firewall L4）
- Load balancer
- Kubernetes cluster: Master node（API、ETCD）、Worker node（App と Service）

[![file](/img/migrated/image-1691469857854-05b04fb7.png)](/img/migrated/image-1691469857854-05b04fb7.png)

## 2. Advanced Firewall における Kubernetes cluster の必要ルール

Kubernetes node へのトラフィックフロー:
[![file](/img/migrated/image-1691469894054-7f2f9cab.png)](/img/migrated/image-1691469894054-7f2f9cab.png)

:::note
- Kubernetes cluster のすべてのインバウンドおよびアウトバウンドルールは Advanced Firewall 上で設定します。
- Kubernetes cluster のすべての NAT ルールは Advanced Firewall 上で設定します。
- Public IP は Advanced Firewall 上に配置します。
:::

Advanced Firewall 上の Kubernetes cluster 向け Firewall ルール計画表:
[![file](/img/migrated/image-1691480281087-05f96745.png)](/img/migrated/image-1691480281087-05f96745.png)

Advanced Firewall 上の Kubernetes cluster 向け NAT ルール計画表:
[![file](/img/migrated/image-1691480310854-7798d361.png)](/img/migrated/image-1691480310854-7798d361.png)

Gateway にも Firewall ルールと NAT ルールが存在し、Gateway から Firewall へのトラフィック接続を確保します。これらのデフォルトルールは自動的に作成されます。必要に応じてアプリケーション用のルールを作成してください（オプション）。

## 3. Firewall 統合 Kubernetes cluster の作成

**要件:**
- CPU、RAM、Storage、Instance クォータが希望する Kubernetes cluster 構成に十分であること。
- Network subnet が 1 つ: Kubernetes Nodes 用ネットワーク（Static IP Pool が必要な subnet）。この subnet は、外部から Firewall、Gateway を経由して Kubernetes Node まで接続するためのルートを設定できるよう、詳細に計画・設計する必要があります。
- Firewall の IP 情報: Public IP 1 つと Firewall の Private IP 1 つの情報が必要です。
- Gateway の IP 情報: Firewall から Gateway へのルートを設定するために使用する Private IP 1 つ。

**作成手順:**

1. FPT Cloud Portal から Kubernetes を選択します。**Dedicated** タブを選択し、**Create** をクリックします。希望する Kubernetes cluster の情報を入力します。
2. Firewall の設定で **Enable Firewall** にチェックを入れます。
[![file](/img/migrated/image-1691469995783-e893b090.png)](/img/migrated/image-1691469995783-e893b090.png)
3. Firewall の情報（Gateway IP、Checkpoint の Public IP と Private IP）を入力します。
4. **Create** をクリックし、情報を確認して **Agree** をクリックして作成を開始します。
5. Kubernetes cluster の作成状況を確認します。ステータスが Succeeded（Running）になったらアプリケーションのデプロイを開始できます。
