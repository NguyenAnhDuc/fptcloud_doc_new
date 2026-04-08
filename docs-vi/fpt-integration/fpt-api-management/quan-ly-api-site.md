---
id: "quan-ly-api-site"
title: "Quản lý API Site"
sidebar_label: "Quản lý API Site"
sidebar_position: 8
---

Quản lý API site


Site là một thực thể dùng để mapping các product với portal.

Nếu bạn dùng gói **Pilot** và **Normal** sẽ được cung cấp một Public site mặc định và không thể tạo thêm site mới. Nếu có nhu cầu sử dụng nhiều site hãy nâng cấp lên gói cao hơn.

## 1\. Tạo Site mới

**Bước 1:** Ở menu **Application** > **API Manager** > **Sites** , chọn **Create.**

![Userguide FPT API Management 16](images/quan-ly-api-site/img-001.png)

**Bước 2:** Nhập các thông tin theo yêu cầu:

  * **Name:** Tên site.
  * **Title:** Tiêu đề.
  * **Production mode:** Chọn chế độ product.
  * **Virtual area:** Chọn khu vực trong danh sách đã được admin khai báo trước đó.
  * **Gateway:** Chọn gateway trong danh sách đã được admin khai báo trước đó.
  * **Portal:** Chọn Portal trong danh sách đã được admin khai báo trước đó.


![Userguide FPT API Management 17](images/quan-ly-api-site/img-002.png)

**Bước 3**: Chọn **OK** để tiến hành tạo **Site**.

![Userguide FPT API Management 18](images/quan-ly-api-site/img-003.png)

## 2\. Thay đổi thông tin Site

Để thay đổi thông tin của một **Site** , bạn thao tác như sau:

**Bước 1:** Ở **Site Management** , chọn **Site** cần thay đổi thông tin > Chọn **Edit**.

![Userguide FPT API Management 47](images/quan-ly-api-site/img-004.png)

**Bước 3:** Nhập các thông tin mới và chọn **OK**.

![Userguide FPT API Management 48](images/quan-ly-api-site/img-005.png)

**Lưu ý:** Một số trường không thể thay đổi và sẽ bị disable trên giao diện sửa. Các trường còn lại cần nhập dữ liệu tuân thủ validation tương tự khi tạo Site.


## 3\. Staging product

Để bắt đầu đưa một product lên site, trước hết người dùng cần stage (đặt) product vào site.

**Lưu ý:** Khi product đó được stage lên một site, thì consumer vẫn chưa dùng được các API trong product đó. Người dùng cần phải thực hiện publish product thì consumer mới sử dụng được product.

Người dùng cần vào giao diện product và chọn site để stage product đó lên site đó.

Để gán product vào site, bạn thao tác như sau:

**Bước 1:** Ở **Product Management** , chọn **Product** cần pubic lên **Site** > **Staging**.

![Userguide FPT API Management 19](images/quan-ly-api-site/img-006.png)

**Bước 2:** Chọn **Staging to New site**.

![Userguide FPT API Management 20](images/quan-ly-api-site/img-007.png)

**Bước 3:** Nhập các thông tin theo yêu cầu:

  * **Product**: Product cần gán vào Site.
  * **Site to publish**: Chọn site đã tạo trước đó.


![Userguide FPT API Management 21](images/quan-ly-api-site/img-008.png)

**Bước 4:** Chọn **OK**.

![Userguide FPT API Management 22](images/quan-ly-api-site/img-009.png)

**Lưu ý:**

  * 1 site có thể bao gồm nhiều product.
  * 1 product có thể được dùng trong nhiều site.
  * Site sẽ quyết định xem product nào được show ra trên site đó (và các API trong product con)


## 4\. Quản lý trạng thái của các product trong site

Sau khi Staging product, bạn có thể vào trực tiếp Site để quản lý các product đang nằm trong Site và trạng thái hoạt động của nó.

Để quản lý Product trong site cụ thể, bạn thao tác như sau:

**Bước 1:** Ở **Site Management** , chọn **Site** cần quản lý Product.

![Userguide FPT API Management 49](images/quan-ly-api-site/img-010.png)

**Bước 2:** Chọn **Product.**

Ở đây bạn sẽ thấy danh sách Product và trạng thái của nó trong Site.

1 product sẽ có các trạng thái: **Unstagging** , **Stagging** , **Published** , **Deprecated** , **Retired** , **Archived.**

Quan hệ giữa các trạng thái được mô tả như hình:

![Userguide FPT API Management 50](images/quan-ly-api-site/img-011.png)

  * Ở trạng thái **Published** , consumer được gán với product đó mới có thể nhìn và sử dụng product.
  * Ở trạng thái **Deprecated** , consumer mới sẽ không nhìn thấy product, các consumer đã sử dụng product sẽ tiếp tục dùng được product đó.
  * Ở trạng thái **Retired** , consumer cũ sẽ không dùng được product nữa.
  * Ở trạng thái **Archived** , product có thể được xóa. Để quản lý các product đang ở trạng thái **Archived** hãy vào tab **Archived products.**


