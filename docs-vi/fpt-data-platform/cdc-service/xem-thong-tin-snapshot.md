---
id: "xem-thong-tin-snapshot"
title: "Xem thông tin snapshot"
sidebar_label: "Xem thông tin snapshot"
description: "Xem thông tin snapshot"
---

# Xem thông tin snapshot

Để xem thông tin snapshot của connector, người dùng thực hiện các bước sau:

**Bước 1:** Tại thanh menu chọn **Data Platform** > **Workspace Management** > chọn **Workspace name**

**Bước 2:** Tại phần **My services** chọn **CDC service**

**Bước 3:** Tại màn **detail CDC service** > Chọn tab **Connectors**

Tại màn hình danh sách Connectors, người dùng có thể xem thông tin snapshot của từng connector:

 * **Cột Snapshot Status**: Hiển thị trạng thái hiện tại của snapshot
 * Chỉ hiển thị với các source connector: MySQL, MariaDB, PostgreSQL, SQL Server
 * Các connector khác (Oracle, v.v.) hiển thị "-"
 * **Menu Actions > Snapshot**: Cho phép thực hiện các thao tác quản lý snapshot
 * Chỉ khả dụng với các source connector có hỗ trợ incremental snapshot
