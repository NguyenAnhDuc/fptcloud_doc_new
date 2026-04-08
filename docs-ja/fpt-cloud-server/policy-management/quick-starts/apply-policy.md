---
id: "apply-policy"
title: "ポリシーの適用"
description: "FPT Cloudでポリシー管理を適用するガイド。全てのIPv4ソースIPでSSHルールの作成をブロックするシナリオを例として説明します。"
sidebar_label: "ポリシーの適用"
sidebar_position: 2
---

# ポリシーの適用

**シナリオ:** ユーザーが全てのIPv4（Any）をソースIPとしてSSHルールを作成するのをブロックします。

**ステップ1:** メニューで **セキュリティグループ** を選択し、**セキュリティグループの作成** を選択します。

[![file](/img/migrated/image-1741839019222-6a605d08.png)](/img/migrated/image-1741839019222-6a605d08.png)

**ステップ2:** **セキュリティグループの作成**画面で、**ルールの追加** を選択します。

[![file](/img/migrated/image-1741839173369-c432e4e8.png)](/img/migrated/image-1741839173369-c432e4e8.png)

**ステップ3:** ルールの対応する情報を入力します。

- **タイプ**: SSH
- **ソース**: 全てのIPv4

[![file](/img/migrated/image-1741839576442-3c8ca081.png)](/img/migrated/image-1741839576442-3c8ca081.png)

**ステップ4:** **セキュリティグループの作成** をクリックします。システムはエラーを報告します。エラーメッセージ: アクションはポリシーによって禁止されています。

[![file](/img/migrated/image-1741839931024-51584130.png)](/img/migrated/image-1741839931024-51584130.png)
