---
id: "monitor-ip"
title: "Giám sát các IP đang được bảo vệ"
description: "Hướng dẫn giám sát trạng thái bảo vệ và phân tích tấn công DDoS qua dashboard FPT Cloud."
sidebar_label: "Giám sát IP được bảo vệ"
sidebar_position: 2
pagination_next: null
---

# Giám sát các IP đang được bảo vệ

Bạn có thể giám sát hệ thống và trạng thái bảo vệ thông qua dashboard trên FPT Cloud Portal.

1. Vào màn hình danh sách IP đang được bảo vệ và chọn IP cần kiểm tra.

[![Danh sách IP được bảo vệ](/img/migrated/image-1750405781163-2bd000bd.png)](/img/migrated/image-1750405781163-2bd000bd.png)

2. Xem trạng thái bảo vệ:

   - **Không có tấn công**: Hệ thống hiển thị thông báo IP đang được bảo vệ an toàn và chưa ghi nhận tấn công trong tháng.

[![IP được bảo vệ, không có tấn công](/img/migrated/image-1750405795153-92b66506.png)](/img/migrated/image-1750405795153-92b66506.png)

   - **Có tấn công**: Hệ thống hiển thị thông tin chi tiết các đợt tấn công.

[![Thông tin tấn công DDoS](/img/migrated/image-1750405809600-ee4429cf.png)](/img/migrated/image-1750405809600-ee4429cf.png)

## Thông tin bảo vệ trong tháng

- **Total traffic**: Tổng traffic vào IP trong tháng.
- **Block traffic**: Tổng traffic tấn công bị phát hiện và ngăn chặn.
- **Block packet**: Tổng packet tấn công bị phát hiện và ngăn chặn.

## Thông tin nguồn tấn công

Hệ thống liệt kê các nguồn tấn công chủ yếu.

[![Nguồn tấn công](/img/migrated/image-1750405829915-04f543c3.png)](/img/migrated/image-1750405829915-04f543c3.png)

## Protocol bị tấn công

Hệ thống hiển thị protocol theo ID. Tham khảo thêm tại [IANA Protocol Numbers](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml).

- **6**: TCP
- **17**: UDP

[![Protocol bị tấn công](/img/migrated/image-1750405849332-5868a949.png)](/img/migrated/image-1750405849332-5868a949.png)

## Độ dài packet (đơn vị: byte)

[![Độ dài packet](/img/migrated/image-1750406210587-aaacb4ed.png)](/img/migrated/image-1750406210587-aaacb4ed.png)

## Port nguồn tấn công

[![Port nguồn tấn công](/img/migrated/image-1750406239763-3e4ba6d1.png)](/img/migrated/image-1750406239763-3e4ba6d1.png)

## Port bị tấn công

[![Port bị tấn công](/img/migrated/image-1750406261280-18e0987a.png)](/img/migrated/image-1750406261280-18e0987a.png)

## Biểu đồ traffic bị chặn (30 ngày)

[![Biểu đồ traffic bị chặn trong 30 ngày](/img/migrated/image-1750406346658-4b9b1d1a.png)](/img/migrated/image-1750406346658-4b9b1d1a.png)

## Chi tiết các đợt tấn công đã chặn

[![Chi tiết đợt tấn công](/img/migrated/image-1750406362941-25b57adb.png)](/img/migrated/image-1750406362941-25b57adb.png)
