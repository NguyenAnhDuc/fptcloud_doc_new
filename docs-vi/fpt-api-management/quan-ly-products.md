---
id: "quan-ly-products"
title: "Quản lý Products"
description: "**Bước 1:** Ở menu **Application** > **API Manager** > **Products** , chọn **Create.**"
sidebar_label: "Quản lý Products"
sidebar_position: 7
---

# Quan Ly Products

## 1. Khai báo Product
**Bước 1:** Ở menu **Application** > **API Manager** > **Products** , chọn **Create.**
[![Userguide FPT API Management 9](/img/migrated/Userguide-FPT-API-Management-9-1024x538-a464f0e4.png)](/img/migrated/Userguide-FPT-API-Management-9-1024x538-a464f0e4.png)
**Bước 2:** Nhập các thông tin theo yêu cầu:
  * **Name:** Tên product.
  * **Title:** Tiêu đề.
  * **Visibility type:** Chế độ hiển thị của Product, **Public** hoặc **Close**.

[![Userguide FPT API Management 10](/img/migrated/Userguide-FPT-API-Management-10-1024x538-5c96395a.png)](/img/migrated/Userguide-FPT-API-Management-10-1024x538-5c96395a.png)
**Bước 3** : Chọn **OK** để tiến hành tạo **Product**.
[![Userguide FPT API Management 11](/img/migrated/Userguide-FPT-API-Management-11-1024x538-93a6a17c.png)](/img/migrated/Userguide-FPT-API-Management-11-1024x538-93a6a17c.png)
Nếu nút **Creat** bị disable, hãy kiểm tra lại gói dịch vụ API Management của bạn. Với gói **Pilot** và **Normal** , chỉ có thể tạo tối đa 1 **Product** trên hệ thống.
## 2. Sửa thông tin của Product
Để thay đổi thông tin của một **Product** , bạn thao tác như sau:
**Bước 1:** Ở **Product Management** , chọn **Product** cần thay đổi thông tin > Chọn **Edit**.
[![Userguide FPT API Management 42](/img/migrated/Userguide-FPT-API-Management-42-1024x538-10a13d66.png)](/img/migrated/Userguide-FPT-API-Management-42-1024x538-10a13d66.png)
**Bước 2** : Nhập các thông tin mới và chọn **OK**.
[![Userguide FPT API Management 43](/img/migrated/Userguide-FPT-API-Management-43-1024x538-26ece1a3.png)](/img/migrated/Userguide-FPT-API-Management-43-1024x538-26ece1a3.png)
Cần nhập đầy đủ các trường dữ liệu và tuân thủ các validation tương tự khi tạo Product.
## 3. Gắn APIs vào Product
Để gán API vào một **Product** , bạn thao tác như sau:
**Bước 1:** Ở **Product Management** , chọn **Product** cần gán API. Chọn **Register API.**
[![Userguide FPT API Management 12](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)
**Bước 2** : Chọn **Register**.
[![Userguide FPT API Management 13](/img/migrated/Userguide-FPT-API-Management-13-1024x538-40e6fd9c.png)](/img/migrated/Userguide-FPT-API-Management-13-1024x538-40e6fd9c.png)
**Bước 3** : Chọn API cần gán vào **Product** và chọn **Select**.
[![Userguide FPT API Management 14](/img/migrated/Userguide-FPT-API-Management-14-1024x538-86d8a0d0.png)](/img/migrated/Userguide-FPT-API-Management-14-1024x538-86d8a0d0.png)
**Bước 4:** Chọn **OK** để lưu.
[![Userguide FPT API Management 15](/img/migrated/Userguide-FPT-API-Management-15-1024x538-26910f97.png)](/img/migrated/Userguide-FPT-API-Management-15-1024x538-26910f97.png)
**Lưu ý:**
  * 1 Product có thể gán được với nhiều APIs
  * 1 API cũng có thể xuất hiện cùng lúc trong nhiều product
  * Product sẽ ảnh hưởng tới việc group API trong product đó được publish ra tới loại consumer nào.

## 4. Gỡ APIs khỏi Product
Để gỡ API vào **Product** , bạn thao tác như sau:
**Bước 1:** Ở **Product Management** , chọn **Product** > **Register API.**
[![Userguide FPT API Management 12](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)
**Bước 2** : Chọn API cần gỡ khỏi **Product** > **Remove**.
[![Userguide FPT API Management 44](/img/migrated/Userguide-FPT-API-Management-44-1024x538-ce6ff282.png)](/img/migrated/Userguide-FPT-API-Management-44-1024x538-ce6ff282.png)
**Bước 3** : Chọn **Yes** để xác nhận.
[![Userguide FPT API Management 45](/img/migrated/Userguide-FPT-API-Management-45-426f4f56.png)](/img/migrated/Userguide-FPT-API-Management-45-426f4f56.png)
## 5. Xóa Product
Để xóa một **Product** đã khai báo trước đó khỏi hệ thống, bạn cần đảm bảo **Product** đấy đang không gắn **REST APIs** nào. Để gỡ **RestAPIs** khỏi **Product** , hãy thao tác theo hướng dẫn ở phần **Gỡ APIs khỏi Product.**
Để xóa **Product** , bạn thao tác như sau:
**Bước 1:** Ở **Product Management** , chọn **Product** cần xóa > **Remove product**.
[![Userguide FPT API Management 46](/img/migrated/Userguide-FPT-API-Management-46-1024x538-da46540b.png)](/img/migrated/Userguide-FPT-API-Management-46-1024x538-da46540b.png)
**Bước 2** : Trong popup xác nhận thông tin, chọn **Yes** để tiến hành xóa.
[![Userguide FPT API Management 45](/img/migrated/Userguide-FPT-API-Management-45-426f4f56.png)](/img/migrated/Userguide-FPT-API-Management-45-426f4f56.png)
**Lưu ý:** Nếu gặp lỗi : **Could not remove that product as there are still API in the product!**. Bạn cần xóa hết APIs trong Product đấy trước khi thao tác.