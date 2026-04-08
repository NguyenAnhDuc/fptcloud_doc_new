---
id: "configure-image-updater"
title: "Configure Image Updater"
description: "Introduction to ArgoCD Image Updater and supported configuration operations"
sidebar_label: "Configure Image Updater"
sidebar_position: 7
draft: true
---

# Configure Image Updater

ArgoCD Image Updater is a tool that automatically updates container images for Kubernetes applications managed by ArgoCD.

FPT ArgoCD supports the following configuration operations:
- Enable/disable the service
- Manage secrets in `argocd-image-updater-secret`
- Create secrets for container registry authentication
- Configure container registries in the `argocd-image-updater-config` configmap
