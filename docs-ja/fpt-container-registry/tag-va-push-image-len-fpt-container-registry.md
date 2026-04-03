---
id: "tag-va-push-image-len-fpt-container-registry"
title: "Tag và push image lên FPT Container Registry"
description: "Hướng dẫn tag và push Docker image từ local lên FPT Container Registry."
sidebar_label: "Tag và push image"
sidebar_position: "8"
---

# Tag và push image lên FPT Container Registry

Sau khi đăng nhập thành công, bạn cần tag image local với URI của FPT Container Registry trước khi push lên. Việc này giúp Docker biết đích đến khi thực hiện push.

1. Tag image local với URI của FPT Container Registry:

   ```bash
   docker tag SOURCE_IMAGE[:TAG] registry.fke.fptcloud.com/<registry-id>/REPOSITORY[:TAG]
   ```

   Trong đó `<registry-id>` sẽ được tự động điền nếu bạn sao chép câu lệnh từ FPT Portal.

   Ví dụ:

   ```bash
   docker tag docker:20.10.12-dind registry.fke.fptcloud.com/088b6c2e-7fb9-4fd7-b906-779e99c63e32/docker:20.10.12-dind
   ```

2. Push image lên FPT Container Registry:

   ```bash
   docker push registry.fke.fptcloud.com/<registry-id>/REPOSITORY[:TAG]
   ```

   Ví dụ:

   ```bash
   docker push registry.fke.fptcloud.com/088b6c2e-7fb9-4fd7-b906-779e99c63e32/docker:20.10.12-dind
   ```

3. Kiểm tra kết quả push image trên Portal.

   [![Kết quả push image thành công](/img/migrated/Picture11-1-9de7f6f9.png)](/img/migrated/Picture11-1-9de7f6f9.png)

   [![Danh sách image sau khi push](/img/migrated/Picture12-2-6e60be56.png)](/img/migrated/Picture12-2-6e60be56.png)
