---
id: "cau-hinh-image-updater"
title: "Cấu hình Image Updater"
description: "Argo CD Images Updater là một công cụ tự động cập nhật container images của cụm k8s do ArgoCD quản lý."
sidebar_label: "Cấu hình Image Updater"
sidebar_position: 7
---

# Cau Hinh Image Updater

Argo CD Images Updater là một công cụ tự động cập nhật container images của cụm k8s do ArgoCD quản lý. 
FPT Argo CD cho phép người dùng thực hiện một số thao tác cấu hình bao gồm: enable/disable service; cấu hình secret trong secret **argocd-image-updater-secret** , tạo secret authen container registry; cấu hình container registry trong configmap **argocd-image-updater-config** của argocd images updater.