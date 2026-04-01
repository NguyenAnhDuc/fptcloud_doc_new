---
id: "pull-docker-image-tu-fpt-container-registry-ve-local"
title: "Pull Docker image từ FPT Container Registry về local"
description: "Hướng dẫn pull Docker image từ FPT Container Registry về máy local."
sidebar_label: "Pull Docker image về local"
sidebar_position: 9
pagination_next: null
---

# Pull Docker image từ FPT Container Registry về local

Sau khi đã push image lên registry, bạn có thể pull image về bất kỳ máy nào có quyền truy cập. Mỗi lần pull sẽ tính vào **Pull-limit** của gói dịch vụ đang sử dụng.

1. Tại màn hình **Repository**, click vào image muốn pull để xem thông tin chi tiết.

   [![Danh sách image trong repository](/img/migrated/Picture13-2-f77f73c3.png)](/img/migrated/Picture13-2-f77f73c3.png)

2. Chọn **Detail Repository** để xem chi tiết image. Click icon **copy** để sao chép lệnh pull.

   FPT Cloud hỗ trợ pull theo tag hoặc theo SHA:

   - Pull theo SHA:

     [![Pull image theo SHA](/img/migrated/Picture14-1-8f23c8c0.png)](/img/migrated/Picture14-1-8f23c8c0.png)

   - Pull theo tag:

     [![Pull image theo tag](/img/migrated/Picture15-1-783da3a0.png)](/img/migrated/Picture15-1-783da3a0.png)

   Ví dụ:

   ```bash
   docker pull registry.fke.fptcloud.com/088b6c2e-7fb9-4fd7-b906-779e99c63e32/docker:20.10.12-dind
   ```

3. Sử dụng Docker CLI để pull image về local.

   [![Kết quả pull image thành công](/img/migrated/Picture16-1-000c1df3.png)](/img/migrated/Picture16-1-000c1df3.png)

   Sau mỗi lần pull, **Pull-limit** sẽ được cập nhật:

   [![Cập nhật Pull-limit sau khi pull](/img/migrated/Picture17-1-bc8321ee.png)](/img/migrated/Picture17-1-bc8321ee.png)
