---
id: "create-an-interactive-session"
title: "Tạo interactive session"
description: "Hướng dẫn tạo interactive session trong dịch vụ Kiểm thử mô hình"
sidebar_label: "Tạo interactive session"
sidebar_position: 4
---

# Tạo interactive session

Truy cập dịch vụ Kiểm thử mô hình, chọn "Interactive Session" và nhấn "Tạo session mới".

[![file](/img/migrated/image-1746688925988.21.46-ae14f354.png)](/img/migrated/image-1746688925988.21.46-ae14f354.png)

### Tạo interactive session

[![file](/img/migrated/image-1746689212265.22.57-0fa0e464.png)](/img/migrated/image-1746689212265.22.57-0fa0e464.png)

- Nhập tên session
  - Định dạng mặc định: [int.session]_[timestamp]
  - Có thể chỉnh sửa, **tối đa 100 ký tự**
- Nhập mô tả session (tối đa **200 ký tự**)
- Tùy chọn nguồn mô hình

Khi thiết lập cấu hình, bạn có thể chọn từ 2 nguồn mô hình sau:

- **Catalog**
  - Khi bạn chọn **Catalog** làm nguồn, danh sách tất cả mô hình khả dụng trong **Model Catalog** sẽ hiển thị. Hãy đảm bảo bạn chọn instruction model.
  **Ví dụ:** Llama-3.1-8B-Instruct
  - Tùy chọn này phù hợp khi bạn muốn tham khảo hoặc chọn các mô hình public được định nghĩa sẵn.
- **Private Model**
  - Khi bạn chọn **Private Model**, chỉ các mô hình tùy chỉnh hoặc mô hình được deploy riêng của tổ chức bạn mới hiển thị.
  - Chọn phiên bản mô hình bạn muốn kiểm thử. **Hãy đảm bảo mô hình có browser file và tag.**
  - Tùy chọn này dành cho khi bạn sử dụng mô hình chưa được public lên catalog.

Sau khi hoàn tất, danh sách các interactive session đã tạo sẽ hiển thị.
