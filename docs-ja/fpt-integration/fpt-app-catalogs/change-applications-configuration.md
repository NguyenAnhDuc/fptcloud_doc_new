---
id: "change-applications-configuration"
title: "アプリケーション設定を変更する"
description: "デプロイ済みアプリの User Define Values を変更して設定を更新する手順。"
sidebar_label: "アプリケーション設定を変更する"
sidebar_position: 15
---

# アプリケーション設定を変更する

アプリの詳細表示画面で **User Define Values** を変更してアプリケーション設定を更新します。

1. アプリの詳細情報を表示します。
2. 詳細画面で **Reconfig** を選択します。

   [![Reconfig ボタン](/img/migrated/Picture25-1-da64c670.png)](/img/migrated/Picture25-1-da64c670.png)

3. **User Define Values** を変更します。

   [![User Define Values 変更画面](/img/migrated/Picture26-1-464bd36a.png)](/img/migrated/Picture26-1-464bd36a.png)

4. **Confirm** をクリックして Reconfig を実行し、デプロイ結果を確認します。

   [![Reconfig 結果](/img/migrated/Picture27-1-2f7ff506.png)](/img/migrated/Picture27-1-2f7ff506.png)

5. クラスター上で Reconfig 情報を確認します。

   ```bash
   helm -n cert-manager get values cert-manager
   ```

   [![Helm values 確認](/img/migrated/Picture28-1-e0ab09a2.png)](/img/migrated/Picture28-1-e0ab09a2.png)

   ```bash
   kubectl -n cert-manager get pods
   ```

   [![Pod 状態確認](/img/migrated/Picture29-1-431076fb.png)](/img/migrated/Picture29-1-431076fb.png)

   レプリカ数が設定した値に変更されます。
