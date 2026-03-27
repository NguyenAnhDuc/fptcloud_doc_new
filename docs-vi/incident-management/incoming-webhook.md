---
id: "incoming-webhook"
title: "Incoming Webhook"
description: "Sau khi cài đặt thành công Incoming webhook, xem chi tiết thông tin incoming webhook, click **Show details**"
sidebar_label: "Incoming Webhook"
sidebar_position: 4
---

# Incoming Webhook

Sau khi cài đặt thành công Incoming webhook, xem chi tiết thông tin incoming webhook, click **Show details**
[![](/img/migrated/Screenshot_27-8a7004f4.png)](/img/migrated/Screenshot_27-8a7004f4.png)
[![](/img/migrated/Screenshot_28-222663b7.png)](/img/migrated/Screenshot_28-222663b7.png)
  * Token: chuỗi ký tự dùng để xác thực 
  * URL: incoming webhook url, dùng để POST incident 

Ví dụ sau minh họa cách đẩy 1 incident bằng incoming webhook:
$ curl "api-incident-stg.fci.fmon.fptcloud.com/api/v1/create_incident?title=json(report.title)" --request POST --header 'Authorization: a9210eeee765e209c6a81a13e957574e' --header 'Content-Type: application/json' --data '{"report":{"title":"cool that this title comes from the json"}}'