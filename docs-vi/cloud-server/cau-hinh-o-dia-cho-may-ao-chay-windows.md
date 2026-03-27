---
id: "cau-hinh-o-dia-cho-may-ao-chay-windows"
title: "Cấu hình ổ đĩa cho máy ảo chạy Windows"
description: "Sau khi gắn **Storage Disk** vào máy ảo trên **FPT Portal** , với các máy chạy Linux, hệ thống sẽ tự nhận ổ đĩa mới. Với"
sidebar_label: "Cấu hình ổ đĩa cho máy ảo chạy Windows"
sidebar_position: 37
---

# Cau Hinh O Dia Cho May Ao Chay Windows

Sau khi gắn **Storage Disk** vào máy ảo trên **FPT Portal** , với các máy chạy Linux, hệ thống sẽ tự nhận ổ đĩa mới. Với các máy chạy Windows, người dùng cần remote vào máy ảo để tiếp tục cấu hình tạo ổ đĩa. 
**Bước 1:** Truy cập vào máy ảo. 
**Bước 2:** Mở **Disk Management** trên **Windows** bằng một trong 2 cách: 
  * Bấm tổ hợp phím **Windows + R** , nhập **msc** và **Enter.**
  * Bấm nút **Start** , nhập **msc** vào ô tìm kiếm, chọn **Disk Management.**

[![Userguide FPT Cloud Server 2022 62](/img/migrated/Userguide-FPT-Cloud-Server-2022-62-12b5cc80.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-62-12b5cc80.png)
**Bước 3:** **Disk Management** sẽ hiển thị toàn bộ ổ cứng trên máy ảo, bao gồm cả ổ cứng vừa được gắn với trạng thái **Offline.**
[![Userguide FPT Cloud Server 2022 63](/img/migrated/Userguide-FPT-Cloud-Server-2022-63-8bb2c4a2.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-63-8bb2c4a2.png)
**Bước 4:** Chọn **Online** trên menu **Disk** bằng cách di chuột phải lên biểu tượng đĩa. 
[![Userguide FPT Cloud Server 2022 64](/img/migrated/Userguide-FPT-Cloud-Server-2022-64-9b1d70d8.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-64-9b1d70d8.png)
**Bước 5:** Ổ cứng sẽ chuyển sang trạng thái **Online** và **Not Initialize** , người dùng chuột phải lên biểu tượng đĩa và chọn **Initialize Disk**. 
[![Userguide FPT Cloud Server 2022 65](/img/migrated/Userguide-FPT-Cloud-Server-2022-65-e709db22.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-65-e709db22.png)
**Bước 6** : Chọn **Partition style** phù hợp và chọn **OK.**
[![Userguide FPT Cloud Server 2022 66](/img/migrated/Userguide-FPT-Cloud-Server-2022-66-9e4f3cf7.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-66-9e4f3cf7.png)
**Bước 7:** Chuột phải lên khi vực trống của ổ cứng và chọn **New Simple Volume.**
[![Userguide FPT Cloud Server 2022 67](/img/migrated/Userguide-FPT-Cloud-Server-2022-67-b8dd64a9.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-67-b8dd64a9.png)
**Bước 8:** Chọn 
[![Userguide FPT Cloud Server 2022 68](/img/migrated/Userguide-FPT-Cloud-Server-2022-68-4a3afeda.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-68-4a3afeda.png)
**Bước 9:** Nhập dung lượng ổ đĩa cần tạo vào ô **Simple volume size in MB** và chọn **Next.**
[![Userguide FPT Cloud Server 2022 69](/img/migrated/Userguide-FPT-Cloud-Server-2022-69-0738799f.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-69-0738799f.png)
**Bước 10:** Chọn Ký tự ổ đĩa trong phần **Assign the following drive letter** và chọn **Next.**
[![Userguide FPT Cloud Server 2022 70](/img/migrated/Userguide-FPT-Cloud-Server-2022-70-ae6b0747.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-70-ae6b0747.png)
**Bước 11:** Chọn **Fomat this volume with the following settings** và điền các thông tin sau: 
  * **File System:** Chọn định dạng NTFS để quá trình định dạng được nhanh nhất, bạn cũng có thể chọn type khác nếu muốn.
  * **Allocation unit size:** Chọn Default
  * **Volume label:** Tên cho ổ đĩa.

Chọn 
[![Userguide FPT Cloud Server 2022 71](/img/migrated/Userguide-FPT-Cloud-Server-2022-71-62391f50.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-71-62391f50.png)
**Bước 12:** Chọn **Finish** để kết thúc. 
[![Userguide FPT Cloud Server 2022 72](/img/migrated/Userguide-FPT-Cloud-Server-2022-72-cdffbf96.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-72-cdffbf96.png)
Kết quả đã cấu hình tạo thành công ổ đĩa mới cho máy ảo chạy Windows từ ổ cứng gắn thêm.
[![Userguide FPT Cloud Server 2022 73](/img/migrated/Userguide-FPT-Cloud-Server-2022-73-0c897005.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-73-0c897005.png)
Từ Bước 1 đến Bước 6 người dùng có thể thay thế bằng các lệnh CMD sau nếu không thể thao tác bằng cách thông thường:   
Vào Start > cmd (Run as administrator)  
|   |  
| --- |  
| Diskpart list disk select disk online disk attributes disk clear readonly Exit  |  
Sau đó tiếp tục từ Bước 7 theo hướng dẫn bên trên.