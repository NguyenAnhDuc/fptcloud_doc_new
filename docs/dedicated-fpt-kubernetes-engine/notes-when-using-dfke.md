---
id: "notes-when-using-dfke"
title: "Notes when using DFKE"
description: "To ensure availability, enable HA Master Nodes for critical systems. Non-HA can be used for Dev and Testing systems."
sidebar_label: "Notes when using DFKE"
sidebar_position: 24
---

# Notes when using DFKE

### 1. Enable HA Master Nodes:
To ensure availability, enable HA Master Nodes for critical systems. Non-HA can be used for Dev and Testing systems.
### 2. Use Namespaces:
Create namespaces to divide applications or environments for easier management. Avoid using system-created namespaces for deploying applications.
### 3. Use Readiness & Liveness Probes:
Ensure application readiness. Readiness Probes ensure that requests are directed to a pod only when it is ready to receive them. Pods often take time to start the application, so setting Readiness Probes ensures that requests are not send to Pods when they are starting. Liveness Probes ensure that a pod running an application is in the "Running" state; if it fails, the pod is restarted.
### 4. Set Resource Requests & Limits:
Help containers ensure they have enough resources to run and do not exceed the allowed resource limits. Without limits, a pod might use more resources than allowed, potentially causing node crashes.
### 5. Use Autoscale:
Leverage FKE's Autoscale feature based on Kubernetes HPA to allow applications to quickly respond to increased access. During low usage, the system automatically scales down pods/nodes to a minimum.
### 6. Use Multiple Pods (>=2):
Ensure high availability by using at least two pods for each service. Use anti-affinity to distribute replica pods across different nodes.
### 7. Use Persistent Volume:
D-FKE supports Block and File Storage. Block Storage is the default choice for the system, supporting RWO and offering good performance according to Storage Policy. File Storage supports RWX using NFS. **Do not use File storage for Database**.
### 8. Backup:
Users should perform data backup on Persistent Volume Claims (PVC). Backup can be done to a virtual machine, and FCloud Backup & Recovery solution can be used for VM backup.
### 9. Monitoring & Logging:
Use FMON to integrate monitoring and logging with the Kubernetes cluster. Set up alerts for the system.
