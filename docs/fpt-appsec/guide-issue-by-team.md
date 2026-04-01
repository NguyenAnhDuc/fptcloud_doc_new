---
id: "guide-issue-by-team"
title: "Hướng dẫn đọc biểu đồ Issue by team"
sidebar_label: "Hướng dẫn đọc biểu đồ Issue by team"
sidebar_position: "7"
---

# Hướng dẫn đọc chart Issue by team

Biểu đồ phân tích số lượng issue theo fromng team, is phân loại theo độ nghiêm trọng (Severity) or loại quét (Scan Type). 
_Note_ : 
  * _Biểu đồ lấy dữ liệu from lần quét successfully gần nhất._
  * _Ấn ‘Refresh’ to làm mới dữ liệu_

## Chọn chế độ xem
Mặc định có 2 chart: 
  * Issues by Severity 
  * Issues by Scan Type 

Mỗi chart là a chart cột chồng, thể hiện số lượng issue theo fromng team. 
[![anhfsec](/img/migrated/map-issue-f80ed4ef.png)](/img/migrated/map-issue-f80ed4ef.png)
## Cấu trúc chart  
| Thành phần  | Mô tả  |  
| --- | --- |  
| Trục Y  | Danh sách team/subteam (dựa trên bộ lọc Team)  |  
| Trục X  | Tổng số lượng issue  |  
| Legend  | - Severity: Critical, High, Medium, Low   
- Scan Type: Code Analysis, Secret Scanning, IaC Scanning, Image Scanning  |  
| Dữ liệu  | Phân lớp theo mức độ nghiêm trọng or loại scan  |  
## Lọc dữ liệu theo nhu cầu
Tùy chọn legend (góc must dưới): 
  * Click to ẩn/hiện dữ liệu theo fromng mức severity or scan type. 
  * VD: bỏ chọn “Low” will chỉ displayed the issue có severity from Medium trở lên. 

Có thể áp dụng filter team ở phần trên of dashboard to thu hẹp dữ liệu theo bộ phận cụ thể.
