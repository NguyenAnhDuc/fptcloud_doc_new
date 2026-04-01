---
id: "backup-volume"
title: "1. Giới thiệu"
sidebar_label: "1. Giới thiệu"
sidebar_position: "9"
---

# 1. Giới thiệu

## Introduction
Tính năng **Backup Volume** for phép user tạo bản backup for the volume in VPC trên Unify Portal.
Backup đảm bảo dữ liệu luôn có bản dự phòng and can restore when xảy ra sự cố.
## Điều kiện
  * Đã đăng nhập ando **Unify Portal**.
  * Dịch vụ **Backup** for VPC is ở status **Enable**.
  * Tài khoản có permission `OspNativeBackup:Create`.
  * Volume need to backup chưa thuộc job khác (volume chỉ can nằm in a job tại a thời điểm).

## Create Backup Volume
### Step 1: Mở interface Backup & Recovery
Click the button **Create Backup Job**.
### Step 2: Enter the information cơ bản
Trên form **Create Backup Job** , điền the trường sau:
  1. **Job Name** (_bắt buộc_): 
     * Tên job ( không is trùng in VPC).
     * Tối đa 26 ký tự, chỉ chứa chữ, số, dấu .
  2. **Job Type** : chọn **Backup Volume**.
  3. **Description** (_tùy chọn_): mô tả ngắn về job.
  4. **Target Selection** : chọn the volume need to backup (volume hợp lệ will bắt đầu bằng prefix `pv-fke`).

### Step 3: Configure Backup
  * **Backup Option** (chọn a): 
    * **Daily full backup** : tạo bản full mỗi ngày.
    * **Daily incremental + Weekly active full** : incremental hàng ngày, full theo ngày cố định in tuần.
    * **Daily incremental + Monthly active full** : incremental hàng ngày, full theo ngày cố định in tháng.
  * **Start Time** : thời gian chạy in ngày (00:00–23:59).
  * **Full Backup At** : (chỉ bật when chọn Weekly/Monthly active full) → chọn ngày chạy full.
  * **Latest Backup to Keep** : số bản backup giữ lại (1–1000).
  * **Notification Email** : thêm email nhận notification status job (successfully/failed).

### Step 4: Create job
  * Click **Create**.
  * Hệ thống displayed notification: 
    * Thành công: _The job [JobName] has been created successfully._
    * Lỗi: displayed details (ví dụ: job name trùng, volume không hợp lệ, system bận...).

## Manage Backup Job
  * Vào **Backup Jobs** to theo dõi list.
  * Trạng thái job will is cập nhật tự động.
  * Có thể chỉnh sửa cấu hình retention, email notification.

## Save ý quan trọng
  * Một volume chỉ can thuộc **a backup job**.
  * Job name must duy nhất in VPC.
  * Nên đặt lịch backup ngoài giờ cao điểm to tránh ảnh hưởng hiệu năng.
  * Backup chỉ giữ lại số bản theo cấu hình retention, the bản cũ hơn will tự xóa.
