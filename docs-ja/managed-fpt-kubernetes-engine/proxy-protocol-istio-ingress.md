---
id: "cau-hinh-proxy-protocol-cho-istio-ingress"
title: "Managed Kubernetes Cluster での istio-ingress の Proxy Protocol 設定"
description: "FPT Cloud の Managed Kubernetes サービスを使用して istio gateway 経由でアプリケーションにアクセスする際のエンドユーザーのパブリック IP 情報を取得するための設定方法を説明します。"
sidebar_label: "istio-ingress の Proxy Protocol 設定"
sidebar_position: 51
---

# Managed Kubernetes Cluster での istio-ingress の Proxy Protocol 設定

FPT Cloud の Managed Kubernetes サービスを使用していて、istio gateway 経由でアプリケーションにアクセスするエンドユーザーのパブリック IP 情報を取得したい場合、以下の設定を行います。

サービスの設定にアノテーション `loadbalancer.fptcloud.com/proxy-protocol: "true"` を追加することで、**istio-ingressgateway** サービスの proxy protocol を有効にします。

`istio-system` namespace に envoyFilter を設定します。

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: EnvoyFilter
metadata:
  name: proxy-protocol
  namespace: istio-system
spec:
  configPatches:
  - applyTo: LISTENER
    patch:
      operation: MERGE
      value:
        listener_filters:
        - name: envoy.filters.listener.proxy_protocol
          typed_config:
            '@type': type.googleapis.com/envoy.extensions.filters.listener.proxy_protocol.v3.ProxyProtocol
  workloadSelector:
    labels:
      istio: [lable-istio-gateway]
```

これにより、エンドユーザーが istio gateway 経由でアプリケーションにアクセスした場合、istio-ingressgateway pod のログでエンドユーザーのパブリックソース IP 情報を確認できるようになります。

**注意:** このドキュメントは istio オープンソースのバージョン 1.22 以下に適用されます。
