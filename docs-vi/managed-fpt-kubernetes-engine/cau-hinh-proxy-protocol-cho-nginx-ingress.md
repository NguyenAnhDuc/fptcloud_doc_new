---
id: "cau-hinh-proxy-protocol-cho-nginx-ingress"
title: "Cấu hình proxy protocol cho nginx-ingress với Managed Kubernetes cluster"
description: "Trong trường hợp người dùng sử dụng dịch vụ Managed Kubernetes của FPT Cloud và có nhu cầu lấy được thông tin IP public "
sidebar_label: "Cấu hình proxy protocol cho nginx-ingress với Managed Kubernetes cluster"
sidebar_position: 52
pagination_next: null
---

# Cấu hình Proxy Protocol cho Nginx Ingress

Trong trường hợp người dùng sử dụng dịch vụ Managed Kubernetes của FPT Cloud và có nhu cầu lấy được thông tin IP public của người dùng cuối khi truy cập vào ứng dụng trong Kubernetes thông qua nginx ingress gateway, người dùng có thể cấu hình: 
. Enable proxy protocol cho service **nginx-ingress-controller** bằng cách thêm annotation loadbalancer.fptcloud.com/proxy-protocol: "true" trong cấu hình của service. 
. Cấu hình thêm các trường trong configmap **nginx-ingress-controller** trong namespace mà người dùng chọn để deploy nginx ingress controller: 

```
Copyallow-snippet-annotations: "true" 
proxy-protocol: "True" 
real-ip-header: proxy_protocol 
use-proxy-protocol: "true" 
```

. Restart nginx ingress controller để ingress controller nhận cấu hình configmap mới.
Nếu ứng dụng người dùng cần gọi tới domain ingress port 443, cần cấu hình thêm annotation cho service LB ingress nginx controller: 

```
Copyloadbalancer.fptcloud.com/enable-ingress-hostname: "true"
```

Khi sử dụng service loại LoadBalancer với tính năng proxy protocol cho LB L4, các pod trong cluster không thể kết nối tới dịch vụ thông qua ingress domain port 443, còn từ internet bên ngoài vẫn truy cập bình thường. Nguyên nhân xuất phát từ hành vi mặc định của kube-proxy: thành phần này thêm địa chỉ _IP Public_ của LoadBalancer vào iptables trên các node và ánh xạ IP đó với một interface trong worker node. Kết quả là các yêu cầu từ pod tới ingress domain bị chặn lại tại interface của node và không thể tiếp tục ra mạng public. Cấu hình ingress hostname chính là cách khắc phục vấn đề này, đảm bảo kết nối hoạt động cả từ bên trong cluster lẫn từ internet bên ngoài.
