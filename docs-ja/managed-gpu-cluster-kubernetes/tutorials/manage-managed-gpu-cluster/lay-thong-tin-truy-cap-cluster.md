---
id: "lay-thong-tin-truy-cap-cluster"
title: "クラスターアクセス情報を取得する"
description: "Kube-configファイルはKubernetesクラスターへの接続情報を保存するために使用され、kubectl、kubelet、kubeadmなどのツールがKubernetes API Serverと通信する方法を確認できます。"
sidebar_label: "クラスターアクセス情報を取得する"
sidebar_position: 4
---

# クラスターアクセス情報を取得する

Kube-configファイルはKubernetesクラスターへの接続情報を保存するために使用され、kubectl、kubelet、kubeadmなどのツールがKubernetes API Serverとの通信方法を確認できます。kubeconfig ファイルはKubernetesへのアクセス管理において重要であり、厳重に保管する必要があります。

Kube-configファイルをダウンロードするには、次の手順に従ってください。

**手順1:** メニューで **AI Infrastructure** > **Managed GPU Cluster** を選択します。システムは **GPU Cluster Management** ページを表示します。アクセス情報を取得したいクラスターを選択します。

[![](/img/migrated/12-7952cac6.png)](/img/migrated/12-7952cac6.png)

**手順2:** **Essential Properties** > **Cluster Information** > **Configuration** の下で、kubeconfigファイルをダウンロードし、kubectlやその他のツールを使用してクラスターにログインできます。

[![](/img/migrated/13-b5e2d2ac.png)](/img/migrated/13-b5e2d2ac.png)

**注意:**

Managed GPU ClusterはNative Kubernetes Clusterをコアとして使用しています。ユーザーは通常のKubernetesクラスターと同様に、kubectlやダッシュボードを使用してクラスターを操作できます。
