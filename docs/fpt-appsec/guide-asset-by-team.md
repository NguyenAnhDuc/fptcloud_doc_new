---
id: "guide-asset-by-team"
title: "Hướng dẫn đọc biểu đồ Asset by team"
sidebar_label: "Hướng dẫn đọc biểu đồ Asset by team"
sidebar_position: "8"
---

# Hướng dẫn đọc chart Asset by team

Biểu đồ phân tích số lượng asset (repositories, images) is is the team quản lý in hệ thống. 
_Note_ : 
  * _Biểu đồ lấy dữ liệu from lần quét successfully gần nhất._
  * _Ấn ‘Refresh’ to làm mới dữ liệu_

[![anhfsec](/img/migrated/map-asset-d0bb4e87.png)](/img/migrated/map-asset-d0bb4e87.png)
## Cấu trúc chart  
| Thành phần  | Mô tả  |  
| --- | --- |  
| Loại chart  | Grouped Bar Chart (chart cột nhóm)  |  
| Trục X  | Tên the team/subteam (sắp xếp from trái qua phải theo tổng số asset giảm dần)  |  
| Trục Y  | Số lượng asset theo fromng tool tích hợp  |  
| Legend  | List the tool tích hợp, displayed dưới góc phải (Right Bottom)  |  
| Group Column  | Mỗi team có 1 nhóm gồm tối đa 5 cột con – mỗi cột corresponding 1 tool tích hợp  |  
## Lọc dữ liệu theo nhu cầu
**Tùy chọn legend (góc phải dưới):**
  * Click to ẩn/hiện dữ liệu theo fromng loại asset, includes asset from GitHub, GitLab, GitLab server, FPT Container Registry, Harbor 

Có thể áp dụng filter team ở phần trên of dashboard to thu hẹp dữ liệu theo bộ phận cụ thể.
