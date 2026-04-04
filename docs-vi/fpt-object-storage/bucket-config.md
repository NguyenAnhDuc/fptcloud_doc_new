---
id: "bucket-config"
title: "Cấu hình bucket"
description: "Hướng dẫn cấu hình versioning, Static Website Hosting, Lifecycle và CORS trong FPT Object Storage."
sidebar_label: "Cấu hình bucket"
sidebar_position: 7
---

# Cấu hình bucket

## Versioning

**Versioning** là tính năng trong **FPT Object Storage** giúp lưu và quản lý nhiều phiên bản của một object. Khi tính năng này được bật, mỗi lần bạn cập nhật hoặc xóa object, một phiên bản mới sẽ được tạo ra và lưu trữ lại. Điều này cho phép bạn khôi phục các phiên bản trước đó của object nếu cần.

Để bật Versioning cho một bucket:

1. Trong phần **Action** của bucket cần cấu hình, chọn **Config**.
2. Mở tab **Versioning**.
3. Chọn **Enable** để bật hoặc **Disable** để tắt Versioning, sau đó nhấn **Save** để lưu thay đổi.

## Static Website Hosting

**Static Website Hosting** là tính năng cho phép bạn lưu trữ toàn bộ resource của một trang web tĩnh trên FPT Object Storage. Thay vì chỉ lưu trữ các tệp tin như bình thường, bạn có thể sử dụng bucket để lưu các file HTML, CSS, JavaScript cùng các tài nguyên tĩnh khác và cung cấp nó cho người dùng ở dạng website. Khi kích hoạt Static Website Hosting, FPT Object Storage sẽ cung cấp cho bạn một URL công khai.

Để cấu hình **Static Website Hosting**:

1. Upload toàn bộ mã nguồn của trang web lên bucket trong FPT Object Storage.
2. Trong phần **Action** của bucket cần cấu hình, chọn **Config**.
3. Mở tab **Static Website Hosting**.
4. Chọn **Enable Website Hosting** và điền các thông số cần thiết:
   - **Index Document:** Tên của trang chủ của website (ví dụ: `index.html`).
   - **Error Document:** Tên của trang lỗi (404), sẽ hiển thị nếu người dùng yêu cầu một URL không hợp lệ (ví dụ: `404.html`).
5. Truy cập trang web của bạn bằng URL được cung cấp trong phần Endpoints.

## Lifecycle Configurations

Lifecycle Configurations là tính năng trong FPT Object Storage cho phép bạn tự động quản lý vòng đời của các object trong bucket. Tính năng này đặc biệt hữu ích cho việc tự động xóa các object sau một thời gian nhất định, giúp tiết kiệm chi phí lưu trữ và quản lý dữ liệu hiệu quả.

Một **Lifecycle Rule** thông thường bao gồm các thành phần sau:

- **Scope (Phạm vi):** Xác định các object mà rule sẽ áp dụng. Bạn có thể áp dụng rule cho toàn bộ bucket hoặc chỉ định tiền tố (prefix) để áp dụng cho một nhóm object cụ thể.
- **Delete current versions of objects:** Xác định thời điểm khi current version của các object trong phạm vi sẽ bị xóa. Nếu không sử dụng Versioning, việc xóa current version sẽ tương đương với xóa vĩnh viễn object.
- **Permanently delete noncurrent versions of objects:** Xác định thời điểm khi non-current version của các object trong phạm vi sẽ bị xóa. Non-current versions chỉ được tạo ra khi sử dụng Versioning.
- **Delete incomplete multipart uploads:** Xác định thời điểm xóa các multipart uploads chưa hoàn thành, giúp dọn dẹp uploads không hoàn chỉnh và giải phóng không gian lưu trữ.
- **Delete expired object delete markers:** Xóa các delete markers đã hết hạn (không còn version nào), giúp giữ cho bucket gọn gàng hơn.

**Lifecycle Rule** sẽ tự động được thực thi mỗi ngày lúc 0h GMT (07h00 giờ Việt Nam) bằng cách quét toàn bộ các object trong bucket.

### A. Tạo Lifecycle Rule mới

