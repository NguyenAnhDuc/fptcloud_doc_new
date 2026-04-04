---
id: "cau-hinh-proxy-protocol-cho-nginx-ingress"
title: "Configure Proxy Protocol for Nginx Ingress"
description: "How to configure Proxy Protocol for Nginx Ingress Controller in Managed Kubernetes to retrieve the public IP of end users."
sidebar_label: "Configure Proxy Protocol for Nginx Ingress"
sidebar_position: "52"
---

# Configure Proxy Protocol for Nginx Ingress

If you are using FPT Cloud Managed Kubernetes and need to retrieve the public IP of end users when they access applications in Kubernetes through an Nginx ingress gateway, you can configure the following:

1. Enable proxy protocol for the **nginx-ingress-controller** service by adding the annotation `loadbalancer.fptcloud.com/proxy-protocol: "true"` to the service configuration.

2. Add the following fields to the **nginx-ingress-controller** ConfigMap in the namespace where you deploy the Nginx ingress controller:

```
allow-snippet-annotations: "true" 
proxy-protocol: "True" 
real-ip-header: proxy_protocol 
use-proxy-protocol: "true" 
```

3. Restart the Nginx ingress controller to apply the new ConfigMap configuration.

If your application needs to call the ingress domain on port 443, add the following annotation to the Nginx ingress controller LB service:

```
loadbalancer.fptcloud.com/enable-ingress-hostname: "true"
```

When using a LoadBalancer service with proxy protocol for L4 LB, pods inside the cluster cannot connect to the service through the ingress domain on port 443, while access from the external internet still works normally. This occurs because kube-proxy adds the LoadBalancer's Public IP to iptables on the nodes and maps that IP to an interface on the worker node. As a result, requests from pods to the ingress domain are blocked at the node interface and cannot reach the public network. Configuring the ingress hostname resolves this issue, ensuring connectivity both from inside the cluster and from the external internet.
