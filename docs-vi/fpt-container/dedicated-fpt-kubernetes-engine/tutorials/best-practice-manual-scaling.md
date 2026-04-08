---
id: "best-practice-manual-scaling"
title: Hướng dẫn manual scaling
description: "✨ D-FKE hỗ trợ manual scale in/scale out worker nodes, cho phép người dùng tăng/giảm số lượng worker theo nhu cầu thủ cô"
sidebar_label: Hướng dẫn manual scaling
sidebar_position: 5
---

# Hướng dẫn manual scaling

✨ D-FKE hỗ trợ manual scale in/scale out worker nodes, cho phép người dùng tăng/giảm số lượng worker theo nhu cầu thủ công. 
✨ Hướng dẫn manual scale in/scale out trên portal console: tham khảo user guide [tại đây](/docs/vi/fpt-container/dedicated-fpt-kubernetes-engine/)/
➤ **Chi tiết quá trình manual scale in của hệ thống:**
1️⃣ **Pre-scale**
  * Hệ thống setup môi trường để cluster scale 
  * Kiểm tra môi trường: cluster status/network status 

2️⃣ **Scale in**
  * Cordon tất cả các node (Shedule disable – Ngăn không cho các pod ứng dụng mới vào node) 
  * Drain lần lượt từng node ( Xóa pod ứng dụng ra khỏi node hiện tại, move pod sang node khác, hệ thống K8S sẽ không xóa được các node có local disk, single pod, disruption budget, .. tham khảo [tại đây](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-types-of-pods-can-prevent-ca-from-removing-a-node)) 
  * Sau khi tất cả các node được drain, xóa từng node khỏi cluster K8S. 

3️⃣ **Post-scale**
  * Sau khi tất các node được xóa khỏi cluster, hệ thống thu hồi và xóa các VM. 
  * Clean up. 

➤ **Chi tiết quá trình manual scale out của hệ thống:**
1️⃣ **Pre-scale**
  * Hệ thống setup môi trường để cluster scale 
  * Kiểm tra môi trường: cluster status/network status 
  * Hệ thống khởi tạo VM tương ứng với các node sẽ thêm vào cluster K8S. 
  * Setup môi trường để chạy Kubernetes trên từng VM. 

2️⃣ **Scale out**
  * Thêm từng lần lượt node vào cluster 
  * Cho phép pod ứng dụng schedule vào node mới join 

3️⃣ **Post-scale**
  * Clean up. 

➤ **Recommend khi sử dụng maunal scale.**
1️⃣ **Với thao tác scale in**
  * Nếu scale in nhiều node cần có khảo sát và sizing đảm bảo số lượng node còn lại đáp ứng đủ tài nguyên cho ứng dụng. Nên thực hiện trong thời điểm hệ thống chịu tải thấp, sau giờ hành chính hoặc cuối tuần.
  * Nếu xác định được danh sách các node cần xóa, cordon trước các node để tránh thêm workload vào node sẽ xóa. ( Dựa vào monitoring lượng tài nguyên trên node ) 
  * Nếu còn workload lớn trên node, có thể drain trước với node sẽ xóa để quá trình scale in nhanh hơn, tránh tiến trình bị timeout. 
  * Chia nhỏ số node mỗi lần manual scale in, mỗi lần manual scale in nên thực hiện với =< 10 node. 

2️⃣ **Với thao tác scale out**
  * Chia nhỏ số node mỗi lần manual scale out, mỗi lần manual scale out nên thực hiện với =< 10 node.

3️⃣ **Khi tiến trình bị timeout**
  * Có thể nhấn action retry để thực hiện quá trình lại một lần nữa. Chi tiết có hướng dẫn [tại đây](/docs/vi/fpt-container/dedicated-fpt-kubernetes-engine/)/
