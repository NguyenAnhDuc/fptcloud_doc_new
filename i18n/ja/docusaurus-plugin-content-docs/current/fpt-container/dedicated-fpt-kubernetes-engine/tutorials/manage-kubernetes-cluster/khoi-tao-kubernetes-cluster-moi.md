---
id: "khoi-tao-kubernetes-cluster-moi"
title: "新しいKubernetesクラスターの作成"
sidebar_label: "新しいKubernetesクラスターの作成"
sidebar_position: 2
---

新しいKubernetesクラスターの作成


**注意：** この操作を実行する前に、以下の条件を満たす必要があります。

  * CPU、RAM、Storage、Instanceのクォータが希望するクラスター設定に対して十分であること。
  * Public IP 1件（利用可能）：Kubernetes APIおよびIngressに使用します。
  * VM Network 1件：Kubernetesノードに使用するネットワーク。**Static IP Pool**を持つSubnetを事前に作成してください。ガイドはこちらをご参照ください。


**ステップ1：** メニューから**Kubernetes** > **Create**を選択します。

![](images/khoi-tao-kubernetes-cluster-moi/img-001.png)

  **ステップ2：** クラスターの名前とバージョンを入力し、**Next**をクリックします。

![](images/khoi-tao-kubernetes-cluster-moi/img-002.png)

  * **Name：** クラスター名を入力します。
  * **Version：** クラスターのバージョンを選択します。


**ステップ3：** 必要に応じてNode Poolsを設定し、Nextをクリックします。

![](images/khoi-tao-kubernetes-cluster-moi/img-003.png)

**Storage Policy & Load Balancer：**

  * **Policy：** KubernetesクラスターのVM用ディスクに使用するStorage Policyを選択します。

  * **LB Size：** Load Balancerの設定。


  1. Standard: 最大2000 CCU、4000 httpリクエスト/秒、帯域幅100Mbps。

  2. Advanced: 最大4000 CCU、8000 httpリクエスト/秒、帯域幅100Mbps。

  3. Premium: 最大8000 CCU、16000 httpリクエスト/秒、帯域幅100Mbps。


**Master Node Configuration：**

  * **Type：** Master Nodeの設定（CPU & Memory）を選択します。

  * **Disk (GB)：** Master Nodeのルートディスク容量を選択します。

  * **High Availability：**


  1. Disable: Quantity（1）— k8sクラスターのMaster Node VMインスタンス数は1台です。

  2. Enable: Quantity（3）— K8sクラスターのMaster Node VMインスタンス数は3台です。


**Worker Node Configuration：**

  * **Type：** Worker Nodeの設定（CPU & Memory）を選択します。

  * **Disk (GB)：** Worker Nodeのルートディスク容量を選択します。

  * **Quantity：** K8sクラスターのWorker Node数。

  * **Autoscale：** クラスターのオートスケール機能を有効/無効にします。有効にする場合は、Scale Min（スケールダウン時の最小ノード数）とScale Max（スケールアップ時の最大ノード数）を入力してください。


**Nodes Credentials：**

  * **SSH Key：** Node VM（rootユーザー）へのログインに使用するキーです。まだお持ちでない場合は、こちらのガイドを参照して作成できます。


**ステップ4：** クラスターの詳細設定を行い、**Next**をクリックします。

![](images/khoi-tao-kubernetes-cluster-moi/img-004.png)

**NFS Storage：**

  * チェックボックス **Enable NFS Persistent Storage**：**Kubernetesクラスター**と共に**NFS Persistent Storage**をデプロイする場合に選択します。

  * **Disk (GB)**：NFSストレージの容量。適切なサイジングを行ってください。ディスク容量の変更はユーザーが手動で実施する必要があります。

  * **Firewall Configuration**：上級ユーザー向けの設定です。アイコンをクリックして展開します。これらのパラメーターに詳しくない場合は、デフォルトのままにしてください。

  * チェックボックス **Enable Firewall**：KubernetesクラスターとともにEdge IP、Public IP、Private IPを設定する場合に選択します。

  * **Advance Config**：上級ユーザー向けの設定です。アイコンをクリックして展開します。これらのパラメーターに詳しくない場合は、デフォルトのままにしてください。

  * **Pod Network**：クラスター内のPodに使用するネットワーク。

  * **Service Network**：クラスター内のServiceに使用するネットワーク。

  * **Network Node Prefix**：各ノード上のPod用サブネットプレフィックス。

  * **Max Pod per Node**：Kubernetesノードあたりの最大Pod数。

  * **Nodes DNS**：ノードおよびKubernetesクラスターに使用するDNS。独自の内部DNSシステムを使用する場合は、希望するDNSを入力します。


**ステップ5：** **Next**をクリックします。システムは入力したすべての情報の確認画面を表示します。設定内容を確認し、選択した設定に基づいてKubernetesクラスターの初期化を進めます。

![](images/khoi-tao-kubernetes-cluster-moi/img-005.png)

**ステップ6：** **Create a Kubernetes**をクリックします。システムは確認を行い、リソースを検証した後、選択した設定に基づいてKubernetesクラスターのプロビジョニングを開始します。

![](images/khoi-tao-kubernetes-cluster-moi/img-006.png)
