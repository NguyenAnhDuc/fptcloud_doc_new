---
id: "guide-gitlabserver"
title: "Chỉ Org Admin và Team Manager có quyền chỉnh sửa tích hợp GitLab Server"
sidebar_label: "Chỉ Org Admin và Team Manager có quyền chỉnh sửa tích hợp GitLab Server"
sidebar_position: "20"
---

# Chỉ Org Admin and Team Manager có permission chỉnh sửa tích hợp GitLab Server

Chỉ **Org Admin** and **Team Manager** có permission chỉnh sửa tích hợp GitLab Server
_View thêm về phân permission[here](./quan-ly-member.md)_
## Configure GitLab Server
**Step 1** : Sau when has been chọn org/team, nhấn ando GitLab Server to to màn tích hợp:
[![anhfsec](/img/migrated/labs1-34ab9227.png)](/img/migrated/labs1-34ab9227.png)
**Step 2** : Enter URL of version GitLab Enterprise. Nút **Create a personal access token** will is enable after nhập URL.
[![anhfsec](/img/migrated/labs2-017fd4b0.png)](/img/migrated/labs2-017fd4b0.png)
**Step 3** : Sau when setup permission truy cập ando Private/public repository, nhấn ando **Create a personal access token** , sau that you will is chuyển to GitLab Login to tạo token
[![anhfsec](/img/migrated/labs3-9887d816.png)](/img/migrated/labs3-9887d816.png)
**Step 4** : Fill in information như **Token name** and **Token Description** and tích ando **read_api**
[![anhfsec](/img/migrated/lab3-255803a1.png)](/img/migrated/lab3-255803a1.png)
[![anhfsec](/img/migrated/lab4-d1e2310b.png)](/img/migrated/lab4-d1e2310b.png)
**Step 5** : Copy **personal access token**
[![anhfsec](/img/migrated/labs3-9887d816.png)](/img/migrated/labs3-9887d816.png)
**Step 6** : Fill in **Personal Access Token** vừa tạo and nhấn **Test Connection**
[![anhfsec](/img/migrated/labs4-281c798c.png)](/img/migrated/labs4-281c798c.png)
Lúc this system will kiểm tra the miền bắt buộc and valid **Personal Access Token** , if a in hai failed, màn hình will displayed notification **Test connection Failed**(invalid PAT)
Nếu successfully, màn hình will displayed **Test connect successfully**
**Step 7** : Nhấn ando **Integrate**
[![anhfsec](/img/migrated/labs6-cd567134.png)](/img/migrated/labs6-cd567134.png)
## View detail
Tương tự guide xem details [tích hợp GitHub](./guide-github.md)
## Reconfigure GitLab Cloud
Tương tự guide reconfigure [tích hợp GitHub](./guide-github.md)
## Vô hiệu hoá tích hợp GitLab Cloud
Tương tự guide vô hiệu hóa [tích hợp GitHub](./guide-github.md)
## Access Key for CI/CD pipeline
Tương tự [tích hợp GitHub](./guide-github.md)
