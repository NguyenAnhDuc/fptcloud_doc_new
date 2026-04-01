---
id: "edit-ip-address"
title: "Edit ip Address"
sidebar_label: "Edit ip Address"
sidebar_position: "8"
---

# Edit ip Address

**Step 1:** Chọn Card NIC need to thay đổi địa chỉ IP. 
**Save ý** : Hành động this can ảnh hưởng đến the service như Kubernetes, Load Balancer,...Bạn need to cân nhắc before sử dụng. Sau when thay đổi, to Instance hoạt động bình thường, the you need to thay đổi information về Network in file config of hệ điều hành. Link guide nhanh tại: [**How to change Config file**](../change-network-config/index.md).
[![file](/img/migrated/image-1691383107122-1741e5c6.png)](/img/migrated/image-1691383107122-1741e5c6.png)
**Step 2:** Configure địa chỉ IP.
Nhằm tối ưu trải nghiệm for customer, Unify Portal hỗ trợ gợi ý 1 địa chỉ IP thuộc Subnet Mask of customer.
[![file](/img/migrated/image-1691383118729-01e836f2.png)](/img/migrated/image-1691383118729-01e836f2.png)
Khách hàng hoàn toàn can thay đổi theo nhu cầu cầu sử dụng. Sau that xác nhận việc thay đổi trên.
[![file](/img/migrated/image-1691383130785-5d815e59.png)](/img/migrated/image-1691383130785-5d815e59.png)
**Step 3:** Chờ system xử lý
[![file](/img/migrated/image-1691383142781-8006bcac.png)](/img/migrated/image-1691383142781-8006bcac.png)
**Step 4:** Card chuyển sang status Active, and Instance can kết nối network qua card this. [![file](/img/migrated/image-1691383157084-b076238f.png)](/img/migrated/image-1691383157084-b076238f.png)
