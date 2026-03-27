---
id: "tutorials-bucket-config"
title: "A. Tạo Lifecycle Rule mới"
description: "**Versioning** là tính năng trong **FPT Object Storage** giúp lưu và quản lý nhiều phiên bản của một object. Khi tính nă"
sidebar_label: "A. Tạo Lifecycle Rule mới"
sidebar_position: 7
---

# Tutorials Bucket Config

## Versioning
**Versioning** là tính năng trong **FPT Object Storage** giúp lưu và quản lý nhiều phiên bản của một object. Khi tính năng này được bật, mỗi lần bạn cập nhật hoặc xóa object, một phiên bản mới sẽ được tạo ra và lưu trữ lại. Điều này cho phép bạn lưu trữ và khôi phục các phiên bản trước đó của object nếu cần thiết.
Để bật tính năng Versioning cho một bucket, bạn thực hiện các bước sau:
**Bước 1:** Trong phần **Action** của bucket cần cấu hình, chọn **Config**.
**Bước 2:** Mở tab **Versioning**.
**Bước 3:** Chọn **Enable** để bật tính năng Versioning hoặc **Disable** để tắt tính năng này, sau đó nhấn **Save** để lưu các thay đổi.
## Static Website Hosting
**Static Website Hosting** là một tính năng cho phép bạn lưu trữ toàn bộ resource của một trang web tĩnh trên FPT Object Storage. Thay vì chỉ lưu trữ các tệp tin như bình thường, bạn có thể sử dụng bucket để lưu các file HTML, CSS, JavaScript cùng các tài nguyên tĩnh khác và cung cấp nó cho người dùng ở dạng website. Khi kích hoạt Static Website Hosting cho một bucket, FPT Object Storage sẽ cung cấp cho bạn một URL công khai. Bạn có thể sử dụng URL này để truy cập và chia sẻ trang web của mình giống như với các dịch vụ web hosting khác.
Để cấu hình **Static Website Hosting** trong FPT Object Storage, thực hiện các bước sau:
**Bước 1:** Upload toàn bộ mã nguồn của trang web lên bucket trong FPT Object Storage.
**Bước 2:** Trong phần **Action** của bucket cần cấu hình, chọn **Config**.
**Bước 3:** Mở tab **Static Website Hosting**.
**Bước 4:** Chọn **Enable Website Hosting** và điền các thông số cần thiết:
  * **Index Document:** Tên của trang chủ của website (ví dụ: `index.html`).
  * **Error Document:** Tên của trang lỗi (404), sẽ hiển thị nếu người dùng yêu cầu một URL không hợp lệ (ví dụ: `404.html`).

**Bước 5:** Truy cập trang web của bạn bằng URL được cung cấp trong phần Endpoints.
## Lifecycle Configurations
Lifecycle Configurations là tính năng trong FPT Object Storage cho phép bạn tự động quản lý vòng đời của các đối tượng trong bucket. Tính năng này đặc biệt hữu ích cho việc tự động xóa các object sau một thời gian nhất định, giúp tiết kiệm chi phí lưu trữ và quản lý dữ liệu hiệu quả.
Một **Lifecycle Rule** thông thường bao gồm các thành phần sau:
  * **Scope (Phạm vi):** Xác định các object mà rule sẽ áp dụng. Bạn có thể áp dụng rule cho toàn bộ bucket hoặc chỉ định tiền tố (prefix) để áp dụng cho một nhóm đối tượng cụ thể.
  * **Delete current versions of objects:** Xác định thời điểm khi current version của các object trong phạm vi sẽ bị xóa. Nếu bạn không sử dụng Versioning, việc xóa current version sẽ tương ứng với việc xóa vĩnh viễn object.
  * **Permanently delete noncurrent versions of objects:** Xác định thời điểm khi non-current version của các object trong phạm vi sẽ bị xóa. Non-current versions chỉ được tạo ra khi sử dụng Versioning, do đó nếu bạn không sử dụng Versioning, phần này có thể không cần thiết.
  * **Delete incomplete multipart uploads:** Xác định thời điểm xóa các multipart uploads chưa hoàn thành. Điều này giúp dọn dẹp các uploads không hoàn chỉnh và giải phóng không gian lưu trữ.
  * **Delete expired object delete markers:** Xóa các delete markers đã hết hạn (không còn version nào). Điều này giúp loại bỏ các marker không còn cần thiết, giữ cho bucket của bạn gọn gàng hơn.

