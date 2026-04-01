---
id: "guide-gitlab"
title: "Chỉ Org Admin và Team Manager có quyền chỉnh sửa tích hợp GitLab"
sidebar_label: "Chỉ Org Admin và Team Manager có quyền chỉnh sửa tích hợp GitLab"
sidebar_position: "19"
---

# Chỉ Org Admin and Team Manager có permission chỉnh sửa tích hợp GitLab

Chỉ **Org Admin** and **Team Manager** có permission chỉnh sửa tích hợp GitLab
_View thêm về phân permission[here](./quan-ly-member.md)_
## Configure GitLab
**Step 1** : Sau when has been chọn org/team, nhấn ando GitLab to to màn tích hợp GitLab Cloud:
[![anhfsec](/img/migrated/lab1-1-0a091c8d.png)](/img/migrated/lab1-1-0a091c8d.png)
**Step 2** : Sau when thiết lập permission truy cập ando Private/public repository, nhấn ando **Create a personal access token** , sau that you will is chuyển to GitLab Login to tạo token
[![anhfsec](/img/migrated/lab2-176588cd.png)](/img/migrated/lab2-176588cd.png)
**Step 3** : Fill in thông tin như **Token name** and **Token Description** and tích ando **read_api**
[![anhfsec](/img/migrated/lab3-255803a1.png)](/img/migrated/lab3-255803a1.png)
[![anhfsec](/img/migrated/lab4-d1e2310b.png)](/img/migrated/lab4-d1e2310b.png)
**Step 4** : Copy **personal access token**
[![anhfsec](/img/migrated/lab5-61555338.png)](/img/migrated/lab5-61555338.png)
**Step 5** : Fill in **Personal Access Token** vừa tạo and nhấn **Test Connection**
[![anhfsec](/img/migrated/lab6-fc2f157e.png)](/img/migrated/lab6-fc2f157e.png)
Lúc this hệ thống will kiểm tra the miền bắt buộc and valid **Personal Access Token** , if a in hai failed, màn hình will displayed notification **Test connection Failed**(invalid PAT)
Nếu successfully, màn hình will displayed **Test connect successfully**
**Step 6** : Nhấn ando **Integrate**
[![anhfsec](/img/migrated/lab9-aab31bf0.png)](/img/migrated/lab9-aab31bf0.png)
## View detail
Tương tự hướng dẫn xem chi tiết [tích hợp GitHub](./guide-github.md)
## Reconfigure GitLab Cloud
Tương tự hướng dẫn reconfigure [tích hợp GitHub](./guide-github.md)
## Vô hiệu hoá tích hợp GitLab Cloud
Tương tự hướng dẫn vô hiệu hóa [tích hợp GitHub](./guide-github.md)
## Access Key for CI/CD pipeline
Tương tự [tích hợp GitHub](./guide-github.md)
