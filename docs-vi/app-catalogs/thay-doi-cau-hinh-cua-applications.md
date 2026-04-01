---
id: "thay-doi-cau-hinh-cua-applications"
title: "Thay doi cau Hinh cua Applications"
description: "Tại màn hình xem chi tiết thông tin của app, thực hiện thay đổi cấu hình applications bằng cách thay đổi giá trị **User "
sidebar_label: "Thay doi cau Hinh cua Applications"
sidebar_position: 12
---

# Thay Doi Cau Hinh Cua Applications

Tại màn hình xem chi tiết thông tin của app, thực hiện thay đổi cấu hình applications bằng cách thay đổi giá trị **User Define Values** như sau:
**Bước 1:** Xem chi tiết thông tin applications như mục 5.5.2
**Bước 2** : Tạo màn xem chi tiết > Chọn **Reconfig**
[![](/img/migrated/Picture25-1-da64c670.png)](/img/migrated/Picture25-1-da64c670.png)
**Bước 3** : Thay đổi giá trị **User Define Values** :
[![](/img/migrated/Picture26-1-464bd36a.png)](/img/migrated/Picture26-1-464bd36a.png)
**Bước 4** : Chọn **Confirm** để thực hiện Reconfig và kiểm tra kết quả deploy của config
[![](/img/migrated/Picture27-1-2f7ff506.png)](/img/migrated/Picture27-1-2f7ff506.png)
**Bước 5** : Kiểm tra thông tin reconfig dưới cluster

```
Copyhelm -n cert-manager get values cert-manager
```

[![](/img/migrated/Picture28-1-e0ab09a2.png)](/img/migrated/Picture28-1-e0ab09a2.png)

```
Copykubectl -n cert-manager get pods
```

[![](/img/migrated/Picture29-1-431076fb.png)](/img/migrated/Picture29-1-431076fb.png)
Số lượng replicas thay đổi theo số lượng đã được config.
