---
id: "cau-hinh-timereconcile"
title: "Cấu hình TimeReconcile"
description: "Argo CD hỗ trợ người dùng cấu hình thời gian kiểm tra các thay đổi của k8s cluster với repository deployment thông qua c"
sidebar_label: "Cấu hình TimeReconcile"
sidebar_position: 18
---

# Cau Hinh Timereconcile

Argo CD hỗ trợ người dùng cấu hình thời gian kiểm tra các thay đổi của k8s cluster với repository deployment thông qua cấu hình TimeReconcile trên Portal. Mặc định ArgoCD sẽ kiểm tra các thay đổi mỗi 3 phút 1 lần. FPT Cloud hỗ trợ người dùng cấu hình thông qua giao diện như sau:
**Bước 1:** Tại màn hình **Configuration** > chọn **TimeReconcile** [![](/img/migrated/Picture37-4-2e5b4285.png)](/img/migrated/Picture37-4-2e5b4285.png) **Bước 2:** Thực hiện cấu hình TimeReconcile như sau:
**Lưu ý: Người dùng nhập thời gian để reconcile. Ví dụ: 10s,20s,30s,1h,…** [![](/img/migrated/Picture38-4-9e381d9c.png)](/img/migrated/Picture38-4-9e381d9c.png) [![](/img/migrated/Picture39-4-21be09d3.png)](/img/migrated/Picture39-4-21be09d3.png) **Bước 3:** Kết quả sau khi cấu hình [![](/img/migrated/Picture40-2-90742bf4.png)](/img/migrated/Picture40-2-90742bf4.png)