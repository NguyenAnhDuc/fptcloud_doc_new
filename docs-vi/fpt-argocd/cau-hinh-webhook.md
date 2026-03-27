---
id: "cau-hinh-webhook"
title: "Cấu hình webhook"
description: "ArgoCD sẽ tự động kiểm tra các thay đổi của các manifest trên Git Repository ba phút một lần. ArgoCD hỗ trợ Git webhook "
sidebar_label: "Cấu hình webhook"
sidebar_position: 13
---

# Cau Hinh Webhook

ArgoCD sẽ tự động kiểm tra các thay đổi của các manifest trên Git Repository ba phút một lần. ArgoCD hỗ trợ Git webhook notifications từ Github, GitLab, Bitbucket, Bitbucket Server and Gogs để mỗi lần Git Repository có thay đổi ArgoCD sẽ tự động phát hiện và đồng bộ các thay đổi này. 
**Lưu ý: Mỗi một loại webhook chỉ được tạo 1 lần và có thể update cho các lần sau. ArgoCD không hỗ trợ cấu hình nhiều secret cho mỗi loại webhook**