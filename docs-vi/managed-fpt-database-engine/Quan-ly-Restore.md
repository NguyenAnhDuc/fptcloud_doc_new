---
id: "Quan-ly-Restore"
title: "1 Tạo Restore Point"
description: "**1 Tạo Restore Point**"
sidebar_label: "1 Tạo Restore Point"
sidebar_position: 15
---

# Quản lý Restore

**1 Tạo Restore Point**
Để có thể sử dụng được tính năng restore, quý khách cần có • Một Database Engine đã được tạo (provision) thành công • Ít nhất một job backup đã được tạo và chạy qua 1 mốc thời gian schedule
**Bước 1:** Chọn **Database Engine** > Chọn một **ID Cluster** > trên *_Database Detail_ , chọn tab **Restore**
[![](/img/migrated/6.3_buoc-1-0a621b7a.png)](/img/migrated/6.3_buoc-1-0a621b7a.png)
• Sau khi có một bản Backup được chạy, tại tab **Available Restore point** hiển thị **Restore Point** có một bản **Backup Type.**
o Job Full sẽ tạo ra 1 restore point với backup type **Full**
o Job Diff sẽ tạo ra 1 restore point với backup type **Diff**
[![](/img/migrated/6.3-buoc1.1-69d07b92.png)](/img/migrated/6.3-buoc1.1-69d07b92.png)
• Tại cột **Actions** bấm vào dấu 3 chấm > chọn **Restore**
[![](/img/migrated/6.3-buoc1.2-8262cfcb.png)](/img/migrated/6.3-buoc1.2-8262cfcb.png)
[![](/img/migrated/6.3-buoc1.3-028093c2.png)](/img/migrated/6.3-buoc1.3-028093c2.png)
• Màn hình xuất hiện popup **Restore Database** , quý khách có thể lựa chọn cấu hình lại cho Restored Database bằng cấu hình có sẵn Preset Configuration hoặc cấu hình Custom Configuation do khách hàng tự nhập theo quota cho sẵn. • Sau đó nhấn **Restore**
[![](/img/migrated/6.3-buoc1.4-c1e933e8.png)](/img/migrated/6.3-buoc1.4-c1e933e8.png)
[![](/img/migrated/6.3-buoc1.5-42e59be4.png)](/img/migrated/6.3-buoc1.5-42e59be4.png)
• Sau khi một Restore tạo thành công, trên Database Management sẽ xuất hiện Id Cluster mới có tên Restore + tên ID Cluster mới from Id Cluster cũ.
[![](/img/migrated/6.3-buoc1.6-4b4c88c3.png)](/img/migrated/6.3-buoc1.6-4b4c88c3.png)
