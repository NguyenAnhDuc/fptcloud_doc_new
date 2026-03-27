---
id: "tutorials-object"
title: "Upload Object mới vào Bucket"
description: "Mỗi object trong FPT Object Storage đại diện cho một file dữ liệu. Hệ thống không áp đặt bất kỳ giới hạn nào về định dạn"
sidebar_label: "Upload Object mới vào Bucket"
sidebar_position: 5
---

# Tutorials Object

Mỗi object trong FPT Object Storage đại diện cho một file dữ liệu. Hệ thống không áp đặt bất kỳ giới hạn nào về định dạng file mà bạn có thể upload. Bạn có thể lưu trữ mọi loại file từ văn bản, hình ảnh, âm thanh, video đến các file định dạng riêng của ứng dụng.
  * **Metadata và tags:** Mỗi object có thể kèm theo metadata và tags để mô tả thêm về nội dung hoặc mục đích sử dụng của object, giúp bạn dễ dàng quản lý và tìm kiếm.
  * **Khả năng kiểm soát quyền truy cập:** Quyền truy cập đối với từng object có thể được kiểm soát thông qua ACL (Access Control List) hoặc bucket policy, cho phép bạn xác định ai có quyền xem hoặc thao tác với object.
  * **Versioning:** FPT Object Storage hỗ trợ lưu nhiều phiên bản cho các object, cho phép bạn giữ lại các phiên bản trước đó của một file và phục hồi chúng khi cần thiết.
  * **Object Storage Classes:** Bạn có thể gán các lớp lưu trữ khác nhau cho mỗi object, từ Standard cho dữ liệu truy cập thường xuyên đến Glacier cho dữ liệu cần lưu trữ lâu dài với chi phí thấp.

## Upload Object mới vào Bucket
**FPT Unify Portal** hỗ trợ upload tối đa 100GB cho mỗi lần upload. Nếu cần upload file lớn hơn, hãy sử dụng các phương thức khác như S3 Client Tool, S3 SDK/CLI.
  * Nếu file trùng tên với file đã tồn tại, bạn sẽ nhận cảnh báo ghi đè. Nếu **Versioning** chưa bật, file sẽ ghi đè lên file cũ. Nếu **Versioning** đã bật, hệ thống sẽ tạo một phiên bản mới.

**Bước 1:** Trên **Object Storage Management** , di chuyển đến vị trí cần thêm file và chọn **Upload object**.
**Bước 2:** Chọn file từ thiết bị và chọn **Upload**.
## Download Object
Để download một object, di chuyển đến vị trí của file cần tải xuống trên **Object Storage Management** và bấm vào tên của file. Hệ thống sẽ tự động tải file về thiết bị.
## Generate Presigned URL
Presigned URL là một liên kết truy cập tạm thời, giúp người dùng chia sẻ quyền truy cập vào một object cụ thể mà không cần thay đổi các thiết lập quyền truy cập của bucket. Liên kết này có thời hạn sử dụng cụ thể, sau thời gian này, nó sẽ tự động hết hạn và không thể truy cập được nữa. Điều này rất hữu ích khi bạn muốn chia sẻ tài nguyên với người khác mà không muốn điều chỉnh các quyền truy cập cho toàn bộ bucket hoặc object.
**Bước 1:** Trên bảng quản trị **Object Storage Management** , di chuyển đến vị trí của file cần tạo Presigned URL.
**Bước 2:** Ở phần **Action** của object, chọn **Generate Presigned URL**.
**Bước 3:** Chọn thời gian hết hạn cho URL (có thể là vài phút đến vài ngày). Sau đó, nhấn **Generate**.
**Bước 4:** URL sẽ được hiển thị. Bạn có thể sao chép và chia sẻ URL này. Sau khi thời gian hết hạn kết thúc, URL sẽ không còn hiệu lực.
### Copy Object
Copy object cho phép bạn sao chép dữ liệu trong FPT Object Storage mà không làm thay đổi hoặc mất dữ liệu gốc.
**Bước 1:** Trên bảng quản trị **Object Storage Management** , di chuyển đến vị trí của file cần copy.
**Bước 2:** Ở phần **Action** của object, chọn **Copy**.
**Bước 3:** Chọn đích đến cho file được copy, bao gồm **Bucket** và **Folder** mới nếu cần. Sau đó, chọn **Confirm** để hoàn thành thao tác.
### Move Object
Là quá trình di chuyển một object từ một vị trí này sang vị trí khác trong S3. Quá trình này bao gồm việc sao chép object tới vị trí mới và sau đó xóa object khỏi vị trí ban đầu. Sau khi di chuyển hoàn tất, object sẽ không còn tồn tại ở vị trí cũ nữa. Điều này khác với quá trình sao chép (copy), trong đó object gốc vẫn được giữ nguyên ở vị trí ban đầu.
**Bước 1:** Trên bảng quản trị **Object Storage Management** , di chuyển đến vị trí của file cần di chuyển.
**Bước 2:** Ở phần **Action** của object, chọn **Move**.
**Bước 3:** Chọn đích đến cho file di chuyển, bao gồm **Bucket** và **Folder** mới nếu cần. Sau đó, chọn **Confirm** để hoàn thành thao tác.
### Copy URL của Object
Bạn có thể lấy URL của từng object trong trường hợp cần share file hoặc gắn link vào website khác. Tuy nhiên để GET được object này thì object hoặc bucket chứa nó phải ở chế độ Public.
Trên **Object Storage Management** , di chuyển đến vị trí file, ở phần **Action** chọn **Copy URL**.
### Delete Object
Nếu **Versioning** không được bật, khi bạn xóa một object thì object đó sẽ bị xóa vĩnh viễn và không thể phục hồi. Tuy nhiên, nếu **Versioning** được bật, thay vì xóa hoàn toàn, hệ thống sẽ tạo ra một "delete marker". Điều này không thực sự xóa object mà chỉ đánh dấu nó là đã bị xóa. Các phiên bản trước đó của object vẫn tồn tại và có thể được phục hồi nếu cần.
Thời gian xử lý việc xóa object sẽ phụ thuộc vào dung lượng của object. Khi xóa object qua portal, phương thức này chỉ phù hợp cho các file có dung lượng dưới 50GB. Nếu dung lượng file vượt quá giới hạn này, có thể xảy ra lỗi do vượt quá thời gian timeout của trình duyệt.
**Bước 1:** Trên **Object Storage Management** , di chuyển đến vị trí file cần xóa, ở phần **Action** chọn **Delete**.
**Bước 2:** Xác nhận thao tác xóa trong hộp thoại cảnh báo.