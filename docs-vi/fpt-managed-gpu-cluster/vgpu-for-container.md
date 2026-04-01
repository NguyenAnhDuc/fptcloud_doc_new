---
id: "vgpu-for-container"
title: "Giới thiệu tính năng vGPU trong FPT Kubernetes engine"
description: "**Giới thiệu tính năng vGPU trong FPT Kubernetes engine**"
sidebar_label: "Giới thiệu tính năng vGPU trong FPT Kubernetes engine"
sidebar_position: 17
---

# Giới thiệu tính năng vGPU trong FPT Kubernetes engine

**Giới thiệu tính năng vGPU trong FPT Kubernetes engine**
➤**FPT Managed GPU Cluster** dựa trên nền tảng mã nguồn mở K8s giúp tự động hoá triển khai, nhân rộng và quản lý các ứng dụng container. FPT Managed GPU Cluster tích hợp đầy đủ các thành phần: Container Orchestration, Storage, Networking, Security, PaaS cung cấp cho khách hàng môi trường tốt nhất để phát triển và triển khai ứng dụng trên Cloud. 
➤**FPT Managed GPU** Cluster cung cấp tính năng v cho nhiều container/tiến trình trên một Nvidia GPU . Bằng việc sử dụng tính năng này, bạn có thể tối ưu hóa chi phí sử dụng GPU.
**Yêu cầu tiên quyết**
✓ Bạn cần kích hoạt dịch vụ managed GPU cluster, có đủ quota storage, public IP, ... đủ để khởi tạo một cụm FPT managed GPU cluster. 
✓ GPU operator được cài đặt trên cluster. 
✓ Worker group sử dụng Pre-installed driver hoặc đã được cài driver thủ công. 
✓ Worker group thuộc loại GPU worker group. 
**Hướng dẫn cài đặt**
**Bước 1** : Cài đặt vGPU scheduler tại phần cài đặt GPU software & chờ cho đến khi trạng thái ready. [![](/img/migrated/Picture1.1-a0959517.png)](/img/migrated/Picture1.1-a0959517.png)
**Bước 2** : Tại tab worker group GPU, bạn có quyền lựa chọn enable thành phần elastic GPU scheduler trên từng worker group hoặc không. [![](/img/migrated/vgpu01-681f58cd.png)](/img/migrated/vgpu01-681f58cd.png)
Lưu ý: 
Nếu bạn enable vGPU scheduler trên một worker group, tất cả các sharing mode khác như MIG, MPS, Time slicing cần được disable trên worker group đó.
Trong trường hợp bạn không có nhu cầu sử dụng vGPU scheduer, hãy chọn GPU scheduler type None. Khi đó, bạn có thể sử dụng các giải pháp GPU sharing như MIG, MPS, Timeslicing như bình thường.
Có tối đa 48 container được phép chia sẻ cùng một GPU, tuy nhiên bạn chỉ nên sử dụng <= 20 vGPU trên từng GPU để đảm bảo hiệu năng tổng thể.
**Bước 3:** kiểm tra trạng thái vGPU scheduler trên các node chỉ định
**Kiểm tra pod vgpu device plugin ở trạng thái ready**
Command:

```
Copykubectl get pods --all-namespaces --field-selector spec.nodeName= -o wide  | grep device-plugin
```

[![](/img/migrated/vgpu02-2b93e9cb.png)](/img/migrated/vgpu02-2b93e9cb.png)
Kiểm tra tài nguyên vGPU trên node Command:

```
Copykubectl describe node  | grep Allocatable -A9
```

[![](/img/migrated/vgpu03-e18784df.png)](/img/migrated/vgpu03-e18784df.png)
VGPU trên node sẵn sàng để sử dụng khi tài nguyên nvidia.com/vgpu xuất hiện và có giá trị lớn hơn 1
**Bước 3** : deploy workload mẫu trên kubernetes sử dụng vGPU

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

