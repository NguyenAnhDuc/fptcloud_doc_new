---
id: "setting-budget-alert"
title: "Block new resource creation when budget threshold is reached"
description: "Guide to automatically blocking Compute/Network resource creation when the budget alert threshold is reached."
sidebar_label: "Block resource creation at threshold"
sidebar_position: 7
pagination_next: null
---

# Block new resource creation when budget threshold is reached

The Attach option automatically blocks the creation of additional Compute and Network resources when costs reach an alert threshold — preventing uncontrolled spending.

In step 2 when creating a Budget Alert, select the **Attach option**:

- If you select **No** (default): the system does not block new resource creation when the budget threshold is reached.

  ![Attach option No](/img/migrated/image-1727168996714-d093ff1d.png)

- If you select **Yes**: when the resources selected in step 1 reach the alert threshold, the system automatically blocks creation of additional Compute and Network resources (including: Instance, VPC, Storage, Snapshot, IP, Load Balancer).

  ![Attach option Yes](/img/migrated/image-1727169010489-9c081e43.png)

  ![Resource creation blocked notification](/img/migrated/image-1727169025409-df35c1e8.png)

:::warning
- Each budget can only have the Attach option enabled on one alert.
- If the same tenant or VPC has multiple budgets with multiple alerts that have Attach option enabled, whichever alert triggers first will block resource creation at that time.
:::
