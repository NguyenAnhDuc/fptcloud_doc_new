---
id: "maintenance"
title: "Service maintenance"
description: "Periodic maintenance is a mandatory part of the FPT Database Engine service."
sidebar_label: "Service maintenance"
sidebar_position: 8
---

# Service maintenance

**Periodic maintenance** is a **mandatory** part of the FPT Database Engine service, aimed at maintaining a healthy operational state for the database. It is a core component of the managed service and **is not an optional feature**.

Through periodic maintenance, the system ensures:

- Necessary security patches are applied.
- System updates and optimizations.
- Long-term stability and operational capability.

**Important note:**

During maintenance, **do not perform any operations on the server**, including but not limited to:

- Changing configuration.
- Modifying the system.
- Starting or stopping services.

Performing these operations during maintenance may affect performance, stability, or lead to unexpected errors. Users should resume operations only after the maintenance process is complete.

#### Maintenance window

The Maintenance Window allows users to configure a preferred weekly time frame for the system to perform periodic maintenance at the time least impactful to service operations.

- Duration of each Maintenance Window: **1 hour**
- Users can specify the day of the week and start time for maintenance.

If not configured, the system will **automatically set a default maintenance window** starting **at 23:00 every Saturday**.

Users can modify the Maintenance Window if the database cluster does not yet have a scheduled maintenance event. Note that the Maintenance Window helps optimize the maintenance timing, but does not fully guarantee zero service disruption. Set the Maintenance Window during low-workload periods to minimize service impact.

#### Maintenance notifications

The system sends email notifications to help users proactively track the maintenance schedule, including:

- **7-day advance notification** before the scheduled maintenance time.
- **1-day reminder notification** before maintenance begins.

Notifications are sent to the email list configured in the service's Notification section.

#### Impact and limitations during maintenance

During maintenance, the service may experience some temporary impacts, including:

- Brief connection interruptions.
- Reduced performance.
- Some features may be limited.

These impacts will be minimized and will end when the maintenance process is complete.

#### Maintenance monitoring and control

FPT Database Engine provides mechanisms for users to proactively manage maintenance, including:

- Configuring the Maintenance Window when creating a database cluster.
- Modifying the Maintenance Window after the cluster has been deployed.
- Monitoring Pending Maintenance Events (upcoming maintenance events).

For detailed instructions, see the [Maintenance Window](/docs/en/fpt-database-engine/managed-fpt-database-engines-new/)/ section.

#### Emergency maintenance

In certain special cases, such as critical security patches or important updates, the system may perform emergency maintenance outside the Maintenance Window to ensure data safety and stable operations.
