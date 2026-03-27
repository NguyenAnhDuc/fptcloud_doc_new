---
id: "gpu-specific"
title: "Quản lý GPU với Console Portal áp dụng cho loại dịch vụ Specific"
description: "Để gắn thêm GPU vào máy ảo đã tạo trước đó, người dùng thao tác như sau:"
sidebar_label: "Quản lý GPU với Console Portal áp dụng cho loại dịch vụ Specific"
sidebar_position: 22
---

# Gpu Specific

## **1. Thêm GPU vào máy ảo đã tạo**
Để gắn thêm GPU vào máy ảo đã tạo trước đó, người dùng thao tác như sau:
**Bước 1** : Ở menu chọn **Instance Management** , trong phần **Actions** , chọn **Add GPU.**
[![file](/img/migrated/image-1705028237983-e4b7aeed.png)](/img/migrated/image-1705028237983-e4b7aeed.png)
**Lưu ý** : Thực hiện tắt máy chủ trước khi Add GPU card vào máy
**Bước 2** : Chọn cấu hình **GPU** từ list tương ứng và chọn **Update**.
Máy ảo phải đạt cấu hình tối thiểu 8 vCPU – 24 GB RAM để sử dụng chức năng này.
## **2. Tạo máy ảo GPU mới**
  * Người dùng cần được cấp quota GPU để thực hiện hành động này. Khi VPC đã hết quota sử dụng GPU, người dùng sẽ được thông báo lỗi khi tạo GPU Server mới.
  * Sau khi tạo, hệ thống sẽ thêm ngay lập tức GPU vào máy ảo. Người dùng có thể console vào máy ảo để kiểm tra thông tin GPU.
  * Cấu hình tối thiểu để tạo GPU Server là 8 vCPU – 24 GB RAM.

**Bước 1** : Ở menu chọn **Compute Engine** > **Instance Management** , chọn **Create instance**.
[![file](/img/migrated/image-1712739862804-d5b7552c.png)](/img/migrated/image-1712739862804-d5b7552c.png)
**Bước 2** : Cấu hình máy ảo theo nhu cầu với các lựa chọn sau:
  * **Instance Type** : Chọn GPU.
  * **GPU type:** Chọn loại GPU phù hợp từ danh sách.
  * **Image:** Chọn OS chính phù hợp với nhu cầu. Mỗi nhóm OS sẽ gồm các phiên bản khác nhau. Mặc định là phiên bản mới nhất.
  * **Resource type** : Chọn cấu hình phù hợp cho máy ảo từ danh sách.
  * **Local Storage** : Thêm ổ cứng cho máy, tăng giảm dung lượng hoặc để dung lượng mặc định, tối thiểu 40GB.
  * **Subnet & Private IP**: Auto-assign subnet và private IP dựa vào network của VPC, người dùng có thể thay đổi nếu muốn.
  * **Tên instance** : Nhập tên máy ảo sao cho dễ quản lý nhất. Đây cũng sẽ là tên host name của máy ảo sau này.
  * **Authentication type** : Standard (Username/Password) hoặc SSH key. Nếu chọn SSH Key, hệ thống sẽ chọn SSH key mới nhất (có thể thay đổi). Nếu sử dụng phương thức Standard, người dùng cần lưu ý ghi nhớ và bảo mật mật khẩu.

**Bước 3** : Nhấn chọn **Create Instance** để thực hiện khởi tạo máy ảo. Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên và tiến hành quá trình khởi tạo máy ảo mới dựa vào cấu hình đã chọn.
Sau khi khởi tạo thành công, người dùng có thể thấy máy ảo mới tạo và kiểm tra thông tin trên bảng quản trị. Mỗi máy ảo sẽ được hiển thị thông tin đầy đủ về tên, cấu hình (Ram, CPU, GPU, Storage), địa chỉ IP address, trạng thái hoạt động (Tắt/Bật/Suspended) trên bảng.
## **3. Gỡ GPU khỏi máy ảo**
Nếu đã gắn **GPU** vào máy ảo trước đó, khi không còn nhu cầu sử dụng. Bạn có thể gỡ **GPU** ra với các thao tác như sau:
**Bước 1** : Ở menu chọn **Instance Management** , trong phần **Actions** của máy ảo cần gỡ **GPU** , chọn **Remove GPU**.
**Bước 2:** Xác nhận thông tin xóa **GPU** và chọn **Update.**