---
id: "tag-va-push-image-len-fpt-container-registry"
title: "Tag và Push image lên FPT Container Registry"
description: "Để thực hiện tag và push một images tới FPT Container Registry, người dùng thực hiện như sau:"
sidebar_label: "Tag và Push image lên FPT Container Registry"
sidebar_position: 8
---

# Tag Va Push Image Len Fpt Container Registry

Để thực hiện tag và push một images tới FPT Container Registry, người dùng thực hiện như sau: 
**Bước 1** : Tag một images ở máy local đến URI của FPT Container Registry bằng câu lệnh sau: 

```
Copydocker tag SOURCE_IMAGE[:TAG] registry.fke.fptcloud.com/<> /REPOSITORY[:TAG] 
```

Trong đó: 
<> sẽ được tự động điền nếu bạn lấy câu lệnh từ FPT Portal 
Ví dụ: 

```
Copydocker tag docker:20.10.12-dind registry.fke.fptcloud.com/088b6c2e-7fb9-4fd7-b906-779e99c63e32/docker:20.10.12-dind 
```

**Bước 2** : Sau khi tag xong images tới URI Registry FPT Cloud, thực hiện push images 

```
Copydocker push registry.fke.fptcloud.com//<>/REPOSITORY[:TAG] 
```

Trong đó: 
<> sẽ được tự động điền nếu bạn lấy câu lệnh từ FPT Portal 
Ví dụ: 

```
docker push registry.fke.fptcloud.com/088b6c2e-7fb9-4fd7-b906-779e99c63e32/docker:20.10.12-dind 
```

Bước 3: Kiểm tra kết quả push images 
[![](/img/migrated/Picture11-1-9de7f6f9.png)](/img/migrated/Picture11-1-9de7f6f9.png)
[![](/img/migrated/Picture12-2-6e60be56.png)](/img/migrated/Picture12-2-6e60be56.png)