---
id: "configure-whitelist-ip"
title: "Cấu hình whitelist IP"
description: "Hướng dẫn cấu hình danh sách IP được phép truy cập vào ArgoCD"
sidebar_label: "Cấu hình whitelist IP"
sidebar_position: 20
---

# Cấu hình whitelist IP

FPT Cloud hỗ trợ cấu hình whitelist IP cho phép truy cập vào URL ArgoCD qua giao diện Portal.

1. Vào màn hình **Security & Access** > **Whitelist IP**.

[![](/img/migrated/Picture41-2-66349b65.png)](/img/migrated/Picture41-2-66349b65.png)

2. Nhập các địa chỉ IP được phép truy cập vào ArgoCD.

:::note
Các IP cách nhau bởi dấu phẩy (`,`).
:::

[![](/img/migrated/Picture42-2-a15b14d8.png)](/img/migrated/Picture42-2-a15b14d8.png)

3. Kết quả sau khi cấu hình:

[![](/img/migrated/Picture43-2-ba2e74dc.png)](/img/migrated/Picture43-2-ba2e74dc.png)

4. Kiểm tra kết quả: truy cập ArgoCD từ IP nằm ngoài whitelist sẽ nhận lỗi 403.

[![](/img/migrated/Picture44-2-d712e561.png)](/img/migrated/Picture44-2-d712e561.png)
