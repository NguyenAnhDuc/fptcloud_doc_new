---
id: "Backup-Initial-Setup"
title: "初期設定"
description: "FPT Cloudでバックアップジョブを作成する前の前提条件と初期手順。"
sidebar_label: "初期設定"
sidebar_position: "2"
---
# 初期設定

## 前提条件
バックアップジョブを作成する前に、以下の基本条件を確認してください：

  * VMまたはPVC（Kubernetes）を含むテナントへのアクセス権を持つ**FPT Cloudアカウント**。
  * **リソースが正常に稼働している**（VM/PVCがエラー状態または削除済みでないこと）。
  * ジョブの作成とバックアップの保存に十分なVPCの**バックアップクォータ**。
  * リソースがBackup Nativeがサポートする**リージョン**に配置されていること。

このサービスは追加ツールやエージェントのインストールを必要としません。すべての操作はUnify Portal上で直接行います。

## 開始手順

### 2.1 FPT Cloudアカウントの作成とFPT Portalへのログイン
**FPT Backup Native**サービスを使用するには、console.fptcloud.comのFPT Cloud管理ダッシュボードにログインする必要があります。

提供されたアカウントとパスワードでログイン後、保護するVMまたはPVC（Kubernetes）を含む正しいTenant、Region、VPCを選択してください。

### 2.2 FPT Backup使用前に確認すべき事項
  * **保護するサーバー/PVCの数**
  * **バックアップストレージの容量**
  * **バックアップシナリオ（ポリシー）**
