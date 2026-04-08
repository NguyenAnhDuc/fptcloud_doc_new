---
id: "Initial Setup"
title: "初期設定"
description: "FPT Cloud VAを初めて使用する前にサービスを登録してセットアップする手順。"
sidebar_label: "初期設定"
sidebar_position: 1
---

# 初期設定

## FPT Portalへのログイン

FPT Portalにログインするには、ポータルにアクセスしてFPT Cloudアカウントの認証情報でサインインしてください。VAサービス用の正しいテナントを選択してください。

FPT Cloudアカウントをお持ちでない場合は、[https://fptcloud.com/](https://fptcloud.com/) にアクセスし、**Sign Up** をクリックして画面の指示に従ってください。サポートチームがご連絡してアカウントの確認と作成を行います。

詳細が不明な場合や、3回試行後にシステムがエラーを返す場合は、サポートチームにお問い合わせください。

## サービスの登録とクォータの確認

**FPT Vulnerability Assessment** を使用するには、[https://fptcloud.com/lien-he/](https://fptcloud.com/lien-he/) でサポートチームにお問い合わせください。必要な情報を提供すると、**FPT Portal** アカウントで **FPT Vulnerability Assessment** 管理機能が有効になります。

登録後、**Cloud VA** サービスがポータルメニューに表示されます。

サービスインターフェースには2つの主要セクションがあります：

- **General information**：クォータ情報、スキャンステータス、および修正が必要なセキュリティ脆弱性のサマリー。
  - **Package information**：
    - **Concurrent scan**：ご利用のパッケージで許可されている同時スキャン数。
    - **Remaining scan**：パッケージの残りスキャン数。月次パッケージの場合、残りスキャン数は無制限です。
  - **Service usage**：過去のスキャン結果のサマリー。
  - **Vulnerabilities**：すべてのスキャンターゲットで検出された脆弱性の合計数。
- **List target**：作成済みのスキャンターゲット一覧。

:::note
テナントがサービスへのアクセス権を付与されていない場合、**You do not have sufficient permissions to view this page!** というメッセージが表示されます。クォータが割り当てられている正しいテナントを選択してください。
:::
