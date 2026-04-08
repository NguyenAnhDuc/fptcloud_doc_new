---
id: "view-bills"
title: "Xem đối soát theo kỳ hóa đơn"
description: "Hướng dẫn xem đối soát chi phí theo kỳ hóa đơn trên FPT Cloud Portal."
sidebar_label: "Xem đối soát theo kỳ hóa đơn"
sidebar_position: 1
---

# Xem đối soát theo kỳ hóa đơn

:::note
Để xem đối soát, bạn cần đăng nhập với role Tenant Owner hoặc role có quyền **view billing**. Chi tiết hướng dẫn phân quyền tại [Phân quyền xem billing](billing-permission.md).
:::

Thực hiện theo các bước sau:

1. Tại thanh menu, chọn **Billing** > **Bills** > lần lượt chọn kỳ hóa đơn (period), chọn contract và invoice cần xem.

   :::note
   Trong trường hợp các Project/VPC hoặc tài nguyên trong cùng một Tenant cần được tách thành nhiều cụm (billing group) để thanh toán, hệ thống sẽ hiển thị số lượng đối soát bằng đúng số lượng cụm tài nguyên (billing group).
   :::

   [![Màn hình chọn kỳ hóa đơn](/img/migrated/image-1744088467596-ab857222.png)](/img/migrated/image-1744088467596-ab857222.png)

2. Tại màn hình xem đối soát, bạn có thể tra cứu các thông tin sau:

   - **Account name** – Tên công ty
   - **Tax code** – Mã số thuế
   - **Company address** – Địa chỉ công ty
   - **Billing period** – Ngày bắt đầu và ngày kết thúc của kỳ hóa đơn
   - **Last updated** – Thời điểm cập nhật dữ liệu gần nhất
   - **Invoice status** – Trạng thái đối soát, gồm ba trạng thái:
     - **Draft** – Dữ liệu đối soát nháp, chưa phải dữ liệu chốt để xuất hóa đơn
     - **Invoiced** – Đối soát đã được xác nhận và xuất hóa đơn thành công
     - **Cancelled** – Đối soát đã bị hủy và không xuất hóa đơn
   - **Grand total** – Tổng tiền trước thuế VAT tại thời điểm cập nhật dữ liệu gần nhất

3. Chọn tab [Charges by service](view-bill-charges-by-service.md) để xem chi tiết đối soát theo dịch vụ, hoặc tab [Charges by resource](view-bill-charges-by-resource.md) để xem theo tài nguyên sử dụng.