**Lifecycle Configurations** giúp bạn quản lý dữ liệu trong bucket một cách tự động, giảm bớt công việc quản lý thủ công và tối ưu hóa chi phí lưu trữ.
**Lifecycle Rule** trong **FPT Object Storage** sẽ tự động được thực thi theo cách sau:
  * **Quá trình chạy tự động:** Rule sẽ được thực thi tự động bằng cách quét toàn bộ các đối tượng trong bucket vào lúc 0h GMT mỗi ngày (07h00 giờ Việt Nam).
  * **Hành động thực hiện:** Các hành động đã được cấu hình trong rule sẽ được áp dụng đối với các object đáp ứng điều kiện của rule.

Điều này giúp tự động quản lý vòng đời của các đối tượng mà không cần can thiệp thủ công hàng ngày.
### A. Tạo Lifecycle Rule mới
Để cấu hình **Lifecycle Configurations** cho một bucket trong **FPT Object Storage** , bạn thực hiện các bước sau:
**Bước 1:** Trên bảng quản trị **Object Storage Management** , chọn **Config** ở bucket cần cấu hình Lifecycle Rule.
**Bước 2:** Mở tab **Lifecycle Configurations** , sau đó chọn **Create Rule**.
**Bước 3:** Nhập thông tin của **Lifecycle Rule** vào các trường tương ứng:
  * **Rule Name:** Tên của Rule để dễ nhận diện và quản lý.
  * **Rule Scope:** Phạm vi các đối tượng mà quy tắc sẽ áp dụng. Bạn có thể: 
    * Áp dụng quy tắc cho toàn bộ bucket (**Full**).
    * Chỉ định tiền tố (**Prefix**) để áp dụng cho một nhóm đối tượng cụ thể trong bucket.

Tiếp theo, bạn có thể cấu hình các hành động khác của Lifecycle Rule như xóa các phiên bản hiện tại, xóa các phiên bản không còn, xóa các multipart uploads chưa hoàn thành, và xóa các delete markers đã hết hạn, tùy thuộc vào nhu cầu của bạn.
  * **Delete current versions of objects:** Chọn số ngày sẽ xóa các current versions của objects.
  * **Permanently delete noncurrent versions of objects:** Chọn số ngày sẽ xóa các noncurrent versions của objects.
  * **Delete incomplete multipart uploads:** Chọn số ngày sẽ xóa các incomplete multipart uploads.
  * **Delete expired object delete markers:** Chọn số ngày sẽ xóa các expired object delete markers.

