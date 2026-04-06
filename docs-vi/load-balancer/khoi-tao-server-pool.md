---
id: "khoi-tao-server-pool"
title: "Khởi tạo Server Pool"
description: "**Server pool** (nhóm máy chủ) là tập hợp các máy chủ backend,chịu trách nhiệm phân phối lưu lượng truy cập đến các máy "
sidebar_label: "Khởi tạo Server Pool"
sidebar_position: 21
---

# Khởi tạo Server Pool

**Server pool** (nhóm máy chủ) là tập hợp các máy chủ backend,chịu trách nhiệm phân phối lưu lượng truy cập đến các máy chủ backend để cải thiện hiệu suất, tính khả dụng và độ tin cậy của dịch vụ.
**1.Tạo Server pool**
**Server pool** đã được tạo cùng **Load Balancer** khi tạo **Load Balancer.**
Để tạo thêm **Server pool** cho **Load Balancer,** bạn thao tác theo hướng dẫn sau: 
**Bước 1:** Truy cập vào trang **Load Balancer Details,** chọn tên **Load Balancer** tương ứng trên bảng quản trị **Load Balancer Management.**
**Bước 2:** Chọn tab **Server pool** , tiếp theo ấn chọn **Create server pool.**
**Bước 3:** Tại đây người dùng nhập thông tin cho **Server pool.**
  * **Server pool name:** Nhập tên cho **Server pool.**
  * **Description:** Nhập mô tả cho **Server Spool.**
  * **Protocol:** Chọn giao thức sử dụng kết nối các máy chủ: **HTTP/ HTTPS /PROXY /PROXYV2 /TCP /UDP.**
  * **Add server:** Chọn máy ảo đã được tạo từ list. Tại đây người dùng được chỉnh sửa:

+**Port:** Port mà Member sẽ lắng nghe để xử lý các yêu cầu đến. Port này thường liên quan đến dịch vụ cụ thể mà Member cung cấp
+**Weight:** Trọng số quy định mức độ ưu tiên của mỗi Pool Member trong việc xử lý các yêu cầu. Các Member có trọng số cao sẽ nhận được nhiều yêu cầu hơn so với các Member có trọng số thấp.
**Advanced setting:**
  * **Algorithm:** Chọn thuật toán cân bằng tải sử dụng bao gồm:

**+Round Robin:** Thuật toán lựa chọn các Member (server) theo trình tự. Theo đó, Load Balancer sẽ bắt đầu đi từ Member (server) số 1 trong danh sách của nó ứng với yêu cầu đầu tiên. Tiếp đó, nó sẽ di chuyển dần xuống trong danh sách theo thứ tự và bắt đầu lại ở đầu trang khi đến Member (server) cuối cùng.
**+Least Connection:** Các request sẽ được chuyển vào server có ít kết nối (active connection) nhất trong hệ thống tại thời điểm hiện tại. Thuật toán này được coi như thuật toán động, vì nó phải đếm số kết nối đang hoạt động của server.
**+Source IP:** Thuật toán này kết hợp địa chỉ IP nguồn và đích của client và server để tạo ra hash key duy nhất. Key này được sử dụng để phân bổ client đến một server cụ thể, và nó có thể được tạo lại nếu session bị timeout hay ngắt kết nối do một lý do nào đó. Khi đó request của client vẫn được chuyển đến cùng một server mà nó đã sử dụng trước đó.
  * **Sticky session:** là phương pháp để đảm bảo rằng các yêu cầu từ cùng một người dùng sẽ luôn được chuyển đến cùng một máy chủ trong một khoảng thời gian nhất định. Điều này giúp duy trì trạng thái của phiên làm việc của người dùng trên một máy chủ cụ thể.

Chọn phương pháp sử dụng **App Cookie, HTTP Cookie, Source IP**. Chọn **None** để không sử dụng tính năng, khi chọn **App Cookie** người dùng cần nhập thêm thông tin cho **Cookie name.**
**Health check**
  * **Protocol: Chọn giao thức phù hợp với giao thức của Server pool theo bảng sau:**

  
|  ` `**Health Monitor Pool**  | **HTTP**  | **HTTPS**  | **PING**  | **SCTP**  | **TCP**  | **TLS-HELLO**  | **UDP-CONNECT**  |  
| --- | --- | --- | --- | --- | --- | --- | --- |  
| HTTP  | Y  | Y  | Y  | N  | Y  | Y  | N  |  
| HTTPS  | Y  | Y  | Y  | N  | Y  | Y  | N  |  
| PROXY  | Y  | Y  | Y  | N  | Y  | Y  | N  |  
| PROXYV2  | Y  | Y  | Y  | N  | Y  | Y  | N  |  
| SCTP  | Y  | N  | N  | Y  | Y  | N  | Y  |  
| TCP  | Y  | Y  | Y  | N  | Y  | Y  | N  |  
| UDP  | Y  | N  | N  | Y  | Y  | N  | Y  |  
Khi chọn giao thức **HTTP/HTTPS** , người dùng cần khai báo thêm thông tin sau:
  * **Path** : Đường dẫn path để kiểm tra. Chú ý cần nhập đúng định dạng path bắt đầu bằng **/.**
  * **HTTP method:** Chọn **HTTP Method** mà **Load Balancer** sử dụng khi gửi yêu cầu health check đến máy chủ backend. Điều này cho phép bạn xác định liệu health check nên sử dụng **CONNECT/** **DELETE/ GET/ HEAD,...**
  * **Expected Code:** Nhập mã trạng thái HTTP mà máy chủ backend phải trả về trong phản hồi để được coi là healthy, có thể là một giá trị như 200 hoặc một list các giá trị như 200, 202 hoặc một khoảng giá trị như 200-204

**Advanced selection**
  * **Max retries down:** Nhập số lần kiểm tra sức khỏe liên tiếp thất bại trước khi một máy chủ backend được đánh dấu là unhealthy. Giá trị cho phép nhập là từ 1-10, mặc định là 3.
  * **Max retries:** Nhập số lần health check liên tiếp phải thành công để một máy chủ backend được xem là healthy. Giá trị cho phép nhập là từ 1-10, mặc định là 3.
  * **Delay(s):** Nhập khoảng thời gian giữa các lần health check được gửi đến máy chủ backend. Nó xác định tần suất health check của máy chủ.
  * **Timeout(s):** Thời gian tối đa cho một yêu cầu health check được gửi đến máy chủ backend trước khi được coi là thất bại. Nếu máy chủ không trả lời trong thời gian này, yêu cầu kiểm tra sẽ được xem là thất bại.

Nhấn **Create server pool** để thực hiện tạo hoặc **Cancel** để huỷ bỏ.
