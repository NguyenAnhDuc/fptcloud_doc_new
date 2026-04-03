---
id: "report-export"
title: "Xuất báo cáo thủ công (Report Export)"
description: "Tính năng **Xuất báo cáo thủ công (Report Export)** cho phép người dùng trích xuất dữ liệu thống kê về các hoạt động bac"
sidebar_label: "Xuất báo cáo thủ công (Report Export)"
sidebar_position: 42
---

# Report Export

Tính năng **Xuất báo cáo thủ công (Report Export)** cho phép người dùng trích xuất dữ liệu thống kê về các hoạt động backup (sao lưu) dữ liệu của cụm cơ sở dữ liệu theo khoảng thời gian tùy chọn ngay tại thời điểm thực hiện chức năng. Báo cáo giúp người dùng theo dõi lịch sử backup, đánh giá trạng thái thực hiện, phục vụ kiểm tra vận hành hoặc lưu trữ nội bộ.
Để thực hiện xuất file báo cáo backup, người dùng thực hiện các bước sau:

### Bước 1: Truy cập chức năng
Người dùng truy cập **Database Platform** trên thanh menu và chọn menu **Advanced Features** -> Click button **Go to Reporting** để mở màn hình **Reporting**.
[![](/img/migrated/B1-c0322d1a.png)](/img/migrated/B1-c0322d1a.png)
Tại màn hình **Advanced Features** , tiếp tục click button **Go to Reporting** để mở màn hình **Reporting**. Khi giao diện **Reporting** hiển thị, chọn tab **Report Export** để truy cập tính năng xuất báo cáo thủ công.

### Bước 2: Nhập điều kiện filter
Tại màn hình **Reporting** , người dùng nhập các điều kiện để xuất dữ liệu báo cáo.
[![](/img/migrated/B2-ee06829e.png)](/img/migrated/B2-ee06829e.png)
Các thông tin cần nhập bao gồm:
  * **Report Type** : chọn loại báo cáo cần export trong danh sách có sẵn. Hiện tại mới chỉ cung cấp báo cáo cho dịch vụ backup nên danh sách lựa chọn chỉ có 1 giá trị là **Backup Report** và mặc định chọn giá trị này. Khi cung cấp các loại báo cáo khác sẽ bổ sung thêm giá trị.
  * **Data Period** : chọn khoảng thời gian để lọc dữ liệu xuất báo cáo. Danh sách bao gồm: 
    * **Yesterday** : lấy dữ liệu từ 00:00:00 của ngày hôm qua đến thời điểm hiện tại. VD: Nếu xuất báo cáo lúc 11:00:00 ngày 17/04/2025, dữ liệu sẽ bao gồm khoảng thời gian từ 00:00:00 ngày 16/04/2025 đến 11:00:00 ngày 17/04/2025.
    * **Last 7 days** : lấy dữ liệu trong 7 ngày liền kề trước thời điểm hiện tại, tính từ 00:00:00 của ngày (hiện tại - 7) đến ngày hiện tại. VD: Nếu xuất báo cáo lúc 11:00:00 ngày 17/04/2025, dữ liệu được lấy từ 00:00:00 ngày 10/04/2025 đến 11:00:00 ngày 17/04/2025.
    * **Last 30 days** : lấy dữ liệu trong 30 ngày liền kề trước thời điểm hiện tại, tính từ 00:00:00 của ngày (hiện tại - 30) đến ngày hiện tại. VD: Nếu xuất báo cáo lúc 11:00:00 ngày 17/04/2025, dữ liệu được lấy từ 00:00:00 ngày 18/03/2025 đến 11:00:00 ngày 17/04/2025.
    * **Custom Range** : lấy dữ liệu theo khoảng thời gian người dùng xác định, tính từ 00:00:00 của ngày bắt đầu đến 23:59:59 đến ngày kết thúc. VD: Nếu xuất báo cáo từ ngày 15/04/2025 đến ngày 17/04/2025, dữ liệu được lấy từ 00:00:00 ngày 15/04/2025 đến 23:59:59 ngày 17/04/2025. Trường hợp người dùng lựa chọn Custom Range, hiển thị thêm trường Date Range như sau:
