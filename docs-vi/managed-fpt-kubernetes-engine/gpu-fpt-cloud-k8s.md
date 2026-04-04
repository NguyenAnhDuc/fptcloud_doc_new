---
id: "gpu-fpt-cloud-k8s"
title: "Dịch vụ GPU trên FPT Kubernetes Engine"
description: "FPT Cloud cung cấp Kubernetes với hỗ trợ NVIDIA GPU, bao gồm các tính năng chính về quản lý và giám sát GPU."
sidebar_label: "Dịch vụ GPU trên FPT Kubernetes Engine"
sidebar_position: "35"
---

# Dịch vụ GPU trên FPT Kubernetes Engine

FPT Cloud cung cấp Kubernetes với hỗ trợ NVIDIA GPU, bao gồm các tính năng chính sau:
  * Cấu hình GPU linh hoạt với tùy chọn loại GPU và dung lượng GPU memory cho từng Worker Group.
  * Quản lý và phân bổ tài nguyên GPU tự động trong Kubernetes với NVIDIA Operator.
  * Trực quan hóa và giám sát GPU thông qua NVIDIA DCGM (Data Center GPU Manager).
  * Tự động scale Container/Node với Autoscaler dựa trên nhu cầu tài nguyên GPU tăng/giảm của ứng dụng.
  * Hỗ trợ GPU sharing bằng cơ chế Multi-Instance, tối ưu hóa sử dụng tài nguyên và chi phí GPU.

FPT Cloud sử dụng NVIDIA GPU Operator để cung cấp công cụ tự động quản lý tất cả các thành phần phần mềm cần thiết để sử dụng GPU trên Kubernetes (K8s). GPU Operator cho phép người dùng sử dụng tài nguyên GPU trong K8s cluster tương tự như sử dụng CPU.
Các thành phần phần mềm bao gồm:
  * NVIDIA Drivers (CUDA, MIG, ...)
  * NVIDIA Device Plugin
  * NVIDIA Container Toolkit
  * NVIDIA GPU Feature Discovery
  * NVIDIA Data Center GPU Manager (Monitoring)

K8s Operator tự động cấu hình Multi-Instance GPU (MIG) cho worker. Để đạt được cấu hình MIG, worker cần được gán label theo các profile được Nvidia hỗ trợ. Các cấu hình MIG được liệt kê trong Configmap default-mig-parted-config trên K8s trong namespace 'gpu-operator'.
[![](/img/migrated/67-efeaa017.png)](/img/migrated/67-efeaa017.png)
MIG trên Kubernetes được thiết kế như một controller. Nó theo dõi thay đổi label 'nvidia.com/mig.config' trên worker, sau đó áp dụng cấu hình MIG theo yêu cầu của người dùng. Khi label thay đổi, MIG trước tiên dừng tất cả GPU pod, bao gồm device plugin, GFD (GPU Feature Discovery) và DCGM exporter. Sau đó dừng tất cả systemd service trên GPU worker nếu driver được cài đặt sẵn. Các service này được liệt kê trong configmap tên 'default-gpu-clients'. Cuối cùng, MIG áp dụng lại cấu hình MIG và khởi động lại GPU pod (và có thể cả GPU systemd service trên GPU worker nếu cần). Bật chế độ MIG yêu cầu khởi động lại worker.
FPT Cloud hiện hỗ trợ card GPU Nvidia A30 và các MIG profile-label sau:

| **STT** | **GPU A30 Profile** | **Strategy** | **Số instance** | **Tài nguyên instance** |
| --- | --- | --- | --- | --- |
| 1 | all-1g.6gb | single | 4 | 1g.6gb |
| 2 | all-2g.12gb | single | 2 | 2g.12gb |
| 3 | all-balanced | mixed | 2 | 1g.6gb |
| 4 | all-balanced | mixed | 1 | 2g.12gb |
| 5 | none (no label) | none | 0 | 0 (Toàn bộ) |

Ví dụ:
Với card GPU A30, bạn có thể cấu hình single strategy với label 'all-1g.6gb'. Label này có nghĩa là Operator sẽ chia GPU A30 trên worker thành 4x MIG device với 1 tài nguyên GPU logic (tương đương ¼ GPU vật lý) và 6GB GPU RAM. Cấu hình MIG này áp dụng cho tất cả card có label trên worker.
FPT Cloud sử dụng Nvidia GPU Telemetry tích hợp với kube-prometheus-stack làm công cụ giám sát và theo dõi việc sử dụng GPU trên K8s. Công cụ giám sát bao gồm collector, time-series database để lưu trữ metric và trực quan hóa qua các ứng dụng mã nguồn mở phổ biến như Prometheus và Grafana. Prometheus cũng tích hợp Alertmanager để tạo và quản lý cảnh báo. Prometheus được triển khai cùng với kube-state-metrics và node_exporter để hiển thị metric ở cấp cluster cho Kubernetes API object và metric ở cấp node như mức sử dụng GPU.
Mô hình kiến trúc GPU Telemetry đang sử dụng: [![](/img/migrated/68-33f96824.png)](/img/migrated/68-33f96824.png)
Để thu thập GPU telemetry trong Kubernetes, Nvidia khuyến nghị sử dụng dcgm-exporter. Dcgm-exporter hiển thị metric GPU cho Prometheus và có thể cung cấp trực quan hóa thông qua Grafana. Công cụ được thiết kế để tận dụng KubeletPodResources API và hiển thị metric GPU theo định dạng Prometheus có thể thu thập. Công cụ bao gồm ServiceMonitor để expose endpoint.
Nvidia DCGM GPU Dashboard:
[![](/img/migrated/69-7bd2daa5.png)](/img/migrated/69-7bd2daa5.png)
Kết luận: Sử dụng GPU trên Kubernetes có phải là giải pháp tốt cho AI workload không? Chắc chắn là có, vì ngày càng có nhiều extension mã nguồn mở cho Kubernetes như KNative, Istio, Kubeflow và KFSServing hỗ trợ chạy AI workload trên Kubernetes, tăng tốc và đơn giản hóa việc triển khai AI và machine learning trên Kubernetes, loại bỏ sự phức tạp và tạo điều kiện triển khai và quản lý ở quy mô lớn.
Kubernetes đang trở thành công nghệ trung tâm trong triển khai AI ngày nay. Từ dữ liệu và mô hình đến prototype và cuối cùng là production, quá trình đã được hợp lý hóa và đơn giản hóa đáng kể nhờ các thư viện như PyTorch, TensorFlow và Keras. Các framework này cũng có thể được áp dụng chi tiết để phát triển component tùy chỉnh hoặc tích hợp và tinh chỉnh mô hình hiện có bằng transfer learning. Công nghệ Container cho phép đóng gói kết quả thành image với tất cả yêu cầu và phụ thuộc của ứng dụng, có thể chạy ở hầu hết mọi nơi mà không bị giới hạn tốc độ. Ở bước cuối cùng, triển khai, bảo trì và mở rộng quy mô trở nên cực kỳ đơn giản và mạnh mẽ với Kubernetes.
Sự kết hợp GPU trên K8s là thiết yếu để cải thiện hiệu suất và tốc độ xử lý cho ứng dụng AI. Dịch vụ GPU trên Kubernetes của FPT Cloud mang lại hiệu quả về chất lượng và tiết kiệm thời gian, đặc biệt cho các tổ chức tài chính xử lý lượng dữ liệu lớn.
