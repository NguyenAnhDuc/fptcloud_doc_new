---
id: "create-policy"
title: "Create Policy Management"
sidebar_label: "Create Policy Management"
sidebar_position: "6"
---

# Create Policy Management

**Để sử dụng feature this, user need to đăng nhập ando system with phân permission Tenant owner**
**Step 1:** Ở menu chọn **Policy Management** > chọn **Create policy**
[![file](/img/migrated/image-1719821298105-3ceed670.png)](/img/migrated/image-1719821298105-3ceed670.png)
**Step 2:** Enter the information yêu cầu of system:
  * **Policy Name** : Enter ando tên of Policy
  * **Apply to** : Chọn User group is áp dụng policy
  * **Resource type** : Hiện tại system chỉ hỗ trợ the rule built-in thuộc Security group
  * **Policy action** : Chọn hành động theo the rule built-in of system xây dựng. Các rule is xây dựng sẵn including:
  * Security group: chỉ hỗ trợ the rule built-in

  
| Rule built-in  | Định nghĩa  |  
| --- | --- |  
| All TCP restriction when creating security group (built-in)  | Cấm khởi tạo rule for phép toàn bộ traffic TCP from ngoài internet ando instance in quá trình khởi tạo Security group  |  
| All TCP restriction when editing security group (built-in)  | Cấm khởi tạo rule for phép toàn bộ traffic TCP from ngoài internet ando instance in quá trình chỉnh sửa Security group  |  
| All traffic restriction when creating security group (built-in)  | Cấm khởi tạo rule for phép toàn bộ traffic from ngoài internet ando instance in quá trình khởi tạo Security group  |  
| All traffic restriction when editing security group (built-in)  | Cấm khởi tạo rule for phép toàn bộ traffic from ngoài internet ando instance in quá trình chỉnh sửa Security group  |  
| All UDP restriction when creating security group (built-in)  | Cấm khởi tạo rule for phép toàn bộ traffic UDP from ngoài internet ando instance in quá trình khởi tạo Security group  |  
| All UDP restriction when editing security group (built-in)  | Cấm khởi tạo rule for phép toàn bộ traffic UDP from ngoài internet ando instance in quá trình chỉnh sửa Security group  |  
| MSSQL-TCP restriction when creating security group (built-in)  | Cấm khởi tạo rule for phép truy cập port 1433 from all IPv4 ando instance in quá trình khởi tạo Security group  |  
| MSSQL-TCP restriction when editing security group (built-in)  | Cấm khởi tạo rule for phép truy cập port 1433 from all IPv4 ando instance in quá trình chỉnh sửa Security group  |  
| MSSQL-UDP restriction when creating security group (built-in)  | Cấm khởi tạo rule for phép truy cập port 1434 from all IPv4 ando instance in quá trình khởi tạo Security group  |  
| MSSQL-UDP restriction when editing security group (built-in)  | Cấm khởi tạo rule for phép truy cập port 1434 from all IPv4 ando instance in quá trình chỉnh sửa Security group  |  
| MySQL restriction when creating security group (built-in)  | Cấm khởi tạo rule for phép truy cập port 3306 from all IPv4 ando instance in quá trình khởi tạo Security group  |  
| MySQL restriction when editing security group (built-in)  | Cấm khởi tạo rule for phép truy cập port 3306 from all IPv4 ando instance in quá trình chỉnh sửa Security group  |  
| Oracle connection manager restriction when creating security group (built-in)  | Cấm khởi tạo rule for phép truy cập port 1830 from all IPv4 ando instance in quá trình khởi tạo Security group  |  
| Oracle connection manager restriction when editing security group (built-in)  | Cấm khởi tạo rule for phép truy cập port 1830 from all IPv4 ando instance in quá trình chỉnh sửa Security group  |  
| Oracle net services listener restriction when creating security group (built-in)  | Cấm khởi tạo rule for phép truy cập port 1521 from all IPv4 ando instance in quá trình khởi tạo Security group  |  
| Oracle net services listener restriction when editing security group (built-in)  | Cấm khởi tạo rule for phép truy cập port 1521 from all IPv4 ando instance in quá trình chỉnh sửa Security group  |  
| PostgreSQL restriction when creating security group (built-in)  | Cấm khởi tạo rule for phép truy cập port 5432 from all IPv4 ando instance in quá trình khởi tạo Security group  |  
| PostgreSQL restriction when editing security group (built-in)  | Cấm khởi tạo rule for phép truy cập port 5432 from all IPv4 ando instance in quá trình chỉnh sửa Security group  |  
| Remote desktop restriction when creating security group (built-in)  | Cấm khởi tạo rule for phép truy cập port 3389 from all IPv4 ando instance in quá trình khởi tạo Security group  |  
| Remote desktop restriction when editing security group (built-in)  | Cấm khởi tạo rule for phép truy cập port 3389 from all IPv4 ando instance in quá trình chỉnh sửa Security group  |  
| SSH restriction when creating security group (built-in)  | Cấm khởi tạo rule for phép truy cập port 22 from all IPv4 ando instance in quá trình khởi tạo Security group  |  
| SSH restriction when editing security group (built-in)  | Cấm khởi tạo rule for phép truy cập port 22 from all IPv4 ando instance in quá trình chỉnh sửa Security group  |  
  * Tagging: Hỗ trợ rule built-in and a số điều kiện can config to thỏa mãn yêu cầu customer

  
