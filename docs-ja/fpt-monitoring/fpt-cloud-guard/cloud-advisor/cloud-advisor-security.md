---
id: "cloud-advisor-security"
title: "セキュリティの問題"
description: "MFAおよびSecurity Groupsを含む、Cloud Advisorのセキュリティ関連の問題に関するガイド。"
sidebar_label: "セキュリティの問題"
sidebar_position: 3
---

# セキュリティの問題

Cloud Advisorは以下のセキュリティ関連の問題を検出します：

## テナントのMFA

- **説明**: このルールはTenant OwnerがMFAを有効にしているか確認します。
- **違反リストに表示される項目**:
  - Tenant owner
  - Email
  - MFA Status: 有効/無効

## すべてのIAMユーザーのMFA有効化

- **説明**: このルールはIAMユーザーがMFAを有効にしているか確認します。
- **違反リストに表示される項目**:
  - IAMユーザー
  - Email
  - MFA Status: 有効/無効

## Security Groups - 特定ポートの無制限アクセス

- **説明**: このルールは特定のポートへの無制限アクセス（0.0.0.0/0）を許可するSecurity Groupを確認します。
- **違反リストに表示される項目**:
  - Project
  - Region
  - VPC
  - Security Group名
  - プロトコル
  - ポート範囲
  - IP範囲
  - 関連付け

## Security Groups - 特定リソースへの特定ポートの無制限アクセス

- **説明**: このルールは特定のリソースへの無制限アクセス（0.0.0.0/0）を許可するSecurity Groupを確認します。
- **違反リストに表示される項目**:
  - Project
  - Region
  - VPC
  - Security Group名
  - プロトコル
  - ポート範囲
  - IP範囲
  - 関連付け
