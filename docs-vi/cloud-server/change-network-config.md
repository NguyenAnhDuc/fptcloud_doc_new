---
id: "change-network-config"
title: "Thay đổi Network Config"
description: "Cấu hình lại file network config sau khi thay đổi card NIC."
sidebar_label: "Thay đổi Network Config"
sidebar_position: 65
pagination_next: null
---

# Thay đổi Network Config

Sau khi thay đổi card NIC — chẳng hạn như thêm card mới, đổi địa chỉ IP hoặc reset địa chỉ MAC — bạn có thể cần cập nhật file cấu hình mạng bên trong hệ điều hành của máy ảo để áp dụng các thay đổi một cách chính xác.

## Khi nào cần cập nhật network config

Cập nhật file cấu hình mạng khi bạn:

- Thêm card NIC mới vào máy ảo.
- Thay đổi địa chỉ IP tĩnh trên card NIC.
- Reset địa chỉ MAC của card NIC.
- Chuyển một card thành Primary.

## Cập nhật network config trên Linux

1. Kết nối vào máy ảo qua SSH.
2. Mở file cấu hình mạng phù hợp với bản phân phối của bạn:
   - **Ubuntu/Debian**: `/etc/netplan/*.yaml`
   - **CentOS/RHEL**: `/etc/sysconfig/network-scripts/ifcfg-<interface>`
3. Cập nhật địa chỉ IP, subnet mask, gateway và cài đặt DNS cho phù hợp với cấu hình NIC mới.
4. Áp dụng các thay đổi:
   - **Ubuntu/Debian**: `sudo netplan apply`
   - **CentOS/RHEL**: `sudo systemctl restart network`

## Cập nhật network config trên Windows

1. Kết nối vào máy ảo qua RDP.
2. Mở **Control Panel** → **Network and Sharing Center** → **Change adapter settings**.
3. Nhấp chuột phải vào bộ điều hợp mạng và chọn **Properties**.
4. Chọn **Internet Protocol Version 4 (TCP/IP)** và nhấn **Properties**.
5. Cập nhật địa chỉ IP, subnet mask, gateway và cài đặt máy chủ DNS.
6. Nhấn **OK** để áp dụng.

:::tip
Sau khi cập nhật cấu hình mạng, hãy kiểm tra kết nối bằng cách ping tới gateway hoặc một địa chỉ bên ngoài.
:::
