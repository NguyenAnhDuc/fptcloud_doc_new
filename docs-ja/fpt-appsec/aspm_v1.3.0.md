---
id: "aspm_v1.3.0"
title: "1. Mô tả"
sidebar_label: "1. Mô tả"
sidebar_position: "2"
---

# 1. Mô tả

Trong xu hướng tự động hóa quy trình DevSecOps nhằm nâng cao hiệu quả vận hành và kiểm soát bảo mật liên tục, việc quản lý lịch quét (scan schedule) đóng vai trò quan trọng trong việc đảm bảo hệ thống được giám sát định kỳ và chính xác. FPT Smart Cloud giới thiệu bản nâng cấp mới của FSP (FPT Security Platform) AppSec Service với tính năng **Schedule Management** , giúp người dùng dễ dàng tạo, theo dõi và quản lý lịch quét bảo mật theo nhu cầu. 
**1. Mô tả**
Tính năng **Schedule Management** cho phép người dùng tạo, quản lý và theo dõi lịch quét bảo mật một cách linh hoạt và hiệu quả. Thông qua việc cấu hình tần suất quét, phạm vi áp dụng và loại scan phù hợp, người dùng có thể tự động hóa quy trình kiểm tra bảo mật, giảm tải thao tác thủ công và đảm bảo tính liên tục trong vận hành DevSecOps. 
[![Alt text](/img/migrated/1-1-461969c3.png)](/img/migrated/1-1-461969c3.png)
**2. Tính năng**
  * Create schedule: Cho phép người dùng tạo mới schedule với các thông tin chính: 
    * Name và Description để nhận diện. 
    * Frequency: hỗ trợ ba chế độ – On-demand, Weekly, Monthly. 
    * Scope Configuration: lựa chọn team, loại asset, nguồn repository (GitHub, GitLab, GitLab Server), nhánh áp dụng (main/master) và điều kiện Last Scan. 
    * Action: chọn loại scan thực thi (Code Analysis, Secret Scan, IaC Scan). 
  * Schedule list & detail view 
    * Hiển thị danh sách toàn bộ schedule sắp xếp theo ngày tạo mới nhất. 
    * Thông tin bao gồm: Schedule ID, Name, Frequency, Interval, Last Launch, Next Run, Created By và Action (Edit/Delete). 
    * Nhấn vào tên schedule để xem chi tiết cấu hình. 
  * Edit schedule 
    * Cho phép người dùng chỉnh sửa thông tin schedule trực tiếp từ danh sách hoặc trong màn hình chi tiết. 
    * Người dùng có thể cập nhật thông tin về tần suất chạy, phạm vi (scope), loại scan hoặc mô tả schedule. 
  * Delete schedule 
    * Xóa schedule không còn cần thiết chỉ với một thao tác. 
    * Cơ chế xác nhận (confirmation) giúp tránh thao tác xóa nhầm.

**3. Khả năng**
  * Hỗ trợ tạo và quản lý nhiều schedule song song, áp dụng cho từng team hoặc phạm vi quét khác nhau. 
  * Cho phép tùy biến phạm vi quét linh hoạt theo nguồn repository, thời gian quét gần nhất và loại scan, phù hợp với quy mô và nhu cầu của từng tổ chức. 
  * Hệ thống đảm bảo tính toàn vẹn dữ liệu giữa các lần chỉnh sửa hoặc xóa schedule. 

**4. Hiệu suất**
  * Cơ chế quét tự động hoạt động ổn định theo lịch đã thiết lập, giúp giảm thiểu rủi ro bỏ sót quét định kỳ. 
  * Các thông tin Last Launch và Next Run được cập nhật liên tục, đảm bảo người dùng luôn nắm bắt chính xác trạng thái thực thi của từng schedule.
