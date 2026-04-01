---
id: "slurm-on-fpt-cloud"
title: "Slurm On Fpt Cloud"
sidebar_label: "Slurm On Fpt Cloud"
sidebar_position: "16"
---

# Slurm On Fpt Cloud

➤ **FPT Managed GPU Cluster** dựa trên nền tảng mã nguồn mở K8s giúp tự động hoá triển khai, nhân rộng and quản lý the ứng dụng container. FPT Managed GPU Cluster tích hợp đầy đủ the thành phần: Container Orchestration, Storage, Networking, Security, PaaS cung cấp for khách hàng môi trường tốt nhất to phát triển and triển khai ứng dụng trên Cloud.
➤ **FPT Managed GPU Cluster** là a mô hình cung cấp service Managed GPU Cluster of FKE. Với MANAGED GPU CLUSTER, FPT Cloud quản trị toàn bộ thành phần control-planes, người sử dụng will triển khai and quản trị the Worker Nodes. MANAGED GPU CLUSTER giúp người sử dụng tập trung ando việc triển khai ứng dụng mà không cần tốn nguồn lực ando việc quản trị K8s Cluster.
➤ **FPT Managed GPU Cluster** là mô hình service dựa trên nền tảng mã nguồn mở Kubernetes, giúp tự động hoá triển khai, nhân rộng and quản lý the ứng dụng has been is container hoá. Sản phẩm FPT Managed GPU Cluster ngoài tích hợp đầy đủ the thành phần: Container Orchestration, Storage, Networking, Security, PaaS thì còn cung cấp tài nguyên GPU, giúp hỗ trợ the thao tác tính toán phức tạp.
**Những điều cần lưu ý before sử dụng Managed GPU Cluster?**
**· Vị trí đặt Managed GPU Cluster:** Vị trí địa lý (Region) can will ảnh hưởng to tốc độ truy cập to server in quá trình sử dụng. Bạn should chọn Region gần nhất with đối tượng phát sinh traffic to tối ưu is tốc độ. 
**· Số lượng the Nodes and cấu hình of fromng Nodes cần sử dụng :** Các account FPT Cloud đều is cấp a hạn mức nhất định for the tài nguyên Ram, CPU, Storage, IP… Vì vậy, khách hàng should xác định số lượng tài nguyên cần sử dụng and giới hạn tối đa cần đáp ứng to FPT Cloud hỗ trợ you tốt nhất.
**1. Introduction Slurm and Slurm on Kubernetes**
**1.1 Introduction Slurm**
Slurm là a nền tảng mã nguồn mở mạnh mẽ dùng to quản lý tài nguyên cụm and lập lịch công việc (job). Nó is thiết kế nhằm tối ưu hiệu năng and hiệu quả for the siêu máy tính and cụm tính toán lớn. Các thành phần chính of nó hoạt động cùng nhau to đảm bảo hệ thống đạt hiệu suất cao and tính linh hoạt. Hình sau đây minh họa theh thức hoạt động of Slurm.
[![](/img/migrated/Picture1-1-00c51d67.png)](/img/migrated/Picture1-1-00c51d67.png)
**slurmctld** : là trình nền điều whenển of Slurm. Được xem như “bộ não” of Slurm, slurmctld monitoring tài nguyên hệ thống, lập lịch job and quản lý status cụm. Để tăng tính tin cậy, you can cấu hình a slurmctld thứ cấp nhằm tránh gián đoạn service if slurmctld chính gặp sự cố, đảm bảo hệ thống luôn sẵn sàng cao.
**slurmd** : là trình nền nút of Slurm. slurmd is triển khai trên mỗi nút tính toán. Nó nhận lệnh from slurmctld and quản lý job, includes khởi chạy and thực thi job, report status job and chuẩn bị for the lệnh job mới. slurmd thatng role giao diện to giao tiếp trực tiếp with tài nguyên tính toán and là cơ sở to lập lịch job.
**slurmdbd** : là trình nền database of Slurm. slurmdbd là thành phần tùy chọn nhưng rất quan trọng for quản lý lâu dài and kiểm toán in the cụm lớn, vì nó duy trì a database tập trung to lưu lịch sử job and thông tin kế toán. slurmdbd can tổng hợp dữ liệu from nhiều cụm do Slurm quản lý, giúp đơn giản hóa and nâng cao hiệu quả quản lý dữ liệu.
**SlurmCLI:** cung cấp the lệnh sau to hỗ trợ quản lý job and monitoring hệ thống:
· scontrol: quản lý cụm and điều whenển cấu hình cụm.
· squeue: truy vấn status job in hàng đợi.
· srun: gửi and quản lý job.
· sbatch: gửi job theo lô, giúp you lập lịch and quản lý tài nguyên tính toán.
· sinfo: truy vấn status chung of cụm, includes tình trạng sẵn sàng of the nút.
**1.2 Why Slurm K8s?**
Cả Slurm and Kubernetes đều can thatng role là hệ thống quản lý tải công việc for huấn luyện mô hình phân tán and tính toán hiệu năng cao (HPC) nói chung.
Mỗi hệ thống đều có điểm mạnh and điểm yếu riêng, and việc đánh đổi giữa chúng là đáng kể. Slurm cung cấp khả năng lập lịch tiên tiến, hiệu quả, kiểm soát phần cứng chi tiết and khả năng kế toán, nhưng lại thiếu tính phổ quát. Ngược lại, Kubernetes can is sử dụng for nhiều mục đích khác ngoài huấn luyện (ví dụ: inferencing) and cung cấp khả năng tự động mở rộng and tự phục hồi tốt.
Thật đáng tiếc là hiện chưa có theh nào to kết hợp lợi ích of cả hai giải pháp this. Và vì nhiều công ty công nghệ lớn sử dụng Kubernetes như a lớp hạ tầng mặc định mà không hỗ trợ hệ thống huấn luyện mô hình chuyên dụng, should a số kỹ sư ML thậm chí không có sự lựa chọn.
Việc sử dụng Slurm trên k8s for phép chúng tôi tái sử dụng khả năng tự động mở rộng and tự phục hồi of Kubernetes in Slurm, đồng thời triển khai a số feature độc đáo, mà vẫn giữ nguyên theh tương tác quen thuộc with hệ thống.
**1.3 Introduction Slurm on FPT Cloud Managed GPU/K8s cluster**
Slurm Operator sử dụng tài nguyên tùy chỉnh SlurmCluster (CR) to định nghĩa the tập tin cấu hình cần thiết for việc quản lý the cụm Slurm and giải quyết the vấn đề liên quan to quản lý tầng điều whenển. Điều this giúp đơn giản hóa việc triển khai and bảo trì the cụm is quản lý bởi Slurm. Hình dưới đây mô tả kiến trúc of Slurm trên FPTCloud Managed GPU/k8s cluster. Quản trị viên cụm can triển khai and quản lý a cụm Slurm thông qua SlurmCluster. Slurm Operator will tạo the thành phần điều whenển of Slurm in cụm dựa trên SlurmCluster. Một tập tin cấu hình Slurm can is gắn ando thành phần điều whenển thông qua a volume chia sẻ or a ConfigMap.
[![](/img/migrated/Picture2-1-d68031fc.png)](/img/migrated/Picture2-1-d68031fc.png)
Trong mô hình triển khai Slurm on K8s, the thành phần of a cụm slurm như login node, worker node, ... is biểu diễn thành the pods trên K8s, đồng thời in mô hình this, khái niệm shared-root volume is thực hiện, hiểu đơn giản thì chúng ta will triển khai a shared filesystem, file system tương đương with file system of a OS, mọi job after is chuyển to worker node will đều is triển khai trên môi trường shared root volume this. Điều this đảm bảo rằng mọi worker node will luôn có cấu hình, the packages & status giống nhau mà không cần quản lý thủ công. Nói theh khác, when you cài đặt packages trên a node, the packages that will tự động appears trên the node còn lại.
Tất cả những gì you cần làm là định nghĩa về cụm slurm mong muốn of you tại Slurm cluster custom resource, Slurm operator will thực hiện việc triển khai & quản lý cụm Slurm thay for you về status you has been định nghĩa ở Slurm cluster CR.
**2. Hướng dẫn cài đặt**
**2.1 Hướng dẫn triển khai cụm slurm trên k8s**
Requirements bắt buộc:
- Cụm k8s can sử dụng feature dynamic provisioning volume & còn dư quota storage.
- Ít nhất a storage class can cấp volume dạng Read Write Many.
**Step 1** : Cài đặt Slurm Operator, GPU Operator, Network Operator tại phần cài đặt GPU software & chờ for to when status the phần this ở ready [![](/img/migrated/Picture3-2-863f4c91.png)](/img/migrated/Picture3-2-863f4c91.png)
**Step 2:** Tại cụm k8s, tạo sẵn the Persistent volume to chứa shared root space and dữ liệu of controller node.
Chúng ta hãy chú ý về the volume in mô hình triển khai Slurm on k8s:
[![](/img/migrated/Picture4-1-f1c64bd5.png)](/img/migrated/Picture4-1-f1c64bd5.png)
**Trong that:**
**· jail-pvc** : mount ando worker node and login node, thatng role như a shared sandbox, là môi trường the job is thực thi, cũng là môi trường user thao tác, dung lượng volume this ít nhất là 40Gi to chứa file system of a OS.
**· controller-spool-pvc** : Save thông tin cấu hình về cụm, đặt tại controller node.
jail-pvc.yaml

