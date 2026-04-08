---
id: "change-static-IP-in-Ubuntu-server"
title: "Đặt IP tĩnh trên Ubuntu Server"
description: "Hướng dẫn thay đổi địa chỉ IP tĩnh trên Ubuntu Server sau khi chỉnh sửa NIC trên FPT Cloud."
sidebar_label: "Đặt IP tĩnh trên Ubuntu Server"
sidebar_position: 3
---

# Đặt IP tĩnh trên Ubuntu Server

## Bước 1: Kiểm tra tình trạng hiện tại

Sau khi chỉnh sửa NIC, IP NIC là `132.0.0.190`.

[![Thông tin NIC của VM Ubuntu trên FPT Cloud Portal](/img/migrated/NIC-VM-ubuntu-1024x372-84e18337.png)](/img/migrated/NIC-VM-ubuntu-1024x372-84e18337.png)

1. Mở **Console** và đăng nhập vào hệ thống.
2. Nhập lệnh `ifconfig` để xem địa chỉ IP hiện tại.

[![Kết quả lệnh ifconfig trong Console của VM Ubuntu](/img/migrated/NIC-VM-ubuntu-console-949ea6c3.png)](/img/migrated/NIC-VM-ubuntu-console-949ea6c3.png)

## Bước 2: Mở file cấu hình mạng

Mở file `00-installer-config.yaml` bằng lệnh:

```bash
vi /etc/netplan/00-installer-config.yaml
```

[![File 00-installer-config.yaml mở trong trình soạn thảo vi](/img/migrated/Screenshot-2023-07-11-at-1.06.36-PM-c1e702aa.png)](/img/migrated/Screenshot-2023-07-11-at-1.06.36-PM-c1e702aa.png)

Nhấn phím `i` để chuyển sang chế độ Insert.

## Bước 3: Sửa các thông số cần thiết

Cập nhật địa chỉ IP, gateway và DNS theo cấu hình mới.

[![Chỉnh sửa thông số IP trong file cấu hình netplan](/img/migrated/Screenshot-2023-07-11-at-1.06.53-PM-68a5c578.png)](/img/migrated/Screenshot-2023-07-11-at-1.06.53-PM-68a5c578.png)

Nhấn `Esc`, nhập `:wq`, rồi nhấn `Enter` để lưu và thoát.

[![Lưu file cấu hình bằng lệnh :wq trong vi](/img/migrated/Screenshot-2023-07-11-at-1.07.26-PM-46cc3684.png)](/img/migrated/Screenshot-2023-07-11-at-1.07.26-PM-46cc3684.png)

## Bước 4: Áp dụng thay đổi

Chạy lệnh sau để cập nhật cấu hình mạng:

```bash
sudo netplan apply
```

[![Kết quả chạy lệnh sudo netplan apply](/img/migrated/Screenshot-2023-07-11-at-1.10.56-PM-0a072ee4.png)](/img/migrated/Screenshot-2023-07-11-at-1.10.56-PM-0a072ee4.png)

## Bước 5: Kiểm tra địa chỉ IP mới

Chạy lệnh `ifconfig` để xác nhận địa chỉ IP đã được cập nhật.

[![Kết quả ifconfig hiển thị IP mới sau khi áp dụng cấu hình](/img/migrated/Screenshot-2023-07-11-at-1.12.57-PM-223067ab.png)](/img/migrated/Screenshot-2023-07-11-at-1.12.57-PM-223067ab.png)

[![Xác nhận kết nối với địa chỉ IP tĩnh mới](/img/migrated/Screenshot-2023-07-11-at-1.13.18-PM-87f0f02a.png)](/img/migrated/Screenshot-2023-07-11-at-1.13.18-PM-87f0f02a.png)
