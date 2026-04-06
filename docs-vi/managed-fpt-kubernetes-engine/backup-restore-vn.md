---
id: "backup-restore-vn"
title: "Tính năng Backup & Restore"
description: "Tính năng Backup & Restore là một tính năng trong sản phẩm M-FKE với mục tiêu tạo ra các bản Snapshot cho PVC ."
sidebar_label: "Tính năng Backup & Restore"
sidebar_position: 35
---

# Tính năng Backup & Restore

Tính năng Backup & Restore là một tính năng trong sản phẩm M-FKE với mục tiêu tạo ra các bản Snapshot cho PVC . 
M-FKE release tính năng Backup & Restore version 1.0.0 bao gồm các tiện ích sau: 
Backup Plan: 
  * Hiển thị danh sách các Backup Plan 
  * Tạo mới Backup Plan 
  * 1 Backup Plan có thể cài đặt nhiều thời điểm để hệ thống tự động tạo snapshot PVC, áp dụng cho 1 hoặc nhiều PVC cùng lúc 
  * Cấu hình khoảng thời gian Retention, theo minutes/ hours/ days. 
  * Chỉnh sửa Backup Plan 
  * Enable / Disable Backup Plan 
  * Xóa Backup Plan 
PVC Snapshot: 
  * Hiển thị danh sách các bản Snapshot PVC (Có hiển thị phương thức khởi tạo theo Manually / Scheduled) 
  * Đồng bộ danh sách snapshot từ dưới cluster lên FPT Cloud Portal 
  * Tạo mới PVC Snapshot 
  * Xóa PVC Snapshot 
  * Restore PVC Snapshot 

PVC Restored: 
  * Hiển thị danh sách các bản PVC được restore 
  * Reload cập nhật trạng thái 
Lưu ý: Tính năng áp dụng với driver Cinder (đã được tạo sẵn bởi FPT Cloud)
**Hướng dẫn tạo Backup plan**

**Bước 1** : Truy cập Portal > Containers > Kubernetes > Details Cluster > Backup Tab 
![](/img/migrated/1-4a954f79.png)
![](/img/migrated/2-e5cd1ce3.png)
_Hình 1: Backup Tab_
**Bước 2** : Tại tab Backup, bấm "New Plan" để khởi tạo một Backup Plan mới
![](/img/migrated/3-0cf67abf.png)
➤ Điền thông tin của Backup Plan, bao gồm: 
① Essential Information: 
• Plan Name: tên của Backup Plan 
• Retention: thời gian tồn tại của 1 snapshot. Sau thời gian này, snapshot sẽ bị xoá vĩnh viễn 
② Schedule Scope: 
• PVC Backup List: danh sách các pvc có trong cụm cluster 
③ Schedules Information: nhập tháng/ngày/năm cụ thể để lập lịch Backup 
Lưu ý: có thể tạo nhiều bản Backup Plan 
![](/img/migrated/4-f33feb8b.png)
_Hình 2: Điền tên của Plan, lựa chọn khoảng thời gian Retention (default 10 hours)_
Lưu ý: Retention áp dụng cho các bản snapshot của PVC được lựa chọn trong Plan 
![](/img/migrated/5-32ab0027.png)
_Hình 3: Lựa chọn các PVC mong muốn được áp dụng Plan_
Lưu ý: Danh sách hiển thị theo "pvc_name(pvc_namespace)"
![](/img/migrated/6-b988ff7b.png)
_Hình 4: Cấu hình các lịch mong muốn, Thêm hoặc Xóa_
![](/img/migrated/7-68d5de2f.png)
_Hình 5: Lưu Backup Plan và quay trở lại tab Backup_
![](/img/migrated/8-e7bf7afc.png)
_Hình 6: Backup Plan mới tạo sẽ được thêm vào danh sách Backup Plan List_
![](/img/migrated/9-785e1b70.png)
_Hình 7: Edit / Disable / Delete Backup Plan_
Những snapshot được tạo theo lịch của Backup Plan sẽ nằm trong danh sách Snapshot List với **_Type = "Scheduled"_**
**Hướng dẫn sử dụng tab PVC Snapshot**
Ở trong sub-tab này sẽ hiển thị các snapshot đã được khởi tạo, bao gồm của khách hàng tự tạo _(Type =**"Manually"**)_, hoặc tạo bởi Backup Plan (_Type =**"Scheduled"**_) 
![](/img/migrated/10-d065a7cb.png)
_Hình 8: Màn hiển thị danh sách các Snapshot đã được tạo_
![](/img/migrated/11-85c4a667.png)
_Hình 9: Người dùng chọn Create Snapshot để khởi tạo bản Snapshot trực tiếp_
![](/img/migrated/12-8c235c23.png)
_Hình 10: Người dùng chọn Delete để xóa, Refresh để cập nhật trạng thái gần nhất của Snapshot, và Restore để phục hồi PVC vào trong cụm K8s._
![](/img/migrated/13-5d971611.png)
_Hình 11: Đồng thời, nút Sync để người dùng trực tiếp đồng bộ các trạng thái của Snapshot, PVC, từ dưới cụm K8s lên trên FPT Cloud Portal._
**Hướng dẫn sử dụng tab PVC Restored**
Khi người dùng lựa chọn khôi phục snapshot (Restore Snapshot) từ sub-tab PVC Snapshot, PVC được khôi phục sẽ hiển thị ở sub-tab PVC Restored. 
![](/img/migrated/14-bc0ca284.png)
_Hình 12: Restore PVC ở sub-tab PVC snapshot_
![](/img/migrated/15-19e79103.png)
_Hình 13: Màn hiển thị danh sách các PVC đã được restored. Với các PVC chưa được gán vào pod, sẽ nằm ở trạng thái Pending_
Người dùng sau đó truy cập vào cụm K8s của mình, và cấu hình deployment cho pod được map với PVC vừa được khôi phục, khi đó, trạng thái PVC sẽ được cập nhật. 
![](/img/migrated/16-67c3e2c9.png)
_Hình 14: Bấm Reload để cập nhật lại trạng thái của PVC, hoặc Sync để cập nhật tất cả_
. **Lưu ý**
  * Số lượng bản snapshot trong mỗi VPC đang giới hạn tối đa 10 bản, nếu mong muốn được nâng cấp thêm, vui lòng liên hệ FPT Cloud Support. 
  * Người dùng nên cân đối tạo các Plan phù hợp, tránh việc tạo ra nhiều Snapshot nhưng không xóa đi, dẫn đến việc hạ tầng đạt tới ngưỡng và không thể tạo thêm Snapshot. 
  * Nếu Snapshot có trạng thái Failed, vui lòng truy cập cụm K8s và gõ lệnh sau để tìm hiểu nguyên nhân trước: 

```
Copy
kubectl describe volumesnapshots.snapshot.storage.k8s.io -n   

```
