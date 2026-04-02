---
id: "delete-card-NIC"
title: "Xóa Network Interface Card"
description: "Hướng dẫn xóa card NIC khỏi Instance trên FPT Cloud."
sidebar_label: "Xóa card NIC"
sidebar_position: 10
---

# Xóa Network Interface Card

Tính năng xóa card NIC áp dụng cho card thông thường. Đối với card Primary, chức năng này bị vô hiệu hóa.

1. Chọn card NIC cần xóa.

[![Chọn card NIC cần xóa](/img/migrated/image-1691389181936-f9a3bcaf.png)](/img/migrated/image-1691389181936-f9a3bcaf.png)

[![Xác nhận chọn card](/img/migrated/image-1691389200234-69a54bea.png)](/img/migrated/image-1691389200234-69a54bea.png)

2. Xác nhận xóa card.

[![Xác nhận xóa card NIC](/img/migrated/image-1691389217097-c6e902c6.png)](/img/migrated/image-1691389217097-c6e902c6.png)

3. Chờ hệ thống xử lý.

[![Hệ thống đang xử lý](/img/migrated/image-1691389227628-40693d15.png)](/img/migrated/image-1691389227628-40693d15.png)

4. Card được xóa thành công và Instance sẽ không thể kết nối qua card này. Để đảm bảo thông tin đồng bộ, bạn cần cập nhật thông tin network trong file config của hệ điều hành. Xem hướng dẫn: [How to change Config file](../change-network-config/index.md).

[![Card NIC đã xóa thành công](/img/migrated/image-1691389236762-c118e8e1.png)](/img/migrated/image-1691389236762-c118e8e1.png)
