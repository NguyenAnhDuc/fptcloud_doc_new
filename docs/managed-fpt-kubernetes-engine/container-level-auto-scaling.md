---
id: "container-level-auto-scaling"
title: "Container-level auto scaling"
description: "**Horizontal Pod Autoscaler (HPA)** automatically adjusts the resource allocation for workload resources (such as Deploy"
sidebar_label: "Container-level auto scaling"
sidebar_position: 25
---

# Container-level auto scaling

**Horizontal Pod Autoscaler (HPA)** automatically adjusts the resource allocation for workload resources (such as Deployments or StatefulSets) to dynamically scale to the application's resource demands Basically, when the workload of an application running on Kubernetes increases, HPA will deploy more Pods to meet the resource requirements. When the workload decreases and the number of Pods is higher than the configured minimum, HPA will reduce the workload resources, meaning it decreases the number of Pods. HPA for GPU uses custom metrics from DCGM to monitor and scale Pods based on the application's GPU utilization.
_Example deployment with GPU HPA:_

```
apiVersion: autoscaling/v2beta2
kind: HorizontalPodAutoscaler
metadata:
 name: my-gpu-app
spec:
 maxReplicas: 3  # Update this accordingly
 minReplicas: 1
 scaleTargetRef:
   apiVersion: apps/v1beta1
   kind: Deployment
   name: my-gpu-app # Add label from Deployment we need to autoscale
 metrics:
 - type: Pods  # scale pod based on gpu
   pods:
     metric:
       name: DCGM_FI_PROF_GR_ENGINE_ACTIVE  # Add the DCGM metric here accordingly
     target:
       type: AverageValue
       averageValue: 0.8 # Set the threshold value as per the requirement
```

_More details can be found at[NVIDIA’s DCGM Metrics docs](https://docs.nvidia.com/datacenter/dcgm/1.6/dcgm-api/group__dcgmFieldIdentifiers.html#group__dcgmFieldIdentifiers_1ga12c2f22beff3cf71f7ecf9ad905b8ca)_
You can view the HPA by running this command:

```
Copykubectl get hpa -A
```

[![](/img/migrated/73-9f2c36c7.png)](/img/migrated/73-9f2c36c7.png)