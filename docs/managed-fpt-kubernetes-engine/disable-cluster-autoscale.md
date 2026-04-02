---
id: "disable-cluster-autoscale"
title: "Disable cluster autoscale"
description: "Disable Cluster Autoscale on a Managed FPT Kubernetes Engine cluster."
sidebar_label: "Disable cluster autoscale"
sidebar_position: 15
---

# Disable cluster autoscale

**Step 1:** In the menu, select **Kubernetes** to open the **Kubernetes Management** page. Select the cluster on which you want to disable Cluster Autoscale.

[![](/img/migrated/30-1-afd6524b.png)](/img/migrated/30-1-afd6524b.png)

**Step 2:** Click **Configure Worker Groups**.

[![](/img/migrated/31-1-f850853b.png)](/img/migrated/31-1-f850853b.png)

**Step 3:** Set the minimum and maximum number of workers to the same value.

[![](/img/migrated/32-1-dd7a83a3.png)](/img/migrated/32-1-dd7a83a3.png)

:::note
When the minimum and maximum worker count in a worker pool are equal, Cluster Autoscale is automatically disabled.
:::

**Step 4:** Verify the information and click **Save**.

[![](/img/migrated/33-1-ea1e7929.png)](/img/migrated/33-1-ea1e7929.png)
