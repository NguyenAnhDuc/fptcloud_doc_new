---
id: "manage-accounts"
title: "ArgoCD上のアカウント管理"
description: "ArgoCD instanceでのユーザーアカウント管理の概要"
sidebar_label: "ArgoCDアカウントの管理"
sidebar_position: 23
---

# ArgoCD上のアカウント管理

adminアカウントに加えて、FPT Cloudはシステム内のユーザーアカウントの作成と管理をサポートしています。作成後、アカウントはデフォルトで`readonly`権限を持ちます — ログイン後にすべてのArgoCD情報を確認できます。

アカウントに追加権限を付与するには、RBAC policyを設定します。**RBAC policyの設定**セクションを参照してください。
