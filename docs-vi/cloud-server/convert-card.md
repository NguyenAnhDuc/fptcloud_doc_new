---
id: "convert-card"
title: "Chuyển card thường thành card Primary"
description: "Đổi card NIC thường thành card Primary."
sidebar_label: "Chuyển card thường thành card Primary"
sidebar_position: 61
---

# Chuyển card thường thành card Primary

Bạn có thể nâng cấp một card NIC thông thường lên trạng thái Primary, biến nó thành giao diện mạng chính của máy ảo.

:::warning
Việc thay đổi card NIC Primary có thể ảnh hưởng đến định tuyến mạng và khả năng kết nối. Hãy kiểm tra kỹ sau khi thực hiện thay đổi này.
:::

## Chuyển card NIC thành Primary

1. Truy cập trang **Quản lý Instance** và chọn Instance của bạn.
2. Chuyển sang tab **NIC**.
3. Tìm card NIC thông thường cần nâng cấp, sau đó chọn **Hành động** → **Đặt làm Primary**.
4. Xác nhận hành động trong hộp thoại hiện ra.

Card NIC được chọn sẽ được chỉ định là Primary. Card Primary trước đó sẽ trở thành card NIC thông thường.

## Các bước tiếp theo

- [Chỉnh sửa IP Address](./edit-ip-address.md)
- [Thay đổi Network Config](./change-network-config.md)
