---
id: "khoi-tao-canh-bao-object-storage"
title: "Khởi tạo cảnh báo cho Object Storage"
sidebar_label: "Khởi tạo cảnh báo cho Object Storage"
sidebar_position: "5"
---

# Khởi tạo cảnh báo cho Object Storage

#### Bước 1: Ở menu chọn Security > Cloud Guard, mở tab Resource Alerts và chọn Create Alert.
Để thực hiện tạo cảnh báo cho dịch vụ Object Storage đang sử dụng, chọn **Type** là **Object Storage** [![file](/img/migrated/image-1696235964781-27725bb4.png)](/img/migrated/image-1696235964781-27725bb4.png) Chọn **Metric Type** , **Apply to** , **Severity** ,cấu hình điều kiện cảnh báo tại **Configure Condition** và chọn người nhận cảnh báo tại **Notify to**

```
CopyLưu ý: Đối với các cảnh báo cho Object Storage, người nhận cảnh báo phải là Recipient mức Tenant, những Recipient này sẽ được sử dụng chung cho các VPC thuộc Tenant tạo
```

#### Bước 2: Chọn người nhận cảnh báo hoặc chọn Create recipient here để tạo người nhận mức Tenant
[![file](/img/migrated/image-1696236659925-9bb270d8.png)](/img/migrated/image-1696236659925-9bb270d8.png) Tích chọn **Tenant-level recipient** để tạo người nhận cho cả Tenant
#### Bước 3: Quay trở lại màn tạo Alert, chọn người nhận mới tạo và nhấn Create
[![file](/img/migrated/image-1696237048466-bfaa420d.png)](/img/migrated/image-1696237048466-bfaa420d.png) Alert đã tạo thành công hiển thị tại màn danh sách, khi điều kiện vượt ngưỡng hoặc trở về mức an toàn hệ thống sẽ tự động bắn cảnh báo cho người nhận qua phương thức cảnh báo đã chọn.
