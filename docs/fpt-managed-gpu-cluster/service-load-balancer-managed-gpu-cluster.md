---
id: "service-load-balancer-managed-gpu-cluster"
title: "Service Load Balancer Managed Gpu Cluster"
sidebar_label: "Service Load Balancer Managed Gpu Cluster"
sidebar_position: "13"
---

# Service Load Balancer Managed Gpu Cluster

Sản phẩm Managed GPU Cluster is phát triển from Kubernetes Native and tích hợp thêm thêm the thành phần cloud provider ando Kubernetes in that có thành phần FPT Cloud Controller Manager. Thành phần this nhằm mục đích quản lý the worker nodes in cluster and the service dạng Load Balancer. Người dùng can có nhiều theh to expose a ứng dụng of mình ra bên ngoài internet to khách hàng of user that can truy cập ando ứng dụng, service. Các theh that can includes việc tạo ingress for service, or tạo service dạng node port and gắn floating for worker node, or can sử dụng service dạng Load Balancer. 
FPTCloud hỗ trợ user tạo service dạng load balancer with the option đi kèm annotation in cấu hình of service:   
|   |   |   |   |  
| --- | --- | --- | --- |  
| **Key**  | **Value**  | **Default**  | **Mục đích**  |  
| service.beta.kubernetes.io/fpt-load-balancer-internal  | "true"/"false"  | "false"  | Nếu không muốn expose service ra ngoài internet, cấu hình value là "true"  |  
| loadbalancer.fptcloud.com/keep-floatingip   | "true"/"false"  | "false"  | Nếu muốn giữ floating IP of service LoadBalancer ở lại in VPC after xóa service that, cấu hình value là "true"  |  
| loadbalancer.fptcloud.com/proxy-protocol  | "true"/"false"  | "false"  | Nếu muốn LoadBalancer sử dụng protocol là PROXY, hãy cấu hình value là “true”.   
Chú ý: Proxy protocol chỉ sử dụng with LoadBalancer layer4  |  
| loadbalancer.fptcloud.com/enable-health-monitor  | "true"/"false"  | "true"  | Muốn disable health monitor for LoadBalancer Pool, cấu hình value là “false”  |  
| service.beta.kubernetes.io/fpt-load-balancer-type  | LBv1 includes:  
basic/ advanced/ standard/ premium  
LBv2 includes:   
Basic-1/ Basic-2/ Standard/ Advanced/Premium  | Lbv1: "basic"   
LBv2: "Basic-1"  | Configure flavor of LoadBalancer to đáp ứng tải corresponding of ứng dụng đằng sau backend of LoadBalancer pool  |  
| loadbalancer.fptcloud.com/enable-ingress-hostname  | "true"/"false"  | "false"  | Muốn enable ingress hostname for service type LoadBalancer, cấu hình value là "true"  |  
| loadbalancer.fptcloud.com/load-balancer-version  | "v1"/"v2"  | "v1"  | Muốn sử dụng LBv2 for service type LoadBalancer, cấu hình value là “v2”. Mặc định LBv1 will is tạo ra if không cấu hình annotation this  |  
| loadbalancer.fptcloud.com/x-forwarded-for  | "true"/"false"  | "false"  | Muốn forward header of request tới LoadBalancer pool backend when sử dụng LoadBalancer layer7, cấu hình value là “true”.   
Chú ý: Không thể sử dụng proxy protocol and x-forwarded-for cùng a lúc  |  
Ngoài ra, Managed GPU Cluster hỗ trợ user cấu hình: 
#### 1. Create service type LoadBalancer chỉ định floatingIP gắn ando LoadBalancer:

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

Note: IP public cần is allocate ando VPC and ở status Inactive. Người dùng ando mục **Networking - > Floating Ips** to kiểm tra. 
#### 2. Giới hạn permission truy cập ando Load Balancer bằng cấu hình _“loadBalancerSourceRanges”_ in phần _“spec”_ of cấu hình service:

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

Note: Configure “loadBalancerSourceRanges” chứa mảng the dải IP public is phép truy cập ando Load Balancer. Mặc định M-FKE tạo service type Load Balancer with cấu hình dải IP source là 0.0.0.0/0.
