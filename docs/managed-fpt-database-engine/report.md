---
id: "report"
title: "Report"
description: "Tính năng **Reporting** cho phép người dùng trích xuất dữ liệu thống kê về các hoạt động của cụm cơ sở dữ liệu theo khoả"
sidebar_label: "Report"
sidebar_position: 41
---

# Report

Tính năng **Reporting** for phép user trích xuất dữ liệu thống kê về the hoạt động of cụm database theo khoảng thời gian tùy chọn. Báo cáo can is tạo thủ công or tự động theo lịch trình.
Báo cáo giúp user:
  * Monitor lịch sử hoạt động.
  * Đánh giá status thực hiện.
  * Phục vụ kiểm tra vận hành or lưu trữ nội bộ.

Hiện tại, FPT Database Engine chỉ hỗ trợ a loại report duy nhất là report về hoạt động backup (backup) dữ liệu of cụm database.
**Quyền cần thiết:**  
| Permission  | Action Type  | Description  |  
| --- | --- | --- |  
| manageDatabase:ReportConfig  | Edit  | Allows configuring and manageing the schedule for receiving database activity reports.  |