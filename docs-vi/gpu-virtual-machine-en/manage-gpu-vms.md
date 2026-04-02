---
id: "manage-gpu-vms"
title: "Manage Gpu Vms"
description: "Manage Gpu Vms trên GPU Virtual Machine."
sidebar_label: "Manage Gpu Vms"
sidebar_position: 12
---

# Manage Gpu Vms

### Tắt nguồn (Power Off)
**1.** Mở trang **Instance Management**.
**2.** Tìm **GPU VM** bạn muốn tắt và nhấp biểu tượng **3 chấm**.
**3.** Chọn hành động **"Power off"**.

### Bật nguồn (Power On)
**1.** Mở trang **Instance Management**.
**2.** Tìm **GPU VM** bạn muốn bật và nhấp biểu tượng **3 chấm**.
**3.** Chọn hành động **"Power on"**.

### Khởi động lại (Reboot)
Lưu ý: Chức năng reboot thực hiện **hard reboot**, điều này có thể dẫn đến **mất dữ liệu**, **phần mềm bị hỏng** hoặc các vấn đề tiềm ẩn khác.

**1.** Mở trang **Instance Management**.
**2.** Tìm **GPU VM** bạn muốn khởi động lại và nhấp biểu tượng **3 chấm**.
**3.** Chọn hành động **"Reboot"**.

### Đổi tên (Rename)
**1.** Mở trang **Instance Management**.
**2.** Tìm **GPU VM** bạn muốn đổi tên và nhấp biểu tượng **3 chấm**.
**3.** Chọn hành động **"Rename"**.
**4.** Đổi tên VM của bạn và nhấp **"Rename instance"**.

### Đặt lại mật khẩu (Reset Password)
**1.** Mở trang **Instance Management**.
**2.** Tìm **GPU VM** bạn muốn đặt lại mật khẩu và nhấp biểu tượng **3 chấm**.
**3.** Chọn hành động **"Reset password"** và một email với mật khẩu mới sẽ được gửi đến địa chỉ email đã đăng ký của bạn.

### Khóa GPU VM
Bạn có thể khóa máy ảo để ngăn nó bị xóa, giúp tránh **xóa nhầm** VM đang hoạt động thay vì máy test. Tính năng này giảm thiểu rủi ro lỗi người dùng và bảo vệ dữ liệu người dùng trên máy ảo. Để khóa VM, hãy thực hiện các bước sau:

**1.** Mở trang **Instance Management**.
**2.** Tìm **GPU VM** bạn muốn khóa và nhấp biểu tượng **3 chấm**.
**3.** Chọn hành động **"Lock"**.
**4.** Một hộp thoại cảnh báo sẽ xuất hiện, hiển thị tên VM và yêu cầu xác nhận. Nhấp **Lock Instance Deletion** để tiến hành khóa. Sau khi khóa, hệ thống sẽ ngăn VM bị xóa cho đến khi nó được mở khóa.

### Mở khóa GPU VM
Để xóa máy ảo, bạn phải mở khóa nó trước.

**1.** Trong menu, chọn **Instance Management**, sau đó trong **Actions**, nhấp **Unlock Deletion**.
**2.** Một hộp thoại cảnh báo sẽ xuất hiện, hiển thị tên VM và yêu cầu xác nhận. Nhấp **Unlock Instance Deletion** để mở khóa VM. Sau khi mở khóa, hệ thống sẽ cho phép VM bị xóa như bình thường.

### Xóa GPU VM
Lưu ý: Xóa máy ảo **xóa vĩnh viễn tất cả dữ liệu**, và hành động này **không thể hoàn tác**. Hãy đảm bảo **sao lưu mọi dữ liệu quan trọng** trước khi tiến hành.

**1.** Mở trang **Instance Management**.
**2.** Tìm **GPU VM** bạn muốn xóa và nhấp biểu tượng **3 chấm**.
**3.** Xác nhận bằng cách nhập **"delete"** vào trường văn bản và nhấp **"Delete instance"**.