```
CopyapiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: jail-pvc
  namespace: fpt-hpc
spec:
  storageClassName: default
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 100Gi
```

controller-spool-pvc.yaml (không cần tạo with slurm operator version >= 2.0.0)

```
CopyapiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: controller-spool-pvc
  namespace: fpt-hpc
spec:
  storageClassName: default
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 10Gi
```

**Note:**
➤ Các volume this đều là the volume bắt buộc phải có, chúng đều cần cung cấp cơ chế Read write many and tên of the PVC this phải giữ nguyên như trên.
➤ Nhằm thuận tiện to triển khai, chúng tôi has been sử dụng cơ chế dynamic provisioning volume trên sản phẩn FPTcloud managed k8s.
➤ Với môi trường production, chúng tôi khuyến nghị việc mount root volume from a phân vùng tĩnh thuộc file server, to thuận tiện for việc migrate & bảo trì cụm Slurm.
**Step 3** : download Slurm cluster CR helm chart + define cấu hình mong muốn

```
Copyhelm repo add xplat-fke https://registry.fke.fptcloud.com/chartrepo/xplat-fke 
helm repo update helm repo list 
helm search repo slurm 
helm pull xplat-fke/helm-slurm-cluster --version 1.14.10 --untar=true
```

Note: chỉnh version of slurm-cluster đúng with version of Slurm operator
Để tìm hiểu sâu hơn về the tham số of a cụm slurm, chúng tôi khuyến khích you đọc phần 3: mô tả the tham số cụm Slurm.

