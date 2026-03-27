---
id: "huong-dan-deploy-applications-qua-helm-chart-repo"
title: "Hướng dẫn deploy applications qua helm chart repo"
description: "**Bước 1:** Cấu hình repository helm chart Cấu hình helm repository, trường hợp helm chart public có thể không cần cấu h"
sidebar_label: "Hướng dẫn deploy applications qua helm chart repo"
sidebar_position: 47
---

# Huong Dan Deploy Applications Qua Helm Chart Repo

**Bước 1:** Cấu hình repository helm chart Cấu hình helm repository, trường hợp helm chart public có thể không cần cấu hình helm repo, tuy nhiên nếu helm chart private cần cấu hình helm repo để ArgoCD có thể get repository deploy ứng dụng.
Ví dụ add helm repository của xplat tới ArgoCD
[![](/img/migrated/Picture17-3-cbd4241f.png)](/img/migrated/Picture17-3-cbd4241f.png)
Kết quả cấu hình thành công repository:
[![](/img/migrated/Picture18-3-f2c9fb5e.png)](/img/migrated/Picture18-3-f2c9fb5e.png)
**Bước 2:** Tạo Applications để deploy chart cert-manager
[![](/img/migrated/Picture19-3-47801cfa.png)](/img/migrated/Picture19-3-47801cfa.png)
[![](/img/migrated/Picture20-3-92fd4474.png)](/img/migrated/Picture20-3-92fd4474.png)
[![](/img/migrated/Picture21-3-59520a91.png)](/img/migrated/Picture21-3-59520a91.png)
Kết quả sau khi deploy applications:
[![](/img/migrated/Picture22-2-ef9ddebf.png)](/img/migrated/Picture22-2-ef9ddebf.png)
Kiểm tra kết quả deploy dưới k8s cluster:
[![](/img/migrated/Picture23-2-b618fe2a.png)](/img/migrated/Picture23-2-b618fe2a.png)
**Lưu ý** : Trong trường hợp deploy applications sử dụng helm chart deploy, argocd sẽ lấy file chart về để deploy như manifest. Do đó dưới cụm k8s cluster khi get list helm chart sẽ không thấy chart deploy.*
[![](/img/migrated/Picture24-2-5310f476.png)](/img/migrated/Picture24-2-5310f476.png)