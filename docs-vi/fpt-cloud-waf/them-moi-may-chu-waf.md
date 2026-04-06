---
id: "them-moi-may-chu-waf"
title: "Them Moi May Chu Waf"
sidebar_label: "Them Moi May Chu Waf"
---

Thêm mới máy chủ WAF


**Bước 1:** Ở menu chọn **Security > Cloud WAF**, chọn **Create WAF.**

![Userguide FPT WAF 2022 1](images/them-moi-may-chu-waf/img-001.png)

**Bước 2:** Nhập thông tin **WAF** và chọn size phù hợp.

![Userguide FPT WAF 2022 2](images/them-moi-may-chu-waf/img-002.png)

**Field** | **Description** | **Value**
---|---|---
**Name** | Nhập tên máy chủ WAF | Chỉ nhận chữ, số và dấu cách
**Description** | Nhập mô tả chi tiết của WAF | ​
**Default configured rules** | Danh sách các tập luật (rule) có sẵn của máy chủ WAF khi tạo | ​
**Size** | Chọn size của máy chủ WAF dựa theo nhu cầu của người dùng | 3 size WAF với cấu hình khác nhau: Small, Medium, Large

Bạn có thể tham khảo cấu hình cụ thể của từng size theo bảng sau:

|  |  |
---|---|---|---
**Size** | **Cấu hình cơ bản** | **Network bandwidth** | **Số request/giây có thể xử lý**
**Small** | 2vCPU – 4GB Ram – 150GB bộ nhớ | 100 Mbps | 50
**Medium** | 4vCPU – 8GB RAM – 300 GB bộ nhớ | 200 Mbps | 150
**Large** | 8vCPU – 16GB RAM – 500GB bộ nhớ | 500Mbps | 500

**Bước 3:** Chọn **Create WAF** để thực hiện tạo máy chủ WAF theo thông tin và cấu hình đã chọn, tiến độ xử lý sẽ được update ở trường Status trên **Cloud Web Application Firewall Management.**
