---
id: "incoming-webhook"
title: "Incoming webhook"
description: "Hướng dẫn sử dụng incoming webhook để tạo incident"
sidebar_label: "Incoming webhook"
sidebar_position: 4
---

# Incoming webhook

Sau khi cài đặt thành công **Incoming webhook**, nhấn **Show details** để xem thông tin chi tiết.

[![Chi tiết incoming webhook](/img/migrated/Screenshot_27-8a7004f4.png)](/img/migrated/Screenshot_27-8a7004f4.png)

[![Thông tin token và URL](/img/migrated/Screenshot_28-222663b7.png)](/img/migrated/Screenshot_28-222663b7.png)

Các thông tin chính:

- **Token**: chuỗi ký tự dùng để xác thực
- **URL**: incoming webhook URL, dùng để POST incident

## Ví dụ sử dụng curl

```bash
curl "api-incident-stg.fci.fmon.fptcloud.com/api/v1/create_incident?title=json(report.title)" \
  --request POST \
  --header 'Authorization: a9210eeee765e209c6a81a13e957574e' \
  --header 'Content-Type: application/json' \
  --data '{"report":{"title":"cool that this title comes from the json"}}'
```
