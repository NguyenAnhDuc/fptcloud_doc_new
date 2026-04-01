---
id: "shut-down-kernel"
title: "Shut down kernel"
description: "Shut down running kernels to save resources."
sidebar_label: "Shut down kernel"
sidebar_position: 7
---

# Shut down kernel

**Step 1:** Navigate to Running Kernels/Notebooks From the navigation bar, select the **Running Kernels/Notebooks** option (second icon from the top). [![Alt text](/img/migrated/Screenshot-2025-11-04-at-13.33.53-8b5ebeba.png)](/img/migrated/Screenshot-2025-11-04-at-13.33.53-8b5ebeba.png)
## Running GPU Kernel Table:  

Displays information about all **currently running GPU kernels** in your lab.  
| Field  | Description  |  
| --- | --- |  
| **Name**  | Unique identifier of the GPU kernel  |  
| **Created At**  | Date and time when the GPU kernel started  |  
| **Action**  | Available Actions:   
• **Shut Down All** : Terminates all running kernels in your lab. Once terminated, the kernels will appear in the **Kernel History** section.   
• **Shut Down** : Terminates only the selected kernel. The terminated kernel will appear in the **Kernel History** section.  |  
## Kernel History Table:  

Displays information about all **terminated GPU kernels**.  
This table helps you verify kernel usage duration and cross-check it with billing data on the **AI Factory Portal**.  
| Field  | Description  |  
| --- | --- |  
| **Name**  | Unique identifier of the GPU kernel  |  
| **Created At**  | Date and time when the GPU kernel started  |  
| **Duration**  | Total runtime of the GPU kernel  |  
## Billing Reconciliation
[!(/img/migrated/information-fill-1-30ad0c7d.png)](/img/migrated/information-fill-1-30ad0c7d.png)
**Notice:** You may notice a slight difference (typically 1–10 seconds) between the GPU runtime displayed in **AI Factory Billing** and the **Duration** column in the **Kernel History** table of AI Notebook. This minor variation is expected and occurs due to normal synchronization delays between internal services.
[![Alt text](/img/migrated/Screenshot-2025-11-04-at-14.12.39-862af5d2.png)](/img/migrated/Screenshot-2025-11-04-at-14.12.39-862af5d2.png)