1. Trên bảng quản trị **Object Storage Management**, chọn **Config** ở bucket cần cấu hình Lifecycle Rule.
2. Mở tab **Lifecycle Configurations**, sau đó chọn **Create Rule**.
3. Nhập thông tin của **Lifecycle Rule** vào các trường tương ứng:
   - **Rule Name:** Tên của Rule để dễ nhận diện và quản lý.
   - **Rule Scope:** Phạm vi các object mà quy tắc sẽ áp dụng. Chọn **Full** để áp dụng toàn bộ bucket hoặc **Prefix** để áp dụng cho một nhóm object cụ thể.
   - **Delete current versions of objects:** Chọn số ngày sẽ xóa các current versions của objects.
   - **Permanently delete noncurrent versions of objects:** Chọn số ngày sẽ xóa các noncurrent versions của objects.
   - **Delete incomplete multipart uploads:** Chọn số ngày sẽ xóa các incomplete multipart uploads.
   - **Delete expired object delete markers:** Chọn số ngày sẽ xóa các expired object delete markers.
4. Nhấn **Save** để lưu.

### B. Cập nhật Lifecycle Rule

1. Tại **Lifecycle Rule** cần cập nhật, chọn **Edit**.
2. Nhập các thông tin cần cập nhật vào các trường tương ứng.
3. Sau khi hoàn tất, lưu các thay đổi để áp dụng cập nhật.

### C. Xóa Lifecycle Rule

1. Tại **Lifecycle Rule** cần xóa, chọn **Delete**.
2. Một hộp thoại cảnh báo sẽ hiển thị tên rule và yêu cầu xác nhận. Chọn **Delete** để tiến hành xóa rule.

## Cấu hình Bucket CORS

**CORS (Cross-Origin Resource Sharing)** cho phép các trang web và ứng dụng từ các nguồn khác nhau tương tác và chia sẻ dữ liệu một cách an toàn.

Mặc định, **FPT Object Storage** sẽ chặn tất cả các yêu cầu từ các origin khác nhau đến bucket. Tính năng **Bucket CORS** cho phép một trang web từ một origin cụ thể có thể yêu cầu tài nguyên từ bucket mà không bị chặn bởi **Same-Origin Policy (SOP)**.

Để cho phép một origin (website hoặc server) có thể **GET** dữ liệu từ bucket, bạn cần cấu hình trong **Bucket CORS Config**.

### A. Tạo Bucket CORS Rule mới

1. Trên bảng quản trị **Object Storage Management**, chọn **Config** ở bucket cần cấu hình CORS.
2. Mở tab **Bucket CORS**, sau đó chọn **Create Rule**.
3. Nhập thông tin của **CORS Rule** vào các trường tương ứng:
   - **Rule Name:** Tên của Rule (ví dụ: `AllowAllOrigins`).
   - **Allowed Origins:** Nhập danh sách các origin (website hoặc server) được phép thực hiện CORS request. Sử dụng `*` để cho phép tất cả các origins.
   - **Allowed Methods:** Chọn một hoặc nhiều phương thức HTTP mà bạn cho phép các origins thực thi (ví dụ: `GET`, `POST`, `PUT`).
   - **Max Age Seconds:** Nhập thời gian lưu cache cho chính sách CORS trong giây (ví dụ: `3600` để lưu cache trong 1 giờ).
   - **Advanced Settings:**
     - **Expose Headers:** Nhập các headers trong phản hồi mà bạn muốn ứng dụng có thể truy cập (ví dụ: `x-amz-request-id`).
     - **Allowed Headers:** Nhập các tiêu đề được chỉ định trong `Access-Control-Request-Headers` (ví dụ: `Content-Type`, `Authorization`).
4. Sau khi nhập đầy đủ thông tin, nhấn **Save** để áp dụng cấu hình CORS mới cho bucket.

### B. Cập nhật Bucket CORS Rule

1. Ở **Bucket CORS Rule** cần cập nhật, chọn **Edit**.
2. Nhập các thông tin cập nhật của **CORS Rule** vào các trường tương ứng.
3. Sau khi thực hiện các thay đổi, nhấn **Save** để áp dụng cập nhật.

### C. Xóa Bucket CORS Rule

1. Ở **Bucket CORS Rule** cần xóa, chọn **Delete**.
2. Một hộp thoại cảnh báo sẽ hiển thị tên rule và yêu cầu xác nhận. Chọn **Delete** để tiến hành xóa rule.

Sau khi xác nhận, rule sẽ bị xóa và các yêu cầu CORS liên quan đến rule đó sẽ không còn được áp dụng.
