---
id: "edit-ip-address"
title: "Chỉnh sửa địa chỉ IP"
description: "Hướng dẫn thay đổi địa chỉ IP của card NIC trên FPT Cloud."
sidebar_label: "Chỉnh sửa địa chỉ IP"
sidebar_position: 8
---

# Chỉnh sửa địa chỉ IP

1. Chọn card NIC cần thay đổi địa chỉ IP.

:::warning
Hành động này có thể ảnh hưởng đến các dịch vụ như Kubernetes, Load Balancer. Hãy cân nhắc kỹ trước khi thực hiện. Sau khi thay đổi, bạn cần cập nhật thông tin network trong file config của hệ điều hành. Xem hướng dẫn: [How to change Config file](/docs/vi/fpt-cloud-server/cloud-server/tutorials/change-network-config/)/.
:::

[![Chọn card NIC cần thay đổi IP](/img/migrated/image-1691383107122-1741e5c6.png)](/img/migrated/image-1691383107122-1741e5c6.png)

2. Cấu hình địa chỉ IP mới.

   FPT Cloud gợi ý sẵn một địa chỉ IP thuộc Subnet của bạn. Bạn có thể giữ nguyên hoặc nhập địa chỉ IP khác theo nhu cầu.

[![Gợi ý địa chỉ IP](/img/migrated/image-1691383118729-01e836f2.png)](/img/migrated/image-1691383118729-01e836f2.png)

   Sau khi chọn địa chỉ IP, xác nhận thay đổi.

[![Xác nhận thay đổi IP](/img/migrated/image-1691383130785-5d815e59.png)](/img/migrated/image-1691383130785-5d815e59.png)

3. Chờ hệ thống xử lý.

[![Hệ thống đang xử lý](/img/migrated/image-1691383142781-8006bcac.png)](/img/migrated/image-1691383142781-8006bcac.png)

4. Card chuyển sang trạng thái **Active** và Instance có thể kết nối mạng với địa chỉ IP mới.

[![Card NIC Active với IP mới](/img/migrated/image-1691383157084-b076238f.png)](/img/migrated/image-1691383157084-b076238f.png)
