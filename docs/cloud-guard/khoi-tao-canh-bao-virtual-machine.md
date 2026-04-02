---
id: "khoi-tao-canh-bao-virtual-machine"
title: "Create an alert for Virtual Machine"
sidebar_label: "Create an alert for Virtual Machine"
sidebar_position: 4
---

# Create an alert for Virtual Machine (VM)

**Step 1:** In the menu, go to **Security** > **Cloud Guard**, open the **Resource Alerts** tab, and click **Create Alert**.

A dialog box appears to guide you through the configuration.

**Step 2:** Configure the alert by filling in the corresponding fields:

| Field | Description |
|---|---|
| **Name** | Enter the alert name |
| **Type** | Select the resource type to monitor |
| **Apply to** | Select the resource(s) to apply this alert to |
| **Configure metrics** | Set the alert threshold |

- **Type** (Metric Type): Select the data type to monitor. Supported metric types include CPU usage, RAM usage, network bandwidth, disk IOPS, and more.
- **Operator:** Select the comparison operator: `<`, `<=`, `>=`, `>`.
- **Value:** Enter the threshold value. Validation depends on the unit of the selected metric type.
- **Alert Interval:** Select the evaluation cycle: 3 minutes, 5 minutes, 30 minutes, 1 hour, 6 hours, or 1 day.
- **Severity:** Select the alert severity level.
- **Notify to:** Select the notification recipients.

**Step 3:** Click **Create** to create the alert. The system validates the configuration and begins the creation process.

After creation, the new alert appears in the management table with full details: Name, State, Type, Metric, Severity, Applied to, Notify to, and Status.
