---
id: "guide-fcr"
title: "5. Vô hiệu hoá tích hợp FPT Container Registry"
sidebar_label: "5. Vô hiệu hoá tích hợp FPT Container Registry"
sidebar_position: "21"
---

# 5. Vô hiệu hoá tích hợp FPT Container Registry

Chỉ **Org Admin** and **Team Manager** có permission chỉnh sửa tích hợp FPT Container Registry (FCR)
_View thêm về phân permission[here](./quan-ly-member.md)_
## Integrate FCR - Add VPC
**Step 1** : Sau when has been chọn org/team, nhấn ando **FPT Container Registry** to to màn tích hợp:
[![anhfsec](/img/migrated/fcr1-2-c3f2a38c.png)](/img/migrated/fcr1-2-c3f2a38c.png)
**Step 2** : Nhấn ando **Add VPC** to thêm VPC mới ando danh sách tích hợp
[![anhfsec](/img/migrated/fcr2-1-53c9d4c2.png)](/img/migrated/fcr2-1-53c9d4c2.png)
**Step 3** : Chọn VPC cần tích hợp
[![anhfsec](/img/migrated/infcr3-ddd75d32.png)](/img/migrated/infcr3-ddd75d32.png)
**Step 4** : Sau when chọn VPC, if you has been có Robot Account, điền **Robot Account Name** , if you chưa có Robot Account, hãy xem phần hướng dẫn [here](../fpt-container-registry/index.md).
[![anhfsec](/img/migrated/infcr4-55fd52f8.png)](/img/migrated/infcr4-55fd52f8.png)
**Step 5** : Fill in **tên** and **secret** of Robot Account 
[![anhfsec](/img/migrated/lala1-d546663c.png)](/img/migrated/lala1-d546663c.png)
[![anhfsec](/img/migrated/lala2-91f84e57.png)](/img/migrated/lala2-91f84e57.png)
**Step 6** : Sau when điền hết thông tin, nhấn **Test Connection**. System will kiểm tra thông tin the trường bắt buộc, if thông tin hợp lệ, hệ thống notification **Connected successfully** and nút **Integrate** is enabled
[![anhfsec](/img/migrated/lala3-08073379.png)](/img/migrated/lala3-08073379.png)
Trường hợp the thông tin không hợp lệ (sai Robot Account, secret), hệ thống notification "Connected failed".
**Step 7** : Sau when hệ thống notification test kết nốt successfully, nhấn **Integrate**
[![anhfsec](/img/migrated/infcr8-c753c69c.png)](/img/migrated/infcr8-c753c69c.png)
VPC is kết nối successfully will is thêm ando danh sách **Integrated VPCs**
[![anhfsec](/img/migrated/infcr9-c2ef4bc4.png)](/img/migrated/infcr9-c2ef4bc4.png)
## View detail
Chỉ **Org Admin** and **Team Manager** có permission xem chi tiết tích hợp
Sau when has been chọn org/team, nhấn ando **Configured FPT Container Registry** to xem chi tiết
[![anhfsec](/img/migrated/fcr1-2-c3f2a38c.png)](/img/migrated/fcr1-2-c3f2a38c.png)
Ở đây, you can xem status of tích hợp, danh sách **Integrated VPCs** with the thông tin _VPC, Robot Account Name, Container Registry Name_ and **Access Key** phục vụ for tích hợp CICD. 
[![anhfsec](/img/migrated/infcr9-c2ef4bc4.png)](/img/migrated/infcr9-c2ef4bc4.png)
Bạn can tiến hành **Add VPC** , **Reconfigure** , and **Delete** VPCs or **Disable** tích hợp with FPT Container Registry
[anhfsec](/img/migrated/fcr1-2-c3f2a38c.png)
## Reconfigure FPT Container Registry VPC
**Step 1** : Để **reconfigure** FPT Container Registry VPC, ấn ando màn hình chi tiết of tích hợp FPT Container Registry. Select **Reconfigure** ở mục Action of 1 VPC
[![anhfsec](/img/migrated/lala4-fe8e1ce9.png)](/img/migrated/lala4-fe8e1ce9.png)
**Step 2** : Thực hiện the thao tác giống **Add VPC**
## Delete VPC
**Step 1** : Select **Delete** ở mục Action of 1 VPC
[anhfsec](https://fptcloud.com/wp-content/uploads/2025/05/rfcr2.png)
**Step 2** : Fill in _delete_ rồi nhấn **Confirm**
[anhfsec](https://fptcloud.com/wp-content/uploads/2025/05/rfcr3.png)
## Vô hiệu hoá tích hợp FPT Container Registry
Tương tự hướng dẫn vô hiệu hóa [tích hợp GitHub](./guide-github.md)
## Access Key for CI/CD pipeline
Ở phần detail, ngoài General Information, you will is cung cấp **access key** of fromng VPC to can tích hợp CI/CD Pipeline
[anhfsec](https://fptcloud.com/wp-content/uploads/2025/05/rfcr4.png)
Bạn can copy or reset Access Key to phục vụ for tích hợp ando CI/CD pipeline
