---
id: "slurm-on-fpt-cloud"
title: "Slurm On Fpt Cloud"
sidebar_label: "Slurm On Fpt Cloud"
sidebar_position: "16"
---

# Slurm On Fpt Cloud

➤ **FPT Managed GPU Cluster** dựa trên nền tảng mã nguồn mở K8s giúp tự động hoá triển khai, nhân rộng và quản lý các ứng dụng container. FPT Managed GPU Cluster tích hợp đầy đủ các thành phần: Container Orchestration, Storage, Networking, Security, PaaS cung cấp cho khách hàng môi trường tốt nhất để phát triển và triển khai ứng dụng trên Cloud.
➤ **FPT Managed GPU Cluster** là một mô hình cung cấp dịch vụ Managed GPU Cluster của FKE. Với MANAGED GPU CLUSTER, FPT Cloud quản trị toàn bộ thành phần control-planes, người sử dụng sẽ triển khai và quản trị các Worker Nodes. MANAGED GPU CLUSTER giúp người sử dụng tập trung vào việc triển khai ứng dụng mà không cần tốn nguồn lực vào việc quản trị K8s Cluster.
➤ **FPT Managed GPU Cluster** là mô hình dịch vụ dựa trên nền tảng mã nguồn mở Kubernetes, giúp tự động hoá triển khai, nhân rộng và quản lý các ứng dụng đã được container hoá. Sản phẩm FPT Managed GPU Cluster ngoài tích hợp đầy đủ các thành phần: Container Orchestration, Storage, Networking, Security, PaaS thì còn cung cấp tài nguyên GPU, giúp hỗ trợ các thao tác tính toán phức tạp.
**Những điều cần lưu ý trước khi sử dụng Managed GPU Cluster?**
**· Vị trí đặt Managed GPU Cluster:** Vị trí địa lý (Region) có thể sẽ ảnh hưởng đến tốc độ truy cập đến máy chủ trong quá trình sử dụng. Bạn nên chọn Region gần nhất với đối tượng phát sinh traffic để tối ưu được tốc độ. 
**· Số lượng các Nodes và cấu hình của từng Nodes cần sử dụng :** Các tài khoản FPT Cloud đều được cấp một hạn mức nhất định cho các tài nguyên Ram, CPU, Storage, IP… Vì vậy, khách hàng nên xác định số lượng tài nguyên cần sử dụng và giới hạn tối đa cần đáp ứng để FPT Cloud hỗ trợ bạn tốt nhất.
**1. 紹介 Slurm và Slurm on Kubernetes**
**1.1 紹介 Slurm**
Slurm là một nền tảng mã nguồn mở mạnh mẽ dùng để quản lý tài nguyên cụm và lập lịch công việc (job). Nó được thiết kế nhằm tối ưu hiệu năng và hiệu quả cho các siêu máy tính và cụm tính toán lớn. Các thành phần chính của nó hoạt động cùng nhau để đảm bảo hệ thống đạt hiệu suất cao và tính linh hoạt. Hình sau đây minh họa cách thức hoạt động của Slurm.
[![](/img/migrated/Picture1-1-00c51d67.png)](/img/migrated/Picture1-1-00c51d67.png)
**slurmctld** : là trình nền điều khiển của Slurm. Được xem như “bộ não” của Slurm, slurmctld giám sát tài nguyên hệ thống, lập lịch job và quản lý trạng thái cụm. Để tăng tính tin cậy, bạn có thể cấu hình một slurmctld thứ cấp nhằm tránh gián đoạn dịch vụ nếu slurmctld chính gặp sự cố, đảm bảo hệ thống luôn sẵn sàng cao.
**slurmd** : là trình nền nút của Slurm. slurmd được triển khai trên mỗi nút tính toán. Nó nhận lệnh từ slurmctld và quản lý job, bao gồm khởi chạy và thực thi job, báo cáo trạng thái job và chuẩn bị cho các lệnh job mới. slurmd đóng vai trò giao diện để giao tiếp trực tiếp với tài nguyên tính toán và là cơ sở để lập lịch job.
**slurmdbd** : là trình nền cơ sở dữ liệu của Slurm. slurmdbd là thành phần tùy chọn nhưng rất quan trọng cho quản lý lâu dài và kiểm toán trong các cụm lớn, vì nó duy trì một cơ sở dữ liệu tập trung để lưu lịch sử job và thông tin kế toán. slurmdbd có thể tổng hợp dữ liệu từ nhiều cụm do Slurm quản lý, giúp đơn giản hóa và nâng cao hiệu quả quản lý dữ liệu.
**SlurmCLI:** cung cấp các lệnh sau để hỗ trợ quản lý job và giám sát hệ thống:
· scontrol: quản lý cụm và điều khiển cấu hình cụm.
· squeue: truy vấn trạng thái job trong hàng đợi.
· srun: gửi và quản lý job.
· sbatch: gửi job theo lô, giúp bạn lập lịch và quản lý tài nguyên tính toán.
· sinfo: truy vấn trạng thái chung của cụm, bao gồm tình trạng sẵn sàng của các nút.
**1.2 Why Slurm K8s?**
Cả Slurm và Kubernetes đều có thể đóng vai trò là hệ thống quản lý tải công việc cho huấn luyện mô hình phân tán và tính toán hiệu năng cao (HPC) nói chung.
Mỗi hệ thống đều có điểm mạnh và điểm yếu riêng, và việc đánh đổi giữa chúng là đáng kể. Slurm cung cấp khả năng lập lịch tiên tiến, hiệu quả, kiểm soát phần cứng chi tiết và khả năng kế toán, nhưng lại thiếu tính phổ quát. Ngược lại, Kubernetes có thể được sử dụng cho nhiều mục đích khác ngoài huấn luyện (ví dụ: inferencing) và cung cấp khả năng tự động mở rộng và tự phục hồi tốt.
Thật đáng tiếc là hiện chưa có cách nào để kết hợp lợi ích của cả hai giải pháp này. Và vì nhiều công ty công nghệ lớn sử dụng Kubernetes như một lớp hạ tầng mặc định mà không hỗ trợ hệ thống huấn luyện mô hình chuyên dụng, nên một số kỹ sư ML thậm chí không có sự lựa chọn.
Việc sử dụng Slurm trên k8s cho phép chúng tôi tái sử dụng khả năng tự động mở rộng và tự phục hồi của Kubernetes trong Slurm, đồng thời triển khai một số tính năng độc đáo, mà vẫn giữ nguyên cách tương tác quen thuộc với hệ thống.
**1.3 紹介 Slurm on FPT Cloud Managed GPU/K8s cluster**
Slurm Operator sử dụng tài nguyên tùy chỉnh SlurmCluster (CR) để định nghĩa các tập tin cấu hình cần thiết cho việc quản lý các cụm Slurm và giải quyết các vấn đề liên quan đến quản lý tầng điều khiển. Điều này giúp đơn giản hóa việc triển khai và bảo trì các cụm được quản lý bởi Slurm. Hình dưới đây mô tả kiến trúc của Slurm trên FPTCloud Managed GPU/k8s cluster. Quản trị viên cụm có thể triển khai và quản lý một cụm Slurm thông qua SlurmCluster. Slurm Operator sẽ tạo các thành phần điều khiển của Slurm trong cụm dựa trên SlurmCluster. Một tập tin cấu hình Slurm có thể được gắn vào thành phần điều khiển thông qua một volume chia sẻ hoặc một ConfigMap.
[![](/img/migrated/Picture2-1-d68031fc.png)](/img/migrated/Picture2-1-d68031fc.png)
Trong mô hình triển khai Slurm on K8s, các thành phần của một cụm slurm như login node, worker node, ... được biểu diễn thành các pods trên K8s, đồng thời trong mô hình này, khái niệm shared-root volume được thực hiện, hiểu đơn giản thì chúng ta sẽ triển khai một shared filesystem, file system tương đương với file system của một OS, mọi job sau khi được chuyển đến worker node sẽ đều được triển khai trên môi trường shared root volume này. Điều này đảm bảo rằng mọi worker node sẽ luôn có cấu hình, các packages & trạng thái giống nhau mà không cần quản lý thủ công. Nói cách khác, khi bạn cài đặt packages trên một node, các packages đó sẽ tự động xuất hiện trên các node còn lại.
Tất cả những gì bạn cần làm là định nghĩa về cụm slurm mong muốn của bạn tại Slurm cluster custom resource, Slurm operator sẽ thực hiện việc triển khai & quản lý cụm Slurm thay cho bạn về trạng thái bạn đã định nghĩa ở Slurm cluster CR.
**2. Hướng dẫn cài đặt**
**2.1 Hướng dẫn triển khai cụm slurm trên k8s**
Yêu cầu bắt buộc:
- Cụm k8s có thể sử dụng tính năng dynamic provisioning volume & còn dư quota storage.
- Ít nhất một storage class có thể cấp volume dạng Read Write Many.
**ステップ1:** Cài đặt Slurm Operator, GPU Operator, Network Operator tại phần cài đặt GPU software & chờ cho đến khi trạng thái các phần này ở ready [![](/img/migrated/Picture3-2-863f4c91.png)](/img/migrated/Picture3-2-863f4c91.png)
**ステップ2:** Tại cụm k8s, tạo sẵn các Persistent volume để chứa shared root space và dữ liệu của controller node.
Chúng ta hãy chú ý về các volume trong mô hình triển khai Slurm on k8s:
[![](/img/migrated/Picture4-1-f1c64bd5.png)](/img/migrated/Picture4-1-f1c64bd5.png)
**Trong đó:**
**· jail-pvc** : mount vào worker node và login node, đóng vai trò như một shared sandbox, là môi trường các job được thực thi, cũng là môi trường user thao tác, dung lượng volume này ít nhất là 40Gi để chứa file system của một OS.
**· controller-spool-pvc** : Lưu thông tin cấu hình về cụm, đặt tại controller node.
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

