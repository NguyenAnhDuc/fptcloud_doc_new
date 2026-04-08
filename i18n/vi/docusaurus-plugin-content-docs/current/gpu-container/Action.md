---
id: "Action"
title: "Action"
description: "Dữ liệu trên ổ đĩa tạm thời sẽ bị mất và không thể khôi phục. Chỉ dữ liệu trên ổ đĩa liên tục mới được giữ lại."
sidebar_label: "Action"
sidebar_position: 24
---

# Action

## Dữ liệu của tôi có bị mất khi dừng container không?
Dữ liệu trên ổ đĩa tạm thời sẽ bị mất và không thể khôi phục. Chỉ dữ liệu trên ổ đĩa liên tục mới được giữ lại. Hãy đảm bảo lưu trữ dữ liệu quan trọng trên ổ đĩa liên tục.

## Tóm tắt hành vi lưu trữ khi dừng container

| Loại lưu trữ | Khi dừng container | Khi xóa container |
| --- | --- | --- |
| Ổ đĩa tạm thời | Dữ liệu bị xóa vĩnh viễn | Dữ liệu bị xóa vĩnh viễn |
| Ổ đĩa liên tục | Dữ liệu được giữ lại | Dữ liệu bị xóa vĩnh viễn |

Xem thêm thông tin về lưu trữ tại phần [Storage](/vi/docs/gpu-container/storage/).
