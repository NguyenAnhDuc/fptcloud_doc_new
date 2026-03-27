---
id: "tutorials-them-moi-may-chu-waf"
title: "Thêm mới máy chủ WAF"
description: "**Bước 1:** Để tạo mới máy chủ WAF, trên menu chọn **Security** > **Cloud WAF.** Chọn **Create WAF.**"
sidebar_label: "Thêm mới máy chủ WAF"
sidebar_position: 6
---

# Tutorials Them Moi May Chu Waf

**Bước 1:** Để tạo mới máy chủ WAF, trên menu chọn **Security** > **Cloud WAF.** Chọn **Create WAF.**
**[![Userguide FPT WAF 2022 1](/img/migrated/Userguide-FPT-WAF-2022-1-1024x538-66a0aec1.png)](/img/migrated/Userguide-FPT-WAF-2022-1-1024x538-66a0aec1.png)**
**Bước 2:** Nhập thông tin **WAF** và chọn size phù hợp 
**[![Userguide FPT WAF 2022 2](/img/migrated/Userguide-FPT-WAF-2022-2-1024x538-6f8b611d.png)](/img/migrated/Userguide-FPT-WAF-2022-2-1024x538-6f8b611d.png)**  
|   |   |   |  
| --- | --- | --- |  
| **Field**  | **Description**  | **Value**  |  
| **Name**  | Nhập tên máy chủ WAF  | Chỉ nhận chữ, số và dấu cách  |  
| **Description**  | Nhập mô tả chi tiết của WAF  | ​  |  
| **Default configured rules**  | Danh sách các tập luật (rule) có sẵn của máy chủ WAF khi tạo  | ​  |  
| **Size**  | Chọn size của máy chủ WAF dựa theo nhu cầu  | 3 size WAF với cấu hình khác nhau: Small, Medium, Large  |  
Bạn có thể tham khảo cấu hình cụ thể của từng size theo bảng sau:  
|   |   |   |   |  
| --- | --- | --- | --- |  
| **Size**  | **Cấu hình cơ bản**  | **Network bandwidth**  | **Số request/giây có thể xử lý**  |  
| Small  | 1vCPU – 2GB Ram – 50GB bộ nhớ  | 100 Mbps  | 50  |  
| Medium  | 2vCPU – 4GB RAM – 150 GB bộ nhớ  | 200 Mbps  | 150  |  
| Large  | 8vCPU – 8GB RAM – 300GB bộ nhớ  | 500Mbps  | 500  |  
**Bước 3:** Chọn **Create WAF** để thực hiện tạo máy chủ WAF theo thông tin và cấu hình đã chọn, tiến độ xử lý sẽ được update ở trường **Status** trên **Cloud Web Application Firewall Management.**
**[![Userguide FPT WAF 2022 10](/img/migrated/Userguide-FPT-WAF-2022-10-1024x538-aa8602dd.png)](/img/migrated/Userguide-FPT-WAF-2022-10-1024x538-aa8602dd.png)**
Lưu ý: Sau khi khởi tạo máy chủ WAF thành công, người dùng sẽ nhận được email thông tin username và password để đăng nhập vào WAF Dashboard. Vui lòng kiểm tra hộp thư đến để xem thông tin.