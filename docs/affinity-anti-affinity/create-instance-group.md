---
id: "create-instance-group"
title: "Create an Instance Group"
description: "Guide to creating a new Instance Group with Affinity or Anti-Affinity policy."
sidebar_label: "Create an Instance Group"
sidebar_position: 3
---

# Create an Instance Group

You can create a new Instance Group with a Soft Affinity or Soft Anti-Affinity policy.

:::warning
An Instance Group cannot be edited after creation. If you need to change it, delete the current group and create a new one.
:::

1. Select **Compute Engine** → **Instance Group** → **Create Instance Group**.

   ![Instance Group Management screen](/img/migrated/image-1705024581953-a55d4346.png)

2. Fill in the required fields:
   - **Name**: the Instance Group name.
   - **Policy**: select **Soft Affinity** or **Soft Anti-Affinity**.

   ![Create Instance Group form](/img/migrated/image-1705024842925-f64a0e6f.png)

3. Click **Create Instance Group**.

The new Instance Group appears in the **Instance Group Management** list.

![Instance Group created successfully](/img/migrated/image-1705024897223-9b650495.png)
