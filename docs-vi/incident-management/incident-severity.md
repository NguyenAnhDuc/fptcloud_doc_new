---
id: "incident-severity"
title: "Incident Severity"
description: "**Incident serverity** cho phép bạn định nghĩa đo lường các mức độ ảnh hưởng của sự cố. Mức độ ảnh hưởng được định nghĩa"
sidebar_label: "Incident Severity"
sidebar_position: 13
---

# Incident Severity

**Incident serverity** cho phép bạn định nghĩa đo lường các mức độ ảnh hưởng của sự cố. Mức độ ảnh hưởng được định nghĩa rõ ràng và nhất quán sẽ giúp những người khác trong tổ chức của bạn nhanh chóng hiểu được mức độ nghiêm trọng của sự cố. 
Mức độ ảnh hưởng của sự cố có thể ảnh hưởng tới quá trình ứng phó sự cố của bạn ví dụ như có bao nhiêu người tham gia và cần thông báo cho ai. Để thu được giá trị cao nhất từ mức độ ảnh hưởng của sự cố hãy thiết lập các định nghĩa rõ ràng về từng mức độ ảnh hưởng và phản hồi dự kiến trong tổ chức của bạn. 
Các mức độ ảnh hưởng, được khuyến nghị dưới đây, được tạo sẵn trong FMON incident:   
| Severity  | Mô tả  |  
| --- | --- |  
| Critical  | Mức độ ảnh hưởng rất lớn, cần quan tâm ngay. Ví dụ: Dịch vụ “customer-facing” bị gián đoạn với tất cả khách hàng, Tính bảo mật hoặc quyền riêng tư bị vi phạm, Mất dữ liệu khách hàng  |  
| Major  | Mức độ ảnh hưởng đáng kể. Ví dụ: Dịch vụ “customer-facing” bị gián đoạn với 1 tập nhỏ khách hàng, Chức năng lõi của hệ thống bị ảnh hưởng.  |  
| Minor  | Mức độ ảnh hưởng nhẹ. Ví dụ: Một sự bất tiện nhỏ cho khách hàng, có giải pháp thay thế  |  
| Pending  | Mức độ nghiêm trọng cần được quyết định và cần được xác định càng sớm càng tốt.  |  
**A. Sửa incident serverity**
**Bước 1** : bên menu bên trái, click **Apps** , sau đó chọn **Incident**
**Bước 2** : Click **Settings**
**Bước 3** : Ở tab **Serverity** , chọn một serverity đã có sẵn, click **pencil icon**
[![](/img/migrated/Screenshot_10-5ea36620.png)](/img/migrated/Screenshot_10-5ea36620.png)
**Bước 4** : Cung cấp thông tin **Name** , **Description** cho serverity 
**Bước 5** : (Option) lựa chọn màu color cho serverity 
**Bước 6** : Click **Edit Serverity** để cập nhật 
[![](/img/migrated/Screenshot_11-c1f3d936.png)](/img/migrated/Screenshot_11-c1f3d936.png)
**B. Mở / Vô hiệu hóa incident serverity**
**Bước 1** : Bên menu bên trái, click **Apps** , sau đó chọn **Incident**
**Bước 2** : Click **Settings**
**Bước 3** : Ở tab **Serverity** , chọn một serverity có sẵn, click **Toggle switch icon**
[![](/img/migrated/Screenshot_12-9146f0c1.png)](/img/migrated/Screenshot_12-9146f0c1.png)