---
id: "fke-usage-notes"
title: "FKE usage notes"
description: "Recommendations and notes when using the FKE service."
sidebar_label: "FKE usage notes"
sidebar_position: "29"
draft: true
---

# FKE usage notes

### 1. Select HA Master Nodes

To ensure availability, select HA Master Nodes for critical systems. For Dev/Test environments, you may choose non-HA.

### 2. Use namespaces

Create namespaces to isolate applications and environments for easier management. Do not deploy applications into namespaces pre-created by the system.

### 3. Use Readiness & Liveness Probes

Use probes to ensure application availability.

Readiness Probe ensures that requests are only forwarded to a Pod when it is ready to accept them. Because Pods often take time to start, configuring a Readiness Probe prevents requests from being routed to a starting Pod (where the application is not yet ready).

Liveness Probe ensures that the Pod running your application remains in a Running state. If the Liveness Probe fails, the Pod is restarted.

### 4. Configure Resource Requests & Limits

Ensure containers have sufficient resources to run and do not exceed their allowed quota. Without limits, a Pod may consume more resources than allowed, causing the Node to crash.

### 5. Use Autoscale

Using the Kubernetes HPA-based FKE Autoscale feature allows your application to respond quickly when traffic increases. When usage is low, the system automatically scales Pods and Nodes down to the minimum.

### 6. Use multiple Pods (2 or more)

To ensure HA, use 2 or more Pods per service. Use anti-affinity to ensure replica Pods are placed on different Nodes.

### 7. Use Persistent Volumes

FKE supports Block and File Storage.
- Block Storage is the system default, supports RWO, and provides excellent performance depending on the Storage Policy.
- File Storage supports RWX using NFS. Do not use File Storage for databases.

### 8. Backup

Set up a cluster backup schedule following the guide. Backing up data on PVCs is the user's responsibility. You can back up to a VM and then back up the VM using the FCloud Backup & Recovery solution.

### 9. Monitoring & Logging

Use FMON to integrate monitoring and logging for your Kubernetes cluster. Configure system alerts.
