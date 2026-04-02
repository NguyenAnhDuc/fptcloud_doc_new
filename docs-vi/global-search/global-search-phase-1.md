---
id: "global-search-phase-1"
title: "Hướng dẫn sử dụng Global Search"
description: "Hướng dẫn chi tiết cách sử dụng tính năng Global Search trên FPT Cloud để tìm kiếm và quản lý tài nguyên."
sidebar_label: "Hướng dẫn sử dụng"
sidebar_position: 2
pagination_next: null
---

# Hướng dẫn sử dụng Global Search

Tính năng Global Search trên FPT Cloud cho phép bạn tìm kiếm nhanh các tài nguyên trong hệ thống trong phạm vi một Tenant, bao gồm **Instances, IP Addresses, Subnets, Security Groups, Database**.

**Bước 1.** Nhập từ khoá vào ô tìm kiếm ở phía trên cùng của giao diện FPT Cloud.

[![](/img/migrated/gsdb-1024x535-32afb917.png)](/img/migrated/gsdb-1024x535-32afb917.png)

**Bước 2.** Chọn một trong các tab Instances, IP Addresses, Subnets, Security Groups, Database để xem kết quả gom nhóm theo từng loại tài nguyên.

- Bên dưới tab là kết quả tìm kiếm tương ứng với từng loại tài nguyên.
- Cho phép bạn tìm kiếm IP Public và IP Private và áp dụng cho các NIC của VM. Bạn có thể xem các tài nguyên đang gắn vào IP (Associated Resource - scope hiện tại hỗ trợ tìm kiếm Instance, Subnet theo IP). Không hỗ trợ tìm IP ngoài danh mục đã mô tả (ví dụ: IP DHCP, IP gateway).
- Bấm vào từng kết quả để đến giao diện thông tin chi tiết của tài nguyên đó.

:::note
Nếu tài nguyên không có giao diện thông tin chi tiết, hệ thống sẽ dẫn đến màn hình danh sách của loại tài nguyên đó.
:::

**Bước 3.** Nếu muốn xem toàn bộ kết quả, bấm **View all result**.

**Bước 4.** Hệ thống mở ra màn hình với toàn bộ kết quả tìm kiếm.

[![](/img/migrated/Screenshot-2025-11-03-at-10.09.40-1024x5-1d8fcc25.png)](/img/migrated/Screenshot-2025-11-03-at-10.09.40-1024x5-1d8fcc25.png)

**Bước 5.** Giới hạn kết quả tìm kiếm bằng bộ lọc VPC, Region hoặc ô tìm kiếm **Search by resource name**.

**Bước 6.** Bấm **Download** để tải xuống file danh sách kết quả theo các kết quả đang hiển thị trên màn hình.

[![](/img/migrated/search-img-4-1024x801-d4eae9d2.png)](/img/migrated/search-img-4-1024x801-d4eae9d2.png)

File tải xuống có định dạng Excel với 6 sheets:

- **Sheet Summary**: tổng hợp toàn bộ kết quả tìm kiếm gồm Instance, Floating IP, Subnet, Security Group, Database.
- **Sheet Instances**: gom nhóm Instances từ sheet Summary. Nếu sheet Summary không có dữ liệu thì để trống.

[![](/img/migrated/search-img-5-1024x517-6eb1006b.png)](/img/migrated/search-img-5-1024x517-6eb1006b.png)

- **Sheet Floating IPs**: gom nhóm Floating IPs từ sheet Summary. Nếu sheet Summary không có dữ liệu thì để trống.
- **Sheet Subnets**: gom nhóm Subnets từ sheet Summary. Nếu sheet Summary không có dữ liệu thì để trống.
- **Sheet Security Groups**: gom nhóm Security Groups từ sheet Summary. Nếu sheet Summary không có dữ liệu thì để trống.
- **Sheet Database**: gom nhóm Database từ sheet Summary. Nếu sheet Summary không có dữ liệu thì để trống.
