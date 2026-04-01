---
id: "configure-oidc-config"
title: "OIDC configの設定"
description: "ArgoCDでSSO/Keycloak統合用の新しいOIDC configを追加する方法。"
sidebar_label: "OIDC configの設定"
sidebar_position: 35
---

# OIDC configの設定

OIDCをenableにした後、新しいOIDC configを追加してKeycloakとのSSO統合を設定します。

1. **Security & Access** > **OIDC Scope** 画面で **Add new OIDC** をクリックします。

[![](/img/migrated/Picture23-4-eb213e0f.png)](/img/migrated/Picture23-4-eb213e0f.png)

2. KeycloakシステムのOIDC設定情報を入力します：
   - **Name**: ArgoCDログイン時に表示される名前（例: `Login via [Name]`）
   - **Issuer**: クライアント作成後にKeycloakから取得
   - **ClientID**: ArgoCDユーザー管理用にKeycloakで作成したクライアントID
   - **ClientSecret**: 作成したClientIDのクライアントシークレット

[![](/img/migrated/Picture24-4-30a35542.png)](/img/migrated/Picture24-4-30a35542.png)

3. OIDC設定後の結果：

[![](/img/migrated/Picture25-4-ea9826ed.png)](/img/migrated/Picture25-4-ea9826ed.png)

[![](/img/migrated/Picture26-4-b05c5e5c.png)](/img/migrated/Picture26-4-b05c5e5c.png)
