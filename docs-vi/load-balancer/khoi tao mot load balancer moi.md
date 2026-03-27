---
id: "khoi tao mot load balancer moi"
title: "Khởi tạo một Load Balancer mới"
description: "**Bước 1** : Truy cập trang **Load Balancer** **Management** , chọn **Creat**."
sidebar_label: "Khởi tạo một Load Balancer mới"
sidebar_position: 28
---

# Khoi Tao Mot Load Balancer Moi

**Bước 1** : Truy cập trang **Load Balancer** **Management** , chọn **Creat**.
[![](/img/migrated/Userguide-FPT-Load-Balancer-2022-1-1024x-f04d52f1.png)](/img/migrated/Userguide-FPT-Load-Balancer-2022-1-1024x-f04d52f1.png)
Một hộp thoại mới sẽ hiện lên và hướng dẫn người dùng các bước tiếp theo.
**Bước 2** : Cấu hình Load Balancer theo nhu cầu với các lựa chọn sau:  
| **Tên trường cần nhập**  | Mô tả  |  
| --- | --- |  
| **Name**  | Nhập tên của Load Balancer  |  
| **Size**  | Bạn có thể chọn một size phù hợp nhất với nhu cầu. Hiện tại FPT Cloud đang cung cấp 4 size khác nhau từ Basic đến Premium.  |  
| **Public IP**  | Chọn Public IP trong VPC để gán cho Load Balancer. Bạn có thể bỏ trống nếu chỉ muốn chạy nội bộ và không cần truy cập từ Internet (**Internal Load Balancer**). Để lấy thêm Public IP bạn hãy làm theo hướng dẫn ở phần _Quản lý Floating IP_  |  
| **Instances**  | Chọn các máy ảo endpoint để cân bằng tải. Hiện tại bạn chỉ có thể chọn các máy ảo cùng VPC.  |  
| **Rules**  | Xác định cách lưu lượng truy cập được định tuyến từ Load Balancer đến các máy ảo. Hiện tại hệ thống chỉ hỗ trợ tạo 1 rule cho mỗi Load Balancer.  |  
| **Certificate**  | Nếu bạn chọn phương thức là **HTTPS** , bắt buộc phải cấu hình Certificate cho Load Balancer. Bạn có thể chọn certificate có sẵn hoặc thêm certificate mới.   |  
| **Settings**  |  Các cài đặt bổ sung cho**Load Balancer** , FPT Cloud đã đề xuất một số cài đặt phổ biến làm mặc định. Nếu muốn thay đổi hãy chọn **Edit Setting**. **- Algorithm:** Thuật toán sử dụng để cân bằng tải. FPT Load Balancer đang cung cấp 2 thuật toán chính là **Round Robin** và **Least Connections.** **- Sticky Session:** Bật hoặc tắt tính **Sticky Session.** **- Health check:** Định kỳ **LoadBalancer** sẽ kiểm tra tình trạng hoạt động của các máy chủ, nếu máy chủ không phản hồi sẽ lập tức chuyển truy vấn sang các máy khác. FPT Load Balancer đang hỗ trợ kiểm tra qua **HTTP** , **TCP** và **PING.**  |  
**[![](/img/migrated/Userguide-FPT-Load-Balancer-2022-2-7408982a.png)](/img/migrated/Userguide-FPT-Load-Balancer-2022-2-7408982a.png)**
**Bước 3** : Nhấn **Create** để thực hiện khởi tạo **Load Balancer**. Hệ thống sẽ kiểm tra tài nguyên, tiến hành quá trình khởi tạo và thông báo tình trạng xử lý.
Sau khi khởi tạo thành công, người dùng có thể thấy **Load Balancer** mới tạo và trạng thái hoạt động trên bảng quản trị.
**[![](/img/migrated/Userguide-FPT-Load-Balancer-2022-3-1024x-5bd1ea96.png)](/img/migrated/Userguide-FPT-Load-Balancer-2022-3-1024x-5bd1ea96.png)**