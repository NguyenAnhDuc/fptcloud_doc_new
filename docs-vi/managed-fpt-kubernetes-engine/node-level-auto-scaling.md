---
id: "node-level-auto-scaling"
title: "Tự động scale ở cấp độ node"
description: "Kubernetes cluster tự động tăng/giảm số lượng Worker Node trong Worker Group tùy theo mức sử dụng GPU."
sidebar_label: "Tự động scale ở cấp độ node"
sidebar_position: "26"
---

# Tự động scale ở cấp độ node

Tương tự như cách Cluster Autoscale hoạt động với M-FKE, Kubernetes cluster sẽ tự động tăng/giảm số lượng Worker Node trong một Worker Group tùy theo mức sử dụng GPU: thêm Worker Node mới vào Worker Group nếu ứng dụng chạy trên worker group đó không nhận đủ tài nguyên (GPU) từ các node trong pool. Các Pod đang Pending sẽ được phân bổ sang các Worker Node mới được tạo sau khi scale. Cluster Autoscale cũng sẽ xóa các node không đáp ứng yêu cầu sử dụng (mặc định là 50%) cho node đó.
Tham khảo thêm tại [FPT Cloud Managed Kubernetes Autoscaler](../managed-fpt-kubernetes-engine/index.md)
Số lượng node trong một Worker Group được định nghĩa trên FPT Cloud Portal như hình dưới đây:
[![](/img/migrated/63-1-477eea30.png)](/img/migrated/63-1-477eea30.png)
