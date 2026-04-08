---
id: "作成済みの Managed GPU クラスターの一覧を表示"
title: "Xem danh sách Managed GPU Cluster đã tạo"
description: "Trang Managed GPU Cluster cho phép bạn xem và quản lý danh sách các GPU cluster đã tạo"
sidebar_label: "Xem danh sách Managed GPU Cluster đã tạo"
sidebar_position: 5
---

# Xem danh sách Managed GPU Cluster đã tạo

Trang [Managed GPU Cluster] cho phép bạn xem và quản lý danh sách các GPU cluster đã tạo. Để mở trang quản lý:

Trên **FPT Portal**, chọn **[AI Infrastructure] > [Managed GPU Cluster]**. Danh sách các cluster đã tạo sẽ hiển thị cùng các thông tin quan trọng như **Tên, Phiên bản, Worker Group, Trạng thái, Thời gian tạo, Thao tác**.

[![](/img/migrated/8-1-75374b83.png)](/img/migrated/8-1-75374b83.png)

**Xem chi tiết cluster**

**Bước 1:** Trong menu **[Managed GPU Cluster]**, trang **[Quản lý Managed GPU]** sẽ hiển thị. Chọn cluster bạn muốn xem chi tiết.

[![](/img/migrated/9-1-1670bae1.png)](/img/migrated/9-1-1670bae1.png)

**Bước 2:** Tab **[Essential Properties]** hiển thị thông tin của cluster.

[![](/img/migrated/10-1-6e0a4cbd.png)](/img/migrated/10-1-6e0a4cbd.png)

- **Thông tin cluster:** Tên cluster, phiên bản, cấu hình, mạng, trạng thái
- **Dịch vụ Load Balancer:** Thông tin internal LB subnet đã nhập
- **API:** URL API kết nối vào cluster

**Bước 3:** Tab **[Node Pool]** hiển thị tất cả worker group trong cluster và thông tin cấu hình của từng worker group.

[![](/img/migrated/11-1-3eeaf351.png)](/img/migrated/11-1-3eeaf351.png)

- **Tên:** Tên worker group
- **Is Based:** Hiển thị () nếu là worker base, hiển thị (✘) nếu không phải worker base.
- **Flavor Type:** Hiển thị tài nguyên flavor đã chọn.
- **Số lượng server:** Số MetalCloud server của worker
