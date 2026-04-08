---
id: "payment-invoice"
title: "Hóa đơn thanh toán"
description: "Quản lý thông tin billing, lịch sử thanh toán và hóa đơn trong FPT AI Factory."
sidebar_label: "Hóa đơn thanh toán"
sidebar_position: 17
---

# Hóa đơn thanh toán

:::note
Tính năng này hiện chỉ áp dụng cho **khu vực Việt Nam**.
:::

## Thông tin billing

Trước khi có thể nạp credits, bạn phải cung cấp **Thông tin billing** phục vụ mục đích lập hóa đơn và thuế.

## Nạp credits

1. Từ menu bên trái, đến **Account** → **Billing**, hoặc trên **Trang chủ FPT AI Factory**, nhấn **Add Credit**.
2. Nếu thông tin billing chưa được cung cấp, một pop-up sẽ xuất hiện yêu cầu bạn điền thông tin.

![Pop-up thông tin billing khi nạp credits](/img/migrated/image2025-9-10_10-48-26-ae626517.png)

## Cập nhật thông tin billing

Nếu bạn cần cập nhật thông tin billing sau này:

1. Từ menu bên trái, đến **Account** → **Billing**.
2. Mở tab **Settings**.
3. Nhấn biểu tượng **Edit** để cập nhật thông tin.

![Màn hình chỉnh sửa cài đặt billing](/img/migrated/image2025-9-8_23-26-45-eef4a774.png)

:::tip
Thông tin billing chỉ cần nhập một lần. Nếu bạn cập nhật thông tin billing sau này, các thay đổi sẽ áp dụng cho các hóa đơn và thanh toán trong tương lai. Địa chỉ email được cung cấp trong thông tin billing sẽ nhận hóa đơn thuế Việt Nam.
:::

:::note
Nếu bạn chọn Việt Nam là quốc gia, đơn vị tiền tệ của bạn sẽ tự động được đặt thành **VND (đồng Việt Nam)**.
:::

## Lịch sử thanh toán

Mỗi lần bạn nạp credits, một giao dịch thanh toán sẽ được tạo.
Bạn có thể xem lại tất cả thanh toán trước đây bằng cách điều hướng đến **Account** → **Billing** → **Payment History**.

![Trang Lịch sử thanh toán](/img/migrated/image2025-9-10_10-54-3-b3bee087.png)

| Trường | Mô tả |
|---|---|
| **Date** | Ngày và giờ của giao dịch. |
| **Source** | Cổng thanh toán được sử dụng cho giao dịch. |
| **Amount** | Số tiền đã thanh toán. |
| **Payment Status** | Trạng thái của thanh toán (ví dụ: Paid, Failed). |
| **Recipient Email** | Địa chỉ email được cung cấp trong Thông tin billing tại thời điểm thanh toán. |
| **Invoice Status** | Tiến độ tạo và gửi hóa đơn (ví dụ: Processing, Ready). |
| **Invoice** | Tải xuống file hóa đơn thương mại chính thức (hoặc biên lai mua hàng). |

## Hóa đơn

Có hai loại hóa đơn trong FPT AI Factory:

1. **Hóa đơn thuế Việt Nam** — Được phát hành để tuân thủ quy định thuế của Việt Nam. Gửi đến địa chỉ email được chỉ định trong thông tin billing của bạn.
2. **Hóa đơn thương mại (hoặc biên lai mua hàng)** — Được phát hành làm bằng chứng thanh toán cho mục đích kế toán hoặc kinh doanh. Có thể tải xuống từ trang **Payment History**.
