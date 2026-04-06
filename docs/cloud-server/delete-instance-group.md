---
id: "delete-instance-group"
title: "Delete Instance Group"
description: "Delete an Instance Group when it is no longer needed."
sidebar_label: "Delete Instance Group"
sidebar_position: 81
pagination_next: null
---

# Delete Instance Group

:::warning
This action will simultaneously detach the Instance Group from all instances associated with it. Deleting an Instance Group cannot be undone.
:::

_This feature applies to users on General and Specific service plans._

**Step 1**: In the menu, select **Instance Group**. Under **Actions**, click **Delete**.

![Select Delete Instance Group](images/delete-instance-group/img-001.png)

**Step 2**: A confirmation dialog appears, showing the Instance Group name and prompting you to confirm. Type **delete** and click **Delete instance group** to confirm deletion.

![Confirm delete Instance Group](images/delete-instance-group/img-002.png)

The system will detach all instances associated with the Instance Group, then permanently delete the Instance Group.
