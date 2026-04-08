---
id: "faq"
title: "Faq"
description: "Faq trên GPU Virtual Machine."
sidebar_label: "Faq"
sidebar_position: 25
pagination_next: null
---

# Faq

### Tổng quan
**1. GPU Virtual Machine là gì?**
GPU Virtual Machine hay **GPU VM** là một hệ thống biệt lập với **GPU, CPU, memory, giao diện mạng và storage** chuyên dụng riêng, được tạo từ **GPU Cluster** gồm các tài nguyên phần cứng.
Dịch vụ này cung cấp nhiều **máy ảo được cấu hình sẵn** được thiết kế để phù hợp với yêu cầu khối lượng công việc của bạn, cung cấp các tùy chọn linh hoạt từ **1 đến 8 GPU mỗi VM**.

### Tính năng
**2. Tôi có thể thay đổi kích thước GPU Instance (CPU, RAM hoặc Disk) không?**
  * **Với Block Storage – Ephemeral Disk (NVMe):**
GPU VM cung cấp **các flavor được cấu hình sẵn** cho GPU, CPU, RAM và Disk.
Bạn **không thể tùy chỉnh** chúng. Vui lòng chọn cấu hình phù hợp hoặc liên hệ **FPT Cloud Support** để được hỗ trợ.
  * **Với Block Storage – Persistent Disk:**
GPU, CPU và RAM là **cấu hình cố định**.
Bạn có thể **thay đổi kích thước storage** theo nhu cầu của mình, nhưng **không thấp hơn 100 GB mỗi Instance**.

**3. Làm thế nào để tôi cấp phát IP công cộng cho GPU Instance?**
  * **Với Block Storage – Ephemeral Disk (NVMe):**
Bạn chỉ có thể cấp phát **Floating IP** sau khi GPU Instance được tạo thành công. Lưu ý rằng bạn phải cấu hình IP port (port forwarding) để hoàn tất cấu hình IP. Xem hướng dẫn chi tiết [tại đây](/ja/docs/gpu-virtual-machine-en/)/
  * **Với Block Storage – Persistent Disk:**
Bạn có thể cấp phát **Floating IP** trong khi tạo Instance mới hoặc sau khi Instance đã được tạo thành công.

**4. Những chức năng nào không được hỗ trợ cho GPU Virtual Machine với Ephemeral Disk (NVMe)?**
Các chức năng sau **không được hỗ trợ** cho GPU Virtual Machine sử dụng **Ephemeral Disk (NVMe)** với **NVIDIA Hopper (H100, H200)**:
  * Thay đổi kích thước Instance (thêm/bỏ GPU, thay đổi kích thước CPU, RAM hoặc Disk)
  * Snapshot
  * Tạo template từ GPU Instance
  * Chỉ hỗ trợ **backup instance với Veeam**.

**5. Những tùy chọn storage nào có sẵn cho GPU Virtual Machine?**
Có **hai loại Block Storage**:
  1. **Ephemeral Disk (NVMe):**
     * Dung lượng cố định theo gói GPU Instance (không thể mở rộng)
     * Tối ưu cho **khối lượng công việc training**, không phải lưu trữ dài hạn
     * **Không hỗ trợ backup hoặc restore tự động**
  2. **Persistent Disk:**
     * Dung lượng storage có thể mở rộng theo nhu cầu
     * Tối ưu cho **lưu giữ dữ liệu dài hạn**
     * Có thể thiết lập **backup và restore tự động**
     * Tính phí riêng cho mức sử dụng storage (không bao gồm chi phí GPU Instance)

Lưu ý: Dịch vụ File Storage (High-performance Tier) hiện chỉ được hỗ trợ ở khu vực Việt Nam.

**6. GPU Virtual Machine có sẵn ở những khu vực nào?**
GPU Virtual Machine với **NVIDIA Hopper (H100, H200)** có sẵn ở các khu vực sau:
  * **Hà Nội 2, Việt Nam**
  * **Tokyo, Nhật Bản**

### Thanh toán
**7. Tôi sẽ bị tính phí GPU Virtual Machine như thế nào?**
Có hai mô hình thanh toán:
  * **Reservation:**
Giá cố định với tài nguyên giới hạn dựa trên nhu cầu, thanh toán trước (một phần hoặc toàn bộ) hoặc sau. Thời gian thanh toán có thể là **3–9 tháng** hoặc **1–5 năm**.
  * **Pay-as-you-go (PAYG):**
Cho phép bạn sử dụng tài nguyên không giới hạn và thanh toán sau. Đơn vị tính phí thường là **theo giờ**.

**8. FPT có tính phí GPU Virtual Machine ở trạng thái Stopped không?**
  * **Với Block Storage – Ephemeral Disk (NVMe):**
Có. Các Instance ở trạng thái **stopped** vẫn tiếp tục dành riêng máy chủ cho bạn sử dụng và do đó **vẫn phát sinh phí** cho đến khi bạn giải phóng máy chủ này.
Nếu bạn không muốn tiếp tục tích lũy phí cho máy chủ, vui lòng **XÓA INSTANCE** trong FPT Cloud portal dành cho Khách hàng.
  * **Với Block Storage – Persistent Disk:**
Không. GPU, CPU và RAM của các Instance đã dừng **không bị tính phí**.
Tuy nhiên, **storage** vẫn bị tính phí cho đến khi bạn xóa hoàn toàn.

Bạn cũng bị tính phí cho các **dịch vụ và tài nguyên** khác được gắn vào bất kỳ GPU Instance nào.
