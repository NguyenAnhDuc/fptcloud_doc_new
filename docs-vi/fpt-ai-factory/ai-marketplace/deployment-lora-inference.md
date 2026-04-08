---
id: "deployment-lora-inference"
title: "Triển khai LoRA inference"
description: "Tìm hiểu cách triển khai mô hình LoRA đã fine-tune thành API endpoint trên AI Marketplace."
sidebar_label: "Triển khai LoRA inference"
sidebar_position: 8
---

# Triển khai LoRA inference

## Cách triển khai mô hình LoRA đã fine-tune?

Bạn có thể triển khai mô hình LoRA đã fine-tune để sử dụng ngay qua API mà không cần quản lý bất kỳ hạ tầng nào.

### Các bước thực hiện

1. **Vào trang Deployment** từ thanh điều hướng.
   - Hoặc nhấp **View deployment** từ pop-up thành công sau khi fine-tune xong.

[![Trang Deployment liệt kê các mô hình LoRA đã fine-tune với nút Deploy](https://fptcloud.com/wp-content/uploads/2025/02/deploy.png)](https://fptcloud.com/wp-content/uploads/2025/02/deploy.png)

2. **Nhấp Deploy** bên cạnh mô hình LoRA bạn muốn triển khai.
   - Trạng thái sẽ chuyển sang **Deploying**.
3. Sau khi triển khai thành công, trạng thái sẽ hiển thị **Deployed**.

---

## Cách quản lý các mô hình đã triển khai?

Trên trang **Deployment**, bạn có thể:

- **Get API Key** — lấy key để gọi mô hình của bạn.
- **View API request** — mở pop-up với phản hồi JSON mẫu.
- **Try in Playground** — kiểm thử mô hình trực tiếp trên giao diện.
- **Undeploy** — dừng mô hình đã triển khai (yêu cầu xác nhận).

### Trạng thái

- **Deploying** — mô hình đang được triển khai.
- **Deployed** — mô hình sẵn sàng cho inference.
- **Stopped** — mô hình đã được hủy triển khai.
- **Failed** — triển khai thất bại.
