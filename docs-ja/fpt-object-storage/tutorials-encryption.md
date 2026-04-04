---
id: "tutorials-encryption"
title: "Tutorials Encryption"
description: "**Server-Side Encryption with Customer-Provided Keys (SSE-C)** là một tính năng trong **FPT Object Storage** giúp tăng c"
sidebar_label: "Tutorials Encryption"
sidebar_position: "8"
---

# Tutorials Encryption

## Server-Side Encryption with Customer-Provided Keys (SSE-C)
**Server-Side Encryption with Customer-Provided Keys (SSE-C)** là một tính năng trong **FPT Object Storage** giúp tăng cường bảo mật dữ liệu của bạn bằng cách sử dụng các khóa mã hóa do khách hàng cung cấp. Dưới đây là cách hoạt động và các điểm quan trọng của tính năng này:

### Cách Hoạt Động Của SSE-C
  1. **Tải lên Dữ liệu:**
     * Khi bạn tải lên một object, bạn cần cung cấp khóa mã hóa cùng với dữ liệu.
     * FPT Object Storage sử dụng khóa mã hóa này để mã hóa dữ liệu trước khi lưu trữ.
     * Sau khi mã hóa xong, khóa mã hóa sẽ bị tiêu hủy và không được lưu trữ lại trên hệ thống.
  2. **Tải xuống Dữ liệu:**
     * Khi bạn tải xuống dữ liệu, bạn cần cung cấp khóa mã hóa mà bạn đã sử dụng để mã hóa dữ liệu ban đầu.
     * FPT Object Storage sử dụng khóa này để giải mã dữ liệu và trả lại cho bạn.

### Các Điểm Quan Trọng
  * **Quản lý Khóa:**
    * Bạn hoàn toàn chịu trách nhiệm về việc quản lý khóa mã hóa của mình.
    * FPT Object Storage không lưu trữ khóa mã hóa của bạn. Nếu bạn mất khóa mã hóa, bạn sẽ không thể truy cập vào dữ liệu được mã hóa bằng khóa đó.
  * **Bảo mật:**
    * SSE-C cung cấp một lớp bảo vệ dữ liệu bổ sung, đặc biệt hữu ích cho các tổ chức yêu cầu tuân thủ quy định bảo mật nghiêm ngặt.
    * Khách hàng có khả năng kiểm soát hoàn toàn quyền truy cập vào các object quan trọng thông qua quản lý khóa mã hóa.
  * **Sử Dụng:**
    * Khi sử dụng SSE-C, bạn cần phải tự tạo, lưu trữ và bảo vệ khóa mã hóa của mình.
    * Đảm bảo rằng bạn có các quy trình bảo mật thích hợp để quản lý và bảo vệ các khóa mã hóa này.

SSE-C là một phương thức hiệu quả để bảo vệ dữ liệu nhạy cảm trong **FPT Object Storage** , mang lại sự kiểm soát tối đa cho khách hàng về quyền truy cập và bảo mật dữ liệu của họ.
