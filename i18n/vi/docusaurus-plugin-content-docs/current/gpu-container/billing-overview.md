---
id: "billing-overview"
title: "Billing Overview"
description: "Bạn cần thanh toán để mua credit trước khi sử dụng dịch vụ AI Factory. Số dư của bạn là số dư dùng chung cho tất cả dịch vụ AI Factory."
sidebar_label: "Billing Overview"
sidebar_position: 13
---

# Billing Overview

## Tổng quan
### 1. Yêu cầu thanh toán:
Bạn cần thanh toán để mua credit trước khi sử dụng dịch vụ AI Factory. Lưu ý rằng **số dư của bạn là số dư dùng chung** để thanh toán cho tất cả dịch vụ của AI Factory, không chỉ riêng GPU Container. Sau khi mua credit thành công, số credit sẽ được hiển thị trên số dư Tenant.

### 2. Website & Tenant theo khu vực:
**Số dư được liên kết với một tenant và khu vực cụ thể.**
  * Hiện tại, chúng tôi không hỗ trợ một số dư chung cho nhiều khu vực hoặc nhiều tenant.
  * Nếu bạn muốn sử dụng cả GPU H100 tại **Việt Nam** và GPU H200 tại **Nhật Bản**, bạn cần tạo **tenant riêng biệt** cho mỗi khu vực.

_Sau khi đăng nhập thành công vào các portal tại ai.fptcloud.com (khu vực Việt Nam) hoặc ai.fptcloud.jp (khu vực Nhật Bản), một tenant mới sẽ được tạo tự động. Lưu ý rằng các tenant ở hai khu vực này hoàn toàn độc lập về số dư và tài nguyên dịch vụ._

### 3. Phương thức thanh toán:
Hiện tại chúng tôi hỗ trợ thanh toán trực tuyến qua Stripe (áp dụng với mọi loại tiền tệ) và VNPay (chỉ áp dụng khi thanh toán bằng Việt Nam đồng). Chúng tôi không lưu trữ hoặc xử lý số thẻ tín dụng của bạn, chúng được chuyển trực tiếp đến Stripe và VNPay.

### 4. Chi tiết giá:
Mỗi container có chi phí theo giờ dựa trên GPU Instance. Có các mức giá và phí riêng biệt cho:
  * Chi phí GPU instance
  * Chi phí lưu trữ liên tục

Bạn bị tính **chi phí GPU instance theo từng giây** khi container đang ở trạng thái chạy. Bạn bị tính **chi phí lưu trữ liên tục (phụ thuộc vào dung lượng lưu trữ được phân bổ) theo từng giây** khi container tồn tại, kể cả khi container bị dừng. Lưu trữ tạm thời hiện miễn phí.

## Lịch sử thanh toán
Bạn có thể xem tài liệu chi tiết về lịch sử thanh toán bằng cách nhấp vào "Credit History" trong trang Billing trên console. [![Alt text](/img/migrated/credit-history-381407df.png)](/img/migrated/credit-history-381407df.png)

## Số dư thấp
Khi số dư tài khoản của bạn thấp hơn chi phí ước tính sử dụng container trong 1 giờ, một số thao tác có thể bị giới hạn như Tạo Container, Tạo Storage Volume, Khởi động Container và Khởi động lại Container. Bạn cũng sẽ nhận được thông báo từ hệ thống để nạp thêm credit.

## Số dư âm
Khi số dư của bạn về không hoặc âm, container sẽ tự động bị dừng nhưng không bị xóa ngay lập tức. Dữ liệu trên bộ lưu trữ tạm thời sẽ bị xóa và không thể khôi phục. Vì dữ liệu trên bộ lưu trữ liên tục vẫn còn, bạn vẫn bị tính phí lưu trữ liên tục cho container đã dừng.
Nếu số dư âm trong **7 ngày liên tiếp**, chúng tôi sẽ xóa container và tất cả dữ liệu sẽ bị xóa vĩnh viễn. Hãy lên kế hoạch phù hợp.
