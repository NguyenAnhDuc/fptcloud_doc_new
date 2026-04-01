---
id: "tao-router"
title: "Tao Router"
sidebar_label: "Tao Router"
sidebar_position: "17"
---

# Tao Router

Để tạo mới Router, user thực hiện the bước sau: 
**Step 1:** Tại thanh menu chọn **Integration** > chọn **Event Gateway**
**Step 2:** Tại list **Event Gateway** > chọn **Event Gateway** > chọn **tab Router**
**Bước** 3: Tại list **Router** > chọn button **Edit** > chọn button **Add >** displayed màn hình **Create router**
**Step 4** : Enter the information: 
  * **Name ( required):** Tên Router 
    * Bao gồm a-z, A-Z, -, _ and số, bắt đầu bằng chữ cái, tối đa 30 ký tự 
  * **Mode (required):** Loại Router 
    * Lựa chọn from list: 
    * Oneway 
    * Sync 
    * Async 
      * Interface displayed mặc định 3 template router corresponding with 3 mode 
  * **Authentication(required):** Router có/không sử dụng xác thực 
    * Mặc định None 
    * Lựa chọn from list: 
      * None: không sử dụng xác thực 
      * : sử dụng xác thực with JWT auth (if bật cấu hình JWT auth) 
  * **Path ( required):** Đường dẫn gửi (POST) lấy (FETCH) dữ liệu 
    * Bắt đầu bằng dấu /
    * Bao gồm a-z, A-Z, 0-9, dấu gạch ngang (-), gạch dưới (_), /, {, }, = 
    * Tối đa 100 ký tự 
  * **Method ( required):** Phương thức of API in Router 
  * **Scope ( required):** Quy định giá trị (value) of claim "scope" in JWT token to xác thực when request API 
    * Tối đa 50 ký tự 
  * **Topic ( required):** Tên topic kafka nhận dữ liệu in mode Oneway 
  * **Request topic ( required):** Tên topic kafka nhận dữ liệu in mode Sync or Async 
    * Bao gồm a-z, A-Z, 0-9, dấu gạch ngang (-), gạch dưới (_), dấu chấm (.)
    * Bắt đầu bằng chữ cái; Tối đa 249 ký tự 
  * **Response topic ( required):** Tên topic kafka lấy dữ liệu in mode Sync or Async 
    * Bao gồm a-z, A-Z, 0-9, dấu gạch ngang (-), gạch dưới (_), dấu chấm (.)
    * Bắt đầu bằng chữ cái; Tối đa 249 ký tự 

Click **Add router** to thêm template interface corresponding with mỗi loại Mode of Router 
Click **Remove router** to Xoá Router 
**Step 5** : Select **Save** to tạo mới router
