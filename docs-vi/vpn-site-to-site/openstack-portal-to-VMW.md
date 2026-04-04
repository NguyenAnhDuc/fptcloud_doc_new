---
id: "openstack-portal-to-VMW"
title: "Cấu hình VPN Site-to-Site giữa OpenStack và VMware"
description: "Hướng dẫn cấu hình kết nối VPN Site-to-Site giữa FPT Cloud OpenStack và VMware Cloud."
sidebar_label: "Cấu hình với VMware"
sidebar_position: "17"
---

# Cấu hình VPN Site-to-Site giữa OpenStack và VMware

Hướng dẫn này sử dụng topology dưới đây làm ví dụ.

[![Topology](/img/migrated/image-1765791265680-2f6051f0.png)](/img/migrated/image-1765791265680-2f6051f0.png)

## Bước 1: Cấu hình VPN Site-to-Site trên FPT Cloud Portal

Truy cập [https://console.fptcloud.com](https://console.fptcloud.com) và tạo VPN Site-to-Site.

**Tạo Customer Gateway:**

- **Remote IP public**: Floating IP của VPN gateway VMware
- **Remote private network**: Dải LAN subnet để kết nối với VMware

[![Customer Gateway](/img/migrated/image-1765791539886-a1399dc6.png)](/img/migrated/image-1765791539886-a1399dc6.png)

**Tạo VPN Connection:**

:::note
Lưu lại giá trị **Pre-shared key** — bạn sẽ cần khi cấu hình kết nối VPN trên VMware.
:::

VPN Connection có 3 phần chính:

- **General information** — thông tin chung về kết nối
- **Remote VPN Information** — cấu hình mã hóa và thông tin phía khách hàng
- **Dead Peer Detection** — cài đặt tự động thử lại

**Phần 1: General information**

[![General information](/img/migrated/image-1765791650959-d54cc64b.png)](/img/migrated/image-1765791650959-d54cc64b.png)

**Phần 2: Remote VPN information**

[![Remote VPN information](/img/migrated/image-1765791876602-bfc3ce69.png)](/img/migrated/image-1765791876602-bfc3ce69.png)

Nếu bạn chọn **Providers = "others"**, thực hiện theo các bước sau:

1. Đặt tên provider là `VMWare`.
2. Điền các tham số IKE và IPSec như sau:

**IKE:**

| Tham số | Giá trị |
| --- | --- |
| Encryption algorithm | aes-256 |
| Authorization algorithm | sha256 |
| IKE version | ikev2 |
| Lifetime units | seconds |
| Lifetime value | 28800 |
| DH Group | GROUP_14 |
| Phase 1 negotiation mode | main |

**IPsec:**

| Tham số | Giá trị |
| --- | --- |
| Encapsulation mode | tunnel |
| Encryption algorithm | aes-256 |
| Authorization algorithm | sha256 |
| Lifetime units | seconds |
| Lifetime value | 3600 |
| Perfect Forward Secrecy (PFS) | GROUP_14 |
| Transform protocol | esp |

**Phần 3: Dead Peer Detection**

[![Dead Peer Detection](/img/migrated/image-1765792370389-be62aa14.png)](/img/migrated/image-1765792370389-be62aa14.png)

Sau khi điền đầy đủ thông tin, nhấn **Create VPN Connection**.

## Bước 2: Cấu hình VPN trên VMware Cloud

1. Truy cập hệ thống VMware và điền thông tin vào các trường **Endpoint Configuration**.

[![Endpoint Configuration](/img/migrated/image-1765792537442-cfd45c7d.png)](/img/migrated/image-1765792537442-cfd45c7d.png)

2. Sau khi tạo, chọn **Customize Security Profile** để chỉnh sửa các chính sách IKE và IPSec cho khớp với cấu hình ở Bước 1.

[![Customize Security Profile](/img/migrated/image-1765792592112-2661f855.png)](/img/migrated/image-1765792592112-2661f855.png)

3. Chọn **View statistics** để kiểm tra trạng thái kết nối. Trạng thái **UP** cho biết hai site đã kết nối thành công.

[![View statistics](/img/migrated/image-1765792630730-24ebf3f1.png)](/img/migrated/image-1765792630730-24ebf3f1.png) [![Kết nối UP](/img/migrated/image-1765792651631-076d8ebc.png)](/img/migrated/image-1765792651631-076d8ebc.png)

## Bước 3: Kiểm tra kết nối

Ping từ OpenStack VM đến VMware VM:

[![Ping OSP đến VMW](/img/migrated/image-1765792700896-cc19d07e.png)](/img/migrated/image-1765792700896-cc19d07e.png)

Ping từ VMware VM đến OpenStack VM:

[![Ping VMW đến OSP](/img/migrated/image-1765792717595-c17872cc.png)](/img/migrated/image-1765792717595-c17872cc.png)
