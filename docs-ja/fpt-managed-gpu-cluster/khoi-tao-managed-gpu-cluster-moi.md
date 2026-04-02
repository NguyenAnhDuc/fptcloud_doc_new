---
id: "khoi-tao-managed-gpu-cluster-moi"
title: "新しいManaged GPU Clusterを作成する"
description: "新しいManaged GPU Clusterを作成するための前提条件。"
sidebar_label: "新しいManaged GPU Clusterを作成する"
sidebar_position: 4
---

# 新しいManaged GPU Clusterを作成する

**注意:**

この操作を実行するための必須条件：

- Metal Cloud（Bare Metal HPC）のクォータが、希望するクラスターサイズを満たすのに十分であること。
- BMサーバーネットワークが少なくとも1つあること。
- Load Balancer用のネットワークが少なくとも1つあること。

**手順1:** **FPT Portal** のメニューで **AI Infrastructure** > **Managed GPU Cluster** > **Create a Managed GPU Cluster** を選択します。

[![](/img/migrated/3-1-a6d7eef2.png)](/img/migrated/3-1-a6d7eef2.png)

**手順2:** **General Information** タブで情報を入力し、Nextをクリックします。

[![](/img/migrated/4-15b5adf9.png)](/img/migrated/4-15b5adf9.png)

- General Information：

**• Name**: クラスター名を入力します。各クラスター名は一意で、命名規則に従う必要があります。

**• Network**: Bare Metal GPU Server用に作成したサブネット範囲から選択します。

**• Version**: アプリケーションに適したKubernetesバージョンを選択します。

**• Internal LB Subnet**: Load BalancerサービスタイプのプライベートIPレンジを設定します。

**• SSH Public Key**: クラスターのWorkerノードへのSSHアクセス用SSHキー。

**手順3:** **Nodes Pool** タブで情報を入力し、Nextをクリックします。

Managed GPU Clusterを作成する際の注意点：

- **Managed GPU Cluster** はWorker GroupsでWorkerノードを管理します。Worker Groupとは、同じ構成のWorkerノードのグループです。ユーザーは異なるアプリケーション向けにWorker Groupsを割り当てることができます。システムは最低1つのWorker Group（Base）を必要とし、このWorker Groupは削除できません。
- Worker Group設定セクションで、ユーザーは希望するWorker Groupにラベルを割り当てることができます。これらのラベルはそのグループ内のすべてのWorkerノードに適用されます。ユーザーはラベルの追加・削除、既存ラベルのkey/valueの編集が可能です。ラベルにより、ユーザーは必要に応じて特定のWorker Groupにアプリケーションを簡単にデプロイできます。

[![](/img/migrated/5-1-467b1d56.png)](/img/migrated/5-1-467b1d56.png)

➤ **Worker group 1 (Base)**：

**• Group Name**: Worker Groupを識別するための名前を入力します。

**• Runtime**: コンテナランタイムを選択します。現在はContainerdのみサポートされています。

**• Number of Server**: クラスターのWorkerとして実行するMetal Cloud Serverの数。

**• Flavor**: Metal Cloud GPUサーバーのフレーバータイプ。デフォルトはH100です。

**• Label**: Worker Group内のすべてのWorkerにKubernetesラベルを割り当てます。

**ADD WORKER GROUP** をクリックすることで、K8sクラスターの初期化時に追加のworker groupを追加できます。

[![](/img/migrated/Screenshot_2-708902f7.png)](/img/migrated/Screenshot_2-708902f7.png)

Worker Group 2以降では、特定のworkerノードにアプリケーションをスケジュールするためにworker groupにtaintを設定できます。taintの追加・削除・編集も簡単に行えます。

[![](/img/migrated/Screenshot_1-c7d01a04.png)](/img/migrated/Screenshot_1-c7d01a04.png)

**注意**: Unify Portalでworker groupのlabel/taintを設定した場合、kubectlでそのworker group内のノードのlabel/taintを削除することはできません（システムはUnify Portalの設定に従ってノードにlabel/taintを自動的に再適用します）。label/taintはUnify Portalから削除する必要があります。

➤ **Worker Group n**：

**ADD WORKER GROUP** をクリックすることで、K8sクラスターの初期化時に追加のWorker Groupsを追加できます。

Worker Group 2以降では、特定のWorkerノードにアプリケーションをスケジュールするためにWorker GroupsにTaintを設定できます。Taintの追加・削除・編集も簡単に行えます。

Taintsの詳細については[こちら](http://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)をご覧ください。

**注意**: PortalでWorker Groupのlabel/taintを設定した場合、kubectlでそのWorker Group内のノードのlabel/taintを削除することはできません（システムはPortalの設定に従ってノードにlabel/taintを自動的に再適用します）。label/taintはPortalから削除する必要があります。

**手順4:** **Advanced** セクションには詳細設定が含まれます。

[![](/img/migrated/6-1-126a59ae.png)](/img/migrated/6-1-126a59ae.png)

**• Pod Network**: クラスター内のPodに使用するネットワーク。

**• Service Network**: クラスター内のServiceに使用するネットワーク。

**• Network Node Prefix**: Managed GPU Nodeあたりの最大Pod数。

**• Max Pod per Node**: クラスターにインストールされるCNIタイプ。Calicoのみサポートされています。

**手順5:** **Review & Create** 画面には、ユーザーが設定したすべてのクラスター設定の詳細が表示され、システムはBare Metal GPUサーバーのクォータがクラスターの初期化に十分かどうかを自動的に確認します。

[![](/img/migrated/7-1-0c3879d8.png)](/img/migrated/7-1-0c3879d8.png)

システムがリソースの可用性を確認したら、**Create a Managed GPU Cluster** をクリックしてクラスターの作成を進めます。
