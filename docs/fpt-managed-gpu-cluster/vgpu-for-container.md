---
id: "vgpu-for-container"
title: "Giới thiệu tính năng vGPU trong FPT Kubernetes engine"
sidebar_label: "Giới thiệu tính năng vGPU trong FPT Kubernetes engine"
sidebar_position: "17"
---

# Introduction feature vGPU in FPT Kubernetes engine

**Introduction feature vGPU in FPT Kubernetes engine**
➤**FPT Managed GPU Cluster** dựa trên nền tảng mã nguồn mở K8s giúp tự động hoá triển khai, nhân rộng and quản lý the ứng dụng container. FPT Managed GPU Cluster tích hợp đầy đủ the thành phần: Container Orchestration, Storage, Networking, Security, PaaS cung cấp for khách hàng môi trường tốt nhất to phát triển and triển khai ứng dụng trên Cloud. 
➤**FPT Managed GPU** Cluster cung cấp feature v for nhiều container/tiến trình trên a Nvidia GPU . Bằng việc sử dụng feature this, you can tối ưu hóa cost sử dụng GPU.
**Requirements tiên quyết**
✓ Bạn cần kích hoạt service managed GPU cluster, có đủ quota storage, public IP, ... đủ to khởi tạo a cụm FPT managed GPU cluster. 
✓ GPU operator is cài đặt trên cluster. 
✓ Worker group sử dụng Pre-installed driver or has been is cài driver thủ công. 
✓ Worker group thuộc loại GPU worker group. 
**Hướng dẫn cài đặt**
**Step 1** : Cài đặt vGPU scheduler tại phần cài đặt GPU software & chờ for to when status ready. [![](/img/migrated/Picture1.1-a0959517.png)](/img/migrated/Picture1.1-a0959517.png)
**Step 2** : Tại tab worker group GPU, you có permission lựa chọn enable thành phần elastic GPU scheduler trên fromng worker group or không. [![](/img/migrated/vgpu01-681f58cd.png)](/img/migrated/vgpu01-681f58cd.png)
Note: 
Nếu you enable vGPU scheduler trên a worker group, tất cả the sharing mode khác như MIG, MPS, Time slicing cần is disable trên worker group that.
Trong trường hợp you không có nhu cầu sử dụng vGPU scheduer, hãy chọn GPU scheduler type None. Khi that, you can sử dụng the giải pháp GPU sharing như MIG, MPS, Timeslicing như bình thường.
Có tối đa 48 container is phép chia sẻ cùng a GPU, tuy nhiên you chỉ should sử dụng <= 20 vGPU trên fromng GPU to đảm bảo hiệu năng tổng thể.
**Step 3:** kiểm tra status vGPU scheduler trên the node chỉ định
**Check pod vgpu device plugin ở status ready**
Command:

```
Copykubectl get pods --all-namespaces --field-selector spec.nodeName= -o wide  | grep device-plugin
```

[![](/img/migrated/vgpu02-2b93e9cb.png)](/img/migrated/vgpu02-2b93e9cb.png)
Check tài nguyên vGPU trên node Command:

```
Copykubectl describe node  | grep Allocatable -A9
```

[![](/img/migrated/vgpu03-e18784df.png)](/img/migrated/vgpu03-e18784df.png)
VGPU trên node sẵn sàng to sử dụng when tài nguyên nvidia.com/vgpu appears and có giá trị lớn hơn 1
**Step 3** : deploy workload mẫu trên kubernetes sử dụng vGPU

```
CopyapiVersion: apps/v1
kind: Deployment
metadata:
  name: vllm-gpt2
spec:
  replicas: 1
  selector:
    matchLabels:
      app: vllm-gpt2
  template:
    metadata:
      labels:
        app: vllm-gpt2
    spec:
      containers:
      - name: vllm
        image: vllm/vllm:latest
        args:
          - --model=gpt2
          - --tensor-parallel-size=1
          - --port=8000
        ports:
          - containerPort: 8000
        resources:
          limits:
            nvidia.com/vgpu: 1  # Require 1 vGPU
            nvidia.com/vgpumem: 40000  # Request 40000 MiB DRAM for container
      restartPolicy: Always
```

