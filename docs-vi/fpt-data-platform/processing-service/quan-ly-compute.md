---
id: "quan-ly-compute"
title: "Quản lý Compute"
sidebar_label: "Quản lý Compute"
description: "Quản lý Compute"
sidebar_position: 5
---

# Quản lý Compute

Để xem **Compute listing** người dùng thực hiện các bước sau:

**Bước 1:** Tại thanh menu chọn **Data Platform** > chọn chọn **Workspace Management** > chọn **Workspace name**

**Bước 2:** Tại phần **My Services** chọn **Processing** service > **Tab Compute**

**Compute listing** \- Hiển thị danh sách các compute đã tạo trong Processing Service, cho phép người dùng:

 * Xem thông tin tên compute, loại GPU, cấu hình tài nguyên (Resource type)

 * Tạo compute mới bằng nút **Create**

 * Thao tác với compute qua menu **Actions**

 * **Giới hạn:** Mỗi Processing Service tối đa được tạo **5 compute**

### 1\. Tạo compute

Để tạo **Compute**, người dùng thực hiện các bước sau:

**Bước 1:** Tại màn hình **Processing** services > chọn tab Compute

**Bước 2:** Tại phần Tab Compute nhấn **Create** > hiển thị popup **Create Services**

**Bước 3:** Trong form tạo **Compute service**, nhập các thông tin

 * **Instance type = General**

Nhập các thông tin sau:

 * **Name**: (required): tên compute

Chú ý: Tên compute có thể chứa các kí tự chữ cái thường a-z hoặc chữ cái in hoa A-Z hoặc các kí tự số 0-9. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-” hoặc “_”.

 * **Storage policy**: chọn Storage policy

 * **Disk size**: chọn size cấu hình Disk (Disk >=40)

 * **Type**: chọn flavor

 * **Number of nodes**: nhập số node

:::warning
số node phải lớn hơn hoặc bằng 1 và nhỏ hơn hơn hoặc bằng 10
:::

![Hình ảnh](images/quan-ly-compute/img-001.png)

 * **Instance type = GPU**

Nhập các thông tin sau:

 * **Name**: (required): tên compute

Chú ý: Tên compute có thể chứa các kí tự chữ cái thường a-z hoặc chữ cái in hoa A-Z hoặc các kí tự số 0-9. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-” hoặc “_”.

 * **GPU type** (required nếu chọn GPU)

 * **GPU driver installation type** (required): chọn kiểu cài driver

 * **Select a driver version** (required): chọn phiên bản driver

 * **GPU sharing type** (required): chọn kiểu chia sẻ GPU

 * Nếu chọn None, **không hiển thị** các input: GPU sharing client

 * Nếu chọn khác None, **hiển thị** input GPU sharing client

 * **Policy** (required): chọn policy

 * **Storage policy**: chọn Storage policy

 * **Disk size**: chọn size cấu hình Disk (Disk >=40)

 * **Type**: chọn flavor

 * **Number of nodes**: nhập số node

:::warning
số node phải lớn hơn hoặc bằng 1 và nhỏ hơn hơn hoặc bằng 10
:::

![Hình ảnh](images/quan-ly-compute/img-002.png)

**Bước 4.** Kiểm tra thông tin nhập, sau đó nhấn **Create** để hoàn thành việc tạo Compute.

### 2\. Xóa compute

**Bước 1:** Tại màn hình **Processing** services > chọn tab Compute

**Bước 2:** Tại phần tab **Compute** > nhấn **Action** của compute cần xóa > chọn **Delete**

![Hình ảnh](images/quan-ly-compute/img-003.png)

**Bước 3.** Hiển thị hộp thoại **Delete Application** > nhập **delete** > nhấn **confirm** để xóa hoàn thành việc xóa dịch vụ khỏi workspace

![Hình ảnh](images/quan-ly-compute/img-004.png)
