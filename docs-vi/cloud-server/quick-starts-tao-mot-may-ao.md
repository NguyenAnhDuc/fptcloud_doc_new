---
id: "quick-starts-tao-mot-may-ao"
title: "Tạo một máy ảo"
description: "**Bước 1** : Ở menu chọn **Compute Engine** > **Instance Management** , chọn **Create instance**."
sidebar_label: "Tạo một máy ảo"
sidebar_position: 3
---

# Quick Starts Tao Mot May Ao

**Bước 1** : Ở menu chọn **Compute Engine** > **Instance Management** , chọn **Create instance**.
[![file](/img/migrated/image-1712739862804-d5b7552c.png)](/img/migrated/image-1712739862804-d5b7552c.png)
Một hộp thoại mới sẽ hiện lên và hướng dẫn người dùng các bước tiếp theo.
[![Userguide FPT Cloud Server 2022 18](/img/migrated/Userguide-FPT-Cloud-Server-2022-18-1024x-f0c8f0c9.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-18-1024x-f0c8f0c9.png)
**Bước 2** : Cấu hình máy ảo theo nhu cầu với các lựa chọn sau:
### **Thông tin Configuration**
**Instance Type** : Người dùng có thể tự chọn một dòng máy phù hợp nhất với nhu cầu. Hiện tại có 2 loại phổ biến là General và GPU.
  * **General** là dòng máy đáp ứng tốt cho các nhu cầu cơ bản
  * **GPU** phục vụ các nhu cầu cần hiệu suất cao (High performance computing), Machine Learning,…

[![file](/img/migrated/image-1724657781979-ab2ee565.png)](/img/migrated/image-1724657781979-ab2ee565.png)
**Image:** Chọn OS chính phù hợp với nhu cầu. Mỗi nhóm OS sẽ gồm các phiên bản khác nhau. Mặc định là phiên bản mới nhất. Người dùng có thể tùy biến theo nhu cầu bằng cách upload các file ISO của mình hoặc tạo máy ảo từ những template đã khởi tạo
**Đối với general**
  * Trường hợp tạo máy ảo từ OS

[![file](/img/migrated/image-1724661980458-423745c9.png)](/img/migrated/image-1724661980458-423745c9.png)
  * Trường hợp tạo máy ảo từ Image: người dùng có thể chọn custom image hoặc ISO image (Xem thêm thông tin lưu ý: Link

[![file](/img/migrated/image-1724661996843-e924b039.png)](/img/migrated/image-1724661996843-e924b039.png)
  * Trường hợp tạo máy ảo từ Snapshot/NAT Instance

[![file](/img/migrated/image-1724662011478-e60ec9a7.png)](/img/migrated/image-1724662011478-e60ec9a7.png)
[![file](/img/migrated/image-1724662017399-891d0f83.png)](/img/migrated/image-1724662017399-891d0f83.png)
**Đối với specific**
[![file](/img/migrated/image-1724662030232-f6dd6471.png)](/img/migrated/image-1724662030232-f6dd6471.png)
**Resource type** : Mỗi dòng máy sẽ cấu hình CPU, RAM khác nhau, hoặc người dùng có thể tự tạo một cấu hình tùy chọn.
[![file](/img/migrated/image-1724662047559-1be6927b.png)](/img/migrated/image-1724662047559-1be6927b.png)
### **Thông tin Storage disk**
**Storage** : Storage gắn vào máy ảo gồm:
  * **Storage Policy** : Loại Storage
  * **Size** : Kích thước Storage

[![file](/img/migrated/image-1724662063044-c293e47c.png)](/img/migrated/image-1724662063044-c293e47c.png)
### **Thông tin Network**
Gồm Subnet và các thông tin Advanced như Private IP, Floating IP, Security group
  * **Subnet** & **Private IP** : Người dùng lựa chọn network để đảm bảo rằng máy ảo có kết nối đến các tài nguyên và dịch vụ mạng cần thiết cho hoạt động của nó. Điều này cho phép máy ảo giao tiếp với các thiết bị khác trên mạng và truy cập vào các tài nguyên bên ngoài như internet. Người dùng có thể nhập địa chỉ IP private cho máy ảo hoặc hệ thống sẽ tự sinh ra theo subnet đã lựa chọn (nếu để trống trường này
  * **Security Group** : Người dùng lựa chọn security group để kiểm soát traffic ra vào máy ảo. Người dùng có thể để trống trường này và cấu hình sau.

[![file](/img/migrated/image-1724662077573-14ea2c24.png)](/img/migrated/image-1724662077573-14ea2c24.png)
### **Thông tin Authentication**
**Authentication type** : **SSH key** hoặc **Password**
  * Nếu chọn SSH Key, hệ thống sẽ chọn SSH key mới nhất (có thể thay đổi). 

[![file](/img/migrated/image-1724662090638-f8be1084.png)](/img/migrated/image-1724662090638-f8be1084.png)
  * Nếu sử dụng phương thức Standard, người dùng cần lưu ý ghi nhớ và bảo mật mật khẩu ở nơi an toàn.

[![file](/img/migrated/image-1724662104611-d3e63623.png)](/img/migrated/image-1724662104611-d3e63623.png)
### **Các thông tin advanced**
[![file](/img/migrated/image-1724662116137-16450e30.png)](/img/migrated/image-1724662116137-16450e30.png)
  * **Instance group** : Người dùng có thể tùy chọn Instance group để cấu hình về vị trí đặt máy ảo trên host vật lý.
  * **Tên instance** : Nhập tên máy ảo sao cho dễ quản lý nhất. Đây cũng sẽ là tên host name của máy ảo sau này.
  * **User data** : Nơi chứa cloud-init script. Khi máy ảo khởi động, cloud-init sẽ đọc các metadata được cung cấp từ cloud, và khởi tạo hệ thống dựa trên chúng. Cloud-init thường được dùng với mục đích setup network, storage, SSH keys, và nhiều phần khác của hệ thống. Lưu ý: Nếu máy ảo khởi tạo bằng hệ điều hành window, cần reboot lại để khởi chạy các script từ cloud-init.

**Cloud-init script mẫu** : Với đoạn script mẫu, hệ thống sẽ tự khởi tạo user “testcloudinit” với password “Abc123“ và user “testcloudinit2” với password “abc@123Abc123"

```
Copy#cloud-config
users:
- name: testcloudinit
  sudo: ALL=(ALL) NOPASSWD:ALL
  lock_passwd: false
  shell: /bin/bash
  passwd: $6$rounds=4096$V6anciWl30$xKbcljqks1gUkMiM80pyKzhvyhn7U1n.jXcGCUfkUlX.rnllUWKUrmDEzekhhhP8aERSylRuC7gfDhJ32Xv0A1
- name: testcloudinit2
  groups: sudo
  lock_passwd: false
  shell: /bin/bash
  plain_text_passwd: abc@123Abc123
- hostname: testcloudinit

```

Lưu ý với window sẽ sử dụng script dạng Cloud base init.
**Script mẫu:**

```
Copy#cloud-config
users:
- name: testcloudinit
  primary_group: Administrators
  groups: Administrators
  passwd: abc@123Abc123
```

**Bước 3** : Nhấn chọn **Create Instance** để thực hiện khởi tạo máy ảo. Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên và tiến hành quá trình khởi tạo máy ảo mới dựa vào cấu hình đã chọn.
[![file](/img/migrated/image-1724664453215-c36b4dde.png)](/img/migrated/image-1724664453215-c36b4dde.png)
Sau khi khởi tạo thành công, người dùng có thể thấy máy ảo mới tạo và kiểm tra thông tin trên bảng quản trị. Mỗi máy ảo sẽ được hiển thị thông tin đầy đủ về tên, cấu hình (Ram, CPU, Storage), địa chỉ IP address, trạng thái hoạt động (Tắt/Bật/Suspended) trên bảng.
**[![Userguide FPT Cloud Server 2022 21](/img/migrated/Userguide-FPT-Cloud-Server-2022-21-1024x-e04e8c2e.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-21-1024x-e04e8c2e.png)**