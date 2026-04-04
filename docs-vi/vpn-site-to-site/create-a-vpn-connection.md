---
id: "create-a-vpn-connection"
title: "Tạo VPN Connection"
description: "Hướng dẫn tạo VPN Connection mới trên FPT Cloud Portal."
sidebar_label: "Tạo VPN Connection"
sidebar_position: "19"
---

# Tạo VPN Connection

1. Tại màn hình **VPN Connection List**, nhấn **Create VPN Connection**.

[![Tạo VPN Connection](/img/migrated/image-1744180675487-bc2332e2.png)](/img/migrated/image-1744180675487-bc2332e2.png)

2. Nhập thông tin VPN Gateway:

| **Trường** | **Mô tả** |
| --- | --- |
| **VPN name** | Tên kết nối VPN. Đặt tên dễ nhớ (ví dụ: `vpn_to_aws`). |
| **Description** | Mô tả ngắn (tùy chọn) để phân biệt các kết nối. |
| **Pre-shared key** | Khóa bảo mật dùng chung giữa hai đầu (có thể nhập thủ công hoặc để hệ thống tạo). |
| **Local IP Public** | Địa chỉ IP public phía FPT Cloud. |
| **Local private networks** | Dải mạng nội bộ cần kết nối (nhập theo định dạng CIDR; hỗ trợ nhiều dải). |
| **IPSec policy** | Chính sách mã hóa cho Phase 2. |
| **IKE policy** | Chính sách mã hóa cho Phase 1. |
| **Customer gateway name** | Customer Gateway sử dụng cho kết nối này. |
| **Delay** | Thời gian chờ giữa các lần thử lại DPD (tính bằng giây). |
| **Max failures** | Số lần thử lại tối đa trước khi đánh dấu kết nối là thất bại. |

:::note
Để đảm bảo kết nối ổn định, cấu hình tham số **DPD Delay** và **Max Failure** phía FPT Cloud khớp với thiết bị đối tác.

Giá trị khuyến nghị cho các provider phổ biến:

| Provider | Delay | Max failures |
| --- | --- | --- |
| AWS | 15 | 3 |
| Fortigate | 15 | 3 |

Nếu bạn điều chỉnh tham số ở phía provider, hãy cập nhật cài đặt tương ứng trên FPT Cloud để đảm bảo tương thích.
:::

3. Nhấn **Create VPN Connection** để hoàn tất.

[![VPN Connection đã tạo](/img/migrated/6219884231644005829-c20fbd72.jpg)](/img/migrated/6219884231644005829-c20fbd72.jpg)
