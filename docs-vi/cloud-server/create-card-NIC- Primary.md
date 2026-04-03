---
id: "create-card-NIC- Primary"
title: "Khởi tạo card NIC Primary"
description: "Hệ thống tự khởi tạo card NIC Primary mặc định khi tạo Instance."
sidebar_label: "Khởi tạo card NIC Primary"
sidebar_position: 57
---

# Khởi tạo card NIC Primary

Khi bạn tạo một Instance trên FPT Cloud, hệ thống sẽ tự động khởi tạo một card NIC Primary mặc định. Card này đóng vai trò là giao diện mạng chính của máy ảo.

## Cách hoạt động

- Card NIC Primary được tạo tự động trong quá trình khởi tạo Instance — không cần thực hiện thủ công.
- Card được gắn vào Subnet đã chọn tại thời điểm tạo Instance.
- Card NIC Primary không thể bị xóa khi Instance vẫn còn tồn tại.

:::note
Để thêm các card NIC bổ sung vào Instance đã có, xem [Thêm card NIC mới](./add-card-NIC-%20new.md).
:::

## Các bước tiếp theo

- [Disable NIC](./disable-NIC-card.md)
- [Thêm card NIC mới](./add-card-NIC-%20new.md)
