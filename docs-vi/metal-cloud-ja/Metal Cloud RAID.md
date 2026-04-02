---
id: "Metal Cloud RAID"
title: "Định nghĩa RAID"
description: "RAID (Redundant Array of Independent Disks) là phương pháp cấu hình các ổ đĩa thành viên để tạo hệ thống có tính sẵn sàng cao và hiệu năng cao"
sidebar_label: "Định nghĩa RAID"
sidebar_position: 6
---

# Định nghĩa RAID

RAID (Redundant Array of Independent Disks) là phương pháp cấu hình các ổ đĩa thành viên để tạo hệ thống có tính sẵn sàng cao và hiệu năng cao. Các cấp độ RAID cung cấp mức độ dự phòng và hiệu năng khác nhau, đồng thời xác định số lượng thành viên trong mảng.

# Các cấp độ RAID

Cấp độ RAID xác định mối quan hệ giữa các ổ đĩa.

| Cấp độ | Mô tả | Số ổ đĩa | Dung lượng mảng ước tính | Dự phòng* |
| --- | --- | --- | --- | --- |
| RAID 0 | RAID 0 kết hợp 2 hoặc nhiều ổ đĩa bằng cách phân tán dữ liệu. Các chunk dữ liệu được ghi luân phiên vào từng ổ đĩa trong mảng. | 1 - 8 | Số ổ đĩa × dung lượng ổ đĩa | Không có |
| RAID 1 | RAID 1 là cấu hình sao chép dữ liệu giữa 2 hoặc nhiều ổ đĩa. Tất cả dữ liệu ghi vào mảng đều được đặt trên từng thiết bị trong nhóm, do đó mỗi ổ đĩa chứa toàn bộ tập dữ liệu khả dụng. | 2 | Dung lượng ổ đĩa | 1 |

*Dự phòng là số lỗi ổ đĩa mà mảng có thể chịu đựng. Trong một số trường hợp, mảng có thể chịu đựng hơn một lỗi ổ đĩa.
