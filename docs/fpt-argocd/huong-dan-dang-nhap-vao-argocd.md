---
id: "huong-dan-dang-nhap-vao-argocd"
title: "Hướng dẫn đăng nhập vào ArgoCD"
description: "**Cách 1:** Đăng nhập ArgoCD qua giao diện với username/password [![](/img/migrated/Picture72-2-4d518451.png)](/img/migr"
sidebar_label: "Hướng dẫn đăng nhập vào ArgoCD"
sidebar_position: "43"
---

# Huong Dan Dang Nhap Vao Argocd

**Cách 1:** Đăng nhập ArgoCD qua giao diện với username/password [![](/img/migrated/Picture72-2-4d518451.png)](/img/migrated/Picture72-2-4d518451.png) **Cách 2:** Đăng nhập ArgoCD với argocd cli
  * Trong mục Documentations > Dowload cli tool [![](/img/migrated/Picture73-2-e0b0b838.png)](/img/migrated/Picture73-2-e0b0b838.png)
  * Cài đặt cli tool:

Đăng nhập vào cụm Argocd đã tạo: Với url: [](https://dashboard.argocd.cd.fke.fptcloud.com/fnl2dws3)

```
Copyargocd login dashboard.argocd.cd.fke.fptcloud.com --grpc-web-root-path fnl2dws3
```

Sử dụng user/password trên portal để đăng nhập
Ví dụ: [![](/img/migrated/Picture74-2-ed62b525.png)](/img/migrated/Picture74-2-ed62b525.png)
