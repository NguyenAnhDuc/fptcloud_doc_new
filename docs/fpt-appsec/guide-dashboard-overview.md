---
id: "guide-dashboard-overview"
title: "Hướng dẫn đọc các số liệu Dashboard - Organization overview"
sidebar_label: "Hướng dẫn đọc các số liệu Dashboard - Organization overview"
sidebar_position: "6"
---

# Hướng dẫn đọc the số liệu Dashboard - Organization overview

Section Organization overview thể hiện the chỉ số of organization (tổng dữ of tất cả the team). 
_Note_ : 
  * _Biểu đồ lấy dữ liệu from lần quét successfully gần nhất._
  * _Ấn ‘Refresh’ to làm mới dữ liệu_

[![anhfsec](/img/migrated/nhan-refet-85599f8b.png)](/img/migrated/nhan-refet-85599f8b.png)
Trường hợp không có dữ liệu, mặc định displayed dấu “-”.
## Total Teams (Tổng số lượng team)
Description: Tổng số team trực thuộc tổ chức hiện tại. 
[![anhfsec](/img/migrated/total-team-b5b57fe3.png)](/img/migrated/total-team-b5b57fe3.png)
## Total Issues (Tổng số issue)
Description: Tổng số issue is ghi nhận in lần quét successfully gần nhất of toàn bộ asset in org (includes team and subteam). 
Định dạng displayed: 
  * 0 – 9,999: displayed đầy đủ (VD: 5, 1200) 
  * 10,000 – 999,999: rút gọn theo nghìn (k), 1 chữ số thập phân, làm tròn xuống 

[![anhfsec](/img/migrated/total-issue-ef7d093c.png)](/img/migrated/total-issue-ef7d093c.png)
## Total Assets (Tổng số asset)
Description: Tổng số asset thuộc tổ chức, gồm: 
  * Source Control Asset (GitHub, GitLab) 
  * Container Registry Asset (FCR, Harbor) 

Định dạng displayed: giống như phần Total Issues 
[![anhfsec](/img/migrated/total-asset-e730cbf3.png)](/img/migrated/total-asset-e730cbf3.png)
## Total Scan Requests (Tổng số yêu cầu quét)
Description: Tổng số lượt quét security (Code + Secret + IaC + Image) 
Phân loại: 
  * UI Scan Request 
  * CICD Scan Request 

Định dạng displayed: giống như phần Total Issues
[![anhfsec](/img/migrated/total-scan-7f7d7250.png)](/img/migrated/total-scan-7f7d7250.png)
## Total Issues by Severity (Tổng số issue theo mức độ nghiêm trọng)
Description: Thống kê số lượng issue theo 4 mức độ: Critical, High, Medium, Low, lấy from lần quét successfully gần nhất. 
Định dạng displayed: giống như phần Total Issues 
[![anhfsec](/img/migrated/total-severy-b0caeec2.png)](/img/migrated/total-severy-b0caeec2.png)
## Total Issues by Scan Type (Tổng số issue theo loại quét)
Description: Thống kê số lượng issue theo loại quét: 
  * Code Analysis 
  * Secret Scanning 
  * IaC Scanning 
  * Image Scanning 

Định dạng displayed: giống như phần Total Issues 
[![anhfsec](/img/migrated/total-scan-type-dd22f5d9.png)](/img/migrated/total-scan-type-dd22f5d9.png)
