---
id: "tao-moi-security"
title: "Tao moi Security"
sidebar_label: "Tao moi Security"
sidebar_position: "8"
---

# Tao moi Security

Để tạo mới Security, user thực hiện the bước sau: 
**Step 1:** Tại thanh menu chọn **Integration** > chọn **Event Gateway**
**Step 2:** Tại danh sách **Event Gateway** > chọn **Event Gateway** > chọn **tab Security**
**Bước** 3: Tại danh sách **Security** > chọn **Create >** displayed popup **New JWT Auth**
**Step 4** : Tại popup **New JWT Auth** , nhập the thông tin: 
  * **Name (required):** Tên JWT auth 
    * Bao gồm a-z, A-Z, -, _ and số; bắt đầu bằng chữ cái; tối đa 30 ký tự 
  * **Claim key:** List claim key: 
    * Issuer 
    * Issued At 
    * Expiration 
    * Audience 
    * Subject 
    * Scope 
      * Giá trị mặc định claim key là "Issuer" 
      * Interface displayed mặc 1 định 1 cặp claim key-value if Enable JWT Auth 
      * Mặc định render 2 input: Issuer and Audience, cả hai đều required 
  * **Value** : Giá trị corresponding with mỗi claim key (if có) 
    * Tối đa 100 ký tự 
  * **Public key ( required):** Chuỗi public key ở dịnh dạng PEM 
    * Bắt đầu bằng -----BEGIN PUBLIC KEY----- and kết thúc đúng chuẩn PEM 

**Step 5** : Select **Create** to tạo mới **JWT Auth**
[![Hình ảnh](/img/migrated/image1d-e27479a8.png)](/img/migrated/image1d-e27479a8.png)
