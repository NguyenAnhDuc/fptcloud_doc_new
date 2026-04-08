---
id: "persistent-storage"
title: "FKE cung cấp cho người sử dụng 02 loại Persistent Storage."
description: "FKE cung cấp cho người sử dụng 02 loại Persistent Storage."
sidebar_label: "FKE cung cấp cho người sử dụng 02 loại Persistent Storage."
sidebar_position: 6
---

# Persistent Storage

FKE cung cấp cho người sử dụng 02 loại Persistent Storage.

## A. Block Persistent Storage:
Khi tạo Kubernetes Cluster, hệ thống tự động tạo Storage Class tương ứng với Storage Policy người sử dụng chọn khi tạo Kubernetes Cluster. User có thể sử dụng Storage Class này để tạo PVC dạng RWO.
Block Storage phù hợp cho các ứng dụng cần đọc ghi nhanh, databases…
Để kiểm tra các Storageclass đang có:

```
Copykubectl get sc 
```

VD để tạo PVC (persistent volume claim) sử dụng Storage class có sẵn, user tạo file app-disk.yaml như sau:

```
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: app-disk
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: premium-ssd
  resources:
    requests:
      storage: 5Gi
```

Sau đó thực hiện tạo PVC từ file yaml.

```
Copykubectl apply -f app-disk.yaml 
```

Kiểm tra lại PVC đã được tạo.

```
Copykubectl get pvc 
```

PVC sẽ ở trạng thái pending cho đến khi có Pod sử dụng.

## B. File Persistent Storage:
Khi tạo Kubernetes Cluster, người sử dụng chọn enable NFS hoặc có thể enable sau khi tạo. Sau khi NFS được enable, Storage Class xplat-nfs sẽ được tạo trong cluster với storage size khi user nhập khi enable NFS.
Để kiểm tra các Storageclass đang có:

```
Copykubectl get sc 
```

VD để tạo PVC (persistent volume claim) sử dụng Storage class có sẵn, user tạo file app-disk.yaml như sau:

```
CopyapiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: app-disk
spec:
  accessModes:
    - ReadWriteMany
  storageClassName: xplat-nfs
  resources:
    requests:
      storage: 5Gi 
```

Sau đó thực hiện tạo PVC từ file yaml.

```
Copykubectl apply -f app-disk.yaml 
```

Kiểm tra lại PVC đã được tạo.

```
Copykubectl get pvc 
```