controller-spool-pvc.yaml (không cần tạo với slurm operator version >= 2.0.0)

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

**注意:**
➤ Các volume này đều là các volume bắt buộc phải có, chúng đều cần cung cấp cơ chế Read write many và tên của các PVC này phải giữ nguyên như trên.
➤ Nhằm thuận tiện để triển khai, chúng tôi đã sử dụng cơ chế dynamic provisioning volume trên sản phẩn FPTcloud managed k8s.
➤ Với môi trường production, chúng tôi khuyến nghị việc mount root volume từ một phân vùng tĩnh thuộc file server, để thuận tiện cho việc migrate & bảo trì cụm Slurm.
**ステップ3:** download Slurm cluster CR helm chart + define cấu hình mong muốn

```
Copyhelm repo add xplat-fke https://registry.fke.fptcloud.com/chartrepo/xplat-fke 
helm repo update helm repo list 
helm search repo slurm 
helm pull xplat-fke/helm-slurm-cluster --version 1.14.10 --untar=true
```

注意: chỉnh version của slurm-cluster đúng với version của Slurm operator
Để tìm hiểu sâu hơn về các tham số của một cụm slurm, chúng tôi khuyến khích bạn đọc phần 3: mô tả các tham số cụm Slurm.

```
Copycd helm-slurm-cluster/

vi values.yaml
```

