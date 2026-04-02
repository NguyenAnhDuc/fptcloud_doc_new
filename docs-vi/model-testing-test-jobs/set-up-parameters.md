---
id: "set-up-parameters"
title: "Thiết lập Tham số"
description: "[![Alt text](/img/migrated/Parameters-2439cc4b.png)](/img/migrated/Parameters-2439cc4b.png)"
sidebar_label: "Thiết lập Tham số"
sidebar_position: 15
---

# Thiết lập Tham số

[![Alt text](/img/migrated/Parameters-2439cc4b.png)](/img/migrated/Parameters-2439cc4b.png)
**Tham số** cho phép bạn điều chỉnh hành vi của mô hình trong quá trình kiểm thử. Dưới đây là mô tả chi tiết từng tham số và mục đích của nó:  
| Tên  | Mô tả  | Kiểu  | Giá trị hỗ trợ  |  
| --- | --- | --- | --- |  
| Log samples  | Đầu ra của mô hình và văn bản đưa vào mô hình sẽ được lưu lại  | bool  | True / False  |  
| Max tokens  | Số lượng token tối đa để tạo ra  | int  | (0, +∞)  |  
| No. of few-shot  | Đặt số lượng ví dụ few-shot đặt trong ngữ cảnh. Phải là số nguyên.  | int  | [0, +∞)  |  
| Temperature  | Nhiệt độ cho quá trình lấy mẫu  | float  | [0, +∞)  |  
| Repetition penalty  | Số thực phạt các token mới dựa trên việc chúng có xuất hiện trong prompt và văn bản đã tạo ra hay không.   
- Giá trị > 1 khuyến khích token mới.   
- Giá trị < 1 khuyến khích lặp lại.  | float  | (0, 5)  |  
| Seed  | Hạt giống ngẫu nhiên để tái tạo kết quả  | int  | [0, +∞)  |  
| Top-K  | Số nguyên kiểm soát xác suất tích lũy của các token hàng đầu được xem xét. Đặt -1 để xem xét tất cả token.  | int  | -1 hoặc (0, +∞)  |  
| Top-P  | Số thực kiểm soát xác suất tích lũy của các token hàng đầu được xem xét. Đặt 1 để xem xét tất cả token.  | float  | (0, 1]  |
