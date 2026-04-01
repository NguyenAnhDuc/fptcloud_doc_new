---
id: "tao-alert-rule"
title: "Tạo Alert Rule"
sidebar_label: "Tạo Alert Rule"
sidebar_position: "18"
---

# Create Alert Rule

Dưới đây là guide cơ bản to create alert rule. Ngoài ra, you can tham khảo guide details tại link chính thức of Grafana **[TẠI ĐÂY](https://grafana.com/docs/grafana/latest/alerting/alerting-rules/create-grafana-managed-rule)**

## Step 1: Truy cập Alerting

- Vào Grafana
- Menu trái → Alerting → Alert rules

[![Alt text](/img/migrated/Screenshot_36-f903362f.png)](/img/migrated/Screenshot_36-f903362f.png)

- Click New alert rule >> Enter alert rule name

[![Alt text](/img/migrated/Screenshot_37-9b5a342e.png)](/img/migrated/Screenshot_37-9b5a342e.png)

[![Alt text](/img/migrated/Screenshot_38-4ebfed07.png)](/img/migrated/Screenshot_38-4ebfed07.png)

Tên this:
- Được displayed in list alert rule
- Đồng thời là giá trị of label alertname for mọi alert instance is tạo from rule this

## Step 2: Định nghĩa query and điều kiện

Xác định query to lấy dữ liệu need to theo dõi and điều kiện must thỏa mãn before alert rule is kích hoạt.

- Chọn Data source (ví dụ: Prometheus)
- Enter query metric. Query this will là đầu ando for alert condition.

Example: `cpu_usage_percent > 80`

[![Alt text](/img/migrated/Screenshot_40-6a7312e7.png)](/img/migrated/Screenshot_40-6a7312e7.png)

Sau that, định nghĩa Condition

## Step 3: Configure hành vi đánh giá alert (Alert evaluation behavior)

Thiết lập tần suất đánh giá alert and theh alert chuyển status.

- Chọn folder or nhấn + New folder: Chọn a thư mục to save alert rule of you.
- Chọn evaluation group or tạo mới: Các rule in cùng a group will is đánh giá đồng thời in cùng a khoảng thời gian.

Nếu tạo mới, chỉ định interval

- Enter pending period: Là khoảng thời gian alert must vi phạm điều kiện before firing

[![Alt text](/img/migrated/Screenshot_41-c8ff1356.png)](/img/migrated/Screenshot_41-c8ff1356.png)

## Step 4: Add Annotations

Sử dụng annotations to bổ sung information for alert message.

[![Alt text](/img/migrated/Screenshot_42-e2a05998.png)](/img/migrated/Screenshot_42-e2a05998.png)

Các annotation tuỳ chọn:
- Summary: Tóm tắt ngắn gọn sự cố
- Description: Mô tả alert rule
- Runbook URL: Link runbook xử lý
- Custom annotation: Thông tin bổ sung
- Link dashboard & panel: Liên kết tới dashboard/panel liên quan

**Example:**

```
summary = High CPU usage
description = CPU usage is above 80% for more than 5 minutes
```

## Step 5: Labels and notifications

## Step 6: Save Alert Rule

- Click Save ở góc must màn hình

Alert rule is tạo successfully.

Để kiểm tra alert after tạo:
- Vào Alerting → Alert rules
- View status: Normal / Pending / Firing
