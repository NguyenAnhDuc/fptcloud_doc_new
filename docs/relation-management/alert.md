---
id: "alert"
title: "Alert"
sidebar_label: "Alert"
sidebar_position: "12"
---

# Alert

Để tạo alert, you thao tác theo guide sau:
**Step 1** : Vào Home >> Alerting >> Alert rules >> Click New alert rule
[![Alt text](/img/migrated/Picture37-ffd11132.png)](/img/migrated/Picture37-ffd11132.png)
**Step 2** : Người dùng config the information alert
**Ví dụ demo tạo alert when node k8s in tag FMON-DEMO not ready.**
• Đầu tiên, nhập tên alert ando mục 1. Enter alert rule name
[![Alt text](/img/migrated/Picture39-97d2242c.png)](/img/migrated/Picture39-97d2242c.png)
• Tiếp theo, config information in mục 2. Define query and alert condition
Với ví dụ trên, nhập query to lấy ra list the node ready (Gọi là bảng A) >> Preview
[![Alt text](/img/migrated/Picture40-2b9cb85f.png)](/img/migrated/Picture40-2b9cb85f.png)
• Tiếp theo, you Add query, chọn datasource là fci-relation-datasource >> Chọn tag, component and nhập response key. Lúc this, system will trả ra the cluster nằm in tag FMON-DEMO with component corresponding (Gọi là bảng C)
[![Alt text](/img/migrated/Picture41-7c9af83b.png)](/img/migrated/Picture41-7c9af83b.png)
• Tiếp to, you Add expression kiểu là Reduce, function= Last to lấy giá trị mới nhất of time series (Gọi là bảng D)
[![Alt text](/img/migrated/Picture42-c225abfe.png)](/img/migrated/Picture42-c225abfe.png)
• Add expression with kiểu là Math, merge giữa hai bảng D and C to lọc ra những metric có cluster name in component ở bảng C (Gọi là bảng E)
[![Alt text](/img/migrated/Picture43-67131a9c.png)](/img/migrated/Picture43-67131a9c.png)
• Cuối cùng, Add expression with kiểu là Threshold with input là E, điều kiện là IS_BELOW 1. Tức là if giá trị thỏa mãn điều kiện là <1 thì lúc this will bắn alert, ngược lại >=1 là Normal.
[![Alt text](/img/migrated/Picture44-c63498f2.png)](/img/migrated/Picture44-c63498f2.png)
Với ví dụ trên, ở bảng E the metric đều có giá trị bằng 1 should status là Normal. 
**Step 3** : Sau when config the information xong, you need to Save rule to bảo toàn information.
