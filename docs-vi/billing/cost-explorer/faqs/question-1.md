---
id: "question-1"
title: "Không xem được Cost Explorer"
description: "Các nguyên nhân và cách khắc phục khi không xem được Cost Explorer."
sidebar_label: "Không xem được Cost Explorer"
sidebar_position: 1
---

# Không xem được Cost Explorer

Có 3 trường hợp dẫn tới việc bạn không xem được module Billing nói chung và tính năng Cost Explorer nói riêng:

**1. Account có role Tenant Owner nhưng dữ liệu bill bị trống.**

Liên hệ Sale Support của FCI để được hỗ trợ setup giá dịch vụ và hiển thị đối soát lên Portal.

**2. Account không có role Tenant Owner.**

Yêu cầu người có quyền Tenant Owner thuộc tổ chức của bạn thực hiện phân quyền IAM theo hướng dẫn tại [Phân quyền xem billing](/docs/vi/billing/)/.

**3. Account có đủ quyền view billing nhưng không thấy dữ liệu.**

Kiểm tra lại Project hoặc Region đang chọn. Thử chọn Project default và Region tài nguyên được tính billing. Nếu vẫn không thấy, liên hệ FCI để được hỗ trợ.
