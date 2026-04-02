---
id: "ネットワーク ACL"
title: "Tổng quan Network ACL"
description: "Network ACL (Access Control List) hay NACL là phần quan trọng trong bảo mật mạng"
sidebar_label: "Tổng quan Network ACL"
sidebar_position: 11
---

# Tổng quan Network ACL

Network ACL (Access Control List) hay NACL là phần quan trọng trong bảo mật mạng. Nó giúp bạn kiểm soát và quản lý luồng traffic vào/ra khỏi subnet bằng cách áp dụng các rule cho phép hoặc từ chối truy cập.

- Network ACL được tạo tự động cùng với subnet.
- Mỗi subnet phải được liên kết với một NACL.
- NACL chứa các rule inbound và outbound. Giá trị độ ưu tiên được đánh giá theo thứ tự tăng dần, và khi tìm thấy kết quả khớp, các rule tiếp theo sẽ không được đánh giá nữa.
- **Mỗi NACL có giới hạn tối đa 100 rule (cả rule inbound và outbound).**

# Network ACL rule gồm các thành phần cơ bản sau

Bạn có thể thay đổi Network ACL mặc định bằng cách thêm hoặc xóa rule. Các thay đổi đối với rule Network ACL sẽ tự động áp dụng cho subnet được liên kết.

Các thành phần của Network ACL rule gồm:

**1. Độ ưu tiên**
Rule được xử lý theo thứ tự số độ ưu tiên tăng dần. Khi một rule khớp với traffic, rule đó được áp dụng dù có rule ưu tiên cao hơn đang xung đột. Hệ thống tự động tăng số độ ưu tiên, nhưng bạn có thể thay đổi số đó miễn là không trùng với số hiện có.

**2. Loại**
Chỉ định loại traffic như HTTP, HTTPS, ALL.

**3. Giao thức**
NACL hỗ trợ TCP, UDP, ICMP hoặc bất kỳ giao thức nào.

**4. Cổng**
Cổng cụ thể cho traffic từ 1 đến 65535.

**5. Nguồn**
Đối với rule inbound, chỉ định nguồn gốc của traffic (dải CIDR).

**6. Destination**
Đối với rule outbound, chỉ định đích đến của traffic (dải CIDR).

**7. Traffic Action**
Traffic được chỉ định sẽ được cho phép hoặc từ chối.

**Thông báo**
- Rule mặc định được tạo tự động trong NACL cho phép tất cả outbound traffic và có thể xóa.

| Độ ưu tiên | Loại | Giao thức | Cổng | Nguồn | Traffic Action |
| --- | --- | --- | --- | --- | --- |
| 100 | ALL | ALL | ALL | 0.0.0.0/0 | ALLOW |

- Nếu bạn xóa rule mặc định trên, cần thêm các outbound rule sau để tạo và triển khai server:

| Độ ưu tiên | Loại | Giao thức | Cổng | Nguồn | Traffic Action |
| --- | --- | --- | --- | --- | --- |
| 1 | HTTP | TCP | 80 | 0.0.0.0/0 | ALLOW |
| 2 | HTTPS | TCP | 443 | 0.0.0.0/0 | ALLOW |
| 3 | DNS (UDP) | UDP | 53 | 0.0.0.0/0 | ALLOW |

# Những gì bạn có thể làm với Network ACL

## Tạo rule mới

Tạo thêm Network ACL để cho phép (ALLOW) hoặc từ chối (DENY) tất cả hoặc một số loại inbound và outbound traffic cụ thể.

Để tạo một hoặc nhiều Network ACL rule, thực hiện theo các bước sau:

1. Đăng nhập tài khoản FPT Cloud và chọn **tenant, region, VPC** (nếu có nhiều).
2. Vào **AI Infrastructure/Network ACL** trong sidebar.
3. Chọn Network ACL bằng cách nhấn vào **tên NACL** hoặc **Action/Manage rule** trong danh sách.
4. Chọn **tab Outbound hoặc Inbound** (tùy loại rule traffic bạn muốn tạo).
5. Nhấn nút **Create new rule**.
6. Điền vào các trường độ ưu tiên, loại, giao thức, cổng, nguồn/đích và traffic action.
7. Bạn có thể tạo nhiều rule mới rồi chọn **Apply** để lưu thay đổi.

## Chỉnh sửa rule hiện có

Để chỉnh sửa một hoặc nhiều Network ACL rule, thực hiện theo các bước sau:

1. Chọn Network ACL bằng cách nhấn vào tên NACL hoặc Action/Manage rule trong danh sách.
2. Nhấn biểu tượng chỉnh sửa của rule muốn chỉnh sửa.
3. Chỉnh sửa giá trị rule theo ý muốn.
4. Bạn có thể lặp lại và thay đổi nhiều rule hiện có rồi chọn Apply để lưu thay đổi.

## Xóa rule

Để xóa một hoặc nhiều Network ACL rule, thực hiện theo các bước sau:

1. Chọn Network ACL bằng cách nhấn vào tên NACL hoặc Action/Manage rule trong danh sách.
2. Nhấn biểu tượng xóa của rule muốn xóa.
3. Bạn có thể lặp lại và xóa nhiều rule hiện có rồi chọn "Apply" để lưu thay đổi.
