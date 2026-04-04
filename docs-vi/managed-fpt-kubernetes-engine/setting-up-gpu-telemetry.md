---
id: "setting-up-gpu-telemetry"
title: "Thiết lập GPU Telemetry"
description: "FPT Cloud sử dụng NVIDIA GPU Telemetry với kube-prometheus-stack để giám sát Kubernetes cluster có GPU."
sidebar_label: "Thiết lập GPU Telemetry"
sidebar_position: "24"
---

# Thiết lập GPU Telemetry

FPT Cloud sử dụng **NVIDIA GPU Telemetry** với **kube-prometheus-stack** làm bộ công cụ giám sát cho Kubernetes cluster có GPU. Bộ công cụ bao gồm collector, Time-series Database để lưu trữ metric và công cụ visualization để trực quan hóa dữ liệu. Bộ công cụ sử dụng các ứng dụng mã nguồn mở phổ biến như Prometheus và Grafana. Prometheus cũng tích hợp Alertmanager để tạo và quản lý cảnh báo. Prometheus được triển khai cùng với **kube-state-metrics** và **node_exporter** để thu thập metric ở cấp độ cluster cho Kubernetes API resource và metric ở cấp độ node như mức sử dụng GPU.

  * Để xem custom metric của GPU, chạy lệnh:

```
kubectl get --raw /apis/custom.metrics.k8s.io/v1beta1 | jq -r . | grep DCGM
```

  * Truy cập **Prometheus** để xem metric DCGM của GPU:

_Để forward service Prometheus, chạy lệnh:_

```
kubectl port-forward service/kube-prometheus-stack-1679-prometheus 9090:63090
```

_Trong đó 9090 là port service Prometheus, 63090 là port local trên client. Prometheus hiện có thể truy cập tại <http://localhost:63090/>_

Trên giao diện Prometheus, điều hướng đến **Metrics Explorer** để xem metric DCGM của GPU:
[![](/img/migrated/60-1-ff845f40.png)](/img/migrated/60-1-ff845f40.png)
[![](/img/migrated/61-1-1d992b1d.png)](/img/migrated/61-1-1d992b1d.png)

  * Truy cập Grafana Dashboard

_Để forward service Grafana, chạy lệnh:_

```
kubectl port-forward service/kube-prometheus-stack-1679050354-grafana 80:63080
```

_Trong đó 80 là port service Grafana, 63080 là port local trên client. Grafana hiện có thể truy cập tại <http://localhost:63080/>_

Tên đăng nhập và mật khẩu mặc định của Grafana:

```
User: admin
Password: prom-operator
```

  * Import Grafana Dashboard cho metric GPU:

Để import Dashboard, điều hướng đến Grafana > **Dashboards** > **Manage** > **Import**.
Để sử dụng GPU Dashboard của FPT Cloud, sao chép [FPT Cloud GPU Dashboard json](https://raw.githubusercontent.com/fci-xplat/fke-config/main/fptcloud-gpu-dashboard.json) dưới dạng text hoặc import file JSON > **Load**.
GPU Dashboard của FPT Cloud:
[![](/img/migrated/62-1-1442fef9.png)](/img/migrated/62-1-1442fef9.png)
