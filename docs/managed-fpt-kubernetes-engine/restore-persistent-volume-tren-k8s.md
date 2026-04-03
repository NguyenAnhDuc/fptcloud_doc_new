---
id: "restore-persistent-volume-tren-k8s"
title: "Kubernetes 上でのスナップショットからの volume のリストア機能"
description: "MFKE の volume リストア機能を使用して、既存の PV スナップショットから PV データをリストアする方法を説明します。"
sidebar_label: "スナップショットからの volume リストア機能"
sidebar_position: "47"
---

# Restore Persistent Volume trên K8s

* Tính năng restore volume trên MFKE giúp người dùng restore dữ liệu trong PV sử dụng các bản snapshot đã có của PV. Cách thao tác để restore dữ liệu hoàn toàn native với kubernetes, người dùng chỉ cần cấu hình PVC dựa trên snapshot đã có, sau đó chỉnh sửa cấu hình pvc hoặc volumeMount của ứng dụng bằng PVC mới tạo. Tài liệu tham khảo tính năng restore volume trên kubernetes <https://kubernetes.io/docs/concepts/storage/volume-pvc-datasource>

Người dùng thực hiện restore volume bằng cấu hình PVC yaml file:

```
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name:  
  namespace: 
spec:
  dataSource:
    name: new-snapshot-test
    kind: VolumeSnapshot
    apiGroup: snapshot.storage.k8s.io
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 20Gi
```

Sau đó thực hiện cấu hình PVC này trong ứng dụng mong muốn.
