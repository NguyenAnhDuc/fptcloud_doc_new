---
id: "access-logs"
title: "Access Logs"
description: "The **Access Log** feature of the **Load Balancer** allows capturing all information about incoming requests, including "
sidebar_label: "Access Logs"
sidebar_position: 10
pagination_next: null
---

# Access Logs

## Access Log
The **Access Log** feature of the **Load Balancer** allows capturing all information about incoming requests, including client IP, port, method, path, and server response. This is a vital tool for analyzing traffic, monitoring performance, ensuring security, and optimizing the system.
### How to use the **Access Log** feature
**Step 1:** On the Load Balancer list screen, select the Load Balancer you want to view logs for → go to the **Access logs** tab.
**Step 2:** You can view logs with the following fields:
> **Note:** _Load Balancer access logs are retained for up to 7 days._  
| Field Name  | Description  |  
| --- | --- |  
| Timestamp  | Time when the Load Balancer received the request  |  
| Listener  | Name of the listener that received the request  |  
| Server pool  | Name of the pool the request was forwarded to  |  
| Bytes sent  | Number of bytes sent to the client (body only, excluding HTTP headers)  |  
| Bytes uploaded  | Bytes uploaded to the backend server  |  
| Client IP  | IP address of the client that sent the request  |  
| Client port  | Port of the client that sent the request  |  
| Request  | Full HTTP request received from the client, including method, URL, version  |  
| Member  | Name of the backend server that handled the request  |  
| SSL verify  | Result of client SSL certificate verification (only applicable with SSL)  |  
| Status code  | HTTP status code returned to the client  |  
| Total time (ms)  | Total time to process the request and send the response, in milliseconds  |  
Users can select a specific **Time range** or use the **Filter** function to specify fields and values to view logs more precisely.
**Step 3:** To **download** the `.log` file of **Load Balancer** access logs for a selected time period, click on **Export logs**.
The downloaded log file will be in `.log` format with the following naming convention:
  * File name format: `loadbalancer_accesslogs__starttime_endtime`
  * Where: 
    * **start time & end time format:** `YYYYMMDDTHH:mmTimezone`
    * **Time is based on browser time** , e.g., `20240729T2300+0700`