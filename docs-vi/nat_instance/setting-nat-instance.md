---
id: "setting-nat-instance"
title: "Cấu hình NAT Instance"
description: "Hướng dẫn từng bước cấu hình NAT Instance để cho phép instance trong isolated network truy cập Internet."
sidebar_label: "Cấu hình NAT Instance"
sidebar_position: 5
---

# Cấu hình NAT Instance

1. Tạo NAT Instance từ image do FCI cung cấp.

   [![Chọn image NAT Instance](/img/migrated/image-1719483610635-8c2b0ddb.png)](/img/migrated/image-1719483610635-8c2b0ddb.png)
   [![Màn hình tạo NAT Instance](/img/migrated/image-1719483615596-32d8b6da.png)](/img/migrated/image-1719483615596-32d8b6da.png)

   :::warning
   Tại trường Subnet, cần chọn subnet có thể truy cập Internet.
   :::

   [![Chọn subnet có thể truy cập Internet](/img/migrated/image-1719483627834-69d59364.png)](/img/migrated/image-1719483627834-69d59364.png)

2. Gắn Floating IP cho NAT Instance. Bỏ qua bước này nếu instance đã được gắn Floating IP trong bước khởi tạo.

   [![Danh sách Floating IP](/img/migrated/image-1719483638728-722a763b.png)](/img/migrated/image-1719483638728-722a763b.png)
   [![Gắn Floating IP](/img/migrated/image-1719483643946-bcd8d209.png)](/img/migrated/image-1719483643946-bcd8d209.png)
   [![Xác nhận gắn Floating IP](/img/migrated/image-1719483648767-91c83524.png)](/img/migrated/image-1719483648767-91c83524.png)

3. Gắn security group cho NAT Instance và mở các rule cần thiết để instance trong isolated network có thể truy cập Internet. Bạn có thể mở thêm port ICMP để kiểm tra ping. Bỏ qua bước này nếu instance đã được gắn vào security group trong bước khởi tạo.

   [![Danh sách security group](/img/migrated/image-1719483661177-fbc71ad5.png)](/img/migrated/image-1719483661177-fbc71ad5.png)
   [![Gắn security group](/img/migrated/image-1719483666245-93b5fa24.png)](/img/migrated/image-1719483666245-93b5fa24.png)

4. Thêm Network Interface Card (NIC) thuộc subnet trùng với isolated subnet của instance cần truy cập Internet.

   [![Thêm NIC](/img/migrated/image-1719483681542-c695fbb8.png)](/img/migrated/image-1719483681542-c695fbb8.png)
   [![Chọn isolated subnet](/img/migrated/image-1719483686233-68077f61.png)](/img/migrated/image-1719483686233-68077f61.png)
   [![Xác nhận thêm NIC](/img/migrated/image-1719483693216-09b07e4b.png)](/img/migrated/image-1719483693216-09b07e4b.png)

5. Allow address pair `0.0.0.0/0` cho NIC thuộc isolated network.

   [![Cấu hình allowed address pair](/img/migrated/image-1719483704950-51c12336.png)](/img/migrated/image-1719483704950-51c12336.png)
   [![Xác nhận allowed address pair](/img/migrated/image-1719483711778-66dc215f.png)](/img/migrated/image-1719483711778-66dc215f.png)

6. Truy cập vào instance thuộc isolated network và chuyển default gateway về IP của NIC NAT Instance. Trong ví dụ này, FCI sử dụng một instance chạy hệ điều hành Windows.

   [![Cấu hình gateway trên instance Windows](/img/migrated/image-1719483727521-1d1e34d1.png)](/img/migrated/image-1719483727521-1d1e34d1.png)
   [![Điền IP của NIC NAT Instance](/img/migrated/image-1719483733636-77084b42.png)](/img/migrated/image-1719483733636-77084b42.png)
   [![Xác nhận cấu hình gateway](/img/migrated/image-1719483740704-1b21dfa7.png)](/img/migrated/image-1719483740704-1b21dfa7.png)
