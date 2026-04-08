---
id: "SSO-qua-web-browser"
title: "Webブラウザ経由でSSO"
sidebar_label: "Webブラウザ経由でSSO"
sidebar_position: 3
---

Web ブラウザからのアクセス

FCDClient をインストールせずに仮想マシンに素早くアクセスしたいユーザー向けです。

**1. 適切な URL でサービスのホームページにアクセスする**

有効な URL の形式:

  * FCD 用の企業/組織専用 URL（カスタマー管理者がユーザーに提供）
  * 有効な authentication code が含まれている URL（形式: code.domain）。例: pil783454741.pilotfcd.online
  * サービスのデフォルト URL


**この URL 情報はカスタマー管理者が提供します**

Web ブラウザでサービスリンクを開き、**Access through FPT Cloud Desktop Client** を選択します。

![file](/img/migrated/docs-ja-fpt-cloud-desktop/SSO-qua-web-browser/img-001.png)

**2. 適切な Authenticator（Server）にログインする**

1. ユーザーが **有効な authentication code が含まれている URL でアクセスする場合**（有効な code を含む URL の例: pil783454741.pilotfcd.online）:

  * 対応する SSO アカウントでログインするだけです（例: Microsoft アカウントでログイン）。SSO に対応した OTP を入力します => Authenticator（Server）へのログイン成功。 ![file](/img/migrated/docs-ja-fpt-cloud-desktop/SSO-qua-web-browser/img-002.png)


2. ユーザーが **サービスのデフォルト URL からアクセスする場合:**

  * Authentication Code を入力します（カスタマー管理者が管理する情報）。（有効な Authentication Code の例: pil783454741） ![file](/img/migrated/docs-ja-fpt-cloud-desktop/SSO-qua-web-browser/img-003.png)

  * SSO アカウントでログインします（例: Microsoft アカウントでログイン）。SSO に対応した OTP を入力します => Authenticator（Server）へのログイン成功。


![file](/img/migrated/docs-ja-fpt-cloud-desktop/SSO-qua-web-browser/img-004.png)

**3: 仮想マシンへのアクセス**

仮想マシンの一覧画面で、アクセスしたい仮想マシンを選択します。

![file](/img/migrated/docs-ja-fpt-cloud-desktop/SSO-qua-web-browser/img-005.png)

システムに求められた場合は仮想マシンのログイン情報を入力します => 仮想マシンへのアクセス成功。
