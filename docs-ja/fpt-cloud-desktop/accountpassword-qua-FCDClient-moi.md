---
id: "accountpassword-qua-FCDClient-moi"
title: "新しいFCDClient経由でAccount/Passwordログイン"
description: "新しいFCDClient経由でAccount/Passwordログインするガイド - 推奨アクセス方法"
sidebar_label: "新しいFCDClient経由（推奨）"
sidebar_position: 9
---

# 新しいFCDClient経由でAccount/Passwordログイン

アプリケーションを通じて直接操作できる、最も安定した機能完備の体験のためのガイドです。

:::note
ステップ1（インストール）は最初の1回のみ実施します。2回目以降はFCDClientアプリから直接接続できます。
:::

## ステップ1：新しいFCDClientをインストールする

### 1. 正しいURLでサービスのホームページを開く

有効なURL形式：

- 組織専用のFCD URL（カスタマー管理者が提供）
- 有効な認証コードを含むURL（形式：`code.domain`）。例：`pil783454741.pilotfcd.online`
- サービスのデフォルトURL

:::note
URLはカスタマー管理者から提供されます。
:::

Webブラウザでサービスリンクを開き、**Access through FPT Cloud Desktop Client** を選択します。

[![FPT Cloud Desktopアクセス方法選択画面](/img/migrated/image-1767859575680-f5ed3897.png)](/img/migrated/image-1767859575680-f5ed3897.png)

### 2. FCDClientをダウンロード、インストール、起動する

システムがお使いのOSに対応した最新のFCDClientを自動的にダウンロードします。

ブラウザにダウンロード警告が表示された場合：

[![ブラウザのダウンロード警告](/img/migrated/image-1767859694792-be1aa0bc.png)](/img/migrated/image-1767859694792-be1aa0bc.png)

三点メニューをクリック > **Keep** > **Keep anyway** を選択します。

[![ダウンロードファイルの保持確認](/img/migrated/image-1767859804851-972a2244.png)](/img/migrated/image-1767859804851-972a2244.png)

ダウンロード完了後、**Open file** を選択してアプリケーションをインストールします。

[![FCDClientインストーラーを開く](/img/migrated/image-1767859882851-7f4cfd99.png)](/img/migrated/image-1767859882851-7f4cfd99.png)

**Windowsの場合：**「Windows protected your PC」ポップアップが表示されたら、**More info** をクリックし、次に **Run anyway** をクリックします。

**macOSの場合：**

1. インストーラーを **Applications** フォルダにドラッグします
2. インストーラーを開き、**Open** をクリックして確認します
3. **Don't warn me when opening applications on this disk image** にチェックを入れます

[![macOSでのFCDClientインストール](/img/migrated/image-1767859982299-d48afcb4.png)](/img/migrated/image-1767859982299-d48afcb4.png)

FCDClientのインストールが完了しました。FCDClientアプリケーションを起動します。

:::note
**macOSの場合：** [Mac App Store](https://apps.apple.com/us/app/windows-app/id1295203466?mt=12) からMicrosoft Windows Appも追加でインストールする必要があります。

[![macOSでのMicrosoft Windows Appインストール](/img/migrated/image-1767860277298-7ec9d9f6.png)](/img/migrated/image-1767860277298-7ec9d9f6.png)

FCDClientに関する警告が表示された場合は、**Settings > Privacy & Security > Open Anyway** でFCDClientを許可します。
:::

## ステップ2：新しいFCDClient経由でバーチャルデスクトップにアクセスする

### 3. FCDClientを開いてAuthenticator（Server）にサインインする

- **FCDClientにサーバー情報がすでに登録されている場合**（以前に入力済み、または有効な認証コードを含むURLからダウンロードした場合）：**Connect Server** を選択し、ステップ4に従ってアカウント情報を入力します。

[![サーバー情報が登録済みのFCDClient](/img/migrated/image-1767952725970-cec7271f.png)](/img/migrated/image-1767952725970-cec7271f.png)

- **FCDClientにサーバー情報がない場合：** **New Server** を選択し、有効なURLまたはDomainを入力します（カスタマー管理者が提供）。

  例：URL `pil783454741.pilotfcd.online` をそのまま入力するか、**または** ドメイン `pilotfcd.online` を先に入力し、次に認証コード `pil783454741` を入力します。

[![FCDClientへの新しいサーバーの追加](/img/migrated/image-1767860539108-fc0555bc.png)](/img/migrated/image-1767860539108-fc0555bc.png)

### 4. ユーザー名とパスワードを入力する

サインインしたいサーバーのユーザー名とパスワードを入力します。

[![ユーザー名・パスワード入力画面](/img/migrated/image-1767955827414-9e7265a7.png)](/img/migrated/image-1767955827414-9e7265a7.png)

:::note
**二段階認証のQRコードが表示された場合：**

1. App StoreまたはGoogle Playから **Microsoft Authenticator** アプリをダウンロードしてインストールします。

[![二段階認証QRコード画面](/img/migrated/image-1767955899835-0408f00d.png)](/img/migrated/image-1767955899835-0408f00d.png)

2. Authenticatorアプリを開いてQRコードをスキャンします。

[![Microsoft AuthenticatorでQRコードをスキャン](/img/migrated/image-1767955938951-3aac0b75.png)](/img/migrated/image-1767955938951-3aac0b75.png)

3. アプリが同期してOTPを表示します。OTPを入力して **Submit** をクリックします。Authenticator（Server）へのログインが完了します。
:::

### 5. バーチャルデスクトップにアクセスする

バーチャルデスクトップ一覧画面で、アクセスしたいバーチャルデスクトップを選択します。

[![FCDClientのバーチャルデスクトップ一覧](/img/migrated/image-1767860779789-05426af5.png)](/img/migrated/image-1767860779789-05426af5.png)

求められた場合はバーチャルデスクトップのログイン情報を入力します。バーチャルデスクトップへのアクセスが完了します。

---

## 新しいFCDClientのその他の機能

- **Auto-connect Server：** FCDClientを起動したときに自動的にAuthenticatorに接続します（アプリを直接起動した場合のみ適用。ホームページの **Access through FCDClient** からのアクセスでは未対応）
- **Settings：** インストール済みFCDClientの情報を表示します
- **New Server：** 新しいAuthenticator Serverを追加します
