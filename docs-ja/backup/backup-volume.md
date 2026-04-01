---
id: "backup-volume"
title: "1. Giới thiệu"
sidebar_label: "1. Giới thiệu"
sidebar_position: "9"
---

# 1. 紹介

## 紹介
Tính năng **Backup Volume** cho phép người dùng tạo bản sao lưu cho các volume trong VPC trên Unify Portal.
Backup đảm bảo dữ liệu luôn có bản dự phòng và có thể khôi phục khi xảy ra sự cố.
## Điều kiện
  * Đã đăng nhập vào **Unify Portal**.
  * Dịch vụ **Backup** cho VPC đang ở trạng thái **Enable**.
  * Tài khoản có quyền `OspNativeBackup:Create`.
  * Volume cần backup chưa thuộc job khác (volume chỉ có thể nằm trong một job tại một thời điểm).

## Tạo Backup Volume
### ステップ1: Mở giao diện Backup & Recovery
Nhấn nút **Create Backup Job**.
### ステップ2: Nhập thông tin cơ bản
Trên form **Create Backup Job** , điền các trường sau:
  1. **Job Name** (_bắt buộc_): 
     * Tên job ( không được trùng trong VPC).
     * Tối đa 26 ký tự, chỉ chứa chữ, số, dấu .
  2. **Job Type** : chọn **Backup Volume**.
  3. **Description** (_tùy chọn_): mô tả ngắn về job.
  4. **Target Selection** : chọn các volume cần backup (volume hợp lệ sẽ bắt đầu bằng prefix `pv-fke`).

### ステップ3: Cấu hình Backup
  * **Backup Option** (chọn một): 
    * **Daily full backup** : tạo bản full mỗi ngày.
    * **Daily incremental + Weekly active full** : incremental hàng ngày, full theo ngày cố định trong tuần.
    * **Daily incremental + Monthly active full** : incremental hàng ngày, full theo ngày cố định trong tháng.
  * **Start Time** : thời gian chạy trong ngày (00:00–23:59).
  * **Full Backup At** : (chỉ bật khi chọn Weekly/Monthly active full) → chọn ngày chạy full.
  * **Latest Backup to Keep** : số bản backup giữ lại (1–1000).
  * **Notification Email** : thêm email nhận thông báo trạng thái job (thành công/thất bại).

### ステップ4: Tạo job
  * **Create**.
  * Hệ thống hiển thị thông báo: 
    * Thành công: _The job [JobName] has been created successfully._
    * Lỗi: hiển thị chi tiết (ví dụ: job name trùng, volume không hợp lệ, hệ thống bận...).

## Quản lý Backup Job
  * Vào **Backup Jobs** để theo dõi danh sách.
  * Trạng thái job sẽ được cập nhật tự động.
  * Có thể chỉnh sửa cấu hình retention, email notification.

## Lưu ý quan trọng
  * Một volume chỉ có thể thuộc **một backup job**.
  * Job name phải duy nhất trong VPC.
  * Nên đặt lịch backup ngoài giờ cao điểm để tránh ảnh hưởng hiệu năng.
  * Backup chỉ giữ lại số bản theo cấu hình retention, các bản cũ hơn sẽ tự xóa.
