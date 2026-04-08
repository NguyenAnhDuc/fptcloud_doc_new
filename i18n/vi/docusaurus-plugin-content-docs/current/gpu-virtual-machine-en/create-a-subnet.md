---
id: "create-a-subnet"
title: "Create A Subnet"
description: "Create A Subnet trên GPU Virtual Machine."
sidebar_label: "Create A Subnet"
sidebar_position: 13
---

# Create A Subnet

### Tổng quan
**Subnet** là một **CIDR block** duy nhất với dải địa chỉ IP trong một **VPC**. Tất cả tài nguyên trong VPC phải được triển khai trên các Subnet.
  * Theo mặc định, tất cả Instance trong các Subnet khác nhau của cùng một VPC có thể giao tiếp với nhau. Nếu bạn có VPC với hai Subnet, chúng có thể giao tiếp với nhau theo mặc định.
  * Sau khi Subnet được tạo, **CIDR block của nó không thể được chỉnh sửa**. Các Subnet trong cùng VPC không được chồng chéo nhau.
  * Khi tạo **GPU VM**, cần có Subnet đang hoạt động trong VPC. Hệ thống sẽ tự động gán **Private IP** từ Subnet đó cho máy ảo mới.

### Hướng dẫn từng bước
**Bước 1:** Trong menu bên trái, vào **Networking → Subnets**, sau đó nhấp **Create Subnet**.
[![Alt text](/img/migrated/Subnets-1-e3683600.png)](/img/migrated/Subnets-1-e3683600.png)
[![Alt text](/img/migrated/Subnets-2-a1d148c7.png)](/img/migrated/Subnets-2-a1d148c7.png)

**Bước 2:** Nhập tên cho Subnet của bạn trong trường **Name**.

**Bước 3:** Chọn **loại Subnet**. Hiện tại chúng tôi hỗ trợ hai loại:
  * **Routed:** Subnet được định tuyến ra internet qua NAT gateway.
  * **Isolated:** Subnet không có định tuyến internet.

**Bước 4:** Chỉ định **dải IP (subnet)** mà mạng của bạn sẽ sử dụng, theo **ký hiệu CIDR** (ví dụ: `172.30.65.0/24`) sử dụng **Network Address (CIDR)**.

Lưu ý: Dải CIDR không được chồng chéo với bất kỳ Subnet nào khác trong cùng VPC.

**Bước 5:** Chỉ định **địa chỉ IP của default gateway** trong Subnet của bạn bằng **Gateway IP**. Thường là IP khả dụng đầu tiên (ví dụ: `172.30.65.1`).

**Bước 6:** Xác định **Static IP Pool** — một dải IP cụ thể được dành riêng cho các phân công tĩnh.

Lưu ý: Đảm bảo dải IP tĩnh của bạn nằm trong CIDR của Subnet và không bao gồm Gateway IP.

**Bước 7:** Cấu hình **DNS Settings**:
Chỉ định địa chỉ IP của các DNS server mà các client mạng sẽ sử dụng để phân giải tên miền.
  * **Primary DNS:** DNS server bắt buộc để phân giải tên miền.
  * **Secondary DNS (tùy chọn):** DNS server dự phòng nếu primary bị lỗi.

**Bước 8:** Gán **Tag** để phân loại hoặc tổ chức Subnet của bạn.

Lưu ý: Tags giúp bạn quản lý và lọc tài nguyên networking trong các môi trường lớn.
