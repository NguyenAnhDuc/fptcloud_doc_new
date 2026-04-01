---
id: "subnet"
title: "Quản lý Subnet"
description: "Subnet là một dải địa chỉ IP được chia nhỏ từ một VPC (Virtual Private Cloud – Mạng riêng ảo). Trong môi trường cloud, s"
sidebar_label: "Quản lý Subnet"
sidebar_position: 15
---

# Subnet

Subnet là một dải địa chỉ IP được chia nhỏ từ một VPC (Virtual Private Cloud – Mạng riêng ảo). Trong môi trường cloud, subnet dùng để phân vùng địa chỉ IP và kiểm soát lưu lượng mạng trong hệ thống, đồng thời là nền tảng cho định tuyến, bảo mật và cung cấp dịch vụ.
Đối với DBaaS, Subnet đóng vai trò quan trọng trong việc:
  * Định vị mạng cho database instances và các thành phần liên quan (ví dụ Floating IP)
  * Kiểm soát truy cập mạng nội bộ và khai báo firewall/Security Groups
  * Đảm bảo routing và cách ly mạng phù hợp với yêu cầu bảo mật

Subnet giúp người dùng xác định phạm vi địa chỉ IP, và đảm bảo traffic giữa ứng dụng và database được thực hiện trong không gian mạng được kiểm soát.
Việc quản lý subnet là nhiệm vụ nền tảng để triển khai DBaaS. Hướng dẫn này giúp bạn tạo, xác minh và quản lý subnet qua FPT Console Portal, đảm bảo tài nguyên mạng ổn định cho khối lượng công việc cơ sở dữ liệu.
### Bước 1: Truy cập trang Quản lý subnet
Thực hiện đăng nhập vào FPT Cloud Portal. Sau khi đăng nhập thành công, từ menu chính, chọn **Network** > **Subnets**. Giao diện **Subnets Management** sẽ hiển thị danh sách subnets hiện có, cùng các tùy chọn để tạo mới, chỉnh sửa hoặc xoá một subnet.
### Bước 2: Tạo subnet mới
Trong trang **Subnets Management** , nhấn **Create subnet**. Màn hình tạo subnet mới hiển thị như sau:
[![](/img/migrated/Create-subnet-scaled-5bd6cd39.png)](/img/migrated/Create-subnet-scaled-5bd6cd39.png)
Cấu hình các thông tin sau theo kế hoạch mạng của bạn:
  * **Name** : Tên định danh của subnet dùng để nhận diện subnet khi cấu hình tài nguyên mạng cho dịch vụ. Tên này có tối đa 50 ký tự, bao gồm: chữ cái, số và dấu "-". Tên subnet không được trùng với subnet khác trong cùng VPC (khuyến nghị).
  * **Type** : Loại subnet dùng để xác định hành vi định tuyến (routing) của subnet. Mặc định là **Isolated** - subnet không route ra Internet mà chỉ sử dụng cho mạng nội bộ (private network). Phù hợp cho database production, backend services và internal workloads.
  * **Network address (CIDR)** : Nhập dải địa chỉ mạng IP của subnet, theo chuẩn CIDR notation (ví dụ: 192.168.10.0/24). Hệ thống sẽ kiểm tra tính khả dụng và hiển thị tổng số IP khả dụng. **Lưu ý** : CIDR phải là dải hợp lệ và không trùng lặp với các subnet khác trong VPC.
  * **Gateway IP** : Địa chỉ IP gateway của subnet, dùng làm điểm định tuyến mặc định cho các tài nguyên trong subnet. Thường là địa chỉ IP đầu tiên hoặc IP được quy ước theo kiến trúc mạng nội bộ. Gateway IP phải nằm trong dải CIDR và không trùng với Static IP Pool (nếu có).
  * **Static IP Pool (Optional)** : Dải IP tĩnh được dành riêng để cấp phát cho các tài nguyên cần IP cố định. Chỉ nhập khi có nhu cầu sử dụng. Dải IP này phải nằm trong phạm vi CIDR đã chỉ định và không bao gồm Gateway IP.
  * **Primary DNS** : Địa chỉ DNS server chính được gán cho các tài nguyên trong subnet, dùng để phân giải tên miền nội bộ hoặc Internet (tuỳ kiến trúc mạng). Có thể sử dụng DNS nội bộ hoặc DNS public theo chính sách của hệ thống.
  * **Secondary DNS (Optional)** : DNS server dự phòng, được sử dụng khi Primary DNS không khả dụng. Khuyến nghị cấu hình để tăng độ tin cậy.
  * **Add tag (Optional)** : Gán tags (key-value) cho subnet để phân loại tài nguyên, quản lý chi phí hoặc hỗ trợ vận hành và auditing

Sau khi nhập đầy đủ thông tin, chọn **Create subnet** để hoàn tất quá trình tạo subnet.
Sau khi tạo thành công, subnet mới sẽ xuất hiện trong danh sách quản lý và sẵn sàng để sử dụng khi khởi tạo cơ sở dữ liệu.
Khi cần thiết, bạn có thể thực hiện các thao tác sau với subnet đã tạo:
  * **Thay đổi tên của subnet** : Chức năng này cho phép sửa đổi tên của subnet. Để thực hiện, trên trang **Subnet Management** , chọn **Rename** tương ứng với subnet cần chỉnh sửa. Thực hiện thay đổi và nhấn **Rename subnet** để lưu lại.
  * **Xóa subnet** : Chức năng này cho phép xoá bỏ subnet không còn sử dụng, giúp hệ thống quản lý subnet gọn gàng và chính xác hơn. Trên trang **Subnet Management** , chọn **Delete** tương ứng với subnet cần xóa. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất. **Lưu ý** : Việc thay **đổi tên hay xóa một subnet đang sử dụng có thể gây gián đoạn mạng** cho DBaaS và các dịch vụ khác. Hãy luôn đảm bảo rằng bạn đã giải phóng các tài nguyên phụ thuộc trước khi thực hiện các thao tác này.
