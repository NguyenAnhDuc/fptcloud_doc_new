---
id: "service-type-load-balancer"
title: "Service Type Load-Balancer"
description: "Sản phẩm Managed FKE được phát triển từ Kubernetes Native và tích hợp thêm thêm các thành phần cloud provider vào Kubern"
sidebar_label: "Service Type Load-Balancer"
sidebar_position: 21
---

# Service Type Load Balancer

Sản phẩm Managed FKE được phát triển từ Kubernetes Native và tích hợp thêm thêm các thành phần cloud provider vào Kubernetes trong đó có thành phần FPT Cloud Controller Manager. Thành phần này nhằm mục đích quản lý các worker nodes trong cluster và các service dạng Load Balancer. Người dùng có thể có nhiều cách để expose một ứng dụng của mình ra bên ngoài internet để khách hàng của người dùng đó có thể truy cập vào ứng dụng, dịch vụ. Các cách đó có thể bao gồm việc tạo ingress cho service, hoặc tạo service dạng node port và gắn floating cho VM worker node, hoặc có thể sử dụng service dạng Load Balancer. 
FPTCloud hỗ trợ người dùng tạo service dạng load balancer với các option đi kèm annotation trong cấu hình của service:   
|   |   |   |   |  
| --- | --- | --- | --- |  
| **Key**  | **Value**  | **Default**  | **Mục đích**  |  
| service.beta.kubernetes.io/fpt-load-balancer-internal  | "true"/"false"  | "false"  | Nếu không muốn expose service ra ngoài internet, cấu hình value là "true"  |  
| loadbalancer.fptcloud.com/keep-floatingip   | "true"/"false"  | "false"  | Nếu muốn giữ floating IP của service LoadBalancer ở lại trong VPC sau khi xóa service đó, cấu hình value là "true"  |  
| loadbalancer.fptcloud.com/proxy-protocol  | "true"/"false"  | "false"  | Nếu muốn LoadBalancer sử dụng protocol là PROXY, hãy cấu hình value là “true”.   
Chú ý: Proxy protocol chỉ sử dụng với LoadBalancer layer4  |  
| loadbalancer.fptcloud.com/enable-health-monitor  | "true"/"false"  | "true"  | Muốn disable health monitor cho LoadBalancer Pool, cấu hình value là “false”  |  
| service.beta.kubernetes.io/fpt-load-balancer-type  | - LBv1 bao gồm:  
basic/ advanced/ standard/ premium ( đã dừng hỗ trợ LBv1 )   
- LBv2 bao gồm:   
Starter/Basic-1/ Basic-2/ Standard/ Advanced/ Premium/ Extra-1/ Extra-2/ Extra-3/ Extra-S/ Extra-M/ Extra-L  | LBv1: "basic"   
LBv2: "Basic-1"  | Cấu hình flavor của LoadBalancer để đáp ứng tải tương ứng của ứng dụng đằng sau backend của LoadBalancer pool   
Chú ý:  Nếu cấu hình annotation key "service.beta.kubernetes.io/fpt-load-balancer-type" có value khác với những giá trị cho phép có thể gây lỗi  |  
| loadbalancer.fptcloud.com/enable-ingress-hostname  | "true"/"false"  | "false"  | Muốn enable ingress hostname cho service type LoadBalancer, cấu hình value là "true"  |  
| loadbalancer.fptcloud.com/load-balancer-version  | "v1"/"v2"  | "v2"  | Muốn sử dụng LBv1 cho service type LoadBalancer, cấu hình value là “v1”. Mặc định LBv2 sẽ được tạo ra nếu không cấu hình annotation này   
Chú ý: Không thể sử dụng proxy protocol và x-forwarded-for cùng một lúc  |  
| loadbalancer.fptcloud.com/x-forwarded-for  | "true"/"false"  | "false"  | Muốn forward header của request tới LoadBalancer pool backend khi sử dụng LoadBalancer layer7, cấu hình value là “true”.  |  
| loadbalancer.fptcloud.com/node-selector  | mảng các cặp key=value  
e.g: "env=prod, region=han"  |   | Chọn node để đưa vào member pool của LoadBalancer, các node được chọn sẽ chứa tất cả các cặp key=value mà người dùng sử dụng  |  
| loadbalancer.fptcloud.com/connection-limit  | integer  | -1  | Giới hạn số kết nối đồng thời tối đa. -1 là không giới hạn  |  
| loadbalancer.fptcloud.com/timeout-client-data  | integer (ms)  | 50000  | Thời gian chờ dữ liệu từ phía client. Đơn vị ms  |  
| loadbalancer.fptcloud.com/timeout-member-connect  | integer (ms)  | 5000  | Thời gian chờ kết nối giữa load balancer và backend. Đơn vị ms  |  
| loadbalancer.fptcloud.com/timeout-member-data  | integer (ms)  | 50000  | Thời gian chờ dữ liệu giữa load balancer và backend. Đơn vị ms  |  
| loadbalancer.fptcloud.com/timeout-tcp-inspect  | integer (ms)  | 0  | Thời gian chờ để kiểm tra TCP. 0ms là tắt chức năng kiểm tra TCP.  |  
| loadbalancer.fptcloud.com/health-monitor-delay  | integer (s)  | 60  | Khoảng thời gian giữa các lần healthcheck member trong pool  |  
| loadbalancer.fptcloud.com/health-monitor-timeout  | integer (s)  | 30  | Thời gian tối đa cho một lần healthcheck  |  
| loadbalancer.fptcloud.com/health-monitor-max-retries  | integer  | 5  | Số lần healthcheck thất bại trước khi đánh dấu backend là DOWN.  |  
| loadbalancer.fptcloud.com/health-monitor-max-retries-down  | integer  | 3  | Số lần healthcheck thành công để đánh dấu backend hoạt động trở lại (UP).  |  
Lưu ý: 
Ngoài ra, MFKE hỗ trợ người dùng cấu hình: 
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
#### 2. Giới hạn quyền truy cập vào Load Balancer bằng cấu hình _“loadBalancerSourceRanges”_ trong phần _“spec”_ của cấu hình service:

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

Lưu ý: Cấu hình “loadBalancerSourceRanges” chứa mảng các dải IP public được phép truy cập vào Load Balancer. Mặc định M-FKE tạo service type Load Balancer với cấu hình dải IP source là 0.0.0.0/0.
