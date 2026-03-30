---
id: "faq"
title: "Faq"
description: "**1. What is GPU Virtual Machine?**"
sidebar_label: "Faq"
sidebar_position: 16
pagination_next: null
---

# Faq

### General
**1. What is GPU Virtual Machine?**
GPU Virtual Machine or **GPU VM** is an isolated system with its own dedicated **GPU, CPU, memory, network interface, and storage** , created from a **GPU Cluster** of hardware resources. 
It provides a wide range of **pre-configured virtual machines** designed to align with your workload requirements, offering flexible options from **1 to 8 GPUs per VM**. 
### Features
**2. Can I resize a GPU instance (CPU, RAM, or Disk)?**
  * **With Block Storage – Ephemeral Disk (NVMe):**  
The GPU VM provides **pre-configured flavors** for GPU, CPU, RAM, and Disk.  
You **cannot customize** them. Please choose an appropriate configuration or contact **FPT Cloud Support** for assistance. 
  * **With Block Storage – Persistent Disk:**  
GPU, CPU, and RAM are **fixed configurations**.  
You can **resize storage** according to your needs, but **not below 100 GB per instance**. 

**3. How can I allocate a public IP to my GPU instance?**
  * **With Block Storage – Ephemeral Disk (NVMe):**  
You can only allocate a **Floating IP** after the GPU instance is successfully created. Notice that you have to configure the IP port (port forwarding) complete the IP configuration. Please see the detailed guide [here](../gpu-virtual-machine-en/index.md)
  * **With Block Storage – Persistent Disk:**  
You can allocate a **Floating IP** while creating a new instance or after the instance has been successfully created. 

**4. Which functions are not supported for GPU Virtual Machines with Ephemeral Disk (NVMe)?**
The following functions are **not supported** for GPU Virtual Machines using **Ephemeral Disk (NVMe)** with **NVIDIA Hopper (H100, H200)** : 
  * Resize instance (add/remove GPUs, resize CPU, RAM, or Disk) 
  * Snapshot 
  * Create a template from GPU instance 
  * Only **backup instance with Veeam** is supported. 

**5. What storage options are available for GPU Virtual Machines?**
There are **two types of Block Storage** : 
  1. **Ephemeral Disk (NVMe):**
     * Fixed capacity per GPU instance package (non-expandable) 
     * Optimized for **training workloads** , not long-term storage 
     * Does **not support automated backup or restore**
  2. **Persistent Disk:**
     * Scalable storage capacity on demand 
     * Optimized for **long-term retention**
     * Can set up **automated backup and restore**
     * Separate charges for storage usage (excluding GPU instance cost) 

Note: File Storage (High-performance Tier) service is only supported in the Vietnam region now.
**6. What regions are GPU Virtual Machines available?**
GPU Virtual Machines with **NVIDIA Hopper (H100, H200)** are available in the following regions: 
  * **Hanoi 2, Vietnam**
  * **Tokyo, Japan**

### Billing
**7. How can I be charged for GPU Virtual Machines?**
There are two billing models available: 
  * **Reservation:**  
Fixed price with limited resources based on demand, billed upfront (partial or full) or afterward. The billing period can be **3–9 months** or **1–5 years**. 
  * **Pay-as-you-go (PAYG):**  
Allows you to use resources without limits and pay afterward. Billing increments are typically by the **hour**. 

**8. Does FPT charge GPU Virtual Machines in the Stopped state?**
  * **With Block Storage – Ephemeral Disk (NVMe):**  
Yes. Instances in a **stopped** state continue to reserve the server for your use and therefore **incur charges** until you release this server.  
If you wish to no longer accumulate charges for a server, please **DELETE INSTANCE** in the FPT Cloud portal for Customers. 
  * **With Block Storage – Persistent Disk:**  
No. GPU, CPU, and RAM of stopped instances are **not charged**.  
However, **the storage** still charged until you completely delete it.

You are also billed for other **services and resources** that are attached to any GPU instance.