---
id: "setting-nat-instance"
title: "Setting nat Instance"
sidebar_label: "Setting nat Instance"
sidebar_position: "5"
---

# Setting nat Instance

**Step 1** : Create Nat instance from image do FCI cung cấp
[![file](/img/migrated/image-1719483610635-8c2b0ddb.png)](/img/migrated/image-1719483610635-8c2b0ddb.png)
[![file](/img/migrated/image-1719483615596-32d8b6da.png)](/img/migrated/image-1719483615596-32d8b6da.png)
**Note: Trường subnet, cần chọn subnet can truy cập Internet.**
[![file](/img/migrated/image-1719483627834-69d59364.png)](/img/migrated/image-1719483627834-69d59364.png)
**Step 2** : Gắn Floating IP for Nat instance. Trong trường hợp instance has been gắn floating IP from bước khởi tạo, user không cần thực hiện thao tác this.
[![file](/img/migrated/image-1719483638728-722a763b.png)](/img/migrated/image-1719483638728-722a763b.png)
[![file](/img/migrated/image-1719483643946-bcd8d209.png)](/img/migrated/image-1719483643946-bcd8d209.png)
[![file](/img/migrated/image-1719483648767-91c83524.png)](/img/migrated/image-1719483648767-91c83524.png)
**Step 3** : Gắn security group for Nat instance, user mở the rule cần thiết for instance in isolated network truy cập ra Internet (can mở thêm port ICMP to test ping hệ thống). Trong trường hợp instance has been gắn ando security group from bước khởi tạo, user không cần thực hiện thao tác this.
[![file](/img/migrated/image-1719483661177-fbc71ad5.png)](/img/migrated/image-1719483661177-fbc71ad5.png)
[![file](/img/migrated/image-1719483666245-93b5fa24.png)](/img/migrated/image-1719483666245-93b5fa24.png)
**Step 4** : Add thêm Network interface card (NIC) thuộc subnet trùng with isolated subnet of instance cần truy cập Internet.
[![file](/img/migrated/image-1719483681542-c695fbb8.png)](/img/migrated/image-1719483681542-c695fbb8.png)
[![file](/img/migrated/image-1719483686233-68077f61.png)](/img/migrated/image-1719483686233-68077f61.png)
[![file](/img/migrated/image-1719483693216-09b07e4b.png)](/img/migrated/image-1719483693216-09b07e4b.png)
**Step 5** : Allow address pair 0.0.0.0/0 for NIC thuộc isolated network
[![file](/img/migrated/image-1719483704950-51c12336.png)](/img/migrated/image-1719483704950-51c12336.png)
[![file](/img/migrated/image-1719483711778-66dc215f.png)](/img/migrated/image-1719483711778-66dc215f.png)
**Step 6** : Truy cập ando instance thuộc isolated network, chuyển gateway về IP of NIC Nat instance. Trong ví dụ dùng, FCI dùng 1 instance thuộc hệ điều hành Windows.
[![file](/img/migrated/image-1719483727521-1d1e34d1.png)](/img/migrated/image-1719483727521-1d1e34d1.png)
[![file](/img/migrated/image-1719483733636-77084b42.png)](/img/migrated/image-1719483733636-77084b42.png)
[![file](/img/migrated/image-1719483740704-1b21dfa7.png)](/img/migrated/image-1719483740704-1b21dfa7.png)
