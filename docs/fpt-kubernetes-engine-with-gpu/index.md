---
id: "fpt-kubernetes-engine-with-gpu"
title: "FPT Kubernetes Engine with GPU"
description: "FPT Kubernetes Engine with GPU"
sidebar_label: "FPT Kubernetes Engine with GPU"
sidebar_position: 1
---

# FPT Kubernetes Engine with GPU

FPT Cloud provides Kubernetes with NVIDIA GPU support, featuring the following key capabilities:
  * Flexible GPU configuration with multiple GPU types and optional GPU memory, applied per Worker Group.
  * Automatic GPU resource management and allocation in Kubernetes using NVIDIA Operator.
  * GPU visualization and monitoring with NVIDIA DCGM.
  * Automatic Container/Node scaling with Autoscaler when applications increase or decrease GPU resource usage.
  * GPU sharing support with Multi-Instance mechanism to optimize GPU resource utilization and cost.

FPT Cloud uses the NVIDIA GPU Operator, which provides tools to automatically manage all software components required to use GPUs on Kubernetes. The GPU Operator allows users to use GPU resources just like CPU resources in a Kubernetes cluster.
Operator components include:
  * NVIDIA Drivers (CUDA, MIG, …)
  * NVIDIA Device Plugin
  * NVIDIA Container Toolkit
  * NVIDIA GPU Feature Discovery
  * NVIDIA Data Center GPU Manager (Monitoring)

In the **Hanoi** and **Saigon** regions, FPT Cloud currently supports Kubernetes with Nvidia A30 GPUs with the following MIG profiles:
| **No.** | **GPU A30 Profile** | **Strategy** | **Number instance** | **Instance resource** |
| --- | --- | --- | --- | --- |
| 1 | all-1g.6gb | single | 4 | 1g.6gb |
| 2 | all-2g.12gb | single | 2 | 2g.12gb |
| 3 | all-balanced | mixed | 2 | 1g.6gb |
| 4 |  |  | 1 | 2g.12gb |
| 5 | none (no label) | none | 0 | 0 (Entire) |

In the Hanoi 2 and Japan regions, FPT Cloud currently supports Kubernetes with Nvidia H100 and Nvidia H200 GPUs:
| **No.** | **GPU H100 SXM5** | **Strategy** | **Number instance** | **Instance resource** |
| --- | --- | --- | --- | --- |
| 1 | all-1g.10gb | single | 7 | 1g.10gb |
| 2 | all-1g.20gb | single | 4 | 1g.20gb |
| 3 | all-2g.20gb | single | 3 | 2g.20gb |
| 4 | all-3g.40gb | single | 2 | 3g.40gb |
| 5 | all-4g.40gb | single | 1 | 4g.40gb |
| 6 | all-7g.80gb | single | 1 | 7g.80gb |
| 7 | all-balanced | mixed | 2 / 1 / 1 | 1g.10gb / 2g.20gb / 3g.40gb |
| 8 | none (no label) | none | 0 | 0 (Entire) |

| **No.** | **GPU H200 SXM5** | **Strategy** | **Number instance** | **Instance resource** |
| --- | --- | --- | --- | --- |
| 1 | all-1g.18gb | single | 7 | 1g.18gb |
| 2 | all-1g.35gb | single | 4 | 1g.35gb |
| 3 | all-2g.25gb | single | 3 | 2g.25gb |
| 4 | all-3g.71gb | single | 2 | 3g.71gb |
| 5 | all-4g.71gb | single | 1 | 4g.71gb |
| 6 | all-7g.141gb | single | 1 | 7g.141gb |
| 7 | all-balanced | mixed | 2 / 1 / 1 | 1g.18gb / 2g.35gb / 3g.71gb |
| 8 | none (no label) | none | 0 | 0 (Entire) |

**_Example:_**
If you select strategy single: all-1g.6gb, the A30 GPU card on the worker is divided into 4 MIG devices, each with logical GPU resources equal to 1/4 of the physical GPU and 6 GB GPU RAM.
If you select strategy single: all-1g.10gb, the H100 GPU card on the worker is divided into 7 MIG devices, each with logical GPU resources equal to 1/7 of the physical GPU and 10 GB GPU RAM.

**_Note:_**
MIG config applies to all GPU cards attached to the worker. The MIG strategy across all worker groups in the same cluster must be of the same type (single/mixed/none).
