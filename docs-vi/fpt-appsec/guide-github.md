---
id: "guide-github"
title: "Chỉ Org Admin có quyền chỉnh sửa tích hợp GitHub"
description: "Chỉ **Org Admin** có quyền chỉnh sửa tích hợp **GitHub**"
sidebar_label: "Chỉ Org Admin có quyền chỉnh sửa tích hợp GitHub"
sidebar_position: 18
---

# Guide Github

Chỉ **Org Admin** có quyền chỉnh sửa tích hợp **GitHub**
_Xem thêm về phân quyền[tại đây](./quan-ly-member.md)_
## 1. Configure GitHub
**Bước 1** : Sau khi đã chọn org/team, nhấn vào **GitHub** để đến màn tích hợp GitHub:
[![anhfsec](/img/migrated/in-git-1e066503.png)](/img/migrated/in-git-1e066503.png)
**Bước 2** : Sau khi thiết lập quyền truy cập vào **Private/public repository** , nhấn vào **Create a personal access token** , sau đó bạn sẽ được chuyển đến GitHub để tạo token
[![anhfsec](/img/migrated/G4-b087642b.png)](/img/migrated/G4-b087642b.png)
**Bước 3** : Chọn **Tokens (classic)** ở thanh Menu bên trái và chọn **Generate new token (Classic)**
[![anhfsec](/img/migrated/G5-1a2f74b6.png)](/img/migrated/G5-1a2f74b6.png)
[![anhfsec](/img/migrated/G6-94657d49.png)](/img/migrated/G6-94657d49.png)
**Bước 4** : Điền **Note** và tích chọn repo để sử dụng được các tính năng
[![anhfsec](/img/migrated/G7-399bf273.png)](/img/migrated/G7-399bf273.png)
**Bước 5** : Nhấn **Generate Token** để tạo token
[![anhfsec](/img/migrated/G8-cf628d37.png)](/img/migrated/G8-cf628d37.png)
**Bước 6** : **Copy link** của token
[![anhfsec](/img/migrated/G9-0bca59fa.png)](/img/migrated/G9-0bca59fa.png)
**Bước 7** : Paste **link token** vào phần **Personal Access Token** và nhấn **Test Connection**
[![anhfsec](/img/migrated/G10-ace18550.png)](/img/migrated/G10-ace18550.png)
[![anhfsec](/img/migrated/G11-96b6199e.png)](/img/migrated/G11-96b6199e.png)
Lúc này hệ thống sẽ kiểm tra các miền bắt buộc và valid **Personal Access Token** , nếu một trong hai failed, màn hình sẽ hiển thị thông báo **Test connection Failed**(invalid PAT)
Nếu thành công, màn hình sẽ hiển thị **Test connect successfully**
**Bước 8** : Nhấn vào **Integrate**.
## 2. Xem detail
Chỉ **Org Admin** hoặc **Team Manager** có quyền xem chi tiết các loại tích hợp
Sau khi đã chọn org/team, nhấn vào **Configured GitHub** để xem tình trạng configure
[![anhfsec](/img/migrated/in-git2-849778ed.png)](/img/migrated/in-git2-849778ed.png)
Ở đây, bạn có thể thấy các thông tin như **Personal Access Token** , **Repository Access** , **Integrated at** , và **Access Key** phục vụ cho tích hợp CICD
[![anhfsec](/img/migrated/Screenshot-2025-06-17-155316-8d5a45e0.png)](/img/migrated/Screenshot-2025-06-17-155316-8d5a45e0.png)
Bạn có thể tiến hành **Reintegrate** hoặc **Disable** tích hợp GitHub
## 3. Reconfigure GitHub
**Bước 1** : Nhấn **Reconfigure** trong màn hình chi tiết của tích hợp GitHub
[![anhfsec](/img/migrated/in-git3-ac8ba336.png)](/img/migrated/in-git3-ac8ba336.png)
**Bước 2** : Thực hiện lại các thao tác giống khi tích hợp GitHub
## 4. Vô hiệu hoá tích hợp GitHub
**Bước 1** : Nhấn **Disable** trong màn hình chi tiết của tích hợp GitHub
[![anhfsec](/img/migrated/in-git4-cd794a67.png)](/img/migrated/in-git4-cd794a67.png)
**Bước 2** : Điền “disable" và nhấn **Confirm** để thực hiện vô hiệu hóa
[![anhfsec](/img/migrated/Screenshot-2025-06-17-160052-d7098984.png)](/img/migrated/Screenshot-2025-06-17-160052-d7098984.png)
## 5. Access Key cho CI/CD pipeline
Ở phần detail bạn sẽ được cung cấp access key để có thể tích hợp CI/CD Pipeline. Hướng dẫn tích hợp [tại đây](./cicd-guideline.md)
[![anhfsec](/img/migrated/in-git5-0f0523e9.png)](/img/migrated/in-git5-0f0523e9.png)
Bạn có thể copy hoặc reset Access Key để phục vụ cho tích hợp vào CI/CD pipeline
[![anhfsec](/img/migrated/in-git6-c0ffda22.png)](/img/migrated/in-git6-c0ffda22.png)