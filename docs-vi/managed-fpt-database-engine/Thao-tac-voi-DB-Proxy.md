---
id: "manage-db-proxy"
title: "Thao tac voi db Proxy"
description: "**Bước 1:** Xem danh sách DB Proxy"
sidebar_label: "Thao tac voi db Proxy"
sidebar_position: 22
pagination_next: null
---

# Thao tác với DB Proxy

**Bước 1:** Xem danh sách DB Proxy
  * Status = **Running** : DB Proxy đã tạo thành công
  * Status = **Processing** : DB Proxy đang được tạo 
    * Có action: **Start/Stop/Restart/Resize/Delete/Detail**
  * Status = **Failed** : DB Proxy bị tạo lỗi 
    * Có action: **Delete.**

[![](/img/migrated/DBThta-1-9688a724.png)](/img/migrated/DBThta-1-9688a724.png)
**Trường hợp 1: Stop DB Proxy**
  * DB Proxy phải ở trạng thái = Running.
  * Chọn Actions ở DB Proxy cluster ID quý khách muốn stop
  * Chọn **Stop**

[![](/img/migrated/DB-Stop1-5603f1dc.png)](/img/migrated/DB-Stop1-5603f1dc.png)
• Xuất hiện popup **Stop Database Cluster ID** , quý khách nhập lại Cluster ID để xác nhận lại, bấm **Stop.**
[![](/img/migrated/DB-Stop2-5a8afe96.png)](/img/migrated/DB-Stop2-5a8afe96.png)
  * DB Proxy sẽ ở trạng thái **Stopping** và không thể thao tác gì thêm cho tới khi hệ thống process xong. Quá trình này kéo dài trong vòng 5 – 7 phút.

[![](/img/migrated/DB-Stop3-b375b7c0.png)](/img/migrated/DB-Stop3-b375b7c0.png)
**Trường hợp 2: Start DB Proxy**
  * DB Proxy ở trạng thái **Stopped**
  * Tại cột Action quý khách bấm **Start**

[![](/img/migrated/DB-Start1-ad5fc12b.png)](/img/migrated/DB-Start1-ad5fc12b.png)
  * Xuất hiện popup **Start Database Cluster ID** , quý khách nhập lại Cluster ID để xác nhận lại, bấm **Start**

[![](/img/migrated/DB-Start2-b12a86fa.png)](/img/migrated/DB-Start2-b12a86fa.png)
  * DB Proxy sẽ ở trạng thái **Starting** và không thể thao tác gì thêm cho tới khi hệ thống process xong. Quá trình này kéo dài trong vòng 5 – 7 phút.

[![](/img/migrated/DB-Start3-1a85e282.png)](/img/migrated/DB-Start3-1a85e282.png)
**Trường hợp 3: Restart DB Proxy**
• **DB Proxy** ở trạng thái Running.
• Tại cột **Action** quý khách bấm **Restart**
[![](/img/migrated/DB_restart-20aee588.png)](/img/migrated/DB_restart-20aee588.png)
• Xuất hiện popup **Restart Database Cluster ID** , quý khách nhập lại Cluster ID để xác nhận lại, bấm **Restart.**
[![](/img/migrated/DB_restart2-ca969ed6.png)](/img/migrated/DB_restart2-ca969ed6.png)
• **DB Proxy** sẽ ở trạng thái **Restarting** và không thể thao tác gì thêm cho tới khi hệ thống process xong. Quá trình này kéo dài trong vòng 5 – 7 phút.
[![](/img/migrated/DB_restart3-76af49ff.png)](/img/migrated/DB_restart3-76af49ff.png)
**Trường hợp 4: Resize DB Proxy**
  * DB Proxy ở trạng thái **Running**.
  * Tại cột Action quý khách bấm **Resize.**

[![](/img/migrated/DB_resize1-26443919.png)](/img/migrated/DB_resize1-26443919.png)
  * Xuất hiện popup **Resize DB Proxy** , quý khách nhập thông tin vCPU và RAM, bấm **Resize DB Proxy.**

[![](/img/migrated/DB_resize2-46fc1c9b.png)](/img/migrated/DB_resize2-46fc1c9b.png)
  * DB Proxy sẽ ở trạng thái **Resizing** và không thể thao tác gì thêm cho tới khi hệ thống process xong. Quá trình này kéo dài trong vòng 5 – 7 phút.

[![Alt text](/img/migrated/DB_resize3-1d61f76b.png)](/img/migrated/DB_resize3-1d61f76b.png)
**Trường hợp 5: Delete DB Proxy**
  * DB Proxy ở trạng thái **Running** /**Stopped/Failed**
  * Tại cột Action quý khách bấm **Delete**

[![](/img/migrated/DB_delete1-79ffa16d.png)](/img/migrated/DB_delete1-79ffa16d.png)
  * Xuất hiện popup **Delete Database Cluster ID** , quý khách nhập lại Cluster ID để xác nhận lại, bấm **Delete**

[![](/img/migrated/DB_delete2-e50a6b16.png)](/img/migrated/DB_delete2-e50a6b16.png)
  * DB Proxy sẽ ở trạng thái **Deleting** và không thể thao tác gì thêm cho tới khi hệ thống process xong

[![](/img/migrated/DB_delete3-14ab9e83.png)](/img/migrated/DB_delete3-14ab9e83.png) **Trường hợp 6: Detail DB Proxy**
  * DB Proxy ở trạng thái **Running**
  * Tại cột Action quý khách bấm **Detail**

[![](/img/migrated/DB_Detail1-98be4280.png)](/img/migrated/DB_Detail1-98be4280.png)
  * Xuất hiện popup **DB Proxy Detail** , quý khách nhập lại Cluster ID để xác nhận lại, bấm **Close** để tắt popup

[![](/img/migrated/DB_Detail2-8b026bce.png)](/img/migrated/DB_Detail2-8b026bce.png)
