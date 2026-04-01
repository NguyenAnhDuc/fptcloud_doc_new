---
id: "tong-quan-dich-vu-GPU"
title: "Overview dịch vụ GPU trên Kubernetes FPT Cloud"
sidebar_label: "Overview dịch vụ GPU trên Kubernetes FPT Cloud"
sidebar_position: "2"
---

# Overview dịch vụ GPU trên Kubernetes FPT Cloud

FPT Cloud cung cấp Kubernetes sử dụng GPU NVIDIA có the feature chính sau: 
  * Cấu hình GPU linh hoạt với nhiều loại GPU, bộ nhớ GPU tùy foṛn, áp dụng theo từng Worker Group. 
  * Quản lý và cấp phát tài nguyên GPU in Kubernetes tự động với NVIDIA Operator 
  * Trực quan hóa and monitoring GPU bằng NVIDIA DCGM. 
  * Tự động tăng/giảm Container/Node với Autoscaler when ứng dụng yêu cầu sử dụng tài nguyên GPU tăng lên/giảm đi. 
  * Hỗ trợ GPU sharing với cơ chế Multi-Instance, giúp tối ưu hóa tài nguyên và chi phí sử dụng GPU. 

FPT Cloud sử dụng NVIDIA GPU Operator cung cấp công cụ tự động quản lý tất cả the thành phần phần mềm need to thiết to sử dụng GPU trên Kubernetes. GPU Operator for phép người dùng sử dụng tài nguyên GPU giống như sử dụng CPU in cụm Kubernetes. 
Các thành phần of Operator includes: 
  * NVIDIA Drivers (CUDA, MIG,…) 
  * NVIDIA Device Plugin 
  * NVIDIA Container Toolkit 
  * NVIDIA GPU Feature Discovery 
  * NVIDIA Data Center GPU Manager (Monitoring) 

Trên region **Hanoi** and **Saigon** , FPT Cloud hiện tại is hỗ trợ Kubernetes sử dụng GPU Nvidia A30 with các MIG profile sau:  
| **No.**  | **GPU A30 Profile**  | **Strategy**  | **Number instance**  | **Instance resource**  |  
| --- | --- | --- | --- | --- |  
| 1  | all-1g.6gb  | single  | 4  | 1g.6gb  |  
| 2  | all-2g.12gb  | single  | 2  | 2g.12gb  |  
| 3  | all-balanced  | mixed  | 2  | 1g.6gb  |  
| 4  |   |   | 1  | 2g.12gb  |  
| 5  | none (no label)  | none  | 0  | 0 (Entire)  |  
Trên region Hanoi 2 and Japan, FPT Cloud hiện tại is hỗ trợ Kubernetes sử dụng GPU Nvidia H100 and GPU Nvidia H200  
| **No.**  | **GPU H100 SXM5**  | **Strategy**  | **Number instance**  | **Instance resource**  |  
| --- | --- | --- | --- | --- |  
| 1  | all-1g.10gb  | single  | 7  | 1g.10gb  |  
| 2  | all-1g.20gb  | single  | 4  | 1g.20gb  |  
| 3  | all-2g.20gb  | single  | 3  | 2g.20gb  |  
| 4  | all-3g.40gb  | single  | 2  | 3g.40gb  |  
| 5  | all-4g.40gb  | single  | 1  | 4g.40gb  |  
| 6  | all-7g.80gb  | single  | 1  | 7g.80gb  |  
| 7  | all-balanced  | mixed  | 2  
1  
1  | 1g.10gb  
2g.20gb  
3g.40gb  |  
| 8  | none (no label)  | none  | 0  | 0 (Entire)  |  
| **No.**  | **GPU H200 SXM5**  | **Strategy**  | **Number instance**  | **Instance resource**  |  
| --- | --- | --- | --- | --- |  
| 1  | all-1g.18gb  | single  | 7  | 1g.18gb  |  
| 2  | all-1g.35gb  | single  | 4  | 1g.35gb  |  
| 3  | all-2g.25gb  | single  | 3  | 2g.25gb  |  
| 4  | all-3g.71gb  | single  | 2  | 3g.71gb  |  
| 5  | all-4g.71gb  | single  | 1  | 4g.71gb  |  
| 6  | all-7g.141gb  | single  | 1  | 7g.141gb  |  
| 7  | all-balanced  | mixed  | 2  
1  
1  | 1g.18gb  
2g.35gb  
3g.71gb  |  
| 8  | none (no label)  | none  | 0  | 0 (Entire)  |  
**_Ví dụ:_**
👉 Nếu chọn cấu hình strategy single: all-1g.6gb, card GPU A30 trên worker is chia nhỏ thành 4 mig-devices có tài nguyên gpu logic (bằng ¼ GPU vật lý) và 6GB GPU RAM.
👉 Nếu chọn cấu hình strategy single: all-1g.10gb, card GPU H100 trên worker is chia nhỏ thành 7 mig-devices có tài nguyên gpu logic (bằng 1⁄7 GPU vật lý) và 10GB GPU RAM.
**_Chú ý:_**
MIG config áp dụng for tất cả các card gắn trên worker. MIG strategy trên the worker group of cùng cluster must cùng 1 loại (single/mixed/none).
Trong document guide this, chúng tôi will trình bày the feature chính of service GPU trên Kubernetes FPT Cloud, includes: 
  1. Cài đặt cluster Kubernetes sử dụng GPU 
  2. Initialize a worker group sử dụng GPU 
  3. Chỉnh sửa a worker group sử dụng GPU 
  4. Triển khai ứng dụng sử dụng GPU 
  5. Hướng dẫn sử dụng GPU Telemetry 
  6. Hướng dẫn cài đặt and sử dụng driver 
  7. Hướng dẫn cấu hình Auto Scale sử dụng GPU Custom mertric 
  8. Hướng dẫn cấu hình Auto Scale sử dụng KEDA and Prometheus 
  9. Hướng dẫn sử dụng the chế độ GPU Sharing
