---
id: "Khởi tạo Bugdet Alert"
title: "Khởi tạo Budget Alert"
description: "Hướng dẫn tạo Budget Alert để cảnh báo ngân sách chủ động trên FPT Cloud Portal."
sidebar_label: "Khởi tạo Budget Alert"
sidebar_position: 2
---

# Khởi tạo Budget Alert

Budget Alert giúp bạn nhận cảnh báo khi chi phí cloud đạt ngưỡng ngân sách đã thiết lập — giảm rủi ro vượt ngân sách và chủ động kiểm soát chi phí.

## Điều kiện tiên quyết

- Có tài khoản FPT Cloud với quyền truy cập **Billing**.
- Đã đăng nhập vào FPT Cloud Portal.

## Tạo Budget Alert

1. Chọn **Billing** → **Budget Alert**. Hệ thống hiển thị danh sách Budget Alert đã tạo.

   ![Danh sách Budget Alert](/img/migrated/image-1722238229739-f6ec0b8c.png)

2. Nhấn **Create Budget Alert**. Hệ thống chuyển tới màn hình điền thông tin.

   ![Nút Create Budget Alert](/img/migrated/image-1722238258978-89fcec91.png)

3. Điền thông tin **Basic Information**:
   - **Budget Name** (bắt buộc): tên Budget Alert, tối đa 50 ký tự, bao gồm chữ hoa, số, dấu gạch ngang và dấu gạch dưới.
   - **Budget period** (bắt buộc):
     - Chọn **Monthly** để tính tiền và cảnh báo theo tháng (từ 00:00 ngày 1 đến 23:59 ngày cuối tháng).
     - Chọn **Daily** để tính tiền và cảnh báo theo ngày (từ 00:00 đến 23:59 mỗi ngày).
   - **Budget amount** (bắt buộc): tổng ngân sách cho 1 ngày hoặc 1 tháng (đơn vị mặc định là VND).
   - **Budget scope** (bắt buộc):
     - Chọn **All services** để tính ngưỡng cảnh báo theo chi phí thực tế của tất cả dịch vụ và tài nguyên trong tenant hiện tại.
     - Chọn **Filter specific resources** để tính ngưỡng cảnh báo theo VPC hoặc tag cụ thể.

   :::note
   Bạn có thể chọn nhiều VPC/tag. Chi phí thực tế được tính từ usage của dịch vụ nằm đồng thời trong tất cả VPC và tag được chọn. Dịch vụ chỉ thuộc một VPC hoặc tag mà không thuộc các VPC/tag khác sẽ không được tính.
   :::

   ![Form Basic Information](/img/migrated/image-1722238275706-df16f772.png)

4. Nhấn **Next**. Hệ thống chuyển tới màn hình **Alert thresholds & Create**:
   - **Threshold number** (bắt buộc): nhập số ngưỡng cảnh báo.
   - **Threshold unit** (bắt buộc):
     - Chọn **Percent (%)** — hệ thống cảnh báo khi chi phí thực tế >= x% so với Budget amount (x = threshold number).
     - Chọn **Vietnam dong (đ)** — hệ thống cảnh báo khi chi phí thực tế >= số tiền tại threshold number.
   - **Severity** (bắt buộc): chọn mức độ cảnh báo **Warning** hoặc **Critical**.
   - **Notification title** (bắt buộc): tiêu đề email cảnh báo, tối đa 255 ký tự (không bao gồm dấu ngoặc đơn, ngoặc kép, gạch chéo).
   - **Description** (bắt buộc): nội dung email cảnh báo, tối đa 500 ký tự.
   - **Email recipients** (bắt buộc): nhập email nhận cảnh báo (có thể nhập nhiều email).
   - **Add Alert Threshold** (không bắt buộc): tạo thêm nhiều ngưỡng cảnh báo cho cùng một Budget.

   :::note
   Mỗi alert threshold sẽ được gửi cảnh báo tối đa 3 lần.
   :::

   ![Form Alert thresholds](/img/migrated/image-1722238293122-55c558a2.png)

   ![Ví dụ cấu hình Alert threshold](/img/migrated/image-1722238298494-77e57e31.png)

5. Nhấn **Create** để lưu Budget Alert, hoặc nhấn **Previous** để quay lại màn hình Basic Information.

   ![Xác nhận tạo Budget Alert](/img/migrated/image-1722238751599-265e93b0.png)

Budget Alert mới hiển thị trong danh sách.
