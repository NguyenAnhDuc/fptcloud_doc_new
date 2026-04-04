---
id: "trien-khai-ung-dung-tren-worker-pool"
title: "Deploy applications on a worker pool"
description: "How to configure and deploy applications on specific worker pools in Managed FPT Kubernetes Engine."
sidebar_label: "Deploy applications on a worker pool"
sidebar_position: "19"
---

# Deploy applications on a worker pool

Managed FKE manages workers using worker pools, making it convenient for users to deploy applications without having to worry about resource scaling.

## Configure a manifest file to deploy an application

Example: deploying an application on a cluster with 2 worker pools:
[![Userguide M FKE 30](/img/migrated/Userguide-M-FKE-30-f3f4045c.png)](/img/migrated/Userguide-M-FKE-30-f3f4045c.png)

Each worker pool has one worker node:
[![Userguide M FKE 31](/img/migrated/Userguide-M-FKE-31-80027e2e.png)](/img/migrated/Userguide-M-FKE-31-80027e2e.png)

Worker nodes are labeled to distinguish nodes and make it easy to deploy applications to worker nodes with a common label:
[![Userguide M FKE 32](/img/migrated/Userguide-M-FKE-32-7a9414e6.png)](/img/migrated/Userguide-M-FKE-32-7a9414e6.png)

Worker nodes in the **worker-1zx5wqdu** worker pool are labeled **worker.fptcloud/pool=worker-1zx5wqdu**.

You can copy the worker pool name by clicking on the worker pool configuration details:
[![Userguide M FKE 33](/img/migrated/Userguide-M-FKE-33-1024x558-ad024fb2.png)](/img/migrated/Userguide-M-FKE-33-1024x558-ad024fb2.png)

When using resources to deploy applications in Kubernetes (Pod, Deployment, StatefulSet, DaemonSet, ReplicaSet), you can add a Node Affinity Rule or Node Selector in the Specification section of the configuration file:

Using Node Affinity Rule:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment-test
  labels:
    app: nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "700Mi"
            cpu: "800m"
          limits:
            memory: "900Mi"
            cpu: "900m"
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: worker.fptcloud/pool
                operator: In
                values:
                - worker-1zx5wqdu
```

Using Node Selector:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment-test
  labels:
    app: nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "700Mi"
            cpu: "800m"
          limits:
            memory: "900Mi"
            cpu: "900m"
      nodeSelector:
        worker.fptcloud/pool: worker-1zx5wqdu
```

The value in the `values` section (Node Affinity Rule) and the `nodeSelector` value is the name of the worker pool where you want to deploy the application.

## Deploy an application

When deploying the nginx application using a manifest file:
[![Userguide M FKE 36](/img/migrated/Userguide-M-FKE-36-55bd9a6e.png)](/img/migrated/Userguide-M-FKE-36-55bd9a6e.png)

If one pod is pending due to insufficient worker node resources in the pool:
[![Userguide M FKE 37](/img/migrated/Userguide-M-FKE-37-1024x88-cd236bc8.png)](/img/migrated/Userguide-M-FKE-37-1024x88-cd236bc8.png)

The Cluster Autoscaler component on the FPT Cloud admin side automatically scales out an additional worker node in that pool to serve the pending nginx pod.
[![Userguide M FKE 38](/img/migrated/Userguide-M-FKE-38-1408a3cf.png)](/img/migrated/Userguide-M-FKE-38-1408a3cf.png)

After a worker node is added to the worker pool, the previously Pending nginx pod transitions to Running status.

When scaling the application down to use fewer pods, the available resources on worker nodes increase. When CPU and Memory utilization drops below 50% of the node's maximum capacity for 10 consecutive minutes, that node is automatically removed from the worker pool, saving costs for the user.
