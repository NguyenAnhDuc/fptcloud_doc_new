---
id: "vertical-scaling"
title: "Quyền cần thiết:"
description: "Chức năng **Vertical Scaling** cho phép tự động điều chỉnh tài nguyên của cơ sở dữ liệu bao gồm vCPU, RAM và Storage the"
sidebar_label: "Quyền cần thiết:"
sidebar_position: 36
---

# Vertical Scaling

Chức năng **Vertical Scaling** cho phép tự động điều chỉnh tài nguyên của cơ sở dữ liệu bao gồm vCPU, RAM và Storage theo thời gian thực, dựa trên yêu cầu hiệu suất hoặc mức độ sử dụng thực tế. Tính năng này giúp hệ thống chủ động mở rộng tài nguyên khi cần thiết, đảm bảo tính linh hoạt, hiệu quả vận hành và không yêu cầu can thiệp thủ công từ người dùng.
### Quyền cần thiết:  
| Tên quyền  | Loại thao tác  | Mô tả  |  
| --- | --- | --- |  
| manageDatabase:Configuration  | Edit  | Quyền thay đổi cấu hình cơ sở dữ liệu (parameter, cấu hình scaling, ...)  |  
### 1. Kích hoạt dịch vụ Vertical Scaling
Để kích hoạt dịch vụ Vertical Scaling, bạn có thể thực hiện trực tiếp trong bước cấu hình dịch vụ bổ sung (Additional Service) khi khởi tạo cơ sở dữ liệu (xem chi tiết tại mục [Khởi tạo cơ sở dữ liệu](../managed-fpt-database-engines-new/index.md)) hoặc kích hoạt sau khi cơ sở dữ liệu đã được khởi tạo thành công theo hướng dẫn dưới đây.
#### Điều kiện tiên quyết:
Để kích hoạt Vertical Scaling, bạn bắt buộc phải bật dịch vụ Notification và hoàn tất cấu hình danh sách Email hoặc Telegram để nhận cảnh báo liên quan đến hoạt động scale. Nếu Notification chưa được cấu hình, hệ thống sẽ hiển thị hộp thoại yêu cầu cấu hình trước khi tiếp tục.
[![](/img/migrated/scale-noti-warning-scaled-d20a3fb7.png)](/img/migrated/scale-noti-warning-scaled-d20a3fb7.png)
Nhấn **Go to Notification** để chuyển đến tab **Notification** và thực hiện cấu hình theo hướng dẫn tại mục [Notification](../managed-fpt-database-engines-new/index.md).
#### Bước 1: Truy cập chức năng Vertical Scaling
Thực hiện đăng nhập vào FPT Cloud Portal. Sau khi đăng nhập thành công, từ menu chính, chọn “**Database Platform** ” > “**All Databases** ”. Nhấn vào ID của database cluster cần quản lý > chuyển sang tab **Vertical Scaling** để truy cập trang quản lý cấu hình Vertical Scaling. Nếu dịch vụ chưa được kích hoạt, màn hình **Vertical Scaling** sẽ hiển thị trạng thái ban đầu (**Inactive**).
[![](/img/migrated/vertical-scaling-inactive-scaled-d7dc0524.png)](/img/migrated/vertical-scaling-inactive-scaled-d7dc0524.png)
#### Bước 2: Kích hoạt dịch vụ
Sau khi database cluster được tạo thành công, nếu Vertical Scaling chưa được kích hoạt, trạng thái dịch vụ sẽ là **Inactive**. Nhấn vào biểu tượng **Enable Vertical Scaling** (biểu tượng bánh răng) tại mục **Service Information** để mở hộp thoại xác nhận.
Nhấn **Confirm** trên hộp thoại để kích hoạt dịch vụ. Sau khi hoàn tất, dịch vụ sẽ chuyển sang trạng thái **Active** như sau:
[![](/img/migrated/scaling-enabled-scaled-c48b62a6.png)](/img/migrated/scaling-enabled-scaled-c48b62a6.png)
Sau khi kích hoạt, bạn cần thiết lập các ngưỡng tài nguyên CPU/RAM hoặc Storage làm căn cứ để hệ thống tự động mở rộng tài nguyên. Chi tiết được trình bày tại mục 2 và mục 3.
### 2. Thiết lập mở rộng tài nguyên compute
Trên màn hình **Vertical Scaling** , nhấn **Add Flavor Scaling** (biểu tượng dấu cộng) trong mục**Compute Scaling** , hệ thống sẽ hiển thị hộp thoại **Add Compute Scaling** để cấu hình tự động mở rộng vCPU và RAM cho cơ sở dữ liệu.
[![](/img/migrated/add-compute-scaling-1-scaled-8921f622.png)](/img/migrated/add-compute-scaling-1-scaled-8921f622.png)
Các thông số cần cài đặt bao gồm:
  * **CPU Threshold (%)** : Ngưỡng CPU xác định điểm mà tại đó hệ thống sẽ kích hoạt mở rộng tài nguyên dựa trên mức sử dụng CPU. Ví dụ: Nếu ngưỡng CPU được thiết lập là 60%, hệ thống sẽ tự động kích hoạt mở rộng khi mức sử dụng CPU vượt quá 60%.
  * **RAM Threshold (%)** : Tương tự như CPU, ngưỡng RAM xác định điểm kích hoạt mở rộng tài nguyên khi mức sử dụng bộ nhớ vượt quá giá trị này. Ví dụ: Khi mức sử dụng RAM vượt quá 50%, hệ thống sẽ tự động mở rộng tài nguyên.
  * **Tracing Interval** : Khoảng thời gian (theo phút) mà hệ thống kiểm tra mức sử dụng tài nguyên. Ví dụ: chọn 5 phút → hệ thống sẽ theo dõi CPU/RAM trung bình mỗi 5 phút.
  * **Current flavor** : Hiển thị cấu hình hiện tại của instance, bao gồm số lượng CPU và dung lượng RAM được cấp phát. (ví dụ: Medium-4 (2 vCPU - 4GB RAM)).
  * **List flavor scaling** : chọn một hoặc nhiều flavor mà hệ thống được phép mở rộng lên. Các flavor trong danh sách này sẽ được chọn tuần tự khi vượt ngưỡng. Ví dụ: Current flavor: Medium-4 và List flavor scaling: Medium-8, Large-2 → Khi CPU hoặc RAM vượt ngưỡng, hệ thống sẽ nâng lên Medium-8, sau đó có thể lên Large-2 nếu tiếp tục vượt ngưỡng.

