---
id: "create-incident-via-webhook"
title: "Tạo incident qua incoming webhook"
description: "Hướng dẫn tạo incident thông qua incoming webhook"
sidebar_label: "Tạo qua incoming webhook"
sidebar_position: 17
---

# Tạo incident qua incoming webhook

1. Trong menu trái, nhấn **Apps** > **Incident**.
2. Nhấn **Integration**.
3. Cài đặt **Incoming webhook** (nếu chưa cài đặt, xem [hướng dẫn cấu hình integrations](./cau-hinh-integrations.md)).
4. Sau khi cài đặt thành công, nhấn **Show details** để xem thông tin chi tiết.

[![Chi tiết incoming webhook](/img/migrated/Screenshot_27-8a7004f4.png)](/img/migrated/Screenshot_27-8a7004f4.png)

[![Token và URL của webhook](/img/migrated/Screenshot_28-222663b7.png)](/img/migrated/Screenshot_28-222663b7.png)

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
