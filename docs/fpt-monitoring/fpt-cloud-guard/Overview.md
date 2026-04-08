---
id: "Overview"
title: "Overview"
sidebar_label: "Overview"
sidebar_position: 1
---

# FPT Cloud Guard overview

FPT Cloud Guard is a security and monitoring service on FPT Cloud that provides automated multi-channel alerting for cloud resources.

## Key capabilities

- **Resource alerts:** Monitor Virtual Machines, Load Balancers, Object Storage, VPN site-to-site, and more. Receive alerts when metrics such as CPU usage, RAM, network bandwidth, or disk IOPS exceed configured thresholds.
- **Activity alerts:** Get notified when specific actions are performed on your resources (create, delete, update, etc.).
- **Threat alerts:** Detect security threats including high-frequency scanning, malware infection, and potential DDoS attacks.
- **Multi-channel notifications:** Deliver alerts via Email, Telegram, Slack, Microsoft Teams, Webhook, SMS, and Call.
- **Recipient management:** Create and manage alert recipients at the VPC or Tenant level.

## How it works

1. You configure an alert with a metric type, threshold, condition, and notification recipients.
2. FPT Cloud Guard continuously evaluates the metric against the threshold at the configured interval.
3. When the threshold is breached (or returns to normal), the system automatically sends a notification to all configured recipients.

## Getting started

See [Initial setup](/docs/en/fpt-monitoring/fpt-cloud-guard/Initial-Setup) to create your FPT Cloud account and log in to FPT Portal before creating your first alert.
