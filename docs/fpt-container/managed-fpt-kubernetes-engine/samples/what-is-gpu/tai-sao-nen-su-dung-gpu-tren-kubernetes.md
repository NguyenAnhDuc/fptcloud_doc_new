---
id: "tai-sao-nen-su-dung-gpu-tren-kubernetes"
title: "Why use GPU on Kubernetes?"
description: "The benefits of running GPU workloads on Kubernetes for AI, machine learning, and deep learning."
sidebar_label: "Why use GPU on Kubernetes?"
sidebar_position: "41"
---

# Why use GPU on Kubernetes?

Kubernetes now supports GPU, making it easy to configure and use GPU resources to accelerate processing for workloads such as data science, machine learning, and especially deep learning. Kubernetes exposes GPU as a resource type — device plugins allow Pods to access specialized hardware features like GPUs and present them as schedulable resources. GPU inherits all the advantages of Kubernetes:

  * **Containerization:** Containers are lightweight — they do not require a full operating system and instead run with a shared OS kernel. This makes containers smaller, faster, and more portable than traditional virtual machines.

  * **Microservices:** Well-suited for applications using microservices architecture, Kubernetes orchestrates and automates workload resource operations. Most ML projects are written in programming languages such as Python or R, and applications may be written in other languages. The container-based model plays an important role in this case, enabling developers to run experiments independently across different languages.

  * **Autoscaling:** Flexible automatic scaling is one of Kubernetes' most important and widely discussed features. Applications on Kubernetes have three auto-scaling capabilities: Horizontal Pod Autoscaler (HPA) automatically increases/decreases the number of available pods based on resource usage; Vertical Pod Autoscaler (VPA) automatically adjusts CPU and memory for existing pods; Cluster Autoscaler automatically scales the number of worker nodes when pods lack resources to start.

  * **Automated deployment:** Kubernetes provides automated deployment solutions. Combined with CI/CD, deploying application models to various environments becomes very straightforward.

With the growing number of AI applications and services, the demand for GPU on Kubernetes is increasing. NVIDIA has built its libraries and software to optimize GPU usage in containerized environments. Kubernetes with NVIDIA GPUs allows clusters to scale seamlessly with automated deployment, maintenance, scheduling, and operation of GPU containers across worker nodes.
