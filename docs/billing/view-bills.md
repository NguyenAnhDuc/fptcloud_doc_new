---
id: "view-bills"
title: "Xem đối soát theo kỳ hóa đơn"
sidebar_label: "Xem đối soát theo kỳ hóa đơn"
sidebar_position: "2"
---

# View đối soát theo kỳ invoice

**Để xem đối soát, user need to đăng nhập ando system with role là Tenant owner or role có permission _view billing_.**
_Note: Chi tiết guide phân permission xem billing tại[link](../billing/index.md)_
Người dùng thao tác as follows:
**Step 1:** Tại menu tab bar, chọn Billing > Bills > lần lượt chọn kỳ invoice (period), chọn contract and invoice need to xem. 
_Note: Trong trường hợp the Project/VPC or tài nguyên in cùng 1 Tenant mà you is quản lý need to is tách thành nhiều cụm (billing group) to payment, system will displayed số lượng đối soát bằng đúng số lượng cụm tài nguyên (billing group)._
[![file](/img/migrated/image-1744088467596-ab857222.png)](/img/migrated/image-1744088467596-ab857222.png)
**Step 2:** Tại màn hình xem đối soát, user can tra cứu the information including: 
  * Tên công ty (Account name)
  * Mã số thuế (Tax code)
  * Địa chỉ công ty (Company address)
  * Kỳ invoice (Billing period): Thể hiện ngày bắt đầu and ngày kết thúc of kỳ invoice that.
  * Thời điểm cập nhật dữ liệu gần nhất (Last updated)
  * Trạng thái of đối soát (Invoice status): Có 3 status chính including: 
    * Draft - dữ liệu đối soát nháp, chưa must là dữ liệu chốt to xuất invoice; 
    * Invoiced - Đối soát has been is xác nhận and xuất invoice successfully; 
    * Cancelled - Đối soát has been bị hủy and không xuất invoice. 
  * Tổng tiền (Grand total): Tổng tiền trước thuế VAT tại thời điểm cập nhật dữ liệu gần nhất.

**Step 3:** Người dùng can xem details đối soát theo service tại tab [Charges by service](../billing/index.md) or theo tài nguyên sử dụng tại tab [Charges by resource](../billing/index.md).
