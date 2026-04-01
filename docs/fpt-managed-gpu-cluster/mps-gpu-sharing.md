---
id: "mps-gpu-sharing"
title: "Mps Gpu Sharing"
sidebar_label: "Mps Gpu Sharing"
sidebar_position: "19"
---

# Mps Gpu Sharing

MPS là a feature in GPU of NVIDIA, for phép nhiều container chia sẻ cùng a GPU vật lý. 
MPS có ưu điểm hơn so with MIG về vấn đề phân chia tài nguyên GPU, tối đa 48 container can sử dụng GPU cùng lúc. 
MPS dựa trên feature NVIDIA's Multi-Process Service of CUDA, for phép nhiều ứng dụng CUDA chạy đồng thời trên a GPU. 
Với MPS, user can xác định trước số lượng replicas of a GPU. Giá trị this for chúng ta biết số lượng container tối đa can truy cập to sử dụng a GPU. 
Ngoài ra, chúng ta can giới hạn tài nguyên GPU for fromng container, bằng việc tạo the biến môi trường sau in container: 
CUDA_MPS_ACTIVE_THREAD_PERCENTAGE 
CUDA_MPS_PINNED_DEVICE_MEM_LIMIT 
Để hiểu rõ hơn về theh thức MPS hoạt động, vui lòng truy cập : <https://docs.nvidia.com/deploy/mps/>
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
