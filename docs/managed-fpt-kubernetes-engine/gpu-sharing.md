---
id: "gpu-sharing"
title: "Gpu Sharing"
description: "One of the significant advantages of using GPUs on K8s is the ability to share GPUs. Most workloads do not require the f"
sidebar_label: "Gpu Sharing"
sidebar_position: 34
---

# Gpu Sharing

One of the significant advantages of using GPUs on K8s is the ability to share GPUs. Most workloads do not require the full memory and computing resources of individual GPUs. Therefore, sharing GPUs among multiple processes is essential to increase GPU utilization and reduce infrastructure costs.
GPU sharing currently has three mechanisms:
  1. Time Slicing:
  2. Multi-instance GPU (MIG)
  3. Multi-Process Service (MPS):

Time slicing is a mechanism that allows GPU workloads to be interleaved with each other. It utilizes a GPU time-slicing scheduler to concurrently execute multiple CUDA processes through time-sharing.
When Time slicing is activated, the GPU will share its resources among various processes in a fair-sharing manner by switching between processes at regular intervals. This mechanism introduces overhead as a result of continuous process switching, leading to frame stuttering and increased latency. Additionally, Time slicing lacks a memory isolation mechanism between shared GPU processes or any memory allocation limits, which can result in frequent Out-of-Memory (OOM) errors.
Multi-Instance GPU (MIG) is an architecture available on NVIDIA that enables the subdivision of a GPU into separate GPU partitions. These partitions are isolated from each other in terms of memory bandwidth, cache memory, and processing cores.
With MIG, each instance's graphics processor is independent and has its own dedicated memory system. The on-chip port crossbar, L2 cache, memory controllers, and DRAM bus addresses are uniquely assigned to each instance. This ensures fault tolerance, and the application's workload can be computed with throughput and latency on each individual instance.
[![](/img/migrated/65-1-a1a799fc.png)](/img/migrated/65-1-a1a799fc.png)
These independent GPU partitions (MIG) are named according to a format indicating the device's memory and compute resources, for example, "1g.gb" corresponds to a GPU slice with 6 GB of memory.
MIG does not allow the creation of GPU partitions with custom sizes and quantities, as each GPU model supports only a specific set of MIG configurations depending on the hardware configuration of the device. This limits resource optimization when utilizing the GPU. Furthermore, MIG devices must adhere to specific arrangement rules, further restricting the flexibility of their usage.
MIG is a GPU sharing method that provides the highest level of isolation between processes. However, this mechanism lacks flexibility and is only compatible with certain GPU architectures (Ampere and Hopper).
In the context of Kubernetes (K8s), NVIDIA has developed the GPU Operator to facilitate MIG usage, although there are still limitations. Users utilize a ConfigMap to define a set of MIG configurations that can be applied to each node by labeling that node.
To efficiently use GPU resources in a K8s cluster, users must continuously modify the ConfigMap to adjust MIG sizes to meet the changing resource requirements of workloads. This process is inconvenient, even though configuring MIG is an improvement over directly accessing nodes and manually creating/deleting MIG devices. Nevertheless, it still requires effort and time. As a result, MIG device configurations are rarely modified over time or are not applied at all, leading to significant inefficiency in GPU utilization and suboptimal GPU usage costs. This issue is addressed by the use of the Automatic GPU Partitioning (MPS) mechanism.
Multi-Process Service (MPS) utilizes the client-server model of the CUDA API, enabling the simultaneous execution of multiple processes on the same GPU.
The server manages GPU access rights concurrently among clients. Clients connect to the server through the client runtime, integrated into the CUDA Driver library and transparent to the application.
Fundamentally, MPS is compatible with all current GPUs, providing the highest flexibility, allowing the creation of GPU partitions with options for both memory capacity and computational capabilities. However, the MPS mechanism does not truly isolate the entire memory space between processes. In most cases, MPS demonstrates a good compromise between MIG and Time-slicing.
[![](/img/migrated/66-b3efd20c.png)](/img/migrated/66-b3efd20c.png)
Compared to Time-slicing, MPS eliminates the overhead of context switching by running processes in parallel through spatial sharing, leading to improved computational performance. Furthermore, MPS allocates a separate GPU memory address space for each process, addressing the limitations of Time-slicing.
However, in MPS, processes are not completely isolated from each other. Although MPS allows limiting the memory and computational resources of a client, it does not provide error isolation and memory protection. This means that a process encountering an issue can lead to a GPU reset, affecting all other processes running on the GPU. NVIDIA Kubernetes does not currently support MPS partitioning, so using MPS on Kubernetes requires third-party software.