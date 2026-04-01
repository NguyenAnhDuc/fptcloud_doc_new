---
id: "guide-gitlabserver"
title: "Chỉ Org Admin và Team Manager có quyền chỉnh sửa tích hợp GitLab Server"
sidebar_label: "Chỉ Org Admin và Team Manager có quyền chỉnh sửa tích hợp GitLab Server"
sidebar_position: "20"
---

# Chỉ Org Admin và Team Manager có quyền chỉnh sửa tích hợp GitLab Server

Chỉ **Org Admin** và **Team Manager** có quyền chỉnh sửa tích hợp GitLab Server
_Xem thêm về phân quyền[tại đây](./quan-ly-member.md)_
## Configure GitLab Server
**Bước 1** : Sau khi đã chọn org/team, nhấn vào GitLab Server để đến màn tích hợp:
[![anhfsec](/img/migrated/labs1-34ab9227.png)](/img/migrated/labs1-34ab9227.png)
**Bước 2** : Nhập URL của phiên bản GitLab Enterprise. Nút **Create a personal access token** sẽ được enable sau khi nhập URL.
[![anhfsec](/img/migrated/labs2-017fd4b0.png)](/img/migrated/labs2-017fd4b0.png)
**Bước 3** : Sau khi thiết lập quyền truy cập vào Private/public repository, nhấn vào **Create a personal access token** , sau đó bạn sẽ được chuyển đến GitLab Login để tạo token
[![anhfsec](/img/migrated/labs3-9887d816.png)](/img/migrated/labs3-9887d816.png)
**Bước 4** : Điền thông tin như **Token name** và **Token Description** và tích vào **read_api**
[![anhfsec](/img/migrated/lab3-255803a1.png)](/img/migrated/lab3-255803a1.png)
[![anhfsec](/img/migrated/lab4-d1e2310b.png)](/img/migrated/lab4-d1e2310b.png)
**Bước 5** : Copy **personal access token**
[![anhfsec](/img/migrated/labs3-9887d816.png)](/img/migrated/labs3-9887d816.png)
**Bước 6** : Điền **Personal Access Token** vừa tạo và nhấn **Test Connection**
[![anhfsec](/img/migrated/labs4-281c798c.png)](/img/migrated/labs4-281c798c.png)
Lúc này hệ thống sẽ kiểm tra các miền bắt buộc và valid **Personal Access Token** , nếu một trong hai failed, màn hình sẽ hiển thị thông báo **Test connection Failed**(invalid PAT)
Nếu thành công, màn hình sẽ hiển thị **Test connect successfully**
**Bước 7** : Nhấn vào **Integrate**
[![anhfsec](/img/migrated/labs6-cd567134.png)](/img/migrated/labs6-cd567134.png)
## Xem detail
Tương tự hướng dẫn xem chi tiết [tích hợp GitHub](./guide-github.md)
## Reconfigure GitLab Cloud
Tương tự hướng dẫn reconfigure [tích hợp GitHub](./guide-github.md)
## Vô hiệu hoá tích hợp GitLab Cloud
Tương tự hướng dẫn vô hiệu hóa [tích hợp GitHub](./guide-github.md)
## Access Key cho CI/CD pipeline
Tương tự [tích hợp GitHub](./guide-github.md)
