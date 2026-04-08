---
id: "change-static-IP-in-window-server"
title: "Đặt IP tĩnh trên Windows Server"
description: "Hướng dẫn thay đổi địa chỉ IP tĩnh trên Windows Server sau khi chỉnh sửa NIC trên FPT Cloud."
sidebar_label: "Đặt IP tĩnh trên Windows Server"
sidebar_position: 4
---

# Đặt IP tĩnh trên Windows Server

## Bước 1: Kiểm tra tình trạng hiện tại

Sau khi chỉnh sửa NIC, IP NIC là `132.0.0.182`.

[![Thông tin NIC của VM Windows 2012 trên FPT Cloud Portal](/img/migrated/NIC-VM-window-2012-1024x372-cdd0fc49.png)](/img/migrated/NIC-VM-window-2012-1024x372-cdd0fc49.png)

1. Mở **Console** và đăng nhập vào hệ thống.
2. Mở **PowerShell** hoặc **Command Prompt**, nhập `ipconfig`, rồi nhấn **Enter** để xem địa chỉ IP hiện tại.

[![Kết quả lệnh ipconfig trong PowerShell của VM Windows](/img/migrated/NIC-VM-window-power-shell-1b543bec.png)](/img/migrated/NIC-VM-window-power-shell-1b543bec.png)

## Bước 2: Mở Network Connections

Nhấn **Win + R**, nhập `ncpa.cpl`, rồi nhấn **Enter**.

[![Hộp thoại Run với lệnh ncpa.cpl](/img/migrated/NIC-VM-window-run-ncpa.cpl_-4147bd62.png)](/img/migrated/NIC-VM-window-run-ncpa.cpl_-4147bd62.png)

## Bước 3: Mở Properties của card mạng

Nhấn chuột phải vào card mạng cần thay đổi, chọn **Properties**.

[![Danh sách card mạng với menu chuột phải và tùy chọn Properties](/img/migrated/NIC-VM-window-network-setting-ee7e82cd.png)](/img/migrated/NIC-VM-window-network-setting-ee7e82cd.png)

## Bước 4: Cập nhật thông số IP

Chọn **Internet Protocol Version 4 (TCP/IPv4)** → **Properties**. Nhập địa chỉ IP, Subnet mask, Default gateway và DNS server theo cấu hình mới. Nhấn **OK** để lưu.

[![Form cấu hình IPv4 với các thông số IP tĩnh mới](/img/migrated/NIC-VM-window-network-setting-config-IPv-ab0305c9.png)](/img/migrated/NIC-VM-window-network-setting-config-IPv-ab0305c9.png)

## Bước 5: Kiểm tra và ping thử

Mở lại **PowerShell** hoặc **Command Prompt** để kiểm tra cấu hình mới và ping thử đến một địa chỉ mạng.

[![Kết quả kiểm tra IP mới và ping test trong PowerShell](/img/migrated/NIC-VM-window-network-setting-config-IPv-9b70a68d.png)](/img/migrated/NIC-VM-window-network-setting-config-IPv-9b70a68d.png)
