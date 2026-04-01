---
id: "restore-file-and-folder-for-linux"
title: "Restore File and Folder for Linux"
sidebar_label: "Restore File and Folder for Linux"
sidebar_position: "5"
---

# Restore File and Folder for Linux

**Step 1:** Trên server linux gõ lệnh veeam to khởi mở interface quản trị backup.
[![file](/img/migrated/image-1695293630461-653a169c.png)](/img/migrated/image-1695293630461-653a169c.png)
**Step 2:** Nhấn phím R.
[![file](/img/migrated/image-1695293640386-6b890987.png)](/img/migrated/image-1695293640386-6b890987.png)
Sử dụng phím tab to di chuyển sau that lựa chọn thời điểm need to restore
**Step 3:** Configure lại network if need to
Trường hợp VM khởi tạo to restore add network có DHCP thì không need to Configure network and can bỏ qua bước 3 this Còn lại need to must click ando “Configure network” to đặt IP static for VM restore. Note: IP of VM this need to is mở kết nối ra internet or đến baas-sgn-gw.fptcloud.com (site HCM) and baas-han-gw.fptcloud.com port 6180 to thực hiện restore. [![file](/img/migrated/image-1695293652239-c8d98b0c.png)](/img/migrated/image-1695293652239-c8d98b0c.png) Thực hiện chọn edit a connection to đặt IP manual for VM restore: [![file](/img/migrated/image-1695294368455-b227ce55.png)](/img/migrated/image-1695294368455-b227ce55.png) Chọn Edit to set IP for VM [![file](/img/migrated/image-1695294377573-3f399b0e.png)](/img/migrated/image-1695294377573-3f399b0e.png) Chọn IPv4 Configuration sau that chọn mode Manual -> Show to đặt IP [![file](/img/migrated/image-1695294387294-1b721428.png)](/img/migrated/image-1695294387294-1b721428.png) Sau when đặt xong IP chọn OK and click ESC to back lại màn hình chính to proceed with restore
**Step 4:** Nhấn phím I to mount phân vùng chưa dữ liệu need to restore ando server. Dữ liệu will is mount ando đường dẫn /mnt/backup
[![file](/img/migrated/image-1695293662668-59e66199.png)](/img/migrated/image-1695293662668-59e66199.png)
**Step 5:** Vào thư mục /mnt/backup
Copy file or folder về nơi need to restore.
[![file](/img/migrated/image-1695293675138-d1e922a0.png)](/img/migrated/image-1695293675138-d1e922a0.png)
**Step 6:** Sau when has been toàn thành việc restore file or folder
Bạn ando lại phần mềm Veeam and ấn phím U to kết thúc việc restore.
[![file](/img/migrated/image-1695293683941-a9d86933.png)](/img/migrated/image-1695293683941-a9d86933.png)
