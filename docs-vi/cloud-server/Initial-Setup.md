---
id: "Initial-Setup"
title: "Thiết lập ban đầu"
description: "Nếu đây là lần đầu tiên bạn sử dụng FPT Cloud Server, trước tiên hãy kiểm tra và hoàn thành các công việc sau:"
sidebar_label: "Thiết lập ban đầu"
sidebar_position: 2
---

# Initial Setup

Nếu đây là lần đầu tiên bạn sử dụng FPT Cloud Server, trước tiên hãy kiểm tra và hoàn thành các công việc sau:
## **1. Tạo tài khoản FPT Cloud và đăng nhập vào FPT Portal**
Để bắt đầu sử dụng dịch vụ **FPT Cloud WAF** , người dùng cần đăng nhập vào **FPT Portal**.
Hãy truy cập vào <https://console.fptcloud.com> và đăng nhập bằng tài khoản/mật khẩu FPT Cloud đã được cấp. Chọn đúng Tenant, Region, VPC cần sử dụng dịch vụ.
Nếu chưa có tài khoản **FPT Cloud** , người dùng hãy truy cập trang chủ tại <https://fptcloud.com/>.
Sau đó chọn chức năng **Sign Up** và nhập các thông tin theo hướng dẫn của hệ thống. Người dùng sẽ được bộ phận hỗ trợ liên hệ ngay sau đó và xác nhận các thông tin để tạo tài khoản.
Trong quá trình thao tác nếu gặp bất kỳ lỗi nào hãy liên hệ ngay cho đội ngũ Support của chúng tôi để được hỗ trợ.
## **2. Tạo một cặp key SSH**
Với các máy chủ nhân Linux, **FPT Cloud** hỗ trợ người dùng sử dụng 2 phương thức bảo mật là sử dụng **Password** hoặc cặp **SSH Key**.
  * **Password** là phương thức bảo mật cơ bản, được sử dụng rộng rãi nhưng tiềm ẩn rất nhiều rủi ro về bảo mật (bị lộ lọt, bị scan,…) dẫn đến máy chủ bị hack.
  * **SSH Key** là phương thức được đánh giá là bảo mật hơn, an toàn hơn rất nhiều so với dùng Password. FPT Cloud khuyến nghị người dùng sử dụng phương thức này cho các máy chủ quan trọng của mình.

