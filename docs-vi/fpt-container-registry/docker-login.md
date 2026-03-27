---
id: "docker-login"
title: "Docker Login"
description: "Để thực hiện login tới FPT Container Registry thực hiện như sau:"
sidebar_label: "Docker Login"
sidebar_position: 7
---

# Docker Login

Để thực hiện login tới FPT Container Registry thực hiện như sau: 
**Bước 1** : Trên Menu **FPT Portal** > **Container Registry** > Chọn **Get Token** để lấy thông tin đăng nhập gồm **Username/Secret**
[![](/img/migrated/Picture8-1-23a4563b.png)](/img/migrated/Picture8-1-23a4563b.png)
**Bước 2** : Di chuột vào icon help ⓘ để lấy câu lệnh Login. 
[![](/img/migrated/Picture9-1-4bf5cdaf.png)](/img/migrated/Picture9-1-4bf5cdaf.png)
**Bước 3** : Sử dụng docker cli để login với thông tin đăng nhập trên Portal 
[![](/img/migrated/Picture10-1-aec1f1a9.png)](/img/migrated/Picture10-1-aec1f1a9.png)
Ví dụ: 
Sử dụng lệnh: 

```
Copydocker login registry.fke.fptcloud.com 
```