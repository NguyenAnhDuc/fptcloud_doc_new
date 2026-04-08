---
id: "audit-log-vn"
title: "Audit Logs Security 機能の概要"
description: "MFKE の Audit Log Security 機能について説明します。kube-apiserver へのすべての API リクエストと操作を記録します。"
sidebar_label: "Audit Logs Security 機能の概要"
sidebar_position: 5
pagination_next: null
---

# Audit Logs Security 機能の概要

Audit Log は、MFKE 製品の Unify Portal 上でセルフサービスとして提供されるセキュリティ機能グループの一つで、kube-apiserver に送信されたすべての操作と API リクエストを記録します。これにより、どのアクターが何のアクションを実行したか、いつ実行したか、影響を受けたオブジェクト、およびアクションの結果を追跡することができます。

**Audit Log のメリット:**
- Kubernetes クラスターの API サーバーと連携するコンポーネントの動作を監視するのに役立ちます。
- セキュリティ分析と異常な動作の検出機能を提供します。
- インシデントの追跡とコンプライアンス（規制遵守）をサポートします。

**Audit Log の構造には以下の情報が含まれます:**

[![](/img/migrated/Picture1-11-84596edd.png)](/img/migrated/Picture1-11-84596edd.png)

- **Request URL**: kube-apiserver に呼び出された API のパス
- **Audit ID**: 各監査イベントの一意の ID（ログの追跡に使用）
- **Object Reference**: 操作された Kubernetes リソースの情報
  - ApiGroup
  - apiVersion: API バージョン（v1）
  - name: ノードの名前
  - Namespace
  - resource: リソースの種類（nodes）
- **Action**: Kubernetes リソースに対して実行された操作（例: patch/create/delete/update）
- **Username**: アクションを実行したアカウントまたはサービスの名前
- **Request Received**: kube-apiserver によってリクエストが記録された時刻（dd-MM-yyyy HH:mm:ss 形式）
- **Logging Time**: MFKE サービスのログシステムにイベントが記録された時刻。クラスターの kube-apiserver から集中ログシステムへのログ転送処理時間のため、通常 Logging Time は Request Received より遅くなります。

## Unify Portal での機能の使い方

**注意:** Managed Kubernetes Cluster のセキュリティ強化機能セットは、クラスターが正常に作成された後（Succeeded（Running）状態）に統合されます。

### 1. Audit Log Security 機能の有効化

FPT Cloud Portal（console.fptcloud.com）にアクセスし、Kubernetes メニューを選択して監査対象のクラスターをクリックし、**Security** タブに移動して **Audit Log** タブを選択します。

[![](/img/migrated/Picture2-9-37c26cb2.png)](/img/migrated/Picture2-9-37c26cb2.png)

Audit Log タブをクリックすると、画面は自動的にクエリを実行し、直近 1 時間に記録されたすべてのログを表示します。Audit Log の情報は上記のフィールドで表示されます。

[![](/img/migrated/Picture3-9-0344c4e2.png)](/img/migrated/Picture3-9-0344c4e2.png)

### 2. 特定の期間のログを検索する場合

- ステップ 1: 画面右上のタイムピッカーをクリックします。

[![](/img/migrated/Picture4-8-91bc2516.png)](/img/migrated/Picture4-8-91bc2516.png)

- ステップ 2: 表示したいログの期間を入力して **Apply Filter** をクリックします。

[![](/img/migrated/Picture5-8-a1a7d359.png)](/img/migrated/Picture5-8-a1a7d359.png)

システムは選択した期間に記録されたすべてのログを表示し、ログは時系列の降順で並べられます。

[![](/img/migrated/Picture6-8-5d8f452b.png)](/img/migrated/Picture6-8-5d8f452b.png)

**注意:**
- ログのフィルタリング期間（From～To）は最大 3 日間です。
- ログは直近 7 日間保存されます。
