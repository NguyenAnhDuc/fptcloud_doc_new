---
id: "load-balancer-services"
title: "Load Balancer services"
description: "The **M-FKE** product is built on Native Kubernetes and incorporates additional FPT Cloud's components into Kubernetes, "
sidebar_label: "Load Balancer services"
sidebar_position: 18
draft: true
---

# Load Balancer services

The **M-FKE** product is built on Native Kubernetes and incorporates additional FPT Cloud's components into Kubernetes, including the **FPT Cloud Controller Manager**. This component aims to manage worker nodes in the cluster and Load Balancer Services. 
Users are provided various methods to expose their applications to the internet to access the applications and services. These methods include creating an ingress for the service, then creating a NodePort Service and attaching a floating IP to the VM worker node, or using a Load Balancer Service.
FPT Cloud supports creating Load Balancer Services and automatically assigns a public IP to that load balancer. When using a Load Balancer Service, in addition to creating the default load balancer for the worker nodes, users can add optional configurations for the load balancer using annotations in the service manifest file:  
| Key  | Value  | Default  | Meaning  |  
| --- | --- | --- | --- |  
| service.beta.kubernetes.io/fpt-load-balancer-type  | basic/advanced/standard/premium  | basic  | Load Balancer type (basic/advanced/standard/premium)  |  
| service.beta.kubernetes.io/fpt-load-balancer-internal  | true/false  | False  | Does the service want to be public on the internet? If not, it will not create a floating IP attached to the load balancer.  |  
Users can create a Load Balancer Service by adding annotations to the service configuration based on their usage needs.
For example:

```
CopyapiVersion: apps/v1
kind: Deployment
metadata:
  name: coffee
spec:
  replicas: 2
  selector:
    matchLabels:
      app: coffee
  template:
    metadata:
      labels:
        app: coffee
    spec:
      containers:
      - name: coffee
        image: nginxdemos/hello:plain-text
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: coffee-svc
  annotations:
    service.beta.kubernetes.io/fpt-load-balancer-type: basic
spec:
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
    name: http
  selector:
    app: coffee
  type: LoadBalancer
---
```

This example creates a Load Balancer Service with the **Basic** type. After applying the manifest file for the service, a Load Balancer Service is created in the Kubernetes cluster:
[![](/img/migrated/48-1-e461b092.png)](/img/migrated/48-1-e461b092.png)
When the **EXTERNAL-IP** field changes from **Pending** to a public IP, the application can be accessed from the internet using that public IP or a domain associated with that public IP.
[![](/img/migrated/49-1-be984dc5.png)](/img/migrated/49-1-be984dc5.png)
Users can also create an internal Load Balancer Service, which cannot be accessed from outside the cluster, serving the purpose of allowing only internal services to interact with each other:

```
CopyapiVersion: apps/v1
kind: Deployment
metadata:
  name: coffee
spec:
  replicas: 2
  selector:
    matchLabels:
      app: coffee
  template:
    metadata:
      labels:
        app: coffee
    spec:
      containers:
      - name: coffee
        image: nginxdemos/hello:plain-text
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: coffee-svc
  annotations:
    service.beta.kubernetes.io/fpt-load-balancer-internal: "true"
spec:
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
    name: http
  selector:
    app: coffee
  type: LoadBalancer
---
```

When an internal Load Balancer Service is created, the **EXTERNAL-IP** field of the service is not a public IP but a private IP.
[![](/img/migrated/51-1-cd84aa92.png)](/img/migrated/51-1-cd84aa92.png)
