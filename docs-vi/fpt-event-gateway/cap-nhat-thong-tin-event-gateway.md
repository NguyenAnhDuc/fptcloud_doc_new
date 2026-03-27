---
id: "cap-nhat-thong-tin-event-gateway"
title: "Cap Nhat Thong tin Event Gateway"
description: "Để cập nhật thông tin **Event Gateway** người dùng thực hiện các bước sau:"
sidebar_label: "Cap Nhat Thong tin Event Gateway"
sidebar_position: 5
---

# Cap Nhat Thong Tin Event Gateway

Để cập nhật thông tin **Event Gateway** người dùng thực hiện các bước sau: 
**Bước 1:** Tại thanh menu chọn **Integration** > chọn **Event Gateway**
**Bước 2** : Chọn **Event Gateway** mà bạn muốn cập nhật thông tin 
**Bước 3** : Tại màn hình **Event Gateway** , nhấn vào biểu tượng Edit ở mục bạn muốn chỉnh sửa thông tin 
  * **Update Basic Information**
Hiển thị màn hình sửa thông tin Instance Information, cho phép sửa các thông tin sau: 
    * **Name** ( Required): Tên dịch vụ 
Chú ý: Tên dịch vụ phải từ 1 đến 30 kí tự. Có thể chứa các kí tự chữ cái thường a-z hoặc chữ cái in hoa A-Z hoặc các kí tự số 0-9. 
    * **Description** (optional): Mô tả dịch vụ 
[![Hình ảnh](/img/migrated/image2a-d2f456a8.png)](/img/migrated/image2a-d2f456a8.png)
  * **Update Node Configuration**
Hiển thị màn hình sửa thông tin Node Configuration, cho phép sửa các thông tin sau: 
    * **Type** : Chọn type cấu hình cho dịch vụ 
    * **Number of node:** chọn số node phù hợp 
**Chú ý** : số node phải lớn hơn hoặc bằng 1 và nhỏ hơn hoặc bằng 10 
    * **Storage policy** : chọn storage policy 

[![Hình ảnh](/img/migrated/image2b-a3921152.png)](/img/migrated/image2b-a3921152.png)
  * **Update kafka cluster:** Hiển thị màn hình sửa thông tin Kafka Cluster, cho phép sửa các thông tin sau 
    * **Bootstrap server endpoint:** nhập địa chỉ Bootstrap server endpoint 
    * **Username (required)** : Tên đăng nhập cho xác thực 
    * Hiển thị nếu Security protocol: SASL_PLAINTEXT hoặc SASL_SSL 
    * Bao gồm a-z, A-Z, 0-9, dấu gạch dưới (_), dấu gạch ngang (-), dấu chấm (.); Không chứa khoảng trắng ở đầu, cuối hoặc giữa chuỗi; Tối đa 64 ký tự 
    * **Password (required)** : Mật khẩu cho xác thực 
    * Hiển thị nếu Security protocol: SASL_PLAINTEXT hoặc SASL_SSL 
    * Không chứa khoảng trắng ở đầu, cuối hoặc giữa chuỗi; Tối đa 64 ký tự 
[![Hình ảnh](/img/migrated/image2c-34119d0d.png)](/img/migrated/image2c-34119d0d.png)
  * **Update Endpoint:** Hiển thị màn hình sửa thông tin **Endpoint** , cho phép sửa các thông tin sau 
    * **CA bundle ( required):** Chuỗi chứng chỉ CA ở dịnh dạng PEM 
    * Bắt đầu bằng -----BEGIN CERTIFICATE----- và kết thúc đúng chuẩn PEM 
    * **Private key (required):** Private key ở định dạng PEM 
    * Bắt đầu bằng -----BEGIN PRIVATE KEY----- và kết thúc đúng chuẩn PEM 
[![Hình ảnh](/img/migrated/image2d-ee4860cd.png)](/img/migrated/image2d-ee4860cd.png)