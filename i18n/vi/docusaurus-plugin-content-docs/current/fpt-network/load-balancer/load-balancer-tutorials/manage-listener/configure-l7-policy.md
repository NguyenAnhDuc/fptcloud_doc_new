---
id: "configure-l7-policy"
title: "Cấu hình L7 policy cho Listener"
description: "Hướng dẫn tạo, cập nhật và quản lý L7 policy và L7 rule cho Listener của Load Balancer trên FPT Cloud."
sidebar_label: "Cấu hình L7 policy"
sidebar_position: 5
---

# Cấu hình L7 policy cho Listener

**L7 Policy** kiểm soát và định tuyến traffic đến các máy chủ backend. Một L7 Policy là tập hợp các **L7 Rule** kết hợp thành chính sách định tuyến layer-7 cho các request HTTP/HTTPS. Mỗi policy gồm hai thành phần:

- **Condition**: Đánh giá các request đến.
- **Action**: Được áp dụng khi request khớp với điều kiện.

## Tạo L7 policy

**Bước 1:** Trong danh sách Listener, nhấn vào Listener cần cấu hình.

**Bước 2:** Chọn tab **L7 Policy**, sau đó nhấn **Add Policy**.

**Bước 3:** Nhập thông tin L7 Policy:

- **Policy name**: Nhập tên cho policy.
- **Policy action**:
  - **Reject**: Từ chối truy cập vào máy chủ khi request khớp điều kiện.
  - **Redirect to URL**: Chuyển hướng request phù hợp đến một URL cụ thể với mã phản hồi HTTP. Mã hợp lệ: 301, 302, 303, 307 hoặc 308.
  - **Redirect to pool**: Chuyển tiếp request phù hợp đến Server Pool được chọn.
- **Position**: Mức độ ưu tiên của policy. Số vị trí càng nhỏ thì ưu tiên càng cao.

Nhấn biểu tượng **tick** để lưu L7 Rule, hoặc biểu tượng **delete** để xóa.

## Cập nhật L7 policy

Trong danh sách L7 Policy, nhấn biểu tượng **bút chì** để chỉnh sửa policy. Bạn có thể cập nhật:

- **Policy name**
- **Policy action** (Reject, Redirect to URL, Redirect to pool)
- **Redirected HTTP code** (cho action Redirect to URL): 301, 302, 303, 307 hoặc 308
- **Position**

Nhấn biểu tượng **tick** để lưu.

Sau khi cập nhật L7 Policy, thêm L7 Rule như sau:

**Bước 1:** Nhấn vào policy để mở rộng.

**Bước 2:** Nhấn **Add L7 rule** và nhập thông tin:

- **Type**:
  - **Host name**: Khớp với hostname HTTP/1.1.
  - **Path**: Khớp với một phần của HTTP URI.
  - **File**: Khớp với phần cuối của URI (ví dụ: `.txt`, `.jpg`).
  - **Header**: Tìm kiếm header được định nghĩa trong trường key và so sánh với value.
  - **Cookie**: Tìm kiếm cookie được định nghĩa trong trường key và so sánh với value.
- **Compare type**:
  - **Regex**: Trường khớp với biểu thức chính quy.
  - **Equal to**: Trường khớp chính xác với chuỗi được cung cấp.
  - **Starts with**: Trường bắt đầu bằng chuỗi được cung cấp.
  - **Ends with**: Trường kết thúc bằng chuỗi được cung cấp.
  - **Contains**: Trường chứa chuỗi được cung cấp.
- **Key**: Với loại **Header** hoặc **Cookie** — key để xác định header hoặc cookie cần so sánh.
- **Value**: Giá trị để so sánh.
- **Invert**: Yes/No — nếu Yes, điều kiện rule là true khi phép so sánh **không** khớp.

Nhấn biểu tượng **tick** để lưu rule hoặc biểu tượng **delete** để xóa.

Để chỉnh sửa L7 Rule hiện có, nhấn biểu tượng **bút chì** trên rule đó.
