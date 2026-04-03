---
id: "roles"
title: "1. Tạo Roles"
description: "**1. Tạo Roles**"
sidebar_label: "1. Tạo Roles"
sidebar_position: 7
---

# Roles

**1. Tạo Roles**
**Bước 1** : Vào tab **IAM** trên Portal > Chọn **Roles** > bấm **Create Role**
[![](/img/migrated/Roles_b1-8117f050.jpg)](/img/migrated/Roles_b1-8117f050.jpg)
**Bước 2** : Hiển thị màn hình **Create role** > nhập thông tin **Name, Description** theo nhu cầu người dùng. 
[![](/img/migrated/Roles_b2-602cef2c.jpg)](/img/migrated/Roles_b2-602cef2c.jpg)
**Bước 3** : Chọn **Filter** > xuất hiện pop up **Permission filter** > nhập giá trị **Permission** ( Giá trị thuộc type manageDatabase, vd: manageDatabase:List), chọn **Type ManageDatabase** (theo list) > bấm **Show**.
[![](/img/migrated/Roles_b3-329193e1.jpg)](/img/migrated/Roles_b3-329193e1.jpg)
**Lưu ý** : Với bước Filter này, người dùng có thể không nhập Permission, mà chỉ chọn Type hệ thống sẽ hiển thị toàn bộ giá trị quyền của ManageDatabase
**Bước 4** : Người dùng **tích chọn** hoặc **không tích chọn** các permission thuộc **ManageDatabase** cần phân quyền > bấm **Create role**.
[![](/img/migrated/Roles_b4-76491f25.jpg)](/img/migrated/Roles_b4-76491f25.jpg)
Tạo thành công một role với trạng thái **Active**
[![](/img/migrated/Roles_b5-05b90a70.jpg)](/img/migrated/Roles_b5-05b90a70.jpg)