Lưu ý: 
nvidia.com/vgpu: 1 có nghĩa là bạn muốn sử dụng vGPU sharing trên chỉ một GPU vật lý, nếu bạn request nvidia.com/vgpu: 2, bạn cần có 2 GPU vật lý.
**Kết quả** : [![](/img/migrated/Picture5.5-251fecdb.png)](/img/migrated/Picture5.5-251fecdb.png)
Tại đây, container VLLM chỉ được phép sử dụng tối đa 40000 MiB DRAM của GPU
**.Mô tả tính năng của vGPU scheduler** FPT Cloud vGPU scheduler cung cấp các tính năng sau:
**1. Hỗ trợ chia sẻ tài nguyên GPU một cách linh hoạt, các thông số có thể cài đặt bao gồm:**
● resourceName: "nvidia.com/vgpu": số lượng GPU pod sẽ dùng (v/d: 2 ứng với 2 GPU)
● resourceMem: "nvidia.com/vgpumem": lượng memory pod dùng trên mỗi GPU (vd: 3000 tương ứng với 3000 MB GPU Memory)
● resourceMemPercentage: "nvidia.com/vgpumem-percentage": tương tự vgpumem nhưng tính theo %
● resourceCores: "nvidia.com/vgpucores": giới hạn lượng core tối đa GPU sử dụng
**2. memory isolation**
Với FPT device plugin, chúng tôi hỗ trợ quản lý lượng tài nguyên tối đa một container có thể sử dụng. Bạn có thể chỉnh sửa trường: nvidia.com/vgpumem khi yêu cầu tài nguyên cho container.
**3. Single GPU sharing và multiple GPU sharing**
● Bạn có thể để pod của mình sử dụng 1 GPU hoặc 2 GPU bằng việc thay đổi lượng GPU container request:
nvidia.com/vgpu.
● Bạn cũng có thể thay đổi tài nguyên gpumem, gpu cores ... cho từng vgpu mà container yêu cầu.
Chú ý:
Việc cài đặt số lượng nvidia.com/gpu bằng 2 trong một container có nghĩa là container của bạn sử dụng 2 vGPU đặt trên 2 GPU vật lý khác nhau, không phải 2 vGPU trên cùng 1 GPU vật lý.
Nếu bạn không chỉ định trường nvidia.com/vgpumem hoặc nvidia.com/vgpucores, scheduler sẽ hiểu là bạn muốn sử dụng toàn bộ tài nguyên tương ứng của node.
Không nên sử dụng 1 pod nhiều container và các container đều sử dụng GPU khi bạn kích hoạt device plugin này.
.**So sánh vGPU scheduler & Nvidia GPU sharing solutions.**  
| Feature  | FPTCloud vGPU  | MPS  | Time-slicing  | MIG  | Nvidia vGPU  |  
| --- | --- | --- | --- | --- | --- |  
| Target Use Cases  | flexible GPU sharing & sheduling policy cho container sử dụng GPU.  | Chạy nhiều application song song, đổi hiệu năng lấy rủi ro khi một tiến trình đột ngột stop.  | Phương pháp sharing GPU nguyên thủy, khi bạn chỉ muốn đưa workload vào GPU và để GPU làm việc còn lại.  | sharing GPU, đảm bảo QoS và tính chịu lỗi, chấp nhận hiệu năng tổng thể giảm và sự thiếu flexible cho các MIG profile  | Multi tenancy, multi VM dùng chung một GPU vật lý, chấp nhận chi phí sử dụng license của Nvidia.  |  
| Partition Type  | Logical  | Logical  | Temporal  | Physical  | Temporal & Physical (VM)  |  
| Max Partition  | Unlimited  | 48  | Unlimited  | 7  | Variable  |  
| SM Performance Isolatio  | Yes (by % not per client)  | Yes (by %, not per client)  | No  | Yes  | Yes  |  
| Memory Protection  | Yes  | Yes  | No  | Yes  | Yes  |  
| Memory Ban  | No  | No  | No  | Yes  | Yes  |  
| Error Isolation  | Yes  | No  | Yes  | Yes  | Yes  |  
| Reconfiguration  | At process launch  | At process launch  | Time-slice duration only  | When idle  | No  |  
| Telemetry  | Yes  | Limited  | No  | Yes (including in containers)  | Yes (including live migration)  |  
| Other noteworthy  | Supports all GPUs  | cudaCapability >= 3.5  | cudaCapability >= 7.0  | cudaCapability >= 8.0 (Hopper, Ampere)  | License required  |