---
id: "quick-starts-tao-mot-may-ao"
title: "Tạo một máy ảo"
sidebar_label: "Tạo một máy ảo"
sidebar_position: 1
---

# Tạo một máy ảo


**Bước 1**: Ở menu chọn **Compute Engine** > **Instance Management**, chọn **Create instance**.

![file](images/quick-starts-tao-mot-may-ao/img-001.png)

Một hộp thoại mới sẽ hiện lên và hướng dẫn người dùng các bước tiếp theo.

![Userguide FPT Cloud Server 2022 18](images/quick-starts-tao-mot-may-ao/img-002.png)

**Bước 2**: Cấu hình máy ảo theo nhu cầu với các lựa chọn sau:

### Thông tin Configuration
**Instance Type**: Người dùng có thể tự chọn một dòng máy phù hợp nhất với nhu cầu. Hiện tại có 2 loại phổ biến là General và GPU.

  * **General** là dòng máy đáp ứng tốt cho các nhu cầu cơ bản

  * **GPU** phục vụ các nhu cầu cần hiệu suất cao (High performance computing), Machine Learning,…


![file](images/quick-starts-tao-mot-may-ao/img-003.png)

**Image:** Chọn OS chính phù hợp với nhu cầu. Mỗi nhóm OS sẽ gồm các phiên bản khác nhau. Mặc định là phiên bản mới nhất. Người dùng có thể tùy biến theo nhu cầu bằng cách upload các file ISO của mình hoặc tạo máy ảo từ những template đã khởi tạo

**Đối với general**

  * Trường hợp tạo máy ảo từ OS


![file](images/quick-starts-tao-mot-may-ao/img-004.png)

  * Trường hợp tạo máy ảo từ Image: người dùng có thể chọn custom image hoặc ISO image (Xem thêm thông tin lưu ý: Link


![file](images/quick-starts-tao-mot-may-ao/img-005.png)

  * Trường hợp tạo máy ảo từ Snapshot/NAT Instance


![file](images/quick-starts-tao-mot-may-ao/img-006.png)

![file](images/quick-starts-tao-mot-may-ao/img-007.png)

**Đối với specific**

![file](images/quick-starts-tao-mot-may-ao/img-008.png)

**Resource type**: Mỗi dòng máy sẽ cấu hình CPU, RAM khác nhau, hoặc người dùng có thể tự tạo một cấu hình tùy chọn.

![file](images/quick-starts-tao-mot-may-ao/img-009.png)

### Thông tin Storage disk
**Storage**: Storage gắn vào máy ảo gồm:

  * **Storage Policy**: Loại Storage

  * **Size**: Kích thước Storage


![file](images/quick-starts-tao-mot-may-ao/img-010.png)

### Thông tin Network
Gồm Subnet và các thông tin Advanced như Private IP, Floating IP, Security group

  * **Subnet** & **Private IP**: Người dùng lựa chọn network để đảm bảo rằng máy ảo có kết nối đến các tài nguyên và dịch vụ mạng cần thiết cho hoạt động của nó. Điều này cho phép máy ảo giao tiếp với các thiết bị khác trên mạng và truy cập vào các tài nguyên bên ngoài như internet. Người dùng có thể nhập địa chỉ IP private cho máy ảo hoặc hệ thống sẽ tự sinh ra theo subnet đã lựa chọn (nếu để trống trường này

  * **Security Group**: Người dùng lựa chọn security group để kiểm soát traffic ra vào máy ảo. Người dùng có thể để trống trường này và cấu hình sau.


![file](images/quick-starts-tao-mot-may-ao/img-011.png)

### Thông tin Authentication
**Authentication type**: **SSH key** hoặc **Password**

  * Nếu chọn SSH Key, hệ thống sẽ chọn SSH key mới nhất (có thể thay đổi).


![file](images/quick-starts-tao-mot-may-ao/img-012.png)

  * Nếu sử dụng phương thức Standard, người dùng cần lưu ý ghi nhớ và bảo mật mật khẩu ở nơi an toàn.


![file](images/quick-starts-tao-mot-may-ao/img-013.png)

### Các thông tin advanced
![file](images/quick-starts-tao-mot-may-ao/img-014.png)

  * **Instance group**: Người dùng có thể tùy chọn Instance group để cấu hình về vị trí đặt máy ảo trên host vật lý.

  * **Tên instance**: Nhập tên máy ảo sao cho dễ quản lý nhất. Đây cũng sẽ là tên host name của máy ảo sau này.

  * **User data**: Nơi chứa cloud-init script. Khi máy ảo khởi động, cloud-init sẽ đọc các metadata được cung cấp từ cloud, và khởi tạo hệ thống dựa trên chúng. Cloud-init thường được dùng với mục đích setup network, storage, SSH keys, và nhiều phần khác của hệ thống. Lưu ý: Nếu máy ảo khởi tạo bằng hệ điều hành window, cần reboot lại để khởi chạy các script từ cloud-init.


**Cloud-init script mẫu**: Với đoạn script mẫu, hệ thống sẽ tự khởi tạo user “testcloudinit” với password “Abc123“ và user “testcloudinit2” với password “abc@123Abc123"
[code]
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

[/code]

Lưu ý với window sẽ sử dụng script dạng Cloud base init.

**Script mẫu:**
[code]
    Copy#cloud-config
    users:
    - name: testcloudinit
      primary_group: Administrators
      groups: Administrators
      passwd: abc@123Abc123
[/code]

**Bước 3**: Nhấn chọn **Create Instance** để thực hiện khởi tạo máy ảo. Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên và tiến hành quá trình khởi tạo máy ảo mới dựa vào cấu hình đã chọn.

![file](images/quick-starts-tao-mot-may-ao/img-015.png)

Sau khi khởi tạo thành công, người dùng có thể thấy máy ảo mới tạo và kiểm tra thông tin trên bảng quản trị. Mỗi máy ảo sẽ được hiển thị thông tin đầy đủ về tên, cấu hình (Ram, CPU, Storage), địa chỉ IP address, trạng thái hoạt động (Tắt/Bật/Suspended) trên bảng.

**![Userguide FPT Cloud Server 2022 21](images/quick-starts-tao-mot-may-ao/img-016.png)**
