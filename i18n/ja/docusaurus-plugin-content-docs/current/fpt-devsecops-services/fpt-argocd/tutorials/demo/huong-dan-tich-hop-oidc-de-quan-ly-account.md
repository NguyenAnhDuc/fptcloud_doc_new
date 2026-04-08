---
id: "huong-dan-tich-hop-oidc-de-quan-ly-account"
title: "アカウント管理のためにOIDCを統合する"
description: "ArgoCDにKeyCloak OIDC認証を統合してアプリケーションユーザーを認証する方法"
sidebar_label: "アカウント管理のためにOIDCを統合"
sidebar_position: "51"
---

# アカウント管理のためにOIDCを統合する

このガイドでは、KeyCloakをArgoCDに統合してアプリケーションユーザーを認証する方法を説明します。KeyCloakでクライアントを作成し、ArgoCDがKeyCloakを使用して認証するよう設定し、KeyCloakで設定されたグループを使用してArgoCD内のユーザー権限を定義します。

**ステップ1:** KeyCloakでClientを作成します。

KeyCloakサーバーにログイン > Clientを作成する **Realm** を選択 > **Create Client**:

[![](/img/migrated/Picture119-1-b0867aca.png)](/img/migrated/Picture119-1-b0867aca.png)

[![](/img/migrated/Picture120-1-6df9610a.png)](/img/migrated/Picture120-1-6df9610a.png)

[![](/img/migrated/Picture121-1-45e82415.png)](/img/migrated/Picture121-1-45e82415.png)

**Save** > **Credential** をクリックします。Client secretはFPT Cloud Portalでの情報設定に使用されます。

[![](/img/migrated/Picture122-1-0ab8c726.png)](/img/migrated/Picture122-1-0ab8c726.png)

**ステップ2:** 新しいClient scopeを作成してGroup Claimを設定します:

[![](/img/migrated/Picture123-1-f51f46f3.png)](/img/migrated/Picture123-1-f51f46f3.png)

**Save** をクリックしてClient Scopeを作成します。**Mapper** タブ > **Configure a new mapper** > **Group Membership**:

[![](/img/migrated/Picture124-1-d7e5585c.png)](/img/migrated/Picture124-1-d7e5585c.png)

**ステップ3:** Clientでgroups scopeを設定します:

[![](/img/migrated/Picture125-1-706c2c4c.png)](/img/migrated/Picture125-1-706c2c4c.png)

グループを作成します:

[![](/img/migrated/Picture126-1-9b6c7dcb.png)](/img/migrated/Picture126-1-9b6c7dcb.png)

ユーザーを作成してグループに追加します:

[![](/img/migrated/Picture127-1-b6c9e121.png)](/img/migrated/Picture127-1-b6c9e121.png)

**ステップ4:** ArgoCD Policyを設定します。

ユーザーグループにadmin/readOnly権限を付与します:

```
g, ArgoCDAdmins, role:admin
g, ArgoCDAdmins, role:readonly
```

[![](/img/migrated/Picture128-1-32f3f148.png)](/img/migrated/Picture128-1-32f3f148.png)

**ステップ5:** KeyCloak OIDC認証でArgoCDにログインします:

[![](/img/migrated/Picture129-1-46fe232c.png)](/img/migrated/Picture129-1-46fe232c.png)

KeyCloakでログイン後の結果:

[![](/img/migrated/Picture130-7270537c.png)](/img/migrated/Picture130-7270537c.png)
