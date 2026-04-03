---
id: "user-group-management"
title: "Quản lý User Group"
description: "Chức năng **Quản lý User Group** cho phép tập hợp nhiều người dùng vào một nhóm và gán cho nhóm đó role phù hợp. Tính nă"
sidebar_label: "Quản lý User Group"
sidebar_position: 14
pagination_next: null
---

# User Group Management

Chức năng **Quản lý User Group** cho phép tập hợp nhiều người dùng vào một nhóm và gán cho nhóm đó role phù hợp. Tính năng này là một phần của IAM trên FPT Cloud Portal, giúp sắp xếp người dùng theo vai trò, giảm công việc quản trị và đảm bảo các quyền truy cập được ứng dụng nhất quán trong môi trường DBaaS.
Để tạo một một nhóm người dùng mới, thực hiện các bước sau:

### Bước 1: Truy cập trang Quản lý user group
Thực hiện đăng nhập vào FPT Cloud Portal. Sau khi đăng nhập thành công, từ menu chính, chọn **IAM** > **User groups**. Giao diện **User Group Management** sẽ hiển thị danh sách nhóm người dùng hiện có, cùng các tùy chọn để tạo mới, chỉnh sửa hoặc xoá một nhóm người dùng.

### Bước 2: Tạo nhóm người dùng mới
Trong trang **User Group Management** , nhấn **Create user group**. Màn hình tạo nhóm người dùng mới hiển thị như sau:
[![](/img/migrated/create-usser-group-scaled-33777350.png)](/img/migrated/create-usser-group-scaled-33777350.png)
Nhập các thông tin sau:
  * **Name** : Tên dùng để định danh nhóm người dùng trong hệ thống IAM, dài tối đa 100 ký tự. Tên nên thể hiện rõ mục đích hoặc phạm vi trách nhiệm của nhóm.
  * **Description** : Mô tả thêm về nhóm người dùng, ví dụ phạm vi sử dụng hoặc dịch vụ được quản lý. Trường này giúp việc quản trị và audit trở nên rõ ràng hơn.
  * **Roles** : Chọn một hoặc nhiều role để gán cho nhóm người dùng. Các role này xác định tập quyền được áp dụng cho toàn bộ người dùng trong nhóm.
  * **Users** : Chọn người dùng để thêm vào nhóm. Người dùng sẽ kế thừa toàn bộ quyền của các role được gán cho nhóm. Mọi thay đổi đối với role của nhóm sẽ được áp dụng cho toàn bộ thành viên trong nhóm.

Sau khi nhập đầy đủ thông tin, chọn **Create user group** để hoàn tất quá trình tạo nhóm người dùng.
Sau khi tạo thành công, nhóm người dùng mới sẽ xuất hiện trong danh sách quản lý với trạng thái **Active**. Các user thuộc group này sẽ có thể truy cập các chức năng và nghiệp vụ tương ứng với quyền được phân theo role.
Khi cần thiết, bạn có thể thực hiện các thao tác sau với nhóm người dùng đã tạo:
  * **Chỉnh sửa nhóm người dùng** : Cho phép cập nhật thông tin nhóm hoặc thay đổi các Role đã gán cho nhóm. Để thực hiện, trên trang **User Group Management** , chọn **Edit user group** tương ứng với nhóm người dùng cần chỉnh sửa. Thực hiện thay đổi và nhấn **Edit user group** để lưu lại.
  * **Xóa nhóm người dùng** : Khi một nhóm không còn cần thiết (ví dụ: thay đổi cấu trúc tổ chức), bạn có thể xóa nhóm để tránh rối quyền và đảm bảo chính sách bảo mật nhất quán. Trên trang **User Group Management** , chọn **Delete** tương ứng với nhóm người dùng cần xóa. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất. **Cảnh báo** : Việc **xóa nhóm người** dùng sẽ ngay lập tức **loại bỏ toàn bộ quyền truy cập theo role đã được gán thông qua nhóm đó**. Các người dùng thuộc nhóm sẽ mất quyền kế thừa và có thể không còn khả năng truy cập hoặc quản lý tài nguyên DBaaS cũng như các dịch vụ cloud khác. Trước khi xóa nhóm, hãy đảm bảo rằng:
    * Nhóm không còn được sử dụng cho các tác vụ vận hành hoặc quản trị cơ sở dữ liệu.
    * Các người dùng trong nhóm đã được gán sang user group khác hoặc được cấp role thay thế nếu vẫn cần quyền truy cập.
    * Không có quy trình vận hành, automation hoặc workflow quan trọng nào của DBaaS phụ thuộc vào quyền của nhóm này.
