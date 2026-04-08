---
id: "cluster-autoscale"
title: "Cluster autoscale"
description: "The **Cluster Autoscale** feature of the Managed FKE product enables automatic scaling of additional workers within a wo"
sidebar_label: "Cluster autoscale"
sidebar_position: 9
---

# Cluster autoscale

The **Cluster Autoscale** feature of the Managed FKE product enables automatic scaling of additional workers within a worker pool if the application running on that pool is not receiving sufficient resources (CPU, Memory) from the existing worker nodes. 
In such cases, pending pods due to insufficient node resources will be served by the newly scaled-up worker nodes. 
The **Cluster Autoscale** feature also automatically removes nodes that do not utilize enough resources (default is 50%) within that node. 
It's important to note that the number of worker nodes in a worker pool can only scale within the predefined min-max range set by the user on the FPT Cloud Portal.
