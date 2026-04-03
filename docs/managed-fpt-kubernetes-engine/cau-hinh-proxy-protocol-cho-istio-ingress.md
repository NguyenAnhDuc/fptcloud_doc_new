---
id: "cau-hinh-proxy-protocol-cho-istio-ingress"
title: "Managed Kubernetes Cluster での istio-ingress の Proxy Protocol 設定"
description: "FPT Cloud の Managed Kubernetes サービスを使用して istio gateway 経由でアプリケーションにアクセスする際のエンドユーザーのパブリック IP 情報を取得するための設定方法を説明します。"
sidebar_label: "istio-ingress の Proxy Protocol 設定"
sidebar_position: "51"
---

# Cấu hình Proxy Protocol cho Istio Ingress

Trong trường hợp người dùng sử dụng dịch vụ Managed Kubernetes của FPT Cloud và có nhu cầu lấy được thông tin IP public của người dùng cuối khi truy cập vào ứng dụng trong Kubernetes thông qua istio gateway, người dùng có thể cấu hình: 
Enable proxy protocol cho service istio-ingressgateway bằng cách thêm annotation _loadbalancer.fptcloud.com/proxy-protocol: "true"_ trong cấu hình của service. 
Cấu hình envoyFilter trong namespace _"istio-system"_ : 

```
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

Khi đó, nếu các request người dùng cuối truy cập vào ứng dụng thông qua gateway istio, trong logs của pod istio-ingressgateway có thể thấy được thông tin source IP public từ các người dùng cuối này. 
Lưu ý tài liệu này được áp dụng cho các phiên bản thấp hơn hoặc bằng 1.22 của istio opensource.
