---
id: "tao-report"
title: "Tạo report"
sidebar_label: "Tạo report"
sidebar_position: "4"
---

# Create report

Để tạo report, you thực hiện theo hướng dẫn sau: 
**Step 1** : Click **Home** > **Apps** > **Reporting** > **Create a new report**
**Step 2** : Chọn thông tin phần **Select Dashboard**
  * Select **Source dashboard** (required) 
  * Select **Time Range** (optional): Phạm vi thời gian mà report will lấy dữ liệu. 

[![](/img/migrated/Picture1-57affdd6.png)](/img/migrated/Picture1-57affdd6.png)
**Note: Trong trường hợp user muốn thêm dashboard, click nút “Add another dashboard”**
**Step 3** : Click nút 
[![Alt text](/img/migrated/Picture2-c77f7b7d.png)](/img/migrated/Picture2-c77f7b7d.png)
**Step 4** : Cung cấp thông tin phần **Format report**
  * **Report name** (required): Enter tên report 
  * **Recipients** (required): Enter email muốn gửi report tới 
  * **Message** (optional): Enter nội dung report. 

**Note: Hai trường Oritentation and Layout will có giá trị mặc định lần lượt là Portrait and Grid.**
**Step 5** : Click nút 
[![Alt text](/img/migrated/Picture3-ebf2980f.png)](/img/migrated/Picture3-ebf2980f.png)
**Step 6** : Chọn the thông tin: 
  * **Start Date** (required): Ngày bắt đầu gửi report 
  * **Time** (required): Thời gian gửi report 
  * **Time zone** : Theo mặc định, report will sử dụng múi giờ (GMT+7:00) Vietnam. 
  * Checkbox **Send right after create report** : Giá trị mặc định là unchecked. Nếu checked thì report will is gửi ngay after tạo report. 

**Note: Nếu không chọn thiết lập nâng cao, hệ thống will tự động gửi report hàng ngày (daily) theo lịch trình has been thiết lập.**
Tính năng đặt lịch report for phép user thiết lập lịch trình, tự động tạo and gửi report định kỳ. Thay vì phải tạo and gửi report thủ công mỗi lần cần thiết, feature đặt lịch report giúp tiết kiệm thời gian and năng lực user. 
System for phép user tuỳ chỉnh thời gian and tần suất of report theo giờ, ngày, tuần, tháng. Sau when thiết lập lịch, phần mềm tự động tạo and gửi report theo lịch trình has been cài đặt giúp user duy trì theo dõi tiến độ công việc and thông tin quan trọng a theh tự động and định kỳ. 
Để thực hiện chức năng nâng cao, user click ando nút **Advanced** and điền the trường thông tin: 
  * **Refresh Frequency** : Tần suất gửi report, có the tùy chọn: Once, Hourly, Daily, Weekly, Monthly 
  * **End date** : Thời gian kết thúc gửi report 
  * **Repeating Cycle** : Vòng lặp gửi report 
  * **Repeat every days** : Tần suất diễn ra việc gửi report theh nhau bao nhiêu ngày 
  * **Checkbox Send right after create report** : Giá trị mặc định là unchecked. Nếu checked thì hệ thống tự động gửi 1 report ngay when tạo xong (không theo lịch trình has been set up).

**Trường hợp 1: Gửi report Daily**
[![Alt text](/img/migrated/Picture4-39f2fc3e.png)](/img/migrated/Picture4-39f2fc3e.png)
Cách thiết lập: 
1, Select **Refresh Frequency** là **Daily**
2, Enter **End date**
3, **Repeating Cycle**
Nếu tick chọn **Send from Monday to Friday** : Báo cáo will is gửi hàng ngày from thứ 2 to thứ 6 
Nếu tick chọn **Repeat every … days** : Giả sử nhập Repeat every 2 days, có nghĩa là sau 2 ngày report will is gửi a lần. 
**Trường hợp 2: Gửi report Weekly**
[![Alt text](/img/migrated/Picture5-9bf78bbf.png)](/img/migrated/Picture5-9bf78bbf.png)
Cách thiết lập: 
1, Select **Refresh Frequency** là **Weekly**
2, Enter **End date**
3, **Repeating Cycle**
Giả sử tick check box Friday: Báo cáo will is gửi ando thứ 6 hàng tuần. 
Người dùng can chọn nhiều checkbox 1 lúc. 
Nếu nhập Repeat every … weeks: Giả sử nhập Repeat every 1 weeks, có nghĩa là report is gửi a tuần a lần. 
**Trường hợp 3: Gửi report Monthly**
[![Alt text](/img/migrated/Picture6-17a6da4e.png)](/img/migrated/Picture6-17a6da4e.png)
Cách thiết lập: 
1, Select **Refresh Frequency** là **Monthly**
2, Enter **End date**
3, **Repeating Cycle**
Nếu chọn **On the first … of month** : Giả sử chọn **On the first Friday of month** , có nghĩa là report will is gửi ando thứ 6 đầu tiên of tháng. 
Nếu chọn **On the first day of month** : Báo cáo will is gửi ando ngày đầu tiên of tháng. 
Nếu chọn **On the last day of month** : Báo cáo will is gửi ando ngày cuối cùng of tháng. 
**Repeat every … months** : Giả sử nhập **Repeat every 1 months** , có nghĩa là report is gửi 1 tháng 1 lần. 
**Trường hợp 4: Gửi report Hourly**
[![Alt text](/img/migrated/Picture7-fd778276.png)](/img/migrated/Picture7-fd778276.png)
Cách thiết lập: 
1, Select **Refresh Frequency** là **Hourly**
2, Enter **End date**
3, **Repeating Cycle**
**Repeat every ... hours** , giả sử nhập **Repeat every 2 hours** , có nghĩa là cứ sau 2h report will is gửi a lần. 
**Trường hợp 5: Gửi report Once**
[![Alt text](/img/migrated/Picture8-8624f278.png)](/img/migrated/Picture8-8624f278.png)
Trong trường hợp this report will is gửi **chỉ 1 lần duy nhất** theo thời gian has been thiết lập. Sau when gửi mail status lịch trình chuyển thành **Expired**
**Step 7** : Click nút 
Hiển thị màn hình **Confirm** includes the thông tin phần Select Dashboard, Format Report, Schedule for user kiểm tra lại.
[![Alt text](/img/migrated/Picture9-58d335a3.png)](/img/migrated/Picture9-58d335a3.png)
**Step 8** : Select **Create** to tạo report
