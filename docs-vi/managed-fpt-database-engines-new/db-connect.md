---
id: "db-connect"
title: "Kết nối cơ sở dữ liệu"
description: "Mục này hướng dẫn cách kết nối tới cơ sở dữ liệu được triển khai trên FPT Database Engine thông qua các phương thức kết "
sidebar_label: "Kết nối cơ sở dữ liệu"
sidebar_position: 23
---

# Db Connect

Mục này hướng dẫn cách kết nối tới cơ sở dữ liệu được triển khai trên FPT Database Engine thông qua các phương thức kết nối được hỗ trợ và các khuyến nghị vận hành.
Sau khi tạo cụm cơ sở dữ liệu thành công trên FPT Database Engine, người dùng có thể kết nối bằng các công cụ quản trị, driver ứng dụng, hoặc client tiêu chuẩn. Khả năng kết nối phụ thuộc vào cấu hình mạng, chính sách bảo mật, và thông tin xác thực database.
Trước khi kết nối vào một cụm cơ sở dữ liệu, bạn cần cấu hình các thiết lập mạng và bảo mật để cho phép kết nối từ client. Điều này thường bao gồm việc tạo security group rules và gán floating IP (địa chỉ IP công cộng) nếu kết nối từ bên ngoài. Sau khi quyền truy cập mạng đã được cấp, bạn có thể sử dụng công cụ client để đăng nhập vào cơ sở dữ liệu.
## 1. Tạo Security Group
Security Group là tập hợp các quy tắc tường lửa (firewall rules) dùng để kiểm soát lưu lượng mạng đến (inbound) và đi (outbound) từ cụm cơ sở dữ liệu. Mỗi rule xác định port, protocol, và địa chỉ IP/CIDR được phép kết nối tới cơ sở dữ liệu.
Việc cấu hình Security Group đúng cách giúp bảo vệ kết nối cơ sở dữ liệu, giới hạn truy cập theo nguyên tắc least privilege và giảm thiểu nguy cơ truy cập trái phép từ bên ngoài.
⚠️
**Khuyến nghị bảo mật:**
  * Nên sử dụng **một Security Group riêng cho mỗi cụm cơ sở dữ liệu**
  * **Chỉ mở các port thực sự cần thiết** cho việc kết nối.
  * **Không** khuyến nghị **dùng chung Security Group cho nhiều cụm hoặc mở toàn bộ port.** Việc cấu hình quá rộng có thể **mở rộng phạm vi truy cập ngoài ý muốn, tăng nguy cơ truy cập trái phép và ảnh hưởng đến các cụm khác** khi thay đổi rule. Trong một số trường hợp, **có thể gây gián đoạn dịch vụ** hoặc **rò rỉ dữ liệu**

Để đảm bảo an toàn và dễ quản lý, hãy tạo và cấu hình Security Group cho cụm cơ sở dữ liệu theo các bước sau:
### Bước 1: Truy cập trang Quản lý security group
Thực hiện đăng nhập vào FPT Cloud Portal. Sau khi đăng nhập thành công, từ menu chính, chọn **Network > Security Groups**. Giao diện **Security Group Management** sẽ hiển thị danh sách security group hiện có, cùng các tùy chọn để tạo mới, chỉnh sửa hoặc xoá một security group.
### Bước 2: Tạo security group mới
Trong trang **Security Group Management** , nhấn **Create security group**. Màn hình tạo security group mới hiển thị như sau:
[![](/img/migrated/create-security-group-scaled-8aa5e8ed.png)](/img/migrated/create-security-group-scaled-8aa5e8ed.png)
Nhập thông tin cấu hình:
  * **Name** : Nhập tên Security Group để thuận tiện cho việc quản lý. Tên có độ dài tối đa 50 ký tự, chỉ bao gồm chữ cái, chữ số và dấu gạch ngang (-). Hệ thống có thể tự động tạo tên mặc định nếu không được chỉ định.
  * **Applied Instances (optional)** : Chọn database instance mà Security Group sẽ được áp dụng.
  * **Add tag (Optional):** Gán tags (key-value) cho Security Group nhằm phục vụ phân loại tài nguyên, quản lý chi phí, vận hành và auditing.
  * **Configure security rule (optional)** : Thiết lập các security rules để kiểm soát lưu lượng mạng vào và ra khỏi database cluster. 
    * **Inbound rules** : Kiểm soát các kết nối đi vào database cluster, thường dùng để cho phép ứng dụng hoặc người dùng truy cập cơ sở dữ liệu. Địa chỉ IP hoặc CIDR được phép truy cập được khai báo trong trường **Source**. 
    * **Outbound rules** : Kiểm soát các kết nối đi ra từ database cluster, thường không cần cấu hình nếu database chỉ giao tiếp trong mạng nội bộ. Địa chỉ IP hoặc CIDR đích được khai báo trong trường **Destination**. 

