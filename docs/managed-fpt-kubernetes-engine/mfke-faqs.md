---
id: "mfke-faqs"
title: "よくある質問"
description: "Managed FPT Kubernetes Engine（M-FKE）に関するよくある質問と回答をまとめています。"
sidebar_label: "よくある質問"
sidebar_position: "37"
---

# Câu hỏi thường gặp (FAQs)

**1. M-FKE hỗ trợ ở các regions nào?**
Hiện tại FPTCloud đang hỗ trợ 04 Regions bao gồm:
  * HAN (Hanoi)
  * SGN (Saigon/HCM)
  * HAN2 (HoaLac)
  * JPN01 (Japan)

M-FKE hỗ trợ tương ứng ở cả 04 Regions trên.
**2. Một cluster M-FKE có thể trải trên nhiều regions không?**
M-FKE không hỗ trợ một cluster chạy trên nhiều regions. Bạn có thể tạo cluster trên mỗi region cho cùng một ứng dụng để thực hiện BC&DR.
**3. M-FKE có hỗ trợ nhiều cấu hình VM trong một cluster không?**
M-FKE hỗ trợ nhiều cầu hình VM trong một cluster bằng cách sử dụng worker groups, mỗi worker groups có thể có cấu hình khác nhau. Các Worker Nodes trong cùng một worker group có cấu hình giống nhau (CPU, RAM, DISK).
**4. M-FKE hỗ trợ bao nhiêu Worker Nodes trong một cluster?**
M-FKE mặc định giới hạn tối đa 100 Worker Nodes / Woker Group & 100 Worker Groups / Cluster. Bạn cần liên hệ với FPT Cloud để tăng giới hạn Worker Nodes nếu có nhu cầu.
**5. M-FKE có tương thích với các ứng dụng Kubernetes hiện có của tôi không?**
M-FKE sử dụng native Kubernetes nên hoàn toàn tương thích với các nên tảng Kubernetes trên các Cloud khác như AWS, Azure, GCP, DO… cũng như cluster Kubernetes được bạn cài đặt trên hạ tầng của bạn. Điều này giúp bạn dễ dàng di chuyển ứng dụng giữa FPT Cloud và DC của bạn cũng như các Cloud khác.
**6. Làm thế nào để tôi có thể public ứng dụng ra bên ngoài cluster?**
**7. Làm thế nào để tôi có thể giám sát hiệu năng và cấu hình cảnh báo cho cluster?**
FPTCloud cung cấp sản phẩm FMON giúp bạn giám sát hiệu năng và cấu hình cảnh báo cho Kubernetes cluster. Ngoài ra, FMON cung cấp logging & tracing dễ dàng tích hợp với FKE.
**8. Worker group base là gì? Có xóa được worker group base không?** M-FKE cluster luôn luôn có một worker group base chứa các thành phần hệ thống nằm trong namespace kube-system như là coredns, cni-controller, metrics-server. Worker group base không được phép xóa khỏi cluster.
**9. Làm thế nào để thay đổi cấu hình flavor, disk của các worker group hiện tại?**
M-FKE không hỗ trợ thay đổi trực tiếp cấu hình flavor, disk size của các worker group hiện tại. Để thay đổi cấu hình flavor, disk theo mong muốn, người dùng tạo worker group với cấu hình tương ứng và chuyển ứng dụng từ worker group cũ sang worker group mới, cuối cùng xóa worker group cũ không dùng đến.
**10. Tài nguyên cpu, memory của các node trong worker group sắp quả tải, tại sao cluster lại không scale thêm node mới?**
Cluster Autoscale (CA) không scale in/out dựa vào tài nguyên thực dùng của các node mà dựa vào lượng tài nguyên request của các pod (bao gồm CPU và Memory) đặt trên node. Cluster Autoscaler thực hiện scale thêm node mới trong trường hợp có pod pending do không có node nào đủ tài nguyên request đáp ứng pod đó. Khi đó CA scale thêm node mới và pod pending trước đó sẽ được đặt trên node mới này.
**11. Tài nguyên cpu, memory của các node trong worker group rất ít, tại sao cluster lại không scale bớt các worker nodes?**
Cluster Autoscale (CA) không scale in/out dựa vào tài nguyên thực dùng của các node mà dựa vào lượng tài nguyên request của các pod (bao gồm CPU và Memory) đặt trên node. Cluster Autoscaler thực hiện scale bớt các node không đáp ứng đủ lượng utilization 50% (tài nguyên request / tài nguyên allocate) trong vòng 30 phút.
**12. Quá trình upgrade cluster có hoàn toàn tự động và đảm bảo thành công 100% hay không? Liệu có thể gây downtime dịch vụ không?**
M-FKE upgrade cluster theo cơ chế rollout worker node. Các worker nodes version k8s mới hơn sẽ được tạo và join vào cluster. Sau đó các pod ở worker nodes version k8s cũ sẽ được chuyển sang các worker nodes version k8s mới. Hầu hết quá trình upgrade cluster đều tự động và thành công. Tuy nhiên người dùng cần để ý trường hợp M-FKE không thể tự động evict các pod ở worker nodes version k8s cũ ví dụ như khi pod vi phạm PDB. Quá trình upgrade cluster có thể gây downtime dịch vụ từ khi các pod trên worker nodes k8s version cũ bị xóa cho đến khi các pod mới được triển khai lên các worker nodes k8s version mới. Quá trình đợi pod cũ bị evict và pod mới running hoàn toàn có thể kéo dài trong trường hợp pod sử dụng Persistent Volume. Vì thế người dùng cần chủ động theo dõi quá trình upgrade để đảm bảo tính ổn định của hệ thống.
**13. Có đánh taints cho worker group base được không?**
Worker group base chỉ hỗ trợ đánh label, không hỗ trợ đánh taints. Vì khi đánh taints cho worker group base trong khi các worker nodes trong group base không có tolerations để triển khai các pod của hệ thống lên trên worker base đó dẫn đến hoạt động của cluster sẽ gặp vấn đề. MFKE khuyến nghị người quản trị nên triển khai ứng dụng lên các worker group khác để tránh ảnh hưởng hoạt động của hệ thống.
