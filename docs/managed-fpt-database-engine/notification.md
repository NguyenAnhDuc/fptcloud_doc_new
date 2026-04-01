---
id: "notification"
title: "Notification"
description: "The **Notification** feature helps users receive alerts for key events and service statuses related to their clusters. T"
sidebar_label: "Notification"
sidebar_position: 38
---

# Notification

The **Notification** feature helps users receive alerts for key events and service statuses related to their clusters. These notifications can be delivered via email or through third party channels, ensuring you are promptly informed about backup jobs, resource thresholds, scaling events, and other critical database operations.
Currently, the notification system supports the following alert categories:
  * Backup Service & Restore Alerts – notifications for enabling/disabling backup service, backup job success/failure, and restore job results.
  * Resource Alerts – notify when vCPU, RAM, or Disk usage reaches defined thresholds.
  * Vertical Scaling Alerts – notifications for automatic scaling events (e.g., increase in CPU/RAM/Disk).
  * Maintenance notification – notifications when FPT performs maintenance that affects the database cluster.

This guide helps you set up and manage notifications to effectively track important events in FPT Database Engine on the FPT Cloud Portal.
## Configuring notifications from FPT Database Engine
### Step 1: Access to Notification Setting page
Sign in to FPT Cloud Portal. From the left navigation menu, select “**Database Platform** ” → choose your DB engine category (Relational, Non‑Relational, etc.). Select the target Cluster ID. Switch to the “**Notification** ” tab on the cluster details page.
[![](/img/migrated/notification-scaled-fbca99ff.png)](/img/migrated/notification-scaled-fbca99ff.png)
### Step 2: Create alert rules
Click **Add New Alert List** (the plus icon next to the **Notification List**) to open the dialog for adding alerts.
[![](/img/migrated/add-alert-scaled-5779954f.png)](/img/migrated/add-alert-scaled-5779954f.png)
Enter the configuration information:
  * **Type** : Select the notification delivery method used to send alert messages to recipients. Available options: 
    * **Email** : Send notifications via email.
    * **Telegram** : Send notifications via Telegram. This option does not support the "Maintenance" service.
  * **Current Services Notification** :Select the DBaaS services that will trigger notifications when related jobs or events are completed or executed. Available options: 
    * **Backup** – Backup job notifications.
    * **Restore** – Restore job notifications.
    * **Maintenance** – Notification when the system performs service maintenance.
    * **Resource** – Resource usage notifications.
    * **Vertical Scaling** – Scale up notification.
  * **Current Recipient List** : 
    * If Type = “Email” -> Enter the email address that will receive alert notifications.
    * If Type = “Telegram” -> Enter the telegram channel ID that will receive alert notifications. Instructions on how to obtain the channel ID can be found in section [2. Configure Telegram to receive notifications from FPT Database Engine](../managed-fpt-database-engine/index.md).
  * Alert conditions for **Current Services Notification** = “Resource”: 
    * **vCPU more than (%)** : Specify the CPU usage threshold (percentage). An alert is triggered when vCPU usage exceeds this value.
    * **RAM more than (%)** : Specify the memory usage threshold (percentage). An alert is triggered when RAM usage exceeds this value.
    * **Storage more than (%)** : Specify the storage usage threshold (percentage). An alert is triggered when disk usage exceeds this value.
An alert will be sent when any one of the configured conditions is met. If all three conditions are met, multiple alert notifications will be sent. 

After entering all the information, click "**Add** " to save the configuration.
All configured alerts appear in the **Notification List** on the **Notification** tab. You can view recipients, types, monitored services, and status (enabled/disabled). The following management operations can be performed on a configured alert:
  * Edit Alert List – click the edit (pencil) icon next to an alert list to update recipients or monitored services.
  * Disable Alert – temporarily turn off specific notifications without deleting the rule.
  * Enable Alert – re‑enable a previously disabled alert.

**Best Practices:**
  * Configure alerts before enabling auto scaling
  * Use reasonable thresholds to avoid alert flooding
  * Assign alerts to operational and DBA teams
  * Combine alerts with monitoring dashboards for full observability

## Configure Telegram to receive notifications from FPT Database Engine
When setting up notifications from FPT via Telegram, you need to enter the channel ID. The steps below guide you through the process of obtaining this ID.
### Step 1: Create a Telegram Channel
Log in to Telegram. Create a new Private channel. Assign a channel name (for example: FDE Notify) to receive notifications from FPT Database Engine.
### Step 2: Add the Bot to the Channel
Search for **@fde_notify_bot** in the member search box. Select **FDE NOTIFY** to add the bot to the channel.
[![](/img/migrated/tele_add_noti_bot-scaled-8f932da5.png)](/img/migrated/tele_add_noti_bot-scaled-8f932da5.png)
### Step 3: Assign Admin Permission to the Bot
Set @fde_notify_bot as an Administrator of the newly created channel to allow it to send notifications.
[![](/img/migrated/tele_admin-ab9912a8.png)](/img/migrated/tele_admin-ab9912a8.png)
### Step 4: Retrieve the Channel ID
In Telegram, use the search box to find **@username_to_id_bot**.
[![](/img/migrated/Tele_IDBot-scaled-fab904cb.png)](/img/migrated/Tele_IDBot-scaled-fab904cb.png)
Click the **IDBot** to open the chat window and select **Start**.
Open the Keyboard Shortcuts menu and select **Channel**.
[![](/img/migrated/tele_channel_select-ad989119.png)](/img/migrated/tele_channel_select-ad989119.png)
Select the channel you have just created and click **Send**. Telegram will return the Channel ID. Save this ID for later use.
[![](/img/migrated/tele_channel_id-431370d0.png)](/img/migrated/tele_channel_id-431370d0.png)
### Step 5: Register the Channel ID in FPT Console Portal
Follow the instructions in [1. Configuring notifications from FPT Database Engine](../managed-fpt-database-engine/index.md) section. When selecting Telegram as the notification type, paste the Channel ID obtained in Step 4 into the channel field.
**Note** : To configure multiple Telegram channels, repeat Steps 1 through 4 for each channel to obtain the corresponding Channel ID.