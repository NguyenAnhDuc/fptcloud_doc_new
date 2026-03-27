---
id: "report-schedule"
title: "Lập lịch báo cáo tự động (Report Schedule)"
description: "Chức năng **Lập lịch báo cáo tự động (Report Schedules)** cho phép người dùng tạo, quản lý và theo dõi lịch trình tự độn"
sidebar_label: "Lập lịch báo cáo tự động (Report Schedule)"
sidebar_position: 43
---

# Report Schedule

Chức năng **Lập lịch báo cáo tự động (Report Schedules)** cho phép người dùng tạo, quản lý và theo dõi lịch trình tự động gửi báo cáo về các hoạt động backup (sao lưu dữ liệu) của cụm cơ sở dữ liệu theo khoảng thời gian tùy chọn. Thay vì phải truy cập hệ thống để xuất báo cáo thủ công, người dùng có thể thiết lập lịch trình để hệ thống tự động gửi báo cáo định kỳ tới các địa chỉ email đã định trước. Báo cáo được gửi dưới dạng tệp CSV.
Để tạo một lịch trình gửi báo cáo thực hiện các bước dưới đây:
### Bước 1: Truy cập trang quản lý lịch trình
Người dùng chọn **Database Platform** trên thanh menu rồi chọn menu **Advanced Features** để mở màn hình **Advanced Features**.
[![](/img/migrated/B1-c0322d1a.png)](/img/migrated/B1-c0322d1a.png)
Tại màn hình **Advanced Features** , tiếp tục click button **Go to Reporting** để mở màn hình **Reporting**. Khi giao diện **Reporting** hiển thị, chọn tab **Report Schedules** để xem danh sách các lịch trình báo cáo hiện có. Trong trường hợp chưa tạo lịch trình nào danh sách sẽ hiển thị _Nothing Found_.
[![](/img/migrated/report-schedule-list-scaled-a3a5aae6.png)](/img/migrated/report-schedule-list-scaled-a3a5aae6.png)
Thông tin của từng lịch trình bao gồm:  
| Tên cột  | Mô tả  |  
| --- | --- |  
| Schedule name  | Tên của lịch trình  |  
| Report type  | Loại báo cáo (ví dụ: Backup Report)  |  
| Data period  | Khoảng thời gian dữ liệu được lấy cho mỗi báo cáo (ví dụ: Yesterday, Last 7 Days, Last 30 Days, Last Month)  |  
| Report frequency  | Tần suất gửi báo cáo (ví dụ: Daily, Weekly, Monthly)  |  
| Email recipients  | Danh sách các địa chỉ email sẽ nhận báo cáo  |  
| Created at  | Thời điểm lịch trình được tạo  |  
| Action  | Các tùy chọn để chỉnh sửa (Edit) hoặc xóa (Delete) lịch trình  |  
### Bước 2: Tạo một lịch trình báo cáo mới
Tại màn hình **Report Schedules** , nhấn vào nút **Add Schedule** ở góc trên cùng bên phải để mở màn hình **Add a Report Schedule**.
[![](/img/migrated/create-report-schedule-scaled-523d245a.png)](/img/migrated/create-report-schedule-scaled-523d245a.png)
Nhập thông tin cấu hình cho lịch trình:
  * **Schedule Name** : Nhập tên cho lịch trình. Tên này nên mô tả rõ ràng mục đích của lịch trình, có độ dài tối đa 25 ký tự, tối thiểu 6 ký tự và chỉ được bao gồm các chữ cái trong bảng chữ cái tiếng Anh, chữ số, dấu cách, dấu gạch dưới (_) và dấu gạch ngang (-). Ví dụ: _Report_for_group1, Report for group 2_.
  * **Report Type** : Chọn loại báo cáo cần sử dụng trong danh sách có sẵn. Hiện tại mới chỉ cung cấp báo cáo cho dịch vụ backup nên danh sách lựa chọn chỉ có 1 giá trị là _Backup Report_ và mặc định chọn giá trị này. Khi cung cấp các loại báo cáo khác sẽ bổ sung thêm giá trị.
  * **Data Period** : Chọn khoảng thời gian dữ liệu sẽ được lấy cho mỗi lần tạo báo cáo. Khi thay đổi giá trị của **Data Period** sẽ tự động thay đổi giá trị của trường **Report Frequency** và trường **Day To Send** theo từng trường hợp (xem mô tả tại từng trường). Danh sách lựa chọn bao gồm: 
    * **Yesterday** : lấy dữ liệu từ 00:00:00 của ngày hôm qua đến thời điểm hiện tại. VD: Nếu xuất báo cáo lúc 11:00:00 ngày 17/04/2025, dữ liệu sẽ bao gồm khoảng thời gian từ 00:00:00 ngày 16/04/2025 đến 11:00:00 ngày 17/04/2025.
    * **Last 7 days** : lấy dữ liệu trong 7 ngày liền kề trước thời điểm hiện tại, tính từ 00:00:00 của ngày (hiện tại - 7) đến ngày hiện tại. VD: Nếu xuất báo cáo lúc 11:00:00 ngày 17/04/2025, dữ liệu được lấy từ 00:00:00 ngày 10/04/2025 đến 11:00:00 ngày 17/04/2025.
    * **Last 30 days** : lấy dữ liệu trong 30 ngày liền kề trước thời điểm hiện tại, tính từ 00:00:00 của ngày (hiện tại - 30) đến ngày hiện tại. VD: Nếu xuất báo cáo lúc 11:00:00 ngày 17/04/2025, dữ liệu được lấy từ 00:00:00 ngày 18/03/2025 đến 11:00:00 ngày 17/04/2025.
    * **Last month** : lấy dữ liệu của tháng trước đó (lấy full tháng, từ ngày 1 đến ngày cuối tháng). VD: ngày thực hiện export là ngày 17/04/2025 thì dữ liệu xuất ra báo cáo là dữ liệu từ ngày 01/03/2025 đến ngày 31/03/2025.
  * **Report Frequency** : Tần suất chạy lịch trình. Giá trị bao gồm _Daily_ , _Weekly_ và _Monthly_. Giá trị trường này thay đổi theo khoảng thời gian lấy dữ liệu (chọn trong trường **Data Period**):
    * Nếu **Data Period** chọn "Yesterday" thì **Report Frequency** hiển thị "Daily" (gửi báo cáo hàng ngày).
    * Nếu **Data Period** chọn "Last 7 days" thì **Report Frequency** hiển thị "Weekly" (gửi báo cáo hàng tuần).
    * Nếu **Data Period** chọn "Last 30 days" và "Last Month" thì **Report Frequency** hiển thị "Monthly" (gửi báo cáo hàng tháng).
  * **Day To Send** : Chọn ngày chạy lịch trình. Giá trị thay đổi theo khoảng thời gian lấy dữ liệu (chọn trong trường **Data Period**):
    * Nếu **Data Period** chọn "Yesterday" thì Day To Send hiển thị giá trị "Daily" (lịch trình chạy hàng ngày) và không được phép thay đổi.
    * Nếu **Data Period** chọn "Last 7 days" thì danh sách lựa chọn bao gồm các thứ trong tuần: "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" và "Sunday" (lịch trình sẽ chạy vào ngày được chọn trong tuần)
    * Nếu **Data Period** chọn "Last 30 days" hoặc "Last Month" thì danh sách lựa chọn bao gồm các ngày trong tháng, từ 1 → 31 (lịch trình sẽ chạy vào ngày được chọn trong tháng). Nếu tháng nào đó không có ngày được chọn (ví dụ: chọn giá trị Day to Send là "31" nhưng tháng 2 chỉ có 28 ngày) thì lịch trình sẽ chạy vào ngày cuối cùng của tháng.
  * **Time To Send** : Chọn thời điểm chạy lịch trình trong ngày.
  * **Database Cluster** : Chọn các database cần lấy dữ liệu để xuất ra báo cáo, có thể lựa chọn nhiều database cùng lúc. Danh sách lựa chọn bao gồm:
    * **Select All** : chọn tất cả database trong danh sách.
    * Các database thuộc VPC người dùng đã chọn.
  * **Email Recipients** : Nhập danh sách các địa chỉ email sẽ nhận báo cáo, đảm bảo nhập email chính xác để tránh thất lạc thông tin. Sử dụng button có dấu (+) để thêm và button có dấu (–) để bớt email khỏi danh sách.
    * Mỗi email phải tuân thủ định dạng chuẩn của email, bao gồm đầy đủ 3 phần theo thứ tự là: tên người dùng, dấu "@" và tên miền.
    * Các email trong danh sách nhập không được trùng nhau.

