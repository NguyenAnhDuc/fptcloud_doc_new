---
id: "accountpassword-qua-web-browser"
title: "WebブラウザでAccount/Passwordログイン"
description: "FCDClientのインストール不要でWebブラウザ経由でAccount/Passwordログインするガイド"
sidebar_label: "Webブラウザ経由"
sidebar_position: 10
---

# WebブラウザでAccount/Passwordログイン

FCDClientをインストールせずにバーチャルデスクトップに素早くアクセスしたいユーザー向けのガイドです。

## 1. 正しいURLでサービスのホームページを開く

有効なURL形式：

- 組織専用のFCD URL（カスタマー管理者が提供）
- 有効な認証コードを含むURL（形式：`code.domain`）。例：`pil783454741.pilotfcd.online`
- サービスのデフォルトURL

:::note
URLはカスタマー管理者から提供されます。
:::

Webブラウザでサービスリンクを開き、**Access through Web Browser** を選択します。

[![FPT Cloud Desktopアクセス方法選択画面](/img/migrated/image-1767859575680-f5ed3897.png)](/img/migrated/image-1767859575680-f5ed3897.png)

## 2. Authenticator（Server）にサインインする

**有効な認証コードを含むURLでアクセスしている場合**（例：`pil783454741.pilotfcd.online`）：

- ユーザー名とパスワードを入力します。Authenticator（Server）へのログインが完了します。

[![ユーザー名・パスワード入力画面](/img/migrated/image-1767956660879-1796a9b2.png)](/img/migrated/image-1767956660879-1796a9b2.png)

---

**サービスのデフォルトURLでアクセスしている場合：**

1. 認証コードを入力します（カスタマー管理者が提供）。例：`pil783454741`。

[![認証コード入力画面](/img/migrated/image-1767863050735-fee7cee6.png)](/img/migrated/image-1767863050735-fee7cee6.png)

2. サインインしたいサーバーのユーザー名とパスワードを入力します。

[![認証コード入力後のユーザー名・パスワード入力画面](/img/migrated/image-1767955827414-9e7265a7.png)](/img/migrated/image-1767955827414-9e7265a7.png)

:::note
**二段階認証のQRコードが表示された場合：**

1. App StoreまたはGoogle Playから **Microsoft Authenticator** アプリをダウンロードしてインストールします。

[![二段階認証QRコード画面](/img/migrated/image-1767955899835-0408f00d.png)](/img/migrated/image-1767955899835-0408f00d.png)

2. Authenticatorアプリを開いてQRコードをスキャンします。

[![Microsoft AuthenticatorでQRコードをスキャン](/img/migrated/image-1767955938951-3aac0b75.png)](/img/migrated/image-1767955938951-3aac0b75.png)

3. アプリが同期してOTPを表示します。OTPを入力して **Submit** をクリックします。Authenticator（Server）へのログインが完了します。
:::

## 3. バーチャルデスクトップにアクセスする

バーチャルデスクトップ一覧画面で、アクセスしたいバーチャルデスクトップを選択します。

[![Webブラウザのバーチャルデスクトップ一覧](/img/migrated/image-1767860779789-05426af5.png)](/img/migrated/image-1767860779789-05426af5.png)

求められた場合はバーチャルデスクトップのログイン情報を入力します。バーチャルデスクトップへのアクセスが完了します。
