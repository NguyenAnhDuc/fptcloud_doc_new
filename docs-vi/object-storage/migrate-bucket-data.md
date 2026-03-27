---
id: "migrate-bucket-data"
title: "tương thích với AWS S3"
description: "FPT Object Storage được phát triển theo chuẩn **tương thích với AWS S3** , cho phép người dùng dễ dàng **chuyển dữ liệu*"
sidebar_label: "tương thích với AWS S3"
sidebar_position: 14
---

# Migrate Bucket Data

FPT Object Storage được phát triển theo chuẩn **tương thích với AWS S3** , cho phép người dùng dễ dàng **chuyển dữ liệu** từ bất kỳ nhà cung cấp Object Storage nào sang hệ thống của FPT một cách nguyên vẹn.
Tính năng **Migrate Bucket Data** được thiết kế để đơn giản hóa quy trình chuyển dữ liệu. Người dùng chỉ cần khai báo các thông tin cần thiết, hệ thống sẽ tự động thực hiện phần còn lại.
Trước khi chuyển dữ liệu, bạn cần đọc kỹ một số lưu ý sau:
**1. Thu thập thông tin xác thực từ nhà cung cấp S3:** Trước khi bắt đầu, đảm bảo bạn đã thu thập đủ thông tin xác thực từ nhà cung cấp S3 nơi chứa Source Bucket, bao gồm Endpoint và Access Key.
**2. Liên hệ với nhà cung cấp S3 để tối ưu băng thông và QoS:** Do quá trình chuyển dữ liệu sẽ diễn ra qua Internet, vì vậy tốc độ chuyển có thể sẽ phụ thuộc vào băng thông của S3 Provider chứa Source Bucket. Bạn cần liên hệ với S3 Provider đấy và yêu cầu tăng băng thông + QoS của bucket để quá trình thực hiện nhanh hơn.
**3. Hạn chế tác động vào bucket và object trong quá trình chuyển dữ liệu:** Tính năng Migrate bucket data sẽ capture lại danh sách object trong bucket khi tạo job và sẽ chỉ chuyển theo danh sách này. Vì vậy, trong quá trình chuyển dữ liệu bạn nên hạn chế tác động vào các object trong bucket.
  * Nếu thêm object sau khi tạo job => Object đấy sẽ không được chuyển.
  * Nếu xóa object sau khi tạo job => Job vẫn sẽ chạy và bỏ qua object bị xóa, nhưng job sẽ ở trạng thái error.

**4. Quản lý thông tin Access Key một cách an toàn:** Thông tin Access Key sẽ được lưu tại máy chủ của FPT Cloud trong quá trình job chạy và được xóa khỏi hệ thống ngay khi job hoàn thành. Tuy nhiên để đảm bảo bảo mật, bạn chỉ nên tạo các Access key có quyền giới hạn và deactivate ngay sau khi job hoàn thành.
**Hướng dẫn:**
**Bước 1:** Truy cập **Object Storage Management** , mở tab **Migrate Bucket** , sau đó chọn **Add Migrate Job**.
**Bước 2:** Khai báo **Source Config**
  * **Provider:** Chọn nhà cung cấp Object Storage, tùy chọn S3 Compatible sẽ hoạt động với hầu hết các provider trên thị trường hiện tại.
  * **Endpoint:** Địa chỉ endpoint của Source bucket
  * **Region:** Region của Source bucket
  * **Access Key/Secret Key:** Cặp Access Key.

**Bước 3:** Chọn **Source Bucket**
**Bước 4:** Chọn **Destination Bucket**
Chọn region trên FPT Object Storage và bucket chứa dữ liệu.
**Bước 5:** Confirm thông tin và chọn **Create**.
Hệ thống sẽ tự động bắt đầu quá trình chuyển dữ liệu về. Trong suốt quá trình này, bạn **không được xoá Access Key đã khai báo** , tránh làm gián đoạn hoặc gây lỗi job.