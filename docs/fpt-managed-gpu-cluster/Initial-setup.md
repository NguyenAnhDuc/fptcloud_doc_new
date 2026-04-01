---
id: "Initial-setup"
title: "Initial setup"
sidebar_label: "Initial setup"
sidebar_position: "2"
---

# Initial setup

Nếu đây là lần đầu tiên you sử dụng MANAGED GPU CLUSTER, trước tiên hãy kiểm tra and hoàn thành the công việc sau: 
### 1. Create account FPT Cloud and đăng nhập ando FPT Portal
Để đăng ký account FPT Cloud, you hãy truy cập home page [tại đây](https://fptcloud.com/).
Sau that chọn chức năng **Sign Up** and nhập the information theo guide of system. Bạn will is bộ phận hỗ trợ liên hệ ngay sau that and xác nhận the information to create account.
Để đăng nhập ando FPT Portal, you hãy truy cập ando [console.fptcloud.com](https://console.fptcloud.com/).
Sau when đăng nhập bằng account and password has been is cấp, chọn đúng Tenant, Region, VPC.
Nếu không chắc chắn về the information trên or system phản hồi lỗi sau 3 lần thử thì hãy liên hệ ngay for đội ngũ Support of chúng tôi to is hỗ trợ.
**Save ý** : Tài khoản must có xác thực 2 bước (MFA) to can sử dụng sản phẩm AI Factory
### 2. Create Subnets for Bare Metal GPU Servers sử dụng in Managed GPU Cluster
Để tạo a Managed GPU Cluster, trước tiên you need to có a dải subnet trên Bare Metal GPU Servers, những máy tính this will có nhiệm vụ như là the Worker node in K8s Cluster. Địa chỉ IPv4 for the Worker Bare Metal GPU will is cấp phát động from subnet this. 
**Step 1:** Tìm đến mục [AI Infrastructure] > chọn [Subnets] > chọn [Create Subnet] 
[![](/img/migrated/1-1-4f1767cc.png)](/img/migrated/1-1-4f1767cc.png)
**Step 2:** Enter tên mong muốn đặt for subnet 
[![](/img/migrated/2-1-e7e458f5.png)](/img/migrated/2-1-e7e458f5.png)
**Step 3:** Enter tên for Network ACL ứng with subnet
**Step 4:** Nhấn [Create Subnet] to complete quá trình tạo subnet for Bare Metal GPU 
**Save ý** : Network ACL is tạo mặc định for subnet will chặn tất cả the lưu lượng ando (inbound) and for phép tất cả lưu lượng ra (outbound). Để sử dụng Load Balancer for Managed GPU Cluster, you need to mở the Rule phù hợp for dải subnet Load Balancer to for phép kết nối. 
### 3. Create Subnets for Load Balancer
Managed GPU Cluster Cluster chỉ hoạt động with Subnets has been bật tùy chọn Static Pool, vì vậy you need to tạo a Subnets with Static Pool theo guide sau: 
**Step 1:** Ở phần **Network** chọn tab **Subnets**
[![Subnet K8s](/img/migrated/Screenshot-2025-01-10-at-10.35.34-7d3142bd.png)](/img/migrated/Screenshot-2025-01-10-at-10.35.34-7d3142bd.png)
**Step 2:** Select **Create Subnet** ở trang **Subnets Management**
[![Subnet K8s](/img/migrated/Screenshot-2025-01-10-at-10.39.58-b09ab0a1.png)](/img/migrated/Screenshot-2025-01-10-at-10.39.58-b09ab0a1.png) **Bước 3:** Nhập các thông tin sau:
  * **Name:** Enter Tên gợi nhớ of Subnet
  * **CIDR:** Enter **CIDR** hợp lệ
  * Tích chọn ando tùy chọn **Advanced settings**
  * **Static IP Pool:** Enter 1 dải IP hợp lệ is lấy from CIDR.

Select **Save** to create Subnet mới. Hệ thống will tiến hành xử lý and notification kết quả.
[![Userguide K8s 3](/img/migrated/Initial-setup-3-9bccff9a.png)](/img/migrated/Initial-setup-3-9bccff9a.png)
### 3. Yêu cầu kích hoạt service Managed GPU Cluster and cấp quota tài nguyên
Nếu đây là lần đầu tiên sử dụng FPT Cloud, a số service can chưa is mở for account of you. Hãy liên hệ with đội ngũ hỗ trợ of chúng tôi and cung cấp the information về service, cấu hình mong muốn. Chúng tôi will cấp for you the tài nguyên need to thiết như RAM, CPU, Storage, Public IP… to can bắt đầu sử dụng service Managed GPU Cluster. 
Liên hệ with đội ngũ hỗ trợ of chúng tôi qua: 
**Hotline** : 1900638399 
**Email** : support@fptcloud.com
