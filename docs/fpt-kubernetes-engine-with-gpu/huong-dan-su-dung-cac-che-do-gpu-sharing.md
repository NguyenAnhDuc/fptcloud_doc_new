---
id: "huong-dan-su-dung-cac-che-do-gpu-sharing"
title: "Hướng dẫn sử dụng các chế độ GPU sharing"
sidebar_label: "Hướng dẫn sử dụng các chế độ GPU sharing"
sidebar_position: "8"
---

# Hướng dẫn sử dụng the chế độ GPU sharing

Các chế độ GPU sharing for phép GPU vật lý is chia sẻ bởi nhiều container nhằm mục đích tối ưu hóa mức độ sử dụng GPU. Sau đây là the chiến lược GPU sharing is chúng tôi hỗ trợ:  
|   | Multi-instance GPU  | GPU time-sharing  | NVIDIA MPS  |  
| --- | --- | --- | --- |  
| General  | GPU be divided and sharing among multiple containers  | Each container use GPU in a slice of time  | Containers use GPU in parallel  |  
| Isolation  | A GPU be divided in up to seven instances, each instance has its own dedicated compute, memory, bandwidth. Each partition is fully disparated with each other.  | Each container accesses the full capacity of the underlying physical GPU by doing context switching between processes running on a GPU. However, time-sharing provides no memory limit enforcement between shared Jobs and the rapid context switching for shared access may introduce overhead.  | NVIDIA MPS has limited resource isolation, but gains more flexibility in other dimensions, for example GPU types and max shared units, which simplify resource allocation.  |  
| Suitable for these workloads  | Recommended for workloads running in parallel and that need certain resiliency and QoS. For example, when running AI inference workloads, multi-instance GPU multi-instance GPU allows multiple inference queries to run simultaneously for quick responses, without slowing each other down.  | Recommended for bursty and interactive workloads that have idle periods. These workloads are not cost-effective with a fully dedicated GPU. By using time-sharing, workloads get quick access to the GPU when they are in active phases. GPU time-sharing is optimal for scenarios to avoid idling costly GPUs where full isolation and continuous GPU access might not be necessary, for example, when multiple users test or prototype workloads. Workloads that use time-sharing need to tolerate certain performance and latency compromises.  | Recommended for batch processing for small jobs because MPS maximizes the throughput and concurrent use of a GPU. MPS allows batch jobs to efficiently process in parallel for small to medium sized workloads. NVIDIA MPS is optimal for cooperative processes acting as a single application. For example, MPI jobs with inter-MPI rank parallelism. With these jobs, each small CUDA process (typically MPI ranks) can run concurrently on the GPU to fully saturate the whole GPU. Workloads that use CUDA MPS need to tolerate the memory protection and error containment limitations.  |  
**A. Multi instance GPU (MIG)**
Multi instance GPU là feature for phép GPU of you is chia ra thành tối đa 7 phần tách rời nhau. Các phần GPU this is gọi là the MIG instance, the MIG instance this hoàn toàn tách biệt with nhau về khả năng tính toán, băng thông, bộ nhớ. 
GPU k8s service of chúng tôi hỗ trợ the MIG profile as follows:  
| No.  | GPU A100 Profile  | Strategy  | Number instance  | Instance resource  |  
| --- | --- | --- | --- | --- |  
| 1  | all-1g.10gb  | single  | 7  | 1g.10gb  |  
| 2  | all-1g.20gb  | single  | 4  | 4g.20gb  |  
| 3  | all-2g.20gb  | single  | 3  | 2g.20gb  |  
| 4  | all-3g.40gb  | single  | 2  | 3g.40gb  |  
| 5  | all-4g.40gb  | single  | 1  | 4g.40gb  |  
| 6  | all-balanced  | mixed  | 2  
1  
1  | 1g.10gb  
2g.20gb  
3g.40gb  |  
| 7  | none with operator  | none  | 0  | 0 (Entire GPU)  |  
| 8  | none  | none  | 0  | 0  |  
| No.  | GPU A30 Profile  | Strategy  | Number instance  | Instance resource  |  
| --- | --- | --- | --- | --- |  
| 1  | all-1g.6gb  | single  | 4  | 1g.6gb  |  
| 2  | all-2g.12gb  | single  | 2  | 2g.10gb  |  
| 3  | all-4g.24gb  | single  | 1  | 4g.24gb  |  
| 4  | all-balanced  | mixed  | 2  
1  | 1g.6gb  
2g.12gb  |  
_Example:_ Nếu chọn cấu hình strategy single: all-1g.6gb, card GPU A30 trên worker is chia nhỏ thành 4 MIG-devices có tài nguyên GPU bằng ¼ GPU vật lý và 6GB GPU RAM.
_Chú ý:_
✔ MIG config áp dụng for tất cả các card gắn trên worker. 
✔ MIG strategy trên the worker group of cùng cluster phải cùng 1 loại (single/mixed/none). 
✔ Đối with stragegy “none with Operator”, pod can sử dụng 1 GPU devices chứa tài nguyên of toàn bộ GPU. 
✔ Đối with stragegy “none”, GPU has been is kết nối sẵn ando máy, user can tự deploy GPU Operator or GPU device plugin theo cấu hình mong muốn. Khuyến nghị user cần nắm chắc the kiến thức cơ bản về GPU-Sharing before thực hiện strategy this!
**B. Configure MIG trên GPU Kubernetes service**
Tại bước khởi tạo worker group GPU, you can chọn the profile MIG sharing mode trên giao diện and GPU Kubernetes service of chúng tôi will thực hiện việc cấu hình for you:
[![](/img/migrated/Picture15-1-4c4d1d6e.png)](/img/migrated/Picture15-1-4c4d1d6e.png)
_Chú ý:_
✔ Nếu you chọn the profile có dạng “MIG single”, the worker group tiếp theo of you chỉ can chọn the sharing mode thuộc the profile dạng “MIG single”, tương tự with profile “MIG mixed”, “None”, “None with Operator”. 
✔ Sharing mode “None” corresponding with việc chúng tôi to toàn permission cụm Kuberntes GPU for you, you can thực hiện cài thủ công GPU Operator or Nvidia device plugin to chạy the sharing mode theo nhu cầu. 
✔ Sharing mode “None with operator” corresponding with việc chúng tôi thực hiện manage GPU Operator for you. Tuy nhiên thì 1 GPU will chỉ is gán ando tối đa 1 container in a thời điểm. 
  * Verify MIG

