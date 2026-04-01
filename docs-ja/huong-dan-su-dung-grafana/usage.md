---
id: "usage"
title: "Kiểm tra lượng sử dụng Grafana"
sidebar_label: "Kiểm tra lượng sử dụng Grafana"
sidebar_position: "20"
---

# 確認 lượng sử dụng Grafana

Để kiểm tra lượng timeseries/logs/trace đã sử dụng, bạn thực hiện các bước sau:

**ステップ1:** にアクセスします console portal, trên menu chọn dịch vụ Monitoring

**ステップ2:** Vào trang chi tiết workspace đó, chọn tab Quota and Package

**ステップ3:** Kiểm tra thông tin usage time series/log/trace

_Giao diện hiển thị như sau_

[![Alt text](/img/migrated/Screenshot_46-3d3c58d2.png)](/img/migrated/Screenshot_46-3d3c58d2.png)

- **Trường hợp 1:** Workspace đã sử dụng hết quota cho phép của gói hiện tại. Khi đó, metric/logs sẽ không thể tiếp tục được đẩy về Grafana Dashboard.
  Bạn cần nâng cấp gói dịch vụ để tiếp tục sử dụng Monitoring.

- **Trường hợp 2:** Workspace chưa sử dụng hết quota nhưng metric/logs vẫn không hiển thị trên dashboard.
  Vui lòng liên hệ đội ngũ support của chúng tôi để được hỗ trợ kiểm tra và xử lý.
