---
id: "restore-file-and-folder-for-linux"
title: "Restore File and Folder for Linux"
sidebar_label: "Restore File and Folder for Linux"
sidebar_position: "5"
---

# Restore File and Folder for Linux

**ステップ1:** Trên server linux gõ lệnh veeam để khởi mở giao diện quản trị backup.
[![file](/img/migrated/image-1695293630461-653a169c.png)](/img/migrated/image-1695293630461-653a169c.png)
**ステップ2:** Nhấn phím R.
[![file](/img/migrated/image-1695293640386-6b890987.png)](/img/migrated/image-1695293640386-6b890987.png)
Sử dụng phím tab để di chuyển sau đó lựa chọn thời điểm cần khôi phục
**ステップ3:** Cấu hình lại network nếu cần
Trường hợp VM khởi tạo để restore add network có DHCP thì không cần Configure network và có thể bỏ qua bước 3 này Còn lại cần phải click vào “Configure network” để đặt IP static cho VM restore. Note: IP của VM này cần được mở kết nối ra internet hoặc đến baas-sgn-gw.fptcloud.com (site HCM) và baas-han-gw.fptcloud.com port 6180 để thực hiện restore. [![file](/img/migrated/image-1695293652239-c8d98b0c.png)](/img/migrated/image-1695293652239-c8d98b0c.png) Thực hiện chọn edit a connection để đặt IP manual cho VM restore: [![file](/img/migrated/image-1695294368455-b227ce55.png)](/img/migrated/image-1695294368455-b227ce55.png) Chọn Edit để set IP cho VM [![file](/img/migrated/image-1695294377573-3f399b0e.png)](/img/migrated/image-1695294377573-3f399b0e.png) Chọn IPv4 Configuration sau đó chọn mode Manual -> Show để đặt IP [![file](/img/migrated/image-1695294387294-1b721428.png)](/img/migrated/image-1695294387294-1b721428.png) Sau khi đặt xong IP chọn OK và nhấn ESC để back lại màn hình chính để tiến hành restore
**ステップ4:** Nhấn phím I để mount phân vùng chưa dữ liệu cần restore vào server. Dữ liệu sẽ được mount vào đường dẫn /mnt/backup
[![file](/img/migrated/image-1695293662668-59e66199.png)](/img/migrated/image-1695293662668-59e66199.png)
**ステップ5:** Vào thư mục /mnt/backup
Copy file hoặc folder về nơi cần khôi phục.
[![file](/img/migrated/image-1695293675138-d1e922a0.png)](/img/migrated/image-1695293675138-d1e922a0.png)
**ステップ6:** Sau khi đã toàn thành việc restore file hoặc folder
Bạn vào lại phần mềm Veeam và ấn phím U để kết thúc việc restore.
[![file](/img/migrated/image-1695293683941-a9d86933.png)](/img/migrated/image-1695293683941-a9d86933.png)
