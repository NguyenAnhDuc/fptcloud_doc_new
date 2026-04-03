---
id: "huong-dan-su-dung-robot-account"
title: "Sử dụng robot account"
description: "Đăng nhập và thực hiện pull/push image bằng robot account."
sidebar_label: "Sử dụng robot account"
sidebar_position: "26"
---

# Sử dụng robot account

Sau khi tạo robot account, bạn có thể dùng thông tin xác thực của nó để thực hiện các thao tác Docker với đúng quyền (pull/push) đã cấu hình. Robot account phù hợp để sử dụng trong pipeline CI/CD và môi trường tự động hóa.

Sử dụng token đã sao chép từ Portal hoặc từ file export để đăng nhập:

[![Sử dụng token để docker login](/img/migrated/Picture83-e270d618.png)](/img/migrated/Picture83-e270d618.png)

Kiểm tra thông tin xác thực bằng lệnh `docker login`:

[![Kết quả docker login với robot account](/img/migrated/Picture84-69496c13.png)](/img/migrated/Picture84-69496c13.png)

Sau khi đăng nhập, sử dụng `docker pull` hoặc `docker push` để kiểm tra các quyền đã cấu hình.

:::note
Nếu robot account bị xóa, tắt hoặc token hết hạn, lệnh `docker login`, `docker pull` hoặc `docker push` sẽ báo lỗi "unauthorized to access repository".
:::
