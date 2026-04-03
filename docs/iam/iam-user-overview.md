---
id: "iam-user-overview"
title: "IAM User概要"
description: "IAM UserはFPT CloudアカウントがあるかどうかにかかわらずTenantに招待されたユーザーです。"
sidebar_label: "IAM User概要"
sidebar_position: "18"
---

# IAM User概要

IAM UserはTenantに招待されたユーザーであり、FPT Cloud/SSOアカウントをすでに持っている場合も、まだ持っていない場合もあります。

- 招待されたユーザーがすでにアカウントを持っている場合、確認後すぐに権限が付与されたVPCにアクセスできます。
- アカウントを持っていない場合、新しいFPT Cloudアカウントの作成が案内されます。
- IAM Userが個別の新しいTenantを使用したい場合は、Tenantクォータの割り当てについてサポートチームにお問い合わせください。

IAM Userのロールを変更したり、アクセスを削除するには、そのユーザーが含まれるUser Groupを編集します：

- アクセスを削除する場合：User GroupからユーザーをRemoveします — そのユーザーはそのTenantへのアクセス権を失います。
- 別のRoleへの変更：User Groupに新しいRoleを割り当てます。

:::warning
User Groupのロールを変更すると、そのUser Group内の他の全ユーザーにも影響します。特定のユーザーのみRoleを変更したい場合は、そのユーザーのみを含む新しいUser Groupを作成してください。
:::
