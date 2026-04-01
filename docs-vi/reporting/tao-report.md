---
id: "tao-report"
title: "Tạo report"
description: "Để tạo report, bạn thực hiện theo hướng dẫn sau:"
sidebar_label: "Tạo report"
sidebar_position: 4
---

# Tạo report

Để tạo report, bạn thực hiện theo hướng dẫn sau: 
**Bước 1** : Click **Home** > **Apps** > **Reporting** > **Create a new report**
**Bước 2** : Chọn thông tin phần **Select Dashboard**
  * Chọn **Source dashboard** (required) 
  * Chọn **Time Range** (optional): Phạm vi thời gian mà report sẽ lấy dữ liệu. 

[![](/img/migrated/Picture1-57affdd6.png)](/img/migrated/Picture1-57affdd6.png)
**Note: Trong trường hợp người dùng muốn thêm dashboard, click nút “Add another dashboard”**
**Bước 3** : Click nút 
[![Alt text](/img/migrated/Picture2-c77f7b7d.png)](/img/migrated/Picture2-c77f7b7d.png)
**Bước 4** : Cung cấp thông tin phần **Format report**
  * **Report name** (required): Nhập tên report 
  * **Recipients** (required): Nhập email muốn gửi report tới 
  * **Message** (optional): Nhập nội dung report. 

**Note: Hai trường Oritentation và Layout sẽ có giá trị mặc định lần lượt là Portrait và Grid.**
**Bước 5** : Click nút 
[![Alt text](/img/migrated/Picture3-ebf2980f.png)](/img/migrated/Picture3-ebf2980f.png)
**Bước 6** : Chọn các thông tin: 
  * **Start Date** (required): Ngày bắt đầu gửi báo cáo 
  * **Time** (required): Thời gian gửi báo cáo 
  * **Time zone** : Theo mặc định, report sẽ sử dụng múi giờ (GMT+7:00) Vietnam. 
  * Checkbox **Send right after create report** : Giá trị mặc định là unchecked. Nếu checked thì báo cáo sẽ được gửi ngay sau khi tạo report. 

**Lưu ý: Nếu không chọn thiết lập nâng cao, hệ thống sẽ tự động gửi báo cáo hàng ngày (daily) theo lịch trình đã thiết lập.**
Tính năng đặt lịch báo cáo cho phép người dùng thiết lập lịch trình, tự động tạo và gửi báo cáo định kỳ. Thay vì phải tạo và gửi báo cáo thủ công mỗi lần cần thiết, tính năng đặt lịch báo cáo giúp tiết kiệm thời gian và năng lực người dùng. 
Hệ thống cho phép người dùng tuỳ chỉnh thời gian và tần suất của báo cáo theo giờ, ngày, tuần, tháng. Sau khi thiết lập lịch, phần mềm tự động tạo và gửi báo cáo theo lịch trình đã cài đặt giúp người dùng duy trì theo dõi tiến độ công việc và thông tin quan trọng một cách tự động và định kỳ. 
Để thực hiện chức năng nâng cao, người dùng click vào nút **Advanced** và điền các trường thông tin: 
  * **Refresh Frequency** : Tần suất gửi báo cáo, có các tùy chọn: Once, Hourly, Daily, Weekly, Monthly 
  * **End date** : Thời gian kết thúc gửi báo cáo 
  * **Repeating Cycle** : Vòng lặp gửi báo cáo 
  * **Repeat every days** : Tần suất diễn ra việc gửi báo cáo cách nhau bao nhiêu ngày 
  * **Checkbox Send right after create report** : Giá trị mặc định là unchecked. Nếu checked thì hệ thống tự động gửi 1 report ngay khi tạo xong (không theo lịch trình đã set up).

**Trường hợp 1: Gửi báo cáo Daily**
[![Alt text](/img/migrated/Picture4-39f2fc3e.png)](/img/migrated/Picture4-39f2fc3e.png)
Cách thiết lập: 
1, Chọn **Refresh Frequency** là **Daily**
2, Nhập **End date**
3, **Repeating Cycle**
Nếu tick chọn **Send from Monday to Friday** : Báo cáo sẽ được gửi hàng ngày từ thứ 2 đến thứ 6 
Nếu tick chọn **Repeat every … days** : Giả sử nhập Repeat every 2 days, có nghĩa là sau 2 ngày báo cáo sẽ được gửi một lần. 
**Trường hợp 2: Gửi báo cáo Weekly**
[![Alt text](/img/migrated/Picture5-9bf78bbf.png)](/img/migrated/Picture5-9bf78bbf.png)
Cách thiết lập: 
1, Chọn **Refresh Frequency** là **Weekly**
2, Nhập **End date**
3, **Repeating Cycle**
Giả sử tick check box Friday: Báo cáo sẽ được gửi vào thứ 6 hàng tuần. 
Người dùng có thể chọn nhiều checkbox 1 lúc. 
Nếu nhập Repeat every … weeks: Giả sử nhập Repeat every 1 weeks, có nghĩa là báo cáo được gửi một tuần một lần. 
**Trường hợp 3: Gửi báo cáo Monthly**
[![Alt text](/img/migrated/Picture6-17a6da4e.png)](/img/migrated/Picture6-17a6da4e.png)
Cách thiết lập: 
1, Chọn **Refresh Frequency** là **Monthly**
2, Nhập **End date**
3, **Repeating Cycle**
Nếu chọn **On the first … of month** : Giả sử chọn **On the first Friday of month** , có nghĩa là báo cáo sẽ được gửi vào thứ 6 đầu tiên của tháng. 
Nếu chọn **On the first day of month** : Báo cáo sẽ được gửi vào ngày đầu tiên của tháng. 
Nếu chọn **On the last day of month** : Báo cáo sẽ được gửi vào ngày cuối cùng của tháng. 
**Repeat every … months** : Giả sử nhập **Repeat every 1 months** , có nghĩa là báo cáo được gửi 1 tháng 1 lần. 
**Trường hợp 4: Gửi báo cáo Hourly**
[![Alt text](/img/migrated/Picture7-fd778276.png)](/img/migrated/Picture7-fd778276.png)
Cách thiết lập: 
1, Chọn **Refresh Frequency** là **Hourly**
2, Nhập **End date**
3, **Repeating Cycle**
**Repeat every ... hours** , giả sử nhập **Repeat every 2 hours** , có nghĩa là cứ sau 2h báo cáo sẽ được gửi một lần. 
**Trường hợp 5: Gửi báo cáo Once**
[![Alt text](/img/migrated/Picture8-8624f278.png)](/img/migrated/Picture8-8624f278.png)
Trong trường hợp này báo cáo sẽ được gửi **chỉ 1 lần duy nhất** theo thời gian đã thiết lập. Sau khi gửi mail trạng thái lịch trình chuyển thành **Expired**
**Bước 7** : Click nút 
Hiển thị màn hình **Confirm** bao gồm các thông tin phần Select Dashboard, Format Report, Schedule cho người dùng kiểm tra lại.
[![Alt text](/img/migrated/Picture9-58d335a3.png)](/img/migrated/Picture9-58d335a3.png)
**Bước 8** : Chọn **Create** để tạo báo cáo