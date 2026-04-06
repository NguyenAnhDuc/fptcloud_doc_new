---
id: "advanced-firewall"
title: Advanced Firewall
description: "Sản phẩm Kubenetes tích hợp Firewall khác so với sản phẩm Kubenetes cơ bản của FPT Cloud là sử dụng 01 Advanced Firewall"
sidebar_label: Advanced Firewall
sidebar_position: 24
---

# Advanced Firewall

## **1. Tổng quan sản phẩm Kubenetes tích hợp Firewall**
Sản phẩm Kubenetes tích hợp Firewall khác so với sản phẩm Kubenetes cơ bản của FPT Cloud là sử dụng 01 Advanced Firewall nằm phía trước Gateway của Tenant. Advanced Firewall có nhiệm vụ bảo vệ và cấu hình các rule bảo mật (Allow, Drop) rule nat (DNAT, SNAT) cho cụm Kubenetes. 
Các thành phần chính bao gồm: 
– Advanced Firewall (vd: Checkpoint) 
– Gateway (Internet Gateway, Firewall L4) 
– Load balancer 
– Cụm Kubenetes: Master node (API, ETCD), Worker node (App and Service)
[![file](/img/migrated/image-1691469857854-05b04fb7.png)](/img/migrated/image-1691469857854-05b04fb7.png)

## Các requirement rules cho cụm Kubenetes trên Advanced Firewall
Luồng traffic truy cập vào các node k8s như sau: [![file](/img/migrated/image-1691469894054-7f2f9cab.png)](/img/migrated/image-1691469894054-7f2f9cab.png)
**Chú ý:**
Tất cả các rule inbound và outbound cho cụm Kubenetes đều được cấu hình trên Advanced Firewall. 
Tất cả các rule NAT cho cụm Kubenetes đều được cấu hình trên Advanced Firewall. 
IP Public được đặt trên Advanced Firewall. 
Bảng quy hoạch rule Firewall trên Advanced Firewall cho cụm Kubenetes:
[![file](/img/migrated/image-1691480281087-05f96745.png)](/img/migrated/image-1691480281087-05f96745.png)
Bảng quy hoạch rule NAT trên Advanced Firewall cho cụm Kubenetes: 
[![file](/img/migrated/image-1691480310854-7798d361.png)](/img/migrated/image-1691480310854-7798d361.png)
Trên Gateway vẫn có rule Firewall và rule Nat ở để đảm bảo traffic kết nối từ Gateway đến Firewall, các rule mặc định này được tạo tự động, người dùng phải tạo rule cho ứng dụng (option) nếu cần. 

## Khởi tạo cụm Kubenetes tích hợp Firewall
**Yêu cầu:**
– Quota CPU, RAM, Storage, Instance: đáp ứng đủ cho cấu hình cluster Kubernetes mong muốn. 
– 01 Network subnet: Network sử dụng cho Kubernetes Nodes, subnet cần có Static IP Pool. Subnet này cần được quy hoạch và thiết kế chi tiết, để cấu hình route cho phép kết nối từ bên ngoài tới Firewall qua Gateway vào đến các Kubernetes Node. 
– Thông tin IP của Firewall: Cần thông tin 01 IP Public và 01 Private của Firewall. 
– Thông tin IP của Gateway: 01 IP private này được sử dụng để cấu hình route từ Firewall đến Gateway. 
**Các bước khởi tạo như sau:**

Bước 1: Từ FPT Cloud portal, chọn Kubernetes. Chọn tab "Dedicated". Chọn Create. Nhập vào các thông tin mong muốn của cụm K8s. 

Bước 2: Cấu hình Firewall, tick vào mục Enable Firewall. 
[![file](/img/migrated/image-1691469995783-e893b090.png)](/img/migrated/image-1691469995783-e893b090.png)

Bước 3: Nhập vào Thông tin của Firewall, bao gồm: IP Gateway, IP Public và Private của Checkpoint.

Bước 4: Ấn Create, kiểm tra lại các thông tin và ấn Agree để tiến hành khởi tạo. 

Bước 5: Theo dõi trạng thái khởi tạo cụm K8s. Sau khi trạng thái Successed (Running) thì tiến hành sử dụng, triển khai ứng dụng.
