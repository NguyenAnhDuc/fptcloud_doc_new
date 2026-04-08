---
id: "auto-schedule-to-on-off-instance"
title: "Auto schedule to on/off instance"
description: "Overview of the Instance Schedule feature for automatically turning virtual machines on and off on FPT Cloud."
sidebar_label: "Auto schedule to on/off instance"
sidebar_position: 1
---

# Auto schedule to on/off instance

The Instance Schedule feature lets you automatically turn virtual machines on or off at a defined time and frequency, helping you optimize costs and streamline operations.

:::note
- Completing all on/off actions for every virtual machine in a schedule may take up to 15 minutes after the chosen start time or stop time. If your virtual machines must be on or off no later than a specific moment, set the schedule 15 minutes earlier than needed and keep at least 15 minutes between consecutive schedules.
- A schedule cannot be edited after creation — time and frequency are fixed. You can only change which virtual machines are attached to it. To change the time or frequency, delete the current schedule and create a new one.
- Schedules must be created at least 1 hour before the chosen start time or stop time.
- Within any 1-hour window, the system allows only one action: either turn on or turn off.
:::
