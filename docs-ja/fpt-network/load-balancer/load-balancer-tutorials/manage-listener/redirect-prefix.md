---
id: "redirect-prefix"
title: "リダイレクトプレフィックス"
description: "FPT Cloud ロードバランサーでリダイレクトプレフィックス L7 ポリシーを設定する方法を説明します。"
sidebar_label: "リダイレクトプレフィックス"
sidebar_position: 9
---

# リダイレクトプレフィックス

**リダイレクトプレフィックス**を使用すると、リダイレクト時に宛先 URL の先頭に文字列（プレフィックス）を追加できます。これにより、リダイレクト URL を効率的に管理・構造化し、ユーザーを特定のページやコンテンツに誘導できます。

L7 ポリシーの一般的な設定については[リスナーの L7 ポリシー設定](/docs/ja/fpt-network/load-balancer/load-balancer-tutorials/manage-listener/configure-l7-policy)を参照してください。

**手順 1:** ロードバランサー一覧からロードバランサーを選択します。

**手順 2:** ロードバランサーの詳細ページで **Listener** タブを選択し、設定するリスナーをクリックします。

**手順 3:** **L7 Policy** タブを選択し、**Add Policy** をクリックします。

以下を入力します：

- **Policy name**: ポリシーの名前。
- **Policy action**: **Redirect prefix** を選択します。
- **Redirect to**: 条件に一致した場合にリクエストを転送するプレフィックス URL を入力します。
- **Position**: ポリシーの優先度。数値が小さいほど優先度が高くなります。
- **Redirect HTTP code**: 有効な値：301、302、303、307、308。

**手順 4:** **チェックアイコン**をクリックして保存します。
