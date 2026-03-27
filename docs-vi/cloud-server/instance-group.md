---
id: "instance-group"
title: "Quản lý Instance Group với chính sách Affinity & Anti-Affinity"
description: "* Affinity và anti-affinity là hai khái niệm quan trọng liên quan đến việc đặt các máy ảo trên các máy chủ. Hiện tại h"
sidebar_label: "Quản lý Instance Group với chính sách Affinity & Anti-Affinity"
sidebar_position: 76
---

# Instance Group

* Affinity và anti-affinity là hai khái niệm quan trọng liên quan đến việc đặt các máy ảo trên các máy chủ. Hiện tại hệ thống chỉ hỗ trợ Soft Affinity/ Anti Affinity instance group.
    * **Soft Affinity** : Chỉ định tất cả máy ảo trong affinity instance group tới cùng 1 host. Thường được dùng để tăng hiệu suất hệ thống tổng thể.
    * **Soft Anti-Affinity** : Chỉ định máy ảo trong anti - affinity instance group tới các host khác nhau. Nếu không còn host nào có thể chứa nữa, instance sẽ được chỉ định vị trí ngẫu nhiên. 
  * Để thực hiện điều này, người dùng có thể tạo các nhóm máy chủ (instance groups) với chính sách affinity hoặc anti-affinity. Khi người dùng khởi tạo một máy ảo, có thể truyền thông tin về nhóm máy chủ như một gợi ý để thực hiện việc đặt máy ảo theo chính sách mong muốn.