---
id: "huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options"
title: "Hướng dẫn deploy một applications với kustomize sử dụng build options"
description: "Tương tự với việc deploy một applications với manifest, để deploy một ứng dụng sử dụng kustomize cần thực hiện các bước "
sidebar_label: "Hướng dẫn deploy một applications với kustomize sử dụng build options"
sidebar_position: 4
---

# Hướng dẫn deploy một applications với kustomize sử dụng build options

Tương tự với việc deploy một applications với manifest, để deploy một ứng dụng sử dụng kustomize cần thực hiện các bước tương tự như mục 5.8.2 trong Documentations.
**Bước 1:** Chuẩn bị một Repository để deploy ứng dụng. Trong phần demo này, deploy một số ứng dụng lên k8s bao gồm: thành phần ỉngress controller, argocd-rollout và applications
Cụ thể: Cấu trúc thư mục source code như sau: [![](/img/migrated/Picture93-2-e233954f.png)](/img/migrated/Picture93-2-e233954f.png)
Trong đó: 
  * Argo-rollout được deploy sử dụng kustomize với build options helm chart [![](/img/migrated/Picture94-2-2b0c49f1.png)](/img/migrated/Picture94-2-2b0c49f1.png)
  * Ingress-nginx và các thành phần khác được deploy sử dụng kustomize với manifest [![](/img/migrated/Picture95-2-0046a221.png)](/img/migrated/Picture95-2-0046a221.png)

**Bước 2:** Thực hiện cấu hình build options của kustomize thông qua giao diện của Portal theo hướng dẫn chi tiết ở mục 5.5. trong Document.
**Lưu ý: Trong trường hợp chưa cấu hình build options, việc tạo applications sẽ gặp lỗi.** [![](/img/migrated/Picture96-2-b42ada9b.png)](/img/migrated/Picture96-2-b42ada9b.png)
**Bước 3:** Deploy applications thông qua ArgoCD Thực hiện tạo Applications tương tự như mục 5.8.2. trong Document. Tuy nhiên, đối với ứng dụng deploy với kustomize và helm chart cần cấu hình thêm một số thông tin như sau: [![](/img/migrated/Picture97-2-9d3a59cd.png)](/img/migrated/Picture97-2-9d3a59cd.png) [![](/img/migrated/Picture98-2-ff0c9a53.png)](/img/migrated/Picture98-2-ff0c9a53.png) Applications sau khi deploy thành công: [![](/img/migrated/Picture99-2-1f7a4254.png)](/img/migrated/Picture99-2-1f7a4254.png)
