---
id: "configure-timereconcile"
title: "Configure TimeReconcile"
description: "Guide to configuring the sync check interval between Kubernetes cluster and repository"
sidebar_label: "Configure TimeReconcile"
sidebar_position: 7
---

# Configure TimeReconcile

ArgoCD checks for changes between the Kubernetes cluster and deployment repository on a schedule. The default interval is 3 minutes. FPT Cloud supports configuring this interval via the Portal interface.

1. On the **Configuration** > **TimeReconcile** screen.

[![](/img/migrated/Picture37-4-2e5b4285.png)](/img/migrated/Picture37-4-2e5b4285.png)

2. Enter the desired reconcile interval.

:::note
Valid values: `10s`, `20s`, `30s`, `1h`
:::

[![](/img/migrated/Picture38-4-9e381d9c.png)](/img/migrated/Picture38-4-9e381d9c.png)

[![](/img/migrated/Picture39-4-21be09d3.png)](/img/migrated/Picture39-4-21be09d3.png)

3. The result after configuration:

[![](/img/migrated/Picture40-2-90742bf4.png)](/img/migrated/Picture40-2-90742bf4.png)