```
Copycd helm-slurm-cluster/

vi values.yaml
```

Tại file values.yaml of folder vừa tải, you cần chỉnh a số trường quan trọng như:  
| Tên trường  | Mô tả  |  
| --- | --- |  
| slurmNodes.worker.size  | số lượng worker nodes  |  
| slurmNodes.worker.size.spool.volumeClaimTemplateSpec.storageClassName  | storage class of persistent volume dùng to lưu status worker nodes  |  
| slurmNode.login.sshRootPublicKeys  | danh sách the public key of user root in cụm Slurm  |  
| SlurmNode.accounting.mariadbOperator.storage.volumeClaimTemplate.storageClassNam  | storage class of persistent volume dùng to lưu dữ liệu tại slurmdbd node  |  
Sau when chỉnh cấu hình cụm theo nhu cầu, chạy lệnh sau

```
Copyhelm install fpt-hpc ./ -n fpt-hpc
```

**Step 4** : Chờ for to when toàn bộ pod Slurm ở status running Quá trình this mất khoảng 20 phút ở lần đầu tiên cài slurm cluster trên cụm k8s, includes 2 phase, phase 1 chạy job setup and phase 2 cài đặt the pod slurm components
Sau when toàn bộ the component ready, tìm IP public of login node bằng lệnh

```
Copykubectl get svc -n fpt-hpc | grep login
```

Thực hiện ssh ando head node cụm Slurm

```
Copyssh root@IP_login_svc
```

Nếu dùng nodeshell thì 

```
Copychroot /mnt/jail
sudo -i 
```

