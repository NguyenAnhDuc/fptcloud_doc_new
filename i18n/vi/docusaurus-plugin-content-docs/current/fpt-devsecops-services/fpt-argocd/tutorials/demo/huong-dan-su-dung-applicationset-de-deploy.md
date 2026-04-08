---
id: "huong-dan-su-dung-applicationset-de-deploy"
title: "Hướng dẫn sử dụng applicationset để deploy"
description: "Để sử dụng chức năng liên quan đến applications set, sử dụng command để deploy và check applications Đăng nhập tới argoc"
sidebar_label: "Hướng dẫn sử dụng applicationset để deploy"
sidebar_position: 7
---

# Hướng dẫn sử dụng applicationset để deploy

Để sử dụng chức năng liên quan đến applications set, sử dụng command để deploy và check applications Đăng nhập tới argocd server sử dụng cli

```
Copyargocd login dashboard.argocd.cd.fke.fptcloud.com --grpc-web-root-path yk3n2ph2
```

**_1. Tạo applications sử dụng Git Generators_**
**Bước 1** : Chuẩn bị manifest sử dụng Git Directory Generator
[![](/img/migrated/Picture86-1-29f58a8f.png)](/img/migrated/Picture86-1-29f58a8f.png)
**Bước 2** : Sử dụng cli để apply applicationsSet:

```
Copyargocd appset create applicationset.yaml
```

Kết quả sau khi chạy cli:

```
CopyApplicationSet 'color-applicaitonset' created
```

Bước 3: Kết quả sau khi tạo applications với applicationsSet
[![](/img/migrated/Picture87-1-daafd74f.png)](/img/migrated/Picture87-1-daafd74f.png)
List Appset sau khi sử dụng cli để get list:

```
Copyargocd appset list
```

[![](/img/migrated/Picture88-1-bead1fd9.png)](/img/migrated/Picture88-1-bead1fd9.png)
**_2. Tạo applacations sử dụng list generator_**
**Bước 1** : Chuẩn bị manifest để deploy
[![](/img/migrated/Picture89-1-6e77044f.png)](/img/migrated/Picture89-1-6e77044f.png)
Bao gồm các file:
[![](/img/migrated/Picture90-1-ac3063df.png)](/img/migrated/Picture90-1-ac3063df.png)
**Bước 2** : Tạo applications sử dụng applications set sử dụng cli:

```
Copyargocd appset create applicationset.yaml
```

**Bước 3** : Kết quả sau khi tạo appset:
[![](/img/migrated/Picture91-1-6e2e43ce.png)](/img/migrated/Picture91-1-6e2e43ce.png) [![](/img/migrated/Picture92-1-74948904.png)](/img/migrated/Picture92-1-74948904.png)
