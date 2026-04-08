---
id: "billing-permission"
title: "Phân quyền xem billing"
description: "Hướng dẫn cấp quyền xem billing cho người dùng trong FPT Cloud Portal."
sidebar_label: "Phân quyền xem billing"
sidebar_position: 5
---

# Phân quyền xem billing

Để xem được billing, bạn cần có role Tenant Owner (Super Admin) hoặc role có permission billing.

Với những user không có role Tenant Owner (Super Admin) cần xem billing, user Tenant Owner (Super Admin) có thể phân quyền theo hướng dẫn sau:

1. User có quyền Tenant Owner (Super Admin) đăng nhập vào Console FPT Cloud > chọn **IAM** > chọn **Roles** > nhấn nút **Create Role**.

   [![Màn hình danh sách Roles](/img/migrated/image-1733807046462-52e42c98.png)](/img/migrated/image-1733807046462-52e42c98.png)

2. Tại màn hình Create Role, điền tên role vào field **Name** > chọn filter để chọn permission cho role > chọn **Type = billing** > chọn permission cần thiết > nhấn nút **Create**.

   [![Điền tên role](/img/migrated/image-1733807051725-b839d87f.png)](/img/migrated/image-1733807051725-b839d87f.png)
   [![Chọn type billing](/img/migrated/image-1733807059640-9e09ce9c.png)](/img/migrated/image-1733807059640-9e09ce9c.png)
   [![Chọn permission billing](/img/migrated/image-1733807063820-d4a99dea.png)](/img/migrated/image-1733807063820-d4a99dea.png)

3. Tại IAM, chọn **User Groups** > nhấn **Create user group**.

   [![Màn hình User Groups](/img/migrated/image-1733807067997-1c03291a.png)](/img/migrated/image-1733807067997-1c03291a.png)

4. Tại màn hình Create user group, điền **Name** cho user group > chọn role billing đã tạo ở bước 1–2 > chọn các user muốn phân quyền > nhấn **Create user group**.

   [![Tạo user group với role billing](/img/migrated/image-1733807076636-9336da11.png)](/img/migrated/image-1733807076636-9336da11.png)
