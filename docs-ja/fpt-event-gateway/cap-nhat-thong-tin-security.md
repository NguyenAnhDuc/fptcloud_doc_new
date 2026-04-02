---
id: "cap-nhat-thong-tin-security"
title: "セキュリティ情報の更新"
description: "Securityの情報を更新するには、以下の手順に従ってください。"
sidebar_label: "セキュリティ情報の更新"
sidebar_position: 9
---

# セキュリティ情報の更新

**Security** の情報を更新するには、以下の手順に従ってください。

**ステップ1:** メニューバーで **Integration** > **Event Gateway** を選択します。

**ステップ2:** **Event Gateway** リストで **Event Gateway** を選択 > **Security** タブを選択します。

**ステップ3:** **Security** リストで更新したい **Security** エントリを選択 > **Action** をクリック > **Edit** を選択します。

**ステップ4:** **Update JWT Auth** ポップアップで以下の情報を更新します。

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

**ステップ5:** **Update** をクリックして **JWT Auth** の情報を保存します。

[![JWT Auth更新フォーム](/img/migrated/image1e-b4866c34.png)](/img/migrated/image1e-b4866c34.png)
