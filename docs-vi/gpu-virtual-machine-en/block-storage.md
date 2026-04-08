---
id: "block-storage"
title: "Block Storage"
description: "Block Storage trên GPU Virtual Machine."
sidebar_label: "Block Storage"
sidebar_position: 11
---

# Block Storage

### Tổng quan
**Block Storage** là dịch vụ cung cấp các volume storage dạng block cho **GPU Virtual Machine (VM)**. Mỗi disk storage hoạt động như một ổ cứng vật lý khi được gắn vào VM, hỗ trợ truy cập dữ liệu nhanh, ổn định và thông lượng cao.
So với storage NVMe cục bộ, Block Storage mang lại độ bền, khả năng mở rộng và tính bền vững cao hơn, đảm bảo dữ liệu luôn khả dụng ngay cả khi VM bị xóa hoặc dừng.

Có hai loại disk Block Storage:
  * **Root disk:** Là disk hệ thống chính của VM, chứa OS và các file hệ thống thiết yếu cần thiết để khởi động và vận hành. Được tạo tự động cùng với VM trong quá trình cấp phát.
  * **External disk:** Là disk dữ liệu độc lập dùng để mở rộng dung lượng storage của VM. External disk có thể được tháo ra khỏi một VM và gắn vào VM khác, cho phép tái sử dụng dữ liệu linh hoạt giữa các khối lượng công việc.

Để truy cập dịch vụ này, vào **Main Menu > Compute Engine > Storage disks**.
Từ trang này, bạn có thể xem danh sách tất cả Storage Disk được tạo trong VPC, cùng với các thông tin quan trọng như **Name**, **Tags**, **Storage type**, **Storage policy**, **Size**, **Created At** (ngày tạo) và **Attached** (máy ảo liên kết).

### Tạo Storage Disk
Để tạo Storage disk trong FPT Cloud, trước tiên hãy xác định loại disk bạn cần:
  * **Root disk** được tạo tự động cùng với máy ảo. Tham khảo: [Create a GPU VM](/docs/vi/gpu-virtual-machine-en/)/
  * **External disk** có thể được tạo độc lập và gắn vào máy ảo sau.

Bạn có thể tạo External disk bằng một trong các phương pháp sau:

#### Phương pháp 1: Tạo External disk từ trang chi tiết máy ảo
**1. Truy cập phần Storage:**
  * Từ main menu, vào **Compute Engine > Instance management**.
  * Chọn máy ảo bạn muốn thêm external storage từ danh sách, sau đó nhấp **Storage tab**.
  * Nhấp **Create disk**.

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-1.png)](https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-1.png)

**2. Nhập cấu hình cần thiết:**
  * **Storage policy:** Chọn loại storage hoặc performance tier.
  * **Size:** Xác định dung lượng storage.

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-2.png)](https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-2.png)

**3. Tạo disk:**
  * Nhấp **Create disk**.
  * Hệ thống sẽ khởi tạo disk mới và thông báo cho bạn khi hoàn tất.
  * Sau khi thành công, External disk mới sẽ xuất hiện trong tab **Storage**.

#### Phương pháp 2: Tạo External disk từ trang Storage disks
**1. Truy cập trang Storage disks:**
  * Từ main menu, vào **Compute Engine > Storage disks**.
  * Nhấp **Create storage**.

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-2.png)](https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-2.png)

**2. Nhập cấu hình cần thiết:**
  * **Name:** Chỉ định tên disk storage.
  * **Type:** Chọn _General_ để tạo disk trống mới hoặc _Snapshot_ để khôi phục từ snapshot hiện có.
  * **Storage policy:** Chọn loại storage hoặc performance tier.
  * **Size:** Xác định dung lượng storage.
  * **Applied instance (tùy chọn):** Chọn VM để gắn disk vào (có thể thực hiện sau).

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-4.png)](https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-4.png)

**3. Tạo disk:**
  * Nhấp **Create storage disk**.
  * Hệ thống sẽ khởi tạo disk mới và thông báo cho bạn khi hoàn tất.
  * Sau khi thành công, External disk mới sẽ xuất hiện trong trang **Storage disks**.

### Gắn External Disk vào GPU VM
Sau khi tạo, nếu External disk chưa được gắn vào bất kỳ máy ảo nào, bạn có thể gắn thủ công để sử dụng.
Storage disk tương thích với tất cả OS được hỗ trợ trên FPT Cloud.

**1.** Chọn External disk bạn muốn gắn. Sau đó nhấp **Actions > Attach**.
[![Alt text](/img/migrated/Block-Storage-5-4183e31d.png)](/img/migrated/Block-Storage-5-4183e31d.png)

**2.** Chọn máy ảo đích từ cửa sổ popup và nhấp **Attach storage disk**.
[![Alt text](/img/migrated/Block-Storage-6-216f440e.png)](/img/migrated/Block-Storage-6-216f440e.png)

