---
id: "usage"
title: "Kiểm tra lượng sử dụng Grafana"
sidebar_label: "Kiểm tra lượng sử dụng Grafana"
sidebar_position: "20"
---

# Check lượng sử dụng Grafana

Để kiểm tra lượng timeseries/logs/trace has been sử dụng, you thực hiện the bước sau:

**Step 1:** Access console portal, trên menu chọn service Monitoring

**Step 2:** Vào trang details workspace that, chọn tab Quota and Package

**Step 3:** Check information usage time series/log/trace

_The interface displays as follows_

[![Alt text](/img/migrated/Screenshot_46-3d3c58d2.png)](/img/migrated/Screenshot_46-3d3c58d2.png)

- **Trường hợp 1:** Workspace has been sử dụng hết quota for phép of gói hiện tại. Khi that, metric/logs will cannot tiếp tục is đẩy về Grafana Dashboard.
  Bạn need to nâng cấp gói service to tiếp tục sử dụng Monitoring.

- **Trường hợp 2:** Workspace chưa sử dụng hết quota nhưng metric/logs vẫn không displayed trên dashboard.
  Vui lòng liên hệ đội ngũ support of chúng tôi to is hỗ trợ kiểm tra and xử lý.
