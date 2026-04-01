---
id: "huong-dan-nhanh-quick-starts"
title: "Hướng dẫn nhanh (Quick Starts)"
description: "Luồng đăng ký và cấu hình API Management cơ bản từ đầu đến cuối dành cho API Provider."
sidebar_label: "Hướng dẫn nhanh (Quick Starts)"
sidebar_position: 3
---

# Hướng dẫn nhanh (Quick Starts)

:::note
**Đối tượng sử dụng:** API Provider.
:::

## 1. Đăng ký dịch vụ API Management

Để đăng ký tài khoản **API Provider**, bạn cần được cấp quota dịch vụ. Hãy liên hệ với chúng tôi nếu có nhu cầu sử dụng.

1. Trên menu của **FPT Portal**, chọn **Api Management** > **Create**.

[![Userguide FPT API Management 1](/img/migrated/Userguide-FPT-API-Management-1-1024x538-e900f9a0.png)](/img/migrated/Userguide-FPT-API-Management-1-1024x538-e900f9a0.png)

2. Nhập thông tin **Username**, chọn **Plan** và **Pricing**.

[![Alt text](/img/migrated/Thiet-ke-chua-co-ten-1-af7277d5.png)](/img/migrated/Thiet-ke-chua-co-ten-1-af7277d5.png)

Tham khảo cấu hình từng plan theo bảng sau:

| **Plan** | **Mô tả** | **Số lượng site** | **Số lượng API** | **Số lượng Product** |
| --- | --- | --- | --- | --- |
| **Pilot** | User dùng site và product mặc định, không có chức năng tạo thêm site và product. | 1 | 2 | 1 |
| **Normal** | User dùng site và product mặc định, không có chức năng tạo thêm site. | 1 | Không giới hạn | 1 |
| **Enterprise** | User có thể tự tạo site và product. | Không giới hạn | Không giới hạn | Không giới hạn |

| **Chức năng** | **Standard** | **Advanced** | **Premium** |
| --- | --- | --- | --- |
| **Transactions** | Max: 250/s | Max: 1000/s | Max: 5000/s |
| **Developer Portal** | No | Yes | Yes |
| **Custom Domain** | Yes | Yes | Yes |
| **Self-hosted Gateway** | No | Yes | Yes |
| **Message size** | 15KB | 25KB | 50KB |
| **Logging retention** | 1 tháng | 2 tháng | 3 tháng |
| **SLA** | 99.95% | 99.99% | 99.99% |

3. Chọn **Create**. Hệ thống sẽ khởi tạo dịch vụ và thông báo tình trạng xử lý.

[![Userguide FPT API Management 3](/img/migrated/Userguide-FPT-API-Management-3-1024x258-824a2884.png)](/img/migrated/Userguide-FPT-API-Management-3-1024x258-824a2884.png)

Sau khi khởi tạo thành công, người dùng được tự động chuyển hướng sang trang quản trị **ApiManager Application**.

[![Userguide FPT API Management 4](/img/migrated/Userguide-FPT-API-Management-4-1024x538-56046d89.png)](/img/migrated/Userguide-FPT-API-Management-4-1024x538-56046d89.png)

Hoặc truy cập **FPT Portal** và chọn **Start** trên **API Management** để vào trang quản trị.

[![Userguide FPT API Management 5](/img/migrated/Userguide-FPT-API-Management-5-1024x258-06e7b130.png)](/img/migrated/Userguide-FPT-API-Management-5-1024x258-06e7b130.png)

## 2. Khai báo REST API

Sau khi đăng ký dịch vụ, khai báo các API cần quản lý lên hệ thống để quản trị tập trung trên **API Management**.

1. Vào menu **Application** > **API Manager** > **Rest Apis**, chọn **Create**.

[![Userguide FPT API Management 6](/img/migrated/Userguide-FPT-API-Management-6-1024x538-b760ac40.png)](/img/migrated/Userguide-FPT-API-Management-6-1024x538-b760ac40.png)

2. Nhập các thông tin cần thiết:
   - **Name:** Tên API.
   - **Title:** Tiêu đề cho API.
   - **Base path:** Đường dẫn để client gọi vào sau khi public API.
   - **Use host group:** Kích hoạt mode HA hoặc không.
   - **Target endpoint:** Endpoint của API hiện có, cần đưa ra cho consumer dùng.
   - **Target Security:** Thông tin xác thực của API.
   - **Security method:** Phương thức xác thực khi client sử dụng API. Hỗ trợ **Basic Authentication**, **OAuth** và **Api Key**.
   - **Enable doc:** Tạo doc cho API.
   - **Enable validation schema:** Thêm validation cho body request.