| Rule Built-in  | Rule  | Rule config  | Ý nghĩa  |  
| --- | --- | --- | --- |  
| Assign tags to the new **instance** immediately after creation  | All Instance  | N/A  | Hệ thống tự động gắn tag for toàn bộ instance ngay when tạo  |  
| Assign tags to the new **instance** immediately after creation  | Specific rule  | Instance name include text  | Hệ thống tự động gắn tag for instance ngay when tạo if instance thỏa mãn điều kiện tên có chưa ký tự has been config.  |  
| Assign tags to the new **instance** immediately after creation  | Specific rule  | Floating IP include/ in range  | Hệ thống tự động gắn tag for instance ngay when tạo if instance thỏa mãn điều kiện floating IP có chứa 1 phần/ nằm in dãy IP has been config.  |  
| Assign tags to the new **instance** immediately after creation  | Specific rule  | Private IP include/ in range  | Hệ thống tự động gắn tag for instance ngay when tạo if instance thỏa mãn điều kiện private IP có chứa 1 phần/ nằm in dãy IP has been config.  |  
| Assign tags to the new **instance & related resources** immediately after creation (related resource = Storage, IP, Subnet, Secgroup)  | All Instance  | N/A  | Hệ thống tự động gắn tag for toàn bộ instance ngay when tạo and the resource liên quan (Storage, IP, Subnet, Secgroup)  |  
| Assign tags to the new **instance & related resources** immediately after creation (related resource = Storage, IP, Subnet, Secgroup)  | Specific rule  | Instance name include text  | Hệ thống tự động gắn tag for instance and the resource liên quan (Storage, IP, Subnet, Secgroup) ngay when tạo if instance thỏa mãn điều kiện tên có chưa ký tự has been config.  |  
| Assign tags to the new **instance & related resources** immediately after creation (related resource = Storage, IP, Subnet, Secgroup)  | Specific rule  | Floating IP include/ in range  | Hệ thống tự động gắn tag for instance and the resource liên quan (Storage, IP, Subnet, Secgroup) ngay when tạo if instance thỏa mãn điều kiện floating IP có chứa 1 phần/ nằm in dãy IP has been config.  |  
| Assign tags to the new **instance & related resources** immediately after creation (related resource = Storage, IP, Subnet, Secgroup)  | Specific rule  | Private IP include/ in range  | Hệ thống tự động gắn tag for instance and the resource liên quan (Storage, IP, Subnet, Secgroup) ngay when tạo if instance thỏa mãn điều kiện Private IP có chứa 1 phần/ nằm in dãy IP has been config.  |  
| Assign tags to the new **storage** immediately after creation  | All Storage  | N/A  | Hệ thống tự động gắn tag for toàn bộ storage ngay when tạo  |  
| Assign tags to the new **storage** immediately after creation  | Specific rule  | Instance name include text  | Hệ thống tự động gắn tag for storage ngay when tạo if storage thỏa mãn điều kiện tên có chưa ký tự has been config.  |  
| Assign tags to the new **floating IP** immediately after creation  | All Floating IP  | N/A  | Hệ thống tự động gắn tag for toàn bộ Floating IP ngay when tạo  |  
| Assign tags to the new **floating IP** immediately after creation  | Specific rule  | Floating IP include/ in range  | Hệ thống tự động gắn tag for Floating IP ngay when tạo if instance thỏa mãn điều kiện Floating IP có chứa 1 phần/ nằm in dãy IP has been config.  |  
[![file](/img/migrated/image-1719821677947-d9d4d2c9.png)](/img/migrated/image-1719821677947-d9d4d2c9.png)
**Step 3:** Chọn Create policy. Hệ thống will tiến hành khởi tạo Policy mới will is displayed ở trang Policy Management.
[![file](/img/migrated/image-1719821699202-a820ed2a.png)](/img/migrated/image-1719821699202-a820ed2a.png)
**Note:**
  * Người dùng chỉ áp dụng for 1 policy duy nhất for user group
  * Để the policy is chặt chẽ, when khởi tạo the policy need to truy cập ando the port đặc biệt, FCI khuyến khích user khởi tạo thêm the policy liên quan including:
    * Cấm khởi tạo rule for phép toàn bộ traffic TCP from ngoài Internet ando instance in quá trình khởi tạo Security group
    * Cấm khởi tạo rule for phép toàn bộ traffic TCP from ngoài Internet ando instance in quá trình chỉnh sửa Security group
    * Cấm khởi tạo rule for phép toàn bộ traffic from ngoài Internet ando instance in quá trình khởi tạo Security group
    * Cấm khởi tạo rule for phép toàn bộ traffic from ngoài Internet ando instance in quá trình chỉnh sửa Security group
    * Cấm khởi tạo rule for phép toàn bộ traffic UDP from ngoài Internet ando instance in quá trình khởi tạo Security group
    * Cấm khởi tạo rule for phép toàn bộ traffic UDP from ngoài Internet ando instance in quá trình chỉnh sửa Security group
