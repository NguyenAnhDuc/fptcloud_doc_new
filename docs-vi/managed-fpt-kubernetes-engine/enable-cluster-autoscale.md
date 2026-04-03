---
id: "enable-cluster-autoscale"
title: "Cluster Autoscale の有効化"
description: "Managed FKE クラスターでCluster Autoscaleを有効化する方法を説明します。"
sidebar_label: "Cluster Autoscale の有効化"
sidebar_position: "14"
---

# Enable cluster autoscale

**Step 1:** In the menu, select **Kubernetes** to open the **Kubernetes Management** page. Select the cluster on which you want to enable Cluster Autoscale.

[![](/img/migrated/27-1-baec35bd.png)](/img/migrated/27-1-baec35bd.png)

**Step 2:** Click **Configure Worker Groups**.

[![](/img/migrated/28-1-b4b32aec.png)](/img/migrated/28-1-b4b32aec.png)

**Step 3:** Adjust the minimum and maximum number of workers based on your sizing requirements.

[![](/img/migrated/29-1-67174b85.png)](/img/migrated/29-1-67174b85.png)

:::note
When the maximum worker count is greater than the minimum worker count, Cluster Autoscale is automatically enabled.
:::

**Step 4:** Verify the information and click **Save** to enable Cluster Autoscale.
