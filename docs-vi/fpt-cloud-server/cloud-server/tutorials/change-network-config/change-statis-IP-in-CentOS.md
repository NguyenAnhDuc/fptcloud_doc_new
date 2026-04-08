---
id: "change-statis-IP-in-CentOS"
title: "Đặt IP tĩnh trên CentOS"
description: "Hướng dẫn thay đổi địa chỉ IP tĩnh trên CentOS sau khi chỉnh sửa NIC trên FPT Cloud."
sidebar_label: "Đặt IP tĩnh trên CentOS"
sidebar_position: 5
---

# Đặt IP tĩnh trên CentOS

## Bước 1: Kiểm tra tình trạng hiện tại

Sau khi chỉnh sửa NIC, IP NIC là `132.0.0.70`.

[![Thông tin NIC của VM CentOS trên FPT Cloud Portal](/img/migrated/NIC-VM-Centos-1024x372-9c72aa69.png)](/img/migrated/NIC-VM-Centos-1024x372-9c72aa69.png)

Mở **Console** và kiểm tra địa chỉ IP hiện tại bằng lệnh:

```bash
ip a
```

[![Kết quả lệnh ip a trong Console của VM CentOS](/img/migrated/NIC-VM-CentOS-console-1024x311-3cb187fe.png)](/img/migrated/NIC-VM-CentOS-console-1024x311-3cb187fe.png)

## Bước 2: Mở file cấu hình network interface

Mở file `ifcfg-eth0` bằng lệnh:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

[![File ifcfg-eth0 mở trong trình soạn thảo vi](/img/migrated/Screenshot-2023-07-11-at-1.25.01-PM-ca5cfd61.png)](/img/migrated/Screenshot-2023-07-11-at-1.25.01-PM-ca5cfd61.png)

## Bước 3: Sửa thông số cấu hình

1. Nhấn phím `i` để chuyển sang chế độ Insert.
2. Cập nhật các thông số IP, gateway và DNS theo cấu hình mới.

[![Chỉnh sửa thông số IP trong file ifcfg-eth0](/img/migrated/NIC-VM-CentOS-console-insert-4b7c2644.png)](/img/migrated/NIC-VM-CentOS-console-insert-4b7c2644.png)

3. Nhấn `Esc`, nhập `:wq`, rồi nhấn `Enter` để lưu và thoát.

[![Lưu file cấu hình bằng lệnh :wq trong vi](/img/migrated/NIC-VM-CentOS-console-insert-wq-baea240e.png)](/img/migrated/NIC-VM-CentOS-console-insert-wq-baea240e.png)

## Bước 4: Khởi động lại dịch vụ mạng

Chạy lệnh sau để áp dụng thay đổi:

```bash
service network restart
```

[![Kết quả khởi động lại dịch vụ mạng trên CentOS](/img/migrated/Screenshot-2023-07-11-at-1.28.27-PM-418b264e.png)](/img/migrated/Screenshot-2023-07-11-at-1.28.27-PM-418b264e.png)

## Bước 5: Kiểm tra cấu hình và ping thử

Chạy lại lệnh `ip a` để xác nhận địa chỉ IP đã được cập nhật, sau đó ping thử để kiểm tra kết nối.

[![Kết quả kiểm tra IP mới và ping test trên CentOS](/img/migrated/Screenshot-2023-07-11-at-1.28.45-PM-b786390c.png)](/img/migrated/Screenshot-2023-07-11-at-1.28.45-PM-b786390c.png)
