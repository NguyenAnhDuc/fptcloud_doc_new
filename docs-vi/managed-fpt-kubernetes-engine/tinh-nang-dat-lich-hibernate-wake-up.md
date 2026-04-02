---
id: "tinh-nang-dat-lich-hibernate-wake-up"
title: "Tính năng Đặt lịch Hibernate & Wake-up"
description: "Tiếp nối với tính năng Hibernate & Wake-up trực tiếp trên Portal, FPT Cloud cung cấp dịch vụ Đặt lịch Hibernate & Wake-u"
sidebar_label: "Tính năng Đặt lịch Hibernate & Wake-up"
sidebar_position: 24
---

# Tính năng đặt lịch Hibernate & Wake-up

Tiếp nối với tính năng Hibernate & Wake-up trực tiếp trên Portal, FPT Cloud cung cấp dịch vụ Đặt lịch Hibernate & Wake-up, giúp người dùng có thể Hibernate & Wake-up cụm một cách tự động.
FPTCloud cho phép người dùng có thể cài đặt, chỉnh sửa xoá một hoặc nhiều lịch cùng lúc tuỳ theo nhu cầu.
**Bước 1:** Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management** [![](/img/migrated/Picture13-1-0109824e.png)](/img/migrated/Picture13-1-0109824e.png)
**Bước 2:** Truy cập vào trang thông tin chi tiết của cụm và lựa chọn Schedule Hibernation trong mục Advanced để cài đặt lịch [![](/img/migrated/Picture14-1-2c3c6a86.png)](/img/migrated/Picture14-1-2c3c6a86.png)
**Bước 3:** Truy cập vào trang thông tin chi tiết của cụm và lựa chọn Schedule Hibernation trong mục Advanced để cài đặt lịch [![](/img/migrated/Picture15-1-f144a484.png)](/img/migrated/Picture15-1-f144a484.png)
**Bước 4:** Lựa chọn thời điểm để Wake-up cụm và Hibernate cụm (Timezone: UTC +7)
  * _Cách 1: Bấm vào icon lịch ở mỗi trường để cài đặt thời gian_ [![](/img/migrated/Picture16-1-47d859ec.png)](/img/migrated/Picture16-1-47d859ec.png)
  * _Cài đặt theo đồng hồ_ [![](/img/migrated/Picture17-1-2ecfd828.png)](/img/migrated/Picture17-1-2ecfd828.png)
  * _Cách 2: Nhập trực tiếp thời gian theo diện text_ [![](/img/migrated/Picture18-1-8c63c9fb.png)](/img/migrated/Picture18-1-8c63c9fb.png)

**Bước 5:** Thêm/ xóa lịch
  * _Thêm lịch_ [![](/img/migrated/Picture19-1-971ccfe9.png)](/img/migrated/Picture19-1-971ccfe9.png)
  * _Xóa lịch_ [![](/img/migrated/Picture20-1-22355561.png)](/img/migrated/Picture20-1-22355561.png)

**Bước 6:** Lưu lịch mới sau khi khởi tạo/ thay đổi [![](/img/migrated/Picture21-1-10c054b1.png)](/img/migrated/Picture21-1-10c054b1.png) Lúc này, hệ thống sẽ trả về trạng thái _Success_ nếu như lịch của người dùng đã được cập nhật vào hệ thống thành công. Bên cạnh đó, ở phần hiển thị sẽ hiện lên khoảng thời gian cho đến thời điểm Hibernate/ Wakeup gần nhất. [![](/img/migrated/Picture22-1-9ff6a66a.png)](/img/migrated/Picture22-1-9ff6a66a.png) _Chú ý:_ Người dùng có thể tạo hoặc xoá nhiều lịch cùng 1 lúc, với nhiều ngày, nhiều thời gian khác nhau. Tuy nhiên, chú ý các khoảng thời gian giữa thời điểm Hibernate và Wake-up cần cách nhau ít nhất 15 phút.
