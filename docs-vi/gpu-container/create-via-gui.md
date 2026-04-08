---
id: "create-via-gui"
title: "Tạo container qua giao diện"
description: "Hướng dẫn tạo GPU Container mới qua giao diện đồ họa trên FPT AI Factory."
sidebar_label: "Tạo container qua giao diện"
sidebar_position: 5
---

# Tạo container qua giao diện

:::info
Mỗi tenant chỉ được có tối đa 10 container. Nếu bạn đã đạt giới hạn này, hãy xóa container không dùng để tạo container mới.
:::

### 1. Chọn GPU Container trong menu bên và nhấp nút "Create New Container"

### 2. Đặt tên container trong trường Container Name

### 3. Chọn GPU Instance (hiện hỗ trợ NVIDIA GPU H100 và H200)

### 4. Template
Bạn có thể chọn sử dụng template có sẵn hoặc dùng image của riêng mình. FPT khuyến nghị sử dụng template có sẵn để triển khai nhanh hơn.

#### a. Template có sẵn: nhấp "Change Template" và chọn template
[![Alt text](/img/migrated/Screenshot-2025-06-19-144905-bbf38c4a.png)](/img/migrated/Screenshot-2025-06-19-144905-bbf38c4a.png)

#### b. Template tùy chỉnh: mang image của riêng bạn bằng tính năng "Custom Template"
[![Alt text](/img/migrated/Screenshot-2025-06-19-145912-f00bf337.png)](/img/migrated/Screenshot-2025-06-19-145912-f00bf337.png)

### 5. Truy cập container

#### a. Ports
Tính năng này tăng tính linh hoạt cho ứng dụng container, cho phép một container phục vụ nhiều chức năng trên các cổng khác nhau.

Hỗ trợ cả HTTP và TCP port, tối đa 10 port mỗi loại cho mỗi container.

#### b. SSH
Thêm SSH key để cho phép truy cập từ xa vào container. Mỗi container hỗ trợ tối đa 10 SSH key. Các key này sẽ được đưa vào container khi chạy, cho phép bạn SSH vào container bằng bất kỳ key nào đã cung cấp.

:::info
Hiện tại, GPU Container phiên bản v1.1.2 chỉ có template Ubuntu đã bao gồm cấu hình SSH. Nếu bạn muốn kết nối SSH trong các template khác, hãy cài đặt OpenSSH-server trước.
:::

Để thêm SSH key:

1. Đảm bảo bạn đã tạo cặp SSH key trên máy tính. Nếu chưa có, chạy lệnh sau trên terminal:

```
ssh-keygen -t ed25519 -C YOUR_EMAIL@DOMAIN.COM
```

2. Để lấy SSH public key, chạy lệnh:

```
cat ~/.ssh/id_ed25519.pub
```

Kết quả sẽ có dạng:

```
ssh-ed25519 AAAAC4NzaC1lZDI1JTE5AAAAIGP+L8hnjIcBqUb8NRrDiC32FuJBvRA0m8jLShzgq6BQ YOUR_EMAIL@DOMAIN.COM
```

3. Sao chép và dán kết quả vào trường SSH Public Keys: [![Alt text](/img/migrated/Screenshot-2025-07-08-084117-1-f6d63798.png)](/img/migrated/Screenshot-2025-07-08-084117-1-f6d63798.png)

### 6. Cài đặt nâng cao (Tùy chọn)
Mục này bao gồm:
- **Persistent Disk:** Chỉ định dung lượng lưu trữ để lưu trữ trọng số huấn luyện, model, v.v. Đọc thêm về Storage [tại đây](../gpu-container/index.md).
- **Environment Variables:** Các cặp key-value được đưa vào container khi chạy.
- **Startup Command:** Lệnh và tham số chạy khi container khởi động.

### 7. Nhấp **"Create New Container"** để tạo và khởi động container

### 8. Nạp tiền
Trong trường hợp số dư không đủ để tạo container mới, làm theo hướng dẫn tại: [Nạp tiền](/docs/vi/gpu-container/add-credit).
