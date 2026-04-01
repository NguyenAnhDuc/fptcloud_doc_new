---
id: "quan-ly-backup-job"
title: "Quản lý Backup job"
sidebar_label: "Quản lý Backup job"
sidebar_position: "3"
---

# Manage Backup job

FPT Backup sử dụng khái niệm **Backup Job** to quản lý, theo dõi and điều phối the tác vụ backup đối with tài nguyên cần bảo vệ (ví dụ: VM, volume).
Khi you khởi tạo a Backup Job, you will cấu hình:
  * **Kịch bản backup** (daily / weekly / monthly)
  * **Phương thức backup** (Full / Incremental)
  * **Đối tượng backup** (danh sách VM / Vol)
  * **Người nhận notification** (email)

Sau when is tạo successfully, Backup Job will **chạy hoàn toàn tự động** theo lịch has been thiết lập. Mỗi lần chạy, job will tạo ra a **restore point (điểm phục hồi)** mới and lưu trữ tại a phân vùng lưu trữ riêng biệt, cùng **region** with VPC of you.
Điều this giúp tăng độ an toàn for dữ liệu in trường hợp tài nguyên sản xuất bị tấn công or gặp sự cố.
## **1. Initialize a Backup Job mới**
### **Step 1: Mở màn hình tạo Backup Job**
Trên FPT Cloud Portal, truy cập Backup & Recovery ⇒ Create Backup Job
### **Step 2: Configure thông tin Backup Job**
Bạn cấu hình Backup Job theo nhu cầu with the trường sau:  
| **Tên trường**  | **Mô tả**  |  
| --- | --- |  
| **Name**  | Tên of Backup Job. Nên đặt dễ hiểu, gắn with hệ thống or môi trường (ví dụ: `prod-web-01-daily`).  |  
| **Description**  | Mô tả ngắn gọn mục đích or phạm vi bảo vệ.  |  
| **Notification to**  | Chọn người nhận notification qua Email. Bạn can tạo mới contact bằng theh bấm ando link _“Create your email contact here”_ trên FPT Portal.  |  
| **Target selection**  | Chọn the VM or volume in VPC will áp dụng Backup Job. Một Backup Job can gắn with **nhiều target** , nhưng **a target chỉ is gắn with a Backup Job**.  |  
| **Latest backup to keep**  | Số lượng **restore point tối đa** will giữ lại, mặc định là **7**. Khi vượt quá số this, hệ thống will tự động xóa the bản cũ nhất.  |  
| **Retention information**  | Chọn kịch bản backup nhanh. System will gợi ý a số option thông dụng:  |  
  * **Daily full backup:** Backup full hằng ngày. 
  * **Daily incremental, Weekly active full:** Lần đầu backup full, the lần tiếp theo in tuần là incremental, cuối tuần tạo 1 bản full. 
  * **Daily incremental, Monthly active full:** Lần đầu backup full, the lần tiếp theo in tháng là incremental, cuối tháng tạo 1 bản full. |

### **Step 3: Create Backup Job**
Click **Create** to khởi tạo Backup Job mới.
System will:
  * Check tài nguyên
  * Confirm cấu hình hợp lệ
  * Tiến hành tạo job theo thông tin you has been khai báo

Sau when tạo successfully, you will thấy Backup Job ở status **Initiated**.
Đến thời gian has been cấu hình, job will tự động chạy and tạo **restore point** đầu tiên.
Nếu you muốn chạy ngay không chờ to lịch, can dùng chức năng **Start** (mục 3.4 below).
Ngoài ra, in phần cấu hình chi tiết of fromng VM is gắn ando Backup Job, will appears thêm tab **Backups** , here:
  * Hiển thị danh sách **restore point** khả dụng
  * Cho biết **lịch backup** tiếp theo

## **2. Monitor tiến độ Backup Job**
Tiến độ and status of Backup Job is displayed trực tiếp in màn hình **Backup Management** , chủ yếu thông qua:
  * **Status (Trạng thái job)**
  * **Next Run (Lần chạy tiếp theo)**

