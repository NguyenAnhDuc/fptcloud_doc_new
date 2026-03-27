---
id: "quan-ly-backup-job"
title: "Quản lý Backup job"
description: "FPT Backup sử dụng khái niệm **Backup Job** để quản lý, theo dõi và điều phối các tác vụ sao lưu đối với tài nguyên cần "
sidebar_label: "Quản lý Backup job"
sidebar_position: 3
---

# Quan Ly Backup Job

FPT Backup sử dụng khái niệm **Backup Job** để quản lý, theo dõi và điều phối các tác vụ sao lưu đối với tài nguyên cần bảo vệ (ví dụ: VM, volume).
Khi bạn khởi tạo một Backup Job, bạn sẽ cấu hình:
  * **Kịch bản sao lưu** (daily / weekly / monthly)
  * **Phương thức sao lưu** (Full / Incremental)
  * **Đối tượng sao lưu** (danh sách VM / Vol)
  * **Người nhận thông báo** (email)

Sau khi được tạo thành công, Backup Job sẽ **chạy hoàn toàn tự động** theo lịch đã thiết lập. Mỗi lần chạy, job sẽ tạo ra một **restore point (điểm phục hồi)** mới và lưu trữ tại một phân vùng lưu trữ riêng biệt, cùng **region** với VPC của bạn.
Điều này giúp tăng độ an toàn cho dữ liệu trong trường hợp tài nguyên sản xuất bị tấn công hoặc gặp sự cố.
## **1. Khởi tạo một Backup Job mới**
### **Bước 1: Mở màn hình tạo Backup Job**
Trên FPT Cloud Portal, truy cập Backup & Recovery ⇒ Create Backup Job
### **Bước 2: Cấu hình thông tin Backup Job**
Bạn cấu hình Backup Job theo nhu cầu với các trường sau:  
| **Tên trường**  | **Mô tả**  |  
| --- | --- |  
| **Name**  | Tên của Backup Job. Nên đặt dễ hiểu, gắn với hệ thống hoặc môi trường (ví dụ: `prod-web-01-daily`).  |  
| **Description**  | Mô tả ngắn gọn mục đích hoặc phạm vi bảo vệ.  |  
| **Notification to**  | Chọn người nhận thông báo qua Email. Bạn có thể tạo mới contact bằng cách bấm vào link _“Create your email contact here”_ trên FPT Portal.  |  
| **Target selection**  | Chọn các VM hoặc volume trong VPC sẽ áp dụng Backup Job. Một Backup Job có thể gắn với **nhiều target** , nhưng **một target chỉ được gắn với một Backup Job**.  |  
| **Latest backup to keep**  | Số lượng **restore point tối đa** sẽ giữ lại, mặc định là **7**. Khi vượt quá số này, hệ thống sẽ tự động xóa các bản cũ nhất.  |  
| **Retention information**  | Chọn kịch bản backup nhanh. Hệ thống sẽ gợi ý một số option thông dụng:  |  
  * **Daily full backup:** Backup full hằng ngày. 
  * **Daily incremental, Weekly active full:** Lần đầu backup full, các lần tiếp theo trong tuần là incremental, cuối tuần tạo 1 bản full. 
  * **Daily incremental, Monthly active full:** Lần đầu backup full, các lần tiếp theo trong tháng là incremental, cuối tháng tạo 1 bản full. |

### **Bước 3: Tạo Backup Job**
Nhấn **Create** để khởi tạo Backup Job mới.
Hệ thống sẽ:
  * Kiểm tra tài nguyên
  * Xác nhận cấu hình hợp lệ
  * Tiến hành tạo job theo thông tin bạn đã khai báo

Sau khi tạo thành công, bạn sẽ thấy Backup Job ở trạng thái **Initiated**.
Đến thời gian đã cấu hình, job sẽ tự động chạy và tạo **restore point** đầu tiên.
Nếu bạn muốn chạy ngay không chờ đến lịch, có thể dùng chức năng **Start** (mục 3.4 bên dưới).
Ngoài ra, trong phần cấu hình chi tiết của từng VM được gắn vào Backup Job, sẽ xuất hiện thêm tab **Backups** , tại đây:
  * Hiển thị danh sách **restore point** khả dụng
  * Cho biết **lịch backup** tiếp theo

## **2. Theo dõi tiến độ Backup Job**
Tiến độ và trạng thái của Backup Job được hiển thị trực tiếp trong màn hình **Backup Management** , chủ yếu thông qua:
  * **Status (Trạng thái job)**
  * **Next Run (Lần chạy tiếp theo)**

