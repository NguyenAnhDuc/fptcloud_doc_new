---
id: "pull-docker-image-tu-fpt-container-registry-ve-local"
title: "Pull docker image từ FPT Container Registry về local"
description: "Để thực hiện Pull images docker về local thực hiện như sau:"
sidebar_label: "Pull docker image từ FPT Container Registry về local"
sidebar_position: 9
pagination_next: null
---

# Pull Docker Image Tu Fpt Container Registry Ve Local

Để thực hiện Pull images docker về local thực hiện như sau: 
**Bước 1** : Tại màn hình Repository > click vào images muốn pull để xem thông tin chi tiết images. 
[![](/img/migrated/Picture13-2-f77f73c3.png)](/img/migrated/Picture13-2-f77f73c3.png)
**Bước 2** : Chọn Detail Repository để xem thông tin chi tiết images. Kích chọn vào icon copy để copy lệnh pull images. 
  * Cách 1: FPT Cloud hỗ trợ người dùng pull theo tag và pull theo SHA. 

[![](/img/migrated/Picture14-1-8f23c8c0.png)](/img/migrated/Picture14-1-8f23c8c0.png)
  * Cách 2: Pull với tag images 

[![](/img/migrated/Picture15-1-783da3a0.png)](/img/migrated/Picture15-1-783da3a0.png)
Ví dụ: 

```
Copydocker pull registry.fke.fptcloud.com/088b6c2e-7fb9-4fd7-b906-779e99c63e32/docker:20.10.12-dind 
```

**Bước 3** : Sử dụng docker cli để pull images về local 
[![](/img/migrated/Picture16-1-000c1df3.png)](/img/migrated/Picture16-1-000c1df3.png)
Mỗi lần pull images, số lượng **Pull-limit** sẽ được tính toán và trừ sau mỗi lần pull: 
[![](/img/migrated/Picture17-1-bc8321ee.png)](/img/migrated/Picture17-1-bc8321ee.png)