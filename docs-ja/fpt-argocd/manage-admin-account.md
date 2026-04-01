---
id: "manage-admin-account"
title: "Adminアカウントの管理"
description: "ArgoCD instanceのadminアカウントを有効または無効にするガイド"
sidebar_label: "Adminアカウントの管理"
sidebar_position: 28
---

# Adminアカウントの管理

デフォルトでは、ArgoCD instanceの作成時にadminアカウントが有効になっています。以下のようにadminアカウントをenable/disableできます。

## A. Adminアカウントをdisableにします

1. **Essential Properties**画面で**Disable Admin Account**をクリックします。

[![](/img/migrated/Picture1-5-71caab00.png)](/img/migrated/Picture1-5-71caab00.png)

2. **Confirm**をクリックして確認します。

[![](/img/migrated/Picture2-5-41f37b40.png)](/img/migrated/Picture2-5-41f37b40.png)

3. disable後の結果：

[![](/img/migrated/Picture3-6-fa289198.png)](/img/migrated/Picture3-6-fa289198.png)

disable後は、Local AccountまたはOIDCを通じてArgoCDにアクセスできます。どちらも設定されていない場合、ログイン画面は次のようになります：

[![](/img/migrated/Picture4-6-602fd335.png)](/img/migrated/Picture4-6-602fd335.png)

Local AccountまたはOIDC Scopeがすでに設定されている場合は、通常どおりログインできます：

[![](/img/migrated/Picture5-6-9efcfab4.png)](/img/migrated/Picture5-6-9efcfab4.png)

## B. Adminアカウントをenableにします

1. **Essential Properties**画面で**Enable Admin Account**をクリックします。

[![](/img/migrated/Picture6-6-f3355acc.png)](/img/migrated/Picture6-6-f3355acc.png)

2. **Confirm**をクリックして確認します。

[![](/img/migrated/Picture7-6-6c7b65b6.png)](/img/migrated/Picture7-6-6c7b65b6.png)

3. enable後の結果：

[![](/img/migrated/Picture8-6-a1c6eba8.png)](/img/migrated/Picture8-6-a1c6eba8.png)

enable後は、adminアカウントでArgoCDにログインできます：

[![](/img/migrated/Picture9-6-ab4e8650.png)](/img/migrated/Picture9-6-ab4e8650.png)
