---
id: "guide-asset-by-team"
title: "Hướng dẫn đọc biểu đồ Asset by team"
description: "Biểu đồ phân tích số lượng asset (repositories, images) đang được các team quản lý trong hệ thống."
sidebar_label: "Hướng dẫn đọc biểu đồ Asset by team"
sidebar_position: 4
pagination_next: null
---

# Hướng dẫn đọc biểu đồ Asset by team

Biểu đồ phân tích số lượng asset (repositories, images) đang được các team quản lý trong hệ thống. 
_Note_ : 
  * _Biểu đồ lấy dữ liệu từ lần quét thành công gần nhất._
  * _Ấn ‘Refresh’ để làm mới dữ liệu_

[![anhfsec](/img/migrated/map-asset-d0bb4e87.png)](/img/migrated/map-asset-d0bb4e87.png)

## Cấu trúc biểu đồ  
| Thành phần  | Mô tả  |  
| --- | --- |  
| Loại biểu đồ  | Grouped Bar Chart (biểu đồ cột nhóm)  |  
| Trục X  | Tên các team/subteam (sắp xếp từ trái qua phải theo tổng số asset giảm dần)  |  
| Trục Y  | Số lượng asset theo từng tool tích hợp  |  
| Legend  | Danh sách các tool tích hợp, hiển thị dưới góc phải (Right Bottom)  |  
| Group Column  | Mỗi team có 1 nhóm gồm tối đa 5 cột con – mỗi cột tương ứng 1 tool tích hợp  |  

## Lọc dữ liệu theo nhu cầu
**Tùy chọn legend (góc phải dưới):**
  * Click để ẩn/hiện dữ liệu theo từng loại asset, bao gồm asset từ GitHub, GitLab, GitLab server, FPT Container Registry, Harbor 

Có thể áp dụng filter team ở phần trên của dashboard để thu hẹp dữ liệu theo bộ phận cụ thể.
