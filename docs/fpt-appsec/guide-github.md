---
id: "guide-github"
title: "Chỉ Org Admin có quyền chỉnh sửa tích hợp GitHub"
sidebar_label: "Chỉ Org Admin có quyền chỉnh sửa tích hợp GitHub"
sidebar_position: "18"
---

# Chỉ Org Admin có permission chỉnh sửa tích hợp GitHub

Chỉ **Org Admin** có permission chỉnh sửa tích hợp **GitHub**
_View thêm về phân permission[here](./quan-ly-member.md)_
## Configure GitHub
**Step 1** : Sau when has been chọn org/team, nhấn ando **GitHub** to to màn tích hợp GitHub:
[![anhfsec](/img/migrated/in-git-1e066503.png)](/img/migrated/in-git-1e066503.png)
**Step 2** : Sau when thiết lập permission truy cập ando **Private/public repository** , nhấn ando **Create a personal access token** , sau that you will is chuyển to GitHub to tạo token
[![anhfsec](/img/migrated/G4-b087642b.png)](/img/migrated/G4-b087642b.png)
**Step 3** : Select **Tokens (classic)** ở thanh Left menu and chọn **Generate new token (Classic)**
[![anhfsec](/img/migrated/G5-1a2f74b6.png)](/img/migrated/G5-1a2f74b6.png)
[![anhfsec](/img/migrated/G6-94657d49.png)](/img/migrated/G6-94657d49.png)
**Step 4** : Fill in **Note** and tích chọn repo to sử dụng is the feature
[![anhfsec](/img/migrated/G7-399bf273.png)](/img/migrated/G7-399bf273.png)
**Step 5** : Click **Generate Token** to tạo token
[![anhfsec](/img/migrated/G8-cf628d37.png)](/img/migrated/G8-cf628d37.png)
**Step 6** : **Copy link** of token
[![anhfsec](/img/migrated/G9-0bca59fa.png)](/img/migrated/G9-0bca59fa.png)
**Step 7** : Paste **link token** ando phần **Personal Access Token** and nhấn **Test Connection**
[![anhfsec](/img/migrated/G10-ace18550.png)](/img/migrated/G10-ace18550.png)
[![anhfsec](/img/migrated/G11-96b6199e.png)](/img/migrated/G11-96b6199e.png)
Lúc this hệ thống will kiểm tra the miền bắt buộc and valid **Personal Access Token** , if a in hai failed, màn hình will displayed notification **Test connection Failed**(invalid PAT)
Nếu successfully, màn hình will displayed **Test connect successfully**
**Step 8** : Nhấn ando **Integrate**.
## View detail
Chỉ **Org Admin** or **Team Manager** có permission xem chi tiết the loại tích hợp
Sau when has been chọn org/team, nhấn ando **Configured GitHub** to xem tình trạng configure
[![anhfsec](/img/migrated/in-git2-849778ed.png)](/img/migrated/in-git2-849778ed.png)
Ở đây, you can thấy the thông tin như **Personal Access Token** , **Repository Access** , **Integrated at** , and **Access Key** phục vụ for tích hợp CICD
[![anhfsec](/img/migrated/Screenshot-2025-06-17-155316-8d5a45e0.png)](/img/migrated/Screenshot-2025-06-17-155316-8d5a45e0.png)
Bạn can tiến hành **Reintegrate** or **Disable** tích hợp GitHub
## Reconfigure GitHub
**Step 1** : Click **Reconfigure** in màn hình chi tiết of tích hợp GitHub
[![anhfsec](/img/migrated/in-git3-ac8ba336.png)](/img/migrated/in-git3-ac8ba336.png)
**Step 2** : Thực hiện lại the thao tác giống when tích hợp GitHub
## Vô hiệu hoá tích hợp GitHub
**Step 1** : Click **Disable** in màn hình chi tiết of tích hợp GitHub
[![anhfsec](/img/migrated/in-git4-cd794a67.png)](/img/migrated/in-git4-cd794a67.png)
**Step 2** : Fill in “disable" and nhấn **Confirm** to thực hiện vô hiệu hóa
[![anhfsec](/img/migrated/Screenshot-2025-06-17-160052-d7098984.png)](/img/migrated/Screenshot-2025-06-17-160052-d7098984.png)
## Access Key for CI/CD pipeline
Ở phần detail you will is cung cấp access key to can tích hợp CI/CD Pipeline. Hướng dẫn tích hợp [here](./cicd-guideline.md)
[![anhfsec](/img/migrated/in-git5-0f0523e9.png)](/img/migrated/in-git5-0f0523e9.png)
Bạn can copy or reset Access Key to phục vụ for tích hợp ando CI/CD pipeline
[![anhfsec](/img/migrated/in-git6-c0ffda22.png)](/img/migrated/in-git6-c0ffda22.png)
