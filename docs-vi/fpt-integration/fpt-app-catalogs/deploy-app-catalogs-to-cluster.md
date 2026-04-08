---
id: "deploy-app-catalogs-to-cluster"
title: "Deploy App Catalog tới cluster"
description: "Hướng dẫn deploy App Catalog tới Kubernetes cluster."
sidebar_label: "Deploy App Catalog tới cluster"
sidebar_position: 10
---

# Deploy App Catalog tới cluster

Sau khi tìm kiếm chart mong muốn thực hiện deploy app tới k8s cluster như sau:
**Bước 1** : Click **Deploy** để thực hiện deploy app catalog
[![](/img/migrated/Picture13-1-c7b08d31.png)](/img/migrated/Picture13-1-c7b08d31.png)
**Bước 2** : Nhập thông tin để deploy app bao gồm:
Với mỗi một App sẽ cần một số thông tin để deploy bao gồm:
  * Release name: name được sử dụng để deploy chart

_Lưu ý: Release name là duy nhất với mỗi chart trên từng namespace_
  * Versions: version của chart được sử dụng để deploy

_Lưu ý: Cần kiểm tra tính tương thích của version app và version của k8s_
  * Clusters: Chọn cluster trong manage clusters
  * Namespace: Nhập tên namespace để deploy app. Trong trường hợp namespace chưa tồn tại trên k8s cluster, namespace sẽ được tự động tạo trong quá trình install chart
  * User Define Values: Nhập giá trị values cần thay đổi trong quá trình deploy. Nếu giá trị này để trống, app sẽ được install với giá trị mặc định

[![](/img/migrated/Picture14-1-42e55883.png)](/img/migrated/Picture14-1-42e55883.png)
Click **Install App** để hoàn thành Sau khi deploy xong app sẽ được quản lý trong mục **Deployed Apps**
[![](/img/migrated/Picture15-1-0f840ff4.png)](/img/migrated/Picture15-1-0f840ff4.png)
**Bước 3** : Kiểm tra app đã được deploy trên cluster
  * Kiểm tra chart được deploy tới namespace:

```
Copyhelm -n cert-manager list
```

[![](/img/migrated/Picture16-1-038b9b9f.png)](/img/migrated/Picture16-1-038b9b9f.png)
  * Kiểm tra value được sử dụng để deploy

```
Copyhelm -n cert-manager get values cert-manager
```

[![](/img/migrated/Picture17-1-39cc0cef.png)](/img/migrated/Picture17-1-39cc0cef.png)
  * Kiểm tra trạng thái pods,service đã được deploy:

[![](/img/migrated/Picture18-1-1a158bc4.png)](/img/migrated/Picture18-1-1a158bc4.png)
