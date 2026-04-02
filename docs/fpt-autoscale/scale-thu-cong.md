---
id: "scale-thu-cong"
title: "Manual Scale"
description: "Guide to performing manual scale in, scale out, and resize operations on an Autoscale Group on FPT Autoscale."
sidebar_label: "Manual Scale"
sidebar_position: 10
---

# Manual Scale

## Step 1: Go to Autoscaling > Autoscale Group. On the row of the group you want to adjust, click the **Action menu** icon.

[![open group action menu](/img/migrated/Screenshot-2024-10-02-023008-8d0f1521.png)](/img/migrated/Screenshot-2024-10-02-023008-8d0f1521.png)

## Case 1: Scale in

### Step 2: Select **Scale in**.

[![scale in](/img/migrated/scalein-1-d604a3de.png)](/img/migrated/scalein-1-d604a3de.png)

### Step 3: A dialog appears. Configure the parameters and click **Scale in**.

[![scale in dialog](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

- **Count**: The number of nodes to remove.

## Case 2: Scale out

### Step 2: Select **Scale out**.

[![scale out](/img/migrated/scalein-cd3d34b8.png)](/img/migrated/scalein-cd3d34b8.png)

### Step 3: A dialog appears. Configure the parameters and click **Scale out**.

[![scale out dialog](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

- **Count**: The number of nodes to add.

## Case 3: Resize

### Step 2: Select **Resize**.

[![resize](/img/migrated/scaleout-6be7c5a6.png)](/img/migrated/scaleout-6be7c5a6.png)

### Step 3: A dialog appears. Configure the parameters and click **Resize**.

[![resize dialog](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

- **Change type**: The adjustment method for the group.
- **Number**: The value whose meaning differs depending on the selected **Change type**:
  - _Exact capacity_: Enter the new capacity (positive integer). After adjustment, the number of nodes in the group equals exactly this value.
  - _Change in capacity_: Enter the number of nodes to add (positive integer) or remove (negative integer). The node count after adjustment equals the current capacity plus or minus the absolute value of **Number**.
  - _Change in percentage_: Enter the percentage (%) to add (positive decimal) or remove (negative decimal) based on the current capacity. Example: if the current capacity is 4 nodes and **Number** is 50%, 2 new nodes are added, giving a total of 6.
- **Min size** and **Max size**: Resize allows simultaneous adjustment of the group's lower and upper limits.

The system validates the input and performs the resize if valid. After success, the group status changes from **Resizing** to **Active**.
