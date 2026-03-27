---
id: "quy-tac-he-thong"
title: "Mặc định khi IP Access Control tắt, mọi IP đều có thể truy cập."
description: "* Mặc định khi IP Access Control tắt, mọi IP đều có thể truy cập."
sidebar_label: "Mặc định khi IP Access Control tắt, mọi IP đều có thể truy cập."
sidebar_position: 11
---

# Quy Tac He Thong

* Mặc định khi IP Access Control tắt, mọi IP đều có thể truy cập. 
  * Khi bật IP Access Control, tất cả truy cập từ ngoài FPT Cloud bị từ chối cho tới khi có IP trong whitelist. 
  * Mỗi endpoint (Grafana dashboard, Metric datasource, Log datasource, Trace datasource) có whitelist IP riêng biệt. 
  * Nếu bất kỳ IP trong bảng đang Whitelisting/Blacklisting thì các nút thao tác khác của bảng tương ứng bị vô hiệu hoá tạm thời. 

Các trạng thái whitelist của IP/dải IP và mô tả:   
| Trạng thái whitelist  | Mô tả  |  
| --- | --- |  
| Whitelisting  | Hệ thống đang xử lý whitelist IP/dải IP.  |  
| Whitelisted  | IP/dải IP đã được whitelist thành công, có quyền truy cập.  |  
| Whitelist Failed  | IP/dải IP whitelist thất bại, chưa có quyền truy cập, cần Retry.  |  
| Blacklisting  | Hệ thống đang chặn quyền truy cập.  |  
| Blacklist Failed  | IP/dải IP blacklist thất bại, vẫn còn quyền truy cập hệ thống, cần Retry.  |