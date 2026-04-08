---
id: "tutorials-khoi-tao-mot-may-ao-moi"
title: "Khởi tạo một máy ảo mới"
sidebar_label: "Khởi tạo một máy ảo mới"
sidebar_position: 2
---

# Khởi tạo một máy ảo mới


**Bước 1**: Ở menu chọn **Compute Engine** > **Instance Management**, chọn **Create instance**.

![](images/tutorials-khoi-tao-mot-may-ao-moi/img-001.png)

**Bước 2**: Cấu hình máy ảo theo nhu cầu với các lựa chọn sau:

  * **Instance Type**: Người dùng có thể tự chọn một dòng máy phù hợp nhất với nhu cầu. Hiện tại có 2 loại phổ biến là General và GPU.

    * **General** là dòng máy đáp ứng tốt cho các nhu cầu cơ bản
    * **GPU** phục vụ các nhu cầu cần hiệu suất cao (High performance computing), Machine Learning,…
  * **Image:** Chọn OS chính phù hợp với nhu cầu. Mỗi nhóm OS sẽ gồm các phiên bản khác nhau. Mặc định là phiên bản mới nhất.Người dùng có thể tùy biến theo nhu cầu bằng cách upload các file iso của mình hoặc tạo máy ảo từ những template đã khởi tạo

  * **Resource type**: Mỗi dòng máy sẽ cấu hình CPU, RAM khác nhau, hoặc người dùng có thể tự tạo một cấu hình tùy chọn.

  * **Storage**: Storage gắn vào máy ảo gồm:

    * **Storage Policy**: Loại Storage

    * **Size**: Kích thước Storage

  * **Instance group**: Người dùng có thể tùy chọn Instance group để cấu hình về vị trí đặt máy ảo trên host vật lý.

  * **Subnet & Private IP**: Người dùng lựa chọn network để đảm bảo rằng máy ảo có kết nối đến các tài nguyên và dịch vụ mạng cần thiết cho hoạt động của nó. Điều này cho phép máy ảo giao tiếp với các thiết bị khác trên mạng và truy cập vào các tài nguyên bên ngoài như internet. Người dùng có thể nhập địa chỉ IP private cho máy ảo hoặc hệ thống sẽ tự sinh ra theo subnet đã lựa chọn (nếu để trống trường này)

  * **Security Group**: Người dùng lựa chọn security group để kiểm soát traffic ra vào máy ảo. Người dùng có thể để trống trường này và cấu hình sau.

  * **Tên instance**: Nhập tên máy ảo sao cho dễ quản lý nhất. Đây cũng sẽ là tên host name của máy ảo sau này.

  * **Authentication type**: **Standard** (Username/Password) hoặc **SSH key**.

    * Nếu chọn SSH Key, hệ thống sẽ chọn SSH key mới nhất (có thể thay đổi).

    * Nếu sử dụng phương thức Standard, người dùng cần lưu ý ghi nhớ và bảo mật mật khẩu ở nơi an toàn.

  * **User data**: Nơi chứa [**cloud-init script**](<https://cloudinit.readthedocs.io/en/latest/reference/examples.html>). Khi máy ảo khởi động, cloud-init sẽ đọc các metadata được cung cấp từ cloud, và khởi tạo hệ thống dựa trên chúng. Cloud-init thường được dùng với mục đích setup network, storage, SSH keys, và nhiều phần khác của hệ thống. Lưu ý: Nếu máy ảo khởi tạo bằng hệ điều hành window, cần reboot lại để khởi chạy các script từ cloud-init.


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

**Lưu ý với window sẽ sử dụng script dạng Cloud base init. Script mẫu:**
[code]
    Copy#cloud-config
    users:
    - name: testcloudinit
      primary_group: Administrators
      groups: Administrators
      passwd: abc@123Abc123
[/code]

![](images/tutorials-khoi-tao-mot-may-ao-moi/img-002.png) ![](images/tutorials-khoi-tao-mot-may-ao-moi/img-003.png) ![](images/tutorials-khoi-tao-mot-may-ao-moi/img-004.png) ![](images/tutorials-khoi-tao-mot-may-ao-moi/img-005.png)

**Bước 3**: Nhấn chọn **Create Instance** để thực hiện khởi tạo máy ảo. Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên và tiến hành quá trình khởi tạo máy ảo mới dựa vào cấu hình đã chọn.

![](images/tutorials-khoi-tao-mot-may-ao-moi/img-006.png)

Sau khi khởi tạo thành công, người dùng có thể thấy máy ảo mới tạo và kiểm tra thông tin trên bảng quản trị. Mỗi máy ảo sẽ được hiển thị thông tin đầy đủ về tên, cấu hình (Ram, CPU, Storage), địa chỉ IP address, trạng thái hoạt động (Tắt/Bật/Suspended) trên bảng.

![](images/tutorials-khoi-tao-mot-may-ao-moi/img-007.png)

## Lưu ý khi tạo máy ảo từ file ISO.
Hiện tại hệ thống Unify Portal hỗ trợ khách hàng tạo máy ảo từ file ISO

**1) Các lưu ý khi tạo máy ảo từ file ISO**

  * Khi tạo máy ảo từ file ISO, hệ thống sẽ tự động tạo thêm một ổ đĩa để boot cho ổ Root, không xóa ổ đĩa này khi đang tạo máy ảo.

  * Khách hàng cần để trống dung lượng ổ đĩa tối thiểu bằng hoặc lớn hơn dung lượng file ISO, hệ thống sẽ làm tròn đến hàng đơn vị (Ví dụ: file 0.5 GB -> cần 1GB, file 1.5 GB -> cần 2 GB, file 2 GB cần tối thiểu 2 GB)


**Lưu ý: Xóa ổ đĩa tạm sau khi tạo máy từ file ISO**

  * Người dùng xóa ổ đĩa boot sau khi đã tạo máy thành công. (cần Un-mount ổ đĩa khỏi máy ảo trước khi xóa)


**2) Hỗ trợ tính năng sử dụng disk bus SATA cho ổ Root**

  * Hệ thống mặc định sử dụng disk bus Virtio cho ổ Root. Tuy nhiên, đối với một số file ISO cũ không được Virtio hỗ trợ, người dùng cần chuyển sang chế độ SATA bằng cách chọn vào ô checkbox tương ứng.

  * Lưu ý rằng việc sử dụng disk bus SATA có thể làm giảm hiệu suất của ổ đĩa, vì vậy chỉ nên sử dụng tính năng này khi file ISO của bạn không tương thích với Virtio. Vui lòng tham khảo hướng dẫn từ nhà sản xuất để chọn chế độ phù hợp.


![](images/tutorials-khoi-tao-mot-may-ao-moi/img-008.png)
