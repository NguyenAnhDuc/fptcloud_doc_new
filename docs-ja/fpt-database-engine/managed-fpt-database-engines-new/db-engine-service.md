---
id: "db-engine-service"
title: "FPT Database Engineサービス管理"
description: "FPT Database Engineサービス管理グループは、FPT Cloud環境でのデータベースサービスの可用性を制御する重要な役割を担います。"
sidebar_label: "FPT Database Engineサービス管理"
sidebar_position: 16
---

# FPT Database Engineサービス管理

**FPT Database Engineサービス管理**機能グループは、FPT Cloud環境でのデータベースサービスの可用性を制御する重要な役割を担い、管理者がVPCの範囲内でFPT Database Engineサービスを有効化（アクティベート）または無効化（デアクティベート）できるようにします。このグループの操作はデータベースの全体的な可用性に影響するため、Tenant AdminやCloud Platform Adminなどの高レベルの管理ロールにのみ付与すべきです。適切な権限割り当てにより、DBaaSシステムの安全性、安定性、コンプライアンスを確保できます。

**必要な権限：**

| 権限名 | 操作種別 | 説明 |
| --- | --- | --- |
| manageDatabase:ProvisionBackend | 作成 | VPC内でFPT Database Engineサービスを有効化（アクティベート）する権限。 |
| manageDatabase:DeactiveBackend | 削除 | VPC内でFPT Database Engineサービスを無効化（デアクティベート）する権限。 |

**FPT Database Engineサービスの有効化／無効化：**

FPT Database Engineサービスを管理するには、[FPT Database Engineの有効化](/docs/ja/fpt-database-engine/managed-fpt-database-engines-new/)/および[FPT Database Engineの無効化](/docs/ja/fpt-database-engine/managed-fpt-database-engines-new/)/セクションの詳細な手順をご参照ください。
