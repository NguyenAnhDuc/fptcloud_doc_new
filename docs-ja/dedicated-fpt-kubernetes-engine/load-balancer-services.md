---
id: "load-balancer-services"
title: "Service Type Load-Balancer"
description: "D-FKEでのService type Load Balancerの作成方法と、パブリック・プライベートLBの設定について説明します。"
sidebar_label: "Service Type Load-Balancer"
sidebar_position: 23
---

# Service Type Load-Balancer

D-FKE では **Service type Load Balancer** の作成をサポートしており、クラスター外部へのアプリケーション公開が簡単に行えます。パブリック LB とプライベート LB の両方をサポートします。

- **Public LB**: デフォルトでは、Service type LB はパブリックとして作成されます。インターネットからアクセスできるように、サービスにパブリック IP が割り当てられます。
- **Private LB**: テナントの内部システムからアプリケーション（サービス）にアクセスするためのプライベート IP がサービスに割り当てられます。パブリック IP は割り当てられないため、インターネットからはアクセスできません。

## A. Public LB

インターネットからアクセス可能なパブリック形式の Service type LoadBalancer です。この形式には空きのパブリック IP が必要です。

YAML ファイルの例:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: web
  namespace: default
spec:
  selector:
    app: web
  ports:
    - protocol: TCP
      name: http
      port: 80
      targetPort: 80
    - protocol: TCP
      name: https
      port: 443
      targetPort: 443
  type: LoadBalancer
```

## B. Private LB

内部アクセスを目的としたプライベート形式の Service type LoadBalancer です。インターネットからはアクセスできません。この形式には空きのパブリック IP は不要です。

YAML ファイルの例:

```yaml
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/fpt-load-balancer-internal: "true"
  name: web
  namespace: default
spec:
  selector:
    app: web
  ports:
    - protocol: TCP
      name: http
      port: 80
      targetPort: 80
    - protocol: TCP
      name: https
      port: 443
      targetPort: 443
  type: LoadBalancer
```

サービスが正常に作成されたことを確認します。

```bash
kubectl get svc
```

Load Balancer の **Internal IP** を編集します。**LB Virtual IP** にシステムが自動的に割り当てる IP 範囲を入力します。

- `startIP`: サブネットの開始 IP（例: 10.100.1.2）
- `endIP`: サブネットの終了 IP（例: 10.100.1.253）

:::note
この IP 範囲は、システムに既存のサブネットと重複しないようにしてください。
:::

```bash
kubectl edit cm fptcloud-ccm-configmap -n kube-system
```

```yaml
loadbalancer:
  oneArm:
    startIP: "169.254.64.1"
    endIP: "169.254.127.254"
```

`startIP` と `endIP` を希望する IP 範囲に変更して保存します。

新しい設定を反映するためにロールアウトを実行します。

```bash
kubectl rollout restart deployment fptcloud-ccm -n kube-system
```
