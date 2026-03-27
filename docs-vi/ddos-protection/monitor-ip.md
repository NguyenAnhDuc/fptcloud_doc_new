---
id: "monitor-ip"
title: "Monitor các IP đang được bảo vệ"
description: "Người dùng có thể monitor hệ thống và sự bảo vệ thông qua dashboard do FPT Cloud Portal cung cấp."
sidebar_label: "Monitor các IP đang được bảo vệ"
sidebar_position: 4
---

# Monitor Ip

Người dùng có thể monitor hệ thống và sự bảo vệ thông qua dashboard do FPT Cloud Portal cung cấp.
**Bước 1** : Người dùng vào màn hình danh sách IP đang được bảo vệ và chọn IP cần kiểm tra
[![file](/img/migrated/image-1750405781163-2bd000bd.png)](/img/migrated/image-1750405781163-2bd000bd.png)
**Bước 2a** : Với IP đang được bảo vệ và không có bị tấn công trong tháng, hệ thống sẽ hiện thị màn hình thông báo IP đang được bảo vệ an toàn và chưa ghi nhận sự tấn công.
[![file](/img/migrated/image-1750405795153-92b66506.png)](/img/migrated/image-1750405795153-92b66506.png)
**Bước 2b** : Với trường hợp có ghi nhận đợt tấn công. Hệ thống sẽ thông tin các đợt tấn công gồm:
Thông tin nhanh sự bảo vệ trong tháng:
  * Total traffic: Tổng traffic vào IP trong tháng.
  * Block traffic: Tổng traffic tấn công bị phát hiện và ngăn chặn
  * Block packet: Tổng packet tấn công bị phát hiện và ngăn chặn

[![file](/img/migrated/image-1750405809600-ee4429cf.png)](/img/migrated/image-1750405809600-ee4429cf.png)
Thông tin nguồn tấn công: Hệ thống liệt kê các nguồn tấn công chủ yếu
[![file](/img/migrated/image-1750405829915-04f543c3.png)](/img/migrated/image-1750405829915-04f543c3.png)
Thông tin các protocol bị tấn công: Hệ thống hiện tại đang hiển thị protocol theo ID, tham khảo thêm tại [**Link**](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)
  * 6: TCP
  * 17: UDP

[![file](/img/migrated/image-1750405849332-5868a949.png)](/img/migrated/image-1750405849332-5868a949.png)
Thông tin độ dài các packet (Đơn vị: byte)
[![file](/img/migrated/image-1750406210587-aaacb4ed.png)](/img/migrated/image-1750406210587-aaacb4ed.png)
Thông tin port của nguồn tấn công
[![file](/img/migrated/image-1750406239763-3e4ba6d1.png)](/img/migrated/image-1750406239763-3e4ba6d1.png)
Thông tin port bị tấn công của người dùng
[![file](/img/migrated/image-1750406261280-18e0987a.png)](/img/migrated/image-1750406261280-18e0987a.png)
Biểu đồ phân tích traffic tấn công bị chặn trong 30 ngày
[![file](/img/migrated/image-1750406346658-4b9b1d1a.png)](/img/migrated/image-1750406346658-4b9b1d1a.png)
Thông tin chi tiết các đợt tấn công đã chặn được
[![file](/img/migrated/image-1750406362941-25b57adb.png)](/img/migrated/image-1750406362941-25b57adb.png)