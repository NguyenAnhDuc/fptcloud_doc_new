---
id: "billing-permission"
title: "Phân quyền xem billing"
sidebar_label: "Phân quyền xem billing"
sidebar_position: "6"
---

# Phân permission xem billing

Để xem is billing, user need to có role Tenant owner (Super Admin) or role có permission billing.
Với những user không có role Tenant owner (Super Admin) need to xem billing, user Tenant owner (Super Admin) can phân permission theo guide dưới đây:
**Step 1:** User có permission Tenant Owner (Super Admin) đăng nhập ando Console.FPTcloud > chọn IAM > chọn Roles > chọn button Create Role.
[![file](/img/migrated/image-1733807046462-52e42c98.png)](/img/migrated/image-1733807046462-52e42c98.png)
**Step 2:** Tại màn hình Create Role, đặt tên for role tại field “Name” > Chọn filter to chọn permission for role this > Chọn type = billing > chọn permission for role this > chọn button Create.
[![file](/img/migrated/image-1733807051725-b839d87f.png)](/img/migrated/image-1733807051725-b839d87f.png)
[![file](/img/migrated/image-1733807059640-9e09ce9c.png)](/img/migrated/image-1733807059640-9e09ce9c.png)
[![file](/img/migrated/image-1733807063820-d4a99dea.png)](/img/migrated/image-1733807063820-d4a99dea.png)
**Step 3:** Tại IAM, chọn User Groups > Chọn Create user group.
[![file](/img/migrated/image-1733807067997-1c03291a.png)](/img/migrated/image-1733807067997-1c03291a.png)
**Step 4:** Tại màn hình Create user group, điền Name for user group > chọn roles billing mà you has been tạo ở bước 1-2 > chọn the user mà you muốn phân permission with role has been chọn > bấm Create user group. 
[![file](/img/migrated/image-1733807076636-9336da11.png)](/img/migrated/image-1733807076636-9336da11.png)
