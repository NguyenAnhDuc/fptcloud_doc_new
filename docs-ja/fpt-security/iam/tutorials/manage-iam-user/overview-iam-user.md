---
id: "overview-iam-user"
title: "IAM User概要"
description: "IAM UserはTenantに招待されたユーザーで、FPT Cloudアカウントを持っている場合と持っていない場合があります。"
sidebar_label: "IAM User概要"
sidebar_position: "18"
---

# IAM User概要

IAM UserはTenantに招待されたユーザーで、FPT Cloud/SSOアカウントを持っている場合と持っていない場合があります。

- 招待されたuserがすでにアカウントを持っている場合、確認後すぐに権限付与されたVPCにアクセスできます。
- アカウントを持っていない場合、新しいFPT Cloudアカウントを作成するよう案内されます。
- IAM Userが独自の新しいTenantを使用したい場合は、サポートチームに連絡してTenantクォータの割り当てを依頼してください。

IAM Userのroleを変更するかアクセス権を削除するには、そのuserが属するUser Groupを編集します：

- アクセス権を削除する場合: User Groupからuserを削除 — userはそのTenantへのアクセス権を失います。
- 別のroleに変更する場合: User Groupに新しいroleを割り当てます。

:::warning
User Groupのroleを変更すると、そのUser Group内の他のすべてのuserに影響します。特定のuserだけroleを変更したい場合は、そのuserだけを含む新しいUser Groupを作成してください。
:::
