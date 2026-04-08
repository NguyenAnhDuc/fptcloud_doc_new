---
id: "quan-ly-security-group"
title: "Quản lý Security Group"
sidebar_label: "Quản lý Security Group"
sidebar_position: 1
---

# Quản lý Security Group


**Security Group** hoạt động như một tường lửa mạng ảo, cho phép các kết nối đi vào (inbound) và ra khỏi (outbound) máy ảo. Trong FPT Cloud, có hai loại tường lửa:

  * Security Group: Tường lửa kiểm soát traffic ra vào Internet của máy ảo

  * Distributed Firewall: _(Chỉ có trên dịch vụ Specific)_ Tường lửa kiểm soát traffic ra vào máy ảo trong mạng nội bộ.


Việc sử dụng các loại tường lửa này đảm bảo an toàn cho máy ảo bằng cách ngăn chặn các cuộc tấn công như DDoS và các mối đe dọa khác từ internet hoặc virus.

Để quản lý các **Security group**, bạn vào trang**Security Groups** ở nhóm Service **Networking** Ở đây bạn có thể tạo mới, xem danh sách, sửa thông tin, xóa các **Security group** trong VPC.

### Tạo mới Security Group
Để tạo mới một Security Group bạn thao tác như sau:

**Bước 1**: Ở menu chọn **Security group** > **Networking**. Chọn **Create security group**.

![file](/img/migrated/docs-vi-cloud-server/quan-ly-security-group/img-001.png)

**Bước 2**: Nhập các thông tin hệ thống yêu cầu:

**Đối với người dùng dịch vụ General:**

  * **Name**: Tên security group, mặc định hệ thống sẽ tự khởi tạo một tên để khách hàng nhanh chóng sử dụng.

  * **Subnet**: Chọn Subnet trong danh sách.

  * **Applied CIDR / instances**: Chọn máy ảo hoặc dãy CIDR sẽ áp dụng. Bạn có thể bỏ qua trường này và thêm vào sau.

  * **Configure security rule**:

    * Inbound rule: Kiểm soát traffic đi vào máy ảo. Bạn có thể cấu hình rule theo nhu cầu sử dụng.

    * Outbound rule: Kiểm soát traffic ra khỏi máy ảo. Bạn có thể cấu hình rule theo nhu cầu sử dụng.


![file](/img/migrated/docs-vi-cloud-server/quan-ly-security-group/img-002.png)

__

_Màn hình tạo Security group với người dùng dịch vụ General_

**Đối với người dùng dịch vụ Specific:**

  * **Name**: Tên security group, mặc định hệ thống sẽ tự khởi tạo một tên để khách hàng nhanh chóng sử dụng.

  * **Type**:

    * Security group: Kiểm soát traffic ra vào internet của máy ảo

    * Distributed Firewall: Kiểm soát traffic ra vào mạng nội bộ của máy ảo

  * **Subnet**: Chọn Subnet trong danh sách.

  * **Applied CIDR / instances**: Chọn máy ảo hoặc dãy CIDR sẽ áp dụng. Bạn có thể bỏ qua trường này và thêm vào sau.

  * **Configure security rule**:

    * Inbound rule: Kiểm soát traffic đi vào máy ảo. Bạn có thể cấu hình rule theo nhu cầu sử dụng.

    * Outbound rule: Kiểm soát traffic ra khỏi máy ảo. Bạn có thể cấu hình rule theo nhu cầu sử dụng.


![file](/img/migrated/docs-vi-cloud-server/quan-ly-security-group/img-003.png)

__

_Màn hình tạo Security group với người dùng dịch vụ Specific_

**Bước 3**: Chọn **Create security group**. Hệ thống sẽ tiến hành xử lý và thông báo kết quả.

Nếu thành công, **Security Group** vừa tạo sẽ được hiển thị ở bảng **Security Group**.

![file](/img/migrated/docs-vi-cloud-server/quan-ly-security-group/img-004.png)

### Quản lý Inbound rules và outbound rules trong Security Group
**Inbound rules** là các rule giúp quy định cổng (**Port**) nào sẽ được mở trên máy ảo và địa chỉ nào trên Internet sẽ được truy cập vào cổng đấy (**Source**).

**Outbound rules** là các rule giúp quy định cổng (**Port**) nào sẽ được mở trên máy ảo và địa chỉ nào trên Internet sẽ được truy cập ra từ cổng đấy (**Destination**).

Một **Security Group** có thể chứa nhiều I**nbound rules** và **Outbound rules** khác nhau. Để thêm rule, mở port cho Security Group bạn thao tác như sau:

