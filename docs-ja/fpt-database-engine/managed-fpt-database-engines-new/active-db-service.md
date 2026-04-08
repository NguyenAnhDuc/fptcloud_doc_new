---
id: "active-db-service"
title: "FPT Database Engineサービスの有効化"
description: "FPT Database Engineサービスが有効化されていない場合、ユーザーはデータベースを作成または管理することができません。"
sidebar_label: "FPT Database Engineサービスの有効化"
sidebar_position: 17
---

# FPT Database Engineサービスの有効化

FPT Database Engineサービスが有効化されていない場合、ユーザーはデータベースを作成または管理することができません。サービスを有効化すると必要なバックエンドコンポーネントが初期化され、FPT Database Engineが使用可能な状態になります。この操作はVPCごとに1回だけ実行する必要があります。以下の手順に従ってください。

### ステップ1：データベース管理ページへのアクセス

FPT Cloud Portalにログインします。ログイン成功後、メインメニューから**Database Platform** > **All Databases**を選択します。**Database Engine Management**インターフェースが以下のように表示されます。

[![](/img/migrated/active-FDE-scaled-f7b68e15.png)](/img/migrated/active-FDE-scaled-f7b68e15.png)

### ステップ2：FPT Database Engineサービスの有効化

**Database Engine Management**ページで**Activate Service**をクリックしてサービスを有効化します。システムは有効化処理画面に切り替わります。このプロセスには約8〜10分かかる場合があります。

有効化に成功すると、サービスステータスが**Active**と表示され、データベース作成機能が利用可能になります。
