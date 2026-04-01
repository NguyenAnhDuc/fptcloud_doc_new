---
id: "khoi-tao-mot-alert-moi-threat-alert"
title: "Create một Threat Alert mới"
sidebar_label: "Create một Threat Alert mới"
sidebar_position: "9"
---

# Create a Threat Alert mới

**Step 1:** Ở menu chọn **Security** > **Cloud Guard** , mở tab **Threat** **Alerts** and foṛn **Create Alert**.
[![file](/img/migrated/image-1725532528612-3fb1607b.png)](/img/migrated/image-1725532528612-3fb1607b.png)
Một hộp thoại mới will hiện lên and guide user thực hiện the bước tiếp theo.
Step 2: Configure alert theo nhu cầu bằng theh nhập information ando trường dữ liệu corresponding:  
|   |   |  
| --- | --- |  
| **Field**  | **Description**  |  
| **Name**  | Enter tên of Alert  |  
| **Threat Type**  | Select **Loại tấn công** user muốn đặt alert, gồm có:  |  
  1. High-frequency Being Scanned Detection: IP user is bị scan from bên ngoài with tần suất cao hơn mức bình thường qua the port nguy hiểm như 22, 3389, 445,…
  2. High-frequency Scanning Detection: IP user is đi scan ra ngoài internet with tần suất cao hơn mức bình thường qua the port nguy hiểm như 22, 3389, 445,…
  3. Malware Infected Detection: IP user có nguy cơ bị nhiễm Malware when phát hiện có kết nối tới C&C site.
  4. Potential DDoS Attack Detection: IP user có nguy cơ bị tấn công DDoS when phát hiện có số lượng lớn host is gửi gói tin tới 1 IP đích in 1 phút. | | **Apply to** | Chọn the IP mà user muốn bật alert **Note:** Các IP is phép chọn to bật alert nằm in list IP of màn Floating IP | | **Severity** | Chọn mức độ nghiêm trọng of alert, có the mức: Critical, High, Medium, Low | | **Notify to** | Chọn người nhận alert |

Step 3: Chọn Create to thực hiện khởi tạo Alert. Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên and tiến hành quá trình khởi tạo dựa ando the information has been chọn.
Sau when khởi tạo successfully, người dùng can thấy Alert mới tạo and kiểm tra information trên bảng quản trị.
[![file](/img/migrated/image-1725532593169-92edeb64.png)](/img/migrated/image-1725532593169-92edeb64.png)
