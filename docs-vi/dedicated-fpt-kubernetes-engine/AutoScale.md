---
id: "auto-scale"
title: "Autoscale"
description: "Tính năng Autoscale được enable mặc định khi user thực hiện tạo Kubernetes Cluster với D-FKE."
sidebar_label: "Autoscale"
sidebar_position: 19
---

# Autoscale

Tính năng Autoscale được enable mặc định khi user thực hiện tạo Kubernetes Cluster với D-FKE.
Tính năng Autoscale của D-FKE được phát triển dựa trên công cụ cluster-autoscaler của kubernetes. Hệ thống sẽ tự động điều chỉnh số lượng worker nodes của cluster khi các điều kiện sau thỏa mãn:
  * Pods ở trạng thái pending do thiếu tài nguyên.
  * Nodes trong cluster sử dụng tài nguyên (CPU & RAM) nhỏ hơn 50% trong một khoảng thời gian (mặc định là 15 phút) và các Pods trên nodes đó có thể di chuyển qua nodes khác.

Tham khảo: <https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler>
Để sử dụng tính năng cluster-autoscaler, user sử dụng phối hợp với HPA (HorizontalPodAutoscaler)
  * Scale-up: HPA tự động tạo thêm Pods khi tài nguyên sử dụng vượt ngưỡng được đặt. Khi Pods mới được tạo ra, nếu Worker Nodes không đủ tài nguyên Pod request, cluster-autoscaler sẽ tự động tạo thêm Worker Nodes để đáp ứng số Pods được tạo mới.
  * Scale-down: HPA tự động giảm số lượng Pods khi tài nguyên sử dụng nhỏ hơn ngưỡng được đặt. Khi đó, các Nodes sẽ giảm tài nguyên sử dụng và được tự động giảm đi bởi cluster-autoscaler.

Tham khảo: <https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/>
Các tình huống sử dụng cơ bản:
– Để cố định số lượng worker nodes: user có thể đặt số lượng Min = Max.
– Chặn Cluster Autoscaler thực hiện scale down node cố định: Cluster Autoscaler sẽ không thực hiện scale down node có annotation sau:

```
Copy"cluster-autoscaler.kubernetes.io/scale-down-disabled": "true"
```

Sử dụng command sau để thêm annotation:

```
Copykubectl annotate node  cluster-autoscaler.kubernetes.io/scale-down-disabled=true
```
