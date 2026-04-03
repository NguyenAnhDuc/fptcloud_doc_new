---
id: "managing-products"
title: "Quản lý Products"
description: "Hướng dẫn khai báo, gắn API, chỉnh sửa và xóa Products trên FPT API Management."
sidebar_label: "Quản lý Products"
sidebar_position: 7
---

# Quản lý Products

Products giúp bạn nhóm các REST APIs lại với nhau để quản lý và phân phối tới consumer một cách có tổ chức.

## Khai báo Product

**Bước 1:** Ở menu **Application** > **API Manager** > **Products** > chọn **Create**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-9-1024x538-a464f0e4.png)](/img/migrated/Userguide-FPT-API-Management-9-1024x538-a464f0e4.png)

**Bước 2:** Nhập các thông tin theo yêu cầu:

- **Name**: Tên product.
- **Title**: Tiêu đề.
- **Visibility type**: Chế độ hiển thị của Product — **Public** hoặc **Close**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-10-1024x538-5c96395a.png)](/img/migrated/Userguide-FPT-API-Management-10-1024x538-5c96395a.png)

**Bước 3:** Chọn **OK** để tạo Product.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-11-1024x538-93a6a17c.png)](/img/migrated/Userguide-FPT-API-Management-11-1024x538-93a6a17c.png)

:::note
Nếu nút **Create** bị disable, hãy kiểm tra lại gói dịch vụ API Management. Với gói **Pilot** và **Normal**, chỉ có thể tạo tối đa 1 Product.
:::

## Chỉnh sửa thông tin Product

**Bước 1:** Ở **Product Management** > chọn Product cần thay đổi > chọn **Edit**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-42-1024x538-10a13d66.png)](/img/migrated/Userguide-FPT-API-Management-42-1024x538-10a13d66.png)

**Bước 2:** Nhập các thông tin mới và chọn **OK**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-43-1024x538-26ece1a3.png)](/img/migrated/Userguide-FPT-API-Management-43-1024x538-26ece1a3.png)

## Gắn APIs vào Product

**Bước 1:** Ở **Product Management** > chọn Product cần gán API > chọn **Register API**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)

**Bước 2:** Chọn **Register**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-13-1024x538-40e6fd9c.png)](/img/migrated/Userguide-FPT-API-Management-13-1024x538-40e6fd9c.png)

**Bước 3:** Chọn API cần gán vào Product > chọn **Select**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-14-1024x538-86d8a0d0.png)](/img/migrated/Userguide-FPT-API-Management-14-1024x538-86d8a0d0.png)

**Bước 4:** Chọn **OK** để lưu.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-15-1024x538-26910f97.png)](/img/migrated/Userguide-FPT-API-Management-15-1024x538-26910f97.png)

:::note
- 1 Product có thể gán được với nhiều APIs.
- 1 API có thể xuất hiện trong nhiều Product.
- Product ảnh hưởng tới việc group API trong product được publish tới loại consumer nào.
:::

## Gỡ APIs khỏi Product

**Bước 1:** Ở **Product Management** > chọn Product > chọn **Register API**.

**Bước 2:** Chọn API cần gỡ > chọn **Remove**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-44-1024x538-ce6ff282.png)](/img/migrated/Userguide-FPT-API-Management-44-1024x538-ce6ff282.png)

**Bước 3:** Chọn **Yes** để xác nhận.

## Xóa Product

Trước khi xóa, bạn cần đảm bảo Product không gắn bất kỳ REST API nào.

**Bước 1:** Ở **Product Management** > chọn Product cần xóa > chọn **Remove product**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-46-1024x538-da46540b.png)](/img/migrated/Userguide-FPT-API-Management-46-1024x538-da46540b.png)

**Bước 2:** Trong popup xác nhận, chọn **Yes** để tiến hành xóa.

:::note
Nếu gặp lỗi **Could not remove that product as there are still API in the product!**, hãy xóa hết APIs trong Product trước khi thao tác.
:::
