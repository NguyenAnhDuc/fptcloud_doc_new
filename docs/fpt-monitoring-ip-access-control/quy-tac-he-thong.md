---
id: "quy-tac-he-thong"
title: "Mặc định khi IP Access Control tắt, mọi IP đều có thể truy cập."
sidebar_label: "Mặc định khi IP Access Control tắt, mọi IP đều có thể truy cập."
sidebar_position: "11"
---

# Mặc định when IP Access Control tắt, mọi IP đều can truy cập.

* Mặc định when IP Access Control tắt, mọi IP đều can truy cập. 
  * Khi bật IP Access Control, tất cả truy cập from ngoài FPT Cloud bị from chối for tới when có IP in whitelist. 
  * Mỗi endpoint (Grafana dashboard, Metric datasource, Log datasource, Trace datasource) có whitelist IP riêng biệt. 
  * Nếu bất kỳ IP in bảng is Whitelisting/Blacklisting thì the nút thao tác khác of bảng corresponding bị vô hiệu hoá tạm thời. 

Các status whitelist of IP/dải IP and mô tả:   
| Trạng thái whitelist  | Mô tả  |  
| --- | --- |  
| Whitelisting  | System is xử lý whitelist IP/dải IP.  |  
| Whitelisted  | IP/dải IP has been is whitelist successfully, có permission truy cập.  |  
| Whitelist Failed  | IP/dải IP whitelist failed, chưa có permission truy cập, need to Retry.  |  
| Blacklisting  | System is chặn permission truy cập.  |  
| Blacklist Failed  | IP/dải IP blacklist failed, vẫn còn permission truy cập system, need to Retry.  |
