---
id: "Backup-Initial-Setup"
title: "初期設定"
sidebar_label: "初期設定"
sidebar_position: "2"
---

# Thiết lập ban đầu

## Điều kiện cần có
Trước khi tạo các job sao lưu, bạn cần đảm bảo một vài điều kiện cơ bản:
  * **Tài khoản FPT Cloud** có quyền truy cập vào tenant chứa VM hoặc PVC (Kubernetes).
  * **Tài nguyên đang hoạt động ổn định** (VM/PVC không ở trạng thái lỗi hoặc đã xóa).
  * **Quota Backup** của VPC đủ để tạo job và lưu trữ bản backup.
  * Tài nguyên nằm trong **region** mà dịch vụ Backup Native hỗ trợ.

Dịch vụ không yêu cầu cài đặt thêm công cụ hay agent - toàn bộ thao tác diễn ra trực tiếp trên Unify Portal.
## Bắt đầu sử dụng
### 2.1 Tạo tài khoản FPT Cloud và đăng nhập vào FPT Portal
Để sử dụng dịch vụ **FPT Backup Native** , bạn cần đăng nhập vào dashboard quản trị của FPT Cloud tại console.fptcloud.com
Sau khi đăng nhập bằng tài khoản và mật khẩu đã được cấp, chọn đúng Tenant, Region, VPC chứa VM hoặc PVC (Kubernetes) cần bảo vệ.
### 2.2 Những điều cần lưu ý trước khi sử dụng FPT Backup
  * **Số lượng máy chủ/PVC sẽ bảo vệ**
  * **Dung lượng Backup Storage**
  * **Kịch bản backup (Policy)**
