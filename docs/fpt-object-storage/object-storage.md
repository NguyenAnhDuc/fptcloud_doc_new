---
id: "object-storage"
title: "Giới thiệu về FPT Object Storage"
description: "FPT Object Storage là dịch vụ lưu trữ đám mây dành cho dữ liệu phi cấu trúc, tương thích hoàn toàn với giao thức Amazon S3."
sidebar_label: "Giới thiệu"
sidebar_position: "1"
---

# Giới thiệu về FPT Object Storage

**FPT Object Storage** là một dịch vụ lưu trữ đám mây cung cấp bởi FPT Cloud, được thiết kế để lưu trữ và quản lý dữ liệu phi cấu trúc như hình ảnh, video, tài liệu, và các tệp tin lớn khác. Dịch vụ mang đến khả năng lưu trữ dữ liệu trên quy mô lớn với độ tin cậy cao, tính khả dụng cao và khả năng mở rộng linh hoạt.

Được thiết kế và phát triển tương thích hoàn toàn với giao thức S3 của Amazon và Azure Blob, khách hàng có thể dễ dàng tích hợp với các ứng dụng và dịch vụ hiện có của doanh nghiệp, đồng thời mang lại sự linh hoạt và tiện lợi trong việc quản lý và lưu trữ dữ liệu.

[![overview](/img/migrated/2-FPT-Object-Storage-Service_anh-sp-1-f482e951.png)](/img/migrated/2-FPT-Object-Storage-Service_anh-sp-1-f482e951.png)

## Các đặc điểm chính

- **Khả năng mở rộng linh hoạt:** Đáp ứng yêu cầu lưu trữ dữ liệu lớn và có khả năng mở rộng theo nhu cầu mà không gặp giới hạn kỹ thuật.
- **Đảm bảo an toàn dữ liệu:** Dữ liệu được mã hóa cả khi lưu trữ và trong quá trình truyền tải. Hỗ trợ các tính năng nâng cao như versioning, SSE-C.
- **Khả năng tích hợp:** Tương thích với giao thức Amazon S3 và Azure Blob, cho phép kết nối qua S3 client, SDK và API phổ biến.
- **Quản lý truy cập chặt chẽ:** Hỗ trợ phân quyền qua FPT IAM, bucket policy, bucket ACL, object ACL và subuser.
- **Quản lý dễ dàng trên Unify Portal:** Giao diện trực quan của FPT Unify Portal giúp người dùng dễ dàng quản lý, theo dõi và thao tác với dữ liệu.
- **Tối ưu hóa chi phí:** Khách hàng chỉ trả chi phí cho tài nguyên thực tế sử dụng (Pay-As-You-Go).

## Lợi ích

- **Độ tin cậy cao:** Với hệ thống lưu trữ phân tán, dữ liệu luôn được bảo vệ và có thể truy cập bất cứ lúc nào, ngay cả khi xảy ra sự cố phần cứng.
- **Hiệu suất cao:** Được thiết kế để xử lý khối lượng dữ liệu lớn với tốc độ nhanh, đáp ứng yêu cầu về thời gian truy cập của các ứng dụng hiện đại.
- **Dễ sử dụng:** Giao diện quản lý trực quan, giúp người dùng dễ dàng thao tác và quản lý dữ liệu.

FPT Object Storage là giải pháp lý tưởng cho doanh nghiệp cần lưu trữ dữ liệu mạnh mẽ, an toàn và dễ dàng tích hợp với các hệ thống hiện có.

## Release note

### Object Storage version 2.6

- **Update UI/UX:** Cải thiện giao diện và trải nghiệm người dùng để thao tác thuận tiện và trực quan hơn.
- **Update region code in Access Key page:** Hiển thị mã vùng chính xác trên trang Access Key, hỗ trợ quản lý thông tin dễ dàng hơn.

### Object Storage version 2.5

Người dùng có thể sử dụng toàn bộ dịch vụ trên một giao diện duy nhất của FPT Cloud Portal thay vì phải sử dụng tại 2 portal giữa FPT Cloud và Cloudian. Giao diện đã được tối ưu hiển thị các thông số khi khởi tạo access key hay truy cập endpoint, giúp tăng cường độ bảo mật và dễ dàng sử dụng.

:::note
Dịch vụ này chỉ được kích hoạt bởi nhà cung cấp.
:::
