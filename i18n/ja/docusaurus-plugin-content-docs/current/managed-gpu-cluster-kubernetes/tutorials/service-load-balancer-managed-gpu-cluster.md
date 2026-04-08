---
id: "service-load-balancer-managed-gpu-cluster"
title: "Managed GPU ClusterのLoad Balancerサービス"
description: "Managed GPU ClusterはネイティブKubernetesをベースに構築され、FPT Cloud Controller Managerを含む追加のクラウドプロバイダーコンポーネントを統合しています。"
sidebar_label: "Managed GPU ClusterのLoad Balancerサービス"
sidebar_position: 3
---

# Managed GPU ClusterのLoad Balancerサービス

Managed GPU ClusterはネイティブKubernetesをベースに構築され、FPT Cloud Controller Managerを含む追加のクラウドプロバイダーコンポーネントを統合しています。このコンポーネントはクラスター内のworkerノードとLoad Balancerタイプのサービスを管理します。ユーザーはアプリケーションをインターネットに公開する方法をいくつか選択でき、エンドユーザーがアプリケーションやサービスにアクセスできるようにします。これらの方法には、サービス用のIngressの作成、NodePortサービスの作成とworkerノードへのFloating IPの付与、またはLoad Balancerタイプのサービスの使用などがあります。

FPT Cloudはサービス設定に以下のアノテーションオプションを持つLoad Balancerタイプのサービス作成をサポートしています。

| **Key** | **Value** | **Default** | **目的** |
| --- | --- | --- | --- |
| service.beta.kubernetes.io/fpt-load-balancer-internal | "true"/"false" | "false" | サービスをインターネットに公開しない場合は"true"に設定します。 |
| loadbalancer.fptcloud.com/keep-floatingip | "true"/"false" | "false" | サービス削除後もLoadBalancerサービスのFloating IPをVPC内に保持する場合は"true"に設定します。 |
| loadbalancer.fptcloud.com/proxy-protocol | "true"/"false" | "false" | LoadBalancerにPROXYプロトコルを使用する場合は"true"に設定します。注意：Proxyプロトコルはレイヤー4のLoadBalancerでのみ使用できます。 |
| loadbalancer.fptcloud.com/enable-health-monitor | "true"/"false" | "true" | LoadBalancer Poolのヘルスモニターを無効にする場合は"false"に設定します。 |
| service.beta.kubernetes.io/fpt-load-balancer-type | LBv1：basic / advanced / standard / premium。LBv2：Basic-1 / Basic-2 / Standard / Advanced / Premium | LBv1："basic"、LBv2："Basic-1" | LoadBalancerプールのバックエンドアプリケーションの負荷に合わせてLoadBalancerフレーバーを設定します。 |
| loadbalancer.fptcloud.com/enable-ingress-hostname | "true"/"false" | "false" | LoadBalancerタイプサービスのIngressホスト名を有効にする場合は"true"に設定します。 |
| loadbalancer.fptcloud.com/load-balancer-version | "v1"/"v2" | "v1" | LoadBalancerタイプサービスにLBv2を使用する場合は"v2"に設定します。このアノテーションを設定しない場合、デフォルトでLBv1が作成されます。 |
| loadbalancer.fptcloud.com/x-forwarded-for | "true"/"false" | "false" | レイヤー7のLoadBalancer使用時にリクエストヘッダーをLoadBalancerプールのバックエンドに転送する場合は"true"に設定します。注意：Proxyプロトコルとx-forwarded-forは同時に使用できません。 |

また、Managed GPU Clusterは以下の設定もサポートしています。

#### 1. 特定のFloating IPをLoad Balancerに付与するLoadBalancerタイプサービスの作成：

```yaml
kind: Service
apiVersion: v1
metadata:
  name: hello-world
  namespace: example
spec:
  type: LoadBalancer
  loadBalancerIP: 103.160.90.207
  selector:
    app: hello-world
  ports:
    - name: http
      protocol: TCP
      port: 443
      targetPort: web
```

注意：パブリックIPはVPCに割り当てられ、Inactive状態である必要があります。**Networking -> Floating IPs** で確認してください。

#### 2. サービス設定の `spec` セクションで `loadBalancerSourceRanges` を使用してLoad Balancerへのアクセスを制限する：

```yaml
kind: Service
apiVersion: v1
metadata:
  name: hello-world
  namespace: example1
spec:
  loadBalancerSourceRanges:
  - 14.233.234.0/24
  - 10.250.0.0/24
  type: LoadBalancer
  selector:
    app: hello-world
  ports:
    - name: http
      protocol: TCP
      port: 80
      targetPort: web
```

注意：`loadBalancerSourceRanges` にはLoad Balancerへのアクセスを許可するパブリックIPレンジの配列が含まれます。デフォルトでは、Managed GPU ClusterはソースIPレンジ0.0.0.0/0でLoad Balancerタイプサービスを作成します。
