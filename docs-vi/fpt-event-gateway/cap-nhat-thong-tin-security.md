---
id: "cap-nhat-thong-tin-security"
title: "Cap Nhat Thong tin Security"
description: "Để cập nhật thông tin Security, người dùng thực hiện các bước sau:"
sidebar_label: "Cap Nhat Thong tin Security"
sidebar_position: 9
---

# Cap Nhat Thong Tin Security

Để cập nhật thông tin Security, người dùng thực hiện các bước sau: 
**Bước 1:** Tại thanh menu chọn **Integration** > chọn **Event Gateway**
**Bước 2:** Tại danh sách **Event Gateway** > chọn **Event Gateway** > chọn **tab Security**
**Bước** 3: Tại danh sách **Security** > chọn **Security** cần cập nhật thông tin > chọn **Action** > chọn **Edit**
**Bước 4** : Tại popup **Update JWT Auth** , các thông tin được update: 
  * **Claim key:** Danh sách claim key: 
    * Issuer 
    * Issued At 
    * Expiration 
    * Audience 
    * Subject 
    * Scope 
      * Giá trị mặc định claim key là "Issuer" 
      * Giao diện hiển thị mặc 1 định 1 cặp claim key-value nếu Bật JWT Auth 
      * Mặc định render 2 input: Issuer và Audience, cả hai đều required 
  * **Value** : Giá trị tương ứng với mỗi claim key (nếu có) 
    * Tối đa 100 ký tự 
  * **Public key ( required):** Chuỗi public key ở dịnh dạng PEM 
    * Bắt đầu bằng -----BEGIN PUBLIC KEY----- và kết thúc đúng chuẩn PEM 

**Bước 5** : Chọn **Update** để cập nhật thông tin **JWT Auth**
[![Hình ảnh](/img/migrated/image1e-b4866c34.png)](/img/migrated/image1e-b4866c34.png)