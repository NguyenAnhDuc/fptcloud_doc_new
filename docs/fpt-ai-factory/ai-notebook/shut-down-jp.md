---
id: "shut-down-jp"
title: "Shut down kernel"
description: "Shut down running kernels to save resources."
sidebar_label: "Shut down kernel"
sidebar_position: "7"
---

# Shut down kernel

**Step 1:** From the navigation bar, select the **Running Kernels/Notebooks** option (second icon from the top).

[![Running Kernels/Notebooks icon in the JupyterLab navigation bar](/img/migrated/Screenshot-2025-11-04-at-13.33.53-e1094d92.png)](/img/migrated/Screenshot-2025-11-04-at-13.33.53-e1094d92.png)

## (1) Running GPU kernel table

Displays information about all **currently running GPU kernels** in your lab.

| **Field** | **Description** |
| --- | --- |
| **Name** | Unique identifier of the GPU kernel |
| **Created At** | Date and time when the GPU kernel started |
| **Action** | Available actions: **Shut Down All** — terminates all running kernels in your lab. Once terminated, the kernels will appear in the **Kernel History** section. **Shut Down** — terminates only the selected kernel. The terminated kernel will appear in the **Kernel History** section. |

## (2) Kernel history table

Displays information about all **terminated GPU kernels**. This table helps you verify kernel usage duration and cross-check it with billing data on the **AI Factory Portal**.

| **Field** | **Description** |
| --- | --- |
| **Name** | Unique identifier of the GPU kernel |
| **Created At** | Date and time when the GPU kernel started |
| **Duration** | Total runtime of the GPU kernel |

## Billing reconciliation

:::note
You may notice a slight difference (typically 1–10 seconds) between the GPU runtime displayed in **AI Factory Billing** and the **Duration** column in the **Kernel History** table of AI Notebook. This minor variation is expected and occurs due to normal synchronization delays between internal services.
:::

[![Kernel history table showing duration and billing reconciliation data](/img/migrated/Screenshot-2025-11-04-at-14.12.39-28c73e36.png)](/img/migrated/Screenshot-2025-11-04-at-14.12.39-28c73e36.png)
