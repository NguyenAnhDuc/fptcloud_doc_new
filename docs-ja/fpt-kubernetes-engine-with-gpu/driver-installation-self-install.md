---
id: "driver-installation-self-install"
title: "Hướng dẫn cài đặt GPU Driver trên Kubernetes"
sidebar_label: "Hướng dẫn cài đặt GPU Driver trên Kubernetes"
sidebar_position: "10"
---

# Hướng dẫn cài đặt GPU Driver trên Kubernetes

Người dùng có thể tự cài đặt GPU Driver mong muốn trên cụm FPT Kubernetes Engine tích hợp GPU.
Các bước thực hiện như sau:
**Bước 1: Khởi tạo GPU Cluster với Driver Installation là User-Install**
  * _Tạo Cluster chọn Driver Installation là User-Install_

**Bước 2: Khách hàng tự install các phần mềm để sử dụng được GPU (Driver, Toolkit, Device Plugin, …)**
**Tham khảo các phiên bản GPU driver:**
  * **Release Notes** : <https://docs.nvidia.com/datacenter/tesla/index.html> <https://docs.nvidia.com/datacenter/tesla/drivers/releases.json>
  * **Document** : <https://docs.nvidia.com/datacenter/tesla/drivers/index.html>
  * **Bộ cài đặt** : <https://download.nvidia.com/XFree86/Linux-x86_64/>

  * _Khách hàng có thể tham khảo DaemonSet cài đặt Driver dưới đây:_

```
# worker.fptcloud/type=gpu

apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fptcloud-gpu-driver-installer
  namespace: kube-system
  labels:
    k8s-app: gpu-driver
spec:
  selector:
    matchLabels:
      k8s-app: gpu-driver
  updateStrategy:
    type: RollingUpdate
  template:
    metadata:
      labels:
        name: nvidia-driver-installer
        k8s-app: gpu-driver
    spec:
      priorityClassName: system-node-critical
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: worker.fptcloud/type
                operator: In
                values: ["gpu"]
      tolerations:
      - operator: "Exists"
      containers:
        - image: docker.io/alpine:3.13
          name: nvidia-driver-installer
          command:
            - 'nsenter'
            - '-t'
            - '1'
            - '-m'
            - '-u'
            - '-i'
            - '-n'
            - '--'
            - 'bash'
            - '-l'
            - '-c'
            - 'curl -Ls https://raw.githubusercontent.com/fci-xplat/fke-config/main/fptcloud-gpu-driver-installer.sh | bash -s -- -p admin'
          resources:
            requests:
              cpu: 150m
          env:
          - name: NVIDIA_DRIVER_VERSION
            value: "535.54.03"
          - name: NVIDIA_TOOLKIT_INSTALL
            value: "true"
          imagePullPolicy: IfNotPresent
          securityContext:
            privileged: true
            allowPrivilegeEscalation: true
      hostPID: true
      hostNetwork: true
      hostIPC: true
```

Với tham số biến môi trường:
  * **NVIDIA_DRIVER_VERSION** : Phiên bản của Driver
  * **NVIDIA_TOOLKIT_INSTALL** : “true” hoặc “false”, mặc định là “true”. Tự động tự cài đặt toolkit hoặc không.

  * _Để apply fptcloud daemonset vào cụm K8s dùng lệnh sau:_

```
Copykubectl apply -f https://raw.githubusercontent.com/fci-xplat/fke-config/main/fptcloud-gpu-driver-installer.yaml
```

  * _Kiểm tra trạng thái Pod của DaemonSet_

```
Copykubectl get pod -n kube-system | grep "gpu-driver"
```

```
CopyNAME                                                 READY   STATUS    RESTARTS        AGE
fptcloud-gpu-driver-installer-7tj55                  1/1     Running   0               2d17h
```

DaemonSet fptcloud-gpu-driver-installer sẽ shedule pod ở tất cả các worker trong Worker Group (có label worker.fptcloud/type: gpu) để tiến hành cài đặt Driver/Toolkit.
  * _Kiểm tra logs của pod fptcloud-gpu-driver-installer-7tj55 xem Installer đã cài đặt xong hay chưa_

```
Copykubectl logs fptcloud-gpu-driver-installer-7tj55 -n kube-system
```

```
CopyVerifying Nvidia installation... DONE.
Clean Nvidia installation... DONE.
```

Nếu cài đặt thành công sẽ có logs như trên. Quá trình cài đặt thường diễn ra trong khoảng một vài phút.
