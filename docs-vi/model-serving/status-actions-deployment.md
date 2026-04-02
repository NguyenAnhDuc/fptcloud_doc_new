---
id: "status-actions-deployment"
title: "Trạng thái và hành động của deployment"
description: "Các trạng thái và hành động có thể thực hiện trên deployment Model Serving."
sidebar_label: "Trạng thái và hành động"
sidebar_position: "8"
---

# Trạng thái và hành động của deployment

Các trạng thái Deployment:

| **Trạng thái** | **Mô tả** |
| --- | --- |
| Running | Deployment đã được tạo thành công và đang hoạt động bình thường |
| Creating | Deployment đang được khởi tạo và chưa hoạt động |
| Stopped | Deployment đã được dừng thành công |
| Deleting | Deployment đang trong quá trình bị xóa |
| Stopping | Deployment đang trong quá trình dừng lại |
| Processing | Deployment đang được cập nhật, chẳng hạn sửa đổi chi tiết cấu hình hoặc khởi động lại |

Các hành động có sẵn để tương tác với Deployment:

| **Hành động** | **Mô tả** |
| --- | --- |
| Start | Khởi động Deployment để bắt đầu sử dụng |
| Stop | Dừng Deployment; các instance chạy ứng dụng sẽ thu nhỏ về 0 sau khi dừng |
| Delete | Xóa Deployment; tất cả tài nguyên đang chạy cho cụm sẽ được thu hồi |
| Edit in Details | Chỉnh sửa chi tiết cấu hình của Deployment |
| Restart | Khởi động lại cụm Deployment |

Các hành động có sẵn cho một Deployment bị ảnh hưởng bởi loại triển khai và trạng thái của cụm Deployment. Khách hàng có thể theo dõi điều này bằng bảng ma trận sau:

![Alt text](/img/migrated/11.5-48c12d92.png)
![Alt text](/img/migrated/11-687f9e34.png)
