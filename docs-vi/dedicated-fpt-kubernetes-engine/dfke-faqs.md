---
id: "dfke-faqs"
title: "Câu hỏi thường gặp"
description: "**D-FKE hỗ trợ ở các regions nào?**"
sidebar_label: "Câu hỏi thường gặp"
sidebar_position: 30
pagination_next: null
---

# Câu hỏi thường gặp (FAQs)

**D-FKE hỗ trợ ở các regions nào?**
Hiện tại FPTCloud đang hỗ trợ 02 Regions là HAN (Hanoi) và SGN (Saigon/HCM). D-FKE hỗ trợ tương ứng ở cả 02 Regions trên.
**Một cluster D-FKE có thể trải trên nhiều regions không?**
D-FKE không hỗ trợ một cluster chạy trên nhiều regions. Bạn có thể tạo cluster trên mỗi region cho cùng một ứng dụng để thực hiện BC&DR.
**D-FKE có hỗ trợ nhiều cấu hình VM trong một cluster không?**
D-FKE hiện tại không hỗ trợ nhiều cầu hình VM trong một cluster. Các Worker Nodes có cấu hình giống nhau (CPU, RAM, DISK), các Master Nodes có cấu hình giống nhau (CPU, RAM, DISK). Bạn có thể tăng cấu hình Nodes trong quá trình sử dụng.
**D-FKE hỗ trợ bao nhiêu Worker Nodes trong một cluster?**
D-FKE mặc định giới hạn 100 Worker Nodes / Cluster. Bạn cần liên hệ với FPT Cloud để tăng giới hạn Worker Nodes nếu có nhu cầu.
**D-FKE có tương thích với các ứng dụng Kubernetes hiện có của tôi không?**
D-FKE sử dụng native Kubernetes nên hoàn toàn tương thích với các nên tảng Kubernetes trên các Cloud khác như AWS, Azure, GCP, DO… cũng như cluster Kubernetes được bạn cài đặt trên hạ tầng của bạn. Điều này giúp bạn dễ dàng di chuyển ứng dụng giữa FPT Cloud và DC của bạn cũng như các Cloud khác.
**Làm thế nào để tôi có thể public ứng dụng ra bên ngoài cluster?**
Có nhiều cách để bạn có thể public ứng dụng ra ngoài cluster để khách hàng có thể sử dụng. Một trong những cách đơn giản là sử dụng Svc Type LoadBalancer theo hướng dẫn sau: <https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=service-type-load-balancer>
**Làm thế nào để tôi có thể giám sát hiệu năng và cấu hình cảnh báo cho cluster?**
FPTCloud cung cấp sản phẩm FMON giúp bạn giám sát hiệu năng và cấu hình cảnh báo cho Kubernetes cluster. Ngoài ra, FMON cung cấp logging & tracing dễ dàng tích hợp với FKE.