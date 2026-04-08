---
id: "create-a-gpu-vm"
title: "Create A Gpu Vm"
description: "Create A Gpu Vm trên GPU Virtual Machine."
sidebar_label: "Create A Gpu Vm"
sidebar_position: 14
---

# Create A Gpu Vm

### Tổng quan
**GPU Virtual Machine (VM)** là các máy ảo **dựa trên Linux** chạy trên **phần cứng ảo hóa** với **GPU cao cấp**. Mỗi VM bạn tạo là một máy chủ ảo mới mà bạn có thể sử dụng độc lập hoặc như một phần của cơ sở hạ tầng đám mây lớn hơn.

### Bước 1: Mở Instance Management
Trong menu bên, vào **Compute Engine > Instance Management**, sau đó nhấp **Create Instance**.

### Bước 2: Cấu hình Instance
[![Alt text](/img/migrated/Create-VM-1-e5ce2c58.png)](/img/migrated/Create-VM-1-e5ce2c58.png)
  1. **Instance Name:** Nhập tên duy nhất cho GPU VM của bạn.
  2. **Instance Type:** Chọn loại Instance. **GPU:** Được tối ưu hóa cho tính toán hiệu năng cao, machine learning và các tác vụ chuyên sâu khác.
     Các GPU hiện được hỗ trợ: **NVIDIA H100 SXM5** và **NVIDIA H200 SXM**.
  3. **Disk Type:** Chỉ có thể chọn một loại disk trong quá trình tạo GPU VM: **Ephemeral Disk (NVMe) hoặc Persistent Disk (Block Storage)**
  4. **Image:** Bạn có thể sử dụng **Ubuntu base image mặc định** hoặc **custom image của riêng bạn**.
     * **OS:** Hiện tại hỗ trợ **Ubuntu 22.04 GPU**.

[![Alt text](/img/migrated/Create-VM-2-14180065.png)](/img/migrated/Create-VM-2-14180065.png)
  * **Custom image:** Tải lên image của bạn trong **Custom Images** (loại file: **QCOW**). Sau đó nó sẽ xuất hiện trong danh sách chọn image.

[![Alt text](/img/migrated/Create-VM-3-7549716d.png)](/img/migrated/Create-VM-3-7549716d.png)
  5. **Resource Type:** Mỗi GPU VM cung cấp các cấu hình khác nhau cho **vCPU**, **RAM** và **số lượng GPU được gắn**. Bạn có thể chọn cấu hình phù hợp nhất với yêu cầu khối lượng công việc của mình.

[![Alt text](/img/migrated/Create-VM-4-37c83e6c.png)](/img/migrated/Create-VM-4-37c83e6c.png)

### Bước 3: Cấu hình Storage Disk
[![Alt text](/img/migrated/Create-VM-5-63fa6879.png)](/img/migrated/Create-VM-5-63fa6879.png)
  * **Storage Policy:** Chỉ định loại storage được sử dụng cho GPU VM.
    * GPU VM với **Ephemeral Disk (NVMe)** chỉ hỗ trợ **NVMe-SSD**.
    * GPU VM với **Persistent Disk** chỉ hỗ trợ **Premium SSD**, cung cấp **IOPS từ 3.000 đến 10.000** (tùy thuộc vào yêu cầu quota dịch vụ của bạn).
  * **Size:**
    * **Ephemeral Disk (NVMe):** Dung lượng cố định theo gói GPU Instance (phụ thuộc vào số lượng GPU được chọn).
    * **Persistent Disk:** Có thể mở rộng dựa trên yêu cầu storage của bạn, bắt đầu từ **100GB**.

### Bước 4: Cấu hình Network Settings
[![Alt text](/img/migrated/Create-VM-6-f8138d24.png)](/img/migrated/Create-VM-6-f8138d24.png)
  * **Subnet:** Chọn Subnet phù hợp để cho phép VM của bạn kết nối với các tài nguyên nội bộ và bên ngoài.
  * **Advanced Network:**
    * **Private IP:** Nhập IP riêng tư theo cách thủ công hoặc để hệ thống tự động gán dựa trên Subnet được chọn.
    * **Floating IP:** Đối với **Ephemeral Disk NVMe**, Floating IP chỉ được cấu hình **sau khi VM được tạo thành công**.
    * **Security Group:** Gán Security Group để quản lý lưu lượng inbound và outbound cho VM.

### Bước 5: Thiết lập phương thức xác thực
Chọn một trong các phương thức xác thực sau:
  * **SSH Key:** Hệ thống tự động sử dụng SSH key mới nhất của bạn (bạn có thể thay đổi nếu cần).
  * **Password:** Đặt mật khẩu và lưu trữ bảo mật để truy cập console.

[![Alt text](/img/migrated/Create-VM-7-34b41ab4.png)](/img/migrated/Create-VM-7-34b41ab4.png)

### Bước 6: Cài đặt nâng cao
[![Alt text](/img/migrated/Create-VM-8-eb39dba2.png)](/img/migrated/Create-VM-8-eb39dba2.png)

#### Backup Job
Chỉ có sẵn cho **GPU VM sử dụng Block Storage - Persistent Disk**. Bạn có thể lên lịch backup tự động và xác định tần suất và thời gian.

**Tùy chọn Backup:**
  * **Daily Full Backup:** Thực hiện full backup mỗi ngày.
  * **Daily Incremental, Weekly Active Full:** Thực hiện incremental backup hàng ngày với full backup một lần mỗi tuần.
  * **Daily Incremental, Monthly Active Full:** Thực hiện incremental backup hàng ngày với full backup một lần mỗi tháng.

**Backup Time:** Đặt thời gian cụ thể để backup chạy.

#### Tags
Gán các tag hiện có để giúp quản lý và phân loại tài nguyên của bạn.

#### User Data (Cloud-init Script)
Trường **User Data** cho phép bạn thêm **cloud-init script**.
Khi VM khởi động, cloud-init đọc metadata và tự động cấu hình hệ thống — bao gồm **người dùng**, **SSH key** và **cài đặt mạng**.

**Cloud-init Script mẫu:** Với script được cung cấp, hệ thống sẽ tự động tạo người dùng **"testcloudinit"** với mật khẩu **"Abc123"**. Một người dùng khác, **"testcloudinit2"**, sẽ được tạo với mật khẩu **"P@ssw0rd!"**

```
Copy# cloud-config
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

### Bước 7: Tạo Instance
Nhấp **Create Instance** để triển khai và khởi động GPU VM của bạn.
Sau khi Instance được tạo thành công, bạn có thể xem chi tiết của nó trong bảng điều khiển **Instance Management**.
