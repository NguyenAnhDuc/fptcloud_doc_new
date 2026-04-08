---
id: "huong-dan-su-dung-autoscaler-voi-gpu"
title: "Using Autoscaler with GPU"
sidebar_label: "Using Autoscaler with GPU"
sidebar_position: "7"
---

# Using Autoscaler with GPU

## Container-level autoscaling

Horizontal Pod Autoscaler (HPA) automatically updates workload resources (such as Deployments or StatefulSets) to scale them according to application demand. In practice, when a Kubernetes application workload increases, HPA deploys more pods to meet resource requirements. If the load decreases and the number of pods is above the configured minimum, HPA reduces the workload resource (Deployment, StatefulSet, or similar), meaning it reduces the number of pods. GPU HPA uses DCGM custom metrics to monitor and scale pods up or down based on the GPU application workload.

To configure HPA for a GPU application, refer to the following configuration:

```yaml
apiVersion: autoscaling/v2beta2

kind: HorizontalPodAutoscaler

metadata:

 name: my-gpu-app

spec:

 maxReplicas: 3  # Update this accordingly

 minReplicas: 1

 scaleTargetRef:

   apiVersion: apps/v1beta1

   kind: Deployment

   name: my-gpu-app # Add label from Deployment we need to autoscale

 metrics:

 - type: Pods  # scale pod based on gpu

   pods:

     metric:

       name: DCGM_FI_PROF_GR_ENGINE_ACTIVE # Add the DCGM metric here accordingly

     target:

       type: AverageValue

       averageValue: 0.8 # Set the threshold value as per the requirement
```

For further reference, see the [NVIDIA documentation on DCGM metrics](https://docs.nvidia.com/datacenter/dcgm/1.6/dcgm-api/group__dcgmFieldIdentifiers.html#group__dcgmFieldIdentifiers_1ga12c2f22beff3cf71f7ecf9ad905b8ca).

To check that the HPA has been initialized for the GPU application, run:

[![](/img/migrated/73-9f2c36c7.png)](/img/migrated/73-9f2c36c7.png)

## Node-level autoscaling

Like standard Cluster Autoscaler, the Kubernetes cluster automatically scales worker nodes up or down within a worker group based on GPU usage demand. It automatically adds new workers to a worker group when the application running in that group cannot be served with sufficient GPU resources from the existing worker nodes. Pending pods caused by insufficient node resources will be served by new worker nodes after scaling up. Cluster Autoscaler also automatically removes nodes whose utilization is below the threshold (default 50%).

Worker group node count configuration is defined on the FPTCloud Portal as shown below:

**See also:** [FPT Cloud Managed Kubernetes Autoscaler](/docs/en/fpt-container/managed-fpt-kubernetes-engine/tutorials/modify-k8s-cluster-configuration/cluster-autoscale)

[![](/img/migrated/Picture22-1-1be5f3e3.png)](/img/migrated/Picture22-1-1be5f3e3.png)
