---
id: "thay-doi-cluster-endponit-access"
title: "Thay đổi Cluster Endpoint Access"
description: "**Để thay đổi Access Mode của cụm Kubernetes trên FPT Cloud, khách hàng làm theo hướng dẫn sau:**"
sidebar_label: "Thay đổi Cluster Endpoint Access"
sidebar_position: 11
---

# Thay đổi Cluster Endpoint Access

**Để thay đổi Access Mode của cụm Kubernetes trên FPT Cloud, khách hàng làm theo hướng dẫn sau:**
Lưu ý: 
  * M-FKE chỉ hỗ trợ chuyển đổi Access Mode từ Public & Privae ➔ Private và ngược lại.
  * M-FKE không hỗ trợ chuyển đổi Access Mode nếu cụm Kubernetes đang ở mode Public.

**Bước 1:** Chọn cluster muốn thay đổi Access Mode, click vào cluster name
[![](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)
**Bước 2:** Tại mục Cluster Endpoint Access, click button Edit
[![](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)
**Bước 3:** Chọn Access Mode mong muốn, nhập Allow CIDR hợp lệ và click button Confirm.
[![](/img/migrated/Screenshot-2025-03-20-152635-8d2271bf.png)](/img/migrated/Screenshot-2025-03-20-152635-8d2271bf.png)
**Để update lại Allow CIDR, khách hàng làm theo hướng dẫn sau:**
**Bước 1:** Chọn cluster muốn thay đổi Access Mode, click vào cluster name
[![](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)
**Bước 2:** Tại mục Cluster Endpoint Access, click button Edit
[![](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)
**Bước 3:** Nhập thêm dải CIDR hợp lệ và click button Confirm.
[![](/img/migrated/Screenshot-2025-03-20-153324-cab3a4aa.png)](/img/migrated/Screenshot-2025-03-20-153324-cab3a4aa.png)
**Để xóa bỏ Allow CIDR, khách hàng làm theo hướng dẫn sau:**
**Bước 1:** Chọn cluster muốn thay đổi Access Mode, click vào cluster name
[![](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)
**Bước 2:** Tại mục Cluster Endpoint Access, click button Edit
[![](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)
**Bước 3:** Xóa bỏ toàn bộ CIDR đã có và click button Confirm
[![](/img/migrated/Screenshot-2025-03-20-153755-e5b8d33b.png)](/img/migrated/Screenshot-2025-03-20-153755-e5b8d33b.png)
[![](/img/migrated/Screenshot-2025-03-20-153912-95e50f54.png)](/img/migrated/Screenshot-2025-03-20-153912-95e50f54.png)
Quá trình update Access Mode sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing**. Cluster vẫn hoạt động bình thường khi thực hiện chuyển Access Mode mới.
