---
id: "tutorials-backup-may-chu-voi-snapshot"
title: "Backup máy chủ với Snapshot"
description: "**Snapshot** là hành động chụp nhanh lại hiện trạng của máy ảo tại một thời điểm cụ thể. Kết quả tạo ra những bản sao ch"
sidebar_label: "Backup máy chủ với Snapshot"
sidebar_position: 18
---

# Tutorials Backup May Chu Voi Snapshot

**Snapshot** là hành động chụp nhanh lại hiện trạng của máy ảo tại một thời điểm cụ thể. Kết quả tạo ra những bản sao chứa toàn bộ nội dung của hệ thống ở thời điểm chụp. 
Nếu người dùng có nhu cầu lưu trữ định kỳ ở nhiều thời điểm khác nhau, hãy tham khảo dịch vụ FPT Backup.
Người dùng có thể chọn thời điểm hệ thống chạy ổn định nhất, tạo một bản **Snapshot**. Sau này nếu trong hệ thống có một phần mềm nào đấy bị lỗi không thể khắc phục hoặc dữ liệu quan trọng bị xóa nhầm. Người dùng chỉ cần khôi phục lại máy ảo về thời điểm tạo Snapshot là đã giải quyết được vấn đề.
## **Khởi tạo và quản lý snapshot từ máy ảo**
### **1. Khởi tạo snapshot**
**Bước 1** : Ở menu chọn **Instance Management** , trong phần **Actions** của máy ảo cần tạo snapshot. Chọn **Snapshot** > chọn **Create snapshot**
[![file](/img/migrated/image-1712656669900-805aff75.png)](/img/migrated/image-1712656669900-805aff75.png)
**Bước 2** : Nhấn **Create snapshot** , hiển thị modal **Create instance snapshot**
[![file](/img/migrated/image-1734595203830-4982aec6.png)](/img/migrated/image-1734595203830-4982aec6.png)
**Bước 3** : Nhấn **Create snapshot** để tạo snapshot. Sau khi xác nhận tạo snapshot, hệ thống sẽ tiến hành kiểm tra tài nguyên, tạo image snapshot và thông báo kết quả xử lý.
[![file](/img/migrated/image-1734595376651-974ca75e.png)](/img/migrated/image-1734595376651-974ca75e.png)
### **2. Khởi tạo máy ảo từ snapshot**
**Bước 1** : Ở menu chọn **Snapshot** , trong phần **Actions** của snapshot chọn **Launch as Instance**
[![file](/img/migrated/image-1734595412087-f0bc6c13.png)](/img/migrated/image-1734595412087-f0bc6c13.png)
**Bước 2** : Hiển thị modal **Create instance** từ snapshot.
[![file](/img/migrated/image-1712653436496-23f6c725.png)](/img/migrated/image-1712653436496-23f6c725.png)
**Bước 3** : Tạo máy ảo từ snapshot thành công, hệ thống hiển thị máy ảo tại màn hình **Instance Management**
[![file](/img/migrated/image-1734595491154-0444976f.png)](/img/migrated/image-1734595491154-0444976f.png)
### **3. Xóa snapshot đã tạo**
**Bước 1** : Ở menu chọn **Snapshot** , trong phần **Actions** của snapshot chọn **Delete Image**
[![file](/img/migrated/image-1734595518655-0f965a42.png)](/img/migrated/image-1734595518655-0f965a42.png)
**Bước 2** : Chọn **Delete snapshot**
Sau khi xác nhận xóa snapshot, hệ thống sẽ tiến hành xóa image, trả lại tài nguyên snapshot đã chiếm dụng cho VPC. Người dùng sẽ được thông báo khi quá trình xóa snapshot hoàn thành.
Nếu người dùng tích chọn vào ô “ _Delete all volume snapshots attached to this image_ ” thì những snapshot được tạo từ storage disk gắn trong máy ảo đó sẽ bị xóa.
[![file](/img/migrated/image-1712653461557-c3a5551d.png)](/img/migrated/image-1712653461557-c3a5551d.png)
## **Khởi tạo và quản lý snapshot từ storage disk**
### **1. Khởi tạo snapshot**
**Bước 1** : Ở menu chọn **Storage Disk** , trong phần **Actions** của máy ảo cần tạo snapshot. Chọn **Snapshot** > chọn **Create volume snapshot**
[![file](/img/migrated/image-1734595578696-e2a9d562.png)](/img/migrated/image-1734595578696-e2a9d562.png)
**Bước 2** : Nhấn **Create volume snapshot** để tạo
[![file](/img/migrated/image-1744797304260-c56185cf.png)](/img/migrated/image-1744797304260-c56185cf.png)
**Bước 3** : Tạo snapshot thành công, hiển thị tại màn hình **Snapshots** trong phần **Storage snapshot**
[![file](/img/migrated/image-1734595691770-9cda8337.png)](/img/migrated/image-1734595691770-9cda8337.png)
### **2. Tạo storage disk từ snapshot đã có**
**Bước 1** : Ở menu chọn **Snapshot** , trong phần **Actions** của snapshot chọn **Create storage disk**
[![file](/img/migrated/image-1734595729279-9bdc6a8e.png)](/img/migrated/image-1734595729279-9bdc6a8e.png)
**Bước 2** : Nhấn **Create storage disk** để tạo 
[![file](/img/migrated/image-1712653495975-03166cff.png)](/img/migrated/image-1712653495975-03166cff.png)
### **3. Xóa snapshot tạo từ storage disk**
**Bước 1** : Ở menu chọn **Snapshot** , trong phần **Actions** của snapshot chọn **Delete Snapshot**
[![file](/img/migrated/image-1734595780158-c6454938.png)](/img/migrated/image-1734595780158-c6454938.png)
**Bước 2** : Nhấn **Delete snapshot** để tiến hành xóa
[![file](/img/migrated/image-1712653549274-050d524e.png)](/img/migrated/image-1712653549274-050d524e.png)
## **Khởi tạo và quản lý snapshot đối với loại dịch vụ Specific**
### **1. Tạo Snapshot cho máy ảo**
**Bước 1** : Ở menu chọn **Instance Management** , trong phần **Actions** của máy ảo cần tạo snapshot, chọn **Create snapshot**.
[![file](/img/migrated/image-1734595898541-1f53740c.png)](/img/migrated/image-1734595898541-1f53740c.png)
**Bước 2** : Chọn **Create** trong popup xác nhận để tiến hành tạo snapshot.
[![file](/img/migrated/image-1712818258855-797847d8.png)](/img/migrated/image-1712818258855-797847d8.png)
Sau khi xác nhận tạo snapshot, hệ thống sẽ tiến hành kiểm tra tài nguyên, tạo image snapshot và thông báo kết quả xử lý.
Trung bình khi khởi tạo snapshot sẽ mất tầm 30 phút, tùy thuộc vào dòng máy và dữ liệu hiện tại trên máy ảo. Người dùng sẽ được thông báo khi quá trình tạo snapshot đã hoàn thành.
Lưu ý: Mỗi instance sẽ được tạo và lưu trữ 1 snapshot. Snapshot tạo được mới nhất sẽ ghi đè lên snapshot đã tạo của instance.
### **2. Khôi phục máy ảo từ snapshot**
Lưu ý: Thao tác này chỉ áp dụng được cho instance đã tạo snapshot thành công. Người dùng vui lòng kiểm tra instance cần thiết đã có snapshot hay chưa.
**Bước 1** : Ở menu chọn **Instance Management** , , trong phần **Actions** của máy ảo cần khôi phục, chọn **Restore snapshot**.
[![file](/img/migrated/image-1734596025787-1725e2ff.png)](/img/migrated/image-1734596025787-1725e2ff.png)
**Bước 2** : Chọn **Restore instance** trong popup xác nhận để tiến hành khôi phục.
[![file](/img/migrated/image-1712818286728-db082ce3.png)](/img/migrated/image-1712818286728-db082ce3.png)
Sau khi xác nhận khôi phục máy ảo từ snapshot, hệ thống sẽ tiến hành khôi phục sau khi kiểm tra dữ liệu snapshot. Trung bình khi khôi phục máy ảo từ snapshot sẽ mất tầm 30 phút, tùy thuộc vào dòng máy và dữ liệu hiện tại trên máy. Trong suốt quá trình này, máy ảo có thể sẽ được tắt, người dùng sẽ không thể thao tác với máy tạm thời cho đến khi quá trình khôi phục hoàn thành.
Người dùng sẽ được thông báo khi quá trình restore đã hoàn tất và máy ảo được bật lại.
### **3. Xóa instance snapshot**
Lưu ý: Thao tác này chỉ áp dụng được cho instance đã tạo snapshot thành công. Người dùng vui lòng kiểm tra instance cần thiết đã có snapshot hay chưa. Snapshot đã xóa không thể khôi phục lại được. 
Hãy cẩn thận khi thực hiện thao tác này.
**Bước 1** : Ở menu chọn **Instance Management** , trong phần **Actions** của máy ảo cần xóa image, chọn **Delete snapshot**.
[![file](/img/migrated/image-1734596064066-5bcf4544.png)](/img/migrated/image-1734596064066-5bcf4544.png)
**Bước 2:** Chọn **Delete snapshot**.
[![file](/img/migrated/image-1712818777331-c575dc0c.png)](/img/migrated/image-1712818777331-c575dc0c.png)
Sau khi xác nhận xóa snapshot, hệ thống sẽ tiến hành xóa image, trả lại tài nguyên snapshot đã chiếm dụng cho VPC. Người dùng sẽ được thông báo khi quá trình xóa snapshot hoàn thành.