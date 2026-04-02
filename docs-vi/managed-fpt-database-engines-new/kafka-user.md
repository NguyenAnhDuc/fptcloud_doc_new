---
id: "kafka-user"
title: "Apache Kafka - Quản lý Kafka ACL"
description: "Kafka user cho phép các ứng dụng và dịch vụ xác thực vào Kafka cluster thông qua các cơ chế SASL. Kafka user được quản l"
sidebar_label: "Apache Kafka - Quản lý Kafka ACL"
sidebar_position: 34
---

# Kafka User

Kafka user cho phép các ứng dụng và dịch vụ xác thực vào Kafka cluster thông qua các cơ chế SASL. Kafka user được quản lý ở cấp độ cụm trong FPT Database Engine và thường được sử dụng bởi producer, consumer và Kafka Connect.
Tính năng **Quản lý Kafka user** là tính năng **chỉ áp dụng cho engine Kafka** , cho phép quản trị viên xem, tạo và cập nhật Kafka user. Tính năng này thường được sử dụng để:
  * Kiểm soát quyền truy cập của ứng dụng vào Kafka cluster.
  * Quản lý thông tin xác thực một cách an toàn trên nền tảng cloud.
  * Theo dõi và kiểm toán thao tác người dùng thông qua log hệ thống.

### 1. Tạo Kafka user mới
Để tạo một Kafka user mới, thực hiện các bước sau:
#### Bước 1: Truy cập trang Quản lý Kafka user
Đăng nhập FPT Cloud Console. Chọn "**Database Platform** " > "**Data Streaming** " > nhấp vào cluster ID của cụm Kafka để mở trang chi tiết. Chọn tab "**Configure Params** " > chọn sub-tab "**Kafka ACL** ". Trang quản lý Kafka user hiển thị như sau:
[![](/img/migrated/view-kafka-acl-scaled-514e908e.png)](/img/migrated/view-kafka-acl-scaled-514e908e.png)
Mục "**User List** " hiển thị toàn bộ Kafka user đã được cấu hình trên cluster. Thông tin hiển thị gồm:
  * **Username** : Tên principal Kafka.
  * **Password** : Mật khẩu xác thực. Được ẩn vì lý do bảo mật.
  * **SASL mechanism** : Cơ chế xác thực (ví dụ: PLAIN).

