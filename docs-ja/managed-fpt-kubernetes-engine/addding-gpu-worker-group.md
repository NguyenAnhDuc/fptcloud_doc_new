---
id: "addding-gpu-worker-group"
title: "GPU Worker Group の追加"
description: "既存のManaged FKE クラスターにGPU Worker Groupを追加する方法を説明します。"
sidebar_label: "GPU Worker Group の追加"
sidebar_position: 22
---

# GPU Worker Group の追加

#### 前提条件

- **CPU、GPU、RAM、Storage、Instances クォータ**: 追加する Worker Group の仕様に対して十分な量が必要です。自動スケールを使用する場合は、希望する**最大ノード数**に対して十分な GPU クォータが必要です。
- **01 ネットワークサブネット**: Kubernetes Nodes 用のネットワーク（静的 IP Pool 付き）。

#### 設定手順

**手順 1**: [FPT Cloud Portal](https://console.fptcloud.com) にログインします。サイドバーメニューから **Kubernetes** を選択し、設定するクラスターを選択します。**Detail Cluster** > **Worker Group** で **Config Icon** をクリックします。

[![](/img/migrated/55-1-7d362c94.png)](/img/migrated/55-1-7d362c94.png)

**手順 2**: **Add Worker Group** をクリックして新しい Worker Group を追加します。

[![](/img/migrated/56-1-93a8803a.png)](/img/migrated/56-1-93a8803a.png)

**手順 3**: Worker Group で **GPU specs** を選択します。

[![](/img/migrated/57-1-dec56678.png)](/img/migrated/57-1-dec56678.png)

- **Instance type**: GPU を選択
- **GPU type**: A30、A100 など
- **GPU Sharing configuration**: None、Single、Mixed など
- **Specs type**: CPU – RAM – GPU

**手順 4**: **Save** をクリックして初期化情報を確認します。

**手順 5**: クラスターの初期化が完了する（ステータス: **Running**）まで待ちます。準備完了になれば使用できます。
