---
id: "best-practice-upgrade-version"
title: "Thực hành tốt nhất khi nâng cấp phiên bản FKE cluster"
description: "Các thực hành tốt nhất và quy trình chi tiết để nâng cấp phiên bản Kubernetes cluster trong D-FKE."
sidebar_label: "Thực hành tốt nhất: nâng cấp phiên bản"
sidebar_position: "26"
draft: true
---

# Thực hành tốt nhất khi nâng cấp phiên bản FKE cluster

Dịch vụ D-FKE hỗ trợ nâng cấp phiên bản Kubernetes cluster từ Portal Console.

## A. Tính năng sản phẩm

- **Cả master và worker node đều được nâng cấp:** Quy trình hoàn toàn tự động; người dùng có thể thực hiện dễ dàng từ portal mà không cần can thiệp trực tiếp vào cluster.
- **Nâng cấp master không gián đoạn:** Hệ thống tự động nâng cấp master lên phiên bản tiếp theo (ví dụ 1.21 → 1.22) mà không có downtime nếu cluster sử dụng chế độ HA (3 masters). Với cluster có một master duy nhất, sẽ có vài phút downtime của master trong đó Kubernetes API không khả dụng, nhưng workload ứng dụng vẫn tiếp tục chạy bình thường.
- **Nâng cấp worker không gián đoạn:** Hệ thống thực hiện rolling update từng worker node theo thứ tự. Mỗi worker được drain pod workload và cordon (tắt lập lịch) cho đến khi hoàn thành cập nhật node.

## B. Chi tiết quy trình nâng cấp

**1. Trước khi nâng cấp**
- Hệ thống chuẩn bị môi trường cho việc nâng cấp cluster.
- Kiểm tra môi trường: trạng thái cluster / trạng thái mạng.

**2. Nâng cấp**
(Nâng cấp các node theo thứ tự: master trước, sau đó worker)
- Cordon node.
- Drain node.
- Kiểm tra node ở trạng thái ready.
- Backup certs và keys cũ; backup configs cũ (master).
- Cập nhật etcd-servers cho apiserver (master).
- Cài đặt phần mềm phiên bản mới trên node: kubelet, calico, container runtime, coredns, nodelocaldns, metrics server, v.v.

**3. Sau khi nâng cấp**
- Cài đặt add-on phiên bản mới trên node: CSI, CCM, Autoscaler.
- Kiểm tra trạng thái nâng cấp.
- Dọn dẹp.

## C. Khuyến nghị khi nâng cấp cluster

- Thực hiện nâng cấp cluster trong thời điểm ít tải như sau giờ làm việc hoặc cuối tuần.
- Trước khi nâng cấp môi trường production, hãy kiểm tra tính tương thích của ứng dụng với phiên bản Kubernetes mới trong môi trường dev/uat trước, đặc biệt là với các API Kubernetes phiên bản mới.
- Nâng cấp phiên bản cluster theo thứ tự (ví dụ 1.21 → 1.22 → 1.23).
- Giữ cluster ở phiên bản được hỗ trợ mới nhất (tham khảo bảng phiên bản EOL).
- Backup cấu hình cluster trước khi nâng cấp: sử dụng công cụ CD hoặc backup manifests/helm charts.
- Triển khai cluster với HA masters (3 masters) để đảm bảo control plane không có downtime.
- Triển khai cluster với 2 worker trở lên để đảm bảo application workload không có downtime.
- Triển khai ứng dụng dưới dạng Workload Controllers (Deployment, Replicaset, DaemonSet, v.v.) với 2 replica trở lên; tránh triển khai pod đơn lẻ.
- Không sử dụng local storage (empty dir, hostpath, v.v.); sử dụng CSI thay thế.
- Triển khai quy tắc Anti-Affinity cho ứng dụng để đảm bảo chúng chạy trên nhiều worker node.
- Đảm bảo firewall cho phép hệ thống FPT kết nối đến cluster trong quá trình nâng cấp (FKE controller: từ 103.160.90.33 đến cluster port tcp 6443, 32085, 2022; FPT Cloud Portal: từ 103.160.90.36, 103.160.90.37, 103.160.90.39 đến Public IP port tcp 6443).
- Thiết kế kích thước tài nguyên ứng dụng để đảm bảo đủ tài nguyên cho rolling update worker node (cân nhắc scale out thêm 1 worker làm buffer trước khi nâng cấp phiên bản cluster).

## D. Bảng EOL của D-FKE

| Phiên bản Kubernetes | Phát hành upstream | FKE GA | FKE kết thúc hỗ trợ tiêu chuẩn |
| --- | --- | --- | --- |
| 1.21 | Tháng 4/2021 | 2021 | Tháng 9/2024 |
| 1.22 | Tháng 8/2021 | 2022 | Tháng 11/2024 |
| 1.23 | Tháng 12/2021 | 2023 | Tháng 2/2025 |
| 1.24 | Tháng 5/2022 | | |
| 1.25 | Tháng 8/2022 | Tháng 10/2023 | Tháng 8/2025 |
| 1.26 | Tháng 12/2022 | Tháng 1/2024 | Tháng 11/2025 |
| 1.27 | Tháng 4/2023 | Tháng 2/2024 | Tháng 2/2026 |
| 1.28 | Tháng 8/2023 | Tháng 3/2024 | Tháng 5/2026 |
| 1.29 | Tháng 1/2024 | | |
