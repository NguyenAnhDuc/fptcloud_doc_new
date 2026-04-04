---
id: "cac-luu-y-khi-su-dung-m-fke"
title: "Notes when using MFKE"
description: "Recommendations and notes for using the Managed FPT Kubernetes Engine service."
sidebar_label: "Notes when using MFKE"
sidebar_position: "36"
---

# Notes when using MFKE

### 1. Use namespaces
Create namespaces to separate applications or environments for easier management. Avoid deploying applications in system-created namespaces.

### 2. Use worker groups
When creating a Kubernetes cluster, the system requires at least 1 worker group (base) to host system components (connector, metrics-server, etc.). For high-availability production environments, configure at least 3 workers for the base group and use a dedicated worker group for applications.

### 3. Use Readiness & Liveness Probes
These help ensure application availability.
Readiness Probes ensure that requests are only routed to a Pod when it is ready to receive them. Since Pods often take time to start, setting Readiness Probes prevents the service from routing requests to Pods that are still starting (application not ready).
Liveness Probes ensure that the Pod running the application is in a Running state. If a Liveness Probe fails, the Pod is restarted.

### 4. Set Resource Requests & Limits
This ensures containers have enough resources to run without exceeding the allowed amount. Without limits, a Pod may consume more resources than permitted and cause the Node to crash.

### 5. Use Autoscale
Use FKE's Autoscale feature based on Kubernetes HPA to help your application respond quickly when traffic increases. When usage is low, the system automatically reduces Pods/Nodes to the minimum.

### 6. Use multiple Pods (>=2)
To ensure HA, use at least 2 Pods per service. Use anti-affinity to spread replica Pods across different Nodes.

### 7. Use Persistent Volumes
M-FKE supports Block Storage. Block Storage is the default choice for the system, supports RWO, and provides good performance according to Storage Policy.

### 8. Backup
Users must back up data on PVCs themselves (if any). Data can be backed up to a VM and then backed up using the FCloud Backup & Recovery solution.

### 9. Monitoring & Logging
Use FMON to integrate monitoring and logging with the Kubernetes cluster. Set up alerts for the system.
