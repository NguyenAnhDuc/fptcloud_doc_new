---
id: "why-you-should-use-gpu-in-k8s"
title: "Why You Should Use Gpu In K8S"
description: "Kubernetes currently supports GPUs, making it easy to configure and utilize GPU resources for accelerating workloads suc"
sidebar_label: "Why You Should Use..."
sidebar_position: 33
---

# Why You Should Use Gpu In K8S

Kubernetes currently supports GPUs, making it easy to configure and utilize GPU resources for accelerating workloads such as data science, machine learning, and especially deep learning. Kubernetes provides GPUs as a resource type, and device plug-ins enable Pods to access specialized hardware features like GPUs and schedule them as schedulable resources. GPU inherits all the advantages of K8s:
  * **Containerization** : Containers are lightweight, don't require a full operating system, and instead run with a shared OS kernel, making them smaller, faster, and more portable than traditional virtual machines.
  * **Microservices** : Suitable for applications using microservices architecture, Kubernetes coordinates and automates the operation of workload resources. Most ML projects are written in programming languages like Python or R, and applications can be written in different programming languages. In this case, the Containers-based model plays a significant role, allowing developers to run independent tests for different languages.
  * **Autoscaling** : Flexible automatic scaling is a crucial and frequently mentioned feature of Kubernetes. Applications on Kubernetes have three capabilities for automatic scaling: Horizontal Pod Autoscaler (HPA) automatically increases/decreases the number of available pods depending on resource usage, Vertical Pod Autoscaler (VPA) automatically adjusts CPU and memory for existing pods, and Cluster Autoscaler automatically expands the number of worker nodes when pods lack resources to initiate.
  * **Automatic Deployment** : Kubernetes provides automated deployment solutions, combined with CI/CD. Deploying application models to environments becomes very easy.

With an increasing number of AI applications and services, the demand for using GPUs on Kubernetes is growing. NVIDIA has built its own libraries and software to optimize GPU usage in container environments. Using NVIDIA GPUs with Kubernetes enables seamless scaling with the automatic deployment, maintenance, scheduling, and operation of GPU containers on worker nodes.