---
id: "fpt-key-vault"
title: "FPT Key Vault"
description: "FPT Key Vaultサービスのドキュメント"
sidebar_label: "FPT Key Vault"
sidebar_position: 1
draft: true
---

# FPT Key Vault

FPT Key Vaultは、FPT Cloud上でSecretを安全に保存・管理するクラウドサービスです。key/valueペア、SSHキー、証明書など複数の種類のSecretを保存でき、SDKやCLIを通じてアプリケーション、コンテナ、VMと簡単に連携できます。

## FPT Key Vaultドキュメント

FPT Portalを通じたFPT Key Vaultの作成・利用・管理操作について詳しく説明します。

## 機能

- PortalでVault Instanceの作成・管理
- Vault、Secret Engine、Secretの一覧と詳細の表示
- SecretアクセスをコントロールするPolicyの管理
- アプリケーション認証のためのAuth MethodとRoleの管理
- 既存のアプリケーションやシステムとの連携

## リリースノート

### FPT Key Vaultのリリース

FPT CloudはPortalでKey Vaultサービスを正式にリリースしました。お客様はSecretを安全に保存、管理、削除できます。FPT Key VaultはSDKとCLIを通じてアプリケーション、コンテナ、VMと簡単に連携できます。

### FPT Key Vault バージョン 1.1

**新機能:**

- Vault初期化時にプランを選択
- 利用ニーズに合わせてプランのアップグレード・ダウングレード
- システムのリクエスト使用量の監視
- Vault初期化時のHA機能のサポート
- S3への日次Vaultバックアップ
- HANリージョンでのVault作成のサポート
