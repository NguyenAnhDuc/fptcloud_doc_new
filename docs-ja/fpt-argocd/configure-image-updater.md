---
id: "configure-image-updater"
title: "Image Updaterの設定"
description: "ArgoCD Image Updaterの概要とサポートされる設定操作"
sidebar_label: "Image Updaterの設定"
sidebar_position: 7
---

# Image Updaterの設定

ArgoCD Image UpdaterはArgoCDが管理するKubernetesアプリケーションのcontainer imageを自動更新するツールです。

FPT ArgoCDは以下の設定操作をサポートしています：
- サービスのenable/disable
- `argocd-image-updater-secret`内のsecretの管理
- container registry認証用secretの作成
- `argocd-image-updater-config` configmap内のcontainer registryの設定
