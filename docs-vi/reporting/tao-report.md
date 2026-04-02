---
id: "tao-report"
title: "Tạo report"
description: "Hướng dẫn từng bước tạo report trong FPT Cloud Reporting."
sidebar_label: "Tạo report"
sidebar_position: 4
---

# Tạo report

Để tạo report, bạn thực hiện theo hướng dẫn sau:

1. Vào **Home > Apps > Reporting > Create a new report**.

2. Chọn thông tin phần **Select Dashboard**:
   - Chọn **Source dashboard** (bắt buộc).
   - Chọn **Time Range** (tùy chọn): Phạm vi thời gian mà report sẽ lấy dữ liệu.

   [![Màn hình chọn dashboard cho report](/img/migrated/Picture1-57affdd6.png)](/img/migrated/Picture1-57affdd6.png)

   :::note
   Để thêm dashboard, click nút **Add another dashboard**.
   :::

3. Click nút tiếp theo.

   [![Nút tiếp theo](/img/migrated/Picture2-c77f7b7d.png)](/img/migrated/Picture2-c77f7b7d.png)

4. Cung cấp thông tin phần **Format report**:
   - **Report name** (bắt buộc): Nhập tên report.
   - **Recipients** (bắt buộc): Nhập email muốn gửi report tới.
   - **Message** (tùy chọn): Nhập nội dung report.

   :::note
   Hai trường **Orientation** và **Layout** có giá trị mặc định lần lượt là **Portrait** và **Grid**.
   :::

5. Click nút tiếp theo.

   [![Nút tiếp theo](/img/migrated/Picture3-ebf2980f.png)](/img/migrated/Picture3-ebf2980f.png)

6. Chọn thông tin phần **Schedule**:
   - **Start Date** (bắt buộc): Ngày bắt đầu gửi báo cáo.
   - **Time** (bắt buộc): Thời gian gửi báo cáo.
   - **Time zone**: Mặc định là múi giờ (GMT+7:00) Vietnam.
   - Checkbox **Send right after create report**: Mặc định là unchecked. Nếu checked, báo cáo sẽ được gửi ngay sau khi tạo.

   :::note
   Nếu không chọn thiết lập nâng cao, hệ thống sẽ tự động gửi báo cáo hàng ngày (daily) theo lịch trình đã thiết lập.
   :::

   Tính năng đặt lịch báo cáo cho phép bạn thiết lập lịch trình để hệ thống tự động tạo và gửi báo cáo định kỳ. Bạn có thể tùy chỉnh tần suất theo giờ, ngày, tuần hoặc tháng.

   Để sử dụng chức năng nâng cao, click vào nút **Advanced** và điền các trường thông tin:
   - **Refresh Frequency**: Tần suất gửi báo cáo — Once, Hourly, Daily, Weekly, Monthly.
   - **End date**: Thời gian kết thúc gửi báo cáo.
   - **Repeating Cycle**: Vòng lặp gửi báo cáo.
   - **Repeat every … days**: Tần suất gửi cách nhau bao nhiêu ngày.
   - Checkbox **Send right after create report**: Nếu checked, hệ thống tự động gửi 1 report ngay khi tạo xong (không theo lịch trình đã thiết lập).

   **Trường hợp 1: Gửi báo cáo Daily**

   [![Cấu hình lịch báo cáo hàng ngày](/img/migrated/Picture4-39f2fc3e.png)](/img/migrated/Picture4-39f2fc3e.png)

   Cách thiết lập:
   1. Chọn **Refresh Frequency** là **Daily**.
   2. Nhập **End date**.
   3. Thiết lập **Repeating Cycle**:
      - Tick **Send from Monday to Friday**: Báo cáo gửi hàng ngày từ thứ 2 đến thứ 6.
      - Tick **Repeat every … days**: Ví dụ nhập 2, báo cáo sẽ gửi mỗi 2 ngày một lần.

   **Trường hợp 2: Gửi báo cáo Weekly**

   [![Cấu hình lịch báo cáo hàng tuần](/img/migrated/Picture5-9bf78bbf.png)](/img/migrated/Picture5-9bf78bbf.png)

   Cách thiết lập:
   1. Chọn **Refresh Frequency** là **Weekly**.
   2. Nhập **End date**.
   3. Thiết lập **Repeating Cycle**: Chọn một hoặc nhiều ngày trong tuần (ví dụ: Friday — gửi vào thứ 6 hàng tuần). Nhập **Repeat every … weeks** (ví dụ: 1 — gửi một tuần một lần).

   **Trường hợp 3: Gửi báo cáo Monthly**

   [![Cấu hình lịch báo cáo hàng tháng](/img/migrated/Picture6-17a6da4e.png)](/img/migrated/Picture6-17a6da4e.png)

   Cách thiết lập:
   1. Chọn **Refresh Frequency** là **Monthly**.
   2. Nhập **End date**.
   3. Thiết lập **Repeating Cycle**:
      - **On the first … of month**: Ví dụ chọn thứ 6 đầu tiên của tháng.
      - **On the first day of month**: Gửi vào ngày đầu tiên của tháng.
      - **On the last day of month**: Gửi vào ngày cuối cùng của tháng.
      - **Repeat every … months**: Ví dụ 1 — gửi một tháng một lần.

   **Trường hợp 4: Gửi báo cáo Hourly**

   [![Cấu hình lịch báo cáo theo giờ](/img/migrated/Picture7-fd778276.png)](/img/migrated/Picture7-fd778276.png)

   Cách thiết lập:
   1. Chọn **Refresh Frequency** là **Hourly**.
   2. Nhập **End date**.
   3. **Repeat every … hours**: Ví dụ nhập 2 — cứ sau 2 giờ báo cáo sẽ được gửi một lần.

   **Trường hợp 5: Gửi báo cáo Once**

   [![Cấu hình gửi báo cáo một lần](/img/migrated/Picture8-8624f278.png)](/img/migrated/Picture8-8624f278.png)

   Báo cáo sẽ được gửi **chỉ 1 lần duy nhất** theo thời gian đã thiết lập. Sau khi gửi, trạng thái lịch trình chuyển thành **Expired**.

7. Click nút tiếp theo. Màn hình **Confirm** hiển thị thông tin phần Select Dashboard, Format Report, Schedule để bạn kiểm tra lại.

   [![Màn hình xác nhận](/img/migrated/Picture9-58d335a3.png)](/img/migrated/Picture9-58d335a3.png)

8. Chọn **Create** để tạo báo cáo.
