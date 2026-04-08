---
id: "accountpassword-qua-FCDClient-cu"
title: "旧FCDClient経由でAccount/Passwordログイン"
description: "デバイスにインストール済みの旧FCDClient経由でAccount/Passwordログインするガイド"
sidebar_label: "旧FCDClient経由"
sidebar_position: 4
pagination_next: null
---

# 旧FCDClient経由でAccount/Passwordログイン

以前インストールした旧FCDClientをまだ使用しているユーザー向けのガイドです。

:::warning
PCおよびノートパソコンでの旧FCDClientによるアクセスのサポートは**2026年3月31日以降**に終了します。その他のデバイスからのアクセスは別途通知があるまで引き続きサポートされます。業務の中断を避けるため、新しいFCDClientへの移行を早めに行ってください。
:::

## 1. 正しいURLでサービスのホームページを開く

有効なURL形式：

- 組織専用のFCD URL（カスタマー管理者が提供）
- 有効な認証コードを含むURL（形式：`code.domain`）。例：`pil783454741.pilotfcd.online`
- サービスのデフォルトURL

:::note
URLはカスタマー管理者から提供されます。
:::

Webブラウザでサービスリンクを開き、**Access through FPT Cloud Desktop Client** を選択します。

[![FPT Cloud Desktopアクセス方法選択画面](/img/migrated/image-1767859575680-f5ed3897.png)](/img/migrated/image-1767859575680-f5ed3897.png)

## 2. Authenticator（Server）にサインインする

**有効な認証コードを含むURLでアクセスしている場合**（例：`pil783454741.pilotfcd.online`）：

- ユーザー名とパスワードを入力します。Authenticator（Server）へのログインが完了します。

[![ユーザー名・パスワード入力画面](/img/migrated/image-1767956660879-1796a9b2.png)](/img/migrated/image-1767956660879-1796a9b2.png)

---

**サービスのデフォルトURLからFCDClientをダウンロードした場合：**

1. 認証コードを入力します（カスタマー管理者が提供）。例：`pil783454741`。

[![認証コード入力画面](/img/migrated/image-1767863050735-fee7cee6.png)](/img/migrated/image-1767863050735-fee7cee6.png)

2. サインインしたいサーバーのユーザー名とパスワードを入力します。

[![ユーザー名・パスワード入力画面](/img/migrated/image-1767955827414-9e7265a7.png)](/img/migrated/image-1767955827414-9e7265a7.png)

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

:::note
このステップでは、FCDClient経由でアクセスするオプションを選択します。
:::

旧FCDClientがインストールされている場合：システムが旧FCDClientを開いてバーチャルデスクトップにアクセスします。求められた場合はバーチャルデスクトップのログイン情報を入力します。バーチャルデスクトップへのアクセスが完了します。

[![旧FCDClient経由でのバーチャルデスクトップアクセス](/img/migrated/image-1767954262885-f3b50a93.png)](/img/migrated/image-1767954262885-f3b50a93.png)
