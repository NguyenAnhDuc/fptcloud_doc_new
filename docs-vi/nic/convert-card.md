---
id: "convert-card"
title: "Chuyển card thường thành card Primary"
description: "Hướng dẫn chuyển đổi card NIC thông thường thành card Primary trên FPT Cloud."
sidebar_label: "Chuyển card thành Primary"
sidebar_position: 7
---

# Chuyển card thường thành card Primary

FPT Cloud hỗ trợ chuyển đổi card NIC thông thường thành card Primary một cách dễ dàng. Đối với card đã là Primary, chức năng này sẽ bị vô hiệu hóa.

1. Chọn card NIC cần chuyển sang Primary.

[![Chọn card NIC](/img/migrated/image-1691382928697-43633c94.png)](/img/migrated/image-1691382928697-43633c94.png)

[![Xác nhận chọn card](/img/migrated/image-1691382936808-5dc5b74f.png)](/img/migrated/image-1691382936808-5dc5b74f.png)

2. Xác nhận chuyển card thường sang card Primary.

:::warning
Hành động này có thể ảnh hưởng đến các dịch vụ như Kubernetes, Load Balancer. Hãy cân nhắc kỹ trước khi thực hiện. Sau khi thay đổi, bạn cần cập nhật thông tin network trong file config của hệ điều hành. Xem hướng dẫn: [How to change Config file](../change-network-config/index.md).
:::

[![Xác nhận chuyển đổi](/img/migrated/image-1691382948749-d9b6edea.png)](/img/migrated/image-1691382948749-d9b6edea.png)

3. Chờ hệ thống xử lý.

[![Hệ thống đang xử lý](/img/migrated/image-1691382962972-4c8ba6b5.png)](/img/migrated/image-1691382962972-4c8ba6b5.png)

4. Card thường được chuyển thành Primary, và card Primary cũ chuyển về card thường. Instance có thể kết nối mạng qua card mới này.

[![Kết quả sau khi chuyển đổi](/img/migrated/image-1691382975861-64b7aa9e.png)](/img/migrated/image-1691382975861-64b7aa9e.png)
