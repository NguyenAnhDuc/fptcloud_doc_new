---
id: "SSO-qua-web-browser"
title: "WebブラウザでSSOログイン"
description: "FCDClientのインストール不要でWebブラウザ経由でSSOログインするガイド"
sidebar_label: "Webブラウザ経由"
sidebar_position: 6
---

# WebブラウザでSSOログイン

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

- SSOアカウント（例：Microsoftアカウント）でサインインし、対応するOTPを入力します。Authenticator（Server）へのログインが完了します。

[![WebブラウザのSSOログイン画面](/img/migrated/image-1767953411678-b06915c9.png)](/img/migrated/image-1767953411678-b06915c9.png)

---

**サービスのデフォルトURLでアクセスしている場合：**

1. 認証コードを入力します（カスタマー管理者が提供）。例：`pil783454741`。

[![認証コード入力画面](/img/migrated/image-1768028663933-f7f3275f.png)](/img/migrated/image-1768028663933-f7f3275f.png)

2. SSOアカウント（例：Microsoftアカウント）でサインインし、対応するOTPを入力します。Authenticator（Server）へのログインが完了します。

[![認証コード入力後のSSOログイン画面](/img/migrated/image-1768028737250-ddc30cb9.png)](/img/migrated/image-1768028737250-ddc30cb9.png)

## 3. バーチャルデスクトップにアクセスする

バーチャルデスクトップ一覧画面で、アクセスしたいバーチャルデスクトップを選択します。

[![Webブラウザのバーチャルデスクトップ一覧](/img/migrated/image-1767860779789-05426af5.png)](/img/migrated/image-1767860779789-05426af5.png)

求められた場合はバーチャルデスクトップのログイン情報を入力します。バーチャルデスクトップへのアクセスが完了します。