Các status phổ biến:
  * **Initiated:** Job has been is tạo xong, is chờ chạy lần đầu.
  * **Success:** Lần chạy backup gần nhất **successfully**.
  * **Fail:** Lần chạy backup gần nhất **bị lỗi** (can do resource, network, cấu hình…).
  * **Pending:** Job is bị tạm dừng do lỗi resource, lỗi hạ tầng or điều kiện tạm thời khác.

Khi job is chạy, you can thấy status chuyển qua the bước trung gian; tiến độ and kết quả cuối cùng will is cập nhật lại after hoàn tất.
## **3. View danh sách Backup Job hiện tại**
Để xem danh sách tất cả Backup Job trên hệ thống:
  1. Trên Portal, ando **Backup → Backup Management**
  2. Chọn tab **Backup Job**

Tại đây, you will thấy:
  * **Name:** Tên job
  * **Status:** Trạng thái hiện tại (Initiated / Success / Fail / Pending / Disabled…)
  * **Instances:** List virtual machine is gắn with job 
    * Các VM has been bị xóa khỏi hệ thống will is displayed dạng **gạch tên**.
  * **Next Run:** Thời gian job will chạy tiếp theo theo lịch has been cấu hình
  * Các nút thao tác: **Start** , **Enable/Disable** , **Delete** , **View Detail** …

Bạn can dùng ô tìm kiếm or bộ lọc to nhanh chóng tìm job theo tên, status or theo tài nguyên gắn kèm.
## **4. Start Backup Job thủ công**
Mặc định mỗi Backup Job will tự động chạy when to giờ has been cấu hình.
Tuy nhiên in nhiều trường hợp (ví dụ: before upgrade hệ thống), you can muốn **chạy a bản backup ngay lập tức**.
Cách thực hiện:
**Step 1:** Vào **Backup → Backup Management**
**Step 2:** Tại dòng Backup Job cần chạy, in cột **Action** , chọn **Start**
**Step 3:** Một hộp thoại xác nhận will displayed. Select **Start** to tiến hành chạy job.
Sau when you gửi yêu cầu, hệ thống will:
  * Check điều kiện tài nguyên
  * Confirm lại status
  * Bắt đầu thực hiện backup trên the VM has been is gắn ando job

Tiến độ will is cập nhật trực tiếp trên màn hình **Backup Management**.
## **5. Enable / Disable Backup Job**
### **Disable Backup Job**
Nếu you **tạm thời không muốn tiếp tục backup** tự động, you can **Disable** Backup Job. Khi that:
  * System **dừng việc tạo restore point mới**
  * Các restore point cũ vẫn is giữ nguyên
  * Target corresponding tạm thời không is bảo vệ thêm in tương lai

Cách thao tác:
  1. Vào **Backup → Backup Management**
  2. Tại job cần tạm dừng, chọn **Disable** in cột **Action**
  3. Confirm lại in hộp thoại alert bằng theh chọn **Disable**

### **Enable Backup Job**
Khi muốn bật lại job has been tạm dừng:
  1. Vào **Backup → Backup Management**
  2. Tại job cần bật lại, chọn **Enable** in cột **Action**

Từ thời điểm Enable, job will tiếp tục chạy theo lịch has been cấu hình, tạo the restore point mới.
## **6. Delete Backup Job**
Trong FPT Backup, việc **xóa Backup Job** có ý nghĩa là you **không còn nhu cầu bảo vệ** the virtual machine is nằm in job that.
> Cảnh báo quan trọng:
>   * Thao tác **Delete Backup Job** will: 
>     * Dừng hoàn toàn the lần backup tự động in tương lai
>     * **Delete toàn bộ the restore point** has been is tạo trước that
>     * Các restore point has been xóa **cannot restore lại**
>   * Từ thời điểm that, the VM in job will **không còn is bảo vệ** bởi FPT Backup.
> 

Nếu có a VM quan trọng mà you vẫn muốn giữ lại the restore point hãy **detach VM that khỏi Backup Job** trước
### Cách xóa Backup Job
**Step 1:** Vào **Backup → Backup Management**
**Step 2:** Tại job cần xóa, in cột **Action** , chọn **Delete**
**Step 3:** Một hộp thoại alert will appears, yêu cầu xác nhận. Select **Delete** to xóa hoàn toàn Backup Job.
