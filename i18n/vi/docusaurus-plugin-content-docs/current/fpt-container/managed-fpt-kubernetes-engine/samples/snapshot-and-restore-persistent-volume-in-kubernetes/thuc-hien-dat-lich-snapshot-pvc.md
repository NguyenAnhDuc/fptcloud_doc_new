---
id: "thuc-hien-dat-lich-snapshot-pvc"
title: "Thực hiện đặt lịch Snapshot PVC trên Kubernetes"
description: "Bên cạnh tính năng Snapshot PV trên Kubernetes, FPTCloud cung cấp thêm cho khách hàng lựa chọn thực hiện đặt lịch Snapsh"
sidebar_label: "Thực hiện đặt lịch Snapshot PVC trên Kubernetes"
sidebar_position: 4
---

# Thực hiện đặt lịch snapshot PVC

Bên cạnh tính năng Snapshot PV trên Kubernetes, FPTCloud cung cấp thêm cho khách hàng lựa chọn thực hiện đặt lịch Snapshot thông qua CronJob trên Kubernetes. 
**1. Cài đặt Lịch Cronjob Snapshot PV**
**Bước 1** : Khách hàng cần cung cấp quyền trong cụm Kubernetes cho Cronjob với việc apply ClusterRoleBinding và ServiceAccount tương ứng: 

```
CopyapiVersion: v1 
kind: ServiceAccount 
metadata: 
  name: snapshot-sa 
  namespace: default #or any other namespace that you want to deploy the cronjob 
```

**Bước 2** : Khách hàng apply ClusterRoleBinding với để cấp quyền tới các SA mà khách hàng vừa tạo, lưu ý rằng subjects cần phải có đủ các SA ở các namespace tương ứng mà người dùng vừa tạo ở trên: 

```
apiVersion: rbac.authorization.k8s.io/v1  
kind: ClusterRoleBinding  
metadata:  
  name: grant-snapshot-sa-admin  
subjects:  
  - kind: ServiceAccount  
    name: snapshot-sa  
    namespace: default #or any other namespace that you want to deploy the cronjob  
  - kind: ServiceAccount  
    name: snapshot-sa  
    namespace: namespace1 #if user wants to have multiple cronjob in multiple namespace 
roleRef:  
  kind: ClusterRole  
  name: cluster-admin  
  apiGroup: rbac.authorization.k8s.io 
```

✓ Người dùng có thể check lại ClusterRoleBinding bằng cách dùng câu lệnh:

```
Copykubectl get clusterrolebinding grant-snapshot-sa-admin -oyaml
```

**Bước 3** : Áp dụng CronJob để đặt lịch tự động Snapshot PVC theo format sau: 

```
Copy
apiVersion: batch/v1 
kind: CronJob 
metadata: 
  name: pvc-snapshot #or any other name that you want to set 
  namespace: default #or any other namespace that you want to deploy the cronjob, but must be in the same namespace with ServiceAccount and ClusterRoleBinding 
spec: 
  schedule: "0 * * * *" #Adjust this (minute hour day(month) month day(week)) 
    timeZone: "Asia/Saigon" 
  jobTemplate: 
    spec: 
      template: 
        spec: 
          serviceAccountName: snapshot-sa #Remember to match the name of ServiceAccount that deployed previously 
          containers: 
            - name: pvc-snapshot 
              image: registry.fke.fptcloud.com/xplat-fke/snapshot-pvc:v0.1.0 
              env: 
                - name: PVC_NAME 
                  value: "your-pvc-name" #name of the PVC that you want to apply Cronjob to 
                - name: NAMESPACE 
                  value: "your-pvc-namespace" #namespace of the above PVC 
          restartPolicy: OnFailure 
```

**2. Xóa lịch Cronjob cho Snapshot PV**
Nếu như không còn nhu cầu đặt lịch cho việc tự động Snapchot cho PVC, người dùng có thể đơn giản xóa đi Cronjob tương ứng đã khởi tạo. 
Ví dụ:

```
Copy
kubectl get volumesnapshots.snapshot.storage.k8s.io -A 

NAMESPACE   NAME                             READYTOUSE   SOURCEPVC     SOURCESNAPSHOTCONTENT   RESTORESIZE   SNAPSHOTCLASS          SNAPSHOTCONTENT                                    CREATIONTIME   AGE 

example     wp-pv-claim-example-2412020736   true         wp-pv-claim                           20Gi          csi-cinder-snapclass   snapcontent-045fe85e-7471-4bfb-9a55-2ed2ed2263dd   64m            64m 

example     wp-pv-claim-example-2412020836   true         wp-pv-claim                           20Gi          csi-cinder-snapclass   snapcontent-fd1333bc-70f6-417f-a91d-10349aa0647d   4m11s          4m11s 

```

Ở đây, wp-pv-claim-default-2412020736 có ý nghĩa: 
  * wp-pv-claim: tên PVC 
  * default: tên namespace 
  * 2412020733: 24(năm), 12 (tháng), 02 (ngày), 07 (giờ), 36 (phút) (UTC +0) 

**Lưu ý:**
Chỉ có thể set một CronJob cho một PVC, vì vậy nếu người dùng mong muốn có thể đặt lịch cho nhiều PVC một lúc, hay tạo nhiều lịch cho một PVC, vui lòng tạo nhiều CronJob tương ứng với mong muốn của người dùng. 
Khi đến thời điểm 1 Job mới được chạy, một pod sẽ được tạo ra để tự động hóa việc tạo Snapshot cho PVC, người dùng có thể kiểm tra bằng các lệnh như: 
  * kubectl get volumesnapshots.snapshot.storage.k8s.io -n 
  * kubectl get jobs.batch -n 
  * v.v 

Trong image cung cấp của FPTCloud không có tính năng Retention, vậy nên khách hàng cần chủ động vào xóa các bản Snapshot của mình, tránh bị đầy disk storage quota.
