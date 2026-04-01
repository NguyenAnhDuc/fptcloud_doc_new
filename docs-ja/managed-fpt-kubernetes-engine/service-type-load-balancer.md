---
id: "service-type-load-balancer"
title: "Service Type Load-Balancer"
description: "Managed FKE の Service Type Load-Balancer 機能と利用可能なアノテーションオプションについて説明します。"
sidebar_label: "Service Type Load-Balancer"
sidebar_position: 21
---

# Service Type Load-Balancer

Managed FKE 製品は Kubernetes Native をベースに開発され、FPT Cloud Controller Manager などのクラウドプロバイダーコンポーネントが Kubernetes に統合されています。このコンポーネントはクラスター内の worker node と Load Balancer 形式のサービスを管理することを目的としています。ユーザーはアプリケーションをインターネットに公開する方法として、Service の ingress 作成、worker node VM にフローティング IP を付与した NodePort Service、または Load Balancer 形式の Service を使用する方法があります。

FPTCloud は、サービス設定のアノテーションオプションとともに Load Balancer 形式のサービスを作成できます。

| **Key** | **Value** | **Default** | **目的** |
| --- | --- | --- | --- |
| service.beta.kubernetes.io/fpt-load-balancer-internal | "true"/"false" | "false" | サービスをインターネットに公開しない場合は "true" に設定します |
| loadbalancer.fptcloud.com/keep-floatingip | "true"/"false" | "false" | サービス削除後も LoadBalancer サービスの floating IP を VPC に保持したい場合は "true" に設定します |
| loadbalancer.fptcloud.com/proxy-protocol | "true"/"false" | "false" | LoadBalancer が PROXY プロトコルを使用する場合は "true" に設定します。注意: Proxy protocol は Layer 4 LoadBalancer のみで使用できます |
| loadbalancer.fptcloud.com/enable-health-monitor | "true"/"false" | "true" | LoadBalancer Pool のヘルスモニターを無効にする場合は "false" に設定します |
| service.beta.kubernetes.io/fpt-load-balancer-type | - LBv1（サポート終了）: basic/advanced/standard/premium - LBv2: Starter/Basic-1/Basic-2/Standard/Advanced/Premium/Extra-1/Extra-2/Extra-3/Extra-S/Extra-M/Extra-L | LBv1: "basic" LBv2: "Basic-1" | LoadBalancer のバックエンドプールの負荷に対応する LoadBalancer のフレーバーを設定します。注意: 許可されている値以外の値を設定するとエラーが発生する可能性があります |
| loadbalancer.fptcloud.com/enable-ingress-hostname | "true"/"false" | "false" | Service Type LoadBalancer の ingress ホスト名を有効にする場合は "true" に設定します |
| loadbalancer.fptcloud.com/load-balancer-version | "v1"/"v2" | "v2" | Service Type LoadBalancer に LBv1 を使用する場合は "v1" に設定します。このアノテーションを設定しない場合、デフォルトで LBv2 が作成されます。注意: proxy protocol と x-forwarded-for は同時に使用できません |
| loadbalancer.fptcloud.com/x-forwarded-for | "true"/"false" | "false" | Layer 7 LoadBalancer 使用時にリクエストヘッダーを LoadBalancer プールバックエンドに転送する場合は "true" に設定します |
| loadbalancer.fptcloud.com/node-selector | key=value ペアの配列（例: "env=prod, region=han"） | | LoadBalancer のメンバープールに含める node を選択します。選択された node はユーザーが指定したすべての key=value ペアを含む必要があります |
| loadbalancer.fptcloud.com/connection-limit | integer | -1 | 最大同時接続数の制限。-1 は無制限 |
| loadbalancer.fptcloud.com/timeout-client-data | integer（ms） | 50000 | クライアント側からのデータ待機時間（ms 単位） |
| loadbalancer.fptcloud.com/timeout-member-connect | integer（ms） | 5000 | Load Balancer とバックエンド間の接続待機時間（ms 単位） |
| loadbalancer.fptcloud.com/timeout-member-data | integer（ms） | 50000 | Load Balancer とバックエンド間のデータ待機時間（ms 単位） |
| loadbalancer.fptcloud.com/timeout-tcp-inspect | integer（ms） | 0 | TCP 検査の待機時間。0ms は TCP 検査機能を無効にします |
| loadbalancer.fptcloud.com/health-monitor-delay | integer（s） | 60 | プール内のメンバーのヘルスチェック間隔 |
| loadbalancer.fptcloud.com/health-monitor-timeout | integer（s） | 30 | 1 回のヘルスチェックの最大時間 |
| loadbalancer.fptcloud.com/health-monitor-max-retries | integer | 5 | バックエンドを DOWN とマークする前のヘルスチェック失敗回数 |
| loadbalancer.fptcloud.com/health-monitor-max-retries-down | integer | 3 | バックエンドが復旧（UP）とマークされるためのヘルスチェック成功回数 |

さらに、MFKE は以下の設定もサポートしています。

### 1. LoadBalancer に floating IP を指定して Service Type LoadBalancer を作成する

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

**注意:** パブリック IP は VPC に割り当てられていて Inactive 状態である必要があります。**Networking -> Floating IPs** セクションで確認してください。

### 2. サービス設定の spec セクションの `loadBalancerSourceRanges` で Load Balancer へのアクセスを制限する

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

**注意:** `loadBalancerSourceRanges` にはLoad Balancer へのアクセスを許可するパブリック IP 範囲の配列を設定します。デフォルトで M-FKE は IP ソース範囲 0.0.0.0/0 で Service Type Load Balancer を作成します。
