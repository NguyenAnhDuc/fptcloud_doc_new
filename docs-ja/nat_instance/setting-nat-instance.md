---
id: "setting-nat-instance"
title: "Setting nat Instance"
sidebar_label: "Setting nat Instance"
sidebar_position: "5"
---

# Setting nat Instance

**ステップ1:** Tạo Nat instance từ image do FCI cung cấp
[![file](/img/migrated/image-1719483610635-8c2b0ddb.png)](/img/migrated/image-1719483610635-8c2b0ddb.png)
[![file](/img/migrated/image-1719483615596-32d8b6da.png)](/img/migrated/image-1719483615596-32d8b6da.png)
**注意: Trường subnet, cần chọn subnet có thể truy cập Internet.**
[![file](/img/migrated/image-1719483627834-69d59364.png)](/img/migrated/image-1719483627834-69d59364.png)
**ステップ2:** Gắn Floating IP cho Nat instance. Trong trường hợp instance đã gắn floating IP từ bước khởi tạo, người dùng không cần thực hiện thao tác này.
[![file](/img/migrated/image-1719483638728-722a763b.png)](/img/migrated/image-1719483638728-722a763b.png)
[![file](/img/migrated/image-1719483643946-bcd8d209.png)](/img/migrated/image-1719483643946-bcd8d209.png)
[![file](/img/migrated/image-1719483648767-91c83524.png)](/img/migrated/image-1719483648767-91c83524.png)
**ステップ3:** Gắn security group cho Nat instance, người dùng mở các rule cần thiết cho instance trong isolated network truy cập ra Internet (có thể mở thêm port ICMP để test ping hệ thống). Trong trường hợp instance đã gắn vào security group từ bước khởi tạo, người dùng không cần thực hiện thao tác này.
[![file](/img/migrated/image-1719483661177-fbc71ad5.png)](/img/migrated/image-1719483661177-fbc71ad5.png)
[![file](/img/migrated/image-1719483666245-93b5fa24.png)](/img/migrated/image-1719483666245-93b5fa24.png)
**ステップ4:** Add thêm Network interface card (NIC) thuộc subnet trùng với isolated subnet của instance cần truy cập Internet.
[![file](/img/migrated/image-1719483681542-c695fbb8.png)](/img/migrated/image-1719483681542-c695fbb8.png)
[![file](/img/migrated/image-1719483686233-68077f61.png)](/img/migrated/image-1719483686233-68077f61.png)
[![file](/img/migrated/image-1719483693216-09b07e4b.png)](/img/migrated/image-1719483693216-09b07e4b.png)
**ステップ5:** Allow address pair 0.0.0.0/0 cho NIC thuộc isolated network
[![file](/img/migrated/image-1719483704950-51c12336.png)](/img/migrated/image-1719483704950-51c12336.png)
[![file](/img/migrated/image-1719483711778-66dc215f.png)](/img/migrated/image-1719483711778-66dc215f.png)
**ステップ6:** にアクセスします instance thuộc isolated network, chuyển gateway về IP của NIC Nat instance. Trong ví dụ dùng, FCI dùng 1 instance thuộc hệ điều hành Windows.
[![file](/img/migrated/image-1719483727521-1d1e34d1.png)](/img/migrated/image-1719483727521-1d1e34d1.png)
[![file](/img/migrated/image-1719483733636-77084b42.png)](/img/migrated/image-1719483733636-77084b42.png)
[![file](/img/migrated/image-1719483740704-1b21dfa7.png)](/img/migrated/image-1719483740704-1b21dfa7.png)
