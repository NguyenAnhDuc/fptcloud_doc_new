---
id: "huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric"
title: "Hướng dẫn cấu hình Auto Scale sử dụng GPU Custom Metric"
sidebar_label: "Hướng dẫn cấu hình Auto Scale sử dụng GPU Custom Metric"
sidebar_position: "11"
---

# Hướng dẫn cấu hình Auto Scale sử dụng GPU Custom Metric

Kubernetes hỗ trợ tự động auto scale dựa trên the custom metrics như GPU metrics bằng theh kết hợp with Prometheus. Bài viết this giới thiệu theh to cấu hình Auto Scale for the ứng dụng sử dụng GPU chạy trên nền tảng FPT Kubernetes Engine.
[![](/img/migrated/Picture5-1-b79630d5.png)](/img/migrated/Picture5-1-b79630d5.png)
## Requirements:
  * Cụm Kubernetes có gắn GPU
  * Ứng dụng sử dụng GPU is ở status running

## Các bước cấu hình:
### Step 1: Cài đặt the gói kube-prometheus-stack and prometheus-adapter
  * Sử dụng service FPT App Catalog 
    * Sử dụng service FPT App Catalog, tạo App Catalog sau that chọn mục Connect Cluster to connect to Cluster GPU.
    * Tại Menu App Catalogs, chọn Repositories là **_fptcloud-catalogs_** , phần search bấm **_prometheus_** sau that chọn install gói **kube-prometheus-stack,** điền Release name and Namespace to triển khai gói.

[![](/img/migrated/anh2-8f185491.png)](/img/migrated/anh2-8f185491.png)
  * Sử dụng helm chart:

```
Copyhelm repo add xplat-fke https://registry.fke.fptcloud.com/chartrepo/xplat-fke && helm repo update
helm install --wait --generate-name \
    -n prometheus --create-namespace \
    xplat-fke/kube-prometheus-stack
prometheus_service=$(kubectl get svc -n prometheus -lapp=kube-prometheus-stack-prometheus -ojsonpath='{range .items[*]}{.metadata.name}{"\n"}{end}')
helm install --wait --generate-name \
    -n prometheus --create-namespace \
    xplat-fke/prometheus-adapter \
    --set prometheus.url=http://${prometheus_service}.prometheus.svc.cluster.local
```

  * Sau when deploy xong gói kube-prometheus-stack, ta tiếp tục deploy prometheus- adapter, tuy nhiên ta cần thay đổi values of gói to trỏ đúng prometheus service of kube-prometheus-stack. Ví dụ with namespace of kube-prometheus-stack ta đặt là prometheus thì values ta cần điền ando là:

```
Copy<>.<>.svc.cluster.local
prometheus-kube-prometheus-prometheus.prometheus.svc.cluster.local
```

[![](/img/migrated/anh3-5de9f5ca.png)](/img/migrated/anh3-5de9f5ca.png)
  * Sau that ta kiểm tra status of hai gói trên

[![](/img/migrated/anh4-28b01e4f.png)](/img/migrated/anh4-28b01e4f.png)
### Step 2: Configure Horizontal Pod Autoscaler for ứng dụng GPU
Horizontal Pod Autoscaler (HPA) tự động scale the Pod to đáp ứng điều kiện is đưa ra in cấu hình. Ở phần trên when cấu hình xong prometheus-addapter will export ra the Custom Metric of DCGM to theo dõi workload of GPU.
Ví dụ a file manifest HPA

```
CopyapiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
 name: my-gpu-app
spec:
 maxReplicas: 3  # Update this accordingly
 minReplicas: 1
 scaleTargetRef:
   apiVersion: apps/v1beta1
   kind: Deployment
   name: my-gpu-app # Add label from Deployment we need to autoscale
 metrics:
 - type: Pods  # scale pod based on gpu
   pods:
     metric:
       name: DCGM_FI_PROF_GR_ENGINE_ACTIVE # Add the DCGM metric here accordingly
     target:
       type: AverageValue
       averageValue: 0.8
```

Tham khảo thêm tài liệu of NVIDA về the DCGM metric [link](https://docs.nvidia.com/datacenter/dcgm/1.6/dcgm-api/group__dcgmFieldIdentifiers.html)
Sau that kiểm tra HPA vừa khởi tạo:

```
Copykubectl get hpa -A
```
