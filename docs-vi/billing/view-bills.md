---
id: "view-bills"
title: "Xem đối soát theo kỳ hóa đơn"
description: "**Để xem đối soát, người dùng cần đăng nhập vào hệ thống với role là Tenant owner hoặc role có quyền _view billing_.**"
sidebar_label: "Xem đối soát theo kỳ hóa đơn"
sidebar_position: 2
---

# Xem đối soát theo kỳ hóa đơn

**Để xem đối soát, người dùng cần đăng nhập vào hệ thống với role là Tenant owner hoặc role có quyền _view billing_.**
_Lưu ý: Chi tiết hướng dẫn phân quyền xem billing tại[link](../billing/index.md)_
Người dùng thao tác như sau:
**Bước 1:** Tại menu tab bar, chọn Billing > Bills > lần lượt chọn kỳ hóa đơn (period), chọn contract và invoice cần xem. 
_Lưu ý: Trong trường hợp các Project/VPC hoặc tài nguyên trong cùng 1 Tenant mà bạn đang quản lý cần được tách thành nhiều cụm (billing group) để thanh toán, hệ thống sẽ hiển thị số lượng đối soát bằng đúng số lượng cụm tài nguyên (billing group)._
[![file](/img/migrated/image-1744088467596-ab857222.png)](/img/migrated/image-1744088467596-ab857222.png)
**Bước 2:** Tại màn hình xem đối soát, người dùng có thể tra cứu các thông tin bao gồm: 
  * Tên công ty (Account name)
  * Mã số thuế (Tax code)
  * Địa chỉ công ty (Company address)
  * Kỳ hóa đơn (Billing period): Thể hiện ngày bắt đầu và ngày kết thúc của kỳ hóa đơn đó.
  * Thời điểm cập nhật dữ liệu gần nhất (Last updated)
  * Trạng thái của đối soát (Invoice status): Có 3 trạng thái chính bao gồm: 
    * Draft - dữ liệu đối soát nháp, chưa phải là dữ liệu chốt để xuất hóa đơn; 
    * Invoiced - Đối soát đã được xác nhận và xuất hóa đơn thành công; 
    * Cancelled - Đối soát đã bị hủy và không xuất hóa đơn. 
  * Tổng tiền (Grand total): Tổng tiền trước thuế VAT tại thời điểm cập nhật dữ liệu gần nhất.

**Bước 3:** Người dùng có thể xem chi tiết đối soát theo dịch vụ tại tab [Charges by service](../billing/index.md) hoặc theo tài nguyên sử dụng tại tab [Charges by resource](../billing/index.md).