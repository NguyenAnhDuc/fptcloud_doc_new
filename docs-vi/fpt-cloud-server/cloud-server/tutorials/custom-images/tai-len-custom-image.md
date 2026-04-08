---
id: "tai-len-custom-image"
title: "Tải lên Custom Image"
description: "Upload Custom Image lên FPT Cloud để sử dụng khi khởi tạo máy ảo."
sidebar_label: "Tải lên Custom Image"
sidebar_position: 2
---

# Tải lên Custom Image

FPT Cloud hỗ trợ sử dụng Custom Image khi khởi tạo máy ảo. Bạn cần upload image lên hệ thống trước khi sử dụng.

## Tải lên Custom Image loại General

1. Chọn **Compute Engine** → **Custom Image**, nhấn **Upload Image**.

   [![Màn hình Custom Image với nút Upload Image](/img/migrated/image-1734596659826-b2abd687.png)](/img/migrated/image-1734596659826-b2abd687.png)

2. Nhập thông tin và chọn file từ máy, nhấn **Upload**.

   [![Hộp thoại Upload Image](/img/migrated/image-1734596547440-d2446434.png)](/img/migrated/image-1734596547440-d2446434.png)

:::note
Đối với dịch vụ General, hệ thống hỗ trợ định dạng file QCOW và VMDK.
:::

## Tải lên Custom Image loại ISO

1. Chọn **Compute Engine** → **Custom Image**, nhấn **Upload Image**.

   [![Màn hình Custom Image](/img/migrated/Screenshot_35-1024x328-7ae2c81b.png)](/img/migrated/Screenshot_35-1024x328-7ae2c81b.png)

2. Nhập thông tin:
   - **File ISO** (format .iso): Kéo thả hoặc chọn file từ thiết bị.
   - **Name**: Tên file image.
   - **Description**: Mô tả file image.
   - **Add tag** *(tùy chọn)*: Gắn thẻ vào image.

   [![Hộp thoại Upload ISO Image](/img/migrated/image-1734596700322-e585989d.png)](/img/migrated/image-1734596700322-e585989d.png)

3. Nhấn **Upload Image**. Hệ thống chuyển đến trang danh sách ISO image để theo dõi tiến trình tải lên.

   [![Danh sách ISO image](/img/migrated/image-1734596808937-7682f537.png)](/img/migrated/image-1734596808937-7682f537.png)

## Bước tiếp theo

- [Xóa Custom Image](/docs/vi/fpt-cloud-server/cloud-server/tutorials/custom-images/xoa-custom-image)
