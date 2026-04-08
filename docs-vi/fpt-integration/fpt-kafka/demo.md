---
id: "demo"
title: "Demo"
description: "Ví dụ thực tế gửi và nhận message qua FPT Kafka bằng Python."
sidebar_label: "Demo"
sidebar_position: 20
pagination_next: null
---

# Demo

Ví dụ này minh họa cách kết nối đến FPT Kafka bằng Python để gửi message từ producer và đọc message bằng consumer. Bạn cần đã tạo topic, credential và ACL phù hợp trước khi thực hiện. Tham khảo thêm tài liệu trong mục **Document** trên menu.

## Phần 1: Producer gửi message vào topic

1. Tạo file `producer.py`.

   [![Màn hình tạo file producer.py](/img/migrated/demo1-ab8e9665.png)](/img/migrated/demo1-ab8e9665.png)

2. Trong file `producer.py`, điền các thông tin sau:

   [![Nội dung file producer.py với các tham số kết nối Kafka](/img/migrated/demo2-1b34840f.png)](/img/migrated/demo2-1b34840f.png)

   - **sasl_plain_username** và **sasl_plain_password**: Username và password của credential đã tạo
   - **topic**: Tên topic đã tạo và đã cấp quyền Write
   - **bootstrap.servers**: Thông tin cluster do admin cấp

3. Mở terminal và chạy lệnh:

   ```bash
   python .\producer.py
   ```

   Kết quả mong đợi:

   [![Kết quả terminal sau khi producer gửi message thành công](/img/migrated/demo3-f019af0a.png)](/img/migrated/demo3-f019af0a.png)

   Nếu output đúng, producer đã gửi message thành công vào các partition của topic.

## Phần 2: Consumer đọc message

1. Tạo file `consumer.py`.

   [![Màn hình tạo file consumer.py](/img/migrated/demo4-bd2ed2a2.png)](/img/migrated/demo4-bd2ed2a2.png)

   [![Cấu trúc file consumer.py](/img/migrated/demo5-7e413856.png)](/img/migrated/demo5-7e413856.png)

2. Trong file `consumer.py`, điền các thông tin sau:

   [![Nội dung file consumer.py với các tham số kết nối và consumer group](/img/migrated/demo6-6962ee80.png)](/img/migrated/demo6-6962ee80.png)

   - **group_name**: Tên consumer group đã tạo và đã cấp quyền Read topic
   - **sasl_plain_username** và **sasl_plain_password**: Username và password của credential đã tạo
   - **topic**: Tên topic đã cấp quyền Write và Read
   - **bootstrap.servers**: Thông tin cluster do admin cấp

3. Mở terminal và chạy lệnh:

   ```bash
   python .\consumer.py
   ```

   Kết quả mong đợi:

   [![Kết quả terminal sau khi consumer đọc message từ topic thành công](/img/migrated/demo7-d43e6100.png)](/img/migrated/demo7-d43e6100.png)
