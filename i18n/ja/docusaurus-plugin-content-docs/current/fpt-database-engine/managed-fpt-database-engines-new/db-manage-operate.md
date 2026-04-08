---
id: "db-manage-operate"
title: "データベースのプロビジョニングと運用"
description: "データベースのプロビジョニングと運用機能グループにより、ユーザーはFPT Database Engine環境でデータベースをプロビジョニング、設定、運用、削除できます。"
sidebar_label: "データベースのプロビジョニングと運用"
sidebar_position: 19
---

# データベースのプロビジョニングと運用

**データベースのプロビジョニングと運用**機能グループにより、ユーザーはFPT Database Engine環境でデータベースをプロビジョニング、設定、運用、削除できます。

このグループの操作はデータベースリソースレベルで適用され、対応するIAM権限がユーザーに割り当てられている必要があります。

**前提条件：**

- FPT Database EngineサービスがVPCで有効化されていること。
- ユーザーにデータベース管理と運用の権限を持つロールが割り当てられていること。

**必要な権限：**

| 権限名 | 操作種別 | 説明 |
| --- | --- | --- |
| manageDatabase:List | 閲覧 | データベース一覧を表示する権限。 |
| manageDatabase:Create | 作成 | 新しいデータベースを作成する権限。 |
| manageDatabase:View | 閲覧 | データベースの詳細情報を表示する権限。 |
| manageDatabase:Management | 編集 | データベースを操作する権限：起動、停止、再起動。 |
| FDE:hide_admin_pw | 閲覧 | データベース管理者パスワードの表示をブロックする権限。 |
| manageDatabase:Delete | 削除 | データベースを削除する権限。 |

データベースを管理・運用するには、以下のセクションの詳細な手順をご参照ください。

- [データベース一覧の表示](/ja/docs/fpt-database-engine/managed-fpt-database-engines-new/)/：アクセス権限のあるデータベースの一覧（ステータス、設定、重要情報を含む）を表示します。
- [データベースの作成](/ja/docs/fpt-database-engine/managed-fpt-database-engines-new/)/：エンジン、バージョン、フレーバー、その他の必要な設定を選択して新しいデータベースをプロビジョニングします。
- [データベースへの接続](/ja/docs/fpt-database-engine/managed-fpt-database-engines-new/)/：アプリケーションやクライアントツールからデータベースへの接続情報の取得方法と接続方法を学びます。
- [データベース運用](/ja/docs/fpt-database-engine/managed-fpt-database-engines-new/)/：起動、停止、再起動、設定管理、監視などの一般的な運用タスクを実行します。
- 「データベースバージョンのアップグレード」：新機能、パフォーマンス改善、セキュリティパッチを利用するためにデータベースエンジンバージョンをアップグレードします。
