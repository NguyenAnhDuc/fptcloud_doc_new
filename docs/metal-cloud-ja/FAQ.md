---
id: "FAQ"
title: "General"
description: "Frequently asked questions about Metal Cloud"
sidebar_label: "General"
sidebar_position: 13
pagination_next: null
---

# General

### What is Metal Cloud?

Metal Cloud is a cloud service that lets you rent physical servers with integrated GPU components from FPT. The server is dedicated to you and is not shared with other tenants.

You can access the server with full control over the hardware without any virtualization or abstraction layer, maximizing performance for compute-intensive workloads.

### How is Metal Cloud different from a Cloud Server (Virtual Machine) instance?

Metal Cloud provides direct access to a dedicated server with no noisy neighbors.

Compared to Cloud Server instances deployed in a virtualized cloud environment, Bare Metal GPU Servers allow unrestricted access to the underlying physical server, making them suitable for even the most resource-intensive workloads.

### How does Metal Cloud work?

Metal Cloud provides a dedicated physical server with GPU components where you can install and run applications.

This setup is particularly useful when you need a stable, high-performance infrastructure for demanding workloads such as AI/ML model training or custom orchestration.

### How long does it take to create a Bare Metal GPU Server?

Using FPT images, you can expect successful deployment in about 20 minutes.

If the custom image size is large or too many servers are being created simultaneously, the deployment time may be longer.

### What advanced use cases does Metal Cloud support?

- **AI/ML workloads:** Model training, fine-tuning, and inference, especially for large-scale data processing.
- **Custom orchestration:** Technologies such as Kubernetes for containerized environments, Slurm for workload management, and other custom setups for complex applications.
- **High Performance Computing (HPC):** Simulations, scientific computing, real-time data processing, and other applications requiring dedicated resources.

# Features

### What features does Metal Cloud currently support?

Metal Cloud supports a wide range of cloud features:

- OS images including FPT images for AI.
- Startup scripts.
- Pre-loading SSH keys or setting passwords.
- Networking: Additional IPs, subnets, and Network ACL for security.

More features will be added in the near future, stay tuned!

### What storage options are available for Metal Cloud?

Bare Metal GPU Servers have one NVMe local storage available.

- Block storage service is not supported.
- File storage (high-performance tier) service is supported.

### Does Bare Metal Cloud support RAID?

Yes, local storage supports RAID 0 and RAID 1 features on the FPT Cloud Portal GUI using a hardware RAID controller.

More RAID options will be added in the future.

### In which regions is Metal Cloud available?

Metal Cloud is available in the Hanoi 2 (Vietnam) and Tokyo (Japan) regions.

# Billing

### How is Metal Cloud billed?

1. **Reservation:** Resources are limited based on demand at a fixed price, payable upfront (partial or full) or after use. Billing periods are monthly (3–9) or yearly (1–5).
2. **Pay-as-you-go (PAYG):** You start with unlimited resources and pay later. The billing amount typically increments daily or hourly.

### Does FPT charge for a stopped Bare Metal GPU Server?

Yes, an instance in the "stopped" state is still reserving the server for your use, so charges continue until you release the server. If you no longer want to be billed for the server, delete it from the FPT Cloud Portal for customers.

You are also charged for other services and resources attached to the Bare Metal GPU Server.

### How is Metal Cloud billing different from Cloud Server (Virtual Machine) instance billing?

The main difference is that powering off the Bare Metal GPU Server does not affect the billing cycle.

This means that an hourly-billed server is charged at the normal rate whether the server is powered on or off. Billing only stops when the server is deleted.
