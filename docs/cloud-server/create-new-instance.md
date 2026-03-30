---
id: "create-new-instance"
title: "Create a New Instance Schedule"
description: "Create an automatic start/stop schedule for instances with your desired time and frequency."
sidebar_label: "Create Instance Schedule"
sidebar_position: 90
---

# Create a New Instance Schedule

## Create a Schedule

1. Go to **Compute Engine** → **Instance Schedule** and click **Create schedule**.

   [![Instance Schedule screen](/img/migrated/image-1695608969930-81286d57.png)](/img/migrated/image-1695608969930-81286d57.png)

2. Enter the required information:
   - **Name**: Schedule name.
   - **Description**: Description.
   - **Start time**: Time to start the instance.
   - **Stop time**: Time to stop the instance.
   - **Start Date** *(optional)*: Start date. If left blank, runs indefinitely from the time of creation.
   - **End Date** *(optional)*: End date. If left blank, runs until deleted.
   - **Frequency**: Frequency — daily / weekly / monthly.
   - **Applied instances**: Instances attached to the schedule.

   [![Create schedule dialog](/img/migrated/image-1695608983434-0ca4b6ed.png)](/img/migrated/image-1695608983434-0ca4b6ed.png)

:::note
Each instance can only be attached to one Schedule at a time.
:::

3. Click **Create schedule**.

The new schedule appears on the **Instance Schedule Management** page.

[![Created schedule](/img/migrated/image-1695608998324-75646c28.png)](/img/migrated/image-1695608998324-75646c28.png)

## Next steps

- [View Instance Schedule Details](./view-detail-instance.md)
