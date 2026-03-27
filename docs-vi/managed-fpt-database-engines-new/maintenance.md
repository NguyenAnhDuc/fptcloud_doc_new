---
id: "maintenance"
title: "Bảo trì dịch vụ"
description: "**Bảo trì định kỳ** là một phần **bắt buộc** của dịch vụ FPT Database Engine, nhằm duy trì trạng thái hoạt động lành mạn"
sidebar_label: "Bảo trì dịch vụ"
sidebar_position: 8
---

# Maintenance

**Bảo trì định kỳ** là một phần **bắt buộc** của dịch vụ FPT Database Engine, nhằm duy trì trạng thái hoạt động lành mạnh cho cơ sở dữ liệu. Đây là thành phần cốt lõi của dịch vụ quản lý và **không phải là tính năng tùy chọn**.
Thông qua bảo trì định kỳ, hệ thống đảm bảo:
  * Áp dụng các bản vá bảo mật cần thiết.
  * Cập nhật và tối ưu hệ thống.
  * Duy trì độ ổn định và khả năng vận hành lâu dài.

**Lưu ý quan trọng:**
Trong thời gian bảo trì, **không thực hiện bất kỳ thao tác nào trên máy chủ** , bao gồm nhưng không giới hạn:
  * Thay đổi cấu hình.
  * Sửa đổi hệ thống.
  * Khởi động hoặc dừng dịch vụ.

Việc thực hiện các thao tác này trong quá trình bảo trì có thể gây ảnh hưởng đến hiệu suất, tính ổn định hoặc dẫn đến lỗi ngoài dự kiến. Người dùng chỉ nên thao tác lại sau khi quá trình bảo trì hoàn tất.
#### Khung giờ bảo trì (Maintenance Window):
Maintenance Window cho phép người dùng cấu hình khung thời gian ưu tiên trong tuần để hệ thống thực hiện bảo trì định kỳ tại thời điểm ít ảnh hưởng nhất đến hoạt động của dịch vụ.
  * Thời lượng mỗi Maintenance Window: **1 giờ**
  * Người dùng có thể chỉ định ngày trong tuần và giờ bắt đầu bảo trì trong ngày.

Nếu không cấu hình, hệ thống sẽ **tự động đặt khung giờ bảo trì mặc định** bắt đầu **từ 23:00 thứ Bảy hàng tuần**.
Người dùng có thể chỉnh sửa Maintenance Window nếu database cluster chưa có lịch bảo trì được lên lịch. Lưu ý rằng Maintenance Window giúp tối ưu thời điểm bảo trì, nhưng không đảm bảo hoàn toàn không có gián đoạn dịch vụ. Nên thiết lập Maintenance Window vào thời điểm hệ thống có khối lượng công việc thấp để giảm thiểu ảnh hưởng đến dịch vụ.
#### Thông báo bảo trì:
Hệ thống gửi thông báo qua email để giúp người dùng chủ động theo dõi lịch bảo trì, bao gồm:
  * **Thông báo trước 7 ngày** so với thời điểm bảo trì dự kiến.
  * **Thông báo nhắc lại trước 1 ngày** khi quá trình bảo trì bắt đầu.

Thông báo được gửi tới danh sách email đã cấu hình trong phần Notification của dịch vụ.
#### Ảnh hưởng và giới hạn trong thời gian bảo trì:
Trong quá trình bảo trì, dịch vụ có thể gặp một số ảnh hưởng tạm thời, bao gồm:
  * Ngắt kết nối trong thời gian ngắn.
  * Hiệu năng suy giảm.
  * Một số chức năng bị hạn chế.

Các ảnh hưởng này sẽ được giảm thiểu tối đa và kết thúc khi quá trình bảo trì hoàn tất.
#### Kiểm soát và theo dõi bảo trì:
FPT Database Engine cung cấp các cơ chế để người dùng chủ động quản lý bảo trì, bao gồm:
  * Cấu hình Maintenance Window khi tạo database cluster.
  * Chỉnh sửa Maintenance Window sau khi cluster đã được triển khai.
  * Theo dõi các Pending Maintenance Events (sự kiện bảo trì sắp diễn ra).

Hướng dẫn chi tiết xem tại mục [Maintenance Window](../managed-fpt-database-engines-new/index.md).
#### Bảo trì khẩn cấp:
Trong một số trường hợp đặc biệt, chẳng hạn như vá lỗi bảo mật nghiêm trọng hoặc cập nhật quan trọng, hệ thống có thể tiến hành bảo trì khẩn cấp ngoài Maintenance Window để đảm bảo an toàn dữ liệu và vận hành ổn định.