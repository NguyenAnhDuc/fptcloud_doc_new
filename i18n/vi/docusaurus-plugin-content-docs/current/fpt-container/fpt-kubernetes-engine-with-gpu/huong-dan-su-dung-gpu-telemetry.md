---
id: "huong-dan-su-dung-gpu-telemetry"
title: "Hướng dẫn sử dụng GPU Telemetry"
description: "FPT Cloud sử dụng Nvidia GPU Telemetry tích hợp với kube-prometheus-stack là bộ công cụ theo dõi và giám sát "
sidebar_label: "Hướng dẫn sử dụng GPU Telemetry"
sidebar_position: 5
---

# Hướng dẫn sử dụng GPU Telemetry

FPT Cloud sử dụng Nvidia GPU Telemetry tích hợp với kube-prometheus-stack là bộ công cụ theo dõi và giám sát cho hệ thống sử dụng GPU trên Kubernetes. Bộ công cụ giám sát bao gồm collector, time-series database lưu trữ chỉ số (metrics) và visualization (giao diện trực quan hóa). Bộ công cụ sử dụng các ứng dụng mã nguồn mở phổ biến là Prometheus và Grafana. Prometheus cũng bao gồm Alertmanager để tạo và quản lý các cảnh báo. Prometheus được triển khai cùng với kube-state-metrics và node_exporter để hiển thị các chỉ số (metrics) mức cluster cho các đối tượng API Kubernetes và các chỉ số mức node, ví dụ như mức sử dụng GPU.
  * Kiểm tra custom metrics của GPU sử dụng câu lệnh sau:

```
Copykubectl get --raw /apis/custom.metrics.k8s.io/v1beta1 | jq -r . | grep DCGM 
```

  * Truy cập Prometheus kiểm tra metrics của GPU DCGM

```
#Forward service Prometheus để truy cập qua Web browser 

kubectl port-forward service/kube-prometheus-stack-1679-prometheus 9090:63090 

*với 9090 là port của pod prometheus, 63090 là Local Port máy tính của bạn (client) 

#Truy cập Prometheus trên Web browser bằng đường dẫn sau: 

http://localhost:63090/ 
```

  * Trên giao diện Prometheus thao tác như hình dưới đây để kiểm tra metrics GPU DCGM [![](/img/migrated/t3-7557c0f4.png)](/img/migrated/t3-7557c0f4.png) [![](/img/migrated/t4-810a513e.png)](/img/migrated/t4-810a513e.png)
  * Truy cập Grafana Dashboard

```
Copy#Forward service Grafana để truy cập qua Web browser 

kubectl port-forward service/kube-prometheus-stack-1679050354-grafana 80:63080 

*với 80 là port của pod Grafana, 63080 là Local Port máy tính của bạn (client) 

#Truy cập Prometheus trên Web browser bằng đường dẫn sau: 

http://localhost:63080/ 
```

Default user và mật khẩu để đăng nhập vào Grafana là:
**User** : **admin**
**Password: prom-operator**
  * Import Grafana Dashboard cho GPU

Để import Dashboard, truy cập giao diện Grafana, mục Dashboards > Manage > Import. Nếu sử dụng Dashboard của FPT Cloud, nhập nội dung FPT Cloud GPU Dashboard json > Load.
Dashboard GPU của Nvidia FPT Cloud:
[![](/img/migrated/image12-7a17a1d0.png)](/img/migrated/image12-7a17a1d0.png)
