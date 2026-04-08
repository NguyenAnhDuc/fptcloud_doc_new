---
id: "global-search-phase-1"
title: "Tìm kiếm toàn cục"
sidebar_label: "Tìm kiếm toàn cục"
---

Global Search


Tính năng Global Search trên FPT Cloud cho phép người dùng tìm kiếm nhanh các tài nguyên (resources) trong hệ thống trên phạm vi của 1 Tenant, bao gồm các loại tài nguyên như **Instances, IP Addresses, Subnets, Security Groups, Database**... Tính năng này giúp tiết kiệm thời gian và tăng hiệu quả quản lý tài nguyên trên nền tảng FPT Cloud.

**Bước 1.** Nhập từ khoá vào ô tìm kiếm ở phía trên cùng của giao diện FPT Cloud.

![](images/global-search-phase-1/img-001.png)

**Bước 2.** Chọn một trong các tab Instances, IP Addresses, Subnets, Security Groups, Database để xem kết quả gom nhóm theo từng loại tài nguyên.

  * Bên dưới tab sẽ là kết quả tìm kiếm tương ứng với từng loại tài nguyên.
    * Cho phép người dùng search IP Public và IP Private và apply cho các NIC của VM. Người dùng có thể xem được các tài nguyên đang gắn vào IP (Associated Resource - scope hiện tại hỗ trợ tìm kiếm Instance,subnet theo IP). Không hỗ trợ tìm IP (ví dụ: IP DHCP, & IP gateway,...) ngoài danh mục IP đã mô tả
  * Bấm vào từng kết quả sẽ đến giao diện thông tin chi tiết của tài nguyên đó. (Lưu ý: Nếu tài nguyên không có giao diện thông tin chi tiết, hệ thống sẽ dẫn đến màn hình danh sách của loại tài nguyên đó)


**Bước 3.** Nếu muốn xem toàn bộ kết quả, bấm **View all result**

**Bước 4.** Hệ thống sẽ mở ra màn hình với toàn bộ kết quả tìm kiếm được

![](images/global-search-phase-1/img-002.png)

**Bước 5.** Giới hạn lại kết quả tìm bằng bộ lọc VPC, Region hoặc ô tìm kiếm "Search by resource name"

**Bước 6.** Bấm **Download** để tải xuống file danh sách kết quả theo các kết quả mà hệ thống hiển thị trên màn hình

![](images/global-search-phase-1/img-003.png)

  * Format file tải xuống là Excel, và có 6 sheets

  * Sheet Summary: tổng hợp toàn bộ kết quả tìm kiếm với các tài nguyên Instance, Floating IP, Subnet, Security Group, Database

  * Sheet Instances: Gom nhóm Instances từ sheet Summary. Nếu sheet Summary không có dữ liệu thì để trống


![](images/global-search-phase-1/img-004.png)

  * Sheet Floating IPs: Gom nhóm Floating IPs từ sheet Summary. Nếu sheet Summary không có dữ liệu thì để trống

  * Sheet Subnets: Gom nhóm Subnets từ sheet Summary. Nếu sheet Summary không có dữ liệu thì để trống

  * Sheet Security Groups: Gom nhóm Security Groups từ sheet Summary. Nếu sheet Summary không có dữ liệu thì để trống

  * Sheet Database: Gom nhóm Database từ sheet Summary. Nếu sheet Summary không có dữ liệu thì để trống
