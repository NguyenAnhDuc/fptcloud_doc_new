---
id: "select-dataset"
title: "Select Dataset"
description: "Trước tiên, bạn phải chuẩn bị dataset tốt nhất vì nó ảnh hưởng trực tiếp đến hiệu suất của model."
sidebar_label: "Select Dataset"
sidebar_position: 13
---

# Select Dataset

Trước tiên, bạn phải chuẩn bị dataset tốt nhất vì nó ảnh hưởng trực tiếp đến hiệu suất của model trên use case bạn mong muốn.

Đây là những gì chất lượng dataset tốt mang lại:
  * **Thu thập ví dụ để giải quyết các vấn đề còn tồn tại.**
    * Nếu model vẫn chưa tốt ở một số khía cạnh nhất định, hãy thêm các ví dụ training trực tiếp cho thấy model cách thực hiện các khía cạnh đó đúng cách.
  * **Xem xét kỹ các ví dụ hiện có để phát hiện vấn đề.**
    * Nếu model có vấn đề về ngữ pháp, logic hoặc phong cách, hãy kiểm tra xem dữ liệu của bạn có vấn đề tương tự không.
  * **Cân nhắc sự cân bằng và đa dạng của dữ liệu.**
    * Nếu 60% câu trả lời của trợ lý trong dữ liệu nói "Tôi không thể trả lời điều này", nhưng trong thực tế chỉ 5% câu trả lời nên như vậy, bạn có thể sẽ nhận được quá nhiều từ chối.
  * **Đảm bảo các ví dụ training chứa đầy đủ thông tin cần thiết cho câu trả lời.**
  * **Xem xét sự đồng thuận và nhất quán trong các ví dụ training.**
    * Nếu nhiều người tạo dữ liệu training, hiệu suất model có thể bị giới hạn bởi mức độ đồng thuận giữa các người tạo.
  * **Đảm bảo tất cả các ví dụ training có cùng định dạng, như mong đợi trong quá trình inference.**

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/Dataset.png)](https://fptcloud.com/wp-content/uploads/2025/02/Dataset.png)

Bạn có hai cách để chuyển **Training data** và **Evaluation data**:
  * Tải lên file
    1. Giá trị mặc định là Upload file
    2. Chọn một file local từ máy tính của bạn.
    3. (Tùy chọn) Nhấp **Download sample** để xem ví dụ về định dạng mong đợi.

**Lưu ý:** Đảm bảo file khớp với định dạng dữ liệu đã chọn

| Trainer | Định dạng dữ liệu hỗ trợ | Định dạng file hỗ trợ | Kích thước file hỗ trợ |
| --- | --- | --- | --- |
| **SFT** | Alpaca | CSV, JSON, JSONLINES, ZIP, PARQUET | Giới hạn 100MB |
| **SFT** | ShareGPT | JSON, JSONLINES, ZIP, PARQUET | Giới hạn 100MB |
| **SFT** | ShareGPT_Image | ZIP, PARQUET | Giới hạn 100MB |
| **DPO** | ShareGPT | JSON, JSONLINES, ZIP, PARQUET | Giới hạn 100MB |
| **Pre-training** | Corpus | TXT, JSON, JSONLINES, ZIP, PARQUET | Giới hạn 100MB |

  * Kết nối với Data Hub
    1. Nhấp **Data Hub**
    2. Chọn kết nối hoặc dataset từ Data Hub. **Lưu ý:** Đảm bảo dataset tương thích với định dạng đã chọn.
    3. (Tùy chọn) Nhấp **Open Data Hub** để xem trước hoặc quản lý dataset.
    4. (Tùy chọn) Nhấp **biểu tượng Reload** để cập nhật danh sách kết nối và dataset.
    5. Làm theo hướng dẫn chi tiết Data Hub
