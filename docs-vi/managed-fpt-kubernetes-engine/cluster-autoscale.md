---
id: "cluster-autoscale"
title: "Bật tính năng Cluster Autoscale"
description: "Tính năng Cluster Autoscale của sản phẩm Managed FKE giúp tự động scale thêm các worker mới trong một worker pool nếu nh"
sidebar_label: "Bật tính năng Cluster Autoscale"
sidebar_position: 18
pagination_next: null
---

# Cluster Autoscale

Tính năng Cluster Autoscale của sản phẩm Managed FKE giúp tự động scale thêm các worker mới trong một worker pool nếu như ứng dụng chạy trên worker pool đó không được đáp ứng đủ tài nguyên (CPU, Memory) bởi các worker nodes của pool đó. Khi đó, những pod bị pending do node không đủ tài nguyên sẽ được phục vụ bởi các worker nodes mới sau khi scale lên. Tính năng Cluster Autoscale cũng tự động xóa các nodes không sử dụng đủ lượng utilization (mặc định là 50%) của node đó. Chú ý số lượng worker nodes của một worker pool chỉ được scale trong khoảng min-max được người dùng định nghĩa sẵn trên FPTCloud Portal. 
## Bật tính năng Cluster Autoscale
**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn **Cluster** muốn bật tính năng **Cluster Autoscale**.
[![](/img/migrated/Picture44-6cc61968.png)](/img/migrated/Picture44-6cc61968.png)
**Bước 2** : Chọn **Node Pools** > **Edit Workers**.
[![](/img/migrated/Picture8-3-f8bef870.png)](/img/migrated/Picture8-3-f8bef870.png)
**Bước 3** : Điều chỉnh số lượng worker min-max theo sizing mà người dùng lựa chọn.
[![](/img/migrated/Picture46-88c23a88.png)](/img/migrated/Picture46-88c23a88.png)
_Lưu ý: Khi số lượng worker max lớn hơn worker min, tính năng cluster autoscale sẽ tự động được bật._
**Bước 4** : Kiểm tra lại thông tin, chọn **Save** để thực hiện bật tính năng Cluster AutoScale. 
[![](/img/migrated/Picture47-173646fd.png)](/img/migrated/Picture47-173646fd.png)
## Tắt tính năng Cluster Autoscale
**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn **Cluster** muốn tắt tính năng **Cluster Autoscale**.
[![](/img/migrated/Picture48-a1ae1266.png)](/img/migrated/Picture48-a1ae1266.png)
**Bước 2** : Chọn **Nodes Pool** > **Edit workers**. 
[![](/img/migrated/Picture49-44ab28e4.png)](/img/migrated/Picture49-44ab28e4.png)
**Bước 3** : Điều chỉnh số lượng worker min-max bằng nhau.
[![](/img/migrated/Picture50-840f09a1.png)](/img/migrated/Picture50-840f09a1.png)
**Lưu ý:** Khi số lượng worker min và worker max trong một worker pool bằng nhau, tính năng cluster autoscale tự động bị tắt.
**Bước 4** : Kiểm tra lại thông tin, chọn **Save.**
[![](/img/migrated/Picture51-e16b0e3d.png)](/img/migrated/Picture51-e16b0e3d.png)
## Thay đổi cấu hình Cluster Autoscale
**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn **Cluster** muốn tùy chỉnh cấu hình **Cluster Autoscale**.
[![](/img/migrated/Picture52-39af7576.png)](/img/migrated/Picture52-39af7576.png)
**Bước 2** : Chọn **Nodes Pool** > **Edit workers**. 
[![](/img/migrated/Picture53-4178c5ad.png)](/img/migrated/Picture53-4178c5ad.png)
**Bước 3** : Điều chỉnh số lượng worker theo nhu cầu sử dụng.
[![](/img/migrated/Picture54-969dcae3.png)](/img/migrated/Picture54-969dcae3.png)
**Bước 4** : Kiểm tra lại thông tin, chọn **Save.**
[![](/img/migrated/Picture55-f877e43a.png)](/img/migrated/Picture55-f877e43a.png)