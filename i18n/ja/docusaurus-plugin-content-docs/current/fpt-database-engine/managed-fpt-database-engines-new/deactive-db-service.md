---
id: "deactive-db-service"
title: "FPT Database Engineサービスの無効化"
description: "FPT Database Engineサービスを無効化すると、選択したVPC内のすべてのデータベース作成および管理機能が停止します。"
sidebar_label: "FPT Database Engineサービスの無効化"
sidebar_position: 18
pagination_next: null
---

# FPT Database Engineサービスの無効化

FPT Database Engineサービスを無効化すると、選択したVPC内のすべてのデータベース作成および管理機能が停止します。**この操作はVPC内にデータベースが存在しない場合にのみ実行できます**。手順は以下の通りです。

### ステップ1：データベース管理ページへのアクセス

FPT Cloud Portalにログインします。ログイン成功後、メインメニューから**Database Platform** > **All Databases**を選択します。**Database Engine Management**インターフェースが以下のように表示されます。

[![](/img/migrated/deactive-FDE-scaled-ad13f2c5.png)](/img/migrated/deactive-FDE-scaled-ad13f2c5.png)

### ステップ2：FPT Database Engineサービスの無効化

**Database Engine Management**ページで**Deactivate**をクリックしてサービスを無効化します。システムは無効化処理画面に切り替わります。このプロセスには約8〜10分かかる場合があります。

無効化後、サービスステータスが**Inactive**に変わり、FPT Database Engineサービスのすべての操作がブロックされます。