:::warning
**Security method** sẽ không thể thay đổi sau khi tạo. Hãy cẩn thận khi khai báo thông tin này.
:::

[![Userguide FPT API Management 7](/img/migrated/472080589_951032306478361_13273467091314-3c62edec.png)](/img/migrated/472080589_951032306478361_13273467091314-3c62edec.png)

3. Chọn **OK** để khởi tạo **REST APIs**.

[![Userguide FPT API Management 8](/img/migrated/Userguide-FPT-API-Management-8-1024x538-c2bb67f9.png)](/img/migrated/Userguide-FPT-API-Management-8-1024x538-c2bb67f9.png)

## 3. Khai báo Product

**Product** là thực thể dùng để gom nhóm các API với nhau (chung mục đích sử dụng, chung client,…). Thay vì cấu hình từng API, bạn chỉ cần cấu hình một Product duy nhất.

1. Vào menu **Application** > **API Manager** > **Products**, chọn **Create**.

[![Userguide FPT API Management 9](/img/migrated/Userguide-FPT-API-Management-9-1024x538-a464f0e4.png)](/img/migrated/Userguide-FPT-API-Management-9-1024x538-a464f0e4.png)

2. Nhập các thông tin theo yêu cầu:
   - **Name:** Tên product.
   - **Title:** Tiêu đề.
   - **Visibility type:** Chế độ hiển thị của Product, **Public** hoặc **Closed**.

[![Userguide FPT API Management 10](/img/migrated/Userguide-FPT-API-Management-10-1024x538-5c96395a.png)](/img/migrated/Userguide-FPT-API-Management-10-1024x538-5c96395a.png)

3. Chọn **OK** để tạo **Product**.

[![Userguide FPT API Management 11](/img/migrated/Userguide-FPT-API-Management-11-1024x538-93a6a17c.png)](/img/migrated/Userguide-FPT-API-Management-11-1024x538-93a6a17c.png)

## 4. Gắn APIs vào Product

1. Trong **Product Management**, chọn **Product** cần gán API, sau đó chọn **Register API**.

