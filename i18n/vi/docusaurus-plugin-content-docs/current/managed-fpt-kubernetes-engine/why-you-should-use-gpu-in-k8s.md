---
id: "why-you-should-use-gpu-in-k8s"
title: "Tại sao nên sử dụng GPU trên Kubernetes?"
description: "Kubernetes hiện hỗ trợ GPU, giúp dễ dàng cấu hình và sử dụng tài nguyên GPU để tăng tốc các workload như khoa học dữ liệu, machine learning và deep learning."
sidebar_label: "Tại sao nên sử dụng GPU trên Kubernetes?"
sidebar_position: "33"
draft: true
---

# Tại sao nên sử dụng GPU trên Kubernetes?

Kubernetes hiện hỗ trợ GPU, giúp dễ dàng cấu hình và sử dụng tài nguyên GPU để tăng tốc các workload như khoa học dữ liệu, machine learning và đặc biệt là deep learning. Kubernetes cung cấp GPU như một loại tài nguyên, và các device plugin cho phép Pod truy cập vào các tính năng phần cứng chuyên biệt như GPU và lên lịch chúng như các tài nguyên có thể schedule được. GPU thừa hưởng tất cả các ưu điểm của K8s:
  * **Containerization:** Container nhẹ, không yêu cầu hệ điều hành đầy đủ mà chạy với kernel OS dùng chung, giúp chúng nhỏ hơn, nhanh hơn và di động hơn so với máy ảo truyền thống.
  * **Microservices:** Phù hợp với các ứng dụng sử dụng kiến trúc microservices, Kubernetes điều phối và tự động hóa việc vận hành workload resource. Hầu hết các dự án ML được viết bằng Python hoặc R, và các ứng dụng có thể được viết bằng nhiều ngôn ngữ lập trình khác nhau. Trong trường hợp này, mô hình dựa trên Container đóng vai trò quan trọng, cho phép nhà phát triển chạy các bài test độc lập cho các ngôn ngữ khác nhau.
  * **Autoscaling:** Tự động scale linh hoạt là tính năng quan trọng và được nhắc đến nhiều của Kubernetes. Ứng dụng trên Kubernetes có ba khả năng tự động scale: Horizontal Pod Autoscaler (HPA) tự động tăng/giảm số pod khả dụng tùy theo mức sử dụng tài nguyên, Vertical Pod Autoscaler (VPA) tự động điều chỉnh CPU và memory cho các pod hiện có, và Cluster Autoscaler tự động mở rộng số worker node khi pod thiếu tài nguyên để khởi động.
  * **Triển khai tự động:** Kubernetes cung cấp giải pháp triển khai tự động, kết hợp với CI/CD. Việc triển khai mô hình ứng dụng lên các môi trường trở nên rất dễ dàng.

Với số lượng ứng dụng và dịch vụ AI ngày càng tăng, nhu cầu sử dụng GPU trên Kubernetes đang tăng trưởng mạnh. NVIDIA đã xây dựng thư viện và phần mềm riêng để tối ưu hóa việc sử dụng GPU trong môi trường container. Sử dụng NVIDIA GPU với Kubernetes cho phép scale liền mạch với khả năng tự động triển khai, bảo trì, lên lịch và vận hành GPU container trên worker node.