Lưu ý:
  * Mỗi Storage disk chỉ có thể được gắn vào **một máy ảo** tại một thời điểm.
  * Đối với **máy ảo Windows**, cần thực hiện thêm các bước cấu hình trước khi disk mới có thể sử dụng được.

### Tháo External Disk khỏi GPU VM
Bạn có thể tháo External disk khỏi máy ảo khi không còn cần thiết.
Sau khi tháo, tất cả dữ liệu trên disk vẫn còn nguyên vẹn, và disk có thể được gắn lại vào máy ảo khác bất kỳ lúc nào.

**1.** Chọn External disk bạn muốn tháo từ danh sách, sau đó nhấp **Actions > Detach**.
[![Alt text](/img/migrated/Block-Storage-7-408bd268.png)](/img/migrated/Block-Storage-7-408bd268.png)

**2.** Xem lại popup xác nhận, sau đó nhấp **Detach** để xác nhận.
[![Alt text](/img/migrated/Block-Storage-8-02444235.png)](/img/migrated/Block-Storage-8-02444235.png)

### Chỉnh sửa Storage Disk
Bạn có thể chỉnh sửa thông tin của Storage disk khi nó **không được gắn** vào bất kỳ máy ảo nào.

**1.** Chọn Storage disk bạn muốn chỉnh sửa từ danh sách, sau đó nhấp **Actions > Edit**.
[![Alt text](/img/migrated/Block-Storage-9-1c3dd2e2.png)](/img/migrated/Block-Storage-9-1c3dd2e2.png)

**2.** Trong popup **Edit**, cập nhật thông tin cần thiết, sau đó nhấp **Edit root disk / Edit storage disk** để lưu thay đổi.
  * **Name:** Tên của storage disk.
  * **Storage policy:** Loại storage hoặc performance tier.
  * **Size:** Dung lượng của storage disk.

Lưu ý: Kích thước mới phải lớn hơn kích thước hiện tại — không hỗ trợ giảm kích thước disk.
[![Alt text](/img/migrated/Block-Storage-10-7f0b7d59.png)](/img/migrated/Block-Storage-10-7f0b7d59.png)

### Tạo Volume Snapshot
**1.** Chọn Storage disk bạn muốn sao lưu từ danh sách, sau đó nhấp **Actions > Create volume snapshots**.
[![Alt text](/img/migrated/Block-Storage-11-577334e5.png)](/img/migrated/Block-Storage-11-577334e5.png)

**2.** Trong popup **Create volume snapshot**, cập nhật thông tin cần thiết, sau đó nhấp **Create volume snapshot**.
  * **Snapshot name:** Tên cho Snapshot.
  * **Add tag (tùy chọn):** Tags cho Snapshot.

Lưu ý:
  * Snapshot sẽ chứa dữ liệu từ storage disk được chọn.
  * Tạo Snapshot từ volume đang được gắn có thể gây ra sự không nhất quán dữ liệu trong một số trường hợp. Khuyến nghị **tháo disk hoặc dừng VM** trước khi tạo Snapshot cho các khối lượng công việc quan trọng.
  * Snapshot được lưu trữ trong phần **Snapshot** và có thể được sử dụng để tạo disk mới hoặc khôi phục dữ liệu sau này.

[![Alt text](/img/migrated/Block-Storage-12-bdf7bb4f.png)](/img/migrated/Block-Storage-12-bdf7bb4f.png)

### Xóa Storage Disk
Storage disk có thể được xóa tự động hoặc thủ công tùy thuộc vào loại và trạng thái gắn kết của nó.
  * **Root disk:** Được xóa tự động cùng với máy ảo mà nó được gắn vào. Không cần thao tác thủ công.
  * **External disk:** Không bị xóa khi máy ảo mà nó được gắn vào bị xóa. Disk vẫn có sẵn trong **Storage disks** và có thể được gắn lại vào VM khác khi cần.

Bạn cũng có thể xóa thủ công External disk bất kỳ lúc nào để tránh chi phí storage bổ sung bằng cách thực hiện các bước sau:

Lưu ý:
  * Chỉ có thể xóa **External disk đã tháo** (không được gắn vào bất kỳ Instance nào).
  * Sau khi xóa, tất cả dữ liệu trên disk **không thể khôi phục**. Vui lòng thực hiện cẩn thận.

**1.** Chọn External disk bạn muốn xóa từ danh sách, sau đó nhấp **Actions > Delete**.
[![Alt text](/img/migrated/Block-Storage-13-212316cb.png)](/img/migrated/Block-Storage-13-212316cb.png)

**2.** Xem lại thông báo cảnh báo trong popup xác nhận và nhấp **Delete storage disk** để xác nhận.
[![Alt text](/img/migrated/Block-Storage-14-07b3784a.png)](/img/migrated/Block-Storage-14-07b3784a.png)

External disk sẽ bị xóa vĩnh viễn khỏi VPC của bạn.
