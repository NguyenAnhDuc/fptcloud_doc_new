---
id: "Khởi tạo Bugdet Alert"
title: "Khởi Tạo Bugdet Alert"
description: "**Bước 1:** Tại menu, chọn Billing > Chọn Budget Alert. Hệ thống hiển thị danh sách budget alert list đã tạo."
sidebar_label: "Khởi Tạo Bugdet Alert"
sidebar_position: 2
---

# Khởi Tạo Bugdet Alert

**Bước 1:** Tại menu, chọn Billing > Chọn Budget Alert. Hệ thống hiển thị danh sách budget alert list đã tạo.
[![file](/img/migrated/image-1722238229739-f6ec0b8c.png)](/img/migrated/image-1722238229739-f6ec0b8c.png)
**Bước 2:** Chọn button Create Budget Alert, hệ thống chuyển tới màn hình điền thông tin để tạo budget alert. 
[![file](/img/migrated/image-1722238258978-89fcec91.png)](/img/migrated/image-1722238258978-89fcec91.png)
**Bước 3:** Chọn button Create Budget Alert, hệ thống chuyển tới màn hình điền thông tin Basics Information.
  * Budget Name (bắt buộc): Người dùng nhập vào tên của budget alert, tối đa 50 kí tự, bao gồm ký tự in hoa, số, dấu gạch ngang và dấu gạch dưới.
  * Budget period (bắt buộc): 
    * Chọn Monthly nếu muốn tính tiền và cảnh báo theo tháng (bắt đầu từ 00:00 ngày 1 hàng tháng và kết thúc vào 23:59 ngày cuối cùng của tháng)
    * Chọn Daily nếu muốn tính tiền và cảnh báo theo hàng ngày (bắt đầu từ 00:00 hàng ngày và kết thúc vào 23:59 hàng ngày)
  * Budget amount (bắt buộc): Tổng số tiền budget cho 1 ngày hoặc 1 tháng (đơn vị tiền tệ mặc định là Việt Nam đồng)
  * Budget scrope (bắt buộc): 
    * Chọn “All services” nếu muốn tính ngưỡng cảnh báo ngân sách theo chi phí thực tế của tất cả các dịch vụ, tài nguyên trong tenant ORG hiện tại. 
    * Chọn “Filter specific resources” nếu muốn tính ngưỡng cảnh báo ngân sách của 1 vài dịch vụ theo VPC hoặc theo tag.
    * Lưu ý: Có thể chọn 1 hoặc nhiều VPC/Tag. Chi phí thực tế sẽ được tính từ usage của dịch vụ/tài nguyên nằm đồng thời trong tất cả VPC và Tag được chọn. Các dịch vụ/tài nguyên chỉ nằm ở 1 VPC hoặc 1 Tag mà không nằm trong những VPC hoặc Tag khác thì sẽ không được tính tiền.

[![file](/img/migrated/image-1722238275706-df16f772.png)](/img/migrated/image-1722238275706-df16f772.png)
**Bước 4:** Chọn button Next, hệ thống chuyển tới màn hình điền thông tin Alert thresholds & Create.
  * Threshold number (bắt buộc): Người dùng nhập số ngưỡng cảnh báo.
  * Threshold unit (bắt buộc): Người dùng chọn đơn vị của ngưỡng cảnh báo
    * Nếu chọn “Percent (%)”, hệ thống sẽ cảnh báo khi số tiền thực tế lớn hơn hoặc bằng x% so với ngân sách (budget amount) - trong đó x = threshold number. 
    * Nếu chọn “Vietnam dong (đ)”, hệ thống sẽ cảnh báo khi số tiền thực tế lớn hơn hoặc bằng so với số tiền ở ngưỡng cảnh báo (threshold number). 
  * Severity (bắt buộc): Người dùng chọn mức độ cảnh báo là Warning hoặc Critical.
  * Notification title (bắt buộc): Người dùng nhập title của email cảnh báo; tối đa 255 kí tự, bao gồm ký tự in hoa, số, dấu gạch ngang và dấu gạch dưới (không bao gồm dấu ngặc đơn, dấu ngoặc kép , dấu gạch chéo ngược và dấu gạch chéo xuôi).
  * Description (bắt buộc): Người dùng nhập nội dung của email cảnh báo; tối đa 500 kí tự, bao gồm ký tự in hoa, số, dấu gạch ngang và dấu gạch dưới (không bao gồm dấu ngặc đơn, dấu ngoặc kép , dấu gạch chéo ngược và dấu gạch chéo xuôi).
  * Email recipients (bắt buộc): Người dùng nhập email nhận cảnh báo (có thể nhập nhiều email)
  * Add Alert Threshold (không bắt buộc): Người dùng có thể tạo nhiều cảnh báo (alert threshold) trên ngân sách (budget) của 1 nhóm tài nguyên. 
  * Lưu ý: Mỗi alert threshold sẽ được gửi cảnh báo 3 lần.

[![file](/img/migrated/image-1722238293122-55c558a2.png)](/img/migrated/image-1722238293122-55c558a2.png)
[![file](/img/migrated/image-1722238298494-77e57e31.png)](/img/migrated/image-1722238298494-77e57e31.png)
**Bước 5:** Chọn button Create để lưu thông tin Budget Alert vừa tạo hoặc chọn button Previous để quay lại màn hình trước (Basic informtaion).
[![file](/img/migrated/image-1722238751599-265e93b0.png)](/img/migrated/image-1722238751599-265e93b0.png)