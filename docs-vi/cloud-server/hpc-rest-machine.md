---
id: "hpc-rest-machine"
title: "Khởi động lại máy"
description: "Khởi động lại GPU Server trên HPC Portal khi gặp sự cố kết nối."
sidebar_label: "Khởi động lại máy"
sidebar_position: 29
---

# Khởi động lại máy

Trong quá trình sử dụng, bạn có thể gặp sự cố như màn hình đen, không thể kết nối tới remote server hoặc máy chủ bị treo. Nếu đợi 2-3 phút rồi kết nối lại vẫn không khắc phục được, bạn cần khởi động lại máy.

## Khởi động lại

1. Tại màn hình **Hosts** trên HPC Portal, chọn image → **Reset machine**.
2. Tại hộp thoại xác nhận, nhấn **Reset**.

   [![Hộp thoại xác nhận Reset machine](/img/migrated/reset-1a4b229d.jpg)](/img/migrated/reset-1a4b229d.jpg)

3. Đợi vài phút, sau đó tải lại file RDP và kết nối lại.

:::warning
- Reset machine tương tự bấm nút restart trên máy chủ vật lý khi máy không phản hồi.
- Cân nhắc trước khi sử dụng vì có thể gây mất dữ liệu.
- Nếu sau khi reset vẫn không kết nối được, liên hệ quản trị viên để hỗ trợ.
:::

## Bước tiếp theo

- [Đặt lịch tắt máy](./hpc-schedule-shutdown.md)
