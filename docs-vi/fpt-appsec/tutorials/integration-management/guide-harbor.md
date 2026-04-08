---
id: "guide-harbor"
title: "1. Tạo Robot Account - Harbor"
description: "**Bước 1** : Truy cập Harbor Server của bạn, chọn tab Administration > Robot Accounts"
sidebar_label: "1. Tạo Robot Account - Harbor"
sidebar_position: 6
---

# 1. Tạo Robot Account - Harbor

## Tạo Robot Account - Harbor
**Bước 1** : Truy cập Harbor Server của bạn, chọn tab Administration > Robot Accounts
**Bước 2** : Nhấn **New Robot Account** để tạo mới
[![anhfsec](/img/migrated/hb1-1-312b6058.png)](/img/migrated/hb1-1-312b6058.png)
**Bước 3** : Điền các thông tin như **Name** , **Description** và **Expiration time** sau đón nhấn 
[![anhfsec](/img/migrated/hb2-184c1f48.png)](/img/migrated/hb2-184c1f48.png)
**Bước 4** : Chọn các quyền hệ thống cần thiết sau đó nhấn 
[![anhfsec](/img/migrated/hb3-752643bd.png)](/img/migrated/hb3-752643bd.png)
**Bước 5** : Chọn các Project mà Robot Account cần có quyền sau đó chọn **Permission** cho Robot Account đó. Cần đảm bảo Robot Account có quyền **List, Read Artifacts** và quyền **List, Pull, Read Repository**
[![anhfsec](/img/migrated/hb4-238ff62a.png)](/img/migrated/hb4-238ff62a.png)
[![anhfsec](/img/migrated/hb5-12df39e4.png)](/img/migrated/hb5-12df39e4.png)
**Bước 6** : Sau khi điền hết thông tin, nhấn **Finish**
[![anhfsec](/img/migrated/hb6-1-bf0aa7ff.png)](/img/migrated/hb6-1-bf0aa7ff.png)
**Bước 7** : Sau khi Robot Account được tạo thành công, copy **Robot Account name** và **secret** dùng cho tích hợp tại màn hình của **FPT Portal**
[![anhfsec](/img/migrated/hb7-13cec7b9.png)](/img/migrated/hb7-13cec7b9.png)

## Tích hợp Harbor
Chỉ **Org Admin** và **Team Manager** có quyền chỉnh sửa tích hợp Harbor
_Xem thêm về phân quyền[tại đây](/docs/vi/fpt-appsec/tutorials/organization-management/quan-ly-member/)_
**Bước 1** : Sau khi đã chọn org/team, nhấn vào **Harbor** để đến màn tích hợp:
[![anhfsec](/img/migrated/hb8-88b6c136.png)](/img/migrated/hb8-88b6c136.png)
**Bước 2** : Điền **Container Registry Name** (URL Harbor server) của bạn, **Robot Account Name** và **Robot Account Secret** (đã tạo từ Harbor)
[![Alt text](/img/migrated/hb9-c25dbb06.png)](/img/migrated/hb9-c25dbb06.png)
**Bước 3** : Sau khi điền hết thông tin, nhấn **Test Connection**. Hệ thống sẽ kiểm tra thông tin các trường bắt buộc, nếu thông tin hợp lệ, hệ thống thông báo **Connected successfully** và nút **Integrate** được **enabled**
[![Alt text](/img/migrated/hb10-b1a89abe.png)](/img/migrated/hb10-b1a89abe.png)
**Bước 4** : Sau khi hệ thống thông báo test kết nốt thành công, nhấn **Integrate**
[![Alt text](/img/migrated/hb11-85d22a70.png)](/img/migrated/hb11-85d22a70.png)

## Xem chi tiết tích hợp Harbor
Chỉ **Org Admin** và **Team Manager** có quyền xem chi tiết tích hợp
Sau khi đã chọn org/team, nhấn vào **Configured Harbor** để xem chi tiết
[![anhfsec](/img/migrated/hb11-85d22a70.png)](/img/migrated/hb11-85d22a70.png)
Ở đây, bạn có thể xem trạng thái của tích hợp, danh sách **Integrated VPCs** với các thông tin _VPC, Robot Account Name, Container Registry Name_ và **Access Key** phục vụ cho tích hợp CICD. 
[![anhfsec](/img/migrated/hb13-b9f618ce.png)](/img/migrated/hb13-b9f618ce.png)
Bạn có thể tiến hành **Reintegrate** hoặc **Disable** tích hợp Harbor
[anhfsec](https://fptcloud.com/wp-content/uploads/2025/05/fcr1-2.png)

## Reintegrate Harbor
**Bước 1** : Để **reintegrate Harbor** , ấn vào màn hình chi tiết của tích hợp Harbor. Chọn biểu tượng **Edit** cạnh mục **Account Credentials**
[![anhfsec](/img/migrated/hb14-f0016034.png)](/img/migrated/hb14-f0016034.png)
**Bước 2** : Thực hiện các thao tác giống **Integrate Harbor**

## Vô hiệu hoá tích hợp FPT Container Registry
Tương tự hướng dẫn vô hiệu hóa [tích hợp GitHub](/docs/vi/fpt-appsec/tutorials/integration-management/guide-github/)

## Access Key cho CI/CD pipeline
Ở phần detail, ngoài General Information, bạn sẽ được cung cấp **access key** để có thể tích hợp CI/CD Pipeline
[anhfsec](https://fptcloud.com/wp-content/uploads/2025/05/hb15.png)
Bạn có thể copy hoặc reset Access Key để phục vụ cho tích hợp vào CI/CD pipeline
