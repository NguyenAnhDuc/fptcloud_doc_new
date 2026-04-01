---
id: "SSO-qua-FCDClient-moi"
title: "**Bước 1: Cài đặt FCDClient mới**"
sidebar_label: "**Bước 1: Cài đặt FCDClient mới**"
sidebar_position: "5"
---

# **Step 1: Cài đặt FCDClient mới**

Dành for trải nghiệm ổn định and đầy đủ feature nhất, for phép thao tác trực tiếp trên ứng dụng.
  * Chỉ need to làm a lần đầu tiên, những lần tiếp theo can truy cập thẳng from ứng dụng FCDClient
**1.Access Homepage service with URL phù hợp**
Các định dạng URL hợp lệ:
  * URL riêng of doanh nghiệp/tổ chức dùng for FCD (quản trị viên customer cung cấp for user)
  * URL has been chứa authentication code hợp lệ (định dạng code.domain). Example: pil783454741.pilotfcd.online
  * URL mặc định of service

**Thông tin URL this do quản trị viên customer cung cấp**
Truy cập đường link service bằng trình duyệt web, chọn **Access through FPT Cloud Desktop Client**
[![file](/img/migrated/image-1767859575680-f5ed3897.png)](/img/migrated/image-1767859575680-f5ed3897.png)
**2.Tải xuống, cài đặt and mở ứng dụng FCD Client after hoàn tất cài đặt**
Hệ thống will tự động tải xuống bản Client mới nhất tương thích with hệ điều hành Windows (user can chủ động cài đặt) Trường hợp tải xuống hiện alert trên Browser như hình dưới: [![file](/img/migrated/image-1767859694792-be1aa0bc.png)](/img/migrated/image-1767859694792-be1aa0bc.png)
Chọn dấu ba chấm > **Keep** > **Keep anyway**
[![file](/img/migrated/image-1767859804851-972a2244.png)](/img/migrated/image-1767859804851-972a2244.png)
Sau when việc tải xuống hoàn thành, tiến hành cài đặt ứng dụng: Select **Open file** to cài đặt ứng dụng ando thiết bị.
[![file](/img/migrated/image-1767859882851-7f4cfd99.png)](/img/migrated/image-1767859882851-7f4cfd99.png)
**Với Windows:** Tại Popup Windows protected your PC, chọn hyperlink "More info" and button "Run anyaway"
**Với MacOS:**
  * Kéo file cài đặt ando **"Application”**
  * Mở file cài đặt, Chọn button **"Open"** to confirm mở and cài đặt
  * Checked box **"Don't warn me when opening applications on this disk image"**

[![file](/img/migrated/image-1767859982299-d48afcb4.png)](/img/migrated/image-1767859982299-d48afcb4.png)
**⇒ Cài đặt FCD Client successfully. Sau when cài đặt xong, user mở ứng dụng FCDClient**
**Save ý with thiết bị hệ điều hành MacOS:**
  * Người dùng need to kiểm tra and cài đặt thêm ứng dụng Microsoft Windows App tại [Mac Apple Store](https://apps.apple.com/us/app/windows-app/id1295203466?mt=12 "Mac Apple Store")

[![file](/img/migrated/image-1767860277298-7ec9d9f6.png)](/img/migrated/image-1767860277298-7ec9d9f6.png)
  * Nếu thiết bị hiện alert về ứng dụng FCDClient, truy cập Settings > Privacy & Security > Open Anyway with FCDClient

# **Step 2: Truy cập virtual machine qua FCDClient mới**
**3. Mở and thao tác with ứng dụng FCDClient trên máy tính**
Log in to Authenticator (Server) phù hợp
  * **Nếu Client has been có sẵn information Server** (do has been điền trước that, or tải xuống Client from URL chứa authentication code hợp lệ): **Chọn Connect Server** and nhập information account corresponding tại mục 2 bên dưới [![file](/img/migrated/image-1767952725970-cec7271f.png)](/img/migrated/image-1767952725970-cec7271f.png)
  * **Nếu Client displayed interface chưa có information Server** : Cần tự điền information Server muốn đăng nhập Select **New Server** > Enter the information URL or Domain hợp lệ (information do quản trị viên customer quản lý) Ví dụ theh nhập hợp lệ: Người dùng nhập thẳng URL hợp lệ pil783454741.pilotfcd.online **or** nhập Domain pilotfcd.online trước, sau that nhập Authentication code pil78345474

[![file](/img/migrated/image-1767860539108-fc0555bc.png)](/img/migrated/image-1767860539108-fc0555bc.png)
2.Log in bằng account SSO (ví dụ Log in bằng account Microsoft), nhập OTP corresponding theo SSO => Log in Authenticator (Server) successfully
[![file](/img/migrated/image-1767952948838-89a8cf34.png)](/img/migrated/image-1767952948838-89a8cf34.png)
**4: Access virtual machine**
Tại màn hình list the virtual machine, chọn truy cập ando virtual machine mong muốn
[![file](/img/migrated/image-1767860779789-05426af5.png)](/img/migrated/image-1767860779789-05426af5.png)
Enter the information đăng nhập ando virtual machine if system yêu cầu => Truy cập virtual machine successfully
* * *
Các feature khác trên FCDClient mới:
**- Auto-connect Server:** Cho phép truy cập thẳng ando Authenticator when ở ứng dụng FCDClient (Chỉ áp dụng when ando thẳng ứng dụng, chưa hỗ trợ when ando qua Access through FCDClient trên Homepage)
**- Settings:** Cho phép xem information FCDClient has been cài
**- New server:** Người dùng chủ động thêm information (Authenticator) Server mới
