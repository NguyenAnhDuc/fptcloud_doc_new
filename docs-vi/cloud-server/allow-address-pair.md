---
id: "allow-address-pair"
title: "Khởi tạo một address pair"
description: "* Theo mặc định, máy tính (hoặc máy ảo) sẽ cặp địa chỉ MAC và IP liên kết với nhau nhằm chống giả mạo thông tin. Điều nà"
sidebar_label: "Khởi tạo một address pair"
sidebar_position: 71
---

# Allow Address Pair

* Theo mặc định, máy tính (hoặc máy ảo) sẽ cặp địa chỉ MAC và IP liên kết với nhau nhằm chống giả mạo thông tin. Điều này có nghĩa là với traffic đến 1 địa chỉ IP, traffic sẽ được gửi đến máy có địa chỉ MAC tương ứng. 
  * Tính năng Allow IP address pair cho phép thêm cặp địa chỉ IP (hoặc CIDR) và địa chỉ MAC vào 1 interface (card NIC) của instance. Từ đó người quản trị có thể tận dụng tính năng cho nhiều mục đích, đặc biệt là cấu hình HA (High Availability)

### Khởi tạo một address pair
Một Network interface card có thể cấu hình nhiều allow address pair và ngược lại, một address pair có thể cấu hình cho nhiều Network interface card của các Instance khác nhau
**Bước 1** : Ở Màn hình quản lý Allow address pair. Chọn **Create allow address pair**
[![file](/img/migrated/image-1708395038189-f6a186ff.png)](/img/migrated/image-1708395038189-f6a186ff.png)
**Bước 2** : Cấu hình allow IP address pair
  * Chọn Instance 
  * Chọn card mạng để cài đặt Allow address pair
  * Nhập IP (hoặc CIDR) để allow

[![file](/img/migrated/image-1708395102833-872f3b79.png)](/img/migrated/image-1708395102833-872f3b79.png)
**Bước 3** : Cấu hình allow MAC address pair (optional). Nếu không chọn, mặc định hệ thống sẽ lấy địa chỉ MAC của chỉ Network interface card đang được chọn
  * Bấm vào Advanced Setting
  * Nhập địa chỉ MAC

[![file](/img/migrated/image-1708395142834-551ea26d.png)](/img/migrated/image-1708395142834-551ea26d.png)
**Bước 4** : Bấm Create allow address pair
[![file](/img/migrated/image-1708395173721-87a3a5e8.png)](/img/migrated/image-1708395173721-87a3a5e8.png)
**Bước 5** : Kiểm tra thông tin. Thông tin được cập nhật ở màn hình danh sách Allow address pair và thông tin trong Network interface của Instance
[![file](/img/migrated/image-1708395209748-2de1f3be.png)](/img/migrated/image-1708395209748-2de1f3be.png)
[![file](/img/migrated/image-1708395219352-74b14a4a.png)](/img/migrated/image-1708395219352-74b14a4a.png)
### Khởi tạo Allow address pair trong Instance management
**Bước 1** : Vào Network Interface trong Instance Management
[![file](/img/migrated/image-1708395287542-5f97bc70.png)](/img/migrated/image-1708395287542-5f97bc70.png)
**Bước 2** : Chọn nút ba chấm (action):
[![file](/img/migrated/image-1708395308051-7e4aea2c.png)](/img/migrated/image-1708395308051-7e4aea2c.png)
**Bước 3** : Chọn Create allow address pair
[![file](/img/migrated/image-1708395330849-4dc00d57.png)](/img/migrated/image-1708395330849-4dc00d57.png)
**Bước 4** : Cấu hình allow IP address pair
  * Hệ thống mặc định chọn Network interface card hiện tại
  * Nhập IP (hoặc CIDR) để allow

[![file](/img/migrated/image-1708395364577-06c64d2e.png)](/img/migrated/image-1708395364577-06c64d2e.png)
**Bước 5** : Cấu hình allow MAC address pair (optional). Nếu không chọn, mặc định hệ thống sẽ lấy địa chỉ MAC của chỉ Network interface card đang được chọn
  * Bấm vào Advanced Setting
  * Nhập địa chỉ MAC

[![file](/img/migrated/image-1708395403972-a559d684.png)](/img/migrated/image-1708395403972-a559d684.png)
**Bước 6** : Bấm Create allow address pair
[![file](/img/migrated/image-1708395440253-4bafad85.png)](/img/migrated/image-1708395440253-4bafad85.png)
**Bước 7** : Kiểm tra thông tin. Thông tin được cập nhật ở màn hình danh sách Allow address pair và thông tin trong Network interface của Instance
[![file](/img/migrated/image-1708395474257-047d287b.png)](/img/migrated/image-1708395474257-047d287b.png)
[![file](/img/migrated/image-1708395486779-7e386ff3.png)](/img/migrated/image-1708395486779-7e386ff3.png)
### Xóa Allow address Pair
**Cách 1: Xóa tại màn hình quản lý Allow address pair**
**Bước 1** : Chọn icon delete
[![file](/img/migrated/image-1708395674995-65847886.png)](/img/migrated/image-1708395674995-65847886.png)
**Bước 2** : Xác nhận delete
[![file](/img/migrated/image-1708395828130-9894ec41.png)](/img/migrated/image-1708395828130-9894ec41.png)
**Cách 2: Xóa trong Instance Management**
**Bước 1** : Vào Network Interface trong Instance Management.
[![file](/img/migrated/image-1708395867460-1d20cf7a.png)](/img/migrated/image-1708395867460-1d20cf7a.png)
**Bước 2** : Bấm vào icon X
[![file](/img/migrated/image-1708395893416-0efccabb.png)](/img/migrated/image-1708395893416-0efccabb.png)
**Bước 3** : Xác nhận Delete
[![file](/img/migrated/image-1708395920272-52eddcc4.png)](/img/migrated/image-1708395920272-52eddcc4.png)
### Kiểm tra hoạt động - Activity Log
Các hành động trên thành công đều được ghi nhận tại Activity Log
[![file](/img/migrated/image-1708400884483-841ab562.png)](/img/migrated/image-1708400884483-841ab562.png)
[![file](/img/migrated/image-1708400903813-04d2ba74.png)](/img/migrated/image-1708400903813-04d2ba74.png)