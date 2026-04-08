---
id: "cau-hinh-proxy-protocol-cho-istio-ingress"
title: "Configure Proxy Protocol for Istio Ingress"
description: "How to configure Proxy Protocol for Istio Ingress Gateway in Managed Kubernetes to retrieve the public IP of end users."
sidebar_label: "Configure Proxy Protocol for Istio Ingress"
sidebar_position: "51"
---

# Configure Proxy Protocol for Istio Ingress

If you are using FPT Cloud Managed Kubernetes and need to retrieve the public IP of end users when they access applications in Kubernetes through an Istio gateway, you can configure the following:

Enable proxy protocol for the **istio-ingressgateway** service by adding the annotation `loadbalancer.fptcloud.com/proxy-protocol: "true"` to the service configuration.

Configure an EnvoyFilter in the `istio-system` namespace:

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

With this configuration, when end users access the application through the Istio gateway, the logs of the istio-ingressgateway pod will show the source public IP of those end users.

**Note:** This guide applies to Istio open source versions 1.22 and earlier.