Sau khi hoàn tất cấu hình, nhấn **Add** để lưu lại. Hệ thống bắt đầu giám sát tài nguyên và tự động mở rộng khi điều kiện được thoả mãn.
Sau khi thiết lập cấu hình thành công, người dùng có thể:
  * **Chỉnh sửa cấu hình** : nhấn vào Edit Compute Scaling (biểu tượng bút chì ở mục Compute Scaling) để điều chỉnh các giá trị đã thiết lập cho cấu hình.
  * **Xoá cấu hình** : nhấn vào Delete Compute Scaling (biểu tượng thùng rác ở mục Compute Scaling) để dừng cơ chế tự động mở rộng tài nguyên.

⚠️
**Lưu ý quan trọng:**
  * **Giới hạn tài nguyên** : chỉ có thể scale trong phạm vi Available Resource (hạn mức khả dụng). Nếu vượt quá giới hạn này, hệ thống sẽ không thực hiện scale.
  * **Ngưỡng kích hoạt** : Không nên đặt ngưỡng quá thấp (dưới 60%) để tránh việc hệ thống tự động scale liên tục.
  * **Khởi động lại dịch vụ (Restart database cluster)** : một số engine như PostgreSQL và ClickHouse yêu cầu khởi động lại cơ sở dữ liệu khi tăng tài nguyên compute để áp dụng cấu hình mới. Sau khi quá trình scale hoàn tất, người dùng cần chủ động thực hiện thêm thao tác restart để cấu hình mới có hiệu lực
  * **Theo dõi thường xuyên mức sử dụng** CPU, RAM để chủ động quản lý các yêu cầu mở rộng tài nguyên.

### 3. Thiết lập mở rộng Storage
Trên màn hình quản lý cấu hình Vertical Scaling, nhấn vào biểu tượng **Add Storage Scaling** (biểu tượng dấu cộng) ở mục **Storage Scaling** , hệ thống sẽ hiển thị hộp thoại **Add Storage Scaling** để thiết lập cơ chế tự động mở rộng tài nguyên storage cho cơ sở dữ liệu.
[![](/img/migrated/add-storage-scaling-scaled-284acda6.png)](/img/migrated/add-storage-scaling-scaled-284acda6.png)
Các thông số cần cài đặt bao gồm:
  * **Storage Threshold (%)** : ngưỡng lưu trữ xác định điểm kích hoạt mở rộng khi mức sử dụng lưu trữ vượt quá giá trị này. Ví dụ: Khi mức sử dụng lưu trữ vượt quá 55%, hệ thống sẽ tự động kích hoạt mở rộng tài nguyên lưu trữ.
  * **Storage Scale (%)** : tỷ lệ phần trăm dung lượng sẽ được mở rộng. Ví dụ: Khi tỷ lệ mở rộng là 20% → Hệ thống sẽ tự động tăng dung lượng thêm 20% so với tổng dung lượng hiện tại. (Nếu dung lượng hiện tại là 100 GB → Sau khi scale, dung lượng mới là 120 GB).

Sau khi thiết lập, nhấn **Add** để xác nhận lưu cấu hình. Hệ thống sẽ tự động theo dõi mức sử dụng storage theo chu kỳ mặc định. Khi dung lượng sử dụng vượt ngưỡng (**Storage Threshold**), hệ thống sẽ mở rộng dung lượng theo tỷ lệ (**Storage Scale**) đã chọn. Quá trình mở rộng diễn ra trực tuyến (online), không gây gián đoạn dịch vụ.
Sau khi thiết lập cấu hình thành công, người dùng có thể:
  * Chỉnh sửa cấu hình: nhấn vào Edit Scaling Scaling (biểu tượng bút chì ở mục Scaling Scaling) để điều chỉnh các giá trị đã thiết lập cho cấu hình.
  * Xoá cấu hình: nhấn vào Delete Scaling Scaling (biểu tượng thùng rác ở mục Scaling Scaling) để dừng cơ chế tự động mở rộng tài nguyên.

**Lưu ý:**
  * **Giới hạn tài nguyên** : Việc mở rộng chỉ có thể thực hiện trong phạm vi Available Resource (hạn mức khả dụng). Nếu vượt quá giới hạn, hệ thống sẽ không thực hiện scale.
  * **Tần suất mở rộng** : Không nên đặt ngưỡng quá thấp (ví dụ dưới 70%) để tránh việc mở rộng liên tục gây tốn tài nguyên.
  * **Tính không thể thu hẹp** : Sau khi mở rộng, dung lượng storage không thể giảm trở lại.