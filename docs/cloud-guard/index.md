---
id: "cloud-guard"
title: "FPT Cloud Guard"
sidebar_label: "FPT Cloud Guard"
sidebar_position: 1
---

# FPT Cloud Guard

FPT Cloud Guard – Alert is a service that automatically monitors the operational status of resources on FPT Cloud (Cloud Server, Load Balancer, Autoscaling, Object Storage, Kubernetes, Database, and more). It lets you configure alerts triggered when resource usage exceeds defined thresholds, and supports multi-channel notifications via Email, Webhook, Telegram, Slack, SMS, Call, and Microsoft Teams.

With FPT Cloud Guard, you can proactively monitor your FPT Cloud resources without dedicated operations staff, keeping costs minimal.

## Before you create an alert

- **Metrics and thresholds:** Each resource type has different technical parameters. Determine which metrics to monitor and what threshold values indicate abnormal behavior.
- **Notification method:** Choose an alert delivery method that suits your organization so the responsible person receives notifications and can respond quickly.
- **Alert scenarios:** Define different alert scenarios for specific cases — for example, how long to alert after a threshold is exceeded, or how many recipients to notify.

## Release notes

### FPT Cloud Guard (Alert 2.0) — Resource alert management on FPT Cloud Portal

FPT Cloud officially launched FPT Cloud Guard on the Portal interface. Users can easily set up alert scenarios and configure recipients via Email. Cloud Guard continuously monitors resources and sends alerts when usage exceeds the configured threshold, saving time on manual monitoring.

**Features:**
- Create and customize alerts when VM RAM/CPU exceeds threshold
- Create RAM/CPU alerts for Autoscale Groups with automatic Scale In/Out
- Check real-time status on the interface
- Enable/disable alert sending and manage notification methods
- View alert history and details

### FPT Cloud Guard (Alert 2.1) — New network and disk alerts

New alerts added:
- **Network bandwidth in/out (Mbps):** Alerts when inbound/outbound bandwidth of all NICs exceeds threshold
- **Total network bandwidth (Mbps):** Alerts when total bandwidth of all NICs exceeds threshold
- **Disk IOPS (IOPS):** Alerts when disk read/write IOPS exceeds threshold, per server
- **Disk Read/Write Bandwidth (MBps):** Alerts when disk read/write bandwidth exceeds threshold, per server

Version 2.1 also adds editing of existing alerts, editing/deleting recipients, viewing detailed alert history, and support for both OpenStack and VMware virtualization platforms.

### FPT Cloud Guard (Alert 2.2) — Multi-channel alerts

New notification channels added:
- **Slack**
- **Telegram**

Version 2.2 also supports creating alerts for multiple servers at once with the "apply to multiple virtual machines" feature.