**Bước 4:** Nhấn Save để lưu
Trong **FPT Object Storage** , khi tính năng **Versioning** đã được bật, việc xóa một đối tượng không dẫn đến việc xóa vĩnh viễn ngay lập tức. Thay vào đó, hệ thống sẽ tạo một **delete marker**.
**Delete marker** là một thực thể đặc biệt được sử dụng để đánh dấu rằng đối tượng đã bị xóa. Điều này giúp hệ thống theo dõi lịch sử xóa và cho phép khôi phục dữ liệu nếu cần trong tương lai.
Khi tất cả các phiên bản cũ hơn của đối tượng đã bị xóa và chỉ còn lại delete marker trong danh sách phiên bản, delete marker sẽ chuyển thành **Expired delete markers**. Đây là dấu hiệu cho thấy không còn phiên bản nào của đối tượng còn tồn tại trong bucket, và delete marker đã hết hạn.
### B. Update Lifecycle Rule
Để cập nhật một **Lifecycle Rule** trong **FPT Object Storage** , thực hiện các bước sau:
**Bước 1:** Tại **Lifecycle Rule** cần cập nhật, chọn **Edit**.
**Bước 2:** Nhập các thông tin cần cập nhật cho **Lifecycle Rule** vào các trường tương ứng.
Sau khi hoàn tất việc nhập thông tin, lưu các thay đổi để áp dụng cập nhật.
### C. Delete Lifecycle Rule
Để xóa một **Lifecycle Rule** trong **FPT Object Storage** , thực hiện các bước sau:
**Bước 1:** Tại **Lifecycle Rule** cần xóa, chọn **Delete**.
**Bước 2:** Một hộp thoại cảnh báo sẽ hiển thị, hiển thị tên rule và yêu cầu bạn xác nhận hành động. Chọn **Delete** để tiến hành xóa rule.
## Cấu hình Bucket CORS
**CORS (Cross-Origin Resource Sharing)** cho phép các trang web và ứng dụng từ các nguồn khác nhau tương tác và chia sẻ dữ liệu một cách an toàn.
Mặc định, **FPT Object Storage** sẽ chặn tất cả các yêu cầu từ các origin khác nhau đến bucket của bạn. Tính năng **Bucket CORS** cho phép một trang web từ một origin cụ thể có thể yêu cầu tài nguyên từ bucket mà không bị chặn bởi **Same-Origin Policy (SOP)**.
Khi một trang web hoặc ứng dụng cố gắng truy cập tài nguyên từ FPT Object Storage, trình duyệt sẽ gửi một yêu cầu **Cross-Origin (CORS request)** đến server FPT Object Storage. Server phải đáp ứng yêu cầu này bằng cách gửi các HTTP headers chứa chính sách CORS. Trình duyệt sau đó kiểm tra các headers này để xác định xem việc truy cập có được phép hay không.
Để cho phép một origin (website hoặc server) có thể **GET** dữ liệu từ bucket, bạn cần cấu hình chúng trong **Bucket CORS Config**.
### A. Tạo Bucket CORS Rule mới
Để tạo một **CORS Rule** mới cho bucket trong **FPT Object Storage** , thực hiện các bước sau:
**Bước 1:** Trên bảng quản trị **Object Storage Management** , chọn **Config** ở bucket cần cấu hình CORS.
**Bước 2:** Mở tab **Bucket CORS** , sau đó chọn **Create Rule**.
**Bước 3:** Nhập thông tin của **CORS Rule** vào các trường tương ứng:
  * **Rule Name:** Tên của Rule. (Ví dụ: `AllowAllOrigins`)
  * **Allowed Origins:** Nhập danh sách các origin (website hoặc server) được phép thực hiện CORS request. Sử dụng `` để cho phép tất cả các origins.
  * **Allowed Methods:** Chọn một hoặc nhiều phương thức HTTP mà bạn cho phép các origins thực thi. (Ví dụ: `GET`, `POST`, `PUT`)
  * **Max Age Seconds:** Nhập thời gian lưu cache cho chính sách CORS trong giây. (Ví dụ: `3600` để lưu cache trong 1 giờ)
  * **Advanced Settings:**
    * **Expose Headers:** Nhập một hoặc nhiều headers trong phản hồi mà bạn muốn khách hàng có thể truy cập từ ứng dụng của họ. (Ví dụ: `x-amz-request-id`)
    * **Allowed Headers:** Nhập các tiêu đề được chỉ định trong `Access-Control-Request-Headers`. (Ví dụ: `Content-Type`, `Authorization`)

Sau khi nhập đầy đủ thông tin, nhấn **Save** để áp dụng cấu hình CORS mới cho bucket.
### B. Update Bucket CORS Rule
Để cập nhật một **Bucket CORS Rule** hiện có trong **FPT Object Storage** , thực hiện các bước sau:
**Bước 1:** Ở **Bucket CORS Rule** cần cập nhật, chọn **Edit**.
**Bước 2:** Nhập các thông tin cập nhật của **CORS Rule** vào các trường tương ứng:
  * **Rule Name:** Cập nhật tên của Rule nếu cần thiết.
  * **Allowed Origins:** Điều chỉnh danh sách các origins được phép thực hiện CORS request. Sử dụng `` để cho phép tất cả các origins hoặc nhập danh sách cụ thể.
  * **Allowed Methods:** Thay đổi một hoặc nhiều phương thức HTTP mà bạn cho phép các origins thực thi.
  * **Max Age Seconds:** Điều chỉnh thời gian lưu cache cho chính sách CORS trong giây.
  * **Advanced Settings:**
    * **Expose Headers:** Cập nhật các headers trong phản hồi mà bạn muốn khách hàng có thể truy cập từ ứng dụng của họ.
    * **Allowed Headers:** Thay đổi các tiêu đề được chỉ định trong `Access-Control-Request-Headers`.

Sau khi thực hiện các thay đổi, nhấn **Save** để áp dụng các cập nhật cho CORS Rule.
### C. Delete Bucket CORS Rule
Để xóa một **Bucket CORS Rule** trong **FPT Object Storage** , thực hiện các bước sau:
**Bước 1:** Ở **Bucket CORS Rule** cần xóa, chọn **Delete**.
**Bước 2:** Một hộp thoại cảnh báo sẽ hiển thị, hiển thị tên của rule và yêu cầu bạn xác nhận hành động. Chọn **Delete** để tiến hành xóa rule.
Sau khi xác nhận, rule sẽ bị xóa và các yêu cầu CORS liên quan đến rule đó sẽ không còn được áp dụng.