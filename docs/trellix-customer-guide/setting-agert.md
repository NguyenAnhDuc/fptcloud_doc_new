---
id: "setting-agert"
title: "Set Up Agent Installation Package"
description: "Hướng dẫn tạo gói cài đặt Trellix agent và triển khai trên máy chủ Windows, Linux hoặc macOS."
sidebar_label: "Set Up Agent Installation Package"
sidebar_position: "3"
---

# Set Up Agent Installation Package and Install Agent

Agent là thành phần phần mềm được cài đặt trên từng máy chủ cần bảo vệ, cho phép server Trellix giám sát và triển khai chính sách bảo mật từ xa. Hỗ trợ Windows, Linux và macOS.

## Cài đặt trên Windows

1. Trong giao diện quản trị, chọn **System Tree** > **New System**.

   [![Giao diện System Tree với tùy chọn New System](/img/migrated/image-1765765451271-e55af87a.png)](/img/migrated/image-1765765451271-e55af87a.png)

2. Sao chép URL vừa được tạo.

   [![URL cài đặt agent vừa được tạo](/img/migrated/image-1765765488808-7e2edd82.png)](/img/migrated/image-1765765488808-7e2edd82.png)

   Ví dụ Windows Agent URL:
   ```
   https://am.fptcloud.com:8443/ComputerMgmt/agentPackage.get?token=d0ace512f20025972b13c8554162e74fe3d6ecdc
   ```

3. Trên máy cần cài đặt Anti-Virus, mở trình duyệt và truy cập URL trên, sau đó chọn **Install**.

   [![Trang cài đặt agent Trellix trên Windows](/img/migrated/image-1765765515152-5c9a5e0a.png)](/img/migrated/image-1765765515152-5c9a5e0a.png)

4. Làm theo hướng dẫn cài đặt (Next/Install) và chờ đến khi agent cài đặt xong.

   [![Quá trình cài đặt agent Trellix trên Windows](/img/migrated/image-1765765529674-0b2d8afc.png)](/img/migrated/image-1765765529674-0b2d8afc.png)

5. Kiểm tra trạng thái agent. Nếu chưa thấy icon Trellix trên task bar, chạy lệnh sau rồi chọn **Collect and send Props**, **Send Events**, **Check New Policies**.

   [![Icon Trellix agent trên task bar Windows](/img/migrated/image-1765765546061-9292647f.png)](/img/migrated/image-1765765546061-9292647f.png)

   ```
   "C:\Program Files\McAfee\Agent\cmdagent.exe" -s
   ```

   [![Giao diện cmdagent để kiểm tra kết nối agent](/img/migrated/image-1765765560155-94d9fac1.png)](/img/migrated/image-1765765560155-94d9fac1.png)

## Cài đặt trên Linux

1. Tải file script agent từ URL cài đặt:

   ```
   https://am.fptcloud.com:8443/ComputerMgmt/agentPackage.get?token=e50140e04eea0aa17f171feca9864bf06cedf0f4
   ```

2. Đổi tên file vừa tải về:

   ```bash
   mv <file_vừa_tải> trellix.sh
   ```

3. Cấp quyền và chạy file cài đặt (yêu cầu quyền root):

   ```bash
   sudo chmod +x ./trellix.sh
   sudo ./trellix.sh -i
   ```

   [![Quá trình cài đặt agent Trellix trên Linux](/img/migrated/image-1765771828456-7265ceeb.png)](/img/migrated/image-1765771828456-7265ceeb.png)

4. Kiểm tra kết nối tới server:

   ```bash
   sudo /opt/McAfee/cma/bin/cmdagent -f
   ```

:::note
Sau khi cài đặt agent thành công, server Trellix sẽ tự động triển khai Endpoint Security (ngay lập tức) và cập nhật ENS (lúc 12AM). Các task này đã được thiết lập sẵn trước khi cấp dịch vụ. Bạn có thể xem và tùy chỉnh các task trong phần [Quản lý client tasks](./client-task).
:::
