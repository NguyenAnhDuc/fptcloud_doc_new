---
id: "quan-ly-account-tren-argocd"
title: "Quản lý account trên argocd"
description: "Ngoài account admin, FPT Cloud hỗ trợ người dùng tạo vào quản lý account trong hệ thống. Sau khi tạo account trên portal"
sidebar_label: "Quản lý account trên argocd"
sidebar_position: 23
---

# Quan Ly Account Tren Argocd

Ngoài account admin, FPT Cloud hỗ trợ người dùng tạo vào quản lý account trong hệ thống. Sau khi tạo account trên portal mặc định user sẽ chỉ có quyền default là readonly (có thể view toàn bộ thông tin của ArgoCD sau khi login). Nếu muốn thêm quyền cho account đã tạo, cần thực hiện cấu hình rbac policy cho user. Tham khảo mục 5.6 trong document.