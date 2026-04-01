---
id: "billing-permission"
title: "Phân quyền xem billing"
description: "Để xem được billing, người dùng cần có role Tenant owner (Super Admin) hoặc role có permission billing."
sidebar_label: "Phân quyền xem billing"
sidebar_position: 6
---

# Phân quyền xem billing

Để xem được billing, người dùng cần có role Tenant owner (Super Admin) hoặc role có permission billing.
Với những user không có role Tenant owner (Super Admin) cần xem billing, user Tenant owner (Super Admin) có thể phân quyền theo hướng dẫn dưới đây:
**Bước 1:** User có quyền Tenant Owner (Super Admin) đăng nhập vào Console.FPTcloud > chọn IAM > chọn Roles > chọn button Create Role.
[![file](/img/migrated/image-1733807046462-52e42c98.png)](/img/migrated/image-1733807046462-52e42c98.png)
**Bước 2:** Tại màn hình Create Role, đặt tên cho role tại field “Name” > Chọn filter để chọn permission cho role này > Chọn type = billing > chọn permission cho role này > chọn button Create.
[![file](/img/migrated/image-1733807051725-b839d87f.png)](/img/migrated/image-1733807051725-b839d87f.png)
[![file](/img/migrated/image-1733807059640-9e09ce9c.png)](/img/migrated/image-1733807059640-9e09ce9c.png)
[![file](/img/migrated/image-1733807063820-d4a99dea.png)](/img/migrated/image-1733807063820-d4a99dea.png)
**Bước 3:** Tại IAM, chọn User Groups > Chọn Create user group.
[![file](/img/migrated/image-1733807067997-1c03291a.png)](/img/migrated/image-1733807067997-1c03291a.png)
**Bước 4:** Tại màn hình Create user group, điền Name cho user group > chọn roles billing mà bạn đã tạo ở bước 1-2 > chọn các user mà bạn muốn phân quyền với role đã chọn > bấm Create user group. 
[![file](/img/migrated/image-1733807076636-9336da11.png)](/img/migrated/image-1733807076636-9336da11.png)