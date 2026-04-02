---
id: "tinh-nang-hibernate-wakeup"
title: "Tính năng Hibernate & Wake-up"
description: "Các Clusters thường được sử dụng 24/24 nếu như chúng đang chạy cho môi trường production còn đối với việc sử dụng các cl"
sidebar_label: "Tính năng Hibernate & Wake-up"
sidebar_position: 23
---

# Tính năng Hibernate & Wake-up

Các Clusters thường được sử dụng 24/24 nếu như chúng đang chạy cho môi trường production còn đối với việc sử dụng các cluster scho môi trường dev, test, staging hay demo, việc scale down các resources K8s khi không sử dụng sẽ giúp tiết kiệm chi phí cho người dùng. Tuy nhiên việc scale down thủ công có thể sẽ tốn nhiều thời gian vậy nên tính năng Hibernate sinh ra để tự động hoá phần việc này. 
_Khi người dùng sử dụng tính năng**Hibernate** , các resources trong cluster sẽ có những thay đổi như sau: _
  1. Các worker nodes (instances) sẽ bị xoá 
  2. Các pods chuyển sang trạng thái Pending 
  3. Các services sẽ được giữ nguyên 
  4. Các thành phần lưu trữ trạng thái (PVC...) hay các trạng thái trong etcd cũng sẽ được giữ lại. 

**Wake-up** là một tính năng ngược lại với Hibernate, nó giúp cụm quay lại trạng thái ban đầu trước khi được Hibernate. 
Bạn có thể thao tác các tính năng Hibernate và Wake-up trên **Portal** như sau: 
  * **Đối với Hibernate**

**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**
[![](/img/migrated/Picture1-2-60a2b2ae.png)](/img/migrated/Picture1-2-60a2b2ae.png)
**Bước 2** : Bấm nút Hibernate để bắt đầu quá trình 
[![](/img/migrated/Picture2-1-dfd066c0.png)](/img/migrated/Picture2-1-dfd066c0.png)
**Bước 3** : Nhập tên của cụm để xác nhận bắt đầu quá trình 
[![](/img/migrated/Picture3-1-82ec1b38.png)](/img/migrated/Picture3-1-82ec1b38.png)
Sau khi thông báo hiện về, quá trình Hibernate bắt đầu, và trạng thái trên Portal sẽ trả về trạng thái _Hibernating (Running)_
[![](/img/migrated/Picture4-1-951d4b79.png)](/img/migrated/Picture4-1-951d4b79.png)
Kết thúc quá trình, trạng thái của cụm sẽ trả về _Succeeded (Hibernated)_ tương ứng với việc Hibernate thành công 
[![](/img/migrated/Picture5-1-85b21a7a.png)](/img/migrated/Picture5-1-85b21a7a.png)
  * **Đối với Wake-up**

Với các cụm đã hiện trạng thái _Succeeded (Hibernated)_ , người dùng có thể dùng tính năng Wake-up để khôi phục cụm về lại trạng thái ban đầu. 
**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**
[![](/img/migrated/Picture6-1-5cf5a6d0.png)](/img/migrated/Picture6-1-5cf5a6d0.png)
**Bước 2** : Bấm nút **Wakeup** để bắt đầu quá trình 
[![](/img/migrated/Picture7-1-3df9d5b9.png)](/img/migrated/Picture7-1-3df9d5b9.png)
**Bước 3** : Nhập tên cụm để xác nhận quá trình 
[![](/img/migrated/Picture8-1-03f0209f.png)](/img/migrated/Picture8-1-03f0209f.png)
Sau khi thông báo hiện về, quá trình Hibernate bắt đầu, và trạng thái trên Portal sẽ trả về trạng thái _Processing (Running)_
[![](/img/migrated/Picture9-1-a91ef8d9.png)](/img/migrated/Picture9-1-a91ef8d9.png)
Kết thúc quá trình, trạng thái của cụm sẽ trả về _Succeeded (Running)_ tương ứng với việc đã thành công Wakeup cụm
[![](/img/migrated/Picture10-1-9430756e.png)](/img/migrated/Picture10-1-9430756e.png)
  * **_Note_** : 

Khuyến cáo trước khi bạn bắt đầu quá trình Hibernate, hãy đảm bảo các pods trong cụm đều trong trạng thái _Running_ , các resources khác hoạt động bình thường (svc type LB, ingress, Persistent Volume, secrets, configmaps...) 
Trong khi cụm đã được Hibernated, nếu người dùng deploy thêm các deployment khác, thì các resource mới sẽ đều sẽ ở trạng thái _Pending_ , cho tới khi người dùng chọn Wakeup cụm.