Chạy kiểm tra: 

```
Copysrun --nodes=2 --gres=gpu:1 nvidia-smi –L 
salloc --nodes=1 --ntasks=1 --mem=4G --time=00:20:00 --gres=gpu:1
```

**2.2 Chạy job mẫu trên cụm Slurm**
Sau when login successfully ando cụm Slurm, you can kiểm tra hoạt động of cụm slurm bằng việc train model mingpt theo hướng dẫn sau:
**Step 1** : clone pytorch/example repository

```
Copymkdir /shared 
cd /shared 
git clone https://github.com/pytorch/examples
```

**Step 2** : chuyển hướng to folder minGPT-ddp & cài đặt the gói cần thiết

```
Copycd examples/distributed/minGPT-ddp 
pip3 install -r requirements.txt 
pip3 install numpy
```

Nhờ cơ chế shared root, chúng ta chỉ cần chạy lệnh trên a lần, the package this will tự sync trên toàn bộ the node worker khác.
Note: in môi trường production, chúng tôi khuyến nghị việc dùng conda evironment/ container to tạo môi trường train thay vì cài trực tiếp the package ở môi trường global như trên.
**Step 3** : edit file slurm script

```
Copyvi mingpt/slurm/sbatch_run.sbatch
```

chú ý: chỉnh path of file main.py in file sbatch_run.sh về path of file main.py in folder mingpt
**Step 4** : chạy mẫu slurm job

```
Copysbatch mingpt/slurm/sbatch_run.sh
```

**Step 5** : Kiểm tra

```
Copysqueue 
scontrol show job job_id
cat log.out
```

