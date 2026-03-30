---
id: "huong-dan-su-dung-robot-account"
title: "Hướng dẫn sử dụng Robot Account"
description: "Sau khi tạo một Robot Account, người dùng có thể sử dụng Robot Account để thực hiện login tới FPT Container Registry với"
sidebar_label: "Hướng dẫn sử dụng Robot Account"
sidebar_position: 26
pagination_next: null
---

# Huong Dan Su Dung Robot Account

Sau khi tạo một Robot Account, người dùng có thể sử dụng Robot Account để thực hiện login tới FPT Container Registry với docker login để sử dụng với các permission (Pull/Push) đã được cấu hình. 
Người dùng sử dụng token đã copy qua portal/ thông tin trong file đã export chứa account/secret để sử dụng: 
[![](/img/migrated/Picture83-e270d618.png)](/img/migrated/Picture83-e270d618.png)
Kiểm tra thông thông tin đang nhập sử dụng docker login như sau: 
[![](/img/migrated/Picture84-69496c13.png)](/img/migrated/Picture84-69496c13.png)
Sử dụng docker pull/push để kiểm tra các permission đã cấu hình. 
Trong trường hợp robot account bị xoá/disable/expire khi dùng docker login/pull/push sẽ báo “unauthorized to access repository”