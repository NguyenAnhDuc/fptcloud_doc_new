---
id: "mps-gpu-sharing"
title: "Mps Gpu Sharing"
sidebar_label: "Mps Gpu Sharing"
sidebar_position: "19"
---

# Mps Gpu Sharing

MPS là một tính năng trong GPU của NVIDIA, cho phép nhiều container chia sẻ cùng một GPU vật lý. 
MPS có ưu điểm hơn so với MIG về vấn đề phân chia tài nguyên GPU, tối đa 48 container có thể sử dụng GPU cùng lúc. 
MPS dựa trên tính năng NVIDIA's Multi-Process Service của CUDA, cho phép nhiều ứng dụng CUDA chạy đồng thời trên một GPU. 
Với MPS, người dùng có thể xác định trước số lượng replicas của một GPU. Giá trị này cho chúng ta biết số lượng container tối đa có thể truy cập để sử dụng một GPU. 
Ngoài ra, chúng ta có thể giới hạn tài nguyên GPU cho từng container, bằng việc tạo các biến môi trường sau trong container: 
CUDA_MPS_ACTIVE_THREAD_PERCENTAGE 
CUDA_MPS_PINNED_DEVICE_MEM_LIMIT 
Để hiểu rõ hơn về cách thức MPS hoạt động, vui lòng truy cập : <https://docs.nvidia.com/deploy/mps/>
  * Cấu Hình MPS trên FPTCloud K8s GPU service 

Bạn có thể cấu hình cho worker group GPU của mình sử dụng GPU trong quá trình khởi tạo worker group như hình minh họa sau: 
[![](/img/migrated/Picture24-1-39fcf61e.png)](/img/migrated/Picture24-1-39fcf61e.png)
Với cấu hình này, GPU sẽ được "chia" thành 48 phần, mỗi phần mang khả năng tính toán và bộ nhớ bằng 1/48 GPU vật lý ban đầu
  * Verify MPS

Bạn có thể kiểm tra cấu hình MPS trên node GPU của mình bằng lệnh:

```
Copykubectl describe nodes $NODE_NAME 
```

Output:
[![](/img/migrated/Picture18-1-ca9762ef.png)](/img/migrated/Picture18-1-ca9762ef.png)
Lúc này, bạn có thể yêu cầu tối đa 48 tài nguyên nvidia.com/gpu cho các pod của mình, mỗi tài nguyên nvidia.com/gpu tương ứng với 1/48 khả năng tính toán và bộ nhớ của GPU vật lý ban đầu. 
Trong trường hợp node của bạn sử dụng 2 GPU, sẽ có 96 tài nguyên nvidia.com/gpu được hiển thị. 
**Một vài lưu ý**
  * Tài nguyên nvidia.com/gpu một container yêu cầu phải bằng 1. 
  * Số max client tối đa là 48, ít nhất là 2, tài nguyên GPU vật lý được chia đều cho các max client. 
  * Một container chạy một process để đảm bảo sharing mode MPS không phát sinh lỗi. 
  * Yêu cầu phần "hostIPC:true" tại file manifest triển khai workload. 
  * MPS có những giới hạn về error containment và workload isolation, hãy tìm hiểu và cân nhắc trước khi sử dụng.
