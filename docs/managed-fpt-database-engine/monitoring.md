---
id: "monitoring"
title: "Monitoring"
description: "The Monitoring feature provides real-time visibility into the operational health, performance, and resource utilization "
sidebar_label: "Monitoring"
sidebar_position: 39
---

# Monitoring

The Monitoring feature provides real-time visibility into the operational health, performance, and resource utilization of database clusters on FPT Cloud. It collects and visualizes key metrics and logs, enabling you to:
  * Detect anomalies early.
  * Evaluate query workload.
  * Take proactive actions to optimize availability and performance.

Monitoring in FPT Database Engine integrates with FPT Monitoring to collect database metrics and logs, and provides dashboards and alerts when required.
This guide describes how to access, configure, and use Monitoring to track the health and performance of database clusters in the FPT Cloud Portal.
### Step 1: Access Monitoring
Log in to FPT Cloud Portal. From the main menu, select **Database Platform → All Databases**. Click the ID of the target database cluster. Swich to the “**Monitor** ” tab to access the feature. The screen behavior depends on the Monitoring activation status:
  * Monitoring not enabled: The system displays a page prompting you to contact FPT Support. Contact the support team to enable Monitoring.

[![](/img/migrated/monitor-not-available-scaled-665c70e9.png)](/img/migrated/monitor-not-available-scaled-665c70e9.png)
  * Monitoring enabled: The system displays a list of database-specific metrics and logs. Metrics or logs that are not integrated with FPT Monitoring show Intergrated Status = “Disabled”.

[![](/img/migrated/monitor-enable-ba8960c7.png)](/img/migrated/monitor-enable-ba8960c7.png)
### Step 2: Integrate/disintegrate monitoring
  * **Integrate monitoring** : Disables metric/log collection for a database cluster. To integrate, on Workspace List, select “**Integrate** ” for the target workspace. Confirm the action in the warning dialog to complete. After successful integration, **Integrated Status** changes to “**Enabled** ”, FPT Monitoring starts collecting the corresponding metrics.
  * **Disintegrate monitoring** : Disables metric/log collection for a database cluster. To disintegrate, on **Workspace List** , select “**Disintegrate** ” for the target workspace. Confirm the action in the warning dialog to complete. After successful disintegration, Intergrated Status changes to “**Disabled** ”, FPT Monitoring stops collecting the corresponding metrics.

### Step 3: View workspace information
After monitoring integration is successful (Integrated Status = “**Enabled** ”), select the workspace name to open the workspace details page. On this page, you can access information: Monitoring dashboards, Contact points and Datasources.
[![](/img/migrated/view-workspace-detail-4d7a2af8.png)](/img/migrated/view-workspace-detail-4d7a2af8.png)
### Step 4: View monitoring information
You can view dashboards that display real-time and historical metrics on Grafana by selecting the Dashboard URL, which redirects you to the sign-in page.
[![](/img/migrated/login-grafana-ee39a38d.png)](/img/migrated/login-grafana-ee39a38d.png)
Enter the **Basic Authentication – Username** and **Basic Authentication – Password** provided on the workspace details page and click Login to access the Grafana homepage.
[![](/img/migrated/grafana-home-ff1e4760.png)](/img/migrated/grafana-home-ff1e4760.png)
#### View metrics:
Click “**Toggle Menu** ” > select “**Dashboards** ”. The Dashboards page is displayed. Select the template that matches the database engine type to view available.
[![](/img/migrated/metric-dashboard-19d10d37.png)](/img/migrated/metric-dashboard-19d10d37.png)
Select a folder to view the corresponding metric:
[![](/img/migrated/metric-dashboard1-81a75568.png)](/img/migrated/metric-dashboard1-81a75568.png)
#### View Logs:
Click “**Toggle Menu** ” > forose “**Explore** ”:
[![](/img/migrated/dashboard-log1-1-64999825.png)](/img/migrated/dashboard-log1-1-64999825.png)
Choose “**Loki** ”:
[![](/img/migrated/dashboard-log2-8404b97b.png)](/img/migrated/dashboard-log2-8404b97b.png)
In the label filter field, select the label to view the logs.
[![](/img/migrated/dashboard-log-filter-51eae0b5.png)](/img/migrated/dashboard-log-filter-51eae0b5.png)
In the value filter field, select the instance to view the logs.
[![](/img/migrated/dashboard-log-runquery-1becce67.png)](/img/migrated/dashboard-log-runquery-1becce67.png)
Logs information are displayed as below:
[![](/img/migrated/dashboard-log-view-9c882ffa.png)](/img/migrated/dashboard-log-view-9c882ffa.png)