Để tạo cặp key SSH, người dùng cần đăng nhập thành công vào **FPT Portal**
**Bước 1:** Ở menu chọn **Compute Engine** > **SSH Management**. Chọn **Import SSH key**.
[![Userguide FPT Cloud Server 2022 1](/img/migrated/Userguide-FPT-Cloud-Server-2022-1-1024x5-8b0e181c.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-1-1024x5-8b0e181c.png)
**Bước 2:** Nhập các thông tin cần thiết để tạo **SSH Key** :
[![Userguide FPT Cloud Server 2022 2](/img/migrated/Userguide-FPT-Cloud-Server-2022-2-f88ee771.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-2-f88ee771.png)
  * **Name** : Tên SSH Key.
  * **Public Key** : **Public Key** để hệ thống gen ra **Private Key**. Nếu người dùng đã có sẵn **Public key** , hãy nhập vào ô **Public key**. Nếu chưa có, hãy chọn **Generate new key pair**. Hệ thống sẽ tự tạo ngẫu nhiên một **Public Key** hợp lệ.

**Bước 3** : Khi đã đầy đủ thông tin, chọn **Save**. Hệ thống sẽ tiến hành tạo cặp **SSH Key** và tự động download file key về máy với định dạng **< >.pem**.
[![Userguide FPT Cloud Server 2022 3](/img/migrated/Userguide-FPT-Cloud-Server-2022-3-1024x5-3df2476e.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-3-1024x5-3df2476e.png)
Lưu ý: File **Private key** **< >.pem** chỉ được cung cấp 1 lần duy nhất ở bước 5. Người dùng cần lưu trữ ở nơi an toàn tránh việc bị mất quyền truy cập vào máy chủ.
## **3. Kiểm tra trạng thái Subnets**
Để khởi tạo máy ảo người dùng cần có một **Subnet** đang hoạt động trong VPC, hệ thống cần lấy một **Private IP** từ **Subnet** này để gắn cho máy ảo chuẩn bị tạo.
Các bước tạo một Subnet mới:
**Bước 1** : Ở menu chọn **Networking** > **Subnets**. Chọn **Create subnet**.
[![file](/img/migrated/image-1744794276761-161dcee6.png)](/img/migrated/image-1744794276761-161dcee6.png)
**Bước 2** : Nhập các thông tin hệ thống yêu cầu:
  * **Name** : Nhập Tên gợi nhớ của Subnet.
  * **Type** : Hiện tại đang hỗ trợ 2 loại: 
    * **Routed** : Mạng con sẽ định tuyến với Internet thông qua cổng NAT
    * **Isolated** : Mạng con sẽ không định tuyến với Internet
  * **Network Address (CIDR)** : Nhập **CIDR** hợp lệ.
  * **Gateway IP** : Nhập địa chỉ **Gateway** hợp lệ
  * **Static IP Pool (optional)** : Nhập dải IP bạn muốn sử dụng, nếu không nhập hệ thống sẽ lấy toàn bộ IP từ **CIDR**.
  * **Primary DNS** : Nhập địa chỉ DNS theo định dạng IPv4. Nếu không nhập, hệ thống sẽ tự động tạo giá trị mặc định là 8.8.8.8.
  * **Secondary DNS (optional)** : Nhập Secondary DNS theo định dang địa chỉ IPv4. Nếu không nhập, hệ thống sẽ tự động tạo giá trị mặc định là 8.8.8.8.
  * **Add tag (optional)** : Chọn thẻ để gắn cho subnet

[![file](/img/migrated/image-1744794289261-ead4183b.png)](/img/migrated/image-1744794289261-ead4183b.png)
**Bước 3** : Chọn **Create subnet** để tạo Subnet mới. Hệ thống sẽ tiến hành xử lý và thông báo kết quả
Nếu thành công, **Subnet** vừa tạo sẽ được hiển thị ở bảng **Subnets**.
[![file](/img/migrated/image-1744794442277-c162eaf9.png)](/img/migrated/image-1744794442277-c162eaf9.png)
## **4. Tạo một Security Group**
**Security Group** hoạt động như một tường lửa mạng ảo, giúp kiểm soát lưu lượng traffic bằng cách chặn hoặc mở các kết nối vào (inbound) và ra (outbound) cho máy ảo. Trong FPT Cloud, có hai loại tường lửa:
  * Security Group: Loại này kiểm soát lưu lượng traffic ra vào internet của máy ảo.
  * Distributed Firewall: Loại này kiểm soát lưu lượng traffic ra vào máy ảo trong mạng nội bộ.

Việc sử dụng các loại tường lửa này đảm bảo an toàn cho máy ảo bằng cách ngăn chặn các cuộc tấn công như DDoS và các mối đe dọa khác từ internet hoặc virus.
Để quản lý các **Security group** , người dùng vào trang **Security Groups** ở nhóm **Service Networking**. Ở đây người dùng có thể tạo mới, xem danh sách, sửa thông tin, xóa các **Security group** trong VPC.
Thao tác chi tiết để tạo một Security Group:
**Bước 1** : Ở menu chọn **Security group** > **Networking**. Chọn **New Security Group**.
[![file](/img/migrated/image-1711095113934-f0d896b0.png)](/img/migrated/image-1711095113934-f0d896b0.png)
**Bước 2** : Nhập các thông tin hệ thống yêu cầu:
  * **Name** : Tên security group, mặc định hệ thống sẽ tự khởi tạo một tên để khách hàng nhanh chóng sử dụng.
  * **Type** : 
    * Security group: Kiểm soát traffic ra vào internet của máy ảo
    * Distributed Firewall: Kiểm soát traffic ra vào mạng nội bộ của máy ảo
  * **Subnet** : Chọn Subnet trong danh sách.
  * **Applied CIDR / instances** : Chọn máy ảo hoặc dãy CIDR sẽ áp dụng. Bạn có thể bỏ qua trường này và thêm vào sau.
  * **Configure security rule** : 
    * Inbound rule: Kiểm soát traffic đi vào máy ảo. Bạn có thể cấu hình rule theo nhu cầu sử dụng.
    * Outbound rule: Kiểm soát traffic ra khỏi máy ảo. Bạn có thể cấu hình rule theo nhu cầu sử dụng.

[![file](/img/migrated/image-1711095173572-26de46ab.png)](/img/migrated/image-1711095173572-26de46ab.png)
**Bước 3** : Chọn **Create security group**. Hệ thống sẽ tiến hành xử lý và thông báo kết quả.
Nếu thành công, **Security Group** vừa tạo sẽ được hiển thị ở bảng **Security Group**.
[![file](/img/migrated/image-1711095189056-ddaa6e99.png)](/img/migrated/image-1711095189056-ddaa6e99.png)