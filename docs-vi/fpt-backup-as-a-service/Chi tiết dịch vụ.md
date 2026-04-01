---
id: "Chi tiết dịch vụ"
title: "Chi Tiết Dịch Vụ"
description: "FPT Cloud cung cấp máy chủ sao lưu được cấu hình và triển khai trên hệ thống on-premise đang sử dụng các hệ thống ảo hóa"
sidebar_label: "Chi Tiết Dịch Vụ"
sidebar_position: 2
---

# Chi Tiết Dịch Vụ

## Client Backup Server
FPT Cloud cung cấp máy chủ sao lưu được cấu hình và triển khai trên hệ thống on-premise đang sử dụng các hệ thống ảo hóa như VMware hoặc Hyper V. Máy chủ sao lưu được quản lý và điều hành từ xa bởi quản trị viên của FPT Cloud  
FPT Cloud cung cấp như sau:
  * Giám sát máy chủ - tính khả dụng, hiệu suất và trạng thái.
  * Quản trị thiết bị từ xa
  * Bảo trì hệ thống, hệ điều hành và công cụ sao lưu

## BaaS Portal
FPT Cloud cung cấp quyền truy cập vào cổng web địch vụ BaaS. Portal sẽ cung cấp những tiện ích sau:
  * Giám sát và xem các máy chủ, hệ thống đã được bảo vê
  * Giám sát tiến trình, lich sử và trạng thái job backup
  * Xem chi tiết hệ thống máy chủ như kích thước sao lưu, lịch trình, các điểm khôi phục 
  * Chủ động khôi phục dữ liệu 
  * Thông báo tiến trình job backup, tài nguyên trạng thái kết nối thông qua email 

## Definitions
  * **Agent:** phần mềm trong hệ thống thực hiện các thao tác bảo vệ dữ liệu của các thiết bị vật lý và ảo hóa
  * **VBR server:** Giao tiếp với tất cả các máy chủ trong hệ thống và điều phối các hoạt động như bảo vệ, khôi phục, các hoạt động quản trị, quản lý job backup, quản lý sự kiện tiến trình.
  * **Data Compression:** Giả pháp tiết kiểm dữ liệu làm giảm dung lượng lưu trữ
  * **Data Encryption:** Giải pháp bảo mật dữ liệu
  * **Data Replication:** Sao chép dữ liệu làm bản sao của các máy chủ trong hệ thống người dùn. Các bản sao này có thể được truy cập ngay lập tức để khôi phục nhanh, được sử dụng tạo nhiều điểm khôi phục mà không ảnh hưởng đến hiệu suất của máy chủ.
  * **Disaster Recovery:** Việc lập kế hoạch hoặc triển khai chiến lược để ứng phó với các lỗi như mất toàn bộ cơ sở hạ tầng hoặc do lỗi nghiêm trọng.
  * **Backup copy:** Là một phiên bản của cũng một tệp sao lưu và được sao chép vào kho lưu trữ để lưu trữ lâu dài. Các khó lưu trữ có thể được đặt trong hệ thống nguồn hoặc có thể được triển khai bên ngoài hệ thống. Tệp sao lưu có cũng định dạng với tệp sao lưu chính, vì vậy có thể khôi phục dữ liệu cần thiết trực tiếp trong trường hợp xảy ra sự cố.
  * **Retention Period:** Khoảng thời gian một bộ dữ liệu sao lưu cụ thể không vượt quá tiêu chí lưu giữ của nó. Khi khoảng thời gian lưu giữ đã hết và quá trình dữ liệu bị lỗi thời, dữ liệu này sẽ không khả dụng để khôi phục.
  * **Retention Poins:** Số lượng job thành công được lưu trữ liên tiếp
  * **RPO:** Restore point objective. Điểm khôi phục được xác định bởi lịch trình sao lưu
  * **RTO:** Restore time objective: thời gian khôi phục được xác định bởi phương pháp và lượng dữ liệu được khôi phục
