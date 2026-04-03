---
id: "thay-doi-cau-hinh-internal-subnet-load-balancer"
title: "Internal subnet Load Balancer（CIDR）設定の変更"
description: "FPT Cloud は Unify Portal 上で Internal subnet Load Balancer（CIDR）の範囲を変更できます。"
sidebar_label: "Internal subnet Load Balancer（CIDR）設定の変更"
sidebar_position: "13"
---

# Thay đổi cấu hình Internal Subnet Load Balancer

FPT Cloud hỗ trợ khách hàng thay đổi dải Internal subnet load balancer (CIDR) ngay trên Unify portal, để thực hiện khách hàng làm theo các bước sau:
**Bước 1** : Chọn cluster muốn thay đổi Internal subnet Load Balancer, click vào cluster name.
[![](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)
**Bước 2** : Chọn tab **Advanced** , click button Config Internal subnet Load Balancer.
[![](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)
**Bước 3** : Nhập dải CDIR hợp lệ và click button **Confirm**
[![](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)
Quá trình update Internal subnet Load Balancer sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing**. Cluster vẫn hoạt động bình thường khi thực hiện chuyển Internal subnet Load Balancer (CIDR) mới.
