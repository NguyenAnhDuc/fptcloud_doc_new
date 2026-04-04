---
id: "quan-ly-retention-run"
title: "Retention run を管理する"
description: "Retention rule の実行履歴を管理し、手動実行・dry run・中止・ログ確認を行う。"
sidebar_label: "Retention run を管理する"
sidebar_position: "17"
---

# Retention run を管理する

Retention run は retention rule の実行履歴です。FPT Cloud では、手動実行、事前確認のための dry run、実行中の run の中止、詳細ログの確認が行えます。

## 手動実行（Run now）

1. **FPT Portal** メニューで **Container Registry** > **Policy** > **RUN NOW** を選択します。

   [![RUN NOW ボタン](/img/migrated/Picture48-1-1310d2d8.png)](/img/migrated/Picture48-1-1310d2d8.png)

2. **OK** をクリックして retention の実行を確認します。

   [![RUN NOW の確認](/img/migrated/Picture49-1-ad9995a4.png)](/img/migrated/Picture49-1-ad9995a4.png)

3. 実行後の結果を確認します。

   [![Retention 実行後の結果](/img/migrated/Picture50-1-67a91903.png)](/img/migrated/Picture50-1-67a91903.png)

## Dry run

Dry run は image を実際に削除せずにルールを確認し、適用前に設定を検証できます。

1. **FPT Portal** メニューで **Container Registry** > **Policy** > **DRY RUN** を選択します。

   [![DRY RUN ボタン](/img/migrated/Picture51-1-6b16d900.png)](/img/migrated/Picture51-1-6b16d900.png)

2. Dry run の結果を確認します。実際には image は削除されません。

   [![DRY RUN 後の結果](/img/migrated/Picture52-1-b8c3c76a.png)](/img/migrated/Picture52-1-b8c3c76a.png)

## 実行中の retention run を中止する（Abort）

1. **FPT Portal** メニューで **Container Registry** > **Policy** > **Running** 状態の retention run を選択 > **ABORT** を選択します。

   [![実行中の retention の ABORT ボタン](/img/migrated/Picture53-1-aedc2cf2.png)](/img/migrated/Picture53-1-aedc2cf2.png)

2. **OK** をクリックして中止を確認します。

   [![Abort の確認](/img/migrated/Picture54-a4f9fc84.png)](/img/migrated/Picture54-a4f9fc84.png)

3. 中止後の結果を確認します。

   [![Abort 後の結果](/img/migrated/Picture55-6ea6d35a.png)](/img/migrated/Picture55-6ea6d35a.png)

## Retention run の一覧を表示する

**FPT Portal** メニューで **Container Registry** > **Policy** を選択してすべての実行履歴を表示します。

[![Retention run の一覧](/img/migrated/Picture56-d461b01d.png)](/img/migrated/Picture56-d461b01d.png)

## Retention run のログを表示する

1. **FPT Portal** メニューで **Container Registry** > **Policy** > retention run をクリックして詳細を表示します。

   [![Retention run の詳細](/img/migrated/Picture57-cd40bdbd.png)](/img/migrated/Picture57-cd40bdbd.png)

2. その実行内の各 repository のログを確認します。

   [![Retention run の詳細ログ](/img/migrated/Picture58-6d27606a.png)](/img/migrated/Picture58-6d27606a.png)
