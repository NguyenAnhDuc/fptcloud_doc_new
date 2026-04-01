---
id: "managed-fpt-database-engine"
title: "Managed FPT Database Engine"
description: "FPT Smart Cloud Database Engine サービスの概要。"
sidebar_label: "Managed FPT Database Engine"
sidebar_position: 1
---

# Managed FPT Database Engine

## FPT Smart Cloud Database Engine の概要

**FPT Smart Cloud Database Engine** は企業のデータベースの展開と管理を支援する製品です。

この製品により、物理サーバーのように詳細なパラメーターを設定することなく、仮想クラスターに SQL または非 SQL データベースを作成できます。FCI が提供するデータベースシステムは以下の通りです。

- MySQL
- SQL Server
- MongoDB
- MariaDB
- PostgreSQL
- Redis

各データベースシステムには複数のバージョンが用意されており、同一データベースタイプのバージョン間の移行もサポートしています。

## 用語と定義

| 用語 | 定義 |
| --- | --- |
| **Database** | データベース |
| **Relational Database** | リレーショナルデータベース: テーブル間に関係があり SQL でクエリするデータベース |
| **Non-relational Database** | 非リレーショナルデータベース: テーブルが分散していて互いに制約されず SQL を使用しないデータベース |
| **SQL (Structured Query Language)** | 構造化クエリ言語: リレーショナルデータベースの情報の保存・検索・処理に使用するプログラミング言語 |
| **Cluster** | データベースなどのプログラムを実行するためのリソースとして使用するサーバー（物理または仮想）のグループ |
| **Node** | cluster 内の 1 つの worker マシン |
| **vCPU (cloud)** | クラウド上の仮想サーバーの処理コア（GB 単位） |
| **RAM (cloud)** | クラウド上の仮想サーバーの総メモリ（GB 単位） |
| **Storage disk (cloud)** | クラウド上の仮想サーバーのストレージ（GB 単位） |
| **Backup Job** | 一定の時間間隔でデータを自動保存するジョブ |
| **Full Backup** | データベース全体をバックアップ: 以前のバックアップからの変更データを含む |
| **Diff Backup** | 直近のバックアップ以降に変更または新規作成されたデータのみバックアップ |
| **Restore** | バックアップデータを使用して新しい cluster に保存された情報でデータベースを作成 |
