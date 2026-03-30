---
id: "createschedule-snapshotstorage"
title: "Create a Storage Disk Snapshot Schedule"
description: "Create an automatic storage disk snapshot schedule with Daily or Weekly frequency."
sidebar_label: "Create Storage Disk Snapshot Schedule"
sidebar_position: 101
---

# Create a Storage Disk Snapshot Schedule

## Create a Schedule

1. Go to **Compute Engine** → **Schedule Management** and select the **Storage snapshot schedule** tab.

   [![Storage snapshot schedule tab](/img/migrated/image-1766044844669-47ffb5e0.png)](/img/migrated/image-1766044844669-47ffb5e0.png)

2. Enter the required information:
   - **Name**: Schedule name.
   - **Time**: Select a time (at least 2 hours after the current time).
   - **Start date** / **End date** *(optional)*.
   - **Frequency**: Daily or Weekly.
   - **Applied Storage**: Storage disk to attach to the schedule.

   [![Create Schedule dialog](/img/migrated/image-1766044938913-12b00e98.png)](/img/migrated/image-1766044938913-12b00e98.png)

:::note
Each storage disk can only be attached to one snapshot schedule at a time.
:::

3. Click **Create Schedule**.

   [![Created schedule](/img/migrated/image-1766044968475-8510c5bd.png)](/img/migrated/image-1766044968475-8510c5bd.png)
