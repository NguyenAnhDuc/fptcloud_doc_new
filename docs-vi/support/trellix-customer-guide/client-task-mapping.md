---
id: "client-task-mapping"
title: "Quản lý client tasks"
description: "Xem và quản lý các tác vụ được lên lịch tự động chạy trên máy chủ đã cài đặt Trellix agent."
sidebar_label: "Quản lý client tasks"
sidebar_position: 5
---

# Quản lý client tasks

Client tasks là các tác vụ được lên lịch tự động để duy trì bảo mật trên từng máy chủ, bao gồm cập nhật signature, nâng cấp agent và quét mã độc. Hiểu rõ các task này giúp bạn kiểm soát được tình trạng bảo mật của hệ thống.

1. Trong giao diện quản trị, chọn **System Tree** > **Group** > **Assigned Client Task**.

   [![Giao diện Assigned Client Task trong System Tree](/img/migrated/image-1765765586369-189ffc4d.png)](/img/migrated/image-1765765586369-189ffc4d.png)

2. Danh sách các tác vụ đang được lên lịch và chạy trên các máy chủ đã cài đặt agent thành công hiển thị.

   [![Danh sách client tasks được lên lịch trong Trellix](/img/migrated/image-1765765604165-da57bd94.png)](/img/migrated/image-1765765604165-da57bd94.png)

   | Task | Mô tả | Tần suất |
   |---|---|---|
   | Update AMCore Content Package | Cập nhật signature mới nhất | Hàng ngày |
   | Upgrade Agent – Linux | Nâng cấp agent lên phiên bản mới nhất trên Linux | Hàng tuần |
   | Upgrade Agent – Windows | Nâng cấp agent lên phiên bản mới nhất trên Windows/Windows Server | Hàng tuần |
   | Customer – Full Scan | Quét toàn bộ máy chủ để phát hiện mã độc | Hàng tuần |
   | Upgrade Endpoint Security – Linux | Nâng cấp ENS lên phiên bản mới nhất trên Linux | Hàng tháng |
   | Upgrade Endpoint Security – Windows | Nâng cấp ENS lên phiên bản mới nhất trên Windows/Windows Server | Hàng tháng |
   | Linux/Windows Endpoint Security Deploy | Cài đặt Endpoint Security ngay khi agent kết nối thành công với server | Ngay lập tức |
