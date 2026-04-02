---
id: "credit-history"
title: "Lịch sử credits"
description: "Tab Lịch sử Credits cho phép bạn theo dõi tất cả thay đổi số dư, bao gồm nạp tiền, credits voucher và việc sử dụng dịch vụ."
sidebar_label: "Lịch sử credits"
sidebar_position: 6
---

# Lịch sử credits

Tab **Lịch sử Credits** cho phép bạn theo dõi tất cả **thay đổi số dư**, bao gồm **nạp tiền, credits voucher và việc sử dụng dịch vụ.** [![Alt text](/img/migrated/image2025-6-30_14-3-28-f7bf8b4c.png)](/img/migrated/image2025-6-30_14-3-28-f7bf8b4c.png) [![Alt text](/img/migrated/image2025-6-30_14-4-25-da425d96.png)](/img/migrated/image2025-6-30_14-4-25-da425d96.png)

## Giải thích các trường trong bảng

| Trường | Mô tả |
| --- | --- |
| **Date** | Ngày và giờ giao dịch xảy ra. |
| **Service** | Dịch vụ được sử dụng theo loại giao dịch:<br/>• **Top-up**: Payment Gateway<br/>• **Voucher**: Hệ thống (của FPT AI Factory)<br/>• **Charged**: Dịch vụ AI Factory đã tiêu credits (ví dụ: Model Fine-tuning, GPU Container, hoặc AI Inference) |
| **Source** | Dựa trên loại dịch vụ:<br/>• **Giao dịch Top-up**: Tên cổng thanh toán đã xử lý giao dịch<br/>• **Giao dịch Voucher**: Voucher<br/>• **Giao dịch Charged**: Tên tài nguyên của dịch vụ FPT AI Factory đã sử dụng credits |
| **Description** | Thông tin chi tiết về giao dịch, chẳng hạn tên gói dịch vụ, thời gian sử dụng, v.v. |
| **Code** | **Chỉ xuất hiện với loại số dư "Voucher credits"**<br/>Mã voucher được áp dụng cho giao dịch. |
| **Status** | Trạng thái giao dịch:<br/>• **Success**: Giao dịch đã hoàn thành.<br/>• **Failed**: Giao dịch không thành công.<br/>• **Processed**: Giao dịch đang được xử lý. |
| **Amount** | Thay đổi credits:<br/>• **Số dương (+)** biểu thị credits được cộng thêm<br/>• **Số âm (-)** biểu thị credits bị trừ (sử dụng dịch vụ hoặc hoàn tiền thất bại). |

## Bộ lọc bảng

Bộ lọc cho phép bạn áp dụng nhiều bộ lọc cùng lúc để tìm nhanh các giao dịch cụ thể.

  * **Loại số dư:**
    * **Top-up Credits (mặc định)**: Chỉ xem giao dịch nạp tiền.
    * **Voucher Credits**: Chỉ xem giao dịch voucher.
  * Chọn nhiều tùy chọn cho **Service, Status**
  * **Khoảng thời gian**: Đặt khung thời gian cho các bản ghi bạn muốn xem bằng cách dùng **Ngày bắt đầu** và **Ngày kết thúc**.

## Xuất bản ghi ra Excel

Lưu ý rằng **các giao dịch hiển thị trong tab Lịch sử Credits bị giới hạn** và có thể không bao gồm toàn bộ lịch sử giao dịch. Tính năng **Export Excel** cho phép bạn nhanh chóng **tải xuống tất cả bản ghi giao dịch** để theo dõi, báo cáo hoặc kiểm tra dễ dàng hơn.

Làm theo hướng dẫn sau:
  1. Điều hướng đến tab **Credit History**.
  2. Chọn bộ lọc mong muốn:
     * **Top-up Credits**: Xuất tất cả giao dịch nạp tiền đang hiển thị.
     * **Voucher Credits**: Xuất tất cả giao dịch voucher đang hiển thị.
  3. Nhấn nút **Export Excel** ở góc trên bên phải của bảng.
  4. Một file Excel sẽ được **tự động tải xuống** thiết bị của bạn.
