---
id: "tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao"
title: "Tra cứu thông tin, thông số kỹ thuật của máy ảo đã tạo"
description: "**Bước 1** : Ở menu chọn **Instance Management** , sau đó nhấn chọn vào một máy ảo cụ thể"
sidebar_label: "Tra cứu thông tin, thông số kỹ thuật của máy ảo đã tạo"
sidebar_position: 16
---

# Tutorials Tra Cuu Thong Tin Thong So Ky Thuat Cua May Ao Da Tao

**Bước 1** : Ở menu chọn **Instance Management** , sau đó nhấn chọn vào một máy ảo cụ thể
[![Userguide FPT Cloud Server 2022 36](/img/migrated/Userguide-FPT-Cloud-Server-2022-36-1024x-8734718d.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-36-1024x-8734718d.png)
**Bước 2** : Kiểm tra thông tin chi tiết của máy ảo bao gồm **Host name** , cấu hình (**Ram** , **CPU** , **Storage**), **Operating systems** , địa chỉ **Private IP** , địa chỉ **Public IP** (nếu có), trạng thái hoạt động (tắt/bật/suspended).
[![Userguide FPT Cloud Server 2022 37](/img/migrated/Userguide-FPT-Cloud-Server-2022-37-1024x-a8e782ec.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-37-1024x-a8e782ec.png)
Ngoài ra, trong trang **Instance details** , người dùng còn có thể cấu hình, theo dõi chi tiết các thông tin khác trên sub menu như:
  * **Allocate floating IP** : Gán một Public IP cho máy ảo để có thể đi ra ngoài mạng internet.
  * **Instance Monitoring** : Theo dõi tiến trình hoạt động, mức độ sử dụng tài nguyên CPU, RAM, tốc độ đọc/ghi của ổ cứng máy ảo theo giờ/ngày/tuần.
  * **Instance storage** : Theo dõi, chỉnh sửa các ổ cứng **local storage** và các **storage disk** gắn ngoài của **máy ảo**.
  * **Activity Log** : Theo dõi, giám sát lịch sử tác động của tất cả user khác đối với máy ảo này.

[![Userguide FPT Cloud Server 2022 38](/img/migrated/Userguide-FPT-Cloud-Server-2022-38-1024x-b9c09c62.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-38-1024x-b9c09c62.png)
## **1. Xem lịch sử hoạt động (Activity log)**
**Activity Log** sẽ hiển thị toàn bộ lịch sử hoạt động của máy ảo đấy. Các thông tin sẽ hiển thị gồm Tên user tạo ra hành động, tên hành động và thời gian.
**Bước 1** : Truy cập vào trang **Instance details** bằng cách chọn tên máy ảo trên bảng quản trị **Instance Management**.
[![Userguide FPT Cloud Server 2022 36](/img/migrated/Userguide-FPT-Cloud-Server-2022-36-1024x-8734718d.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-36-1024x-8734718d.png)
**Bước 2:** Chọn tab **Activity log.**
[![Userguide FPT Cloud Server 2022 39](/img/migrated/Userguide-FPT-Cloud-Server-2022-39-1024x-bba7cc1a.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-39-1024x-bba7cc1a.png)
## **2. Truy cập Monitor giám sát Instance**
**Monitor** sẽ hiển thị các trạng thái, thông số kỹ thuật quan trọng của máy ảo
**Bước 1** : Truy cập vào trang **Instance details** bằng cách chọn tên máy ảo trên bảng quản trị **Instance Management**.
[![Userguide FPT Cloud Server 2022 36](/img/migrated/Userguide-FPT-Cloud-Server-2022-36-1024x-8734718d.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-36-1024x-8734718d.png)
**Bước 2:** Chọn mục **Monitor.** Ở đây sẽ hiển thị realtime toàn bộ các thông số của Instance như **Instance vCPU Usage** , **Instance vCPU Contention,…**
[![Userguide FPT Cloud Server 2022 40](/img/migrated/Userguide-FPT-Cloud-Server-2022-40-1024x-cdc66ccc.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-40-1024x-cdc66ccc.png)