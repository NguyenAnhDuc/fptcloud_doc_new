---
id: "gpu-general"
title: "Quản lý GPU với Console Portal"
sidebar_label: "Quản lý GPU với Console Portal"
sidebar_position: 2
---

# Quản lý GPU với Console Portal


## 1\. Khởi tạo máy ảo có GPU
Người dùng có thể tạo máy ảo với GPU

**Bước 1**: Ở màn hình quản lý **Instance Management**. Chọn **Create instance**

![file](/img/migrated/docs-vi-cloud-server/gpu-general/img-001.png)

**Bước 2**: Chọn GPU và loại card GPU cần sử dụng

![file](/img/migrated/docs-vi-cloud-server/gpu-general/img-002.png)

**Bước 3**: Nhập các thông tin còn khác của instance

**Bước 4**: Bấm **Create Instance**

![file](/img/migrated/docs-vi-cloud-server/gpu-general/img-003.png)

**Bước 5**: Kiểm tra thông tin. Thông tin được cập nhật ở màn hình Instance detail

![file](/img/migrated/docs-vi-cloud-server/gpu-general/img-004.png)

## 2\. Thêm GPU vào instance trên Instance management
**Bước 1**: Tại màn hình **Instance management**, người dùng lựa chọn máy ảo cần thêm GPU.
:::warning
* Người dùng cần **Power off** máy ảo trước khi thêm thêm GPU (trạng thái “Stopped”).
:::


  * Với các máy ở đang ở trạng thái khác như “Running”, “Pending”,.. tính năng sẽ bị **disable**.


![file](/img/migrated/docs-vi-cloud-server/gpu-general/img-005.png)

**Bước 2**: Chọn **Actions**, sau đó chọn **Add GPU**

![file](/img/migrated/docs-vi-cloud-server/gpu-general/img-006.png)

**Bước 3**: Chọn **GPU type** để add vào instance

  * Hệ thống hiển thị danh sách **GPU type** phù hợp để user có thể lựa chọn.

    * **Current**: cấu hình instance hiện tại

    * **Type**: chỉ được chọn resource type GPU (không có lựa chọn cấu hình thường trong danh sách)


**Bước 4**: Bấm nút **Add GPU**

  * Hệ thống cập nhật thông tin và add GPU vào instance


**Bước 5**: Kiểm tra thông tin. Thông tin được cập nhật ở màn hình Instance detail

![file](/img/migrated/docs-vi-cloud-server/gpu-general/img-007.png)

## 3\. Gỡ GPU khỏi máy ảo
**Bước 1**: Tại màn hình **Instance management**, người dùng lựa chọn máy ảo cần gỡ GPU.
:::warning
* Người dùng cần **power off** máy ảo trước khi thêm thêm GPU (trạng thái “Stopped”).
:::


  * Với các máy ở đang ở trạng thái khác như “Running”, “Pending”,.. tính năng sẽ bị **disable**.


**Bước 2**: Chọn nút **Remove GPU**

**Bước 3**: Chọn **resource type** với

  * **Current**: cấu hình instance GPU hiện tại

  * **Type**: chỉ được chọn resource type thường (không có lựa chọn cấu hình có GPU trong danh sách)


**Bước 4**: Bấm nút **Remove GPU**

**Bước 5**: Hệ thống sẽ gỡ GPU và chuyển instance về resource type đã lựa chọn. Thông tin về cấu hình mới của instance sẽ được cập nhật tại màn hình **Instance management**.

## 4\. Resize thông số GPU của instance
**Bước 1**: Tại màn hình **Instance management**, người dùng lựa chọn máy ảo cần resize GPU.
:::warning
* Người dùng cần **power off** máy ảo trước khi thêm thêm GPU (trạng thái “Stopped”).
:::


  * Với các máy ở đang ở trạng thái khác như “Running”, “Pending”,.. tính năng sẽ bị **disable**.


**Bước 2**: Chọn nút **Resize**

**Bước 3**: Chọn **template** và chọn **resource type** (nếu instance đang là instance GPU thì chỉ được resize sang type GPU, nếu instance thường thì chỉ được resize instance thường )

  * Với instance có GPU, instance chỉ được resize với type GPU

  * Với instance không có GPU, instance chỉ được resize với type không có GPU. Nếu người dùng muốn resize sang type có GPU, người dùng có thể dùng tính năng Add GPU thay thế.


**Bước 4**: Bấm nút **Resize Instance**

**Bước 5**: Kiểm tra thông tin. Thông tin được cập nhật ở màn hình danh sách **Instance Management** và thông tin trong trang chi tiết của **Instance**
