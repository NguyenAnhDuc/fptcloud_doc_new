---
id: "quan-ly-retention-run"
title: "Quản lý retention run"
description: "Chạy, kiểm tra và quản lý các lần thực thi retention rule."
sidebar_label: "Quản lý retention run"
sidebar_position: 5
pagination_next: null
---

# Quản lý retention run

Retention run là lịch sử các lần thực thi retention rule. FPT Cloud cho phép bạn chạy thủ công, thực hiện dry run để kiểm tra trước, hủy một lần chạy đang thực hiện và xem log chi tiết.

## Chạy quy tắc thủ công (Run now)

1. Trên menu **FPT Portal**, chọn **Container Registry** > **Policy** > **RUN NOW**.

   [![Nút RUN NOW](/img/migrated/Picture48-1-1310d2d8.png)](/img/migrated/Picture48-1-1310d2d8.png)

2. Chọn **OK** để xác nhận chạy retention.

   [![Xác nhận RUN NOW](/img/migrated/Picture49-1-ad9995a4.png)](/img/migrated/Picture49-1-ad9995a4.png)

3. Kiểm tra kết quả sau khi chạy.

   [![Kết quả sau khi chạy retention](/img/migrated/Picture50-1-67a91903.png)](/img/migrated/Picture50-1-67a91903.png)

## Dry run

Dry run kiểm tra quy tắc mà không thực sự xóa image, giúp bạn xác minh cấu hình trước khi áp dụng.

1. Trên menu **FPT Portal**, chọn **Container Registry** > **Policy** > **DRY RUN**.

   [![Nút DRY RUN](/img/migrated/Picture51-1-6b16d900.png)](/img/migrated/Picture51-1-6b16d900.png)

2. Kiểm tra kết quả dry run. Không có image nào bị xóa thực sự.

   [![Kết quả sau khi DRY RUN](/img/migrated/Picture52-1-b8c3c76a.png)](/img/migrated/Picture52-1-b8c3c76a.png)

## Hủy retention run đang chạy (Abort)

1. Trên menu **FPT Portal**, chọn **Container Registry** > **Policy** > chọn retention run đang **Running** > **ABORT**.

   [![Nút ABORT trên retention đang chạy](/img/migrated/Picture53-1-aedc2cf2.png)](/img/migrated/Picture53-1-aedc2cf2.png)

2. Chọn **OK** để xác nhận hủy.

   [![Xác nhận Abort](/img/migrated/Picture54-a4f9fc84.png)](/img/migrated/Picture54-a4f9fc84.png)

3. Kiểm tra kết quả sau khi hủy.

   [![Kết quả sau khi Abort](/img/migrated/Picture55-6ea6d35a.png)](/img/migrated/Picture55-6ea6d35a.png)

## Xem danh sách retention run

Trên menu **FPT Portal**, chọn **Container Registry** > **Policy** để xem danh sách tất cả lần chạy.

[![Danh sách retention run](/img/migrated/Picture56-d461b01d.png)](/img/migrated/Picture56-d461b01d.png)

## Xem log của một retention run

1. Trên menu **FPT Portal**, chọn **Container Registry** > **Policy** > click vào một retention run để xem chi tiết.

   [![Chi tiết retention run](/img/migrated/Picture57-cd40bdbd.png)](/img/migrated/Picture57-cd40bdbd.png)

2. Kiểm tra log của từng repository trong lần chạy đó.

   [![Log chi tiết của retention run](/img/migrated/Picture58-6d27606a.png)](/img/migrated/Picture58-6d27606a.png)
