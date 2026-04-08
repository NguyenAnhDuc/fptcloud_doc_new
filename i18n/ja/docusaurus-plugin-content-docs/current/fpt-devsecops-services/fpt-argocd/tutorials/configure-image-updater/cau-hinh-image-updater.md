---
id: "cau-hinh-image-updater"
title: "Image Updaterの設定"
sidebar_label: "Image Updaterの設定"
sidebar_position: "7"
description: "Giới thiệu về ArgoCD Image Updater và các thao tác cấu hình hỗ trợ"
---

# Cau Hinh Image Updater

ArgoCD Image Updater là công cụ tự động cập nhật container image cho các ứng dụng Kubernetes được quản lý bởi ArgoCD.

FPT ArgoCD cho phép thực hiện các thao tác cấu hình sau:
- Enable/disable service
- Quản lý secret trong `argocd-image-updater-secret`
- Tạo secret xác thực container registry
- Cấu hình container registry trong configmap `argocd-image-updater-config`
