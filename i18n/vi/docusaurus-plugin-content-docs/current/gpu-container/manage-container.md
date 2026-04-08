---
id: "manage-container"
title: "Manage Container"
description: "Hướng dẫn quản lý GPU Container: khởi động, chỉnh sửa, dừng và xóa container."
sidebar_label: "Manage Container"
sidebar_position: 9
---

# Manage Container

## Khởi động Container
  1. Mở danh sách Containers
  2. Tìm GPU Container bạn muốn khởi động và nhấp vào biểu tượng 3 chấm.
  3. Chọn hành động "Start"

## Chỉnh sửa Container
[!(/img/migrated/Vector-a4233e15.png)](/img/migrated/Vector-a4233e15.png)
**Cảnh báo:** Lưu thay đổi sẽ khởi động lại container. Lưu ý rằng tất cả dữ liệu trên ổ đĩa tạm thời sẽ bị mất vĩnh viễn.
  1. Từ danh sách Containers, chọn container bạn muốn chỉnh sửa và truy cập màn hình "Container Details".
  2. Nhấp vào biểu tượng Edit của phần bạn muốn sửa đổi. Bạn có thể chỉnh sửa phần 'Access container' (bao gồm Ports và SSH) và phần 'Advanced settings' (bao gồm Persistent Disk, Environment Variables và Startup Commands).
  3. Xác nhận bằng cách nhấp "Save".

## Dừng Container
[!(/img/migrated/Vector-a4233e15.png)](/img/migrated/Vector-a4233e15.png)
**Cảnh báo:** Bạn vẫn bị tính phí cho GPU Container ở trạng thái rảnh kể cả khi đã dừng. Nếu không cần giữ lại container, hãy xóa hoàn toàn.
  1. Mở danh sách Containers
  2. Tìm GPU Container bạn muốn dừng và nhấp vào biểu tượng 3 chấm
  3. Chọn hành động "Stop"
  4. Xác nhận bằng cách nhấp "Confirm"

## Xóa Container
[!(/img/migrated/Alert-triangle-3b4ebdf0.png)](/img/migrated/Alert-triangle-3b4ebdf0.png)
**Nguy hiểm:** Xóa container sẽ xóa vĩnh viễn tất cả dữ liệu trong bộ lưu trữ tạm thời và bộ lưu trữ liên tục. Hãy đảm bảo đã lưu mọi dữ liệu bạn muốn truy cập lại.
  1. Mở danh sách Containers.
  2. Tìm GPU Container bạn muốn xóa và nhấp vào biểu tượng 3 chấm.
  3. Chọn hành động "Delete".
  4. Xác nhận bằng cách nhập "delete" vào trường văn bản và nhấp "Confirm"
