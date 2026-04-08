---
id: "how-to-use-gpu-in-kubernetes"
title: "How to use GPU in Kubernetes"
description: "FPT Cloud provides **Kubernetes with NVIDIA GPUs** , offering the following key features:"
sidebar_label: "How to use GPU in Kubernetes"
sidebar_position: 20
draft: true
---

# How to use GPU in Kubernetes

FPT Cloud provides **Kubernetes with NVIDIA GPUs** , offering the following key features:
  * **Flexible GPU configuration** with multiple GPU types, optional GPU memory, applied to each Worker Group.
  * Automated GPU **resource management and allocation** in Kubernetes with the NVIDIA Operator.
  * **Visualization and monitoring** of GPUs using NVIDIA DCGM (Data Center GPU Manager).
  * Automatic scaling of Containers/Nodes with **Autoscaler** when applications require increased/decreased GPU resources.
  * **GPU sharing** support with the Multi-Instance mechanism, optimizing GPU resource usage and costs.

FPT Cloud utilizes the **NVIDIA GPU Operator** , providing an automated tool for managing all the necessary software components to use GPUs on Kubernetes. The GPU Operator enables users to utilize GPU resources similar to using CPUs in a Kubernetes cluster.
The components of the Operator include:
  * NVIDIA Drivers (CUDA, MIG, ...)
  * NVIDIA Device Plugin
  * NVIDIA Container Toolkit
  * NVIDIA GPU Feature Discovery
  * NVIDIA Data Center GPU Manager (Monitoring)

Currently, FPT Cloud supports Kubernetes using NVIDIA A30 GPUs with the following MIG profiles:  
|  **No.**  |  **GPU A30 Profile**  |  **Strategy**  |  **Number instance**  |  **Instance resource**  |  
| --- | --- | --- | --- | --- |  
| 1   | all-1g.6gb   | single   | 4   | 1g.6gb   |  
| 2   | all-2g.12gb   | single   | 2   | 2g.12gb   |  
| 3   | all-balanced   | mixed   | 2   | 1g.6gb   |  
|   | all-balanced  | mixed  | 1  | 2g.12gb   |  
| 4   | none (no label)   | none   | 0   | 0 (Entire)   |  
_Example:_
If the configuration strategy **single: all-1g.6gb** is selected, the A30 GPU on the worker node is divided into 4 MIG devices with logical GPU resources equivalent to ¼ of the physical GPU and 6GB of GPU RAM each.
**Note:**
  * MIG configuration applies to all cards attached to the worker.
  * MIG strategy across worker groups in the same cluster must be of the same type (_single/mixed/none_).
