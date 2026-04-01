---
id: "tich-hop-dashboard-template"
title: "Tích hợp Dashboard Template"
sidebar_label: "Tích hợp Dashboard Template"
sidebar_position: "6"
---

# Tích hợp Dashboard Template

Người dùng cần tích hợp các Dashboard Template phù hợp với từng dịch vụ để theo dõi thông tin monitoring.

## Các bước thực hiện

**Bước 1:** Open menu ở góc trái màn hình

[![Alt text](/img/migrated/Picture3-a5fead32.png)](/img/migrated/Picture3-a5fead32.png)

**Bước 2:** Chọn **App** >> **Fmon – Templates** >> chọn tab **Dashboard Template**

[![Alt text](/img/migrated/Screenshot_2-b3e58395.png)](/img/migrated/Screenshot_2-b3e58395.png)

Màn hình sẽ hiển thị danh sách toàn bộ các dashboard template.

*Giao diện hiển thị danh sách Template*

[![Alt text](/img/migrated/Screenshot_3-0152f813.png)](/img/migrated/Screenshot_3-0152f813.png)

**Bước 3:** Chọn **Topic** tương ứng (ví dụ: Kubernetes)

Hệ thống hiển thị danh sách các Dashboard phù hợp với topic đã chọn.

[![Alt text](/img/migrated/Screenshot_4-9a1e9a31.png)](/img/migrated/Screenshot_4-9a1e9a31.png)

**Bước 4:** Click **Integrate** để tích hợp Dashboard

[![Alt text](/img/migrated/Screenshot_18-f0ee84d1.png)](/img/migrated/Screenshot_18-f0ee84d1.png)

- Tích hợp thành công, dashboard chuyển trạng thái thành **Integrated**

[![Alt text](/img/migrated/Screenshot_19-0864e4df.png)](/img/migrated/Screenshot_19-0864e4df.png)

- Nếu quá trình tích hợp xảy ra lỗi, vui lòng liên hệ đội ngũ hỗ trợ.

**Lưu ý:**

Số lượng Dashboard được tích hợp phụ thuộc vào gói dịch vụ đang sử dụng.

Ví dụ: Workspace bạn đang sử dụng gói V3_P1 cho phép tích hợp tối đa 02 Dashboard. Khi vượt quá giới hạn, hệ thống sẽ hiển thị thông báo hết quota.

**Bước 5:** Sau khi tích hợp thành công, refresh lại Grafana → mở menu → chọn **Dashboard**

Hệ thống hiển thị danh sách các Dashboard đã được tích hợp. Người dùng có thể mở và theo dõi các thông tin monitoring tương ứng.

[![Alt text](/img/migrated/Screenshot_6-624450fb.png)](/img/migrated/Screenshot_6-624450fb.png)
