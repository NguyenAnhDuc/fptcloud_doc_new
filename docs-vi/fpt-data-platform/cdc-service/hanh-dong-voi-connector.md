---
id: "hanh-dong-voi-connector"
title: "Hành động với connector"
sidebar_label: "Hành động với connector"
description: "Hành động với connector"
---

# Hành động với connector

Các trạng thái của connector, bao gồm:

**Trạng thái** | **Mô tả**
---|---
`PAUSED` | Connector đã bị tạm dừng, không xử lý dữ liệu nhưng vẫn giữ nguyên trạng thái và cấu hình
`STOPPED` | Connector đã bị dừng
`RUNNING` | Connector đang chạy và xử lý dữ liệu
`FAILED` | Connector gặp lỗi và không thể tiếp tục xử lý dữ liệu

Có thể thực hiện các hành động với connector theo bảng ma trận chuyển đổi trạng thái dưới đây:

**Từ trạng thái & Action** | Stop | Resume | Pause | Restart | Reset offset | Delete
---|---|---|---|---|---|---
`RUNNING` | | | | | |
`PAUSED` | | | | | |
`FAILED` | | | | | |
`STOPPED` | | | | | |

* * *

Trường hợp sử dụng:

**Hành động** | **Mô tả**
---|---
**Restart** | Khởi động lại connector
**Pause** | Tạm dừng trình kết nối và các tác vụ của nó, dừng xử lý tin nhắn cho đến khi trình kết nối được tiếp tục. Hành động này không đồng bộ và các tác vụ sẽ không chuyển sang trạng thái `PAUSED` cùng lúc.

**• Ảnh hưởng:**
– Connector và các task của nó sẽ ngừng xử lý dữ liệu.
– Connector vẫn tồn tại trong hệ thống và có thể được resume (tiếp tục) bất kỳ lúc nào.
– Các offset (vị trí đọc dữ liệu) của connector được giữ nguyên, không bị mất.

**• Khi nào sử dụng:**
– Khi muốn tạm dừng xử lý dữ liệu mà không muốn xóa hoặc dừng hoàn toàn connector.
– Khi cần bảo trì hệ thống hoặc khắc phục sự cố tạm thời.
**Resume** | Tiếp tục trình kết nối bị tạm dừng. Hành động này không đồng bộ và các tác vụ sẽ không chuyển sang trạng thái chạy cùng lúc
**Stop** | Dừng kết nối nhưng không xóa kết nối. Tất cả các tác vụ cho kết nối sẽ bị tắt hoàn toàn.

**• Ảnh hưởng:**
– Connector và các task của nó sẽ dừng hoạt động.
– Connector bị xóa khỏi danh sách các connector đang chạy.
– Cấu hình của connector bị xóa, và cần tạo lại connector từ đầu nếu muốn sử dụng lại.

**• Khi nào sử dụng:**
– Khi không cần sử dụng connector đó nữa.
– Khi muốn xóa hoàn toàn connector để giải phóng tài nguyên hoặc thay thế bằng một connector mới.
**Reset offset** | Đặt lại giá trị offset cho connector, để connector đọc lại dữ liệu từ đầu
