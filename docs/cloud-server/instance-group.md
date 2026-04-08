---
id: "instance-group"
title: "Instance Group"
sidebar_label: "Instance Group — Affinity & Anti-Affinity"
sidebar_position: 76
draft: true
---

Managing Instance Groups with Affinity & Anti-Affinity Policies


  * Affinity and anti-affinity are two important concepts related to the placement of virtual machines on physical hosts. Currently, the system only supports Soft Affinity / Anti-Affinity instance groups.

    * **Soft Affinity**: Directs all virtual machines in an affinity instance group to the same host. Typically used to improve overall system performance.

    * **Soft Anti-Affinity**: Directs virtual machines in an anti-affinity instance group to different hosts. If no available host can accommodate the Instance, it will be assigned a random location.

  * To achieve this, users can create instance groups with an affinity or anti-affinity policy. When launching a virtual machine, users can pass instance group information as a hint to place the virtual machine according to the desired policy.
