---
id: "aspm_v1.3.0"
title: "1. Mô tả"
sidebar_label: "1. Mô tả"
sidebar_position: "2"
---

# 1. Mô tả

Trong xu hướng tự động hóa quy trình DevSecOps nhằm nâng cao hiệu quả vận hành and kiểm soát security liên tục, việc quản lý lịch quét (scan schedule) thatng vai trò quan trọng in việc đảm bảo system is monitoring định kỳ and chính xác. FPT Smart Cloud giới thiệu bản nâng cấp mới of FSP (FPT Security Platform) AppSec Service with feature **Schedule Management** , giúp user dễ dàng tạo, theo dõi and quản lý lịch quét security theo nhu cầu. 
**1. Mô tả**
Tính năng **Schedule Management** for phép user tạo, quản lý and theo dõi lịch quét security a theh linh hoạt and hiệu quả. Thông qua việc cấu hình tần suất quét, phạm vi áp dụng and loại scan phù hợp, user can tự động hóa quy trình kiểm tra security, giảm tải thao tác thủ công and đảm bảo tính liên tục in vận hành DevSecOps. 
[![Alt text](/img/migrated/1-1-461969c3.png)](/img/migrated/1-1-461969c3.png)
**2. Tính năng**
  * Create schedule: Cho phép user tạo mới schedule with the information chính: 
    * Name and Description to nhận diện. 
    * Frequency: hỗ trợ ba chế độ – On-demand, Weekly, Monthly. 
    * Scope Configuration: lựa chọn team, loại asset, nguồn repository (GitHub, GitLab, GitLab Server), nhánh áp dụng (main/master) and điều kiện Last Scan. 
    * Action: chọn loại scan thực thi (Code Analysis, Secret Scan, IaC Scan). 
  * Schedule list & detail view 
    * Hiển thị list toàn bộ schedule sắp xếp theo ngày tạo mới nhất. 
    * Thông tin including: Schedule ID, Name, Frequency, Interval, Last Launch, Next Run, Created By and Action (Edit/Delete). 
    * Nhấn ando tên schedule to xem details cấu hình. 
  * Edit schedule 
    * Cho phép user chỉnh sửa information schedule trực tiếp from list or in màn hình details. 
    * Người dùng can cập nhật information về tần suất chạy, phạm vi (scope), loại scan or mô tả schedule. 
  * Delete schedule 
    * Delete schedule không còn need to thiết chỉ with a thao tác. 
    * Cơ chế xác nhận (confirmation) giúp tránh thao tác xóa nhầm.

**3. Khả năng**
  * Hỗ trợ tạo and quản lý nhiều schedule song song, áp dụng for fromng team or phạm vi quét khác nhau. 
  * Cho phép tùy biến phạm vi quét linh hoạt theo nguồn repository, thời gian quét gần nhất and loại scan, phù hợp with quy mô and nhu cầu of fromng tổ chức. 
  * Hệ thống đảm bảo tính toàn vẹn dữ liệu giữa the lần chỉnh sửa or xóa schedule. 

**4. Hiệu suất**
  * Cơ chế quét tự động hoạt động ổn định theo lịch has been setup, giúp giảm thiểu rủi ro bỏ sót quét định kỳ. 
  * Các information Last Launch and Next Run is cập nhật liên tục, đảm bảo user luôn nắm bắt chính xác status thực thi of fromng schedule.
