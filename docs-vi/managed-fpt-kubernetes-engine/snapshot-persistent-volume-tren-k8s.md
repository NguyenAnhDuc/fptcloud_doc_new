---
id: "snapshot-persistent-volume-tren-k8s"
title: "Tính năng snapshot Persistent Volume trên kubernetes"
description: "* Tính năng snapshot persistent volume (PV) giúp người dùng có thể tạo snapshot của một PV trên M-FKE kubernetes cluster"
sidebar_label: "Tính năng snapshot Persistent Volume trên kubernetes"
sidebar_position: 46
---

# Snapshot Persistent Volume Tren K8S

* Tính năng snapshot persistent volume (PV) giúp người dùng có thể tạo snapshot của một PV trên M-FKE kubernetes cluster bằng cách cấu hình và triển khai file yaml định nghĩa pvc mong muốn snapshot. Sau khi resource snapshot trong kubernetes cluster được tạo ra, một bản snapshot tương ứng sẽ được tạo mới ở VPC. Việc snapshot volume trên MFKE được thực hiện bởi thành phần VolumeSnapshotClass, người dùng chỉ cần định nghĩa tên của pvc cần snapshot. Người dùng cũng có thể chủ động lập lịch snapshot PV định kì bằng cách tạo script liên tục call api tạo snapshot trong kubernetes. Tài liệu tham khảo tính năng snapshot volume trên kubernetes [](https://kubernetes.io/docs/concepts/storage/volume-snapshots/)
  * Trong kubernetes, volume snapshot là một bản copy point-in-time của nội dùng PV trong cluster. Người dùng có thể sử dụng snapshot để backup dữ liệu của cluster hoặc copy dữ liệu tới các resource khác mà không cần tạo mới volume.
  * Trước tiên người dùng cần cấu hình VolumeSnapshotClass nếu trong cluster chưa tồn tại VolumeSnapshotClass nào:

```
CopyapiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshotClass
metadata:
  name: csi-cinder-snapclass
  annotations:
    snapshot.storage.kubernetes.io/is-default-class: "true"
driver: cinder.csi.openstack.org
deletionPolicy: Delete
parameters:
  type: [type-storage-policy]
  force-create: "true"
```

Trong đó _[type-storage-policy]_ là loại storage policy người dùng sử dụng, có thể lấy thông tin này ở trường parametes/type trong cấu hình storageClass default.
Người dùng cần có một volume đang được sử dụng trong cluster (được tạo bởi PVC). Giả sử cấu hình của PVC như sau:

```
CopyapiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: test-pvc
  namespace: default
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 20Gi
```

Người dùng tạo một bản snapshot volume bằng cách định nghĩa VolumeSnapshot trong kubernetes:

```
CopyapiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshot
metadata:
  name: new-snapshot-test
  namespace: default
spec:
  volumeSnapshotClassName: csi-cinder-snapclass
  source:
    persistentVolumeClaimName: test-pvc
```

Trong đó 
  * _volumeSnapshotClassName_ được cung cấp mặc định bởi FPTCloud, người dùng có thể sử dụng _volumeSnapshotClassName_ theo cấu hình nhu cầu mong muốn.
  * _persistentVolumeClaimName_ là tên PVC mong muốn tạo snapshot.

Sau khi tạo xong snapshot trong kubernetes, người dùng kiểm tra lại snapshot trên tab snapshot ở mục **Compute Engine** trên **Unify Portal** :
[![](/img/migrated/Picture1-6-9ab1ccda.png)](/img/migrated/Picture1-6-9ab1ccda.png)
và kiểm tra trong kubernetes bằng câu lệnh:

```
Copykubectl get volumesnapshots.snapshot.storage.k8s.io -n default
```