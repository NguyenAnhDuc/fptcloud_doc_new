---
id: "trien-khai-ung-dung-tren-worker-pool"
title: "ワーカープールへのアプリケーションのデプロイ"
description: "Managed FKE はワーカープールで worker を管理し、リソースのスケールを気にせずにアプリケーションをデプロイできます。"
sidebar_label: "ワーカープールへのアプリケーションのデプロイ"
sidebar_position: 19
---

# ワーカープールへのアプリケーションのデプロイ

Managed FKE 製品は worker pool で worker を管理しており、ユーザーがアプリケーションを簡単にデプロイできるようサポートし、リソースのスケールの問題を考慮する必要がありません。

## アプリケーションをデプロイするためのマニフェストファイルの設定

2 つの worker pool を持つクラスターにアプリケーションをデプロイする例:

[![Userguide M FKE 30](/img/migrated/Userguide-M-FKE-30-f3f4045c.png)](/img/migrated/Userguide-M-FKE-30-f3f4045c.png)

各 worker pool には 1 つの worker node があります。

[![Userguide M FKE 31](/img/migrated/Userguide-M-FKE-31-80027e2e.png)](/img/migrated/Userguide-M-FKE-31-80027e2e.png)

worker node には、ノードを区別して共通ラベルを持つ worker node に簡単にアプリケーションをデプロイするためのラベルが付けられています。

[![Userguide M FKE 32](/img/migrated/Userguide-M-FKE-32-7a9414e6.png)](/img/migrated/Userguide-M-FKE-32-7a9414e6.png)

worker pool **_worker-1zx5wqdu_** に属する worker node には **_worker.fptcloud/pool=worker-1zx5wqdu_** というラベルが付けられています。

worker pool の設定の詳細をクリックすると、worker pool の名前をコピーできます。

[![Userguide M FKE 33](/img/migrated/Userguide-M-FKE-33-1024x558-ad024fb2.png)](/img/migrated/Userguide-M-FKE-33-1024x558-ad024fb2.png)

Kubernetes でアプリケーションをデプロイするためにリソース（Pod、Deployment、StatefulSet、DaemonSet、Replicaset）を使用する場合、設定ファイルの Specification セクションに Node Affinity Rule または Node Selector を追加できます。

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment-test
  labels:
    app: nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "700Mi"
            cpu: "800m"
          limits:
            memory: "900Mi"
            cpu: "900m"
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: worker.fptcloud/pool
                operator: In
                values:
                - worker-1zx5wqdu
```

または Node Selector を使用する場合:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment-test
  labels:
    app: nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "700Mi"
            cpu: "800m"
          limits:
            memory: "900Mi"
            cpu: "900m"
      nodeSelector:
        worker.fptcloud/pool: worker-1zx5wqdu
```

ここで、最初の例（Node Affinity Rule を使用）の values セクションの値と nodeSelector の値は、アプリケーションをデプロイしたい worker pool の名前です。

## アプリケーションのデプロイ

マニフェストファイルを使用して nginx アプリケーションをデプロイする場合:

[![Userguide M FKE 36](/img/migrated/Userguide-M-FKE-36-55bd9a6e.png)](/img/migrated/Userguide-M-FKE-36-55bd9a6e.png)

pool 内の worker node のリソースが不足して pod を実行できない場合、1 つの pod が Pending 状態になります。

[![Userguide M FKE 37](/img/migrated/Userguide-M-FKE-37-1024x88-cd236bc8.png)](/img/migrated/Userguide-M-FKE-37-1024x88-cd236bc8.png)

FPT Cloud の管理側にある Cluster Autoscaler コンポーネントが、Pending 状態の nginx pod に対応するために、その pool に worker node を追加するアクションを実行します。

[![Userguide M FKE 38](/img/migrated/Userguide-M-FKE-38-1408a3cf.png)](/img/migrated/Userguide-M-FKE-38-1408a3cf.png)

worker pool に 1 つの worker node が追加されると、以前 Pending 状態だった nginx pod が Running 状態に移行します。

アプリケーションのスケールダウンで使用する pod が少なくなると、worker node の空きリソースが増加します。CPU と Memory のリソース使用率がノードの最大リソースに対して 10 分間 50% を下回ると、そのノードは worker pool から自動的に削除され、ユーザーのコストが削減されます。
