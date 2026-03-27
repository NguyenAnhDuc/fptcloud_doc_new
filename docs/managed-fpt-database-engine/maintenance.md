---
id: "maintenance"
title: "Maintenance"
description: "**Periodic maintenance** is a **mandatory component** of the FPT Database Engine service, designed to maintain a healthy"
sidebar_label: "Maintenance"
sidebar_position: 8
---

# Maintenance

**Periodic maintenance** is a **mandatory component** of the FPT Database Engine service, designed to maintain a healthy operational state for database clusters. It is a core part of the managed DBaaS offering and is **not an optional feature**.
Through periodic maintenance, the system ensures:
  * Application of required security patches.
  * System updates and optimizations.
  * Long-term stability and operational reliability.

**Important Notice:**
During the maintenance period, do not perform any operations on the database server, including but not limited to:
  * Configuration changes.
  * System modifications.
  * Starting or stopping services.

Performing these actions during maintenance may negatively impact performance and stability, or result in unexpected errors. Users should only resume operations after the maintenance process has been completed.
#### Maintenance Window:
The Maintenance Window allows users to configure a preferred weekly time slot during which the system performs periodic maintenance with minimal impact on service operations.
  * Maintenance Window duration: **1 hour**.
  * Users can specify: The day of the week and the maintenance start time on that day.

If no Maintenance Window is configured, the system **automatically schedules maintenance** to **start at 23:00 every Saturday by default**.
Users may modify the Maintenance Window if the database cluster does not yet have a scheduled maintenance event. Note that while the Maintenance Window helps optimize the timing of maintenance activities, it does not guarantee zero service interruption. It is recommended to schedule maintenance during off-peak hours to minimize service impact.
#### Maintenance Notifications:
The system sends email notifications to help users proactively track maintenance schedules, including:
  * A notification 7 days prior to the scheduled maintenance time.
  * A reminder notification 1 day before the maintenance begins.

Notifications are sent to the email recipients configured in the service’s Notification settings.
#### Impact and Limitations During Maintenance:
During maintenance, the service may experience temporary impacts, including:
  * Short-term connection interruptions.
  * Reduced performance.
  * Limited availability of certain features.

These impacts are minimized as much as possible and will end once the maintenance process is completed.
#### Maintenance Control and Monitoring:
FPT Database Engine provides mechanisms that allow users to manage and monitor maintenance activities, including:
  * Configuring the Maintenance Window during database cluster creation.
  * Modifying the Maintenance Window after the cluster has been deployed.
  * Monitoring Pending Maintenance Events (upcoming maintenance activities).

For detailed instructions, refer to [Maintenance Window](../managed-fpt-database-engine/index.md) section.
#### Emergency Maintenance:
In special cases, such as critical security patches or important system updates, emergency maintenance may be performed outside of the configured Maintenance Window to ensure data security and system stability.