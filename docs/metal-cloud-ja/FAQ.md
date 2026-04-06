---
id: "FAQ"
title: "Tổng quan"
description: "Câu hỏi thường gặp về Metal Cloud"
sidebar_label: "Tổng quan"
sidebar_position: 13
pagination_next: null
---

# Tổng quan

### Metal Cloud là gì

Metal Cloud là dịch vụ cloud cho phép bạn thuê máy chủ vật lý tích hợp GPU từ FPT. Máy chủ này dành riêng cho bạn và không chia sẻ với tenant khác.

Bạn có thể truy cập server với toàn quyền kiểm soát phần cứng mà không cần lớp ảo hóa hay trừu tượng hóa, giúp tối đa hiệu năng cho các workload tính toán chuyên sâu.

### Metal Cloud khác gì so với Cloud Server (Virtual Machine) instance?

Metal Cloud cung cấp quyền truy cập trực tiếp vào server chuyên dụng mà không có "noisy neighbor".

So với Cloud Server instance được triển khai trong môi trường cloud ảo hóa, Bare Metal GPU Server cho phép truy cập không giới hạn vào physical server nền, do đó các server này phù hợp cho cả những workload tốn nhiều tài nguyên nhất.

### Metal Cloud hoạt động như thế nào?

Metal Cloud cung cấp server vật lý chuyên dụng có GPU mà bạn có thể cài đặt và chạy ứng dụng.

Thiết lập này đặc biệt hữu ích khi bạn cần cơ sở hạ tầng ổn định, hiệu năng cao để đáp ứng các workload đòi hỏi cao như huấn luyện mô hình AI/ML hoặc orchestration tùy chỉnh.

### Bare Metal GPU Server mất bao lâu để tạo?

Khi dùng FPT images, dự kiến triển khai thành công sau khoảng 20 phút.

Nếu kích thước custom image lớn hoặc có quá nhiều server được tạo cùng lúc, thời gian triển khai có thể lâu hơn.

### Metal Cloud hỗ trợ những use case nâng cao nào?

- **AI/ML workload:** Huấn luyện, fine-tuning và inference mô hình, đặc biệt cho xử lý dữ liệu quy mô lớn.
- **Orchestration tùy chỉnh:** Các công nghệ như Kubernetes cho môi trường container hóa, Slurm cho quản lý workload, và các thiết lập tùy chỉnh khác cho ứng dụng phức tạp.
- **High Performance Computing (HPC):** Simulation, tính toán khoa học, xử lý dữ liệu real-time và các ứng dụng cần tài nguyên chuyên dụng.

# Tính năng

### Metal Cloud hiện hỗ trợ những tính năng nào?

Metal Cloud hỗ trợ nhiều tính năng cloud:

- OS image bao gồm FPT images cho AI.
- Startup script.
- Nạp sẵn SSH key hoặc thiết lập mật khẩu.
- Networking: IP bổ sung, subnet, Network ACL để bảo mật.

Nhiều tính năng hơn sẽ được thêm vào trong tương lai gần, hãy đón chờ!

### Metal Cloud cung cấp những tùy chọn lưu trữ nào?

Bare Metal GPU Server có sẵn 1 NVMe local storage.

- Dịch vụ block storage không được hỗ trợ.
- Dịch vụ file storage (lớp hiệu năng cao) được hỗ trợ.

### Bare Metal Cloud có hỗ trợ RAID không?

Có, local storage hỗ trợ tính năng RAID 0 và RAID 1 trên GUI FPT Cloud Portal bằng hardware RAID controller.

Thêm tùy chọn RAID sẽ được bổ sung trong tương lai.

### Metal Cloud khả dụng ở những vùng nào?

Metal Cloud khả dụng ở vùng Hà Nội 2 (Việt Nam) và Tokyo (Nhật Bản).

# Thanh toán

### Metal Cloud tính phí như thế nào?

1. **Đặt chỗ:** Tài nguyên bị giới hạn theo nhu cầu với giá cố định, thanh toán trước (một phần hoặc toàn bộ) hoặc sau. Kỳ thanh toán theo tháng (3-9) hoặc năm (1-5).
2. **Pay-as-you-go (PAYG):** Bạn sử dụng tài nguyên không giới hạn ban đầu rồi thanh toán sau. Số tiền thanh toán thường tăng theo ngày hoặc giờ.

### FPT có tính phí Bare Metal GPU Server ở trạng thái dừng không?

Có, instance ở trạng thái "dừng" vẫn đang dự trữ server cho bạn, do đó phí sẽ phát sinh cho đến khi bạn giải phóng server này. Nếu bạn không muốn bị tính phí thêm cho server, hãy xóa server trên FPT Cloud Portal dành cho khách hàng.

Bạn cũng sẽ bị tính phí cho các dịch vụ và tài nguyên khác được gắn với Bare Metal GPU Server.

### Thanh toán Metal Cloud khác gì so với Cloud Server (Virtual Machine) instance?

Điểm khác biệt chính là việc tắt nguồn Bare Metal GPU Server không ảnh hưởng đến chu kỳ thanh toán.

Điều này có nghĩa là server được tính phí theo giờ sẽ bị tính phí bình thường dù server đang bật hay tắt. Thanh toán chỉ dừng khi server bị xóa.
