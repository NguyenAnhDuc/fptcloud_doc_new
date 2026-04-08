---
id: "configure-webhook"
title: "Configure webhook"
description: "Introduction to Git webhook in ArgoCD for detecting repository changes"
sidebar_label: "Configure webhook"
sidebar_position: 13
draft: true
---

# Configure webhook

ArgoCD automatically checks for changes in a Git repository every 3 minutes. Additionally, ArgoCD supports Git webhook notifications from GitHub, GitLab, Bitbucket, Bitbucket Server, and Gogs to detect and synchronize changes immediately when a new commit is made.

:::note
Each webhook type can only be created once and can be updated later. ArgoCD does not support configuring multiple secrets per webhook type.
:::
