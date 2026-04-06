---
id: "trang-thai-snapshot"
title: "ステータス Snapshot"
sidebar_label: "ステータス Snapshot"
description: "ステータス Snapshot"
---

# ステータス Snapshot

Các trạng thái của snapshot bao gồm:

Trạng thái | Mô tả
---|---
Not Started | Snapshot chưa được thực hiện lần nào
In-progress | Snapshot đang được thực hiện, dữ liệu đang được snapshot vào Kafka topic
Paused | Snapshot đã bị tạm dừng, có thể tiếp tục (resume) hoặc dừng hoàn toàn (stop)
Completed | Snapshot đã hoàn tất thành công, toàn bộ dữ liệu đã được snapshot
Failed | Snapshot gặp lỗi và không thể hoàn thành (có thể do thiếu quyền hoặc lỗi database)

Có thể thực hiện các hành động với snapshot theo ma trận chuyển đổi trạng thái dưới đây:

Từ Trạng Thái \ Action | Execute | Stop | Pause | Resume
---|---|---|---|---
Not Started |  | - | - | -
In-progress | - |  |  | -
Paused | - |  | - | 
Completed |  | - | - | -
Failed |  | - | - | -
