---
id: "setting-agert"
title: "Tạo gói cài đặt Agent, cài đặt Agert"
description: "**Bước 1** : Chọn tab System Tree > New System: (cài trên máy chủ cần bảo vệ, hỗ trợ Windows, Linux và MAC OS)"
sidebar_label: "Tạo gói cài đặt Agent, cài đặt Agert"
sidebar_position: 3
---

# Setting Agert

**Bước 1** : Chọn tab System Tree > New System: (cài trên máy chủ cần bảo vệ, hỗ trợ Windows, Linux và MAC OS)
[![file](/img/migrated/image-1765765451271-e55af87a.png)](/img/migrated/image-1765765451271-e55af87a.png)
**Bước 2** : Copy URL mới được tạo
[![file](/img/migrated/image-1765765488808-7e2edd82.png)](/img/migrated/image-1765765488808-7e2edd82.png)
Windows-Agent URL:
<https://am.fptcloud.com:8443/ComputerMgmt/agentPackage.get?token=d0ace512f20025972b13c8554162e74fe3d6ecdc>
**Bước 3** : Truy cập URL > Install (Thao tác trên máy cần cài đặt Anti-Virus)
[![file](/img/migrated/image-1765765515152-5c9a5e0a.png)](/img/migrated/image-1765765515152-5c9a5e0a.png)
**Bước 4** : Click next/install và và chờ đến khi agent cài đặt xong.
[![file](/img/migrated/image-1765765529674-0b2d8afc.png)](/img/migrated/image-1765765529674-0b2d8afc.png)
**Bước 5** : Kiểm tra cài đặt, trạng thái agent. Kiểm tra biểu tượng mũi tên trên task bar nếu chưa có icon của Trellix, Chạy câu lệnh bên dưới, click “Collect and send Props, Send Events, Check New Policies.”
[![file](/img/migrated/image-1765765546061-9292647f.png)](/img/migrated/image-1765765546061-9292647f.png)
“C:\Program Files\McAfee\Agent\cmdagent.exe” -s
[![file](/img/migrated/image-1765765560155-94d9fac1.png)](/img/migrated/image-1765765560155-94d9fac1.png)
*Đối với Hệ điều hành linux: Tải về file script từ [Link cài đặt agent] 
<https://am.fptcloud.com:8443/ComputerMgmt/agentPackage.get?token=e50140e04eea0aa17f171feca9864bf06cedf0f4>
Sau khi wget thành công thực hiện đổi file name vừa wget được
`# mv [file vừa get được] trellix.sh`
`file agent (.sh file) thực hiện chạy file cài đặt .sh để cài đặt agent` `# sudo chmod +x ./trellix.sh`
`# sudo ./trellix.sh -i` (lưu ý: cần quyền root để chạy file cài đặt) 
[![file](/img/migrated/image-1765771828456-7265ceeb.png)](/img/migrated/image-1765771828456-7265ceeb.png)
`# sudo /opt/McAfee/cma/bin/cmdagent –f` (kiểm tra kết nối tới server)
Lưu ý sau khi thực hiện các thao tác trên, server Trellix sẽ tự động chạy các task cài đặt Endpoint Security (ngay lập tức) và cập nhật ENS (12AM). (Các task đã được setup sẵn trước khi cấp dịch vụ cho user, user có thể xem và tùy chỉnh các task gán cho cho client ở phần tiếp theo)