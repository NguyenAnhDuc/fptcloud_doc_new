---
id: "Create-topics"
title: "Tạo topic"
description: "Hướng dẫn tạo topic mới trong FPT Message Bus for RabbitMQ."
sidebar_label: "Tạo topic"
sidebar_position: 10
---

# Tạo topic

Topic là kênh phân phối message theo mô hình publish/subscribe. Sau khi tạo topic, bạn có thể thêm subscription để cho phép nhiều consumer nhận cùng một message.

1. Từ menu **Application**, chọn **Topic** > **Create**.

   [![Màn hình danh sách topics với nút Create](/img/migrated/topic_create_1-b68393ff.png)](/img/migrated/topic_create_1-b68393ff.png)

2. Nhập **Name** (bắt buộc) cho topic.

   [![Form tạo topic với trường Name bắt buộc](/img/migrated/topic_create_2-3b5d7015.png)](/img/migrated/topic_create_2-3b5d7015.png)

3. Chọn **OK** để tạo topic.

:::note
Tên topic được đặt theo quy tắc: `t.TOPIC_NAME`.
:::
