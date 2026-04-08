---
id: "add-worker-group"
title: "Thêm worker group"
description: "Hướng dẫn thêm worker group mới vào cluster Managed FPT Kubernetes Engine đã có."
sidebar_label: "Thêm worker group"
sidebar_position: "10"
draft: true
---

# Thêm worker group

**Bước 1:** Ở menu chọn **Kubernetes** để mở trang **Kubernetes Management**. Chọn cluster muốn thêm worker group.

[![](/img/migrated/15-3314db3f.png)](/img/migrated/15-3314db3f.png)

**Bước 2:** Chọn **Configure Worker Groups**.

[![](/img/migrated/16-1d7abe11.png)](/img/migrated/16-1d7abe11.png)

**Bước 3:** Chọn **Add Worker Group**.

[![](/img/migrated/17-bfaff80b.png)](/img/migrated/17-bfaff80b.png)

**Bước 4:** Nhập các thông tin theo yêu cầu:

[![](/img/migrated/18-1-76d3b20a.png)](/img/migrated/18-1-76d3b20a.png)

- **Type:** Chọn cấu hình CPU và memory cho worker node.
- **Container runtime:** Containerd.
- **Storage policy:** Chọn loại storage policy (tương ứng với IOPS) cho disk của worker node.
- **Disk (GB):** Chọn dung lượng root disk cho worker node.
- **Scale min:** Số VM instance worker node tối thiểu. Khuyến nghị tối thiểu 3 node cho môi trường production.
- **Scale max:** Số VM instance tối đa cho worker group.

**Bước 5:** Kiểm tra lại thông tin và chọn **Save** để thêm worker group.

[![](/img/migrated/19-1-5e45dec7.png)](/img/migrated/19-1-5e45dec7.png)

Quá trình scale cluster sẽ thực hiện trong vài phút và trạng thái cluster chuyển sang **Processing**. Cluster vẫn hoạt động bình thường trong khi thêm worker group mới.
