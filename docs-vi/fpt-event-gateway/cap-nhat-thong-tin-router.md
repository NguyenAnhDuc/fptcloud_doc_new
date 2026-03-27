---
id: "cap-nhat-thong-tin-router"
title: "Cap Nhat Thong tin Router"
description: "Để tạo mới Router, người dùng thực hiện các bước sau:"
sidebar_label: "Cap Nhat Thong tin Router"
sidebar_position: 18
---

# Cap Nhat Thong Tin Router

Để tạo mới Router, người dùng thực hiện các bước sau: 
**Bước 1:** Tại thanh menu chọn **Integration** > chọn **Event Gateway**
**Bước 2:** Tại danh sách **Event Gateway** > chọn **Event Gateway** > chọn **tab Router**
**Bước** 3: Tại danh sách **Router** > chọn button **Edit**
**Bước 4** : Thực hiện thay đổi các thông tin: 
  * **Name ( required):** Tên Router 
    * Bao gồm a-z, A-Z, -, _ và số, bắt đầu bằng chữ cái, tối đa 30 ký tự 
  * **Mode (required):** Loại Router 
    * Lựa chọn từ danh sách: 
    * Oneway 
    * Sync 
    * Async 
      * Giao diện hiển thị mặc định 3 template router tương ứng với 3 mode 
  * **Authentication(required):** Router có/không sử dụng xác thực 
    * Mặc định None 
    * Lựa chọn từ danh sách: 
      * None: không sử dụng xác thực 
      * : sử dụng xác thực với JWT auth (nếu bật cấu hình JWT auth) 
  * **Path ( required):** Đường dẫn gửi (POST) lấy (FETCH) dữ liệu 
    * Bắt đầu bằng dấu / ; Bao gồm a-z, A-Z, 0-9, dấu gạch ngang (-), gạch dưới (_), /, {, }, = ; Tối đa 100 ký tự 
  * **Scope ( required):** Quy định giá trị (value) của claim "scope" trong JWT token để xác thực khi request API 
    * Tối đa 50 ký tự 
  * **Topic ( required):** Tên topic kafka nhận dữ liệu trong mode Oneway 
  * **Request topic ( required):** Tên topic kafka nhận dữ liệu trong mode Sync hoặc Async 
    * Bao gồm a-z, A-Z, 0-9, dấu gạch ngang (-), gạch dưới (_), dấu chấm (.)
    * Bắt đầu bằng chữ cái; Tối đa 249 ký tự 
  * **Response topic ( required):** Tên topic kafka lấy dữ liệu trong mode Sync hoặc Async 
    * Bao gồm a-z, A-Z, 0-9, dấu gạch ngang (-), gạch dưới (_), dấu chấm (.)
    * Bắt đầu bằng chữ cái; Tối đa 249 ký tự 

Nhấn **Add router** để thêm template giao diện tương ứng với mỗi loại Mode của Router 
Nhấn **Remove router** để Xoá Router 
**Bước 5** : Chọn **Save** để lưu cấu hình mới