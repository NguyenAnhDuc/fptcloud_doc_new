---
id: "quan-ly-container-registry"
title: "Quản lý Container Registry"
description: "**_A. Thêm mới Container Registry_**"
sidebar_label: "Quản lý Container Registry"
sidebar_position: 12
pagination_next: null
---

# Quan Ly Container Registry

**_A. Thêm mới Container Registry_**
  * **Bước 1:** Tại màn hình **Image Updater** > **Container Registry** > **Add Container Registry** , thực hiện thêm mới Container Registry như sau: [![](/img/migrated/Picture27-5-327acd35.png)](/img/migrated/Picture27-5-327acd35.png)
  * **Bước 2:** Nhập thông tin Container Registry cần tạo: [![](/img/migrated/Picture29-4-ff1fe795.png)](/img/migrated/Picture29-4-ff1fe795.png)

Trong đó: 
✓ Name: Tên container registry. Giá trị này người dùng đặt tuỳ ý 
Ví dụ: My Custom Registry 
✓ Prefix: Prefix của registry, tên này phải khớp với DNS và phải là duy nhất 
Ví Dụ: docker.io 
✓ API URL: API url của docker registry. Phải là http/https 
VD: https://registry-1.docker.io 
✓ Default namespace: Một số registry có một default namespace ( đặc biệt là docker hub) 
VD: library 
✓ Credentials: được sử dụng để xác thực tới registry 
VD: pullsecret:argocd-[argocd-id]/dockerhub-secret. Trong đó dockerhub-secret là secret registry được thêm qua portal 
[argocd-id] được lấy trên url truy cập vào argocd 
[![](/img/migrated/Picture1-6-f3ce82fa.png)](/img/migrated/Picture1-6-f3ce82fa.png)
✓ Set Default: Nếu set là true, registry này là default registry 
✓ Set insecure: được sử dụng để disable xác minh TLS cho registry 
  * **Bước 3:** Kết quả sau khi thêm mới Container Registry: [![](/img/migrated/Picture30-4-214ebb11.png)](/img/migrated/Picture30-4-214ebb11.png)

**_B. Cập nhật Container Registry_**
  * **Bước 1:** Tại màn hình **Image Updater** > Chọn **Conrtainer Registry** muốn cập nhật > **Edit** , thực hiện cập nhật Container Registry như sau: [![](/img/migrated/Picture31-4-35d409d0.png)](/img/migrated/Picture31-4-35d409d0.png)
  * **Bước 2:** Thực hiện chỉnh sửa cấu hình Container Registry đã thêm: [![](/img/migrated/Picture32-4-9f6e263c.png)](/img/migrated/Picture32-4-9f6e263c.png)

Thực hiện chỉnh sửa các tham số cấu hình cho container registry. Ví dụ: thay đổi name/Prefix/ set default/insecure
Lưu ý: Các container registry được thêm vào chỉ có duy nhất 1 container registry là default
  * **Bước 3:** Kết quả sau khi cập nhật [![](/img/migrated/Picture33-4-d0347843.png)](/img/migrated/Picture33-4-d0347843.png)

**_C. Xoá Container Registry_**
  * **Bước 1:** Tại màn hình **Image Updater** > **Container Registry** > **Chọn Container Registry muốn xoá** : [![](/img/migrated/Picture34-4-b862bf01.png)](/img/migrated/Picture34-4-b862bf01.png)
  * **Bước 2:** Nhập confirm text [![](/img/migrated/Picture35-4-1e53ea64.png)](/img/migrated/Picture35-4-1e53ea64.png)
  * **Bước 3:** Kết quả sau khi xoá container registry [![](/img/migrated/Picture36-4-b81d7d02.png)](/img/migrated/Picture36-4-b81d7d02.png)