**Bước 1**: Trên bảng quản trị **Security group**, chọn **Security group** cần quản lý rule để vào trang **Security group detail**.

Lưu ý: Không thể điều chỉnh Firewall type sau khi đã khởi tạo

**Bước 2**: Chọn **Add New** trong phần **Inbound rules** (tương tự với **outbound rule**).

![file](/img/migrated/docs-vi-cloud-server/quan-ly-security-group/img-005.png)

**Bước 3**: Điền các thông tin cần thiết của Rule:

  * **Port**: Chọn Port cần mở. Có thể chọn**All ports** để mở toàn bộ, **Customize ports** để mở một hoặc một dải **Port** tùy chọn. Ngoài ra hệ thống sẽ đề xuất Port của một số dịch vụ phổ biến như SSH, RDP, MySQL, HTTP, HTTPS,…

  * **Sources (Destinations)**: Nhập các IP trên Internet có thể kết nối đến Port này vào trường Sources (Destinations). Chọn **All Ipv4** để đồng ý tất cả, **MyIP** để cho phép IP public hiện tại của máy, hoặc nhập trực tiếp IP để thêm các IP tùy chọn. Lưu ý: đối với các port nhạy cảm như 22 hay 3389, khi bạn allow All Ipv4, hệ thống sẽ hiển thị cảnh báo bạn về độ nguy hiểm cao “We recommend allowing SSH from trusted IPs only”

  * **Description**: Chú thích về rule.


Chọn **Add rule** để tiếp tục thêm rule mới hoặc chọn **Edit security group** để lưu. Hệ thống sẽ tiến hành lưu và thông báo kết quả.

![file](/img/migrated/docs-vi-cloud-server/quan-ly-security-group/img-006.png)

### Gắn máy ảo vào Security Group
**Bước 1**: Trên bảng quản trị **Security group**, chọn **Security group** cần gắn với máy ảo để vào trang **Security group detail**.

![file](/img/migrated/docs-vi-cloud-server/quan-ly-security-group/img-007.png)

**Bước 2**: Trong phần **Apply to** chọn các máy ảo sẽ gắn vào **Security group**, bạn có thể nhập dãy CIDR để apply cho 1 dãy mạng. Chọn **Apply Instances**. Hệ thống sẽ tiến hành lưu và thông báo kết quả.

![file](/img/migrated/docs-vi-cloud-server/quan-ly-security-group/img-008.png)

### Gỡ máy ảo khỏi Security Group
**Bước 1**: Trên bảng quản trị **Security group**, chọn **Security group** cần gỡ khỏi máy ảo để vào trang **Security group detail**.

![file](/img/migrated/docs-vi-cloud-server/quan-ly-security-group/img-009.png)

Ở phần **Apply to** đã hiển thị danh sách các máy ảo đang được gắn với **Security group** này.

**Bước 2**: Bấm vào icon **X** ở máy ảo cần gỡ và chọn **Apply Instances**. Hệ thống sẽ tiến hành xử lý và thông báo kết quả.

![file](/img/migrated/docs-vi-cloud-server/quan-ly-security-group/img-010.png)

### Xóa Security Group khỏi VPC
Nếu không còn nhu cầu sử dụng **Security group**, bạn có thể xóa khỏi **VPC**.

**Lưu ý: Cần xóa hết tất cả các rules để thực hiện thao tác này.**

![file](/img/migrated/docs-vi-cloud-server/quan-ly-security-group/img-011.png)

**Bước 1**: Trên bảng quản trị **Security group**, chọn **Security group** cần xóa để vào trang **Security group detail**.

![file](/img/migrated/docs-vi-cloud-server/quan-ly-security-group/img-012.png)

**Bước 2**: Vào rule, chọn biểu tượng thùng rác, và xác nhận xóa

![file](/img/migrated/docs-vi-cloud-server/quan-ly-security-group/img-013.png)

![file](/img/migrated/docs-vi-cloud-server/quan-ly-security-group/img-014.png)

**Bước 3**: Sau khi đó xóa hết các rule trong **Security group**, bạn ra bảng quản trị **Security Group**. Trên bảng quản trị **Security group**, trong phần **Action** của **Security group** cần xóa, chọn Delete.

![file](/img/migrated/docs-vi-cloud-server/quan-ly-security-group/img-015.png)

**Bước 4**: Hệ thống sẽ hiển thị popup xác nhận thông tin. Để đồng ý xóa, chọn **Delete security group**.

![file](/img/migrated/docs-vi-cloud-server/quan-ly-security-group/img-016.png)
