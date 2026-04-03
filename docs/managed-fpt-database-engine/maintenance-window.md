---
id: "maintenance-window"
title: "Maintenance Window"
description: "The **Maintenance Window** feature allows customers to proactively define a time window for periodic maintenance of thei"
sidebar_label: "Maintenance Window"
sidebar_position: 37
---

# Maintenance Window

The **Maintenance Window** feature allows customers to proactively define a time window for periodic maintenance of their database clusters. During this window, FPT performs system upgrades, patching, and optimization activities.
This feature helps minimize the impact on business operations while improving overall service stability.

#### Operating Rules:
  * The Maintenance Window operates on a weekly basis.
  * It is applied per database cluster.
  * Each cluster can have only one active Maintenance Window at a time.

#### Required Permissions:  
| Permission  | Action Type  | Description  |  
| --- | --- | --- |  
| manageDatabase:Configuration  | Edit  | Allows modifying database configuration such as parameters, and scaling configurations.  |  

#### Key Capabilities:
  * Configure the day and time for periodic maintenance.
  * Update the Maintenance Window during service operation.
  * Display upcoming maintenance events.
  * Send notifications prior to maintenance activities.

#### How to Configure:
When creating a new database cluster, users can select a Maintenance Window in the Additional Service configuration step. The system will apply this configuration from the first operational cycle. For details, refer to [Provision Database](../managed-fpt-database-engine/index.md) section.
During use, users can update the maintenance window by following these steps:
**Step 1: Access the Maintenance Window Configuration**
Log in to the FPT Cloud Portal. From the main menu, select **Database Platform** → **All Database**. On the Database List page, select the Cluster ID you want to configure. Open the **Maintenance** tab to access the Maintenance Window management screen.
[![](/img/migrated/view-maintenance-3d911f64.png)](/img/migrated/view-maintenance-3d911f64.png)
**Step 2: Configure the Maintenance Window**
On the **Maintenance** tab, click the Configuration icon (gear icon next to "Maintenance Window") to open the **Update Maintenance Window** dialog:
[![](/img/migrated/update-maintenance-wwindow-d95e9f42.png)](/img/migrated/update-maintenance-wwindow-d95e9f42.png)
Enter the following information:
  * **Day of Week** : The day of the week on which maintenance is performed. Available options range from "Monday" to "Sunday".
  * **Start Time** : the time at which maintenance is allowed to start on the selected day. Maintenance duration: 1 hour, starting from the configured Start Time.

Click **Save** to apply the changes. The system will apply the configuration for subsequent maintenance sessions.
**Note** : You can update the Maintenance Window only if the database cluster does not already have a scheduled maintenance event.
**Step 3: View Upcoming Maintenance Events**
Scheduled maintenance activities are displayed in the "Pending Maintenance Event" section. The following information is provided:
  * **Maintenance Event** : Name of the maintenance event.
  * **Type** : Type of maintenance.
  * **Duration (Minute)** : Estimated maintenance duration in minutes.
  * **Apply At** : Scheduled start time of the maintenance.

Users are encouraged to regularly review the maintenance schedule to plan operations accordingly and minimize service impact.
The system sends email notifications prior to maintenance activities. Currently, two notification milestones are supported:
  * 7 days before the scheduled maintenance.
  * 1 day before the maintenance begins.

To configure the list of email recipients, navigate to the Notification tab and update the settings for the Maintenance service. For more information, refer to [Notification](../managed-fpt-database-engine/index.md) section.
