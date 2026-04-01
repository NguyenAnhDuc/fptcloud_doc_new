---
id: "microservices-architecture-on-fke"
title: "Microservices architecture on FKE"
description: "[![](/img/migrated/64-1-9863061f.png)](/img/migrated/64-1-9863061f.png)"
sidebar_label: "Microservices architecture on FKE"
sidebar_position: 29
---

# Microservices architecture on FKE

[![](/img/migrated/64-1-9863061f.png)](/img/migrated/64-1-9863061f.png)
This is a reference system architecture model for deploying **Micro-services** applications on FPT Cloud with **FPT Kubernetes Engine**. This architecture model is based on basic design principles of components such as network, security, and high availability.
FPT Cloud provides products in the form of Services, such as API Management, FMON, Container Registry, and Key Vault. These services are placed in a VPC managed by FPT Cloud.
## Network Topology:
The network model is divided into separate subnets for each component to facilitate easier management, and firewalls can be placed between subnets to enhance security.
  * Subnet for **Database** Nodes: Typically, this subnet will not have internet access. Access is restricted from the Kubernetes subnet with limited ports based on Databases.
  * Subnet for **Kubernetes Cluster** Nodes: With the Dedicated model, every node will be placed in the same subnet. With the Managed model, you can choose a subnet for each worker group. This subnet will be connected to components in the system such as Databases, Registry, Vault, FMON, API Gateway, WAF & LB.
  * Subnet for **Web Application Firewall (WAF)** : WAF helps protect web applications & HTTP APIs by monitoring and filtering HTTP traffic. Placing WAF in front of your application helps prevent attacks from external network. WAF is typically placed in a separate subnet for ease of management and configuration.
  * Subnet for **Load-Balancer** : The `192.168.255.1/25` CIDR block is reserved for LB Nodes. This subnet is configured by FPT Cloud, so you should not configure a subnet that overlaps with this subnet. The Load-Balancer supports L4 & L7.

## Components:
  * **FPT Kubernetes Engine (FKE)** : This service provides a ubernetes Cluster with two models: Dedicated & Managed (recommended). With the Managed model, the Kubernetes Control Plane is managed by FPT Cloud. Users can manage and access Worker Nodes.
  * **FPT Database Engine (FDE)** : This service offers a variety of Databases to meet various customer needs.
  * **FPT API Management** : This service provides a professional API management system designed for easy integration and scalability.
  * **FPT Observability (FMON)** : This service provides a comprehensive monitoring system, including metrics, logs, and traces, allowing users to easily monitor and configure alerts for their system.
  * **FPT Container Registry** : A service for storing and managing container images.
  * **FPT Key Vault** : A service for storing and managing secure key-value pairs.

## Workflow:
  * First, HTTPS requests enter the system through the L4 Firewall layer provided by default by FPT Cloud VPC. Here, users can configure the firewall based on IP & port.
  * Next, requests pass through to the WAF. Here, invalid requests will be blocked, and valid requests will pass through.
  * If you use **FPT API Management** , requests after passing through WAF will be routed to the API Gateway, and then to the backend services (in this architecture model, it will go to the Ingress Load Balancer). If you don't use API Management, requests passing through the WAF will be routed to the Ingress Load Balancer.
  * The Load Balancer acts as a load balancer for the ingress controllers distributed on the worker nodes. This Load Balancer is automatically created when you create a Kubernetes cluster. When setting up the ingress, you need to create an ingress service (svc) with the Load Balancer type for the system to work well with the cluster autoscaler.
  * Ingress helps you "expose" microservices externally. Requests passing through ingress will be routed to the correct Service based on the corresponding domain & path in the ingress configuration.
  * Service is an entity in the Kubernetes Cluster that helps you "expose" a group of Pods (Containers) to the network. Microservices communicate with each other through Services. The Service will distribute the load to the corresponding Pods (Containers). These Services are configured as the backend for ingress, representing microservices.
  * Pods (Containers) are where microservices applications run. Microservices communicate with each other through Service and can connect to other services such as Databases, Key Vault... Pods communicate with external network through Worker Nodes network.

## Recommendations:
### 1. Choose HA Master Nodes with the Dedicated model.
  * To ensure readiness, choose **HA Master Nodes** for critical systems. Non-HA can be chosen for Dev Test systems.

### 2. Managed FKE:
  * For production systems and heavy loads, separate worker group base and worker group used for the application. 
  * Configure autoscale with a minimum of 3 nodes for each worker group.

## Use Namespaces:
  * Create a **namespace** to divide applications or environments for easy management. 
  * Avoid using namespaces created by the system for deploying applications.

### 4. Use Readiness & Liveness Probes:
  * Ensure the application's readiness.
  * **Readiness Probes** ensure that requests are directed to the pod only when the pod is ready to receive requests. Pods often take time to start applications, so setting Readiness Probes helps avoid directing requests to Pods when they are not ready.
  * **Liveness Probes** ensure that Pods running applications are in the Running state. If Liveness Probes fail, the pod will be restarted.

### 5. Set Resource Requests & Limits:
  * Help containers ensure enough resources to run and do not run more resources than allowed. Without limits, pods can use more resources than allowed, potentially causing the Node to crash.

### 6. Use Autoscale:
  * Use the **Autoscale** feature of FKE based on Kubernetes HPA to help applications respond quickly to high traffic. When usage is low, the system will automatically reduce Pods/Nodes to the minimum level.

### 7. Use multiple Pods (>=2):
  * To ensure high availability, use >=2 Pods for each service. Use anti-affinity to have replica pods on different Nodes.

### 8. Set Pod Disruption Budgets (PDB):
  * To avoid reducing too many pods, which can cause service interruptions, set PDB to limit the number of pods that can be terminated (possibly during node scale-down or application deployment). 

_For example_ , if you set the replica to 05 and expect that at any given time only 02 Pods are allowed to terminate, leaving 03 Pods running to ensure good application responsiveness, you can configure PodDisruptionBudget with minAvailable set to 3.
### 9. Use Persistent Volume:
  * FKE supports **Block** and **File Storage**.
  * **Block Storage** is the default choice for the system, supporting RWO, responding well to performance according to Storage Policy.
  * **File Storage** supports RWX using NFS. **Do not** use File Storage for Databases.

### 10. Backup:
  * Set a [Backup Job (Dedicated)](../dedicated-fpt-kubernetes-engine/index.md) as instructed. Users need to perform data backup on PVC (if any). You can back up to a VM and then perform VM backup using the **FPT Cloud Backup & Recovery** solution.

### 11. Monitoring & Logging:
  * Use FMON to integrate monitoring & logging with the Kubernetes cluster. Set alerts for the system.