Tại file values.yaml của folder vừa tải, bạn cần chỉnh một số trường quan trọng như:  
| Tên trường  | Mô tả  |  
| --- | --- |  
| slurmNodes.worker.size  | số lượng worker nodes  |  
| slurmNodes.worker.size.spool.volumeClaimTemplateSpec.storageClassName  | storage class của persistent volume dùng để lưu trạng thái worker nodes  |  
| slurmNode.login.sshRootPublicKeys  | danh sách các public key của user root trong cụm Slurm  |  
| SlurmNode.accounting.mariadbOperator.storage.volumeClaimTemplate.storageClassNam  | storage class của persistent volume dùng để lưu dữ liệu tại slurmdbd node  |  
Sau khi chỉnh cấu hình cụm theo nhu cầu, chạy lệnh sau

```
Copyhelm install fpt-hpc ./ -n fpt-hpc
```

**ステップ4:** Chờ cho đến khi toàn bộ pod Slurm ở trạng thái running Quá trình này mất khoảng 20 phút ở lần đầu tiên cài slurm cluster trên cụm k8s, bao gồm 2 phase, phase 1 chạy job setup và phase 2 cài đặt các pod slurm components
Sau khi toàn bộ các component ready, tìm IP public của login node bằng lệnh

```
Copykubectl get svc -n fpt-hpc | grep login
```

