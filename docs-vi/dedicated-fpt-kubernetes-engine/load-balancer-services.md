---
id: "load-balancer-services"
title: "Service Type Load Balancer"
description: "D-FKE hỗ trợ tạo Service type Load Balancer giúp người dùng dễ dàng public ứng dụng ra ngoài cluster. Hệ thống hỗ trợ cả public và private LB."
sidebar_label: "Service Type Load Balancer"
sidebar_position: "23"
draft: true
---

# Service Type Load Balancer

D-FKE hỗ trợ tạo **Service type Load Balancer** giúp người dùng dễ dàng public ứng dụng ra ngoài cluster. Hệ thống hỗ trợ cả public và private LB.
  * **Public LB:** Mặc định, svc type LB khi được tạo sẽ ở dạng public, nghĩa là service được gán Public IP để có thể truy cập từ internet.
  * **Private LB:** Service được gán Private IP để chỉ có thể truy cập nội bộ. Không được gán Public IP nên không thể truy cập từ internet.

### A. Public LB
Service type LoadBalancer dạng Public cho phép truy cập từ internet. Dạng này yêu cầu có Public IP khả dụng để cấp phát.

_Ví dụ file manifest:_

```yaml
apiVersion: v1
kind: Service
metadata:  
  name: web  
  namespace: default
spec:  
  selector:    
    app: web  
  ports:    
    - protocol: TCP      
      name: http      
      port: 80      
      targetPort: 80    
    - protocol: TCP      
      name: https      
      port: 443      
      targetPort: 443  
  type: LoadBalancer 
```

### B. Private LB
Service type LoadBalancer dạng Private chỉ cho phép truy cập nội bộ, không thể truy cập từ internet. Dạng này không yêu cầu Public IP khả dụng.

_Ví dụ file manifest:_

```yaml
apiVersion: v1
kind: Service
metadata:  
  annotations:
    service.beta.kubernetes.io/fpt-load-balancer-internal: "true"
  name: web  
  namespace: default
spec:  
  selector:    
    app: web  
  ports:    
    - protocol: TCP      
      name: http      
      port: 80      
      targetPort: 80    
    - protocol: TCP      
      name: https      
      port: 443      
      targetPort: 443  
  type: LoadBalancer 
```

  * Để xem danh sách service đã tạo:

```bash
kubectl get svc 
```

  * Để chỉnh sửa dải Internal IP của Load Balancer:

```bash
kubectl edit cm fptcloud-ccm-configmap -n kube-system
```

```yaml
loadbalancer:
      oneArm:
        startIP: "169.254.64.1"
        endIP: "169.254.127.254" 
```

Nhập dải IP bạn muốn hệ thống tự động cấp cho Virtual IP của LB:
  * **startIP**: IP bắt đầu của subnet.
_Ví dụ: startIP: "10.100.1.2"_
  * **endIP**: IP kết thúc của subnet.
_Ví dụ: endIP: "10.100.1.253"_

_**Lưu ý**: Dải IP này không được trùng với các subnet đã tạo trên hệ thống._

Sau đó thực hiện rollout để áp dụng cấu hình mới:

```bash
kubectl rollout restart deployment fptcloud-ccm -n kube-system 
```
