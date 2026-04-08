---
id: "guide-gitlab"
title: "Chỉ Org Admin và Team Manager có quyền chỉnh sửa tích hợp GitLab"
description: "Chỉ **Org Admin** và **Team Manager** có quyền chỉnh sửa tích hợp GitLab"
sidebar_label: "Chỉ Org Admin và Team Manager có quyền chỉnh sửa tích hợp GitLab"
sidebar_position: 3
---

# Chỉ Org Admin và Team Manager có quyền chỉnh sửa tích hợp GitLab

Chỉ **Org Admin** và **Team Manager** có quyền chỉnh sửa tích hợp GitLab
_Xem thêm về phân quyền[tại đây](/vi/docs/fpt-appsec/tutorials/organization-management/quan-ly-member/)_

## Configure GitLab
**Bước 1** : Sau khi đã chọn org/team, nhấn vào GitLab để đến màn tích hợp GitLab Cloud:
[![anhfsec](/img/migrated/lab1-1-0a091c8d.png)](/img/migrated/lab1-1-0a091c8d.png)
**Bước 2** : Sau khi thiết lập quyền truy cập vào Private/public repository, nhấn vào **Create a personal access token** , sau đó bạn sẽ được chuyển đến GitLab Login để tạo token
[![anhfsec](/img/migrated/lab2-176588cd.png)](/img/migrated/lab2-176588cd.png)
**Bước 3** : Điền thông tin như **Token name** và **Token Description** và tích vào **read_api**
[![anhfsec](/img/migrated/lab3-255803a1.png)](/img/migrated/lab3-255803a1.png)
[![anhfsec](/img/migrated/lab4-d1e2310b.png)](/img/migrated/lab4-d1e2310b.png)
**Bước 4** : Copy **personal access token**
[![anhfsec](/img/migrated/lab5-61555338.png)](/img/migrated/lab5-61555338.png)
**Bước 5** : Điền **Personal Access Token** vừa tạo và nhấn **Test Connection**
[![anhfsec](/img/migrated/lab6-fc2f157e.png)](/img/migrated/lab6-fc2f157e.png)
Lúc này hệ thống sẽ kiểm tra các miền bắt buộc và valid **Personal Access Token** , nếu một trong hai failed, màn hình sẽ hiển thị thông báo **Test connection Failed**(invalid PAT)
Nếu thành công, màn hình sẽ hiển thị **Test connect successfully**
**Bước 6** : Nhấn vào **Integrate**
[![anhfsec](/img/migrated/lab9-aab31bf0.png)](/img/migrated/lab9-aab31bf0.png)

## Xem detail
Tương tự hướng dẫn xem chi tiết [tích hợp GitHub](/vi/docs/fpt-appsec/tutorials/integration-management/guide-github/)

## Reconfigure GitLab Cloud
Tương tự hướng dẫn reconfigure [tích hợp GitHub](/vi/docs/fpt-appsec/tutorials/integration-management/guide-github/)

## Vô hiệu hoá tích hợp GitLab Cloud
Tương tự hướng dẫn vô hiệu hóa [tích hợp GitHub](/vi/docs/fpt-appsec/tutorials/integration-management/guide-github/)

## Access Key cho CI/CD pipeline
Tương tự [tích hợp GitHub](/vi/docs/fpt-appsec/tutorials/integration-management/guide-github/)
