---
id: "khoi-tao-listener"
title: "Khởi tạo Listener"
description: "**Listener** là thành phần quan trọng lắng nghe các yêu cầu từ client và điều hướng chúng đến các máy chủ đích phù hợp, "
sidebar_label: "Khởi tạo Listener"
sidebar_position: "12"
---

# Khoi Tao Listener

**Listener** là thành phần quan trọng lắng nghe các yêu cầu từ client và điều hướng chúng đến các máy chủ đích phù hợp, bao gồm các thông tin về giao thức, cổng dịch vụ cùng các thông số chi tiết khác. Nó cho phép bạn cấu hình cách **Load Balancer** lắng nghe và định tuyến lưu lượng truy cập đến các ứng dụng hoặc dịch vụ cụ thể trên máy chủ backend.
**1.** **Tạo Listener**
**Listener** được tạo cùng **Load Balancer** khi tạo **Load Balancer**
Để tạo thêm **Listener** cho **Load Balancer,** bạn thao tác theo hướng dẫn sau:
**Bước 1:** Truy cập vào trang **Load Balancer Details,** chọn tên **Load Balancer** tương ứng trên bảng quản trị **Load Balancer Management.**
**Bước 2:** Chọn tab **Listener,** tiếp theo ấn chọn **Create Listener**
**Bước 3:** Tại đây người dùng nhập thông tin cho **Listener.**
  * **Listener name:** Nhập tên cho **Listener.**
  * **Description:** Nhập mô tả cho **Listener.**
  * **Protocol:** Chọn giao thức sử dụng **HTTP/ TERMINATED_HTTPS/ TCP /UDP** (mặc định hiển thị là HTTP và Port 80)
  * **Server pool:** Trong trường hợp các request đến **Listener** nằm ngoài danh sách **Policies** được cấu hình, các request này sẽ được chuyển hướng đến Pool mặc định để xử lý.
  * **Client data timeout (ms):** Thời gian tối đa mà Load Balancer cho phép một khách hàng (client) duy trì kết nối đến nó mà không thực hiện bất kỳ yêu cầu (request) nào, mặc định là 50000 (tính theo ms).
  * **Member connect timeout (ms):** Thời gian tối đa mà Load Balancer cho phép một máy chủ thành viên (member) trong nhóm máy chủ backend duy trì một kết nối mở mà không nhận được dữ liệu từ nó, mặc định là 5000(tính theo ms).
  * **Member data timeout (ms):** Thời gian tối đa mà Load Balancer cho phép một máy chủ thành viên(member) duy trì kết nối đến nó mà không thực hiện bất kỳ yêu cầu (request) nào, mặc định là 5000(tính theo ms). 
  * **TCP inspect timeout (ms):** Thời gian chờ tối đa mà bộ định tuyến hoặc thiết bị bảo mật chờ đợi để nhận được phản hồi từ máy chủ đích trong quá trình kiểm tra TCP, mặc định là 0.
  * **Connection limit:** Giới hạn số lượng kết nối đồng thời mà dịch vụ cân bằng tải (load balancer) có thể xử lý. Giới hạn này giúp đảm bảo dịch vụ không bị quá tải và có thể hoạt động ổn định, mặc định hiển thị là -1 (kết nối vô hạn).
  * **HTTP Header insertions:** Mặc định điền sẵn **X-Forwarded-For, X-Forwarded-Proto, X-Forwarded-Port** , có thể bỏ chọn Header nếu không có nhu cầu. 
    * **X-Forwarded-For:** When "true" a X-Forwarded-For header is inserted into the request to the backend member that specifies the client IP address.
    * **X-Forwarded-Port:** When "true" a X-Forwarded-Port header is inserted into the request to the backend member that specifies the listener port.
    * **X-Forwarded-Proto:** When "true" a X-Forwarded-Proto header is inserted into the request to the backend member.

Nhấn **Create Listener** để thực hiện tạo hoặc **Cancel** để huỷ bỏ.
**2. Update Listener**
**Bước 1:** Tại màn hình hiển thị danh sách **Listener,** chọn **Listener** cần cập nhật.
**Bước 2:** Tại đây người dùng được update các thông tin sau:
  * **Listener name:** Nhập tên cho **Listener.**
  * **Description:** Nhập mô tả cho **Listener.**
  * **Server pool:** Trong trường các request đến **Listener** nằm ngoài danh sách **Policies** được cấu hình, các request này sẽ được chuyển hướng đến Pool mặc định để xử lý.
  * **Client data timeout (ms):** Thời gian tối đa mà Load Balancer cho phép một khách hàng (client) duy trì kết nối đến nó mà không thực hiện bất kỳ yêu cầu (request) nào, mặc định là 50000 (tính theo ms).
  * **Member connect timeout (ms)** :Thời gian tối đa mà Load Balancer cho phép một máy chủ thành viên (member) trong nhóm máy chủ backend duy trì một kết nối mở mà không nhận được dữ liệu từ nó, mặc định là 5000(tính theo ms).
  * **Member data timeout (ms):** Thời gian tối đa mà Load Balancer cho phép một máy chủ thành viên(member) duy trì kết nối đến nó mà không thực hiện bất kỳ yêu cầu (request) nào, mặc định là 5000(tính theo ms). 
  * **TCP inspect timeout (ms):** Thời gian chờ tối đa mà bộ định tuyến hoặc thiết bị bảo mật chờ đợi để nhận được phản hồi từ máy chủ đích trong quá trình kiểm tra TCP**,** mặc định là 0.
  * **Connection limit:** Giới hạn số lượng kết nối đồng thời mà dịch vụ cân bằng tải (load balancer) có thể xử lý. Giới hạn này giúp đảm bảo dịch vụ không bị quá tải và có thể hoạt động ổn định, mặc định hiển thị là -1 (kết nối vô hạn).

Nhấn **Update Listener** để thực hiện cập nhật hoặc **Cancel** để huỷ bỏ.
**3.Xoá Listener**
**Bước 1:** Tại màn hình hiển thị danh sách **Listener,** trong phần **Action** của **Listener** cần xoá, chọn **Delete**.
**Bước 2:** Một hộp thoại cảnh báo sẽ hiện lên, hiển thị tên **Listener** và yêu cầu người dùng xác nhận. Gõ chữ **delete** và chọn **Delete Listener** để tiến hành xóa.