Note: 
nvidia.com/vgpu: 1 có nghĩa là you muốn sử dụng vGPU sharing trên chỉ a GPU vật lý, if you request nvidia.com/vgpu: 2, you cần có 2 GPU vật lý.
**Kết quả** : [![](/img/migrated/Picture5.5-251fecdb.png)](/img/migrated/Picture5.5-251fecdb.png)
Tại đây, container VLLM chỉ is phép sử dụng tối đa 40000 MiB DRAM of GPU
**.Mô tả feature of vGPU scheduler** FPT Cloud vGPU scheduler cung cấp the feature sau:
**1. Hỗ trợ chia sẻ tài nguyên GPU a theh linh hoạt, the thông số can cài đặt includes:**
● resourceName: "nvidia.com/vgpu": số lượng GPU pod will dùng (v/d: 2 ứng with 2 GPU)
● resourceMem: "nvidia.com/vgpumem": lượng memory pod dùng trên mỗi GPU (vd: 3000 corresponding with 3000 MB GPU Memory)
● resourceMemPercentage: "nvidia.com/vgpumem-percentage": tương tự vgpumem nhưng tính theo %
● resourceCores: "nvidia.com/vgpucores": giới hạn lượng core tối đa GPU sử dụng
**2. memory isolation**
Với FPT device plugin, chúng tôi hỗ trợ quản lý lượng tài nguyên tối đa a container can sử dụng. Bạn can chỉnh sửa trường: nvidia.com/vgpumem when yêu cầu tài nguyên for container.
**3. Single GPU sharing and multiple GPU sharing**
● Bạn can to pod of mình sử dụng 1 GPU or 2 GPU bằng việc thay đổi lượng GPU container request:
nvidia.com/vgpu.
● Bạn cũng can thay đổi tài nguyên gpumem, gpu cores ... for fromng vgpu mà container yêu cầu.
Chú ý:
Việc cài đặt số lượng nvidia.com/gpu bằng 2 in a container có nghĩa là container of you sử dụng 2 vGPU đặt trên 2 GPU vật lý khác nhau, không phải 2 vGPU trên cùng 1 GPU vật lý.
Nếu you không chỉ định trường nvidia.com/vgpumem or nvidia.com/vgpucores, scheduler will hiểu là you muốn sử dụng toàn bộ tài nguyên corresponding of node.
Không should sử dụng 1 pod nhiều container and the container đều sử dụng GPU when you kích hoạt device plugin this.
.**So sánh vGPU scheduler & Nvidia GPU sharing solutions.**  
| Feature  | FPTCloud vGPU  | MPS  | Time-slicing  | MIG  | Nvidia vGPU  |  
| --- | --- | --- | --- | --- | --- |  
| Target Use Cases  | flexible GPU sharing & sheduling policy for container sử dụng GPU.  | Chạy nhiều application song song, đổi hiệu năng lấy rủi ro when a tiến trình đột ngột stop.  | Phương pháp sharing GPU nguyên thủy, when you chỉ muốn đưa workload ando GPU and to GPU làm việc còn lại.  | sharing GPU, đảm bảo QoS and tính chịu lỗi, chấp nhận hiệu năng tổng thể giảm and sự thiếu flexible for the MIG profile  | Multi tenancy, multi VM dùng chung a GPU vật lý, chấp nhận cost sử dụng license of Nvidia.  |  
| Partition Type  | Logical  | Logical  | Temporal  | Physical  | Temporal & Physical (VM)  |  
| Max Partition  | Unlimited  | 48  | Unlimited  | 7  | Variable  |  
| SM Performance Isolatio  | Yes (by % not per client)  | Yes (by %, not per client)  | No  | Yes  | Yes  |  
| Memory Protection  | Yes  | Yes  | No  | Yes  | Yes  |  
| Memory Ban  | No  | No  | No  | Yes  | Yes  |  
| Error Isolation  | Yes  | No  | Yes  | Yes  | Yes  |  
| Reconfiguration  | At process launch  | At process launch  | Time-slice duration only  | When idle  | No  |  
| Telemetry  | Yes  | Limited  | No  | Yes (including in containers)  | Yes (including live migration)  |  
| Other noteworthy  | Supports all GPUs  | cudaCapability >= 3.5  | cudaCapability >= 7.0  | cudaCapability >= 8.0 (Hopper, Ampere)  | License required  |
