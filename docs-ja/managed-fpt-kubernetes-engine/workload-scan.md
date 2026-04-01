---
id: "tinh-nang-workload-scan"
title: "Managed Kubernetes Cluster のワークロードスキャン機能"
description: "FPT Cloud Managed Kubernetes Cluster のワークロードセキュリティスキャン機能について説明します。"
sidebar_label: "ワークロードスキャン機能"
sidebar_position: 32
---

# Managed Kubernetes Cluster のワークロードスキャン機能

## Workload Security 機能の概要

### 1.1. Configuration Auditing の概要

Kubernetes 環境内でコンテナ化されたワークロードをデプロイすると、image、container、control plane、data plane に関連する多くの設定選択に直面します。不適切な設定は潜在的なセキュリティリスクを生み出します。DevOps チームとプラットフォームオーナーは、設定強化基準に基づいてツール、ワークロード、インフラストラクチャを継続的に評価し、違反を修正できる必要があります。

### 1.2. Vulnerability Report

Vulnerability Report は、指定された Kubernetes ワークロードのコンテナ image で見つかった最新の脆弱性を提供します。OS パッケージとアプリケーションの脆弱性のリスト、および深刻度（Severity）でグループ化されたサマリーが含まれています。

各 namespace に対応する Vulnerability Report があり、その namespace 内のワークロード image のスキャン結果を保存します。

レポートには以下のフィールドが含まれます。
- **namespace**: K8s ワークロード内のコンテナ image をスキャンするために使用される namespace
- **summary**: スキャンレポートの結果サマリー
  - criticalCount: 重大度の高い脆弱性の数
  - highCount: 高度な脆弱性の数
  - lowCount: 低度な脆弱性の数
  - unknownCount: 評価不能な脆弱性の数
- **vulnerabilities**: 各脆弱性の詳細
  - ID
  - Severity: 脆弱性の緊急度（Critical、High、Low、Unknown）
  - Title: 脆弱性の名前
  - PrimaryLink: 脆弱性の詳細説明へのリンク
  - Score: CVE（Common Vulnerabilities and Exposure）スコア（Severity の判定基準）
    - 0 → Unknown
    - 0.1 - 3.9 → Low
    - 4.0 - 6.9 → Medium
    - 7.0 - 8.9 → High
    - 9.0 - 10.0 → Critical
  - Namespace

### 1.3. RBAC Assessment Report

RbacAssessmentReport は、Trivy などの設定監査ツールが Kubernetes の RBAC 評価に対して実行したチェックを表します。例えば、特定の Role がすべてのグループに secrets へのアクセスを許可していないことを確認します。

各レポートは基盤となる Kubernetes オブジェクトによって所有され、同じ namespace に保存されます。

レポートには以下のフィールドが含まれます。
- **namespace**: K8s ワークロード内の role をスキャンするために使用される namespace
- **summary**: スキャンレポートの結果サマリー
  - criticalCount: 重大度の高い脆弱性の数
  - highCount: 高度な脆弱性の数
  - mediumCount: 中度な脆弱性の数
  - lowCount: 低度な脆弱性の数

### 1.4. Cluster RBAC Assessment Report

RBAC Assessment Report が同じ namespace 内の Role の権限をチェックするのに対し、Cluster RBAC Assessment Report はすべての namespace にまたがる Role の集計です。

### 1.5. Config Audit Report

ConfigAuditReport は、Trivy が各 Kubernetes オブジェクトの設定に対して実行したチェックを表します。例えば、container image が non-root ユーザーとして実行されているか、コンテナに resource request や limits が設定されているかどうかを確認します。チェックは K8s ワークロードと namespace 内の他のリソース（service、configmap、role、rolebinding など）に関連する場合があります。

レポートには以下のフィールドが含まれます。
- **Namespace**: スキャンされた namespace
- **Summary**:
  - CriticalCount: 重大度の高い脆弱性の数
  - HighCount: 高度な脆弱性の数
  - LowCount: 低度な脆弱性の数
  - MediumCount: 中度な脆弱性の数

### 1.6. Cluster Config Audit Report

Config Audit Report が同じ namespace 内の設定をチェックするのに対し、Cluster Config Audit Report はすべての namespace にまたがる設定の集計です。

### 1.7. Cluster Infra Assessment Report

Cluster Infra Assessment Report は、K8s クラスターの管理部分（etcd、apiserver、scheduler、controller-manager など）の重要な設定をチェックします。

## Unify Portal での機能の使い方

**注意:** Managed Kubernetes Cluster のセキュリティ強化機能セットは、クラスターが正常に作成された後（Succeeded（Running）状態）に統合されます。

### 2.1. Workload Security 機能の有効化

FPT Cloud Portal（console.fptcloud.com）にアクセスし、Kubernetes メニューを選択してベンチマーク対象のクラスターをクリックし、**Security** タブに移動して **Workload Security** タブを選択して有効化します。

[![](/img/migrated/Picture1-9-6a8d3837.png)](/img/migrated/Picture1-9-6a8d3837.png)

_図 1. Workload Scan サービスの有効化_

有効化ボタンをクリックすると、スキャンする namespace、レポートの TTL（Time-to-live）、Portal に表示するレポートの種類を選択するフォームが表示されます。

[![](/img/migrated/Picture2-7-daa01862.png)](/img/migrated/Picture2-7-daa01862.png)

_図 2. 機能有効化後の設定選択フォーム_

[![](/img/migrated/Picture3-7-19c4f9df.png)](/img/migrated/Picture3-7-19c4f9df.png)

_図 3. namespace の選択_

[![](/img/migrated/Picture4-6-e8ea8ab0.png)](/img/migrated/Picture4-6-e8ea8ab0.png)

_図 4. スキャンして Portal に表示するレポートの種類の選択_

[![](/img/migrated/Picture5-6-f73e06e2.png)](/img/migrated/Picture5-6-f73e06e2.png)

_図 5. TTL 期間の選択（デフォルト 30 分）_

Workload ジョブが正常に実行されると、詳細な結果が表示されます。ユーザーはワークロードを再実行して最新の結果に更新できます。

[![](/img/migrated/Picture6-6-299846cc.png)](/img/migrated/Picture6-6-299846cc.png)

_図 6. Cluster RBAC Assessment Report の表示画面_

[![](/img/migrated/Picture7-6-fb4792ac.png)](/img/migrated/Picture7-6-fb4792ac.png)

_図 7. Config Audit Report の表示画面_

[![](/img/migrated/Picture8-5-c87e6156.png)](/img/migrated/Picture8-5-c87e6156.png)

_図 8. RBAC Assessment Report の表示画面_

[![](/img/migrated/Picture9-4-97d3126a.png)](/img/migrated/Picture9-4-97d3126a.png)

_図 9. Vulnerability Report の表示画面_

[![](/img/migrated/Picture10-4-d3703386.png)](/img/migrated/Picture10-4-d3703386.png)

_図 10. Cluster Infra Assessment Report の表示画面_

### 2.2. Workload Security 機能の無効化

FPT Cloud Portal（console.fptcloud.com）にアクセスし、Kubernetes メニューを選択してベンチマーク対象のクラスターをクリックし、**Security** タブに移動して **Workload Security** タブを選択し、サービスを無効化する確認を実行します。

[![](/img/migrated/Picture11-3-44b70f69.png)](/img/migrated/Picture11-3-44b70f69.png)
