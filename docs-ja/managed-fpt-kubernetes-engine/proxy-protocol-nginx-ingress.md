---
id: "cau-hinh-proxy-protocol-cho-nginx-ingress"
title: "Managed Kubernetes Cluster での nginx-ingress の Proxy Protocol 設定"
description: "FPT Cloud の Managed Kubernetes サービスを使用して nginx ingress gateway 経由でアプリケーションにアクセスする際のエンドユーザーのパブリック IP 情報を取得するための設定方法を説明します。"
sidebar_label: "nginx-ingress の Proxy Protocol 設定"
sidebar_position: 52
pagination_next: null
---

# Managed Kubernetes Cluster での nginx-ingress の Proxy Protocol 設定

FPT Cloud の Managed Kubernetes サービスを使用していて、nginx ingress gateway 経由でアプリケーションにアクセスするエンドユーザーのパブリック IP 情報を取得したい場合、以下の設定を行います。

1. サービスの設定にアノテーション `loadbalancer.fptcloud.com/proxy-protocol: "true"` を追加することで、**nginx-ingress-controller** サービスの proxy protocol を有効にします。

2. nginx ingress controller をデプロイしたい namespace の **nginx-ingress-controller** configmap に以下のフィールドを追加します。

```
allow-snippet-annotations: "true"
proxy-protocol: "True"
real-ip-header: proxy_protocol
use-proxy-protocol: "true"
```

3. nginx ingress controller を再起動して、ingress controller が新しい configmap 設定を反映させます。

アプリケーションが ingress ドメインのポート 443 を呼び出す必要がある場合は、nginx ingress controller の LB サービスに以下のアノテーションも追加します。

```
loadbalancer.fptcloud.com/enable-ingress-hostname: "true"
```

LB L4 の proxy protocol 機能を使用した LoadBalancer タイプのサービスを使用すると、クラスター内の pod は ingress ドメインのポート 443 経由でサービスに接続できなくなりますが、インターネットからの外部アクセスは通常どおり機能します。これは kube-proxy のデフォルトの動作に起因しており、このコンポーネントは LoadBalancer のパブリック IP アドレスをノードの iptables に追加し、その IP を worker node 内のインターフェースにマッピングします。その結果、pod から ingress ドメインへのリクエストがノードのインターフェースでブロックされ、パブリックネットワークに到達できなくなります。ingress hostname の設定は、クラスター内部とインターネット外部の両方から接続が正常に機能するようにする問題の解決策です。
