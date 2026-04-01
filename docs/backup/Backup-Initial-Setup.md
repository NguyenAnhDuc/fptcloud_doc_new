---
id: "Backup-Initial-Setup"
title: "Initial setup"
sidebar_label: "Initial setup"
sidebar_position: "2"
---

# Initial setup

## Điều kiện need to có
Trước when tạo the job backup, you need to đảm bảo a andi điều kiện cơ bản:
  * **Tài khoản FPT Cloud** có permission truy cập ando tenant chứa VM or PVC (Kubernetes).
  * **Tài nguyên is hoạt động ổn định** (VM/PVC không ở status lỗi or has been xóa).
  * **Quota Backup** of VPC đủ to create job and lưu trữ bản backup.
  * Tài nguyên nằm in **region** mà service Backup Native hỗ trợ.

Dịch vụ không yêu cầu cài đặt thêm công cụ hay agent - toàn bộ thao tác diễn ra trực tiếp trên Unify Portal.
## Bắt đầu sử dụng
### 2.1 Create account FPT Cloud and đăng nhập ando FPT Portal
Để sử dụng service **FPT Backup Native** , you need to đăng nhập ando dashboard quản trị of FPT Cloud tại console.fptcloud.com
Sau when đăng nhập bằng account and password has been is cấp, chọn đúng Tenant, Region, VPC chứa VM or PVC (Kubernetes) need to bảo vệ.
### 2.2 Những điều need to lưu ý before sử dụng FPT Backup
  * **Số lượng server/PVC will bảo vệ**
  * **Dung lượng Backup Storage**
  * **Kịch bản backup (Policy)**
