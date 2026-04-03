---
id: "tutorials-create-a-new-waf-server"
title: "Thêm mới máy chủ WAF"
description: "Hướng dẫn chi tiết từng bước tạo máy chủ WAF trên FPT Cloud Portal."
sidebar_label: "Thêm mới máy chủ WAF"
sidebar_position: 6
---

# Thêm mới máy chủ WAF

1. Trên menu, chọn **Security** > **Cloud WAF**, sau đó chọn **Create WAF**.

   [![Tạo WAF — bước 1](/img/migrated/Userguide-FPT-WAF-2022-1-1024x538-66a0aec1.png)](/img/migrated/Userguide-FPT-WAF-2022-1-1024x538-66a0aec1.png)

2. Nhập thông tin WAF và chọn size phù hợp.

   [![Nhập thông tin WAF](/img/migrated/Userguide-FPT-WAF-2022-2-1024x538-6f8b611d.png)](/img/migrated/Userguide-FPT-WAF-2022-2-1024x538-6f8b611d.png)

   | Field | Mô tả | Giá trị |
   |---|---|---|
   | **Name** | Tên máy chủ WAF | Chỉ nhận chữ, số và dấu cách |
   | **Description** | Mô tả chi tiết của WAF | |
   | **Default configured rules** | Tập luật có sẵn khi tạo | |
   | **Size** | Kích thước máy chủ WAF theo nhu cầu | Small, Medium hoặc Large |

   Cấu hình cụ thể theo từng size:

   | Size | Cấu hình cơ bản | Network bandwidth | Số request/giây |
   |---|---|---|---|
   | **Small** | 1 vCPU – 2 GB RAM – 50 GB | 100 Mbps | 50 |
   | **Medium** | 2 vCPU – 4 GB RAM – 150 GB | 200 Mbps | 150 |
   | **Large** | 8 vCPU – 8 GB RAM – 300 GB | 500 Mbps | 500 |

3. Chọn **Create WAF** để tạo máy chủ WAF với thông tin và cấu hình đã chọn. Tiến độ xử lý được cập nhật ở trường **Status** trên **Cloud Web Application Firewall Management**.

   [![Trạng thái tạo WAF](/img/migrated/Userguide-FPT-WAF-2022-10-1024x538-aa8602dd.png)](/img/migrated/Userguide-FPT-WAF-2022-10-1024x538-aa8602dd.png)

:::note
Sau khi khởi tạo máy chủ WAF thành công, bạn sẽ nhận email chứa username và password để đăng nhập vào WAF Dashboard. Hãy kiểm tra hộp thư đến để lấy thông tin.
:::
