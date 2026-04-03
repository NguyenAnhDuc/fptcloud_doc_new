---
id: "managing-sites"
title: "Quản lý API Site"
description: "Site là một thực thể dùng để mapping các product với portal."
sidebar_label: "Quản lý API Site"
sidebar_position: 8
---

# Quản lý API Site

Site là một thực thể dùng để mapping các product với portal. Nếu bạn dùng gói **Pilot** và **Normal**, hệ thống cung cấp một Public site mặc định và bạn không thể tạo thêm site mới. Nếu cần nhiều site hơn, hãy nâng cấp lên gói cao hơn.

## Tạo Site mới

**Bước 1:** Ở menu **Application** > **API Manager** > **Sites** > chọn **Create**.

[![Hình ảnh](/img/migrated/Thiet-ke-chua-co-ten-1-1-16b23576.png)](/img/migrated/Thiet-ke-chua-co-ten-1-1-16b23576.png)

**Bước 2:** Nhập các thông tin theo yêu cầu:

- **Name**: Tên site.
- **Title**: Tiêu đề.
- **Production mode**: Chọn chế độ production.
- **Virtual area**: Chọn khu vực trong danh sách đã được admin khai báo.
- **Gateway**: Chọn gateway trong danh sách đã được admin khai báo.
- **Portal**: Chọn Portal trong danh sách đã được admin khai báo.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-17-1024x538-c8843ff5.png)](/img/migrated/Userguide-FPT-API-Management-17-1024x538-c8843ff5.png)

**Bước 3:** Chọn **OK** để tạo Site.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-18-1024x538-c20fb585.png)](/img/migrated/Userguide-FPT-API-Management-18-1024x538-c20fb585.png)

## Thay đổi thông tin Site

**Bước 1:** Ở **Site Management** > chọn Site cần thay đổi > chọn **Edit**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-47-1024x538-e8bb885d.png)](/img/migrated/Userguide-FPT-API-Management-47-1024x538-e8bb885d.png)

**Bước 2:** Nhập các thông tin mới và chọn **OK**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-48-1024x538-db207ea1.png)](/img/migrated/Userguide-FPT-API-Management-48-1024x538-db207ea1.png)

## Staging product

Trước khi consumer sử dụng được API trong một product, bạn cần stage (đặt) product đó vào site tương ứng.

:::note
Sau khi stage, consumer vẫn chưa dùng được API. Bạn cần thực hiện publish product thì consumer mới sử dụng được.
:::

**Bước 1:** Ở **Product Management** > chọn Product cần public lên Site > chọn **Staging**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-19-1024x538-32e49e03.png)](/img/migrated/Userguide-FPT-API-Management-19-1024x538-32e49e03.png)

**Bước 2:** Chọn **Staging to New site**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-20-1024x538-c19e306e.png)](/img/migrated/Userguide-FPT-API-Management-20-1024x538-c19e306e.png)

**Bước 3:** Nhập các thông tin:

- **Product**: Product cần gán vào Site.
- **Site to publish**: Chọn site đã tạo trước đó.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-21-1024x538-9ac596d9.png)](/img/migrated/Userguide-FPT-API-Management-21-1024x538-9ac596d9.png)

**Bước 4:** Chọn **OK**.

:::note
- 1 Site có thể chứa nhiều Product.
- 1 Product có thể được dùng trong nhiều Site.
:::

## Quản lý trạng thái của các product trong site

**Bước 1:** Ở **Site Management** > chọn Site cần quản lý Product.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-49-1024x538-91231408.png)](/img/migrated/Userguide-FPT-API-Management-49-1024x538-91231408.png)

**Bước 2:** Chọn **Product**. Bạn sẽ thấy danh sách Product và trạng thái của chúng trong Site.

Các trạng thái của product: **Unstaging**, **Staging**, **Published**, **Deprecated**, **Retired**, **Archived**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-50-1024x49-64674848.png)](/img/migrated/Userguide-FPT-API-Management-50-1024x49-64674848.png)

- **Published**: Consumer được gán với product mới có thể nhìn và sử dụng product.
- **Deprecated**: Consumer mới sẽ không nhìn thấy product; consumer cũ vẫn tiếp tục dùng được.
- **Retired**: Consumer cũ sẽ không dùng được product nữa.
- **Archived**: Product có thể được xóa.

## Lấy thông tin Endpoint của Product

**Bước 1:** Ở **Site Management** > chọn Site chứa Product cần lấy thông tin > chọn **Product**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-51-1024x538-6cfa063a.png)](/img/migrated/Userguide-FPT-API-Management-51-1024x538-6cfa063a.png)

**Bước 2:** Chọn Product cần lấy thông tin > chọn **Manage Api**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-52-1024x538-de25edf9.png)](/img/migrated/Userguide-FPT-API-Management-52-1024x538-de25edf9.png)

**Bước 3:** Thông tin Endpoint nằm ở cột **API EndPoint**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-53-1024x538-0de79411.png)](/img/migrated/Userguide-FPT-API-Management-53-1024x538-0de79411.png)

## Quản lý trang Dev-portal

Sau khi publish một site, một trang portal được tạo ra để hiển thị danh sách các product đã public và các API trong product.

**Bước 1:** Vào **Sites** > chọn site > chọn **Edit**. Link trang portal nằm ở ô **Portal URL**.

**Bước 2:** Truy cập link để vào trang portal. Liên hệ chúng tôi để được cấp tài khoản đăng nhập.

## Quản lý IP

API Provider có thể cho phép hoặc chặn consumer gọi API từ một địa chỉ IP cụ thể.

1. Vào **Sites** > chọn site có product ở trạng thái Published.
2. Chọn **API Browser** > tích chọn **Enable IP Limitation**.
3. Nhập IP vào Allow hoặc Deny:
   - **Allow**: Chỉ các IP này mới được truy cập.
   - **Deny**: Các IP này bị chặn.
   - Allow có dữ liệu, Deny trống: Chỉ Allow mới truy cập được.
   - Deny có dữ liệu, Allow trống: Tất cả đều truy cập được trừ Deny.

:::note
Không thể vừa allow vừa deny cùng một IP.
:::

## Testing

Để kiểm tra API sau khi publish lên site trước khi gửi cho consumer:

1. Ở menu **API Manager** > **Sites** > **Product** > **Manage API** > chọn API muốn kiểm tra.
2. Chọn **Test API** hoặc **Test With Consumer**.
