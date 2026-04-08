---
id: "new-quota"
title: "Sử dụng dịch vụ tính tiền PAYG"
sidebar_label: "Sử dụng dịch vụ tính tiền PAYG"
sidebar_position: 17
---

# Sử dụng dịch vụ tính tiền PAYG


Khi người dùng sử dụng hết tài nguyên trả trước, người dùng có thể tiếp tục tạo tài nguyên để sử dụng theo hình thức thanh toán PAYG.

## 1\. Tạo tài nguyên dịch vụ tính theo PAYG.
Trong quá trình tạo tài nguyên mới, nếu dịch vụ đang tạo đã hết thì người dùng sẽ nhận được thông báo loại tài nguyên nào đã hết và sẽ được chuyển đổi hình thức thanh toán.

Các dịch vụ đã hỗ trợ phương thức tính tiền PAYG

  1. Máy ảo: tạo, clone, resize máy ảo, tạo snapshot/template từ máy ảo
  2. Storage: tạo, resize storage, tạo snapshot từ storage
  3. IP: Allocate IP
  4. Load Balancer v1 (chỉ hỗ trợ server general)
  5. Auto Scaling
  6. K8S/DB


![file](/img/migrated/docs-vi-cloud-server/new-quota/img-001.png)

## 2\. Hiển thị thông tin Dashboard
Hiển thị các thống kê của Tenant

  * Quota: tổng số lượng từ tất cả các phụ lục hợp đồng đang còn hiệu lực (active) hoặc đã hết hạn nhưng chưa đến thời gian thu hồi (expired)

  * Remaining: Số lượng tài nguyên còn lại người dùng có thể sử dụng

  * Usage: số lượng tài nguyên người dùng đã sử dụng

  * PAYG: trường hợp sử dụng hết tài nguyên trả trước theo phụ lục hợp đồng, hệ thống bắt đầu tính số lượng tài nguyên PAYG, tài nguyên này sẽ được tính tiền theo giá PAYG.


Note: Số lượng tài nguyên tính theo PAYG không cố định. Khi người dùng xóa bớt tài nguyên về dưới số lượng đã trả trước, hệ thống tự động cập nhật số liệu và ngưng tính tiền tài nguyên PAYG.

![file](/img/migrated/docs-vi-cloud-server/new-quota/img-002.png)

## 3\. Hiển thị thông tin Billing
Để xem chi tiết cách tính tiền và số tiền đã sử dụng theo phương thức PAYG, người dùng có thể xem trên trang Bills bằng cách truy cập Unify Portal và chọn Billing -> Bills

Xem thông tin HDSD billing PAYG tại: <https://fptcloud.com/documents/billing/?doc=view-billing>

Lưu ý: tính năng có thể chưa được áp dụng cho tất cả khách hàng, nếu khách hàng có nhu cầu vui lòng liên hệ đội hỗ trợ để được tư vấn thêm thông tin.
