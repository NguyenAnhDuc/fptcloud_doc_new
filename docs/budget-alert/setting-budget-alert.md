---
id: "setting-budget-alert"
title: "Setting Budget Alert"
description: "In step 2 when creating a budget alert, select the Attach option."
sidebar_label: "Setting Budget Alert"
sidebar_position: 6
---

# Setting Budget Alert

In step 2 when creating a budget alert, select the Attach option.
  * If the default option is set to No, the system will not block the creation of new resources when the budget threshold is reached.

[![file](/img/migrated/image-1727168996714-d093ff1d.png)](/img/migrated/image-1727168996714-d093ff1d.png)
  * If the Yes option is selected, when the resources selected in step 1 reach the warning threshold, the system will automatically block the creation of additional Compute and Network resources (including: Instance/ VPC/ Storage/ Snapshot/ IP/ LB)

[![file](/img/migrated/image-1727169010489-9c081e43.png)](/img/migrated/image-1727169010489-9c081e43.png) [![file](/img/migrated/image-1727169025409-df35c1e8.png)](/img/migrated/image-1727169025409-df35c1e8.png)
**Note:**
  * Each budget can only select the Attach option in 1 alert.
  * The same Tenant/VP with many budgets and many alert milestones is set attach option, any alert that warns in advance will block the act of creating a new resource at that time of warning.