**3.Mô tả the tham số in Custom resource of Slurm cluster**
Tại phần 2 of hướng dẫn chạy Slurm trên K8s, chúng tôi has been hướng dẫn you chỉnh the tham số quan trọng nhất. Tại phần this, chúng ta will đi ando tìm hiểu thêm về the tham số/thuộc tính is định nghĩa for a Slurm cluster, you cũng can đọc phần comment tại file values.yaml of slurm cluster custom resource has been tải ở phần 2 to biết thêm thông tin về the trường.  
| Thuộc tính  | giá trị mẫu  | Mô tả  |  
| --- | --- | --- |  
| clusterName  | "fpt-hpc"  | tên cụm (lưu ý không đổi)  |  
| k8sNodeFilters  | N/A  | Chia cụm k8s ra làm hai danh sách: the node GPU (deploy slurm worker) and the node no-gpu to deploy the thành phần khác, in trường hợp cụm chỉ có node GPU, hai danh sách node this can giống nhau.  |  
| volumeSources  | volumeSources:  
- name: controller-spool  
persistentVolumeClaim:  
claimName: "controller-spool-pvc"  
readOnly: false  
- name: jail  
persistentVolumeClaim:  
claimName: "jail-pvc"  
readOnly: false  | định nghĩa the Persistent volume claim will đường dùng bởi the container đại diện the component (worker, login, controller nodes,...) thuộc cụm Slurm  |  
| periodicChecks  | N/A  | job chạy định kỳ to kiểm tra tình trạng of a node. Nếu node that chứa GPU gặp vấn đề, drain node that.  |  
| slurmNodes  | N/A  | Định nghĩa về số lượng, cấu hình of the node thành phần in a cụm slurm (login node, worker node, ...)  |  
| slurmNodes.accounting  | enabled: true  
mariadbOperator:  
enabled: true  
resources:  
cpu: "1000m"  
memory: "1Gi"  
ephemeralStorage: "5Gi"  
replicas: 1  
replication: {}  
storage:  
ephemeral: false  
volumeClaimTemplate:  
accessModes:  
- ReadWriteOnce  
resources:  
requests:  
storage: 10Gi  
storageClassName: xplat-nfs  | cấu hình accounting node, here chúng tôi sử dụng mariadb operator to tạo database, you cũng can sử dụng database ngoài (đọc thêm tại phần values.yaml)  |  
| slurmNodes.controller  | size: 1  
k8sNodeFilterName: "no-gpu"  
slurmctld:  
port: 6817  
resources:  
cpu: "1000m"  
memory: "3Gi"  
ephemeralStorage: "20Gi"  
munge:  
resources:  
cpu: "1000m"  
memory: "1Gi"  
ephemeralStorage: "5Gi"  
volumes:  
spool:  
volumeSourceName: "controller-spool"  
jail:  
volumeSourceName: "jail"  | Configure controller node, with 1 controller node + mount 2 volume spool & jail shared root space) ando node nà  |  
| slurmNodes.worker  | size: 8  
k8sNodeFilterName: "gpu"  
cgroupVersion: v2  
slurmd:  
port: 6818  
resources:  
cpu: "110000m"  
memory: "1220Gi"  
ephemeralStorage: "55Gi"  
gpu: 8  
rdma: 1  
munge:  
resources:  
cpu: "2000m"  
memory: "4Gi"  
ephemeralStorage: "5Gi"  
volumes:  
spool:  
volumeClaimTemplateSpec:  
storageClassName: "xplat-nfs"  
accessModes: ["ReadWriteOnce"]  
resources:  
requests:  
storage: "120Gi"  
jail:  
volumeSourceName: "jail"  | Configure worker nodes, with 8 worker nodes, mỗi node 8 GPUs + mount volume jail(shared root space) ando node this.  |  
| slurmNodes.login  | login:  
size: 2  
k8sNodeFilterName: "no-gpu"  
sshd:  
port: 22  
resources:  
cpu: "3000m"  
memory: "9Gi"  
ephemeralStorage: "30Gi"  
sshRootPublicKeys:  
- "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIHke7B5+kGXx/Dwr76NI5KxfAAEkqcxbh6/8SV7tnpUP someorganize@example.com"  
sshdServiceLoadBalancerIP: ""  
sshdServiceNodePort: 30022  
munge:  
resources:  
cpu: "500m"  
memory: "500Mi"  
ephemeralStorage: "5Gi"  
volumes:  
jail:  
volumeSourceName: "jail"  | Configure worker nodes, with 2 login nodes, expose sshd service bằng load-balancer service type in k8s, sử dụng publickey định nghĩa tại sshRootPublicKeys for root user and mount the volume tương tự controller node & worker node.  |  
| slurmNodes.exporter  | exporter:  
enabled: true  
size: 1  
k8sNodeFilterName: "no-gpu"  
exporter:  
resources:  
cpu: "250m"  
memory: "256Mi"  
ephemeralStorage: "500Mi"  
munge:  
resources:  
cpu: "1000m"  
memory: "1Gi"  
ephemeralStorage: "5Gi"  
volumes:  
jail:  
volumeSourceName: "jail"  | Cài đặt node exporter phục vụ monitoring.  |  
**4.Các usecase thường gặp.**
**4.1 Add user/ login**
Add user
Để thêm ssh key for root, you đơn giản chỉ cần edit slurm cluster CR:

```
Copykubectl edit SlurmCluster  fpt-hpc -n fpt-hpc
```

Tại phần cấu hình login node, chuyển hướng to thuộc tính sshRootPublicKeys, thêm public key mong muốn of you.
Để thêm a regular user, you làm tương tự việc thêm user for a linux host

```
Copysudo adduser user_name
```

**Chỉnh sửa việc login**
Mặc định, chúng tôi expose login node qua a Load Balancer public, điều this can không phù hợp with a số yêu cầu. Do vậy, you can chuyển type of LB this về private, dùng cơ chế port-forward to access ando cụm slurm, or tự customize theo ý you tại portal + node LB of chúng tôi.
**4.2 Scale up + down worker nodes**
Để chỉnh sửa số lượng worker nodes nói riêng and số lượng the nodes thuộc loại khác nói chung, chúng ta đơn giản chỉ cần edit lại slurm cluster CR:

```
Copykubectl edit SlurmCluster  fpt-hpc -n fpt-hpc
```

Tại phần cấu hình worker nodes, chuyển hướng tới mục “size" and edit số lượng worker node theo mong muốn
Note: 
-Khi scale up số lượng worker nodes, node mới will is tự động thêm ando danh sách worker nodes tại slurm controller node and sẵn sàng to chạy job.
-Khi scale down nodes, you cần xóa node thủ công tại slurm controller bằng lệnh:

```
Copyscontrol delete nodeName=node_name_to_delete
```