Thực hiện ssh vào head node cụm Slurm

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
Sau khi login thành công vào cụm Slurm, bạn có thể kiểm tra hoạt động của cụm slurm bằng việc train model mingpt theo hướng dẫn sau:
**ステップ1:** clone pytorch/example repository

```
Copymkdir /shared 
cd /shared 
git clone https://github.com/pytorch/examples
```

**ステップ2:** chuyển hướng đến folder minGPT-ddp & cài đặt các gói cần thiết

```
Copycd examples/distributed/minGPT-ddp 
pip3 install -r requirements.txt 
pip3 install numpy
```

Nhờ cơ chế shared root, chúng ta chỉ cần chạy lệnh trên một lần, các package này sẽ tự sync trên toàn bộ các node worker khác.
注意: trong môi trường production, chúng tôi khuyến nghị việc dùng conda evironment/ container để tạo môi trường train thay vì cài trực tiếp các package ở môi trường global như trên.
**ステップ3:** edit file slurm script

```
Copyvi mingpt/slurm/sbatch_run.sbatch
```

chú ý: chỉnh path của file main.py trong file sbatch_run.sh về path của file main.py trong folder mingpt
**ステップ4:** chạy mẫu slurm job

```
Copysbatch mingpt/slurm/sbatch_run.sh
```

**ステップ5:** Kiểm tra

```
Copysqueue 
scontrol show job job_id
cat log.out
```

**3.Mô tả các tham số trong Custom resource của Slurm cluster**
Tại phần 2 của hướng dẫn chạy Slurm trên K8s, chúng tôi đã hướng dẫn bạn chỉnh các tham số quan trọng nhất. Tại phần này, chúng ta sẽ đi vào tìm hiểu thêm về các tham số/thuộc tính được định nghĩa cho một Slurm cluster, bạn cũng có thể đọc phần comment tại file values.yaml của slurm cluster custom resource đã tải ở phần 2 để biết thêm thông tin về các trường.  
| Thuộc tính  | giá trị mẫu  | Mô tả  |  
| --- | --- | --- |  
| clusterName  | "fpt-hpc"  | tên cụm (lưu ý không đổi)  |  
| k8sNodeFilters  | N/A  | Chia cụm k8s ra làm hai danh sách: các node GPU (deploy slurm worker) và các node no-gpu để deploy các thành phần khác, trong trường hợp cụm chỉ có node GPU, hai danh sách node này có thể giống nhau.  |  
| volumeSources  | volumeSources:  
- name: controller-spool  
persistentVolumeClaim:  
claimName: "controller-spool-pvc"  
readOnly: false  
- name: jail  
persistentVolumeClaim:  
claimName: "jail-pvc"  
readOnly: false  | định nghĩa các Persistent volume claim sẽ đường dùng bởi các container đại diện các component (worker, login, controller nodes,...) thuộc cụm Slurm  |  
| periodicChecks  | N/A  | job chạy định kỳ để kiểm tra tình trạng của một node. Nếu node đó chứa GPU gặp vấn đề, drain node đó.  |  
| slurmNodes  | N/A  | Định nghĩa về số lượng, cấu hình của các node thành phần trong một cụm slurm (login node, worker node, ...)  |  
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
storageClassName: xplat-nfs  | cấu hình accounting node, tại đây chúng tôi sử dụng mariadb operator để tạo database, bạn cũng có thể sử dụng database ngoài (đọc thêm tại phần values.yaml)  |  
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
volumeSourceName: "jail"  | Cấu hình controller node, với 1 controller node + mount 2 volume spool & jail shared root space) vào node nà  |  
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
volumeSourceName: "jail"  | Cấu hình worker nodes, với 8 worker nodes, mỗi node 8 GPUs + mount volume jail(shared root space) vào node này.  |  
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
volumeSourceName: "jail"  | Cấu hình worker nodes, với 2 login nodes, expose sshd service bằng load-balancer service type trong k8s, sử dụng publickey định nghĩa tại sshRootPublicKeys cho root user và mount các volume tương tự controller node & worker node.  |  
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
**4.1 Thêm user/ login**
Thêm user
Để thêm ssh key cho root, bạn đơn giản chỉ cần edit slurm cluster CR:

```
Copykubectl edit SlurmCluster  fpt-hpc -n fpt-hpc
```

