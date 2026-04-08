---
id: "add-cluster-to-app-catalogs-management"
title: "Add Cluster To App Catalogs Management"
description: "To be able to deploy an application to a K8s cluster via an App Catalog, you will need to connect a K8s cluster with tha"
sidebar_label: "Add Cluster To App..."
sidebar_position: 6
---

# Add Cluster To App Catalogs Management

To be able to deploy an application to a K8s cluster via an App Catalog, you will need to connect a K8s cluster with that App Catalog Instance. 
FPT Cloud supports adding a new cluster via the interface with the following steps:
**Step 1** : Prepare a K8s cluster's _.kubeconfig_ that you want to deploy applications. The cluster could be provisioned with _FPT Container Services_ or from any other cloud.
**Step 2** : From the **Management Clusters** menu > Click **Add Cluster**
[![](/img/migrated/Picture9-1-12077ac5.png)](/img/migrated/Picture9-1-12077ac5.png)
**Step 3** : Enter necessary information to add a cluster:
[![](/img/migrated/Picture10-1-44a26315.png)](/img/migrated/Picture10-1-44a26315.png)
_**Note:** The information used to connect to the K8s cluster requires admin privileges. The _Cluster Name _and**.kubeconfig** file must matched._
**Step 4** : Click **Connect Cluster** to finalize adding that cluster.
**Step 5** : Check the information of the K8s cluster that you have just connected.
[![](/img/migrated/Picture11-1-e7ad5362.png)](/img/migrated/Picture11-1-e7ad5362.png)
