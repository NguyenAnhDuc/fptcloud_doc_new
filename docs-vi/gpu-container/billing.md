---
id: "billing"
title: "Billing"
description: "Phí được tính dựa trên số giờ GPU hoạt động. Container sẽ bị tính phí khi đang ở trạng thái chạy, bất kể có workload nào đang được xử lý hay không."
sidebar_label: "Billing"
sidebar_position: 25
pagination_next: null
---

# Billing

## Tại sao tôi bị tính phí khi đang chạy container dù không sử dụng bất kỳ workload nào?
Phí được tính dựa trên số giờ GPU hoạt động. Điều này có nghĩa là container sẽ bị tính phí khi đang ở trạng thái chạy, bất kể có workload nào đang được xử lý hay không.

Để tránh phát sinh chi phí không cần thiết, hãy dừng hoặc xóa container khi bạn không sử dụng. Lưu ý rằng bạn vẫn bị tính phí lưu trữ liên tục khi container đang dừng.

Xem thêm thông tin về mô hình thanh toán tại [Payment Model](./payment-model.md) và [Billing Overview](./billing-overview.md).
