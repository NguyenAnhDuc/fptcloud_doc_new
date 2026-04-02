---
id: "step-by-step"
title: "Step By Step"
description: "Hướng dẫn từng bước sử dụng Model Fine-Tuning trên FPT AI Factory."
sidebar_label: "Step By Step"
sidebar_position: 7
---

# Step By Step

Sau khi đăng nhập vào FPT AI Factory Portal tại <https://ai.fptcloud.com/> hoặc <https://ai.fptcloud.jp/>, hãy làm theo hướng dẫn dưới đây:

### Bước 1: Nạp credit vào tài khoản
  * Chọn **Billing** trong menu bên
  * Nhấp nút **Add Credit** và nhập số tiền cùng thông tin thanh toán để hoàn tất. Hoặc, nếu bạn có voucher từ FPT, hãy áp dụng mã hợp lệ của bạn trong **Voucher code** để đổi lấy credit.
  * **Lưu ý:**
    * Để khởi động một job fine-tuning, bạn phải duy trì số dư tối thiểu = _số node × số GPU × chi phí mỗi block_.
    * Nếu số dư của bạn xuống dưới 0, job fine-tuning sẽ bị hủy. Sau khi nạp thêm tiền, bạn sẽ cần khởi động lại job từ đầu.

### Bước 2: Tạo pipeline
  * Chọn **Model Fine-tuning** trong menu bên
  * Nhấp nút **Create New Pipeline** và cấu hình triển khai pipeline.

### Bước 3: Quản lý pipeline
  * Danh sách pipeline được tạo thành công hiển thị trên trang **Fine-tuning Pipelines**.
  * Trong cột **Actions**, bạn có thể **khởi động**, **hủy**, **chỉnh sửa** và **xóa pipeline** để quản lý hiệu quả.
  * Nhấp **Tên pipeline** để truy cập trang **Execution history**, và nhấp **Tên execution** để truy cập trang **Execution details**.
  * Truy cập **Execution history**, điều hướng đến tab **Audit logs** để xem người dùng và các hoạt động trong pipeline.

### Bước 4: Theo dõi và Đánh giá
  * Truy cập **Execution details**, điều hướng đến tab **Model Metrics** để theo dõi trong quá trình fine-tuning và đánh giá model sau quá trình này.
  * Điều hướng đến tab **Logs** để theo dõi các quy trình fine-tuning, sự kiện và đầu ra hệ thống theo thời gian thực.
