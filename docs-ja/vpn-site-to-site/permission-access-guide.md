---
id: "permission-access-guide"
title: "サービス権限管理"
description: "同一プロジェクト内の他ユーザーにVPN Site-to-Siteのアクセス権限を付与するガイドです。"
sidebar_label: "サービス権限管理"
sidebar_position: "26"
---

# サービス権限管理

同一プロジェクト内の別ユーザーにVPN Site-to-Siteのアクセス権限を付与するには、以下の手順に従ってください。

1. 管理者アカウントで [https://console.fptcloud.com/](https://console.fptcloud.com/) にログインします。

2. **IAM** > **Roles** に移動します。

[![IAM Roles](/img/migrated/list_role-36845f2b.png)](/img/migrated/list_role-36845f2b.png)

3. 新しいRoleを作成するためにクリックします。**VPN** サービスを選択し、適切な権限を付与します。

[![Role作成 - VPN](/img/migrated/2-1-859ad22a.png)](/img/migrated/2-1-859ad22a.png)

4. 別の権限を追加し、**Network** サービスと **Network:List** 権限を選択します。

:::note
ベアメタルサーバーを使用するネットワーク範囲の場合は、**HPC:ListSubnet** 権限も追加してください。
:::

[![Role作成 - Network](/img/migrated/3-2-5b07fe07.png)](/img/migrated/3-2-5b07fe07.png)

すべての情報を入力後、**Create role** をクリックします。

5. ユーザーグループを作成し、前のステップで作成した **VPN_user** Roleを割り当てます。

[![ユーザーグループ](/img/migrated/4-2-fdfbf0f8.png)](/img/migrated/4-2-fdfbf0f8.png)

6. **User** タブに移動し、**Invite user** をクリックします。

[![ユーザー招待](/img/migrated/5-454403cb.png)](/img/migrated/5-454403cb.png)

7. VPNアクセスを付与するユーザーを入力し、対応するユーザーグループとRoleを選択します。

[![Role割り当て](/img/migrated/6-1-e975ba12.png)](/img/migrated/6-1-e975ba12.png)

8. 招待されたユーザーにメールが届きます。メール内のリンクにアクセスすると、VPNサービスが利用できるようになります。

[![メール確認](/img/migrated/h-22b3d9cb.png)](/img/migrated/h-22b3d9cb.png)
