---
id: "faqs"
title: "Câu hỏi thường gặp"
description: "Hiện tại FPT Cloud đang hỗ trợ 02 Regions là HAN (Hanoi) và SGN (Saigon/HCM). D-FKE hỗ trợ tương ứng ở cả 02 Regions trên."
sidebar_label: "Câu hỏi thường gặp"
sidebar_position: "25"
---

# Câu hỏi thường gặp

### D-FKE hỗ trợ ở các regions nào?
Hiện tại FPT Cloud đang hỗ trợ 02 Regions là HAN (Hanoi) và SGN (Saigon/HCM). D-FKE hỗ trợ tương ứng ở cả 02 Regions trên.

### Một cluster D-FKE có thể trải trên nhiều regions không?
D-FKE không hỗ trợ một cluster chạy trên nhiều regions. Bạn có thể tạo cluster trên mỗi region cho cùng một ứng dụng để thực hiện BC&DR (Business Continuity and Disaster Recovery).

### D-FKE có hỗ trợ nhiều cấu hình VM trong một cluster không?
D-FKE hiện tại không hỗ trợ nhiều cấu hình VM trong một cluster. Các Worker node phải có cấu hình giống nhau (CPU, RAM, Disk), và các Master node phải có cấu hình giống nhau (CPU, RAM, Disk). Bạn có thể tăng cấu hình node trong quá trình sử dụng.

### D-FKE hỗ trợ bao nhiêu Worker node trong một cluster?
D-FKE mặc định giới hạn tối đa 100 Worker node trên một Cluster. Bạn cần liên hệ với FPT Cloud để tăng giới hạn Worker node nếu có nhu cầu.

### D-FKE có tương thích với các ứng dụng Kubernetes hiện có của tôi không?
D-FKE sử dụng native Kubernetes nên hoàn toàn tương thích với các nền tảng Kubernetes trên các Cloud khác như AWS, Azure, GCP, DigitalOcean, cũng như các cluster Kubernetes bạn cài đặt trên hạ tầng của mình. Điều này giúp bạn dễ dàng di chuyển ứng dụng giữa FPT Cloud, data center của bạn và các Cloud khác.

### Làm thế nào để public ứng dụng ra ngoài cluster?
Có một số cách để public ứng dụng ra ngoài cluster cho khách hàng sử dụng. Một cách đơn giản là sử dụng [Load Balancer Services](../dedicated-fpt-kubernetes-engine/index.md) theo hướng dẫn.

### Làm thế nào để giám sát hiệu năng và cấu hình cảnh báo cho cluster?
FPTCloud cung cấp sản phẩm FMON giúp bạn giám sát hiệu năng và cấu hình cảnh báo cho Kubernetes cluster. Ngoài ra, FMON cung cấp logging và tracing dễ dàng tích hợp với FKE.
