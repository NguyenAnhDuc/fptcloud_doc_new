---
id: "gui-nhan-message-trong-queues"
title: "Gui Nhan Message Trong Queues"
description: "**Bước 1** : Ở menu **Application** > **Queues** > Chọn một queue bạn cần thao tác > **Preview**"
sidebar_label: "Gui Nhan Message Trong Queues"
sidebar_position: 7
---

# Gui Nhan Message Trong Queues

**Bước 1** : Ở menu **Application** > **Queues** > Chọn một queue bạn cần thao tác > **Preview**
[![](/img/migrated/View-1-1-73852024.png)](/img/migrated/View-1-1-73852024.png)
**Bước** **2** : Bạn nhập message cần publish vào ô **Payload** trong tab **Send**
[![](/img/migrated/View-2-2-349ef695.png)](/img/migrated/View-2-2-349ef695.png)
Bạn có thể chọn 1 trong 2 kiểu dữ liệu text là **String** và **Base64**
  * **String** : bao gồm 1 chuỗi các kí tự (không nhập số)
  * **Base64** : mã hóa chuỗi ký tự bằng cách dùng thay thế các ký tự trong bảng mã ASCII 8 bit thông dụng thành bảng mã 6 bit.

**Bước 3** : Chọn nút **Send** để gửi 
Lúc này bạn đã publish messages thành công vào hàng đợi. Để có thể nhận messages, bạn thực hiện như sau: 
**Bước 1** : Bạn vào tab **Receive** > Sau đó chọn nút **Receive**. 
[![](/img/migrated/Recei-1-cf01752c.png)](/img/migrated/Recei-1-cf01752c.png)