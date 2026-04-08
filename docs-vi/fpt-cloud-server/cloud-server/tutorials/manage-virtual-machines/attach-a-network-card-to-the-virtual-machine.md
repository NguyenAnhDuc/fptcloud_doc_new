---
id: "attach-a-network-card-to-the-virtual-machine"
title: "Gắn thêm card mạng vào máy ảo"
sidebar_label: "Gắn thêm card mạng vào máy ảo"
sidebar_position: 5
---

# Gắn thêm card mạng vào máy ảo


Bạn có thể gắn tối đa 10 card mạng vào một máy ảo. Để gắn thêm card mạng vào máy ảo bạn thao tác như sau:

**Bước 1**: Trên menu chọn **Compute Engine** > **Instance Management**. Chọn máy ảo cần gắn **Subnet** để vào trang **Instance Detail**.

![file](images/attach-a-network-card-to-the-virtual-machine/img-001.png)

**Bước 2**: Mở tab **Network Interface**. Hệ thống sẽ hiển thị danh sách các card mạng đang được gắn với máy ảo cũng như thông tin của **Subnet** mà card mạng ấy đang kết nối đến. Chọn **Add NIC**.

![file](images/attach-a-network-card-to-the-virtual-machine/img-002.png)

**Bước 3**: Chọn **Subnet** trong **VPC** cần gắn với máy ảo. Chọn **Add NIC** để xác nhận.

![file](images/attach-a-network-card-to-the-virtual-machine/img-003.png)

Hệ thống sẽ xử lý và thông báo kết quả.

Nếu thành công, card mạng mới sẽ được hiển thị ở bảng **Network**.

![file](images/attach-a-network-card-to-the-virtual-machine/img-004.png)

Sau khi add ở FPT Portal, thường thì các máy ảo Windows và Linux sẽ tự động nhận card mạng mới, người dùng sẽ không cần thực hiện bất kỳ cấu hình thủ công nào.

Tuy nhiên, trong một số trường hợp nếu người dùng Linux đang thực hiện một thao tác nào đó trên máy ảo hoặc có lỗi từ Hệ điều hành thì card mạng có thể sẽ không hiển thị. Bạn hãy khởi động lại máy để các config có hiệu lực. Nếu vẫn chưa được khắc phục bạn hãy cài đặt thủ công theo hướng dẫn sau:

### Xem địa chỉ IP hiện tại
Để xem địa chỉ IP hiện tại của máy, người dùng Linux có thể sử dụng một trong các câu lệnh sau:
[code]
    Copy$ ip a
[/code]

Hoặc
[code]
    Copy$ ip addr
[/code]

![file](images/attach-a-network-card-to-the-virtual-machine/img-005.png)

### Đặt địa chỉ IP tĩnh
Ubuntu 20.04 sử dụng netplan làm trình quản lý mạng mặc định. Tệp cấu hình cho netplan được lưu trữ trong thư mục / etc / netplan . Bạn có thể tìm thấy tệp cấu hình này được liệt kê trong thư mục / etc / netplan lệnh sau:
[code]
    Copy$ ls / etc / netplan
[/code]

Lệnh trên sẽ trả về tên của tệp cấu hình có phần mở rộng .yaml, trong trường hợp ví dụ dưới đây là 01-network-manager-all.yaml.

Trước khi thực hiện bất kỳ thay đổi nào đối với tệp này, cần đảm bảo tạo một bản sao lưu của tệp. Sử dụng lệnh cp để làm như vậy:
[code]
    Copy$ sudo cp / etc / netplan / 01-network- manager- all .yaml 01-network- manager- all .yaml.ba
[/code]

Lưu ý: có thể có tệp cấu hình có tên không phải là 01-network-manager-all.yaml. Vì vậy, người dùng cần sử dụng đúng tên tệp cấu hình trong các lệnh.

Sau đó, thêm các dòng sau bằng cách thay thế tên giao diện, địa chỉ IP, cổng và thông tin DNS phù hợp với nhu cầu mạng.

![file](images/attach-a-network-card-to-the-virtual-machine/img-006.png)

khỏi máy ảo")
