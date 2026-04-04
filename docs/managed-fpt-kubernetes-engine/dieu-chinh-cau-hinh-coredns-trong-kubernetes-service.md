---
id: "dieu-chinh-cau-hinh-coredns-trong-kubernetes-service"
title: "Adjust CoreDNS Configuration in Kubernetes"
description: "How to adjust CoreDNS configuration in FPT Managed Kubernetes Engine using a ConfigMap."
sidebar_label: "Adjust CoreDNS Configuration in Kubernetes"
sidebar_position: "44"
---

# Adjust CoreDNS Configuration in Kubernetes

FPT Managed Kubernetes Engine (M-FKE) uses CoreDNS to manage and resolve domains for the cluster. Since CoreDNS is managed by FPT, users cannot modify the CoreDNS Corefile directly. This guide shows how to use a ConfigMap to adjust the desired CoreDNS configuration in M-FKE.

## Rewrite DNS

You can configure CoreDNS in M-FKE to perform DNS rewriting by configuring the `coredns-custom` ConfigMap in the `kube-system` namespace as follows:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom
  namespace: kube-system
data:
  test.server: |
    .com:8053 {
    log
    errors
    rewrite stop {
      name regex (.*)\..com {1}.default.svc.cluster.local
      answer name (.*)\.default\.svc\.cluster\.local {1}..com
    }
    forward . /etc/resolv.conf # you can redirect this to a specific DNS server such as 10.0.0.10, but that server must be able to resolve the rewritten domain name
    }
```

After applying, delete the 2 CoreDNS pods in the `kube-system` namespace to reload the ConfigMap configuration for CoreDNS.

## Custom forward server

If you need to specify a DNS server to resolve domains in the cluster, configure as follows:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom
  namespace: kube-system
data:
  test.server: | # you may select any name here, but it must end with the .server file extension
    .com:8053 {
        forward foo.com 1.1.1.1
        forward . 2.2.2.2
    }
```

Where 1.1.1.1 and 2.2.2.2 are DNS servers you define. `forward . 2.2.2.2` means CoreDNS will send resolution requests for *.com domains to DNS server 2.2.2.2.

After applying, delete the 2 CoreDNS pods in the `kube-system` namespace to reload the ConfigMap configuration.

## Custom domains

If you want to configure a custom domain that can only be resolved internally within the cluster (for example, resolving the domain `puglife.local`, which is not a valid public domain), without a `coredns-custom` ConfigMap the M-FKE cluster will not be able to resolve it. Configure as follows:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom
  namespace: kube-system
data:
  puglife.server: | # you may select any name here, but it must end with the .server file extension
    puglife.local:8053 {
        errors
        cache 30
        forward . 192.11.0.1  # this is my test/dev DNS server
    }
```

After applying, delete the 2 CoreDNS pods in the `kube-system` namespace to reload the ConfigMap configuration.

## Stub domain

CoreDNS can be configured with a stub domain as follows. Make sure to update the custom domain and IP address to match the values in your infrastructure environment:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom
  namespace: kube-system
data:
  test.server: | # you may select any name here, but it must end with the .server file extension
    abc.com:8053 {
     errors
     cache 30
     forward . 1.2.3.4
    }
    my.cluster.local:8053 {
        errors
        cache 30
        forward . 2.3.4.5
    }
```

After applying, delete the 2 CoreDNS pods in the `kube-system` namespace to reload the ConfigMap configuration.

## Hosts plugin

You can use CoreDNS to add custom DNS records as follows:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom # this is the name of the configmap you can overwrite with your changes
  namespace: kube-system
data:
    test.override: | # you may select any name here, but it must end with the .override file extension
          hosts { 
              10.0.0.1 example1.org
              10.0.0.2 example2.org
              10.0.0.3 example3.org
              fallthrough
          }
```

After applying, delete the 2 CoreDNS pods in the `kube-system` namespace to reload the ConfigMap configuration.

## Enable DNS query logging

You can use DNS logging to help debug domain resolution in CoreDNS by adding the following configuration to the `coredns-custom` ConfigMap in the `kube-system` namespace:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom
  namespace: kube-system
data:
  log.override: | # you may select any name here, but it must end with the .override file extension
        log
```

After applying, delete the 2 CoreDNS pods in the `kube-system` namespace to reload the ConfigMap configuration.
