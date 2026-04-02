---
id: "role-management"
title: "Quản lý Role"
description: "Role là một thành phần cốt lõi của mô-đun IAM trên FPT Cloud Portal. Chức năng **Quản lý Role** cho phép quản trị hệ thố"
sidebar_label: "Quản lý Role"
sidebar_position: 13
---

# Role Management

Role là một thành phần cốt lõi của mô-đun IAM trên FPT Cloud Portal. Chức năng **Quản lý Role** cho phép quản trị hệ thống định nghĩa và gán các vai trò với tập quyền truy cập (permissions) cụ thể cho người dùng khi sử dụng dịch vụ FPT Database Engine.
Việc sử dụng role giúp tăng cường bảo mật thông qua kiểm soát truy cập chi tiết, áp dụng nguyên tắc phân quyền tối thiểu, đồng thời hỗ trợ tách biệt quyền hạn theo từng nhu cầu và mô hình vận hành.
Các bước dưới đây cung cấp hướng dẫn chi tiết để tạo mới một Role và gán các quyền truy cập (permissions) tương ứng cho role đó.
### Bước 1: Truy cập trang Quản lý role
Thực hiện đăng nhập vào FPT Cloud Portal. Sau khi đăng nhập thành công, từ menu chính, chọn **IAM** > **Roles**. Giao diện **Role Management** sẽ hiển thị danh sách role hiện có, cùng các tùy chọn để tạo mới, chỉnh sửa hoặc xoá một role.
### Bước 2: Tạo role mới
Trong trang **Role Management** , nhấn **Create role**. Màn hình tạo role mới hiển thị như sau:
[![](/img/migrated/create-role-46051a0f.png)](/img/migrated/create-role-46051a0f.png)
Nhập các thông tin cơ bản:
  * **Role name** : Tên dùng để định danh role trong hệ thống IAM, dài tối đa 100 ký tự, bao gồm các ký tự: chữ cái, chữ số, dấu gạch dưới (_), dấu gạch ngang (-), dấu cách và dấu chấm (.). Bắt buộc nhập.
  * **Description** : Mô tả mục đích sử dụng, phạm vi quyền hoặc nhóm người dùng được áp dụng. Trường này giúp việc quản trị và audit trở nên rõ ràng hơn.
  * **Permissions** : Danh sách các quyền được gán cho Role. 
    * **Permission 1** : Hiển thị một quyền đã được thêm vào role. Nhấn **See more** để xem chi tiết quyền và chỉnh sửa cấu hình quyền.
    * **+ Permission** : Nhấn nút này để thêm quyền mới vào role. Bạn có thể chọn quyền theo từng chức năng.
Thao tác cấu hình cho một Permission xem chi tiết tại bước 3.

### Bước 3: Cấu hình quyền cho role
Nhấn **See more** để hiển thị các thông tin cần nhập cho một permission:
[![](/img/migrated/see-more-permission-faeb2c18.png)](/img/migrated/see-more-permission-faeb2c18.png)
  * **Service Type** : Chọn loại dịch vụ tương ứng với các quyền hoặc nghiệp vụ bạn muốn gán. Dịch vụ FPT Database Engine sử dụng 2 service type chính là _"ManageDatabase"_ và _"FDE"_. 
    * **ManageDatabase** : Cung cấp quyền cho các hoạt động quản lý cơ sở dữ liệu tiêu chuẩn, bao gồm xem thông tin, khởi tạo, vận hành cơ sở dữ liệu và quản lý các dịch vụ add-on.
    * **FDE** : Cung cấp quyền cho các thao tác nhạy cảm liên quan đến cơ sở dữ liệu, chẳng hạn như xem hoặc quản lý thông tin mật khẩu của tài khoản quản trị cơ sở dữ liệu.
Sau khi bạn chọn một service type, hệ thống sẽ tự động hiển thị toàn bộ các hành động (actions) tương ứng trong mục **Action** , đồng thời cập nhật tên permission theo service type đã chọn.
  * **Action** : Xác định các hành động mà role được phép thực hiện. Nhấn **See more** để xem và chọn các hành động được gán cho role. Các hành động không được chọn sẽ không được cấp quyền và sẽ bị hệ thống chặn.
  * **Resource** : Xác định các tài nguyên mà role được phép truy cập. Nhấn **See more** để xem và chọn các tài nguyên được gán cho role. Các tài nguyên không được chọn sẽ không được cấp quyền và sẽ bị hệ thống chặn. Có 2 lựa chọn: 
    * **All** : Cho phép truy cập tất cả các tài nguyên. Khi chọn tùy chọn này, hệ thống mặc định role có quyền truy cập toàn bộ tài nguyên.
    * **Specific** : Phân quyền truy cập theo từng tài nguyên cụ thể được chọn trong danh sách. **Lưu ý** : Với tùy chọn này, khi phân quyền **chặn xem mật khẩu tài khoản quản trị** (Service Type là "FDE" và action "FDE:hide_admin_password"), bạn cần chọn các cơ sở dữ liệu cần chặn trong trường **Select resource**. Chỉ những cơ sở dữ liệu được chọn mới bị giới hạn xem mật khẩu, các cơ sở dữ liệu không được chọn sẽ cho phép xem mật khẩu.

[![](/img/migrated/resource-specified-hide-pass-ad74aea0.webp)](/img/migrated/resource-specified-hide-pass-ad74aea0.webp)
Sau khi nhập đầy đủ thông tin, chọn **Create role** để hoàn tất quá trình tạo role.
Sau khi tạo thành công, role mới sẽ xuất hiện trong danh sách quản lý với trạng thái **Active** và sẵn sàng để cấp quyền cho người dùng. Hướng dẫn cấp quyền vui lòng tham khảo tại mục [Quản lý User Group](../managed-fpt-database-engines-new/index.md).
Khi cần thiết, bạn có thể thực hiện các thao tác sau với role đã tạo:
  * **Chỉnh sửa role** : Chức năng này cho phép bạn sửa đổi tên, mô tả và quyền của role khi có thay đổi về yêu cầu truy cập hoặc chính sách bảo mật. Để sử dụng chức năng này, trên trang **Role Management** , chọn hành động **Edit role** tương ứng với role cần chỉnh sửa. Thực hiện thay đổi và nhấn **Save** để lưu lại.
  * **Xóa role** : Chức năng này cho phép xoá bỏ role không còn sử dụng, giúp hệ thống quản lý quyền truy cập gọn gàng và chính xác hơn. Trên trang **Role Management** , chọn **Delete** tương ứng với role cần xóa. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất. **Lưu ý** : Việc **xoá một role sẽ ảnh hưởng đến quyền truy cập của người dùng và nhóm người dùng đang được gán role đó**. Sau khi role bị xoá, các quyền liên quan sẽ bị thu hồi ngay lập tức, có thể gây gián đoạn trong việc quản lý và vận hành các tài nguyên cloud và DBaaS. Hãy đảm bảo rằng role này không còn được gán cho bất kỳ User Group hoặc User nào trước khi thực hiện xoá.
