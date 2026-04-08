---
id: "notes-when-using-mfke"
title: "Notes when using MFKE"
description: "Create namespaces to divide applications or environments for easier management. Avoid using system-created namespaces fo"
sidebar_label: "Notes when using MFKE"
sidebar_position: 27
draft: true
---

# Notes when using MFKE

### 1. Use Namespaces:
Create namespaces to divide applications or environments for easier management. Avoid using system-created namespaces for deploying applications.

### 2. Use Worker Groups:
When creating a Kubernetes cluster, at least one worker group (base) is required to host system components (connector, metrics-server, etc.). For high availability in a production environment, configure a minimum of 3 workers for the base group and use a separate worker group for applications.

### 3. Use Readiness & Liveness Probes:
Ensure application readiness. Readiness Probes ensure that requests are directed to a pod only when it is ready to receive them. Pods often take time to start the application, so setting Readiness Probes ensures that requests are not send to Pods when they are starting. Liveness Probes ensure that a pod running an application is in the "Running" state; if it fails, the pod is restarted.

### 4. Set Resource Requests & Limits:
Help containers ensure they have enough resources to run and do not exceed the allowed resource limits. Without limits, a pod might use more resources than allowed, potentially causing node crashes.

### 5. Use Autoscale:
Leverage FKE's Autoscale feature based on Kubernetes HPA to allow applications to quickly respond to increased access. During low usage, the system automatically scales down pods/nodes to a minimum.

### 6. Use Multiple Pods (>=2):
Ensure high availability by using at least two pods for each service. Use anti-affinity to distribute replica pods across different nodes.

### 7. Use Persistent Volume:
M-FKE supports Block Storage, the default choice for the system, supporting RWO and offering good performance according to Storage Policy.

### 8. Backup:
Users should perform data backup on Persistent Volume Claims (PVC). Backup can be done to a virtual machine, and FCloud Backup & Recovery solution can be used for VM backup.

### 9. Monitoring & Logging:
Use FMON to integrate monitoring and logging with the Kubernetes cluster. Set up alerts for the system.
