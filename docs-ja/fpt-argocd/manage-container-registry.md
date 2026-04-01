---
id: "manage-container-registry"
title: "Container registryの管理"
description: "Image UpdaterのContainer registry設定を追加、更新、削除するガイド"
sidebar_label: "Container registryの管理"
sidebar_position: 12
---

# Container registryの管理

## A. 新しいcontainer registryを追加します

1. **Image Updater** > **Container Registry** > **Add Container Registry**画面に移動します。

[![](/img/migrated/Picture27-5-327acd35.png)](/img/migrated/Picture27-5-327acd35.png)

2. Container registry情報を入力します：
   - **Name**: container registry名、例：`My Custom Registry`
   - **Prefix**: registryのprefix、DNSと一致し一意である必要があります、例：`docker.io`
   - **API URL**: docker registry API URL (http/https)、例：`https://registry-1.docker.io`
   - **Default namespace**: デフォルトnamespace（特にDocker Hub向け）、例：`library`
   - **Credentials**: registryへの認証に使用、例：`pullsecret:argocd-[argocd-id]/dockerhub-secret`
   - **Set Default**: `true`の場合、このregistryがデフォルトregistryになります
   - **Set insecure**: registryのTLS検証を無効にするために使用

[![](/img/migrated/Picture29-4-ff1fe795.png)](/img/migrated/Picture29-4-ff1fe795.png)

[![](/img/migrated/Picture1-6-f3ce82fa.png)](/img/migrated/Picture1-6-f3ce82fa.png)

3. 追加後の結果：

[![](/img/migrated/Picture30-4-214ebb11.png)](/img/migrated/Picture30-4-214ebb11.png)

## B. Container registryを更新します

1. **Image Updater**画面で、更新する**Container Registry**を選択 > **Edit**をクリックします。

[![](/img/migrated/Picture31-4-35d409d0.png)](/img/migrated/Picture31-4-35d409d0.png)

2. Name、Prefix、Set Default、Insecureなどの設定パラメータを編集します。

:::note
デフォルトに設定できるcontainer registryは1つだけです。
:::

[![](/img/migrated/Picture32-4-9f6e263c.png)](/img/migrated/Picture32-4-9f6e263c.png)

3. 更新後の結果：

[![](/img/migrated/Picture33-4-d0347843.png)](/img/migrated/Picture33-4-d0347843.png)

## C. Container registryを削除します

:::danger
この操作は元に戻せません。
:::

1. **Image Updater** > **Container Registry**画面で、削除するregistryを選択します。

[![](/img/migrated/Picture34-4-b862bf01.png)](/img/migrated/Picture34-4-b862bf01.png)

2. 確認テキストを入力して確認します。

[![](/img/migrated/Picture35-4-1e53ea64.png)](/img/migrated/Picture35-4-1e53ea64.png)

3. 削除後の結果：

[![](/img/migrated/Picture36-4-b81d7d02.png)](/img/migrated/Picture36-4-b81d7d02.png)
