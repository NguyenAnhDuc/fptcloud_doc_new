---
id: "Initial Setup"
title: "Thiết lập ban đầu"
description: "Để sử dụng dịch vụ Load Balancer của FPT Cloud, trước tiên hãy kiểm tra và hoàn thành các công việc sau:"
sidebar_label: "Thiết lập ban đầu"
sidebar_position: 2
---

# Initial Setup

Để sử dụng dịch vụ Load Balancer của FPT Cloud, trước tiên hãy kiểm tra và hoàn thành các công việc sau:
  * [Tạo tài khoản FPT Cloud và đăng nhập vào FPT Portal](../load-balancer/index.md)
  * [Hướng dẫn khởi tạo máy chủ ảo trên FPT Cloud.](../load-balancer/index.md)
  * [Hướng dẫn gắn một Security Group vào máy chủ ảo.](../load-balancer/index.md)

Sau khi thực hiện các thao tác trên, bạn đã sẵn sàng để bắt đầu sử dụng Load Balancer trên hệ thống FPT Cloud.
### Tạo tài khoản FPT Cloud và đăng nhập vào FPT Portal
Để bắt đầu sử dụng dịch vụ **FPT Load Balancer,** bạn cần đăng nhập vào **FPT Portal**.
Hãy truy cập vào <https://console.fptcloud.com> và đăng nhập bằng tài khoản/mật khẩu **FPT Cloud** đã được cấp. Chọn đúng Tenant, Region, VPC cần sử dụng dịch vụ.
Nếu chưa có tài khoản FPT Cloud, bạn hãy truy cập trang chủ tại <https://fptcloud.com/>.
Sau đó chọn chức năng **Sign Up** và nhập các thông tin theo hướng dẫn của hệ thống. Bạn sẽ được bộ phận hỗ trợ liên hệ ngay sau đó và xác nhận các thông tin để tạo tài khoản.
Trong qua trình thao tác nếu gặp bất kỳ lỗi nào hãy liên hệ ngay cho đội ngũ Support của chúng tôi để được hỗ trợ.
### Hướng dẫn khởi tạo máy chủ ảo trên FPT Cloud
Hiện tại FPT Load Balancer đang hỗ trợ cân bằng tải cho các máy chủ ảo trên FPT Cloud. Vì vậy bạn cần phải nắm được cách khởi tạo và quản lý máy chủ ảo tại hướng dẫn này:
_Link doc hướng dẫn Cloud Server_
### Gắn một Security Group vào máy chủ ảo
**Security Group** hoạt động như một tường lửa mạng ở cấp máy ảo, có thể giúp kiểm soát traffic bằng cách chặn hoặc mở lưu lượng vào và ra cho máy. Với **FPT Cloud** , mặc định các máy ảo đều được mở traffic ra ngoài Internet (**Outbound**), nhưng với các traffic vào (**Inbound**) sẽ bị chặn.
Việc này sẽ đảm bảo an toàn cho máy ảo của bạn khỏi việc bị hack, DDos,… và các nguy cơ khác đến từ Internet.
Tuy nhiên Load Balancer cần bạn mở một số cổng đặc biệt để có thể sử dụng. Ngoài việc phải mở các cổng của dịch vụ như HTTP/HTTPS trên máy chủ, bạn cần mở thêm các cổng khác phục vụ việc kiểm tra trạng thái hoạt động.
Để mở traffic vào máy ảo bạn chỉ cần tạo một **Security Group** , thêm các **Inbound** **Rule** tương ứng và gán cho máy chủ đấy.
Nếu là external load balancer, bạn cần gắn **Security Group** cho cả IP của**Load Balancer** nữa.
Ví dụ bạn muốn tạo 1 load balancer tên LB1 để cân bằng tải cho một web server, chạy trên port 80 của máy ảo A và máy ảo B thì bạn cần thao tác như sau:
  * Tạo **Security Group** mới.
  * Thêm **Inbound rule** với port là 80.
  * Gán **Security Group** vừa tạo vào máy chủ A và máy chủ B.
  * Nếu LB1 là một **External Load Balancer** , đã được gắn với một **Public IP** thì bạn cần gán **Security Group** cho cả LB 1 nữa.

Hướng dẫn cụ thể về tạo và quản lý **Security Group** , bạn có thể xem ở đây: _Link sang doc kia_
