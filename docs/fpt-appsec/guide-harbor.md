---
id: "guide-harbor"
title: "1. Tạo Robot Account - Harbor"
sidebar_label: "1. Tạo Robot Account - Harbor"
sidebar_position: "22"
---

# 1. Create Robot Account - Harbor

## Create Robot Account - Harbor
**Step 1** : Truy cập Harbor Server of you, chọn tab Administration > Robot Accounts
**Step 2** : Click **New Robot Account** to tạo mới
[![anhfsec](/img/migrated/hb1-1-312b6058.png)](/img/migrated/hb1-1-312b6058.png)
**Step 3** : Fill in the information như **Name** , **Description** and **Expiration time** sau thatn nhấn 
[![anhfsec](/img/migrated/hb2-184c1f48.png)](/img/migrated/hb2-184c1f48.png)
**Step 4** : Chọn the permission system need to thiết sau that nhấn 
[![anhfsec](/img/migrated/hb3-752643bd.png)](/img/migrated/hb3-752643bd.png)
**Step 5** : Chọn the Project mà Robot Account need to có permission sau that chọn **Permission** for Robot Account that. Cần đảm bảo Robot Account có permission **List, Read Artifacts** and permission **List, Pull, Read Repository**
[![anhfsec](/img/migrated/hb4-238ff62a.png)](/img/migrated/hb4-238ff62a.png)
[![anhfsec](/img/migrated/hb5-12df39e4.png)](/img/migrated/hb5-12df39e4.png)
**Step 6** : Sau when điền hết information, nhấn **Finish**
[![anhfsec](/img/migrated/hb6-1-bf0aa7ff.png)](/img/migrated/hb6-1-bf0aa7ff.png)
**Step 7** : Sau when Robot Account is tạo successfully, copy **Robot Account name** and **secret** dùng for tích hợp tại màn hình of **FPT Portal**
[![anhfsec](/img/migrated/hb7-13cec7b9.png)](/img/migrated/hb7-13cec7b9.png)
## Tích hợp Harbor
Chỉ **Org Admin** and **Team Manager** có permission chỉnh sửa tích hợp Harbor
_View thêm về phân permission[here](./quan-ly-member.md)_
**Step 1** : Sau when has been chọn org/team, nhấn ando **Harbor** to to màn tích hợp:
[![anhfsec](/img/migrated/hb8-88b6c136.png)](/img/migrated/hb8-88b6c136.png)
**Step 2** : Fill in **Container Registry Name** (URL Harbor server) of you, **Robot Account Name** and **Robot Account Secret** (has been tạo from Harbor)
[![Alt text](/img/migrated/hb9-c25dbb06.png)](/img/migrated/hb9-c25dbb06.png)
**Step 3** : Sau when điền hết information, nhấn **Test Connection**. System will kiểm tra information the trường bắt buộc, if information hợp lệ, system notification **Connected successfully** and nút **Integrate** is **enabled**
[![Alt text](/img/migrated/hb10-b1a89abe.png)](/img/migrated/hb10-b1a89abe.png)
**Step 4** : Sau when system notification test kết nốt successfully, nhấn **Integrate**
[![Alt text](/img/migrated/hb11-85d22a70.png)](/img/migrated/hb11-85d22a70.png)
## View details tích hợp Harbor
Chỉ **Org Admin** and **Team Manager** có permission xem details tích hợp
Sau when has been chọn org/team, nhấn ando **Configured Harbor** to xem details
[![anhfsec](/img/migrated/hb11-85d22a70.png)](/img/migrated/hb11-85d22a70.png)
Ở đây, you can xem status of tích hợp, list **Integrated VPCs** with the information _VPC, Robot Account Name, Container Registry Name_ and **Access Key** phục vụ for tích hợp CICD. 
[![anhfsec](/img/migrated/hb13-b9f618ce.png)](/img/migrated/hb13-b9f618ce.png)
Bạn can tiến hành **Reintegrate** or **Disable** tích hợp Harbor
[anhfsec](https://fptcloud.com/wp-content/uploads/2025/05/fcr1-2.png)
## Reintegrate Harbor
**Step 1** : Để **reintegrate Harbor** , ấn ando màn hình details of tích hợp Harbor. Chọn biểu tượng **Edit** cạnh mục **Account Credentials**
[![anhfsec](/img/migrated/hb14-f0016034.png)](/img/migrated/hb14-f0016034.png)
**Step 2** : Thực hiện the thao tác giống **Integrate Harbor**
## Vô hiệu hoá tích hợp FPT Container Registry
Tương tự guide vô hiệu hóa [tích hợp GitHub](./guide-github.md)
## Access Key for CI/CD pipeline
Ở phần detail, ngoài General Information, you will is cung cấp **access key** to can tích hợp CI/CD Pipeline
[anhfsec](https://fptcloud.com/wp-content/uploads/2025/05/hb15.png)
Bạn can copy or reset Access Key to phục vụ for tích hợp ando CI/CD pipeline
