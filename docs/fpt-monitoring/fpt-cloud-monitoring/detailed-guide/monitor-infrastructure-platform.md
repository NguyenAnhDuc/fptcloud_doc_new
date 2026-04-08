---
id: "monitor-infrastructure-platform"
title: "Monitor infrastructure and platform"
sidebar_label: "Monitor infrastructure and platform"
sidebar_position: 4
---

# Monitor infrastructure and platform

**Step 1:** Log in to FPT Cloud Portal at **[https://console.fptcloud.com](https://console.fptcloud.com)**.

**Step 2:** In the FPT Cloud Portal menu, click **Monitoring**.

**Step 3:** Click into a workspace, then navigate to the **Add Data** tab.

**Step 4:** In the **Infrastructure services** tab, the list of available infrastructure services is displayed. Click a service you want to monitor.

[![Alt text](/img/migrated/Picture8-2-102fff27.png)](/img/migrated/Picture8-2-102fff27.png)

**Step 5:** Click **Manual** and follow the on-screen instructions.

[![Alt text](/img/migrated/Picture9-2-575519ed.png)](/img/migrated/Picture9-2-575519ed.png)

## Automatic Kubernetes integration

FPT Monitoring supports **automatic integration** for **Kubernetes Dedicated** and **Kubernetes Managed** clusters. This feature lets you configure metric and log monitoring for each cluster easily and professionally.

**Step 1:** In the **Infrastructure services** tab, click **Kubernetes**.

[![Alt text](/img/migrated/Picture1-4-4251b3d0.png)](/img/migrated/Picture1-4-4251b3d0.png)

**Step 2:** Click **Auto**. A list of **Dedicated** and **Managed** clusters appears.

[![Alt text](/img/migrated/Picture3-4-ab6aaf3f.png)](/img/migrated/Picture3-4-ab6aaf3f.png)

:::note
If no clusters appear, go to **Kubernetes** in the menu and click **Create a Kubernetes Engine** to create one. If your tenant does not have permission to create clusters, contact our admin team for assistance.
:::

### Integrate Dedicated Kubernetes

1. Click the **Dedicated** tab.

[![Alt text](/img/migrated/Picture4-4-8f2ee7aa.png)](/img/migrated/Picture4-4-8f2ee7aa.png)

2. Select the cluster and the datasource type (metric or log) to integrate. Only active clusters with active datasources can be integrated.

3. Click **Integrate**.

[![Alt text](/img/migrated/Picture5-4-c8990333.png)](/img/migrated/Picture5-4-c8990333.png)

A confirmation dialog asks whether you want to integrate the cluster's logs/metrics into the corresponding workspace. Click **Confirm**.

[![Alt text](/img/migrated/Picture6-4-e64b483e.png)](/img/migrated/Picture6-4-e64b483e.png)

The integration status changes to **Integrating**.

[![Alt text](/img/migrated/Picture7-4-aad01789.png)](/img/migrated/Picture7-4-aad01789.png)

Wait 1–2 minutes for the system to update the final status (success or failure).

[![Alt text](/img/migrated/Picture8-4-5a74c485.png)](/img/migrated/Picture8-4-5a74c485.png)

4. Log in to the dashboard: go to the **Configuration** tab, click the **Dashboard URL**, and log in with the displayed username and password.

[![Alt text](/img/migrated/Picture9-4-8516bd17.png)](/img/migrated/Picture9-4-8516bd17.png)

5. Once in the dashboard, click **Home** > **Dashboard** > select the **Fmon – Kubernetes** folder.

[![Alt text](/img/migrated/Picture10-4-a10f8a99.png)](/img/migrated/Picture10-4-a10f8a99.png)

### Integrate Managed Kubernetes

Select the **Managed** tab and follow the same steps as for Dedicated Kubernetes.

[![Alt text](/img/migrated/Picture11-4-db200ae1.png)](/img/migrated/Picture11-4-db200ae1.png)
