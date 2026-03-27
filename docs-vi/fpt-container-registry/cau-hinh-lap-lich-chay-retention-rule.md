---
id: "cau-hinh-lap-lich-chay-retention-rule"
title: "Cấu hình lập lịch chạy Retention Rule"
description: "FPT Cloud cho phép người dùng cấu hình để lập lịch chạy các quy tắc đối với repository. Người dùng có thể thực hiện như "
sidebar_label: "Cấu hình lập lịch chạy Retention Rule"
sidebar_position: 16
---

# Cau Hinh Lap Lich Chay Retention Rule

FPT Cloud cho phép người dùng cấu hình để lập lịch chạy các quy tắc đối với repository. Người dùng có thể thực hiện như sau: 
**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > **Schedule** > **Edit**
[![](/img/migrated/Picture43-1-fe4aeec3.png)](/img/migrated/Picture43-1-fe4aeec3.png)
**Bước 2** : Chọn tần suất chạy Tag Retention Rule: 
[![](/img/migrated/Picture44-1-1535ba88.png)](/img/migrated/Picture44-1-1535ba88.png)
Người dùng có các lựa chọn sau: 
  * None: Không lập lịch chạy các quy tắc, người dùng vào FPT Container Registry để RUN retentions 
  * Hourly: Chạy mỗi giờ một lần 
  * Daily: Chạy mỗi ngày 1 lần vào lúc 7h00 a.m 
  * Weekly: Chạy mỗi tuần 1 lần 
  * Custom: Nhập cron job command để lên lịch chạy quy tắc 

**LƯU Ý** : _Nếu bạn xác định nhiều quy tắc, lịch trình sẽ được áp dụng cho tất cả các quy tắc. Bạn không thể lên lịch các quy tắc khác nhau để chạy vào các thời điểm khác nhau._
**Ví dụ** : Cấu hình Schedule Custom như sau: 
[![](/img/migrated/Picture45-1-20717af0.png)](/img/migrated/Picture45-1-20717af0.png)
**Bước 3** : Nhấn **Save** > **OK** để lưu lại quy tắc 
[![](/img/migrated/Picture46-1-c68ab5ea.png)](/img/migrated/Picture46-1-c68ab5ea.png)
**Bước 4** : Kết quả sau khi cấu hình lập lịch: 
[![](/img/migrated/Picture47-1-373e4e1a.png)](/img/migrated/Picture47-1-373e4e1a.png)