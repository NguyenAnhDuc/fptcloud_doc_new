---
id: "report"
title: "Report"
description: "Tính năng **Reporting** cho phép người dùng trích xuất dữ liệu thống kê về các hoạt động của cụm cơ sở dữ liệu theo khoả"
sidebar_label: "Report"
sidebar_position: 41
---

# Report

Tính năng **Reporting** cho phép người dùng trích xuất dữ liệu thống kê về các hoạt động của cụm cơ sở dữ liệu theo khoảng thời gian tùy chọn. Báo cáo có thể được tạo thủ công hoặc tự động theo lịch trình.
Báo cáo giúp người dùng:
  * Theo dõi lịch sử hoạt động.
  * Đánh giá trạng thái thực hiện.
  * Phục vụ kiểm tra vận hành hoặc lưu trữ nội bộ.

Hiện tại, FPT Database Engine chỉ hỗ trợ một loại báo cáo duy nhất là báo cáo về hoạt động sao lưu (backup) dữ liệu của cụm cơ sở dữ liệu.
**Quyền cần thiết:**  
| Permission  | Action Type  | Description  |  
| --- | --- | --- |  
| manageDatabase:ReportConfig  | Edit  | Allows configuring and manageing the schedule for receiving database activity reports.  |