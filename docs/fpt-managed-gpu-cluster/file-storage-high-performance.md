---
id: "file-storage-high-performance"
title: "Lưu ý điều kiện để sử dụng High Performance Storage bao gồm :"
sidebar_label: "Lưu ý điều kiện để sử dụng High Performance Storage bao gồm :"
sidebar_position: "15"
---

# Save ý điều kiện to sử dụng High Performance Storage includes :

**Save ý điều kiện to sử dụng High Performance Storage includes** : 
  1. Các điều kiện bắt buộc to khởi tạo Managed GPU cluster (Active service, quota metal cloud, ssh key, internal subnet LB, ...). Tham khảo in document khởi tạo Managed GPU Cluster [here](../fpt-managed-gpu-cluster/index.md).
  2. Đảm bảo service File Storage – High Performance has been is enable and cấp quota in tenant.
  3. Cần có MountPoint nào thuộc network of Metal cloud muốn sử dụng, di chuyển to tab File Storage – High Performance to tạo MountPoint mới theo guide [here](../file-storage-high-performance/index.md)
**Enable service File Storage – High Performance with Managed GPU cluster trên interface FPTcloud Unify Portal.**

➤ 1.1. Tích hợp with Managed GPU cluster tạo mới: 
  * Step 1: Trên menu of FPT Portal chọn AI Infrastructure → Managed GPU Cluster → Create a Managed GPU Cluster. 

[![](/img/migrated/1-4-e29aaa5f.png)](/img/migrated/1-4-e29aaa5f.png)
Chọn đúng network of server Metal Cloud làm worker node in GPU cluster, the mountpoint of File Storage – High Performance will is displayed phụ thuộc theo network this. 
  * Step 2: Khi has been có MountPoint in network metal cloud mong muốn, thực hiện enable File Storage – High Performance and chọn đúng MountPoint mong muốn.

[![](/img/migrated/4-1-8169c048.png)](/img/migrated/4-1-8169c048.png)
Note: Nếu tenant chưa is active service File Storage – High Performance will displayed notification sau, need to gửi yêu cầu active service before thực hiện tích hợp trên Managed GPU Cluster.
[![](/img/migrated/3-4-543f9c6b.png)](/img/migrated/3-4-543f9c6b.png)
  * Step 4: Check lại toàn bộ information High Performance Storage Integration and tiến hành tạo cụm Managed GPU Cluster

[![](/img/migrated/5-3-28b8ca38.png)](/img/migrated/5-3-28b8ca38.png)
[![](/img/migrated/6-3-3e1f42fc.png)](/img/migrated/6-3-3e1f42fc.png)
➤ 1.2. Tích hợp with Managed GPU cluster tạo mới: 
  * Step 1: Trên menu of FPT Portal chọn AI Infrastructure → Managed GPU Cluster → chọn cluster has been có to tích hợp File Storage – High Performance 

[![](/img/migrated/7-3-1d6e69ee.png)](/img/migrated/7-3-1d6e69ee.png)
Note: Managed GPU cluster tích hợp File Storage – High Performance must ở trạng Succeeded (Running) mới can thực hiện tích hợp 
  * Step 2: Trong tab Essential Properties → High Performance Storage Integration, click Enable High Performance Storage → chọn MountPoint in list sau that click button “Confirm”.

[![](/img/migrated/8-2-9dec85a0.png)](/img/migrated/8-2-9dec85a0.png)
[![](/img/migrated/9-2-6b1d861c.png)](/img/migrated/9-2-6b1d861c.png)
Quá trình tích hợp High Performance Storage will thực hiện in vòng andi phút, Status of Cluster will chuyển sang **Processing** for to when tích hợp successfully. Cluster vẫn hoạt động bình thường when thực hiện tích hợp.
➤ 1.3. Cancel tích hợp File Storage – High Performance
Chỉ hủy tích hợp File Storage – High Performance when status of cluster là Succeeded (Running). Trước when hủy bỏ tích hợp need to xóa toàn bộ PVC in cluster sử dụng mountpoint has been chọn, việc hủy tích hợp không tự động xóa dữ liệu is ghi bởi Kubernetes in thư mục of MountPoint. 
  * Step 1: Trên menu of FPT Portal chọn AI Infrastructure → Managed GPU Cluster → chọn cluster has been tích hợp File Storage – High Performance 

[![](/img/migrated/7-3-1d6e69ee.png)](/img/migrated/7-3-1d6e69ee.png)
  * Step 2: Trong tab Essential Properties → High Performance Storage Integration → disintegrate → Confirm 

[![](/img/migrated/8-2-9dec85a0.png)](/img/migrated/8-2-9dec85a0.png)
➤ 1.4. Thay đổi MountPoint tích hợp File Storage – High Performance in Managed GPU cluster 
Trong a thời điểm chỉ can sử dụng a MountPoint trên Managed GPU cluster, to thay đổi MountPoint sử dụng in cluster, need to thực hiện lần lượt thao tác hủy tích hợp MountPoint cũ (mục 2.3) sau that tích hợp MountPoint mới for cluster (mục 2.2) 
**Hướng dẫn sử dụng MountPoint of File Storage – High Performance in Managed GPU cluster**
➤ Sau when tích hợp successfully, in cluster will có sẵn storageclass to tạo the Persistence Volume (PV) nằm in thư mục is gán path of MountPoint. Tên of storageclass là tên QoS Policy of MountPoint is tích hợp. 
Ví dụ MountPoint có path là /k8s-cluster1 thì the PV is tạo bởi CSI in Kubernetes will có đường dẫn là /k8s-cluster1/PV1 , /k8s-cluster1/PV2 ... 
[![](/img/migrated/11-2-f3187fe2.png)](/img/migrated/11-2-f3187fe2.png)
➤ Create PersistentVolumeClaim (PVC) sử dụng storageclass sẵn có of system tạo ra for MountPoint has been tích hợp, do VOLUMEBINDINGMODE of storageclass là WaitForFirstConsumer should need to có Pod sử dụng PVC this to CSI thực hiện việc tạo PV and bind with PVC. 
Note: Không chỉnh sửa cấu hình storageclass mặc định of cluster if user thay đổi cấu hình that, nó will tự động is rollback lại cấu hình ban đầu of system.
➤ Ví dụ manifest of a PVC: 

```
CopyapiVersion: v1 

kind: PersistentVolumeClaim 

metadata: 

  name: csi-pvc-dynamic-1 

  namespace: default 

spec: 

  accessModes: 

    - ReadWriteMany 

  resources: 

    requests: 

      storage: 15Gi 

  storageClassName: k8s-tester 

  volumeMode: Filesystem
```

➤ Để resize dung lượng of PVC need to thực hiện chỉnh sửa trực tiếp resource PVC tại trường spec.resources.requests.storage
Note: Không thể giảm dung lượng (chỉ tăng). Nếu PVC is is sử dụng bởi Pod, system will tự động resize dung lượng of mountPath in Pod (resize volume online)
