---
id: "huong-dan-tich-hop-database"
title: "Hướng dẫn tích hợp Database"
sidebar_label: "Hướng dẫn tích hợp Database"
sidebar_position: "15"
---

# Hướng dẫn tích hợp Database

## ステップ1: Truy cập chức năng

- Sau khi active dịch vụ Monitoring và khởi tạo workspace thành công, trên Console portal, bạn vào detail một cụm Database và chọn Monitoring
- Hệ thống hiển thị danh sách các metrics và logs theo loại database. Các metric hoặc log chưa được tích hợp với FPT Monitoring sẽ có Status = "Disabled".

[![Alt text](/img/migrated/Screenshot_33-828878ed.png)](/img/migrated/Screenshot_33-828878ed.png)

## ステップ2: Tích hợp/huỷ tích hợp

### Tích hợp (Integrate)

Bật thu thập metrics/logs cho cluster.

- Tại màn hình Monitoring, chọn hành động "Integrate" ứng với workspace cần tích hợp

<ảnh đang được update>

- Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất.

<ảnh đang được update>

- Sau khi tích hợp thành công, Integrated Status sẽ chuyển sang **"Enabled"**, hệ thống FPT Monitoring bắt đầu thu thập các chỉ số tương ứng.

<ảnh đang được update>

### Huỷ tích hợp (Disintegrate)

Tắt thu thập metrics/logs cho database cluster.

- Tại màn hình Monitoring, chọn hành động **"Disintegrate"** ứng với workspace cần huỷ giám sát.
- Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất.
- Sau khi huỷ tích hợp thành công, Integrated Status sẽ chuyển sang **"Disabled"**, hệ thống FPT Monitoring ngừng thu thập các chỉ số tương ứng.

<ảnh đang được update>

## ステップ3: Truy cập dashboard Grafana và xem thông tin monitoring

- Sau khi tích hợp giám sát thành công (Integrated Status = "Enabled"), click vào Dashboard URL để đi tới trang Grafana
- Sau đó tích hợp các dashboard template tương ứng, tham khảo hướng dẫn tại mục [**3.1. Tích hợp Dashboard Template**](../huong-dan-su-dung-grafana/index.md)
- Mở dashboard đã tích hợp và xem thông tin monitor

[![Alt text](/img/migrated/Screenshot_34-e8f6a87c.png)](/img/migrated/Screenshot_34-e8f6a87c.png)
