---
id: "cost-explorer-dimension-service"
title: "Xem chi phí theo dịch vụ"
description: "Hướng dẫn xem Dashboard chi phí và tùy chỉnh bộ lọc theo dịch vụ trên Cost Explorer."
sidebar_label: "Xem chi phí theo dịch vụ"
sidebar_position: 2
---

# Xem chi phí theo dịch vụ

Cost Explorer cho phép bạn xem biểu đồ chi phí theo từng dịch vụ, giúp nhanh chóng xác định dịch vụ nào đang tiêu tốn nhiều nhất để tối ưu ngân sách.

## Xem Dashboard chi phí

1. Chọn **Billing** → **Cost Explorer**. Hệ thống hiển thị chi phí theo các dịch vụ sử dụng thuộc tất cả Project trong tenant.

2. Kéo thanh scroll hoặc lăn chuột để zoom in/zoom out biểu đồ, xem dữ liệu tại từng thời điểm.

   ![Dashboard Cost Explorer theo dịch vụ](/img/migrated/image-1745469271136-91cd6135.png)

## Tùy chỉnh bộ lọc (Customize Filter)

1. Nhấn **Customize Filter**. Hệ thống hiển thị pop-up cho phép chọn điều kiện lọc.

2. Các điều kiện lọc bao gồm:
   - **Start date – End date**: khoảng thời gian tính tiền.
   - **Period type**: xem biểu đồ biến động chi phí theo ngày (Daily) hoặc theo tháng (Monthly).
   - **Service**: tên dịch vụ. Bạn có thể chọn nhiều service. Nếu không chọn service cụ thể, hệ thống hiển thị dữ liệu của tất cả dịch vụ.
   - **Project**: có thể chọn nhiều Project. Nếu để trống, dữ liệu không bị lọc theo Project.
   - **VPC**: có thể chọn nhiều VPC. Nếu đã chọn Project cụ thể, VPC chỉ hiển thị các VPC thuộc Project đã chọn.
   - **Tag**: các tag được quản lý trên Portal. Bạn có thể chọn nhiều tag.

   ![Customize Filter dialog](/img/migrated/image-1745469282868-f7d5649a.png)
