---
id: "configure-webhook-with-secret"
title: "Configure webhook with secret"
description: "Guide to configuring a webhook with an existing webhook secret in ArgoCD"
sidebar_label: "Configure webhook with secret"
sidebar_position: 41
draft: true
---

# Configure webhook with secret

After creating a webhook secret, configure it on your Git provider (GitHub, GitLab, Bitbucket, etc.) to authenticate webhook requests sent to ArgoCD.

Use the webhook URL from the ArgoCD instance's **Configuration** > **Webhook** screen along with the secret value when setting up the webhook on your Git provider.
