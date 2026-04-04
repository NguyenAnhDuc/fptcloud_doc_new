---
id: "dfke-advanced-firewall"
title: "DFKE Advanced Firewall"
description: "Overview and configuration of the Firewall-integrated Kubernetes product in Dedicated FPT Kubernetes Engine."
sidebar_label: "Advanced Firewall"
sidebar_position: "24"
---

# DFKE Advanced Firewall

## Overview of the Firewall-integrated Kubernetes product

Unlike the standard FPT Cloud Kubernetes product, the Firewall-integrated Kubernetes product places one Advanced Firewall in front of the Tenant's Gateway. The Advanced Firewall handles protection and configuration of security rules (Allow, Drop) and NAT rules (DNAT, SNAT) for the Kubernetes cluster.

Key components:
- Advanced Firewall (e.g., Checkpoint)
- Gateway (Internet Gateway, Firewall L4)
- Load balancer
- Kubernetes cluster: Master node (API, ETCD), Worker node (App and Service)

[![file](/img/migrated/image-1691469857854-05b04fb7.png)](/img/migrated/image-1691469857854-05b04fb7.png)

## Required rules for a Kubernetes cluster behind Advanced Firewall

Traffic flow to Kubernetes nodes:
[![file](/img/migrated/image-1691469894054-7f2f9cab.png)](/img/migrated/image-1691469894054-7f2f9cab.png)

:::note
- All inbound and outbound rules for the Kubernetes cluster are configured on the Advanced Firewall.
- All NAT rules for the Kubernetes cluster are configured on the Advanced Firewall.
- Public IPs are placed on the Advanced Firewall.
:::

Firewall rule planning table for Kubernetes cluster on Advanced Firewall:
[![file](/img/migrated/image-1691480281087-05f96745.png)](/img/migrated/image-1691480281087-05f96745.png)

NAT rule planning table for Kubernetes cluster on Advanced Firewall:
[![file](/img/migrated/image-1691480310854-7798d361.png)](/img/migrated/image-1691480310854-7798d361.png)

The Gateway also has Firewall and NAT rules to ensure traffic connectivity from Gateway to Firewall. These default rules are created automatically. Create additional rules for your application as needed (optional).

## Create a Firewall-integrated Kubernetes cluster

**Requirements:**
- CPU, RAM, Storage, and Instance quotas sufficient for the desired Kubernetes cluster configuration.
- One network subnet for Kubernetes Nodes (subnet with Static IP Pool required). This subnet must be carefully planned and designed to allow routing from external sources through the Firewall and Gateway to the Kubernetes Nodes.
- Firewall IP information: one Public IP and one Private IP for the Firewall.
- Gateway IP information: one Private IP used to configure the route from Firewall to Gateway.

**Creation steps:**

1. From the FPT Cloud Portal, select Kubernetes. Choose the **Dedicated** tab and click **Create**. Enter the desired Kubernetes cluster information.
2. In the Firewall settings, check **Enable Firewall**.
[![file](/img/migrated/image-1691469995783-e893b090.png)](/img/migrated/image-1691469995783-e893b090.png)
3. Enter the Firewall information (Gateway IP, Checkpoint Public IP and Private IP).
4. Click **Create**, review the information, then click **Agree** to start creation.
5. Monitor the Kubernetes cluster creation status. Once the status is Succeeded (Running), you can begin deploying applications.
