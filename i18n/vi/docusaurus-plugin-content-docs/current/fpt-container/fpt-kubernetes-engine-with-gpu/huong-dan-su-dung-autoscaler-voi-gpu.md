---
id: "huong-dan-su-dung-autoscaler-voi-gpu"
title: "Hướng dẫn sử dụng Autoscaler với GPU"
description: "**· Autoscale mức container:**"
sidebar_label: "Hướng dẫn sử dụng Autoscaler với GPU"
sidebar_position: 6
---

# Hướng dẫn sử dụng Autoscaler với GPU

**· Autoscale mức container:**
Horizontal Pod Autoscaler (viết tắt là HPA) tự động cập nhật tài nguyên workload resource (chẳng hạn như Deployment hoặc StatefulSet), với mục đích tự động thay đổi quy mô workload resource để phù hợp với nhu cầu ứng dụng. Về cơ bản, khi workload của ứng dụng trên Kubernetes tăng lên thì HPA sẽ triển khai nhiều Pod hơn để đáp ứng tài nguyên. Nếu tải giảm và số lượng Pod cao hơn mức tối thiểu đã cấu hình, thì HPA sẽ giảm workload resource (Deployment, StatefulSet hoặc tài nguyên tương tự khác), tức là giảm số lượng Pod lại. HPA cho GPU sử dụng custom metrics của DCGM để theo dõi và tăng/giảm Pod theo workload của ứng dụng sử dụng GPU.
  * Để cấu hình HPA cho ứng dụng sử dụng GPU, tham khảo cấu hình sau:

```
apiVersion: autoscaling/v2beta2 

kind: HorizontalPodAutoscaler 

metadata: 

 name: my-gpu-app 

spec: 

 maxReplicas: 3  # Update this accordingly 

 minReplicas: 1 

 scaleTargetRef: 

   apiVersion: apps/v1beta1 

   kind: Deployment 

   name: my-gpu-app # Add label from Deployment we need to autoscale 

 metrics: 

 - type: Pods  # scale pod based on gpu 

   pods: 

     metric: 

       name: DCGM_FI_PROF_GR_ENGINE_ACTIVE # Add the DCGM metric here accordingly 

     target: 

       type: AverageValue 

       averageValue: 0.8 # Set the threshold value as per the requirement 
```

Tham khảo thêm: tài liệu [Nvidia về DCGM metrics.](https://docs.nvidia.com/datacenter/dcgm/1.6/dcgm-api/group__dcgmFieldIdentifiers.html#group__dcgmFieldIdentifiers_1ga12c2f22beff3cf71f7ecf9ad905b8ca)
  * Kiểm tra HPA đã khởi tạo ứng dụng sử dụng GPU, bằng lệnh sau:

[![](/img/migrated/73-9f2c36c7.png)](/img/migrated/73-9f2c36c7.png)
**· Autoscale mức Node:**
Giống như Cluster Autoscale thông thường, cụm Kubernetes sẽ tự động tăng/giảm worker node trong worker group dựa theo yêu cầu sử dụng GPU: tự động scale thêm các worker mới trong một worker group nếu như ứng dụng chạy trên worker group đó không được đáp ứng đủ tài nguyên (GPU) bởi các worker nodes của pool đó. Khi đó, những pod bị pending do node không đủ tài nguyên sẽ được phục vụ bởi các worker nodes mới sau khi scale lên. Tính năng Cluster Autoscale cũng tự động xóa các nodes không sử dụng đủ lượng utilization (mặc định là 50%) của node đó.
Thao tác cấu hình số lượng nodes worker group được định nghĩa trên FPTCloud Portal như hình sau: 
**Tham khảo thêm** : [FPT Cloud Managed Kubernetes Autoscaler](/vi/docs/fpt-container/managed-fpt-kubernetes-engine/tutorials/modify-k8s-cluster-configuration/cluster-autoscale)
[![](/img/migrated/Picture22-1-1be5f3e3.png)](/img/migrated/Picture22-1-1be5f3e3.png)