Các trạng thái phổ biến:
  * **Initiated:** Job đã được tạo xong, đang chờ chạy lần đầu.
  * **Success:** Lần chạy backup gần nhất **thành công**.
  * **Fail:** Lần chạy backup gần nhất **bị lỗi** (có thể do resource, mạng, cấu hình…).
  * **Pending:** Job đang bị tạm dừng do lỗi resource, lỗi hạ tầng hoặc điều kiện tạm thời khác.

Khi job đang chạy, bạn có thể thấy trạng thái chuyển qua các bước trung gian; tiến độ và kết quả cuối cùng sẽ được cập nhật lại sau khi hoàn tất.
## **3. Xem danh sách Backup Job hiện tại**
Để xem danh sách tất cả Backup Job trên hệ thống:
  1. Trên Portal, vào **Backup → Backup Management**
  2. Chọn tab **Backup Job**

Tại đây, bạn sẽ thấy:
  * **Name:** Tên job
  * **Status:** Trạng thái hiện tại (Initiated / Success / Fail / Pending / Disabled…)
  * **Instances:** Danh sách máy ảo đang gắn với job 
    * Các VM đã bị xóa khỏi hệ thống sẽ được hiển thị dạng **gạch tên**.
  * **Next Run:** Thời gian job sẽ chạy tiếp theo theo lịch đã cấu hình
  * Các nút thao tác: **Start** , **Enable/Disable** , **Delete** , **View Detail** …

Bạn có thể dùng ô tìm kiếm hoặc bộ lọc để nhanh chóng tìm job theo tên, trạng thái hoặc theo tài nguyên gắn kèm.
## **4. Start Backup Job thủ công**
Mặc định mỗi Backup Job sẽ tự động chạy khi đến giờ đã cấu hình.
Tuy nhiên trong nhiều trường hợp (ví dụ: trước khi nâng cấp hệ thống), bạn có thể muốn **chạy một bản backup ngay lập tức**.
Cách thực hiện:
**Bước 1:** Vào **Backup → Backup Management**
**Bước 2:** Tại dòng Backup Job cần chạy, trong cột **Action** , chọn **Start**
**Bước 3:** Một hộp thoại xác nhận sẽ hiển thị. Chọn **Start** để tiến hành chạy job.
Sau khi bạn gửi yêu cầu, hệ thống sẽ:
  * Kiểm tra điều kiện tài nguyên
  * Xác nhận lại trạng thái
  * Bắt đầu thực hiện backup trên các VM đã được gắn vào job

Tiến độ sẽ được cập nhật trực tiếp trên màn hình **Backup Management**.
## **5. Enable / Disable Backup Job**
### **Disable Backup Job**
Nếu bạn **tạm thời không muốn tiếp tục backup** tự động, bạn có thể **Disable** Backup Job. Khi đó:
  * Hệ thống **dừng việc tạo restore point mới**
  * Các restore point cũ vẫn được giữ nguyên
  * Target tương ứng tạm thời không được bảo vệ thêm trong tương lai

Cách thao tác:
  1. Vào **Backup → Backup Management**
  2. Tại job cần tạm dừng, chọn **Disable** trong cột **Action**
  3. Xác nhận lại trong hộp thoại cảnh báo bằng cách chọn **Disable**

### **Enable Backup Job**
Khi muốn bật lại job đã tạm dừng:
  1. Vào **Backup → Backup Management**
  2. Tại job cần bật lại, chọn **Enable** trong cột **Action**

Từ thời điểm Enable, job sẽ tiếp tục chạy theo lịch đã cấu hình, tạo các restore point mới.
## **6. Xóa Backup Job**
Trong FPT Backup, việc **xóa Backup Job** có ý nghĩa là bạn **không còn nhu cầu bảo vệ** các máy ảo đang nằm trong job đó.
> Cảnh báo quan trọng:
>   * Thao tác **Delete Backup Job** sẽ: 
>     * Dừng hoàn toàn các lần backup tự động trong tương lai
>     * **Xóa toàn bộ các restore point** đã được tạo trước đó
>     * Các restore point đã xóa **không thể khôi phục lại**
>   * Từ thời điểm đó, các VM trong job sẽ **không còn được bảo vệ** bởi FPT Backup.
> 

Nếu có một VM quan trọng mà bạn vẫn muốn giữ lại các restore point hãy **detach VM đó khỏi Backup Job** trước
### Cách xóa Backup Job
**Bước 1:** Vào **Backup → Backup Management**
**Bước 2:** Tại job cần xóa, trong cột **Action** , chọn **Delete**
**Bước 3:** Một hộp thoại cảnh báo sẽ xuất hiện, yêu cầu xác nhận. Chọn **Delete** để xóa hoàn toàn Backup Job.