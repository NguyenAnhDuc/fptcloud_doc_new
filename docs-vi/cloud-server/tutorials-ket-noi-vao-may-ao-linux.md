---
id: "tutorials-ket-noi-vao-may-ao-linux"
title: "Kết nối vào máy ảo Linux"
sidebar_label: "Kết nối vào máy ảo Linux"
sidebar_position: 13
---

# Kết nối vào máy ảo Linux


Khi một máy ảo nhân Linux (Ubuntu, CentOS, Debian) được tạo thành công trên FPT Portal, người dùng mặc định có thể dùng Web Console được cung cấp sẵn để truy cập.

Ngoài ra người dùng còn có thể đăng nhập từ bên ngoài bằng các SSH Client hoặc phần mềm bên thứ 3 như PuTTY, Bitvise.

## Kết nối vào máy ảo Linux bằng Web Console
**Web Console** hỗ trợ điều khiển tất cả các máy ảo **Linux** trên **FPT Cloud**, kể cả máy ảo chưa được gắn với **Public IP**.

Ở menu chọn **Instance Management**, trong phần **Actions** của máy ảo cần kết nối, chọn **Console**.

![Userguide FPT Cloud Server 2022 22](images/tutorials-ket-noi-vao-may-ao-linux/img-001.png)

Ngay lập tức trình duyệt sẽ mở 1 cửa sổ mới chứa màn hình của máy chủ, từ màn hình này người dùng có thể toàn quyền điều khiển và thao tác với máy chủ đang kết nối.

![Userguide FPT Cloud Server 2022 28](images/tutorials-ket-noi-vao-may-ao-linux/img-002.png)

## Cấu hình để kết nối tới máy ảo Linux từ xa
Để kết nối vào các máy ảo nhân **Linux** (**Ubuntu**, **CentOS**,..) bằng **SSH Client**, **Bitvise**, **PuTTY**,... Máy ảo cần được gắn **Floating IP** và đã mở port **SSH** cho **SSH Connection**. **FPT Cloud** hỗ trợ mở port cho máy ảo bằng cách gắn một **Security Group**.

**Bước 1**: Khởi tạo 1 máy ảo hệ điều hành **Linux**, gắn **Floating IP** theo hướng dẫn ở phần [**Quản lý Floating IP**](<https://fptcloud.com/documents/cloud-server/?doc=quan-ly-floating-ip>) và khởi chạy.

![Userguide FPT Cloud Server 2022 29](images/tutorials-ket-noi-vao-may-ao-linux/img-003.png)

**Bước 2**: Gắn vào máy ảo một **Security Group** đã mở port **SSH**, nếu chưa có **Security Group** có thể tạo mới theo hướng dẫn ở phần [**Quản lý Security Group**](<https://fptcloud.com/documents/cloud-server/?doc=quan-ly-security-group>)

![file](images/tutorials-ket-noi-vao-may-ao-linux/img-004.png)

**Bước 3**: Sau khi cấu hình thành công, người dùng có thể connect vào máy ảo từ các SSH Client bằng các thông tin: **Floating IP**, **Port SSH**, file **SSH Key** hoặc **Password.**

Nếu vẫn không thể kết nối được, người dùng nên kiểm tra lại máy ảo đã bật chưa, Floating IP có chính xác không và mở lại port **SSH** theo các hướng dẫn ở phần [**Quản lý Security Group**](<https://fptcloud.com/documents/cloud-server/?doc=quan-ly-security-group>).

## Kết nối với máy ảo Linux bằng SSH Client
Người dùng có thể dùng các SSH client có sẵn trên Windows như **cmd.exe**, **PowerShell** để SSH vào máy ảo.

**Bước 1:** Mở **CMD** hoặc **Power Shell** trên Windows.

**Bước 2:** Nếu người dùng kết nối bằng **Password**, hãy sử dụng câu lệnh sau:

`ssh <>@<>`

![Userguide FPT Cloud Server 2022 32](images/tutorials-ket-noi-vao-may-ao-linux/img-005.png)

Nếu kết nối thông qua cặp SSH Key, đầu tiên người dùng cần di chuyển đến thư mục chứa file **SSH key** bằng lệnh cd :

`cd <<Đường dẫn đến thư mục chứa file pem>>`

![Userguide FPT Cloud Server 2022 33](images/tutorials-ket-noi-vao-may-ao-linux/img-006.png)

Sau đó kết nối đến máy ảo bằng câu lệnh:

`ssh -i "<>" << Username >>@<>`

**Bước 3:** Nếu đây là lần đầu tiên kết nối đến máy ảo, người dùng sẽ được nhắc nhở xác minh **Hosts fingerprint**. Để đồng ý và tiếp tục kết nối, nhập **“yes”**

![Userguide FPT Cloud Server 2022 34](images/tutorials-ket-noi-vao-may-ao-linux/img-007.png)

Đã kết nối thành công vào máy chủ bằng SSH client.

![Userguide FPT Cloud Server 2022 35](images/tutorials-ket-noi-vao-may-ao-linux/img-008.png)

**Lưu ý:** Nếu người dùng gặp lỗi **WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!**
Hãy dùng câu lệnh sau để xóa Hosts fingerprint đã lưu trước đó và thao tác lại từ đầu
`ssh-keygen -R "<>"`

vào máy ảo")
