---
id: "truy-cap-thong-tin-chi-tiet-cua-cluster"
title: "Truy cập thông tin chi tiết của Cluster"
description: "**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn Tab **Managed**. Ch"
sidebar_label: "Truy cập thông tin chi tiết của Cluster"
sidebar_position: 6
---

# Truy cập thông tin chi tiết của Cluster

**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn Tab **Managed**. Chọn **Cluster** muốn xem thông tin chi tiết.
[![](/img/migrated/Picture10-9e9b162d.png)](/img/migrated/Picture10-9e9b162d.png)
**Bước 2:** Tab **Essential Properties** sẽ hiển thị các thông tin của cluster. 
[![](/img/migrated/Picture11-33402987.png)](/img/migrated/Picture11-33402987.png)
  * **Cluster Information:** Thông tin cơ bản về cluster bao gồm Cluster Name, Kubernetes-version, File Kubernetes Config, Status, File SSH Key. 
  * **Load Balancer VIP:** Thông tin LB Size đã chọn 
  * **Worker Groups Config:** Danh sách các group và cấu hình Worker Node: Số lượng Min / Max, CPU, Memory, Disk. 
  * **API:** API Url. 

**Bước 3:** Tab **Node Pools** sẽ hiển thị toàn bộ worker group thuộc cụm cluster và thông tin cấu hình của từng worker group. 
[![](/img/migrated/Picture12-7afcc680.png)](/img/migrated/Picture12-7afcc680.png)
  * **Name:** Tên worker group 
  * **Is Based:** Phân biệt worker base và worker thường
  * **Instance Type:** Hiển thị loại instance (CPU hoặc GPU) 
  * **Resource Type:** Hiển thị số lượng CPU và RAM 
  * **Disk:** Hiển thị dung lượng Disk 
  * **Policy:** Hiển thị thông tin Storage Policy đã chọn 
  * **Auto Scale:** Hiển thị trạng thái enable/disable auto scale.
  * **Scale min:** Hiển thị số VM instance Worker Node tối thiểu đã cấu hình cho worker group. 
  * **Scale max:** Hiển thị số VM instance Worker Node tối đa đã cấu hình cho worker group. 
  * **Actions:** Người dùng có thể xóa worker group nếu không còn sử dụng nhưng không thể xóa woker group base.
