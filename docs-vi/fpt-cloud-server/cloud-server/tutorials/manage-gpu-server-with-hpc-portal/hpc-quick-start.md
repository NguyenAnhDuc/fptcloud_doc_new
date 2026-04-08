---
id: "hpc-quick-start"
title: "Hướng dẫn nhanh HPC"
sidebar_label: "Hướng dẫn nhanh HPC"
sidebar_position: 2
---

# Hướng dẫn nhanh HPC


Để khởi tạo và sử dụng GPU Server tại HPC Portal, vui lòng thực hiện theo hướng dẫn sau:

**Bước 1**: Đăng nhập

Để có thể đăng nhập và khởi tạo máy tại HPC Portal, vui lòng liên hệ quản trị viên để phân quyền và cấp tài nguyên cho tài khoản nnngư.

Sau khi được cấp tài nguyên, truy cập [HPC Portal](<https://hpc.fptcloud.com/>) qua đường dẫn <https://hpc.fptcloud.com> và đăng nhập vào hệ thống bằng tài khoản FPT ID

![P3UAVy+4k08NAAAAAElFTkSuQmCC](images/hpc-quick-start/img-001.png)

**Bước 2**: Tạo image

Truy cập Hosts > Create image để thực hiện tạo image máy GPU mới

![](images/hpc-quick-start/img-002.png)

Sau đó, lựa chọn cấu hình server bạn muốn dùng, tiến hành đặt tên, chọn loại hệ thống Windows hay Linux, rồi chọn **Continue** > **Create Image**.

![](images/hpc-quick-start/img-003.png)

**Bước 3**: Khởi động máy remote – boot machine

Sau khi đã tạo image thành công, bạn click vào **Boot ready** chọn tiếp **BOOT MACHINE** và đợi trong 10-15 phút để khởi động máy.

Thời gian boot máy sẽ phụ thuộc vào kích thước image (Image Size – Là tất cả những gì bạn đã cài đặt trên server của chúng tôi)

![wFsj+JD2bOR9gAAAABJRU5ErkJggg==](images/hpc-quick-start/img-004.png)

**Bước 4**: Kết nối tới máy remote

Có 2 cách để kết nối tới máy đã được tạo và boot lên:

**Cách 1**: ssh vào máy, thông tin đăng nhập như sau:

– Username: adminstrator

– Mật khẩu: Mật khẩu cấp 2 mà người dùng đã thiết lập

**Cách 2**: Sử dụng remote desktop:

Sau khi boot máy thành công, giao diện người dùng sẽ xuất hiện nút **Connect** như hình bên dưới.


:::warning
Hệ thống sẽ bắt đầu tính phí từ thời điểm nút Connect hiển thị trên giao diện, cho tới khi bạn chọn nút Shutdown, hệ thống sẽ dừng tính tiền.
:::


Để kết nối vào máy, bạn click vào nút Connect và tải về file Remote Desktop Connection (.RDP), sau đó mở file RDP này, nhập mật khẩu tài khoản của bạn để đăng nhập vào máy.

Nếu bạn đang dùng hệ điều hành macOS, để mở được file .RDP bạn cần cài đặt ứng dụng [Microsoft Remote Desktop](<https://apps.apple.com/vn/app/microsoft-remote-desktop-10/id1295203466?l=vi&mt=12>) này.

![Aa4Ery4edUEoAAAAAElFTkSuQmCC](images/hpc-quick-start/img-005.png)

**Bước 5**: Chuyển dữ liệu vào máy – lấy kết quả

Người dùng có thể sử dụng các phần mềm chuyển file online để chuyển dữ liệu cần xử lý vào máy như Google Drive, Dropbox, …

Tiếp theo, người dùng cài đặt các phần mềm cần thiết để sử dụng máy, sau đó tiếp tục sử dụng các phần mềm chuyển file online để lấy file kết quả về máy tính cá nhân của người dùng.

**Lưu ý:** Bạn sẽ chỉ cần cài đặt phần mềm **một lần duy nhất**, hệ thống HPC sẽ lưu lại môi trường làm việc của bạn sau mỗi lần bạn shut down máy, và do vậy, lần sau bạn sẽ không cần cài đặt lại bất cứ thứ gì.

![2023 04 05 Remote window](images/hpc-quick-start/img-006.jpg)

**Bước 6**: Tắt máy

Sau khi sử dụng máy xong và chuyển files kết quả về máy tính cá nhân, bạn phải tắt máy để hệ thống ngừng tính tiền.

Để tắt máy, vui lòng chọn nút Shutdown trên trang HPC Portal, hệ thống sẽ lưu lại toàn bộ cài đặt máy sau khi người dùng thực hiện tắt.

![](images/hpc-quick-start/img-007.png)

Nếu bạn muốn đặt lịch tắt server của mình vào một thời điểm nhất định trong tương lai, chọn nút **Schedule** để lên lịch thời gian tắt.


:::warning
Không để tài khoản bị hết tiền khi đang sử dụng server vì khi đó server sẽ tự động shutdown và có thể ảnh hưởng đến kết quả công việc, đặc biệt là khi bạn đang render video.
:::
