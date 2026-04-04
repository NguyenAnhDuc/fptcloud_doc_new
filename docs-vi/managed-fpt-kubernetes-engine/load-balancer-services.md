---
id: "load-balancer-services"
title: "Dịch vụ Load Balancer"
description: "Sản phẩm M-FKE được xây dựng trên Native Kubernetes và tích hợp thêm các thành phần của FPT Cloud vào Kubernetes."
sidebar_label: "Dịch vụ Load Balancer"
sidebar_position: "18"
---

# Dịch vụ Load Balancer

Sản phẩm **M-FKE** được xây dựng trên Native Kubernetes và tích hợp thêm các thành phần của FPT Cloud vào Kubernetes, bao gồm **FPT Cloud Controller Manager**. Thành phần này có nhiệm vụ quản lý worker node trong cluster và các dịch vụ Load Balancer.
Người dùng có nhiều phương thức để expose ứng dụng ra internet, bao gồm tạo ingress cho service, tạo NodePort Service và gán floating IP vào VM worker node, hoặc sử dụng Load Balancer Service.
FPT Cloud hỗ trợ tạo Load Balancer Service và tự động gán public IP cho load balancer đó. Khi sử dụng Load Balancer Service, ngoài việc tạo load balancer mặc định cho worker node, người dùng có thể thêm cấu hình tùy chọn cho load balancer bằng cách dùng annotation trong file manifest của service:

| Key | Value | Default | Ý nghĩa |
| --- | --- | --- | --- |
| service.beta.kubernetes.io/fpt-load-balancer-type | basic/advanced/standard/premium | basic | Loại Load Balancer (basic/advanced/standard/premium) |
| service.beta.kubernetes.io/fpt-load-balancer-internal | true/false | False | Service có muốn public ra internet không? Nếu không, sẽ không tạo floating IP gán vào load balancer. |

Người dùng có thể tạo Load Balancer Service bằng cách thêm annotation vào cấu hình service theo nhu cầu sử dụng.
Ví dụ:

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: coffee
spec:
  replicas: 2
  selector:
    matchLabels:
      app: coffee
  template:
    metadata:
      labels:
        app: coffee
    spec:
      containers:
      - name: coffee
        image: nginxdemos/hello:plain-text
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: coffee-svc
  annotations:
    service.beta.kubernetes.io/fpt-load-balancer-type: basic
spec:
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
    name: http
  selector:
    app: coffee
  type: LoadBalancer
---
```

Ví dụ này tạo Load Balancer Service với loại **Basic**. Sau khi áp dụng file manifest cho service, một Load Balancer Service được tạo trong Kubernetes cluster:
[![](/img/migrated/48-1-e461b092.png)](/img/migrated/48-1-e461b092.png)
Khi trường **EXTERNAL-IP** chuyển từ **Pending** sang một public IP, ứng dụng có thể được truy cập từ internet thông qua public IP đó hoặc domain liên kết với public IP đó.
[![](/img/migrated/49-1-be984dc5.png)](/img/migrated/49-1-be984dc5.png)
Người dùng cũng có thể tạo internal Load Balancer Service — loại này không thể truy cập từ bên ngoài cluster, phục vụ mục đích chỉ cho phép các service nội bộ tương tác với nhau:

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: coffee
spec:
  replicas: 2
  selector:
    matchLabels:
      app: coffee
  template:
    metadata:
      labels:
        app: coffee
    spec:
      containers:
      - name: coffee
        image: nginxdemos/hello:plain-text
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: coffee-svc
  annotations:
    service.beta.kubernetes.io/fpt-load-balancer-internal: "true"
spec:
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
    name: http
  selector:
    app: coffee
  type: LoadBalancer
---
```

Khi tạo internal Load Balancer Service, trường **EXTERNAL-IP** của service không phải public IP mà là private IP.
[![](/img/migrated/51-1-cd84aa92.png)](/img/migrated/51-1-cd84aa92.png)
