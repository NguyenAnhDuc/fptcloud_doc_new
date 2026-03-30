---
id: "quan-ly-retention-run"
title: "Quản lý Retention Run"
description: "Người dùng có thể quản lý danh sách các Retention Run đã chạy quy tắc. Ngoài ra người dùng có thể chạy thủ công các quy "
sidebar_label: "Quản lý Retention Run"
sidebar_position: 17
pagination_next: null
---

# Quan Ly Retention Run

Người dùng có thể quản lý danh sách các Retention Run đã chạy quy tắc. Ngoài ra người dùng có thể chạy thủ công các quy tắc, chạy DRY RUN để kiểm tra cấu hình quy tắc, ABORT một retentions đang chạy, xem chi tiết mỗi lần chạy quy tắc và logs đã chạy. 
**_1. Chạy các quy tắc thử công với RUN NOW_**
Để thực hiện chạy quy tắc, người dùng có thể thực hiện như sau: 
**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > **RUN NOW**
[![](/img/migrated/Picture48-1-1310d2d8.png)](/img/migrated/Picture48-1-1310d2d8.png)
**Bước 2** : Click **OK** để confirm chạy Retentions: 
[![](/img/migrated/Picture49-1-ad9995a4.png)](/img/migrated/Picture49-1-ad9995a4.png)
**Bước 3** : Kết quả sau khi chạy Retention 
[![](/img/migrated/Picture50-1-67a91903.png)](/img/migrated/Picture50-1-67a91903.png)
**_2. Chạy Retention với DRY RUN_**
**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > **DRY RUN**
[![](/img/migrated/Picture51-1-6b16d900.png)](/img/migrated/Picture51-1-6b16d900.png)
**Bước 2** : Kết quả sau khi chạy DRY RUN 
[![](/img/migrated/Picture52-1-b8c3c76a.png)](/img/migrated/Picture52-1-b8c3c76a.png)
Khác với chạy **RUN NOW, DRY RUN** sẽ không thực sự xoá các images trên repository 
**_3. Abort một Retention Run_**
Người dùng có thể Abot một Retention đang Running thực hiện như sau: **Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > click retentions đang **Running** > **ABORT**
[![](/img/migrated/Picture53-1-aedc2cf2.png)](/img/migrated/Picture53-1-aedc2cf2.png)
**Bước 2** : Click **OK** để confirm hành động Abort 
[![](/img/migrated/Picture54-a4f9fc84.png)](/img/migrated/Picture54-a4f9fc84.png)
**Bước 3** : Kết quả sau khi thực hiện Abort 
[![](/img/migrated/Picture55-6ea6d35a.png)](/img/migrated/Picture55-6ea6d35a.png)
**_4. Xem danh sách các retention run_**
**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy**
[![](/img/migrated/Picture56-d461b01d.png)](/img/migrated/Picture56-d461b01d.png)
**_5. Xem logs một retention run_**
**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > Click vào một Retention run để xem chi tiết một task run
[![](/img/migrated/Picture57-cd40bdbd.png)](/img/migrated/Picture57-cd40bdbd.png)
**Bước 2** : Kiểm tra logs chạy retentions run cho một repository: 
[![](/img/migrated/Picture58-6d27606a.png)](/img/migrated/Picture58-6d27606a.png)