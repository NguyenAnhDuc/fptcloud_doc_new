---
id: "profile-ssh-key"
title: "Quản lý Profile SSH Key"
sidebar_label: "Quản lý Profile SSH Key"
sidebar_position: 5
---

# Quản lý Profile SSH Key


### 1\. Tạo/Import Profile SSH Key
**Bước 1:** Ở menu chọn **Compute Engine** > **SSH Management**. Chọn **Import SSH key.**

![file](/img/migrated/docs-vi-cloud-server/profile-ssh-key/img-001.png)

**Bước 2:** Nhập các thông tin cần thiết để tạo SSH Key:

  * **Name:** Tên SSH Key.
  * **Public Key**: Public Key để hệ thống gen ra Private Key. Nếu bạn đã có sẵn Public key, hãy nhập vào ô Public key. Nếu chưa có, hãy chọn **Generate new key pair**. Hệ thống sẽ tự tạo ngẫu nhiên cho người dùng một **Public key** hợp lệ.


Các định dạng SSH key hiện tại hỗ trợ: ‘ssh-rsa, ecdsa-sha2-nistp256’, ‘ecdsa-sha2-nistp384’, ‘ecdsa-sha2-nistp521’, ‘ssh-ed25519’.

**Bước 3:** Khi đã đầy đủ thông tin, chọn **Save**. Hệ thống sẽ tiến hành tạo cặp **SSH Key** và tự động download file key về máy với định dạng **< >.pem**.

**Lưu ý:** File Private key **< >.pem** chỉ được cung cấp 1 lần duy nhất ở bước 5. Người dùng cần lưu trữ ở nơi an toàn tránh việc bị mất quyền truy cập vào máy chủ.

### 2\. Xem thông tin chi tiết Profile SSH Key
Người dùng có thể xem lại toàn bộ **Profile SSH Key** đã tạo trong **VPC** tại mục **Manage SSH Key Profiles.**

![Userguide FPT Cloud Server 2022 80](/img/migrated/docs-vi-cloud-server/profile-ssh-key/img-002.png)

Khi người dùng chọn một **Profile SSH Key** cụ thể, hệ thống sẽ hiển thị **Name**, **Public Key.**

![file](/img/migrated/docs-vi-cloud-server/profile-ssh-key/img-003.png)

### 3\. Xóa Profile SSH Key
Nếu muốn xóa **Profile SSH Key** khỏi **Manage SSH Key Profiles**, người dùng thực hiện thao tác sau:

**Bước 1:** Chọn **Profile SSH Key** cần xóa, mở popup **Detail**.

![Userguide FPT Cloud Server 2022 82](/img/migrated/docs-vi-cloud-server/profile-ssh-key/img-004.png)

**Bước 2:** Chọn icon **Xóa**. Hệ thống sẽ ngay lập tức xóa **Profile SSH Key** và thông báo kết quả xử lý.

![file](/img/migrated/docs-vi-cloud-server/profile-ssh-key/img-005.png)

**Lưu ý:** Đây là thao tác xóa **Profile SSH Key** khỏi **Manage SSH Key Profiles.** Các máy ảo đã tạo bằng **SSH key** này không bị ảnh hưởng. Người dùng vẫn có thể sử dụng file **Private Key** đã tải về trước đó để kết nối vào máy ảo.
