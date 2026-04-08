---
id: "load-balancer-services"
title: "Load Balancer サービス"
description: "Managed FKEでのKubernetes Load Balancer Serviceの作成方法とアノテーション設定について説明します。"
sidebar_label: "Load Balancer サービス"
sidebar_position: 18
draft: true
---

# Load Balancer サービス

**M-FKE** 製品は Native Kubernetes をベースに構築され、**FPT Cloud Controller Manager** などの FPT Cloud 独自のコンポーネントが Kubernetes に統合されています。このコンポーネントはクラスター内の Worker Node と Load Balancer サービスを管理することを目的としています。

ユーザーはアプリケーションをインターネットに公開する方法として、サービスの ingress 作成、Worker Node VM にフローティング IP を付与した NodePort Service の作成、または Load Balancer Service の使用という方法が提供されています。

FPT Cloud は Load Balancer Service の作成をサポートし、そのロードバランサーにパブリック IP を自動的に割り当てます。Load Balancer Service を使用する場合、Worker Node のデフォルトロードバランサーの作成に加えて、サービスのマニフェストファイルのアノテーションを使用してオプションの設定を追加できます。

| キー | 値 | デフォルト | 意味 |
| --- | --- | --- | --- |
| service.beta.kubernetes.io/fpt-load-balancer-type | basic/advanced/standard/premium | basic | Load Balancer タイプ |
| service.beta.kubernetes.io/fpt-load-balancer-internal | true/false | false | サービスをインターネットに公開するかどうか（false の場合、ロードバランサーにフローティング IP は作成されない） |

使用ニーズに応じてサービス設定にアノテーションを追加することで Load Balancer Service を作成できます。

例:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: coffee
spec:
  replicas: 2
  selector:
    matchLabels:
      app: coffee
  template:
    metadata:
      labels:
        app: coffee
    spec:
      containers:
      - name: coffee
        image: nginxdemos/hello:plain-text
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: coffee-svc
  annotations:
    service.beta.kubernetes.io/fpt-load-balancer-type: basic
spec:
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
    name: http
  selector:
    app: coffee
  type: LoadBalancer
```

この例では **Basic** タイプの Load Balancer Service を作成します。サービスのマニフェストファイルを適用すると、Kubernetes クラスターに Load Balancer Service が作成されます。

[![](/img/migrated/48-1-e461b092.png)](/img/migrated/48-1-e461b092.png)

**EXTERNAL-IP** フィールドが **Pending** からパブリック IP に変わると、そのパブリック IP またはそのパブリック IP に関連付けられたドメインを使用してインターネットからアプリケーションにアクセスできるようになります。

[![](/img/migrated/49-1-be984dc5.png)](/img/migrated/49-1-be984dc5.png)

クラスター外部からはアクセスできない内部 Load Balancer Service も作成でき、内部サービス間の通信のみを許可する用途に使用できます。

```yaml
apiVersion: v1
kind: Service
metadata:
  name: coffee-svc
  annotations:
    service.beta.kubernetes.io/fpt-load-balancer-internal: "true"
spec:
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
    name: http
  selector:
    app: coffee
  type: LoadBalancer
```

内部 Load Balancer Service が作成されると、サービスの **EXTERNAL-IP** フィールドはパブリック IP ではなくプライベート IP になります。

[![](/img/migrated/51-1-cd84aa92.png)](/img/migrated/51-1-cd84aa92.png)
