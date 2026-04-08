---
id: "permission-access-guide"
title: "Hướng dẫn phân quyền sử dụng dịch vụ"
description: "Để thực hiện phân quyền cho user khác sử dụng dịch vụ **VPN Site to Site** trong cùng project, Quý khách thao tác theo c"
sidebar_label: "Hướng dẫn phân quyền sử dụng dịch vụ"
sidebar_position: 10
---

# Hướng dẫn phân quyền sử dụng dịch vụ

Để thực hiện phân quyền cho user khác sử dụng dịch vụ **VPN Site to Site** trong cùng project, Quý khách thao tác theo các bước sau:
**Bước 1:** Login bằng tài khoản quản lý trên trang console của FCI tại đường link: <https://console.fptcloud.com/>
**Bước 2:** Truy cập dịch vụ **IAM → Roles** [![](/img/migrated/list_role-36845f2b.png)](/img/migrated/list_role-36845f2b.png) **Bước 3:** Click khởi tạo role và chọn service VPN và gán các quyền sử dụng của dịch vụ [![](/img/migrated/2-1-859ad22a.png)](/img/migrated/2-1-859ad22a.png) **Bước 4:** Tạo thêm 1 permission và lựa chọn dịch vụ **Network** kèm quyền **"Network:List"**   
  
**Note** : Đối với các dải mạng sử dụng máy chủ baremetal, quý khách hàng cần bổ sung thêm permission ở dịch vụ **HPC** kèm quyền "**ListSubnet** " [![](/img/migrated/3-2-5b07fe07.png)](/img/migrated/3-2-5b07fe07.png) Sau khi hoàn thành các thông tin, click **"Create role"** để tạo.
**Bước 5:** Khởi tạo user group và chọn roles "VPN_user" vừa khởi tạo ở bước trên [![](/img/migrated/4-2-fdfbf0f8.png)](/img/migrated/4-2-fdfbf0f8.png)
**Bước 6:** Chọn tab **User** và click **"Invite user"** [![](/img/migrated/5-454403cb.png)](/img/migrated/5-454403cb.png)
**Bước 7:** Điền user muốn sử dụng VPN và lựa chọn user group, roles [![](/img/migrated/6-1-e975ba12.png)](/img/migrated/6-1-e975ba12.png)
**Bước 8:** Check mail của tài khoản được invite và truy cập dịch vụ để sử dụng [![](/img/migrated/h-22b3d9cb.png)](/img/migrated/h-22b3d9cb.png)
