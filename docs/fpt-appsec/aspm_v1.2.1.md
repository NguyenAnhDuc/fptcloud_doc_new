---
id: "aspm_v1.2.1"
title: "1. Mô tả"
sidebar_label: "1. Mô tả"
sidebar_position: "3"
---

# 1. Mô tả

Trong bối cảnh the tổ chức ngày càng chú trọng ando việc quản lý rủi ro security and tối ưu quy trình vận hành, khả năng theo dõi and kiểm soát vòng đời of issue trở thành nhu cầu quan trọng. FPT Smart Cloud giới thiệu bản nâng cấp mới of FSP (FPT Security Platform) AppSec Service with feature **Issue Life Cycle Management** , for phép user quản lý status issue toàn diện and minh bạch hơn. 
**1. Mô tả**
Tính năng **Issue Life Cycle Management** for phép user chủ động quản lý status of the issue is phát hiện in quá trình scan. Người dùng can thay đổi status (Open / Ignored), thêm lý do or comment kèm theo, and theo dõi lịch sử chỉnh sửa status ngay tại màn hình details issue. 
[![Alt text](/img/migrated/Screenshot-2025-11-14-152307-5fb4bde0.png)](/img/migrated/Screenshot-2025-11-14-152307-5fb4bde0.png)
**2. Tính năng**
  * Note status tại Issue list & Issue detail: 
    * Chuyển status issue giữa Open and Ignored 
    * Khi chuyển from Open → Ignored: bắt buộc chọn lý do ignore, can kèm comment. 
    * Khi chuyển from Ignored → Open: can thêm comment (không bắt buộc). 
  * Filter theo status: Hỗ trợ lọc issue theo the status: Open, Ignored and the lý do ignore. 
  * Activity log: Hiển thị lịch sử thay đổi status issue, includes information status cũ, status mới, thời gian thay đổi and comment (if có). 

**3. Khả năng**
  * Manage toàn bộ status issue tại cả Issue list and Issue detail. 
  * Hỗ trợ lưu trữ and truy xuất lịch sử thay đổi không giới hạn in suốt vòng đời issue. 

**4. Hiệu suất**
  * Trạng thái of issue will is **cập nhật chính thức tại lần scan tiếp theo** to đảm bảo tính nhất quán dữ liệu. 
  * Việc truy xuất lịch sử thay đổi status tại Activity đảm bảo tốc độ phản hồi nhanh and trực quan.
