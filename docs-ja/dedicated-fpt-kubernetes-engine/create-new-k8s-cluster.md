---
id: "khoi-tao-kubernetes-cluster-moi"
title: "新規 Kubernetes cluster の作成"
description: "Dedicated FPT Kubernetes Engine サービスで新規 Kubernetes cluster を作成する手順。"
sidebar_label: "新規 Kubernetes cluster の作成"
sidebar_position: 4
---

# 新規 Kubernetes cluster の作成

:::note
実行前の必須条件:
- CPU、RAM、Storage、Instance のクォータが希望する cluster 構成に十分であること。
- 利用可能な Public IP が 1 つあること（Kubernetes API と Ingress 用）。
- Kubernetes Nodes 用の VM Network が 1 つあること（Static IP Pool を持つ subnet が必要）。
:::

1. メニューから **Kubernetes** を選択し、**Create** をクリックします。
[![](/img/migrated/Picture1-f7c686bf.png)](/img/migrated/Picture1-f7c686bf.png)
2. cluster の名前とバージョンを入力し、**Next** をクリックします。
[![](/img/migrated/Picture2-ea3a672d.png)](/img/migrated/Picture2-ea3a672d.png)
   - **Name:** cluster 名を入力します。
   - **Version:** cluster のバージョンを選択します。
3. 必要に応じて Node Pools を設定し、**Next** を選択します。
[![](/img/migrated/Picture3-f4c4f789.png)](/img/migrated/Picture3-f4c4f789.png)

   **Storage Policy & Load Balancer:**
   - **Policy:** cluster 内の VM のディスクに使用する Storage Policy を選択します。
   - **LB Size:** Load Balancer を設定します（Standard / Advanced / Premium）。

   **Master Node 設定:**
   - **Type:** Master Node の CPU とメモリ構成を選択します。
   - **Disk (GB):** Master Node のルートディスク容量を選択します。
   - **High Availability:** Disable（master node 1 台）または Enable（master node 3 台）。

   **Worker Node 設定:**
   - **Type:** Worker Node の CPU とメモリ構成を選択します。
   - **Disk (GB):** Worker Node のルートディスク容量を選択します。
   - **Quantity:** cluster の Worker Node 数を入力します。
   - **Autoscale:** autoscale 機能のオン/オフ。有効にした場合は Scale Min と Scale Max を入力します。

   **Nodes Credentials:**
   - **SSH Key:** VM Node へのログインに使用するキー（root ユーザー）。

4. cluster の詳細設定を行い、**Next** をクリックします。
[![](/img/migrated/Screenshot_52-aef22d51.png)](/img/migrated/Screenshot_52-aef22d51.png)

   **NFS Storage:**
   - **Enable NFS Persistent Storage** をチェックすると、cluster と一緒に NFS Persistent Storage をデプロイします。
   - **Disk (GB):** NFS Storage の容量を入力します。

   **Firewall 設定:**
   - **Enable Firewall** をチェックすると、cluster と一緒に Edge IP、Public IP、Private IP を設定します。

   **詳細設定:**
   - **Pod Network:** cluster 内の Pod に使用するネットワーク。
   - **Service Network:** cluster 内の Service に使用するネットワーク。
   - **Network Node Prefix:** Node 内の Pod のサブネットプレフィックス。
   - **Max Pod per Node:** 各 Kubernetes Node の最大 Pod 数。
   - **Nodes DNS:** Nodes および Kubernetes cluster で使用する DNS。

5. 設定の概要を確認します。
[![](/img/migrated/Picture4-db8dfc98.png)](/img/migrated/Picture4-db8dfc98.png)
6. **Create a Kubernetes** を選択します。システムが確認・リソースチェックを行い、cluster の作成を開始します。
[![](/img/migrated/Picture5-6a395f6a.png)](/img/migrated/Picture5-6a395f6a.png)
