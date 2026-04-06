---
id: "delete-instance-schedule"
title: "Delete Instance Schedule"
description: "Delete an automatic instance start/stop schedule."
sidebar_label: "Delete Instance Schedule"
sidebar_position: 94
pagination_next: null
---

# Delete Instance Schedule

:::warning
This action cannot be performed if the schedule is currently running. Deleting an Instance Schedule cannot be undone.
:::

**Step 1**: In the **Instance Schedule Management** panel, under **Action**, click **Delete**.

![Select Delete Schedule](images/delete-instance-schedule/img-001.png)

**Step 2**: A confirmation dialog appears, showing the schedule name and prompting you to confirm. Type **delete** and click **Delete schedule** to proceed with deletion.

![Confirm delete Schedule](images/delete-instance-schedule/img-002.png)

The system will permanently delete the schedule. Any attached instances (if applicable) will be released and retain their current state.
