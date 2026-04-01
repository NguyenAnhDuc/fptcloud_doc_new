---
id: "monitor-ip"
title: "Monitor các IP đang được bảo vệ"
sidebar_label: "Monitor các IP đang được bảo vệ"
sidebar_position: "4"
---

# Monitor the IP is is bảo vệ

Người dùng can monitor hệ thống and sự bảo vệ thông qua dashboard do FPT Cloud Portal cung cấp.
**Step 1** : Người dùng ando màn hình danh sách IP is is bảo vệ and chọn IP cần kiểm tra
[![file](/img/migrated/image-1750405781163-2bd000bd.png)](/img/migrated/image-1750405781163-2bd000bd.png)
**Step 2a** : Với IP is is bảo vệ and không có bị tấn công in tháng, hệ thống will hiện thị màn hình notification IP is is bảo vệ an toàn and chưa ghi nhận sự tấn công.
[![file](/img/migrated/image-1750405795153-92b66506.png)](/img/migrated/image-1750405795153-92b66506.png)
**Step 2b** : Với trường hợp có ghi nhận đợt tấn công. System will thông tin the đợt tấn công gồm:
Information nhanh sự bảo vệ in tháng:
  * Total traffic: Tổng traffic ando IP in tháng.
  * Block traffic: Tổng traffic tấn công bị phát hiện and ngăn chặn
  * Block packet: Tổng packet tấn công bị phát hiện and ngăn chặn

[![file](/img/migrated/image-1750405809600-ee4429cf.png)](/img/migrated/image-1750405809600-ee4429cf.png)
Information nguồn tấn công: System liệt kê the nguồn tấn công chủ yếu
[![file](/img/migrated/image-1750405829915-04f543c3.png)](/img/migrated/image-1750405829915-04f543c3.png)
Information the protocol bị tấn công: System hiện tại is displayed protocol theo ID, tham khảo thêm tại [**Link**](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)
  * 6: TCP
  * 17: UDP

[![file](/img/migrated/image-1750405849332-5868a949.png)](/img/migrated/image-1750405849332-5868a949.png)
Information độ dài the packet (Đơn vị: byte)
[![file](/img/migrated/image-1750406210587-aaacb4ed.png)](/img/migrated/image-1750406210587-aaacb4ed.png)
Information port of nguồn tấn công
[![file](/img/migrated/image-1750406239763-3e4ba6d1.png)](/img/migrated/image-1750406239763-3e4ba6d1.png)
Information port bị tấn công of user
[![file](/img/migrated/image-1750406261280-18e0987a.png)](/img/migrated/image-1750406261280-18e0987a.png)
Biểu đồ phân tích traffic tấn công bị chặn in 30 ngày
[![file](/img/migrated/image-1750406346658-4b9b1d1a.png)](/img/migrated/image-1750406346658-4b9b1d1a.png)
Information chi tiết the đợt tấn công has been chặn is
[![file](/img/migrated/image-1750406362941-25b57adb.png)](/img/migrated/image-1750406362941-25b57adb.png)
