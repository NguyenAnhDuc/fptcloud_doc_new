---
id: "db-proxy"
title: "Quyền cần thiết:"
description: "**Database Proxy** (DB Proxy) là lớp trung gian giữa ứng dụng và máy chủ cơ sở dữ liệu, giúp quản lý và điều phối các kế"
sidebar_label: "Quyền cần thiết:"
sidebar_position: 35
---

# Db Proxy

**Database Proxy** (DB Proxy) là lớp trung gian giữa ứng dụng và máy chủ cơ sở dữ liệu, giúp quản lý và điều phối các kết nối, thực hiện cân bằng tải và chuyển hướng kết nối đến database node phù hợp mà không cần thay đổi mã nguồn ứng dụng hoặc cấu hình database, từ đó nâng cao tính sẵn sàng cao cho hệ thống.
Hiện tại, FPT Database Engine **hỗ trợ DB Proxy cho** các loại engine: **MySQL, PostgreSQL, MariaDB** và chỉ **khả dụng khi cơ sở dữ liệu được triển khai theo mô hình High Availability** (HA).
Trên FPT Cloud Portal, chức năng Quản lý DB Proxy cho phép người dùng:
  * Tạo và quản lý DB Proxy.
  * Theo dõi trạng thái hoạt động của DB Proxy.
  * Thực hiện các thao tác vận hành như Start, Stop, Restart, Resize, Delete
  * Xem chi tiết cấu hình và các node của DB Proxy.

### Quyền cần thiết:  
| Tên quyền  | Loại thao tác  | Mô tả  |  
| --- | --- | --- |  
| manageDatabase:ListProxy  | View  | Quyền xem danh sách DB Proxy của cơ sở dữ liệu.  |  
| manageDatabase:CreateProxy  | Create  | Quyền tạo DB Proxy cho cơ sở dữ liệu.  |  
| manageDatabase:DeleteProxy  | Delete  | Quyền xoá DB Proxy cho cơ sở dữ liệu.  |  
### 1. Truy cập trang quản lý DB Proxy
Thực hiện đăng nhập vào FPT Cloud Portal. Sau khi đăng nhập thành công, từ menu chính, chọn “**Database Platform** ” > “**All Databases** ”. Nhấn vào ID của database cluster cần quản lý > chuyển sang tab DB Proxy để truy cập trang **Quản lý DB Proxy** :
[![](/img/migrated/db-proxy-list-scaled-ef82702b.png)](/img/migrated/db-proxy-list-scaled-ef82702b.png)
**Lưu ý** : Tab **DB Proxy** chỉ hiển thị khi database được tạo với tùy chọn High Availability và database engine được hỗ trợ.
### 2. Khởi tạo DB Proxy
Trong trang **Quản lý DB Proxy** , nhấn “**Create DB Proxy** ”. Hộp thoại tạo DB Proxy mới hiển thị như sau:
[![](/img/migrated/create-db-proxy-scaled-edd86c55.png)](/img/migrated/create-db-proxy-scaled-edd86c55.png)
Nhập các thông tin cần thiết:
  * **DB proxy name** : Tên định danh cho proxy, độ dài từ 8–25 ký tự, chỉ bao gồm chữ cái, số và dấu gạch ngang (-).
  * **DB proxy type** : Chọn loại proxy. Hiện tại FPT Database Engine mới chỉ hỗ trợ một loại là HAProxy.
  * **Storage Policy** : Chọn Storage Policy xác định hiệu năng lưu trữ (IOPS) cho proxy.
  * **High Availability** : Bật để triển khai DB proxy theo mô hình HA.
  * **Flavor** : Chọn cấu hình tài nguyên (vCPU, RAM) cho DB proxy.

