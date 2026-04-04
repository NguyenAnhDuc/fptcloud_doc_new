---
id: "GPU-VM -インスタンス-の-作成"
title: "Tạo GPU VM Instance"
description: "Bước 1: Trên màn hình console, điều hướng đến Compute Engine > Instance Management và nhấp Create Instance."
sidebar_label: "Tạo GPU VM Instance"
sidebar_position: "6"
---

# Tạo GPU VM Instance

**Bước 1:** Trên màn hình console, điều hướng đến **Compute Engine** > **Instance Management** và nhấp **Create Instance**.

[![Alt text](/img/migrated/3-9c690a71.png)](/img/migrated/3-9c690a71.png)

**Bước 2:** Cấu hình máy ảo theo nhu cầu của bạn bằng các tùy chọn sau.

**A/ Thông tin cấu hình**

  * **Loại instance:** Chọn loại instance phù hợp nhất với yêu cầu của bạn. Hiện có hai loại chính: **General** và **GPU**.
    * **General:** Phù hợp cho các nhu cầu điện toán cơ bản.
    * **GPU:** Được thiết kế cho điện toán hiệu năng cao, **machine learning** và các tác vụ đòi hỏi cao khác.
  * **FPT Cloud Server** cung cấp nhiều **tùy chọn GPU** để đáp ứng các nhu cầu khác nhau. Trong phần này, bạn có thể chọn **NVIDIA H100 SXM5** hoặc **NVIDIA H200 SXM**.

[![Alt text](/img/migrated/1-3-581d480d.png)](/img/migrated/1-3-581d480d.png)

**B/ Image:** Chọn hệ điều hành (OS) phù hợp với nhu cầu của bạn.
Đối với cấu hình GPU, hãy chọn OS tương thích với thiết lập máy ảo.

[![Alt text](/img/migrated/5-3ed4d4a1.png)](/img/migrated/5-3ed4d4a1.png)

**C/ Loại tài nguyên:** Mỗi GPU Virtual Machine đi kèm cấu hình khác nhau về **vCPU, RAM và số lượng GPU được gắn kèm**.
Chọn cấu hình phù hợp nhất với nhu cầu của bạn.

[![Alt text](/img/migrated/6-c6b90c3c.png)](/img/migrated/6-c6b90c3c.png)

**D/ Thông tin disk storage**

  * **Storage:** Các tùy chọn storage được gắn vào máy ảo như sau.
  * **Storage policy:** Xác định loại storage. Theo mặc định, **GPU Virtual Machine chỉ hỗ trợ NVMe-SSD**.
  * **Kích thước:** Kích thước storage được **tự động thiết lập dựa trên loại tài nguyên đã chọn**.

[![Alt text](/img/migrated/7-b1e0633b.png)](/img/migrated/7-b1e0633b.png)

**E/ Thông tin mạng**
Bao gồm Subnet và các cài đặt nâng cao như **Private IP, Floating IP và Security Group**.

  * **Subnet và Private IP:** Chọn mạng phù hợp để đảm bảo máy ảo có thể kết nối với các tài nguyên và dịch vụ cần thiết. Điều này cho phép VM giao tiếp với các thiết bị khác trên mạng và truy cập các tài nguyên bên ngoài như internet. Bạn có thể nhập **Private IP** thủ công hoặc để hệ thống tự động gán dựa trên Subnet đã chọn.
  * **Floating IP:** Đối với GPU Virtual Machine, **Floating IP** được cấu hình sau khi VM được tạo thành công. Theo mặc định, cài đặt này không thể được cấu hình tại thời điểm tạo.
  * **Security Group:** Bạn có thể gán **Security Group** để kiểm soát lưu lượng inbound và outbound cho máy ảo. Trường này có thể để trống và cấu hình sau khi cần.

[![Alt text](/img/migrated/2-3-27e2f9a8.png)](/img/migrated/2-3-27e2f9a8.png)

**F/ Thông tin xác thực**
Chọn **SSH Key** hoặc **Password** làm phương thức xác thực.

  * Nếu bạn chọn **SSH Key**, hệ thống tự động sử dụng SSH key mới nhất (có thể thay đổi).

[![Alt text](/img/migrated/3-3-8c3590ef.png)](/img/migrated/3-3-8c3590ef.png)

  * Nếu bạn sử dụng phương thức xác thực **Password**, bạn phải ghi nhớ mật khẩu và lưu trữ ở nơi an toàn.

[![Alt text](/img/migrated/10-ec8c6078.png)](/img/migrated/10-ec8c6078.png)

**G/ Cài đặt nâng cao**

[![Alt text](/img/migrated/11-eed26672.png)](/img/migrated/11-eed26672.png)

  * **Tag:** Chọn các tag đã tạo trước đó để giúp quản lý và phân loại tài nguyên.
  * **User data:** Trường này lưu trữ **cloud-init script**. Khi máy ảo khởi động, **cloud-init** đọc metadata từ đám mây và cấu hình hệ thống tương ứng. Thường được dùng để thiết lập **networking, storage, SSH key và các cài đặt hệ thống khác**.

**Ví dụ cloud-init script:** Với script được cung cấp, hệ thống tự động tạo người dùng **"testcloudinit"** với mật khẩu **"Abc123"**. Người dùng thứ hai **"testcloudinit2"** được tạo với mật khẩu **"P@ssw0rd!"**.

```yaml
# cloud-config
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
  plain_text_passwd: P@ssw0rd!
- hostname: testcloudinit
```

**Bước 3: Tạo GPU Virtual Machine.**
Nhấp **Create Instance** để bắt đầu quá trình tạo máy ảo. Hệ thống xác minh các tài nguyên khả dụng và tiến hành tạo máy ảo mới dựa trên cấu hình đã chọn.

Khi instance được tạo thành công, bạn có thể xem máy ảo mới tạo và kiểm tra thông tin chi tiết trong dashboard **Instance Management**. Mỗi VM hiển thị đầy đủ thông tin bao gồm **tên, cấu hình và trạng thái hiện tại**.
