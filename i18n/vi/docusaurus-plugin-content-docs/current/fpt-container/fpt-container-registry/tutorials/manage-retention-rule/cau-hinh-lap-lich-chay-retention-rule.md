---
id: "cau-hinh-lap-lich-chay-retention-rule"
title: "Cấu hình lịch chạy retention rule"
description: "Lên lịch tự động chạy retention rule theo chu kỳ."
sidebar_label: "Cấu hình lịch chạy retention rule"
sidebar_position: 4
---

# Cấu hình lịch chạy retention rule

Thay vì chạy retention rule thủ công, bạn có thể lên lịch để hệ thống tự động thực thi theo chu kỳ, đảm bảo dung lượng lưu trữ luôn được tối ưu.

1. Trên menu **FPT Portal**, chọn **Container Registry** > **Policy** > **Schedule** > **Edit**.

   [![Nút Edit Schedule](/img/migrated/Picture43-1-fe4aeec3.png)](/img/migrated/Picture43-1-fe4aeec3.png)

2. Chọn tần suất chạy retention rule.

   [![Tùy chọn tần suất chạy](/img/migrated/Picture44-1-1535ba88.png)](/img/migrated/Picture44-1-1535ba88.png)

   | Tùy chọn | Mô tả |
   |---|---|
   | None | Không lên lịch, chạy thủ công từ Portal |
   | Hourly | Chạy mỗi giờ một lần |
   | Daily | Chạy mỗi ngày lúc 7:00 AM |
   | Weekly | Chạy mỗi tuần một lần |
   | Custom | Nhập cron expression tùy chỉnh |

   :::warning
   Nếu bạn định nghĩa nhiều quy tắc, lịch trình áp dụng cho tất cả quy tắc. Không thể lên lịch khác nhau cho từng quy tắc riêng lẻ.
   :::

   Ví dụ cấu hình Custom schedule:

   [![Ví dụ cấu hình Custom schedule](/img/migrated/Picture45-1-20717af0.png)](/img/migrated/Picture45-1-20717af0.png)

3. Chọn **Save** > **OK** để lưu lịch.

   [![Xác nhận lưu lịch](/img/migrated/Picture46-1-c68ab5ea.png)](/img/migrated/Picture46-1-c68ab5ea.png)

4. Kiểm tra kết quả sau khi cấu hình lịch.

   [![Kết quả cấu hình lịch chạy](/img/migrated/Picture47-1-373e4e1a.png)](/img/migrated/Picture47-1-373e4e1a.png)
