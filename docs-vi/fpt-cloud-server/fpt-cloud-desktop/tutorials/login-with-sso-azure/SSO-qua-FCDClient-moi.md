---
id: "SSO-qua-FCDClient-moi"
title: "Bước 1: Cài đặt FCDClient mới"
sidebar_label: "Bước 1: Cài đặt FCDClient mới"
sidebar_position: 2
---

Truy cập qua FCDClient mới


Dành cho trải nghiệm ổn định và đầy đủ tính năng nhất, cho phép thao tác trực tiếp trên ứng dụng.

# Bước 1: Cài đặt FCDClient mới
  * Chỉ cần làm một lần đầu tiên, những lần tiếp theo có thể truy cập thẳng từ ứng dụng FCDClient
  * Nếu đã cài đặt FCDClient mới từ trước đó, vui lòng bỏ qua bước này, chuyển sang [Bước 2: Truy cập máy ảo qua FCDClient mới](<https://fptcloud.com/documents/fpt-cloud-desktop/?doc=SSO-qua-FCDClient-moi#contentify_1> "Bước 2: Truy cập máy ảo qua FCDClient mới")


**1.Truy cập vào Homepage dịch vụ với URL phù hợp**

Các định dạng URL hợp lệ:

  * URL riêng của doanh nghiệp/tổ chức dùng cho FCD (quản trị viên khách hàng cung cấp cho người dùng)
  * URL đã chứa authentication code hợp lệ (định dạng code.domain). Ví dụ: pil783454741.pilotfcd.online
  * URL mặc định của dịch vụ


**Thông tin URL này do quản trị viên khách hàng cung cấp**

Truy cập đường link dịch vụ bằng trình duyệt web, chọn **Access through FPT Cloud Desktop Client**

![file](images/SSO-qua-FCDClient-moi/img-001.png)

**2.Tải xuống, cài đặt và mở ứng dụng FCD Client sau khi hoàn tất cài đặt**

Hệ thống sẽ tự động tải xuống bản Client mới nhất tương thích với hệ điều hành Windows (người dùng có thể chủ động cài đặt) Trường hợp tải xuống hiện cảnh báo trên Browser như hình dưới: ![file](images/SSO-qua-FCDClient-moi/img-002.png)

Chọn dấu ba chấm > **Keep** > **Keep anyway**

![file](images/SSO-qua-FCDClient-moi/img-003.png)

Sau khi việc tải xuống hoàn thành, tiến hành cài đặt ứng dụng: Chọn **Open file** để cài đặt ứng dụng vào thiết bị.

![file](images/SSO-qua-FCDClient-moi/img-004.png)

**Với Windows:** Tại Popup Windows protected your PC, chọn hyperlink "More info" và button "Run anyaway"

**Với MacOS:**

  * Kéo file cài đặt vào **"Application”**
  * Mở file cài đặt, Chọn button **"Open"** để xác nhận mở và cài đặt
  * Checked box **"Don't warn me when opening applications on this disk image"**


![file](images/SSO-qua-FCDClient-moi/img-005.png)

**⇒ Cài đặt FCD Client thành công. Sau khi cài đặt xong, người dùng mở ứng dụng FCDClient**

**Lưu ý với thiết bị hệ điều hành MacOS:**

  * Người dùng cần kiểm tra và cài đặt thêm ứng dụng Microsoft Windows App tại [Mac Apple Store](<https://apps.apple.com/us/app/windows-app/id1295203466?mt=12> "Mac Apple Store")


![file](images/SSO-qua-FCDClient-moi/img-006.png)

  * Nếu thiết bị hiện cảnh báo về ứng dụng FCDClient, truy cập Settings > Privacy & Security > Open Anyway với FCDClient


# Bước 2: Truy cập máy ảo qua FCDClient mới
**3\. Mở và thao tác với ứng dụng FCDClient trên máy tính**

Đăng nhập vào Authenticator (Server) phù hợp

1.Người dùng mở ứng dụng FCDClient đã cài đặt xong tại [Bước 1: Cài đặt FCDClient mới](<https://fptcloud.com/documents/fpt-cloud-desktop/?doc=SSO-qua-FCDClient-moi#contentify_0> "Bước 1: Cài đặt FCDClient mới")

  * **Nếu Client đã có sẵn thông tin Server** (do đã điền trước đó, hoặc tải xuống Client từ URL chứa authentication code hợp lệ): **Chọn Connect Server** và nhập thông tin tài khoản tương ứng tại mục 2 bên dưới ![file](images/SSO-qua-FCDClient-moi/img-007.png)

  * **Nếu Client hiển thị giao diện chưa có thông tin Server**: Cần tự điền thông tin Server muốn đăng nhập Chọn **New Server** > Nhập thông tin URL hoặc Domain hợp lệ (thông tin do quản trị viên khách hàng quản lý) Ví dụ cách nhập hợp lệ: Người dùng nhập thẳng URL hợp lệ pil783454741.pilotfcd.online **hoặc** nhập Domain pilotfcd.online trước, sau đó nhập Authentication code pil78345474


![file](images/SSO-qua-FCDClient-moi/img-008.png)

2.Đăng nhập bằng tài khoản SSO (ví dụ Đăng nhập bằng tài khoản Microsoft), nhập OTP tương ứng theo SSO => Đăng nhập Authenticator (Server) thành công

![file](images/SSO-qua-FCDClient-moi/img-009.png)

**4: Truy cập vào máy ảo**

Tại màn hình danh sách các máy ảo, chọn truy cập vào máy ảo mong muốn

![file](images/SSO-qua-FCDClient-moi/img-010.png)

Nhập thông tin đăng nhập vào máy ảo nếu hệ thống yêu cầu => Truy cập máy ảo thành công


Các tính năng khác trên FCDClient mới:

**\- Auto-connect Server:** Cho phép truy cập thẳng vào Authenticator khi ở ứng dụng FCDClient (Chỉ áp dụng khi vào thẳng ứng dụng, chưa hỗ trợ khi vào qua Access through FCDClient trên Homepage)

**\- Settings:** Cho phép xem thông tin FCDClient đã cài

**\- New server:** Người dùng chủ động thêm thông tin (Authenticator) Server mới

")
