---
id: "backup-restore"
title: "Các loại Backup"
description: "Tính năng **Backup & Restore** trên FPT Database Engine giúp bảo vệ dữ liệu trước các rủi ro như xoá nhầm, lỗi dữ liệu h"
sidebar_label: "Các loại Backup"
sidebar_position: 26
---

# Backup Restore

Tính năng **Backup & Restore** trên FPT Database Engine giúp bảo vệ dữ liệu trước các rủi ro như xoá nhầm, lỗi dữ liệu hoặc sự cố hệ thống. Nền tảng hỗ trợ sao lưu tự động, khôi phục dữ liệu từ các bản sao lưu và khôi phục dữ liệu về một thời điểm cụ thể (Point-in-Time Recovery) đối với một số database engine được hỗ trợ.

### Backup
Backup là quá trình tạo bản sao dữ liệu của cơ sở dữ liệu tại một thời điểm xác định. Các bản backup được sử dụng để khôi phục dữ liệu khi xảy ra sự cố hoặc lỗi vận hành. Cơ chế backup được thiết kế nhằm bảo vệ dữ liệu, hỗ trợ khôi phục khi xảy ra sự cố và đáp ứng các yêu cầu về tuân thủ và bảo mật trong môi trường cloud.
Chức năng Backup cho phép bạn thiết lập, vận hành và giám sát các hoạt động sao lưu cho cơ sở dữ liệu. Bạn có thể:
  * Bật hoặc tắt dịch vụ backup cho cơ sở dữ liệu
  * Quản lý lịch sao lưu (backup job)
  * Theo dõi trạng thái thực thi thông qua giao diện quản lý tập trung.

Tính năng Backup khả dụng cho tất cả các loại engine do FPT cung cấp.

### Các loại Backup
FPT Database Engine hỗ trợ 2 loại backup sau:
  * **Full Backup** : Sao lưu toàn bộ dữ liệu của cơ sở dữ liệu.
  * **Diff (Incremental) backup** : Sao lưu các thay đổi kể từ lần backup gần nhất, giúp giảm thời gian và dung lượng lưu trữ.

### Lưu trữ Backup
Các bản backup được lưu trữ trên hệ thống storage độc lập, tách biệt hoàn toàn với database cluster nhằm đảm bảo độ bền dữ liệu (durability) và tính sẵn sàng khôi phục khi database cluster gặp sự cố.

### Backup Retention
Backup retention xác định số lượng bản full backup được giữ lại trong hệ thống. Khi vượt quá số lượng retention đã cấu hình, các bản backup cũ nhất sẽ được tự động xóa.

### Restore
Restore cho phép bạn khôi phục database từ một bản backup hiện có. Quá trình restore tạo một database mới dựa trên dữ liệu tại thời điểm backup được chọn.

### Point-in-Time Recovery (PITR)
Point-in-Time Recovery cho phép khôi phục cơ sở dữ liệu về một thời điểm cụ thể trong quá khứ. PITR hoạt động bằng cách kết hợp full backup định kỳ và transaction logs / archived logs được ghi nhận liên tục. Cơ chế này đảm bảo khả năng khôi phục chính xác và tin cậy.
Chức năng này đặc biệt hữu ích khi bạn cần khôi phục dữ liệu từ một thời điểm chính xác, chẳng hạn như khi phát hiện ra lỗi hoặc sự cố trong quá trình hoạt động của hệ thống. **Hiện tại, chức năng này chỉ được hỗ trợ cho PostgreSQL.**
Việc kết hợp giữa backup và PITR giúp tăng cường khả năng bảo vệ dữ liệu, đảm bảo tính sẵn sàng cao và cung cấp khả năng khôi phục linh hoạt cho các kịch bản vận hành thực tế.

### Quyền cần thiết  
| Tên quyền  | Loại thao tác  | Mô tả  |  
| --- | --- | --- |  
| manageDatabase:ListBackup  | View  | Quyền xem thông tin Backup cơ sở dữ liệu.  |  
| manageDatabase:EnableBackup  | Create  | Quyền kích hoạt chức năng Backup & Restore cho cơ sở dữ liệu.  |  
| manageDatabase:DeleteBackup  | Edit  | Quyền vô hiệu hóa chức năng Backup & Restore cho cơ sở dữ liệu.  |  
| manageDatabase:CreateJobBackup  | Create  | Quyền tạo job backup cho cơ sở dữ liệu.  |  
| manageDatabase:ViewJobBackup  | View  | Quyền xem chi tiết job backup.  |  
| manageDatabase:RunNowJobBackup  | Create  | Quyền tạo snapshot backup thủ công cho cơ sở dữ liệu.  |  
| manageDatabase:EditJobBackup  | Edit  | Quyền chỉnh sửa job backup.  |  
| manageDatabase:DeleteJobBackup  | Delete  | Quyền xoá job backup.  |  
| manageDatabase:ListRestore  | View  | Quyền xem danh sách bản backup có thể restore.  |  
| manageDatabase:Restore  | Create  | Quyền khôi phục database từ bản backup hoặc khôi phục theo thời điểm cụ thể.  |