Sau khi nhập đầy đủ thông tin, chọn **Create security group** để hoàn tất quá trình tạo.
Sau khi tạo thành công, security group mới sẽ xuất hiện trong danh sách quản lý, hiển thị đầy đủ thông tin như tên, danh sách node được áp dụng và thời điểm tạo.
Khi cần thiết, bạn có thể thực hiện các thao tác sau với security group đã tạo:
  * **Thay đổi tên của security group** : Chức năng này cho phép sửa đổi tên của security group. Để thực hiện, trên trang **Security Group Management** , chọn **Rename** tương ứng với group cần chỉnh sửa. Thực hiện thay đổi và nhấn **Rename** để lưu lại.
  * **Xóa security group** : Chức năng này cho phép xoá bỏ security group không còn sử dụng, giúp hệ thống quản lý gọn gàng và chính xác hơn. Trên trang **Security Group Management** , chọn **Delete** tương ứng với security group cần xóa. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất. **Cảnh báo:** Việc xoá một Security Group có thể làm gián đoạn kết nối mạng của các database đang được gán Security Group đó. Sau khi bị xoá, tất cả các security rules liên quan sẽ bị loại bỏ ngay lập tức, có thể khiến ứng dụng không thể truy cập cơ sở dữ liệu hoặc gây mất kết nối giữa các dịch vụ nội bộ. Hãy đảm bảo rằng Security Group không còn được gán cho bất kỳ tài nguyên nào trước khi thực hiện thao tác xoá.

## 2. Gán Floating IP
Để cho phép truy cập cơ sở dữ liệu từ mạng ngoài (Internet) hoặc bên ngoài VPC, bạn cần tạo và gán Floating IP cho nó. Floating IP là một địa chỉ IPv4 công cộng tĩnh, có thể chuyển đổi giữa các tài nguyên mà không cần thay đổi cấu hình khác bên trong hệ thống mạng. Việc gán Floating IP yêu cầu bạn đảm bảo các security group / firewall rules cho phép traffic phù hợp (port, protocol) đến cơ sở dữ liệu.
**Best Practice** : Chỉ gán Floating IP khi cần truy cập public. Nếu database chỉ phục vụ backend nội bộ trong VPC, cân nhắc sử dụng private static IP để tránh phơi bày dịch vụ ra public network.
Các bước thực hiện cấp phát Floating IP như sau:
### Bước 1: Truy cập trang Quản lý Floating IP
Thực hiện đăng nhập vào FPT Cloud Portal. Sau khi đăng nhập thành công, từ menu chính, chọn **Network > Floating IPs**. Giao diện **Floating IP Management** sẽ hiển thị danh sách hiện có, cùng các tùy chọn để tạo mới hoặc release một Floating IP.
### Bước 2: Cấp phát địa chỉ IP
Trong trang **Floating IP Management** , nhấn **Allocate IP address**. Hộp thoại cấp phát IP hiển thị như sau:
[![](/img/migrated/allocate-IP-scaled-65984edf.png)](/img/migrated/allocate-IP-scaled-65984edf.png)
Nhập thông tin cấp phát:
  * **IP address** : Chọn phương thức cấp phát địa chỉ IP. Có hai tuỳ chọn sau: 
    * **Allocate new from pool** : Hệ thống tự động cấp phát một public Floating IP mới từ pool IP khả dụng.
    * **IP đã tồn tại (nếu có)** : Chọn một Floating IP đã được cấp phát trước đó từ danh sách.
  * **Resources** : Chọn loại tài nguyên để gán Floating IP. Đối với dịch vụ FPT Database Engine, chọn Resource type = **Instance** và chọn database instance tương ứng từ danh sách.
  * **IP Port (Optional)** : Chỉ định public port nếu bạn cấu hình port forwarding hoặc các quy tắc NAT cụ thể. Để trống nếu sử dụng cấu hình mặc định.
  * **Instance port (Optional)** : Chỉ định private port trên instance để ánh xạ lưu lượng truy cập từ public port. Để trống nếu sử dụng cấu hình mặc định.
  * **Add tag (Optional)** : Gán tags (key-value pairs) để phân loại, quản lý và theo dõi Floating IP trong quá trình vận hành và auditing.

