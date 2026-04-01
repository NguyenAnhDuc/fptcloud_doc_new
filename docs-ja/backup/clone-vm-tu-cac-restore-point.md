---
id: "clone-vm-tu-cac-restore-point"
title: "Tạo VM mới từ các Restore Point"
sidebar_label: "Tạo VM mới từ các Restore Point"
sidebar_position: "5"
---

# Tạo VM mới từ các Restore Point

FPT Backup hỗ trợ bạn không chỉ khôi phục lại VM từ Restore Point mà còn cho phép tạo một VM mới với dữ liệu được lấy từ Restore Point. VM được tạo sẽ có dữ liệu ổ đĩa giống hoàn toàn với VM gốc tại thời điểm tạo Restore Point, đồng thời cho phép tùy chỉnh cấu hình RAM, CPU và Network. Điều này giúp bạn dễ dàng tạo ra nhiều VM phụ từ một VM chính một cách nhanh chóng và đơn giản.
## **Hướng Dẫn Chi Tiết**
### **ステップ1: Mở Quản Lý Backup & Recovery**
  1. にアクセスします giao diện quản trị của **FPT Backup**.
  2. Chọn menu **Backup & Recovery** > **Backup & Recovery Management**.
  3. Mở tab **Restore** để xem danh sách các VM đang được bảo vệ và số lượng Restore Point đã tạo thành công.

### **ステップ2: Chọn VM cần Clone**
  1. Xác định VM cần thực hiện clone từ danh sách đã hiển thị.
  2. Ở cột **Action** của VM đó, nhấn chọn **Restore Keep**.

### **ステップ3: Tạo VM Mới từ Restore Point**
  1. Một cửa sổ popup có tên **New instance from restore point** sẽ xuất hiện.
  2. Thực hiện các bước sau: 
     * **Restore Point** mà bạn muốn sử dụng.
     * Nhập tên cho VM mới tại trường **New instance Name**.
     * Nhấn nút **Restore New Instance** để tạo VM mới.

### **ステップ4: Xác Nhận và Tiến Hành Clone**
  1. Một hộp thoại xác nhận sẽ hiện lên, yêu cầu bạn kiểm tra lại thông tin.
  2. **Restore Instance** để xác nhận và bắt đầu quá trình tạo VM.

## **Lưu Ý Quan Trọng**
  * **Cấu hình VM mới:** Sau khi tạo, bạn có thể tùy chỉnh RAM, CPU và Network của VM mới theo nhu cầu.
  * **Thời gian hoàn thành:** Quá trình tạo VM từ Restore Point thường mất vài phút đến vài giờ, tùy thuộc vào dung lượng dữ liệu.
