---
id: "scale-tu-dong-theo-lich-trinh"
title: "Scale tự động theo lịch trình"
description: "Hướng dẫn tạo và xóa Autoscale Schedule để tự động scale group theo lịch trình trên FPT Autoscale."
sidebar_label: "Scale tự động theo lịch trình"
sidebar_position: 6
---

# Scale tự động theo lịch trình

## Tạo Autoscale Schedule

1. Truy cập trang **Autoscaling > Autoscale Group**. Nhấn vào tên group cần lập lịch.

   [![Danh sách group, nhấn vào tên group](/img/migrated/Screenshot-2024-10-02-042416-72202578.png)](/img/migrated/Screenshot-2024-10-02-042416-72202578.png)

2. Chuyển đến tab **Schedule**, chọn **Create schedule**.

   [![Nút Create schedule trong tab Schedule](/img/migrated/Screenshot-2024-10-02-042548-98d1b215.png)](/img/migrated/Screenshot-2024-10-02-042548-98d1b215.png)

3. Một hộp thoại xuất hiện. Cấu hình các thông tin sau.

   - **Schedule name**: Nhập tên schedule. Tên phải có 6 đến 20 ký tự, chỉ chứa ký tự chữ cái latin, số và dấu gạch dưới.
   - **Frequency**: Tần suất thực hiện resize group.
   - **Desired capacity**: Số node mong muốn của group tại thời điểm lịch được thực thi.
   - **Min size** và **Max size**: Giới hạn dưới và giới hạn trên của group.

   ### Trường hợp 1: Daily

   [![Cấu hình lịch Daily](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

   - **From time**: Thời điểm trong ngày thực hiện resize theo thông số lịch.
   - **To time**: Thời điểm trong ngày kết thúc chu kỳ và resize về thông số ban đầu.
   - **Start date**: Ngày lịch bắt đầu có hiệu lực.
   - **End date**: Ngày lịch hết hiệu lực.

   :::note
   - Nếu Start date là ngày hiện tại, From time phải lớn hơn thời điểm hiện tại.
   - To time phải lớn hơn From time ít nhất 30 phút.
   :::

   ### Trường hợp 2: Weekly

   [![Cấu hình lịch Weekly](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

   Tương tự như **Daily**. Ngoài ra có thêm:

   - **From weekday**: Ngày trong tuần thực hiện resize theo thông số lịch.
   - **To weekday**: Ngày trong tuần kết thúc chu kỳ và resize về thông số ban đầu.

   ### Trường hợp 3: Monthly

   [![Cấu hình lịch Monthly](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

   Tương tự như **Daily**. Ngoài ra có thêm:

   - **From date**: Ngày trong tháng thực hiện resize theo thông số lịch.
   - **To date**: Ngày trong tháng kết thúc chu kỳ và resize về thông số ban đầu.

   :::note
   - Ngày 31 chỉ xảy ra ở một số tháng.
   - Tháng 2 chỉ có 28 hoặc 29 ngày.
   :::

4. Chọn **Create**.

   Hệ thống kiểm tra thông tin và tạo lịch cho Autoscale Group.

   [![Danh sách schedule sau khi tạo](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

   Danh sách schedule hiển thị các thông tin:

   - **Name**: Tên lịch trình.
   - **Size**: Thông số resize group khi lịch được thực thi.
   - **Frequency**: Tần suất thực thi của lịch.
   - **Start time**: Thời gian lịch bắt đầu có hiệu lực.
   - **Stop time**: Thời gian lịch hết hiệu lực.
   - **First execution**: Thời điểm lịch được thực thi lần đầu.
   - **Next execution**: Thời điểm lịch được thực thi lần tiếp theo.
   - **Remaining executions**: Số lần thực thi còn lại.

## Xóa Autoscale Schedule

1. Truy cập trang **Autoscaling > Autoscale Group**. Nhấn vào tên group cần xóa lịch.

   [![Danh sách group, nhấn vào tên group](/img/migrated/Screenshot-2024-10-02-042416-72202578.png)](/img/migrated/Screenshot-2024-10-02-042416-72202578.png)

2. Chuyển đến tab **Schedule**. Trên dòng chứa lịch trình cần xóa, nhấn vào biểu tượng **Action menu**.

   [![Menu hành động của schedule](/img/migrated/Screenshot-2024-10-02-043704-64359511.png)](/img/migrated/Screenshot-2024-10-02-043704-64359511.png)

3. Trong menu, chọn **Delete**.

   [![Tùy chọn Delete trong menu](/img/migrated/Screenshot-2024-10-02-043812-ac1fa26e.png)](/img/migrated/Screenshot-2024-10-02-043812-ac1fa26e.png)

4. Một hộp thoại xuất hiện. Nếu tên lịch chính xác, chọn **Delete** để xác nhận.

   [![Hộp thoại xác nhận xóa schedule](/img/migrated/Screenshot-2024-10-02-044127-0919459f.png)](/img/migrated/Screenshot-2024-10-02-044127-0919459f.png)

:::warning
Không đặt các lịch trùng thời điểm bắt đầu và kết thúc thực thi trong cùng một group để tránh xung đột không mong muốn.
:::
