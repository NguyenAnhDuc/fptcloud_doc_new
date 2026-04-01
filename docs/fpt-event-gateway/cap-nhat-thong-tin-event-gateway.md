---
id: "cap-nhat-thong-tin-event-gateway"
title: "Cap Nhat Thong tin Event Gateway"
sidebar_label: "Cap Nhat Thong tin Event Gateway"
sidebar_position: "5"
---

# Cap Nhat Thong tin Event Gateway

Để cập nhật information **Event Gateway** user thực hiện the bước sau: 
**Step 1:** Tại thanh menu chọn **Integration** > chọn **Event Gateway**
**Step 2** : Select **Event Gateway** mà you muốn cập nhật information 
**Step 3** : Tại màn hình **Event Gateway** , nhấn ando biểu tượng Edit ở mục you muốn chỉnh sửa information 
  * **Update Basic Information**
Hiển thị màn hình sửa information Instance Information, for phép sửa the information sau: 
    * **Name** ( Required): Tên service 
Chú ý: Tên service must from 1 to 30 kí tự. Có thể chứa the kí tự chữ cái thường a-z or chữ cái in hoa A-Z or the kí tự số 0-9. 
    * **Description** (optional): Mô tả service 
[![Hình ảnh](/img/migrated/image2a-d2f456a8.png)](/img/migrated/image2a-d2f456a8.png)
  * **Update Node Configuration**
Hiển thị màn hình sửa information Node Configuration, for phép sửa the information sau: 
    * **Type** : Chọn type cấu hình for service 
    * **Number of node:** chọn số node phù hợp 
**Chú ý** : số node must lớn hơn or bằng 1 and nhỏ hơn or bằng 10 
    * **Storage policy** : chọn storage policy 

[![Hình ảnh](/img/migrated/image2b-a3921152.png)](/img/migrated/image2b-a3921152.png)
  * **Update kafka cluster:** Hiển thị màn hình sửa information Kafka Cluster, for phép sửa the information sau 
    * **Bootstrap server endpoint:** nhập địa chỉ Bootstrap server endpoint 
    * **Username (required)** : Tên đăng nhập for xác thực 
    * Hiển thị if Security protocol: SASL_PLAINTEXT or SASL_SSL 
    * Bao gồm a-z, A-Z, 0-9, dấu gạch dưới (_), dấu gạch ngang (-), dấu chấm (.); Không chứa khoảng trắng ở đầu, cuối or giữa chuỗi; Tối đa 64 ký tự 
    * **Password (required)** : Mật khẩu for xác thực 
    * Hiển thị if Security protocol: SASL_PLAINTEXT or SASL_SSL 
    * Không chứa khoảng trắng ở đầu, cuối or giữa chuỗi; Tối đa 64 ký tự 
[![Hình ảnh](/img/migrated/image2c-34119d0d.png)](/img/migrated/image2c-34119d0d.png)
  * **Update Endpoint:** Hiển thị màn hình sửa information **Endpoint** , for phép sửa the information sau 
    * **CA bundle ( required):** Chuỗi chứng chỉ CA ở dịnh dạng PEM 
    * Bắt đầu bằng -----BEGIN CERTIFICATE----- and kết thúc đúng chuẩn PEM 
    * **Private key (required):** Private key ở định dạng PEM 
    * Bắt đầu bằng -----BEGIN PRIVATE KEY----- and kết thúc đúng chuẩn PEM 
[![Hình ảnh](/img/migrated/image2d-ee4860cd.png)](/img/migrated/image2d-ee4860cd.png)
