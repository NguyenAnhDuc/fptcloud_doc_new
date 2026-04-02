---
id: "service-load-balancer-managed-gpu-cluster"
title: "Service Load Balancer Managed Gpu Cluster"
description: "Sản phẩm Managed GPU Cluster được phát triển từ Kubernetes Native và tích hợp thêm thêm các thành phần cloud provider và"
sidebar_label: "Service Load Balancer Managed..."
sidebar_position: 13
---

# Service Load Balancer Managed Gpu Cluster

Sản phẩm Managed GPU Cluster được phát triển từ Kubernetes Native và tích hợp thêm thêm các thành phần cloud provider vào Kubernetes trong đó có thành phần FPT Cloud Controller Manager. Thành phần này nhằm mục đích quản lý các worker nodes trong cluster và các service dạng Load Balancer. Người dùng có thể có nhiều cách để expose một ứng dụng của mình ra bên ngoài internet để khách hàng của người dùng đó có thể truy cập vào ứng dụng, dịch vụ. Các cách đó có thể bao gồm việc tạo ingress cho service, hoặc tạo service dạng node port và gắn floating cho worker node, hoặc có thể sử dụng service dạng Load Balancer. 
FPTCloud hỗ trợ người dùng tạo service dạng load balancer với các option đi kèm annotation trong cấu hình của service:   
|   |   |   |   |  
| --- | --- | --- | --- |  
| **Key**  | **Value**  | **Default**  | **Mục đích**  |  
| service.beta.kubernetes.io/fpt-load-balancer-internal  | "true"/"false"  | "false"  | Nếu không muốn expose service ra ngoài internet, cấu hình value là "true"  |  
| loadbalancer.fptcloud.com/keep-floatingip   | "true"/"false"  | "false"  | Nếu muốn giữ floating IP của service LoadBalancer ở lại trong VPC sau khi xóa service đó, cấu hình value là "true"  |  
| loadbalancer.fptcloud.com/proxy-protocol  | "true"/"false"  | "false"  | Nếu muốn LoadBalancer sử dụng protocol là PROXY, hãy cấu hình value là "true".   
Chú ý: Proxy protocol chỉ sử dụng với LoadBalancer layer4  |  
| loadbalancer.fptcloud.com/enable-health-monitor  | "true"/"false"  | "true"  | Muốn disable health monitor cho LoadBalancer Pool, cấu hình value là "false"  |  
| service.beta.kubernetes.io/fpt-load-balancer-type  | LBv1 bao gồm:  
basic/ advanced/ standard/ premium  
LBv2 bao gồm:   
Basic-1/ Basic-2/ Standard/ Advanced/Premium  | Lbv1: "basic"   
LBv2: "Basic-1"  | Cấu hình flavor của LoadBalancer để đáp ứng tải tương ứng của ứng dụng đằng sau backend của LoadBalancer pool  |  
| loadbalancer.fptcloud.com/enable-ingress-hostname  | "true"/"false"  | "false"  | Muốn enable ingress hostname cho service type LoadBalancer, cấu hình value là "true"  |  
| loadbalancer.fptcloud.com/load-balancer-version  | "v1"/"v2"  | "v1"  | Muốn sử dụng LBv2 cho service type LoadBalancer, cấu hình value là "v2". Mặc định LBv1 sẽ được tạo ra nếu không cấu hình annotation này  |  
| loadbalancer.fptcloud.com/x-forwarded-for  | "true"/"false"  | "false"  | Muốn forward header của request tới LoadBalancer pool backend khi sử dụng LoadBalancer layer7, cấu hình value là "true".   
Chú ý: Không thể sử dụng proxy protocol và x-forwarded-for cùng một lúc  |  
Ngoài ra, Managed GPU Cluster hỗ trợ người dùng cấu hình: 
#### 1. Tạo service type LoadBalancer chỉ định floatingIP gắn vào LoadBalancer:

```
Copykind: Service
apiVersion: v1
metadata:
  name: hello-world
  namespace: example
spec:
  type: LoadBalancer
  loadBalancerIP: 103.160.90.207
  selector:
    app: hello-world
  ports:
    - name: http
      protocol: TCP
      port: 443
      targetPort: web
```

Lưu ý: IP public cần được allocate vào VPC và ở trạng thái Inactive. Người dùng vào mục **Networking - > Floating Ips** để kiểm tra. 
#### 2. Giới hạn quyền truy cập vào Load Balancer bằng cấu hình _"loadBalancerSourceRanges"_ trong phần _"spec"_ của cấu hình service:

```
Copykind: Service
apiVersion: v1
metadata:
  name: hello-world
  namespace: example1
spec:
  loadBalancerSourceRanges:
  - 14.233.234.0/24
  - 10.250.0.0/24
  type: LoadBalancer
  selector:
    app: hello-world
  ports:
    - name: http
      protocol: TCP
      port: 80
      targetPort: web
```

Lưu ý: Cấu hình "loadBalancerSourceRanges" chứa mảng các dải IP public được phép truy cập vào Load Balancer. Mặc định M-FKE tạo service type Load Balancer với cấu hình dải IP source là 0.0.0.0/0.
