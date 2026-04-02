---
id: "khoi-tao-profile"
title: "Khởi tạo Profile"
description: "Hướng dẫn khởi tạo Autoscale Profile trên FPT Autoscale."
sidebar_label: "Khởi tạo Profile"
sidebar_position: 3
---

# Khởi tạo Profile

1. Truy cập trang **Autoscaling > Autoscale Profile**. Chọn **Create profile**.

   [![Nút Create profile](/img/migrated/Screenshot-2024-09-30-141746-e33a4741.png)](/img/migrated/Screenshot-2024-09-30-141746-e33a4741.png)

2. Cấu hình các thông số kỹ thuật.

   [![Trang khởi tạo Profile](/img/migrated/screencapture-console-fptcloud-000823-IN-44f85951.png)](/img/migrated/screencapture-console-fptcloud-000823-IN-44f85951.png)

   **General information**

   Nhập tên profile sao cho dễ quản lý. Tên không vượt quá 80 ký tự, bao gồm các ký tự chữ cái latin, số, dấu gạch dưới, dấu gạch nối và dấu chấm.

   **Image**

   Các OS Family được cung cấp sẵn bao gồm: Ubuntu, Windows, CentOS, Debian. Mỗi nhóm OS gồm nhiều bản phân phối khác nhau.

   Nhóm Custom thường được ưu tiên sử dụng, gồm các image đã được người dùng tùy biến và cấu hình ứng dụng phù hợp với nhu cầu.

   **Credentials**

   Các hình thức xác thực được hỗ trợ:

   - Password.
   - None: Chọn _None_ nếu không có nhu cầu xác thực khi truy cập.

   Nếu image thuộc nhóm Custom, phương thức xác thực đã được cấu hình sẵn trong image và không cần thay đổi thêm.

   **Resource**

   - CPU & RAM: Chọn thông số phù hợp dựa trên các mẫu được cung cấp.
   - Storage: Chọn loại ổ đĩa và dung lượng phù hợp. Mặc định là Premium-SSD, tối thiểu 40 GB.

   :::note
   Dung lượng tối thiểu được đề xuất dựa trên thông số image được chọn. Giảm dung lượng ổ đĩa xuống dưới mức yêu cầu của image có thể dẫn đến lỗi không mong muốn.
   :::

   **Network**

   Chọn subnet và security group phù hợp trong VPC. Subnet và security group cần được khởi tạo sẵn trước khi tạo profile.

   **Advanced setting**

   Nhập đoạn mã [cloud-init](https://cloudinit.readthedocs.io/en/latest/topics/examples.html) nếu cần. Khi một node khởi động, cloud-init đọc các metadata từ cloud và khởi tạo hệ thống dựa trên chúng. Cloud-init thường dùng để setup network, storage, SSH public key và các thành phần khác của hệ thống.

   Ví dụ: Script mẫu dưới đây cài đặt các gói cần thiết, clone một static website từ GitHub và khởi động máy chủ nginx. Để xem kết quả, cấp phát Floating IP cho node và truy cập website qua Floating IP đó.

   ```yaml
   # Update apt database on first boot
   package_update: true

   packages:
     - nginx
     - git

   runcmd:
     - systemctl enable nginx
     - systemctl start nginx
     - git clone https://github.com/cloudacademy/static-website-example.git
     - cp -r ./static-website-example/* /var/www/html/
     - rm -r ./static-website-example
   ```

   :::warning
   Tránh sử dụng thông tin nhạy cảm trong script như: password, token, secret key, thông tin cá nhân.
   :::

3. Chọn **Create profile** để xác nhận.

   Sau khi tạo thành công, profile hiển thị trong danh sách các profile hiện có.

   [![Danh sách profile sau khi tạo](/img/migrated/Screenshot-2024-09-30-172521-27261ff1.png)](/img/migrated/Screenshot-2024-09-30-172521-27261ff1.png)

   Xem thông tin chi tiết của profile bằng cách nhấn vào tên profile trong danh sách:

   [![Nhấn vào tên profile để xem chi tiết](/img/migrated/Screenshot-2024-10-01-164339-e3a959ae.png)](/img/migrated/Screenshot-2024-10-01-164339-e3a959ae.png)

   [![Trang chi tiết Profile](/img/migrated/screencapture-console-fptcloud-000823-IN-5d746d0a.png)](/img/migrated/screencapture-console-fptcloud-000823-IN-5d746d0a.png)

   :::note
   Hiện chưa hỗ trợ thay đổi thông số kỹ thuật của profile nhằm đảm bảo tính nhất quán cho việc tham chiếu cấu hình. Tuy nhiên, bạn có thể đổi tên profile bất kỳ lúc nào.
   :::
