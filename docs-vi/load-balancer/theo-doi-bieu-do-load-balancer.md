---
id: "theo-doi-bieu-do-load-balancer"
title: "Theo dõi biểu đồ giám sát Load Balancer"
description: "Để theo dõi biểu đồ giám sát **Load Balancer** , trong màn hình hiển thị danh sách **Load Balancer** , nhấn chọn **Load "
sidebar_label: "Theo dõi biểu đồ giám sát Load Balancer"
sidebar_position: 6
---

# Theo Doi Bieu Do Load Balancer

Để theo dõi biểu đồ giám sát **Load Balancer** , trong màn hình hiển thị danh sách **Load Balancer** , nhấn chọn **Load Balancer** mà bạn muốn xem biểu đồ.
Tại tab **Monitor** , người dùng theo dõi trạng thái của **Load Balancer** , có các đồ thị biểu diễn trạng thái của từng **Listener, nhóm Server** theo thời gian thực.
**Listener** :

```
  -[Listener]Request/s: Số lượng request gửi đến Frontend trong thời gian 1s.

  -[Listener]Response Code: Thống kê http status code do Frontend trả về. Các mã theo dõi gồm:

                 +2xx: Phản hồi thành công (ví dụ: 200 OK)

                 +3xx: Chuyển hướng (ví dụ: 301 Di chuyển vĩnh viễn)

                 +4xx: Lỗi của khách hàng (ví dụ: 404 Không tìm thấy)

                 +5xx: Lỗi của máy chủ (ví dụ: 500 Lỗi máy chủ nội bộ) Bằng cách theo dõi mã phản hồi, bạn có thể xác định các vấn đề tiềm ẩn với máy chủ backend, chẳng hạn như tỷ lệ lỗi cao.

   -[Listener] Data Transfer: Thống kê lưu lượng dữ liệu truyền tải qua frontend theo thời gian thực .Đơn vị dữ liệu: Byte.
```

**Pool** :

```
Copy   -[Pool] Request/s: Lượng request được gửi đến nhóm máy chủ backend trên mỗi giây. Cho biết tổng khối lượng công việc mà bộ cân bằng tải đang phân phối.

   -[Pool]Response Code: Thống kê http status code do Backend trả về .

   -[Pool]Data Transfer: Thống kê lưu lượng dữ liệu truyền tải qua Backend theo thời gian thực. 
```

**Active server:** Số lượng máy chủ Backend hiện đang active (Healthy) của **Load Balancer.** Số lượng này có thể thay đổi theo thời gian dựa trên nhu cầu lưu lượng truy cập và cấu hình cân bằng tải.