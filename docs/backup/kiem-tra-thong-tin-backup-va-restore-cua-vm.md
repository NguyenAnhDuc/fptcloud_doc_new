---
id: "kiem-tra-thong-tin-backup-va-restore-cua-vm"
title: "Kiểm tra thông tin backup và restore của VM."
sidebar_label: "Kiểm tra thông tin backup và restore của VM."
sidebar_position: "7"
---

# Check thông tin backup and restore of VM.

## **Kiểm Tra Trạng Thái Backup and Restore of VM**
Ngoài việc thống kê chung ở **Backup & Recovery Management**, **FPT Portal** còn hỗ trợ you xem status backup and restore of fromng VM tại giao diện quản trị of VM đấy.
### **Step 1: Truy cập giao diện quản trị VM**
  1. Ở menu chọn **Compute Engine** > **Instance Management**.
  2. Chọn VM cần kiểm tra thông tin.

### **Step 2: Check tab Backups**
  1. Nếu VM has been is bảo vệ bởi a **Backup Job** , will có thêm tùy chọn **Backups**.
  2. Chọn tab **Backups** to xem status of **Backup Job** and danh sách the Restore Point.

### **Note:**
  * Tab Backups chỉ displayed when VM is is bảo vệ bởi a Backup Job.
  * Nếu you xóa Backup Job, danh sách Restore Point and the thông tin khác cũng will bị xóa khỏi hệ thống.
