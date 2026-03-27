---
id: "cost-explorer-dimension-service"
title: "Cost explorer theo dịch vụ"
description: "**Tại menu tab bar, chọn Billing > chọn Cost Explorer. Hệ thống hiển thị chi phí theo các dịch vụ sử dụng thuộc tất cả P"
sidebar_label: "Cost explorer theo dịch vụ"
sidebar_position: 2
---

# Cost Explorer Dimension Service

**Tại menu tab bar, chọn Billing > chọn Cost Explorer. Hệ thống hiển thị chi phí theo các dịch vụ sử dụng thuộc tất cả Project trong Tenant.**
Kéo thanh scroll hoặc lăn chuột để zoom in/zoom out vào 1 điểm trên biểu đồ để xem ở dữ liệu ở từng thời điểm
[![file](/img/migrated/image-1745469271136-91cd6135.png)](/img/migrated/image-1745469271136-91cd6135.png)
**Chọn button Customize Filter > xuất hiện pop-up cho phép chọn điều kiện để lọc giá trị theo mục đích. Các điều kiện lọc bao gồm:**
  * Start date – End date: Khoảng thời gian tính tiền.
  * Period type: Xem biểu đồ biến động chi phí được chia nhỏ theo ngày (daily) hoặc theo tháng (monthly). 
  * Service: Tên dịch vụ. Người dùng có thể chọn nhiều service. Nếu không có service cụ thể nào được chọn, hệ thống mặc định show dữ liệu của tất cả các dịch vụ và thỏa mãn các điều kiện khác trong bộ filter.
  * Project: Có thể chọn nhiều Project. Nếu filter Project trống, hệ thống mặc định không lọc dữ liệu bằng Project, tức là dữ liệu kết quả chỉ thỏa mãn các điều kiện khác của filter và không bị ảnh hưởng bởi project
  * VPC: 
    * Có thể chọn nhiều VPC. Nếu filter VPC trống, hệ thống mặc định lọc dữ liệu bằng VPC, tức là dữ liệu kết quả chỉ thỏa mãn các điều kiện khác của bộ lọc và không bị ảnh hưởng bởi VPC. 
    * Nếu ở điều kiện Project, người dùng chọn một vài Project cụ thể, thì VPC được chọn chỉ bao gồm các VPC thuộc Project đã chọn bên trên. 
  * Tag: 
    * Các tag được quản lý trên Portal. Người dùng có thể chọn nhiều tag.
    * Nếu filter tagging trống, hệ thống mặc định không lọc dữ liệu bằng tagging, tức là dữ liệu chỉ thỏa mãn các điều kiện khác của bộ lọc và không bị ảnh hưởng bởi tagging. 

[![file](/img/migrated/image-1745469282868-f7d5649a.png)](/img/migrated/image-1745469282868-f7d5649a.png)