Sau when hệ thống portal of chúng tôi báo cụm ở status success, you can kiểm tra tài nguyên GPU of a node GPU bằng lệnh: 

```
CopyKubectl describe nodes  
```

Output: 
[![](/img/migrated/Picture23-1-542f1884.png)](/img/migrated/Picture23-1-542f1884.png)
Lúc this, you can yêu cầu tối đa 4 tài nguyên nvidia.com/gpu for pod of mình, mỗi tài nguyên nvidia.com/gpu corresponding with ¼ khả năng tính toán and bộ nhớ of GPU vật lý ban đầu. 
Trong trường hợp node of you sử dụng 2 GPU, will có 8 tài nguyên nvidia.com/gpu is displayed. 
Ngoài ra, you can kết hợp MIG with the chiến lược chia sẻ GPU khác như time sclicing (has been hỗ trợ) and MPS (chưa hỗ trợ) to tối đa hóa mức độ sử dụng GPU. 
**C. Multi Process Service (MPS)**
✔ MPS là a feature in GPU of NVIDIA, for phép nhiều container chia sẻ cùng a GPU vật lý. 
✔ MPS có ưu điểm hơn so with MIG về vấn đề phân chia tài nguyên GPU, tối đa 48 container can sử dụng GPU cùng lúc. 
✔ MPS dựa trên feature NVIDIA's Multi-Process Service of CUDA, for phép nhiều ứng dụng CUDA chạy đồng thời trên a GPU. 
✔ Với MPS, user can xác định trước số lượng replicas of a GPU. Giá trị this for chúng ta biết số lượng container tối đa can truy cập to sử dụng a GPU. 
✔ Ngoài ra, chúng ta can giới hạn tài nguyên GPU for fromng container, bằng việc tạo the biến môi trường sau in container: 
CUDA_MPS_ACTIVE_THREAD_PERCENTAGE 
CUDA_MPS_PINNED_DEVICE_MEM_LIMIT 
✔ Để hiểu rõ hơn về theh thức MPS hoạt động, vui lòng truy cập : <https://docs.nvidia.com/deploy/mps/>
  * Cấu Hình MPS trên FPTCloud K8s GPU service 