Sau khi nhập đầy đủ thông tin nhấn **Create DB Proxy** để xác nhận khởi tạo. Hệ thống sẽ kiểm tra tài nguyên, hiển thị thông báo khởi tạo và bắt đầu quá trình triển khai proxy mới dựa trên cấu hình đã nhập. Trên màn hình **Quản lý DB Proxy** sẽ hiển thị proxy vừa tạo ở trạng thái “**Processing** ” ở đầu danh sách.
Quá trình khởi tạo thường kéo dài 5–7 phút. Khi hoàn tất, proxy sẽ chuyển sang trạng thái “**Running** ” và sẵn sàng để sử dụng.
**Lưu ý** : Nếu quá trình khởi tạo thất bại, vui lòng xóa proxy bị lỗi và thực hiện khởi tạo lại.
### 3. Xem thông tin kết nối
Để xem thông tin kết nối tới proxy, thực hiện truy cập trang **Quản lý DB Proxy** , sau đó chọn ID của proxy để mở hộp thoại **DB Proxy Detail** :
[![](/img/migrated/view-db-proxy-scaled-1adf11c4.png)](/img/migrated/view-db-proxy-scaled-1adf11c4.png)
Trạng thái **Running** cho biết DB Proxy đang hoạt động và sẵn sàng tiếp nhận kết nối. Sử dụng thông tin trong **End Point** để thiết lập kết nối đến proxy.
### 4. Vận hành DB Proxy
Bạn có thể thực hiện các thao tác start, stop, restart, resize và delete phù hợp với trạng thái vòng đời của proxy.
**Thao tác vận hành:**
  * **Start** : Khởi động DB Proxy khi đang ở trạng thái Stop. Khi thao tác được thực hiện, trạng thái của proxy chuyển sang “Starting” và sau đó là “Running” khi sẵn sàng phục vụ.
  * **Stop** : Dừng hoạt động DB Proxy đang chạy. Khi dừng, proxy sẽ tạm ngưng xử lý workload. Trạng thái chuyển sang “Stopping” và sau đó là “Stopped”. Ở trạng thái này, các kết nối qua proxy sẽ bị gián đoạn.
  * **Restart** : khởi động lại một proxy đang chạy. Thao tác này sẽ dừng và khởi động lại proxy, thường được sử dụng để khắc phục sự cố tạm thời. Trạng thái hiển thị “Restarting” và quay lại “Running” khi hoàn tất.
  * **Resize** : Thay đổi cấu hình tài nguyên (Flavor) của DB Proxy. Khi resize, trạng thái chuyển sang “Resizing” và sau đó là “Running”.
  * **Delete** : xoá một DB Proxy. Hành động này không thể hoàn tác. Sau khi xóa thành công, proxy sẽ bị loại bỏ khỏi danh sách và các tài nguyên liên quan được giải phóng.

**Trạng thái và khả năng thao tác:**  
| Trạng thái  | Ý nghĩa  | Các thao tác được thực hiện  |  
| --- | --- | --- |  
| Processing  | Proxy đang được khởi tạo.  | Delete  |  
| Running  | Proxy đang hoạt động bình thường.  | Stop, Restart, Resize, Delete  |  
| Stopped  | Proxy đã dừng hoạt động.  | Start, Delete  |  
| Resizing  | Proxy đang được điều chỉnh tài nguyên.  | Delete  |  
| Failed  | Proxy gặp lỗi không xác định. Nếu không còn sử dụng, hãy xóa proxy để dọn dẹp tài nguyên, hoặc liên hệ FPT Support để được hỗ trợ xử lý.  | Delete  |  
**Thực hiện thao tác vận hành:**
Để thực hiện các thao tác vận hành, mở trang **Quản lý DB Proxy** , sau đó chọn biểu tượng “⋯” (More actions) trong cột “**Action** ” của proxy cần thao tác. Danh sách các hành động khả dụng sẽ được hiển thị:
[![](/img/migrated/db-proxy-action-scaled-af6165d7.png)](/img/migrated/db-proxy-action-scaled-af6165d7.png)
Khi chọn một hành động, hệ thống sẽ hiển thị hộp thoại xác nhận. Bạn cần xác nhận thủ công để tiếp tục, nhằm tránh thực hiện các thao tác không mong muốn, đặc biệt với các hành động không thể hoàn tác.
Sau khi xác nhận, hệ thống sẽ thực hiện hành động trong khoảng 5–7 phút. Trong thời gian này, các thao tác khác đối với proxy sẽ tạm thời bị vô hiệu hóa cho đến khi quá trình hoàn tất.
**Best Practices:**
Thực hiện **Restart** hoặc **Resize** DB Proxy trong khung thời gian thấp điểm để giảm ảnh hưởng đến ứng dụng.