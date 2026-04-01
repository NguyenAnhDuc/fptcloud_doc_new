---
id: "reporting"
title: "Reporting"
description: "Tính năng **Reporting** cho phép người dùng trích xuất dữ liệu thống kê về các hoạt động của cụm cơ sở dữ liệu theo khoả"
sidebar_label: "Reporting"
sidebar_position: 41
---

# Reporting

Tính năng **Reporting** cho phép người dùng trích xuất dữ liệu thống kê về các hoạt động của cụm cơ sở dữ liệu theo khoảng thời gian tùy chọn. Báo cáo có thể được tạo thủ công hoặc tự động theo lịch trình.
Báo cáo giúp người dùng:
  * Theo dõi lịch sử hoạt động.
  * Đánh giá trạng thái thực hiện.
  * Phục vụ kiểm tra vận hành hoặc lưu trữ nội bộ.

Hiện tại, FPT Database Engine chỉ hỗ trợ một loại báo cáo duy nhất là báo cáo về hoạt động sao lưu (backup) dữ liệu của cụm cơ sở dữ liệu.
**Quyền cần thiết:**  
| Tên quyền  | Loại thao tác  | Mô tả  |  
| --- | --- | --- |  
| manageDatabase:ReportConfig  | Edit  | Quyền cấu hình lịch nhận báo cáo về hoạt động của cơ sở dữ liệu.  |