## 5\. Lấy thông tin Endpoint của Product

Mỗi Product khi ở trạng thái Published đều có 1 Endpoint để Consumer sử dụng.

Để lấy thông tin Endpoint của Product, bạn thao tác như sau:

**Bước 1:** Ở **Site Management** , chọn **Site** chứa Product cần lấy thông tin > Chọn **Product.**

![Userguide FPT API Management 51](images/quan-ly-api-site/img-012.png)

**Bước 2:** Chọn **Product** cần lấy thông tin **>** Chọn **Manage Api.**

![Userguide FPT API Management 52](images/quan-ly-api-site/img-013.png)

**Bước 3:** Thông tin cần lấy sẽ nằm ở cột **API EndPoint.**

![Userguide FPT API Management 53](images/quan-ly-api-site/img-014.png)


## 6\. Quản lý trang Dev – portal

Sau khi publish một site, sẽ có một trang portal được tạo ra. Trang này dùng để quản lý danh sách các product đã được public trên site đó và list API thuộc product.


Để lấy link portal bạn thao tác như sau:

**Bước 1****:**Trên menu vào** Sites** > chọn một site > chọn **Edit**. Đường link của trang portal được lấy ở ô** Portal URL**.


![PybQsyRHfYQdAAAAAElFTkSuQmCC](images/quan-ly-api-site/img-015.png)


Bước 2: Sau khi truy cập link đó sẽ dẫn đến trang có giao diện như sau:


![](images/quan-ly-api-site/img-016.png)


Để đăng nhập vào hệ thống, bạn cần có tài khoản bao gồm username và password, hãy liên hệ với chúng tôi để được cung cấp thông tin tài khoản.


## 7\. Quản lý IP

Để tăng tính bảo mật, API Provider có quyền cho phép hoặc chặn consumer call API từ một địa chỉ IP.


Bước 1: Trên menu vào Sites, chọn một site có product ở trạng thái published


![](images/quan-ly-api-site/img-017.png)

Bước 2: Chọn API Browser, trong details tích chọn Enable IP Limitation.


![](images/quan-ly-api-site/img-018.png)


Bước 3: Nhập IP được Allow/Deny:

  * – Nếu nhập IP trong Allow: Consumer có thể call API từ các địa chỉ IP thuộc mục này.
  * – Nếu nhập IP trong Deny: Consumer không thể call API từ các địa chỉ IP này.
  * – Nếu nhập IP trong Allow, bỏ trống Deny: Chỉ cho phép các IP nằm trong Allow mới có thể truy cập.


  * – Nếu nhập IP trong Deny, bỏ trống Allow: Tất cả các IP đều có thể truy cập được trừ các IP nằm trong Deny.
  *   * Chú ý: Không thể cùng một lúc vừa allow, vừa deny một IP được.


## 8\. Testing

Để thuận tiện cho việc kiểm tra API sau khi được publish lên site có hoạt động hay không trước khi gửi thông tin cho consumers. Bạn có thể kiểm tra việc đó ngay trong API Management của chúng tôi.


Bạn thao tác như sau:


Bước 1: Ở menu API Manager, chọn Site > Product > Manage API, chọn API mà bạn muốn kiểm tra.


Bước 2: Chọn Test API hoặc Test With Consumer


Giả sử với Test With Consumer, bạn thực hiện như sau:


![0L+8P1vSrnc3CgBYH8pbd269XkPQNauXZuhoaHGHBy46gFIPazbHYAsWLAg3d3djaVPTQACAAAAL0wCEIDnjyGwAAAAAACAgkn+Hzty+ksupAM1AAAAAElFTkSuQmCC](images/quan-ly-api-site/img-019.png)


  1. Chọn consumer đã subscribe được hiển thị trong list ở ô **Consumer**


  2. Chọn phương thức HTTP tương ứng (GET/POST/PUT/DELETE).


  3. Bạn nhập thêm phương thức “**https://** ” vào trước API endpoint.


Ví dụ như: **https://** gateway.apim.fptcloud.com/demo/truong11/newapi


  4. Chọn phương thức xác thực:

– Basic: Hệ thống tự động lấy username tương ứng với consumer đã chọn. Bạn chỉ cần nhập password. Cách lấy password thao tác theo hướng dẫn ở phần Lấy thông tin xác thực của consumer.


  * – API key: Hệ thống tự lấy key name, bạn chỉ cần nhập key value. Cách lấy key value thao tác theo hướng dẫn ở phần Lấy thông tin xác thực của consumer.
  *

  5. Chọn nút Call để gọi API. Kết quả được hiển thị trong ô Response.


*