Tại phần cấu hình login node, chuyển hướng đến thuộc tính sshRootPublicKeys, thêm public key mong muốn của bạn.
Để thêm một regular user, bạn làm tương tự việc thêm user cho một linux host

```
Copysudo adduser user_name
```

**Chỉnh sửa việc login**
Mặc định, chúng tôi expose login node qua một Load Balancer public, điều này có thể không phù hợp với một số yêu cầu. Do vậy, bạn có thể chuyển type của LB này về private, dùng cơ chế port-forward để access vào cụm slurm, hoặc tự customize theo ý bạn tại portal + node LB của chúng tôi.
**4.2 Scale up + down worker nodes**
Để chỉnh sửa số lượng worker nodes nói riêng và số lượng các nodes thuộc loại khác nói chung, chúng ta đơn giản chỉ cần edit lại slurm cluster CR:

```
Copykubectl edit SlurmCluster  fpt-hpc -n fpt-hpc
```

Tại phần cấu hình worker nodes, chuyển hướng tới mục “size" và edit số lượng worker node theo mong muốn
注意: 
-Khi scale up số lượng worker nodes, node mới sẽ được tự động thêm vào danh sách worker nodes tại slurm controller node và sẵn sàng để chạy job.
-Khi scale down nodes, bạn cần xóa node thủ công tại slurm controller bằng lệnh:

```
Copyscontrol delete nodeName=node_name_to_delete
```

-Danh sách nodes trong một cluster luôn là worker-[0, (size - 1)]
**4.3 Migrate Slurm cluster sang k8s cluster khác**
Nhờ sự linh hoạt của k8s và network file storage, chúng ta có thể dễ dàng chuyển slurm cluster từ một cụm k8s này sang cụm k8s khác, việc phải làm là mounting & tạo lại jail-pvc trên cụm slurm k8s mới và thực hiện lại các bước tạo slurm k8s.
**4.4 Mounting external volumes vào cụm slurm**
Để mount một volume vào slurm cluster, bạn cần tạo volume đó trước, sau đó triển khai volume đó dưới dạng PV & PVC tại K8s. Ví dụ sau sử dụng dynamic provisioning để tạo PV/PVC này (trong môi trường production chúng tôi khuyến nghị sử dụng static provisioning volume để đảm bảo an toàn dữ liệu)
**ステップ1:** tạo PVC

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

**ステップ2:** khai báo volume này tại slurm cluster
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

**ステップ3:** mount các volume trên vào các node login và worker trong cụm slurm
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

注意: mount path cần giống nhau trên các worker node và login node
**4.5 Sử dụng docker**
Trong môi trường HPC, các container runtime như Apptainer, Enroot&Pyxis được ưu tiên sử dụng hơn Docker. Tuy nhiên, các container runtime này không thuận tiện để sử dụng với những công việc build, push image, thậm chí run (không recommend docker slurm) với những user đã quen sử dụng docker.
Để hỗ trợ những user này, chúng tôi đã cài đặt docker tại shared root volume của cụm slurm, như vậy mọi node trong cụm slurm đều có thể sử dụng docker. Tuy nhiên, việc này yêu cầu job sử dụng toàn bộ resources của node do các job khởi chạy bằng docker sẽ khôn thể bị giới hạn tài nguyên như apptainer.
Khuyến nghị user luôn thêm -N & --exclusive để cấp toàn bộ tài nguyên node cho job chạy bằng docker.
**4.6 Sử dụng ssh**
Với những phiên bản slurm operator trước đây, user chỉ có thể truy cập worker node bằng việc shell trực tiếp vào node worker thông qua kubectl.
Từ version 2.0.0, slurm operator hỗ trợ việc ssh trên các worker node, thay vì việc phải dùng Kubernetes để shell vào worker nodes. User của các worker nodes đồng nhất với login nodes.
Với login nodes, mặc định khi ssh vào IP của loadbalancer, loadbalancer sẽ route ssh session đến một login node ngẫu nhiên.
Nếu bạn sử dụng các tool ssh như Tmux, bạn sẽ luôn muốn ssh vào một node cố định. Để luôn có thể ssh vào một node xác định, hãy sử dụng lệnh sau:

```
Copyssh -J username@public_endpoint username@login-number -i path_to_private_key
```
