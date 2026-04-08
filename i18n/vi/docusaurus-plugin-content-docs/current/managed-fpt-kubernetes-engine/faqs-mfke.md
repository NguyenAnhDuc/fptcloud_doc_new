---
id: "faqs-mfke"
title: "Câu hỏi thường gặp"
description: "Các câu hỏi thường gặp về dịch vụ Managed FPT Kubernetes Engine."
sidebar_label: "Câu hỏi thường gặp"
sidebar_position: "28"
draft: true
---

# Câu hỏi thường gặp

### M-FKE hỗ trợ những region nào?
Hiện tại FPT Cloud hỗ trợ 02 Region: HAN (Hà Nội) và SGN (Sài Gòn/HCM). M-FKE cung cấp hỗ trợ ở cả hai region này.

### Cluster M-FKE có thể trải rộng trên nhiều region không?
M-FKE không hỗ trợ cluster chạy trên nhiều region. Bạn có thể tạo cluster ở mỗi region cho cùng một ứng dụng để thực hiện BC&DR (Business Continuity and Disaster Recovery).

### M-FKE có hỗ trợ nhiều cấu hình VM trong một cluster không?
M-FKE hỗ trợ nhiều cấu hình VM trong một cluster bằng cách sử dụng worker group, mỗi worker group có thể có cấu hình khác nhau. Các Worker Node trong cùng một worker group có cùng cấu hình (CPU, RAM, Disk).

### M-FKE hỗ trợ tối đa bao nhiêu Worker Node trong một cluster?
M-FKE mặc định giới hạn tối đa 100 Worker Node mỗi Worker Group và 10 Worker Group mỗi Cluster. Bạn cần liên hệ FPT Cloud để tăng giới hạn Worker Node nếu cần.

### M-FKE có tương thích với các ứng dụng Kubernetes hiện tại của tôi không?
M-FKE sử dụng native Kubernetes, hoàn toàn tương thích với các nền tảng Kubernetes trên các cloud khác như AWS, Azure, GCP, DO, cũng như các Kubernetes cluster bạn cài đặt trên hạ tầng của mình. Điều này giúp dễ dàng di chuyển ứng dụng giữa FPT Cloud, data center của bạn và các cloud khác.

### Làm sao để expose ứng dụng ra ngoài cluster?
Có nhiều cách để expose ứng dụng ra ngoài cluster cho khách hàng sử dụng. Một cách đơn giản là sử dụng [Load Balancer Services](/vi/docs/fpt-container/managed-fpt-kubernetes-engine/)/ theo hướng dẫn.

### Làm sao để giám sát hiệu suất và cấu hình cảnh báo cho cluster?
FPT Cloud cung cấp sản phẩm FMON để giúp bạn giám sát hiệu suất và cấu hình cảnh báo cho Kubernetes cluster. Ngoài ra, FMON cũng cung cấp logging và tracing để tích hợp dễ dàng với FKE.
