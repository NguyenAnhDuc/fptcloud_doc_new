---
id: "best-practice-upgrade-fke-cluster-version"
title: "Dịch vụ D-FKE hỗ trợ upgrade version cụm Kubernetes trên Portal Console."
description: "Dịch vụ D-FKE hỗ trợ upgrade version cụm Kubernetes trên Portal Console."
sidebar_label: "Dịch vụ D-FKE hỗ trợ upgrade version cụm Kubernetes trên Portal Console."
sidebar_position: 26
---

# Hướng dẫn upgrade FKE cluster version

Dịch vụ D-FKE hỗ trợ upgrade version cụm Kubernetes trên Portal Console. 
**A. Tính năng sản phẩm:**
  * Cả master và worker node đều được nâng cấp version: quá trình này hoàn toàn tự động, người dùng dễ dàng thao tác trên portal, không cần tác động vào cluster. 
  * Upgrade master với zero downtime: hệ thống tự động upgrade master lên phiên bản kế tiếp VD: 1.21 à 1.22 không có downtime nếu cluster sử dụng mode HA ( 3 master). Với các cluster có 1 master, sẽ mất một vài phút downtime master, trong thời gian đó không thể tác động vào cluster (Kubernetes API) nhưng workload của ứng dụng vẫn hoạt động bình thường. 
  * Upgrade worker với zero downtime: hệ thống tự động Rolling update version từng worker node. Lần lượt các worker sẽ drain hết pod workload và cordon (disable schedule) pods gán vào node cho tới khi node nó update xong. 

**B. Chi tiết quá trình upgrade của hệ thống:**
**1. Pre-upgrade**
  * Hệ thống setup môi trường để cluster upgrade 
  * Kiểm tra môi trường: cluster status/network status 

**2. Upgrade**
(Upgrade lần lượt các node, master trước, worker sau) 
  * Cordon node 
  * Drain node 
  * Check node is in ready state 
  * Backup old certs and keys, Backup old confs (master) 
  * Update etcd-servers for apiserver (master) 
  * Install new version software on node: kubelet, calico, container runtime, coredns, nodelocaldns, metrics server .. 

**3. Post-upgrade**
  * Install new version Addon on node: CSI, CCM, Autoscaler 
  * Check upgrade state 
  * Cleanup 

**C. Recommend cho cluster khi sử dụng upgrade:**
  * Quá trình upgrade cluster nên thực hiện trong thời điểm hệ thống chịu tải thấp, nên thực hiện sau giờ hành chính hoặc cuối tuần. 
  * Trước khi upgrade môi trường prod nên kiểm thử các ứng dụng có tương thích với K8S version mới không ở môi trường dev/uat trước, đặc biệt là các API K8S version mới. 
  * Nâng cấp version cluster theo từng phiên bản kế tiếp, ví dụ: 1.21 à 1.22 à 1.23 
  * Đảm bảo cluster luôn sử dụng phiên bản mới nhất (tham khảo bảng EOL version) 
  * Backup config của cluster trước khi upgrade: sử dụng các tool CD hoặc backup manifest/helm chart 
  * Triển khai cluster sử dụng HA master (03 master) để đảm bảo không downtime control plane. 
  * Triển khai cluster sử dụng HA worker từ 02 worker trở lên để đảm bảo không downtime workload ứng dụng. 
  * Triển khai các ứng dụng dưới dạng Workload Controller như Deployment, Replicaset, DaemonSet, .. có replica từ 2 trở lên và không nên triển khai các Pod đơn lẻ. 
  * Không nên triển khai ứng dụng sử dụng local storage (empty dir, hostpath ..) nên sử dụng CSI 
  * Triển khai Anti-Affinity rule cho các ứng dụng để đảm bảo ứng dụng chạy trên nhiều worker nodes 
  * Đảm bảo Firewall mở port để hệ thống của FPT kết nối đến cluster trong quá trình upgrade (FKE controller: từ 103.160.90.33 đến <> port tcp 6443, 32085, 2022 

  * Thiết kế sizing tài nguyên cho ứng dụng đảm bảo có đủ tài nguyên để để Rolling update worker node (có thể scale thêm 01 worker làm buffer trước khi upgrade version cluster). 

**D. D-FKE EOL Chart**  
| Kubernetes version  | Upstream release  | FKE GA  | FKE End of standard support  |  
| --- | --- | --- | --- |  
| 1.21  | Apr,2021  | 2021  | Sep, 2024  |  
| 1.22  | Aug, 2021  | 2022  | Nov, 2024  |  
| 1.23  | Dec, 2021  | 2023  | Feb, 2025  |  
| 1.24  | May, 2022  |   |   |  
| 1.25  | Aug, 2022  | Oct, 2023  | Aug, 2025  |  
| 1.26  | Dec, 2022  | Jan, 2024  | Nov, 2025  |  
| 1.27  | Apr, 2023  | Feb, 2024  | Feb, 2026  |  
| 1.28  | Aug, 2023  | Mar, 2024  | May, 2026  |  
| 1.29  | Jan, 2024  |   |   |
