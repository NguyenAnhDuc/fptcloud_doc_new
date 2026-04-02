---
id: "service-load-balancer-managed-gpu-cluster"
title: "Load balancer service for Managed GPU Cluster"
description: "Managed GPU Cluster is built on native Kubernetes and integrates additional cloud provider components, including the FPT Cloud Controller Manager."
sidebar_label: "Load balancer service for Managed GPU Cluster"
sidebar_position: 13
---

# Load balancer service for Managed GPU Cluster

Managed GPU Cluster is built on native Kubernetes and integrates additional cloud provider components, including the FPT Cloud Controller Manager. This component manages worker nodes in the cluster and Load Balancer type services. Users can expose their applications to the internet in several ways so that their end users can access the application or service. These options include creating an ingress for the service, creating a NodePort service and attaching a floating IP to the worker node, or using a Load Balancer type service.

FPT Cloud supports users in creating Load Balancer type services with the following annotation options in the service configuration:

| **Key** | **Value** | **Default** | **Purpose** |
| --- | --- | --- | --- |
| service.beta.kubernetes.io/fpt-load-balancer-internal | "true"/"false" | "false" | Set to "true" to keep the service internal (not exposed to the internet). |
| loadbalancer.fptcloud.com/keep-floatingip | "true"/"false" | "false" | Set to "true" to retain the floating IP of the LoadBalancer service in the VPC after the service is deleted. |
| loadbalancer.fptcloud.com/proxy-protocol | "true"/"false" | "false" | Set to "true" to use the PROXY protocol for the LoadBalancer. Note: Proxy protocol is only supported with layer 4 LoadBalancer. |
| loadbalancer.fptcloud.com/enable-health-monitor | "true"/"false" | "true" | Set to "false" to disable the health monitor for the LoadBalancer Pool. |
| service.beta.kubernetes.io/fpt-load-balancer-type | LBv1: basic / advanced / standard / premium. LBv2: Basic-1 / Basic-2 / Standard / Advanced / Premium | LBv1: "basic", LBv2: "Basic-1" | Configure the LoadBalancer flavor to match the load of the application behind the LoadBalancer pool. |
| loadbalancer.fptcloud.com/enable-ingress-hostname | "true"/"false" | "false" | Set to "true" to enable ingress hostname for the LoadBalancer type service. |
| loadbalancer.fptcloud.com/load-balancer-version | "v1"/"v2" | "v1" | Set to "v2" to use LBv2 for the LoadBalancer type service. LBv1 is created by default if this annotation is not configured. |
| loadbalancer.fptcloud.com/x-forwarded-for | "true"/"false" | "false" | Set to "true" to forward request headers to the LoadBalancer pool backend when using a layer 7 LoadBalancer. Note: Proxy protocol and x-forwarded-for cannot be used at the same time. |

In addition, Managed GPU Cluster supports the following configurations:

#### 1. Create a LoadBalancer type service with a specific floating IP attached to the Load Balancer:

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

Note: The public IP must be allocated to the VPC and be in Inactive status. Check under **Networking -> Floating IPs**.

#### 2. Restrict access to the Load Balancer using `loadBalancerSourceRanges` in the `spec` section of the service configuration:

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

Note: `loadBalancerSourceRanges` contains an array of public IP ranges allowed to access the Load Balancer. By default, Managed GPU Cluster creates a Load Balancer type service with source IP range 0.0.0.0/0.
