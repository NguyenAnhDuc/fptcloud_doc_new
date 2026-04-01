---
id: "cau-hinh-webhook"
title: "Cấu hình webhook"
description: "Giới thiệu về tính năng Git webhook trong ArgoCD để phát hiện thay đổi repository"
sidebar_label: "Cấu hình webhook"
sidebar_position: 13
---

# Cấu hình webhook

ArgoCD tự động kiểm tra thay đổi trong Git repository mỗi 3 phút. Ngoài ra, ArgoCD hỗ trợ Git webhook notifications từ GitHub, GitLab, Bitbucket, Bitbucket Server và Gogs để phát hiện và đồng bộ thay đổi ngay lập tức khi có commit mới.

:::note
Mỗi loại webhook chỉ được tạo một lần và có thể cập nhật cho các lần sau. ArgoCD không hỗ trợ cấu hình nhiều secret cho mỗi loại webhook.
:::
