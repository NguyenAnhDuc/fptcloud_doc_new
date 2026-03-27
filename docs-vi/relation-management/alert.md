---
id: "alert"
title: "Alert"
description: "Để tạo alert, bạn thao tác theo hướng dẫn sau:"
sidebar_label: "Alert"
sidebar_position: 12
---

# Alert

Để tạo alert, bạn thao tác theo hướng dẫn sau:
**Bước 1** : Vào Home >> Alerting >> Alert rules >> Click New alert rule
[![Alt text](/img/migrated/Picture37-ffd11132.png)](/img/migrated/Picture37-ffd11132.png)
**Bước 2** : Người dùng config các thông tin alert
**Ví dụ demo tạo alert khi node k8s trong tag FMON-DEMO not ready.**
• Đầu tiên, nhập tên alert vào mục 1. Enter alert rule name
[![Alt text](/img/migrated/Picture39-97d2242c.png)](/img/migrated/Picture39-97d2242c.png)
• Tiếp theo, config thông tin trong mục 2. Define query and alert condition
Với ví dụ trên, nhập query để lấy ra danh sách các node ready (Gọi là bảng A) >> Preview
[![Alt text](/img/migrated/Picture40-2b9cb85f.png)](/img/migrated/Picture40-2b9cb85f.png)
• Tiếp theo, bạn Add query, chọn datasource là fci-relation-datasource >> Chọn tag, component và nhập response key. Lúc này, hệ thống sẽ trả ra các cluster nằm trong tag FMON-DEMO với component tương ứng (Gọi là bảng C)
[![Alt text](/img/migrated/Picture41-7c9af83b.png)](/img/migrated/Picture41-7c9af83b.png)
• Tiếp đến, bạn Add expression kiểu là Reduce, function= Last để lấy giá trị mới nhất của time series (Gọi là bảng D)
[![Alt text](/img/migrated/Picture42-c225abfe.png)](/img/migrated/Picture42-c225abfe.png)
• Add expression với kiểu là Math, merge giữa hai bảng D và C để lọc ra những metric có cluster name trong component ở bảng C (Gọi là bảng E)
[![Alt text](/img/migrated/Picture43-67131a9c.png)](/img/migrated/Picture43-67131a9c.png)
• Cuối cùng, Add expression với kiểu là Threshold với input là E, điều kiện là IS_BELOW 1. Tức là nếu giá trị thỏa mãn điều kiện là <1 thì lúc này sẽ bắn alert, ngược lại >=1 là Normal.
[![Alt text](/img/migrated/Picture44-c63498f2.png)](/img/migrated/Picture44-c63498f2.png)
Với ví dụ trên, ở bảng E các metric đều có giá trị bằng 1 nên trạng thái là Normal. 
**Bước 3** : Sau khi config các thông tin xong, bạn cần Save rule để bảo toàn thông tin.