---
id: "tai-sao-nen-su-dung-gpu-tren-kubernetes"
title: "Tại sao nên sử dụng GPU Kubernetes?"
description: "Kubernetes hiện tại đã hỗ trợ GPU, giúp dễ dàng cấu hình và sử dụng tài nguyên GPU để tăng tốc xử lý cho các workl"
sidebar_label: "Tại sao nên sử dụng GPU Kubernetes?"
sidebar_position: 3
---

# Tại sao nên sử dụng GPU Kubernetes?

Kubernetes hiện tại đã hỗ trợ GPU, giúp dễ dàng cấu hình và sử dụng tài nguyên GPU để tăng tốc xử lý cho các workloads như data science, machine learning và đặc biệt là deep learning. Kubernetes cung cấp GPU như một loại tài nguyên, device plug-ins cho phép Pod truy cập vào các tính năng phần cứng chuyên dụng như GPU và hiển thị chúng dưới dạng tài nguyên có thể lập lịch (schedule). GPU kế thừa được toàn bộ ưu điểm của K8s : 
  * – Containerization: Container có tính lighweith không cần hệ điều hành đầy đủ và thay vào đó chạy với shared OS kernel, nên các container nhỏ gọn, nhanh và di động hơn so với các máy ảo truyền thống.

  * – Microservices: Phù hợp với các ứng dụng sử dụng kiến trúc microservices, kubernetes điều phối và tự động hóa vận hành workload resouces. Hầu hết các dự án ML được viết bằng các ngôn ngữ lập trình như Python hoặc R và các ứng dụng có thể được viết bằng các ngôn ngữ lập trình khác, mô hình Containers-based có vai trò quan trọng trong trường hợp này, developers có thể chạy các thử nghiệm độc lập các ngôn ngữ khác nhau.

  * – Autoscaling: Cơ chế tự động mở rộng linh hoạt là một tính năng quan trọng và được nhắc đến nhiều nhất của Kubernetes. Ứng dụng trên Kubernetes có ba khả năng tự động thay đổi quy mô: Horizontal Pod Autoscaler (HPA) sẽ tự động tăng/giảm số lượng các pod có sẵn tùy thuộc vào việc sử dụng tài nguyên, Vertical Pod Autoscaler (VPA) tự động điều chỉnh CPU và bộ nhớ cho các pod hiện có, Cluster Autoscaler tự động mở rộng số lượng các worker node khi các pod không có tài nguyên để khởi tạo

  * – Triển khai tự động: Kubernetes cung cấp các giải pháp triển khai tự động , kết hợp với CI/CD việc triển khai mô hình ứng dụng lên các môi trường trở nên rất dễ dàng.

Với số lượng ngày càng nhiều ứng dụng và dịch vụ AI, nhu cầu sử dụng GPU trên Kubernetes ngày càng tăng. NVIDIA đã xây dựng library và phần mềm của mình để tối ưu hóa GPU sử dụng trong môi trường container. Kubernetes sử dụng GPU NVIDIA cho phép các cụm mở rộng một cách liền mạch với việc triển khai, bảo trì, lên lịch và vận hành tự động các cotainer GPU trên các worker nodes.
