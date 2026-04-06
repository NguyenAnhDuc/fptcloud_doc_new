---
id: "chinh-sua-listener"
title: "Cấu hình L7 policy cho Listener"
description: "**L7 Policies** là các thành phần quan trọng giúp kiểm soát và định tuyến lưu lượng truy cập đến các máy chủ backend. **"
sidebar_label: "Cấu hình L7 policy cho Listener"
sidebar_position: 14
---

# Cấu hình L7 policy cho Listener

**L7 Policies** là các thành phần quan trọng giúp kiểm soát và định tuyến lưu lượng truy cập đến các máy chủ backend. **L7 Policies** tập hợp các **L7 Rule** kết hợp với nhau như một chính sách định tuyến lớp 7 cho các yêu cầu HTTP/HTTPS theo quy tắc chỉ định.**L7 Policies** là bộ quy tắc bao gồm hai thành phần chính:
  * **Điều kiện** : Điều kiện kiểm tra các request đến.
  * **Hành động** : Một khi các request đến khớp với các Điều kiện trên, thì Hành động tương ứng sẽ được áp dụng trong việc điều phối yêu cầu. 

**1.Tạo L7 Policy**
**Bước 1:** Tại màn hình hiển thị danh sách **Listener** , chọn **Listener** cần cấu hình.
**Bước 2:** Tại đây chọn tab **L7 Policy,** sau đó chọn **Add Policy.**
Người dùng nhập các thông tin mới cho **L7 Policy mới.**
  * **Policy name** : Nhập tên cho Policy
  * **Policy action** : Reject, Redirect to URL, Redirect to pool.

**+Reject:** Khi request chưa thỏa mãn điều kiện, từ chối truy cập đến máy chủ
**+Redirect to URL** : Nhập URL mà bạn muốn chuyển request đến khi thỏa mãn điều kiện. Các yêu cầu thỏa mãn với Policy sẽ chuyển đến URL hoặc Prefix URL đã chỉ định với **HTTP response code** này. Các giá trị hợp lệ là: 301, 302, 303, 307, hoặc 308.
**+Redirect to pool:** Khi thỏa mãn điều kiện, request đến sẽ được đẩy vào pool được chọn, do đó cần chọn một Pool từ danh sách.
  * **Position** : Mức độ ưu tiên của policy, vị trí càng nhỏ thì mức độ ưu tiên càng lớn. 

Nhấn kí hiệu dấu tick để thực hiện tạo **L7 Rule** và kí hiệu xoá để xoá **L7 Rule.**
**2. Update L7 Policy**
Tại màn hình hiển thị danh sách **L7 Policy** , nhấn icon bút để sửa **L7 Policy.**
Người dùng sẽ được cập nhật các thông tin sau:
  * **Policy name**
  * **Policy action** : Reject, Redirect to URL, Redirect to pool

**+ Redirect to URL:** Nhập URL bạn muốn chuyển request đến khi thỏa điều kiện. Các yêu cầu thỏa mãn với Policy sẽ chuyển đến URL hoặc Prefix URL đã chỉ định với HTTP response code này. Các giá trị hợp lệ là: 301, 302, 303, 307, hoặc 308.
**+Redirect to pool:** Khi thỏa mãn điều kiện, request đến sẽ được đẩy vào pool được chọn, do đó cần chọn một Pool từ danh sách.
**+Redirected HTTP code** : đối với Policy Action là Redirect to URL
  * **Position**

Nhấn icon dấu tick để lưu cập nhật của **L7 Policy.**
Sau khi update **L7 Policy,** người dùng thêm **L7 Rule** theo hướng dẫn sau:
**Bước 1:** Nhấn vào Policy cần thêm rule
**Bước 2:** Tại đây, người dùng nhấn **Add L7 rule** để thêm rule cho policy.
Người dùng tiến hành thêm các thông tin sau:
  * **Type** :

**+Host name:** So sánh value và HTTP/1.1 hostname trong yêu cầu.
**+Path:** So sánh value và một phần của HTTP URI.
**+File** : So sánh value và một phần cuối cùng của URI (VD: ".txt", ".jpg").
**+Header:** Tìm kiếm header được định nghĩa trong trường key và so sánh giá trị đó với giá trị truyền vào value.
**+Cookie:** Tìm kiếm cookie được định nghĩa trong trường key và so sánh giá trị đó với giá trị truyền vào value.
  * **Compare type:**

**+Regex:** Chuỗi khớp với regex.
**+Equal to:** Xác minh xem trường được trích xuất có giống với chuỗi được cung cấp hay không.
**+Starts with:** Xác minh xem trường được trích xuất có bắt đầu bằng chuỗi được cung cấp hay không.
**+Ends with:** Xác minh xem trường được trích xuất có kết thúc bằng chuỗi được cung cấp hay không.
**+Contains** : Xác minh xem trường được trích xuất có chứa chuỗi được cung cấp hay không.
  * **Key** : Đối với type là **Header** hoặc **Cookie** , cần nhập trường key để xác định trường nào trong Cookie hoặc Header được dùng để so sánh.
  * **Value** : giá trị để so sánh.
  * **Invert** : Yes/No (ví dụ, nếu bạn đặt giá trị thành 1, giá trị của so sánh quy tắc L7 này được đặt thành true bất cứ khi nào quy tắc đã chỉ định không khớp).

Nhấn kí hiệu dấu tick để thực hiện tạo **L7 Rule** và kí hiệu xoá để xoá **L7 Rule.**
Để chỉnh sửa **L7 Rule,** tại rule đã tạo, người dùng nhấn kí hiệu bút để chỉnh sửa rule.
