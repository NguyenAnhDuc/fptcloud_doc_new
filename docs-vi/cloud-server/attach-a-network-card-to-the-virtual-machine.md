---
id: "attach-a-network-card-to-the-virtual-machine"
title: "Gắn thêm card mạng (NIC) vào máy ảo"
description: "Gắn thêm card mạng vào máy ảo để kết nối đến nhiều Subnet khác nhau."
sidebar_label: "Gắn thêm card mạng (NIC) vào máy ảo"
sidebar_position: 14
---

# Gắn thêm card mạng (NIC) vào máy ảo

Bạn có thể gắn tối đa 10 card mạng vào một máy ảo — giúp máy ảo kết nối đến nhiều Subnet khác nhau trong VPC.

## Gắn card mạng

1. Chọn **Compute Engine** → **Instance Management**, chọn máy ảo cần gắn Subnet để vào trang **Instance Detail**.

   [![Trang Instance Detail](/img/migrated/image-1712722975848-d937e282.png)](/img/migrated/image-1712722975848-d937e282.png)

2. Mở tab **Network Interface**. Nhấn **Add NIC**.

   [![Tab Network Interface với nút Add NIC](/img/migrated/image-1744793401110-f9e5bd81.png)](/img/migrated/image-1744793401110-f9e5bd81.png)

3. Chọn **Subnet** trong VPC cần gắn, nhấn **Add NIC** để xác nhận.

   [![Hộp thoại chọn Subnet cho NIC](/img/migrated/image-1712723037304-4919d058.png)](/img/migrated/image-1712723037304-4919d058.png)

Card mạng mới hiển thị trong bảng **Network**.

[![Card mạng mới đã gắn](/img/migrated/image-1744793530914-729a9887.png)](/img/migrated/image-1744793530914-729a9887.png)

:::note
Thông thường, máy ảo Windows và Linux sẽ tự động nhận card mạng mới. Nếu card mạng không hiển thị trên Linux, hãy khởi động lại máy ảo.
:::

### Cấu hình thủ công trên Linux (nếu cần)

Xem địa chỉ IP hiện tại:

```bash
ip a
```

[![Xem địa chỉ IP](/img/migrated/image-1712723100683-b482495f.png)](/img/migrated/image-1712723100683-b482495f.png)

Đặt IP tĩnh (Ubuntu 20.04 dùng netplan):

```bash
ls /etc/netplan
sudo cp /etc/netplan/01-network-manager-all.yaml 01-network-manager-all.yaml.bak
```

Chỉnh sửa file cấu hình netplan với tên interface, địa chỉ IP, gateway và DNS phù hợp.

[![Cấu hình netplan](/img/migrated/image-1712723133085-6dc03fdb.png)](/img/migrated/image-1712723133085-6dc03fdb.png)

## Bước tiếp theo

- [Gỡ card mạng (NIC) khỏi máy ảo](./remove-the-network-card-from-the-virtual-machine.md)
