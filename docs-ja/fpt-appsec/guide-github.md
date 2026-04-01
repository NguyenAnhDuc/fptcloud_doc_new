---
id: "guide-github"
title: "Chỉ Org Admin có quyền chỉnh sửa tích hợp GitHub"
sidebar_label: "Chỉ Org Admin có quyền chỉnh sửa tích hợp GitHub"
sidebar_position: "18"
---

# Chỉ Org Admin có quyền chỉnh sửa tích hợp GitHub

Chỉ **Org Admin** có quyền chỉnh sửa tích hợp **GitHub**
_Xem thêm về phân quyền[tại đây](./quan-ly-member.md)_
## Configure GitHub
**ステップ1:** Sau khi đã chọn org/team, nhấn vào **GitHub** để đến màn tích hợp GitHub:
[![anhfsec](/img/migrated/in-git-1e066503.png)](/img/migrated/in-git-1e066503.png)
**ステップ2:** Sau khi thiết lập quyền truy cập vào **Private/public repository** , nhấn vào **Create a personal access token** , sau đó bạn sẽ được chuyển đến GitHub để tạo token
[![anhfsec](/img/migrated/G4-b087642b.png)](/img/migrated/G4-b087642b.png)
**ステップ3:** **Tokens (classic)** ở thanh Menu bên trái và chọn **Generate new token (Classic)**
[![anhfsec](/img/migrated/G5-1a2f74b6.png)](/img/migrated/G5-1a2f74b6.png)
[![anhfsec](/img/migrated/G6-94657d49.png)](/img/migrated/G6-94657d49.png)
**ステップ4:** Điền **Note** và tích chọn repo để sử dụng được các tính năng
[![anhfsec](/img/migrated/G7-399bf273.png)](/img/migrated/G7-399bf273.png)
**ステップ5:** **Generate Token** để tạo token
[![anhfsec](/img/migrated/G8-cf628d37.png)](/img/migrated/G8-cf628d37.png)
**ステップ6:** **Copy link** của token
[![anhfsec](/img/migrated/G9-0bca59fa.png)](/img/migrated/G9-0bca59fa.png)
**ステップ7:** Paste **link token** vào phần **Personal Access Token** và nhấn **Test Connection**
[![anhfsec](/img/migrated/G10-ace18550.png)](/img/migrated/G10-ace18550.png)
[![anhfsec](/img/migrated/G11-96b6199e.png)](/img/migrated/G11-96b6199e.png)
Lúc này hệ thống sẽ kiểm tra các miền bắt buộc và valid **Personal Access Token** , nếu một trong hai failed, màn hình sẽ hiển thị thông báo **Test connection Failed**(invalid PAT)
Nếu thành công, màn hình sẽ hiển thị **Test connect successfully**
**ステップ8:** Nhấn vào **Integrate**.
## 表示 detail
Chỉ **Org Admin** hoặc **Team Manager** có quyền xem chi tiết các loại tích hợp
Sau khi đã chọn org/team, nhấn vào **Configured GitHub** để xem tình trạng configure
[![anhfsec](/img/migrated/in-git2-849778ed.png)](/img/migrated/in-git2-849778ed.png)
Ở đây, bạn có thể thấy các thông tin như **Personal Access Token** , **Repository Access** , **Integrated at** , và **Access Key** phục vụ cho tích hợp CICD
[![anhfsec](/img/migrated/Screenshot-2025-06-17-155316-8d5a45e0.png)](/img/migrated/Screenshot-2025-06-17-155316-8d5a45e0.png)
Bạn có thể tiến hành **Reintegrate** hoặc **Disable** tích hợp GitHub
## Reconfigure GitHub
**ステップ1:** **Reconfigure** trong màn hình chi tiết của tích hợp GitHub
[![anhfsec](/img/migrated/in-git3-ac8ba336.png)](/img/migrated/in-git3-ac8ba336.png)
**ステップ2:** Thực hiện lại các thao tác giống khi tích hợp GitHub
## Vô hiệu hoá tích hợp GitHub
**ステップ1:** **Disable** trong màn hình chi tiết của tích hợp GitHub
[![anhfsec](/img/migrated/in-git4-cd794a67.png)](/img/migrated/in-git4-cd794a67.png)
**ステップ2:** Điền “disable" và nhấn **Confirm** để thực hiện vô hiệu hóa
[![anhfsec](/img/migrated/Screenshot-2025-06-17-160052-d7098984.png)](/img/migrated/Screenshot-2025-06-17-160052-d7098984.png)
## Access Key cho CI/CD pipeline
Ở phần detail bạn sẽ được cung cấp access key để có thể tích hợp CI/CD Pipeline. Hướng dẫn tích hợp [tại đây](./cicd-guideline.md)
[![anhfsec](/img/migrated/in-git5-0f0523e9.png)](/img/migrated/in-git5-0f0523e9.png)
Bạn có thể copy hoặc reset Access Key để phục vụ cho tích hợp vào CI/CD pipeline
[![anhfsec](/img/migrated/in-git6-c0ffda22.png)](/img/migrated/in-git6-c0ffda22.png)
