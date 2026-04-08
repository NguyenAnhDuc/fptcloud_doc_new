---
id: "change-address-MAC"
title: "Thay đổi địa chỉ MAC"
description: "Hướng dẫn reset và cấp địa chỉ MAC mới cho card NIC trên FPT Cloud."
sidebar_label: "Thay đổi địa chỉ MAC"
sidebar_position: 9
---

# Thay đổi địa chỉ MAC

Tính năng này cho phép hệ thống tự động cấp địa chỉ MAC mới cho card NIC, thay thế địa chỉ cũ.

1. Chọn card NIC cần reset địa chỉ MAC. Tính năng này áp dụng cho cả card Primary và card thường.

:::warning
Hành động này có thể ảnh hưởng đến các dịch vụ như Kubernetes, Load Balancer. Hãy cân nhắc kỹ trước khi thực hiện. Sau khi thay đổi, bạn cần cập nhật thông tin network trong file config của hệ điều hành. Xem hướng dẫn: [How to change Config file](/vi/docs/fpt-cloud-server/cloud-server/tutorials/change-network-config/)/.
:::

[![Chọn card NIC cần reset MAC](/img/migrated/image-1691395036893-7a3595d7.png)](/img/migrated/image-1691395036893-7a3595d7.png)

2. Xác nhận thay đổi địa chỉ MAC.

[![Xác nhận thay đổi MAC](/img/migrated/image-1691395221482-354899e7.png)](/img/migrated/image-1691395221482-354899e7.png)

3. Chờ hệ thống xử lý.

[![Hệ thống đang xử lý](/img/migrated/image-1691395253477-ac20d597.png)](/img/migrated/image-1691395253477-ac20d597.png)

4. Hệ thống đã cấp địa chỉ MAC mới cho card NIC.

[![Card NIC với địa chỉ MAC mới](/img/migrated/image-1691395309290-5b6daaff.png)](/img/migrated/image-1691395309290-5b6daaff.png)
