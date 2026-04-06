---
id: "service-type-load-balancer"
title: "Service Type Load-Balancer"
description: "D-FKE hỗ trợ tạo **Service type Load Balancer** giúp user có thể dễ dàng public ứng dụng ra ngoài cluster. Hệ thống hỗ t"
sidebar_label: "Service Type Load-Balancer"
sidebar_position: 23
---

# Service Type Load-Balancer

D-FKE hỗ trợ tạo **Service type Load Balancer** giúp user có thể dễ dàng public ứng dụng ra ngoài cluster. Hệ thống hỗ trợ cả public và private LB.
  * **Public LB:** Mặc định svc type LB khi được tạo dưới dạng public, service được gán Public IP để có thể truy cập từ internet.
  * **Private LB:** Service được gắn Private IP để có thể truy cập từ các hệ thống nội bộ tenant đến ứng dụng (service). Không được gán Public IP nên không truy cập được từ internet.

## A. Public LB
Service type LoadBalacer dạng Public để có thể truy cập từ internet. Dạng này cần có Public IP free để sử dụng.
VD file yaml:

```
apiVersion: v1
kind: Service
metadata:  
  name: web  
  namespace: default
spec:  
  selector:    
    app: web  
  ports:    
    – protocol: TCP      
      name: http      
      port: 80      
      targetPort: 80    
    – protocol: TCP      
      name: https      
      port: 443      
      targetPort: 443  
  type: LoadBalancer 
```

## B. Private LB
Service type LoadBalacer dạng Private với mục đích sử dụng để truy cập nội bộ, không truy cập từ internet. Dạng này không cần có Public IP free để sử dụng.
VD file yaml:

```
CopyapiVersion: v1
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
    – protocol: TCP      
      name: http      
      port: 80      
      targetPort: 80    
    – protocol: TCP      
      name: https      
      port: 443      
      targetPort: 443  
  type: LoadBalancer 
```

Kiểm tra service tạo thành công.

```
Copykubectl get svc 
```

Chỉnh sửa lại **Internal IP** của Load Balancer. Nhập dải IP bạn muốn hệ thống cấp tự động cho **LB Virtual IP** :
  * startIP: IP bắt đầu của subnet. Vd 10.100.1.2
  * endIP: IP kết thúc của subnet. Vd 10.100.1.253

Lưu ý: Dải IP này không được trùng với các subnet đã tạo trên hệ thống.

```
Copykubectl edit cm fptcloud-ccm-configmap -n kube-system 
```

```
Copyloadbalancer:
      oneArm:
        startIP: "169.254.64.1"
        endIP: "169.254.127.254" 
```

Chỉnh sửa lại startIP và endIP theo dải IP mong muốn và thực hiên save.
Thực hiện rollout để nhận config mới.

```
Copykubectl rollout restart deployment fptcloud-ccm -n kube-system 
```
