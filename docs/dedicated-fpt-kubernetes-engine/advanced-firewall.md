---
id: "advanced-firewall"
title: "Advanced firewall"
description: "The **Kubernetes integrated Firewall** product is different from FPT Cloud's basic Kubernetes product by placing an **Ad"
sidebar_label: "Advanced firewall"
sidebar_position: 22
---

# Advanced firewall

### 1. Overview of Kubernetes integrated Firewall
The **Kubernetes integrated Firewall** product is different from FPT Cloud's basic Kubernetes product by placing an **Advanced Firewall** located in front of Tenant's Gateway. **Advanced Firewall** is responsible for protecting and configuring security rules (Allow, Drop) and NAT rules (DNAT, SNAT) for the Kubernetes cluster.
Main components include:
  * **Advanced Firewall** (e.g: Checkpoint)
  * **Gateway** (Internet Gateway, Firewall L4)
  * **Load Balancer**
  * **Kubernetes Cluster** : Master Nodes (API, etcd) and Worker Nodes (App and Service)

[![](/img/migrated/58-cf58bfc2.png)](/img/migrated/58-cf58bfc2.png)

### 2. Requirement rules for Kubernetes on Advanced Firewall
The traffic flow to access the Kubernetes Nodes is as follows:
[![](/img/migrated/59-0ffe8844.png)](/img/migrated/59-0ffe8844.png)
**_Note:_**
  * All inbound and outbound rules for the Kubernetes cluster are configured on the **Advanced Firewall**.
  * All NAT rules for the Kubernetes cluster are configured on the **Advanced Firewall**.
  * Public IP is set on **Advanced Firewall**.

**Firewall rule** planning table on Advanced Firewall for Kubernetes cluster:
[![](/img/migrated/60-435cbd0a.png)](/img/migrated/60-435cbd0a.png)
**NAT rule** planning table on Advanced Firewall for Kubernetes cluster:
[![](/img/migrated/61-70f34366.png)](/img/migrated/61-70f34366.png)
On the Gateway, there are still Firewall rules and NAT rules to ensure traffic flowing from the Gateway to the Firewall. These default rules are automatically created, and users must create rules for the application (optional) if needed.

### 3. Initialize a Kubernetes cluster with integrated Firewall
#### Prerequisites:
  * **CPU, RAM, Storage** , and **Instance** quotas must be sufficient for the desired Cluster configuration.
  * 01 **Network subnet** : Network used for Kubernetes Nodes. Subnet needs Static IP Pool. This subnet needs to be planned and designed in detail to configure a route to allow connection from the internet to the Firewall through the Gateway to the Kubernetes Nodes.
  * **Firewall IP information** : 01 Public IP and 01 Private IP of the Firewall.
  * **Gateway IP information** : 01 Private IP to configure the route from Firewall to Gateway.

#### Initialization steps are as follows:
**Step 1** : In the FPT Portal menu, select **Kubernetes** > **Create**. Enter Cluster's general information.
**Step 2** : Configure Firewall. Tick **Enable Firewall**
[![](/img/migrated/62-eaf799e0.png)](/img/migrated/62-eaf799e0.png)
**Step 3** : Enter Firewall information, including: Gateway IP, Checkpoint Public and Private IP.
**Step 4** : Click Create, double-check the information and click **Agree** to proceed with initialization.
**Step 5** : Monitor K8s cluster initialization status. After the status turned to **Running** , proceed to use and deploy the application.
