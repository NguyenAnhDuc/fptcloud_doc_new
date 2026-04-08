---
id: "deploy-application-in-worker-pool"
title: "Triển khai ứng dụng trên worker pool"
description: "Sản phẩm M-FKE quản lý worker dựa trên worker pool, hỗ trợ người dùng triển khai ứng dụng mà không cần lo lắng về vấn đề scale tài nguyên."
sidebar_label: "Triển khai ứng dụng trên worker pool"
sidebar_position: "17"
draft: true
---

# Triển khai ứng dụng trên worker pool

Sản phẩm M-FKE quản lý worker dựa trên worker pool, hỗ trợ người dùng triển khai ứng dụng mà không cần lo lắng về vấn đề scale tài nguyên.

### Cấu hình file manifest để triển khai ứng dụng
Ví dụ: triển khai ứng dụng trên cluster có 02 worker pool:
[![](/img/migrated/38-1-6efb9b88.png)](/img/migrated/38-1-6efb9b88.png)
Mỗi worker pool có một worker node:
[![](/img/migrated/39-1-b46c56f7.png)](/img/migrated/39-1-b46c56f7.png)
Worker node được gán label để phân biệt các node và dễ dàng triển khai ứng dụng lên node có label chung:
[![](/img/migrated/40-1-bd0237e9.png)](/img/migrated/40-1-bd0237e9.png)
Worker node thuộc worker pool **worker-1zx5wqdu** được gán label **worker.fptcloud/pool=worker-1zx5wqdu**.
Người dùng có thể sao chép tên worker pool khi bấm vào chi tiết cấu hình của worker pool.
[![](/img/migrated/41-1-c6efbda0.png)](/img/migrated/41-1-c6efbda0.png)
Khi sử dụng tài nguyên để triển khai ứng dụng trong Kubernetes (Pod, Deployment, StatefulSet, DaemonSet, ReplicaSet), người dùng có thể thêm **Node Affinity Rule** hoặc **Node Selector** trong phần Specification của file cấu hình:
[![](/img/migrated/42-1-57d47fd0.png)](/img/migrated/42-1-57d47fd0.png)
[![](/img/migrated/43-1-21ff93a1.png)](/img/migrated/43-1-21ff93a1.png)
Trong trường hợp này, giá trị nhập vào mục **values** (dùng **Node Affinity Rule**) và giá trị trong mục **nodeSelector** là tên worker pool mà người dùng muốn triển khai ứng dụng lên.

### Triển khai ứng dụng:
Khi triển khai ứng dụng NGINX bằng file manifest:
[![](/img/migrated/44-1-ee17e782.png)](/img/migrated/44-1-ee17e782.png)
Một pod ở trạng thái **Pending** do worker node trong pool không đủ tài nguyên để chạy pod:
[![](/img/migrated/45-1-29ab2f37.png)](/img/migrated/45-1-29ab2f37.png)
Thành phần **Cluster Autoscaler** của FPT Cloud sẽ tự động scale out thêm worker node vào pool đó để phục vụ nginx pod đang Pending.
[![](/img/migrated/46-1-1acc0d3d.png)](/img/migrated/46-1-1acc0d3d.png)
Sau khi thêm worker node vào worker pool, nginx pod trước đó ở trạng thái **Pending** sẽ chuyển sang trạng thái **Running**.
Khi scale ứng dụng xuống dùng ít pod hơn, tài nguyên sẵn có trên worker node tăng lên. Khi mức sử dụng CPU và Memory so với tài nguyên tối đa của node giảm xuống dưới 50% trong 10 phút liên tiếp, node đó sẽ tự động bị xóa khỏi worker pool, tiết kiệm chi phí cho người dùng.