-List nodes in a cluster luôn là worker-[0, (size - 1)]
**4.3 Migrate Slurm cluster sang k8s cluster khác**
Nhờ sự linh hoạt of k8s and network file storage, chúng ta can dễ dàng chuyển slurm cluster from a cụm k8s this sang cụm k8s khác, việc phải làm là mounting & tạo lại jail-pvc trên cụm slurm k8s mới and thực hiện lại the bước tạo slurm k8s.
**4.4 Mounting external volumes ando cụm slurm**
Để mount a volume ando slurm cluster, you cần tạo volume that trước, sau that triển khai volume that dưới dạng PV & PVC tại K8s. Ví dụ sau sử dụng dynamic provisioning to tạo PV/PVC this (in môi trường production chúng tôi khuyến nghị sử dụng static provisioning volume to đảm bảo an toàn dữ liệu)
**Step 1** : tạo PVC

```
CopyapiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: jail-submount-mlperf-sd-pvc
spec:
  storageClassName: default
  accessModes:
    - ReadWriteMany
  resources:
     requests:
        storage: 100Gi
```

**Step 2** : khai báo volume this tại slurm cluster
Edit trường volumeSource tại slurm cluster CR

```
Copykubectl edit SlurmCluster  fpt-hpc -n fpt-hpc
```

```
CopyvolumeSources:
  - name: controller-spool
    persistentVolumeClaim:
      claimName: "controller-spool-pvc"
      readOnly: false
  - name: jail
    persistentVolumeClaim:
      claimName: "jail-pvc"
      readOnly: false
  - name: mlperf-sd
    persistentVolumeClaim:
      claimName: "jail-submount-mlperf-sd-pvc"
      readOnly: false
```

**Step 3** : mount the volume trên ando the node login and worker in cụm slurm
Tại login node:

```
Copyvolumes:
      jail:
        volumeSourceName: "jail"
      jailSubMounts:
        - name: "mlcommons-sd-bench-data"
          mountPath: "/mnt/data-hps"
          volumeSourceName: "mlperf-sd"
```

Tại worker node:

```
Copyvolumes:
      spool:
        volumeClaimTemplateSpec:
          storageClassName: "xplat-nfs"
          accessModes: ["ReadWriteOnce"]
          resources:
            requests:
              storage: "120Gi"
      jail:
        volumeSourceName: "jail"
      jailSubMounts:
        - name: "mlcommons-sd-bench-data"
          mountPath: "/mnt/data-hps"
          volumeSourceName: "mlperf-sd"
```

Note: mount path cần giống nhau trên the worker node and login node
**4.5 Sử dụng docker**
Trong môi trường HPC, the container runtime như Apptainer, Enroot&Pyxis is ưu tiên sử dụng hơn Docker. Tuy nhiên, the container runtime this không thuận tiện to sử dụng with những công việc build, push image, thậm chí run (không recommend docker slurm) with những user has been quen sử dụng docker.
Để hỗ trợ những user this, chúng tôi has been cài đặt docker tại shared root volume of cụm slurm, như vậy mọi node in cụm slurm đều can sử dụng docker. Tuy nhiên, việc this yêu cầu job sử dụng toàn bộ resources of node do the job khởi chạy bằng docker will khôn thể bị giới hạn tài nguyên như apptainer.
Khuyến nghị user luôn thêm -N & --exclusive to cấp toàn bộ tài nguyên node for job chạy bằng docker.
**4.6 Sử dụng ssh**
Với những version slurm operator trước đây, user chỉ can truy cập worker node bằng việc shell trực tiếp ando node worker thông qua kubectl.
Từ version 2.0.0, slurm operator hỗ trợ việc ssh trên the worker node, thay vì việc phải dùng Kubernetes to shell ando worker nodes. User of the worker nodes đồng nhất with login nodes.
Với login nodes, mặc định when ssh ando IP of loadbalancer, loadbalancer will route ssh session to a login node ngẫu nhiên.
Nếu you sử dụng the tool ssh như Tmux, you will luôn muốn ssh ando a node cố định. Để luôn can ssh ando a node xác định, hãy sử dụng lệnh sau:

```
Copyssh -J username@public_endpoint username@login-number -i path_to_private_key
```
