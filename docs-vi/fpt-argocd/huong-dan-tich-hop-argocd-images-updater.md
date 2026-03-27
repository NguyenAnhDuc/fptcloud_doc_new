---
id: "huong-dan-tich-hop-argocd-images-updater"
title: "Hướng dẫn tích hợp Argo CD Images Updater"
description: "Trong phần này sẽ hướng dẫn người dùng deploy ứng dụng trên ArgoCD sử dụng Images Updater. Để sử dụng tính năng Argo CD "
sidebar_label: "Hướng dẫn tích hợp Argo CD Images Updater"
sidebar_position: 52
---

# Huong Dan Tich Hop Argocd Images Updater

Trong phần này sẽ hướng dẫn người dùng deploy ứng dụng trên ArgoCD sử dụng Images Updater. Để sử dụng tính năng Argo CD Images updater, người dùng thực hiện enable service thông qua portal, thực hiện cấu hình các thông tin để xác thực cần dùng như secret/secret registry/Container registry theo hướng dẫn tại mục 5.5
Chuẩn bị:
**a. Bước 1: Chuẩn bị source deployment**
  * Source deployment là helm chart

Ví dụ người dùng muốn deploy service nginx với helm chart tới argocd. Chuẩn bị chart để deploy: [![](/img/migrated/Picture100-2-e854d3aa.png)](/img/migrated/Picture100-2-e854d3aa.png)
  * Images deploy được quản lý trên container registry. Trong phần demo này sẽ sử dụng container registry của FPT Cloud.
  * Argo CD images updater hỗ trợ phương thức Git write-back để lưu trữ các tham số deploy ứng dụng. Mặc định Argo CD images updater sẽ lưu các tham số trong file name .argocd-source-.yaml trong đường dẫn được sử dụng với Applications cấu hình trong đường dẫn manifest trên ArgoCD. Điều này cho phép ArgoCD triển khai ứng dụng theo tham số đã được lưu trữ trên Git.

VD: Tạo file **.argocd-source-demo-images-updater.yaml** với các thông tin sau:

```
Copyhelm:
  parameters:
  - name: image.name
    value: registry.fke.fptcloud.com/a6762c5a-56d1-4285-b4bc-b61177a171e1/nginx
    forcestring: true
  - name: image.tag
    value: dev-742b0343
    forcestring: true
```

**b. Bước 2: Cấu hình images pullSecret trên Portal**
Ví dụ: Người dùng sử dụng Secret Registry để kiểm tra thay đổi trên Container Registry. pullSecret được đặt tên: **habor-secret** [![](/img/migrated/Picture101-2-f1743170.png)](/img/migrated/Picture101-2-f1743170.png) [![](/img/migrated/Picture102-2-03b9e902.png)](/img/migrated/Picture102-2-03b9e902.png)
Secret Registry sẽ được sử dụng trong annotations của applications
**c. Bước 3: Tạo applications trên ArgoCD** [![](/img/migrated/Picture103-2-db71904f.png)](/img/migrated/Picture103-2-db71904f.png) [![](/img/migrated/Picture104-2-805da965.png)](/img/migrated/Picture104-2-805da965.png) [![](/img/migrated/Picture105-2-6eac2ef3.png)](/img/migrated/Picture105-2-6eac2ef3.png)
Sau đó sử dụng chức năng Edit as yaml để cấu hình annotations: [![](/img/migrated/Picture106-2-d13a50e5.png)](/img/migrated/Picture106-2-d13a50e5.png) [![](/img/migrated/Picture107-2-79a37b70.png)](/img/migrated/Picture107-2-79a37b70.png) Bổ sung annotations để sử dụng images updater:  
|   |   |  
| --- | --- |  
| argocd-image-updater.argoproj.io/demo-images-updater.allow-tags: regexp:^dev-[0-9a-f]{8}$   | Chỉ định những tag name được cho phép để update tới repository.   
VD ở đây chỉ cho phép cập nhật với các tag với biểu thức chính quy khớp với “dev-“ và chuỗi thập lục phân có 8 chữ số.   
VD: dev- a5fb3d31  |  
| argocd-image-updater.argoproj.io/****.pull-secret: pullsecret:argocd-ebwa49tw/habor-secret  | pullSecret để argocd images updater kiểm tra các tag images trên registry. Được cấu hình theo mẫu:   
Ví dụ: : demo-images-updater   
pullsecret:argocd-[argocd-id]/[Secret-registry-name]   |  
| argocd-image-updater.argoproj.io/****.update-strategy: latest  | Xác định cách Argo CD images updater tìm phiên bản mới của images được cập nhật trên registry. Có một số stragy:   
- **Semver**: Cập nhật lên phiên bản mới nhất của images khi xem xét các ràng buộc về phiên bản ngữ nghĩa   
- **Latest**: Cập nhật lên tag được đẩy lên gần đây nhất được tìm thấy trong container registry   
- **Digest**: Cập nhật lên phiên bản mới nhất của tag sử dụng SHA digest của tag images   
- **Name**: sắp xếp tag theo thứ tự bảng chữ cái để tìm ra tag được phép cập nhật  |  
| argocd-image-updater.argoproj.io/git-branch: master  | Nhánh để cập nhật thay đổi trong manifest   |  
| argocd-image-updater.argoproj.io/write-back-method: git   | Phương thức để cập nhật thay đổi của images.  |  
| argocd-image-updater.argoproj.io/image-list: =registry.fke.fptcloud.com/a6762c5a-56d1-4285-b4bc-b61177a171e1/nginx   | Phương thức để cập nhật thay đổi của images.  |  
**Bước 4: Cấu hình webhook tới git để kiểm tra thay đổi khi update tag images trên Container Registry**
  * Tạo webhook gitlab trên portal: [![](/img/migrated/Picture108-2-a587e856.png)](/img/migrated/Picture108-2-a587e856.png)
  * Cấu hình webhook trong gitlab: [![](/img/migrated/Picture109-2-08f7eb65.png)](/img/migrated/Picture109-2-08f7eb65.png)

Test push event: [![](/img/migrated/Picture110-2-54913219.png)](/img/migrated/Picture110-2-54913219.png) **Bước 5: Kiểm tra ứng dụng**
Kiểm tra images đang chạy ứng dụng trước khi push một images mới: [![](/img/migrated/Picture111-2-cd39a52c.png)](/img/migrated/Picture111-2-cd39a52c.png)
Push images mới tới registry: [![](/img/migrated/Picture112-2-1564bd25.png)](/img/migrated/Picture112-2-1564bd25.png)
Argo CD images updater sẽ cập nhật images mới tới git: [![](/img/migrated/Picture113-2-40533aa3.png)](/img/migrated/Picture113-2-40533aa3.png)
Webhook gitlab sẽ phát hiện thay đổi và thực hiện deploy images mới: [![](/img/migrated/Picture114-2-e9f6c665.png)](/img/migrated/Picture114-2-e9f6c665.png) [![](/img/migrated/Picture115-2-3de5e72c.png)](/img/migrated/Picture115-2-3de5e72c.png)
Kiểm tra push images không đúng định dạng được cho phép tới registry: [![](/img/migrated/Picture116-2-41d45fd3.png)](/img/migrated/Picture116-2-41d45fd3.png) Kiểm tra không có sự thay đổi tới ứng dụng: [![](/img/migrated/Picture117-2-ace9c50e.png)](/img/migrated/Picture117-2-ace9c50e.png) [![](/img/migrated/Picture118-2-9804afe2.png)](/img/migrated/Picture118-2-9804afe2.png)