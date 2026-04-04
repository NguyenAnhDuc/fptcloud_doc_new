---
id: "create-account"
title: "Portalで新しいアカウントを作成する"
description: "FPT Cloud Portal経由でArgoCD に新しいユーザーアカウントを作成する方法"
sidebar_label: "新しいアカウントを作成する"
sidebar_position: "24"
---

# Portalで新しいアカウントを作成する

1. **Security & Access** > **Local Account** 画面で **Add Account** をクリックします。

[![](/img/migrated/Picture81-3e8fefb9.png)](/img/migrated/Picture81-3e8fefb9.png)

2. 新しいアカウント情報を入力します:
   - **Username** (必須): ログイン名 — システム内で一意である必要があります
   - **Password** (必須): アカウントのパスワード
   - **Capability**: `apiKey` または `login` のいずれか一方を選択します
   - **Status**: `enable` または `disable` を選択します

[![](/img/migrated/Picture82-56c3dcc0.png)](/img/migrated/Picture82-56c3dcc0.png)

3. **Add** をクリックしてアカウントを作成します。

[![](/img/migrated/Picture83-c343b464.png)](/img/migrated/Picture83-c343b464.png)

4. ArgoCD でアカウントが作成されたことを確認します。

[![](/img/migrated/Picture84-3375cc1d.png)](/img/migrated/Picture84-3375cc1d.png)
