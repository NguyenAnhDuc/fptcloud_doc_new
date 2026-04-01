---
id: "monitor-ip"
title: "Monitor các IP đang được bảo vệ"
sidebar_label: "Monitor các IP đang được bảo vệ"
sidebar_position: "4"
---

# Monitor the IP is is bảo vệ

Người dùng can monitor system and sự bảo vệ thông qua dashboard do FPT Cloud Portal cung cấp.
**Step 1:** Người dùng ando màn hình list IP is is bảo vệ and select IP need to kiểm tra
[![file](/img/migrated/image-1750405781163-2bd000bd.png)](/img/migrated/image-1750405781163-2bd000bd.png)
**Bước 2a** : Với IP is is bảo vệ and không có bị tấn công in tháng, system will hiện thị màn hình notification IP is is bảo vệ an toàn and chưa ghi nhận sự tấn công.
[![file](/img/migrated/image-1750405795153-92b66506.png)](/img/migrated/image-1750405795153-92b66506.png)
**Bước 2b** : Với trường hợp có ghi nhận đợt tấn công. Hệ thống will information the đợt tấn công gồm:
Thông tin nhanh sự bảo vệ in tháng:
  * Total traffic: Tổng traffic ando IP in tháng.
  * Block traffic: Tổng traffic tấn công bị phát hiện and ngăn chặn
  * Block packet: Tổng packet tấn công bị phát hiện and ngăn chặn

[![file](/img/migrated/image-1750405809600-ee4429cf.png)](/img/migrated/image-1750405809600-ee4429cf.png)
Thông tin nguồn tấn công: Hệ thống liệt kê the nguồn tấn công chủ yếu
[![file](/img/migrated/image-1750405829915-04f543c3.png)](/img/migrated/image-1750405829915-04f543c3.png)
Thông tin the protocol bị tấn công: Hệ thống hiện tại is displayed protocol theo ID, tham khảo thêm tại [**Link**](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)
  * 6: TCP
  * 17: UDP

[![file](/img/migrated/image-1750405849332-5868a949.png)](/img/migrated/image-1750405849332-5868a949.png)
Thông tin độ dài the packet (Đơn vị: byte)
[![file](/img/migrated/image-1750406210587-aaacb4ed.png)](/img/migrated/image-1750406210587-aaacb4ed.png)
Thông tin port of nguồn tấn công
[![file](/img/migrated/image-1750406239763-3e4ba6d1.png)](/img/migrated/image-1750406239763-3e4ba6d1.png)
Thông tin port bị tấn công of user
[![file](/img/migrated/image-1750406261280-18e0987a.png)](/img/migrated/image-1750406261280-18e0987a.png)
Biểu đồ phân tích traffic tấn công bị chặn in 30 ngày
[![file](/img/migrated/image-1750406346658-4b9b1d1a.png)](/img/migrated/image-1750406346658-4b9b1d1a.png)
Thông tin details the đợt tấn công has been chặn is
[![file](/img/migrated/image-1750406362941-25b57adb.png)](/img/migrated/image-1750406362941-25b57adb.png)
