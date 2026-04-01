---
id: "huong-dan-cau-hinh-auto-scale-su-dung-keda-va-prometheus"
title: "Hướng dẫn cấu hình Auto Scale sử dụng KEDA và Prometheus"
sidebar_label: "Hướng dẫn cấu hình Auto Scale sử dụng KEDA và Prometheus"
sidebar_position: "12"
---

# Hướng dẫn cấu hình Auto Scale sử dụng KEDA and Prometheus

[![](/img/migrated/Picture3-2-a84e2a0e.png)](/img/migrated/Picture3-2-a84e2a0e.png)
## Requirements
  * Cụm kubernetes có gắn GPU
  * Ứng dụng GPU is ở status running
  * Đã cài đặt gói kube-prometheus-stack and prometheus-adapter ở service FPT App Catalog như docs
[Hướng dẫn cấu hình Auto Scale for FPT Kubernetes Engine GPU sử dụng GPU Custom Metric](https://www.notion.so/H-ng-d-n-c-u-h-nh-Auto-Scale-for-FPT-Kubernetes-Engine-GPU-s-d-ng-GPU-Custom-Metric-d7a7d2d5a4bc495d8468b7ae169fbf1e?pvs=21)

## Các bước cấu hình:
### Step 1: Cài đặt KEDA
  * Cách 1: Sử dụng FPT App Catalog
Chọn service FPT Cloud App Catalog sau that tìm kiếm KEDA in Repository fptcloud-catalogs
  * Cách 2: Sử dụng helm chart

```
Copyhelm repo add kedacore https://kedacore.github.io/charts
helm repo update
helm install keda kedacore/keda --namespace keda --create-namespace
```

  * Check xem the pod of KEDA has been hoạt động bình thường hay chưa

```
Copykubectl -n keda get pod
```

```
CopyNAME                                                   READY   STATUS    RESTARTS   AGE
pod/keda-admission-webhooks-54764ff7d5-l4tks           1/1     Running   0          3d
pod/keda-operator-567cb596fd-wx4t8                     1/1     Running   0          2d23h
pod/keda-operator-metrics-apiserver-6475bf5fff-8x8bw   1/1     Running   0          2d14h

NAME                                      TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)            AGE
service/keda-admission-webhooks           ClusterIP   100.71.2.54              443/TCP            3d2h
service/keda-operator                     ClusterIP   100.66.228.223           9666/TCP           3d2h
service/keda-operator-metrics-apiserver   ClusterIP   100.71.162.181           443/TCP,8080/TCP   3d2h

NAME                                              READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/keda-admission-webhooks           1/1     1            1           3d2h
deployment.apps/keda-operator                     1/1     1            1           3d2h
deployment.apps/keda-operator-metrics-apiserver   1/1     1            1           3d2h

NAME                                                         DESIRED   CURRENT   READY   AGE
replicaset.apps/keda-admission-webhooks-54764ff7d5           1         1         1       3d2h
replicaset.apps/keda-operator-567cb596fd                     1         1         1       3d2h
replicaset.apps/keda-operator-metrics-apiserver-6475bf5fff   1         1         1       3d2h
```

Step 2: Check prometheus has been có the metric GPU hay chưa

```
Copykubectl get --raw /apis/custom.metrics.k8s.io/v1beta1 | jq -r . | grep DCGM
```

```
Copy"name": "namespaces/DCGM_FI_DEV_POWER_USAGE",
"name": "namespaces/DCGM_FI_DEV_FB_USED",
"name": "namespaces/DCGM_FI_DEV_PCIE_REPLAY_COUNTER",
"name": "pods/DCGM_FI_DEV_XID_ERRORS",
"name": "namespaces/DCGM_FI_PROF_GR_ENGINE_ACTIVE",
"name": "namespaces/DCGM_FI_DEV_TOTAL_ENERGY_CONSUMPTION",
"name": "pods/DCGM_FI_PROF_DRAM_ACTIVE",
"name": "jobs.batch/DCGM_FI_DEV_POWER_USAGE",
"name": "jobs.batch/DCGM_FI_DEV_SM_CLOCK",
"name": "namespaces/DCGM_FI_DEV_NVLINK_BANDWIDTH_TOTAL",
"name": "pods/DCGM_FI_DEV_POWER_USAGE",
"name": "jobs.batch/DCGM_FI_DEV_MEM_CLOCK",
"name": "jobs.batch/DCGM_FI_DEV_FB_USED",
"name": "namespaces/DCGM_FI_DEV_FB_FREE",
"name": "jobs.batch/DCGM_FI_PROF_GR_ENGINE_ACTIVE",
"name": "pods/DCGM_FI_DEV_MEMORY_TEMP",
"name": "pods/DCGM_FI_DEV_FB_FREE",
"name": "pods/DCGM_FI_DEV_MEM_CLOCK",
"name": "pods/DCGM_FI_PROF_GR_ENGINE_ACTIVE",
"name": "pods/DCGM_FI_DEV_NVLINK_BANDWIDTH_TOTAL",
"name": "pods/DCGM_FI_PROF_PIPE_TENSOR_ACTIVE",
"name": "jobs.batch/DCGM_FI_DEV_MEMORY_TEMP",
"name": "namespaces/DCGM_FI_DEV_MEM_CLOCK",
"name": "jobs.batch/DCGM_FI_DEV_XID_ERRORS",
"name": "namespaces/DCGM_FI_DEV_VGPU_LICENSE_STATUS",
"name": "jobs.batch/DCGM_FI_DEV_VGPU_LICENSE_STATUS",
"name": "pods/DCGM_FI_DEV_GPU_TEMP",
"name": "jobs.batch/DCGM_FI_PROF_PIPE_TENSOR_ACTIVE",
"name": "pods/DCGM_FI_DEV_PCIE_REPLAY_COUNTER",
"name": "pods/DCGM_FI_DEV_TOTAL_ENERGY_CONSUMPTION",
"name": "jobs.batch/DCGM_FI_DEV_TOTAL_ENERGY_CONSUMPTION",
"name": "pods/DCGM_FI_DEV_FB_USED",
"name": "pods/DCGM_FI_DEV_VGPU_LICENSE_STATUS",
"name": "namespaces/DCGM_FI_DEV_MEMORY_TEMP",
"name": "jobs.batch/DCGM_FI_DEV_NVLINK_BANDWIDTH_TOTAL",
"name": "namespaces/DCGM_FI_DEV_SM_CLOCK",
"name": "namespaces/DCGM_FI_PROF_PIPE_TENSOR_ACTIVE",
"name": "namespaces/DCGM_FI_DEV_GPU_TEMP",
"name": "jobs.batch/DCGM_FI_DEV_GPU_TEMP",
"name": "namespaces/DCGM_FI_PROF_DRAM_ACTIVE",
"name": "namespaces/DCGM_FI_DEV_XID_ERRORS",
"name": "jobs.batch/DCGM_FI_DEV_FB_FREE",
"name": "pods/DCGM_FI_DEV_SM_CLOCK",
"name": "jobs.batch/DCGM_FI_DEV_PCIE_REPLAY_COUNTER",
"name": "jobs.batch/DCGM_FI_PROF_DRAM_ACTIVE",
```

### Step 3: Create ScaledObject to chỉ định autoscale for Ứng dụng
  * Manifest

```
CopyapiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: scaled-object
spec:
  scaleTargetRef:
    name: gpu-test
  triggers:
    - type: prometheus
      metadata:
        serverAddress: http://prometheus-kube-prometheus-prometheus.prometheus.svc.cluster.local:9090
        metricName: engine_active
        query: sum(DCGM_FI_PROF_GR_ENGINE_ACTIVE{modelName="NVIDIA A30", container="gpu-test"}) / count(DCGM_FI_PROF_GR_ENGINE_ACTIVE{modelName="NVIDIA A30", container="gpu-test"})
        threshold: '0.8'
```

  * _name_ : Tên Deployment GPU ở ví dụ là `gpu-test`
  * _serverAddress:_ Endpoint of Prometheus server ở ví dụ là `http://prometheus-kube-prometheus-prometheus.prometheus.svc.cluster.local:9090`
  * _query_ : Câu lệnh PromQL to tìm ra giá trị dựa ando that tiến hành autoscale, above ví dụ là tìm the giá trị trung bình of biến `DCGM_FI_PROF_GR_ENGINE_ACTIVE`
  * _threshold_ : giá trị đạt ngưỡng to bắt đầu active autoscale, ở ví dụ là `0.8`

Như vậy như ví dụ trên, mỗi when có giá trị trung bình of`DCGM_FI_PROF_GR_ENGINE_ACTIVE` lớn hơn `0.8` thì ScaledObject will thực hiện scale the pod of Deployment name `gpu-test`.
Sau when tạo ScaledObject, deployment will tự động scale về 0, như vậy là has been cấu hình successfully.
