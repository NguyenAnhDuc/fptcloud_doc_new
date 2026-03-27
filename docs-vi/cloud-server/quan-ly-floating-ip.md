---
id: "quan-ly-floating-ip"
title: "Quản lý Floating IP"
description: "**Floating IP** được dùng để lưu giữ **IP Public** và điều hướng truy cập từ internet vào máy ảo. Để máy ảo có thể truy"
sidebar_label: "Quản lý Floating IP"
sidebar_position: 69
---

# Quan Ly Floating Ip

**Floating IP** được dùng để lưu giữ **IP Public** và điều hướng truy cập từ internet vào máy ảo. Để máy ảo có thể truy cập được từ ngoài internet, bạn cần gắn một **Floating IP** cho nó. 
Trong trường hợp không còn nhu cầu hoặc muốn thay đổi endpoint, bạn có thể chuyển hướng **Floating IP** sang máy ảo khác cùng VPC chỉ với 1 vài thao tác đơn giản.
Việc này sẽ giúp bạn tiết kiệm chi phí cho tài nguyên Public IP, có thể sử dụng các IP một cách tối đa.
### **Lấy địa chỉ IP Public mới từ pool**
Trong trường hợp tài khoản của bạn còn hạn mức, bạn có thể lấy thêm IP để sử dụng.
Để lấy thêm**IP Public** vào VPC, bạn thao tác như sau:
**Bước 1** : Trên menu chọn **Networking** > **Floating IP**. Chọn **Allocate IP address**.
[![file](/img/migrated/image-1744796389838-51d99bba.png)](/img/migrated/image-1744796389838-51d99bba.png)
**Bước 2** : Nhập các thông tin theo yêu cầu của hệ thống. Bạn có thể tạo nhiều rule NAT với port IP khác nhau thuộc dãy 1-65535: 
  * **IP address** : Chọn **Allocate new from pool**.
  * **Instance** , chọn máy ảo sẽ được gắn với IP này. Nếu chưa có nhu cầu gắn vào máy ảo (sử dụng sau hoặc sử dụng cho các mục đích khác như VPN Site-to-Site), bạn chọn “Not assign ip to instance
  * **IP port (optional)** : Port IP để forward traffic vào bên trong. Bạn có thể cài đặt NAT rule cho các port riêng biệt. Các port ứng với 1 IP là duy nhất và không được trùng nhau trong các rule. Nếu để trống trường này, mặc định hệ thống sẽ hiểu là forward trên toàn bộ port.
  * **Instance Port (Optional)** : Instance Port là port trên instance và được forward dữ liệu vào. Bạn có thể cài đặt NAT rule cho các port riêng biệt. Các port ứng với 1 instance là duy nhất và không được trùng nhau trong các rule. Nếu để trống trường này, mặc định hệ thống sẽ hiểu là forward trên toàn bộ port.
  * **Add tag (optional)** : Gắn tag vào IP. Trường này không bắt buộc

[![file](/img/migrated/image-1744796414049-34380ca8.png)](/img/migrated/image-1744796414049-34380ca8.png)
**Bước 3** : Chọn **Allocate floating IP**. Hệ thống sẽ tiến hành kiểm tra các điều kiện để lấy IP và thông báo kết quả.
Nếu thành công, IP sẽ được hiển thị ở trang **Floating IP**.
[![file](/img/migrated/image-1744796445032-3ae055e3.png)](/img/migrated/image-1744796445032-3ae055e3.png)
**Lưu ý: Nếu hệ thống báo lỗi khi tạo do hết hạn mức, bạn cần liên hệ với bộ phận hỗ trợ để được cấp thêm.**
### **Gắn Floating IP vào máy chủ**
**Bước 1** : Trên bảng quản trị **Floating IP** , trong phần**Action** của IP cần gắn vào máy ảo, chọn **Connect to instance**.
**Bước 2** : Popup **Connect to instance** hiện lên, chọn máy ảo cần gắn với IP này tại trường **Instance**.
[![file](/img/migrated/image-1711341971686-34fcb07d.png)](/img/migrated/image-1711341971686-34fcb07d.png)
**Bước 3** : Chọn **Allocate floating IP**. Hệ thống sẽ tiến hành xử lý và thông báo kết quả.
Nếu thành công, IP và rule sẽ được hiển thị ở trang **Floating IP**.
[![file](/img/migrated/image-1711347009568-55cc84d4.png)](/img/migrated/image-1711347009568-55cc84d4.png)
### **Gỡ Floating IP khỏi máy ảo**
Trong trường hợp không còn nhu cầu sử dụng hoặc muốn gỡ IP ra để gắn vào máy ảo khác, bạn có thể gỡ **Floating IP** theo hướng dẫn sau:
**Bước 1** : Trên bảng quản trị **Floating IP** , trong phần **Actions** của IP cần gỡ khỏi máy ảo, chọn **Disconnect instance**.
**Bước 2** : Hệ thống sẽ hiển thị popup xác nhận thông tin. Để đồng ý gỡ, chọn **Disconnect**.
[![file](/img/migrated/image-1711347052046-f3949811.png)](/img/migrated/image-1711347052046-f3949811.png)
### **Xóa Floating IP khỏi VPC**
Để xóa **Floating IP** khỏi **VPC** khi không còn nhu cầu sử dụng, bạn thao tác như sau:
**Bước 1** : Trên bảng quản trị **Floating IP** , trong phần **Action** của IP cần xóa khỏi **VPC** , chọn **Release IP**.
[![file](/img/migrated/image-1734600435905-96b1e7c8.png)](/img/migrated/image-1734600435905-96b1e7c8.png)
**Bước 2** : Hệ thống sẽ hiển thị popup xác nhận thông tin. Để đồng ý xóa, chọn **Release**.
[![file](/img/migrated/image-1711347079894-c81c9237.png)](/img/migrated/image-1711347079894-c81c9237.png)