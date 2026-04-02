---
id: "how-to-create-session"
title: "How To Create Session"
description: "Hướng dẫn tạo Interactive Session trên Model Testing."
sidebar_label: "How To Create Session"
sidebar_position: "8"
---

# How To Create Session

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/05/Create-Session.png)](https://fptcloud.com/wp-content/uploads/2025/05/Create-Session.png)

### Bước 1: Nhập tên và mô tả session

Bạn phải nhập một tên session duy nhất (ví dụ: int.session_20250915155915) thỏa mãn các điều kiện sau:

* Tối đa 100 ký tự.

Mô tả session là tùy chọn, tối đa 200 ký tự.

### Bước 2: Chọn model

Bạn chọn model từ **Model Hub** theo hai cách:

* **Model Catalog:** Kho lưu trữ các nguồn model từ nhiều nhà cung cấp như DeepSeek, Gemma, Llama và Qwen.
* **Private Model:** Kho lưu trữ các model thuộc sở hữu của bạn và các model đã fine-tune. Các model này phải đã có **tất cả các tệp cần thiết được tải lên**. Phải bao gồm **các tag cụ thể** để chỉ ra tính tương thích và sẵn sàng sử dụng.

**Lưu ý:** Để sử dụng trong Interactive Sessions, model phải đáp ứng các tiêu chí sau:

* **Loại model:**
  * LLM: Chỉ chấp nhận đầu vào văn bản
  * VLM: Chấp nhận cả đầu vào văn bản và hình ảnh
* **Kích thước model** > 0
* **Giai đoạn học:** Phải là **Instruction-tuned**

Ví dụ:

| Tên model | Phiên bản model | Dòng model | Loại model | Kích thước model | Giai đoạn học |
| --- | --- | --- | --- | --- | --- |
| ft_Llama-3.1-8B_20250508124054_samples-15d5e2f6fe7 | 15d5e2f6fe7 | Llama | LLM **(→ available)** | 8B **(→ available)** | Instruction-tuned **(→ available)** |

### Bước 3: Chọn Session Stop

Bạn có thể nhập và điều chỉnh biểu tượng lên xuống để chọn thời gian phù hợp cho session. Chúng tôi khuyến nghị bạn xác định cách session sẽ tự động kết thúc dựa trên một hoặc nhiều điều kiện sau:

* Số lượng tương tác tối đa
* Thời lượng
* Giới hạn cụ thể của model

Điều này đảm bảo sử dụng tài nguyên hiệu quả và ngăn chặn các session chạy quá lâu ngoài ý muốn.

### Bước 4: Gửi

Bạn xem lại và gửi session.

**Lưu ý:** Đối với người dùng PAYG

Để chạy pipeline thành công, hãy đảm bảo:

* Số dư có đủ tiền. Trang tham khảo: <https://ai.fptcloud.com/pricing>
* Tạo tối đa **20** pipeline
* Chỉ **2** pipeline có thể được khởi động đồng thời tại bất kỳ thời điểm nào
* Mỗi pipeline có thể được cấu hình tối đa 2 node

**Lưu ý:** Đối với người dùng ký hợp đồng

Để chạy pipeline thành công, hãy đảm bảo:

* Số dư có đủ tiền. Trang tham khảo: <https://ai.fptcloud.com/pricing>
