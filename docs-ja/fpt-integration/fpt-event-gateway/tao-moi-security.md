---
id: "tao-moi-security"
title: "セキュリティの作成"
description: "新しいSecurityを作成するには、以下の手順に従ってください。"
sidebar_label: "セキュリティの作成"
sidebar_position: 8
---

# セキュリティの作成

新しい **Security** を作成するには、以下の手順に従ってください。

**ステップ1:** メニューバーで **Integration** > **Event Gateway** を選択します。

**ステップ2:** **Event Gateway** リストで **Event Gateway** を選択 > **Security** タブを選択します。

**ステップ3:** **Security** リストで **Create** をクリック > **New JWT Auth** ポップアップが表示されます。

**ステップ4:** **New JWT Auth** ポップアップで以下の情報を入力します。

- **Name**（必須）：JWT auth名。
  - a～z、A～Z、ハイフン（-）、アンダースコア（_）、数字を使用できます。先頭は英字。最大30文字。
- **Claim key：** claim keyのリスト：
  - Issuer
  - Issued At
  - Expiration
  - Audience
  - Subject
  - Scope
    - デフォルトのclaim keyは「Issuer」です。
    - JWT Authが有効な場合、インターフェースはデフォルトで1つのclaim key-valueペアを表示します。
    - デフォルトで2つの入力（IssuerとAudience）がレンダリングされ、両方必須です。
- **Value：** 各claim keyに対応する値（ある場合）。
  - 最大100文字。
- **Public key**（必須）：PEM形式の公開鍵文字列。
  - `-----BEGIN PUBLIC KEY-----` で始まり、PEM標準に準拠して終わる必要があります。

**ステップ5:** **Create** をクリックして新しい **JWT Auth** を作成します。

[![JWT Auth作成フォーム](/img/migrated/image1d-e27479a8.png)](/img/migrated/image1d-e27479a8.png)
