---
id: "tinh-nang-tang-cuong-bao-mat-mfke"
title: "M-FKE のセキュリティ強化機能"
description: "FPT Cloud Managed Kubernetes Engine（M-FKE）のセキュリティ強化機能の概要を説明します。"
sidebar_label: "M-FKE のセキュリティ強化機能"
sidebar_position: 1
---

# M-FKE のセキュリティ強化機能

FPT Cloud Managed Kubernetes Engine（M-FKE）は、クラスターのセキュリティを強化するための複数の機能を提供しています。

以下のセキュリティ機能が利用可能です。

- **[Benchmark Security](./benchmark-cluster.md)**: CIS（Center for Internet Security）の標準に基づいて、worker node の kubelet 設定をベンチマークする機能です。
- **[Runtime Security](./runtime-security.md)**: Falco を使用して K8s クラスター内の異常な動作をリアルタイムで検出する機能です。Telegram または Gmail でアラートを受け取ることができます。
- **[Workload Scan](./workload-scan.md)**: Trivy を使用してコンテナ image の脆弱性スキャン、RBAC 設定の評価、設定監査レポートを生成する機能です。
- **[Audit Log](./audit-log.md)**: kube-apiserver に送信されたすべての API リクエストと操作を記録し、セキュリティ分析とコンプライアンス対応をサポートする機能です。

**注意:** これらのセキュリティ強化機能はすべて、クラスターが正常に作成された後（Succeeded（Running）状態）に利用可能になります。
