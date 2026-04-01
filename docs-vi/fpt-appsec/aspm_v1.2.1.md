---
id: "aspm_v1.2.1"
title: "1. Mô tả"
description: "Trong bối cảnh các tổ chức ngày càng chú trọng vào việc quản lý rủi ro bảo mật và tối ưu quy trình vận hành, khả năng th"
sidebar_label: "1. Mô tả"
sidebar_position: 3
---

# Aspm_V1.2.1

Trong bối cảnh các tổ chức ngày càng chú trọng vào việc quản lý rủi ro bảo mật và tối ưu quy trình vận hành, khả năng theo dõi và kiểm soát vòng đời của issue trở thành nhu cầu quan trọng. FPT Smart Cloud giới thiệu bản nâng cấp mới của FSP (FPT Security Platform) AppSec Service với tính năng **Issue Life Cycle Management** , cho phép người dùng quản lý trạng thái issue toàn diện và minh bạch hơn. 
**1. Mô tả**
Tính năng **Issue Life Cycle Management** cho phép người dùng chủ động quản lý trạng thái của các issue được phát hiện trong quá trình scan. Người dùng có thể thay đổi trạng thái (Open / Ignored), thêm lý do hoặc comment kèm theo, và theo dõi lịch sử chỉnh sửa trạng thái ngay tại màn hình chi tiết issue. 
[![Alt text](/img/migrated/Screenshot-2025-11-14-152307-5fb4bde0.png)](/img/migrated/Screenshot-2025-11-14-152307-5fb4bde0.png)
**2. Tính năng**
  * Note status tại Issue list & Issue detail: 
    * Chuyển trạng thái issue giữa Open và Ignored 
    * Khi chuyển từ Open → Ignored: bắt buộc chọn lý do ignore, có thể kèm comment. 
    * Khi chuyển từ Ignored → Open: có thể thêm comment (không bắt buộc). 
  * Filter theo trạng thái: Hỗ trợ lọc issue theo các trạng thái: Open, Ignored và các lý do ignore. 
  * Activity log: Hiển thị lịch sử thay đổi trạng thái issue, bao gồm thông tin trạng thái cũ, trạng thái mới, thời gian thay đổi và comment (nếu có). 

**3. Khả năng**
  * Quản lý toàn bộ trạng thái issue tại cả Issue list và Issue detail. 
  * Hỗ trợ lưu trữ và truy xuất lịch sử thay đổi không giới hạn trong suốt vòng đời issue. 

**4. Hiệu suất**
  * Trạng thái của issue sẽ được **cập nhật chính thức tại lần scan tiếp theo** để đảm bảo tính nhất quán dữ liệu. 
  * Việc truy xuất lịch sử thay đổi trạng thái tại Activity đảm bảo tốc độ phản hồi nhanh và trực quan.
