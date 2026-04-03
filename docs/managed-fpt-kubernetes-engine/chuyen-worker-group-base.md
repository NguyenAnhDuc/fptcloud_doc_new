---
id: "chuyen-worker-group-base"
title: "ベースワーカーグループの切り替え"
description: "ベースワーカーグループを変更する手順と仕組みを説明します。"
sidebar_label: "ベースワーカーグループの切り替え"
sidebar_position: "16"
---

# Chuyển Worker Group base

Khi người dùng có mong muốn thay đổi worker group base, các thành phần của hệ thống (coredns, metrics servers, CNI controller, …) sẽ được triển khai lại trên các worker nodes thuộc worker group base mới. Tính năng này mang lại lợi ích trong trường hợp người dùng muốn tăng/giảm cấu hình flavor của các worker nodes trong worker group base, khi đó người dùng tạo worker group mới với cấu hình worker nodes mong muốn, chuyển worker group mới đó thành base và xóa worker group base cũ. 
**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn **Cluster** muốn thay đổi cấu hình Worker Group. 
[![](/img/migrated/Picture36-569deb38.png)](/img/migrated/Picture36-569deb38.png)
**Bước 2** : Chọn **Node Pools** > **Edit Workers**. 
[![](/img/migrated/Picture5-3-59491c55.png)](/img/migrated/Picture5-3-59491c55.png)
**Bước 3** : Chọn worker group muốn thay đổi. 
[![](/img/migrated/Picture6-3-2ddc619d.png)](/img/migrated/Picture6-3-2ddc619d.png)
**Bước 4** : Kiểm tra lại thông tin, chọn **Save** để thực hiện lưu thay đổi. 
[![](/img/migrated/Picture39-31886a4d.png)](/img/migrated/Picture39-31886a4d.png)
[![](/img/migrated/Picture40-6f5a3087.png)](/img/migrated/Picture40-6f5a3087.png)
Quá trình thay đổi Woker Group Base sẽ thực hiện, trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất. 
_Gợi ý: Khi thay đổi thông số của worker group, đầu tiên hệ thống sẽ tạo thêm worker nodes mới với cấu hình mong muốn. Khi worker nodes mới được tạo thành công, worker node với cấu hình cũ sẽ được remove khỏi hệ thống. Các pod sẽ được chuyển từ worker node cũ sang worker node mới._
