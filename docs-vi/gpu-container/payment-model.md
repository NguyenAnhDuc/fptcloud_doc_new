---
id: "payment-model"
title: "Payment Model"
description: "Pay-as-you-go (PAYG) là mô hình thanh toán linh hoạt, chỉ trả tiền cho các tài nguyên bạn thực sự sử dụng, không cần cam kết trước."
sidebar_label: "Payment Model"
sidebar_position: 14
---

# Payment Model

## PAYG
Pay-as-you-go (PAYG) là mô hình thanh toán linh hoạt, chỉ trả tiền cho các tài nguyên bạn thực sự sử dụng, không cần cam kết trước. Chi phí được tính dựa trên mức sử dụng thực tế, chẳng hạn như thời gian tính toán hoặc lưu trữ.

Ví dụ, nếu bạn thuê một container với một GPU H100 (15 CPU, 250 GB RAM, 1 GPU) với giá $2.31 mỗi giờ, chạy container trong 15 phút sẽ tốn $2.31 × 0.25 = $0.5775. Chúng tôi sẽ trừ số tiền này trực tiếp từ số dư của bạn ngay sau khi hoàn thành tính toán mỗi 15 phút. Bạn có thể xem lịch sử thanh toán chi tiết bằng cách nhấp vào "Credit History" trong trang Billing trên console.

## Chu kỳ thanh toán

Chi phí được tính và trừ từ số dư của bạn **mỗi 15 phút** trong suốt thời gian container đang chạy. Ngoài ra, chi phí lưu trữ liên tục được tính theo từng giây khi container tồn tại, bất kể trạng thái chạy hay dừng.

Xem thêm thông tin chi tiết tại [Billing Overview](./billing-overview.md).
