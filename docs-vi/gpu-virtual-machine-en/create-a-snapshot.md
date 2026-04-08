---
id: "create-a-snapshot"
title: "Create A Snapshot"
description: "Create A Snapshot trên GPU Virtual Machine."
sidebar_label: "Create A Snapshot"
sidebar_position: 23
---

# Create A Snapshot

**Snapshot** là các **disk image** theo yêu cầu của **GPU VM** và **volume** được lưu vào tài khoản của bạn. Bạn có thể sử dụng chúng để **tạo GPU VM** và **volume** mới với cùng nội dung.

Lưu ý: Tính năng này chỉ hỗ trợ **GPU VM sử dụng Block Storage – Persistent Disk**.

### Tạo Snapshot
Tính năng **Snapshot** cho phép bạn ghi lại **trạng thái hiện tại của máy ảo**, cho phép khôi phục nhanh hoặc rollback trong trường hợp thay đổi hệ thống hoặc sự cố.

[![Alt text](/img/migrated/Create-a-Snapshot-1-6cd88936.png)](/img/migrated/Create-a-Snapshot-1-6cd88936.png)

**Bước 1:** Mở **Instance Management** từ **Side menu**.

**Bước 2:** Tìm **GPU VM** bạn muốn tạo Snapshot và nhấp biểu tượng **3 chấm**.

**Bước 3:** Tạo **instance snapshot** bằng cách nhập **tên snapshot** và **tag** (tùy chọn).

Snapshot đã tạo sẽ xuất hiện trong phần **Snapshot**.
[![Alt text](/img/migrated/Create-a-Snapshot-2-28d60c6a.png)](/img/migrated/Create-a-Snapshot-2-28d60c6a.png)

### Sử dụng Snapshot
[![Alt text](/img/migrated/Create-a-Snapshot-3-f015bb9d.png)](/img/migrated/Create-a-Snapshot-3-f015bb9d.png)

**Bước 1:** Mở phần **Snapshot** từ **Side menu**.

**Bước 2:** Tìm Snapshot bạn muốn sử dụng và nhấp biểu tượng **3 chấm**. Lưu ý: Chỉ **Snapshot đang hoạt động** mới có thể được sử dụng.

**Bước 3:** Bạn có thể chọn một trong các hành động sau:
  * **Launch as an instance:** Tạo máy ảo mới trực tiếp từ Snapshot này.
  * **Create storage disk:** Tạo volume storage mới dựa trên dữ liệu của Snapshot.
  * **Manage tags:** Thêm hoặc chỉnh sửa tags để tổ chức Snapshot.
  * **Delete image:** Xóa vĩnh viễn Snapshot.

### Xóa Snapshot
Để xóa Snapshot, hãy thực hiện các bước sau:

**Bước 1:** Trong menu, chọn **Snapshot**, sau đó trong menu **Actions** của Snapshot, nhấp **Delete Image**.

**Bước 2:** Nhấp **Delete Snapshot**.

Sau khi bạn xác nhận xóa, hệ thống sẽ xóa image và giải phóng các tài nguyên Snapshot đang được sử dụng bởi VPC. Bạn sẽ được thông báo khi việc xóa Snapshot hoàn tất.

Nếu bạn chọn tùy chọn **"Delete all volume snapshots attached to this image"**, tất cả Snapshot được tạo từ storage disk gắn vào VM đó cũng sẽ bị xóa.

[![Alt text](/img/migrated/Create-a-Snapshot-4-675e8c9e.png)](/img/migrated/Create-a-Snapshot-4-675e8c9e.png)
