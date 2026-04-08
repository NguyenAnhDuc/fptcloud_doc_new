---
id: "iam"
title: "FPT Database Engineサービスアクセス権限"
description: "FPT CloudはIAMモジュールを使用して、誰がどのリソースでどのアクションを実行できるかを制御します。"
sidebar_label: "FPT Database Engineサービスアクセス権限"
sidebar_position: 12
---

# FPT Database Engineサービスアクセス権限

### アイデンティティ＆アクセス管理（IAM）の概要

クラウド環境でのセキュリティ、責任分担、コンプライアンスを確保するため、FPT CloudはIAMモジュールを使用して、誰がどのリソースでどのアクションを実行できるかを制御します。

IAMはFPT Cloud Portal内の複数のユーザー、グループ、DBaaSコンポーネントに対するアクセス権限の管理を可能にし、テナントとVPCの範囲内でUser Groupを通じてユーザーにRoleを割り当てることで最小権限の原則を強制します。

**_最小権限の原則_**：タスクを完了するために必要な最小限の権限のみを付与します。例：ログの閲覧のみが必要な場合、設定や削除の権限を付与しないでください。

### IAMの主要コンポーネント

| コンポーネント | 説明 |
| --- | --- |
| Role | ユーザーがDBaaSリソースに対して実行できる操作を定義する権限のセット。 |
| Permission | 閲覧、作成、編集、削除などの特定のアクションを許可する個別の権限。 |
| User Group | 同じロールとアクセス範囲（テナント/VPC）を共有するユーザーのグループ。 |
| IAM User | テナントに追加され、Group/Roleを通じて権限が付与される個別のアイデンティティ。 |

### FPT Database Engineサービスの権限モデル

データベースのプロビジョニング、運用、管理操作および関連サービスを実行するには、ユーザーに適切なIAM権限が付与されている必要があります。FPT Database Engineサービスのすべての操作は対応する権限によって制御されます。必要な権限が付与されていない場合、その操作は利用できません。

FPT Database Engineサービスの権限は以下の表に示すように、業務/機能グループ別に分類されています。

**1. FDE Database Engineサービス管理権限**

| 権限名 | 操作種別 | 説明 |
| --- | --- | --- |
| manageDatabase:ProvisionBackend | 作成 | VPC内でFPT Database Engineサービスを有効化（アクティベート）する権限。 |
| manageDatabase:DeactiveBackend | 削除 | VPC内でFPT Database Engineサービスを無効化（デアクティベート）する権限。 |

**2. データベース管理権限**

| 権限名 | 操作種別 | 説明 |
| --- | --- | --- |
| manageDatabase:List | 閲覧 | データベース一覧を表示する権限。 |
| manageDatabase:Create | 作成 | 新しいデータベースを作成する権限。 |
| manageDatabase:View | 閲覧 | データベースの詳細情報を表示する権限。 |
| manageDatabase:Management | 編集 | データベースを操作する権限：起動、停止、再起動。 |
| manageDatabase:UpdateResource | 編集 | データベースリソース（CPU、RAM、ストレージなど）を更新する権限。 |
| manageDatabase:Configuration | 編集 | データベース設定（パラメーター、スケーリング設定など）を変更する権限。 |
| FDE:hide_admin_pw | 閲覧 | データベース管理者パスワードの表示をブロックする権限。 |
| manageDatabase:Delete | 削除 | データベースを削除する権限。 |

**3. バックアップ＆リストア権限**

| 権限名 | 操作種別 | 説明 |
| --- | --- | --- |
| manageDatabase:ListBackup | 閲覧 | データベースのバックアップ情報を表示する権限。 |
| manageDatabase:EnableBackup | 作成 | データベースのバックアップ＆リストア機能を有効化する権限。 |
| manageDatabase:DeleteBackup | 編集 | データベースのバックアップ＆リストア機能を無効化する権限。 |
| manageDatabase:CreateJobBackup | 作成 | データベースのバックアップジョブを作成する権限。 |
| manageDatabase:ViewJobBackup | 閲覧 | バックアップジョブの詳細を表示する権限。 |
| manageDatabase:RunNowJobBackup | 作成 | データベースのバックアップスナップショットを手動作成する権限。 |
| manageDatabase:EditJobBackup | 編集 | バックアップジョブを編集する権限。 |
| manageDatabase:DeleteJobBackup | 削除 | バックアップジョブを削除する権限。 |
| manageDatabase:ListRestore | 閲覧 | リストア可能なバックアップの一覧を表示する権限。 |
| manageDatabase:Restore | 作成 | バックアップからデータベースを復元、または特定の時点に復元する権限。 |

**4. DB Proxy管理権限**

| 権限名 | 操作種別 | 説明 |
| --- | --- | --- |
| manageDatabase:ListProxy | 閲覧 | データベースのDB Proxy一覧を表示する権限。 |
| manageDatabase:CreateProxy | 作成 | データベースのDB Proxyを作成する権限。 |
| manageDatabase:DeleteProxy | 削除 | データベースのDB Proxyを削除する権限。 |

**5. 通知権限**

| 権限名 | 操作種別 | 説明 |
| --- | --- | --- |
| manageDatabase:ListNotification | 閲覧 | データベースの通知受信設定を表示する権限。 |
| manageDatabase:CreateNotification | 作成 | データベースのシステム通知受信を有効化する権限。 |
| manageDatabase:DeleteNotification | 削除 | データベースのシステム通知受信を無効化する権限。 |

**6. 監視権限**

| 権限名 | 操作種別 | 説明 |
| --- | --- | --- |
| manageDatabase:Monitor | 閲覧 | データベースのパフォーマンスと状態を監視する権限。 |

**7. レポート権限**

| 権限名 | 操作種別 | 説明 |
| --- | --- | --- |
| manageDatabase:ReportConfig | 編集 | データベースアクティビティレポートの受信スケジュールを設定する権限。 |

### FPT Database Engineサービスのアクセス権限の設定

アクセス権限の設定とユーザーグループの宣言については、[ロール管理](/ja/docs/fpt-database-engine/managed-fpt-database-engines-new/)/および[ユーザーグループ管理](/ja/docs/fpt-database-engine/managed-fpt-database-engines-new/)/セクションの詳細をご参照ください。
