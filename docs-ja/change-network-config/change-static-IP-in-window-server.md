---
id: "change-static-IP-in-window-server"
title: "Change Static ip in Window Server"
sidebar_label: "Change Static ip in Window Server"
sidebar_position: "4"
---

# Change Static ip in Window Server

**ステップ 1:** Kiểm tra tình trạng hiện tại 
Sau khi edit NIC, IP NIC là 132.0.0.182 
[![NIC VM window 2012](/img/migrated/NIC-VM-window-2012-1024x372-cdd0fc49.png)](/img/migrated/NIC-VM-window-2012-1024x372-cdd0fc49.png)
  * Bấm vào Console và đăng nhập vào hệ thống
  * Vào Power Shell hoặc Comand Line – Nhập “ipconfig” – Enter

[![NIC VM window power shell](/img/migrated/NIC-VM-window-power-shell-1b543bec.png)](/img/migrated/NIC-VM-window-power-shell-1b543bec.png)
**ステップ 2** : vào Run – Nhập “ncpa.cpl” 
[![NIC VM window run ncpa.cpl](/img/migrated/NIC-VM-window-run-ncpa.cpl_-4147bd62.png)](/img/migrated/NIC-VM-window-run-ncpa.cpl_-4147bd62.png)
**ステップ 3:** Phải chuột vào card mạng cần thay đổi Config, chọn propertise 
[![NIC VM window network setting](/img/migrated/NIC-VM-window-network-setting-ee7e82cd.png)](/img/migrated/NIC-VM-window-network-setting-ee7e82cd.png)
**ステップ 4** : Thay đổi các thông số theo cấu hình mới – OK 
[![NIC VM window network setting config IPv4 ok](/img/migrated/NIC-VM-window-network-setting-config-IPv-ab0305c9.png)](/img/migrated/NIC-VM-window-network-setting-config-IPv-ab0305c9.png)
**ステップ 5:** Kiểm tra lại các thay đổi và ping thử 
[![NIC VM window network setting config IPv4 test](/img/migrated/NIC-VM-window-network-setting-config-IPv-9b70a68d.png)](/img/migrated/NIC-VM-window-network-setting-config-IPv-9b70a68d.png)
