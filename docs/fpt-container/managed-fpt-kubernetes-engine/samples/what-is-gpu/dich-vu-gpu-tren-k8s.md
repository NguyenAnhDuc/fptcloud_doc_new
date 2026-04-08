---
id: "dich-vu-gpu-tren-k8s"
title: "GPU Service on Kubernetes"
description: "FPT Cloud provides Kubernetes with NVIDIA GPU support, offering flexible GPU configuration, automated resource management, and GPU sharing."
sidebar_label: "GPU Service on Kubernetes"
sidebar_position: "43"
---

# GPU Service on Kubernetes

FPT Cloud provides Kubernetes with NVIDIA GPU support, featuring the following key capabilities:
  * Flexible GPU configuration with selectable GPU type and GPU memory for each Worker Group.
  * Automated GPU resource management and allocation in Kubernetes using NVIDIA Operator.
  * GPU visualization and monitoring via NVIDIA DCGM.
  * Automatic Container/Node scaling with Autoscaler when application GPU resource demand increases or decreases.
  * GPU sharing support via Multi-Instance mechanism to optimize GPU resource usage and cost.

FPT Cloud uses the NVIDIA GPU Operator, which provides tools to automatically manage all software components required to use GPUs on Kubernetes. The GPU Operator allows users to use GPU resources in the same way as CPU resources within a Kubernetes cluster.

For detailed instructions on setting up and using GPU on Kubernetes, please refer to the following guides:
- [Setup Kubernetes cluster for GPU usage](./setup-k8s-cluster-for-gpu-usage.md)
- [How to use GPU in Kubernetes](./how-to-use-gpu-in-kubernetes.md)
- [GPU sharing](/docs/en/fpt-container/managed-fpt-kubernetes-engine/samples/what-is-gpu/gpu-sharing)
- [Setting up GPU telemetry](./setting-up-gpu-telemetry.md)
- [Deploy application with GPU on Kubernetes](./deploy-application-with-gpu-on-k8s.md)
