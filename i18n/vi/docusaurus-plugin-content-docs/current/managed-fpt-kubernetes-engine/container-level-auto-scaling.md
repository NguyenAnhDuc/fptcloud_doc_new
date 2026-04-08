---
id: "container-level-auto-scaling"
title: "Tự động scale ở cấp độ container"
description: "Horizontal Pod Autoscaler (HPA) tự động điều chỉnh phân bổ tài nguyên cho workload resource để scale động theo nhu cầu tài nguyên của ứng dụng."
sidebar_label: "Tự động scale ở cấp độ container"
sidebar_position: "25"
draft: true
---

# Tự động scale ở cấp độ container

**Horizontal Pod Autoscaler (HPA)** tự động điều chỉnh phân bổ tài nguyên cho workload resource (như Deployment hoặc StatefulSet) để scale động theo nhu cầu tài nguyên của ứng dụng. Cụ thể, khi workload của ứng dụng chạy trên Kubernetes tăng lên, HPA sẽ triển khai thêm Pod để đáp ứng nhu cầu tài nguyên. Khi workload giảm và số lượng Pod nhiều hơn mức tối thiểu đã cấu hình, HPA sẽ giảm tài nguyên workload, tức là giảm số lượng Pod. HPA cho GPU sử dụng custom metric từ DCGM để giám sát và scale Pod dựa trên mức sử dụng GPU của ứng dụng.

_Ví dụ deployment với GPU HPA:_

```yaml
apiVersion: autoscaling/v2beta2
kind: HorizontalPodAutoscaler
metadata:
 name: my-gpu-app
spec:
 maxReplicas: 3  # Cập nhật theo nhu cầu
 minReplicas: 1
 scaleTargetRef:
   apiVersion: apps/v1beta1
   kind: Deployment
   name: my-gpu-app # Thêm label từ Deployment cần autoscale
 metrics:
 - type: Pods  # scale pod dựa trên gpu
   pods:
     metric:
       name: DCGM_FI_PROF_GR_ENGINE_ACTIVE  # Thêm DCGM metric phù hợp
     target:
       type: AverageValue
       averageValue: 0.8 # Đặt ngưỡng theo yêu cầu
```

_Tham khảo thêm tại [NVIDIA's DCGM Metrics docs](https://docs.nvidia.com/datacenter/dcgm/1.6/dcgm-api/group__dcgmFieldIdentifiers.html#group__dcgmFieldIdentifiers_1ga12c2f22beff3cf71f7ecf9ad905b8ca)_

Bạn có thể xem HPA bằng lệnh:

```
kubectl get hpa -A
```

[![](/img/migrated/73-9f2c36c7.png)](/img/migrated/73-9f2c36c7.png)