Sau khi điền đầy đủ thông tin, nhấn button **Save** để tạo lịch trình, hệ thống sẽ quay về màn hình danh sách với lịch trình vừa tạo được hiển thị trên đầu danh sách.
Đến thời điểm chạy đã cấu hình, lịch trình vừa tạo sẽ chạy, lấy dữ liệu theo đúng khoảng thời gian và các cụm cơ sở dữ liệu đã chỉ định và xuất ra file CSV để gửi về danh sách email đã đăng ký.
Khi cần thiết, bạn có thể thực hiện các thao tác sau với lịch trình đã tạo:
  * _Xem thông tin chi tiết của lịch trình_ : Tại màn hình**Report Schedules** , nhấn vào tên của một lịch trình để xem thông tin cấu hình của lịch trình và nhật ký tác động lên lịch trình đó.
  * _Chỉnh sửa lịch trình_ : Tại màn hình **Report Schedules** , chọn action **Edit** trong cột action tương ứng với lịch trình cần sửa để vào màn hình chỉnh sửa thông tin. Người dùng có thể cập nhật các thông tin tương tự như khi tạo mới. Sau khi điền đầy đủ thông tin, nhấn button **Edit** để lưu các thay đổi, hệ thống sẽ quay về màn hình danh sách với các thông tin đã được cập nhật cho lịch trình vừa sửa.
  * _Xóa lịch trình_ : Tại màn hình **Report Schedules** , chọn action **Delete** để thực hiện xoá lịch trình, hệ thống sẽ hiển thị một hộp thoại xác nhận. Nhập thông tin xác nhận xoá và nhấn button **Confirm** để xóa vĩnh viễn lịch trình. Sau khi xoá thành công, hệ thống sẽ ngừng gửi báo cáo tới các email đã cấu hình.