---
id: "switch"
title: "Connect and switch kernel"
description: "Switch between different kernel environments in your AI Notebook."
sidebar_label: "Connect and switch kernel"
sidebar_position: "6"
---

# Connect and switch kernel

**Step 1:** In the Notebook IDE, open the **kernel configuration menu** (top right).

[![Kernel configuration menu in the AI Notebook IDE](/img/migrated/worddav6371362747fec3bad8be91cf1e057a7c-0bc7f485.png)](/img/migrated/worddav6371362747fec3bad8be91cf1e057a7c-0bc7f485.png)

| **Option** | **Description** | **When to use** |
| --- | --- | --- |
| **Running Kernels** | Connect to an existing active kernel (e.g., Python 3). | Resume work quickly, save resources |
| **Start Other Kernels** | Launch a new kernel with chosen GPU resources (1x, 2x, 4x, 8x H100). | New experiments or heavy workloads |
| **No Kernel** | Open the notebook without attaching any compute. | View or edit code without running |

---

**Step 2a: Start a new kernel**

1. Before you start, make sure your account has enough credits to cover at least one hour of GPU cost.
2. Under **Start Other Kernels**, select the GPU type you want.
3. Click **Confirm** and approve the confirmation pop-up.

[![GPU kernel selection confirmation pop-up](/img/migrated/worddavcbde47ee263356d9fcbb156662265af0-2f05a191.png)](/img/migrated/worddavcbde47ee263356d9fcbb156662265af0-2f05a191.png)

4. Wait about **1–2 minutes** for the notebook to be ready.
5. Once connected, the new kernel will appear under **Running Kernels**.

---

**Step 2b: Switch to an existing kernel**

1. Under **Running Kernels**, select the kernel you want to connect to.
2. Wait about **1–2 minutes** for the notebook to be ready.
3. Once connected, the selected kernel will be shown under **Running Kernels**.
