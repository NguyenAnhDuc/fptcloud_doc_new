---
id: "quick-start"
title: "Quick Start"
description: "**Step 1: Create an FPT Cloud account**"
sidebar_label: "Quick Start"
sidebar_position: 3
---

# Quick Start

### Đăng ký tài khoản
**Bước 1: Tạo tài khoản FPT Cloud**
  * Truy cập <https://fptcloud.com/>, nhấp **Sign Up** và làm theo hướng dẫn của hệ thống để nhập thông tin của bạn.
  * Đội ngũ hỗ trợ của chúng tôi sẽ liên hệ với bạn sớm để xác minh thông tin và kích hoạt tài khoản.

**Bước 2: Đăng nhập vào FPT Portal**
  * Truy cập <https://console.fptcloud.com> hoặc <https://console.fptcloud.jp> và đăng nhập bằng **tài khoản và mật khẩu FPT Cloud** của bạn, tùy thuộc vào nơi quota đã được cấp phát. Hãy đảm bảo chọn đúng **Tenant** và **Region**.
  * **Thiết lập SSH key:** Điều hướng đến **SSH Management** để tạo SSH key. Key này sẽ được sử dụng để truy cập bảo mật vào các máy chủ của bạn.

### Hướng dẫn từng bước
#### Bước 1: Tạo Subnet
Cần có Subnet trước khi triển khai GPU VM của bạn.
  1. Trong menu bên trái, vào **Network → Subnets.**
  2. Nhấp **Create Subnet** và hoàn thành cấu hình.

Xem hướng dẫn chi tiết [tại đây](../gpu-virtual-machine-en/index.md)

#### Bước 2: Tạo GPU VM
  1. Trong menu bên, vào **Compute Engine → Instance Management.**
  2. Nhấp **Create Instance** và cấu hình triển khai máy ảo.
     * **Chọn loại Instance:** Các Instance _H100_ có sẵn trên trang _.com_ và các Instance _H200_ có sẵn trên trang _.jp_.
     * **Chọn loại disk:**
       * **Ephemeral Disk (NVMe):** Disk storage được gói kèm với Instance và không thể thay đổi kích thước.
       * **Persistent Disk (Block Storage SSD):** Yêu cầu một disk storage, với kích thước tối thiểu là **100 GB.**

Xem hướng dẫn chi tiết [tại đây](../gpu-virtual-machine-en/index.md).

#### Bước 3: Cấp phát địa chỉ IP công cộng (Floating IP)
  1. Trong menu bên trái, vào **Network → Floating IPs.**
  2. Nhấp **Allocate IP Address** và gán IP cho VM của bạn.
     * _Ephemeral Disk (NVMe):_ Sử dụng **port forwarding (NAT)** để kết nối Floating IP với VM. Bạn cần chỉ định cả **IP port** và **Instance port.**

Xem hướng dẫn chi tiết [tại đây](../gpu-virtual-machine-en/index.md).

#### Bước 4: Tạo Security Group
Theo mặc định, **Default Security Group** cho phép tất cả lưu lượng outbound. Bạn cần tạo mới để cho phép inbound rules truy cập VM.
  1. Nhấp **Network** và chọn **Security Groups** trong menu bên.
  2. Chọn **Create Security Group** trong màn hình Security Groups và xác định inbound rules cho VM (ví dụ: **Cho phép SSH truy cập trên port 22** từ IP công cộng của client của bạn).

Xem hướng dẫn chi tiết [tại đây](../gpu-virtual-machine-en/index.md).

#### Bước 5: Truy cập GPU Virtual Machine
Sau khi tạo GPU VM thành công, bạn có thể truy cập máy chủ qua **SSH**:
  * **Terminal:** Mở terminal của bạn và nhập lệnh với SSH key của bạn.
  * **Web Console:** Vào trang chi tiết của máy chủ và nhấp **"Open at Console"** để đăng nhập bằng mật khẩu qua web console.

> 💡 _Tên người dùng mặc định là **root.**_

Xem hướng dẫn chi tiết [tại đây](../gpu-virtual-machine-en/index.md).
