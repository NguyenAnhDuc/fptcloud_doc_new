---
id: "create-new-instance"
title: "Create a new instance schedule"
description: "How to create a new instance schedule to automatically turn virtual machines on or off on FPT Cloud."
sidebar_label: "Create a new instance schedule"
sidebar_position: 4
---

# Create a new instance schedule

To create a new instance schedule, follow these steps:

**Step 1:** In the menu, go to **Compute Engine > Instance Schedule**, then click **Create schedule**.

[![Instance schedule list screen](/img/migrated/image-1709893783815-21178c51.png)](/img/migrated/image-1709893783815-21178c51.png)

**Step 2:** Fill in the required fields:

- **Name**: Name of the instance schedule.
- **Description**: Description of the instance schedule.
- **Start time**: Time to turn the virtual machines on.
- **Stop time**: Time to turn the virtual machines off.
- **Start Date**: Date from which the schedule begins. _(If left blank, the schedule runs indefinitely from creation.)_
- **End Date**: Date on which the schedule ends. _(If left blank, the schedule runs indefinitely until deleted.)_
- **Frequency**: How often the on/off action runs — daily, weekly, or monthly.
- **Applied instances**: Virtual machines to attach to this schedule. _(Each virtual machine can only be attached to one schedule at a time.)_

[![Create instance schedule form](/img/migrated/image-1695608983434-0ca4b6ed.png)](/img/migrated/image-1695608983434-0ca4b6ed.png)

**Step 3:** Click **Create schedule**. The system will initialize the schedule and display the result.

If successful, the new instance schedule appears on the **Instance Schedule Management** page.

[![Instance schedule created successfully](/img/migrated/image-1695608998324-75646c28.png)](/img/migrated/image-1695608998324-75646c28.png)