#### Bước 2: Tạo Kafka user mới
Trên trang Kafka user management, trong mục "**User List** ", nhấn biểu tượng **Add user** (hình dấu cộng). Hộp thoại **Create new user** sẽ được hiển thị.
[![](/img/migrated/create-kafka-user-scaled-15c4e64f.png)](/img/migrated/create-kafka-user-scaled-15c4e64f.png)
Nhập thông tin cấu hình:
  * **Username** : Tên người dùng, được sử dụng làm Kafka principal cho mục đích xác thực. Tên có độ dài tối đa 50 ký tự và không chứa ký tự đặc biệt bị cấm (/ \ : * ? " < > | [ ])
  * **Password** : Tạo mật khẩu mạnh thoả mãn các yêu cầu sau: 
    * Ít nhất một ký tự chữ cái viết thường.
    * Ít nhất một ký tự chữ cái viết hoa.
    * Tối thiểu 12 ký tự, tối đa 20 ký tự.
    * Ít nhất một ký tự đặc biệt, ngoại trừ các ký tự sau: $ \ \ / [ ] ' " : ; + - ^ < > ( ) |`
    * Ít nhất một số.
    * Không chứa khoảng trắng.
  * **SASL mechanism** : Chọn cơ chế xác thực được hỗ trợ. Các tùy chọn bao gồm: " _PLAIN_ ", " _SCRAM-SHA256_ ", " _SCRAM-SHA512_ ". **Cảnh báo** : Việc tạo hoặc cập nhật user sử dụng **SASL/PLAIN** sẽ **kích hoạt restart Kafka cluster**. Điều này có thể gây **gián đoạn dịch vụ tạm thời** đối với producer và consumer.

Sau khi hoàn tất, nhấn " _Create_ " để tạo Kafka user. Kafka user được tạo thành công sẽ hiển thị trong User list và có thể được sử dụng cho:
  * Cấu hình Kafka client.
  * Kafka Connect.
  * Chính sách ACL (nếu được hỗ trợ).

**Best Practices** :
  * Tạo Kafka user theo từng ứng dụng hoặc dịch vụ.
  * Thực hiện xoay vòng mật khẩu định kỳ.
  * Tránh tạo user trong giờ cao điểm.
  * Tách riêng user cho producer và consumer nếu có thể.

Khi cần, bạn có thể thực hiện các thao tác sau với Kafka user đã tạo:
  * **Cập nhật mật khẩu** : Chức năng này cho phép thay đổi password của Kafka user. Để thực hiện, trên User List, chọn "**Update Password** " tương ứng với user cần thay đổi. Nhập password mới và nhấn "**Update** " để lưu lại.
  * **Xóa user** : Chức năng này cho phép xoá bỏ Kafka user không còn sử dụng, giúp hệ thống quản lý gọn gàng hơn. Trên trang User List, chọn " _Delete_ " tương ứng với user cần xóa. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất.
  * **Cấp quyền ACL** : Cho phép cấp quyền ALC cho Kafka user. Tham khảo hướng dẫn chi tiết tại mục "**2. Phân quyền cho Kafka user** "

### 2. Phân quyền cho Kafka user
Chức năng Kafka ACL cho phép quản trị viên phân quyền chi tiết cho Kafka user khi truy cập topic và consumer group trong Kafka cluster được quản lý bởi DBaaS.
ACL giúp đảm bảo:
  * Kiểm soát truy cập an toàn.
  * Áp dụng nguyên tắc least privilege.
  * Cách ly giữa các ứng dụng và workload.

ACL được áp dụng ở cấp độ cluster và có hiệu lực ngay sau khi lưu.
**Lưu ý** : Nếu Kafka user không được phân bổ ACL, user sẽ không có quyền truy cập vào các tài nguyên.
Để phân quyền cho một Kafka user, thực hiện như sau:
Trên trang Kafka user management, trong mục "**User List** ", chọn hành động "**Grant ACL** " tương ứng với user cần phân quyền. Hộp thoại Grant ACL sẽ được hiển thị.
[![](/img/migrated/grant-acl-scaled-ee68daae.png)](/img/migrated/grant-acl-scaled-ee68daae.png)
Nhập thông tin cấu hình:
  * **Username** : Hiển thị Kafka user được chọn. Trường này không thể chỉnh sửa.
  * **Resource Type** : Chọn loại tài nguyên Kafka cần phân quyền: 
    * Topic – Phân quyền truy cập topic Kafka.
    * Consumer group – Phân quyền cho consumer group.
  * **Topic prefix / Group prefix** : Nhập tiền tố (prefix) của tài nguyên. Áp dụng quyền cho tất cả resource khớp prefix. Nhập "All" để phân quyền cho tất cả topic hoặc tất cả consumer group.
  * **Operations** : Chọn một hoặc nhiều thao tác Kafka được phép, phụ thuộc vào loại tài nguyên: 
    * Nếu loại tài nguyên là "**Topic** ":
      * **All** : cho phép thực hiện tất cả các thao tác.
      * **Alter** : cho phép sửa các tham số DANGER của topic trong Kafka UI.
      * **AlterConfigs** : cho phép sửa các tham số không DANGER của topic trong Kafka UI.
      * **Read** : cho phép đọc nội dung của topic.
      * **Write** : cho phép ghi dữ liệu vào topic.
    * Nếu loại tài nguyên là "**Consumer group** ":
      * **Delete** : cho phép xoá group.
      * **Describe** : cho phép xem thông tin chi tiết của group.
      * **Read** : cho phép đọc nội dung của group.

Sau khi hoàn tất, nhấn "**Save** " để áp dụng ACL cho Kafka user. ACL sẽ có hiệu lực ngay lập tức mà không cần khởi động lại Kafka cluster. Một Kafka user có thể được gán nhiều ACL.
#### Best Practices:
  * Ưu tiên phân quyền bằng ACL theo prefix. ACL theo prefix giúp quản lý quyền hiệu quả khi hệ thống mở rộng.
  * Tách ACL cho producer và consumer.
  * Tránh cấp quyền toàn bộ nếu không cần thiết.
  * Định kỳ rà soát danh sách ACL.
