---
id: "setup-k8s-cluster-for-gpu-usage"
title: "GPU 用 K8s クラスターのセットアップ"
description: "GPU使用のためのManaged FKE Kubernetesクラスターのセットアップ手順を説明します。"
sidebar_label: "GPU 用クラスターのセットアップ"
sidebar_position: 21
---

# GPU 用 K8s クラスターのセットアップ

#### 前提条件

- **CPU、GPU、RAM、Storage、Instances クォータ**: 希望する Kubernetes Cluster に対して十分な量が必要です。自動スケールを使用する場合は、希望する**最大ノード数**に対して十分な GPU クォータが必要です。
- **01 ネットワークサブネット**: Kubernetes Nodes 用のネットワーク（静的 IP Pool 付き）。

#### クラスターセットアップ手順

**手順 1**: [FPT Cloud Portal](https://console.fptcloud.com) にログインします。サイドバーメニューから **Kubernetes** を選択し、**Create** をクリックします。

[![](/img/migrated/53-1-85e83144.png)](/img/migrated/53-1-85e83144.png)

**手順 2**: 希望する Kubernetes Cluster の仕様を入力します。クラスターの通常情報に加えて、Worker Group で **GPU specs** を選択します。

[![](/img/migrated/54-1-f0592bf9.png)](/img/migrated/54-1-f0592bf9.png)

- **Instance type**: GPU を選択
- **GPU type**: A30、A100 など
- **GPU Sharing configuration**: None、Single、Mixed など
- **Specs type**: CPU – RAM – GPU

**手順 3**: **Create** をクリックして初期化情報を確認します。

**手順 4**: クラスターの初期化が完了する（ステータス: **Running**）まで待ちます。準備完了になれば使用できます。