[![](/img/migrated/B3-d285fd2c.png)](/img/migrated/B3-d285fd2c.png)
**Date Range** : chọn khoảng thời gian xuất báo cáo. Chỉ được xuất dữ liệu trong khoảng thời gian tối đa 90 ngày so với ngày hiện tại và **To Date** không được sau ngày hiện tại. Một số lưu ý khi khách hàng nhập khoảng thời gian xuất báo cáo như sau:
    * Giá trị mặc định: ngày hiện tại.
    * Chỉ cho phép chọn From Date và To Date thoả mãn (Current Date - 90) ≤ From Date ≤ To Date 
  * **Database Cluster** : chọn các database cần lấy dữ liệu để xuất ra báo cáo, có thể lựa chọn nhiều database cùng lúc. Danh sách lựa chọn bao gồm:
    * **Select All** : chọn tất cả database trong danh sách.
    * Các database thuộc VPC người dùng đã chọn.

**Lưu ý** :
  * Nếu không nhập giá trị đầy đủ và hợp lệ cho các trường input, button **Preview** và **Export** sẽ bị disabled.
  * Mỗi khi thay đổi điều kiện filter thì ẩn không hiển thị **Report Preview**. Khách hàng muốn xem dữ liệu trước khi export thì phải click button **Preview** sau mỗi lần thay đổi filter. 

### Bước 3: Xem trước dữ liệu báo cáo
Sau khi đã nhập tất cả các trường thông tin đầu vào đầy đủ và hợp lệ, click button Preview để xem trước bản báo cáo backup database ngay trên màn hình. Màn hình hiển thị thông tin các lần thực hiện backup database trong khoảng thời gian đã chọn. Nếu không có database nào chạy job backup trong khoảng thời gian đã chọn sẽ hiển thị "Nothing Found".
[![](/img/migrated/B4.1-154d2719.png)](/img/migrated/B4.1-154d2719.png)
Mô tả các trường thông tin hiển thị trong bảng **Report Preview** :  
| Tên cột  | Mô tả  |  
| --- | --- |  
| Job Name  | Hiển thị tên của job backup  |  
| Tenant  | Hiển thị tên tenant  |  
| VPC  | Hiển thị tên của VPC chứa database  |  
| Cluster Id  | Hiển thị cluster id của database chạy job backup  |  
| Cluster Name  | Hiển thị cluster name của database chạy job backup  |  
| Database Type  | Hiển thị loại engine của database chạy job backup  |  
| Version  | Hiển thị version của database chạy job backup  |  
| Cluster status  | Hiển thị trạng thái của database tại thời điểm lấy dữ liệu  |  
| Backup Type  | Hiển thị loại job backup ("full" - nếu backup toàn bộ data của database và "diff" - nếu chỉ backup phần thay đổi so với bản backup gần nhất)  |  
| Backup Retention  | Hiển thị giá trị retention của file backup  |  
| Retention Type  | Hiển thị loại retention ("day" - nếu retention tính theo số ngày tối đa file backup được lưu trữ và "quantity" - nếu retention tính theo số lượng file backup tối đa được lưu trữ)  |  
| Backup Usage (GB)  | Hiển thị dung lượng ổ backup đã sử dụng theo đơn vị GB  |  
| Backup File Name  | Hiển thị tên file backup được tạo ra sau khi chạy job  |  
| Backup State  | Hiển thị trạng thái chạy job backup ("successfull" - chạy job backup thành công và "deleted" - job chạy thành công và đã bị xoá)  |  
| Start Time  | Hiển thị thời gian bắt đầu backup dữ liệu  |  
| Finish Time  | Hiển thị thời gian thời gian hoàn thành backup dữ liệu  |  

### Bước 4: Export báo cáo
Sau khi đã nhập tất cả trường thông tin đầy đủ và hợp lệ, người dùng click button **Export** để xuất báo cáo dưới dạng file csv và tự động download file về máy local của người dùng. File báo cáo backup database được tải xuống sẽ bao gồm các thông tin sau:
  * Tên file report: theo định dạng {reportType}{vpcName}{exportTime}, trong đó: 
    * {reportType}: loại báo cáo người dùng cần xuất (giá trị người dùng chọn trong trường **Report Type**)
    * {vpcName}: VPC người dùng đã chọn khi xuất báo cáo (giá trị VPC người dùng chọn trên thanh menu)
    * {exportTime}: thời gian xuất báo cáo theo định dạng ddMMyyyyHHmmss
  * Định dạng file: csv
  * Các cột: bao gồm các thông tin được hiển thị trên bảng **Report Preview** của màn hình **Report Export**.
