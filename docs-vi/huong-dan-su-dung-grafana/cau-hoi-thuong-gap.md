---
id: "cau-hoi-thuong-gap"
title: "Câu hỏi thường gặp"
description: "Giải đáp các câu hỏi thường gặp khi sử dụng Grafana trong FPT Monitoring Service."
sidebar_label: "Câu hỏi thường gặp"
sidebar_position: 21
---

# Câu hỏi thường gặp

### 1. Sau khi tích hợp dashboard template, nếu quay lại màn Dashboard nhưng chưa thấy hiển thị template đã tích hợp?

Vui lòng thử refresh lại trang.

### 2. Hướng dẫn kiểm tra khi gặp trường hợp sau một thời gian sử dụng Monitoring, metric/logs không hiển thị trên Grafana Dashboard

Trong trường hợp sau một thời gian sử dụng Monitoring mà metric/logs không còn hiển thị trên Grafana Dashboard, rất có thể workspace của bạn đã sử dụng hết quota time series/logs trong gói FMON hiện tại.

Để kiểm tra lượng time series/logs đã sử dụng, bạn tham khảo hướng dẫn tại mục **[7. Hướng dẫn kiểm tra trạng thái usage (timeseries, log, trace) trên trang console portal](../huong-dan-su-dung-grafana/index.md)**