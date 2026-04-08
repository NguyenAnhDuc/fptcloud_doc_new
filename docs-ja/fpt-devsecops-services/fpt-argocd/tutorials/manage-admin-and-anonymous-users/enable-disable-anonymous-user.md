---
id: "enable-disable-anonymous-user"
title: "Anonymous userのenable/disable"
description: "ArgoCDへの匿名アクセスを有効または無効にする方法。"
sidebar_label: "Anonymous userのenable/disable"
sidebar_position: 2
---

# Anonymous userのenable/disable

PortalインターフェースからArgoCDへの匿名アクセスをenable/disableできます。Anonymous userにはデフォルトで `readonly` 権限が付与されます。デフォルトでは、ArgoCDは匿名アクセスを無効にしています。

## A. Anonymous userをenableする

1. **Essential Properties** 画面で **Enable Anonymous User** をクリックします。

[![](/img/migrated/Picture13-5-658b74a8.png)](/img/migrated/Picture13-5-658b74a8.png)

2. **Confirm** をクリックして確認します。

[![](/img/migrated/Picture14-5-7a0bd307.png)](/img/migrated/Picture14-5-7a0bd307.png)

3. Enable後の結果：

[![](/img/migrated/Picture15-5-dddf86f8.png)](/img/migrated/Picture15-5-dddf86f8.png)

Enable後は、ログインせずにArgoCD情報を閲覧できます：

[![](/img/migrated/Picture16-5-e4b4859f.png)](/img/migrated/Picture16-5-e4b4859f.png)

## B. Anonymous userをdisableする

1. **Essential Properties** 画面で **Disable Anonymous User** をクリックします。

[![](/img/migrated/Picture17-5-8c2ea772.png)](/img/migrated/Picture17-5-8c2ea772.png)

2. **Confirm** をクリックして確認します。

[![](/img/migrated/Picture18-5-6373d159.png)](/img/migrated/Picture18-5-6373d159.png)

3. Disable後の結果：

[![](/img/migrated/Picture19-5-8be2f6fe.png)](/img/migrated/Picture19-5-8be2f6fe.png)

Disable後、ArgoCDは情報閲覧前にログインを要求します：

[![](/img/migrated/Picture20-4-2b3f54ba.png)](/img/migrated/Picture20-4-2b3f54ba.png)
