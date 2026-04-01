---
id: "danh-tag-cho-vm"
title: "Tính năng đánh Tag cho Virtual Machine"
description: "Tính năng **Tagging** cho phép người dùng gắn nhãn các máy ảo bằng những thẻ tùy chỉnh (tags) nhằm mục đích **phân loại,"
sidebar_label: "Tính năng đánh Tag cho Virtual Machine"
sidebar_position: 34
---

# Đánh tag cho VM

Tính năng **Tagging** cho phép người dùng gắn nhãn các máy ảo bằng những thẻ tùy chỉnh (tags) nhằm mục đích **phân loại, tìm kiếm và quản lý tài nguyên hiệu quả hơn**. 
✓ **Phân loại thông minh** : Dễ dàng tổ chức các máy ảo theo môi trường (Production, Staging, Development), dự án, phòng ban hoặc bất kỳ tiêu chí nào phù hợp với quy trình quản lý. 
✓ **Tìm kiếm nhanh chóng** : Dựa trên các thẻ được gắn, người dùng có thể lọc và tìm kiếm VM một cách dễ dàng mà không cần ghi nhớ tên phức tạp. 
✓ **Quản lý hiệu quả** : Hỗ trợ theo dõi chi phí, sử dụng tài nguyên và thực hiện báo cáo dựa trên từng nhóm VM đã được đánh tag. 
✓ **Tùy chỉnh linh hoạt** : Thẻ (tags) có thể được tùy chỉnh và áp dụng cho nhiều mục đích khác nhau, phù hợp với nhu cầu cụ thể của doanh nghiệp. 
Với tính năng Tagging, việc quản lý hạ tầng ảo hóa trở nên khoa học hơn, tiết kiệm thời gian và nâng cao hiệu suất vận hành hệ thống. 
Bạn có thể thao tác các tính năng Tagging trên Portal như sau: 
**Tạo Tagging**
Để có thể đánh tag cho VM nằm trong worker group MFKE, người dùng cần phải tạo trước tag theo đúng mục đích sử dụng. 
**Bước 1** : Trên **Unify Portal** , chọn **Tagging** → chọn **Create tag**
[![](/img/migrated/Picture1-10-bf6844ca.png)](/img/migrated/Picture1-10-bf6844ca.png)
**Bước 2** : Nhập các thông tin của tag và nhấn button **Create**. 
[![](/img/migrated/Picture2-8-51004a9e.png)](/img/migrated/Picture2-8-51004a9e.png)
  * Key (required): Nhập key để xác định cho tag 
  * Value (required): Nhập giá trị cho tag tương ứng với key đã đặt 
  * Color: Cho phép người dùng chọn màu sắc để hiển thị tag 
  * Resource scope: Chọn VPC hiển thị tag

[![](/img/migrated/Picture3-8-ae6842be.png)](/img/migrated/Picture3-8-ae6842be.png)
**Gắn Tag để sử dụng worker group thuộc MFKE**
Đối với tạo cụm cluster mới
**Bước 1** : Trên **Unify Portal** , chọn **Kubernetes** → Chọn **Managed** → Chọn **Create a Kubernetes Engine** để tạo cluster mới. 
[![](/img/migrated/Picture4-7-53217cf7.png)](/img/migrated/Picture4-7-53217cf7.png)
**Bước 2** : Tại mục **Nodes Pool** , chọn Tag muốn sử dụng cho worker group.
[![](/img/migrated/Picture5-7-393f40ab.png)](/img/migrated/Picture5-7-393f40ab.png)
Nhập đầy đủ các thông tin cần thiết cho cụm cluster và nhấn button **Create a Kubernetes**.
[![](/img/migrated/Picture6-7-1907fecc.png)](/img/migrated/Picture6-7-1907fecc.png)
Chỉnh sửa Tag cho worker group
**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn Cluster muốn chỉnh sửa Tag. 
[![](/img/migrated/Picture7-7-fd7c4aed.png)](/img/migrated/Picture7-7-fd7c4aed.png)
**Bước 2** : Chọn **Node Pools** > **Edit Workers**
[![](/img/migrated/Picture8-6-119a53db.png)](/img/migrated/Picture8-6-119a53db.png)
**Bước 3** : Add thêm Tag vào worker group và click button **Save**. 
[![](/img/migrated/Picture9-5-041f86ef.png)](/img/migrated/Picture9-5-041f86ef.png)
[![](/img/migrated/Picture10-5-a318c11e.png)](/img/migrated/Picture10-5-a318c11e.png)
[![](/img/migrated/Picture11-4-1f1f1d05.png)](/img/migrated/Picture11-4-1f1f1d05.png)
Quá trình chỉnh sửa Tag sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing** , trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất. 
Xóa Tag ra khỏi worker group 
**Bước 1** : Chọn **Node Pools** > **Edit Workers**
[![](/img/migrated/Picture12-4-5468c29c.png)](/img/migrated/Picture12-4-5468c29c.png)
**Bước 2** : Click dấu để xóa tag khỏi worker group, sau đó nhấn **Save**. 
[![](/img/migrated/Picture13-3-fe7a1c46.png)](/img/migrated/Picture13-3-fe7a1c46.png)
[![](/img/migrated/Picture14-3-ca5786f0.png)](/img/migrated/Picture14-3-ca5786f0.png)
[![](/img/migrated/Picture15-3-b7cb4e29.png)](/img/migrated/Picture15-3-b7cb4e29.png)
Quá trình xóa Tag sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing** , trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất.