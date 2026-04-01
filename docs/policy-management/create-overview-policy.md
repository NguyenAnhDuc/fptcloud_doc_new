---
id: "create-overview-policy"
title: "Khởi tạo nhanh Policy Management"
sidebar_label: "Khởi tạo nhanh Policy Management"
sidebar_position: "4"
---

# Khởi tạo nhanh Policy Management

Để sử dụng tính năng này, người dùng cần đăng nhập vào hệ thống với phân quyền Tenant owner
**Bước 1** : Ở menu chọn **Policy Management** > chọn **Create policy**
[![file](/img/migrated/image-1719821191945-baf3408d.png)](/img/migrated/image-1719821191945-baf3408d.png)
**Bước 2** : Nhập các thông tin yêu cầu của hệ thống:
  * **Policy Name** : Nhập vào tên của policy
  * **Apply to** : Chọn User group được áp dụng policy
  * **Resource type** : Hiện tại hệ thống chỉ hỗ trợ các rule built-in thuộc Security group
  * **Policy action** : Chọn hành động theo các rule built-in của hệ thống xây dựng. Các rule được xây dựng sẵn bao gồm:
    * Security group: chỉ hỗ trợ các rule built-in

  
| Rule built-in  | Định nghĩa  |  
| --- | --- |  
| All TCP restriction when creating security group (built-in)  | Cấm khởi tạo rule cho phép toàn bộ traffic TCP từ ngoài internet vào instance trong quá trình khởi tạo Security group  |  
| All TCP restriction when editing security group (built-in)  | Cấm khởi tạo rule cho phép toàn bộ traffic TCP từ ngoài internet vào instance trong quá trình chỉnh sửa Security group  |  
| All traffic restriction when creating security group (built-in)  | Cấm khởi tạo rule cho phép toàn bộ traffic từ ngoài internet vào instance trong quá trình khởi tạo Security group  |  
| All traffic restriction when editing security group (built-in)  | Cấm khởi tạo rule cho phép toàn bộ traffic từ ngoài internet vào instance trong quá trình chỉnh sửa Security group  |  
| All UDP restriction when creating security group (built-in)  | Cấm khởi tạo rule cho phép toàn bộ traffic UDP từ ngoài internet vào instance trong quá trình khởi tạo Security group  |  
| All UDP restriction when editing security group (built-in)  | Cấm khởi tạo rule cho phép toàn bộ traffic UDP từ ngoài internet vào instance trong quá trình chỉnh sửa Security group  |  
| MSSQL-TCP restriction when creating security group (built-in)  | Cấm khởi tạo rule cho phép truy cập port 1433 từ all IPv4 vào instance trong quá trình khởi tạo Security group  |  
| MSSQL-TCP restriction when editing security group (built-in)  | Cấm khởi tạo rule cho phép truy cập port 1433 từ all IPv4 vào instance trong quá trình chỉnh sửa Security group  |  
| MSSQL-UDP restriction when creating security group (built-in)  | Cấm khởi tạo rule cho phép truy cập port 1434 từ all IPv4 vào instance trong quá trình khởi tạo Security group  |  
| MSSQL-UDP restriction when editing security group (built-in)  | Cấm khởi tạo rule cho phép truy cập port 1434 từ all IPv4 vào instance trong quá trình chỉnh sửa Security group  |  
| MySQL restriction when creating security group (built-in)  | Cấm khởi tạo rule cho phép truy cập port 3306 từ all IPv4 vào instance trong quá trình khởi tạo Security group  |  
| MySQL restriction when editing security group (built-in)  | Cấm khởi tạo rule cho phép truy cập port 3306 từ all IPv4 vào instance trong quá trình chỉnh sửa Security group  |  
| Oracle connection manager restriction when creating security group (built-in)  | Cấm khởi tạo rule cho phép truy cập port 1830 từ all IPv4 vào instance trong quá trình khởi tạo Security group  |  
| Oracle connection manager restriction when editing security group (built-in)  | Cấm khởi tạo rule cho phép truy cập port 1830 từ all IPv4 vào instance trong quá trình chỉnh sửa Security group  |  
| Oracle net services listener restriction when creating security group (built-in)  | Cấm khởi tạo rule cho phép truy cập port 1521 từ all IPv4 vào instance trong quá trình khởi tạo Security group  |  
| Oracle net services listener restriction when editing security group (built-in)  | Cấm khởi tạo rule cho phép truy cập port 1521 từ all IPv4 vào instance trong quá trình chỉnh sửa Security group  |  
| PostgreSQL restriction when creating security group (built-in)  | Cấm khởi tạo rule cho phép truy cập port 5432 từ all IPv4 vào instance trong quá trình khởi tạo Security group  |  
| PostgreSQL restriction when editing security group (built-in)  | Cấm khởi tạo rule cho phép truy cập port 5432 từ all IPv4 vào instance trong quá trình chỉnh sửa Security group  |  
| Remote desktop restriction when creating security group (built-in)  | Cấm khởi tạo rule cho phép truy cập port 3389 từ all IPv4 vào instance trong quá trình khởi tạo Security group  |  
| Remote desktop restriction when editing security group (built-in)  | Cấm khởi tạo rule cho phép truy cập port 3389 từ all IPv4 vào instance trong quá trình chỉnh sửa Security group  |  
| SSH restriction when creating security group (built-in)  | Cấm khởi tạo rule cho phép truy cập port 22 từ all IPv4 vào instance trong quá trình khởi tạo Security group  |  
| SSH restriction when editing security group (built-in)  | Cấm khởi tạo rule cho phép truy cập port 22 từ all IPv4 vào instance trong quá trình chỉnh sửa Security group  |  
  * Tagging: Hỗ trợ rule built-in và một số điều kiện có thể config để thỏa mãn yêu cầu khách hàng

  
