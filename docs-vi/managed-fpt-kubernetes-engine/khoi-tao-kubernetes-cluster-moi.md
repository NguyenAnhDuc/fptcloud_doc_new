---
id: "khoi-tao-kubernetes-cluster-moi"
title: "Khoi Tao Kubernetes Cluster Moi"
description: "FPT Cloud Portal で新しい Managed FPT Kubernetes Engine（M-FKE）クラスターを作成する手順を説明します。"
sidebar_label: "Khoi Tao Kubernetes Cluster Moi"
sidebar_position: "4"
---

# 新しい Kubernetes Cluster の作成

FPT Cloud Portal で新しい Managed Kubernetes クラスターを作成する手順を説明します。

## 前提条件

クラスターを作成する前に、[初期設定](./initial-setup.md)が完了していることを確認してください。Subnet と Static IP Pool が正しく設定されている必要があります。

## クラスターの作成手順

**ステップ 1:** メニューで **Kubernetes** を選択すると、**Kubernetes Management** ページが表示されます。**Create a Kubernetes Engine** をクリックします。

**ステップ 2:** クラスターの基本情報を入力します。

- **Cluster Name**: クラスターの名前を入力します。
- **Kubernetes Version**: 使用する Kubernetes のバージョンを選択します。利用可能なバージョンについては、[リリースカレンダー](./release-calendar.md)を参照してください。
- **VPC / Subnet**: クラスターを作成する VPC と Subnet を選択します。

**ステップ 3:** クラスターのエンドポイントアクセスモードを設定します。

- **Public**: クラスターの API サーバーがインターネットから直接アクセス可能になります。
- **Public & Private**: クラスターの API サーバーがインターネットとプライベートネットワークの両方からアクセス可能になります。
- **Private**: クラスターの API サーバーがプライベートネットワークからのみアクセス可能になります。

**ステップ 4:** **Auto Upgrade Version** の設定を行います。有効にする場合は、アップグレードのスケジュールを設定します。詳細は[バージョン自動アップグレード機能](./auto-upgrade-version.md)を参照してください。

**ステップ 5:** **Nodes Pool** の設定を行います。

- **Worker Group 名**: ワーカーグループの名前を入力します。
- **Flavor**: worker node のサイジング（CPU、RAM、DISK）を選択します。
- **Min/Max Nodes**: ワーカーグループの最小・最大 node 数を設定します。min と max の値が異なる場合、Cluster Autoscale が自動的に有効になります。
- **Node Auto-repair**: Node Auto-repair 機能の有効/無効を設定します。
- **Labels/Taints**: 必要に応じて worker node のラベルと taint を設定します。

**ステップ 6:** 設定内容を確認して **Create a Kubernetes** ボタンをクリックします。

クラスターの作成プロセスが開始され、ステータスが **Processing** に変わります。作成が完了するとステータスが **Succeeded (Running)** に変わります。

## 注意事項

- クラスターの作成には数分かかります。
- 作成中はクラスターの設定変更はできません。
- クラスター作成後、[kubeconfig の取得](./get-cluster-access-information.md)を行ってクラスターにアクセスできます。
