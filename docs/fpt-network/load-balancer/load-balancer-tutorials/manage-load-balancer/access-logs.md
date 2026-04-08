---
id: "access-logs"
title: "Access logs"
description: "How to view and export Load Balancer access logs on FPT Cloud."
sidebar_label: "Access logs"
sidebar_position: 11
---

# Access logs

The **Access Log** feature records all information about incoming requests, including client IP, port, method, path, and server response. This is an important tool for analysing traffic, monitoring performance, ensuring security, and optimising your system.

**Step 1:** In the Load Balancer list, select the Load Balancer whose logs you want to view, then click the **Access logs** tab.

**Step 2:** View the log fields listed below.

:::note
Access logs are stored for a maximum of 7 days or 1,000 lines.
:::

| Field | Description |
| --- | --- |
| Timestamp | The time the Load Balancer received the request. |
| Listener | The name of the Listener that received the request. |
| Server pool | The name of the pool to which the request was forwarded. |
| Bytes sent | Bytes sent to the client (body only, excluding HTTP headers). |
| Bytes uploaded | Bytes uploaded to the server. |
| Client IP | The IP address of the client that sent the request. |
| Client port | The port of the client that sent the request. |
| Request | The full HTTP request received from the client, including method, URL, and protocol version. |
| Member | The backend server to which the request was forwarded. |
| SSL verify | The result of the client SSL certificate verification (relevant only when SSL is in use). |
| Status code | The HTTP status code returned to the client. |
| Total time (ms) | The total time to process the request and response, in milliseconds. |

Select a specific **Time range** or use **Filter** to add fields and values to narrow the log view.

**Step 3:** To download the access log file for the selected time range, click **Export logs**.

The downloaded `.log` file is named using the format:

```
loadbalancer_accesslogs__starttime_endtime
```

where start time and end time use the format `YYYYMMDDThh:mmTimezone` (browser time), for example `20240729T2300+0700`.
