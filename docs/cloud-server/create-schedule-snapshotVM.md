---
id: "create-schedule-snapshotVM"
title: "Create an Instance Snapshot Schedule"
description: "Create an automatic instance snapshot schedule with Daily or Weekly frequency."
sidebar_label: "Create Instance Snapshot Schedule"
sidebar_position: 96
---

# Create an Instance Snapshot Schedule

## Create a Schedule

1. Go to **Compute Engine** → **Schedule Management** and select the **Instance snapshot schedule** tab.

   [![Instance snapshot schedule tab](/img/migrated/image-1766044251626-e224453b.png)](/img/migrated/image-1766044251626-e224453b.png)

2. Enter the required information:
   - **Name**: Schedule name.
   - **Time**: Select a time (at least 2 hours after the current time).
   - **Start date** *(optional)*: Start date.
   - **End date** *(optional)*: End date.
   - **Frequency**: Daily (every day) or Weekly (select days of the week).
   - **Applied Instance**: Instance to attach to the schedule.

   [![Create Schedule dialog](/img/migrated/image-1766044359045-49bb8a07.png)](/img/migrated/image-1766044359045-49bb8a07.png)

:::note
Each instance can only be attached to one snapshot schedule at a time.
:::

3. Click **Create Schedule**.

   [![Created schedule](/img/migrated/image-1766044391396-79f5a3e3.png)](/img/migrated/image-1766044391396-79f5a3e3.png)
