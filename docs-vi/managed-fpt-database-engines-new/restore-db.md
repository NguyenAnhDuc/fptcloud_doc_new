---
id: "restore-db"
title: "Khôi phục cơ sở dữ liệu"
description: "Chức năng **Restore** và **Point-in-Time Recovery (PITR)** cho phép người dùng phục hồi cơ sở dữ liệu từ các bản sao lưu"
sidebar_label: "Khôi phục cơ sở dữ liệu"
sidebar_position: 30
---

# Restore Db

Chức năng **Restore** và **Point-in-Time Recovery (PITR)** cho phép người dùng phục hồi cơ sở dữ liệu từ các bản sao lưu hoặc khôi phục cơ sở dữ liệu về một thời điểm cụ thể trong quá khứ. Các hướng dẫn trong mục này giúp người dùng thực hiện quá trình khôi phục dữ liệu một cách chính xác, an toàn và hiệu quả, đồng thời đảm bảo tính toàn vẹn của dữ liệu.
Khi thực hiện **Restore** hoặc **PITR** , hệ thống sẽ **tạo một database cluster mới** và **không ghi đè lên cluster hiện tại**.
Hiện tại, **FPT Cloud hỗ trợ Restore cho tất cả các database engine đang cung cấp** và **hỗ trợ PITR cho PostgreSQL**.
### 1. Restore database
Chức năng Restore cho phép người dùng sử dụng một bản sao lưu (backup) đã tạo trước đó để khôi phục dữ liệu và tạo một cụm cơ sở dữ liệu (database cluster) mới. Tính năng này hữu ích trong các trường hợp mất dữ liệu, lỗi hệ thống, hoặc khi cần roll back về trạng thái trước đó.
Trước khi thực hiện restore, cần đảm bảo cụm cơ sở dữ liệu đã có ít nhất một bản backup (restore point) được tạo thành công - tức là có ít nhất một restore point sẵn sàng để restore.
Các bước thực hiện Restore:
#### Bước 1: Truy cập màn hình Restore
Từ thanh menu, chọn **Database Platform** > Chọn menu **All Database** hoặc menu tương ứng với nhóm cơ sở dữ liệu > nhấp vào Cluster ID của databse cluster cần restore > chọn tab **Backup** > chọn sub-tab **Restore**. Hệ thống sẽ hiển thị danh sách các _Available Restore Points_ , bao gồm loại backup (Full hoặc Diff).
[![](/img/migrated/DBaaS_BackupDB_restore_list-44b1a2e5.png)](/img/migrated/DBaaS_BackupDB_restore_list-44b1a2e5.png)
#### Bước 2: Thực hiện Restore
Tại cột **Actions** , bấm vào biểu tượng ba chấm (⋮) tương ứng với restore point mong muốn → chọn **Restore**. Một hộp thoại Restore Database sẽ xuất hiện:
[![](/img/migrated/restore-1-a841d3d9.jpg)](/img/migrated/restore-1-a841d3d9.jpg)
Nhập thông tin theo yêu cầu:
  * **Restore Cluster Name** : Tên của cluster mới được sinh ra khi restore.
  * **Flavor** : Lựa chọn cấu hình phù hợp cho cluster mới.

Nhấn **Restore** để bắt đầu quá trình khôi phục. Sau khi hoàn tất, một database cluster mới sẽ xuất hiện trong danh sách quản lý Database Engines, chứa dữ liệu từ bản backup đã chọn.
### 2. Recover to Point-in-Time
Chức năng **Recover to Point-in-Time** cho phép người dùng khôi phục cơ sở dữ liệu về một thời điểm chính xác trong quá khứ, rất hữu ích khi cần phục hồi dữ liệu sau sự cố hoặc lỗi phát sinh trong quá trình vận hành. Hiện tại, chức năng này **chỉ được hỗ trợ cho PostgreSQL.**
Trước khi thực hiện PITR, cần đảm bảo:
  * Database cluster đã bật PITR.
  * Đã có ít nhất một bản backup toàn bộ cơ sở dữ liệu (backup full).
  * Hệ thống đã lưu trữ đầy đủ archived logs phục vụ quá trình khôi phục.

Các bước thực hiện Recover to Point-in-Time:
#### Bước 1: Truy cập màn hình Restore
Thực hiện tương tự như bước truy cập màn hình Restore trong phần Restore Database.
#### Bước 2: Thực hiện khôi phục
Tại tab **Restore** , chọn **Restore to Point in Time**. Hộp thoại Restore Database to a Point in Time xuất hiện.
[![](/img/migrated/DBaaS_BackupDB_recover-493cd14e.png)](/img/migrated/DBaaS_BackupDB_recover-493cd14e.png)
Nhập thông tin theo yêu cầu:
  * **Restore Cluster Name** : Tên của cluster mới được sinh ra khi khôi phục.
  * **Flavor** : Lựa chọn cấu hình phù hợp cho cluster mới.
  * **Recover To** : Chọn thời điểm chính xác mà bạn muốn khôi phục cơ sở dữ liệu (theo định dạng ngày giờ).

Nhấn **Recover** để bắt đầu quá trình khôi phục. Hệ thống sẽ tạo một cluster mới và phục hồi dữ liệu về thời điểm đã chỉ định. Sau khi hoàn tất, một database cluster mới sẽ xuất hiện trong màn hình danh sách Database Engines, chứa dữ liệu tại đúng thời điểm khôi phục.
**Lưu ý:** Bạn chỉ có thể khôi phục dữ liệu về các mốc thời gian sau khi bản Full Backup đầu tiên được tạo kể từ thời điểm kích hoạt PITR. Nếu bản Full Backup này chưa được thực thi, tính năng PITR sẽ chưa sẵn sàng. Mọi thay đổi dữ liệu phát sinh trước mốc Full Backup này không nằm trong phạm vi bảo vệ của PITR và không thể khôi phục.