| Rule Built-in  | Rule  | Rule config  | Ý nghĩa  |  
| --- | --- | --- | --- |  
| Assign tags to the new **instance** immediately after creation  | All Instance  | N/A  | Hệ thống tự động gắn tag cho toàn bộ instance ngay khi tạo  |  
| Assign tags to the new **instance** immediately after creation  | Specific rule  | Instance name include text  | Hệ thống tự động gắn tag cho instance ngay khi tạo nếu instance thỏa mãn điều kiện tên có chưa ký tự đã config.  |  
| Assign tags to the new **instance** immediately after creation  | Specific rule  | Floating IP include/ in range  | Hệ thống tự động gắn tag cho instance ngay khi tạo nếu instance thỏa mãn điều kiện floating IP có chứa 1 phần/ nằm trong dãy IP đã config.  |  
| Assign tags to the new **instance** immediately after creation  | Specific rule  | Private IP include/ in range  | Hệ thống tự động gắn tag cho instance ngay khi tạo nếu instance thỏa mãn điều kiện private IP có chứa 1 phần/ nằm trong dãy IP đã config.  |  
| Assign tags to the new **instance & related resources** immediately after creation (related resource = Storage, IP, Subnet, Secgroup)  | All Instance  | N/A  | Hệ thống tự động gắn tag cho toàn bộ instance ngay khi tạo và các resource liên quan (Storage, IP, Subnet, Secgroup)  |  
| Assign tags to the new **instance & related resources** immediately after creation (related resource = Storage, IP, Subnet, Secgroup)  | Specific rule  | Instance name include text  | Hệ thống tự động gắn tag cho instance và các resource liên quan (Storage, IP, Subnet, Secgroup) ngay khi tạo nếu instance thỏa mãn điều kiện tên có chưa ký tự đã config.  |  
| Assign tags to the new **instance & related resources** immediately after creation (related resource = Storage, IP, Subnet, Secgroup)  | Specific rule  | Floating IP include/ in range  | Hệ thống tự động gắn tag cho instance và các resource liên quan (Storage, IP, Subnet, Secgroup) ngay khi tạo nếu instance thỏa mãn điều kiện floating IP có chứa 1 phần/ nằm trong dãy IP đã config.  |  
| Assign tags to the new **instance & related resources** immediately after creation (related resource = Storage, IP, Subnet, Secgroup)  | Specific rule  | Private IP include/ in range  | Hệ thống tự động gắn tag cho instance và các resource liên quan (Storage, IP, Subnet, Secgroup) ngay khi tạo nếu instance thỏa mãn điều kiện Private IP có chứa 1 phần/ nằm trong dãy IP đã config.  |  
| Assign tags to the new **storage** immediately after creation  | All Storage  | N/A  | Hệ thống tự động gắn tag cho toàn bộ storage ngay khi tạo  |  
| Assign tags to the new **storage** immediately after creation  | Specific rule  | Instance name include text  | Hệ thống tự động gắn tag cho storage ngay khi tạo nếu storage thỏa mãn điều kiện tên có chưa ký tự đã config.  |  
| Assign tags to the new **floating IP** immediately after creation  | All Floating IP  | N/A  | Hệ thống tự động gắn tag cho toàn bộ Floating IP ngay khi tạo  |  
| Assign tags to the new **floating IP** immediately after creation  | Specific rule  | Floating IP include/ in range  | Hệ thống tự động gắn tag cho Floating IP ngay khi tạo nếu instance thỏa mãn điều kiện Floating IP có chứa 1 phần/ nằm trong dãy IP đã config.  |  
**Bước 3** : Chọn **Create policy**. Hệ thống sẽ tiến hành khởi tạo Policy mới sẽ được hiển thị ở trang **Policy Management**.
[![file](/img/migrated/image-1719821213488-f46245e0.png)](/img/migrated/image-1719821213488-f46245e0.png)
