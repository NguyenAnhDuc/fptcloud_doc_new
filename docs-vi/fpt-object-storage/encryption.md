---
id: "encryption"
title: "Mã hóa (SSE-C)"
description: "Hướng dẫn sử dụng Server-Side Encryption with Customer-Provided Keys (SSE-C) trong FPT Object Storage."
sidebar_label: "Mã hóa (SSE-C)"
sidebar_position: 8
pagination_next: null
---

# Mã hóa (SSE-C)

## Server-Side Encryption with Customer-Provided Keys (SSE-C)

**Server-Side Encryption with Customer-Provided Keys (SSE-C)** là một tính năng trong **FPT Object Storage** giúp tăng cường bảo mật dữ liệu bằng cách sử dụng các khóa mã hóa do khách hàng cung cấp.

### Cách hoạt động của SSE-C

1. **Tải lên dữ liệu:**
   - Khi bạn tải lên một object, bạn cần cung cấp khóa mã hóa cùng với dữ liệu.
   - FPT Object Storage sử dụng khóa mã hóa này để mã hóa dữ liệu trước khi lưu trữ.
   - Sau khi mã hóa xong, khóa mã hóa sẽ bị tiêu hủy và không được lưu trữ lại trên hệ thống.

2. **Tải xuống dữ liệu:**
   - Khi bạn tải xuống dữ liệu, bạn cần cung cấp khóa mã hóa mà bạn đã sử dụng để mã hóa dữ liệu ban đầu.
   - FPT Object Storage sử dụng khóa này để giải mã dữ liệu và trả lại cho bạn.

### Các điểm quan trọng

- **Quản lý khóa:**
  - Bạn hoàn toàn chịu trách nhiệm về việc quản lý khóa mã hóa của mình.
  - FPT Object Storage không lưu trữ khóa mã hóa của bạn. Nếu bạn mất khóa mã hóa, bạn sẽ không thể truy cập vào dữ liệu được mã hóa bằng khóa đó.

- **Bảo mật:**
  - SSE-C cung cấp một lớp bảo vệ dữ liệu bổ sung, đặc biệt hữu ích cho các tổ chức yêu cầu tuân thủ quy định bảo mật nghiêm ngặt.
  - Khách hàng có khả năng kiểm soát hoàn toàn quyền truy cập vào các object quan trọng thông qua quản lý khóa mã hóa.

- **Sử dụng:**
  - Khi sử dụng SSE-C, bạn cần phải tự tạo, lưu trữ và bảo vệ khóa mã hóa của mình.
  - Đảm bảo rằng bạn có các quy trình bảo mật thích hợp để quản lý và bảo vệ các khóa mã hóa này.

SSE-C là một phương thức hiệu quả để bảo vệ dữ liệu nhạy cảm trong **FPT Object Storage**, mang lại sự kiểm soát tối đa cho khách hàng về quyền truy cập và bảo mật dữ liệu của họ.