Bạn can cấu hình for worker group GPU of mình sử dụng GPU in quá trình khởi tạo worker group như hình minh họa sau: 
[![](/img/migrated/Picture24-1-39fcf61e.png)](/img/migrated/Picture24-1-39fcf61e.png)
Với cấu hình this, GPU will is "chia" thành 48 phần, mỗi phần mang khả năng tính toán and bộ nhớ bằng 1/48 GPU vật lý ban đầu
  * Verify MPS

Bạn can kiểm tra cấu hình MPS trên node GPU of mình bằng lệnh:

```
Copykubectl describe nodes $NODE_NAME 
```

Output:
[![](/img/migrated/Picture18-1-ca9762ef.png)](/img/migrated/Picture18-1-ca9762ef.png)
Lúc this, you can yêu cầu tối đa 48 tài nguyên nvidia.com/gpu for the pod of mình, mỗi tài nguyên nvidia.com/gpu corresponding with 1/48 khả năng tính toán and bộ nhớ of GPU vật lý ban đầu. 
Trong trường hợp node of you sử dụng 2 GPU, will có 96 tài nguyên nvidia.com/gpu is displayed. 
**Một andi lưu ý**
  * Tài nguyên nvidia.com/gpu a container yêu cầu phải bằng 1. 
  * Số max client tối đa là 48, ít nhất là 2, tài nguyên GPU vật lý is chia đều for the max client. 
  * Một container chạy a process to đảm bảo sharing mode MPS không phát sinh lỗi. 
  * Requirements phần "hostIPC:true" tại file manifest triển khai workload. 
  * MPS có những giới hạn về error containment and workload isolation, hãy tìm hiểu and cân nhắc before sử dụng. 

**D. Time Slicing**
✔ Timeslcing là feature chia sẻ GPU nguyên thủy, fromng prorcess/container is sử dụng GPU in a khoảng thời gian giống nhau. 
✔ Timeslicing thực hiện chia sẻ GPU theo cơ chế context switching in CPU, mỗi process/container will is lưu lại context when GPU is sử dụng bởi process khác. 
✔ Time slicing không hỗ trợ chia sẻ GPU a theh song song như MPS.
  * Configure Time slicing trên GPU Kubernetes service 

Timeslicing là a feature chia sẻ GPU nguyên thủy, nó can is trên toàn bộ the MIG sharing mode (trừ the profile MIG-mixed), and mode “None with Operator” 
Tại bước khởi tạo worker group GPU, you will chọn kết hợp timeslicing with MIG or dùng timeslicing trên GPU with MIG mode enabled, chúng tôi will thực hiện việc cấu hình for you:
[![](/img/migrated/Picture26-1-e981fe80.png)](/img/migrated/Picture26-1-e981fe80.png)
[![](/img/migrated/Picture27-1-7ec0a50e.png)](/img/migrated/Picture27-1-7ec0a50e.png)
  * Verify Time slicing 

Bạn can kiểm tra cấu hình timeslicing trên node GPU of mình bằng lệnh: 

```
Copykubectl describe nodes $NODE_NAME 
```

Output:
[![](/img/migrated/Picture28-3b826c87.png)](/img/migrated/Picture28-3b826c87.png)
Lúc this, you can yêu cầu tối đa 48 tài nguyên nvidia.com/gpu for the pod of mình. Tuy nhiên khác with MPS, mỗi pod không bị giới hạn về lượng tài nguyên nó is permission chiếm, do vậy can dẫn to tình trạng tràn bộ nhớ. 
Trong trường hợp you sử dụng MIG mode, số lượng tài nguyên nivida.com/gpu bằng số lượng MIG instance * số lượng Time Slicing max client you định nghĩa. VD: you sử dụng MIG mode 2x2g.12gb and số timeslicing client bằng 48, will có 96 tài nguyên nvidia.com/gpu is displayed. 
**Một andi lưu ý**
  1. Tài nguyên nvidia.com/gpu a container yêu cầu can bằng or or lớn hơn 1. Tuy nhiên yêu cầu nhiều hơn 1 tài nguyên nvidia.com/gpu không giúp for container of you is permission truy cập nhiều tài nguyên hơn. 
  2. Khi you sử dụng timeslicing, container không bị giới hạn về việc sử dụng tài nguyên tính toán and bộ nhớ. 
  3. Số max client tối đa là 48, ít nhất là 2. 
  4. Một container chạy a process. 
  5. Cần xác định rõ ràng lượng tài nguyên GPU container cần to tránh trường hợp OOM gây gián đoạn hoạt động of GPU.
