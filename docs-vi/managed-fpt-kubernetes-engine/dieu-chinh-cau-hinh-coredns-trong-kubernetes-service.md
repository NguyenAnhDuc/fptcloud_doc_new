---
id: "dieu-chinh-cau-hinh-coredns-trong-kubernetes-service"
title: "Điều chỉnh cấu hình CoreDNS trong Kubernetes Service"
description: "FPT Managed Kubernetes Engine (M-FKE) sử dụng Coredns để quản lý và phân giải domain cho cluster. Thành phần Coredns đượ"
sidebar_label: "Điều chỉnh cấu hình CoreDNS trong Kubernetes Service"
sidebar_position: 44
---

# Điều chỉnh cấu hình CoreDNS trong Kubernetes

FPT Managed Kubernetes Engine (M-FKE) sử dụng Coredns để quản lý và phân giải domain cho cluster. Thành phần Coredns được quản lý bởi FPT nên người dùng không thể thay đổi Corefile của Coredns. Bài hướng dẫn này chỉ ra cách mà người dùng có thể sử dụng configmap để điều chỉnh cấu hình CoreDNS mong muốn trong M-FKE.
**Rewrite DNS:**
Người dùng có thể điều chỉnh CoreDNS với M-FKE để thực hiện ghi đè DNS bằng cách cấu hình configmap _coredns-custom_ trong namespace _kube-system_ như sau:

```
apiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom
  namespace: kube-system
data:
  test.server: |
    .com:8053 {
    log
    errors
    rewrite stop {
      name regex (.*)\..com {1}.default.svc.cluster.local
      answer name (.*)\.default\.svc\.cluster\.local {1}..com
    }
    forward . /etc/resolv.conf # you can redirect this to a specific DNS server such as 10.0.0.10, but that server must be able to resolve the rewritten domain name
    }
```

Sau đó người dùng thực hiện thao tác xóa 2 pod coredns trong namespace kube-system để reload cấu hình configmap cho coredns.
**Custom forward server:**
Nếu người dùng cần chỉ định DNS server để phân giải domain trong cluster có thể cấu hình như sau:

```
CopyapiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom
  namespace: kube-system
data:
  test.server: | # you may select any name here, but it must end with the .server file extension
    .com:8053 {
        forward foo.com 1.1.1.1
        forward . 2.2.2.2
    }
```

Trong đó 1.1.1.1 và 2.2.2.2 là dns server mà người dùng định nghĩa. “forward . 2.2.2.2” nghĩa là CoreDNS sẽ gửi yêu cầu phân giải domain *.com tới dns server 2.2.2.2
Sau đó người dùng thực hiện thao tác xóa 2 pod coredns trong namespace kube-system để reload cấu hình configmap cho coredns.
**Custom domains:**
Nếu người dùng muốn cấu hình custom domain mà chỉ có thể phân giải nội bộ cluster, ví dụ phân giải domain puglife.local (không phải là domain hợp lệ), nếu không cấu hình coredns-custom configmap, M-FKE cluster sẽ không thể phân giải domain đó. Người dùng có thể cấu hình như sau:

```
CopyapiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom
  namespace: kube-system
data:
  puglife.server: | # you may select any name here, but it must end with the .server file extension
    puglife.local:8053 {
        errors
        cache 30
        forward . 192.11.0.1  # this is my test/dev DNS server
    }
```

Sau đó người dùng thực hiện thao tác xóa 2 pod coredns trong namespace kube-system để reload cấu hình configmap cho coredns.
**Stub domain:**
CoreDNS có thể sử dụng để cấu hình stub domain như sau và hãy đảm bảo cập nhật custom domain và địa chỉ IP đúng với giá trị trong môi trường hạ tầng của người dùng:

```
CopyapiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom
  namespace: kube-system
data:
  test.server: | # you may select any name here, but it must end with the .server file extension
    abc.com:8053 {
     errors
     cache 30
     forward . 1.2.3.4
    }
    my.cluster.local:8053 {
        errors
        cache 30
        forward . 2.3.4.5
    }
```

Sau đó người dùng thực hiện thao tác xóa 2 pod coredns trong namespace kube-system để reload cấu hình configmap cho coredns.
**Hosts plugin:**
Người dùng có thể sử dụng coreDNS để khai báo thêm bản ghi DNS bằng cách:

```
CopyapiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom # this is the name of the configmap you can overwrite with your changes
  namespace: kube-system
data:
    test.override: | # you may select any name here, but it must end with the .override file extension
          hosts { 
              10.0.0.1 example1.org
              10.0.0.2 example2.org
              10.0.0.3 example3.org
              fallthrough
          }
```

Sau đó người dùng thực hiện thao tác xóa 2 pod coredns trong namespace kube-system để reload cấu hình configmap cho coredns.
**Enable DNS query logging:**
Người dùng có thể sử dụng DNS logging để hỗ trợ debug phân giải domain trong coreDNS bằng cách thêm cấu hình vào trong configmap _custom-coredns_ trong namespace _kube-system_ như sau:

```
CopyapiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom
  namespace: kube-system
data:
  log.override: | # you may select any name here, but it must end with the .override file extension
        log
```

Sau đó người dùng thực hiện thao tác xóa 2 pod coredns trong namespace kube-system để reload cấu hình configmap cho coredns.
