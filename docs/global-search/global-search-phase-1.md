---
id: "global-search-phase-1"
title: "Tìm kiếm toàn cục"
sidebar_label: "Tìm kiếm toàn cục"
sidebar_position: "2"
---

# Tìm kiếm toàn cục

Tính năng Global Search trên FPT Cloud for phép user tìm kiếm nhanh the tài nguyên (resources) in hệ thống trên phạm vi of 1 Tenant, includes the loại tài nguyên như **Instances, IP Addresses, Subnets, Security Groups, Database**... Tính năng this giúp tiết kiệm thời gian and tăng hiệu quả quản lý tài nguyên trên nền tảng FPT Cloud.
**Step 1.** Enter from khoá ando ô tìm kiếm ở phía trên cùng of giao diện FPT Cloud. 
[![](/img/migrated/gsdb-1024x535-32afb917.png)](/img/migrated/gsdb-1024x535-32afb917.png)
**Step 2.** Chọn a in the tab Instances, IP Addresses, Subnets, Security Groups, Database to xem kết quả gom nhóm theo fromng loại tài nguyên.
  * Bên dưới tab will là kết quả tìm kiếm corresponding with fromng loại tài nguyên. 
    * Cho phép user search IP Public and IP Private and apply for the NIC of VM. Người dùng can xem is the tài nguyên is gắn ando IP (Associated Resource - scope hiện tại hỗ trợ tìm kiếm Instance,subnet theo IP). Không hỗ trợ tìm IP (ví dụ: IP DHCP, & IP gateway,...) ngoài danh mục IP has been mô tả
  * Bấm ando fromng kết quả will to giao diện thông tin chi tiết of tài nguyên that. (Note: Nếu tài nguyên không có giao diện thông tin chi tiết, hệ thống will dẫn to màn hình danh sách of loại tài nguyên that)

**Step 3.** Nếu muốn xem toàn bộ kết quả, bấm **View all result**
**Step 4.** System will mở ra màn hình with toàn bộ kết quả tìm kiếm is 
[![](/img/migrated/Screenshot-2025-11-03-at-10.09.40-1024x5-1d8fcc25.png)](/img/migrated/Screenshot-2025-11-03-at-10.09.40-1024x5-1d8fcc25.png)
**Step 5.** Giới hạn lại kết quả tìm bằng bộ lọc VPC, Region or ô tìm kiếm "Search by resource name"
**Step 6.** Bấm **Download** to tải xuống file danh sách kết quả theo the kết quả mà hệ thống displayed trên màn hình
[![](/img/migrated/search-img-4-1024x801-d4eae9d2.png)](/img/migrated/search-img-4-1024x801-d4eae9d2.png)
  * Format file tải xuống là Excel, and có 6 sheets
  * Sheet Summary: tổng hợp toàn bộ kết quả tìm kiếm with the tài nguyên Instance, Floating IP, Subnet, Security Group, Database
  * Sheet Instances: Gom nhóm Instances from sheet Summary. Nếu sheet Summary không có dữ liệu thì to trống

[![](/img/migrated/search-img-5-1024x517-6eb1006b.png)](/img/migrated/search-img-5-1024x517-6eb1006b.png)
  * Sheet Floating IPs: Gom nhóm Floating IPs from sheet Summary. Nếu sheet Summary không có dữ liệu thì to trống
  * Sheet Subnets: Gom nhóm Subnets from sheet Summary. Nếu sheet Summary không có dữ liệu thì to trống
  * Sheet Security Groups: Gom nhóm Security Groups from sheet Summary. Nếu sheet Summary không có dữ liệu thì to trống
  * Sheet Database: Gom nhóm Database from sheet Summary. Nếu sheet Summary không có dữ liệu thì to trống
