---
id: "service-type-kb-layer7-lbv2"
title: "Service Type Loadbalancer Layer 7（LBv2）の使用"
description: "FPT Cloud は、ユーザーが提供する SSL 証明書を使用した Layer 7 Loadbalancer ソリューションを提供します。"
sidebar_label: "Service Type Loadbalancer Layer 7（LBv2）の使用"
sidebar_position: "53"
---

# Service type Layer 7 Load Balancer

FPT Cloud cung cấp cho khách hàng giải pháp sử dụng Loadbalancer Layer 7 với việc sử dụng Cert SSL của khách hàng tự cung cấp. 
**1. Khởi tạo Cert**
**Bước 1** : Truy cập vào **Tab Load Balancer** , bấm **Import SSL Certificate** để tạo cert mới
[![](/img/migrated/1.-tao-cert-e00d2892.png)](/img/migrated/1.-tao-cert-e00d2892.png)
**Bước 2** : Nhập các thông tin được yêu cầu (chứng chỉ có định dạng chuẩn **PEM**) 
[![](/img/migrated/2.-tao-cert-4824eb43.png)](/img/migrated/2.-tao-cert-4824eb43.png)
**Bước 3** : Kiểm tra lại cert nếu được tạo thành công
[![](/img/migrated/3.-kiem-tra-lai-cert-a241b1e6.png)](/img/migrated/3.-kiem-tra-lai-cert-a241b1e6.png)
**2. Khởi tạo service Loadbalancer sử dụng method HTTPS**
Trong cấu hình Service khởi tạo, thêm một annotation để sử dụng cert SSL mà người dùng vừa khởi tạo ở trên. 

```
Copy
loadbalancer.fptcloud.com/load-balancer-version: v2 

loadbalancer.fptcloud.com/default-tls-secret-ref-name: "name_of_ssl_cert" #tên của cert cần phải giống với tên được khởi tạo trên portal 

```

Lúc này, Listener sẽ có phương thức là **TERMINATED_HTTPS**. 
Lưu ý: 
  * Cần phải thêm annotation trên vào lúc khởi tạo Load Balancer 
  * Hiện tại chưa cung cấp tính năng renew, update Cert trên Portal, nếu khách hàng mong muốn đổi cert, vui lòng thêm mới ở trên portal với 1 tên khác, và chỉnh sửa giá trị của annotation sang tên muốn sử dụng (sẽ có downtime ~20s)
