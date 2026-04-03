---
id: "logs-and-monitoring"
title: "Logs And Monitoring"
description: "GPU Container provides **container logs** and **metrics** to help you monitor and troubleshoot your workloads. To view y"
sidebar_label: "Logs And Monitoring"
sidebar_position: 10
---

# Logs And Monitoring

GPU Container provides **container logs** and **metrics** to help you monitor and troubleshoot your workloads. To view your logs and metrics, open the Details Container screen, open the Logs or Monitoring tab. This gives you container logs and metrics monitoring, making it easy to diagnose issues or monitor your container’s activity. 

## Container Logs
Container logs include all application logs. Note that logs are only kept for 14 days, and timestamps are shown in the UTC time zone. . [![Alt text](/img/migrated/Logs_screen-6445c59e.png)](/img/migrated/Logs_screen-6445c59e.png)
  1. Download: Download logs from the last 14 days of your container. 
  2. Search: Enter a keyword to search within the log content. 
  3. Time Filter: Filter logs by specific time ranges. 
  4. Refresh: Interval at which the container logs are automatically updated. 

## Metric Monitoring
Monitoring metrics are collected to track the performance, availability, and resource usage of containerized services, helping detect issues and optimize operations. Note that metric data is retained for 14 days.
There are 4 metric groups: 
  * **Utilization metrics** : Monitor CPU, memory, and GPU usage to assess system performance and resource efficiency. 
  * **Disk metrics** : Track disk read/write speed, and latency to detect storage issues or bottlenecks. 
  * **Network metric** : Measure network traffic, latency, and errors to identify connectivity problems and ensure service reliability. 
  * **Temperature and Power metrics** : Monitor hardware temperature and power consumption to prevent overheating and maintain hardware health [![Alt text](/img/migrated/Monitoring_screen-5c33d142.png)](/img/migrated/Monitoring_screen-5c33d142.png)

  1. **Time Filter** : Filter metrics by specific time ranges. 
  2. **Refresh** : Interval at which the container metrics are automatically updated.
