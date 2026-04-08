---
id: "Viewing Logs"
title: "Xem nhật ký (log)"
description: "Xem các security events và threat logs từ tất cả máy chủ hoặc từng máy chủ cụ thể trong hệ thống Trellix."
sidebar_label: "Xem nhật ký (log)"
sidebar_position: 4
pagination_next: null
---

# Xem nhật ký (log)

Nhật ký bảo mật ghi lại toàn bộ các sự kiện phát hiện mã độc, exploit và hoạt động đáng ngờ trên các máy chủ được bảo vệ. Xem log thường xuyên giúp phát hiện sớm các mối đe dọa và phản ứng kịp thời.

## Xem log toàn hệ thống

1. Trong giao diện quản trị, chọn **Threat Event Log** từ thanh menu.

   [![Trang Threat Event Log trong giao diện Trellix](/img/migrated/image-1765765683274-68178a40.png)](/img/migrated/image-1765765683274-68178a40.png)

   Trang này hiển thị tất cả security events của các máy chủ đã cài đặt agent, bao gồm hành vi nhiễm mã độc, exploit và các hoạt động đáng ngờ khác.

   [![Danh sách security events trong Threat Event Log](/img/migrated/image-1765765697231-084be1af.png)](/img/migrated/image-1765765697231-084be1af.png)

## Xem log theo từng máy chủ

1. Trong **System Tree** > **Group** > **System**, double-click vào máy chủ cần xem.

   [![Giao diện System Tree để chọn máy chủ cụ thể](/img/migrated/image-1765765708664-117612a4.png)](/img/migrated/image-1765765708664-117612a4.png)

2. Chọn tab **Threat Events** để xem các event của máy chủ đó.

   [![Tab Threat Events hiển thị log của từng máy chủ](/img/migrated/image-1765765721659-77184455.png)](/img/migrated/image-1765765721659-77184455.png)

## Xem log trực tiếp trên máy chủ

1. Trên máy chủ, click chuột phải vào icon Trellix trên task bar, chọn **Trellix ENS**.

   [![Menu chuột phải Trellix ENS trên task bar](/img/migrated/image-1765765732756-8f460d01.png)](/img/migrated/image-1765765732756-8f460d01.png)

2. Trong mục **Event Log**, các Threat Events tương tự sẽ được hiển thị.

   [![Giao diện Event Log trong Trellix ENS trên máy chủ](/img/migrated/image-1765765789911-5df77202.png)](/img/migrated/image-1765765789911-5df77202.png)

3. Mục **View Log Folder** chứa các file log của Endpoint Security, bao gồm lịch sử các tác vụ scanning đã được lên lịch.

   [![Thư mục chứa file log Endpoint Security](/img/migrated/image-1765765814382-c01507d6.png)](/img/migrated/image-1765765814382-c01507d6.png)
