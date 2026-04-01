---
id: "tao-moi-security"
title: "Tao moi Security"
sidebar_label: "Tao moi Security"
sidebar_position: "8"
---

# Tao moi Security

Để tạo mới Security, người dùng thực hiện các bước sau: 
**Step 1:** Tại thanh menu chọn **Integration** > chọn **Event Gateway**
**Step 2:** Tại danh sách **Event Gateway** > chọn **Event Gateway** > chọn **tab Security**
**Bước** 3: Tại danh sách **Security** > chọn **Create >** hiển thị popup **New JWT Auth**
**Step 4** : Tại popup **New JWT Auth** , nhập các thông tin: 
  * **Name (required):** Tên JWT auth 
    * Bao gồm a-z, A-Z, -, _ và số; bắt đầu bằng chữ cái; tối đa 30 ký tự 
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

**Step 5** : Chọn **Create** để tạo mới **JWT Auth**
[![Hình ảnh](/img/migrated/image1d-e27479a8.png)](/img/migrated/image1d-e27479a8.png)
