---
id: "tutorials-object"
title: "Quản lý object"
description: "Hướng dẫn upload, download, copy, move và xóa object trong FPT Object Storage."
sidebar_label: "Quản lý object"
sidebar_position: 5
---

# Quản lý object

Mỗi object trong FPT Object Storage đại diện cho một file dữ liệu. Hệ thống không áp đặt giới hạn về định dạng file — bạn có thể lưu trữ mọi loại file từ văn bản, hình ảnh, âm thanh, video đến các file định dạng riêng của ứng dụng.

- **Metadata và tags:** Mỗi object có thể kèm theo metadata và tags để mô tả nội dung, giúp quản lý và tìm kiếm dễ dàng hơn.
- **Kiểm soát quyền truy cập:** Quyền truy cập đối với từng object có thể được kiểm soát qua ACL hoặc bucket policy.
- **Versioning:** FPT Object Storage hỗ trợ lưu nhiều phiên bản cho các object, cho phép giữ lại và phục hồi các phiên bản trước khi cần.

## Upload object mới vào bucket

**FPT Unify Portal** hỗ trợ upload tối đa 100 GB cho mỗi lần upload. Nếu cần upload file lớn hơn, hãy sử dụng S3 Client Tool, S3 SDK/CLI.

:::note
Nếu file trùng tên với file đã tồn tại, bạn sẽ nhận cảnh báo ghi đè. Nếu versioning chưa bật, file sẽ ghi đè lên file cũ. Nếu versioning đã bật, hệ thống sẽ tạo một phiên bản mới.
:::

1. Trên **Object Storage Management**, di chuyển đến vị trí cần thêm file và chọn **Upload object**.
2. Chọn file từ thiết bị và chọn **Upload**.

## Download object

1. Di chuyển đến vị trí của file cần tải xuống trên **Object Storage Management**.
2. Nhấn vào tên file — hệ thống sẽ tự động tải file về thiết bị.

## Generate presigned URL

Presigned URL là một liên kết truy cập tạm thời, giúp chia sẻ quyền truy cập vào một object cụ thể mà không cần thay đổi cấu hình quyền của bucket. Liên kết có thời hạn sử dụng và tự động hết hạn sau thời gian được chỉ định.

1. Trên **Object Storage Management**, di chuyển đến vị trí của file cần tạo presigned URL.
2. Ở phần **Action** của object, chọn **Generate Presigned URL**.
3. Chọn thời gian hết hạn cho URL (từ vài phút đến vài ngày), sau đó nhấn **Generate**.
4. Sao chép và chia sẻ URL được hiển thị. Sau khi hết hạn, URL sẽ không còn hiệu lực.

## Copy object

Copy object cho phép sao chép dữ liệu trong FPT Object Storage mà không làm thay đổi hoặc mất dữ liệu gốc.

1. Trên **Object Storage Management**, di chuyển đến vị trí của file cần copy.
2. Ở phần **Action** của object, chọn **Copy**.
3. Chọn đích đến bao gồm **Bucket** và **Folder** mới nếu cần, sau đó chọn **Confirm**.

## Move object

Move object là quá trình di chuyển object từ vị trí này sang vị trí khác. Quá trình này sao chép object đến vị trí mới rồi xóa object khỏi vị trí ban đầu.

1. Trên **Object Storage Management**, di chuyển đến vị trí của file cần di chuyển.
2. Ở phần **Action** của object, chọn **Move**.
3. Chọn đích đến bao gồm **Bucket** và **Folder** mới nếu cần, sau đó chọn **Confirm**.

## Copy URL của object

Bạn có thể lấy URL của object để chia sẻ hoặc gắn link vào website. Để GET được object, object hoặc bucket chứa nó phải ở chế độ Public.

1. Trên **Object Storage Management**, di chuyển đến vị trí file.
2. Ở phần **Action**, chọn **Copy URL**.

## Xóa object

:::note
Nếu versioning không được bật, khi xóa object thì object đó sẽ bị xóa vĩnh viễn và không thể phục hồi. Nếu versioning được bật, hệ thống sẽ tạo ra một "delete marker" thay vì xóa hoàn toàn — các phiên bản trước đó vẫn tồn tại và có thể phục hồi.

Thao tác xóa qua portal chỉ phù hợp cho các file có dung lượng dưới 50 GB.
:::

1. Trên **Object Storage Management**, di chuyển đến vị trí file cần xóa.
2. Ở phần **Action**, chọn **Delete**.
3. Xác nhận thao tác xóa trong hộp thoại cảnh báo.
