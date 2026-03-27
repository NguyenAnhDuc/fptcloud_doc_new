---
id: "Webhook-configuration"
title: "Webhook Configuration"
description: "ArgoCD will automatically check for manifest changes in the Git Repository every three minutes. ArgoCD supports Git webh"
sidebar_label: "Webhook Configuration"
sidebar_position: 6
---

# Webhook Configuration

ArgoCD will automatically check for manifest changes in the Git Repository every three minutes. ArgoCD supports Git webhook notifications from Github, GitLab, Bitbucket, Bitbucket Server and Gogs so that every time the Git Repository has a change, ArgoCD will automatically detect and synchronize these changes.
**Note: Each type of webhook can only be created once and can be updated for subsequent times. ArgoCD does not support configuring multiple secrets for each webhook type**