Sau khi hoàn tất cấu hình, nhấn **Allocate floating IP** để bắt đầu quá trình cấp phát. Floating IP mới sẽ xuất hiện trong danh sách với trạng thái **Active** và được gán trực tiếp cho database instance đã chọn. Bạn có thể sử dụng Floating IP này để kết nối database từ bên ngoài nếu các security rules và firewall policies cho phép.
**Giải phóng Floating IP** :
Khi Floating IP không còn nhu cầu sử dụng, bạn có thể giải phóng bằng cách chọn **Release IP** tương ứng với địa chỉ IP cần thu hồi. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất.
**Lưu ý & Khắc phục sự cố**:
  * Đảm bảo Security Group của instance cho phép lưu lượng truy cập trên các cổng cần thiết (ví dụ: SSH port 22, HTTP port 80, hoặc cổng database tương ứng).
  * Nếu Floating IP không hoạt động như mong đợi, hãy kiểm tra lại security group inbound rules để đảm bảo các cổng database cần thiết đã được mở.

## 3. Kết nối vào cơ sở dữ liệu qua Client
Sau khi đã cấp quyền mạng (security group và floating IP), bạn có thể kết nối tới cơ sở dữ liệu bằng công cụ client yêu thích (ví dụ: pgAdmin cho PostgreSQL, MySQL Workbench cho MySQL…).
### Bước 1: Lấy thông tin kết nối
Thông tin kết nối cơ sở dữ liệu được hiển thị trên màn hình **Database Overview** trong FPT Cloud Portal. Để truy cập màn hình này, mở **Database list** , sau đó chọn ID của cơ sở dữ liệu để xem trang chi tiết:
[![](/img/migrated/db-overview-scaled-2357ac75.png)](/img/migrated/db-overview-scaled-2357ac75.png)
Sử dụng các thông tin sau để thiết lập kết nối đến cơ sở dữ liệu:
  * **Domain endpoint** : Địa chỉ endpoint dùng để kết nối tới cơ sở dữ liệu .
  * **Port** : Cổng dịch vụ mà cơ sở dữ liệu đang lắng nghe.
  * **Database name** : Tên database mặc định được tạo khi khởi tạo cơ sở dữ liệu.
  * **Username** : Tên tài khoản quản trị (admin user) dùng để truy cập database mặc định.
  * **Password** : Mật khẩu của tài khoản quản trị.

### Bước 2: Thực hiện kết nối
Bạn có thể kết nối đến cơ sở dữ liệu bằng một trong các phương thức sau:
  * **Kết nối bằng công cụ quản trị** : Sử dụng các công cụ quản trị CSDL (ví dụ: pgAdmin, MySQL Workbench, SSMS), nhập đầy đủ endpoint, port, username, password và database name để kết nối.
  * **Kết nối bằng dòng lệnh (CLI)** : Kết nối trực tiếp tới cơ sở dữ liệu từ terminal hoặc application server thông qua các lệnh CLI tương ứng với từng database engine.
  * **Kết nối từ ứng dụng** : Sử dụng official database drivers cho từng engine và cấu hình connection string phù hợp để kết nối từ ứng dụng.

Khi kết nối thành công, bạn sẽ thấy cấu trúc cơ sở dữ liệu và có thể thực thi truy vấn trực tiếp từ client.
**Lưu ý** : Đảm bảo rằng Security Group, firewall rules, và network policies cho phép kết nối tới endpoint và port của cơ sở dữ liệu.