---
id: "kiem-tra-thong-tin-backup-va-restore-cua-vm"
title: "Kiểm tra thông tin backup và restore của VM."
description: "Ngoài việc thống kê chung ở **Backup & Recovery Management**, **FPT Portal** còn hỗ trợ bạn xem trạng thái backup và res"
sidebar_label: "Kiểm tra thông tin backup và restore của VM."
sidebar_position: 7
---

# Kiem Tra Thong Tin Backup Va Restore Cua Vm

## **Kiểm Tra Trạng Thái Backup và Restore của VM**
Ngoài việc thống kê chung ở **Backup & Recovery Management**, **FPT Portal** còn hỗ trợ bạn xem trạng thái backup và restore của từng VM tại giao diện quản trị của VM đấy.
### **Bước 1: Truy cập giao diện quản trị VM**
  1. Ở menu chọn **Compute Engine** > **Instance Management**.
  2. Chọn VM cần kiểm tra thông tin.

### **Bước 2: Kiểm tra tab Backups**
  1. Nếu VM đã được bảo vệ bởi một **Backup Job** , sẽ có thêm tùy chọn **Backups**.
  2. Chọn tab **Backups** để xem trạng thái của **Backup Job** và danh sách các Restore Point.

### **Lưu ý:**
  * Tab Backups chỉ hiển thị khi VM đang được bảo vệ bởi một Backup Job.
  * Nếu bạn xóa Backup Job, danh sách Restore Point và các thông tin khác cũng sẽ bị xóa khỏi hệ thống.