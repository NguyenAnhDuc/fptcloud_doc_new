---
id: "deployment-model"
title: "Mô hình triển khai"
description: "Mục này mô tả các mô hình triển khai database được hỗ trợ trong dịch vụ FPT Database Engine, giúp người dùng lựa chọn ki"
sidebar_label: "Mô hình triển khai"
sidebar_position: 6
---

# Deployment Model

Mục này mô tả các mô hình triển khai database được hỗ trợ trong dịch vụ FPT Database Engine, giúp người dùng lựa chọn kiến trúc phù hợp với yêu cầu về tính sẵn sàng, hiệu năng và chi phí.
### Mô hình Single Node
Mô hình Single Node triển khai database trên một node duy nhất, bao gồm đầy đủ tài nguyên compute (vCPU, RAM) và storage. Mô hình này không hỗ trợ failover tự động và phụ thuộc vào trạng thái hoạt động của node.
Mô hình Single Node phù hợp với:
  * Môi trường Development / Testing.
  * Ứng dụng có tải thấp hoặc trung bình.
  * Trường hợp ưu tiên đơn giản hóa kiến trúc và tối ưu chi phí.

Đặc điểm chính:
  * Một database instance duy nhất.
  * Không có node dự phòng.
  * Backup được thực hiện định kỳ theo cấu hình dịch vụ.
  * Thời gian gián đoạn có thể xảy ra khi node gặp sự cố hoặc trong quá trình bảo trì.

### Mô hình High Availability (HA / Cluster)
Mô hình High Availability (HA / Cluster) triển khai database trên nhiều node, bao gồm primary node và một hoặc nhiều standby/replica nodes, nhằm đảm bảo tính sẵn sàng cao và khả năng chịu lỗi.
Trong mô hình này, database được giám sát liên tục. Khi primary node gặp sự cố, hệ thống sẽ tự động thực hiện failover sang node dự phòng, giúp giảm thiểu downtime và đảm bảo tính liên tục của dịch vụ.
Đặc điểm chính:
  * Triển khai nhiều node trong cùng hoặc khác Availability Zone.
  * Hỗ trợ automatic failover.
  * Có thể kết hợp với DB Proxy để định tuyến kết nối.
  * Phù hợp cho môi trường Production và hệ thống quan trọng.

Lợi ích:
  * Giảm thiểu thời gian gián đoạn dịch vụ.
  * Tăng độ tin cậy và khả năng phục hồi.
  * Hỗ trợ mở rộng đọc thông qua replica (nếu được cấu hình).
