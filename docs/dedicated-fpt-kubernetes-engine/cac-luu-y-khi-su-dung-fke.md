---
id: "cac-luu-y-khi-su-dung-fke"
title: "Notes when using DFKE"
description: "Recommendations and notes for using the Dedicated FPT Kubernetes Engine service."
sidebar_label: "Notes when using DFKE"
sidebar_position: "29"
---

# Notes when using DFKE

### 1. Choose HA Master Nodes
To ensure availability, select HA Master Nodes for critical systems. Non-HA may be selected for Dev/Test environments.

### 2. Use namespaces
Create namespaces to separate applications or environments for easier management. Avoid deploying applications in system-created namespaces.

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
FKE supports Block and File Storage.
  * Block Storage is the default choice for the system, supports RWO, and provides good performance according to Storage Policy.
  * File Storage supports RWX using NFS. Do not use File Storage for databases.

### 8. Backup
Schedule Cluster backups according to the guide. Users must back up data on PVCs themselves (if any). Data can be backed up to a VM and then backed up using the FCloud Backup & Recovery solution.

### 9. Monitoring & Logging
Use FMON to integrate monitoring and logging with the Kubernetes cluster. Set up alerts for the system.
