---
id: "access-to-servers"
title: "Access To Servers"
description: "Access To Servers trên GPU Virtual Machine."
sidebar_label: "Access To Servers"
sidebar_position: 11
---

# Access To Servers

Khi **GPU VM chạy Ubuntu** được tạo thành công trên **FPT Portal**, bạn có thể truy cập theo mặc định thông qua **Web Console** tích hợp sẵn.
Ngoài ra, bạn có thể kết nối từ bên ngoài bằng **SSH client** hoặc phần mềm bên thứ ba như **PuTTY** hoặc **Bitvise**.

### Kết nối GPU VM qua Web Console
**Web Console** cho phép bạn kiểm soát tất cả GPU VM trên FPT Cloud, kể cả những VM **không có Public IP**.

**Bước 1:** Trong **Side menu**, vào **Instance Management**, tìm máy ảo bạn muốn truy cập và trong phần **Actions**, chọn **Console**.
[![Alt text](/img/migrated/Access-to-GPU-VM-1-6478e3bb.png)](/img/migrated/Access-to-GPU-VM-1-6478e3bb.png)

**Bước 2:** Trình duyệt sẽ ngay lập tức mở một cửa sổ mới hiển thị màn hình máy chủ, cho phép bạn toàn quyền kiểm soát và tương tác với máy chủ đã kết nối.
[![Alt text](/img/migrated/Access-to-GPU-VM-2-6c85c68d.png)](/img/migrated/Access-to-GPU-VM-2-6c85c68d.png)

### Kết nối GPU VM qua SSH
Bạn có thể kết nối với **GPU VM** bằng **SSH client**, thường từ một terminal.
Để làm vậy, bạn cần có ba thông tin sau:
  * **Địa chỉ IP công cộng:** Sau khi GPU VM được tạo và được cấp phát IP công cộng, nó sẽ hiển thị trong danh sách GPU VM hoặc trang chi tiết GPU VM.
  * **Tên người dùng:** Tên người dùng mặc định trên máy chủ trong lần tạo ban đầu là **root**.
  * **Phương thức xác thực** cho người dùng đó. Nếu bạn đã thêm **SSH key** vào GPU VM, bạn có thể kết nối bằng các key đó, điều này chúng tôi khuyến nghị mạnh mẽ vì độ bảo mật cao hơn. Nếu không, nếu bạn sử dụng xác thực bằng mật khẩu, hãy dùng mật khẩu bạn đã chọn.

Sau khi có **địa chỉ IP công cộng**, **tên người dùng** và **mật khẩu hoặc SSH key** của GPU VM, hãy làm theo hướng dẫn bên dưới cho SSH client của bạn.

#### Bước 1: Mở Terminal
  * **Trên Linux/macOS:** Khởi chạy ứng dụng **Terminal**.
  * **Trên Windows:** Sử dụng **CMD**, **PowerShell**, **Git Bash** hoặc **WSL**.

#### Bước 2: Kết nối với VM
Bạn có thể kết nối với VM theo hai cách: sử dụng **mật khẩu** hoặc **SSH key (file .pem)**.

##### Phương pháp 1: Kết nối bằng mật khẩu
  1. Mở terminal hoặc command prompt.
  2. Nhập lệnh sau để kết nối với VM:

```
Copyssh <username>@<VM_IP>
```

##### Phương pháp 2: Kết nối bằng SSH Key (file .pem)
  1. Điều hướng đến thư mục chứa file **.pem** của bạn:

```
Copycd <path_to_pem_file_directory>
```

  2. Sử dụng SSH key để kết nối với VM:

```
Copyssh -i "<your_key_file.pem>" <username>@<VM_IP>
```

[![Alt text](/img/migrated/Access-to-GPU-VM-3-b474506d.png)](/img/migrated/Access-to-GPU-VM-3-b474506d.png)
  3. Trong lần kết nối đầu tiên, gõ **yes** để xác minh fingerprint của host và tiếp tục.
  4. Bạn đã kết nối thành công với máy chủ qua SSH. Gõ **exit** để đóng phiên SSH và quay lại shell cục bộ.

[![Alt text](/img/migrated/Access-to-GPU-VM-4-a942d841.png)](/img/migrated/Access-to-GPU-VM-4-a942d841.png)

Lưu ý:
Nếu bạn thấy lỗi: **WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!**, điều đó có nghĩa là fingerprint SSH đã lưu cho máy chủ đã thay đổi. Để khắc phục, hãy chạy lệnh sau để xóa fingerprint cũ:

```
Copyssh-keygen -R "<VM_IP>"
```
