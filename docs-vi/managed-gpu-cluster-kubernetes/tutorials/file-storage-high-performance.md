---
id: "file-storage-high-performance"
title: "Lưu ý điều kiện để sử dụng High Performance Storage bao gồm :"
description: "**Lưu ý điều kiện để sử dụng High Performance Storage bao gồm** :"
sidebar_label: "Lưu ý điều kiện để sử dụng High Performance Storage bao gồm :"
sidebar_position: 5
---

# Lưu ý điều kiện để sử dụng High Performance Storage bao gồm :

**Lưu ý điều kiện để sử dụng High Performance Storage bao gồm** : 
  1. Các điều kiện bắt buộc để khởi tạo Managed GPU cluster (Active service, quota metal cloud, ssh key, internal subnet LB, ...). Tham khảo trong tài liệu khởi tạo Managed GPU Cluster [tại đây](/docs/vi/managed-gpu-cluster-kubernetes/tutorials/fpt-managed-gpu-cluster/)/.
  2. Đảm bảo service File Storage – High Performance đã được enable và cấp quota trong tenant.
  3. Cần có MountPoint nào thuộc network của Metal cloud muốn sử dụng, di chuyển đến tab File Storage – High Performance để tạo MountPoint mới theo hướng dẫn [tại đây](/docs/vi/fpt-storage/file-storage-high-performance/)/
**Enable dịch vụ File Storage – High Performance với Managed GPU cluster trên giao diện FPTcloud Unify Portal.**

➤ 1.1. Tích hợp với Managed GPU cluster tạo mới: 
  * Bước 1: Trên menu của FPT Portal chọn AI Infrastructure → Managed GPU Cluster → Create a Managed GPU Cluster. 

[![](/img/migrated/1-4-e29aaa5f.png)](/img/migrated/1-4-e29aaa5f.png)
Chọn đúng network của server Metal Cloud làm worker node trong GPU cluster, các mountpoint của File Storage – High Performance sẽ được hiển thị phụ thuộc theo network này. 
  * Bước 2: Khi đã có MountPoint trong network metal cloud mong muốn, thực hiện enable File Storage – High Performance và chọn đúng MountPoint mong muốn.

[![](/img/migrated/4-1-8169c048.png)](/img/migrated/4-1-8169c048.png)
Lưu ý: Nếu tenant chưa được active dịch vụ File Storage – High Performance sẽ hiển thị thông báo sau, cần gửi yêu cầu active dịch vụ trước khi thực hiện tích hợp trên Managed GPU Cluster.
[![](/img/migrated/3-4-543f9c6b.png)](/img/migrated/3-4-543f9c6b.png)
  * Bước 4: Kiểm tra lại toàn bộ thông tin High Performance Storage Integration và tiến hành tạo cụm Managed GPU Cluster

[![](/img/migrated/5-3-28b8ca38.png)](/img/migrated/5-3-28b8ca38.png)
[![](/img/migrated/6-3-3e1f42fc.png)](/img/migrated/6-3-3e1f42fc.png)
➤ 1.2. Tích hợp với Managed GPU cluster tạo mới: 
  * Bước 1: Trên menu của FPT Portal chọn AI Infrastructure → Managed GPU Cluster → chọn cluster đã có để tích hợp File Storage – High Performance 

[![](/img/migrated/7-3-1d6e69ee.png)](/img/migrated/7-3-1d6e69ee.png)
Lưu ý: Managed GPU cluster tích hợp File Storage – High Performance phải ở trạng Succeeded (Running) mới có thể thực hiện tích hợp 
  * Bước 2: Trong tab Essential Properties → High Performance Storage Integration, click Enable High Performance Storage → chọn MountPoint trong list sau đó click button "Confirm".

[![](/img/migrated/8-2-9dec85a0.png)](/img/migrated/8-2-9dec85a0.png)
[![](/img/migrated/9-2-6b1d861c.png)](/img/migrated/9-2-6b1d861c.png)
Quá trình tích hợp High Performance Storage sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing** cho đến khi tích hợp thành công. Cluster vẫn hoạt động bình thường khi thực hiện tích hợp.
➤ 1.3. Hủy tích hợp File Storage – High Performance
Chỉ hủy tích hợp File Storage – High Performance khi status của cluster là Succeeded (Running). Trước khi hủy bỏ tích hợp cần xóa toàn bộ PVC trong cluster sử dụng mountpoint đã chọn, việc hủy tích hợp không tự động xóa dữ liệu được ghi bởi Kubernetes trong thư mục của MountPoint. 
  * Bước 1: Trên menu của FPT Portal chọn AI Infrastructure → Managed GPU Cluster → chọn cluster đã tích hợp File Storage – High Performance 

[![](/img/migrated/7-3-1d6e69ee.png)](/img/migrated/7-3-1d6e69ee.png)
  * Bước 2: Trong tab Essential Properties → High Performance Storage Integration → disintegrate → Confirm 

[![](/img/migrated/8-2-9dec85a0.png)](/img/migrated/8-2-9dec85a0.png)
➤ 1.4. Thay đổi MountPoint tích hợp File Storage – High Performance trong Managed GPU cluster 
Trong một thời điểm chỉ có thể sử dụng một MountPoint trên Managed GPU cluster, để thay đổi MountPoint sử dụng trong cluster, cần thực hiện lần lượt thao tác hủy tích hợp MountPoint cũ (mục 2.3) sau đó tích hợp MountPoint mới cho cluster (mục 2.2) 
**Hướng dẫn sử dụng MountPoint của File Storage – High Performance trong Managed GPU cluster**
➤ Sau khi tích hợp thành công, trong cluster sẽ có sẵn storageclass để tạo các Persistence Volume (PV) nằm trong thư mục được gán path của MountPoint. Tên của storageclass là tên QoS Policy của MountPoint được tích hợp. 
Ví dụ MountPoint có path là /k8s-cluster1 thì các PV được tạo bởi CSI trong Kubernetes sẽ có đường dẫn là /k8s-cluster1/PV1 , /k8s-cluster1/PV2 ... 
[![](/img/migrated/11-2-f3187fe2.png)](/img/migrated/11-2-f3187fe2.png)
➤ Tạo PersistentVolumeClaim (PVC) sử dụng storageclass sẵn có của hệ thống tạo ra cho MountPoint đã tích hợp, do VOLUMEBINDINGMODE của storageclass là WaitForFirstConsumer nên cần có Pod sử dụng PVC này để CSI thực hiện việc tạo PV và bind với PVC. 
Lưu ý: Không chỉnh sửa cấu hình storageclass mặc định của cluster nếu người dùng thay đổi cấu hình đó, nó sẽ tự động được rollback lại cấu hình ban đầu của hệ thống.
➤ Ví dụ manifest của một PVC: 

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

➤ Để resize dung lượng của PVC cần thực hiện chỉnh sửa trực tiếp resource PVC tại trường spec.resources.requests.storage
Lưu ý: Không thể giảm dung lượng (chỉ tăng). Nếu PVC đang được sử dụng bởi Pod, hệ thống sẽ tự động resize dung lượng của mountPath trong Pod (resize volume online)