[![Userguide FPT API Management 12](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)

2. Chọn **Register**.

[![Userguide FPT API Management 13](/img/migrated/Userguide-FPT-API-Management-13-1024x538-40e6fd9c.png)](/img/migrated/Userguide-FPT-API-Management-13-1024x538-40e6fd9c.png)

3. Chọn API cần gán vào **Product**, sau đó chọn **Select**.

[![Userguide FPT API Management 14](/img/migrated/Userguide-FPT-API-Management-14-1024x538-86d8a0d0.png)](/img/migrated/Userguide-FPT-API-Management-14-1024x538-86d8a0d0.png)

4. Chọn **OK** để lưu.

[![Userguide FPT API Management 15](/img/migrated/Userguide-FPT-API-Management-15-1024x538-26910f97.png)](/img/migrated/Userguide-FPT-API-Management-15-1024x538-26910f97.png)

:::note
- Product và API liên kết theo quan hệ nhiều–nhiều: một Product có thể gán nhiều API và một API có thể xuất hiện trong nhiều Product.
- Product ảnh hưởng đến việc nhóm API được publish tới loại consumer nào.
:::

## 5. Tạo Site mới

Site là thực thể dùng để mapping các product với portal.

:::note
Nếu dùng gói **Pilot** hoặc **Normal**, bạn được cung cấp một site mặc định và không thể tạo thêm. Nâng cấp lên gói cao hơn nếu cần nhiều site.
:::

1. Vào menu **Application** > **API Manager** > **Sites**, chọn **Create**.

[![Userguide FPT API Management 16](/img/migrated/Userguide-FPT-API-Management-16-1024x538-be9735da.png)](/img/migrated/Userguide-FPT-API-Management-16-1024x538-be9735da.png)

2. Nhập các thông tin theo yêu cầu:
   - **Name:** Tên site.
   - **Title:** Tiêu đề.
   - **Production mode:** Chọn chế độ product.
   - **Virtual area:** Chọn khu vực trong danh sách đã được admin khai báo.
   - **Gateway:** Chọn gateway trong danh sách đã được admin khai báo.
   - **Portal:** Chọn Portal trong danh sách đã được admin khai báo.

[![Userguide FPT API Management 17](/img/migrated/Userguide-FPT-API-Management-17-1024x538-c8843ff5.png)](/img/migrated/Userguide-FPT-API-Management-17-1024x538-c8843ff5.png)

3. Chọn **OK** để tạo **Site**.

[![Userguide FPT API Management 18](/img/migrated/Userguide-FPT-API-Management-18-1024x538-c20fb585.png)](/img/migrated/Userguide-FPT-API-Management-18-1024x538-c20fb585.png)

## 6. Staging product

Sau khi có Product và Site, bạn cần stage (đặt) product vào site tương ứng trước khi sử dụng.

1. Trong **Product Management**, chọn **Product** cần public lên **Site**, sau đó chọn **Staging**.

[![Userguide FPT API Management 19](/img/migrated/Userguide-FPT-API-Management-19-1024x538-32e49e03.png)](/img/migrated/Userguide-FPT-API-Management-19-1024x538-32e49e03.png)

2. Chọn **Staging to New site**.

[![Userguide FPT API Management 20](/img/migrated/Userguide-FPT-API-Management-20-1024x538-c19e306e.png)](/img/migrated/Userguide-FPT-API-Management-20-1024x538-c19e306e.png)

3. Nhập các thông tin theo yêu cầu:
   - **Product:** Product cần gán vào Site.
   - **Site to publish:** Chọn site đã tạo trước đó.

[![Userguide FPT API Management 21](/img/migrated/Userguide-FPT-API-Management-21-1024x538-9ac596d9.png)](/img/migrated/Userguide-FPT-API-Management-21-1024x538-9ac596d9.png)

4. Chọn **OK**.

[![Userguide FPT API Management 22](/img/migrated/Userguide-FPT-API-Management-22-1024x538-7e8c715e.png)](/img/migrated/Userguide-FPT-API-Management-22-1024x538-7e8c715e.png)

:::note
- Product và Site liên kết theo quan hệ nhiều–nhiều: một Site có thể gán nhiều Product và một Product có thể xuất hiện trong nhiều Site.
- Site quyết định Product nào được hiển thị trên site đó (và các API trong product con).
:::

## 7. Publish product

Sau khi stage, product vẫn ở trạng thái private. Consumer chưa dùng được các API trong product đó cho đến khi bạn thực hiện publish.

1. Vào menu **API Manager**, chọn **Sites**.

[![Userguide FPT API Management 23](/img/migrated/Userguide-FPT-API-Management-23-1024x590-aff731c7.png)](/img/migrated/Userguide-FPT-API-Management-23-1024x590-aff731c7.png)

2. Chọn **Site** chứa **Product** cần publish, sau đó chọn **Product**.

[![Userguide FPT API Management 24](/img/migrated/Userguide-FPT-API-Management-24-1024x558-b953da5f.png)](/img/migrated/Userguide-FPT-API-Management-24-1024x558-b953da5f.png)

3. Chọn Product cần publish, sau đó chọn **Publish**.

[![Userguide FPT API Management 25](/img/migrated/Userguide-FPT-API-Management-25-1024x556-cd93e7e6.png)](/img/migrated/Userguide-FPT-API-Management-25-1024x556-cd93e7e6.png)

## 8. Tạo Consumers mới

**Consumer** là người dùng cuối sử dụng API, được toàn quyền sử dụng các API đã khai báo trong các Product được cấp quyền.

1. Vào menu **API Manager**, chọn **Consumers** > **Create**.

[![Userguide FPT API Management 26](/img/migrated/Userguide-FPT-API-Management-26-1024x538-38542a55.png)](/img/migrated/Userguide-FPT-API-Management-26-1024x538-38542a55.png)

2. Nhập các thông tin theo yêu cầu:
   - **Name:** Tên Consumer.
   - **Site:** Chọn site Consumer có hiệu lực.
   - **API Key:** Tích chọn xác thực bằng API key hay không.
   - **Title:** Tiêu đề.
   - **Password:** Mật khẩu nếu dùng **Basic Authentication**.
   - **Confirm password:** Xác nhận lại mật khẩu.
   - **Max per second:** Số lần client có thể gọi API trên giây.
   - **Max per minute:** Số lần client có thể gọi API trên phút.
   - **Max per hour:** Số lần client có thể gọi API trên giờ.

[![Userguide FPT API Management 27](/img/migrated/Userguide-FPT-API-Management-27-1024x538-8505cbdc.png)](/img/migrated/Userguide-FPT-API-Management-27-1024x538-8505cbdc.png)

:::note
- Có thể khai báo và sử dụng song song cả API Key và Password.
- Phương thức xác thực của Consumer phải tương ứng với API cần sử dụng. Ví dụ: nếu API dùng Basic Authentication thì Consumer cũng phải dùng Basic.
:::

3. Chọn **OK** để tạo Consumer.

[![Userguide FPT API Management 28](/img/migrated/Userguide-FPT-API-Management-28-1024x538-29ff8f20.png)](/img/migrated/Userguide-FPT-API-Management-28-1024x538-29ff8f20.png)

## 9. Subscribe product

Sau khi tạo **Consumer**, nhà cung cấp cần chỉ định Consumer subscribe một **Product** để Consumer có thể sử dụng các API trong Product đó.

1. Trong **Consumer Management**, chọn consumer, sau đó chọn **Product subscription**.

[![Userguide FPT API Management 29](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)

2. Chọn **Subscribe product**.

[![Userguide FPT API Management 30](/img/migrated/Userguide-FPT-API-Management-30-1024x538-a7aedaa1.png)](/img/migrated/Userguide-FPT-API-Management-30-1024x538-a7aedaa1.png)

3. Chọn **Product**.

[![Userguide FPT API Management 31](/img/migrated/Userguide-FPT-API-Management-31-1024x538-85d308c1.png)](/img/migrated/Userguide-FPT-API-Management-31-1024x538-85d308c1.png)

:::note
Product phải ở trạng thái published thì consumer mới có thể chọn trong giao diện subscribe.
:::

4. Chọn **OK** để lưu.

[![Userguide FPT API Management 32](/img/migrated/Userguide-FPT-API-Management-32-1024x538-401df389.png)](/img/migrated/Userguide-FPT-API-Management-32-1024x538-401df389.png)

Sau khi hoàn tất các bước trên, client đã có thể sử dụng các API mà nhà cung cấp đưa ra.

## 10. Nhận thông tin từ API Provider

Để bắt đầu sử dụng, client cần có các thông tin sau:

- **Endpoint của API:** Được cung cấp theo hướng dẫn lấy thông tin Endpoint của Product.
- **Authorization:** Phương thức xác thực của **Consumer**. Hỗ trợ **Basic** hoặc **API Key**.
  - Nếu **Authorization** là **Basic:**
    - **Username:** Cấu trúc: `UsernameProvider.tênsite.usernameConsumer` (ví dụ: `demo123.sitedemo.demoacc`). Hoặc lấy theo hướng dẫn lấy thông tin xác thực của Consumer.
    - **Password:** Mật khẩu đã khai báo ở bước tạo consumer.
  - Nếu **Authorization** là **API Key:**
    - **Key:** `api-key`
    - **Value:** Lấy theo hướng dẫn lấy thông tin xác thực của Consumer.
    - **Add to:** Header.
- **Site được ủy quyền.**

## 11. Sử dụng Postman

Khi đã có đủ thông tin, client có thể sử dụng Postman để gọi API từ API Management.

1. Nhập endpoint và chọn method gọi API.

[![Userguide FPT API Management 33](/img/migrated/Userguide-FPT-API-Management-33-1024x640-6851d77f.png)](/img/migrated/Userguide-FPT-API-Management-33-1024x640-6851d77f.png)

2. Nhập thông tin **Authorization**:
   - Chọn **Basic Auth** và nhập **Username**/**Password** nếu Authorization là Basic.
   - Chọn **API Key** và nhập key nếu Authorization là API Key.

[![Userguide FPT API Management 34](/img/migrated/Userguide-FPT-API-Management-34-1024x640-c6cc1291.png)](/img/migrated/Userguide-FPT-API-Management-34-1024x640-c6cc1291.png)

3. Nhập request body và các param khác, sau đó chọn **Send**.

[![Userguide FPT API Management 35](/img/migrated/Userguide-FPT-API-Management-35-1024x640-fc9f24a1.png)](/img/migrated/Userguide-FPT-API-Management-35-1024x640-fc9f24a1.png)

4. Nhận kết quả trả về:
   - **Status 2xx:** Gọi API thành công.
   - **Status 4xx–5xx:** Lỗi — liên hệ FCI để được hỗ trợ.

[![Userguide FPT API Management 36](/img/migrated/Userguide-FPT-API-Management-36-1024x640-9e719493.png)](/img/migrated/Userguide-FPT-API-Management-36-1024x640-9e719493.png)

:::tip
Checklist kiểm tra lỗi theo thứ tự:
1. Kiểm tra username, password.
2. Yêu cầu API Provider kiểm tra quyền của client với API.
3. Kiểm tra API đã khai báo đúng chưa, param hoặc header có bị thiếu không.
4. Kiểm tra API có bị lỗi không.
5. Yêu cầu FCI kiểm tra gateway.
:::
