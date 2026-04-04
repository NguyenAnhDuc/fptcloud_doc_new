---
id: "how-to-use-gpu-in-kubernetes"
title: "Cách sử dụng GPU trên Kubernetes"
description: "FPT Cloud cung cấp Kubernetes với NVIDIA GPU, hỗ trợ cấu hình GPU linh hoạt và quản lý tài nguyên tự động."
sidebar_label: "Cách sử dụng GPU trên Kubernetes"
sidebar_position: "20"
---

# Cách sử dụng GPU trên Kubernetes

FPT Cloud cung cấp **Kubernetes với NVIDIA GPU**, bao gồm các tính năng chính sau:
  * **Cấu hình GPU linh hoạt** với nhiều loại GPU, dung lượng GPU memory tùy chọn, áp dụng cho từng Worker Group.
  * **Quản lý và phân bổ tài nguyên GPU** tự động trong Kubernetes với NVIDIA Operator.
  * **Trực quan hóa và giám sát** GPU bằng NVIDIA DCGM (Data Center GPU Manager).
  * Tự động scale Container/Node với **Autoscaler** khi ứng dụng yêu cầu tăng/giảm tài nguyên GPU.
  * Hỗ trợ **GPU sharing** với cơ chế Multi-Instance, tối ưu hóa sử dụng tài nguyên GPU và chi phí.

FPT Cloud sử dụng **NVIDIA GPU Operator**, cung cấp công cụ tự động để quản lý tất cả các thành phần phần mềm cần thiết để sử dụng GPU trên Kubernetes. GPU Operator cho phép người dùng sử dụng tài nguyên GPU tương tự như sử dụng CPU trong Kubernetes cluster.
Các thành phần của Operator bao gồm:
  * NVIDIA Drivers (CUDA, MIG, ...)
  * NVIDIA Device Plugin
  * NVIDIA Container Toolkit
  * NVIDIA GPU Feature Discovery
  * NVIDIA Data Center GPU Manager (Monitoring)

Hiện tại, FPT Cloud hỗ trợ Kubernetes sử dụng NVIDIA A30 GPU với các MIG profile sau:

| **STT** | **GPU A30 Profile** | **Strategy** | **Số instance** | **Tài nguyên instance** |
| --- | --- | --- | --- | --- |
| 1 | all-1g.6gb | single | 4 | 1g.6gb |
| 2 | all-2g.12gb | single | 2 | 2g.12gb |
| 3 | all-balanced | mixed | 2 | 1g.6gb |
|   | all-balanced | mixed | 1 | 2g.12gb |
| 4 | none (no label) | none | 0 | 0 (Toàn bộ) |

_Ví dụ:_
Nếu chọn chiến lược cấu hình **single: all-1g.6gb**, GPU A30 trên worker node sẽ được chia thành 4 MIG device với tài nguyên GPU logic tương đương ¼ GPU vật lý và 6GB GPU RAM mỗi device.

**Lưu ý:**
  * Cấu hình MIG áp dụng cho tất cả card gắn vào worker.
  * MIG strategy trên các worker group trong cùng một cluster phải cùng loại (_single/mixed/none_).
