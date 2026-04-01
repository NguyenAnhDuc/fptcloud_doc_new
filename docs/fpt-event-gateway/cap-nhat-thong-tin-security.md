---
id: "cap-nhat-thong-tin-security"
title: "Cap Nhat Thong tin Security"
sidebar_label: "Cap Nhat Thong tin Security"
sidebar_position: "9"
---

# Cap Nhat Thong tin Security

Để cập nhật thông tin Security, user thực hiện the bước sau: 
**Step 1:** Tại thanh menu chọn **Integration** > chọn **Event Gateway**
**Step 2:** Tại danh sách **Event Gateway** > chọn **Event Gateway** > chọn **tab Security**
**Bước** 3: Tại danh sách **Security** > chọn **Security** cần cập nhật thông tin > chọn **Action** > chọn **Edit**
**Step 4** : Tại popup **Update JWT Auth** , the thông tin is update: 
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

**Step 5** : Select **Update** to cập nhật thông tin **JWT Auth**
[![Hình ảnh](/img/migrated/image1e-b4866c34.png)](/img/migrated/image1e-b4866c34.png)
