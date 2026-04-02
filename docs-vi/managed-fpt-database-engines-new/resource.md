---
id: "resource"
title: "Quản lý tài nguyên cụm cơ sở dữ liệu"
description: "Tài nguyên của cụm cơ sở dữ liệu bao gồm Flavor (CPU – RAM) và dung lượng ổ đĩa dữ liệu (Data Disk Size)."
sidebar_label: "Quản lý tài nguyên cụm cơ sở dữ liệu"
sidebar_position: 32
---

# Resource

Tài nguyên của cụm cơ sở dữ liệu bao gồm Flavor (CPU – RAM) và dung lượng ổ đĩa dữ liệu (Data Disk Size).
Chức năng **Quản lý tài nguyên cụm cơ sở dữ liệu** cho phép người dùng theo dõi và điều chỉnh các tài nguyên được cấp cho một cụm cơ sở dữ liệu, bao gồm CPU – RAM (Flavor), dung lượng ổ đĩa dữ liệu, và chính sách lưu trữ (Storage Policy), nhằm đáp ứng yêu cầu về hiệu năng và dung lượng trong quá trình vận hành.
Các bước thao tác chi tiết được trình bày trong phần hướng dẫn bên dưới.
### 1. Xem thông tin tài nguyên cơ sở dữ liệu
Trên thanh menu, chọn **Database Platform** > Chọn menu **All Database** hoặc hoặc chọn menu tương ứng với nhóm cơ sở dữ liệu phù hợp cluster > click vào Cluster ID > chọn tab **Resource** để vào màn hình quản lý tài nguyên cơ sở dữ liệu.
[![](/img/migrated/view-resource-scaled-5cec940f.png)](/img/migrated/view-resource-scaled-5cec940f.png)
Thông tin tài nguyên của cơ sở dữ liệu được hiển thị ở mục Resource Information với hai phần chính là: **Current Resource** và **Available Resource**.
  * **Current Resource** : Hiển thị cấu hình tài nguyên hiện tại của cơ sở dữ liệu, bao gồm vCPU, RAM và dung lượng ổ đĩa dữ liệu.
  * **Available Resource** : Hiển thị hạn mức tài nguyên tối đa có thể sử dụng để mở rộng cho cơ sở dữ liệu của mình, cũng bao gồm các thông tin: vCPU, RAM và dung lượng ổ đĩa dữ liệu.

### 2 Điều chỉnh tài nguyên cơ sở dữ liệu
Người dùng có thể thay đổi Flavor để tăng hoặc giảm tài nguyên compute (CPU – RAM) hoặc tăng dung lượng ổ đĩa dữ liệu trong phạm vi tài nguyên khả dụng (Available Resource). Thao tác như sau:
Tại màn hình **Quản lý tài nguyên cơ sở dữ liệu** , nhấp vào biểu tượng chỉnh sửa tài nguyên (biểu tượng hình bút chì) bên cạnh mục **Database Resources** để mở hộp thoại **Update Database Resource** :
[![](/img/migrated/update-resource-scaled-002f98f3.png)](/img/migrated/update-resource-scaled-002f98f3.png)
Nhập thông tin cần điều chỉnh:
  * Để thay đổi cấu hình compute (vCPU – RAM), chọn **Flavor** mong muốn từ danh sách thả xuống.
  * Để tăng dung lượng ổ đĩa dữ liệu, nhập giá trị mới vào trường **Data disk size (GB)**.

Nhấn **Update** để áp dụng thay đổi.
Sau khi xác nhận, trạng thái của cụm cơ sở dữ liệu sẽ chuyển sang "**Resizing** ", và sau đó trở lại "**Running** " khi quá trình hoàn tất.
Thời gian cập nhật tài nguyên có thể kéo dài từ 5 – 10 phút. Trong thời gian này, vui lòng không thực hiện thêm thao tác nào khác trên database cluster.
⚠️
**Lưu ý quan trọng:**
  * **Giới hạn tài nguyên** : Người dùng chỉ có thể thay đổi tài nguyên trong phạm vi Available Resource (hạn mức khả dụng). Nếu cấu hình mới vượt quá hạn mức này, hệ thống sẽ hiển thị thông báo lỗi và không cho phép thực hiện thay đổi.
  * **Không hỗ trợ giảm dung lượng ổ đĩa dữ liệu**(Data disk size): Hệ thống không hỗ trợ giảm dung lượng ổ đĩa dữ liệu. Bạn chỉ có thể **tăng** dung lượng ổ đĩa, không thể giảm xuống thấp hơn dung lượng hiện tại.
  * **Khởi động lại dịch vụ (Restart database cluster)** : Khi thay đổi cấu hình tài nguyên compute, **một số database engine yêu cầu khởi động lại cụm cơ sở dữ liệu** để áp dụng cấu hình mới. Việc restart có thể được hệ thống thực hiện tự động hoặc yêu cầu người dùng chủ động thực hiện sau khi quá trình cập nhật tài nguyên hoàn tất. Quá trình khởi động lại có thể **gây gián đoạn dịch vụ tạm thời**. Do đó, người dùng nên thực hiện các thay đổi này trong khung thời gian **ít truy cập** để giảm thiểu ảnh hưởng.   
Cụ thể như sau: 
    * Hệ thống sẽ **tự động khởi động lại dịch vụ khi giảm tài nguyên compute.**
    * Trong trường hợp **tăng tài nguyên compute** , hệ thống sẽ **không tự động khởi động lại**. Riêng đối với **PostgreSQL và ClickHouse** , người dùng cần **thực hiện thêm thao tác restart** sau khi cập nhật để cấu hình mới có hiệu lực.

### 3. Điều chỉnh Storage Policy
Storage Policy ảnh hưởng trực tiếp đến hiệu suất I/O và chi phí vận hành của cơ sở dữ liệu. Người dùng có thể cập nhật chính sách này theo hướng dẫn dưới đây: 
Tại màn hình **Quản lý tài nguyên cơ sở dữ liệu** , nhấp vào biểu tượng chỉnh sửa chính sách lưu trữ (biểu tượng hình bút chì) bên cạnh mục **Storage Policy** để mở hộp thoại **Update Storage Policy** :
[![](/img/migrated/update-storage-policy-1-scaled-4642a33c.png)](/img/migrated/update-storage-policy-1-scaled-4642a33c.png)
Chọn Storage policy mới phù hợp với nhu cầu sử dụng từ danh sách dropdown và nhấn **Update** để áp dụng thay đổi.
Quá trình cập nhật Storage Policy có thể mất khoảng 5 – 10 phút. Trong thời gian này, không thực hiện bất kỳ thao tác nào khác trên database cluster để tránh ảnh hưởng đến hệ thống.
**Khuyến nghị** : Đối với môi trường **production** , nên sử dụng Storage Policy có **IOPS tối thiểu 4,000 (4K)** để đảm bảo hiệu năng ổn định.
