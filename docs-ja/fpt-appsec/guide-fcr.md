---
id: "guide-fcr"
title: "5. Vô hiệu hoá tích hợp FPT Container Registry"
sidebar_label: "5. Vô hiệu hoá tích hợp FPT Container Registry"
sidebar_position: "21"
---

# 5. Vô hiệu hoá tích hợp FPT Container Registry

Chỉ **Org Admin** và **Team Manager** có quyền chỉnh sửa tích hợp FPT Container Registry (FCR)
_Xem thêm về phân quyền[tại đây](./quan-ly-member.md)_
## Integrate FCR - Add VPC
**ステップ1:** Sau khi đã chọn org/team, nhấn vào **FPT Container Registry** để đến màn tích hợp:
[![anhfsec](/img/migrated/fcr1-2-c3f2a38c.png)](/img/migrated/fcr1-2-c3f2a38c.png)
**ステップ2:** Nhấn vào **Add VPC** để thêm VPC mới vào danh sách tích hợp
[![anhfsec](/img/migrated/fcr2-1-53c9d4c2.png)](/img/migrated/fcr2-1-53c9d4c2.png)
**ステップ3:** Chọn VPC cần tích hợp
[![anhfsec](/img/migrated/infcr3-ddd75d32.png)](/img/migrated/infcr3-ddd75d32.png)
**ステップ4:** Sau khi chọn VPC, nếu bạn đã có Robot Account, điền **Robot Account Name** , nếu bạn chưa có Robot Account, hãy xem phần hướng dẫn [tại đây](../fpt-container-registry/index.md).
[![anhfsec](/img/migrated/infcr4-55fd52f8.png)](/img/migrated/infcr4-55fd52f8.png)
**ステップ5:** Điền **tên** và **secret** của Robot Account 
[![anhfsec](/img/migrated/lala1-d546663c.png)](/img/migrated/lala1-d546663c.png)
[![anhfsec](/img/migrated/lala2-91f84e57.png)](/img/migrated/lala2-91f84e57.png)
**ステップ6:** Sau khi điền hết thông tin, nhấn **Test Connection**. Hệ thống sẽ kiểm tra thông tin các trường bắt buộc, nếu thông tin hợp lệ, hệ thống thông báo **Connected successfully** và nút **Integrate** được enabled
[![anhfsec](/img/migrated/lala3-08073379.png)](/img/migrated/lala3-08073379.png)
Trường hợp các thông tin không hợp lệ (sai Robot Account, secret), hệ thống thông báo "Connected failed".
**ステップ7:** Sau khi hệ thống thông báo test kết nốt thành công, nhấn **Integrate**
[![anhfsec](/img/migrated/infcr8-c753c69c.png)](/img/migrated/infcr8-c753c69c.png)
VPC được kết nối thành công sẽ được thêm vào danh sách **Integrated VPCs**
[![anhfsec](/img/migrated/infcr9-c2ef4bc4.png)](/img/migrated/infcr9-c2ef4bc4.png)
## 表示 detail
Chỉ **Org Admin** và **Team Manager** có quyền xem chi tiết tích hợp
Sau khi đã chọn org/team, nhấn vào **Configured FPT Container Registry** để xem chi tiết
[![anhfsec](/img/migrated/fcr1-2-c3f2a38c.png)](/img/migrated/fcr1-2-c3f2a38c.png)
Ở đây, bạn có thể xem trạng thái của tích hợp, danh sách **Integrated VPCs** với các thông tin _VPC, Robot Account Name, Container Registry Name_ và **Access Key** phục vụ cho tích hợp CICD. 
[![anhfsec](/img/migrated/infcr9-c2ef4bc4.png)](/img/migrated/infcr9-c2ef4bc4.png)
Bạn có thể tiến hành **Add VPC** , **Reconfigure** , và **Delete** VPCs hoặc **Disable** tích hợp với FPT Container Registry
[anhfsec](/img/migrated/fcr1-2-c3f2a38c.png)
## Reconfigure FPT Container Registry VPC
**ステップ1:** Để **reconfigure** FPT Container Registry VPC, ấn vào màn hình chi tiết của tích hợp FPT Container Registry. **Reconfigure** ở mục Action của 1 VPC
[![anhfsec](/img/migrated/lala4-fe8e1ce9.png)](/img/migrated/lala4-fe8e1ce9.png)
**ステップ2:** Thực hiện các thao tác giống **Add VPC**
## 削除 VPC
**ステップ1:** **Delete** ở mục Action của 1 VPC
[anhfsec](https://fptcloud.com/wp-content/uploads/2025/05/rfcr2.png)
**ステップ2:** Điền _delete_ rồi nhấn **Confirm**
[anhfsec](https://fptcloud.com/wp-content/uploads/2025/05/rfcr3.png)
## Vô hiệu hoá tích hợp FPT Container Registry
Tương tự hướng dẫn vô hiệu hóa [tích hợp GitHub](./guide-github.md)
## Access Key cho CI/CD pipeline
Ở phần detail, ngoài General Information, bạn sẽ được cung cấp **access key** của từng VPC để có thể tích hợp CI/CD Pipeline
[anhfsec](https://fptcloud.com/wp-content/uploads/2025/05/rfcr4.png)
Bạn có thể copy hoặc reset Access Key để phục vụ cho tích hợp vào CI/CD pipeline
