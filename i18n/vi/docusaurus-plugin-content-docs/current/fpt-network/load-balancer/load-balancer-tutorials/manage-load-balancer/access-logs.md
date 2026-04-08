---
id: "access-logs"
title: "Access Logs"
description: "Tính năng **Access Log** của **Load Balancer** cho phép ghi lại toàn bộ thông tin về các yêu cầu gửi đến, bao gồm client"
sidebar_label: "Access Logs"
sidebar_position: 11
---

# Access Logs

Tính năng **Access Log** của **Load Balancer** cho phép ghi lại toàn bộ thông tin về các yêu cầu gửi đến, bao gồm client IP, port, method, path, và server response,.... Đây là công cụ quan trọng giúp người dùng phân tích traffic, giám sát hiệu suất, đảm bảo an ninh, và tối ưu hóa hệ thống. 
Để sử dụng tính năng **Access Log** , người dùng thao tác theo các bước sau: 
**Bước 1:** Tại màn hiển thị danh sách các **Load Balancer,** chọn Load Balancer cần view logs → chọn tab **Access logs**
**Bước 2:** Người dùng được view logs của các trường thông tin sau: 
**_Lưu ý:_** _Access logs của Load Balancer được lưu trữ để xem tối đa 7 ngày hoặc 1000 dòng._  
| Tên trường  | Mô tả  |  
| --- | --- |  
| Timestamp  | Thời gian Load Balancer nhận request  |  
| Listener  | Tên listener mà request được nhận vào  |  
| Server pool  | Tên pool mà request được chuyển tới  |  
| Bytes sent  | Số byte được gửi tới client, chỉ body không bao gồm header HTTP  |  
| Bytes uploaded  | Bytes uploaded to the server  |  
| Client IP  | Địa chỉ IP của client gửi request  |  
| Client port  | Cổng của client gửi request  |  
| Request  | Request HTTP đầy đủ được nhận từ client, bao gồm phương thức, URL và phiên bản giao thức  |  
| Member  | Tên server trong backend mà request được chuyển tới  |  
| SSL verify  | Kết quả kiểm tra chứng chỉ SSL của client (chỉ hữu ích khi sử dụng SSL)  |  
| Status code  | Mã trạng thái HTTP trả về cho client  |  
| Total time (ms)  | Thời gian tổng để xử lý yêu cầu (request) và phản hồi (response), tính bằng mili giây  |  
Người dùng có thể chọn **Timerange** cụ thể hoặc chọn **Filter** để thêm các trường, nhập giá trị cụ thể muốn view log. 
**Bước 3:** Để tải xuống file .log access logs của **Load Balancer** theo thời gian đã chọn, người dùng chọn **Export logs**
Người dùng có thể xem log tại file tải xuống dưới dạng .log với: 

```
Copy-Tên định dạng của file: loadbalancer_accesslogs__starttime_endtime  
```

(Trong đó: **start time & end time theo format: YYYYMMDDTHH:mmTimezone Thời gian theo browser time**, VD:20240729T2300+0700)
