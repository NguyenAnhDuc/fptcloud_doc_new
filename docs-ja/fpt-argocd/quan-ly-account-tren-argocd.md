---
id: "quan-ly-account-tren-argocd"
title: "ArgoCD上のアカウント管理"
sidebar_label: "ArgoCDアカウント管理"
sidebar_position: 23
description: "ArgoCDインスタンスのユーザーアカウント管理の概要"
---

# ArgoCD上のアカウント管理

adminアカウントに加え、FPT CloudはシステムへのユーザーアカウントのI作成と管理をサポートしています。作成後、デフォルトのアカウントは `readonly` 権限を持ち、ログイン後にArgoCDの全情報を閲覧できます。

アカウントに追加の権限を付与するには、RBACポリシーの設定が必要です。**RBACポリシーの設定** セクションを参照してください。
