---
id: "deploy-application-with-gpu-on-k8s"
title: "Triển khai ứng dụng sử dụng GPU trên Kubernetes"
description: "Hướng dẫn triển khai ứng dụng có sử dụng GPU trên Kubernetes của FPT Cloud."
sidebar_label: "Triển khai ứng dụng sử dụng GPU trên Kubernetes"
sidebar_position: "23"
---

# Triển khai ứng dụng sử dụng GPU trên Kubernetes

Kubernetes quản lý và sử dụng tài nguyên GPU tương tự như cách quản lý tài nguyên CPU. Tùy thuộc vào thông số GPU của Worker Group, bạn cần cấu hình tài nguyên GPU cho ứng dụng chạy trên Kubernetes phù hợp.

**Lưu ý:**
  * Bạn có thể khai báo GPU limit mà không cần khai báo GPU request vì Kubernetes mặc định sử dụng giá trị limit làm request.
  * Bạn có thể khai báo cả GPU limit và request nhưng hai giá trị này phải bằng nhau.
  * Bạn không thể khai báo GPU request mà không khai báo limit.

Bạn có thể xem thông số GPU trên Kubernetes bằng lệnh:

```
kubectl get node ||worker-node|| -o json | jq '.items[].metadata.labels'
```

[![](/img/migrated/58-1-2657a252.png)](/img/migrated/58-1-2657a252.png)
Ví dụ, hình trên hiển thị worker đang sử dụng NVIDIA A30 GPU, với chiến lược cấu hình là **all-balanced** và trạng thái là **success**.
Bạn có thể xem thông số GPU Instance bằng lệnh (ssh vào worker node, sau đó chạy lệnh):

```
nvidia-smi mig -lgi
```

[![](/img/migrated/59-1-bb3d5068.png)](/img/migrated/59-1-bb3d5068.png)

### Ví dụ triển khai ứng dụng với GPU workload:
  * Với strategy **single**, tài nguyên GPU được khai báo như sau:

```
nvidia.com/gpu: ||gpu-count||
```

_Ví dụ:_

```
nvidia.com/gpu: 1
```

**Lưu ý:** Với **strategy: single**, GPU được chia đều thành các instance.

_Ví dụ deployment với **strategy: single**:_

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-gpu-app
spec:
  replicas: 1
  selector:
    matchLabels:
      component: gpu-app
  template:
    metadata:
      labels:
        component: gpu-app
    spec:
      containers:
        - name: gpu-container
          securityContext:
            capabilities:
              add:
                - SYS_ADMIN
          resources:
            limits:
              nvidia.com/gpu: 1
          image: nvidia/samples:dcgmproftester-2.0.10-cuda11.0-ubuntu18.04
          command: ["/bin/sh", "-c"]
          args:
            - while true; do /usr/bin/dcgmproftester11 --no-dcgm-validation -t 1004 -d 300; sleep 30; done
```

  * Với strategy **mixed**, tài nguyên GPU được khai báo như sau:

```
nvidia.com/||mig-profile||: ||gpu-count||
```

_Ví dụ:_

```
nvidia.com/mig-1g.6gb: 2
```

**Lưu ý:** Với **strategy: mixed**, GPU được chia thành 2 loại instance, vì vậy cần khai báo rõ loại instance khi khai báo tài nguyên.

_Ví dụ deployment với **strategy: mixed**:_

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-gpu-app
spec:
  replicas: 1
  selector:
    matchLabels:
      component: gpu-app
  template:
    metadata:
      labels:
        component: gpu-app
    spec:
      containers:
        - name: gpu-container
          securityContext:
            capabilities:
              add:
                - SYS_ADMIN
          resources:
            limits:
              nvidia.com/mig-1g.6gb: 1
          image: nvidia/samples:dcgmproftester-2.0.10-cuda11.0-ubuntu18.04
          command: ["/bin/sh", "-c"]
          args:
            - while true; do /usr/bin/dcgmproftester11 --no-dcgm-validation -t 1004 -d 300; sleep 30; done
```

  * Với strategy **none**, tài nguyên GPU được khai báo như sau:

```
nvidia.com/gpu: 1
```

**Lưu ý:** Với **strategy: none**, GPU được phân bổ toàn bộ cho pod ứng dụng.

_Ví dụ deployment với **strategy: none**:_

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-gpu-app
spec:
  replicas: 1
  selector:
    matchLabels:
      component: gpu-app
  template:
    metadata:
      labels:
        component: gpu-app
    spec:
      containers:
        - name: gpu-container
          securityContext:
            capabilities:
              add:
                - SYS_ADMIN
          resources:
            limits:
              nvidia.com/gpu: 1
          image: nvidia/samples:dcgmproftester-2.0.10-cuda11.0-ubuntu18.04
          command: ["/bin/sh", "-c"]
          args:
            - while true; do /usr/bin/dcgmproftester11 --no-dcgm-validation -t 1004 -d 300; sleep 30; done
```
