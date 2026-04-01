---
id: "clone-vm-tu-cac-restore-point"
title: "Tạo VM mới từ các Restore Point"
sidebar_label: "Tạo VM mới từ các Restore Point"
sidebar_position: "5"
---

# Create VM mới from the Restore Point

FPT Backup hỗ trợ you không chỉ restore lại VM from Restore Point mà còn for phép tạo a VM mới with dữ liệu is lấy from Restore Point. VM is tạo will có dữ liệu disk giống hoàn toàn with VM gốc tại thời điểm tạo Restore Point, đồng thời for phép tùy chỉnh cấu hình RAM, CPU and Network. Điều this giúp you dễ dàng tạo ra nhiều VM phụ from a VM chính a theh nhanh chóng and đơn giản.
## **Hướng Dẫn Chi Tiết**
### **Step 1: Mở Quản Lý Backup & Recovery**
  1. Truy cập ando giao diện quản trị of **FPT Backup**.
  2. Chọn menu **Backup & Recovery** > **Backup & Recovery Management**.
  3. Mở tab **Restore** to xem danh sách the VM is is bảo vệ and số lượng Restore Point has been tạo successfully.

### **Step 2: Chọn VM cần Clone**
  1. Xác định VM cần thực hiện clone from danh sách has been displayed.
  2. Ở cột **Action** of VM that, nhấn chọn **Restore Keep**.

### **Step 3: Create VM Mới from Restore Point**
  1. Một cửa sổ popup có tên **New instance from restore point** will appears.
  2. Thực hiện the bước sau: 
     * Select **Restore Point** mà you muốn sử dụng.
     * Enter tên for VM mới tại trường **New instance Name**.
     * Nhấn nút **Restore New Instance** to tạo VM mới.

### **Step 4: Xác Nhận and Tiến Hành Clone**
  1. Một hộp thoại xác nhận will hiện lên, yêu cầu you kiểm tra lại thông tin.
  2. Select **Restore Instance** to xác nhận and bắt đầu quá trình tạo VM.

## **Save Ý Quan Trọng**
  * **Configure VM mới:** Sau when tạo, you can tùy chỉnh RAM, CPU and Network of VM mới theo nhu cầu.
  * **Thời gian hoàn thành:** Quá trình tạo VM from Restore Point thường mất andi phút to andi giờ, tùy thuộc ando dung lượng dữ liệu.
