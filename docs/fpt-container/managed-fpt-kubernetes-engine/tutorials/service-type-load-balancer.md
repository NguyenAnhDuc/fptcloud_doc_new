---
id: "service-type-load-balancer"
title: "Service Type Load Balancer"
description: "Managed FKE integrates FPT Cloud Controller Manager to support Load Balancer service type with various configuration options."
sidebar_label: "Service Type Load Balancer"
sidebar_position: "21"
---

# Service Type Load Balancer

Managed FKE is built on native Kubernetes with additional cloud provider components integrated, including the FPT Cloud Controller Manager. This component manages worker nodes in the cluster and Load Balancer type services. You can expose your application to the internet in several ways, including creating an ingress for the service, creating a NodePort service with a floating IP attached to the worker VM, or using a Load Balancer type service.

FPT Cloud supports creating Load Balancer type services with the following annotation options in the service configuration:

| **Key** | **Value** | **Default** | **Purpose** |
| --- | --- | --- | --- |
| service.beta.kubernetes.io/fpt-load-balancer-internal | "true"/"false" | "false" | Set to "true" if you do not want to expose the service to the internet |
| loadbalancer.fptcloud.com/keep-floatingip | "true"/"false" | "false" | Set to "true" to retain the floating IP of the LoadBalancer service in the VPC after deleting the service |
| loadbalancer.fptcloud.com/proxy-protocol | "true"/"false" | "false" | Set to "true" to use PROXY protocol for the LoadBalancer. Note: Proxy protocol is only supported with Layer 4 LoadBalancer |
| loadbalancer.fptcloud.com/enable-health-monitor | "true"/"false" | "true" | Set to "false" to disable health monitor for the LoadBalancer Pool |
| service.beta.kubernetes.io/fpt-load-balancer-type | LBv1: basic/advanced/standard/premium (LBv1 no longer supported); LBv2: Starter/Basic-1/Basic-2/Standard/Advanced/Premium/Extra-1/Extra-2/Extra-3/Extra-S/Extra-M/Extra-L | LBv1: "basic"; LBv2: "Basic-1" | Configure the LoadBalancer flavor to handle the corresponding load from the application backend pool. Note: Using a value other than the allowed values for this annotation may cause errors |
| loadbalancer.fptcloud.com/enable-ingress-hostname | "true"/"false" | "false" | Set to "true" to enable ingress hostname for the LoadBalancer service type |
| loadbalancer.fptcloud.com/load-balancer-version | "v1"/"v2" | "v2" | Set to "v1" to use LBv1. LBv2 is created by default if this annotation is not configured. Note: Proxy protocol and x-forwarded-for cannot be used simultaneously |
| loadbalancer.fptcloud.com/x-forwarded-for | "true"/"false" | "false" | Set to "true" to forward request headers to the LoadBalancer pool backend when using a Layer 7 LoadBalancer |
| loadbalancer.fptcloud.com/node-selector | array of key=value pairs, e.g: "env=prod, region=han" | | Select nodes to include in the LoadBalancer member pool; selected nodes must contain all specified key=value pairs |
| loadbalancer.fptcloud.com/connection-limit | integer | -1 | Maximum concurrent connection limit. -1 means unlimited |
| loadbalancer.fptcloud.com/timeout-client-data | integer (ms) | 50000 | Timeout for data from the client side, in milliseconds |
| loadbalancer.fptcloud.com/timeout-member-connect | integer (ms) | 5000 | Connection timeout between the load balancer and backend, in milliseconds |
| loadbalancer.fptcloud.com/timeout-member-data | integer (ms) | 50000 | Data timeout between the load balancer and backend, in milliseconds |
| loadbalancer.fptcloud.com/timeout-tcp-inspect | integer (ms) | 0 | Timeout for TCP inspection. 0ms disables TCP inspection |
| loadbalancer.fptcloud.com/health-monitor-delay | integer (s) | 60 | Interval between health checks for pool members, in seconds |
| loadbalancer.fptcloud.com/health-monitor-timeout | integer (s) | 30 | Maximum time for a single health check, in seconds |
| loadbalancer.fptcloud.com/health-monitor-max-retries | integer | 5 | Number of failed health checks before marking a backend as DOWN |
| loadbalancer.fptcloud.com/health-monitor-max-retries-down | integer | 3 | Number of successful health checks to mark a backend as UP again |

## 1. Create a Load Balancer service with a specific floating IP

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

**Note:** The public IP must be allocated to the VPC and have Inactive status. Check under **Networking -> Floating IPs**.

## 2. Restrict access to the Load Balancer using `loadBalancerSourceRanges`

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

**Note:** `loadBalancerSourceRanges` contains an array of public IP ranges allowed to access the Load Balancer. By default, M-FKE creates Load Balancer services with the source IP range `0.0.0.0/0`.
